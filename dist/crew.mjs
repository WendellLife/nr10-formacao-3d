import {canMove,done,currentTarget} from './rules.mjs';
import {W,rosters,meetingPoint} from './layout.mjs';
// Fase de cada pessoa da equipe conforme o módulo e o andamento do jogo.
// Devolve {key,label,tone,pose,at,angle,mount}: "at" é para onde a pessoa caminha; "mount" põe a pessoa no cesto aéreo.
// tone: info (rotina), alerta (comportamento inseguro ou dúvida), perigo (vítima), ok (situação resolvida).
const POSE={inspect:'inspect',repair:'repair',push:'push',phone:'phone',cones:'cones',none:'none'};
export function phaseOf(module,name,s){
 const r=rosters[module][name],d=id=>done(s,id),cur=currentTarget(s)?.id,home={x:r.x,z:r.z};
 const base={key:'work',label:r.task,tone:'info',pose:POSE[r.kind]||'none',at:home,angle:r.angle};
 const P=(key,label,tone,pose,at=home,angle=r.angle,extra={})=>({key,label,tone,pose,at,angle,...extra});
 if(s.finished)return P('fim',module==='sep'?'Ramal liberado':'Dia encerrado','ok','none',meetingPointOf(name),0);
 if(module==='formacao'){
  if(name==='Jair'){
   if(cur==='choque')return P('choque','Preso à carcaça energizada!','perigo','reach');
   if(cur==='rcp')return P('caido','Não responde • não respira normalmente','perigo','victim');
   if(d('rcp'))return P('salvo','Respirando • aguardando o SAMU','ok','seated');
   return base;}
  if(name==='Paula'){
   if(cur==='choque')return P('dea','Correndo com o DEA','alerta','none',{x:15.4,z:6.7},-Math.PI/2);
   if(cur==='rcp'||d('rcp'))return P('dea','Com o DEA ao lado do Jair','ok','crouch',{x:15.4,z:6.7},-Math.PI/2);
   return base;}
  if(name==='Bruno'){
   if(cur==='choque'||cur==='rcp')return P('192','Chamando o 192 e a brigada','alerta','phone',{x:12.4,z:7.4},Math.PI/2);
   if(d('rcp'))return P('portaria','Orientando o SAMU na portaria','ok','phone',{x:12.4,z:7.4},Math.PI/2);
   return base;}
  if(name==='Lúcia'){
   if(cur==='reenergizar')return P('fora','Fora da zona controlada','ok','none',{x:5.9,z:-4.5},Math.PI);
   if(d('reenergizar'))return P('ok','Bomba de volta à operação','ok','inspect',{x:7.7,z:-9.1},Math.PI);
   if(d('sinalizar'))return P('troca','Trocando o contator (circuito liberado)','ok','repair',{x:7.7,z:-9.1},Math.PI);
   if(d('seccionar'))return P('espera','Aguardando a liberação do circuito','info','none',{x:7.7,z:-8.2},Math.PI);
   return base;}
  if(name==='Rogério'){
   if(cur==='reenergizar')return P('fora','Fora da zona controlada','ok','none',{x:4.1,z:-4.5},Math.PI);
   if(d('bloquear')&&!d('reenergizar'))return P('cadeado','Cadeado pessoal no CCM-2','info','inspect');
   return base;}
  return base;
 }
 return base;
}
function meetingPointOf(name){const i=['Helena','Rogério','Lúcia','Bruno','Paula','Jair'].indexOf(name);return {x:meetingPoint.x-2.5+i*1.1,z:meetingPoint.z};}
// Busca em grade (BFS com diagonais) entre dois pontos do pátio, respeitando os obstáculos.
const SIZE=.4,COLS=Math.ceil((W.maxX-W.minX)/SIZE),ROWS=Math.ceil((W.maxZ-W.minZ)/SIZE);
const pointOf=i=>({x:W.minX+(i%COLS)*SIZE,z:W.minZ+Math.floor(i/COLS)*SIZE});
export function walkableGrid(obstacles){const a=new Uint8Array(COLS*ROWS);for(let i=0;i<a.length;i++){const p=pointOf(i);a[i]=canMove(p.x,p.z,obstacles)?1:0;}return a;}
export function findRoute(start,goal,obstacles,grid=walkableGrid(obstacles)){
 const key=(x,z)=>z*COLS+x;
 const nearest=p=>{let best=-1,dist=Infinity;for(let i=0;i<grid.length;i++){if(!grid[i])continue;const q=pointOf(i),d=(p.x-q.x)**2+(p.z-q.z)**2;if(d<dist){dist=d;best=i;}}return best;};
 const from=nearest(start),to=nearest(goal);if(from<0||to<0)return [];
 const previous=new Int32Array(grid.length).fill(-1),queue=[from];previous[from]=from;
 for(let head=0;head<queue.length&&previous[to]<0;head++){const id=queue[head],x=id%COLS,z=Math.floor(id/COLS);
  for(const [dx,dz] of [[1,0],[-1,0],[0,1],[0,-1],[1,1],[1,-1],[-1,1],[-1,-1]]){const nx=x+dx,nz=z+dz;if(nx<0||nx>=COLS||nz<0||nz>=ROWS)continue;const next=key(nx,nz);if(!grid[next]||previous[next]>=0)continue;if(dx&&dz&&(!grid[key(x+dx,z)]||!grid[key(x,z+dz)]))continue;previous[next]=id;queue.push(next);}}
 if(previous[to]<0)return [];const route=[];for(let id=to;id!==from;id=previous[id])route.push(pointOf(id));route.push(pointOf(from));return route.reverse();
}
