(function(){let e=document.createElement(`link`).relList;if(e&&e.supports&&e.supports(`modulepreload`))return;for(let e of document.querySelectorAll(`link[rel="modulepreload"]`))n(e);new MutationObserver(e=>{for(let t of e)if(t.type===`childList`)for(let e of t.addedNodes)e.tagName===`LINK`&&e.rel===`modulepreload`&&n(e)}).observe(document,{childList:!0,subtree:!0});function t(e){let t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin===`use-credentials`?t.credentials=`include`:e.crossOrigin===`anonymous`?t.credentials=`omit`:t.credentials=`same-origin`,t}function n(e){if(e.ep)return;e.ep=!0;let n=t(e);fetch(e.href,n)}})();var e,t,n,r,i,a,o,s,c,l=`attached`,u=1e3,d=1001,f=1002,p=1003,m=1004,h=1005,g=1006,_=1007,v=1008,y=1009,b=1010,x=1011,S=1012,C=1013,w=1014,T=1015,E=1016,D=1017,ee=1018,te=1020,O=35902,ne=35899,re=1021,k=1022,ie=1023,ae=1026,oe=1027,se=1028,ce=1029,le=1030,ue=1031,de=1033,fe=33776,pe=33777,me=33778,he=33779,ge=35840,_e=35841,ve=35842,ye=35843,be=36196,xe=37492,Se=37496,Ce=37488,we=37489,Te=37490,Ee=37491,De=37808,Oe=37809,ke=37810,Ae=37811,je=37812,Me=37813,Ne=37814,Pe=37815,Fe=37816,A=37817,Ie=37818,Le=37819,Re=37820,j=37821,ze=36492,M=36494,Be=36495,Ve=36283,He=36284,Ue=36285,We=36286,Ge=2300,Ke=2301,qe=2302,Je=2303,Ye=2400,Xe=2401,Ze=2402,Qe=2500,$e=3200,et=`srgb`,tt=`srgb-linear`,nt=`linear`,rt=`srgb`,it=7680,at=35044,ot=2e3;function st(e){for(let t=e.length-1;t>=0;--t)if(e[t]>=65535)return!0;return!1}function ct(e){return ArrayBuffer.isView(e)&&!(e instanceof DataView)}function lt(e){return document.createElementNS(`http://www.w3.org/1999/xhtml`,e)}function ut(){let e=lt(`canvas`);return e.style.display=`block`,e}var dt={},ft=null;function pt(...e){let t=`THREE.`+e.shift();ft?ft(`log`,t,...e):console.log(t,...e)}function mt(e){let t=e[0];if(typeof t==`string`&&t.startsWith(`TSL:`)){let t=e[1];t&&t.isStackTrace?e[0]+=` `+t.getLocation():e[1]=`Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.`}return e}function N(...e){e=mt(e);let t=`THREE.`+e.shift();if(ft)ft(`warn`,t,...e);else{let n=e[0];n&&n.isStackTrace?console.warn(n.getError(t)):console.warn(t,...e)}}function P(...e){e=mt(e);let t=`THREE.`+e.shift();if(ft)ft(`error`,t,...e);else{let n=e[0];n&&n.isStackTrace?console.error(n.getError(t)):console.error(t,...e)}}function ht(...e){let t=e.join(` `);t in dt||(dt[t]=!0,N(...e))}function gt(e,t,n){return new Promise(function(r,i){function a(){switch(e.clientWaitSync(t,e.SYNC_FLUSH_COMMANDS_BIT,0)){case e.WAIT_FAILED:i();break;case e.TIMEOUT_EXPIRED:setTimeout(a,n);break;default:r()}}setTimeout(a,n)})}var _t={0:1,2:6,4:7,3:5,1:0,6:2,7:4,5:3},vt=class{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});let n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){let n=this._listeners;return n===void 0?!1:n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){let n=this._listeners;if(n===void 0)return;let r=n[e];if(r!==void 0){let e=r.indexOf(t);e!==-1&&r.splice(e,1)}}dispatchEvent(e){let t=this._listeners;if(t===void 0)return;let n=t[e.type];if(n!==void 0){e.target=this;let t=n.slice(0);for(let n=0,r=t.length;n<r;n++)t[n].call(this,e);e.target=null}}},yt=`00.01.02.03.04.05.06.07.08.09.0a.0b.0c.0d.0e.0f.10.11.12.13.14.15.16.17.18.19.1a.1b.1c.1d.1e.1f.20.21.22.23.24.25.26.27.28.29.2a.2b.2c.2d.2e.2f.30.31.32.33.34.35.36.37.38.39.3a.3b.3c.3d.3e.3f.40.41.42.43.44.45.46.47.48.49.4a.4b.4c.4d.4e.4f.50.51.52.53.54.55.56.57.58.59.5a.5b.5c.5d.5e.5f.60.61.62.63.64.65.66.67.68.69.6a.6b.6c.6d.6e.6f.70.71.72.73.74.75.76.77.78.79.7a.7b.7c.7d.7e.7f.80.81.82.83.84.85.86.87.88.89.8a.8b.8c.8d.8e.8f.90.91.92.93.94.95.96.97.98.99.9a.9b.9c.9d.9e.9f.a0.a1.a2.a3.a4.a5.a6.a7.a8.a9.aa.ab.ac.ad.ae.af.b0.b1.b2.b3.b4.b5.b6.b7.b8.b9.ba.bb.bc.bd.be.bf.c0.c1.c2.c3.c4.c5.c6.c7.c8.c9.ca.cb.cc.cd.ce.cf.d0.d1.d2.d3.d4.d5.d6.d7.d8.d9.da.db.dc.dd.de.df.e0.e1.e2.e3.e4.e5.e6.e7.e8.e9.ea.eb.ec.ed.ee.ef.f0.f1.f2.f3.f4.f5.f6.f7.f8.f9.fa.fb.fc.fd.fe.ff`.split(`.`),bt=1234567,xt=Math.PI/180,St=180/Math.PI;function Ct(){let e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0,r=Math.random()*4294967295|0;return(yt[e&255]+yt[e>>8&255]+yt[e>>16&255]+yt[e>>24&255]+`-`+yt[t&255]+yt[t>>8&255]+`-`+yt[t>>16&15|64]+yt[t>>24&255]+`-`+yt[n&63|128]+yt[n>>8&255]+`-`+yt[n>>16&255]+yt[n>>24&255]+yt[r&255]+yt[r>>8&255]+yt[r>>16&255]+yt[r>>24&255]).toLowerCase()}function F(e,t,n){return Math.max(t,Math.min(n,e))}function wt(e,t){return(e%t+t)%t}function Tt(e,t,n,r,i){return r+(e-t)*(i-r)/(n-t)}function Et(e,t,n){return e===t?0:(n-e)/(t-e)}function Dt(e,t,n){return(1-n)*e+n*t}function Ot(e,t,n,r){return Dt(e,t,1-Math.exp(-n*r))}function kt(e,t=1){return t-Math.abs(wt(e,t*2)-t)}function At(e,t,n){return e<=t?0:e>=n?1:(e=(e-t)/(n-t),e*e*(3-2*e))}function jt(e,t,n){return e<=t?0:e>=n?1:(e=(e-t)/(n-t),e*e*e*(e*(e*6-15)+10))}function Mt(e,t){return e+Math.floor(Math.random()*(t-e+1))}function Nt(e,t){return e+Math.random()*(t-e)}function Pt(e){return e*(.5-Math.random())}function Ft(e){e!==void 0&&(bt=e);let t=bt+=1831565813;return t=Math.imul(t^t>>>15,t|1),t^=t+Math.imul(t^t>>>7,t|61),((t^t>>>14)>>>0)/4294967296}function It(e){return e*xt}function Lt(e){return e*St}function Rt(e){return(e&e-1)==0&&e!==0}function zt(e){return 2**Math.ceil(Math.log(e)/Math.LN2)}function Bt(e){return 2**Math.floor(Math.log(e)/Math.LN2)}function Vt(e,t,n,r,i){let a=Math.cos,o=Math.sin,s=a(n/2),c=o(n/2),l=a((t+r)/2),u=o((t+r)/2),d=a((t-r)/2),f=o((t-r)/2),p=a((r-t)/2),m=o((r-t)/2);switch(i){case`XYX`:e.set(s*u,c*d,c*f,s*l);break;case`YZY`:e.set(c*f,s*u,c*d,s*l);break;case`ZXZ`:e.set(c*d,c*f,s*u,s*l);break;case`XZX`:e.set(s*u,c*m,c*p,s*l);break;case`YXY`:e.set(c*p,s*u,c*m,s*l);break;case`ZYZ`:e.set(c*m,c*p,s*u,s*l);break;default:N(`MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: `+i)}}function Ht(e,t){switch(t.constructor){case Float32Array:return e;case Uint32Array:return e/4294967295;case Uint16Array:return e/65535;case Uint8Array:return e/255;case Int32Array:return Math.max(e/2147483647,-1);case Int16Array:return Math.max(e/32767,-1);case Int8Array:return Math.max(e/127,-1);default:throw Error(`Invalid component type.`)}}function Ut(e,t){switch(t.constructor){case Float32Array:return e;case Uint32Array:return Math.round(e*4294967295);case Uint16Array:return Math.round(e*65535);case Uint8Array:return Math.round(e*255);case Int32Array:return Math.round(e*2147483647);case Int16Array:return Math.round(e*32767);case Int8Array:return Math.round(e*127);default:throw Error(`Invalid component type.`)}}var Wt={DEG2RAD:xt,RAD2DEG:St,generateUUID:Ct,clamp:F,euclideanModulo:wt,mapLinear:Tt,inverseLerp:Et,lerp:Dt,damp:Ot,pingpong:kt,smoothstep:At,smootherstep:jt,randInt:Mt,randFloat:Nt,randFloatSpread:Pt,seededRandom:Ft,degToRad:It,radToDeg:Lt,isPowerOfTwo:Rt,ceilPowerOfTwo:zt,floorPowerOfTwo:Bt,setQuaternionFromProperEuler:Vt,normalize:Ut,denormalize:Ht};o=Symbol.iterator;var I=class{constructor(e=0,t=0){this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw Error(`index is out of range: `+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw Error(`index is out of range: `+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){let t=this.x,n=this.y,r=e.elements;return this.x=r[0]*t+r[3]*n+r[6],this.y=r[1]*t+r[4]*n+r[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=F(this.x,e.x,t.x),this.y=F(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=F(this.x,e,t),this.y=F(this.y,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(F(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let n=this.dot(e)/t;return Math.acos(F(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){let n=Math.cos(t),r=Math.sin(t),i=this.x-e.x,a=this.y-e.y;return this.x=i*n-a*r+e.x,this.y=i*r+a*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[o](){yield this.x,yield this.y}};e=I,e.prototype.isVector2=!0;var Gt=class{constructor(e=0,t=0,n=0,r=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=r}static slerpFlat(e,t,n,r,i,a,o){let s=n[r+0],c=n[r+1],l=n[r+2],u=n[r+3],d=i[a+0],f=i[a+1],p=i[a+2],m=i[a+3];if(u!==m||s!==d||c!==f||l!==p){let e=s*d+c*f+l*p+u*m;e<0&&(d=-d,f=-f,p=-p,m=-m,e=-e);let t=1-o;if(e<.9995){let n=Math.acos(e),r=Math.sin(n);t=Math.sin(t*n)/r,o=Math.sin(o*n)/r,s=s*t+d*o,c=c*t+f*o,l=l*t+p*o,u=u*t+m*o}else{s=s*t+d*o,c=c*t+f*o,l=l*t+p*o,u=u*t+m*o;let e=1/Math.sqrt(s*s+c*c+l*l+u*u);s*=e,c*=e,l*=e,u*=e}}e[t]=s,e[t+1]=c,e[t+2]=l,e[t+3]=u}static multiplyQuaternionsFlat(e,t,n,r,i,a){let o=n[r],s=n[r+1],c=n[r+2],l=n[r+3],u=i[a],d=i[a+1],f=i[a+2],p=i[a+3];return e[t]=o*p+l*u+s*f-c*d,e[t+1]=s*p+l*d+c*u-o*f,e[t+2]=c*p+l*f+o*d-s*u,e[t+3]=l*p-o*u-s*d-c*f,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,r){return this._x=e,this._y=t,this._z=n,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){let n=e._x,r=e._y,i=e._z,a=e._order,o=Math.cos,s=Math.sin,c=o(n/2),l=o(r/2),u=o(i/2),d=s(n/2),f=s(r/2),p=s(i/2);switch(a){case`XYZ`:this._x=d*l*u+c*f*p,this._y=c*f*u-d*l*p,this._z=c*l*p+d*f*u,this._w=c*l*u-d*f*p;break;case`YXZ`:this._x=d*l*u+c*f*p,this._y=c*f*u-d*l*p,this._z=c*l*p-d*f*u,this._w=c*l*u+d*f*p;break;case`ZXY`:this._x=d*l*u-c*f*p,this._y=c*f*u+d*l*p,this._z=c*l*p+d*f*u,this._w=c*l*u-d*f*p;break;case`ZYX`:this._x=d*l*u-c*f*p,this._y=c*f*u+d*l*p,this._z=c*l*p-d*f*u,this._w=c*l*u+d*f*p;break;case`YZX`:this._x=d*l*u+c*f*p,this._y=c*f*u+d*l*p,this._z=c*l*p-d*f*u,this._w=c*l*u-d*f*p;break;case`XZY`:this._x=d*l*u-c*f*p,this._y=c*f*u-d*l*p,this._z=c*l*p+d*f*u,this._w=c*l*u+d*f*p;break;default:N(`Quaternion: .setFromEuler() encountered an unknown order: `+a)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){let n=t/2,r=Math.sin(n);return this._x=e.x*r,this._y=e.y*r,this._z=e.z*r,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){let t=e.elements,n=t[0],r=t[4],i=t[8],a=t[1],o=t[5],s=t[9],c=t[2],l=t[6],u=t[10],d=n+o+u;if(d>0){let e=.5/Math.sqrt(d+1);this._w=.25/e,this._x=(l-s)*e,this._y=(i-c)*e,this._z=(a-r)*e}else if(n>o&&n>u){let e=2*Math.sqrt(1+n-o-u);this._w=(l-s)/e,this._x=.25*e,this._y=(r+a)/e,this._z=(i+c)/e}else if(o>u){let e=2*Math.sqrt(1+o-n-u);this._w=(i-c)/e,this._x=(r+a)/e,this._y=.25*e,this._z=(s+l)/e}else{let e=2*Math.sqrt(1+u-n-o);this._w=(a-r)/e,this._x=(i+c)/e,this._y=(s+l)/e,this._z=.25*e}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<1e-8?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(F(this.dot(e),-1,1)))}rotateTowards(e,t){let n=this.angleTo(e);if(n===0)return this;let r=Math.min(1,t/n);return this.slerp(e,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x*=e,this._y*=e,this._z*=e,this._w*=e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){let n=e._x,r=e._y,i=e._z,a=e._w,o=t._x,s=t._y,c=t._z,l=t._w;return this._x=n*l+a*o+r*c-i*s,this._y=r*l+a*s+i*o-n*c,this._z=i*l+a*c+n*s-r*o,this._w=a*l-n*o-r*s-i*c,this._onChangeCallback(),this}slerp(e,t){let n=e._x,r=e._y,i=e._z,a=e._w,o=this.dot(e);o<0&&(n=-n,r=-r,i=-i,a=-a,o=-o);let s=1-t;if(o<.9995){let e=Math.acos(o),c=Math.sin(e);s=Math.sin(s*e)/c,t=Math.sin(t*e)/c,this._x=this._x*s+n*t,this._y=this._y*s+r*t,this._z=this._z*s+i*t,this._w=this._w*s+a*t,this._onChangeCallback()}else this._x=this._x*s+n*t,this._y=this._y*s+r*t,this._z=this._z*s+i*t,this._w=this._w*s+a*t,this.normalize();return this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){let e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),n=Math.random(),r=Math.sqrt(1-n),i=Math.sqrt(n);return this.set(r*Math.sin(e),r*Math.cos(e),i*Math.sin(t),i*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}};s=Symbol.iterator;var L=class{constructor(e=0,t=0,n=0){this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw Error(`index is out of range: `+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw Error(`index is out of range: `+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(qt.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(qt.setFromAxisAngle(e,t))}applyMatrix3(e){let t=this.x,n=this.y,r=this.z,i=e.elements;return this.x=i[0]*t+i[3]*n+i[6]*r,this.y=i[1]*t+i[4]*n+i[7]*r,this.z=i[2]*t+i[5]*n+i[8]*r,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){let t=this.x,n=this.y,r=this.z,i=e.elements,a=1/(i[3]*t+i[7]*n+i[11]*r+i[15]);return this.x=(i[0]*t+i[4]*n+i[8]*r+i[12])*a,this.y=(i[1]*t+i[5]*n+i[9]*r+i[13])*a,this.z=(i[2]*t+i[6]*n+i[10]*r+i[14])*a,this}applyQuaternion(e){let t=this.x,n=this.y,r=this.z,i=e.x,a=e.y,o=e.z,s=e.w,c=2*(a*r-o*n),l=2*(o*t-i*r),u=2*(i*n-a*t);return this.x=t+s*c+a*u-o*l,this.y=n+s*l+o*c-i*u,this.z=r+s*u+i*l-a*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){let t=this.x,n=this.y,r=this.z,i=e.elements;return this.x=i[0]*t+i[4]*n+i[8]*r,this.y=i[1]*t+i[5]*n+i[9]*r,this.z=i[2]*t+i[6]*n+i[10]*r,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=F(this.x,e.x,t.x),this.y=F(this.y,e.y,t.y),this.z=F(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=F(this.x,e,t),this.y=F(this.y,e,t),this.z=F(this.z,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(F(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){let n=e.x,r=e.y,i=e.z,a=t.x,o=t.y,s=t.z;return this.x=r*s-i*o,this.y=i*a-n*s,this.z=n*o-r*a,this}projectOnVector(e){let t=e.lengthSq();if(t===0)return this.set(0,0,0);let n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return Kt.copy(this).projectOnVector(e),this.sub(Kt)}reflect(e){return this.sub(Kt.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let n=this.dot(e)/t;return Math.acos(F(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,n=this.y-e.y,r=this.z-e.z;return t*t+n*n+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){let r=Math.sin(t)*e;return this.x=r*Math.sin(n),this.y=Math.cos(t)*e,this.z=r*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){let t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),r=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=r,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let e=Math.random()*Math.PI*2,t=Math.random()*2-1,n=Math.sqrt(1-t*t);return this.x=n*Math.cos(e),this.y=t,this.z=n*Math.sin(e),this}*[s](){yield this.x,yield this.y,yield this.z}};t=L,t.prototype.isVector3=!0;var Kt=new L,qt=new Gt,R=class{constructor(e,t,n,r,i,a,o,s,c){this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,r,i,a,o,s,c)}set(e,t,n,r,i,a,o,s,c){let l=this.elements;return l[0]=e,l[1]=r,l[2]=o,l[3]=t,l[4]=i,l[5]=s,l[6]=n,l[7]=a,l[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){let t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){let t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let n=e.elements,r=t.elements,i=this.elements,a=n[0],o=n[3],s=n[6],c=n[1],l=n[4],u=n[7],d=n[2],f=n[5],p=n[8],m=r[0],h=r[3],g=r[6],_=r[1],v=r[4],y=r[7],b=r[2],x=r[5],S=r[8];return i[0]=a*m+o*_+s*b,i[3]=a*h+o*v+s*x,i[6]=a*g+o*y+s*S,i[1]=c*m+l*_+u*b,i[4]=c*h+l*v+u*x,i[7]=c*g+l*y+u*S,i[2]=d*m+f*_+p*b,i[5]=d*h+f*v+p*x,i[8]=d*g+f*y+p*S,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){let e=this.elements,t=e[0],n=e[1],r=e[2],i=e[3],a=e[4],o=e[5],s=e[6],c=e[7],l=e[8];return t*a*l-t*o*c-n*i*l+n*o*s+r*i*c-r*a*s}invert(){let e=this.elements,t=e[0],n=e[1],r=e[2],i=e[3],a=e[4],o=e[5],s=e[6],c=e[7],l=e[8],u=l*a-o*c,d=o*s-l*i,f=c*i-a*s,p=t*u+n*d+r*f;if(p===0)return this.set(0,0,0,0,0,0,0,0,0);let m=1/p;return e[0]=u*m,e[1]=(r*c-l*n)*m,e[2]=(o*n-r*a)*m,e[3]=d*m,e[4]=(l*t-r*s)*m,e[5]=(r*i-o*t)*m,e[6]=f*m,e[7]=(n*s-c*t)*m,e[8]=(a*t-n*i)*m,this}transpose(){let e,t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){let t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,r,i,a,o){let s=Math.cos(i),c=Math.sin(i);return this.set(n*s,n*c,-n*(s*a+c*o)+a+e,-r*c,r*s,-r*(-c*a+s*o)+o+t,0,0,1),this}scale(e,t){return this.premultiply(Jt.makeScale(e,t)),this}rotate(e){return this.premultiply(Jt.makeRotation(-e)),this}translate(e,t){return this.premultiply(Jt.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){let t=this.elements,n=e.elements;for(let e=0;e<9;e++)if(t[e]!==n[e])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){let n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}};n=R,n.prototype.isMatrix3=!0;var Jt=new R,Yt=new R().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Xt=new R().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function Zt(){let e={enabled:!0,workingColorSpace:tt,spaces:{},convert:function(e,t,n){return this.enabled===!1||t===n||!t||!n?e:(this.spaces[t].transfer===`srgb`&&(e.r=$t(e.r),e.g=$t(e.g),e.b=$t(e.b)),this.spaces[t].primaries!==this.spaces[n].primaries&&(e.applyMatrix3(this.spaces[t].toXYZ),e.applyMatrix3(this.spaces[n].fromXYZ)),this.spaces[n].transfer===`srgb`&&(e.r=en(e.r),e.g=en(e.g),e.b=en(e.b)),e)},workingToColorSpace:function(e,t){return this.convert(e,this.workingColorSpace,t)},colorSpaceToWorking:function(e,t){return this.convert(e,t,this.workingColorSpace)},getPrimaries:function(e){return this.spaces[e].primaries},getTransfer:function(e){return e===``?nt:this.spaces[e].transfer},getToneMappingMode:function(e){return this.spaces[e].outputColorSpaceConfig.toneMappingMode||`standard`},getLuminanceCoefficients:function(e,t=this.workingColorSpace){return e.fromArray(this.spaces[t].luminanceCoefficients)},define:function(e){Object.assign(this.spaces,e)},_getMatrix:function(e,t,n){return e.copy(this.spaces[t].toXYZ).multiply(this.spaces[n].fromXYZ)},_getDrawingBufferColorSpace:function(e){return this.spaces[e].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(e=this.workingColorSpace){return this.spaces[e].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(t,n){return ht(`ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace().`),e.workingToColorSpace(t,n)},toWorkingColorSpace:function(t,n){return ht(`ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking().`),e.colorSpaceToWorking(t,n)}},t=[.64,.33,.3,.6,.15,.06],n=[.2126,.7152,.0722],r=[.3127,.329];return e.define({[tt]:{primaries:t,whitePoint:r,transfer:nt,toXYZ:Yt,fromXYZ:Xt,luminanceCoefficients:n,workingColorSpaceConfig:{unpackColorSpace:et},outputColorSpaceConfig:{drawingBufferColorSpace:et}},[et]:{primaries:t,whitePoint:r,transfer:rt,toXYZ:Yt,fromXYZ:Xt,luminanceCoefficients:n,outputColorSpaceConfig:{drawingBufferColorSpace:et}}}),e}var Qt=Zt();function $t(e){return e<.04045?e*.0773993808:(e*.9478672986+.0521327014)**2.4}function en(e){return e<.0031308?e*12.92:1.055*e**.41666-.055}var tn,nn=class{static getDataURL(e,t=`image/png`){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>`u`)return e.src;let n;if(e instanceof HTMLCanvasElement)n=e;else{tn===void 0&&(tn=lt(`canvas`)),tn.width=e.width,tn.height=e.height;let t=tn.getContext(`2d`);e instanceof ImageData?t.putImageData(e,0,0):t.drawImage(e,0,0,e.width,e.height),n=tn}return n.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<`u`&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<`u`&&e instanceof HTMLCanvasElement||typeof ImageBitmap<`u`&&e instanceof ImageBitmap){let t=lt(`canvas`);t.width=e.width,t.height=e.height;let n=t.getContext(`2d`);n.drawImage(e,0,0,e.width,e.height);let r=n.getImageData(0,0,e.width,e.height),i=r.data;for(let e=0;e<i.length;e++)i[e]=$t(i[e]/255)*255;return n.putImageData(r,0,0),t}else if(e.data){let t=e.data.slice(0);for(let e=0;e<t.length;e++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[e]=Math.floor($t(t[e]/255)*255):t[e]=$t(t[e]);return{data:t,width:e.width,height:e.height}}else return N(`ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied.`),e}},rn=0,an=class{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:rn++}),this.uuid=Ct(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){let t=this.data;return typeof HTMLVideoElement<`u`&&t instanceof HTMLVideoElement?e.set(t.videoWidth,t.videoHeight,0):typeof VideoFrame<`u`&&t instanceof VideoFrame?e.set(t.displayWidth,t.displayHeight,0):t===null?e.set(0,0,0):e.set(t.width,t.height,t.depth||0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){let t=e===void 0||typeof e==`string`;if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];let n={uuid:this.uuid,url:``},r=this.data;if(r!==null){let e;if(Array.isArray(r)){e=[];for(let t=0,n=r.length;t<n;t++)r[t].isDataTexture?e.push(on(r[t].image)):e.push(on(r[t]))}else e=on(r);n.url=e}return t||(e.images[this.uuid]=n),n}};function on(e){return typeof HTMLImageElement<`u`&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<`u`&&e instanceof HTMLCanvasElement||typeof ImageBitmap<`u`&&e instanceof ImageBitmap?nn.getDataURL(e):e.data?{data:Array.from(e.data),width:e.width,height:e.height,type:e.data.constructor.name}:(N(`Texture: Unable to serialize Texture.`),{})}var sn=0,cn=new L,ln=class e extends vt{constructor(t=e.DEFAULT_IMAGE,n=e.DEFAULT_MAPPING,r=d,i=d,a=g,o=v,s=ie,c=y,l=e.DEFAULT_ANISOTROPY,u=``){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:sn++}),this.uuid=Ct(),this.name=``,this.source=new an(t),this.mipmaps=[],this.mapping=n,this.channel=0,this.wrapS=r,this.wrapT=i,this.magFilter=a,this.minFilter=o,this.anisotropy=l,this.format=s,this.internalFormat=null,this.type=c,this.offset=new I(0,0),this.repeat=new I(1,1),this.center=new I(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new R,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=u,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(t&&t.depth&&t.depth>1),this.pmremVersion=0,this.normalized=!1}get width(){return this.source.getSize(cn).x}get height(){return this.source.getSize(cn).y}get depth(){return this.source.getSize(cn).z}get image(){return this.source.data}set image(e){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.normalized=e.normalized,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(let t in e){let n=e[t];if(n===void 0){N(`Texture.setValues(): parameter '${t}' has value of undefined.`);continue}let r=this[t];if(r===void 0){N(`Texture.setValues(): property '${t}' does not exist.`);continue}r&&n&&r.isVector2&&n.isVector2||r&&n&&r.isVector3&&n.isVector3||r&&n&&r.isMatrix3&&n.isMatrix3?r.copy(n):this[t]=n}}toJSON(e){let t=e===void 0||typeof e==`string`;if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];let n={metadata:{version:4.7,type:`Texture`,generator:`Texture.toJSON`},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:`dispose`})}transformUv(e){if(this.mapping!==300)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case u:e.x-=Math.floor(e.x);break;case d:e.x=e.x<0?0:1;break;case f:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x-=Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case u:e.y-=Math.floor(e.y);break;case d:e.y=e.y<0?0:1;break;case f:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y-=Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}};ln.DEFAULT_IMAGE=null,ln.DEFAULT_MAPPING=300,ln.DEFAULT_ANISOTROPY=1,c=Symbol.iterator;var un=class{constructor(e=0,t=0,n=0,r=1){this.x=e,this.y=t,this.z=n,this.w=r}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,r){return this.x=e,this.y=t,this.z=n,this.w=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw Error(`index is out of range: `+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw Error(`index is out of range: `+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w===void 0?1:e.w,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){let t=this.x,n=this.y,r=this.z,i=this.w,a=e.elements;return this.x=a[0]*t+a[4]*n+a[8]*r+a[12]*i,this.y=a[1]*t+a[5]*n+a[9]*r+a[13]*i,this.z=a[2]*t+a[6]*n+a[10]*r+a[14]*i,this.w=a[3]*t+a[7]*n+a[11]*r+a[15]*i,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);let t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,r,i,a=.01,o=.1,s=e.elements,c=s[0],l=s[4],u=s[8],d=s[1],f=s[5],p=s[9],m=s[2],h=s[6],g=s[10];if(Math.abs(l-d)<a&&Math.abs(u-m)<a&&Math.abs(p-h)<a){if(Math.abs(l+d)<o&&Math.abs(u+m)<o&&Math.abs(p+h)<o&&Math.abs(c+f+g-3)<o)return this.set(1,0,0,0),this;t=Math.PI;let e=(c+1)/2,s=(f+1)/2,_=(g+1)/2,v=(l+d)/4,y=(u+m)/4,b=(p+h)/4;return e>s&&e>_?e<a?(n=0,r=.707106781,i=.707106781):(n=Math.sqrt(e),r=v/n,i=y/n):s>_?s<a?(n=.707106781,r=0,i=.707106781):(r=Math.sqrt(s),n=v/r,i=b/r):_<a?(n=.707106781,r=.707106781,i=0):(i=Math.sqrt(_),n=y/i,r=b/i),this.set(n,r,i,t),this}let _=Math.sqrt((h-p)*(h-p)+(u-m)*(u-m)+(d-l)*(d-l));return Math.abs(_)<.001&&(_=1),this.x=(h-p)/_,this.y=(u-m)/_,this.z=(d-l)/_,this.w=Math.acos((c+f+g-1)/2),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=F(this.x,e.x,t.x),this.y=F(this.y,e.y,t.y),this.z=F(this.z,e.z,t.z),this.w=F(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=F(this.x,e,t),this.y=F(this.y,e,t),this.z=F(this.z,e,t),this.w=F(this.w,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(F(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[c](){yield this.x,yield this.y,yield this.z,yield this.w}};r=un,r.prototype.isVector4=!0;var dn=class extends vt{constructor(e=1,t=1,n={}){super(),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:g,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},n),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=n.depth,this.scissor=new un(0,0,e,t),this.scissorTest=!1,this.viewport=new un(0,0,e,t),this.textures=[];let r=new ln({width:e,height:t,depth:n.depth}),i=n.count;for(let e=0;e<i;e++)this.textures[e]=r.clone(),this.textures[e].isRenderTargetTexture=!0,this.textures[e].renderTarget=this;this._setTextureOptions(n),this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples,this.multiview=n.multiview}_setTextureOptions(e={}){let t={minFilter:g,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(t.mapping=e.mapping),e.wrapS!==void 0&&(t.wrapS=e.wrapS),e.wrapT!==void 0&&(t.wrapT=e.wrapT),e.wrapR!==void 0&&(t.wrapR=e.wrapR),e.magFilter!==void 0&&(t.magFilter=e.magFilter),e.minFilter!==void 0&&(t.minFilter=e.minFilter),e.format!==void 0&&(t.format=e.format),e.type!==void 0&&(t.type=e.type),e.anisotropy!==void 0&&(t.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(t.colorSpace=e.colorSpace),e.flipY!==void 0&&(t.flipY=e.flipY),e.generateMipmaps!==void 0&&(t.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(t.internalFormat=e.internalFormat);for(let e=0;e<this.textures.length;e++)this.textures[e].setValues(t)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),e!==null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,n=1){if(this.width!==e||this.height!==t||this.depth!==n){this.width=e,this.height=t,this.depth=n;for(let r=0,i=this.textures.length;r<i;r++)this.textures[r].image.width=e,this.textures[r].image.height=t,this.textures[r].image.depth=n,this.textures[r].isData3DTexture!==!0&&(this.textures[r].isArrayTexture=this.textures[r].image.depth>1);this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,n=e.textures.length;t<n;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;let n=Object.assign({},e.textures[t].image);this.textures[t].source=new an(n)}return this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this.multiview=e.multiview,this}dispose(){this.dispatchEvent({type:`dispose`})}},fn=class extends dn{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}},pn=class extends ln{constructor(e=null,t=1,n=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:r},this.magFilter=p,this.minFilter=p,this.wrapR=d,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}},mn=class extends ln{constructor(e=null,t=1,n=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:r},this.magFilter=p,this.minFilter=p,this.wrapR=d,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}},z=class e{constructor(e,t,n,r,i,a,o,s,c,l,u,d,f,p,m,h){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,r,i,a,o,s,c,l,u,d,f,p,m,h)}set(e,t,n,r,i,a,o,s,c,l,u,d,f,p,m,h){let g=this.elements;return g[0]=e,g[4]=t,g[8]=n,g[12]=r,g[1]=i,g[5]=a,g[9]=o,g[13]=s,g[2]=c,g[6]=l,g[10]=u,g[14]=d,g[3]=f,g[7]=p,g[11]=m,g[15]=h,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new e().fromArray(this.elements)}copy(e){let t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){let t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){let t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return this.determinant()===0?(e.set(1,0,0),t.set(0,1,0),n.set(0,0,1),this):(e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this)}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){if(e.determinant()===0)return this.identity();let t=this.elements,n=e.elements,r=1/hn.setFromMatrixColumn(e,0).length(),i=1/hn.setFromMatrixColumn(e,1).length(),a=1/hn.setFromMatrixColumn(e,2).length();return t[0]=n[0]*r,t[1]=n[1]*r,t[2]=n[2]*r,t[3]=0,t[4]=n[4]*i,t[5]=n[5]*i,t[6]=n[6]*i,t[7]=0,t[8]=n[8]*a,t[9]=n[9]*a,t[10]=n[10]*a,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){let t=this.elements,n=e.x,r=e.y,i=e.z,a=Math.cos(n),o=Math.sin(n),s=Math.cos(r),c=Math.sin(r),l=Math.cos(i),u=Math.sin(i);if(e.order===`XYZ`){let e=a*l,n=a*u,r=o*l,i=o*u;t[0]=s*l,t[4]=-s*u,t[8]=c,t[1]=n+r*c,t[5]=e-i*c,t[9]=-o*s,t[2]=i-e*c,t[6]=r+n*c,t[10]=a*s}else if(e.order===`YXZ`){let e=s*l,n=s*u,r=c*l,i=c*u;t[0]=e+i*o,t[4]=r*o-n,t[8]=a*c,t[1]=a*u,t[5]=a*l,t[9]=-o,t[2]=n*o-r,t[6]=i+e*o,t[10]=a*s}else if(e.order===`ZXY`){let e=s*l,n=s*u,r=c*l,i=c*u;t[0]=e-i*o,t[4]=-a*u,t[8]=r+n*o,t[1]=n+r*o,t[5]=a*l,t[9]=i-e*o,t[2]=-a*c,t[6]=o,t[10]=a*s}else if(e.order===`ZYX`){let e=a*l,n=a*u,r=o*l,i=o*u;t[0]=s*l,t[4]=r*c-n,t[8]=e*c+i,t[1]=s*u,t[5]=i*c+e,t[9]=n*c-r,t[2]=-c,t[6]=o*s,t[10]=a*s}else if(e.order===`YZX`){let e=a*s,n=a*c,r=o*s,i=o*c;t[0]=s*l,t[4]=i-e*u,t[8]=r*u+n,t[1]=u,t[5]=a*l,t[9]=-o*l,t[2]=-c*l,t[6]=n*u+r,t[10]=e-i*u}else if(e.order===`XZY`){let e=a*s,n=a*c,r=o*s,i=o*c;t[0]=s*l,t[4]=-u,t[8]=c*l,t[1]=e*u+i,t[5]=a*l,t[9]=n*u-r,t[2]=r*u-n,t[6]=o*l,t[10]=i*u+e}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(_n,e,vn)}lookAt(e,t,n){let r=this.elements;return xn.subVectors(e,t),xn.lengthSq()===0&&(xn.z=1),xn.normalize(),yn.crossVectors(n,xn),yn.lengthSq()===0&&(Math.abs(n.z)===1?xn.x+=1e-4:xn.z+=1e-4,xn.normalize(),yn.crossVectors(n,xn)),yn.normalize(),bn.crossVectors(xn,yn),r[0]=yn.x,r[4]=bn.x,r[8]=xn.x,r[1]=yn.y,r[5]=bn.y,r[9]=xn.y,r[2]=yn.z,r[6]=bn.z,r[10]=xn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let n=e.elements,r=t.elements,i=this.elements,a=n[0],o=n[4],s=n[8],c=n[12],l=n[1],u=n[5],d=n[9],f=n[13],p=n[2],m=n[6],h=n[10],g=n[14],_=n[3],v=n[7],y=n[11],b=n[15],x=r[0],S=r[4],C=r[8],w=r[12],T=r[1],E=r[5],D=r[9],ee=r[13],te=r[2],O=r[6],ne=r[10],re=r[14],k=r[3],ie=r[7],ae=r[11],oe=r[15];return i[0]=a*x+o*T+s*te+c*k,i[4]=a*S+o*E+s*O+c*ie,i[8]=a*C+o*D+s*ne+c*ae,i[12]=a*w+o*ee+s*re+c*oe,i[1]=l*x+u*T+d*te+f*k,i[5]=l*S+u*E+d*O+f*ie,i[9]=l*C+u*D+d*ne+f*ae,i[13]=l*w+u*ee+d*re+f*oe,i[2]=p*x+m*T+h*te+g*k,i[6]=p*S+m*E+h*O+g*ie,i[10]=p*C+m*D+h*ne+g*ae,i[14]=p*w+m*ee+h*re+g*oe,i[3]=_*x+v*T+y*te+b*k,i[7]=_*S+v*E+y*O+b*ie,i[11]=_*C+v*D+y*ne+b*ae,i[15]=_*w+v*ee+y*re+b*oe,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){let e=this.elements,t=e[0],n=e[4],r=e[8],i=e[12],a=e[1],o=e[5],s=e[9],c=e[13],l=e[2],u=e[6],d=e[10],f=e[14],p=e[3],m=e[7],h=e[11],g=e[15],_=s*f-c*d,v=o*f-c*u,y=o*d-s*u,b=a*f-c*l,x=a*d-s*l,S=a*u-o*l;return t*(m*_-h*v+g*y)-n*(p*_-h*b+g*x)+r*(p*v-m*b+g*S)-i*(p*y-m*x+h*S)}transpose(){let e=this.elements,t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){let r=this.elements;return e.isVector3?(r[12]=e.x,r[13]=e.y,r[14]=e.z):(r[12]=e,r[13]=t,r[14]=n),this}invert(){let e=this.elements,t=e[0],n=e[1],r=e[2],i=e[3],a=e[4],o=e[5],s=e[6],c=e[7],l=e[8],u=e[9],d=e[10],f=e[11],p=e[12],m=e[13],h=e[14],g=e[15],_=t*o-n*a,v=t*s-r*a,y=t*c-i*a,b=n*s-r*o,x=n*c-i*o,S=r*c-i*s,C=l*m-u*p,w=l*h-d*p,T=l*g-f*p,E=u*h-d*m,D=u*g-f*m,ee=d*g-f*h,te=_*ee-v*D+y*E+b*T-x*w+S*C;if(te===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let O=1/te;return e[0]=(o*ee-s*D+c*E)*O,e[1]=(r*D-n*ee-i*E)*O,e[2]=(m*S-h*x+g*b)*O,e[3]=(d*x-u*S-f*b)*O,e[4]=(s*T-a*ee-c*w)*O,e[5]=(t*ee-r*T+i*w)*O,e[6]=(h*y-p*S-g*v)*O,e[7]=(l*S-d*y+f*v)*O,e[8]=(a*D-o*T+c*C)*O,e[9]=(n*T-t*D-i*C)*O,e[10]=(p*x-m*y+g*_)*O,e[11]=(u*y-l*x-f*_)*O,e[12]=(o*w-a*E-s*C)*O,e[13]=(t*E-n*w+r*C)*O,e[14]=(m*v-p*b-h*_)*O,e[15]=(l*b-u*v+d*_)*O,this}scale(e){let t=this.elements,n=e.x,r=e.y,i=e.z;return t[0]*=n,t[4]*=r,t[8]*=i,t[1]*=n,t[5]*=r,t[9]*=i,t[2]*=n,t[6]*=r,t[10]*=i,t[3]*=n,t[7]*=r,t[11]*=i,this}getMaxScaleOnAxis(){let e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],r=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,r))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){let t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){let n=Math.cos(t),r=Math.sin(t),i=1-n,a=e.x,o=e.y,s=e.z,c=i*a,l=i*o;return this.set(c*a+n,c*o-r*s,c*s+r*o,0,c*o+r*s,l*o+n,l*s-r*a,0,c*s-r*o,l*s+r*a,i*s*s+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,r,i,a){return this.set(1,n,i,0,e,1,a,0,t,r,1,0,0,0,0,1),this}compose(e,t,n){let r=this.elements,i=t._x,a=t._y,o=t._z,s=t._w,c=i+i,l=a+a,u=o+o,d=i*c,f=i*l,p=i*u,m=a*l,h=a*u,g=o*u,_=s*c,v=s*l,y=s*u,b=n.x,x=n.y,S=n.z;return r[0]=(1-(m+g))*b,r[1]=(f+y)*b,r[2]=(p-v)*b,r[3]=0,r[4]=(f-y)*x,r[5]=(1-(d+g))*x,r[6]=(h+_)*x,r[7]=0,r[8]=(p+v)*S,r[9]=(h-_)*S,r[10]=(1-(d+m))*S,r[11]=0,r[12]=e.x,r[13]=e.y,r[14]=e.z,r[15]=1,this}decompose(e,t,n){let r=this.elements;e.x=r[12],e.y=r[13],e.z=r[14];let i=this.determinant();if(i===0)return n.set(1,1,1),t.identity(),this;let a=hn.set(r[0],r[1],r[2]).length(),o=hn.set(r[4],r[5],r[6]).length(),s=hn.set(r[8],r[9],r[10]).length();i<0&&(a=-a),gn.copy(this);let c=1/a,l=1/o,u=1/s;return gn.elements[0]*=c,gn.elements[1]*=c,gn.elements[2]*=c,gn.elements[4]*=l,gn.elements[5]*=l,gn.elements[6]*=l,gn.elements[8]*=u,gn.elements[9]*=u,gn.elements[10]*=u,t.setFromRotationMatrix(gn),n.x=a,n.y=o,n.z=s,this}makePerspective(e,t,n,r,i,a,o=ot,s=!1){let c=this.elements,l=2*i/(t-e),u=2*i/(n-r),d=(t+e)/(t-e),f=(n+r)/(n-r),p,m;if(s)p=i/(a-i),m=a*i/(a-i);else if(o===2e3)p=-(a+i)/(a-i),m=-2*a*i/(a-i);else if(o===2001)p=-a/(a-i),m=-a*i/(a-i);else throw Error(`THREE.Matrix4.makePerspective(): Invalid coordinate system: `+o);return c[0]=l,c[4]=0,c[8]=d,c[12]=0,c[1]=0,c[5]=u,c[9]=f,c[13]=0,c[2]=0,c[6]=0,c[10]=p,c[14]=m,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(e,t,n,r,i,a,o=ot,s=!1){let c=this.elements,l=2/(t-e),u=2/(n-r),d=-(t+e)/(t-e),f=-(n+r)/(n-r),p,m;if(s)p=1/(a-i),m=a/(a-i);else if(o===2e3)p=-2/(a-i),m=-(a+i)/(a-i);else if(o===2001)p=-1/(a-i),m=-i/(a-i);else throw Error(`THREE.Matrix4.makeOrthographic(): Invalid coordinate system: `+o);return c[0]=l,c[4]=0,c[8]=0,c[12]=d,c[1]=0,c[5]=u,c[9]=0,c[13]=f,c[2]=0,c[6]=0,c[10]=p,c[14]=m,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(e){let t=this.elements,n=e.elements;for(let e=0;e<16;e++)if(t[e]!==n[e])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){let n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}};i=z,i.prototype.isMatrix4=!0;var hn=new L,gn=new z,_n=new L(0,0,0),vn=new L(1,1,1),yn=new L,bn=new L,xn=new L,Sn=new z,Cn=new Gt,wn=class e{constructor(t=0,n=0,r=0,i=e.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=n,this._z=r,this._order=i}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,r=this._order){return this._x=e,this._y=t,this._z=n,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){let r=e.elements,i=r[0],a=r[4],o=r[8],s=r[1],c=r[5],l=r[9],u=r[2],d=r[6],f=r[10];switch(t){case`XYZ`:this._y=Math.asin(F(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-l,f),this._z=Math.atan2(-a,i)):(this._x=Math.atan2(d,c),this._z=0);break;case`YXZ`:this._x=Math.asin(-F(l,-1,1)),Math.abs(l)<.9999999?(this._y=Math.atan2(o,f),this._z=Math.atan2(s,c)):(this._y=Math.atan2(-u,i),this._z=0);break;case`ZXY`:this._x=Math.asin(F(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-u,f),this._z=Math.atan2(-a,c)):(this._y=0,this._z=Math.atan2(s,i));break;case`ZYX`:this._y=Math.asin(-F(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(d,f),this._z=Math.atan2(s,i)):(this._x=0,this._z=Math.atan2(-a,c));break;case`YZX`:this._z=Math.asin(F(s,-1,1)),Math.abs(s)<.9999999?(this._x=Math.atan2(-l,c),this._y=Math.atan2(-u,i)):(this._x=0,this._y=Math.atan2(o,f));break;case`XZY`:this._z=Math.asin(-F(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(d,c),this._y=Math.atan2(o,i)):(this._x=Math.atan2(-l,f),this._y=0);break;default:N(`Euler: .setFromRotationMatrix() encountered an unknown order: `+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return Sn.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Sn,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return Cn.setFromEuler(this),this.setFromQuaternion(Cn,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};wn.DEFAULT_ORDER=`XYZ`;var Tn=class{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!=0}},En=0,Dn=new L,On=new Gt,kn=new z,An=new L,jn=new L,Mn=new L,Nn=new Gt,Pn=new L(1,0,0),Fn=new L(0,1,0),In=new L(0,0,1),Ln={type:`added`},Rn={type:`removed`},zn={type:`childadded`,child:null},Bn={type:`childremoved`,child:null},Vn=class e extends vt{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:En++}),this.uuid=Ct(),this.name=``,this.type=`Object3D`,this.parent=null,this.children=[],this.up=e.DEFAULT_UP.clone();let t=new L,n=new wn,r=new Gt,i=new L(1,1,1);function a(){r.setFromEuler(n,!1)}function o(){n.setFromQuaternion(r,void 0,!1)}n._onChange(a),r._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:n},quaternion:{configurable:!0,enumerable:!0,value:r},scale:{configurable:!0,enumerable:!0,value:i},modelViewMatrix:{value:new z},normalMatrix:{value:new R}}),this.matrix=new z,this.matrixWorld=new z,this.matrixAutoUpdate=e.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=e.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Tn,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return On.setFromAxisAngle(e,t),this.quaternion.multiply(On),this}rotateOnWorldAxis(e,t){return On.setFromAxisAngle(e,t),this.quaternion.premultiply(On),this}rotateX(e){return this.rotateOnAxis(Pn,e)}rotateY(e){return this.rotateOnAxis(Fn,e)}rotateZ(e){return this.rotateOnAxis(In,e)}translateOnAxis(e,t){return Dn.copy(e).applyQuaternion(this.quaternion),this.position.add(Dn.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(Pn,e)}translateY(e){return this.translateOnAxis(Fn,e)}translateZ(e){return this.translateOnAxis(In,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(kn.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?An.copy(e):An.set(e,t,n);let r=this.parent;this.updateWorldMatrix(!0,!1),jn.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?kn.lookAt(jn,An,this.up):kn.lookAt(An,jn,this.up),this.quaternion.setFromRotationMatrix(kn),r&&(kn.extractRotation(r.matrixWorld),On.setFromRotationMatrix(kn),this.quaternion.premultiply(On.invert()))}add(e){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return e===this?(P(`Object3D.add: object can't be added as a child of itself.`,e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(Ln),zn.child=e,this.dispatchEvent(zn),zn.child=null):P(`Object3D.add: object not an instance of THREE.Object3D.`,e),this)}remove(e){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.remove(arguments[e]);return this}let t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(Rn),Bn.child=e,this.dispatchEvent(Bn),Bn.child=null),this}removeFromParent(){let e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),kn.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),kn.multiply(e.parent.matrixWorld)),e.applyMatrix4(kn),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(Ln),zn.child=e,this.dispatchEvent(zn),zn.child=null,this}getObjectById(e){return this.getObjectByProperty(`id`,e)}getObjectByName(e){return this.getObjectByProperty(`name`,e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,r=this.children.length;n<r;n++){let r=this.children[n].getObjectByProperty(e,t);if(r!==void 0)return r}}getObjectsByProperty(e,t,n=[]){this[e]===t&&n.push(this);let r=this.children;for(let i=0,a=r.length;i<a;i++)r[i].getObjectsByProperty(e,t,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(jn,e,Mn),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(jn,Nn,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);let t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);let t=this.children;for(let n=0,r=t.length;n<r;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);let t=this.children;for(let n=0,r=t.length;n<r;n++)t[n].traverseVisible(e)}traverseAncestors(e){let t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);let e=this.pivot;if(e!==null){let t=e.x,n=e.y,r=e.z,i=this.matrix.elements;i[12]+=t-i[0]*t-i[4]*n-i[8]*r,i[13]+=n-i[1]*t-i[5]*n-i[9]*r,i[14]+=r-i[2]*t-i[6]*n-i[10]*r}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);let t=this.children;for(let n=0,r=t.length;n<r;n++)t[n].updateMatrixWorld(e)}updateWorldMatrix(e,t){let n=this.parent;if(e===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),t===!0){let e=this.children;for(let t=0,n=e.length;t<n;t++)e[t].updateWorldMatrix(!1,!0)}}toJSON(e){let t=e===void 0||typeof e==`string`,n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.7,type:`Object`,generator:`Object3D.toJSON`});let r={};r.uuid=this.uuid,r.type=this.type,this.name!==``&&(r.name=this.name),this.castShadow===!0&&(r.castShadow=!0),this.receiveShadow===!0&&(r.receiveShadow=!0),this.visible===!1&&(r.visible=!1),this.frustumCulled===!1&&(r.frustumCulled=!1),this.renderOrder!==0&&(r.renderOrder=this.renderOrder),this.static!==!1&&(r.static=this.static),Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.pivot!==null&&(r.pivot=this.pivot.toArray()),this.matrixAutoUpdate===!1&&(r.matrixAutoUpdate=!1),this.morphTargetDictionary!==void 0&&(r.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(r.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(r.type=`InstancedMesh`,r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(r.type=`BatchedMesh`,r.perObjectFrustumCulled=this.perObjectFrustumCulled,r.sortObjects=this.sortObjects,r.drawRanges=this._drawRanges,r.reservedRanges=this._reservedRanges,r.geometryInfo=this._geometryInfo.map(e=>({...e,boundingBox:e.boundingBox?e.boundingBox.toJSON():void 0,boundingSphere:e.boundingSphere?e.boundingSphere.toJSON():void 0})),r.instanceInfo=this._instanceInfo.map(e=>({...e})),r.availableInstanceIds=this._availableInstanceIds.slice(),r.availableGeometryIds=this._availableGeometryIds.slice(),r.nextIndexStart=this._nextIndexStart,r.nextVertexStart=this._nextVertexStart,r.geometryCount=this._geometryCount,r.maxInstanceCount=this._maxInstanceCount,r.maxVertexCount=this._maxVertexCount,r.maxIndexCount=this._maxIndexCount,r.geometryInitialized=this._geometryInitialized,r.matricesTexture=this._matricesTexture.toJSON(e),r.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(r.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(r.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(r.boundingBox=this.boundingBox.toJSON()));function i(t,n){return t[n.uuid]===void 0&&(t[n.uuid]=n.toJSON(e)),n.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=i(e.geometries,this.geometry);let t=this.geometry.parameters;if(t!==void 0&&t.shapes!==void 0){let n=t.shapes;if(Array.isArray(n))for(let t=0,r=n.length;t<r;t++){let r=n[t];i(e.shapes,r)}else i(e.shapes,n)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(i(e.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let t=[];for(let n=0,r=this.material.length;n<r;n++)t.push(i(e.materials,this.material[n]));r.material=t}else r.material=i(e.materials,this.material);if(this.children.length>0){r.children=[];for(let t=0;t<this.children.length;t++)r.children.push(this.children[t].toJSON(e).object)}if(this.animations.length>0){r.animations=[];for(let t=0;t<this.animations.length;t++){let n=this.animations[t];r.animations.push(i(e.animations,n))}}if(t){let t=a(e.geometries),r=a(e.materials),i=a(e.textures),o=a(e.images),s=a(e.shapes),c=a(e.skeletons),l=a(e.animations),u=a(e.nodes);t.length>0&&(n.geometries=t),r.length>0&&(n.materials=r),i.length>0&&(n.textures=i),o.length>0&&(n.images=o),s.length>0&&(n.shapes=s),c.length>0&&(n.skeletons=c),l.length>0&&(n.animations=l),u.length>0&&(n.nodes=u)}return n.object=r,n;function a(e){let t=[];for(let n in e){let r=e[n];delete r.metadata,t.push(r)}return t}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.pivot=e.pivot===null?null:e.pivot.clone(),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.static=e.static,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let t=0;t<e.children.length;t++){let n=e.children[t];this.add(n.clone())}return this}};Vn.DEFAULT_UP=new L(0,1,0),Vn.DEFAULT_MATRIX_AUTO_UPDATE=!0,Vn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var B=class extends Vn{constructor(){super(),this.isGroup=!0,this.type=`Group`}},Hn={type:`move`},Un=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new B,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new B,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new L,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new L),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new B,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new L,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new L,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){let t=this._hand;if(t)for(let n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:`connected`,data:e}),this}disconnect(e){return this.dispatchEvent({type:`disconnected`,data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let r=null,i=null,a=null,o=this._targetRay,s=this._grip,c=this._hand;if(e&&t.session.visibilityState!==`visible-blurred`){if(c&&e.hand){a=!0;for(let r of e.hand.values()){let e=t.getJointPose(r,n),i=this._getHandJoint(c,r);e!==null&&(i.matrix.fromArray(e.transform.matrix),i.matrix.decompose(i.position,i.rotation,i.scale),i.matrixWorldNeedsUpdate=!0,i.jointRadius=e.radius),i.visible=e!==null}let r=c.joints[`index-finger-tip`],i=c.joints[`thumb-tip`],o=r.position.distanceTo(i.position);c.inputState.pinching&&o>.025?(c.inputState.pinching=!1,this.dispatchEvent({type:`pinchend`,handedness:e.handedness,target:this})):!c.inputState.pinching&&o<=.015&&(c.inputState.pinching=!0,this.dispatchEvent({type:`pinchstart`,handedness:e.handedness,target:this}))}else s!==null&&e.gripSpace&&(i=t.getPose(e.gripSpace,n),i!==null&&(s.matrix.fromArray(i.transform.matrix),s.matrix.decompose(s.position,s.rotation,s.scale),s.matrixWorldNeedsUpdate=!0,i.linearVelocity?(s.hasLinearVelocity=!0,s.linearVelocity.copy(i.linearVelocity)):s.hasLinearVelocity=!1,i.angularVelocity?(s.hasAngularVelocity=!0,s.angularVelocity.copy(i.angularVelocity)):s.hasAngularVelocity=!1,s.eventsEnabled&&s.dispatchEvent({type:`gripUpdated`,data:e,target:this})));o!==null&&(r=t.getPose(e.targetRaySpace,n),r===null&&i!==null&&(r=i),r!==null&&(o.matrix.fromArray(r.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,r.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(r.linearVelocity)):o.hasLinearVelocity=!1,r.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(r.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(Hn)))}return o!==null&&(o.visible=r!==null),s!==null&&(s.visible=i!==null),c!==null&&(c.visible=a!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){let n=new B;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}},Wn={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Gn={h:0,s:0,l:0},Kn={h:0,s:0,l:0};function qn(e,t,n){return n<0&&(n+=1),n>1&&--n,n<1/6?e+(t-e)*6*n:n<1/2?t:n<2/3?e+(t-e)*6*(2/3-n):e}var V=class{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){let t=e;t&&t.isColor?this.copy(t):typeof t==`number`?this.setHex(t):typeof t==`string`&&this.setStyle(t)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=et){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,Qt.colorSpaceToWorking(this,t),this}setRGB(e,t,n,r=Qt.workingColorSpace){return this.r=e,this.g=t,this.b=n,Qt.colorSpaceToWorking(this,r),this}setHSL(e,t,n,r=Qt.workingColorSpace){if(e=wt(e,1),t=F(t,0,1),n=F(n,0,1),t===0)this.r=this.g=this.b=n;else{let r=n<=.5?n*(1+t):n+t-n*t,i=2*n-r;this.r=qn(i,r,e+1/3),this.g=qn(i,r,e),this.b=qn(i,r,e-1/3)}return Qt.colorSpaceToWorking(this,r),this}setStyle(e,t=et){function n(t){t!==void 0&&parseFloat(t)<1&&N(`Color: Alpha component of `+e+` will be ignored.`)}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(e)){let i,a=r[1],o=r[2];switch(a){case`rgb`:case`rgba`:if(i=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(i[4]),this.setRGB(Math.min(255,parseInt(i[1],10))/255,Math.min(255,parseInt(i[2],10))/255,Math.min(255,parseInt(i[3],10))/255,t);if(i=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(i[4]),this.setRGB(Math.min(100,parseInt(i[1],10))/100,Math.min(100,parseInt(i[2],10))/100,Math.min(100,parseInt(i[3],10))/100,t);break;case`hsl`:case`hsla`:if(i=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(i[4]),this.setHSL(parseFloat(i[1])/360,parseFloat(i[2])/100,parseFloat(i[3])/100,t);break;default:N(`Color: Unknown color model `+e)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(e)){let n=r[1],i=n.length;if(i===3)return this.setRGB(parseInt(n.charAt(0),16)/15,parseInt(n.charAt(1),16)/15,parseInt(n.charAt(2),16)/15,t);if(i===6)return this.setHex(parseInt(n,16),t);N(`Color: Invalid hex color `+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=et){let n=Wn[e.toLowerCase()];return n===void 0?N(`Color: Unknown color `+e):this.setHex(n,t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=$t(e.r),this.g=$t(e.g),this.b=$t(e.b),this}copyLinearToSRGB(e){return this.r=en(e.r),this.g=en(e.g),this.b=en(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=et){return Qt.workingToColorSpace(Jn.copy(this),e),Math.round(F(Jn.r*255,0,255))*65536+Math.round(F(Jn.g*255,0,255))*256+Math.round(F(Jn.b*255,0,255))}getHexString(e=et){return(`000000`+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=Qt.workingColorSpace){Qt.workingToColorSpace(Jn.copy(this),t);let n=Jn.r,r=Jn.g,i=Jn.b,a=Math.max(n,r,i),o=Math.min(n,r,i),s,c,l=(o+a)/2;if(o===a)s=0,c=0;else{let e=a-o;switch(c=l<=.5?e/(a+o):e/(2-a-o),a){case n:s=(r-i)/e+(r<i?6:0);break;case r:s=(i-n)/e+2;break;case i:s=(n-r)/e+4;break}s/=6}return e.h=s,e.s=c,e.l=l,e}getRGB(e,t=Qt.workingColorSpace){return Qt.workingToColorSpace(Jn.copy(this),t),e.r=Jn.r,e.g=Jn.g,e.b=Jn.b,e}getStyle(e=et){Qt.workingToColorSpace(Jn.copy(this),e);let t=Jn.r,n=Jn.g,r=Jn.b;return e===`srgb`?`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(r*255)})`:`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${r.toFixed(3)})`}offsetHSL(e,t,n){return this.getHSL(Gn),this.setHSL(Gn.h+e,Gn.s+t,Gn.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(Gn),e.getHSL(Kn);let n=Dt(Gn.h,Kn.h,t),r=Dt(Gn.s,Kn.s,t),i=Dt(Gn.l,Kn.l,t);return this.setHSL(n,r,i),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){let t=this.r,n=this.g,r=this.b,i=e.elements;return this.r=i[0]*t+i[3]*n+i[6]*r,this.g=i[1]*t+i[4]*n+i[7]*r,this.b=i[2]*t+i[5]*n+i[8]*r,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},Jn=new V;V.NAMES=Wn;var Yn=class e{constructor(e,t=25e-5){this.isFogExp2=!0,this.name=``,this.color=new V(e),this.density=t}clone(){return new e(this.color,this.density)}toJSON(){return{type:`FogExp2`,name:this.name,color:this.color.getHex(),density:this.density}}},Xn=class extends Vn{constructor(){super(),this.isScene=!0,this.type=`Scene`,this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new wn,this.environmentIntensity=1,this.environmentRotation=new wn,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<`u`&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent(`observe`,{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){let t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}},Zn=new L,Qn=new L,$n=new L,er=new L,tr=new L,nr=new L,rr=new L,ir=new L,ar=new L,or=new L,sr=new un,cr=new un,lr=new un,ur=class e{constructor(e=new L,t=new L,n=new L){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,r){r.subVectors(n,t),Zn.subVectors(e,t),r.cross(Zn);let i=r.lengthSq();return i>0?r.multiplyScalar(1/Math.sqrt(i)):r.set(0,0,0)}static getBarycoord(e,t,n,r,i){Zn.subVectors(r,t),Qn.subVectors(n,t),$n.subVectors(e,t);let a=Zn.dot(Zn),o=Zn.dot(Qn),s=Zn.dot($n),c=Qn.dot(Qn),l=Qn.dot($n),u=a*c-o*o;if(u===0)return i.set(0,0,0),null;let d=1/u,f=(c*s-o*l)*d,p=(a*l-o*s)*d;return i.set(1-f-p,p,f)}static containsPoint(e,t,n,r){return this.getBarycoord(e,t,n,r,er)===null?!1:er.x>=0&&er.y>=0&&er.x+er.y<=1}static getInterpolation(e,t,n,r,i,a,o,s){return this.getBarycoord(e,t,n,r,er)===null?(s.x=0,s.y=0,`z`in s&&(s.z=0),`w`in s&&(s.w=0),null):(s.setScalar(0),s.addScaledVector(i,er.x),s.addScaledVector(a,er.y),s.addScaledVector(o,er.z),s)}static getInterpolatedAttribute(e,t,n,r,i,a){return sr.setScalar(0),cr.setScalar(0),lr.setScalar(0),sr.fromBufferAttribute(e,t),cr.fromBufferAttribute(e,n),lr.fromBufferAttribute(e,r),a.setScalar(0),a.addScaledVector(sr,i.x),a.addScaledVector(cr,i.y),a.addScaledVector(lr,i.z),a}static isFrontFacing(e,t,n,r){return Zn.subVectors(n,t),Qn.subVectors(e,t),Zn.cross(Qn).dot(r)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,r){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[r]),this}setFromAttributeAndIndices(e,t,n,r){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,r),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Zn.subVectors(this.c,this.b),Qn.subVectors(this.a,this.b),Zn.cross(Qn).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return e.getNormal(this.a,this.b,this.c,t)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,n){return e.getBarycoord(t,this.a,this.b,this.c,n)}getInterpolation(t,n,r,i,a){return e.getInterpolation(t,this.a,this.b,this.c,n,r,i,a)}containsPoint(t){return e.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return e.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){let n=this.a,r=this.b,i=this.c,a,o;tr.subVectors(r,n),nr.subVectors(i,n),ir.subVectors(e,n);let s=tr.dot(ir),c=nr.dot(ir);if(s<=0&&c<=0)return t.copy(n);ar.subVectors(e,r);let l=tr.dot(ar),u=nr.dot(ar);if(l>=0&&u<=l)return t.copy(r);let d=s*u-l*c;if(d<=0&&s>=0&&l<=0)return a=s/(s-l),t.copy(n).addScaledVector(tr,a);or.subVectors(e,i);let f=tr.dot(or),p=nr.dot(or);if(p>=0&&f<=p)return t.copy(i);let m=f*c-s*p;if(m<=0&&c>=0&&p<=0)return o=c/(c-p),t.copy(n).addScaledVector(nr,o);let h=l*p-f*u;if(h<=0&&u-l>=0&&f-p>=0)return rr.subVectors(i,r),o=(u-l)/(u-l+(f-p)),t.copy(r).addScaledVector(rr,o);let g=1/(h+m+d);return a=m*g,o=d*g,t.copy(n).addScaledVector(tr,a).addScaledVector(nr,o)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}},dr=class{constructor(e=new L(1/0,1/0,1/0),t=new L(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(pr.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(pr.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){let n=pr.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);let n=e.geometry;if(n!==void 0){let r=n.getAttribute(`position`);if(t===!0&&r!==void 0&&e.isInstancedMesh!==!0)for(let t=0,n=r.count;t<n;t++)e.isMesh===!0?e.getVertexPosition(t,pr):pr.fromBufferAttribute(r,t),pr.applyMatrix4(e.matrixWorld),this.expandByPoint(pr);else e.boundingBox===void 0?(n.boundingBox===null&&n.computeBoundingBox(),mr.copy(n.boundingBox)):(e.boundingBox===null&&e.computeBoundingBox(),mr.copy(e.boundingBox)),mr.applyMatrix4(e.matrixWorld),this.union(mr)}let r=e.children;for(let e=0,n=r.length;e<n;e++)this.expandByObject(r[e],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,pr),pr.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(xr),Sr.subVectors(this.max,xr),hr.subVectors(e.a,xr),gr.subVectors(e.b,xr),_r.subVectors(e.c,xr),vr.subVectors(gr,hr),yr.subVectors(_r,gr),br.subVectors(hr,_r);let t=[0,-vr.z,vr.y,0,-yr.z,yr.y,0,-br.z,br.y,vr.z,0,-vr.x,yr.z,0,-yr.x,br.z,0,-br.x,-vr.y,vr.x,0,-yr.y,yr.x,0,-br.y,br.x,0];return!Tr(t,hr,gr,_r,Sr)||(t=[1,0,0,0,1,0,0,0,1],!Tr(t,hr,gr,_r,Sr))?!1:(Cr.crossVectors(vr,yr),t=[Cr.x,Cr.y,Cr.z],Tr(t,hr,gr,_r,Sr))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,pr).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(pr).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(fr[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),fr[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),fr[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),fr[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),fr[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),fr[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),fr[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),fr[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(fr),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}},fr=[new L,new L,new L,new L,new L,new L,new L,new L],pr=new L,mr=new dr,hr=new L,gr=new L,_r=new L,vr=new L,yr=new L,br=new L,xr=new L,Sr=new L,Cr=new L,wr=new L;function Tr(e,t,n,r,i){for(let a=0,o=e.length-3;a<=o;a+=3){wr.fromArray(e,a);let o=i.x*Math.abs(wr.x)+i.y*Math.abs(wr.y)+i.z*Math.abs(wr.z),s=t.dot(wr),c=n.dot(wr),l=r.dot(wr);if(Math.max(-Math.max(s,c,l),Math.min(s,c,l))>o)return!1}return!0}var Er=new L,Dr=new I,Or=0,kr=class extends vt{constructor(e,t,n=!1){if(super(),Array.isArray(e))throw TypeError(`THREE.BufferAttribute: array should be a Typed Array.`);this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:Or++}),this.name=``,this.array=e,this.itemSize=t,this.count=e===void 0?0:e.length/t,this.normalized=n,this.usage=at,this.updateRanges=[],this.gpuType=T,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let r=0,i=this.itemSize;r<i;r++)this.array[e+r]=t.array[n+r];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)Dr.fromBufferAttribute(this,t),Dr.applyMatrix3(e),this.setXY(t,Dr.x,Dr.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)Er.fromBufferAttribute(this,t),Er.applyMatrix3(e),this.setXYZ(t,Er.x,Er.y,Er.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)Er.fromBufferAttribute(this,t),Er.applyMatrix4(e),this.setXYZ(t,Er.x,Er.y,Er.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)Er.fromBufferAttribute(this,t),Er.applyNormalMatrix(e),this.setXYZ(t,Er.x,Er.y,Er.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)Er.fromBufferAttribute(this,t),Er.transformDirection(e),this.setXYZ(t,Er.x,Er.y,Er.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=Ht(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=Ut(n,this.array)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=Ht(t,this.array)),t}setX(e,t){return this.normalized&&(t=Ut(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=Ht(t,this.array)),t}setY(e,t){return this.normalized&&(t=Ut(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=Ht(t,this.array)),t}setZ(e,t){return this.normalized&&(t=Ut(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=Ht(t,this.array)),t}setW(e,t){return this.normalized&&(t=Ut(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=Ut(t,this.array),n=Ut(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,r){return e*=this.itemSize,this.normalized&&(t=Ut(t,this.array),n=Ut(n,this.array),r=Ut(r,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=r,this}setXYZW(e,t,n,r,i){return e*=this.itemSize,this.normalized&&(t=Ut(t,this.array),n=Ut(n,this.array),r=Ut(r,this.array),i=Ut(i,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=r,this.array[e+3]=i,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==``&&(e.name=this.name),this.usage!==35044&&(e.usage=this.usage),e}dispose(){this.dispatchEvent({type:`dispose`})}},Ar=class extends kr{constructor(e,t,n){super(new Uint16Array(e),t,n)}},jr=class extends kr{constructor(e,t,n){super(new Uint32Array(e),t,n)}},H=class extends kr{constructor(e,t,n){super(new Float32Array(e),t,n)}},Mr=new dr,Nr=new L,Pr=new L,Fr=class{constructor(e=new L,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){let n=this.center;t===void 0?Mr.setFromPoints(e).getCenter(n):n.copy(t);let r=0;for(let t=0,i=e.length;t<i;t++)r=Math.max(r,n.distanceToSquared(e[t]));return this.radius=Math.sqrt(r),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){let t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){let n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius*=e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Nr.subVectors(e,this.center);let t=Nr.lengthSq();if(t>this.radius*this.radius){let e=Math.sqrt(t),n=(e-this.radius)*.5;this.center.addScaledVector(Nr,n/e),this.radius+=n}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Pr.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Nr.copy(e.center).add(Pr)),this.expandByPoint(Nr.copy(e.center).sub(Pr))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}},Ir=0,Lr=new z,Rr=new Vn,zr=new L,Br=new dr,Vr=new dr,Hr=new L,Ur=class e extends vt{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Ir++}),this.uuid=Ct(),this.name=``,this.type=`BufferGeometry`,this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(st(e)?jr:Ar)(e,1):this.index=e,this}setIndirect(e,t=0){return this.indirect=e,this.indirectOffset=t,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){let t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);let n=this.attributes.normal;if(n!==void 0){let t=new R().getNormalMatrix(e);n.applyNormalMatrix(t),n.needsUpdate=!0}let r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(e),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return Lr.makeRotationFromQuaternion(e),this.applyMatrix4(Lr),this}rotateX(e){return Lr.makeRotationX(e),this.applyMatrix4(Lr),this}rotateY(e){return Lr.makeRotationY(e),this.applyMatrix4(Lr),this}rotateZ(e){return Lr.makeRotationZ(e),this.applyMatrix4(Lr),this}translate(e,t,n){return Lr.makeTranslation(e,t,n),this.applyMatrix4(Lr),this}scale(e,t,n){return Lr.makeScale(e,t,n),this.applyMatrix4(Lr),this}lookAt(e){return Rr.lookAt(e),Rr.updateMatrix(),this.applyMatrix4(Rr.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(zr).negate(),this.translate(zr.x,zr.y,zr.z),this}setFromPoints(e){let t=this.getAttribute(`position`);if(t===void 0){let t=[];for(let n=0,r=e.length;n<r;n++){let r=e[n];t.push(r.x,r.y,r.z||0)}this.setAttribute(`position`,new H(t,3))}else{let n=Math.min(e.length,t.count);for(let r=0;r<n;r++){let n=e[r];t.setXYZ(r,n.x,n.y,n.z||0)}e.length>t.count&&N(`BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry.`),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new dr);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){P(`BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.`,this),this.boundingBox.set(new L(-1/0,-1/0,-1/0),new L(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let e=0,n=t.length;e<n;e++){let n=t[e];Br.setFromBufferAttribute(n),this.morphTargetsRelative?(Hr.addVectors(this.boundingBox.min,Br.min),this.boundingBox.expandByPoint(Hr),Hr.addVectors(this.boundingBox.max,Br.max),this.boundingBox.expandByPoint(Hr)):(this.boundingBox.expandByPoint(Br.min),this.boundingBox.expandByPoint(Br.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&P(`BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.`,this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Fr);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){P(`BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.`,this),this.boundingSphere.set(new L,1/0);return}if(e){let n=this.boundingSphere.center;if(Br.setFromBufferAttribute(e),t)for(let e=0,n=t.length;e<n;e++){let n=t[e];Vr.setFromBufferAttribute(n),this.morphTargetsRelative?(Hr.addVectors(Br.min,Vr.min),Br.expandByPoint(Hr),Hr.addVectors(Br.max,Vr.max),Br.expandByPoint(Hr)):(Br.expandByPoint(Vr.min),Br.expandByPoint(Vr.max))}Br.getCenter(n);let r=0;for(let t=0,i=e.count;t<i;t++)Hr.fromBufferAttribute(e,t),r=Math.max(r,n.distanceToSquared(Hr));if(t)for(let i=0,a=t.length;i<a;i++){let a=t[i],o=this.morphTargetsRelative;for(let t=0,i=a.count;t<i;t++)Hr.fromBufferAttribute(a,t),o&&(zr.fromBufferAttribute(e,t),Hr.add(zr)),r=Math.max(r,n.distanceToSquared(Hr))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&P(`BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.`,this)}}computeTangents(){let e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){P(`BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)`);return}let n=t.position,r=t.normal,i=t.uv;this.hasAttribute(`tangent`)===!1&&this.setAttribute(`tangent`,new kr(new Float32Array(4*n.count),4));let a=this.getAttribute(`tangent`),o=[],s=[];for(let e=0;e<n.count;e++)o[e]=new L,s[e]=new L;let c=new L,l=new L,u=new L,d=new I,f=new I,p=new I,m=new L,h=new L;function g(e,t,r){c.fromBufferAttribute(n,e),l.fromBufferAttribute(n,t),u.fromBufferAttribute(n,r),d.fromBufferAttribute(i,e),f.fromBufferAttribute(i,t),p.fromBufferAttribute(i,r),l.sub(c),u.sub(c),f.sub(d),p.sub(d);let a=1/(f.x*p.y-p.x*f.y);isFinite(a)&&(m.copy(l).multiplyScalar(p.y).addScaledVector(u,-f.y).multiplyScalar(a),h.copy(u).multiplyScalar(f.x).addScaledVector(l,-p.x).multiplyScalar(a),o[e].add(m),o[t].add(m),o[r].add(m),s[e].add(h),s[t].add(h),s[r].add(h))}let _=this.groups;_.length===0&&(_=[{start:0,count:e.count}]);for(let t=0,n=_.length;t<n;++t){let n=_[t],r=n.start,i=n.count;for(let t=r,n=r+i;t<n;t+=3)g(e.getX(t+0),e.getX(t+1),e.getX(t+2))}let v=new L,y=new L,b=new L,x=new L;function S(e){b.fromBufferAttribute(r,e),x.copy(b);let t=o[e];v.copy(t),v.sub(b.multiplyScalar(b.dot(t))).normalize(),y.crossVectors(x,t);let n=y.dot(s[e])<0?-1:1;a.setXYZW(e,v.x,v.y,v.z,n)}for(let t=0,n=_.length;t<n;++t){let n=_[t],r=n.start,i=n.count;for(let t=r,n=r+i;t<n;t+=3)S(e.getX(t+0)),S(e.getX(t+1)),S(e.getX(t+2))}}computeVertexNormals(){let e=this.index,t=this.getAttribute(`position`);if(t!==void 0){let n=this.getAttribute(`normal`);if(n===void 0)n=new kr(new Float32Array(t.count*3),3),this.setAttribute(`normal`,n);else for(let e=0,t=n.count;e<t;e++)n.setXYZ(e,0,0,0);let r=new L,i=new L,a=new L,o=new L,s=new L,c=new L,l=new L,u=new L;if(e)for(let d=0,f=e.count;d<f;d+=3){let f=e.getX(d+0),p=e.getX(d+1),m=e.getX(d+2);r.fromBufferAttribute(t,f),i.fromBufferAttribute(t,p),a.fromBufferAttribute(t,m),l.subVectors(a,i),u.subVectors(r,i),l.cross(u),o.fromBufferAttribute(n,f),s.fromBufferAttribute(n,p),c.fromBufferAttribute(n,m),o.add(l),s.add(l),c.add(l),n.setXYZ(f,o.x,o.y,o.z),n.setXYZ(p,s.x,s.y,s.z),n.setXYZ(m,c.x,c.y,c.z)}else for(let e=0,o=t.count;e<o;e+=3)r.fromBufferAttribute(t,e+0),i.fromBufferAttribute(t,e+1),a.fromBufferAttribute(t,e+2),l.subVectors(a,i),u.subVectors(r,i),l.cross(u),n.setXYZ(e+0,l.x,l.y,l.z),n.setXYZ(e+1,l.x,l.y,l.z),n.setXYZ(e+2,l.x,l.y,l.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){let e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)Hr.fromBufferAttribute(e,t),Hr.normalize(),e.setXYZ(t,Hr.x,Hr.y,Hr.z)}toNonIndexed(){function t(e,t){let n=e.array,r=e.itemSize,i=e.normalized,a=new n.constructor(t.length*r),o=0,s=0;for(let i=0,c=t.length;i<c;i++){o=e.isInterleavedBufferAttribute?t[i]*e.data.stride+e.offset:t[i]*r;for(let e=0;e<r;e++)a[s++]=n[o++]}return new kr(a,r,i)}if(this.index===null)return N(`BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed.`),this;let n=new e,r=this.index.array,i=this.attributes;for(let e in i){let a=i[e],o=t(a,r);n.setAttribute(e,o)}let a=this.morphAttributes;for(let e in a){let i=[],o=a[e];for(let e=0,n=o.length;e<n;e++){let n=o[e],a=t(n,r);i.push(a)}n.morphAttributes[e]=i}n.morphTargetsRelative=this.morphTargetsRelative;let o=this.groups;for(let e=0,t=o.length;e<t;e++){let t=o[e];n.addGroup(t.start,t.count,t.materialIndex)}return n}toJSON(){let e={metadata:{version:4.7,type:`BufferGeometry`,generator:`BufferGeometry.toJSON`}};if(e.uuid=this.uuid,e.type=this.type,this.name!==``&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){let t=this.parameters;for(let n in t)t[n]!==void 0&&(e[n]=t[n]);return e}e.data={attributes:{}};let t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});let n=this.attributes;for(let t in n){let r=n[t];e.data.attributes[t]=r.toJSON(e.data)}let r={},i=!1;for(let t in this.morphAttributes){let n=this.morphAttributes[t],a=[];for(let t=0,r=n.length;t<r;t++){let r=n[t];a.push(r.toJSON(e.data))}a.length>0&&(r[t]=a,i=!0)}i&&(e.data.morphAttributes=r,e.data.morphTargetsRelative=this.morphTargetsRelative);let a=this.groups;a.length>0&&(e.data.groups=JSON.parse(JSON.stringify(a)));let o=this.boundingSphere;return o!==null&&(e.data.boundingSphere=o.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let t={};this.name=e.name;let n=e.index;n!==null&&this.setIndex(n.clone());let r=e.attributes;for(let e in r){let n=r[e];this.setAttribute(e,n.clone(t))}let i=e.morphAttributes;for(let e in i){let n=[],r=i[e];for(let e=0,i=r.length;e<i;e++)n.push(r[e].clone(t));this.morphAttributes[e]=n}this.morphTargetsRelative=e.morphTargetsRelative;let a=e.groups;for(let e=0,t=a.length;e<t;e++){let t=a[e];this.addGroup(t.start,t.count,t.materialIndex)}let o=e.boundingBox;o!==null&&(this.boundingBox=o.clone());let s=e.boundingSphere;return s!==null&&(this.boundingSphere=s.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:`dispose`})}},Wr=class{constructor(e,t){this.isInterleavedBuffer=!0,this.array=e,this.stride=t,this.count=e===void 0?0:e.length/t,this.usage=at,this.updateRanges=[],this.version=0,this.uuid=Ct()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,t,n){e*=this.stride,n*=t.stride;for(let r=0,i=this.stride;r<i;r++)this.array[e+r]=t.array[n+r];return this}set(e,t=0){return this.array.set(e,t),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Ct()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);let t=new this.array.constructor(e.arrayBuffers[this.array.buffer._uuid]),n=new this.constructor(t,this.stride);return n.setUsage(this.usage),n}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){return e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Ct()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}},Gr=new L,Kr=class e{constructor(e,t,n,r=!1){this.isInterleavedBufferAttribute=!0,this.name=``,this.data=e,this.itemSize=t,this.offset=n,this.normalized=r}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let t=0,n=this.data.count;t<n;t++)Gr.fromBufferAttribute(this,t),Gr.applyMatrix4(e),this.setXYZ(t,Gr.x,Gr.y,Gr.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)Gr.fromBufferAttribute(this,t),Gr.applyNormalMatrix(e),this.setXYZ(t,Gr.x,Gr.y,Gr.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)Gr.fromBufferAttribute(this,t),Gr.transformDirection(e),this.setXYZ(t,Gr.x,Gr.y,Gr.z);return this}getComponent(e,t){let n=this.array[e*this.data.stride+this.offset+t];return this.normalized&&(n=Ht(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=Ut(n,this.array)),this.data.array[e*this.data.stride+this.offset+t]=n,this}setX(e,t){return this.normalized&&(t=Ut(t,this.array)),this.data.array[e*this.data.stride+this.offset]=t,this}setY(e,t){return this.normalized&&(t=Ut(t,this.array)),this.data.array[e*this.data.stride+this.offset+1]=t,this}setZ(e,t){return this.normalized&&(t=Ut(t,this.array)),this.data.array[e*this.data.stride+this.offset+2]=t,this}setW(e,t){return this.normalized&&(t=Ut(t,this.array)),this.data.array[e*this.data.stride+this.offset+3]=t,this}getX(e){let t=this.data.array[e*this.data.stride+this.offset];return this.normalized&&(t=Ht(t,this.array)),t}getY(e){let t=this.data.array[e*this.data.stride+this.offset+1];return this.normalized&&(t=Ht(t,this.array)),t}getZ(e){let t=this.data.array[e*this.data.stride+this.offset+2];return this.normalized&&(t=Ht(t,this.array)),t}getW(e){let t=this.data.array[e*this.data.stride+this.offset+3];return this.normalized&&(t=Ht(t,this.array)),t}setXY(e,t,n){return e=e*this.data.stride+this.offset,this.normalized&&(t=Ut(t,this.array),n=Ut(n,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this}setXYZ(e,t,n,r){return e=e*this.data.stride+this.offset,this.normalized&&(t=Ut(t,this.array),n=Ut(n,this.array),r=Ut(r,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=r,this}setXYZW(e,t,n,r,i){return e=e*this.data.stride+this.offset,this.normalized&&(t=Ut(t,this.array),n=Ut(n,this.array),r=Ut(r,this.array),i=Ut(i,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=r,this.data.array[e+3]=i,this}clone(t){if(t===void 0){pt(`InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.`);let e=[];for(let t=0;t<this.count;t++){let n=t*this.data.stride+this.offset;for(let t=0;t<this.itemSize;t++)e.push(this.data.array[n+t])}return new kr(new this.array.constructor(e),this.itemSize,this.normalized)}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.clone(t)),new e(t.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){pt(`InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.`);let e=[];for(let t=0;t<this.count;t++){let n=t*this.data.stride+this.offset;for(let t=0;t<this.itemSize;t++)e.push(this.data.array[n+t])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:e,normalized:this.normalized}}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}},qr=0,Jr=class extends vt{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:qr++}),this.uuid=Ct(),this.name=``,this.type=`Material`,this.blending=1,this.side=0,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=204,this.blendDst=205,this.blendEquation=100,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new V(0,0,0),this.blendAlpha=0,this.depthFunc=3,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=519,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=it,this.stencilZFail=it,this.stencilZPass=it,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(let t in e){let n=e[t];if(n===void 0){N(`Material: parameter '${t}' has value of undefined.`);continue}let r=this[t];if(r===void 0){N(`Material: '${t}' is not a property of THREE.${this.type}.`);continue}r&&r.isColor?r.set(n):r&&r.isVector3&&n&&n.isVector3?r.copy(n):this[t]=n}}toJSON(e){let t=e===void 0||typeof e==`string`;t&&(e={textures:{},images:{}});let n={metadata:{version:4.7,type:`Material`,generator:`Material.toJSON`}};n.uuid=this.uuid,n.type=this.type,this.name!==``&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(n.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(n.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==1&&(n.blending=this.blending),this.side!==0&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==204&&(n.blendSrc=this.blendSrc),this.blendDst!==205&&(n.blendDst=this.blendDst),this.blendEquation!==100&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==3&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==519&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==7680&&(n.stencilFail=this.stencilFail),this.stencilZFail!==7680&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==7680&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.allowOverride===!1&&(n.allowOverride=!1),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!==`round`&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!==`round`&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function r(e){let t=[];for(let n in e){let r=e[n];delete r.metadata,t.push(r)}return t}if(t){let t=r(e.textures),i=r(e.images);t.length>0&&(n.textures=t),i.length>0&&(n.images=i)}return n}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;let t=e.clippingPlanes,n=null;if(t!==null){let e=t.length;n=Array(e);for(let r=0;r!==e;++r)n[r]=t[r].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.allowOverride=e.allowOverride,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:`dispose`})}set needsUpdate(e){e===!0&&this.version++}},Yr=class extends Jr{constructor(e){super(),this.isSpriteMaterial=!0,this.type=`SpriteMaterial`,this.color=new V(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.rotation=e.rotation,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}},Xr,Zr=new L,Qr=new L,$r=new L,ei=new I,ti=new I,ni=new z,ri=new L,ii=new L,ai=new L,oi=new I,si=new I,ci=new I,li=class extends Vn{constructor(e=new Yr){if(super(),this.isSprite=!0,this.type=`Sprite`,Xr===void 0){Xr=new Ur;let e=new Wr(new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),5);Xr.setIndex([0,1,2,0,2,3]),Xr.setAttribute(`position`,new Kr(e,3,0,!1)),Xr.setAttribute(`uv`,new Kr(e,2,3,!1))}this.geometry=Xr,this.material=e,this.center=new I(.5,.5),this.count=1}raycast(e,t){e.camera===null&&P(`Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.`),Qr.setFromMatrixScale(this.matrixWorld),ni.copy(e.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(e.camera.matrixWorldInverse,this.matrixWorld),$r.setFromMatrixPosition(this.modelViewMatrix),e.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&Qr.multiplyScalar(-$r.z);let n=this.material.rotation,r,i;n!==0&&(i=Math.cos(n),r=Math.sin(n));let a=this.center;ui(ri.set(-.5,-.5,0),$r,a,Qr,r,i),ui(ii.set(.5,-.5,0),$r,a,Qr,r,i),ui(ai.set(.5,.5,0),$r,a,Qr,r,i),oi.set(0,0),si.set(1,0),ci.set(1,1);let o=e.ray.intersectTriangle(ri,ii,ai,!1,Zr);if(o===null&&(ui(ii.set(-.5,.5,0),$r,a,Qr,r,i),si.set(0,1),o=e.ray.intersectTriangle(ri,ai,ii,!1,Zr),o===null))return;let s=e.ray.origin.distanceTo(Zr);s<e.near||s>e.far||t.push({distance:s,point:Zr.clone(),uv:ur.getInterpolation(Zr,ri,ii,ai,oi,si,ci,new I),face:null,object:this})}copy(e,t){return super.copy(e,t),e.center!==void 0&&this.center.copy(e.center),this.material=e.material,this}};function ui(e,t,n,r,i,a){ei.subVectors(e,n).addScalar(.5).multiply(r),i===void 0?ti.copy(ei):(ti.x=a*ei.x-i*ei.y,ti.y=i*ei.x+a*ei.y),e.copy(t),e.x+=ti.x,e.y+=ti.y,e.applyMatrix4(ni)}var di=new L,fi=new L,pi=new L,mi=new L,hi=new L,gi=new L,_i=new L,vi=class{constructor(e=new L,t=new L(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,di)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);let n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){let t=di.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(di.copy(this.origin).addScaledVector(this.direction,t),di.distanceToSquared(e))}distanceSqToSegment(e,t,n,r){fi.copy(e).add(t).multiplyScalar(.5),pi.copy(t).sub(e).normalize(),mi.copy(this.origin).sub(fi);let i=e.distanceTo(t)*.5,a=-this.direction.dot(pi),o=mi.dot(this.direction),s=-mi.dot(pi),c=mi.lengthSq(),l=Math.abs(1-a*a),u,d,f,p;if(l>0)if(u=a*s-o,d=a*o-s,p=i*l,u>=0)if(d>=-p)if(d<=p){let e=1/l;u*=e,d*=e,f=u*(u+a*d+2*o)+d*(a*u+d+2*s)+c}else d=i,u=Math.max(0,-(a*d+o)),f=-u*u+d*(d+2*s)+c;else d=-i,u=Math.max(0,-(a*d+o)),f=-u*u+d*(d+2*s)+c;else d<=-p?(u=Math.max(0,-(-a*i+o)),d=u>0?-i:Math.min(Math.max(-i,-s),i),f=-u*u+d*(d+2*s)+c):d<=p?(u=0,d=Math.min(Math.max(-i,-s),i),f=d*(d+2*s)+c):(u=Math.max(0,-(a*i+o)),d=u>0?i:Math.min(Math.max(-i,-s),i),f=-u*u+d*(d+2*s)+c);else d=a>0?-i:i,u=Math.max(0,-(a*d+o)),f=-u*u+d*(d+2*s)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,u),r&&r.copy(fi).addScaledVector(pi,d),f}intersectSphere(e,t){di.subVectors(e.center,this.origin);let n=di.dot(this.direction),r=di.dot(di)-n*n,i=e.radius*e.radius;if(r>i)return null;let a=Math.sqrt(i-r),o=n-a,s=n+a;return s<0?null:o<0?this.at(s,t):this.at(o,t)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){let t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;let n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){let n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){let t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,r,i,a,o,s,c=1/this.direction.x,l=1/this.direction.y,u=1/this.direction.z,d=this.origin;return c>=0?(n=(e.min.x-d.x)*c,r=(e.max.x-d.x)*c):(n=(e.max.x-d.x)*c,r=(e.min.x-d.x)*c),l>=0?(i=(e.min.y-d.y)*l,a=(e.max.y-d.y)*l):(i=(e.max.y-d.y)*l,a=(e.min.y-d.y)*l),n>a||i>r||((i>n||isNaN(n))&&(n=i),(a<r||isNaN(r))&&(r=a),u>=0?(o=(e.min.z-d.z)*u,s=(e.max.z-d.z)*u):(o=(e.max.z-d.z)*u,s=(e.min.z-d.z)*u),n>s||o>r)||((o>n||n!==n)&&(n=o),(s<r||r!==r)&&(r=s),r<0)?null:this.at(n>=0?n:r,t)}intersectsBox(e){return this.intersectBox(e,di)!==null}intersectTriangle(e,t,n,r,i){hi.subVectors(t,e),gi.subVectors(n,e),_i.crossVectors(hi,gi);let a=this.direction.dot(_i),o;if(a>0){if(r)return null;o=1}else if(a<0)o=-1,a=-a;else return null;mi.subVectors(this.origin,e);let s=o*this.direction.dot(gi.crossVectors(mi,gi));if(s<0)return null;let c=o*this.direction.dot(hi.cross(mi));if(c<0||s+c>a)return null;let l=-o*mi.dot(_i);return l<0?null:this.at(l/a,i)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},yi=class extends Jr{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type=`MeshBasicMaterial`,this.color=new V(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new wn,this.combine=0,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap=`round`,this.wireframeLinejoin=`round`,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}},bi=new z,xi=new vi,Si=new Fr,Ci=new L,wi=new L,Ti=new L,Ei=new L,Di=new L,Oi=new L,ki=new L,Ai=new L,U=class extends Vn{constructor(e=new Ur,t=new yi){super(),this.isMesh=!0,this.type=`Mesh`,this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){let e=this.geometry.morphAttributes,t=Object.keys(e);if(t.length>0){let n=e[t[0]];if(n!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let e=0,t=n.length;e<t;e++){let t=n[e].name||String(e);this.morphTargetInfluences.push(0),this.morphTargetDictionary[t]=e}}}}getVertexPosition(e,t){let n=this.geometry,r=n.attributes.position,i=n.morphAttributes.position,a=n.morphTargetsRelative;t.fromBufferAttribute(r,e);let o=this.morphTargetInfluences;if(i&&o){Oi.set(0,0,0);for(let n=0,r=i.length;n<r;n++){let r=o[n],s=i[n];r!==0&&(Di.fromBufferAttribute(s,e),a?Oi.addScaledVector(Di,r):Oi.addScaledVector(Di.sub(t),r))}t.add(Oi)}return t}raycast(e,t){let n=this.geometry,r=this.material,i=this.matrixWorld;r!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),Si.copy(n.boundingSphere),Si.applyMatrix4(i),xi.copy(e.ray).recast(e.near),!(Si.containsPoint(xi.origin)===!1&&(xi.intersectSphere(Si,Ci)===null||xi.origin.distanceToSquared(Ci)>(e.far-e.near)**2))&&(bi.copy(i).invert(),xi.copy(e.ray).applyMatrix4(bi),!(n.boundingBox!==null&&xi.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(e,t,xi)))}_computeIntersections(e,t,n){let r,i=this.geometry,a=this.material,o=i.index,s=i.attributes.position,c=i.attributes.uv,l=i.attributes.uv1,u=i.attributes.normal,d=i.groups,f=i.drawRange;if(o!==null)if(Array.isArray(a))for(let i=0,s=d.length;i<s;i++){let s=d[i],p=a[s.materialIndex],m=Math.max(s.start,f.start),h=Math.min(o.count,Math.min(s.start+s.count,f.start+f.count));for(let i=m,a=h;i<a;i+=3){let a=o.getX(i),d=o.getX(i+1),f=o.getX(i+2);r=Mi(this,p,e,n,c,l,u,a,d,f),r&&(r.faceIndex=Math.floor(i/3),r.face.materialIndex=s.materialIndex,t.push(r))}}else{let i=Math.max(0,f.start),s=Math.min(o.count,f.start+f.count);for(let d=i,f=s;d<f;d+=3){let i=o.getX(d),s=o.getX(d+1),f=o.getX(d+2);r=Mi(this,a,e,n,c,l,u,i,s,f),r&&(r.faceIndex=Math.floor(d/3),t.push(r))}}else if(s!==void 0)if(Array.isArray(a))for(let i=0,o=d.length;i<o;i++){let o=d[i],p=a[o.materialIndex],m=Math.max(o.start,f.start),h=Math.min(s.count,Math.min(o.start+o.count,f.start+f.count));for(let i=m,a=h;i<a;i+=3){let a=i,s=i+1,d=i+2;r=Mi(this,p,e,n,c,l,u,a,s,d),r&&(r.faceIndex=Math.floor(i/3),r.face.materialIndex=o.materialIndex,t.push(r))}}else{let i=Math.max(0,f.start),o=Math.min(s.count,f.start+f.count);for(let s=i,d=o;s<d;s+=3){let i=s,o=s+1,d=s+2;r=Mi(this,a,e,n,c,l,u,i,o,d),r&&(r.faceIndex=Math.floor(s/3),t.push(r))}}}};function ji(e,t,n,r,i,a,o,s){let c;if(c=t.side===1?r.intersectTriangle(o,a,i,!0,s):r.intersectTriangle(i,a,o,t.side===0,s),c===null)return null;Ai.copy(s),Ai.applyMatrix4(e.matrixWorld);let l=n.ray.origin.distanceTo(Ai);return l<n.near||l>n.far?null:{distance:l,point:Ai.clone(),object:e}}function Mi(e,t,n,r,i,a,o,s,c,l){e.getVertexPosition(s,wi),e.getVertexPosition(c,Ti),e.getVertexPosition(l,Ei);let u=ji(e,t,n,r,wi,Ti,Ei,ki);if(u){let e=new L;ur.getBarycoord(ki,wi,Ti,Ei,e),i&&(u.uv=ur.getInterpolatedAttribute(i,s,c,l,e,new I)),a&&(u.uv1=ur.getInterpolatedAttribute(a,s,c,l,e,new I)),o&&(u.normal=ur.getInterpolatedAttribute(o,s,c,l,e,new L),u.normal.dot(r.direction)>0&&u.normal.multiplyScalar(-1));let t={a:s,b:c,c:l,normal:new L,materialIndex:0};ur.getNormal(wi,Ti,Ei,t.normal),u.face=t,u.barycoord=e}return u}var Ni=new un,Pi=new un,Fi=new un,Ii=new un,Li=new z,Ri=new L,zi=new Fr,Bi=new z,Vi=new vi,Hi=class extends U{constructor(e,t){super(e,t),this.isSkinnedMesh=!0,this.type=`SkinnedMesh`,this.bindMode=l,this.bindMatrix=new z,this.bindMatrixInverse=new z,this.boundingBox=null,this.boundingSphere=null}computeBoundingBox(){let e=this.geometry;this.boundingBox===null&&(this.boundingBox=new dr),this.boundingBox.makeEmpty();let t=e.getAttribute(`position`);for(let e=0;e<t.count;e++)this.getVertexPosition(e,Ri),this.boundingBox.expandByPoint(Ri)}computeBoundingSphere(){let e=this.geometry;this.boundingSphere===null&&(this.boundingSphere=new Fr),this.boundingSphere.makeEmpty();let t=e.getAttribute(`position`);for(let e=0;e<t.count;e++)this.getVertexPosition(e,Ri),this.boundingSphere.expandByPoint(Ri)}copy(e,t){return super.copy(e,t),this.bindMode=e.bindMode,this.bindMatrix.copy(e.bindMatrix),this.bindMatrixInverse.copy(e.bindMatrixInverse),this.skeleton=e.skeleton,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}raycast(e,t){let n=this.material,r=this.matrixWorld;n!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),zi.copy(this.boundingSphere),zi.applyMatrix4(r),e.ray.intersectsSphere(zi)!==!1&&(Bi.copy(r).invert(),Vi.copy(e.ray).applyMatrix4(Bi),!(this.boundingBox!==null&&Vi.intersectsBox(this.boundingBox)===!1)&&this._computeIntersections(e,t,Vi)))}getVertexPosition(e,t){return super.getVertexPosition(e,t),this.applyBoneTransform(e,t),t}bind(e,t){this.skeleton=e,t===void 0&&(this.updateMatrixWorld(!0),this.skeleton.calculateInverses(),t=this.matrixWorld),this.bindMatrix.copy(t),this.bindMatrixInverse.copy(t).invert()}pose(){this.skeleton.pose()}normalizeSkinWeights(){let e=new un,t=this.geometry.attributes.skinWeight;for(let n=0,r=t.count;n<r;n++){e.fromBufferAttribute(t,n);let r=1/e.manhattanLength();r===1/0?e.set(1,0,0,0):e.multiplyScalar(r),t.setXYZW(n,e.x,e.y,e.z,e.w)}}updateMatrixWorld(e){super.updateMatrixWorld(e),this.bindMode===`attached`?this.bindMatrixInverse.copy(this.matrixWorld).invert():this.bindMode===`detached`?this.bindMatrixInverse.copy(this.bindMatrix).invert():N(`SkinnedMesh: Unrecognized bindMode: `+this.bindMode)}applyBoneTransform(e,t){let n=this.skeleton,r=this.geometry;Pi.fromBufferAttribute(r.attributes.skinIndex,e),Fi.fromBufferAttribute(r.attributes.skinWeight,e),t.isVector4?(Ni.copy(t),t.set(0,0,0,0)):(Ni.set(...t,1),t.set(0,0,0)),Ni.applyMatrix4(this.bindMatrix);for(let e=0;e<4;e++){let r=Fi.getComponent(e);if(r!==0){let i=Pi.getComponent(e);Li.multiplyMatrices(n.bones[i].matrixWorld,n.boneInverses[i]),t.addScaledVector(Ii.copy(Ni).applyMatrix4(Li),r)}}return t.isVector4&&(t.w=Ni.w),t.applyMatrix4(this.bindMatrixInverse)}},Ui=class extends Vn{constructor(){super(),this.isBone=!0,this.type=`Bone`}},Wi=class extends ln{constructor(e=null,t=1,n=1,r,i,a,o,s,c=p,l=p,u,d){super(null,a,o,s,c,l,r,i,u,d),this.isDataTexture=!0,this.image={data:e,width:t,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}},Gi=new z,Ki=new z,qi=class e{constructor(e=[],t=[]){this.uuid=Ct(),this.bones=e.slice(0),this.boneInverses=t,this.boneMatrices=null,this.previousBoneMatrices=null,this.boneTexture=null,this.init()}init(){let e=this.bones,t=this.boneInverses;if(this.boneMatrices=new Float32Array(e.length*16),t.length===0)this.calculateInverses();else if(e.length!==t.length){N(`Skeleton: Number of inverse bone matrices does not match amount of bones.`),this.boneInverses=[];for(let e=0,t=this.bones.length;e<t;e++)this.boneInverses.push(new z)}}calculateInverses(){this.boneInverses.length=0;for(let e=0,t=this.bones.length;e<t;e++){let t=new z;this.bones[e]&&t.copy(this.bones[e].matrixWorld).invert(),this.boneInverses.push(t)}}pose(){for(let e=0,t=this.bones.length;e<t;e++){let t=this.bones[e];t&&t.matrixWorld.copy(this.boneInverses[e]).invert()}for(let e=0,t=this.bones.length;e<t;e++){let t=this.bones[e];t&&(t.parent&&t.parent.isBone?(t.matrix.copy(t.parent.matrixWorld).invert(),t.matrix.multiply(t.matrixWorld)):t.matrix.copy(t.matrixWorld),t.matrix.decompose(t.position,t.quaternion,t.scale))}}update(){let e=this.bones,t=this.boneInverses,n=this.boneMatrices,r=this.boneTexture;for(let r=0,i=e.length;r<i;r++){let i=e[r]?e[r].matrixWorld:Ki;Gi.multiplyMatrices(i,t[r]),Gi.toArray(n,r*16)}r!==null&&(r.needsUpdate=!0)}clone(){return new e(this.bones,this.boneInverses)}computeBoneTexture(){let e=Math.sqrt(this.bones.length*4);e=Math.ceil(e/4)*4,e=Math.max(e,4);let t=new Float32Array(e*e*4);t.set(this.boneMatrices);let n=new Wi(t,e,e,ie,T);return n.needsUpdate=!0,this.boneMatrices=t,this.boneTexture=n,this}getBoneByName(e){for(let t=0,n=this.bones.length;t<n;t++){let n=this.bones[t];if(n.name===e)return n}}dispose(){this.boneTexture!==null&&(this.boneTexture.dispose(),this.boneTexture=null)}fromJSON(e,t){this.uuid=e.uuid;for(let n=0,r=e.bones.length;n<r;n++){let r=e.bones[n],i=t[r];i===void 0&&(N(`Skeleton: No bone found with UUID:`,r),i=new Ui),this.bones.push(i),this.boneInverses.push(new z().fromArray(e.boneInverses[n]))}return this.init(),this}toJSON(){let e={metadata:{version:4.7,type:`Skeleton`,generator:`Skeleton.toJSON`},bones:[],boneInverses:[]};e.uuid=this.uuid;let t=this.bones,n=this.boneInverses;for(let r=0,i=t.length;r<i;r++){let i=t[r];e.bones.push(i.uuid);let a=n[r];e.boneInverses.push(a.toArray())}return e}},Ji=class extends kr{constructor(e,t,n,r=1){super(e,t,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=r}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){let e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}},Yi=new z,Xi=new z,Zi=[],Qi=new dr,$i=new z,ea=new U,ta=new Fr,na=class extends U{constructor(e,t,n){super(e,t),this.isInstancedMesh=!0,this.instanceMatrix=new Ji(new Float32Array(n*16),16),this.previousInstanceMatrix=null,this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let e=0;e<n;e++)this.setMatrixAt(e,$i)}computeBoundingBox(){let e=this.geometry,t=this.count;this.boundingBox===null&&(this.boundingBox=new dr),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,Yi),Qi.copy(e.boundingBox).applyMatrix4(Yi),this.boundingBox.union(Qi)}computeBoundingSphere(){let e=this.geometry,t=this.count;this.boundingSphere===null&&(this.boundingSphere=new Fr),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,Yi),ta.copy(e.boundingSphere).applyMatrix4(Yi),this.boundingSphere.union(ta)}copy(e,t){return super.copy(e,t),this.instanceMatrix.copy(e.instanceMatrix),e.previousInstanceMatrix!==null&&(this.previousInstanceMatrix=e.previousInstanceMatrix.clone()),e.morphTexture!==null&&(this.morphTexture=e.morphTexture.clone()),e.instanceColor!==null&&(this.instanceColor=e.instanceColor.clone()),this.count=e.count,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}getColorAt(e,t){return this.instanceColor===null?t.setRGB(1,1,1):t.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,t){return t.fromArray(this.instanceMatrix.array,e*16)}getMorphAt(e,t){let n=t.morphTargetInfluences,r=this.morphTexture.source.data.data,i=e*(n.length+1)+1;for(let e=0;e<n.length;e++)n[e]=r[i+e]}raycast(e,t){let n=this.matrixWorld,r=this.count;if(ea.geometry=this.geometry,ea.material=this.material,ea.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),ta.copy(this.boundingSphere),ta.applyMatrix4(n),e.ray.intersectsSphere(ta)!==!1))for(let i=0;i<r;i++){this.getMatrixAt(i,Yi),Xi.multiplyMatrices(n,Yi),ea.matrixWorld=Xi,ea.raycast(e,Zi);for(let e=0,n=Zi.length;e<n;e++){let n=Zi[e];n.instanceId=i,n.object=this,t.push(n)}Zi.length=0}}setColorAt(e,t){return this.instanceColor===null&&(this.instanceColor=new Ji(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),t.toArray(this.instanceColor.array,e*3),this}setMatrixAt(e,t){return t.toArray(this.instanceMatrix.array,e*16),this}setMorphAt(e,t){let n=t.morphTargetInfluences,r=n.length+1;this.morphTexture===null&&(this.morphTexture=new Wi(new Float32Array(r*this.count),r,this.count,se,T));let i=this.morphTexture.source.data.data,a=0;for(let e=0;e<n.length;e++)a+=n[e];let o=this.geometry.morphTargetsRelative?1:1-a,s=r*e;return i[s]=o,i.set(n,s+1),this}updateMorphTargets(){}dispose(){this.dispatchEvent({type:`dispose`}),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null)}},ra=new L,ia=new L,aa=new R,oa=class{constructor(e=new L(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,r){return this.normal.set(e,t,n),this.constant=r,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){let r=ra.subVectors(n,t).cross(ia.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(r,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){let e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t,n=!0){let r=e.delta(ra),i=this.normal.dot(r);if(i===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;let a=-(e.start.dot(this.normal)+this.constant)/i;return n===!0&&(a<0||a>1)?null:t.copy(e.start).addScaledVector(r,a)}intersectsLine(e){let t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){let n=t||aa.getNormalMatrix(e),r=this.coplanarPoint(ra).applyMatrix4(e),i=this.normal.applyMatrix3(n).normalize();return this.constant=-r.dot(i),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}},sa=new Fr,ca=new I(.5,.5),la=new L,ua=class{constructor(e=new oa,t=new oa,n=new oa,r=new oa,i=new oa,a=new oa){this.planes=[e,t,n,r,i,a]}set(e,t,n,r,i,a){let o=this.planes;return o[0].copy(e),o[1].copy(t),o[2].copy(n),o[3].copy(r),o[4].copy(i),o[5].copy(a),this}copy(e){let t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=ot,n=!1){let r=this.planes,i=e.elements,a=i[0],o=i[1],s=i[2],c=i[3],l=i[4],u=i[5],d=i[6],f=i[7],p=i[8],m=i[9],h=i[10],g=i[11],_=i[12],v=i[13],y=i[14],b=i[15];if(r[0].setComponents(c-a,f-l,g-p,b-_).normalize(),r[1].setComponents(c+a,f+l,g+p,b+_).normalize(),r[2].setComponents(c+o,f+u,g+m,b+v).normalize(),r[3].setComponents(c-o,f-u,g-m,b-v).normalize(),n)r[4].setComponents(s,d,h,y).normalize(),r[5].setComponents(c-s,f-d,g-h,b-y).normalize();else if(r[4].setComponents(c-s,f-d,g-h,b-y).normalize(),t===2e3)r[5].setComponents(c+s,f+d,g+h,b+y).normalize();else if(t===2001)r[5].setComponents(s,d,h,y).normalize();else throw Error(`THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: `+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),sa.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{let t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),sa.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(sa)}intersectsSprite(e){return sa.center.set(0,0,0),sa.radius=.7071067811865476+ca.distanceTo(e.center),sa.applyMatrix4(e.matrixWorld),this.intersectsSphere(sa)}intersectsSphere(e){let t=this.planes,n=e.center,r=-e.radius;for(let e=0;e<6;e++)if(t[e].distanceToPoint(n)<r)return!1;return!0}intersectsBox(e){let t=this.planes;for(let n=0;n<6;n++){let r=t[n];if(la.x=r.normal.x>0?e.max.x:e.min.x,la.y=r.normal.y>0?e.max.y:e.min.y,la.z=r.normal.z>0?e.max.z:e.min.z,r.distanceToPoint(la)<0)return!1}return!0}containsPoint(e){let t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}},da=class extends Jr{constructor(e){super(),this.isLineBasicMaterial=!0,this.type=`LineBasicMaterial`,this.color=new V(16777215),this.map=null,this.linewidth=1,this.linecap=`round`,this.linejoin=`round`,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}},fa=new L,pa=new L,ma=new z,ha=new vi,ga=new Fr,_a=new L,va=new L,ya=class extends Vn{constructor(e=new Ur,t=new da){super(),this.isLine=!0,this.type=`Line`,this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){let e=this.geometry;if(e.index===null){let t=e.attributes.position,n=[0];for(let e=1,r=t.count;e<r;e++)fa.fromBufferAttribute(t,e-1),pa.fromBufferAttribute(t,e),n[e]=n[e-1],n[e]+=fa.distanceTo(pa);e.setAttribute(`lineDistance`,new H(n,1))}else N(`Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.`);return this}raycast(e,t){let n=this.geometry,r=this.matrixWorld,i=e.params.Line.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),ga.copy(n.boundingSphere),ga.applyMatrix4(r),ga.radius+=i,e.ray.intersectsSphere(ga)===!1)return;ma.copy(r).invert(),ha.copy(e.ray).applyMatrix4(ma);let o=i/((this.scale.x+this.scale.y+this.scale.z)/3),s=o*o,c=this.isLineSegments?2:1,l=n.index,u=n.attributes.position;if(l!==null){let n=Math.max(0,a.start),r=Math.min(l.count,a.start+a.count);for(let i=n,a=r-1;i<a;i+=c){let n=l.getX(i),r=l.getX(i+1),a=ba(this,e,ha,s,n,r,i);a&&t.push(a)}if(this.isLineLoop){let i=l.getX(r-1),a=l.getX(n),o=ba(this,e,ha,s,i,a,r-1);o&&t.push(o)}}else{let n=Math.max(0,a.start),r=Math.min(u.count,a.start+a.count);for(let i=n,a=r-1;i<a;i+=c){let n=ba(this,e,ha,s,i,i+1,i);n&&t.push(n)}if(this.isLineLoop){let i=ba(this,e,ha,s,r-1,n,r-1);i&&t.push(i)}}}updateMorphTargets(){let e=this.geometry.morphAttributes,t=Object.keys(e);if(t.length>0){let n=e[t[0]];if(n!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let e=0,t=n.length;e<t;e++){let t=n[e].name||String(e);this.morphTargetInfluences.push(0),this.morphTargetDictionary[t]=e}}}}};function ba(e,t,n,r,i,a,o){let s=e.geometry.attributes.position;if(fa.fromBufferAttribute(s,i),pa.fromBufferAttribute(s,a),n.distanceSqToSegment(fa,pa,_a,va)>r)return;_a.applyMatrix4(e.matrixWorld);let c=t.ray.origin.distanceTo(_a);if(!(c<t.near||c>t.far))return{distance:c,point:va.clone().applyMatrix4(e.matrixWorld),index:o,face:null,faceIndex:null,barycoord:null,object:e}}var xa=new L,Sa=new L,Ca=class extends ya{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type=`LineSegments`}computeLineDistances(){let e=this.geometry;if(e.index===null){let t=e.attributes.position,n=[];for(let e=0,r=t.count;e<r;e+=2)xa.fromBufferAttribute(t,e),Sa.fromBufferAttribute(t,e+1),n[e]=e===0?0:n[e-1],n[e+1]=n[e]+xa.distanceTo(Sa);e.setAttribute(`lineDistance`,new H(n,1))}else N(`LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.`);return this}},wa=class extends ya{constructor(e,t){super(e,t),this.isLineLoop=!0,this.type=`LineLoop`}},Ta=class extends Jr{constructor(e){super(),this.isPointsMaterial=!0,this.type=`PointsMaterial`,this.color=new V(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}},Ea=new z,Da=new vi,Oa=new Fr,ka=new L,Aa=class extends Vn{constructor(e=new Ur,t=new Ta){super(),this.isPoints=!0,this.type=`Points`,this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}raycast(e,t){let n=this.geometry,r=this.matrixWorld,i=e.params.Points.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Oa.copy(n.boundingSphere),Oa.applyMatrix4(r),Oa.radius+=i,e.ray.intersectsSphere(Oa)===!1)return;Ea.copy(r).invert(),Da.copy(e.ray).applyMatrix4(Ea);let o=i/((this.scale.x+this.scale.y+this.scale.z)/3),s=o*o,c=n.index,l=n.attributes.position;if(c!==null){let n=Math.max(0,a.start),i=Math.min(c.count,a.start+a.count);for(let a=n,o=i;a<o;a++){let n=c.getX(a);ka.fromBufferAttribute(l,n),ja(ka,n,s,r,e,t,this)}}else{let n=Math.max(0,a.start),i=Math.min(l.count,a.start+a.count);for(let a=n,o=i;a<o;a++)ka.fromBufferAttribute(l,a),ja(ka,a,s,r,e,t,this)}}updateMorphTargets(){let e=this.geometry.morphAttributes,t=Object.keys(e);if(t.length>0){let n=e[t[0]];if(n!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let e=0,t=n.length;e<t;e++){let t=n[e].name||String(e);this.morphTargetInfluences.push(0),this.morphTargetDictionary[t]=e}}}}};function ja(e,t,n,r,i,a,o){let s=Da.distanceSqToPoint(e);if(s<n){let n=new L;Da.closestPointToPoint(e,n),n.applyMatrix4(r);let c=i.ray.origin.distanceTo(n);if(c<i.near||c>i.far)return;a.push({distance:c,distanceToRay:Math.sqrt(s),point:n,index:t,face:null,faceIndex:null,barycoord:null,object:o})}}var Ma=class extends ln{constructor(e=[],t=301,n,r,i,a,o,s,c,l){super(e,t,n,r,i,a,o,s,c,l),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}},Na=class extends ln{constructor(e,t,n,r,i,a,o,s,c){super(e,t,n,r,i,a,o,s,c),this.isCanvasTexture=!0,this.needsUpdate=!0}},Pa=class extends ln{constructor(e,t,n=w,r,i,a,o=p,s=p,c,l=ae,u=1){if(l!==1026&&l!==1027)throw Error(`DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat`);super({width:e,height:t,depth:u},r,i,a,o,s,l,n,c),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new an(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){let t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}},Fa=class extends Pa{constructor(e,t=w,n=301,r,i,a=p,o=p,s,c=ae){let l={width:e,height:e,depth:1},u=[l,l,l,l,l,l];super(e,e,t,n,r,i,a,o,s,c),this.image=u,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(e){this.image=e}},Ia=class extends ln{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}},W=class e extends Ur{constructor(e=1,t=1,n=1,r=1,i=1,a=1){super(),this.type=`BoxGeometry`,this.parameters={width:e,height:t,depth:n,widthSegments:r,heightSegments:i,depthSegments:a};let o=this;r=Math.floor(r),i=Math.floor(i),a=Math.floor(a);let s=[],c=[],l=[],u=[],d=0,f=0;p(`z`,`y`,`x`,-1,-1,n,t,e,a,i,0),p(`z`,`y`,`x`,1,-1,n,t,-e,a,i,1),p(`x`,`z`,`y`,1,1,e,n,t,r,a,2),p(`x`,`z`,`y`,1,-1,e,n,-t,r,a,3),p(`x`,`y`,`z`,1,-1,e,t,n,r,i,4),p(`x`,`y`,`z`,-1,-1,e,t,-n,r,i,5),this.setIndex(s),this.setAttribute(`position`,new H(c,3)),this.setAttribute(`normal`,new H(l,3)),this.setAttribute(`uv`,new H(u,2));function p(e,t,n,r,i,a,p,m,h,g,_){let v=a/h,y=p/g,b=a/2,x=p/2,S=m/2,C=h+1,w=g+1,T=0,E=0,D=new L;for(let a=0;a<w;a++){let o=a*y-x;for(let s=0;s<C;s++)D[e]=(s*v-b)*r,D[t]=o*i,D[n]=S,c.push(D.x,D.y,D.z),D[e]=0,D[t]=0,D[n]=m>0?1:-1,l.push(D.x,D.y,D.z),u.push(s/h),u.push(1-a/g),T+=1}for(let e=0;e<g;e++)for(let t=0;t<h;t++){let n=d+t+C*e,r=d+t+C*(e+1),i=d+(t+1)+C*(e+1),a=d+(t+1)+C*e;s.push(n,r,a),s.push(r,i,a),E+=6}o.addGroup(f,E,_),f+=E,d+=T}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(t){return new e(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}},La=class e extends Ur{constructor(e=1,t=1,n=4,r=8,i=1){super(),this.type=`CapsuleGeometry`,this.parameters={radius:e,height:t,capSegments:n,radialSegments:r,heightSegments:i},t=Math.max(0,t),n=Math.max(1,Math.floor(n)),r=Math.max(3,Math.floor(r)),i=Math.max(1,Math.floor(i));let a=[],o=[],s=[],c=[],l=t/2,u=Math.PI/2*e,d=t,f=2*u+d,p=n*2+i,m=r+1,h=new L,g=new L;for(let _=0;_<=p;_++){let v=0,y=0,b=0,x=0;if(_<=n){let t=_/n,r=t*Math.PI/2;y=-l-e*Math.cos(r),b=e*Math.sin(r),x=-e*Math.cos(r),v=t*u}else if(_<=n+i){let r=(_-n)/i;y=-l+r*t,b=e,x=0,v=u+r*d}else{let t=(_-n-i)/n,r=t*Math.PI/2;y=l+e*Math.sin(r),b=e*Math.cos(r),x=e*Math.sin(r),v=u+d+t*u}let S=Math.max(0,Math.min(1,v/f)),C=0;_===0?C=.5/r:_===p&&(C=-.5/r);for(let e=0;e<=r;e++){let t=e/r,n=t*Math.PI*2,i=Math.sin(n),a=Math.cos(n);g.x=-b*a,g.y=y,g.z=b*i,o.push(g.x,g.y,g.z),h.set(-b*a,x,b*i),h.normalize(),s.push(h.x,h.y,h.z),c.push(t+C,S)}if(_>0){let e=(_-1)*m;for(let t=0;t<r;t++){let n=e+t,r=e+t+1,i=_*m+t,o=_*m+t+1;a.push(n,r,i),a.push(r,o,i)}}}this.setIndex(a),this.setAttribute(`position`,new H(o,3)),this.setAttribute(`normal`,new H(s,3)),this.setAttribute(`uv`,new H(c,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(t){return new e(t.radius,t.height,t.capSegments,t.radialSegments,t.heightSegments)}},Ra=class e extends Ur{constructor(e=1,t=32,n=0,r=Math.PI*2){super(),this.type=`CircleGeometry`,this.parameters={radius:e,segments:t,thetaStart:n,thetaLength:r},t=Math.max(3,t);let i=[],a=[],o=[],s=[],c=new L,l=new I;a.push(0,0,0),o.push(0,0,1),s.push(.5,.5);for(let i=0,u=3;i<=t;i++,u+=3){let d=n+i/t*r;c.x=e*Math.cos(d),c.y=e*Math.sin(d),a.push(c.x,c.y,c.z),o.push(0,0,1),l.x=(a[u]/e+1)/2,l.y=(a[u+1]/e+1)/2,s.push(l.x,l.y)}for(let e=1;e<=t;e++)i.push(e,e+1,0);this.setIndex(i),this.setAttribute(`position`,new H(a,3)),this.setAttribute(`normal`,new H(o,3)),this.setAttribute(`uv`,new H(s,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(t){return new e(t.radius,t.segments,t.thetaStart,t.thetaLength)}},G=class e extends Ur{constructor(e=1,t=1,n=1,r=32,i=1,a=!1,o=0,s=Math.PI*2){super(),this.type=`CylinderGeometry`,this.parameters={radiusTop:e,radiusBottom:t,height:n,radialSegments:r,heightSegments:i,openEnded:a,thetaStart:o,thetaLength:s};let c=this;r=Math.floor(r),i=Math.floor(i);let l=[],u=[],d=[],f=[],p=0,m=[],h=n/2,g=0;_(),a===!1&&(e>0&&v(!0),t>0&&v(!1)),this.setIndex(l),this.setAttribute(`position`,new H(u,3)),this.setAttribute(`normal`,new H(d,3)),this.setAttribute(`uv`,new H(f,2));function _(){let a=new L,_=new L,v=0,y=(t-e)/n;for(let c=0;c<=i;c++){let l=[],g=c/i,v=g*(t-e)+e;for(let e=0;e<=r;e++){let t=e/r,i=t*s+o,c=Math.sin(i),m=Math.cos(i);_.x=v*c,_.y=-g*n+h,_.z=v*m,u.push(_.x,_.y,_.z),a.set(c,y,m).normalize(),d.push(a.x,a.y,a.z),f.push(t,1-g),l.push(p++)}m.push(l)}for(let n=0;n<r;n++)for(let r=0;r<i;r++){let a=m[r][n],o=m[r+1][n],s=m[r+1][n+1],c=m[r][n+1];(e>0||r!==0)&&(l.push(a,o,c),v+=3),(t>0||r!==i-1)&&(l.push(o,s,c),v+=3)}c.addGroup(g,v,0),g+=v}function v(n){let i=p,a=new I,m=new L,_=0,v=n===!0?e:t,y=n===!0?1:-1;for(let e=1;e<=r;e++)u.push(0,h*y,0),d.push(0,y,0),f.push(.5,.5),p++;let b=p;for(let e=0;e<=r;e++){let t=e/r*s+o,n=Math.cos(t),i=Math.sin(t);m.x=v*i,m.y=h*y,m.z=v*n,u.push(m.x,m.y,m.z),d.push(0,y,0),a.x=n*.5+.5,a.y=i*.5*y+.5,f.push(a.x,a.y),p++}for(let e=0;e<r;e++){let t=i+e,r=b+e;n===!0?l.push(r,r+1,t):l.push(r+1,r,t),_+=3}c.addGroup(g,_,n===!0?1:2),g+=_}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(t){return new e(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}},za=class e extends G{constructor(e=1,t=1,n=32,r=1,i=!1,a=0,o=Math.PI*2){super(0,e,t,n,r,i,a,o),this.type=`ConeGeometry`,this.parameters={radius:e,height:t,radialSegments:n,heightSegments:r,openEnded:i,thetaStart:a,thetaLength:o}}static fromJSON(t){return new e(t.radius,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}},Ba=class e extends Ur{constructor(e=[],t=[],n=1,r=0){super(),this.type=`PolyhedronGeometry`,this.parameters={vertices:e,indices:t,radius:n,detail:r};let i=[],a=[];o(r),c(n),l(),this.setAttribute(`position`,new H(i,3)),this.setAttribute(`normal`,new H(i.slice(),3)),this.setAttribute(`uv`,new H(a,2)),r===0?this.computeVertexNormals():this.normalizeNormals();function o(e){let n=new L,r=new L,i=new L;for(let a=0;a<t.length;a+=3)f(t[a+0],n),f(t[a+1],r),f(t[a+2],i),s(n,r,i,e)}function s(e,t,n,r){let i=r+1,a=[];for(let r=0;r<=i;r++){a[r]=[];let o=e.clone().lerp(n,r/i),s=t.clone().lerp(n,r/i),c=i-r;for(let e=0;e<=c;e++)e===0&&r===i?a[r][e]=o:a[r][e]=o.clone().lerp(s,e/c)}for(let e=0;e<i;e++)for(let t=0;t<2*(i-e)-1;t++){let n=Math.floor(t/2);t%2==0?(d(a[e][n+1]),d(a[e+1][n]),d(a[e][n])):(d(a[e][n+1]),d(a[e+1][n+1]),d(a[e+1][n]))}}function c(e){let t=new L;for(let n=0;n<i.length;n+=3)t.x=i[n+0],t.y=i[n+1],t.z=i[n+2],t.normalize().multiplyScalar(e),i[n+0]=t.x,i[n+1]=t.y,i[n+2]=t.z}function l(){let e=new L;for(let t=0;t<i.length;t+=3){e.x=i[t+0],e.y=i[t+1],e.z=i[t+2];let n=h(e)/2/Math.PI+.5,r=g(e)/Math.PI+.5;a.push(n,1-r)}p(),u()}function u(){for(let e=0;e<a.length;e+=6){let t=a[e+0],n=a[e+2],r=a[e+4];Math.max(t,n,r)>.9&&Math.min(t,n,r)<.1&&(t<.2&&(a[e+0]+=1),n<.2&&(a[e+2]+=1),r<.2&&(a[e+4]+=1))}}function d(e){i.push(e.x,e.y,e.z)}function f(t,n){let r=t*3;n.x=e[r+0],n.y=e[r+1],n.z=e[r+2]}function p(){let e=new L,t=new L,n=new L,r=new L,o=new I,s=new I,c=new I;for(let l=0,u=0;l<i.length;l+=9,u+=6){e.set(i[l+0],i[l+1],i[l+2]),t.set(i[l+3],i[l+4],i[l+5]),n.set(i[l+6],i[l+7],i[l+8]),o.set(a[u+0],a[u+1]),s.set(a[u+2],a[u+3]),c.set(a[u+4],a[u+5]),r.copy(e).add(t).add(n).divideScalar(3);let d=h(r);m(o,u+0,e,d),m(s,u+2,t,d),m(c,u+4,n,d)}}function m(e,t,n,r){r<0&&e.x===1&&(a[t]=e.x-1),n.x===0&&n.z===0&&(a[t]=r/2/Math.PI+.5)}function h(e){return Math.atan2(e.z,-e.x)}function g(e){return Math.atan2(-e.y,Math.sqrt(e.x*e.x+e.z*e.z))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(t){return new e(t.vertices,t.indices,t.radius,t.detail)}},Va=new L,Ha=new L,Ua=new L,Wa=new ur,Ga=class extends Ur{constructor(e=null,t=1){if(super(),this.type=`EdgesGeometry`,this.parameters={geometry:e,thresholdAngle:t},e!==null){let n=10**4,r=Math.cos(xt*t),i=e.getIndex(),a=e.getAttribute(`position`),o=i?i.count:a.count,s=[0,0,0],c=[`a`,`b`,`c`],l=[,,,],u={},d=[];for(let e=0;e<o;e+=3){i?(s[0]=i.getX(e),s[1]=i.getX(e+1),s[2]=i.getX(e+2)):(s[0]=e,s[1]=e+1,s[2]=e+2);let{a:t,b:o,c:f}=Wa;if(t.fromBufferAttribute(a,s[0]),o.fromBufferAttribute(a,s[1]),f.fromBufferAttribute(a,s[2]),Wa.getNormal(Ua),l[0]=`${Math.round(t.x*n)},${Math.round(t.y*n)},${Math.round(t.z*n)}`,l[1]=`${Math.round(o.x*n)},${Math.round(o.y*n)},${Math.round(o.z*n)}`,l[2]=`${Math.round(f.x*n)},${Math.round(f.y*n)},${Math.round(f.z*n)}`,!(l[0]===l[1]||l[1]===l[2]||l[2]===l[0]))for(let e=0;e<3;e++){let t=(e+1)%3,n=l[e],i=l[t],a=Wa[c[e]],o=Wa[c[t]],f=`${n}_${i}`,p=`${i}_${n}`;p in u&&u[p]?(Ua.dot(u[p].normal)<=r&&(d.push(a.x,a.y,a.z),d.push(o.x,o.y,o.z)),u[p]=null):f in u||(u[f]={index0:s[e],index1:s[t],normal:Ua.clone()})}}for(let e in u)if(u[e]){let{index0:t,index1:n}=u[e];Va.fromBufferAttribute(a,t),Ha.fromBufferAttribute(a,n),d.push(Va.x,Va.y,Va.z),d.push(Ha.x,Ha.y,Ha.z)}this.setAttribute(`position`,new H(d,3))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}},Ka=class{constructor(){this.type=`Curve`,this.arcLengthDivisions=200,this.needsUpdate=!1,this.cacheArcLengths=null}getPoint(){N(`Curve: .getPoint() not implemented.`)}getPointAt(e,t){let n=this.getUtoTmapping(e);return this.getPoint(n,t)}getPoints(e=5){let t=[];for(let n=0;n<=e;n++)t.push(this.getPoint(n/e));return t}getSpacedPoints(e=5){let t=[];for(let n=0;n<=e;n++)t.push(this.getPointAt(n/e));return t}getLength(){let e=this.getLengths();return e[e.length-1]}getLengths(e=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===e+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;let t=[],n,r=this.getPoint(0),i=0;t.push(0);for(let a=1;a<=e;a++)n=this.getPoint(a/e),i+=n.distanceTo(r),t.push(i),r=n;return this.cacheArcLengths=t,t}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(e,t=null){let n=this.getLengths(),r=0,i=n.length,a;a=t||e*n[i-1];let o=0,s=i-1,c;for(;o<=s;)if(r=Math.floor(o+(s-o)/2),c=n[r]-a,c<0)o=r+1;else if(c>0)s=r-1;else{s=r;break}if(r=s,n[r]===a)return r/(i-1);let l=n[r],u=n[r+1]-l,d=(a-l)/u;return(r+d)/(i-1)}getTangent(e,t){let n=1e-4,r=e-n,i=e+n;r<0&&(r=0),i>1&&(i=1);let a=this.getPoint(r),o=this.getPoint(i),s=t||(a.isVector2?new I:new L);return s.copy(o).sub(a).normalize(),s}getTangentAt(e,t){let n=this.getUtoTmapping(e);return this.getTangent(n,t)}computeFrenetFrames(e,t=!1){let n=new L,r=[],i=[],a=[],o=new L,s=new z;for(let t=0;t<=e;t++){let n=t/e;r[t]=this.getTangentAt(n,new L)}i[0]=new L,a[0]=new L;let c=Number.MAX_VALUE,l=Math.abs(r[0].x),u=Math.abs(r[0].y),d=Math.abs(r[0].z);l<=c&&(c=l,n.set(1,0,0)),u<=c&&(c=u,n.set(0,1,0)),d<=c&&n.set(0,0,1),o.crossVectors(r[0],n).normalize(),i[0].crossVectors(r[0],o),a[0].crossVectors(r[0],i[0]);for(let t=1;t<=e;t++){if(i[t]=i[t-1].clone(),a[t]=a[t-1].clone(),o.crossVectors(r[t-1],r[t]),o.length()>2**-52){o.normalize();let e=Math.acos(F(r[t-1].dot(r[t]),-1,1));i[t].applyMatrix4(s.makeRotationAxis(o,e))}a[t].crossVectors(r[t],i[t])}if(t===!0){let t=Math.acos(F(i[0].dot(i[e]),-1,1));t/=e,r[0].dot(o.crossVectors(i[0],i[e]))>0&&(t=-t);for(let n=1;n<=e;n++)i[n].applyMatrix4(s.makeRotationAxis(r[n],t*n)),a[n].crossVectors(r[n],i[n])}return{tangents:r,normals:i,binormals:a}}clone(){return new this.constructor().copy(this)}copy(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}toJSON(){let e={metadata:{version:4.7,type:`Curve`,generator:`Curve.toJSON`}};return e.arcLengthDivisions=this.arcLengthDivisions,e.type=this.type,e}fromJSON(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}},qa=class extends Ka{constructor(e=0,t=0,n=1,r=1,i=0,a=Math.PI*2,o=!1,s=0){super(),this.isEllipseCurve=!0,this.type=`EllipseCurve`,this.aX=e,this.aY=t,this.xRadius=n,this.yRadius=r,this.aStartAngle=i,this.aEndAngle=a,this.aClockwise=o,this.aRotation=s}getPoint(e,t=new I){let n=t,r=Math.PI*2,i=this.aEndAngle-this.aStartAngle,a=Math.abs(i)<2**-52;for(;i<0;)i+=r;for(;i>r;)i-=r;i<2**-52&&(i=a?0:r),this.aClockwise===!0&&!a&&(i===r?i=-r:i-=r);let o=this.aStartAngle+e*i,s=this.aX+this.xRadius*Math.cos(o),c=this.aY+this.yRadius*Math.sin(o);if(this.aRotation!==0){let e=Math.cos(this.aRotation),t=Math.sin(this.aRotation),n=s-this.aX,r=c-this.aY;s=n*e-r*t+this.aX,c=n*t+r*e+this.aY}return n.set(s,c)}copy(e){return super.copy(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}toJSON(){let e=super.toJSON();return e.aX=this.aX,e.aY=this.aY,e.xRadius=this.xRadius,e.yRadius=this.yRadius,e.aStartAngle=this.aStartAngle,e.aEndAngle=this.aEndAngle,e.aClockwise=this.aClockwise,e.aRotation=this.aRotation,e}fromJSON(e){return super.fromJSON(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}},Ja=class extends qa{constructor(e,t,n,r,i,a){super(e,t,n,n,r,i,a),this.isArcCurve=!0,this.type=`ArcCurve`}};function Ya(){let e=0,t=0,n=0,r=0;function i(i,a,o,s){e=i,t=o,n=-3*i+3*a-2*o-s,r=2*i-2*a+o+s}return{initCatmullRom:function(e,t,n,r,a){i(t,n,a*(n-e),a*(r-t))},initNonuniformCatmullRom:function(e,t,n,r,a,o,s){let c=(t-e)/a-(n-e)/(a+o)+(n-t)/o,l=(n-t)/o-(r-t)/(o+s)+(r-n)/s;c*=o,l*=o,i(t,n,c,l)},calc:function(i){let a=i*i,o=a*i;return e+t*i+n*a+r*o}}}var Xa=new L,Za=new L,Qa=new Ya,$a=new Ya,eo=new Ya,to=class extends Ka{constructor(e=[],t=!1,n=`centripetal`,r=.5){super(),this.isCatmullRomCurve3=!0,this.type=`CatmullRomCurve3`,this.points=e,this.closed=t,this.curveType=n,this.tension=r}getPoint(e,t=new L){let n=t,r=this.points,i=r.length,a=(i-+!this.closed)*e,o=Math.floor(a),s=a-o;this.closed?o+=o>0?0:(Math.floor(Math.abs(o)/i)+1)*i:s===0&&o===i-1&&(o=i-2,s=1);let c,l;this.closed||o>0?c=r[(o-1)%i]:(Za.subVectors(r[0],r[1]).add(r[0]),c=Za);let u=r[o%i],d=r[(o+1)%i];if(this.closed||o+2<i?l=r[(o+2)%i]:(Xa.subVectors(r[i-1],r[i-2]).add(r[i-1]),l=Xa),this.curveType===`centripetal`||this.curveType===`chordal`){let e=this.curveType===`chordal`?.5:.25,t=c.distanceToSquared(u)**+e,n=u.distanceToSquared(d)**+e,r=d.distanceToSquared(l)**+e;n<1e-4&&(n=1),t<1e-4&&(t=n),r<1e-4&&(r=n),Qa.initNonuniformCatmullRom(c.x,u.x,d.x,l.x,t,n,r),$a.initNonuniformCatmullRom(c.y,u.y,d.y,l.y,t,n,r),eo.initNonuniformCatmullRom(c.z,u.z,d.z,l.z,t,n,r)}else this.curveType===`catmullrom`&&(Qa.initCatmullRom(c.x,u.x,d.x,l.x,this.tension),$a.initCatmullRom(c.y,u.y,d.y,l.y,this.tension),eo.initCatmullRom(c.z,u.z,d.z,l.z,this.tension));return n.set(Qa.calc(s),$a.calc(s),eo.calc(s)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let n=e.points[t];this.points.push(n.clone())}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}toJSON(){let e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){let n=this.points[t];e.points.push(n.toArray())}return e.closed=this.closed,e.curveType=this.curveType,e.tension=this.tension,e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let n=e.points[t];this.points.push(new L().fromArray(n))}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}};function no(e,t,n,r,i){let a=(r-t)*.5,o=(i-n)*.5,s=e*e,c=e*s;return(2*n-2*r+a+o)*c+(-3*n+3*r-2*a-o)*s+a*e+n}function ro(e,t){let n=1-e;return n*n*t}function io(e,t){return 2*(1-e)*e*t}function ao(e,t){return e*e*t}function oo(e,t,n,r){return ro(e,t)+io(e,n)+ao(e,r)}function so(e,t){let n=1-e;return n*n*n*t}function co(e,t){let n=1-e;return 3*n*n*e*t}function lo(e,t){return 3*(1-e)*e*e*t}function uo(e,t){return e*e*e*t}function fo(e,t,n,r,i){return so(e,t)+co(e,n)+lo(e,r)+uo(e,i)}var po=class extends Ka{constructor(e=new I,t=new I,n=new I,r=new I){super(),this.isCubicBezierCurve=!0,this.type=`CubicBezierCurve`,this.v0=e,this.v1=t,this.v2=n,this.v3=r}getPoint(e,t=new I){let n=t,r=this.v0,i=this.v1,a=this.v2,o=this.v3;return n.set(fo(e,r.x,i.x,a.x,o.x),fo(e,r.y,i.y,a.y,o.y)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}},mo=class extends Ka{constructor(e=new L,t=new L,n=new L,r=new L){super(),this.isCubicBezierCurve3=!0,this.type=`CubicBezierCurve3`,this.v0=e,this.v1=t,this.v2=n,this.v3=r}getPoint(e,t=new L){let n=t,r=this.v0,i=this.v1,a=this.v2,o=this.v3;return n.set(fo(e,r.x,i.x,a.x,o.x),fo(e,r.y,i.y,a.y,o.y),fo(e,r.z,i.z,a.z,o.z)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}},ho=class extends Ka{constructor(e=new I,t=new I){super(),this.isLineCurve=!0,this.type=`LineCurve`,this.v1=e,this.v2=t}getPoint(e,t=new I){let n=t;return e===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1)),n}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new I){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},go=class extends Ka{constructor(e=new L,t=new L){super(),this.isLineCurve3=!0,this.type=`LineCurve3`,this.v1=e,this.v2=t}getPoint(e,t=new L){let n=t;return e===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1)),n}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new L){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},_o=class extends Ka{constructor(e=new I,t=new I,n=new I){super(),this.isQuadraticBezierCurve=!0,this.type=`QuadraticBezierCurve`,this.v0=e,this.v1=t,this.v2=n}getPoint(e,t=new I){let n=t,r=this.v0,i=this.v1,a=this.v2;return n.set(oo(e,r.x,i.x,a.x),oo(e,r.y,i.y,a.y)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},vo=class extends Ka{constructor(e=new L,t=new L,n=new L){super(),this.isQuadraticBezierCurve3=!0,this.type=`QuadraticBezierCurve3`,this.v0=e,this.v1=t,this.v2=n}getPoint(e,t=new L){let n=t,r=this.v0,i=this.v1,a=this.v2;return n.set(oo(e,r.x,i.x,a.x),oo(e,r.y,i.y,a.y),oo(e,r.z,i.z,a.z)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},yo=class extends Ka{constructor(e=[]){super(),this.isSplineCurve=!0,this.type=`SplineCurve`,this.points=e}getPoint(e,t=new I){let n=t,r=this.points,i=(r.length-1)*e,a=Math.floor(i),o=i-a,s=r[a===0?a:a-1],c=r[a],l=r[a>r.length-2?r.length-1:a+1],u=r[a>r.length-3?r.length-1:a+2];return n.set(no(o,s.x,c.x,l.x,u.x),no(o,s.y,c.y,l.y,u.y)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let n=e.points[t];this.points.push(n.clone())}return this}toJSON(){let e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){let n=this.points[t];e.points.push(n.toArray())}return e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let n=e.points[t];this.points.push(new I().fromArray(n))}return this}},bo=Object.freeze({__proto__:null,ArcCurve:Ja,CatmullRomCurve3:to,CubicBezierCurve:po,CubicBezierCurve3:mo,EllipseCurve:qa,LineCurve:ho,LineCurve3:go,QuadraticBezierCurve:_o,QuadraticBezierCurve3:vo,SplineCurve:yo}),xo=class extends Ka{constructor(){super(),this.type=`CurvePath`,this.curves=[],this.autoClose=!1}add(e){this.curves.push(e)}closePath(){let e=this.curves[0].getPoint(0),t=this.curves[this.curves.length-1].getPoint(1);if(!e.equals(t)){let n=e.isVector2===!0?`LineCurve`:`LineCurve3`;this.curves.push(new bo[n](t,e))}return this}getPoint(e,t){let n=e*this.getLength(),r=this.getCurveLengths(),i=0;for(;i<r.length;){if(r[i]>=n){let e=r[i]-n,a=this.curves[i],o=a.getLength(),s=o===0?0:1-e/o;return a.getPointAt(s,t)}i++}return null}getLength(){let e=this.getCurveLengths();return e[e.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;let e=[],t=0;for(let n=0,r=this.curves.length;n<r;n++)t+=this.curves[n].getLength(),e.push(t);return this.cacheLengths=e,e}getSpacedPoints(e=40){let t=[];for(let n=0;n<=e;n++)t.push(this.getPoint(n/e));return this.autoClose&&t.push(t[0]),t}getPoints(e=12){let t=[],n;for(let r=0,i=this.curves;r<i.length;r++){let a=i[r],o=a.isEllipseCurve?e*2:a.isLineCurve||a.isLineCurve3?1:a.isSplineCurve?e*a.points.length:e,s=a.getPoints(o);for(let e=0;e<s.length;e++){let r=s[e];n&&n.equals(r)||(t.push(r),n=r)}}return this.autoClose&&t.length>1&&!t[t.length-1].equals(t[0])&&t.push(t[0]),t}copy(e){super.copy(e),this.curves=[];for(let t=0,n=e.curves.length;t<n;t++){let n=e.curves[t];this.curves.push(n.clone())}return this.autoClose=e.autoClose,this}toJSON(){let e=super.toJSON();e.autoClose=this.autoClose,e.curves=[];for(let t=0,n=this.curves.length;t<n;t++){let n=this.curves[t];e.curves.push(n.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.autoClose=e.autoClose,this.curves=[];for(let t=0,n=e.curves.length;t<n;t++){let n=e.curves[t];this.curves.push(new bo[n.type]().fromJSON(n))}return this}},So=class extends xo{constructor(e){super(),this.type=`Path`,this.currentPoint=new I,e&&this.setFromPoints(e)}setFromPoints(e){this.moveTo(e[0].x,e[0].y);for(let t=1,n=e.length;t<n;t++)this.lineTo(e[t].x,e[t].y);return this}moveTo(e,t){return this.currentPoint.set(e,t),this}lineTo(e,t){let n=new ho(this.currentPoint.clone(),new I(e,t));return this.curves.push(n),this.currentPoint.set(e,t),this}quadraticCurveTo(e,t,n,r){let i=new _o(this.currentPoint.clone(),new I(e,t),new I(n,r));return this.curves.push(i),this.currentPoint.set(n,r),this}bezierCurveTo(e,t,n,r,i,a){let o=new po(this.currentPoint.clone(),new I(e,t),new I(n,r),new I(i,a));return this.curves.push(o),this.currentPoint.set(i,a),this}splineThru(e){let t=new yo([this.currentPoint.clone()].concat(e));return this.curves.push(t),this.currentPoint.copy(e[e.length-1]),this}arc(e,t,n,r,i,a){let o=this.currentPoint.x,s=this.currentPoint.y;return this.absarc(e+o,t+s,n,r,i,a),this}absarc(e,t,n,r,i,a){return this.absellipse(e,t,n,n,r,i,a),this}ellipse(e,t,n,r,i,a,o,s){let c=this.currentPoint.x,l=this.currentPoint.y;return this.absellipse(e+c,t+l,n,r,i,a,o,s),this}absellipse(e,t,n,r,i,a,o,s){let c=new qa(e,t,n,r,i,a,o,s);if(this.curves.length>0){let e=c.getPoint(0);e.equals(this.currentPoint)||this.lineTo(e.x,e.y)}this.curves.push(c);let l=c.getPoint(1);return this.currentPoint.copy(l),this}copy(e){return super.copy(e),this.currentPoint.copy(e.currentPoint),this}toJSON(){let e=super.toJSON();return e.currentPoint=this.currentPoint.toArray(),e}fromJSON(e){return super.fromJSON(e),this.currentPoint.fromArray(e.currentPoint),this}},Co=class extends So{constructor(e){super(e),this.uuid=Ct(),this.type=`Shape`,this.holes=[]}getPointsHoles(e){let t=[];for(let n=0,r=this.holes.length;n<r;n++)t[n]=this.holes[n].getPoints(e);return t}extractPoints(e){return{shape:this.getPoints(e),holes:this.getPointsHoles(e)}}copy(e){super.copy(e),this.holes=[];for(let t=0,n=e.holes.length;t<n;t++){let n=e.holes[t];this.holes.push(n.clone())}return this}toJSON(){let e=super.toJSON();e.uuid=this.uuid,e.holes=[];for(let t=0,n=this.holes.length;t<n;t++){let n=this.holes[t];e.holes.push(n.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.uuid=e.uuid,this.holes=[];for(let t=0,n=e.holes.length;t<n;t++){let n=e.holes[t];this.holes.push(new So().fromJSON(n))}return this}};function wo(e,t,n=2){let r=t&&t.length,i=r?t[0]*n:e.length,a=To(e,0,i,n,!0),o=[];if(!a||a.next===a.prev)return o;let s,c,l;if(r&&(a=Mo(e,t,a,n)),e.length>80*n){s=e[0],c=e[1];let t=s,r=c;for(let a=n;a<i;a+=n){let n=e[a],i=e[a+1];n<s&&(s=n),i<c&&(c=i),n>t&&(t=n),i>r&&(r=i)}l=Math.max(t-s,r-c),l=l===0?0:32767/l}return Do(a,o,n,s,c,l,0),o}function To(e,t,n,r,i){let a;if(i===ns(e,t,n,r)>0)for(let i=t;i<n;i+=r)a=$o(i/r|0,e[i],e[i+1],a);else for(let i=n-r;i>=t;i-=r)a=$o(i/r|0,e[i],e[i+1],a);return a&&Go(a,a.next)&&(es(a),a=a.next),a}function Eo(e,t){if(!e)return e;t||(t=e);let n=e,r;do if(r=!1,!n.steiner&&(Go(n,n.next)||Wo(n.prev,n,n.next)===0)){if(es(n),n=t=n.prev,n===n.next)break;r=!0}else n=n.next;while(r||n!==t);return t}function Do(e,t,n,r,i,a,o){if(!e)return;!o&&a&&Lo(e,r,i,a);let s=e;for(;e.prev!==e.next;){let c=e.prev,l=e.next;if(a?ko(e,r,i,a):Oo(e)){t.push(c.i,e.i,l.i),es(e),e=l.next,s=l.next;continue}if(e=l,e===s){o?o===1?(e=Ao(Eo(e),t),Do(e,t,n,r,i,a,2)):o===2&&jo(e,t,n,r,i,a):Do(Eo(e),t,n,r,i,a,1);break}}}function Oo(e){let t=e.prev,n=e,r=e.next;if(Wo(t,n,r)>=0)return!1;let i=t.x,a=n.x,o=r.x,s=t.y,c=n.y,l=r.y,u=Math.min(i,a,o),d=Math.min(s,c,l),f=Math.max(i,a,o),p=Math.max(s,c,l),m=r.next;for(;m!==t;){if(m.x>=u&&m.x<=f&&m.y>=d&&m.y<=p&&Ho(i,s,a,c,o,l,m.x,m.y)&&Wo(m.prev,m,m.next)>=0)return!1;m=m.next}return!0}function ko(e,t,n,r){let i=e.prev,a=e,o=e.next;if(Wo(i,a,o)>=0)return!1;let s=i.x,c=a.x,l=o.x,u=i.y,d=a.y,f=o.y,p=Math.min(s,c,l),m=Math.min(u,d,f),h=Math.max(s,c,l),g=Math.max(u,d,f),_=zo(p,m,t,n,r),v=zo(h,g,t,n,r),y=e.prevZ,b=e.nextZ;for(;y&&y.z>=_&&b&&b.z<=v;){if(y.x>=p&&y.x<=h&&y.y>=m&&y.y<=g&&y!==i&&y!==o&&Ho(s,u,c,d,l,f,y.x,y.y)&&Wo(y.prev,y,y.next)>=0||(y=y.prevZ,b.x>=p&&b.x<=h&&b.y>=m&&b.y<=g&&b!==i&&b!==o&&Ho(s,u,c,d,l,f,b.x,b.y)&&Wo(b.prev,b,b.next)>=0))return!1;b=b.nextZ}for(;y&&y.z>=_;){if(y.x>=p&&y.x<=h&&y.y>=m&&y.y<=g&&y!==i&&y!==o&&Ho(s,u,c,d,l,f,y.x,y.y)&&Wo(y.prev,y,y.next)>=0)return!1;y=y.prevZ}for(;b&&b.z<=v;){if(b.x>=p&&b.x<=h&&b.y>=m&&b.y<=g&&b!==i&&b!==o&&Ho(s,u,c,d,l,f,b.x,b.y)&&Wo(b.prev,b,b.next)>=0)return!1;b=b.nextZ}return!0}function Ao(e,t){let n=e;do{let r=n.prev,i=n.next.next;!Go(r,i)&&Ko(r,n,n.next,i)&&Xo(r,i)&&Xo(i,r)&&(t.push(r.i,n.i,i.i),es(n),es(n.next),n=e=i),n=n.next}while(n!==e);return Eo(n)}function jo(e,t,n,r,i,a){let o=e;do{let e=o.next.next;for(;e!==o.prev;){if(o.i!==e.i&&Uo(o,e)){let s=Qo(o,e);o=Eo(o,o.next),s=Eo(s,s.next),Do(o,t,n,r,i,a,0),Do(s,t,n,r,i,a,0);return}e=e.next}o=o.next}while(o!==e)}function Mo(e,t,n,r){let i=[];for(let n=0,a=t.length;n<a;n++){let o=To(e,t[n]*r,n<a-1?t[n+1]*r:e.length,r,!1);o===o.next&&(o.steiner=!0),i.push(Bo(o))}i.sort(No);for(let e=0;e<i.length;e++)n=Po(i[e],n);return n}function No(e,t){let n=e.x-t.x;return n===0&&(n=e.y-t.y,n===0&&(n=(e.next.y-e.y)/(e.next.x-e.x)-(t.next.y-t.y)/(t.next.x-t.x))),n}function Po(e,t){let n=Fo(e,t);if(!n)return t;let r=Qo(n,e);return Eo(r,r.next),Eo(n,n.next)}function Fo(e,t){let n=t,r=e.x,i=e.y,a=-1/0,o;if(Go(e,n))return n;do{if(Go(e,n.next))return n.next;if(i<=n.y&&i>=n.next.y&&n.next.y!==n.y){let e=n.x+(i-n.y)*(n.next.x-n.x)/(n.next.y-n.y);if(e<=r&&e>a&&(a=e,o=n.x<n.next.x?n:n.next,e===r))return o}n=n.next}while(n!==t);if(!o)return null;let s=o,c=o.x,l=o.y,u=1/0;n=o;do{if(r>=n.x&&n.x>=c&&r!==n.x&&Vo(i<l?r:a,i,c,l,i<l?a:r,i,n.x,n.y)){let t=Math.abs(i-n.y)/(r-n.x);Xo(n,e)&&(t<u||t===u&&(n.x>o.x||n.x===o.x&&Io(o,n)))&&(o=n,u=t)}n=n.next}while(n!==s);return o}function Io(e,t){return Wo(e.prev,e,t.prev)<0&&Wo(t.next,e,e.next)<0}function Lo(e,t,n,r){let i=e;do i.z===0&&(i.z=zo(i.x,i.y,t,n,r)),i.prevZ=i.prev,i.nextZ=i.next,i=i.next;while(i!==e);i.prevZ.nextZ=null,i.prevZ=null,Ro(i)}function Ro(e){let t,n=1;do{let r=e,i;e=null;let a=null;for(t=0;r;){t++;let o=r,s=0;for(let e=0;e<n&&(s++,o=o.nextZ,o);e++);let c=n;for(;s>0||c>0&&o;)s!==0&&(c===0||!o||r.z<=o.z)?(i=r,r=r.nextZ,s--):(i=o,o=o.nextZ,c--),a?a.nextZ=i:e=i,i.prevZ=a,a=i;r=o}a.nextZ=null,n*=2}while(t>1);return e}function zo(e,t,n,r,i){return e=(e-n)*i|0,t=(t-r)*i|0,e=(e|e<<8)&16711935,e=(e|e<<4)&252645135,e=(e|e<<2)&858993459,e=(e|e<<1)&1431655765,t=(t|t<<8)&16711935,t=(t|t<<4)&252645135,t=(t|t<<2)&858993459,t=(t|t<<1)&1431655765,e|t<<1}function Bo(e){let t=e,n=e;do(t.x<n.x||t.x===n.x&&t.y<n.y)&&(n=t),t=t.next;while(t!==e);return n}function Vo(e,t,n,r,i,a,o,s){return(i-o)*(t-s)>=(e-o)*(a-s)&&(e-o)*(r-s)>=(n-o)*(t-s)&&(n-o)*(a-s)>=(i-o)*(r-s)}function Ho(e,t,n,r,i,a,o,s){return!(e===o&&t===s)&&Vo(e,t,n,r,i,a,o,s)}function Uo(e,t){return e.next.i!==t.i&&e.prev.i!==t.i&&!Yo(e,t)&&(Xo(e,t)&&Xo(t,e)&&Zo(e,t)&&(Wo(e.prev,e,t.prev)||Wo(e,t.prev,t))||Go(e,t)&&Wo(e.prev,e,e.next)>0&&Wo(t.prev,t,t.next)>0)}function Wo(e,t,n){return(t.y-e.y)*(n.x-t.x)-(t.x-e.x)*(n.y-t.y)}function Go(e,t){return e.x===t.x&&e.y===t.y}function Ko(e,t,n,r){let i=Jo(Wo(e,t,n)),a=Jo(Wo(e,t,r)),o=Jo(Wo(n,r,e)),s=Jo(Wo(n,r,t));return!!(i!==a&&o!==s||i===0&&qo(e,n,t)||a===0&&qo(e,r,t)||o===0&&qo(n,e,r)||s===0&&qo(n,t,r))}function qo(e,t,n){return t.x<=Math.max(e.x,n.x)&&t.x>=Math.min(e.x,n.x)&&t.y<=Math.max(e.y,n.y)&&t.y>=Math.min(e.y,n.y)}function Jo(e){return e>0?1:e<0?-1:0}function Yo(e,t){let n=e;do{if(n.i!==e.i&&n.next.i!==e.i&&n.i!==t.i&&n.next.i!==t.i&&Ko(n,n.next,e,t))return!0;n=n.next}while(n!==e);return!1}function Xo(e,t){return Wo(e.prev,e,e.next)<0?Wo(e,t,e.next)>=0&&Wo(e,e.prev,t)>=0:Wo(e,t,e.prev)<0||Wo(e,e.next,t)<0}function Zo(e,t){let n=e,r=!1,i=(e.x+t.x)/2,a=(e.y+t.y)/2;do n.y>a!=n.next.y>a&&n.next.y!==n.y&&i<(n.next.x-n.x)*(a-n.y)/(n.next.y-n.y)+n.x&&(r=!r),n=n.next;while(n!==e);return r}function Qo(e,t){let n=ts(e.i,e.x,e.y),r=ts(t.i,t.x,t.y),i=e.next,a=t.prev;return e.next=t,t.prev=e,n.next=i,i.prev=n,r.next=n,n.prev=r,a.next=r,r.prev=a,r}function $o(e,t,n,r){let i=ts(e,t,n);return r?(i.next=r.next,i.prev=r,r.next.prev=i,r.next=i):(i.prev=i,i.next=i),i}function es(e){e.next.prev=e.prev,e.prev.next=e.next,e.prevZ&&(e.prevZ.nextZ=e.nextZ),e.nextZ&&(e.nextZ.prevZ=e.prevZ)}function ts(e,t,n){return{i:e,x:t,y:n,prev:null,next:null,z:0,prevZ:null,nextZ:null,steiner:!1}}function ns(e,t,n,r){let i=0;for(let a=t,o=n-r;a<n;a+=r)i+=(e[o]-e[a])*(e[a+1]+e[o+1]),o=a;return i}var rs=class{static triangulate(e,t,n=2){return wo(e,t,n)}},is=class e{static area(e){let t=e.length,n=0;for(let r=t-1,i=0;i<t;r=i++)n+=e[r].x*e[i].y-e[i].x*e[r].y;return n*.5}static isClockWise(t){return e.area(t)<0}static triangulateShape(e,t){let n=[],r=[],i=[];as(e),os(n,e);let a=e.length;t.forEach(as);for(let e=0;e<t.length;e++)r.push(a),a+=t[e].length,os(n,t[e]);let o=rs.triangulate(n,r);for(let e=0;e<o.length;e+=3)i.push(o.slice(e,e+3));return i}};function as(e){let t=e.length;t>2&&e[t-1].equals(e[0])&&e.pop()}function os(e,t){for(let n=0;n<t.length;n++)e.push(t[n].x),e.push(t[n].y)}var ss=class e extends Ba{constructor(e=1,t=0){let n=(1+Math.sqrt(5))/2,r=[-1,n,0,1,n,0,-1,-n,0,1,-n,0,0,-1,n,0,1,n,0,-1,-n,0,1,-n,n,0,-1,n,0,1,-n,0,-1,-n,0,1];super(r,[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1],e,t),this.type=`IcosahedronGeometry`,this.parameters={radius:e,detail:t}}static fromJSON(t){return new e(t.radius,t.detail)}},cs=class e extends Ur{constructor(e=[new I(0,-.5),new I(.5,0),new I(0,.5)],t=12,n=0,r=Math.PI*2){super(),this.type=`LatheGeometry`,this.parameters={points:e,segments:t,phiStart:n,phiLength:r},t=Math.floor(t),r=F(r,0,Math.PI*2);let i=[],a=[],o=[],s=[],c=[],l=1/t,u=new L,d=new I,f=new L,p=new L,m=new L,h=0,g=0;for(let t=0;t<=e.length-1;t++)switch(t){case 0:h=e[t+1].x-e[t].x,g=e[t+1].y-e[t].y,f.x=g*1,f.y=-h,f.z=g*0,m.copy(f),f.normalize(),s.push(f.x,f.y,f.z);break;case e.length-1:s.push(m.x,m.y,m.z);break;default:h=e[t+1].x-e[t].x,g=e[t+1].y-e[t].y,f.x=g*1,f.y=-h,f.z=g*0,p.copy(f),f.x+=m.x,f.y+=m.y,f.z+=m.z,f.normalize(),s.push(f.x,f.y,f.z),m.copy(p)}for(let i=0;i<=t;i++){let f=n+i*l*r,p=Math.sin(f),m=Math.cos(f);for(let n=0;n<=e.length-1;n++){u.x=e[n].x*p,u.y=e[n].y,u.z=e[n].x*m,a.push(u.x,u.y,u.z),d.x=i/t,d.y=n/(e.length-1),o.push(d.x,d.y);let r=s[3*n+0]*p,l=s[3*n+1],f=s[3*n+0]*m;c.push(r,l,f)}}for(let n=0;n<t;n++)for(let t=0;t<e.length-1;t++){let r=t+n*e.length,a=r,o=r+e.length,s=r+e.length+1,c=r+1;i.push(a,o,c),i.push(s,c,o)}this.setIndex(i),this.setAttribute(`position`,new H(a,3)),this.setAttribute(`uv`,new H(o,2)),this.setAttribute(`normal`,new H(c,3))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(t){return new e(t.points,t.segments,t.phiStart,t.phiLength)}},ls=class e extends Ba{constructor(e=1,t=0){super([1,0,0,-1,0,0,0,1,0,0,-1,0,0,0,1,0,0,-1],[0,2,4,0,4,3,0,3,5,0,5,2,1,2,5,1,5,3,1,3,4,1,4,2],e,t),this.type=`OctahedronGeometry`,this.parameters={radius:e,detail:t}}static fromJSON(t){return new e(t.radius,t.detail)}},us=class e extends Ur{constructor(e=1,t=1,n=1,r=1){super(),this.type=`PlaneGeometry`,this.parameters={width:e,height:t,widthSegments:n,heightSegments:r};let i=e/2,a=t/2,o=Math.floor(n),s=Math.floor(r),c=o+1,l=s+1,u=e/o,d=t/s,f=[],p=[],m=[],h=[];for(let e=0;e<l;e++){let t=e*d-a;for(let n=0;n<c;n++){let r=n*u-i;p.push(r,-t,0),m.push(0,0,1),h.push(n/o),h.push(1-e/s)}}for(let e=0;e<s;e++)for(let t=0;t<o;t++){let n=t+c*e,r=t+c*(e+1),i=t+1+c*(e+1),a=t+1+c*e;f.push(n,r,a),f.push(r,i,a)}this.setIndex(f),this.setAttribute(`position`,new H(p,3)),this.setAttribute(`normal`,new H(m,3)),this.setAttribute(`uv`,new H(h,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(t){return new e(t.width,t.height,t.widthSegments,t.heightSegments)}},ds=class e extends Ur{constructor(e=.5,t=1,n=32,r=1,i=0,a=Math.PI*2){super(),this.type=`RingGeometry`,this.parameters={innerRadius:e,outerRadius:t,thetaSegments:n,phiSegments:r,thetaStart:i,thetaLength:a},n=Math.max(3,n),r=Math.max(1,r);let o=[],s=[],c=[],l=[],u=e,d=(t-e)/r,f=new L,p=new I;for(let e=0;e<=r;e++){for(let e=0;e<=n;e++){let r=i+e/n*a;f.x=u*Math.cos(r),f.y=u*Math.sin(r),s.push(f.x,f.y,f.z),c.push(0,0,1),p.x=(f.x/t+1)/2,p.y=(f.y/t+1)/2,l.push(p.x,p.y)}u+=d}for(let e=0;e<r;e++){let t=e*(n+1);for(let e=0;e<n;e++){let r=e+t,i=r,a=r+n+1,s=r+n+2,c=r+1;o.push(i,a,c),o.push(a,s,c)}}this.setIndex(o),this.setAttribute(`position`,new H(s,3)),this.setAttribute(`normal`,new H(c,3)),this.setAttribute(`uv`,new H(l,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(t){return new e(t.innerRadius,t.outerRadius,t.thetaSegments,t.phiSegments,t.thetaStart,t.thetaLength)}},fs=class e extends Ur{constructor(e=new Co([new I(0,.5),new I(-.5,-.5),new I(.5,-.5)]),t=12){super(),this.type=`ShapeGeometry`,this.parameters={shapes:e,curveSegments:t};let n=[],r=[],i=[],a=[],o=0,s=0;if(Array.isArray(e)===!1)c(e);else for(let t=0;t<e.length;t++)c(e[t]),this.addGroup(o,s,t),o+=s,s=0;this.setIndex(n),this.setAttribute(`position`,new H(r,3)),this.setAttribute(`normal`,new H(i,3)),this.setAttribute(`uv`,new H(a,2));function c(e){let o=r.length/3,c=e.extractPoints(t),l=c.shape,u=c.holes;is.isClockWise(l)===!1&&(l=l.reverse());for(let e=0,t=u.length;e<t;e++){let t=u[e];is.isClockWise(t)===!0&&(u[e]=t.reverse())}let d=is.triangulateShape(l,u);for(let e=0,t=u.length;e<t;e++){let t=u[e];l=l.concat(t)}for(let e=0,t=l.length;e<t;e++){let t=l[e];r.push(t.x,t.y,0),i.push(0,0,1),a.push(t.x,t.y)}for(let e=0,t=d.length;e<t;e++){let t=d[e],r=t[0]+o,i=t[1]+o,a=t[2]+o;n.push(r,i,a),s+=3}}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){let e=super.toJSON(),t=this.parameters.shapes;return ps(t,e)}static fromJSON(t,n){let r=[];for(let e=0,i=t.shapes.length;e<i;e++){let i=n[t.shapes[e]];r.push(i)}return new e(r,t.curveSegments)}};function ps(e,t){if(t.shapes=[],Array.isArray(e))for(let n=0,r=e.length;n<r;n++){let r=e[n];t.shapes.push(r.uuid)}else t.shapes.push(e.uuid);return t}var ms=class e extends Ur{constructor(e=1,t=32,n=16,r=0,i=Math.PI*2,a=0,o=Math.PI){super(),this.type=`SphereGeometry`,this.parameters={radius:e,widthSegments:t,heightSegments:n,phiStart:r,phiLength:i,thetaStart:a,thetaLength:o},t=Math.max(3,Math.floor(t)),n=Math.max(2,Math.floor(n));let s=Math.min(a+o,Math.PI),c=0,l=[],u=new L,d=new L,f=[],p=[],m=[],h=[];for(let f=0;f<=n;f++){let g=[],_=f/n,v=0;f===0&&a===0?v=.5/t:f===n&&s===Math.PI&&(v=-.5/t);for(let n=0;n<=t;n++){let s=n/t;u.x=-e*Math.cos(r+s*i)*Math.sin(a+_*o),u.y=e*Math.cos(a+_*o),u.z=e*Math.sin(r+s*i)*Math.sin(a+_*o),p.push(u.x,u.y,u.z),d.copy(u).normalize(),m.push(d.x,d.y,d.z),h.push(s+v,1-_),g.push(c++)}l.push(g)}for(let e=0;e<n;e++)for(let r=0;r<t;r++){let t=l[e][r+1],i=l[e][r],o=l[e+1][r],c=l[e+1][r+1];(e!==0||a>0)&&f.push(t,i,c),(e!==n-1||s<Math.PI)&&f.push(i,o,c)}this.setIndex(f),this.setAttribute(`position`,new H(p,3)),this.setAttribute(`normal`,new H(m,3)),this.setAttribute(`uv`,new H(h,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(t){return new e(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}},hs=class e extends Ur{constructor(e=1,t=.4,n=12,r=48,i=Math.PI*2,a=0,o=Math.PI*2){super(),this.type=`TorusGeometry`,this.parameters={radius:e,tube:t,radialSegments:n,tubularSegments:r,arc:i,thetaStart:a,thetaLength:o},n=Math.floor(n),r=Math.floor(r);let s=[],c=[],l=[],u=[],d=new L,f=new L,p=new L;for(let s=0;s<=n;s++){let m=a+s/n*o;for(let a=0;a<=r;a++){let o=a/r*i;f.x=(e+t*Math.cos(m))*Math.cos(o),f.y=(e+t*Math.cos(m))*Math.sin(o),f.z=t*Math.sin(m),c.push(f.x,f.y,f.z),d.x=e*Math.cos(o),d.y=e*Math.sin(o),p.subVectors(f,d).normalize(),l.push(p.x,p.y,p.z),u.push(a/r),u.push(s/n)}}for(let e=1;e<=n;e++)for(let t=1;t<=r;t++){let n=(r+1)*e+t-1,i=(r+1)*(e-1)+t-1,a=(r+1)*(e-1)+t,o=(r+1)*e+t;s.push(n,i,o),s.push(i,a,o)}this.setIndex(s),this.setAttribute(`position`,new H(c,3)),this.setAttribute(`normal`,new H(l,3)),this.setAttribute(`uv`,new H(u,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(t){return new e(t.radius,t.tube,t.radialSegments,t.tubularSegments,t.arc)}},gs=class e extends Ur{constructor(e=new vo(new L(-1,-1,0),new L(-1,1,0),new L(1,1,0)),t=64,n=1,r=8,i=!1){super(),this.type=`TubeGeometry`,this.parameters={path:e,tubularSegments:t,radius:n,radialSegments:r,closed:i};let a=e.computeFrenetFrames(t,i);this.tangents=a.tangents,this.normals=a.normals,this.binormals=a.binormals;let o=new L,s=new L,c=new I,l=new L,u=[],d=[],f=[],p=[];m(),this.setIndex(p),this.setAttribute(`position`,new H(u,3)),this.setAttribute(`normal`,new H(d,3)),this.setAttribute(`uv`,new H(f,2));function m(){for(let e=0;e<t;e++)h(e);h(i===!1?t:0),_(),g()}function h(i){l=e.getPointAt(i/t,l);let c=a.normals[i],f=a.binormals[i];for(let e=0;e<=r;e++){let t=e/r*Math.PI*2,i=Math.sin(t),a=-Math.cos(t);s.x=a*c.x+i*f.x,s.y=a*c.y+i*f.y,s.z=a*c.z+i*f.z,s.normalize(),d.push(s.x,s.y,s.z),o.x=l.x+n*s.x,o.y=l.y+n*s.y,o.z=l.z+n*s.z,u.push(o.x,o.y,o.z)}}function g(){for(let e=1;e<=t;e++)for(let t=1;t<=r;t++){let n=(r+1)*(e-1)+(t-1),i=(r+1)*e+(t-1),a=(r+1)*e+t,o=(r+1)*(e-1)+t;p.push(n,i,o),p.push(i,a,o)}}function _(){for(let e=0;e<=t;e++)for(let n=0;n<=r;n++)c.x=e/t,c.y=n/r,f.push(c.x,c.y)}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){let e=super.toJSON();return e.path=this.parameters.path.toJSON(),e}static fromJSON(t){return new e(new bo[t.path.type]().fromJSON(t.path),t.tubularSegments,t.radius,t.radialSegments,t.closed)}};function _s(e){let t={};for(let n in e){t[n]={};for(let r in e[n]){let i=e[n][r];if(ys(i))i.isRenderTargetTexture?(N(`UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms().`),t[n][r]=null):t[n][r]=i.clone();else if(Array.isArray(i))if(ys(i[0])){let e=[];for(let t=0,n=i.length;t<n;t++)e[t]=i[t].clone();t[n][r]=e}else t[n][r]=i.slice();else t[n][r]=i}}return t}function vs(e){let t={};for(let n=0;n<e.length;n++){let r=_s(e[n]);for(let e in r)t[e]=r[e]}return t}function ys(e){return e&&(e.isColor||e.isMatrix3||e.isMatrix4||e.isVector2||e.isVector3||e.isVector4||e.isTexture||e.isQuaternion)}function bs(e){let t=[];for(let n=0;n<e.length;n++)t.push(e[n].clone());return t}function xs(e){let t=e.getRenderTarget();return t===null?e.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:Qt.workingColorSpace}var Ss={clone:_s,merge:vs},Cs=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,ws=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,Ts=class extends Jr{constructor(e){super(),this.isShaderMaterial=!0,this.type=`ShaderMaterial`,this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Cs,this.fragmentShader=ws,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=_s(e.uniforms),this.uniformsGroups=bs(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this.defaultAttributeValues=Object.assign({},e.defaultAttributeValues),this.index0AttributeName=e.index0AttributeName,this.uniformsNeedUpdate=e.uniformsNeedUpdate,this}toJSON(e){let t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(let n in this.uniforms){let r=this.uniforms[n].value;r&&r.isTexture?t.uniforms[n]={type:`t`,value:r.toJSON(e).uuid}:r&&r.isColor?t.uniforms[n]={type:`c`,value:r.getHex()}:r&&r.isVector2?t.uniforms[n]={type:`v2`,value:r.toArray()}:r&&r.isVector3?t.uniforms[n]={type:`v3`,value:r.toArray()}:r&&r.isVector4?t.uniforms[n]={type:`v4`,value:r.toArray()}:r&&r.isMatrix3?t.uniforms[n]={type:`m3`,value:r.toArray()}:r&&r.isMatrix4?t.uniforms[n]={type:`m4`,value:r.toArray()}:t.uniforms[n]={value:r}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;let n={};for(let e in this.extensions)this.extensions[e]===!0&&(n[e]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}},Es=class extends Ts{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type=`RawShaderMaterial`}},K=class extends Jr{constructor(e){super(),this.isMeshStandardMaterial=!0,this.type=`MeshStandardMaterial`,this.defines={STANDARD:``},this.color=new V(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new V(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=0,this.normalScale=new I(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new wn,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap=`round`,this.wireframeLinejoin=`round`,this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:``},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}},Ds=class extends K{constructor(e){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:``,PHYSICAL:``},this.type=`MeshPhysicalMaterial`,this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new I(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return F(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(e){this.ior=(1+.4*e)/(1-.4*e)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new V(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new V(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new V(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._dispersion=0,this._iridescence=0,this._sheen=0,this._transmission=0,this.setValues(e)}get anisotropy(){return this._anisotropy}set anisotropy(e){this._anisotropy>0!=e>0&&this.version++,this._anisotropy=e}get clearcoat(){return this._clearcoat}set clearcoat(e){this._clearcoat>0!=e>0&&this.version++,this._clearcoat=e}get iridescence(){return this._iridescence}set iridescence(e){this._iridescence>0!=e>0&&this.version++,this._iridescence=e}get dispersion(){return this._dispersion}set dispersion(e){this._dispersion>0!=e>0&&this.version++,this._dispersion=e}get sheen(){return this._sheen}set sheen(e){this._sheen>0!=e>0&&this.version++,this._sheen=e}get transmission(){return this._transmission}set transmission(e){this._transmission>0!=e>0&&this.version++,this._transmission=e}copy(e){return super.copy(e),this.defines={STANDARD:``,PHYSICAL:``},this.anisotropy=e.anisotropy,this.anisotropyRotation=e.anisotropyRotation,this.anisotropyMap=e.anisotropyMap,this.clearcoat=e.clearcoat,this.clearcoatMap=e.clearcoatMap,this.clearcoatRoughness=e.clearcoatRoughness,this.clearcoatRoughnessMap=e.clearcoatRoughnessMap,this.clearcoatNormalMap=e.clearcoatNormalMap,this.clearcoatNormalScale.copy(e.clearcoatNormalScale),this.dispersion=e.dispersion,this.ior=e.ior,this.iridescence=e.iridescence,this.iridescenceMap=e.iridescenceMap,this.iridescenceIOR=e.iridescenceIOR,this.iridescenceThicknessRange=[...e.iridescenceThicknessRange],this.iridescenceThicknessMap=e.iridescenceThicknessMap,this.sheen=e.sheen,this.sheenColor.copy(e.sheenColor),this.sheenColorMap=e.sheenColorMap,this.sheenRoughness=e.sheenRoughness,this.sheenRoughnessMap=e.sheenRoughnessMap,this.transmission=e.transmission,this.transmissionMap=e.transmissionMap,this.thickness=e.thickness,this.thicknessMap=e.thicknessMap,this.attenuationDistance=e.attenuationDistance,this.attenuationColor.copy(e.attenuationColor),this.specularIntensity=e.specularIntensity,this.specularIntensityMap=e.specularIntensityMap,this.specularColor.copy(e.specularColor),this.specularColorMap=e.specularColorMap,this}},Os=class extends Jr{constructor(e){super(),this.isMeshNormalMaterial=!0,this.type=`MeshNormalMaterial`,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=0,this.normalScale=new I(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.flatShading=!1,this.setValues(e)}copy(e){return super.copy(e),this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.flatShading=e.flatShading,this}},ks=class extends Jr{constructor(e){super(),this.isMeshLambertMaterial=!0,this.type=`MeshLambertMaterial`,this.color=new V(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new V(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=0,this.normalScale=new I(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new wn,this.combine=0,this.reflectivity=1,this.envMapIntensity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap=`round`,this.wireframeLinejoin=`round`,this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.envMapIntensity=e.envMapIntensity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}},As=class extends Jr{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type=`MeshDepthMaterial`,this.depthPacking=$e,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}},js=class extends Jr{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type=`MeshDistanceMaterial`,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}};function Ms(e,t){return!e||e.constructor===t?e:typeof t.BYTES_PER_ELEMENT==`number`?new t(e):Array.prototype.slice.call(e)}function Ns(e){function t(t,n){return e[t]-e[n]}let n=e.length,r=Array(n);for(let e=0;e!==n;++e)r[e]=e;return r.sort(t),r}function Ps(e,t,n){let r=e.length,i=new e.constructor(r);for(let a=0,o=0;o!==r;++a){let r=n[a]*t;for(let n=0;n!==t;++n)i[o++]=e[r+n]}return i}function Fs(e,t,n,r){let i=1,a=e[0];for(;a!==void 0&&a[r]===void 0;)a=e[i++];if(a===void 0)return;let o=a[r];if(o!==void 0)if(Array.isArray(o))do o=a[r],o!==void 0&&(t.push(a.time),n.push(...o)),a=e[i++];while(a!==void 0);else if(o.toArray!==void 0)do o=a[r],o!==void 0&&(t.push(a.time),o.toArray(n,n.length)),a=e[i++];while(a!==void 0);else do o=a[r],o!==void 0&&(t.push(a.time),n.push(o)),a=e[i++];while(a!==void 0)}var Is=class{constructor(e,t,n,r){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=r===void 0?new t.constructor(n):r,this.sampleValues=t,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(e){let t=this.parameterPositions,n=this._cachedIndex,r=t[n],i=t[n-1];validate_interval:{seek:{let a;linear_scan:{forward_scan:if(!(e<r)){for(let a=n+2;;){if(r===void 0){if(e<i)break forward_scan;return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===a)break;if(i=r,r=t[++n],e<r)break seek}a=t.length;break linear_scan}if(!(e>=i)){let o=t[1];e<o&&(n=2,i=o);for(let a=n-2;;){if(i===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===a)break;if(r=i,i=t[--n-1],e>=i)break seek}a=n,n=0;break linear_scan}break validate_interval}for(;n<a;){let r=n+a>>>1;e<t[r]?a=r:n=r+1}if(r=t[n],i=t[n-1],i===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(r===void 0)return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,i,r)}return this.interpolate_(n,i,e,r)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){let t=this.resultBuffer,n=this.sampleValues,r=this.valueSize,i=e*r;for(let e=0;e!==r;++e)t[e]=n[i+e];return t}interpolate_(){throw Error(`call to abstract method`)}intervalChanged_(){}},Ls=class extends Is{constructor(e,t,n,r){super(e,t,n,r),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:Ye,endingEnd:Ye}}intervalChanged_(e,t,n){let r=this.parameterPositions,i=e-2,a=e+1,o=r[i],s=r[a];if(o===void 0)switch(this.getSettings_().endingStart){case Xe:i=e,o=2*t-n;break;case Ze:i=r.length-2,o=t+r[i]-r[i+1];break;default:i=e,o=n}if(s===void 0)switch(this.getSettings_().endingEnd){case Xe:a=e,s=2*n-t;break;case Ze:a=1,s=n+r[1]-r[0];break;default:a=e-1,s=t}let c=(n-t)*.5,l=this.valueSize;this._weightPrev=c/(t-o),this._weightNext=c/(s-n),this._offsetPrev=i*l,this._offsetNext=a*l}interpolate_(e,t,n,r){let i=this.resultBuffer,a=this.sampleValues,o=this.valueSize,s=e*o,c=s-o,l=this._offsetPrev,u=this._offsetNext,d=this._weightPrev,f=this._weightNext,p=(n-t)/(r-t),m=p*p,h=m*p,g=-d*h+2*d*m-d*p,_=(1+d)*h+(-1.5-2*d)*m+(-.5+d)*p+1,v=(-1-f)*h+(1.5+f)*m+.5*p,y=f*h-f*m;for(let e=0;e!==o;++e)i[e]=g*a[l+e]+_*a[c+e]+v*a[s+e]+y*a[u+e];return i}},Rs=class extends Is{constructor(e,t,n,r){super(e,t,n,r)}interpolate_(e,t,n,r){let i=this.resultBuffer,a=this.sampleValues,o=this.valueSize,s=e*o,c=s-o,l=(n-t)/(r-t),u=1-l;for(let e=0;e!==o;++e)i[e]=a[c+e]*u+a[s+e]*l;return i}},zs=class extends Is{constructor(e,t,n,r){super(e,t,n,r)}interpolate_(e){return this.copySampleValue_(e-1)}},Bs=class extends Is{interpolate_(e,t,n,r){let i=this.resultBuffer,a=this.sampleValues,o=this.valueSize,s=e*o,c=s-o,l=this.settings||this.DefaultSettings_,u=l.inTangents,d=l.outTangents;if(!u||!d){let e=(n-t)/(r-t),l=1-e;for(let t=0;t!==o;++t)i[t]=a[c+t]*l+a[s+t]*e;return i}let f=o*2,p=e-1;for(let l=0;l!==o;++l){let o=a[c+l],m=a[s+l],h=p*f+l*2,g=d[h],_=d[h+1],v=e*f+l*2,y=u[v],b=u[v+1],x=(n-t)/(r-t),S,C,w,T,E;for(let e=0;e<8;e++){S=x*x,C=S*x,w=1-x,T=w*w,E=T*w;let e=E*t+3*T*x*g+3*w*S*y+C*r-n;if(Math.abs(e)<1e-10)break;let i=3*T*(g-t)+6*w*x*(y-g)+3*S*(r-y);if(Math.abs(i)<1e-10)break;x-=e/i,x=Math.max(0,Math.min(1,x))}i[l]=E*o+3*T*x*_+3*w*S*b+C*m}return i}},Vs=class{constructor(e,t,n,r){if(e===void 0)throw Error(`THREE.KeyframeTrack: track name is undefined`);if(t===void 0||t.length===0)throw Error(`THREE.KeyframeTrack: no keyframes in track named `+e);this.name=e,this.times=Ms(t,this.TimeBufferType),this.values=Ms(n,this.ValueBufferType),this.setInterpolation(r||this.DefaultInterpolation)}static toJSON(e){let t=e.constructor,n;if(t.toJSON!==this.toJSON)n=t.toJSON(e);else{n={name:e.name,times:Ms(e.times,Array),values:Ms(e.values,Array)};let t=e.getInterpolation();t!==e.DefaultInterpolation&&(n.interpolation=t)}return n.type=e.ValueTypeName,n}InterpolantFactoryMethodDiscrete(e){return new zs(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new Rs(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new Ls(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodBezier(e){let t=new Bs(this.times,this.values,this.getValueSize(),e);return this.settings&&(t.settings=this.settings),t}setInterpolation(e){let t;switch(e){case Ge:t=this.InterpolantFactoryMethodDiscrete;break;case Ke:t=this.InterpolantFactoryMethodLinear;break;case qe:t=this.InterpolantFactoryMethodSmooth;break;case Je:t=this.InterpolantFactoryMethodBezier;break}if(t===void 0){let t=`unsupported interpolation for `+this.ValueTypeName+` keyframe track named `+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw Error(t);return N(`KeyframeTrack:`,t),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return Ge;case this.InterpolantFactoryMethodLinear:return Ke;case this.InterpolantFactoryMethodSmooth:return qe;case this.InterpolantFactoryMethodBezier:return Je}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){let t=this.times;for(let n=0,r=t.length;n!==r;++n)t[n]+=e}return this}scale(e){if(e!==1){let t=this.times;for(let n=0,r=t.length;n!==r;++n)t[n]*=e}return this}trim(e,t){let n=this.times,r=n.length,i=0,a=r-1;for(;i!==r&&n[i]<e;)++i;for(;a!==-1&&n[a]>t;)--a;if(++a,i!==0||a!==r){i>=a&&(a=Math.max(a,1),i=a-1);let e=this.getValueSize();this.times=n.slice(i,a),this.values=this.values.slice(i*e,a*e)}return this}validate(){let e=!0,t=this.getValueSize();t-Math.floor(t)!==0&&(P(`KeyframeTrack: Invalid value size in track.`,this),e=!1);let n=this.times,r=this.values,i=n.length;i===0&&(P(`KeyframeTrack: Track is empty.`,this),e=!1);let a=null;for(let t=0;t!==i;t++){let r=n[t];if(typeof r==`number`&&isNaN(r)){P(`KeyframeTrack: Time is not a valid number.`,this,t,r),e=!1;break}if(a!==null&&a>r){P(`KeyframeTrack: Out of order keys.`,this,t,r,a),e=!1;break}a=r}if(r!==void 0&&ct(r))for(let t=0,n=r.length;t!==n;++t){let n=r[t];if(isNaN(n)){P(`KeyframeTrack: Value is not a valid number.`,this,t,n),e=!1;break}}return e}optimize(){let e=this.times.slice(),t=this.values.slice(),n=this.getValueSize(),r=this.getInterpolation()===qe,i=e.length-1,a=1;for(let o=1;o<i;++o){let i=!1,s=e[o];if(s!==e[o+1]&&(o!==1||s!==e[0]))if(r)i=!0;else{let e=o*n,r=e-n,a=e+n;for(let o=0;o!==n;++o){let n=t[e+o];if(n!==t[r+o]||n!==t[a+o]){i=!0;break}}}if(i){if(o!==a){e[a]=e[o];let r=o*n,i=a*n;for(let e=0;e!==n;++e)t[i+e]=t[r+e]}++a}}if(i>0){e[a]=e[i];for(let e=i*n,r=a*n,o=0;o!==n;++o)t[r+o]=t[e+o];++a}return a===e.length?(this.times=e,this.values=t):(this.times=e.slice(0,a),this.values=t.slice(0,a*n)),this}clone(){let e=this.times.slice(),t=this.values.slice(),n=this.constructor,r=new n(this.name,e,t);return r.createInterpolant=this.createInterpolant,r}};Vs.prototype.ValueTypeName=``,Vs.prototype.TimeBufferType=Float32Array,Vs.prototype.ValueBufferType=Float32Array,Vs.prototype.DefaultInterpolation=Ke;var Hs=class extends Vs{constructor(e,t,n){super(e,t,n)}};Hs.prototype.ValueTypeName=`bool`,Hs.prototype.ValueBufferType=Array,Hs.prototype.DefaultInterpolation=Ge,Hs.prototype.InterpolantFactoryMethodLinear=void 0,Hs.prototype.InterpolantFactoryMethodSmooth=void 0;var Us=class extends Vs{constructor(e,t,n,r){super(e,t,n,r)}};Us.prototype.ValueTypeName=`color`;var Ws=class extends Vs{constructor(e,t,n,r){super(e,t,n,r)}};Ws.prototype.ValueTypeName=`number`;var Gs=class extends Is{constructor(e,t,n,r){super(e,t,n,r)}interpolate_(e,t,n,r){let i=this.resultBuffer,a=this.sampleValues,o=this.valueSize,s=(n-t)/(r-t),c=e*o;for(let e=c+o;c!==e;c+=4)Gt.slerpFlat(i,0,a,c-o,a,c,s);return i}},Ks=class extends Vs{constructor(e,t,n,r){super(e,t,n,r)}InterpolantFactoryMethodLinear(e){return new Gs(this.times,this.values,this.getValueSize(),e)}};Ks.prototype.ValueTypeName=`quaternion`,Ks.prototype.InterpolantFactoryMethodSmooth=void 0;var qs=class extends Vs{constructor(e,t,n){super(e,t,n)}};qs.prototype.ValueTypeName=`string`,qs.prototype.ValueBufferType=Array,qs.prototype.DefaultInterpolation=Ge,qs.prototype.InterpolantFactoryMethodLinear=void 0,qs.prototype.InterpolantFactoryMethodSmooth=void 0;var Js=class extends Vs{constructor(e,t,n,r){super(e,t,n,r)}};Js.prototype.ValueTypeName=`vector`;var Ys=class{constructor(e=``,t=-1,n=[],r=Qe){this.name=e,this.tracks=n,this.duration=t,this.blendMode=r,this.uuid=Ct(),this.userData={},this.duration<0&&this.resetDuration()}static parse(e){let t=[],n=e.tracks,r=1/(e.fps||1);for(let e=0,i=n.length;e!==i;++e)t.push(Zs(n[e]).scale(r));let i=new this(e.name,e.duration,t,e.blendMode);return i.uuid=e.uuid,i.userData=JSON.parse(e.userData||`{}`),i}static toJSON(e){let t=[],n=e.tracks,r={name:e.name,duration:e.duration,tracks:t,uuid:e.uuid,blendMode:e.blendMode,userData:JSON.stringify(e.userData)};for(let e=0,r=n.length;e!==r;++e)t.push(Vs.toJSON(n[e]));return r}static CreateFromMorphTargetSequence(e,t,n,r){let i=t.length,a=[];for(let e=0;e<i;e++){let o=[],s=[];o.push((e+i-1)%i,e,(e+1)%i),s.push(0,1,0);let c=Ns(o);o=Ps(o,1,c),s=Ps(s,1,c),!r&&o[0]===0&&(o.push(i),s.push(s[0])),a.push(new Ws(`.morphTargetInfluences[`+t[e].name+`]`,o,s).scale(1/n))}return new this(e,-1,a)}static findByName(e,t){let n=e;if(!Array.isArray(e)){let t=e;n=t.geometry&&t.geometry.animations||t.animations}for(let e=0;e<n.length;e++)if(n[e].name===t)return n[e];return null}static CreateClipsFromMorphTargetSequences(e,t,n){let r={},i=/^([\w-]*?)([\d]+)$/;for(let t=0,n=e.length;t<n;t++){let n=e[t],a=n.name.match(i);if(a&&a.length>1){let e=a[1],t=r[e];t||(r[e]=t=[]),t.push(n)}}let a=[];for(let e in r)a.push(this.CreateFromMorphTargetSequence(e,r[e],t,n));return a}static parseAnimation(e,t){if(N(`AnimationClip: parseAnimation() is deprecated and will be removed with r185`),!e)return P(`AnimationClip: No animation in JSONLoader data.`),null;let n=function(e,t,n,r,i){if(n.length!==0){let a=[],o=[];Fs(n,a,o,r),a.length!==0&&i.push(new e(t,a,o))}},r=[],i=e.name||`default`,a=e.fps||30,o=e.blendMode,s=e.length||-1,c=e.hierarchy||[];for(let e=0;e<c.length;e++){let i=c[e].keys;if(!(!i||i.length===0))if(i[0].morphTargets){let e={},t;for(t=0;t<i.length;t++)if(i[t].morphTargets)for(let n=0;n<i[t].morphTargets.length;n++)e[i[t].morphTargets[n]]=-1;for(let n in e){let e=[],a=[];for(let r=0;r!==i[t].morphTargets.length;++r){let r=i[t];e.push(r.time),a.push(+(r.morphTarget===n))}r.push(new Ws(`.morphTargetInfluence[`+n+`]`,e,a))}s=e.length*a}else{let a=`.bones[`+t[e].name+`]`;n(Js,a+`.position`,i,`pos`,r),n(Ks,a+`.quaternion`,i,`rot`,r),n(Js,a+`.scale`,i,`scl`,r)}}return r.length===0?null:new this(i,s,r,o)}resetDuration(){let e=this.tracks,t=0;for(let n=0,r=e.length;n!==r;++n){let e=this.tracks[n];t=Math.max(t,e.times[e.times.length-1])}return this.duration=t,this}trim(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].trim(0,this.duration);return this}validate(){let e=!0;for(let t=0;t<this.tracks.length;t++)e=e&&this.tracks[t].validate();return e}optimize(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].optimize();return this}clone(){let e=[];for(let t=0;t<this.tracks.length;t++)e.push(this.tracks[t].clone());let t=new this.constructor(this.name,this.duration,e,this.blendMode);return t.userData=JSON.parse(JSON.stringify(this.userData)),t}toJSON(){return this.constructor.toJSON(this)}};function Xs(e){switch(e.toLowerCase()){case`scalar`:case`double`:case`float`:case`number`:case`integer`:return Ws;case`vector`:case`vector2`:case`vector3`:case`vector4`:return Js;case`color`:return Us;case`quaternion`:return Ks;case`bool`:case`boolean`:return Hs;case`string`:return qs}throw Error(`THREE.KeyframeTrack: Unsupported typeName: `+e)}function Zs(e){if(e.type===void 0)throw Error(`THREE.KeyframeTrack: track type undefined, can not parse`);let t=Xs(e.type);if(e.times===void 0){let t=[],n=[];Fs(e.keys,t,n,`value`),e.times=t,e.values=n}return t.parse===void 0?new t(e.name,e.times,e.values,e.interpolation):t.parse(e)}var Qs={enabled:!1,files:{},add:function(e,t){this.enabled!==!1&&($s(e)||(this.files[e]=t))},get:function(e){if(this.enabled!==!1&&!$s(e))return this.files[e]},remove:function(e){delete this.files[e]},clear:function(){this.files={}}};function $s(e){try{let t=e.slice(e.indexOf(`:`)+1);return new URL(t).protocol===`blob:`}catch{return!1}}var ec=new class{constructor(e,t,n){let r=this,i=!1,a=0,o=0,s,c=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=n,this._abortController=null,this.itemStart=function(e){o++,i===!1&&r.onStart!==void 0&&r.onStart(e,a,o),i=!0},this.itemEnd=function(e){a++,r.onProgress!==void 0&&r.onProgress(e,a,o),a===o&&(i=!1,r.onLoad!==void 0&&r.onLoad())},this.itemError=function(e){r.onError!==void 0&&r.onError(e)},this.resolveURL=function(e){return s?s(e):e},this.setURLModifier=function(e){return s=e,this},this.addHandler=function(e,t){return c.push(e,t),this},this.removeHandler=function(e){let t=c.indexOf(e);return t!==-1&&c.splice(t,2),this},this.getHandler=function(e){for(let t=0,n=c.length;t<n;t+=2){let n=c[t],r=c[t+1];if(n.global&&(n.lastIndex=0),n.test(e))return r}return null},this.abort=function(){return this.abortController.abort(),this._abortController=null,this}}get abortController(){return this._abortController||(this._abortController=new AbortController),this._abortController}},tc=class{constructor(e){this.manager=e===void 0?ec:e,this.crossOrigin=`anonymous`,this.withCredentials=!1,this.path=``,this.resourcePath=``,this.requestHeader={},typeof __THREE_DEVTOOLS__<`u`&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent(`observe`,{detail:this}))}load(){}loadAsync(e,t){let n=this;return new Promise(function(r,i){n.load(e,r,t,i)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}abort(){return this}};tc.DEFAULT_MATERIAL_NAME=`__DEFAULT`;var nc={},rc=class extends Error{constructor(e,t){super(e),this.response=t}},ic=class extends tc{constructor(e){super(e),this.mimeType=``,this.responseType=``,this._abortController=new AbortController}load(e,t,n,r){e===void 0&&(e=``),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);let i=Qs.get(`file:${e}`);if(i!==void 0){this.manager.itemStart(e),setTimeout(()=>{t&&t(i),this.manager.itemEnd(e)},0);return}if(nc[e]!==void 0){nc[e].push({onLoad:t,onProgress:n,onError:r});return}nc[e]=[],nc[e].push({onLoad:t,onProgress:n,onError:r});let a=new Request(e,{headers:new Headers(this.requestHeader),credentials:this.withCredentials?`include`:`same-origin`,signal:typeof AbortSignal.any==`function`?AbortSignal.any([this._abortController.signal,this.manager.abortController.signal]):this._abortController.signal}),o=this.mimeType,s=this.responseType;fetch(a).then(t=>{if(t.status===200||t.status===0){if(t.status===0&&N(`FileLoader: HTTP Status 0 received.`),typeof ReadableStream>`u`||t.body===void 0||t.body.getReader===void 0)return t;let n=nc[e],r=t.body.getReader(),i=t.headers.get(`X-File-Size`)||t.headers.get(`Content-Length`),a=i?parseInt(i):0,o=a!==0,s=0,c=new ReadableStream({start(e){t();function t(){r.read().then(({done:r,value:i})=>{if(r)e.close();else{s+=i.byteLength;let r=new ProgressEvent(`progress`,{lengthComputable:o,loaded:s,total:a});for(let e=0,t=n.length;e<t;e++){let t=n[e];t.onProgress&&t.onProgress(r)}e.enqueue(i),t()}},t=>{e.error(t)})}}});return new Response(c)}else throw new rc(`fetch for "${t.url}" responded with ${t.status}: ${t.statusText}`,t)}).then(e=>{switch(s){case`arraybuffer`:return e.arrayBuffer();case`blob`:return e.blob();case`document`:return e.text().then(e=>new DOMParser().parseFromString(e,o));case`json`:return e.json();default:if(o===``)return e.text();{let t=/charset="?([^;"\s]*)"?/i.exec(o),n=t&&t[1]?t[1].toLowerCase():void 0,r=new TextDecoder(n);return e.arrayBuffer().then(e=>r.decode(e))}}}).then(t=>{Qs.add(`file:${e}`,t);let n=nc[e];delete nc[e];for(let e=0,r=n.length;e<r;e++){let r=n[e];r.onLoad&&r.onLoad(t)}}).catch(t=>{let n=nc[e];if(n===void 0)throw this.manager.itemError(e),t;delete nc[e];for(let e=0,r=n.length;e<r;e++){let r=n[e];r.onError&&r.onError(t)}this.manager.itemError(e)}).finally(()=>{this.manager.itemEnd(e)}),this.manager.itemStart(e)}setResponseType(e){return this.responseType=e,this}setMimeType(e){return this.mimeType=e,this}abort(){return this._abortController.abort(),this._abortController=new AbortController,this}},ac=new WeakMap,oc=class extends tc{constructor(e){super(e)}load(e,t,n,r){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);let i=this,a=Qs.get(`image:${e}`);if(a!==void 0){if(a.complete===!0)i.manager.itemStart(e),setTimeout(function(){t&&t(a),i.manager.itemEnd(e)},0);else{let e=ac.get(a);e===void 0&&(e=[],ac.set(a,e)),e.push({onLoad:t,onError:r})}return a}let o=lt(`img`);function s(){l(),t&&t(this);let n=ac.get(this)||[];for(let e=0;e<n.length;e++){let t=n[e];t.onLoad&&t.onLoad(this)}ac.delete(this),i.manager.itemEnd(e)}function c(t){l(),r&&r(t),Qs.remove(`image:${e}`);let n=ac.get(this)||[];for(let e=0;e<n.length;e++){let r=n[e];r.onError&&r.onError(t)}ac.delete(this),i.manager.itemError(e),i.manager.itemEnd(e)}function l(){o.removeEventListener(`load`,s,!1),o.removeEventListener(`error`,c,!1)}return o.addEventListener(`load`,s,!1),o.addEventListener(`error`,c,!1),e.slice(0,5)!==`data:`&&this.crossOrigin!==void 0&&(o.crossOrigin=this.crossOrigin),Qs.add(`image:${e}`,o),i.manager.itemStart(e),o.src=e,o}},sc=class extends tc{constructor(e){super(e)}load(e,t,n,r){let i=new ln,a=new oc(this.manager);return a.setCrossOrigin(this.crossOrigin),a.setPath(this.path),a.load(e,function(e){i.image=e,i.needsUpdate=!0,t!==void 0&&t(i)},n,r),i}},cc=class extends Vn{constructor(e,t=1){super(),this.isLight=!0,this.type=`Light`,this.color=new V(e),this.intensity=t}dispose(){this.dispatchEvent({type:`dispose`})}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){let t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,t}},lc=class extends cc{constructor(e,t,n){super(e,n),this.isHemisphereLight=!0,this.type=`HemisphereLight`,this.position.copy(Vn.DEFAULT_UP),this.updateMatrix(),this.groundColor=new V(t)}copy(e,t){return super.copy(e,t),this.groundColor.copy(e.groundColor),this}toJSON(e){let t=super.toJSON(e);return t.object.groundColor=this.groundColor.getHex(),t}},uc=new z,dc=new L,fc=new L,pc=class{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new I(512,512),this.mapType=y,this.map=null,this.mapPass=null,this.matrix=new z,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new ua,this._frameExtents=new I(1,1),this._viewportCount=1,this._viewports=[new un(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){let t=this.camera,n=this.matrix;dc.setFromMatrixPosition(e.matrixWorld),t.position.copy(dc),fc.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(fc),t.updateMatrixWorld(),uc.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(uc,t.coordinateSystem,t.reversedDepth),t.coordinateSystem===2001||t.reversedDepth?n.set(.5,0,0,.5,0,.5,0,.5,0,0,1,0,0,0,0,1):n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(uc)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this.biasNode=e.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){let e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}},mc=new L,hc=new Gt,gc=new L,_c=class extends Vn{constructor(){super(),this.isCamera=!0,this.type=`Camera`,this.matrixWorldInverse=new z,this.projectionMatrix=new z,this.projectionMatrixInverse=new z,this.coordinateSystem=ot,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorld.decompose(mc,hc,gc),gc.x===1&&gc.y===1&&gc.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(mc,hc,gc.set(1,1,1)).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorld.decompose(mc,hc,gc),gc.x===1&&gc.y===1&&gc.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(mc,hc,gc.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}},vc=new L,yc=new I,bc=new I,xc=class extends _c{constructor(e=50,t=1,n=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type=`PerspectiveCamera`,this.fov=e,this.zoom=1,this.near=n,this.far=r,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){let t=.5*this.getFilmHeight()/e;this.fov=St*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){let e=Math.tan(xt*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return St*2*Math.atan(Math.tan(xt*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,n){vc.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(vc.x,vc.y).multiplyScalar(-e/vc.z),vc.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(vc.x,vc.y).multiplyScalar(-e/vc.z)}getViewSize(e,t){return this.getViewBounds(e,yc,bc),t.subVectors(bc,yc)}setViewOffset(e,t,n,r,i,a){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=r,this.view.width=i,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=this.near,t=e*Math.tan(xt*.5*this.fov)/this.zoom,n=2*t,r=this.aspect*n,i=-.5*r,a=this.view;if(this.view!==null&&this.view.enabled){let e=a.fullWidth,o=a.fullHeight;i+=a.offsetX*r/e,t-=a.offsetY*n/o,r*=a.width/e,n*=a.height/o}let o=this.filmOffset;o!==0&&(i+=e*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(i,i+r,t,t-n,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}},Sc=class extends pc{constructor(){super(new xc(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1,this.aspect=1}updateMatrices(e){let t=this.camera,n=St*2*e.angle*this.focus,r=this.mapSize.width/this.mapSize.height*this.aspect,i=e.distance||t.far;(n!==t.fov||r!==t.aspect||i!==t.far)&&(t.fov=n,t.aspect=r,t.far=i,t.updateProjectionMatrix()),super.updateMatrices(e)}copy(e){return super.copy(e),this.focus=e.focus,this}},Cc=class extends cc{constructor(e,t,n=0,r=Math.PI/3,i=0,a=2){super(e,t),this.isSpotLight=!0,this.type=`SpotLight`,this.position.copy(Vn.DEFAULT_UP),this.updateMatrix(),this.target=new Vn,this.distance=n,this.angle=r,this.penumbra=i,this.decay=a,this.map=null,this.shadow=new Sc}get power(){return this.intensity*Math.PI}set power(e){this.intensity=e/Math.PI}dispose(){super.dispose(),this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.angle=e.angle,this.penumbra=e.penumbra,this.decay=e.decay,this.target=e.target.clone(),this.map=e.map,this.shadow=e.shadow.clone(),this}toJSON(e){let t=super.toJSON(e);return t.object.distance=this.distance,t.object.angle=this.angle,t.object.decay=this.decay,t.object.penumbra=this.penumbra,t.object.target=this.target.uuid,this.map&&this.map.isTexture&&(t.object.map=this.map.toJSON(e).uuid),t.object.shadow=this.shadow.toJSON(),t}},wc=class extends pc{constructor(){super(new xc(90,1,.5,500)),this.isPointLightShadow=!0}},q=class extends cc{constructor(e,t,n=0,r=2){super(e,t),this.isPointLight=!0,this.type=`PointLight`,this.distance=n,this.decay=r,this.shadow=new wc}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){super.dispose(),this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}toJSON(e){let t=super.toJSON(e);return t.object.distance=this.distance,t.object.decay=this.decay,t.object.shadow=this.shadow.toJSON(),t}},Tc=class extends _c{constructor(e=-1,t=1,n=1,r=-1,i=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type=`OrthographicCamera`,this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=r,this.near=i,this.far=a,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,r,i,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=r,this.view.width=i,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,r=(this.top+this.bottom)/2,i=n-e,a=n+e,o=r+t,s=r-t;if(this.view!==null&&this.view.enabled){let e=(this.right-this.left)/this.view.fullWidth/this.zoom,t=(this.top-this.bottom)/this.view.fullHeight/this.zoom;i+=e*this.view.offsetX,a=i+e*this.view.width,o-=t*this.view.offsetY,s=o-t*this.view.height}this.projectionMatrix.makeOrthographic(i,a,o,s,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}},Ec=class extends pc{constructor(){super(new Tc(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},Dc=class extends cc{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type=`DirectionalLight`,this.position.copy(Vn.DEFAULT_UP),this.updateMatrix(),this.target=new Vn,this.shadow=new Ec}dispose(){super.dispose(),this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}toJSON(e){let t=super.toJSON(e);return t.object.shadow=this.shadow.toJSON(),t.object.target=this.target.uuid,t}},Oc=class extends cc{constructor(e,t){super(e,t),this.isAmbientLight=!0,this.type=`AmbientLight`}},kc=class{static extractUrlBase(e){let t=e.lastIndexOf(`/`);return t===-1?`./`:e.slice(0,t+1)}static resolveURL(e,t){return typeof e!=`string`||e===``?``:(/^https?:\/\//i.test(t)&&/^\//.test(e)&&(t=t.replace(/(^https?:\/\/[^\/]+).*/i,`$1`)),/^(https?:)?\/\//i.test(e)||/^data:.*,.*$/i.test(e)||/^blob:.*$/i.test(e)?e:t+e)}},Ac=new WeakMap,jc=class extends tc{constructor(e){super(e),this.isImageBitmapLoader=!0,typeof createImageBitmap>`u`&&N(`ImageBitmapLoader: createImageBitmap() not supported.`),typeof fetch>`u`&&N(`ImageBitmapLoader: fetch() not supported.`),this.options={premultiplyAlpha:`none`},this._abortController=new AbortController}setOptions(e){return this.options=e,this}load(e,t,n,r){e===void 0&&(e=``),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);let i=this,a=Qs.get(`image-bitmap:${e}`);if(a!==void 0){if(i.manager.itemStart(e),a.then){a.then(n=>{Ac.has(a)===!0?(r&&r(Ac.get(a)),i.manager.itemError(e),i.manager.itemEnd(e)):(t&&t(n),i.manager.itemEnd(e))});return}setTimeout(function(){t&&t(a),i.manager.itemEnd(e)},0);return}let o={};o.credentials=this.crossOrigin===`anonymous`?`same-origin`:`include`,o.headers=this.requestHeader,o.signal=typeof AbortSignal.any==`function`?AbortSignal.any([this._abortController.signal,this.manager.abortController.signal]):this._abortController.signal;let s=fetch(e,o).then(function(e){return e.blob()}).then(function(e){return createImageBitmap(e,Object.assign(i.options,{colorSpaceConversion:`none`}))}).then(function(n){Qs.add(`image-bitmap:${e}`,n),t&&t(n),i.manager.itemEnd(e)}).catch(function(t){r&&r(t),Ac.set(s,t),Qs.remove(`image-bitmap:${e}`),i.manager.itemError(e),i.manager.itemEnd(e)});Qs.add(`image-bitmap:${e}`,s),i.manager.itemStart(e)}abort(){return this._abortController.abort(),this._abortController=new AbortController,this}},Mc=-90,Nc=1,Pc=class extends Vn{constructor(e,t,n){super(),this.type=`CubeCamera`,this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;let r=new xc(Mc,Nc,e,t);r.layers=this.layers,this.add(r);let i=new xc(Mc,Nc,e,t);i.layers=this.layers,this.add(i);let a=new xc(Mc,Nc,e,t);a.layers=this.layers,this.add(a);let o=new xc(Mc,Nc,e,t);o.layers=this.layers,this.add(o);let s=new xc(Mc,Nc,e,t);s.layers=this.layers,this.add(s);let c=new xc(Mc,Nc,e,t);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){let e=this.coordinateSystem,t=this.children.concat(),[n,r,i,a,o,s]=t;for(let e of t)this.remove(e);if(e===2e3)n.up.set(0,1,0),n.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),i.up.set(0,0,-1),i.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),s.up.set(0,1,0),s.lookAt(0,0,-1);else if(e===2001)n.up.set(0,-1,0),n.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),i.up.set(0,0,1),i.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),s.up.set(0,-1,0),s.lookAt(0,0,-1);else throw Error(`THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: `+e);for(let e of t)this.add(e),e.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();let{renderTarget:n,activeMipmapLevel:r}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());let[i,a,o,s,c,l]=this.children,u=e.getRenderTarget(),d=e.getActiveCubeFace(),f=e.getActiveMipmapLevel(),p=e.xr.enabled;e.xr.enabled=!1;let m=n.texture.generateMipmaps;n.texture.generateMipmaps=!1;let h=!1;h=e.isWebGLRenderer===!0?e.state.buffers.depth.getReversed():e.reversedDepthBuffer,e.setRenderTarget(n,0,r),h&&e.autoClear===!1&&e.clearDepth(),e.render(t,i),e.setRenderTarget(n,1,r),h&&e.autoClear===!1&&e.clearDepth(),e.render(t,a),e.setRenderTarget(n,2,r),h&&e.autoClear===!1&&e.clearDepth(),e.render(t,o),e.setRenderTarget(n,3,r),h&&e.autoClear===!1&&e.clearDepth(),e.render(t,s),e.setRenderTarget(n,4,r),h&&e.autoClear===!1&&e.clearDepth(),e.render(t,c),n.texture.generateMipmaps=m,e.setRenderTarget(n,5,r),h&&e.autoClear===!1&&e.clearDepth(),e.render(t,l),e.setRenderTarget(u,d,f),e.xr.enabled=p,n.texture.needsPMREMUpdate=!0}},Fc=class extends xc{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}},Ic=class{constructor(){this._previousTime=0,this._currentTime=0,this._startTime=performance.now(),this._delta=0,this._elapsed=0,this._timescale=1,this._document=null,this._pageVisibilityHandler=null}connect(e){this._document=e,e.hidden!==void 0&&(this._pageVisibilityHandler=Lc.bind(this),e.addEventListener(`visibilitychange`,this._pageVisibilityHandler,!1))}disconnect(){this._pageVisibilityHandler!==null&&(this._document.removeEventListener(`visibilitychange`,this._pageVisibilityHandler),this._pageVisibilityHandler=null),this._document=null}getDelta(){return this._delta/1e3}getElapsed(){return this._elapsed/1e3}getTimescale(){return this._timescale}setTimescale(e){return this._timescale=e,this}reset(){return this._currentTime=performance.now()-this._startTime,this}dispose(){this.disconnect()}update(e){return this._pageVisibilityHandler!==null&&this._document.hidden===!0?this._delta=0:(this._previousTime=this._currentTime,this._currentTime=(e===void 0?performance.now():e)-this._startTime,this._delta=(this._currentTime-this._previousTime)*this._timescale,this._elapsed+=this._delta),this}};function Lc(){this._document.hidden===!1&&this.reset()}var Rc=`\\[\\]\\.:\\/`,zc=RegExp(`[\\[\\]\\.:\\/]`,`g`),Bc=`[^\\[\\]\\.:\\/]`,Vc=`[^`+Rc.replace(`\\.`,``)+`]`,Hc=`((?:WC+[\\/:])*)`.replace(`WC`,Bc),Uc=`(WCOD+)?`.replace(`WCOD`,Vc),Wc=`(?:\\.(WC+)(?:\\[(.+)\\])?)?`.replace(`WC`,Bc),Gc=`\\.(WC+)(?:\\[(.+)\\])?`.replace(`WC`,Bc),Kc=RegExp(`^`+Hc+Uc+Wc+Gc+`$`),qc=[`material`,`materials`,`bones`,`map`],Jc=class{constructor(e,t,n){let r=n||Yc.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,r)}getValue(e,t){this.bind();let n=this._targetGroup.nCachedObjects_,r=this._bindings[n];r!==void 0&&r.getValue(e,t)}setValue(e,t){let n=this._bindings;for(let r=this._targetGroup.nCachedObjects_,i=n.length;r!==i;++r)n[r].setValue(e,t)}bind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].bind()}unbind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].unbind()}},Yc=class e{constructor(t,n,r){this.path=n,this.parsedPath=r||e.parseTrackName(n),this.node=e.findNode(t,this.parsedPath.nodeName),this.rootNode=t,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(t,n,r){return t&&t.isAnimationObjectGroup?new e.Composite(t,n,r):new e(t,n,r)}static sanitizeNodeName(e){return e.replace(/\s/g,`_`).replace(zc,``)}static parseTrackName(e){let t=Kc.exec(e);if(t===null)throw Error(`PropertyBinding: Cannot parse trackName: `+e);let n={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},r=n.nodeName&&n.nodeName.lastIndexOf(`.`);if(r!==void 0&&r!==-1){let e=n.nodeName.substring(r+1);qc.indexOf(e)!==-1&&(n.nodeName=n.nodeName.substring(0,r),n.objectName=e)}if(n.propertyName===null||n.propertyName.length===0)throw Error(`PropertyBinding: can not parse propertyName from trackName: `+e);return n}static findNode(e,t){if(t===void 0||t===``||t===`.`||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){let n=e.skeleton.getBoneByName(t);if(n!==void 0)return n}if(e.children){let n=function(e){for(let r=0;r<e.length;r++){let i=e[r];if(i.name===t||i.uuid===t)return i;let a=n(i.children);if(a)return a}return null},r=n(e.children);if(r)return r}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){let n=this.resolvedProperty;for(let r=0,i=n.length;r!==i;++r)e[t++]=n[r]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){let n=this.resolvedProperty;for(let r=0,i=n.length;r!==i;++r)n[r]=e[t++]}_setValue_array_setNeedsUpdate(e,t){let n=this.resolvedProperty;for(let r=0,i=n.length;r!==i;++r)n[r]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){let n=this.resolvedProperty;for(let r=0,i=n.length;r!==i;++r)n[r]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let t=this.node,n=this.parsedPath,r=n.objectName,i=n.propertyName,a=n.propertyIndex;if(t||(t=e.findNode(this.rootNode,n.nodeName),this.node=t),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!t){N(`PropertyBinding: No target node found for track: `+this.path+`.`);return}if(r){let e=n.objectIndex;switch(r){case`materials`:if(!t.material){P(`PropertyBinding: Can not bind to material as node does not have a material.`,this);return}if(!t.material.materials){P(`PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.`,this);return}t=t.material.materials;break;case`bones`:if(!t.skeleton){P(`PropertyBinding: Can not bind to bones as node does not have a skeleton.`,this);return}t=t.skeleton.bones;for(let n=0;n<t.length;n++)if(t[n].name===e){e=n;break}break;case`map`:if(`map`in t){t=t.map;break}if(!t.material){P(`PropertyBinding: Can not bind to material as node does not have a material.`,this);return}if(!t.material.map){P(`PropertyBinding: Can not bind to material.map as node.material does not have a map.`,this);return}t=t.material.map;break;default:if(t[r]===void 0){P(`PropertyBinding: Can not bind to objectName of node undefined.`,this);return}t=t[r]}if(e!==void 0){if(t[e]===void 0){P(`PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.`,this,t);return}t=t[e]}}let o=t[i];if(o===void 0){let e=n.nodeName;P(`PropertyBinding: Trying to update property for track: `+e+`.`+i+` but it wasn't found.`,t);return}let s=this.Versioning.None;this.targetObject=t,t.isMaterial===!0?s=this.Versioning.NeedsUpdate:t.isObject3D===!0&&(s=this.Versioning.MatrixWorldNeedsUpdate);let c=this.BindingType.Direct;if(a!==void 0){if(i===`morphTargetInfluences`){if(!t.geometry){P(`PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.`,this);return}if(!t.geometry.morphAttributes){P(`PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.`,this);return}t.morphTargetDictionary[a]!==void 0&&(a=t.morphTargetDictionary[a])}c=this.BindingType.ArrayElement,this.resolvedProperty=o,this.propertyIndex=a}else o.fromArray!==void 0&&o.toArray!==void 0?(c=this.BindingType.HasFromToArray,this.resolvedProperty=o):Array.isArray(o)?(c=this.BindingType.EntireArray,this.resolvedProperty=o):this.propertyName=i;this.getValue=this.GetterByBindingType[c],this.setValue=this.SetterByBindingTypeAndVersioning[c][s]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};Yc.Composite=Jc,Yc.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3},Yc.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2},Yc.prototype.GetterByBindingType=[Yc.prototype._getValue_direct,Yc.prototype._getValue_array,Yc.prototype._getValue_arrayElement,Yc.prototype._getValue_toArray],Yc.prototype.SetterByBindingTypeAndVersioning=[[Yc.prototype._setValue_direct,Yc.prototype._setValue_direct_setNeedsUpdate,Yc.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[Yc.prototype._setValue_array,Yc.prototype._setValue_array_setNeedsUpdate,Yc.prototype._setValue_array_setMatrixWorldNeedsUpdate],[Yc.prototype._setValue_arrayElement,Yc.prototype._setValue_arrayElement_setNeedsUpdate,Yc.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[Yc.prototype._setValue_fromArray,Yc.prototype._setValue_fromArray_setNeedsUpdate,Yc.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]],a=class{constructor(e,t,n,r){this.elements=[1,0,0,1],e!==void 0&&this.set(e,t,n,r)}identity(){return this.set(1,0,0,1),this}fromArray(e,t=0){for(let n=0;n<4;n++)this.elements[n]=e[n+t];return this}set(e,t,n,r){let i=this.elements;return i[0]=e,i[2]=t,i[1]=n,i[3]=r,this}},a.prototype.isMatrix2=!0;function Xc(e,t,n,r){let i=Zc(r);switch(n){case re:return e*t;case se:return e*t/i.components*i.byteLength;case ce:return e*t/i.components*i.byteLength;case le:return e*t*2/i.components*i.byteLength;case ue:return e*t*2/i.components*i.byteLength;case k:return e*t*3/i.components*i.byteLength;case ie:return e*t*4/i.components*i.byteLength;case de:return e*t*4/i.components*i.byteLength;case fe:case pe:return Math.floor((e+3)/4)*Math.floor((t+3)/4)*8;case me:case he:return Math.floor((e+3)/4)*Math.floor((t+3)/4)*16;case _e:case ye:return Math.max(e,16)*Math.max(t,8)/4;case ge:case ve:return Math.max(e,8)*Math.max(t,8)/2;case be:case xe:case Ce:case we:return Math.floor((e+3)/4)*Math.floor((t+3)/4)*8;case Se:case Te:case Ee:return Math.floor((e+3)/4)*Math.floor((t+3)/4)*16;case De:return Math.floor((e+3)/4)*Math.floor((t+3)/4)*16;case Oe:return Math.floor((e+4)/5)*Math.floor((t+3)/4)*16;case ke:return Math.floor((e+4)/5)*Math.floor((t+4)/5)*16;case Ae:return Math.floor((e+5)/6)*Math.floor((t+4)/5)*16;case je:return Math.floor((e+5)/6)*Math.floor((t+5)/6)*16;case Me:return Math.floor((e+7)/8)*Math.floor((t+4)/5)*16;case Ne:return Math.floor((e+7)/8)*Math.floor((t+5)/6)*16;case Pe:return Math.floor((e+7)/8)*Math.floor((t+7)/8)*16;case Fe:return Math.floor((e+9)/10)*Math.floor((t+4)/5)*16;case A:return Math.floor((e+9)/10)*Math.floor((t+5)/6)*16;case Ie:return Math.floor((e+9)/10)*Math.floor((t+7)/8)*16;case Le:return Math.floor((e+9)/10)*Math.floor((t+9)/10)*16;case Re:return Math.floor((e+11)/12)*Math.floor((t+9)/10)*16;case j:return Math.floor((e+11)/12)*Math.floor((t+11)/12)*16;case ze:case M:case Be:return Math.ceil(e/4)*Math.ceil(t/4)*16;case Ve:case He:return Math.ceil(e/4)*Math.ceil(t/4)*8;case Ue:case We:return Math.ceil(e/4)*Math.ceil(t/4)*16}throw Error(`Unable to determine texture byte length for ${n} format.`)}function Zc(e){switch(e){case y:case b:return{byteLength:1,components:1};case S:case x:case E:return{byteLength:2,components:1};case D:case ee:return{byteLength:2,components:4};case w:case C:case T:return{byteLength:4,components:1};case O:case ne:return{byteLength:4,components:3}}throw Error(`Unknown texture type ${e}.`)}typeof __THREE_DEVTOOLS__<`u`&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent(`register`,{detail:{revision:`184`}})),typeof window<`u`&&(window.__THREE__?N(`WARNING: Multiple instances of Three.js being imported.`):window.__THREE__=`184`);function Qc(){let e=null,t=!1,n=null,r=null;function i(t,a){n(t,a),r=e.requestAnimationFrame(i)}return{start:function(){t!==!0&&n!==null&&e!==null&&(r=e.requestAnimationFrame(i),t=!0)},stop:function(){e!==null&&e.cancelAnimationFrame(r),t=!1},setAnimationLoop:function(e){n=e},setContext:function(t){e=t}}}function $c(e){let t=new WeakMap;function n(t,n){let r=t.array,i=t.usage,a=r.byteLength,o=e.createBuffer();e.bindBuffer(n,o),e.bufferData(n,r,i),t.onUploadCallback();let s;if(r instanceof Float32Array)s=e.FLOAT;else if(typeof Float16Array<`u`&&r instanceof Float16Array)s=e.HALF_FLOAT;else if(r instanceof Uint16Array)s=t.isFloat16BufferAttribute?e.HALF_FLOAT:e.UNSIGNED_SHORT;else if(r instanceof Int16Array)s=e.SHORT;else if(r instanceof Uint32Array)s=e.UNSIGNED_INT;else if(r instanceof Int32Array)s=e.INT;else if(r instanceof Int8Array)s=e.BYTE;else if(r instanceof Uint8Array)s=e.UNSIGNED_BYTE;else if(r instanceof Uint8ClampedArray)s=e.UNSIGNED_BYTE;else throw Error(`THREE.WebGLAttributes: Unsupported buffer data format: `+r);return{buffer:o,type:s,bytesPerElement:r.BYTES_PER_ELEMENT,version:t.version,size:a}}function r(t,n,r){let i=n.array,a=n.updateRanges;if(e.bindBuffer(r,t),a.length===0)e.bufferSubData(r,0,i);else{a.sort((e,t)=>e.start-t.start);let t=0;for(let e=1;e<a.length;e++){let n=a[t],r=a[e];r.start<=n.start+n.count+1?n.count=Math.max(n.count,r.start+r.count-n.start):(++t,a[t]=r)}a.length=t+1;for(let t=0,n=a.length;t<n;t++){let n=a[t];e.bufferSubData(r,n.start*i.BYTES_PER_ELEMENT,i,n.start,n.count)}n.clearUpdateRanges()}n.onUploadCallback()}function i(e){return e.isInterleavedBufferAttribute&&(e=e.data),t.get(e)}function a(n){n.isInterleavedBufferAttribute&&(n=n.data);let r=t.get(n);r&&(e.deleteBuffer(r.buffer),t.delete(n))}function o(e,i){if(e.isInterleavedBufferAttribute&&(e=e.data),e.isGLBufferAttribute){let n=t.get(e);(!n||n.version<e.version)&&t.set(e,{buffer:e.buffer,type:e.type,bytesPerElement:e.elementSize,version:e.version});return}let a=t.get(e);if(a===void 0)t.set(e,n(e,i));else if(a.version<e.version){if(a.size!==e.array.byteLength)throw Error(`THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.`);r(a.buffer,e,i),a.version=e.version}}return{get:i,remove:a,update:o}}var J={alphahash_fragment:`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,alphahash_pars_fragment:`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,alphamap_fragment:`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,alphamap_pars_fragment:`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,alphatest_fragment:`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,alphatest_pars_fragment:`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,aomap_fragment:`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,aomap_pars_fragment:`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,batching_pars_vertex:`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec4 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 );
	}
#endif`,batching_vertex:`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,begin_vertex:`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,beginnormal_vertex:`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,bsdfs:`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,iridescence_fragment:`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,bumpmap_pars_fragment:`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,clipping_planes_fragment:`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,clipping_planes_pars_fragment:`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,clipping_planes_pars_vertex:`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,clipping_planes_vertex:`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,color_fragment:`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,color_pars_fragment:`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,color_pars_vertex:`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,color_vertex:`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec4( 1.0 );
#endif
#ifdef USE_COLOR_ALPHA
	vColor *= color;
#elif defined( USE_COLOR )
	vColor.rgb *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.rgb *= instanceColor.rgb;
#endif
#ifdef USE_BATCHING_COLOR
	vColor *= getBatchingColor( getIndirectIndex( gl_DrawID ) );
#endif`,common:`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,cube_uv_reflection_fragment:`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,defaultnormal_vertex:`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,displacementmap_pars_vertex:`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,displacementmap_vertex:`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,emissivemap_fragment:`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,emissivemap_pars_fragment:`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,colorspace_fragment:`gl_FragColor = linearToOutputTexel( gl_FragColor );`,colorspace_pars_fragment:`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,envmap_fragment:`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * reflectVec );
		#ifdef ENVMAP_BLENDING_MULTIPLY
			outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_MIX )
			outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_ADD )
			outgoingLight += envColor.xyz * specularStrength * reflectivity;
		#endif
	#endif
#endif`,envmap_common_pars_fragment:`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,envmap_pars_fragment:`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,envmap_pars_vertex:`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,envmap_physical_pars_fragment:`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, pow4( roughness ) ) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,envmap_vertex:`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,fog_vertex:`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,fog_pars_vertex:`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,fog_fragment:`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,fog_pars_fragment:`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,gradientmap_pars_fragment:`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,lightmap_pars_fragment:`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,lights_lambert_fragment:`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,lights_lambert_pars_fragment:`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,lights_pars_begin:`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif
#include <lightprobes_pars_fragment>`,lights_toon_fragment:`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,lights_toon_pars_fragment:`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,lights_phong_fragment:`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,lights_phong_pars_fragment:`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,lights_physical_fragment:`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.diffuseContribution = diffuseColor.rgb * ( 1.0 - metalnessFactor );
material.metalness = metalnessFactor;
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor;
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = vec3( 0.04 );
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.0001, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,lights_physical_pars_fragment:`uniform sampler2D dfgLUT;
struct PhysicalMaterial {
	vec3 diffuseColor;
	vec3 diffuseContribution;
	vec3 specularColor;
	vec3 specularColorBlended;
	float roughness;
	float metalness;
	float specularF90;
	float dispersion;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
		vec3 iridescenceFresnelDielectric;
		vec3 iridescenceFresnelMetallic;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		return 0.5 / max( gv + gl, EPSILON );
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColorBlended;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transpose( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float rInv = 1.0 / ( roughness + 0.1 );
	float a = -1.9362 + 1.0678 * roughness + 0.4573 * r2 - 0.8469 * rInv;
	float b = -0.6014 + 0.5538 * roughness - 0.4670 * r2 - 0.1255 * rInv;
	float DG = exp( a * dotNV + b );
	return saturate( DG );
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
vec3 BRDF_GGX_Multiscatter( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 singleScatter = BRDF_GGX( lightDir, viewDir, normal, material );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 dfgV = texture2D( dfgLUT, vec2( material.roughness, dotNV ) ).rg;
	vec2 dfgL = texture2D( dfgLUT, vec2( material.roughness, dotNL ) ).rg;
	vec3 FssEss_V = material.specularColorBlended * dfgV.x + material.specularF90 * dfgV.y;
	vec3 FssEss_L = material.specularColorBlended * dfgL.x + material.specularF90 * dfgL.y;
	float Ess_V = dfgV.x + dfgV.y;
	float Ess_L = dfgL.x + dfgL.y;
	float Ems_V = 1.0 - Ess_V;
	float Ems_L = 1.0 - Ess_L;
	vec3 Favg = material.specularColorBlended + ( 1.0 - material.specularColorBlended ) * 0.047619;
	vec3 Fms = FssEss_V * FssEss_L * Favg / ( 1.0 - Ems_V * Ems_L * Favg + EPSILON );
	float compensationFactor = Ems_V * Ems_L;
	vec3 multiScatter = Fms * compensationFactor;
	return singleScatter + multiScatter;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColorBlended * t2.x + ( material.specularF90 - material.specularColorBlended ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseContribution * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
		#ifdef USE_CLEARCOAT
			vec3 Ncc = geometryClearcoatNormal;
			vec2 uvClearcoat = LTC_Uv( Ncc, viewDir, material.clearcoatRoughness );
			vec4 t1Clearcoat = texture2D( ltc_1, uvClearcoat );
			vec4 t2Clearcoat = texture2D( ltc_2, uvClearcoat );
			mat3 mInvClearcoat = mat3(
				vec3( t1Clearcoat.x, 0, t1Clearcoat.y ),
				vec3(             0, 1,             0 ),
				vec3( t1Clearcoat.z, 0, t1Clearcoat.w )
			);
			vec3 fresnelClearcoat = material.clearcoatF0 * t2Clearcoat.x + ( material.clearcoatF90 - material.clearcoatF0 ) * t2Clearcoat.y;
			clearcoatSpecularDirect += lightColor * fresnelClearcoat * LTC_Evaluate( Ncc, viewDir, position, mInvClearcoat, rectCoords );
		#endif
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
 
 		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
 
 		float sheenAlbedoV = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
 		float sheenAlbedoL = IBLSheenBRDF( geometryNormal, directLight.direction, material.sheenRoughness );
 
 		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * max( sheenAlbedoV, sheenAlbedoL );
 
 		irradiance *= sheenEnergyComp;
 
 	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX_Multiscatter( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseContribution );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 diffuse = irradiance * BRDF_Lambert( material.diffuseContribution );
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		diffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectDiffuse += diffuse;
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness ) * RECIPROCAL_PI;
 	#endif
	vec3 singleScatteringDielectric = vec3( 0.0 );
	vec3 multiScatteringDielectric = vec3( 0.0 );
	vec3 singleScatteringMetallic = vec3( 0.0 );
	vec3 multiScatteringMetallic = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnelDielectric, material.roughness, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.diffuseColor, material.specularF90, material.iridescence, material.iridescenceFresnelMetallic, material.roughness, singleScatteringMetallic, multiScatteringMetallic );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscattering( geometryNormal, geometryViewDir, material.diffuseColor, material.specularF90, material.roughness, singleScatteringMetallic, multiScatteringMetallic );
	#endif
	vec3 singleScattering = mix( singleScatteringDielectric, singleScatteringMetallic, material.metalness );
	vec3 multiScattering = mix( multiScatteringDielectric, multiScatteringMetallic, material.metalness );
	vec3 totalScatteringDielectric = singleScatteringDielectric + multiScatteringDielectric;
	vec3 diffuse = material.diffuseContribution * ( 1.0 - totalScatteringDielectric );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	vec3 indirectSpecular = radiance * singleScattering;
	indirectSpecular += multiScattering * cosineWeightedIrradiance;
	vec3 indirectDiffuse = diffuse * cosineWeightedIrradiance;
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		indirectSpecular *= sheenEnergyComp;
		indirectDiffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectSpecular += indirectSpecular;
	reflectedLight.indirectDiffuse += indirectDiffuse;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,lights_fragment_begin:`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnelDielectric = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceFresnelMetallic = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.diffuseColor );
		material.iridescenceFresnel = mix( material.iridescenceFresnelDielectric, material.iridescenceFresnelMetallic, material.metalness );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS ) && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
	#ifdef USE_LIGHT_PROBES_GRID
		vec3 probeWorldPos = ( ( vec4( geometryPosition, 1.0 ) - viewMatrix[ 3 ] ) * viewMatrix ).xyz;
		vec3 probeWorldNormal = inverseTransformDirection( geometryNormal, viewMatrix );
		irradiance += getLightProbeGridIrradiance( probeWorldPos, probeWorldNormal );
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,lights_fragment_maps:`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( ENVMAP_TYPE_CUBE_UV )
		#if defined( STANDARD ) || defined( LAMBERT ) || defined( PHONG )
			iblIrradiance += getIBLIrradiance( geometryNormal );
		#endif
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,lights_fragment_end:`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,lightprobes_pars_fragment:`#ifdef USE_LIGHT_PROBES_GRID
uniform highp sampler3D probesSH;
uniform vec3 probesMin;
uniform vec3 probesMax;
uniform vec3 probesResolution;
vec3 getLightProbeGridIrradiance( vec3 worldPos, vec3 worldNormal ) {
	vec3 res = probesResolution;
	vec3 gridRange = probesMax - probesMin;
	vec3 resMinusOne = res - 1.0;
	vec3 probeSpacing = gridRange / resMinusOne;
	vec3 samplePos = worldPos + worldNormal * probeSpacing * 0.5;
	vec3 uvw = clamp( ( samplePos - probesMin ) / gridRange, 0.0, 1.0 );
	uvw = uvw * resMinusOne / res + 0.5 / res;
	float nz          = res.z;
	float paddedSlices = nz + 2.0;
	float atlasDepth  = 7.0 * paddedSlices;
	float uvZBase     = uvw.z * nz + 1.0;
	vec4 s0 = texture( probesSH, vec3( uvw.xy, ( uvZBase                       ) / atlasDepth ) );
	vec4 s1 = texture( probesSH, vec3( uvw.xy, ( uvZBase +       paddedSlices   ) / atlasDepth ) );
	vec4 s2 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 2.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s3 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 3.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s4 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 4.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s5 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 5.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s6 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 6.0 * paddedSlices   ) / atlasDepth ) );
	vec3 c0 = s0.xyz;
	vec3 c1 = vec3( s0.w, s1.xy );
	vec3 c2 = vec3( s1.zw, s2.x );
	vec3 c3 = s2.yzw;
	vec3 c4 = s3.xyz;
	vec3 c5 = vec3( s3.w, s4.xy );
	vec3 c6 = vec3( s4.zw, s5.x );
	vec3 c7 = s5.yzw;
	vec3 c8 = s6.xyz;
	float x = worldNormal.x, y = worldNormal.y, z = worldNormal.z;
	vec3 result = c0 * 0.886227;
	result += c1 * 2.0 * 0.511664 * y;
	result += c2 * 2.0 * 0.511664 * z;
	result += c3 * 2.0 * 0.511664 * x;
	result += c4 * 2.0 * 0.429043 * x * y;
	result += c5 * 2.0 * 0.429043 * y * z;
	result += c6 * ( 0.743125 * z * z - 0.247708 );
	result += c7 * 2.0 * 0.429043 * x * z;
	result += c8 * 0.429043 * ( x * x - y * y );
	return max( result, vec3( 0.0 ) );
}
#endif`,logdepthbuf_fragment:`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,logdepthbuf_pars_fragment:`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,logdepthbuf_pars_vertex:`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,logdepthbuf_vertex:`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,map_fragment:`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,map_pars_fragment:`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,map_particle_fragment:`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,map_particle_pars_fragment:`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,metalnessmap_fragment:`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,metalnessmap_pars_fragment:`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,morphinstance_vertex:`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,morphcolor_vertex:`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,morphnormal_vertex:`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,morphtarget_pars_vertex:`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,morphtarget_vertex:`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,normal_fragment_begin:`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,normal_fragment_maps:`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#if defined( USE_PACKED_NORMALMAP )
		mapN = vec3( mapN.xy, sqrt( saturate( 1.0 - dot( mapN.xy, mapN.xy ) ) ) );
	#endif
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,normal_pars_fragment:`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,normal_pars_vertex:`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,normal_vertex:`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,normalmap_pars_fragment:`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,clearcoat_normal_fragment_begin:`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,clearcoat_normal_fragment_maps:`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,clearcoat_pars_fragment:`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,iridescence_pars_fragment:`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,opaque_fragment:`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,packing:`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	#ifdef USE_REVERSED_DEPTH_BUFFER
	
		return depth * ( far - near ) - far;
	#else
		return depth * ( near - far ) - near;
	#endif
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	
	#ifdef USE_REVERSED_DEPTH_BUFFER
		return ( near * far ) / ( ( near - far ) * depth - near );
	#else
		return ( near * far ) / ( ( far - near ) * depth - far );
	#endif
}`,premultiplied_alpha_fragment:`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,project_vertex:`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,dithering_fragment:`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,dithering_pars_fragment:`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,roughnessmap_fragment:`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,roughnessmap_pars_fragment:`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,shadowmap_pars_fragment:`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#else
			uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#endif
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#else
			uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#endif
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform samplerCubeShadow pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#elif defined( SHADOWMAP_TYPE_BASIC )
			uniform samplerCube pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#endif
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float interleavedGradientNoise( vec2 position ) {
			return fract( 52.9829189 * fract( dot( position, vec2( 0.06711056, 0.00583715 ) ) ) );
		}
		vec2 vogelDiskSample( int sampleIndex, int samplesCount, float phi ) {
			const float goldenAngle = 2.399963229728653;
			float r = sqrt( ( float( sampleIndex ) + 0.5 ) / float( samplesCount ) );
			float theta = float( sampleIndex ) * goldenAngle + phi;
			return vec2( cos( theta ), sin( theta ) ) * r;
		}
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float getShadow( sampler2DShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			shadowCoord.z += shadowBias;
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
				float radius = shadowRadius * texelSize.x;
				float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
				shadow = (
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 0, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 1, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 2, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 3, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 4, 5, phi ) * radius, shadowCoord.z ) )
				) * 0.2;
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#elif defined( SHADOWMAP_TYPE_VSM )
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 distribution = texture2D( shadowMap, shadowCoord.xy ).rg;
				float mean = distribution.x;
				float variance = distribution.y * distribution.y;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					float hard_shadow = step( mean, shadowCoord.z );
				#else
					float hard_shadow = step( shadowCoord.z, mean );
				#endif
				
				if ( hard_shadow == 1.0 ) {
					shadow = 1.0;
				} else {
					variance = max( variance, 0.0000001 );
					float d = shadowCoord.z - mean;
					float p_max = variance / ( variance + d * d );
					p_max = clamp( ( p_max - 0.3 ) / 0.65, 0.0, 1.0 );
					shadow = max( hard_shadow, p_max );
				}
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#else
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				float depth = texture2D( shadowMap, shadowCoord.xy ).r;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					shadow = step( depth, shadowCoord.z );
				#else
					shadow = step( shadowCoord.z, depth );
				#endif
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	#if defined( SHADOWMAP_TYPE_PCF )
	float getPointShadow( samplerCubeShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 bd3D = normalize( lightToPosition );
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			#ifdef USE_REVERSED_DEPTH_BUFFER
				float dp = ( shadowCameraNear * ( shadowCameraFar - viewSpaceZ ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
				dp -= shadowBias;
			#else
				float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
				dp += shadowBias;
			#endif
			float texelSize = shadowRadius / shadowMapSize.x;
			vec3 absDir = abs( bd3D );
			vec3 tangent = absDir.x > absDir.z ? vec3( 0.0, 1.0, 0.0 ) : vec3( 1.0, 0.0, 0.0 );
			tangent = normalize( cross( bd3D, tangent ) );
			vec3 bitangent = cross( bd3D, tangent );
			float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
			vec2 sample0 = vogelDiskSample( 0, 5, phi );
			vec2 sample1 = vogelDiskSample( 1, 5, phi );
			vec2 sample2 = vogelDiskSample( 2, 5, phi );
			vec2 sample3 = vogelDiskSample( 3, 5, phi );
			vec2 sample4 = vogelDiskSample( 4, 5, phi );
			shadow = (
				texture( shadowMap, vec4( bd3D + ( tangent * sample0.x + bitangent * sample0.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample1.x + bitangent * sample1.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample2.x + bitangent * sample2.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample3.x + bitangent * sample3.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample4.x + bitangent * sample4.y ) * texelSize, dp ) )
			) * 0.2;
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#elif defined( SHADOWMAP_TYPE_BASIC )
	float getPointShadow( samplerCube shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			float depth = textureCube( shadowMap, bd3D ).r;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				depth = 1.0 - depth;
			#endif
			shadow = step( dp, depth );
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#endif
	#endif
#endif`,shadowmap_pars_vertex:`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,shadowmap_vertex:`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	#ifdef HAS_NORMAL
		vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	#else
		vec3 shadowWorldNormal = vec3( 0.0 );
	#endif
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,shadowmask_pars_fragment:`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0 && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,skinbase_vertex:`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,skinning_pars_vertex:`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,skinning_vertex:`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,skinnormal_vertex:`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,specularmap_fragment:`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,specularmap_pars_fragment:`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,tonemapping_fragment:`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,tonemapping_pars_fragment:`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,transmission_fragment:`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseContribution, material.specularColorBlended, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,transmission_pars_fragment:`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		#else
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,uv_pars_fragment:`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,uv_pars_vertex:`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,uv_vertex:`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,worldpos_vertex:`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,background_vert:`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,background_frag:`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,backgroundCube_vert:`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,backgroundCube_frag:`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vWorldDirection );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,cube_vert:`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,cube_frag:`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,depth_vert:`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,depth_frag:`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	#ifdef USE_REVERSED_DEPTH_BUFFER
		float fragCoordZ = vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ];
	#else
		float fragCoordZ = 0.5 * vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ] + 0.5;
	#endif
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,distance_vert:`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,distance_frag:`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = vec4( dist, 0.0, 0.0, 1.0 );
}`,equirect_vert:`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,equirect_frag:`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,linedashed_vert:`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,linedashed_frag:`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,meshbasic_vert:`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,meshbasic_frag:`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,meshlambert_vert:`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,meshlambert_frag:`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,meshmatcap_vert:`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,meshmatcap_frag:`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,meshnormal_vert:`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,meshnormal_frag:`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( normalize( normal ) * 0.5 + 0.5, diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,meshphong_vert:`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,meshphong_frag:`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,meshphysical_vert:`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,meshphysical_frag:`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
 
		outgoingLight = outgoingLight + sheenSpecularDirect + sheenSpecularIndirect;
 
 	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,meshtoon_vert:`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,meshtoon_frag:`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,points_vert:`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,points_frag:`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,shadow_vert:`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,shadow_frag:`uniform vec3 color;
uniform float opacity;
#include <common>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,sprite_vert:`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,sprite_frag:`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`},Y={common:{diffuse:{value:new V(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new R},alphaMap:{value:null},alphaMapTransform:{value:new R},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new R}},envmap:{envMap:{value:null},envMapRotation:{value:new R},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new R}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new R}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new R},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new R},normalScale:{value:new I(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new R},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new R}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new R}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new R}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new V(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:null},probesMin:{value:new L},probesMax:{value:new L},probesResolution:{value:new L}},points:{diffuse:{value:new V(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new R},alphaTest:{value:0},uvTransform:{value:new R}},sprite:{diffuse:{value:new V(16777215)},opacity:{value:1},center:{value:new I(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new R},alphaMap:{value:null},alphaMapTransform:{value:new R},alphaTest:{value:0}}},el={basic:{uniforms:vs([Y.common,Y.specularmap,Y.envmap,Y.aomap,Y.lightmap,Y.fog]),vertexShader:J.meshbasic_vert,fragmentShader:J.meshbasic_frag},lambert:{uniforms:vs([Y.common,Y.specularmap,Y.envmap,Y.aomap,Y.lightmap,Y.emissivemap,Y.bumpmap,Y.normalmap,Y.displacementmap,Y.fog,Y.lights,{emissive:{value:new V(0)},envMapIntensity:{value:1}}]),vertexShader:J.meshlambert_vert,fragmentShader:J.meshlambert_frag},phong:{uniforms:vs([Y.common,Y.specularmap,Y.envmap,Y.aomap,Y.lightmap,Y.emissivemap,Y.bumpmap,Y.normalmap,Y.displacementmap,Y.fog,Y.lights,{emissive:{value:new V(0)},specular:{value:new V(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:J.meshphong_vert,fragmentShader:J.meshphong_frag},standard:{uniforms:vs([Y.common,Y.envmap,Y.aomap,Y.lightmap,Y.emissivemap,Y.bumpmap,Y.normalmap,Y.displacementmap,Y.roughnessmap,Y.metalnessmap,Y.fog,Y.lights,{emissive:{value:new V(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:J.meshphysical_vert,fragmentShader:J.meshphysical_frag},toon:{uniforms:vs([Y.common,Y.aomap,Y.lightmap,Y.emissivemap,Y.bumpmap,Y.normalmap,Y.displacementmap,Y.gradientmap,Y.fog,Y.lights,{emissive:{value:new V(0)}}]),vertexShader:J.meshtoon_vert,fragmentShader:J.meshtoon_frag},matcap:{uniforms:vs([Y.common,Y.bumpmap,Y.normalmap,Y.displacementmap,Y.fog,{matcap:{value:null}}]),vertexShader:J.meshmatcap_vert,fragmentShader:J.meshmatcap_frag},points:{uniforms:vs([Y.points,Y.fog]),vertexShader:J.points_vert,fragmentShader:J.points_frag},dashed:{uniforms:vs([Y.common,Y.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:J.linedashed_vert,fragmentShader:J.linedashed_frag},depth:{uniforms:vs([Y.common,Y.displacementmap]),vertexShader:J.depth_vert,fragmentShader:J.depth_frag},normal:{uniforms:vs([Y.common,Y.bumpmap,Y.normalmap,Y.displacementmap,{opacity:{value:1}}]),vertexShader:J.meshnormal_vert,fragmentShader:J.meshnormal_frag},sprite:{uniforms:vs([Y.sprite,Y.fog]),vertexShader:J.sprite_vert,fragmentShader:J.sprite_frag},background:{uniforms:{uvTransform:{value:new R},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:J.background_vert,fragmentShader:J.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new R}},vertexShader:J.backgroundCube_vert,fragmentShader:J.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:J.cube_vert,fragmentShader:J.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:J.equirect_vert,fragmentShader:J.equirect_frag},distance:{uniforms:vs([Y.common,Y.displacementmap,{referencePosition:{value:new L},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:J.distance_vert,fragmentShader:J.distance_frag},shadow:{uniforms:vs([Y.lights,Y.fog,{color:{value:new V(0)},opacity:{value:1}}]),vertexShader:J.shadow_vert,fragmentShader:J.shadow_frag}};el.physical={uniforms:vs([el.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new R},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new R},clearcoatNormalScale:{value:new I(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new R},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new R},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new R},sheen:{value:0},sheenColor:{value:new V(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new R},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new R},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new R},transmissionSamplerSize:{value:new I},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new R},attenuationDistance:{value:0},attenuationColor:{value:new V(0)},specularColor:{value:new V(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new R},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new R},anisotropyVector:{value:new I},anisotropyMap:{value:null},anisotropyMapTransform:{value:new R}}]),vertexShader:J.meshphysical_vert,fragmentShader:J.meshphysical_frag};var tl={r:0,b:0,g:0},nl=new z,rl=new R;rl.set(-1,0,0,0,1,0,0,0,1);function il(e,t,n,r,i,a){let o=new V(0),s=i===!0?0:1,c,l,u=null,d=0,f=null;function p(e){let n=e.isScene===!0?e.background:null;if(n&&n.isTexture){let r=e.backgroundBlurriness>0;n=t.get(n,r)}return n}function m(t){let r=!1,i=p(t);i===null?g(o,s):i&&i.isColor&&(g(i,1),r=!0);let c=e.xr.getEnvironmentBlendMode();c===`additive`?n.buffers.color.setClear(0,0,0,1,a):c===`alpha-blend`&&n.buffers.color.setClear(0,0,0,0,a),(e.autoClear||r)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil))}function h(t,n){let i=p(n);i&&(i.isCubeTexture||i.mapping===306)?(l===void 0&&(l=new U(new W(1,1,1),new Ts({name:`BackgroundCubeMaterial`,uniforms:_s(el.backgroundCube.uniforms),vertexShader:el.backgroundCube.vertexShader,fragmentShader:el.backgroundCube.fragmentShader,side:1,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute(`normal`),l.geometry.deleteAttribute(`uv`),l.onBeforeRender=function(e,t,n){this.matrixWorld.copyPosition(n.matrixWorld)},Object.defineProperty(l.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),r.update(l)),l.material.uniforms.envMap.value=i,l.material.uniforms.backgroundBlurriness.value=n.backgroundBlurriness,l.material.uniforms.backgroundIntensity.value=n.backgroundIntensity,l.material.uniforms.backgroundRotation.value.setFromMatrix4(nl.makeRotationFromEuler(n.backgroundRotation)).transpose(),i.isCubeTexture&&i.isRenderTargetTexture===!1&&l.material.uniforms.backgroundRotation.value.premultiply(rl),l.material.toneMapped=Qt.getTransfer(i.colorSpace)!==rt,(u!==i||d!==i.version||f!==e.toneMapping)&&(l.material.needsUpdate=!0,u=i,d=i.version,f=e.toneMapping),l.layers.enableAll(),t.unshift(l,l.geometry,l.material,0,0,null)):i&&i.isTexture&&(c===void 0&&(c=new U(new us(2,2),new Ts({name:`BackgroundMaterial`,uniforms:_s(el.background.uniforms),vertexShader:el.background.vertexShader,fragmentShader:el.background.fragmentShader,side:0,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute(`normal`),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),r.update(c)),c.material.uniforms.t2D.value=i,c.material.uniforms.backgroundIntensity.value=n.backgroundIntensity,c.material.toneMapped=Qt.getTransfer(i.colorSpace)!==rt,i.matrixAutoUpdate===!0&&i.updateMatrix(),c.material.uniforms.uvTransform.value.copy(i.matrix),(u!==i||d!==i.version||f!==e.toneMapping)&&(c.material.needsUpdate=!0,u=i,d=i.version,f=e.toneMapping),c.layers.enableAll(),t.unshift(c,c.geometry,c.material,0,0,null))}function g(t,r){t.getRGB(tl,xs(e)),n.buffers.color.setClear(tl.r,tl.g,tl.b,r,a)}function _(){l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0),c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0)}return{getClearColor:function(){return o},setClearColor:function(e,t=1){o.set(e),s=t,g(o,s)},getClearAlpha:function(){return s},setClearAlpha:function(e){s=e,g(o,s)},render:m,addToRenderList:h,dispose:_}}function al(e,t){let n=e.getParameter(e.MAX_VERTEX_ATTRIBS),r={},i=f(null),a=i,o=!1;function s(n,r,i,s,c){let u=!1,f=d(n,s,i,r);a!==f&&(a=f,l(a.object)),u=p(n,s,i,c),u&&m(n,s,i,c),c!==null&&t.update(c,e.ELEMENT_ARRAY_BUFFER),(u||o)&&(o=!1,b(n,r,i,s),c!==null&&e.bindBuffer(e.ELEMENT_ARRAY_BUFFER,t.get(c).buffer))}function c(){return e.createVertexArray()}function l(t){return e.bindVertexArray(t)}function u(t){return e.deleteVertexArray(t)}function d(e,t,n,i){let a=i.wireframe===!0,o=r[t.id];o===void 0&&(o={},r[t.id]=o);let s=e.isInstancedMesh===!0?e.id:0,l=o[s];l===void 0&&(l={},o[s]=l);let u=l[n.id];u===void 0&&(u={},l[n.id]=u);let d=u[a];return d===void 0&&(d=f(c()),u[a]=d),d}function f(e){let t=[],r=[],i=[];for(let e=0;e<n;e++)t[e]=0,r[e]=0,i[e]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:t,enabledAttributes:r,attributeDivisors:i,object:e,attributes:{},index:null}}function p(e,t,n,r){let i=a.attributes,o=t.attributes,s=0,c=n.getAttributes();for(let t in c)if(c[t].location>=0){let n=i[t],r=o[t];if(r===void 0&&(t===`instanceMatrix`&&e.instanceMatrix&&(r=e.instanceMatrix),t===`instanceColor`&&e.instanceColor&&(r=e.instanceColor)),n===void 0||n.attribute!==r||r&&n.data!==r.data)return!0;s++}return a.attributesNum!==s||a.index!==r}function m(e,t,n,r){let i={},o=t.attributes,s=0,c=n.getAttributes();for(let t in c)if(c[t].location>=0){let n=o[t];n===void 0&&(t===`instanceMatrix`&&e.instanceMatrix&&(n=e.instanceMatrix),t===`instanceColor`&&e.instanceColor&&(n=e.instanceColor));let r={};r.attribute=n,n&&n.data&&(r.data=n.data),i[t]=r,s++}a.attributes=i,a.attributesNum=s,a.index=r}function h(){let e=a.newAttributes;for(let t=0,n=e.length;t<n;t++)e[t]=0}function g(e){_(e,0)}function _(t,n){let r=a.newAttributes,i=a.enabledAttributes,o=a.attributeDivisors;r[t]=1,i[t]===0&&(e.enableVertexAttribArray(t),i[t]=1),o[t]!==n&&(e.vertexAttribDivisor(t,n),o[t]=n)}function v(){let t=a.newAttributes,n=a.enabledAttributes;for(let r=0,i=n.length;r<i;r++)n[r]!==t[r]&&(e.disableVertexAttribArray(r),n[r]=0)}function y(t,n,r,i,a,o,s){s===!0?e.vertexAttribIPointer(t,n,r,a,o):e.vertexAttribPointer(t,n,r,i,a,o)}function b(n,r,i,a){h();let o=a.attributes,s=i.getAttributes(),c=r.defaultAttributeValues;for(let r in s){let i=s[r];if(i.location>=0){let s=o[r];if(s===void 0&&(r===`instanceMatrix`&&n.instanceMatrix&&(s=n.instanceMatrix),r===`instanceColor`&&n.instanceColor&&(s=n.instanceColor)),s!==void 0){let r=s.normalized,o=s.itemSize,c=t.get(s);if(c===void 0)continue;let l=c.buffer,u=c.type,d=c.bytesPerElement,f=u===e.INT||u===e.UNSIGNED_INT||s.gpuType===1013;if(s.isInterleavedBufferAttribute){let t=s.data,c=t.stride,p=s.offset;if(t.isInstancedInterleavedBuffer){for(let e=0;e<i.locationSize;e++)_(i.location+e,t.meshPerAttribute);n.isInstancedMesh!==!0&&a._maxInstanceCount===void 0&&(a._maxInstanceCount=t.meshPerAttribute*t.count)}else for(let e=0;e<i.locationSize;e++)g(i.location+e);e.bindBuffer(e.ARRAY_BUFFER,l);for(let e=0;e<i.locationSize;e++)y(i.location+e,o/i.locationSize,u,r,c*d,(p+o/i.locationSize*e)*d,f)}else{if(s.isInstancedBufferAttribute){for(let e=0;e<i.locationSize;e++)_(i.location+e,s.meshPerAttribute);n.isInstancedMesh!==!0&&a._maxInstanceCount===void 0&&(a._maxInstanceCount=s.meshPerAttribute*s.count)}else for(let e=0;e<i.locationSize;e++)g(i.location+e);e.bindBuffer(e.ARRAY_BUFFER,l);for(let e=0;e<i.locationSize;e++)y(i.location+e,o/i.locationSize,u,r,o*d,o/i.locationSize*e*d,f)}}else if(c!==void 0){let t=c[r];if(t!==void 0)switch(t.length){case 2:e.vertexAttrib2fv(i.location,t);break;case 3:e.vertexAttrib3fv(i.location,t);break;case 4:e.vertexAttrib4fv(i.location,t);break;default:e.vertexAttrib1fv(i.location,t)}}}}v()}function x(){T();for(let e in r){let t=r[e];for(let e in t){let n=t[e];for(let e in n){let t=n[e];for(let e in t)u(t[e].object),delete t[e];delete n[e]}}delete r[e]}}function S(e){if(r[e.id]===void 0)return;let t=r[e.id];for(let e in t){let n=t[e];for(let e in n){let t=n[e];for(let e in t)u(t[e].object),delete t[e];delete n[e]}}delete r[e.id]}function C(e){for(let t in r){let n=r[t];for(let t in n){let r=n[t];if(r[e.id]===void 0)continue;let i=r[e.id];for(let e in i)u(i[e].object),delete i[e];delete r[e.id]}}}function w(e){for(let t in r){let n=r[t],i=e.isInstancedMesh===!0?e.id:0,a=n[i];if(a!==void 0){for(let e in a){let t=a[e];for(let e in t)u(t[e].object),delete t[e];delete a[e]}delete n[i],Object.keys(n).length===0&&delete r[t]}}}function T(){E(),o=!0,a!==i&&(a=i,l(a.object))}function E(){i.geometry=null,i.program=null,i.wireframe=!1}return{setup:s,reset:T,resetDefaultState:E,dispose:x,releaseStatesOfGeometry:S,releaseStatesOfObject:w,releaseStatesOfProgram:C,initAttributes:h,enableAttribute:g,disableUnusedAttributes:v}}function ol(e,t,n){let r;function i(e){r=e}function a(t,i){e.drawArrays(r,t,i),n.update(i,r,1)}function o(t,i,a){a!==0&&(e.drawArraysInstanced(r,t,i,a),n.update(i,r,a))}function s(e,i,a){if(a===0)return;t.get(`WEBGL_multi_draw`).multiDrawArraysWEBGL(r,e,0,i,0,a);let o=0;for(let e=0;e<a;e++)o+=i[e];n.update(o,r,1)}this.setMode=i,this.render=a,this.renderInstances=o,this.renderMultiDraw=s}function sl(e,t,n,r){let i;function a(){if(i!==void 0)return i;if(t.has(`EXT_texture_filter_anisotropic`)===!0){let n=t.get(`EXT_texture_filter_anisotropic`);i=e.getParameter(n.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else i=0;return i}function o(t){return!(t!==1023&&r.convert(t)!==e.getParameter(e.IMPLEMENTATION_COLOR_READ_FORMAT))}function s(n){let i=n===1016&&(t.has(`EXT_color_buffer_half_float`)||t.has(`EXT_color_buffer_float`));return!(n!==1009&&r.convert(n)!==e.getParameter(e.IMPLEMENTATION_COLOR_READ_TYPE)&&n!==1015&&!i)}function c(t){if(t===`highp`){if(e.getShaderPrecisionFormat(e.VERTEX_SHADER,e.HIGH_FLOAT).precision>0&&e.getShaderPrecisionFormat(e.FRAGMENT_SHADER,e.HIGH_FLOAT).precision>0)return`highp`;t=`mediump`}return t===`mediump`&&e.getShaderPrecisionFormat(e.VERTEX_SHADER,e.MEDIUM_FLOAT).precision>0&&e.getShaderPrecisionFormat(e.FRAGMENT_SHADER,e.MEDIUM_FLOAT).precision>0?`mediump`:`lowp`}let l=n.precision===void 0?`highp`:n.precision,u=c(l);u!==l&&(N(`WebGLRenderer:`,l,`not supported, using`,u,`instead.`),l=u);let d=n.logarithmicDepthBuffer===!0,f=n.reversedDepthBuffer===!0&&t.has(`EXT_clip_control`);n.reversedDepthBuffer===!0&&f===!1&&N(`WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer.`);let p=e.getParameter(e.MAX_TEXTURE_IMAGE_UNITS),m=e.getParameter(e.MAX_VERTEX_TEXTURE_IMAGE_UNITS),h=e.getParameter(e.MAX_TEXTURE_SIZE),g=e.getParameter(e.MAX_CUBE_MAP_TEXTURE_SIZE),_=e.getParameter(e.MAX_VERTEX_ATTRIBS),v=e.getParameter(e.MAX_VERTEX_UNIFORM_VECTORS),y=e.getParameter(e.MAX_VARYING_VECTORS),b=e.getParameter(e.MAX_FRAGMENT_UNIFORM_VECTORS),x=e.getParameter(e.MAX_SAMPLES),S=e.getParameter(e.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:a,getMaxPrecision:c,textureFormatReadable:o,textureTypeReadable:s,precision:l,logarithmicDepthBuffer:d,reversedDepthBuffer:f,maxTextures:p,maxVertexTextures:m,maxTextureSize:h,maxCubemapSize:g,maxAttributes:_,maxVertexUniforms:v,maxVaryings:y,maxFragmentUniforms:b,maxSamples:x,samples:S}}function cl(e){let t=this,n=null,r=0,i=!1,a=!1,o=new oa,s=new R,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(e,t){let n=e.length!==0||t||r!==0||i;return i=t,r=e.length,n},this.beginShadows=function(){a=!0,u(null)},this.endShadows=function(){a=!1},this.setGlobalState=function(e,t){n=u(e,t,0)},this.setState=function(t,o,s){let d=t.clippingPlanes,f=t.clipIntersection,p=t.clipShadows,m=e.get(t);if(!i||d===null||d.length===0||a&&!p)a?u(null):l();else{let e=a?0:r,t=e*4,i=m.clippingState||null;c.value=i,i=u(d,o,t,s);for(let e=0;e!==t;++e)i[e]=n[e];m.clippingState=i,this.numIntersection=f?this.numPlanes:0,this.numPlanes+=e}};function l(){c.value!==n&&(c.value=n,c.needsUpdate=r>0),t.numPlanes=r,t.numIntersection=0}function u(e,n,r,i){let a=e===null?0:e.length,l=null;if(a!==0){if(l=c.value,i!==!0||l===null){let t=r+a*4,i=n.matrixWorldInverse;s.getNormalMatrix(i),(l===null||l.length<t)&&(l=new Float32Array(t));for(let t=0,n=r;t!==a;++t,n+=4)o.copy(e[t]).applyMatrix4(i,s),o.normal.toArray(l,n),l[n+3]=o.constant}c.value=l,c.needsUpdate=!0}return t.numPlanes=a,t.numIntersection=0,l}}var ll=4,ul=[.125,.215,.35,.446,.526,.582],dl=20,fl=256,pl=new Tc,ml=new V,hl=null,gl=0,_l=0,vl=!1,yl=new L,bl=class{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._sigmas=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(e,t=0,n=.1,r=100,i={}){let{size:a=256,position:o=yl}=i;hl=this._renderer.getRenderTarget(),gl=this._renderer.getActiveCubeFace(),_l=this._renderer.getActiveMipmapLevel(),vl=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(a);let s=this._allocateTargets();return s.depthBuffer=!0,this._sceneToCubeUV(e,n,r,s,o),t>0&&this._blur(s,0,0,t),this._applyPMREM(s),this._cleanup(s),s}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Dl(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=El(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=2**this._lodMax}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodMeshes.length;e++)this._lodMeshes[e].geometry.dispose()}_cleanup(e){this._renderer.setRenderTarget(hl,gl,_l),this._renderer.xr.enabled=vl,e.scissorTest=!1,Cl(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===301||e.mapping===302?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),hl=this._renderer.getRenderTarget(),gl=this._renderer.getActiveCubeFace(),_l=this._renderer.getActiveMipmapLevel(),vl=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;let n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){let e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:g,minFilter:g,generateMipmaps:!1,type:E,format:ie,colorSpace:tt,depthBuffer:!1},r=Sl(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Sl(e,t,n);let{_lodMax:r}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods,sigmas:this._sigmas}=xl(r)),this._blurMaterial=Tl(r,e,t),this._ggxMaterial=wl(r,e,t)}return r}_compileMaterial(e){let t=new U(new Ur,e);this._renderer.compile(t,pl)}_sceneToCubeUV(e,t,n,r,i){let a=new xc(90,1,t,n),o=[1,-1,1,1,1,1],s=[1,1,1,-1,-1,-1],c=this._renderer,l=c.autoClear,u=c.toneMapping;c.getClearColor(ml),c.toneMapping=0,c.autoClear=!1,c.state.buffers.depth.getReversed()&&(c.setRenderTarget(r),c.clearDepth(),c.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new U(new W,new yi({name:`PMREM.Background`,side:1,depthWrite:!1,depthTest:!1})));let d=this._backgroundBox,f=d.material,p=!1,m=e.background;m?m.isColor&&(f.color.copy(m),e.background=null,p=!0):(f.color.copy(ml),p=!0);for(let t=0;t<6;t++){let n=t%3;n===0?(a.up.set(0,o[t],0),a.position.set(i.x,i.y,i.z),a.lookAt(i.x+s[t],i.y,i.z)):n===1?(a.up.set(0,0,o[t]),a.position.set(i.x,i.y,i.z),a.lookAt(i.x,i.y+s[t],i.z)):(a.up.set(0,o[t],0),a.position.set(i.x,i.y,i.z),a.lookAt(i.x,i.y,i.z+s[t]));let l=this._cubeSize;Cl(r,n*l,t>2?l:0,l,l),c.setRenderTarget(r),p&&c.render(d,a),c.render(e,a)}c.toneMapping=u,c.autoClear=l,e.background=m}_textureToCubeUV(e,t){let n=this._renderer,r=e.mapping===301||e.mapping===302;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=Dl()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=El());let i=r?this._cubemapMaterial:this._equirectMaterial,a=this._lodMeshes[0];a.material=i;let o=i.uniforms;o.envMap.value=e;let s=this._cubeSize;Cl(t,0,0,3*s,2*s),n.setRenderTarget(t),n.render(a,pl)}_applyPMREM(e){let t=this._renderer,n=t.autoClear;t.autoClear=!1;let r=this._lodMeshes.length;for(let t=1;t<r;t++)this._applyGGXFilter(e,t-1,t);t.autoClear=n}_applyGGXFilter(e,t,n){let r=this._renderer,i=this._pingPongRenderTarget,a=this._ggxMaterial,o=this._lodMeshes[n];o.material=a;let s=a.uniforms,c=n/(this._lodMeshes.length-1),l=t/(this._lodMeshes.length-1),u=Math.sqrt(c*c-l*l)*(0+c*1.25),{_lodMax:d}=this,f=this._sizeLods[n],p=3*f*(n>d-ll?n-d+ll:0),m=4*(this._cubeSize-f);s.envMap.value=e.texture,s.roughness.value=u,s.mipInt.value=d-t,Cl(i,p,m,3*f,2*f),r.setRenderTarget(i),r.render(o,pl),s.envMap.value=i.texture,s.roughness.value=0,s.mipInt.value=d-n,Cl(e,p,m,3*f,2*f),r.setRenderTarget(e),r.render(o,pl)}_blur(e,t,n,r,i){let a=this._pingPongRenderTarget;this._halfBlur(e,a,t,n,r,`latitudinal`,i),this._halfBlur(a,e,n,n,r,`longitudinal`,i)}_halfBlur(e,t,n,r,i,a,o){let s=this._renderer,c=this._blurMaterial;a!==`latitudinal`&&a!==`longitudinal`&&P(`blur direction must be either latitudinal or longitudinal!`);let l=this._lodMeshes[r];l.material=c;let u=c.uniforms,d=this._sizeLods[n]-1,f=isFinite(i)?Math.PI/(2*d):2*Math.PI/(2*dl-1),p=i/f,m=isFinite(i)?1+Math.floor(3*p):dl;m>dl&&N(`sigmaRadians, ${i}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${dl}`);let h=[],g=0;for(let e=0;e<dl;++e){let t=e/p,n=Math.exp(-t*t/2);h.push(n),e===0?g+=n:e<m&&(g+=2*n)}for(let e=0;e<h.length;e++)h[e]=h[e]/g;u.envMap.value=e.texture,u.samples.value=m,u.weights.value=h,u.latitudinal.value=a===`latitudinal`,o&&(u.poleAxis.value=o);let{_lodMax:_}=this;u.dTheta.value=f,u.mipInt.value=_-n;let v=this._sizeLods[r];Cl(t,3*v*(r>_-ll?r-_+ll:0),4*(this._cubeSize-v),3*v,2*v),s.setRenderTarget(t),s.render(l,pl)}};function xl(e){let t=[],n=[],r=[],i=e,a=e-ll+1+ul.length;for(let o=0;o<a;o++){let a=2**i;t.push(a);let s=1/a;o>e-ll?s=ul[o-e+ll-1]:o===0&&(s=0),n.push(s);let c=1/(a-2),l=-c,u=1+c,d=[l,l,u,l,u,u,l,l,u,u,l,u],f=new Float32Array(108),p=new Float32Array(72),m=new Float32Array(36);for(let e=0;e<6;e++){let t=e%3*2/3-1,n=e>2?0:-1,r=[t,n,0,t+2/3,n,0,t+2/3,n+1,0,t,n,0,t+2/3,n+1,0,t,n+1,0];f.set(r,18*e),p.set(d,12*e);let i=[e,e,e,e,e,e];m.set(i,6*e)}let h=new Ur;h.setAttribute(`position`,new kr(f,3)),h.setAttribute(`uv`,new kr(p,2)),h.setAttribute(`faceIndex`,new kr(m,1)),r.push(new U(h,null)),i>ll&&i--}return{lodMeshes:r,sizeLods:t,sigmas:n}}function Sl(e,t,n){let r=new fn(e,t,n);return r.texture.mapping=306,r.texture.name=`PMREM.cubeUv`,r.scissorTest=!0,r}function Cl(e,t,n,r,i){e.viewport.set(t,n,r,i),e.scissor.set(t,n,r,i)}function wl(e,t,n){return new Ts({name:`PMREMGGXConvolution`,defines:{GGX_SAMPLES:fl,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/n,CUBEUV_MAX_MIP:`${e}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:Ol(),fragmentShader:`

			precision highp float;
			precision highp int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform float roughness;
			uniform float mipInt;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			#define PI 3.14159265359

			// Van der Corput radical inverse
			float radicalInverse_VdC(uint bits) {
				bits = (bits << 16u) | (bits >> 16u);
				bits = ((bits & 0x55555555u) << 1u) | ((bits & 0xAAAAAAAAu) >> 1u);
				bits = ((bits & 0x33333333u) << 2u) | ((bits & 0xCCCCCCCCu) >> 2u);
				bits = ((bits & 0x0F0F0F0Fu) << 4u) | ((bits & 0xF0F0F0F0u) >> 4u);
				bits = ((bits & 0x00FF00FFu) << 8u) | ((bits & 0xFF00FF00u) >> 8u);
				return float(bits) * 2.3283064365386963e-10; // / 0x100000000
			}

			// Hammersley sequence
			vec2 hammersley(uint i, uint N) {
				return vec2(float(i) / float(N), radicalInverse_VdC(i));
			}

			// GGX VNDF importance sampling (Eric Heitz 2018)
			// "Sampling the GGX Distribution of Visible Normals"
			// https://jcgt.org/published/0007/04/01/
			vec3 importanceSampleGGX_VNDF(vec2 Xi, vec3 V, float roughness) {
				float alpha = roughness * roughness;

				// Section 4.1: Orthonormal basis
				vec3 T1 = vec3(1.0, 0.0, 0.0);
				vec3 T2 = cross(V, T1);

				// Section 4.2: Parameterization of projected area
				float r = sqrt(Xi.x);
				float phi = 2.0 * PI * Xi.y;
				float t1 = r * cos(phi);
				float t2 = r * sin(phi);
				float s = 0.5 * (1.0 + V.z);
				t2 = (1.0 - s) * sqrt(1.0 - t1 * t1) + s * t2;

				// Section 4.3: Reprojection onto hemisphere
				vec3 Nh = t1 * T1 + t2 * T2 + sqrt(max(0.0, 1.0 - t1 * t1 - t2 * t2)) * V;

				// Section 3.4: Transform back to ellipsoid configuration
				return normalize(vec3(alpha * Nh.x, alpha * Nh.y, max(0.0, Nh.z)));
			}

			void main() {
				vec3 N = normalize(vOutputDirection);
				vec3 V = N; // Assume view direction equals normal for pre-filtering

				vec3 prefilteredColor = vec3(0.0);
				float totalWeight = 0.0;

				// For very low roughness, just sample the environment directly
				if (roughness < 0.001) {
					gl_FragColor = vec4(bilinearCubeUV(envMap, N, mipInt), 1.0);
					return;
				}

				// Tangent space basis for VNDF sampling
				vec3 up = abs(N.z) < 0.999 ? vec3(0.0, 0.0, 1.0) : vec3(1.0, 0.0, 0.0);
				vec3 tangent = normalize(cross(up, N));
				vec3 bitangent = cross(N, tangent);

				for(uint i = 0u; i < uint(GGX_SAMPLES); i++) {
					vec2 Xi = hammersley(i, uint(GGX_SAMPLES));

					// For PMREM, V = N, so in tangent space V is always (0, 0, 1)
					vec3 H_tangent = importanceSampleGGX_VNDF(Xi, vec3(0.0, 0.0, 1.0), roughness);

					// Transform H back to world space
					vec3 H = normalize(tangent * H_tangent.x + bitangent * H_tangent.y + N * H_tangent.z);
					vec3 L = normalize(2.0 * dot(V, H) * H - V);

					float NdotL = max(dot(N, L), 0.0);

					if(NdotL > 0.0) {
						// Sample environment at fixed mip level
						// VNDF importance sampling handles the distribution filtering
						vec3 sampleColor = bilinearCubeUV(envMap, L, mipInt);

						// Weight by NdotL for the split-sum approximation
						// VNDF PDF naturally accounts for the visible microfacet distribution
						prefilteredColor += sampleColor * NdotL;
						totalWeight += NdotL;
					}
				}

				if (totalWeight > 0.0) {
					prefilteredColor = prefilteredColor / totalWeight;
				}

				gl_FragColor = vec4(prefilteredColor, 1.0);
			}
		`,blending:0,depthTest:!1,depthWrite:!1})}function Tl(e,t,n){let r=new Float32Array(dl),i=new L(0,1,0);return new Ts({name:`SphericalGaussianBlur`,defines:{n:dl,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/n,CUBEUV_MAX_MIP:`${e}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:r},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:i}},vertexShader:Ol(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:0,depthTest:!1,depthWrite:!1})}function El(){return new Ts({name:`EquirectangularToCubeUV`,uniforms:{envMap:{value:null}},vertexShader:Ol(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:0,depthTest:!1,depthWrite:!1})}function Dl(){return new Ts({name:`CubemapToCubeUV`,uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Ol(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:0,depthTest:!1,depthWrite:!1})}function Ol(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}var kl=class extends fn{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;let n={width:e,height:e,depth:1},r=[n,n,n,n,n,n];this.texture=new Ma(r),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;let n={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},r=new W(5,5,5),i=new Ts({name:`CubemapFromEquirect`,uniforms:_s(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:1,blending:0});i.uniforms.tEquirect.value=t;let a=new U(r,i),o=t.minFilter;return t.minFilter===1008&&(t.minFilter=g),new Pc(1,10,this).update(e,a),t.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(e,t=!0,n=!0,r=!0){let i=e.getRenderTarget();for(let i=0;i<6;i++)e.setRenderTarget(this,i),e.clear(t,n,r);e.setRenderTarget(i)}};function Al(e){let t=new WeakMap,n=new WeakMap,r=null;function i(e,t=!1){return e==null?null:t?o(e):a(e)}function a(n){if(n&&n.isTexture){let r=n.mapping;if(r===303||r===304)if(t.has(n)){let e=t.get(n).texture;return s(e,n.mapping)}else{let r=n.image;if(r&&r.height>0){let i=new kl(r.height);return i.fromEquirectangularTexture(e,n),t.set(n,i),n.addEventListener(`dispose`,l),s(i.texture,n.mapping)}else return null}}return n}function o(t){if(t&&t.isTexture){let i=t.mapping,a=i===303||i===304,o=i===301||i===302;if(a||o){let i=n.get(t),s=i===void 0?0:i.texture.pmremVersion;if(t.isRenderTargetTexture&&t.pmremVersion!==s)return r===null&&(r=new bl(e)),i=a?r.fromEquirectangular(t,i):r.fromCubemap(t,i),i.texture.pmremVersion=t.pmremVersion,n.set(t,i),i.texture;if(i!==void 0)return i.texture;{let s=t.image;return a&&s&&s.height>0||o&&s&&c(s)?(r===null&&(r=new bl(e)),i=a?r.fromEquirectangular(t):r.fromCubemap(t),i.texture.pmremVersion=t.pmremVersion,n.set(t,i),t.addEventListener(`dispose`,u),i.texture):null}}}return t}function s(e,t){return t===303?e.mapping=301:t===304&&(e.mapping=302),e}function c(e){let t=0;for(let n=0;n<6;n++)e[n]!==void 0&&t++;return t===6}function l(e){let n=e.target;n.removeEventListener(`dispose`,l);let r=t.get(n);r!==void 0&&(t.delete(n),r.dispose())}function u(e){let t=e.target;t.removeEventListener(`dispose`,u);let r=n.get(t);r!==void 0&&(n.delete(t),r.dispose())}function d(){t=new WeakMap,n=new WeakMap,r!==null&&(r.dispose(),r=null)}return{get:i,dispose:d}}function jl(e){let t={};function n(n){if(t[n]!==void 0)return t[n];let r=e.getExtension(n);return t[n]=r,r}return{has:function(e){return n(e)!==null},init:function(){n(`EXT_color_buffer_float`),n(`WEBGL_clip_cull_distance`),n(`OES_texture_float_linear`),n(`EXT_color_buffer_half_float`),n(`WEBGL_multisampled_render_to_texture`),n(`WEBGL_render_shared_exponent`)},get:function(e){let t=n(e);return t===null&&ht(`WebGLRenderer: `+e+` extension not supported.`),t}}}function Ml(e,t,n,r){let i={},a=new WeakMap;function o(e){let s=e.target;s.index!==null&&t.remove(s.index);for(let e in s.attributes)t.remove(s.attributes[e]);s.removeEventListener(`dispose`,o),delete i[s.id];let c=a.get(s);c&&(t.remove(c),a.delete(s)),r.releaseStatesOfGeometry(s),s.isInstancedBufferGeometry===!0&&delete s._maxInstanceCount,n.memory.geometries--}function s(e,t){return i[t.id]===!0?t:(t.addEventListener(`dispose`,o),i[t.id]=!0,n.memory.geometries++,t)}function c(n){let r=n.attributes;for(let n in r)t.update(r[n],e.ARRAY_BUFFER)}function l(e){let n=[],r=e.index,i=e.attributes.position,o=0;if(i===void 0)return;if(r!==null){let e=r.array;o=r.version;for(let t=0,r=e.length;t<r;t+=3){let r=e[t+0],i=e[t+1],a=e[t+2];n.push(r,i,i,a,a,r)}}else{let e=i.array;o=i.version;for(let t=0,r=e.length/3-1;t<r;t+=3){let e=t+0,r=t+1,i=t+2;n.push(e,r,r,i,i,e)}}let s=new(i.count>=65535?jr:Ar)(n,1);s.version=o;let c=a.get(e);c&&t.remove(c),a.set(e,s)}function u(e){let t=a.get(e);if(t){let n=e.index;n!==null&&t.version<n.version&&l(e)}else l(e);return a.get(e)}return{get:s,update:c,getWireframeAttribute:u}}function Nl(e,t,n){let r;function i(e){r=e}let a,o;function s(e){a=e.type,o=e.bytesPerElement}function c(t,i){e.drawElements(r,i,a,t*o),n.update(i,r,1)}function l(t,i,s){s!==0&&(e.drawElementsInstanced(r,i,a,t*o,s),n.update(i,r,s))}function u(e,i,o){if(o===0)return;t.get(`WEBGL_multi_draw`).multiDrawElementsWEBGL(r,i,0,a,e,0,o);let s=0;for(let e=0;e<o;e++)s+=i[e];n.update(s,r,1)}this.setMode=i,this.setIndex=s,this.render=c,this.renderInstances=l,this.renderMultiDraw=u}function Pl(e){let t={geometries:0,textures:0},n={frame:0,calls:0,triangles:0,points:0,lines:0};function r(t,r,i){switch(n.calls++,r){case e.TRIANGLES:n.triangles+=t/3*i;break;case e.LINES:n.lines+=t/2*i;break;case e.LINE_STRIP:n.lines+=i*(t-1);break;case e.LINE_LOOP:n.lines+=i*t;break;case e.POINTS:n.points+=i*t;break;default:P(`WebGLInfo: Unknown draw mode:`,r);break}}function i(){n.calls=0,n.triangles=0,n.points=0,n.lines=0}return{memory:t,render:n,programs:null,autoReset:!0,reset:i,update:r}}function Fl(e,t,n){let r=new WeakMap,i=new un;function a(a,o,s){let c=a.morphTargetInfluences,l=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,u=l===void 0?0:l.length,d=r.get(o);if(d===void 0||d.count!==u){d!==void 0&&d.texture.dispose();let e=o.morphAttributes.position!==void 0,n=o.morphAttributes.normal!==void 0,a=o.morphAttributes.color!==void 0,s=o.morphAttributes.position||[],c=o.morphAttributes.normal||[],l=o.morphAttributes.color||[],f=0;e===!0&&(f=1),n===!0&&(f=2),a===!0&&(f=3);let p=o.attributes.position.count*f,m=1;p>t.maxTextureSize&&(m=Math.ceil(p/t.maxTextureSize),p=t.maxTextureSize);let h=new Float32Array(p*m*4*u),g=new pn(h,p,m,u);g.type=T,g.needsUpdate=!0;let _=f*4;for(let t=0;t<u;t++){let r=s[t],o=c[t],u=l[t],d=p*m*4*t;for(let t=0;t<r.count;t++){let s=t*_;e===!0&&(i.fromBufferAttribute(r,t),h[d+s+0]=i.x,h[d+s+1]=i.y,h[d+s+2]=i.z,h[d+s+3]=0),n===!0&&(i.fromBufferAttribute(o,t),h[d+s+4]=i.x,h[d+s+5]=i.y,h[d+s+6]=i.z,h[d+s+7]=0),a===!0&&(i.fromBufferAttribute(u,t),h[d+s+8]=i.x,h[d+s+9]=i.y,h[d+s+10]=i.z,h[d+s+11]=u.itemSize===4?i.w:1)}}d={count:u,texture:g,size:new I(p,m)},r.set(o,d);function v(){g.dispose(),r.delete(o),o.removeEventListener(`dispose`,v)}o.addEventListener(`dispose`,v)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)s.getUniforms().setValue(e,`morphTexture`,a.morphTexture,n);else{let t=0;for(let e=0;e<c.length;e++)t+=c[e];let n=o.morphTargetsRelative?1:1-t;s.getUniforms().setValue(e,`morphTargetBaseInfluence`,n),s.getUniforms().setValue(e,`morphTargetInfluences`,c)}s.getUniforms().setValue(e,`morphTargetsTexture`,d.texture,n),s.getUniforms().setValue(e,`morphTargetsTextureSize`,d.size)}return{update:a}}function Il(e,t,n,r,i){let a=new WeakMap;function o(r){let o=i.render.frame,s=r.geometry,l=t.get(r,s);if(a.get(l)!==o&&(t.update(l),a.set(l,o)),r.isInstancedMesh&&(r.hasEventListener(`dispose`,c)===!1&&r.addEventListener(`dispose`,c),a.get(r)!==o&&(n.update(r.instanceMatrix,e.ARRAY_BUFFER),r.instanceColor!==null&&n.update(r.instanceColor,e.ARRAY_BUFFER),a.set(r,o))),r.isSkinnedMesh){let e=r.skeleton;a.get(e)!==o&&(e.update(),a.set(e,o))}return l}function s(){a=new WeakMap}function c(e){let t=e.target;t.removeEventListener(`dispose`,c),r.releaseStatesOfObject(t),n.remove(t.instanceMatrix),t.instanceColor!==null&&n.remove(t.instanceColor)}return{update:o,dispose:s}}var Ll={1:`LINEAR_TONE_MAPPING`,2:`REINHARD_TONE_MAPPING`,3:`CINEON_TONE_MAPPING`,4:`ACES_FILMIC_TONE_MAPPING`,6:`AGX_TONE_MAPPING`,7:`NEUTRAL_TONE_MAPPING`,5:`CUSTOM_TONE_MAPPING`};function Rl(e,t,n,r,i){let a=new fn(t,n,{type:e,depthBuffer:r,stencilBuffer:i,depthTexture:r?new Pa(t,n):void 0}),o=new fn(t,n,{type:E,depthBuffer:!1,stencilBuffer:!1}),s=new Ur;s.setAttribute(`position`,new H([-1,3,0,-1,-1,0,3,-1,0],3)),s.setAttribute(`uv`,new H([0,2,0,0,2,0],2));let c=new Es({uniforms:{tDiffuse:{value:null}},vertexShader:`
			precision highp float;

			uniform mat4 modelViewMatrix;
			uniform mat4 projectionMatrix;

			attribute vec3 position;
			attribute vec2 uv;

			varying vec2 vUv;

			void main() {
				vUv = uv;
				gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
			}`,fragmentShader:`
			precision highp float;

			uniform sampler2D tDiffuse;

			varying vec2 vUv;

			#include <tonemapping_pars_fragment>
			#include <colorspace_pars_fragment>

			void main() {
				gl_FragColor = texture2D( tDiffuse, vUv );

				#ifdef LINEAR_TONE_MAPPING
					gl_FragColor.rgb = LinearToneMapping( gl_FragColor.rgb );
				#elif defined( REINHARD_TONE_MAPPING )
					gl_FragColor.rgb = ReinhardToneMapping( gl_FragColor.rgb );
				#elif defined( CINEON_TONE_MAPPING )
					gl_FragColor.rgb = CineonToneMapping( gl_FragColor.rgb );
				#elif defined( ACES_FILMIC_TONE_MAPPING )
					gl_FragColor.rgb = ACESFilmicToneMapping( gl_FragColor.rgb );
				#elif defined( AGX_TONE_MAPPING )
					gl_FragColor.rgb = AgXToneMapping( gl_FragColor.rgb );
				#elif defined( NEUTRAL_TONE_MAPPING )
					gl_FragColor.rgb = NeutralToneMapping( gl_FragColor.rgb );
				#elif defined( CUSTOM_TONE_MAPPING )
					gl_FragColor.rgb = CustomToneMapping( gl_FragColor.rgb );
				#endif

				#ifdef SRGB_TRANSFER
					gl_FragColor = sRGBTransferOETF( gl_FragColor );
				#endif
			}`,depthTest:!1,depthWrite:!1}),l=new U(s,c),u=new Tc(-1,1,1,-1,0,1),d=null,f=null,p=!1,m,h=null,g=[],_=!1;this.setSize=function(e,t){a.setSize(e,t),o.setSize(e,t);for(let n=0;n<g.length;n++){let r=g[n];r.setSize&&r.setSize(e,t)}},this.setEffects=function(e){g=e,_=g.length>0&&g[0].isRenderPass===!0;let t=a.width,n=a.height;for(let e=0;e<g.length;e++){let r=g[e];r.setSize&&r.setSize(t,n)}},this.begin=function(e,t){if(p||e.toneMapping===0&&g.length===0)return!1;if(h=t,t!==null){let e=t.width,n=t.height;(a.width!==e||a.height!==n)&&this.setSize(e,n)}return _===!1&&e.setRenderTarget(a),m=e.toneMapping,e.toneMapping=0,!0},this.hasRenderPass=function(){return _},this.end=function(e,t){e.toneMapping=m,p=!0;let n=a,r=o;for(let i=0;i<g.length;i++){let a=g[i];if(a.enabled!==!1&&(a.render(e,r,n,t),a.needsSwap!==!1)){let e=n;n=r,r=e}}if(d!==e.outputColorSpace||f!==e.toneMapping){d=e.outputColorSpace,f=e.toneMapping,c.defines={},Qt.getTransfer(d)===`srgb`&&(c.defines.SRGB_TRANSFER=``);let t=Ll[f];t&&(c.defines[t]=``),c.needsUpdate=!0}c.uniforms.tDiffuse.value=n.texture,e.setRenderTarget(h),e.render(l,u),h=null,p=!1},this.isCompositing=function(){return p},this.dispose=function(){a.depthTexture&&a.depthTexture.dispose(),a.dispose(),o.dispose(),s.dispose(),c.dispose()}}var zl=new ln,Bl=new Pa(1,1),Vl=new pn,Hl=new mn,Ul=new Ma,Wl=[],Gl=[],Kl=new Float32Array(16),ql=new Float32Array(9),Jl=new Float32Array(4);function Yl(e,t,n){let r=e[0];if(r<=0||r>0)return e;let i=t*n,a=Wl[i];if(a===void 0&&(a=new Float32Array(i),Wl[i]=a),t!==0){r.toArray(a,0);for(let r=1,i=0;r!==t;++r)i+=n,e[r].toArray(a,i)}return a}function Xl(e,t){if(e.length!==t.length)return!1;for(let n=0,r=e.length;n<r;n++)if(e[n]!==t[n])return!1;return!0}function Zl(e,t){for(let n=0,r=t.length;n<r;n++)e[n]=t[n]}function Ql(e,t){let n=Gl[t];n===void 0&&(n=new Int32Array(t),Gl[t]=n);for(let r=0;r!==t;++r)n[r]=e.allocateTextureUnit();return n}function $l(e,t){let n=this.cache;n[0]!==t&&(e.uniform1f(this.addr,t),n[0]=t)}function eu(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y)&&(e.uniform2f(this.addr,t.x,t.y),n[0]=t.x,n[1]=t.y);else{if(Xl(n,t))return;e.uniform2fv(this.addr,t),Zl(n,t)}}function tu(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z)&&(e.uniform3f(this.addr,t.x,t.y,t.z),n[0]=t.x,n[1]=t.y,n[2]=t.z);else if(t.r!==void 0)(n[0]!==t.r||n[1]!==t.g||n[2]!==t.b)&&(e.uniform3f(this.addr,t.r,t.g,t.b),n[0]=t.r,n[1]=t.g,n[2]=t.b);else{if(Xl(n,t))return;e.uniform3fv(this.addr,t),Zl(n,t)}}function nu(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z||n[3]!==t.w)&&(e.uniform4f(this.addr,t.x,t.y,t.z,t.w),n[0]=t.x,n[1]=t.y,n[2]=t.z,n[3]=t.w);else{if(Xl(n,t))return;e.uniform4fv(this.addr,t),Zl(n,t)}}function ru(e,t){let n=this.cache,r=t.elements;if(r===void 0){if(Xl(n,t))return;e.uniformMatrix2fv(this.addr,!1,t),Zl(n,t)}else{if(Xl(n,r))return;Jl.set(r),e.uniformMatrix2fv(this.addr,!1,Jl),Zl(n,r)}}function iu(e,t){let n=this.cache,r=t.elements;if(r===void 0){if(Xl(n,t))return;e.uniformMatrix3fv(this.addr,!1,t),Zl(n,t)}else{if(Xl(n,r))return;ql.set(r),e.uniformMatrix3fv(this.addr,!1,ql),Zl(n,r)}}function au(e,t){let n=this.cache,r=t.elements;if(r===void 0){if(Xl(n,t))return;e.uniformMatrix4fv(this.addr,!1,t),Zl(n,t)}else{if(Xl(n,r))return;Kl.set(r),e.uniformMatrix4fv(this.addr,!1,Kl),Zl(n,r)}}function ou(e,t){let n=this.cache;n[0]!==t&&(e.uniform1i(this.addr,t),n[0]=t)}function su(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y)&&(e.uniform2i(this.addr,t.x,t.y),n[0]=t.x,n[1]=t.y);else{if(Xl(n,t))return;e.uniform2iv(this.addr,t),Zl(n,t)}}function cu(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z)&&(e.uniform3i(this.addr,t.x,t.y,t.z),n[0]=t.x,n[1]=t.y,n[2]=t.z);else{if(Xl(n,t))return;e.uniform3iv(this.addr,t),Zl(n,t)}}function lu(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z||n[3]!==t.w)&&(e.uniform4i(this.addr,t.x,t.y,t.z,t.w),n[0]=t.x,n[1]=t.y,n[2]=t.z,n[3]=t.w);else{if(Xl(n,t))return;e.uniform4iv(this.addr,t),Zl(n,t)}}function uu(e,t){let n=this.cache;n[0]!==t&&(e.uniform1ui(this.addr,t),n[0]=t)}function du(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y)&&(e.uniform2ui(this.addr,t.x,t.y),n[0]=t.x,n[1]=t.y);else{if(Xl(n,t))return;e.uniform2uiv(this.addr,t),Zl(n,t)}}function fu(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z)&&(e.uniform3ui(this.addr,t.x,t.y,t.z),n[0]=t.x,n[1]=t.y,n[2]=t.z);else{if(Xl(n,t))return;e.uniform3uiv(this.addr,t),Zl(n,t)}}function pu(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z||n[3]!==t.w)&&(e.uniform4ui(this.addr,t.x,t.y,t.z,t.w),n[0]=t.x,n[1]=t.y,n[2]=t.z,n[3]=t.w);else{if(Xl(n,t))return;e.uniform4uiv(this.addr,t),Zl(n,t)}}function mu(e,t,n){let r=this.cache,i=n.allocateTextureUnit();r[0]!==i&&(e.uniform1i(this.addr,i),r[0]=i);let a;this.type===e.SAMPLER_2D_SHADOW?(Bl.compareFunction=n.isReversedDepthBuffer()?518:515,a=Bl):a=zl,n.setTexture2D(t||a,i)}function hu(e,t,n){let r=this.cache,i=n.allocateTextureUnit();r[0]!==i&&(e.uniform1i(this.addr,i),r[0]=i),n.setTexture3D(t||Hl,i)}function gu(e,t,n){let r=this.cache,i=n.allocateTextureUnit();r[0]!==i&&(e.uniform1i(this.addr,i),r[0]=i),n.setTextureCube(t||Ul,i)}function _u(e,t,n){let r=this.cache,i=n.allocateTextureUnit();r[0]!==i&&(e.uniform1i(this.addr,i),r[0]=i),n.setTexture2DArray(t||Vl,i)}function vu(e){switch(e){case 5126:return $l;case 35664:return eu;case 35665:return tu;case 35666:return nu;case 35674:return ru;case 35675:return iu;case 35676:return au;case 5124:case 35670:return ou;case 35667:case 35671:return su;case 35668:case 35672:return cu;case 35669:case 35673:return lu;case 5125:return uu;case 36294:return du;case 36295:return fu;case 36296:return pu;case 35678:case 36198:case 36298:case 36306:case 35682:return mu;case 35679:case 36299:case 36307:return hu;case 35680:case 36300:case 36308:case 36293:return gu;case 36289:case 36303:case 36311:case 36292:return _u}}function yu(e,t){e.uniform1fv(this.addr,t)}function bu(e,t){let n=Yl(t,this.size,2);e.uniform2fv(this.addr,n)}function xu(e,t){let n=Yl(t,this.size,3);e.uniform3fv(this.addr,n)}function Su(e,t){let n=Yl(t,this.size,4);e.uniform4fv(this.addr,n)}function Cu(e,t){let n=Yl(t,this.size,4);e.uniformMatrix2fv(this.addr,!1,n)}function wu(e,t){let n=Yl(t,this.size,9);e.uniformMatrix3fv(this.addr,!1,n)}function Tu(e,t){let n=Yl(t,this.size,16);e.uniformMatrix4fv(this.addr,!1,n)}function Eu(e,t){e.uniform1iv(this.addr,t)}function Du(e,t){e.uniform2iv(this.addr,t)}function Ou(e,t){e.uniform3iv(this.addr,t)}function ku(e,t){e.uniform4iv(this.addr,t)}function Au(e,t){e.uniform1uiv(this.addr,t)}function ju(e,t){e.uniform2uiv(this.addr,t)}function Mu(e,t){e.uniform3uiv(this.addr,t)}function Nu(e,t){e.uniform4uiv(this.addr,t)}function Pu(e,t,n){let r=this.cache,i=t.length,a=Ql(n,i);Xl(r,a)||(e.uniform1iv(this.addr,a),Zl(r,a));let o;o=this.type===e.SAMPLER_2D_SHADOW?Bl:zl;for(let e=0;e!==i;++e)n.setTexture2D(t[e]||o,a[e])}function Fu(e,t,n){let r=this.cache,i=t.length,a=Ql(n,i);Xl(r,a)||(e.uniform1iv(this.addr,a),Zl(r,a));for(let e=0;e!==i;++e)n.setTexture3D(t[e]||Hl,a[e])}function Iu(e,t,n){let r=this.cache,i=t.length,a=Ql(n,i);Xl(r,a)||(e.uniform1iv(this.addr,a),Zl(r,a));for(let e=0;e!==i;++e)n.setTextureCube(t[e]||Ul,a[e])}function Lu(e,t,n){let r=this.cache,i=t.length,a=Ql(n,i);Xl(r,a)||(e.uniform1iv(this.addr,a),Zl(r,a));for(let e=0;e!==i;++e)n.setTexture2DArray(t[e]||Vl,a[e])}function Ru(e){switch(e){case 5126:return yu;case 35664:return bu;case 35665:return xu;case 35666:return Su;case 35674:return Cu;case 35675:return wu;case 35676:return Tu;case 5124:case 35670:return Eu;case 35667:case 35671:return Du;case 35668:case 35672:return Ou;case 35669:case 35673:return ku;case 5125:return Au;case 36294:return ju;case 36295:return Mu;case 36296:return Nu;case 35678:case 36198:case 36298:case 36306:case 35682:return Pu;case 35679:case 36299:case 36307:return Fu;case 35680:case 36300:case 36308:case 36293:return Iu;case 36289:case 36303:case 36311:case 36292:return Lu}}var zu=class{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=vu(t.type)}},Bu=class{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=Ru(t.type)}},Vu=class{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){let r=this.seq;for(let i=0,a=r.length;i!==a;++i){let a=r[i];a.setValue(e,t[a.id],n)}}},Hu=/(\w+)(\])?(\[|\.)?/g;function Uu(e,t){e.seq.push(t),e.map[t.id]=t}function Wu(e,t,n){let r=e.name,i=r.length;for(Hu.lastIndex=0;;){let a=Hu.exec(r),o=Hu.lastIndex,s=a[1],c=a[2]===`]`,l=a[3];if(c&&(s|=0),l===void 0||l===`[`&&o+2===i){Uu(n,l===void 0?new zu(s,e,t):new Bu(s,e,t));break}else{let e=n.map[s];e===void 0&&(e=new Vu(s),Uu(n,e)),n=e}}}var Gu=class{constructor(e,t){this.seq=[],this.map={};let n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let r=0;r<n;++r){let n=e.getActiveUniform(t,r);Wu(n,e.getUniformLocation(t,n.name),this)}let r=[],i=[];for(let t of this.seq)t.type===e.SAMPLER_2D_SHADOW||t.type===e.SAMPLER_CUBE_SHADOW||t.type===e.SAMPLER_2D_ARRAY_SHADOW?r.push(t):i.push(t);r.length>0&&(this.seq=r.concat(i))}setValue(e,t,n,r){let i=this.map[t];i!==void 0&&i.setValue(e,n,r)}setOptional(e,t,n){let r=t[n];r!==void 0&&this.setValue(e,n,r)}static upload(e,t,n,r){for(let i=0,a=t.length;i!==a;++i){let a=t[i],o=n[a.id];o.needsUpdate!==!1&&a.setValue(e,o.value,r)}}static seqWithValue(e,t){let n=[];for(let r=0,i=e.length;r!==i;++r){let i=e[r];i.id in t&&n.push(i)}return n}};function Ku(e,t,n){let r=e.createShader(t);return e.shaderSource(r,n),e.compileShader(r),r}var qu=37297,Ju=0;function Yu(e,t){let n=e.split(`
`),r=[],i=Math.max(t-6,0),a=Math.min(t+6,n.length);for(let e=i;e<a;e++){let i=e+1;r.push(`${i===t?`>`:` `} ${i}: ${n[e]}`)}return r.join(`
`)}var Xu=new R;function Zu(e){Qt._getMatrix(Xu,Qt.workingColorSpace,e);let t=`mat3( ${Xu.elements.map(e=>e.toFixed(4))} )`;switch(Qt.getTransfer(e)){case nt:return[t,`LinearTransferOETF`];case rt:return[t,`sRGBTransferOETF`];default:return N(`WebGLProgram: Unsupported color space: `,e),[t,`LinearTransferOETF`]}}function Qu(e,t,n){let r=e.getShaderParameter(t,e.COMPILE_STATUS),i=(e.getShaderInfoLog(t)||``).trim();if(r&&i===``)return``;let a=/ERROR: 0:(\d+)/.exec(i);if(a){let r=parseInt(a[1]);return n.toUpperCase()+`

`+i+`

`+Yu(e.getShaderSource(t),r)}else return i}function $u(e,t){let n=Zu(t);return[`vec4 ${e}( vec4 value ) {`,`	return ${n[1]}( vec4( value.rgb * ${n[0]}, value.a ) );`,`}`].join(`
`)}var ed={1:`Linear`,2:`Reinhard`,3:`Cineon`,4:`ACESFilmic`,6:`AgX`,7:`Neutral`,5:`Custom`};function td(e,t){let n=ed[t];return n===void 0?(N(`WebGLProgram: Unsupported toneMapping:`,t),`vec3 `+e+`( vec3 color ) { return LinearToneMapping( color ); }`):`vec3 `+e+`( vec3 color ) { return `+n+`ToneMapping( color ); }`}var nd=new L;function rd(){return Qt.getLuminanceCoefficients(nd),[`float luminance( const in vec3 rgb ) {`,`	const vec3 weights = vec3( ${nd.x.toFixed(4)}, ${nd.y.toFixed(4)}, ${nd.z.toFixed(4)} );`,`	return dot( weights, rgb );`,`}`].join(`
`)}function id(e){return[e.extensionClipCullDistance?`#extension GL_ANGLE_clip_cull_distance : require`:``,e.extensionMultiDraw?`#extension GL_ANGLE_multi_draw : require`:``].filter(sd).join(`
`)}function ad(e){let t=[];for(let n in e){let r=e[n];r!==!1&&t.push(`#define `+n+` `+r)}return t.join(`
`)}function od(e,t){let n={},r=e.getProgramParameter(t,e.ACTIVE_ATTRIBUTES);for(let i=0;i<r;i++){let r=e.getActiveAttrib(t,i),a=r.name,o=1;r.type===e.FLOAT_MAT2&&(o=2),r.type===e.FLOAT_MAT3&&(o=3),r.type===e.FLOAT_MAT4&&(o=4),n[a]={type:r.type,location:e.getAttribLocation(t,a),locationSize:o}}return n}function sd(e){return e!==``}function cd(e,t){let n=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return e.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,n).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function ld(e,t){return e.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}var ud=/^[ \t]*#include +<([\w\d./]+)>/gm;function dd(e){return e.replace(ud,pd)}var fd=new Map;function pd(e,t){let n=J[t];if(n===void 0){let e=fd.get(t);if(e!==void 0)n=J[e],N(`WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.`,t,e);else throw Error(`Can not resolve #include <`+t+`>`)}return dd(n)}var md=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function hd(e){return e.replace(md,gd)}function gd(e,t,n,r){let i=``;for(let e=parseInt(t);e<parseInt(n);e++)i+=r.replace(/\[\s*i\s*\]/g,`[ `+e+` ]`).replace(/UNROLLED_LOOP_INDEX/g,e);return i}function _d(e){let t=`precision ${e.precision} float;
	precision ${e.precision} int;
	precision ${e.precision} sampler2D;
	precision ${e.precision} samplerCube;
	precision ${e.precision} sampler3D;
	precision ${e.precision} sampler2DArray;
	precision ${e.precision} sampler2DShadow;
	precision ${e.precision} samplerCubeShadow;
	precision ${e.precision} sampler2DArrayShadow;
	precision ${e.precision} isampler2D;
	precision ${e.precision} isampler3D;
	precision ${e.precision} isamplerCube;
	precision ${e.precision} isampler2DArray;
	precision ${e.precision} usampler2D;
	precision ${e.precision} usampler3D;
	precision ${e.precision} usamplerCube;
	precision ${e.precision} usampler2DArray;
	`;return e.precision===`highp`?t+=`
#define HIGH_PRECISION`:e.precision===`mediump`?t+=`
#define MEDIUM_PRECISION`:e.precision===`lowp`&&(t+=`
#define LOW_PRECISION`),t}var vd={1:`SHADOWMAP_TYPE_PCF`,3:`SHADOWMAP_TYPE_VSM`};function yd(e){return vd[e.shadowMapType]||`SHADOWMAP_TYPE_BASIC`}var bd={301:`ENVMAP_TYPE_CUBE`,302:`ENVMAP_TYPE_CUBE`,306:`ENVMAP_TYPE_CUBE_UV`};function xd(e){return e.envMap===!1?`ENVMAP_TYPE_CUBE`:bd[e.envMapMode]||`ENVMAP_TYPE_CUBE`}var Sd={302:`ENVMAP_MODE_REFRACTION`};function Cd(e){return e.envMap===!1?`ENVMAP_MODE_REFLECTION`:Sd[e.envMapMode]||`ENVMAP_MODE_REFLECTION`}var wd={0:`ENVMAP_BLENDING_MULTIPLY`,1:`ENVMAP_BLENDING_MIX`,2:`ENVMAP_BLENDING_ADD`};function Td(e){return e.envMap===!1?`ENVMAP_BLENDING_NONE`:wd[e.combine]||`ENVMAP_BLENDING_NONE`}function Ed(e){let t=e.envMapCubeUVHeight;if(t===null)return null;let n=Math.log2(t)-2,r=1/t;return{texelWidth:1/(3*Math.max(2**n,112)),texelHeight:r,maxMip:n}}function Dd(e,t,n,r){let i=e.getContext(),a=n.defines,o=n.vertexShader,s=n.fragmentShader,c=yd(n),l=xd(n),u=Cd(n),d=Td(n),f=Ed(n),p=id(n),m=ad(a),h=i.createProgram(),g,_,v=n.glslVersion?`#version `+n.glslVersion+`
`:``;n.isRawShaderMaterial?(g=[`#define SHADER_TYPE `+n.shaderType,`#define SHADER_NAME `+n.shaderName,m].filter(sd).join(`
`),g.length>0&&(g+=`
`),_=[`#define SHADER_TYPE `+n.shaderType,`#define SHADER_NAME `+n.shaderName,m].filter(sd).join(`
`),_.length>0&&(_+=`
`)):(g=[_d(n),`#define SHADER_TYPE `+n.shaderType,`#define SHADER_NAME `+n.shaderName,m,n.extensionClipCullDistance?`#define USE_CLIP_DISTANCE`:``,n.batching?`#define USE_BATCHING`:``,n.batchingColor?`#define USE_BATCHING_COLOR`:``,n.instancing?`#define USE_INSTANCING`:``,n.instancingColor?`#define USE_INSTANCING_COLOR`:``,n.instancingMorph?`#define USE_INSTANCING_MORPH`:``,n.useFog&&n.fog?`#define USE_FOG`:``,n.useFog&&n.fogExp2?`#define FOG_EXP2`:``,n.map?`#define USE_MAP`:``,n.envMap?`#define USE_ENVMAP`:``,n.envMap?`#define `+u:``,n.lightMap?`#define USE_LIGHTMAP`:``,n.aoMap?`#define USE_AOMAP`:``,n.bumpMap?`#define USE_BUMPMAP`:``,n.normalMap?`#define USE_NORMALMAP`:``,n.normalMapObjectSpace?`#define USE_NORMALMAP_OBJECTSPACE`:``,n.normalMapTangentSpace?`#define USE_NORMALMAP_TANGENTSPACE`:``,n.displacementMap?`#define USE_DISPLACEMENTMAP`:``,n.emissiveMap?`#define USE_EMISSIVEMAP`:``,n.anisotropy?`#define USE_ANISOTROPY`:``,n.anisotropyMap?`#define USE_ANISOTROPYMAP`:``,n.clearcoatMap?`#define USE_CLEARCOATMAP`:``,n.clearcoatRoughnessMap?`#define USE_CLEARCOAT_ROUGHNESSMAP`:``,n.clearcoatNormalMap?`#define USE_CLEARCOAT_NORMALMAP`:``,n.iridescenceMap?`#define USE_IRIDESCENCEMAP`:``,n.iridescenceThicknessMap?`#define USE_IRIDESCENCE_THICKNESSMAP`:``,n.specularMap?`#define USE_SPECULARMAP`:``,n.specularColorMap?`#define USE_SPECULAR_COLORMAP`:``,n.specularIntensityMap?`#define USE_SPECULAR_INTENSITYMAP`:``,n.roughnessMap?`#define USE_ROUGHNESSMAP`:``,n.metalnessMap?`#define USE_METALNESSMAP`:``,n.alphaMap?`#define USE_ALPHAMAP`:``,n.alphaHash?`#define USE_ALPHAHASH`:``,n.transmission?`#define USE_TRANSMISSION`:``,n.transmissionMap?`#define USE_TRANSMISSIONMAP`:``,n.thicknessMap?`#define USE_THICKNESSMAP`:``,n.sheenColorMap?`#define USE_SHEEN_COLORMAP`:``,n.sheenRoughnessMap?`#define USE_SHEEN_ROUGHNESSMAP`:``,n.mapUv?`#define MAP_UV `+n.mapUv:``,n.alphaMapUv?`#define ALPHAMAP_UV `+n.alphaMapUv:``,n.lightMapUv?`#define LIGHTMAP_UV `+n.lightMapUv:``,n.aoMapUv?`#define AOMAP_UV `+n.aoMapUv:``,n.emissiveMapUv?`#define EMISSIVEMAP_UV `+n.emissiveMapUv:``,n.bumpMapUv?`#define BUMPMAP_UV `+n.bumpMapUv:``,n.normalMapUv?`#define NORMALMAP_UV `+n.normalMapUv:``,n.displacementMapUv?`#define DISPLACEMENTMAP_UV `+n.displacementMapUv:``,n.metalnessMapUv?`#define METALNESSMAP_UV `+n.metalnessMapUv:``,n.roughnessMapUv?`#define ROUGHNESSMAP_UV `+n.roughnessMapUv:``,n.anisotropyMapUv?`#define ANISOTROPYMAP_UV `+n.anisotropyMapUv:``,n.clearcoatMapUv?`#define CLEARCOATMAP_UV `+n.clearcoatMapUv:``,n.clearcoatNormalMapUv?`#define CLEARCOAT_NORMALMAP_UV `+n.clearcoatNormalMapUv:``,n.clearcoatRoughnessMapUv?`#define CLEARCOAT_ROUGHNESSMAP_UV `+n.clearcoatRoughnessMapUv:``,n.iridescenceMapUv?`#define IRIDESCENCEMAP_UV `+n.iridescenceMapUv:``,n.iridescenceThicknessMapUv?`#define IRIDESCENCE_THICKNESSMAP_UV `+n.iridescenceThicknessMapUv:``,n.sheenColorMapUv?`#define SHEEN_COLORMAP_UV `+n.sheenColorMapUv:``,n.sheenRoughnessMapUv?`#define SHEEN_ROUGHNESSMAP_UV `+n.sheenRoughnessMapUv:``,n.specularMapUv?`#define SPECULARMAP_UV `+n.specularMapUv:``,n.specularColorMapUv?`#define SPECULAR_COLORMAP_UV `+n.specularColorMapUv:``,n.specularIntensityMapUv?`#define SPECULAR_INTENSITYMAP_UV `+n.specularIntensityMapUv:``,n.transmissionMapUv?`#define TRANSMISSIONMAP_UV `+n.transmissionMapUv:``,n.thicknessMapUv?`#define THICKNESSMAP_UV `+n.thicknessMapUv:``,n.vertexTangents&&n.flatShading===!1?`#define USE_TANGENT`:``,n.vertexNormals?`#define HAS_NORMAL`:``,n.vertexColors?`#define USE_COLOR`:``,n.vertexAlphas?`#define USE_COLOR_ALPHA`:``,n.vertexUv1s?`#define USE_UV1`:``,n.vertexUv2s?`#define USE_UV2`:``,n.vertexUv3s?`#define USE_UV3`:``,n.pointsUvs?`#define USE_POINTS_UV`:``,n.flatShading?`#define FLAT_SHADED`:``,n.skinning?`#define USE_SKINNING`:``,n.morphTargets?`#define USE_MORPHTARGETS`:``,n.morphNormals&&n.flatShading===!1?`#define USE_MORPHNORMALS`:``,n.morphColors?`#define USE_MORPHCOLORS`:``,n.morphTargetsCount>0?`#define MORPHTARGETS_TEXTURE_STRIDE `+n.morphTextureStride:``,n.morphTargetsCount>0?`#define MORPHTARGETS_COUNT `+n.morphTargetsCount:``,n.doubleSided?`#define DOUBLE_SIDED`:``,n.flipSided?`#define FLIP_SIDED`:``,n.shadowMapEnabled?`#define USE_SHADOWMAP`:``,n.shadowMapEnabled?`#define `+c:``,n.sizeAttenuation?`#define USE_SIZEATTENUATION`:``,n.numLightProbes>0?`#define USE_LIGHT_PROBES`:``,n.logarithmicDepthBuffer?`#define USE_LOGARITHMIC_DEPTH_BUFFER`:``,n.reversedDepthBuffer?`#define USE_REVERSED_DEPTH_BUFFER`:``,`uniform mat4 modelMatrix;`,`uniform mat4 modelViewMatrix;`,`uniform mat4 projectionMatrix;`,`uniform mat4 viewMatrix;`,`uniform mat3 normalMatrix;`,`uniform vec3 cameraPosition;`,`uniform bool isOrthographic;`,`#ifdef USE_INSTANCING`,`	attribute mat4 instanceMatrix;`,`#endif`,`#ifdef USE_INSTANCING_COLOR`,`	attribute vec3 instanceColor;`,`#endif`,`#ifdef USE_INSTANCING_MORPH`,`	uniform sampler2D morphTexture;`,`#endif`,`attribute vec3 position;`,`attribute vec3 normal;`,`attribute vec2 uv;`,`#ifdef USE_UV1`,`	attribute vec2 uv1;`,`#endif`,`#ifdef USE_UV2`,`	attribute vec2 uv2;`,`#endif`,`#ifdef USE_UV3`,`	attribute vec2 uv3;`,`#endif`,`#ifdef USE_TANGENT`,`	attribute vec4 tangent;`,`#endif`,`#if defined( USE_COLOR_ALPHA )`,`	attribute vec4 color;`,`#elif defined( USE_COLOR )`,`	attribute vec3 color;`,`#endif`,`#ifdef USE_SKINNING`,`	attribute vec4 skinIndex;`,`	attribute vec4 skinWeight;`,`#endif`,`
`].filter(sd).join(`
`),_=[_d(n),`#define SHADER_TYPE `+n.shaderType,`#define SHADER_NAME `+n.shaderName,m,n.useFog&&n.fog?`#define USE_FOG`:``,n.useFog&&n.fogExp2?`#define FOG_EXP2`:``,n.alphaToCoverage?`#define ALPHA_TO_COVERAGE`:``,n.map?`#define USE_MAP`:``,n.matcap?`#define USE_MATCAP`:``,n.envMap?`#define USE_ENVMAP`:``,n.envMap?`#define `+l:``,n.envMap?`#define `+u:``,n.envMap?`#define `+d:``,f?`#define CUBEUV_TEXEL_WIDTH `+f.texelWidth:``,f?`#define CUBEUV_TEXEL_HEIGHT `+f.texelHeight:``,f?`#define CUBEUV_MAX_MIP `+f.maxMip+`.0`:``,n.lightMap?`#define USE_LIGHTMAP`:``,n.aoMap?`#define USE_AOMAP`:``,n.bumpMap?`#define USE_BUMPMAP`:``,n.normalMap?`#define USE_NORMALMAP`:``,n.normalMapObjectSpace?`#define USE_NORMALMAP_OBJECTSPACE`:``,n.normalMapTangentSpace?`#define USE_NORMALMAP_TANGENTSPACE`:``,n.packedNormalMap?`#define USE_PACKED_NORMALMAP`:``,n.emissiveMap?`#define USE_EMISSIVEMAP`:``,n.anisotropy?`#define USE_ANISOTROPY`:``,n.anisotropyMap?`#define USE_ANISOTROPYMAP`:``,n.clearcoat?`#define USE_CLEARCOAT`:``,n.clearcoatMap?`#define USE_CLEARCOATMAP`:``,n.clearcoatRoughnessMap?`#define USE_CLEARCOAT_ROUGHNESSMAP`:``,n.clearcoatNormalMap?`#define USE_CLEARCOAT_NORMALMAP`:``,n.dispersion?`#define USE_DISPERSION`:``,n.iridescence?`#define USE_IRIDESCENCE`:``,n.iridescenceMap?`#define USE_IRIDESCENCEMAP`:``,n.iridescenceThicknessMap?`#define USE_IRIDESCENCE_THICKNESSMAP`:``,n.specularMap?`#define USE_SPECULARMAP`:``,n.specularColorMap?`#define USE_SPECULAR_COLORMAP`:``,n.specularIntensityMap?`#define USE_SPECULAR_INTENSITYMAP`:``,n.roughnessMap?`#define USE_ROUGHNESSMAP`:``,n.metalnessMap?`#define USE_METALNESSMAP`:``,n.alphaMap?`#define USE_ALPHAMAP`:``,n.alphaTest?`#define USE_ALPHATEST`:``,n.alphaHash?`#define USE_ALPHAHASH`:``,n.sheen?`#define USE_SHEEN`:``,n.sheenColorMap?`#define USE_SHEEN_COLORMAP`:``,n.sheenRoughnessMap?`#define USE_SHEEN_ROUGHNESSMAP`:``,n.transmission?`#define USE_TRANSMISSION`:``,n.transmissionMap?`#define USE_TRANSMISSIONMAP`:``,n.thicknessMap?`#define USE_THICKNESSMAP`:``,n.vertexTangents&&n.flatShading===!1?`#define USE_TANGENT`:``,n.vertexColors||n.instancingColor?`#define USE_COLOR`:``,n.vertexAlphas||n.batchingColor?`#define USE_COLOR_ALPHA`:``,n.vertexUv1s?`#define USE_UV1`:``,n.vertexUv2s?`#define USE_UV2`:``,n.vertexUv3s?`#define USE_UV3`:``,n.pointsUvs?`#define USE_POINTS_UV`:``,n.gradientMap?`#define USE_GRADIENTMAP`:``,n.flatShading?`#define FLAT_SHADED`:``,n.doubleSided?`#define DOUBLE_SIDED`:``,n.flipSided?`#define FLIP_SIDED`:``,n.shadowMapEnabled?`#define USE_SHADOWMAP`:``,n.shadowMapEnabled?`#define `+c:``,n.premultipliedAlpha?`#define PREMULTIPLIED_ALPHA`:``,n.numLightProbes>0?`#define USE_LIGHT_PROBES`:``,n.numLightProbeGrids>0?`#define USE_LIGHT_PROBES_GRID`:``,n.decodeVideoTexture?`#define DECODE_VIDEO_TEXTURE`:``,n.decodeVideoTextureEmissive?`#define DECODE_VIDEO_TEXTURE_EMISSIVE`:``,n.logarithmicDepthBuffer?`#define USE_LOGARITHMIC_DEPTH_BUFFER`:``,n.reversedDepthBuffer?`#define USE_REVERSED_DEPTH_BUFFER`:``,`uniform mat4 viewMatrix;`,`uniform vec3 cameraPosition;`,`uniform bool isOrthographic;`,n.toneMapping===0?``:`#define TONE_MAPPING`,n.toneMapping===0?``:J.tonemapping_pars_fragment,n.toneMapping===0?``:td(`toneMapping`,n.toneMapping),n.dithering?`#define DITHERING`:``,n.opaque?`#define OPAQUE`:``,J.colorspace_pars_fragment,$u(`linearToOutputTexel`,n.outputColorSpace),rd(),n.useDepthPacking?`#define DEPTH_PACKING `+n.depthPacking:``,`
`].filter(sd).join(`
`)),o=dd(o),o=cd(o,n),o=ld(o,n),s=dd(s),s=cd(s,n),s=ld(s,n),o=hd(o),s=hd(s),n.isRawShaderMaterial!==!0&&(v=`#version 300 es
`,g=[p,`#define attribute in`,`#define varying out`,`#define texture2D texture`].join(`
`)+`
`+g,_=[`#define varying in`,n.glslVersion===`300 es`?``:`layout(location = 0) out highp vec4 pc_fragColor;`,n.glslVersion===`300 es`?``:`#define gl_FragColor pc_fragColor`,`#define gl_FragDepthEXT gl_FragDepth`,`#define texture2D texture`,`#define textureCube texture`,`#define texture2DProj textureProj`,`#define texture2DLodEXT textureLod`,`#define texture2DProjLodEXT textureProjLod`,`#define textureCubeLodEXT textureLod`,`#define texture2DGradEXT textureGrad`,`#define texture2DProjGradEXT textureProjGrad`,`#define textureCubeGradEXT textureGrad`].join(`
`)+`
`+_);let y=v+g+o,b=v+_+s,x=Ku(i,i.VERTEX_SHADER,y),S=Ku(i,i.FRAGMENT_SHADER,b);i.attachShader(h,x),i.attachShader(h,S),n.index0AttributeName===void 0?n.morphTargets===!0&&i.bindAttribLocation(h,0,`position`):i.bindAttribLocation(h,0,n.index0AttributeName),i.linkProgram(h);function C(t){if(e.debug.checkShaderErrors){let n=i.getProgramInfoLog(h)||``,r=i.getShaderInfoLog(x)||``,a=i.getShaderInfoLog(S)||``,o=n.trim(),s=r.trim(),c=a.trim(),l=!0,u=!0;if(i.getProgramParameter(h,i.LINK_STATUS)===!1)if(l=!1,typeof e.debug.onShaderError==`function`)e.debug.onShaderError(i,h,x,S);else{let e=Qu(i,x,`vertex`),n=Qu(i,S,`fragment`);P(`THREE.WebGLProgram: Shader Error `+i.getError()+` - VALIDATE_STATUS `+i.getProgramParameter(h,i.VALIDATE_STATUS)+`

Material Name: `+t.name+`
Material Type: `+t.type+`

Program Info Log: `+o+`
`+e+`
`+n)}else o===``?(s===``||c===``)&&(u=!1):N(`WebGLProgram: Program Info Log:`,o);u&&(t.diagnostics={runnable:l,programLog:o,vertexShader:{log:s,prefix:g},fragmentShader:{log:c,prefix:_}})}i.deleteShader(x),i.deleteShader(S),w=new Gu(i,h),T=od(i,h)}let w;this.getUniforms=function(){return w===void 0&&C(this),w};let T;this.getAttributes=function(){return T===void 0&&C(this),T};let E=n.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return E===!1&&(E=i.getProgramParameter(h,qu)),E},this.destroy=function(){r.releaseStatesOfProgram(this),i.deleteProgram(h),this.program=void 0},this.type=n.shaderType,this.name=n.shaderName,this.id=Ju++,this.cacheKey=t,this.usedTimes=1,this.program=h,this.vertexShader=x,this.fragmentShader=S,this}var Od=0,kd=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){let t=e.vertexShader,n=e.fragmentShader,r=this._getShaderStage(t),i=this._getShaderStage(n),a=this._getShaderCacheForMaterial(e);return a.has(r)===!1&&(a.add(r),r.usedTimes++),a.has(i)===!1&&(a.add(i),i.usedTimes++),this}remove(e){let t=this.materialCache.get(e);for(let e of t)e.usedTimes--,e.usedTimes===0&&this.shaderCache.delete(e.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){let t=this.materialCache,n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){let t=this.shaderCache,n=t.get(e);return n===void 0&&(n=new Ad(e),t.set(e,n)),n}},Ad=class{constructor(e){this.id=Od++,this.code=e,this.usedTimes=0}};function jd(e){return e===1030||e===37490||e===36285}function Md(e,t,n,r,i,a){let o=new Tn,s=new kd,c=new Set,l=[],u=new Map,d=r.logarithmicDepthBuffer,f=r.precision,p={MeshDepthMaterial:`depth`,MeshDistanceMaterial:`distance`,MeshNormalMaterial:`normal`,MeshBasicMaterial:`basic`,MeshLambertMaterial:`lambert`,MeshPhongMaterial:`phong`,MeshToonMaterial:`toon`,MeshStandardMaterial:`physical`,MeshPhysicalMaterial:`physical`,MeshMatcapMaterial:`matcap`,LineBasicMaterial:`basic`,LineDashedMaterial:`dashed`,PointsMaterial:`points`,ShadowMaterial:`shadow`,SpriteMaterial:`sprite`};function m(e){return c.add(e),e===0?`uv`:`uv${e}`}function h(i,o,l,u,h,g){let _=u.fog,v=h.geometry,y=i.isMeshStandardMaterial||i.isMeshLambertMaterial||i.isMeshPhongMaterial?u.environment:null,b=i.isMeshStandardMaterial||i.isMeshLambertMaterial&&!i.envMap||i.isMeshPhongMaterial&&!i.envMap,x=t.get(i.envMap||y,b),S=x&&x.mapping===306?x.image.height:null,C=p[i.type];i.precision!==null&&(f=r.getMaxPrecision(i.precision),f!==i.precision&&N(`WebGLProgram.getParameters:`,i.precision,`not supported, using`,f,`instead.`));let w=v.morphAttributes.position||v.morphAttributes.normal||v.morphAttributes.color,T=w===void 0?0:w.length,E=0;v.morphAttributes.position!==void 0&&(E=1),v.morphAttributes.normal!==void 0&&(E=2),v.morphAttributes.color!==void 0&&(E=3);let D,ee,te,O;if(C){let e=el[C];D=e.vertexShader,ee=e.fragmentShader}else D=i.vertexShader,ee=i.fragmentShader,s.update(i),te=s.getVertexShaderID(i),O=s.getFragmentShaderID(i);let ne=e.getRenderTarget(),re=e.state.buffers.depth.getReversed(),k=h.isInstancedMesh===!0,ie=h.isBatchedMesh===!0,ae=!!i.map,oe=!!i.matcap,se=!!x,ce=!!i.aoMap,le=!!i.lightMap,ue=!!i.bumpMap,de=!!i.normalMap,fe=!!i.displacementMap,pe=!!i.emissiveMap,me=!!i.metalnessMap,he=!!i.roughnessMap,ge=i.anisotropy>0,_e=i.clearcoat>0,ve=i.dispersion>0,ye=i.iridescence>0,be=i.sheen>0,xe=i.transmission>0,Se=ge&&!!i.anisotropyMap,Ce=_e&&!!i.clearcoatMap,we=_e&&!!i.clearcoatNormalMap,Te=_e&&!!i.clearcoatRoughnessMap,Ee=ye&&!!i.iridescenceMap,De=ye&&!!i.iridescenceThicknessMap,Oe=be&&!!i.sheenColorMap,ke=be&&!!i.sheenRoughnessMap,Ae=!!i.specularMap,je=!!i.specularColorMap,Me=!!i.specularIntensityMap,Ne=xe&&!!i.transmissionMap,Pe=xe&&!!i.thicknessMap,Fe=!!i.gradientMap,A=!!i.alphaMap,Ie=i.alphaTest>0,Le=!!i.alphaHash,Re=!!i.extensions,j=0;i.toneMapped&&(ne===null||ne.isXRRenderTarget===!0)&&(j=e.toneMapping);let ze={shaderID:C,shaderType:i.type,shaderName:i.name,vertexShader:D,fragmentShader:ee,defines:i.defines,customVertexShaderID:te,customFragmentShaderID:O,isRawShaderMaterial:i.isRawShaderMaterial===!0,glslVersion:i.glslVersion,precision:f,batching:ie,batchingColor:ie&&h._colorsTexture!==null,instancing:k,instancingColor:k&&h.instanceColor!==null,instancingMorph:k&&h.morphTexture!==null,outputColorSpace:ne===null?e.outputColorSpace:ne.isXRRenderTarget===!0?ne.texture.colorSpace:Qt.workingColorSpace,alphaToCoverage:!!i.alphaToCoverage,map:ae,matcap:oe,envMap:se,envMapMode:se&&x.mapping,envMapCubeUVHeight:S,aoMap:ce,lightMap:le,bumpMap:ue,normalMap:de,displacementMap:fe,emissiveMap:pe,normalMapObjectSpace:de&&i.normalMapType===1,normalMapTangentSpace:de&&i.normalMapType===0,packedNormalMap:de&&i.normalMapType===0&&jd(i.normalMap.format),metalnessMap:me,roughnessMap:he,anisotropy:ge,anisotropyMap:Se,clearcoat:_e,clearcoatMap:Ce,clearcoatNormalMap:we,clearcoatRoughnessMap:Te,dispersion:ve,iridescence:ye,iridescenceMap:Ee,iridescenceThicknessMap:De,sheen:be,sheenColorMap:Oe,sheenRoughnessMap:ke,specularMap:Ae,specularColorMap:je,specularIntensityMap:Me,transmission:xe,transmissionMap:Ne,thicknessMap:Pe,gradientMap:Fe,opaque:i.transparent===!1&&i.blending===1&&i.alphaToCoverage===!1,alphaMap:A,alphaTest:Ie,alphaHash:Le,combine:i.combine,mapUv:ae&&m(i.map.channel),aoMapUv:ce&&m(i.aoMap.channel),lightMapUv:le&&m(i.lightMap.channel),bumpMapUv:ue&&m(i.bumpMap.channel),normalMapUv:de&&m(i.normalMap.channel),displacementMapUv:fe&&m(i.displacementMap.channel),emissiveMapUv:pe&&m(i.emissiveMap.channel),metalnessMapUv:me&&m(i.metalnessMap.channel),roughnessMapUv:he&&m(i.roughnessMap.channel),anisotropyMapUv:Se&&m(i.anisotropyMap.channel),clearcoatMapUv:Ce&&m(i.clearcoatMap.channel),clearcoatNormalMapUv:we&&m(i.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Te&&m(i.clearcoatRoughnessMap.channel),iridescenceMapUv:Ee&&m(i.iridescenceMap.channel),iridescenceThicknessMapUv:De&&m(i.iridescenceThicknessMap.channel),sheenColorMapUv:Oe&&m(i.sheenColorMap.channel),sheenRoughnessMapUv:ke&&m(i.sheenRoughnessMap.channel),specularMapUv:Ae&&m(i.specularMap.channel),specularColorMapUv:je&&m(i.specularColorMap.channel),specularIntensityMapUv:Me&&m(i.specularIntensityMap.channel),transmissionMapUv:Ne&&m(i.transmissionMap.channel),thicknessMapUv:Pe&&m(i.thicknessMap.channel),alphaMapUv:A&&m(i.alphaMap.channel),vertexTangents:!!v.attributes.tangent&&(de||ge),vertexNormals:!!v.attributes.normal,vertexColors:i.vertexColors,vertexAlphas:i.vertexColors===!0&&!!v.attributes.color&&v.attributes.color.itemSize===4,pointsUvs:h.isPoints===!0&&!!v.attributes.uv&&(ae||A),fog:!!_,useFog:i.fog===!0,fogExp2:!!_&&_.isFogExp2,flatShading:i.wireframe===!1&&(i.flatShading===!0||v.attributes.normal===void 0&&de===!1&&(i.isMeshLambertMaterial||i.isMeshPhongMaterial||i.isMeshStandardMaterial||i.isMeshPhysicalMaterial)),sizeAttenuation:i.sizeAttenuation===!0,logarithmicDepthBuffer:d,reversedDepthBuffer:re,skinning:h.isSkinnedMesh===!0,morphTargets:v.morphAttributes.position!==void 0,morphNormals:v.morphAttributes.normal!==void 0,morphColors:v.morphAttributes.color!==void 0,morphTargetsCount:T,morphTextureStride:E,numDirLights:o.directional.length,numPointLights:o.point.length,numSpotLights:o.spot.length,numSpotLightMaps:o.spotLightMap.length,numRectAreaLights:o.rectArea.length,numHemiLights:o.hemi.length,numDirLightShadows:o.directionalShadowMap.length,numPointLightShadows:o.pointShadowMap.length,numSpotLightShadows:o.spotShadowMap.length,numSpotLightShadowsWithMaps:o.numSpotLightShadowsWithMaps,numLightProbes:o.numLightProbes,numLightProbeGrids:g.length,numClippingPlanes:a.numPlanes,numClipIntersection:a.numIntersection,dithering:i.dithering,shadowMapEnabled:e.shadowMap.enabled&&l.length>0,shadowMapType:e.shadowMap.type,toneMapping:j,decodeVideoTexture:ae&&i.map.isVideoTexture===!0&&Qt.getTransfer(i.map.colorSpace)===`srgb`,decodeVideoTextureEmissive:pe&&i.emissiveMap.isVideoTexture===!0&&Qt.getTransfer(i.emissiveMap.colorSpace)===`srgb`,premultipliedAlpha:i.premultipliedAlpha,doubleSided:i.side===2,flipSided:i.side===1,useDepthPacking:i.depthPacking>=0,depthPacking:i.depthPacking||0,index0AttributeName:i.index0AttributeName,extensionClipCullDistance:Re&&i.extensions.clipCullDistance===!0&&n.has(`WEBGL_clip_cull_distance`),extensionMultiDraw:(Re&&i.extensions.multiDraw===!0||ie)&&n.has(`WEBGL_multi_draw`),rendererExtensionParallelShaderCompile:n.has(`KHR_parallel_shader_compile`),customProgramCacheKey:i.customProgramCacheKey()};return ze.vertexUv1s=c.has(1),ze.vertexUv2s=c.has(2),ze.vertexUv3s=c.has(3),c.clear(),ze}function g(t){let n=[];if(t.shaderID?n.push(t.shaderID):(n.push(t.customVertexShaderID),n.push(t.customFragmentShaderID)),t.defines!==void 0)for(let e in t.defines)n.push(e),n.push(t.defines[e]);return t.isRawShaderMaterial===!1&&(_(n,t),v(n,t),n.push(e.outputColorSpace)),n.push(t.customProgramCacheKey),n.join()}function _(e,t){e.push(t.precision),e.push(t.outputColorSpace),e.push(t.envMapMode),e.push(t.envMapCubeUVHeight),e.push(t.mapUv),e.push(t.alphaMapUv),e.push(t.lightMapUv),e.push(t.aoMapUv),e.push(t.bumpMapUv),e.push(t.normalMapUv),e.push(t.displacementMapUv),e.push(t.emissiveMapUv),e.push(t.metalnessMapUv),e.push(t.roughnessMapUv),e.push(t.anisotropyMapUv),e.push(t.clearcoatMapUv),e.push(t.clearcoatNormalMapUv),e.push(t.clearcoatRoughnessMapUv),e.push(t.iridescenceMapUv),e.push(t.iridescenceThicknessMapUv),e.push(t.sheenColorMapUv),e.push(t.sheenRoughnessMapUv),e.push(t.specularMapUv),e.push(t.specularColorMapUv),e.push(t.specularIntensityMapUv),e.push(t.transmissionMapUv),e.push(t.thicknessMapUv),e.push(t.combine),e.push(t.fogExp2),e.push(t.sizeAttenuation),e.push(t.morphTargetsCount),e.push(t.morphAttributeCount),e.push(t.numDirLights),e.push(t.numPointLights),e.push(t.numSpotLights),e.push(t.numSpotLightMaps),e.push(t.numHemiLights),e.push(t.numRectAreaLights),e.push(t.numDirLightShadows),e.push(t.numPointLightShadows),e.push(t.numSpotLightShadows),e.push(t.numSpotLightShadowsWithMaps),e.push(t.numLightProbes),e.push(t.shadowMapType),e.push(t.toneMapping),e.push(t.numClippingPlanes),e.push(t.numClipIntersection),e.push(t.depthPacking)}function v(e,t){o.disableAll(),t.instancing&&o.enable(0),t.instancingColor&&o.enable(1),t.instancingMorph&&o.enable(2),t.matcap&&o.enable(3),t.envMap&&o.enable(4),t.normalMapObjectSpace&&o.enable(5),t.normalMapTangentSpace&&o.enable(6),t.clearcoat&&o.enable(7),t.iridescence&&o.enable(8),t.alphaTest&&o.enable(9),t.vertexColors&&o.enable(10),t.vertexAlphas&&o.enable(11),t.vertexUv1s&&o.enable(12),t.vertexUv2s&&o.enable(13),t.vertexUv3s&&o.enable(14),t.vertexTangents&&o.enable(15),t.anisotropy&&o.enable(16),t.alphaHash&&o.enable(17),t.batching&&o.enable(18),t.dispersion&&o.enable(19),t.batchingColor&&o.enable(20),t.gradientMap&&o.enable(21),t.packedNormalMap&&o.enable(22),t.vertexNormals&&o.enable(23),e.push(o.mask),o.disableAll(),t.fog&&o.enable(0),t.useFog&&o.enable(1),t.flatShading&&o.enable(2),t.logarithmicDepthBuffer&&o.enable(3),t.reversedDepthBuffer&&o.enable(4),t.skinning&&o.enable(5),t.morphTargets&&o.enable(6),t.morphNormals&&o.enable(7),t.morphColors&&o.enable(8),t.premultipliedAlpha&&o.enable(9),t.shadowMapEnabled&&o.enable(10),t.doubleSided&&o.enable(11),t.flipSided&&o.enable(12),t.useDepthPacking&&o.enable(13),t.dithering&&o.enable(14),t.transmission&&o.enable(15),t.sheen&&o.enable(16),t.opaque&&o.enable(17),t.pointsUvs&&o.enable(18),t.decodeVideoTexture&&o.enable(19),t.decodeVideoTextureEmissive&&o.enable(20),t.alphaToCoverage&&o.enable(21),t.numLightProbeGrids>0&&o.enable(22),e.push(o.mask)}function y(e){let t=p[e.type],n;if(t){let e=el[t];n=Ss.clone(e.uniforms)}else n=e.uniforms;return n}function b(t,n){let r=u.get(n);return r===void 0?(r=new Dd(e,n,t,i),l.push(r),u.set(n,r)):++r.usedTimes,r}function x(e){if(--e.usedTimes===0){let t=l.indexOf(e);l[t]=l[l.length-1],l.pop(),u.delete(e.cacheKey),e.destroy()}}function S(e){s.remove(e)}function C(){s.dispose()}return{getParameters:h,getProgramCacheKey:g,getUniforms:y,acquireProgram:b,releaseProgram:x,releaseShaderCache:S,programs:l,dispose:C}}function Nd(){let e=new WeakMap;function t(t){return e.has(t)}function n(t){let n=e.get(t);return n===void 0&&(n={},e.set(t,n)),n}function r(t){e.delete(t)}function i(t,n,r){e.get(t)[n]=r}function a(){e=new WeakMap}return{has:t,get:n,remove:r,update:i,dispose:a}}function Pd(e,t){return e.groupOrder===t.groupOrder?e.renderOrder===t.renderOrder?e.material.id===t.material.id?e.materialVariant===t.materialVariant?e.z===t.z?e.id-t.id:e.z-t.z:e.materialVariant-t.materialVariant:e.material.id-t.material.id:e.renderOrder-t.renderOrder:e.groupOrder-t.groupOrder}function Fd(e,t){return e.groupOrder===t.groupOrder?e.renderOrder===t.renderOrder?e.z===t.z?e.id-t.id:t.z-e.z:e.renderOrder-t.renderOrder:e.groupOrder-t.groupOrder}function Id(){let e=[],t=0,n=[],r=[],i=[];function a(){t=0,n.length=0,r.length=0,i.length=0}function o(e){let t=0;return e.isInstancedMesh&&(t+=2),e.isSkinnedMesh&&(t+=1),t}function s(n,r,i,a,s,c){let l=e[t];return l===void 0?(l={id:n.id,object:n,geometry:r,material:i,materialVariant:o(n),groupOrder:a,renderOrder:n.renderOrder,z:s,group:c},e[t]=l):(l.id=n.id,l.object=n,l.geometry=r,l.material=i,l.materialVariant=o(n),l.groupOrder=a,l.renderOrder=n.renderOrder,l.z=s,l.group=c),t++,l}function c(e,t,a,o,c,l){let u=s(e,t,a,o,c,l);a.transmission>0?r.push(u):a.transparent===!0?i.push(u):n.push(u)}function l(e,t,a,o,c,l){let u=s(e,t,a,o,c,l);a.transmission>0?r.unshift(u):a.transparent===!0?i.unshift(u):n.unshift(u)}function u(e,t){n.length>1&&n.sort(e||Pd),r.length>1&&r.sort(t||Fd),i.length>1&&i.sort(t||Fd)}function d(){for(let n=t,r=e.length;n<r;n++){let t=e[n];if(t.id===null)break;t.id=null,t.object=null,t.geometry=null,t.material=null,t.group=null}}return{opaque:n,transmissive:r,transparent:i,init:a,push:c,unshift:l,finish:d,sort:u}}function Ld(){let e=new WeakMap;function t(t,n){let r=e.get(t),i;return r===void 0?(i=new Id,e.set(t,[i])):n>=r.length?(i=new Id,r.push(i)):i=r[n],i}function n(){e=new WeakMap}return{get:t,dispose:n}}function Rd(){let e={};return{get:function(t){if(e[t.id]!==void 0)return e[t.id];let n;switch(t.type){case`DirectionalLight`:n={direction:new L,color:new V};break;case`SpotLight`:n={position:new L,direction:new L,color:new V,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case`PointLight`:n={position:new L,color:new V,distance:0,decay:0};break;case`HemisphereLight`:n={direction:new L,skyColor:new V,groundColor:new V};break;case`RectAreaLight`:n={color:new V,position:new L,halfWidth:new L,halfHeight:new L};break}return e[t.id]=n,n}}}function zd(){let e={};return{get:function(t){if(e[t.id]!==void 0)return e[t.id];let n;switch(t.type){case`DirectionalLight`:n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new I};break;case`SpotLight`:n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new I};break;case`PointLight`:n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new I,shadowCameraNear:1,shadowCameraFar:1e3};break}return e[t.id]=n,n}}}var Bd=0;function Vd(e,t){return(t.castShadow?2:0)-(e.castShadow?2:0)+ +!!t.map-!!e.map}function Hd(e){let t=new Rd,n=zd(),r={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let e=0;e<9;e++)r.probe.push(new L);let i=new L,a=new z,o=new z;function s(i){let a=0,o=0,s=0;for(let e=0;e<9;e++)r.probe[e].set(0,0,0);let c=0,l=0,u=0,d=0,f=0,p=0,m=0,h=0,g=0,_=0,v=0;i.sort(Vd);for(let e=0,y=i.length;e<y;e++){let y=i[e],b=y.color,x=y.intensity,S=y.distance,C=null;if(y.shadow&&y.shadow.map&&(C=y.shadow.map.texture.format===1030?y.shadow.map.texture:y.shadow.map.depthTexture||y.shadow.map.texture),y.isAmbientLight)a+=b.r*x,o+=b.g*x,s+=b.b*x;else if(y.isLightProbe){for(let e=0;e<9;e++)r.probe[e].addScaledVector(y.sh.coefficients[e],x);v++}else if(y.isDirectionalLight){let e=t.get(y);if(e.color.copy(y.color).multiplyScalar(y.intensity),y.castShadow){let e=y.shadow,t=n.get(y);t.shadowIntensity=e.intensity,t.shadowBias=e.bias,t.shadowNormalBias=e.normalBias,t.shadowRadius=e.radius,t.shadowMapSize=e.mapSize,r.directionalShadow[c]=t,r.directionalShadowMap[c]=C,r.directionalShadowMatrix[c]=y.shadow.matrix,p++}r.directional[c]=e,c++}else if(y.isSpotLight){let e=t.get(y);e.position.setFromMatrixPosition(y.matrixWorld),e.color.copy(b).multiplyScalar(x),e.distance=S,e.coneCos=Math.cos(y.angle),e.penumbraCos=Math.cos(y.angle*(1-y.penumbra)),e.decay=y.decay,r.spot[u]=e;let i=y.shadow;if(y.map&&(r.spotLightMap[g]=y.map,g++,i.updateMatrices(y),y.castShadow&&_++),r.spotLightMatrix[u]=i.matrix,y.castShadow){let e=n.get(y);e.shadowIntensity=i.intensity,e.shadowBias=i.bias,e.shadowNormalBias=i.normalBias,e.shadowRadius=i.radius,e.shadowMapSize=i.mapSize,r.spotShadow[u]=e,r.spotShadowMap[u]=C,h++}u++}else if(y.isRectAreaLight){let e=t.get(y);e.color.copy(b).multiplyScalar(x),e.halfWidth.set(y.width*.5,0,0),e.halfHeight.set(0,y.height*.5,0),r.rectArea[d]=e,d++}else if(y.isPointLight){let e=t.get(y);if(e.color.copy(y.color).multiplyScalar(y.intensity),e.distance=y.distance,e.decay=y.decay,y.castShadow){let e=y.shadow,t=n.get(y);t.shadowIntensity=e.intensity,t.shadowBias=e.bias,t.shadowNormalBias=e.normalBias,t.shadowRadius=e.radius,t.shadowMapSize=e.mapSize,t.shadowCameraNear=e.camera.near,t.shadowCameraFar=e.camera.far,r.pointShadow[l]=t,r.pointShadowMap[l]=C,r.pointShadowMatrix[l]=y.shadow.matrix,m++}r.point[l]=e,l++}else if(y.isHemisphereLight){let e=t.get(y);e.skyColor.copy(y.color).multiplyScalar(x),e.groundColor.copy(y.groundColor).multiplyScalar(x),r.hemi[f]=e,f++}}d>0&&(e.has(`OES_texture_float_linear`)===!0?(r.rectAreaLTC1=Y.LTC_FLOAT_1,r.rectAreaLTC2=Y.LTC_FLOAT_2):(r.rectAreaLTC1=Y.LTC_HALF_1,r.rectAreaLTC2=Y.LTC_HALF_2)),r.ambient[0]=a,r.ambient[1]=o,r.ambient[2]=s;let y=r.hash;(y.directionalLength!==c||y.pointLength!==l||y.spotLength!==u||y.rectAreaLength!==d||y.hemiLength!==f||y.numDirectionalShadows!==p||y.numPointShadows!==m||y.numSpotShadows!==h||y.numSpotMaps!==g||y.numLightProbes!==v)&&(r.directional.length=c,r.spot.length=u,r.rectArea.length=d,r.point.length=l,r.hemi.length=f,r.directionalShadow.length=p,r.directionalShadowMap.length=p,r.pointShadow.length=m,r.pointShadowMap.length=m,r.spotShadow.length=h,r.spotShadowMap.length=h,r.directionalShadowMatrix.length=p,r.pointShadowMatrix.length=m,r.spotLightMatrix.length=h+g-_,r.spotLightMap.length=g,r.numSpotLightShadowsWithMaps=_,r.numLightProbes=v,y.directionalLength=c,y.pointLength=l,y.spotLength=u,y.rectAreaLength=d,y.hemiLength=f,y.numDirectionalShadows=p,y.numPointShadows=m,y.numSpotShadows=h,y.numSpotMaps=g,y.numLightProbes=v,r.version=Bd++)}function c(e,t){let n=0,s=0,c=0,l=0,u=0,d=t.matrixWorldInverse;for(let t=0,f=e.length;t<f;t++){let f=e[t];if(f.isDirectionalLight){let e=r.directional[n];e.direction.setFromMatrixPosition(f.matrixWorld),i.setFromMatrixPosition(f.target.matrixWorld),e.direction.sub(i),e.direction.transformDirection(d),n++}else if(f.isSpotLight){let e=r.spot[c];e.position.setFromMatrixPosition(f.matrixWorld),e.position.applyMatrix4(d),e.direction.setFromMatrixPosition(f.matrixWorld),i.setFromMatrixPosition(f.target.matrixWorld),e.direction.sub(i),e.direction.transformDirection(d),c++}else if(f.isRectAreaLight){let e=r.rectArea[l];e.position.setFromMatrixPosition(f.matrixWorld),e.position.applyMatrix4(d),o.identity(),a.copy(f.matrixWorld),a.premultiply(d),o.extractRotation(a),e.halfWidth.set(f.width*.5,0,0),e.halfHeight.set(0,f.height*.5,0),e.halfWidth.applyMatrix4(o),e.halfHeight.applyMatrix4(o),l++}else if(f.isPointLight){let e=r.point[s];e.position.setFromMatrixPosition(f.matrixWorld),e.position.applyMatrix4(d),s++}else if(f.isHemisphereLight){let e=r.hemi[u];e.direction.setFromMatrixPosition(f.matrixWorld),e.direction.transformDirection(d),u++}}}return{setup:s,setupView:c,state:r}}function Ud(e){let t=new Hd(e),n=[],r=[],i=[];function a(e){d.camera=e,n.length=0,r.length=0,i.length=0}function o(e){n.push(e)}function s(e){r.push(e)}function c(e){i.push(e)}function l(){t.setup(n)}function u(e){t.setupView(n,e)}let d={lightsArray:n,shadowsArray:r,lightProbeGridArray:i,camera:null,lights:t,transmissionRenderTarget:{},textureUnits:0};return{init:a,state:d,setupLights:l,setupLightsView:u,pushLight:o,pushShadow:s,pushLightProbeGrid:c}}function Wd(e){let t=new WeakMap;function n(n,r=0){let i=t.get(n),a;return i===void 0?(a=new Ud(e),t.set(n,[a])):r>=i.length?(a=new Ud(e),i.push(a)):a=i[r],a}function r(){t=new WeakMap}return{get:n,dispose:r}}var Gd=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,Kd=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ).rg;
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ).r;
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( max( 0.0, squared_mean - mean * mean ) );
	gl_FragColor = vec4( mean, std_dev, 0.0, 1.0 );
}`,qd=[new L(1,0,0),new L(-1,0,0),new L(0,1,0),new L(0,-1,0),new L(0,0,1),new L(0,0,-1)],Jd=[new L(0,-1,0),new L(0,-1,0),new L(0,0,1),new L(0,0,-1),new L(0,-1,0),new L(0,-1,0)],Yd=new z,Xd=new L,Zd=new L;function Qd(e,t,n){let r=new ua,i=new I,a=new I,o=new un,s=new As,c=new js,l={},u=n.maxTextureSize,d={0:1,1:0,2:2},f=new Ts({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new I},radius:{value:4}},vertexShader:Gd,fragmentShader:Kd}),m=f.clone();m.defines.HORIZONTAL_PASS=1;let h=new Ur;h.setAttribute(`position`,new kr(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let _=new U(h,f),v=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=1;let y=this.type;this.render=function(t,n,s){if(v.enabled===!1||v.autoUpdate===!1&&v.needsUpdate===!1||t.length===0)return;this.type===2&&(N(`WebGLShadowMap: PCFSoftShadowMap has been deprecated. Using PCFShadowMap instead.`),this.type=1);let c=e.getRenderTarget(),l=e.getActiveCubeFace(),d=e.getActiveMipmapLevel(),f=e.state;f.setBlending(0),f.buffers.depth.getReversed()===!0?f.buffers.color.setClear(0,0,0,0):f.buffers.color.setClear(1,1,1,1),f.buffers.depth.setTest(!0),f.setScissorTest(!1);let m=y!==this.type;m&&n.traverse(function(e){e.material&&(Array.isArray(e.material)?e.material.forEach(e=>e.needsUpdate=!0):e.material.needsUpdate=!0)});for(let c=0,l=t.length;c<l;c++){let l=t[c],d=l.shadow;if(d===void 0){N(`WebGLShadowMap:`,l,`has no shadow.`);continue}if(d.autoUpdate===!1&&d.needsUpdate===!1)continue;i.copy(d.mapSize);let h=d.getFrameExtents();i.multiply(h),a.copy(d.mapSize),(i.x>u||i.y>u)&&(i.x>u&&(a.x=Math.floor(u/h.x),i.x=a.x*h.x,d.mapSize.x=a.x),i.y>u&&(a.y=Math.floor(u/h.y),i.y=a.y*h.y,d.mapSize.y=a.y));let _=e.state.buffers.depth.getReversed();if(d.camera._reversedDepth=_,d.map===null||m===!0){if(d.map!==null&&(d.map.depthTexture!==null&&(d.map.depthTexture.dispose(),d.map.depthTexture=null),d.map.dispose()),this.type===3){if(l.isPointLight){N(`WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.`);continue}d.map=new fn(i.x,i.y,{format:le,type:E,minFilter:g,magFilter:g,generateMipmaps:!1}),d.map.texture.name=l.name+`.shadowMap`,d.map.depthTexture=new Pa(i.x,i.y,T),d.map.depthTexture.name=l.name+`.shadowMapDepth`,d.map.depthTexture.format=ae,d.map.depthTexture.compareFunction=null,d.map.depthTexture.minFilter=p,d.map.depthTexture.magFilter=p}else l.isPointLight?(d.map=new kl(i.x),d.map.depthTexture=new Fa(i.x,w)):(d.map=new fn(i.x,i.y),d.map.depthTexture=new Pa(i.x,i.y,w)),d.map.depthTexture.name=l.name+`.shadowMap`,d.map.depthTexture.format=ae,this.type===1?(d.map.depthTexture.compareFunction=_?518:515,d.map.depthTexture.minFilter=g,d.map.depthTexture.magFilter=g):(d.map.depthTexture.compareFunction=null,d.map.depthTexture.minFilter=p,d.map.depthTexture.magFilter=p);d.camera.updateProjectionMatrix()}let v=d.map.isWebGLCubeRenderTarget?6:1;for(let t=0;t<v;t++){if(d.map.isWebGLCubeRenderTarget)e.setRenderTarget(d.map,t),e.clear();else{t===0&&(e.setRenderTarget(d.map),e.clear());let n=d.getViewport(t);o.set(a.x*n.x,a.y*n.y,a.x*n.z,a.y*n.w),f.viewport(o)}if(l.isPointLight){let e=d.camera,n=d.matrix,r=l.distance||e.far;r!==e.far&&(e.far=r,e.updateProjectionMatrix()),Xd.setFromMatrixPosition(l.matrixWorld),e.position.copy(Xd),Zd.copy(e.position),Zd.add(qd[t]),e.up.copy(Jd[t]),e.lookAt(Zd),e.updateMatrixWorld(),n.makeTranslation(-Xd.x,-Xd.y,-Xd.z),Yd.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),d._frustum.setFromProjectionMatrix(Yd,e.coordinateSystem,e.reversedDepth)}else d.updateMatrices(l);r=d.getFrustum(),S(n,s,d.camera,l,this.type)}d.isPointLightShadow!==!0&&this.type===3&&b(d,s),d.needsUpdate=!1}y=this.type,v.needsUpdate=!1,e.setRenderTarget(c,l,d)};function b(n,r){let a=t.update(_);f.defines.VSM_SAMPLES!==n.blurSamples&&(f.defines.VSM_SAMPLES=n.blurSamples,m.defines.VSM_SAMPLES=n.blurSamples,f.needsUpdate=!0,m.needsUpdate=!0),n.mapPass===null&&(n.mapPass=new fn(i.x,i.y,{format:le,type:E})),f.uniforms.shadow_pass.value=n.map.depthTexture,f.uniforms.resolution.value=n.mapSize,f.uniforms.radius.value=n.radius,e.setRenderTarget(n.mapPass),e.clear(),e.renderBufferDirect(r,null,a,f,_,null),m.uniforms.shadow_pass.value=n.mapPass.texture,m.uniforms.resolution.value=n.mapSize,m.uniforms.radius.value=n.radius,e.setRenderTarget(n.map),e.clear(),e.renderBufferDirect(r,null,a,m,_,null)}function x(t,n,r,i){let a=null,o=r.isPointLight===!0?t.customDistanceMaterial:t.customDepthMaterial;if(o!==void 0)a=o;else if(a=r.isPointLight===!0?c:s,e.localClippingEnabled&&n.clipShadows===!0&&Array.isArray(n.clippingPlanes)&&n.clippingPlanes.length!==0||n.displacementMap&&n.displacementScale!==0||n.alphaMap&&n.alphaTest>0||n.map&&n.alphaTest>0||n.alphaToCoverage===!0){let e=a.uuid,t=n.uuid,r=l[e];r===void 0&&(r={},l[e]=r);let i=r[t];i===void 0&&(i=a.clone(),r[t]=i,n.addEventListener(`dispose`,C)),a=i}if(a.visible=n.visible,a.wireframe=n.wireframe,i===3?a.side=n.shadowSide===null?n.side:n.shadowSide:a.side=n.shadowSide===null?d[n.side]:n.shadowSide,a.alphaMap=n.alphaMap,a.alphaTest=n.alphaToCoverage===!0?.5:n.alphaTest,a.map=n.map,a.clipShadows=n.clipShadows,a.clippingPlanes=n.clippingPlanes,a.clipIntersection=n.clipIntersection,a.displacementMap=n.displacementMap,a.displacementScale=n.displacementScale,a.displacementBias=n.displacementBias,a.wireframeLinewidth=n.wireframeLinewidth,a.linewidth=n.linewidth,r.isPointLight===!0&&a.isMeshDistanceMaterial===!0){let t=e.properties.get(a);t.light=r}return a}function S(n,i,a,o,s){if(n.visible===!1)return;if(n.layers.test(i.layers)&&(n.isMesh||n.isLine||n.isPoints)&&(n.castShadow||n.receiveShadow&&s===3)&&(!n.frustumCulled||r.intersectsObject(n))){n.modelViewMatrix.multiplyMatrices(a.matrixWorldInverse,n.matrixWorld);let r=t.update(n),c=n.material;if(Array.isArray(c)){let t=r.groups;for(let l=0,u=t.length;l<u;l++){let u=t[l],d=c[u.materialIndex];if(d&&d.visible){let t=x(n,d,o,s);n.onBeforeShadow(e,n,i,a,r,t,u),e.renderBufferDirect(a,null,r,t,n,u),n.onAfterShadow(e,n,i,a,r,t,u)}}}else if(c.visible){let t=x(n,c,o,s);n.onBeforeShadow(e,n,i,a,r,t,null),e.renderBufferDirect(a,null,r,t,n,null),n.onAfterShadow(e,n,i,a,r,t,null)}}let c=n.children;for(let e=0,t=c.length;e<t;e++)S(c[e],i,a,o,s)}function C(e){e.target.removeEventListener(`dispose`,C);for(let t in l){let n=l[t],r=e.target.uuid;r in n&&(n[r].dispose(),delete n[r])}}}function $d(e,t){function n(){let t=!1,n=new un,r=null,i=new un(0,0,0,0);return{setMask:function(n){r!==n&&!t&&(e.colorMask(n,n,n,n),r=n)},setLocked:function(e){t=e},setClear:function(t,r,a,o,s){s===!0&&(t*=o,r*=o,a*=o),n.set(t,r,a,o),i.equals(n)===!1&&(e.clearColor(t,r,a,o),i.copy(n))},reset:function(){t=!1,r=null,i.set(-1,0,0,0)}}}function r(){let n=!1,r=!1,i=null,a=null,o=null;return{setReversed:function(e){if(r!==e){let n=t.get(`EXT_clip_control`);e?n.clipControlEXT(n.LOWER_LEFT_EXT,n.ZERO_TO_ONE_EXT):n.clipControlEXT(n.LOWER_LEFT_EXT,n.NEGATIVE_ONE_TO_ONE_EXT),r=e;let i=o;o=null,this.setClear(i)}},getReversed:function(){return r},setTest:function(t){t?me(e.DEPTH_TEST):he(e.DEPTH_TEST)},setMask:function(t){i!==t&&!n&&(e.depthMask(t),i=t)},setFunc:function(t){if(r&&(t=_t[t]),a!==t){switch(t){case 0:e.depthFunc(e.NEVER);break;case 1:e.depthFunc(e.ALWAYS);break;case 2:e.depthFunc(e.LESS);break;case 3:e.depthFunc(e.LEQUAL);break;case 4:e.depthFunc(e.EQUAL);break;case 5:e.depthFunc(e.GEQUAL);break;case 6:e.depthFunc(e.GREATER);break;case 7:e.depthFunc(e.NOTEQUAL);break;default:e.depthFunc(e.LEQUAL)}a=t}},setLocked:function(e){n=e},setClear:function(t){o!==t&&(o=t,r&&(t=1-t),e.clearDepth(t))},reset:function(){n=!1,i=null,a=null,o=null,r=!1}}}function i(){let t=!1,n=null,r=null,i=null,a=null,o=null,s=null,c=null,l=null;return{setTest:function(n){t||(n?me(e.STENCIL_TEST):he(e.STENCIL_TEST))},setMask:function(r){n!==r&&!t&&(e.stencilMask(r),n=r)},setFunc:function(t,n,o){(r!==t||i!==n||a!==o)&&(e.stencilFunc(t,n,o),r=t,i=n,a=o)},setOp:function(t,n,r){(o!==t||s!==n||c!==r)&&(e.stencilOp(t,n,r),o=t,s=n,c=r)},setLocked:function(e){t=e},setClear:function(t){l!==t&&(e.clearStencil(t),l=t)},reset:function(){t=!1,n=null,r=null,i=null,a=null,o=null,s=null,c=null,l=null}}}let a=new n,o=new r,s=new i,c=new WeakMap,l=new WeakMap,u={},d={},f={},p=new WeakMap,m=[],h=null,g=!1,_=null,v=null,y=null,b=null,x=null,S=null,C=null,w=new V(0,0,0),T=0,E=!1,D=null,ee=null,te=null,O=null,ne=null,re=e.getParameter(e.MAX_COMBINED_TEXTURE_IMAGE_UNITS),k=!1,ie=0,ae=e.getParameter(e.VERSION);ae.indexOf(`WebGL`)===-1?ae.indexOf(`OpenGL ES`)!==-1&&(ie=parseFloat(/^OpenGL ES (\d)/.exec(ae)[1]),k=ie>=2):(ie=parseFloat(/^WebGL (\d)/.exec(ae)[1]),k=ie>=1);let oe=null,se={},ce=e.getParameter(e.SCISSOR_BOX),le=e.getParameter(e.VIEWPORT),ue=new un().fromArray(ce),de=new un().fromArray(le);function fe(t,n,r,i){let a=new Uint8Array(4),o=e.createTexture();e.bindTexture(t,o),e.texParameteri(t,e.TEXTURE_MIN_FILTER,e.NEAREST),e.texParameteri(t,e.TEXTURE_MAG_FILTER,e.NEAREST);for(let o=0;o<r;o++)t===e.TEXTURE_3D||t===e.TEXTURE_2D_ARRAY?e.texImage3D(n,0,e.RGBA,1,1,i,0,e.RGBA,e.UNSIGNED_BYTE,a):e.texImage2D(n+o,0,e.RGBA,1,1,0,e.RGBA,e.UNSIGNED_BYTE,a);return o}let pe={};pe[e.TEXTURE_2D]=fe(e.TEXTURE_2D,e.TEXTURE_2D,1),pe[e.TEXTURE_CUBE_MAP]=fe(e.TEXTURE_CUBE_MAP,e.TEXTURE_CUBE_MAP_POSITIVE_X,6),pe[e.TEXTURE_2D_ARRAY]=fe(e.TEXTURE_2D_ARRAY,e.TEXTURE_2D_ARRAY,1,1),pe[e.TEXTURE_3D]=fe(e.TEXTURE_3D,e.TEXTURE_3D,1,1),a.setClear(0,0,0,1),o.setClear(1),s.setClear(0),me(e.DEPTH_TEST),o.setFunc(3),Ce(!1),we(1),me(e.CULL_FACE),xe(0);function me(t){u[t]!==!0&&(e.enable(t),u[t]=!0)}function he(t){u[t]!==!1&&(e.disable(t),u[t]=!1)}function ge(t,n){return f[t]===n?!1:(e.bindFramebuffer(t,n),f[t]=n,t===e.DRAW_FRAMEBUFFER&&(f[e.FRAMEBUFFER]=n),t===e.FRAMEBUFFER&&(f[e.DRAW_FRAMEBUFFER]=n),!0)}function _e(t,n){let r=m,i=!1;if(t){r=p.get(n),r===void 0&&(r=[],p.set(n,r));let a=t.textures;if(r.length!==a.length||r[0]!==e.COLOR_ATTACHMENT0){for(let t=0,n=a.length;t<n;t++)r[t]=e.COLOR_ATTACHMENT0+t;r.length=a.length,i=!0}}else r[0]!==e.BACK&&(r[0]=e.BACK,i=!0);i&&e.drawBuffers(r)}function ve(t){return h===t?!1:(e.useProgram(t),h=t,!0)}let ye={100:e.FUNC_ADD,101:e.FUNC_SUBTRACT,102:e.FUNC_REVERSE_SUBTRACT};ye[103]=e.MIN,ye[104]=e.MAX;let be={200:e.ZERO,201:e.ONE,202:e.SRC_COLOR,204:e.SRC_ALPHA,210:e.SRC_ALPHA_SATURATE,208:e.DST_COLOR,206:e.DST_ALPHA,203:e.ONE_MINUS_SRC_COLOR,205:e.ONE_MINUS_SRC_ALPHA,209:e.ONE_MINUS_DST_COLOR,207:e.ONE_MINUS_DST_ALPHA,211:e.CONSTANT_COLOR,212:e.ONE_MINUS_CONSTANT_COLOR,213:e.CONSTANT_ALPHA,214:e.ONE_MINUS_CONSTANT_ALPHA};function xe(t,n,r,i,a,o,s,c,l,u){if(t===0){g===!0&&(he(e.BLEND),g=!1);return}if(g===!1&&(me(e.BLEND),g=!0),t!==5){if(t!==_||u!==E){if((v!==100||x!==100)&&(e.blendEquation(e.FUNC_ADD),v=100,x=100),u)switch(t){case 1:e.blendFuncSeparate(e.ONE,e.ONE_MINUS_SRC_ALPHA,e.ONE,e.ONE_MINUS_SRC_ALPHA);break;case 2:e.blendFunc(e.ONE,e.ONE);break;case 3:e.blendFuncSeparate(e.ZERO,e.ONE_MINUS_SRC_COLOR,e.ZERO,e.ONE);break;case 4:e.blendFuncSeparate(e.DST_COLOR,e.ONE_MINUS_SRC_ALPHA,e.ZERO,e.ONE);break;default:P(`WebGLState: Invalid blending: `,t);break}else switch(t){case 1:e.blendFuncSeparate(e.SRC_ALPHA,e.ONE_MINUS_SRC_ALPHA,e.ONE,e.ONE_MINUS_SRC_ALPHA);break;case 2:e.blendFuncSeparate(e.SRC_ALPHA,e.ONE,e.ONE,e.ONE);break;case 3:P(`WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true`);break;case 4:P(`WebGLState: MultiplyBlending requires material.premultipliedAlpha = true`);break;default:P(`WebGLState: Invalid blending: `,t);break}y=null,b=null,S=null,C=null,w.set(0,0,0),T=0,_=t,E=u}return}a=a||n,o=o||r,s=s||i,(n!==v||a!==x)&&(e.blendEquationSeparate(ye[n],ye[a]),v=n,x=a),(r!==y||i!==b||o!==S||s!==C)&&(e.blendFuncSeparate(be[r],be[i],be[o],be[s]),y=r,b=i,S=o,C=s),(c.equals(w)===!1||l!==T)&&(e.blendColor(c.r,c.g,c.b,l),w.copy(c),T=l),_=t,E=!1}function Se(t,n){t.side===2?he(e.CULL_FACE):me(e.CULL_FACE);let r=t.side===1;n&&(r=!r),Ce(r),t.blending===1&&t.transparent===!1?xe(0):xe(t.blending,t.blendEquation,t.blendSrc,t.blendDst,t.blendEquationAlpha,t.blendSrcAlpha,t.blendDstAlpha,t.blendColor,t.blendAlpha,t.premultipliedAlpha),o.setFunc(t.depthFunc),o.setTest(t.depthTest),o.setMask(t.depthWrite),a.setMask(t.colorWrite);let i=t.stencilWrite;s.setTest(i),i&&(s.setMask(t.stencilWriteMask),s.setFunc(t.stencilFunc,t.stencilRef,t.stencilFuncMask),s.setOp(t.stencilFail,t.stencilZFail,t.stencilZPass)),Ee(t.polygonOffset,t.polygonOffsetFactor,t.polygonOffsetUnits),t.alphaToCoverage===!0?me(e.SAMPLE_ALPHA_TO_COVERAGE):he(e.SAMPLE_ALPHA_TO_COVERAGE)}function Ce(t){D!==t&&(t?e.frontFace(e.CW):e.frontFace(e.CCW),D=t)}function we(t){t===0?he(e.CULL_FACE):(me(e.CULL_FACE),t!==ee&&(t===1?e.cullFace(e.BACK):t===2?e.cullFace(e.FRONT):e.cullFace(e.FRONT_AND_BACK))),ee=t}function Te(t){t!==te&&(k&&e.lineWidth(t),te=t)}function Ee(t,n,r){t?(me(e.POLYGON_OFFSET_FILL),(O!==n||ne!==r)&&(O=n,ne=r,o.getReversed()&&(n=-n),e.polygonOffset(n,r))):he(e.POLYGON_OFFSET_FILL)}function De(t){t?me(e.SCISSOR_TEST):he(e.SCISSOR_TEST)}function Oe(t){t===void 0&&(t=e.TEXTURE0+re-1),oe!==t&&(e.activeTexture(t),oe=t)}function ke(t,n,r){r===void 0&&(r=oe===null?e.TEXTURE0+re-1:oe);let i=se[r];i===void 0&&(i={type:void 0,texture:void 0},se[r]=i),(i.type!==t||i.texture!==n)&&(oe!==r&&(e.activeTexture(r),oe=r),e.bindTexture(t,n||pe[t]),i.type=t,i.texture=n)}function Ae(){let t=se[oe];t!==void 0&&t.type!==void 0&&(e.bindTexture(t.type,null),t.type=void 0,t.texture=void 0)}function je(){try{e.compressedTexImage2D(...arguments)}catch(e){P(`WebGLState:`,e)}}function Me(){try{e.compressedTexImage3D(...arguments)}catch(e){P(`WebGLState:`,e)}}function Ne(){try{e.texSubImage2D(...arguments)}catch(e){P(`WebGLState:`,e)}}function Pe(){try{e.texSubImage3D(...arguments)}catch(e){P(`WebGLState:`,e)}}function Fe(){try{e.compressedTexSubImage2D(...arguments)}catch(e){P(`WebGLState:`,e)}}function A(){try{e.compressedTexSubImage3D(...arguments)}catch(e){P(`WebGLState:`,e)}}function Ie(){try{e.texStorage2D(...arguments)}catch(e){P(`WebGLState:`,e)}}function Le(){try{e.texStorage3D(...arguments)}catch(e){P(`WebGLState:`,e)}}function Re(){try{e.texImage2D(...arguments)}catch(e){P(`WebGLState:`,e)}}function j(){try{e.texImage3D(...arguments)}catch(e){P(`WebGLState:`,e)}}function ze(t){return d[t]===void 0?e.getParameter(t):d[t]}function M(t,n){d[t]!==n&&(e.pixelStorei(t,n),d[t]=n)}function Be(t){ue.equals(t)===!1&&(e.scissor(t.x,t.y,t.z,t.w),ue.copy(t))}function Ve(t){de.equals(t)===!1&&(e.viewport(t.x,t.y,t.z,t.w),de.copy(t))}function He(t,n){let r=l.get(n);r===void 0&&(r=new WeakMap,l.set(n,r));let i=r.get(t);i===void 0&&(i=e.getUniformBlockIndex(n,t.name),r.set(t,i))}function Ue(t,n){let r=l.get(n).get(t);c.get(n)!==r&&(e.uniformBlockBinding(n,r,t.__bindingPointIndex),c.set(n,r))}function We(){e.disable(e.BLEND),e.disable(e.CULL_FACE),e.disable(e.DEPTH_TEST),e.disable(e.POLYGON_OFFSET_FILL),e.disable(e.SCISSOR_TEST),e.disable(e.STENCIL_TEST),e.disable(e.SAMPLE_ALPHA_TO_COVERAGE),e.blendEquation(e.FUNC_ADD),e.blendFunc(e.ONE,e.ZERO),e.blendFuncSeparate(e.ONE,e.ZERO,e.ONE,e.ZERO),e.blendColor(0,0,0,0),e.colorMask(!0,!0,!0,!0),e.clearColor(0,0,0,0),e.depthMask(!0),e.depthFunc(e.LESS),o.setReversed(!1),e.clearDepth(1),e.stencilMask(4294967295),e.stencilFunc(e.ALWAYS,0,4294967295),e.stencilOp(e.KEEP,e.KEEP,e.KEEP),e.clearStencil(0),e.cullFace(e.BACK),e.frontFace(e.CCW),e.polygonOffset(0,0),e.activeTexture(e.TEXTURE0),e.bindFramebuffer(e.FRAMEBUFFER,null),e.bindFramebuffer(e.DRAW_FRAMEBUFFER,null),e.bindFramebuffer(e.READ_FRAMEBUFFER,null),e.useProgram(null),e.lineWidth(1),e.scissor(0,0,e.canvas.width,e.canvas.height),e.viewport(0,0,e.canvas.width,e.canvas.height),e.pixelStorei(e.PACK_ALIGNMENT,4),e.pixelStorei(e.UNPACK_ALIGNMENT,4),e.pixelStorei(e.UNPACK_FLIP_Y_WEBGL,!1),e.pixelStorei(e.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),e.pixelStorei(e.UNPACK_COLORSPACE_CONVERSION_WEBGL,e.BROWSER_DEFAULT_WEBGL),e.pixelStorei(e.PACK_ROW_LENGTH,0),e.pixelStorei(e.PACK_SKIP_PIXELS,0),e.pixelStorei(e.PACK_SKIP_ROWS,0),e.pixelStorei(e.UNPACK_ROW_LENGTH,0),e.pixelStorei(e.UNPACK_IMAGE_HEIGHT,0),e.pixelStorei(e.UNPACK_SKIP_PIXELS,0),e.pixelStorei(e.UNPACK_SKIP_ROWS,0),e.pixelStorei(e.UNPACK_SKIP_IMAGES,0),u={},d={},oe=null,se={},f={},p=new WeakMap,m=[],h=null,g=!1,_=null,v=null,y=null,b=null,x=null,S=null,C=null,w=new V(0,0,0),T=0,E=!1,D=null,ee=null,te=null,O=null,ne=null,ue.set(0,0,e.canvas.width,e.canvas.height),de.set(0,0,e.canvas.width,e.canvas.height),a.reset(),o.reset(),s.reset()}return{buffers:{color:a,depth:o,stencil:s},enable:me,disable:he,bindFramebuffer:ge,drawBuffers:_e,useProgram:ve,setBlending:xe,setMaterial:Se,setFlipSided:Ce,setCullFace:we,setLineWidth:Te,setPolygonOffset:Ee,setScissorTest:De,activeTexture:Oe,bindTexture:ke,unbindTexture:Ae,compressedTexImage2D:je,compressedTexImage3D:Me,texImage2D:Re,texImage3D:j,pixelStorei:M,getParameter:ze,updateUBOMapping:He,uniformBlockBinding:Ue,texStorage2D:Ie,texStorage3D:Le,texSubImage2D:Ne,texSubImage3D:Pe,compressedTexSubImage2D:Fe,compressedTexSubImage3D:A,scissor:Be,viewport:Ve,reset:We}}function ef(e,t,n,r,i,a,o){let s=t.has(`WEBGL_multisampled_render_to_texture`)?t.get(`WEBGL_multisampled_render_to_texture`):null,c=typeof navigator>`u`?!1:/OculusBrowser/g.test(navigator.userAgent),l=new I,y=new WeakMap,b=new Set,x,S=new WeakMap,C=!1;try{C=typeof OffscreenCanvas<`u`&&new OffscreenCanvas(1,1).getContext(`2d`)!==null}catch{}function w(e,t){return C?new OffscreenCanvas(e,t):lt(`canvas`)}function T(e,t,n){let r=1,i=ze(e);if((i.width>n||i.height>n)&&(r=n/Math.max(i.width,i.height)),r<1)if(typeof HTMLImageElement<`u`&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<`u`&&e instanceof HTMLCanvasElement||typeof ImageBitmap<`u`&&e instanceof ImageBitmap||typeof VideoFrame<`u`&&e instanceof VideoFrame){let n=Math.floor(r*i.width),a=Math.floor(r*i.height);x===void 0&&(x=w(n,a));let o=t?w(n,a):x;return o.width=n,o.height=a,o.getContext(`2d`).drawImage(e,0,0,n,a),N(`WebGLRenderer: Texture has been resized from (`+i.width+`x`+i.height+`) to (`+n+`x`+a+`).`),o}else return`data`in e&&N(`WebGLRenderer: Image in DataTexture is too big (`+i.width+`x`+i.height+`).`),e;return e}function E(e){return e.generateMipmaps}function D(t){e.generateMipmap(t)}function ee(t){return t.isWebGLCubeRenderTarget?e.TEXTURE_CUBE_MAP:t.isWebGL3DRenderTarget?e.TEXTURE_3D:t.isWebGLArrayRenderTarget||t.isCompressedArrayTexture?e.TEXTURE_2D_ARRAY:e.TEXTURE_2D}function te(n,r,i,a,o,s=!1){if(n!==null){if(e[n]!==void 0)return e[n];N(`WebGLRenderer: Attempt to use non-existing WebGL internal format '`+n+`'`)}let c;a&&(c=t.get(`EXT_texture_norm16`),c||N(`WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension`));let l=r;if(r===e.RED&&(i===e.FLOAT&&(l=e.R32F),i===e.HALF_FLOAT&&(l=e.R16F),i===e.UNSIGNED_BYTE&&(l=e.R8),i===e.UNSIGNED_SHORT&&c&&(l=c.R16_EXT),i===e.SHORT&&c&&(l=c.R16_SNORM_EXT)),r===e.RED_INTEGER&&(i===e.UNSIGNED_BYTE&&(l=e.R8UI),i===e.UNSIGNED_SHORT&&(l=e.R16UI),i===e.UNSIGNED_INT&&(l=e.R32UI),i===e.BYTE&&(l=e.R8I),i===e.SHORT&&(l=e.R16I),i===e.INT&&(l=e.R32I)),r===e.RG&&(i===e.FLOAT&&(l=e.RG32F),i===e.HALF_FLOAT&&(l=e.RG16F),i===e.UNSIGNED_BYTE&&(l=e.RG8),i===e.UNSIGNED_SHORT&&c&&(l=c.RG16_EXT),i===e.SHORT&&c&&(l=c.RG16_SNORM_EXT)),r===e.RG_INTEGER&&(i===e.UNSIGNED_BYTE&&(l=e.RG8UI),i===e.UNSIGNED_SHORT&&(l=e.RG16UI),i===e.UNSIGNED_INT&&(l=e.RG32UI),i===e.BYTE&&(l=e.RG8I),i===e.SHORT&&(l=e.RG16I),i===e.INT&&(l=e.RG32I)),r===e.RGB_INTEGER&&(i===e.UNSIGNED_BYTE&&(l=e.RGB8UI),i===e.UNSIGNED_SHORT&&(l=e.RGB16UI),i===e.UNSIGNED_INT&&(l=e.RGB32UI),i===e.BYTE&&(l=e.RGB8I),i===e.SHORT&&(l=e.RGB16I),i===e.INT&&(l=e.RGB32I)),r===e.RGBA_INTEGER&&(i===e.UNSIGNED_BYTE&&(l=e.RGBA8UI),i===e.UNSIGNED_SHORT&&(l=e.RGBA16UI),i===e.UNSIGNED_INT&&(l=e.RGBA32UI),i===e.BYTE&&(l=e.RGBA8I),i===e.SHORT&&(l=e.RGBA16I),i===e.INT&&(l=e.RGBA32I)),r===e.RGB&&(i===e.UNSIGNED_SHORT&&c&&(l=c.RGB16_EXT),i===e.SHORT&&c&&(l=c.RGB16_SNORM_EXT),i===e.UNSIGNED_INT_5_9_9_9_REV&&(l=e.RGB9_E5),i===e.UNSIGNED_INT_10F_11F_11F_REV&&(l=e.R11F_G11F_B10F)),r===e.RGBA){let t=s?nt:Qt.getTransfer(o);i===e.FLOAT&&(l=e.RGBA32F),i===e.HALF_FLOAT&&(l=e.RGBA16F),i===e.UNSIGNED_BYTE&&(l=t===`srgb`?e.SRGB8_ALPHA8:e.RGBA8),i===e.UNSIGNED_SHORT&&c&&(l=c.RGBA16_EXT),i===e.SHORT&&c&&(l=c.RGBA16_SNORM_EXT),i===e.UNSIGNED_SHORT_4_4_4_4&&(l=e.RGBA4),i===e.UNSIGNED_SHORT_5_5_5_1&&(l=e.RGB5_A1)}return(l===e.R16F||l===e.R32F||l===e.RG16F||l===e.RG32F||l===e.RGBA16F||l===e.RGBA32F)&&t.get(`EXT_color_buffer_float`),l}function O(t,n){let r;return t?n===null||n===1014||n===1020?r=e.DEPTH24_STENCIL8:n===1015?r=e.DEPTH32F_STENCIL8:n===1012&&(r=e.DEPTH24_STENCIL8,N(`DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.`)):n===null||n===1014||n===1020?r=e.DEPTH_COMPONENT24:n===1015?r=e.DEPTH_COMPONENT32F:n===1012&&(r=e.DEPTH_COMPONENT16),r}function ne(e,t){return E(e)===!0||e.isFramebufferTexture&&e.minFilter!==1003&&e.minFilter!==1006?Math.log2(Math.max(t.width,t.height))+1:e.mipmaps!==void 0&&e.mipmaps.length>0?e.mipmaps.length:e.isCompressedTexture&&Array.isArray(e.image)?t.mipmaps.length:1}function re(e){let t=e.target;t.removeEventListener(`dispose`,re),ie(t),t.isVideoTexture&&y.delete(t),t.isHTMLTexture&&b.delete(t)}function k(e){let t=e.target;t.removeEventListener(`dispose`,k),se(t)}function ie(e){let t=r.get(e);if(t.__webglInit===void 0)return;let n=e.source,i=S.get(n);if(i){let r=i[t.__cacheKey];r.usedTimes--,r.usedTimes===0&&ae(e),Object.keys(i).length===0&&S.delete(n)}r.remove(e)}function ae(t){let n=r.get(t);e.deleteTexture(n.__webglTexture);let i=t.source,a=S.get(i);delete a[n.__cacheKey],o.memory.textures--}function se(t){let n=r.get(t);if(t.depthTexture&&(t.depthTexture.dispose(),r.remove(t.depthTexture)),t.isWebGLCubeRenderTarget)for(let t=0;t<6;t++){if(Array.isArray(n.__webglFramebuffer[t]))for(let r=0;r<n.__webglFramebuffer[t].length;r++)e.deleteFramebuffer(n.__webglFramebuffer[t][r]);else e.deleteFramebuffer(n.__webglFramebuffer[t]);n.__webglDepthbuffer&&e.deleteRenderbuffer(n.__webglDepthbuffer[t])}else{if(Array.isArray(n.__webglFramebuffer))for(let t=0;t<n.__webglFramebuffer.length;t++)e.deleteFramebuffer(n.__webglFramebuffer[t]);else e.deleteFramebuffer(n.__webglFramebuffer);if(n.__webglDepthbuffer&&e.deleteRenderbuffer(n.__webglDepthbuffer),n.__webglMultisampledFramebuffer&&e.deleteFramebuffer(n.__webglMultisampledFramebuffer),n.__webglColorRenderbuffer)for(let t=0;t<n.__webglColorRenderbuffer.length;t++)n.__webglColorRenderbuffer[t]&&e.deleteRenderbuffer(n.__webglColorRenderbuffer[t]);n.__webglDepthRenderbuffer&&e.deleteRenderbuffer(n.__webglDepthRenderbuffer)}let i=t.textures;for(let t=0,n=i.length;t<n;t++){let n=r.get(i[t]);n.__webglTexture&&(e.deleteTexture(n.__webglTexture),o.memory.textures--),r.remove(i[t])}r.remove(t)}let ce=0;function le(){ce=0}function ue(){return ce}function de(e){ce=e}function fe(){let e=ce;return e>=i.maxTextures&&N(`WebGLTextures: Trying to use `+e+` texture units while this GPU supports only `+i.maxTextures),ce+=1,e}function pe(e){let t=[];return t.push(e.wrapS),t.push(e.wrapT),t.push(e.wrapR||0),t.push(e.magFilter),t.push(e.minFilter),t.push(e.anisotropy),t.push(e.internalFormat),t.push(e.format),t.push(e.type),t.push(e.generateMipmaps),t.push(e.premultiplyAlpha),t.push(e.flipY),t.push(e.unpackAlignment),t.push(e.colorSpace),t.join()}function me(t,i){let a=r.get(t);if(t.isVideoTexture&&Re(t),t.isRenderTargetTexture===!1&&t.isExternalTexture!==!0&&t.version>0&&a.__version!==t.version){let e=t.image;if(e===null)N(`WebGLRenderer: Texture marked for update but no image data found.`);else if(e.complete===!1)N(`WebGLRenderer: Texture marked for update but image is incomplete`);else{Te(a,t,i);return}}else t.isExternalTexture&&(a.__webglTexture=t.sourceTexture?t.sourceTexture:null);n.bindTexture(e.TEXTURE_2D,a.__webglTexture,e.TEXTURE0+i)}function he(t,i){let a=r.get(t);if(t.isRenderTargetTexture===!1&&t.version>0&&a.__version!==t.version){Te(a,t,i);return}else t.isExternalTexture&&(a.__webglTexture=t.sourceTexture?t.sourceTexture:null);n.bindTexture(e.TEXTURE_2D_ARRAY,a.__webglTexture,e.TEXTURE0+i)}function ge(t,i){let a=r.get(t);if(t.isRenderTargetTexture===!1&&t.version>0&&a.__version!==t.version){Te(a,t,i);return}n.bindTexture(e.TEXTURE_3D,a.__webglTexture,e.TEXTURE0+i)}function _e(t,i){let a=r.get(t);if(t.isCubeDepthTexture!==!0&&t.version>0&&a.__version!==t.version){Ee(a,t,i);return}n.bindTexture(e.TEXTURE_CUBE_MAP,a.__webglTexture,e.TEXTURE0+i)}let ve={[u]:e.REPEAT,[d]:e.CLAMP_TO_EDGE,[f]:e.MIRRORED_REPEAT},ye={[p]:e.NEAREST,[m]:e.NEAREST_MIPMAP_NEAREST,[h]:e.NEAREST_MIPMAP_LINEAR,[g]:e.LINEAR,[_]:e.LINEAR_MIPMAP_NEAREST,[v]:e.LINEAR_MIPMAP_LINEAR},be={512:e.NEVER,519:e.ALWAYS,513:e.LESS,515:e.LEQUAL,514:e.EQUAL,518:e.GEQUAL,516:e.GREATER,517:e.NOTEQUAL};function xe(n,a){if(a.type===1015&&t.has(`OES_texture_float_linear`)===!1&&(a.magFilter===1006||a.magFilter===1007||a.magFilter===1005||a.magFilter===1008||a.minFilter===1006||a.minFilter===1007||a.minFilter===1005||a.minFilter===1008)&&N(`WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device.`),e.texParameteri(n,e.TEXTURE_WRAP_S,ve[a.wrapS]),e.texParameteri(n,e.TEXTURE_WRAP_T,ve[a.wrapT]),(n===e.TEXTURE_3D||n===e.TEXTURE_2D_ARRAY)&&e.texParameteri(n,e.TEXTURE_WRAP_R,ve[a.wrapR]),e.texParameteri(n,e.TEXTURE_MAG_FILTER,ye[a.magFilter]),e.texParameteri(n,e.TEXTURE_MIN_FILTER,ye[a.minFilter]),a.compareFunction&&(e.texParameteri(n,e.TEXTURE_COMPARE_MODE,e.COMPARE_REF_TO_TEXTURE),e.texParameteri(n,e.TEXTURE_COMPARE_FUNC,be[a.compareFunction])),t.has(`EXT_texture_filter_anisotropic`)===!0){if(a.magFilter===1003||a.minFilter!==1005&&a.minFilter!==1008||a.type===1015&&t.has(`OES_texture_float_linear`)===!1)return;if(a.anisotropy>1||r.get(a).__currentAnisotropy){let o=t.get(`EXT_texture_filter_anisotropic`);e.texParameterf(n,o.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(a.anisotropy,i.getMaxAnisotropy())),r.get(a).__currentAnisotropy=a.anisotropy}}}function Se(t,n){let r=!1;t.__webglInit===void 0&&(t.__webglInit=!0,n.addEventListener(`dispose`,re));let i=n.source,a=S.get(i);a===void 0&&(a={},S.set(i,a));let s=pe(n);if(s!==t.__cacheKey){a[s]===void 0&&(a[s]={texture:e.createTexture(),usedTimes:0},o.memory.textures++,r=!0),a[s].usedTimes++;let i=a[t.__cacheKey];i!==void 0&&(a[t.__cacheKey].usedTimes--,i.usedTimes===0&&ae(n)),t.__cacheKey=s,t.__webglTexture=a[s].texture}return r}function Ce(e,t,n){return Math.floor(Math.floor(e/n)/t)}function we(t,r,i,a){let o=t.updateRanges;if(o.length===0)n.texSubImage2D(e.TEXTURE_2D,0,0,0,r.width,r.height,i,a,r.data);else{o.sort((e,t)=>e.start-t.start);let s=0;for(let e=1;e<o.length;e++){let t=o[s],n=o[e],i=t.start+t.count,a=Ce(n.start,r.width,4),c=Ce(t.start,r.width,4);n.start<=i+1&&a===c&&Ce(n.start+n.count-1,r.width,4)===a?t.count=Math.max(t.count,n.start+n.count-t.start):(++s,o[s]=n)}o.length=s+1;let c=n.getParameter(e.UNPACK_ROW_LENGTH),l=n.getParameter(e.UNPACK_SKIP_PIXELS),u=n.getParameter(e.UNPACK_SKIP_ROWS);n.pixelStorei(e.UNPACK_ROW_LENGTH,r.width);for(let t=0,s=o.length;t<s;t++){let s=o[t],c=Math.floor(s.start/4),l=Math.ceil(s.count/4),u=c%r.width,d=Math.floor(c/r.width),f=l;n.pixelStorei(e.UNPACK_SKIP_PIXELS,u),n.pixelStorei(e.UNPACK_SKIP_ROWS,d),n.texSubImage2D(e.TEXTURE_2D,0,u,d,f,1,i,a,r.data)}t.clearUpdateRanges(),n.pixelStorei(e.UNPACK_ROW_LENGTH,c),n.pixelStorei(e.UNPACK_SKIP_PIXELS,l),n.pixelStorei(e.UNPACK_SKIP_ROWS,u)}}function Te(t,o,s){let c=e.TEXTURE_2D;(o.isDataArrayTexture||o.isCompressedArrayTexture)&&(c=e.TEXTURE_2D_ARRAY),o.isData3DTexture&&(c=e.TEXTURE_3D);let l=Se(t,o),u=o.source;n.bindTexture(c,t.__webglTexture,e.TEXTURE0+s);let d=r.get(u);if(u.version!==d.__version||l===!0){if(n.activeTexture(e.TEXTURE0+s),!(typeof ImageBitmap<`u`&&o.image instanceof ImageBitmap)){let t=Qt.getPrimaries(Qt.workingColorSpace),r=o.colorSpace===``?null:Qt.getPrimaries(o.colorSpace),i=o.colorSpace===``||t===r?e.NONE:e.BROWSER_DEFAULT_WEBGL;n.pixelStorei(e.UNPACK_FLIP_Y_WEBGL,o.flipY),n.pixelStorei(e.UNPACK_PREMULTIPLY_ALPHA_WEBGL,o.premultiplyAlpha),n.pixelStorei(e.UNPACK_COLORSPACE_CONVERSION_WEBGL,i)}n.pixelStorei(e.UNPACK_ALIGNMENT,o.unpackAlignment);let t=T(o.image,!1,i.maxTextureSize);t=j(o,t);let r=a.convert(o.format,o.colorSpace),f=a.convert(o.type),p=te(o.internalFormat,r,f,o.normalized,o.colorSpace,o.isVideoTexture);xe(c,o);let m,h=o.mipmaps,g=o.isVideoTexture!==!0,_=d.__version===void 0||l===!0,v=u.dataReady,y=ne(o,t);if(o.isDepthTexture)p=O(o.format===oe,o.type),_&&(g?n.texStorage2D(e.TEXTURE_2D,1,p,t.width,t.height):n.texImage2D(e.TEXTURE_2D,0,p,t.width,t.height,0,r,f,null));else if(o.isDataTexture)if(h.length>0){g&&_&&n.texStorage2D(e.TEXTURE_2D,y,p,h[0].width,h[0].height);for(let t=0,i=h.length;t<i;t++)m=h[t],g?v&&n.texSubImage2D(e.TEXTURE_2D,t,0,0,m.width,m.height,r,f,m.data):n.texImage2D(e.TEXTURE_2D,t,p,m.width,m.height,0,r,f,m.data);o.generateMipmaps=!1}else g?(_&&n.texStorage2D(e.TEXTURE_2D,y,p,t.width,t.height),v&&we(o,t,r,f)):n.texImage2D(e.TEXTURE_2D,0,p,t.width,t.height,0,r,f,t.data);else if(o.isCompressedTexture)if(o.isCompressedArrayTexture){g&&_&&n.texStorage3D(e.TEXTURE_2D_ARRAY,y,p,h[0].width,h[0].height,t.depth);for(let i=0,a=h.length;i<a;i++)if(m=h[i],o.format!==1023)if(r!==null)if(g){if(v)if(o.layerUpdates.size>0){let t=Xc(m.width,m.height,o.format,o.type);for(let a of o.layerUpdates){let o=m.data.subarray(a*t/m.data.BYTES_PER_ELEMENT,(a+1)*t/m.data.BYTES_PER_ELEMENT);n.compressedTexSubImage3D(e.TEXTURE_2D_ARRAY,i,0,0,a,m.width,m.height,1,r,o)}o.clearLayerUpdates()}else n.compressedTexSubImage3D(e.TEXTURE_2D_ARRAY,i,0,0,0,m.width,m.height,t.depth,r,m.data)}else n.compressedTexImage3D(e.TEXTURE_2D_ARRAY,i,p,m.width,m.height,t.depth,0,m.data,0,0);else N(`WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()`);else g?v&&n.texSubImage3D(e.TEXTURE_2D_ARRAY,i,0,0,0,m.width,m.height,t.depth,r,f,m.data):n.texImage3D(e.TEXTURE_2D_ARRAY,i,p,m.width,m.height,t.depth,0,r,f,m.data)}else{g&&_&&n.texStorage2D(e.TEXTURE_2D,y,p,h[0].width,h[0].height);for(let t=0,i=h.length;t<i;t++)m=h[t],o.format===1023?g?v&&n.texSubImage2D(e.TEXTURE_2D,t,0,0,m.width,m.height,r,f,m.data):n.texImage2D(e.TEXTURE_2D,t,p,m.width,m.height,0,r,f,m.data):r===null?N(`WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()`):g?v&&n.compressedTexSubImage2D(e.TEXTURE_2D,t,0,0,m.width,m.height,r,m.data):n.compressedTexImage2D(e.TEXTURE_2D,t,p,m.width,m.height,0,m.data)}else if(o.isDataArrayTexture)if(g){if(_&&n.texStorage3D(e.TEXTURE_2D_ARRAY,y,p,t.width,t.height,t.depth),v)if(o.layerUpdates.size>0){let i=Xc(t.width,t.height,o.format,o.type);for(let a of o.layerUpdates){let o=t.data.subarray(a*i/t.data.BYTES_PER_ELEMENT,(a+1)*i/t.data.BYTES_PER_ELEMENT);n.texSubImage3D(e.TEXTURE_2D_ARRAY,0,0,0,a,t.width,t.height,1,r,f,o)}o.clearLayerUpdates()}else n.texSubImage3D(e.TEXTURE_2D_ARRAY,0,0,0,0,t.width,t.height,t.depth,r,f,t.data)}else n.texImage3D(e.TEXTURE_2D_ARRAY,0,p,t.width,t.height,t.depth,0,r,f,t.data);else if(o.isData3DTexture)g?(_&&n.texStorage3D(e.TEXTURE_3D,y,p,t.width,t.height,t.depth),v&&n.texSubImage3D(e.TEXTURE_3D,0,0,0,0,t.width,t.height,t.depth,r,f,t.data)):n.texImage3D(e.TEXTURE_3D,0,p,t.width,t.height,t.depth,0,r,f,t.data);else if(o.isFramebufferTexture){if(_)if(g)n.texStorage2D(e.TEXTURE_2D,y,p,t.width,t.height);else{let i=t.width,a=t.height;for(let t=0;t<y;t++)n.texImage2D(e.TEXTURE_2D,t,p,i,a,0,r,f,null),i>>=1,a>>=1}}else if(o.isHTMLTexture){if(`texElementImage2D`in e){let n=e.canvas;if(n.hasAttribute(`layoutsubtree`)||n.setAttribute(`layoutsubtree`,`true`),t.parentNode!==n){n.appendChild(t),b.add(o),n.onpaint=e=>{let t=e.changedElements;for(let e of b)t.includes(e.image)&&(e.needsUpdate=!0)},n.requestPaint();return}let r=e.RGBA,i=e.RGBA,a=e.UNSIGNED_BYTE;e.texElementImage2D(e.TEXTURE_2D,0,r,i,a,t),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_MIN_FILTER,e.LINEAR),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_WRAP_S,e.CLAMP_TO_EDGE),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_WRAP_T,e.CLAMP_TO_EDGE)}}else if(h.length>0){if(g&&_){let t=ze(h[0]);n.texStorage2D(e.TEXTURE_2D,y,p,t.width,t.height)}for(let t=0,i=h.length;t<i;t++)m=h[t],g?v&&n.texSubImage2D(e.TEXTURE_2D,t,0,0,r,f,m):n.texImage2D(e.TEXTURE_2D,t,p,r,f,m);o.generateMipmaps=!1}else if(g){if(_){let r=ze(t);n.texStorage2D(e.TEXTURE_2D,y,p,r.width,r.height)}v&&n.texSubImage2D(e.TEXTURE_2D,0,0,0,r,f,t)}else n.texImage2D(e.TEXTURE_2D,0,p,r,f,t);E(o)&&D(c),d.__version=u.version,o.onUpdate&&o.onUpdate(o)}t.__version=o.version}function Ee(t,o,s){if(o.image.length!==6)return;let c=Se(t,o),l=o.source;n.bindTexture(e.TEXTURE_CUBE_MAP,t.__webglTexture,e.TEXTURE0+s);let u=r.get(l);if(l.version!==u.__version||c===!0){n.activeTexture(e.TEXTURE0+s);let t=Qt.getPrimaries(Qt.workingColorSpace),r=o.colorSpace===``?null:Qt.getPrimaries(o.colorSpace),d=o.colorSpace===``||t===r?e.NONE:e.BROWSER_DEFAULT_WEBGL;n.pixelStorei(e.UNPACK_FLIP_Y_WEBGL,o.flipY),n.pixelStorei(e.UNPACK_PREMULTIPLY_ALPHA_WEBGL,o.premultiplyAlpha),n.pixelStorei(e.UNPACK_ALIGNMENT,o.unpackAlignment),n.pixelStorei(e.UNPACK_COLORSPACE_CONVERSION_WEBGL,d);let f=o.isCompressedTexture||o.image[0].isCompressedTexture,p=o.image[0]&&o.image[0].isDataTexture,m=[];for(let e=0;e<6;e++)!f&&!p?m[e]=T(o.image[e],!0,i.maxCubemapSize):m[e]=p?o.image[e].image:o.image[e],m[e]=j(o,m[e]);let h=m[0],g=a.convert(o.format,o.colorSpace),_=a.convert(o.type),v=te(o.internalFormat,g,_,o.normalized,o.colorSpace),y=o.isVideoTexture!==!0,b=u.__version===void 0||c===!0,x=l.dataReady,S=ne(o,h);xe(e.TEXTURE_CUBE_MAP,o);let C;if(f){y&&b&&n.texStorage2D(e.TEXTURE_CUBE_MAP,S,v,h.width,h.height);for(let t=0;t<6;t++){C=m[t].mipmaps;for(let r=0;r<C.length;r++){let i=C[r];o.format===1023?y?x&&n.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+t,r,0,0,i.width,i.height,g,_,i.data):n.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+t,r,v,i.width,i.height,0,g,_,i.data):g===null?N(`WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()`):y?x&&n.compressedTexSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+t,r,0,0,i.width,i.height,g,i.data):n.compressedTexImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+t,r,v,i.width,i.height,0,i.data)}}}else{if(C=o.mipmaps,y&&b){C.length>0&&S++;let t=ze(m[0]);n.texStorage2D(e.TEXTURE_CUBE_MAP,S,v,t.width,t.height)}for(let t=0;t<6;t++)if(p){y?x&&n.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+t,0,0,0,m[t].width,m[t].height,g,_,m[t].data):n.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+t,0,v,m[t].width,m[t].height,0,g,_,m[t].data);for(let r=0;r<C.length;r++){let i=C[r].image[t].image;y?x&&n.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+t,r+1,0,0,i.width,i.height,g,_,i.data):n.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+t,r+1,v,i.width,i.height,0,g,_,i.data)}}else{y?x&&n.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+t,0,0,0,g,_,m[t]):n.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+t,0,v,g,_,m[t]);for(let r=0;r<C.length;r++){let i=C[r];y?x&&n.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+t,r+1,0,0,g,_,i.image[t]):n.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+t,r+1,v,g,_,i.image[t])}}}E(o)&&D(e.TEXTURE_CUBE_MAP),u.__version=l.version,o.onUpdate&&o.onUpdate(o)}t.__version=o.version}function De(t,i,o,c,l,u){let d=a.convert(o.format,o.colorSpace),f=a.convert(o.type),p=te(o.internalFormat,d,f,o.normalized,o.colorSpace),m=r.get(i),h=r.get(o);if(h.__renderTarget=i,!m.__hasExternalTextures){let t=Math.max(1,i.width>>u),r=Math.max(1,i.height>>u);l===e.TEXTURE_3D||l===e.TEXTURE_2D_ARRAY?n.texImage3D(l,u,p,t,r,i.depth,0,d,f,null):n.texImage2D(l,u,p,t,r,0,d,f,null)}n.bindFramebuffer(e.FRAMEBUFFER,t),Le(i)?s.framebufferTexture2DMultisampleEXT(e.FRAMEBUFFER,c,l,h.__webglTexture,0,Ie(i)):(l===e.TEXTURE_2D||l>=e.TEXTURE_CUBE_MAP_POSITIVE_X&&l<=e.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&e.framebufferTexture2D(e.FRAMEBUFFER,c,l,h.__webglTexture,u),n.bindFramebuffer(e.FRAMEBUFFER,null)}function Oe(t,n,r){if(e.bindRenderbuffer(e.RENDERBUFFER,t),n.depthBuffer){let i=n.depthTexture,a=i&&i.isDepthTexture?i.type:null,o=O(n.stencilBuffer,a),c=n.stencilBuffer?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT;Le(n)?s.renderbufferStorageMultisampleEXT(e.RENDERBUFFER,Ie(n),o,n.width,n.height):r?e.renderbufferStorageMultisample(e.RENDERBUFFER,Ie(n),o,n.width,n.height):e.renderbufferStorage(e.RENDERBUFFER,o,n.width,n.height),e.framebufferRenderbuffer(e.FRAMEBUFFER,c,e.RENDERBUFFER,t)}else{let t=n.textures;for(let i=0;i<t.length;i++){let o=t[i],c=a.convert(o.format,o.colorSpace),l=a.convert(o.type),u=te(o.internalFormat,c,l,o.normalized,o.colorSpace);Le(n)?s.renderbufferStorageMultisampleEXT(e.RENDERBUFFER,Ie(n),u,n.width,n.height):r?e.renderbufferStorageMultisample(e.RENDERBUFFER,Ie(n),u,n.width,n.height):e.renderbufferStorage(e.RENDERBUFFER,u,n.width,n.height)}}e.bindRenderbuffer(e.RENDERBUFFER,null)}function ke(t,i,o){let c=i.isWebGLCubeRenderTarget===!0;if(n.bindFramebuffer(e.FRAMEBUFFER,t),!(i.depthTexture&&i.depthTexture.isDepthTexture))throw Error(`renderTarget.depthTexture must be an instance of THREE.DepthTexture`);let l=r.get(i.depthTexture);if(l.__renderTarget=i,(!l.__webglTexture||i.depthTexture.image.width!==i.width||i.depthTexture.image.height!==i.height)&&(i.depthTexture.image.width=i.width,i.depthTexture.image.height=i.height,i.depthTexture.needsUpdate=!0),c){if(l.__webglInit===void 0&&(l.__webglInit=!0,i.depthTexture.addEventListener(`dispose`,re)),l.__webglTexture===void 0){l.__webglTexture=e.createTexture(),n.bindTexture(e.TEXTURE_CUBE_MAP,l.__webglTexture),xe(e.TEXTURE_CUBE_MAP,i.depthTexture);let t=a.convert(i.depthTexture.format),r=a.convert(i.depthTexture.type),o;i.depthTexture.format===1026?o=e.DEPTH_COMPONENT24:i.depthTexture.format===1027&&(o=e.DEPTH24_STENCIL8);for(let n=0;n<6;n++)e.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+n,0,o,i.width,i.height,0,t,r,null)}}else me(i.depthTexture,0);let u=l.__webglTexture,d=Ie(i),f=c?e.TEXTURE_CUBE_MAP_POSITIVE_X+o:e.TEXTURE_2D,p=i.depthTexture.format===1027?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT;if(i.depthTexture.format===1026)Le(i)?s.framebufferTexture2DMultisampleEXT(e.FRAMEBUFFER,p,f,u,0,d):e.framebufferTexture2D(e.FRAMEBUFFER,p,f,u,0);else if(i.depthTexture.format===1027)Le(i)?s.framebufferTexture2DMultisampleEXT(e.FRAMEBUFFER,p,f,u,0,d):e.framebufferTexture2D(e.FRAMEBUFFER,p,f,u,0);else throw Error(`Unknown depthTexture format`)}function Ae(t){let i=r.get(t),a=t.isWebGLCubeRenderTarget===!0;if(i.__boundDepthTexture!==t.depthTexture){let e=t.depthTexture;if(i.__depthDisposeCallback&&i.__depthDisposeCallback(),e){let t=()=>{delete i.__boundDepthTexture,delete i.__depthDisposeCallback,e.removeEventListener(`dispose`,t)};e.addEventListener(`dispose`,t),i.__depthDisposeCallback=t}i.__boundDepthTexture=e}if(t.depthTexture&&!i.__autoAllocateDepthBuffer)if(a)for(let e=0;e<6;e++)ke(i.__webglFramebuffer[e],t,e);else{let e=t.texture.mipmaps;e&&e.length>0?ke(i.__webglFramebuffer[0],t,0):ke(i.__webglFramebuffer,t,0)}else if(a){i.__webglDepthbuffer=[];for(let r=0;r<6;r++)if(n.bindFramebuffer(e.FRAMEBUFFER,i.__webglFramebuffer[r]),i.__webglDepthbuffer[r]===void 0)i.__webglDepthbuffer[r]=e.createRenderbuffer(),Oe(i.__webglDepthbuffer[r],t,!1);else{let n=t.stencilBuffer?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT,a=i.__webglDepthbuffer[r];e.bindRenderbuffer(e.RENDERBUFFER,a),e.framebufferRenderbuffer(e.FRAMEBUFFER,n,e.RENDERBUFFER,a)}}else{let r=t.texture.mipmaps;if(r&&r.length>0?n.bindFramebuffer(e.FRAMEBUFFER,i.__webglFramebuffer[0]):n.bindFramebuffer(e.FRAMEBUFFER,i.__webglFramebuffer),i.__webglDepthbuffer===void 0)i.__webglDepthbuffer=e.createRenderbuffer(),Oe(i.__webglDepthbuffer,t,!1);else{let n=t.stencilBuffer?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT,r=i.__webglDepthbuffer;e.bindRenderbuffer(e.RENDERBUFFER,r),e.framebufferRenderbuffer(e.FRAMEBUFFER,n,e.RENDERBUFFER,r)}}n.bindFramebuffer(e.FRAMEBUFFER,null)}function je(t,n,i){let a=r.get(t);n!==void 0&&De(a.__webglFramebuffer,t,t.texture,e.COLOR_ATTACHMENT0,e.TEXTURE_2D,0),i!==void 0&&Ae(t)}function Me(t){let i=t.texture,s=r.get(t),c=r.get(i);t.addEventListener(`dispose`,k);let l=t.textures,u=t.isWebGLCubeRenderTarget===!0,d=l.length>1;if(d||(c.__webglTexture===void 0&&(c.__webglTexture=e.createTexture()),c.__version=i.version,o.memory.textures++),u){s.__webglFramebuffer=[];for(let t=0;t<6;t++)if(i.mipmaps&&i.mipmaps.length>0){s.__webglFramebuffer[t]=[];for(let n=0;n<i.mipmaps.length;n++)s.__webglFramebuffer[t][n]=e.createFramebuffer()}else s.__webglFramebuffer[t]=e.createFramebuffer()}else{if(i.mipmaps&&i.mipmaps.length>0){s.__webglFramebuffer=[];for(let t=0;t<i.mipmaps.length;t++)s.__webglFramebuffer[t]=e.createFramebuffer()}else s.__webglFramebuffer=e.createFramebuffer();if(d)for(let t=0,n=l.length;t<n;t++){let n=r.get(l[t]);n.__webglTexture===void 0&&(n.__webglTexture=e.createTexture(),o.memory.textures++)}if(t.samples>0&&Le(t)===!1){s.__webglMultisampledFramebuffer=e.createFramebuffer(),s.__webglColorRenderbuffer=[],n.bindFramebuffer(e.FRAMEBUFFER,s.__webglMultisampledFramebuffer);for(let n=0;n<l.length;n++){let r=l[n];s.__webglColorRenderbuffer[n]=e.createRenderbuffer(),e.bindRenderbuffer(e.RENDERBUFFER,s.__webglColorRenderbuffer[n]);let i=a.convert(r.format,r.colorSpace),o=a.convert(r.type),c=te(r.internalFormat,i,o,r.normalized,r.colorSpace,t.isXRRenderTarget===!0),u=Ie(t);e.renderbufferStorageMultisample(e.RENDERBUFFER,u,c,t.width,t.height),e.framebufferRenderbuffer(e.FRAMEBUFFER,e.COLOR_ATTACHMENT0+n,e.RENDERBUFFER,s.__webglColorRenderbuffer[n])}e.bindRenderbuffer(e.RENDERBUFFER,null),t.depthBuffer&&(s.__webglDepthRenderbuffer=e.createRenderbuffer(),Oe(s.__webglDepthRenderbuffer,t,!0)),n.bindFramebuffer(e.FRAMEBUFFER,null)}}if(u){n.bindTexture(e.TEXTURE_CUBE_MAP,c.__webglTexture),xe(e.TEXTURE_CUBE_MAP,i);for(let n=0;n<6;n++)if(i.mipmaps&&i.mipmaps.length>0)for(let r=0;r<i.mipmaps.length;r++)De(s.__webglFramebuffer[n][r],t,i,e.COLOR_ATTACHMENT0,e.TEXTURE_CUBE_MAP_POSITIVE_X+n,r);else De(s.__webglFramebuffer[n],t,i,e.COLOR_ATTACHMENT0,e.TEXTURE_CUBE_MAP_POSITIVE_X+n,0);E(i)&&D(e.TEXTURE_CUBE_MAP),n.unbindTexture()}else if(d){for(let i=0,a=l.length;i<a;i++){let a=l[i],o=r.get(a),c=e.TEXTURE_2D;(t.isWebGL3DRenderTarget||t.isWebGLArrayRenderTarget)&&(c=t.isWebGL3DRenderTarget?e.TEXTURE_3D:e.TEXTURE_2D_ARRAY),n.bindTexture(c,o.__webglTexture),xe(c,a),De(s.__webglFramebuffer,t,a,e.COLOR_ATTACHMENT0+i,c,0),E(a)&&D(c)}n.unbindTexture()}else{let r=e.TEXTURE_2D;if((t.isWebGL3DRenderTarget||t.isWebGLArrayRenderTarget)&&(r=t.isWebGL3DRenderTarget?e.TEXTURE_3D:e.TEXTURE_2D_ARRAY),n.bindTexture(r,c.__webglTexture),xe(r,i),i.mipmaps&&i.mipmaps.length>0)for(let n=0;n<i.mipmaps.length;n++)De(s.__webglFramebuffer[n],t,i,e.COLOR_ATTACHMENT0,r,n);else De(s.__webglFramebuffer,t,i,e.COLOR_ATTACHMENT0,r,0);E(i)&&D(r),n.unbindTexture()}t.depthBuffer&&Ae(t)}function Ne(e){let t=e.textures;for(let i=0,a=t.length;i<a;i++){let a=t[i];if(E(a)){let t=ee(e),i=r.get(a).__webglTexture;n.bindTexture(t,i),D(t),n.unbindTexture()}}}let Pe=[],Fe=[];function A(t){if(t.samples>0){if(Le(t)===!1){let i=t.textures,a=t.width,o=t.height,s=e.COLOR_BUFFER_BIT,l=t.stencilBuffer?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT,u=r.get(t),d=i.length>1;if(d)for(let t=0;t<i.length;t++)n.bindFramebuffer(e.FRAMEBUFFER,u.__webglMultisampledFramebuffer),e.framebufferRenderbuffer(e.FRAMEBUFFER,e.COLOR_ATTACHMENT0+t,e.RENDERBUFFER,null),n.bindFramebuffer(e.FRAMEBUFFER,u.__webglFramebuffer),e.framebufferTexture2D(e.DRAW_FRAMEBUFFER,e.COLOR_ATTACHMENT0+t,e.TEXTURE_2D,null,0);n.bindFramebuffer(e.READ_FRAMEBUFFER,u.__webglMultisampledFramebuffer);let f=t.texture.mipmaps;f&&f.length>0?n.bindFramebuffer(e.DRAW_FRAMEBUFFER,u.__webglFramebuffer[0]):n.bindFramebuffer(e.DRAW_FRAMEBUFFER,u.__webglFramebuffer);for(let n=0;n<i.length;n++){if(t.resolveDepthBuffer&&(t.depthBuffer&&(s|=e.DEPTH_BUFFER_BIT),t.stencilBuffer&&t.resolveStencilBuffer&&(s|=e.STENCIL_BUFFER_BIT)),d){e.framebufferRenderbuffer(e.READ_FRAMEBUFFER,e.COLOR_ATTACHMENT0,e.RENDERBUFFER,u.__webglColorRenderbuffer[n]);let t=r.get(i[n]).__webglTexture;e.framebufferTexture2D(e.DRAW_FRAMEBUFFER,e.COLOR_ATTACHMENT0,e.TEXTURE_2D,t,0)}e.blitFramebuffer(0,0,a,o,0,0,a,o,s,e.NEAREST),c===!0&&(Pe.length=0,Fe.length=0,Pe.push(e.COLOR_ATTACHMENT0+n),t.depthBuffer&&t.resolveDepthBuffer===!1&&(Pe.push(l),Fe.push(l),e.invalidateFramebuffer(e.DRAW_FRAMEBUFFER,Fe)),e.invalidateFramebuffer(e.READ_FRAMEBUFFER,Pe))}if(n.bindFramebuffer(e.READ_FRAMEBUFFER,null),n.bindFramebuffer(e.DRAW_FRAMEBUFFER,null),d)for(let t=0;t<i.length;t++){n.bindFramebuffer(e.FRAMEBUFFER,u.__webglMultisampledFramebuffer),e.framebufferRenderbuffer(e.FRAMEBUFFER,e.COLOR_ATTACHMENT0+t,e.RENDERBUFFER,u.__webglColorRenderbuffer[t]);let a=r.get(i[t]).__webglTexture;n.bindFramebuffer(e.FRAMEBUFFER,u.__webglFramebuffer),e.framebufferTexture2D(e.DRAW_FRAMEBUFFER,e.COLOR_ATTACHMENT0+t,e.TEXTURE_2D,a,0)}n.bindFramebuffer(e.DRAW_FRAMEBUFFER,u.__webglMultisampledFramebuffer)}else if(t.depthBuffer&&t.resolveDepthBuffer===!1&&c){let n=t.stencilBuffer?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT;e.invalidateFramebuffer(e.DRAW_FRAMEBUFFER,[n])}}}function Ie(e){return Math.min(i.maxSamples,e.samples)}function Le(e){let n=r.get(e);return e.samples>0&&t.has(`WEBGL_multisampled_render_to_texture`)===!0&&n.__useRenderToTexture!==!1}function Re(e){let t=o.render.frame;y.get(e)!==t&&(y.set(e,t),e.update())}function j(e,t){let n=e.colorSpace,r=e.format,i=e.type;return e.isCompressedTexture===!0||e.isVideoTexture===!0||n!==`srgb-linear`&&n!==``&&(Qt.getTransfer(n)===`srgb`?(r!==1023||i!==1009)&&N(`WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType.`):P(`WebGLTextures: Unsupported texture color space:`,n)),t}function ze(e){return typeof HTMLImageElement<`u`&&e instanceof HTMLImageElement?(l.width=e.naturalWidth||e.width,l.height=e.naturalHeight||e.height):typeof VideoFrame<`u`&&e instanceof VideoFrame?(l.width=e.displayWidth,l.height=e.displayHeight):(l.width=e.width,l.height=e.height),l}this.allocateTextureUnit=fe,this.resetTextureUnits=le,this.getTextureUnits=ue,this.setTextureUnits=de,this.setTexture2D=me,this.setTexture2DArray=he,this.setTexture3D=ge,this.setTextureCube=_e,this.rebindTextures=je,this.setupRenderTarget=Me,this.updateRenderTargetMipmap=Ne,this.updateMultisampleRenderTarget=A,this.setupDepthRenderbuffer=Ae,this.setupFrameBufferTexture=De,this.useMultisampledRTT=Le,this.isReversedDepthBuffer=function(){return n.buffers.depth.getReversed()}}function tf(e,t){function n(n,r=``){let i,a=Qt.getTransfer(r);if(n===1009)return e.UNSIGNED_BYTE;if(n===1017)return e.UNSIGNED_SHORT_4_4_4_4;if(n===1018)return e.UNSIGNED_SHORT_5_5_5_1;if(n===35902)return e.UNSIGNED_INT_5_9_9_9_REV;if(n===35899)return e.UNSIGNED_INT_10F_11F_11F_REV;if(n===1010)return e.BYTE;if(n===1011)return e.SHORT;if(n===1012)return e.UNSIGNED_SHORT;if(n===1013)return e.INT;if(n===1014)return e.UNSIGNED_INT;if(n===1015)return e.FLOAT;if(n===1016)return e.HALF_FLOAT;if(n===1021)return e.ALPHA;if(n===1022)return e.RGB;if(n===1023)return e.RGBA;if(n===1026)return e.DEPTH_COMPONENT;if(n===1027)return e.DEPTH_STENCIL;if(n===1028)return e.RED;if(n===1029)return e.RED_INTEGER;if(n===1030)return e.RG;if(n===1031)return e.RG_INTEGER;if(n===1033)return e.RGBA_INTEGER;if(n===33776||n===33777||n===33778||n===33779)if(a===`srgb`)if(i=t.get(`WEBGL_compressed_texture_s3tc_srgb`),i!==null){if(n===33776)return i.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===33777)return i.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===33778)return i.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===33779)return i.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(i=t.get(`WEBGL_compressed_texture_s3tc`),i!==null){if(n===33776)return i.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===33777)return i.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===33778)return i.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===33779)return i.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===35840||n===35841||n===35842||n===35843)if(i=t.get(`WEBGL_compressed_texture_pvrtc`),i!==null){if(n===35840)return i.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===35841)return i.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===35842)return i.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===35843)return i.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===36196||n===37492||n===37496||n===37488||n===37489||n===37490||n===37491)if(i=t.get(`WEBGL_compressed_texture_etc`),i!==null){if(n===36196||n===37492)return a===`srgb`?i.COMPRESSED_SRGB8_ETC2:i.COMPRESSED_RGB8_ETC2;if(n===37496)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:i.COMPRESSED_RGBA8_ETC2_EAC;if(n===37488)return i.COMPRESSED_R11_EAC;if(n===37489)return i.COMPRESSED_SIGNED_R11_EAC;if(n===37490)return i.COMPRESSED_RG11_EAC;if(n===37491)return i.COMPRESSED_SIGNED_RG11_EAC}else return null;if(n===37808||n===37809||n===37810||n===37811||n===37812||n===37813||n===37814||n===37815||n===37816||n===37817||n===37818||n===37819||n===37820||n===37821)if(i=t.get(`WEBGL_compressed_texture_astc`),i!==null){if(n===37808)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:i.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===37809)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:i.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===37810)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:i.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===37811)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:i.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===37812)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:i.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===37813)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:i.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===37814)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:i.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===37815)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:i.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===37816)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:i.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===37817)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:i.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===37818)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:i.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===37819)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:i.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===37820)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:i.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===37821)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:i.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===36492||n===36494||n===36495)if(i=t.get(`EXT_texture_compression_bptc`),i!==null){if(n===36492)return a===`srgb`?i.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:i.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===36494)return i.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===36495)return i.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===36283||n===36284||n===36285||n===36286)if(i=t.get(`EXT_texture_compression_rgtc`),i!==null){if(n===36283)return i.COMPRESSED_RED_RGTC1_EXT;if(n===36284)return i.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===36285)return i.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===36286)return i.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===1020?e.UNSIGNED_INT_24_8:e[n]===void 0?null:e[n]}return{convert:n}}var nf=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,rf=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`,af=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t){if(this.texture===null){let n=new Ia(e.texture);(e.depthNear!==t.depthNear||e.depthFar!==t.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=n}}getMesh(e){if(this.texture!==null&&this.mesh===null){let t=e.cameras[0].viewport,n=new Ts({vertexShader:nf,fragmentShader:rf,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new U(new us(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},of=class extends vt{constructor(e,t){super();let n=this,r=null,i=1,a=null,o=`local-floor`,s=1,c=null,l=null,u=null,d=null,f=null,p=null,m=typeof XRWebGLBinding<`u`,h=new af,g={},_=t.getContextAttributes(),v=null,b=null,x=[],S=[],C=new I,T=null,E=new xc;E.viewport=new un;let D=new xc;D.viewport=new un;let ee=[E,D],O=new Fc,ne=null,re=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(e){let t=x[e];return t===void 0&&(t=new Un,x[e]=t),t.getTargetRaySpace()},this.getControllerGrip=function(e){let t=x[e];return t===void 0&&(t=new Un,x[e]=t),t.getGripSpace()},this.getHand=function(e){let t=x[e];return t===void 0&&(t=new Un,x[e]=t),t.getHandSpace()};function k(e){let t=S.indexOf(e.inputSource);if(t===-1)return;let n=x[t];n!==void 0&&(n.update(e.inputSource,e.frame,c||a),n.dispatchEvent({type:e.type,data:e.inputSource}))}function se(){r.removeEventListener(`select`,k),r.removeEventListener(`selectstart`,k),r.removeEventListener(`selectend`,k),r.removeEventListener(`squeeze`,k),r.removeEventListener(`squeezestart`,k),r.removeEventListener(`squeezeend`,k),r.removeEventListener(`end`,se),r.removeEventListener(`inputsourceschange`,ce);for(let e=0;e<x.length;e++){let t=S[e];t!==null&&(S[e]=null,x[e].disconnect(t))}ne=null,re=null,h.reset();for(let e in g)delete g[e];e.setRenderTarget(v),f=null,d=null,u=null,r=null,b=null,ge.stop(),n.isPresenting=!1,e.setPixelRatio(T),e.setSize(C.width,C.height,!1),n.dispatchEvent({type:`sessionend`})}this.setFramebufferScaleFactor=function(e){i=e,n.isPresenting===!0&&N(`WebXRManager: Cannot change framebuffer scale while presenting.`)},this.setReferenceSpaceType=function(e){o=e,n.isPresenting===!0&&N(`WebXRManager: Cannot change reference space type while presenting.`)},this.getReferenceSpace=function(){return c||a},this.setReferenceSpace=function(e){c=e},this.getBaseLayer=function(){return d===null?f:d},this.getBinding=function(){return u===null&&m&&(u=new XRWebGLBinding(r,t)),u},this.getFrame=function(){return p},this.getSession=function(){return r},this.setSession=async function(l){if(r=l,r!==null){if(v=e.getRenderTarget(),r.addEventListener(`select`,k),r.addEventListener(`selectstart`,k),r.addEventListener(`selectend`,k),r.addEventListener(`squeeze`,k),r.addEventListener(`squeezestart`,k),r.addEventListener(`squeezeend`,k),r.addEventListener(`end`,se),r.addEventListener(`inputsourceschange`,ce),_.xrCompatible!==!0&&await t.makeXRCompatible(),T=e.getPixelRatio(),e.getSize(C),m&&`createProjectionLayer`in XRWebGLBinding.prototype){let n=null,a=null,o=null;_.depth&&(o=_.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,n=_.stencil?oe:ae,a=_.stencil?te:w);let s={colorFormat:t.RGBA8,depthFormat:o,scaleFactor:i};u=this.getBinding(),d=u.createProjectionLayer(s),r.updateRenderState({layers:[d]}),e.setPixelRatio(1),e.setSize(d.textureWidth,d.textureHeight,!1),b=new fn(d.textureWidth,d.textureHeight,{format:ie,type:y,depthTexture:new Pa(d.textureWidth,d.textureHeight,a,void 0,void 0,void 0,void 0,void 0,void 0,n),stencilBuffer:_.stencil,colorSpace:e.outputColorSpace,samples:_.antialias?4:0,resolveDepthBuffer:d.ignoreDepthValues===!1,resolveStencilBuffer:d.ignoreDepthValues===!1})}else{let n={antialias:_.antialias,alpha:!0,depth:_.depth,stencil:_.stencil,framebufferScaleFactor:i};f=new XRWebGLLayer(r,t,n),r.updateRenderState({baseLayer:f}),e.setPixelRatio(1),e.setSize(f.framebufferWidth,f.framebufferHeight,!1),b=new fn(f.framebufferWidth,f.framebufferHeight,{format:ie,type:y,colorSpace:e.outputColorSpace,stencilBuffer:_.stencil,resolveDepthBuffer:f.ignoreDepthValues===!1,resolveStencilBuffer:f.ignoreDepthValues===!1})}b.isXRRenderTarget=!0,this.setFoveation(s),c=null,a=await r.requestReferenceSpace(o),ge.setContext(r),ge.start(),n.isPresenting=!0,n.dispatchEvent({type:`sessionstart`})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode},this.getDepthTexture=function(){return h.getDepthTexture()};function ce(e){for(let t=0;t<e.removed.length;t++){let n=e.removed[t],r=S.indexOf(n);r>=0&&(S[r]=null,x[r].disconnect(n))}for(let t=0;t<e.added.length;t++){let n=e.added[t],r=S.indexOf(n);if(r===-1){for(let e=0;e<x.length;e++)if(e>=S.length){S.push(n),r=e;break}else if(S[e]===null){S[e]=n,r=e;break}if(r===-1)break}let i=x[r];i&&i.connect(n)}}let le=new L,ue=new L;function de(e,t,n){le.setFromMatrixPosition(t.matrixWorld),ue.setFromMatrixPosition(n.matrixWorld);let r=le.distanceTo(ue),i=t.projectionMatrix.elements,a=n.projectionMatrix.elements,o=i[14]/(i[10]-1),s=i[14]/(i[10]+1),c=(i[9]+1)/i[5],l=(i[9]-1)/i[5],u=(i[8]-1)/i[0],d=(a[8]+1)/a[0],f=o*u,p=o*d,m=r/(-u+d),h=m*-u;if(t.matrixWorld.decompose(e.position,e.quaternion,e.scale),e.translateX(h),e.translateZ(m),e.matrixWorld.compose(e.position,e.quaternion,e.scale),e.matrixWorldInverse.copy(e.matrixWorld).invert(),i[10]===-1)e.projectionMatrix.copy(t.projectionMatrix),e.projectionMatrixInverse.copy(t.projectionMatrixInverse);else{let t=o+m,n=s+m,i=f-h,a=p+(r-h),u=c*s/n*t,d=l*s/n*t;e.projectionMatrix.makePerspective(i,a,u,d,t,n),e.projectionMatrixInverse.copy(e.projectionMatrix).invert()}}function fe(e,t){t===null?e.matrixWorld.copy(e.matrix):e.matrixWorld.multiplyMatrices(t.matrixWorld,e.matrix),e.matrixWorldInverse.copy(e.matrixWorld).invert()}this.updateCamera=function(e){if(r===null)return;let t=e.near,n=e.far;h.texture!==null&&(h.depthNear>0&&(t=h.depthNear),h.depthFar>0&&(n=h.depthFar)),O.near=D.near=E.near=t,O.far=D.far=E.far=n,(ne!==O.near||re!==O.far)&&(r.updateRenderState({depthNear:O.near,depthFar:O.far}),ne=O.near,re=O.far),O.layers.mask=e.layers.mask|6,E.layers.mask=O.layers.mask&-5,D.layers.mask=O.layers.mask&-3;let i=e.parent,a=O.cameras;fe(O,i);for(let e=0;e<a.length;e++)fe(a[e],i);a.length===2?de(O,E,D):O.projectionMatrix.copy(E.projectionMatrix),pe(e,O,i)};function pe(e,t,n){n===null?e.matrix.copy(t.matrixWorld):(e.matrix.copy(n.matrixWorld),e.matrix.invert(),e.matrix.multiply(t.matrixWorld)),e.matrix.decompose(e.position,e.quaternion,e.scale),e.updateMatrixWorld(!0),e.projectionMatrix.copy(t.projectionMatrix),e.projectionMatrixInverse.copy(t.projectionMatrixInverse),e.isPerspectiveCamera&&(e.fov=St*2*Math.atan(1/e.projectionMatrix.elements[5]),e.zoom=1)}this.getCamera=function(){return O},this.getFoveation=function(){if(!(d===null&&f===null))return s},this.setFoveation=function(e){s=e,d!==null&&(d.fixedFoveation=e),f!==null&&f.fixedFoveation!==void 0&&(f.fixedFoveation=e)},this.hasDepthSensing=function(){return h.texture!==null},this.getDepthSensingMesh=function(){return h.getMesh(O)},this.getCameraTexture=function(e){return g[e]};let me=null;function he(t,i){if(l=i.getViewerPose(c||a),p=i,l!==null){let t=l.views;f!==null&&(e.setRenderTargetFramebuffer(b,f.framebuffer),e.setRenderTarget(b));let i=!1;t.length!==O.cameras.length&&(O.cameras.length=0,i=!0);for(let n=0;n<t.length;n++){let r=t[n],a=null;if(f!==null)a=f.getViewport(r);else{let t=u.getViewSubImage(d,r);a=t.viewport,n===0&&(e.setRenderTargetTextures(b,t.colorTexture,t.depthStencilTexture),e.setRenderTarget(b))}let o=ee[n];o===void 0&&(o=new xc,o.layers.enable(n),o.viewport=new un,ee[n]=o),o.matrix.fromArray(r.transform.matrix),o.matrix.decompose(o.position,o.quaternion,o.scale),o.projectionMatrix.fromArray(r.projectionMatrix),o.projectionMatrixInverse.copy(o.projectionMatrix).invert(),o.viewport.set(a.x,a.y,a.width,a.height),n===0&&(O.matrix.copy(o.matrix),O.matrix.decompose(O.position,O.quaternion,O.scale)),i===!0&&O.cameras.push(o)}let a=r.enabledFeatures;if(a&&a.includes(`depth-sensing`)&&r.depthUsage==`gpu-optimized`&&m){u=n.getBinding();let e=u.getDepthInformation(t[0]);e&&e.isValid&&e.texture&&h.init(e,r.renderState)}if(a&&a.includes(`camera-access`)&&m){e.state.unbindTexture(),u=n.getBinding();for(let e=0;e<t.length;e++){let n=t[e].camera;if(n){let e=g[n];e||(e=new Ia,g[n]=e);let t=u.getCameraImage(n);e.sourceTexture=t}}}}for(let e=0;e<x.length;e++){let t=S[e],n=x[e];t!==null&&n!==void 0&&n.update(t,i,c||a)}me&&me(t,i),i.detectedPlanes&&n.dispatchEvent({type:`planesdetected`,data:i}),p=null}let ge=new Qc;ge.setAnimationLoop(he),this.setAnimationLoop=function(e){me=e},this.dispose=function(){}}},sf=new z,cf=new R;cf.set(-1,0,0,0,1,0,0,0,1);function lf(e,t){function n(e,t){e.matrixAutoUpdate===!0&&e.updateMatrix(),t.value.copy(e.matrix)}function r(t,n){n.color.getRGB(t.fogColor.value,xs(e)),n.isFog?(t.fogNear.value=n.near,t.fogFar.value=n.far):n.isFogExp2&&(t.fogDensity.value=n.density)}function i(e,t,n,r,i){t.isNodeMaterial?t.uniformsNeedUpdate=!1:t.isMeshBasicMaterial?a(e,t):t.isMeshLambertMaterial?(a(e,t),t.envMap&&(e.envMapIntensity.value=t.envMapIntensity)):t.isMeshToonMaterial?(a(e,t),d(e,t)):t.isMeshPhongMaterial?(a(e,t),u(e,t),t.envMap&&(e.envMapIntensity.value=t.envMapIntensity)):t.isMeshStandardMaterial?(a(e,t),f(e,t),t.isMeshPhysicalMaterial&&p(e,t,i)):t.isMeshMatcapMaterial?(a(e,t),m(e,t)):t.isMeshDepthMaterial?a(e,t):t.isMeshDistanceMaterial?(a(e,t),h(e,t)):t.isMeshNormalMaterial?a(e,t):t.isLineBasicMaterial?(o(e,t),t.isLineDashedMaterial&&s(e,t)):t.isPointsMaterial?c(e,t,n,r):t.isSpriteMaterial?l(e,t):t.isShadowMaterial?(e.color.value.copy(t.color),e.opacity.value=t.opacity):t.isShaderMaterial&&(t.uniformsNeedUpdate=!1)}function a(e,r){e.opacity.value=r.opacity,r.color&&e.diffuse.value.copy(r.color),r.emissive&&e.emissive.value.copy(r.emissive).multiplyScalar(r.emissiveIntensity),r.map&&(e.map.value=r.map,n(r.map,e.mapTransform)),r.alphaMap&&(e.alphaMap.value=r.alphaMap,n(r.alphaMap,e.alphaMapTransform)),r.bumpMap&&(e.bumpMap.value=r.bumpMap,n(r.bumpMap,e.bumpMapTransform),e.bumpScale.value=r.bumpScale,r.side===1&&(e.bumpScale.value*=-1)),r.normalMap&&(e.normalMap.value=r.normalMap,n(r.normalMap,e.normalMapTransform),e.normalScale.value.copy(r.normalScale),r.side===1&&e.normalScale.value.negate()),r.displacementMap&&(e.displacementMap.value=r.displacementMap,n(r.displacementMap,e.displacementMapTransform),e.displacementScale.value=r.displacementScale,e.displacementBias.value=r.displacementBias),r.emissiveMap&&(e.emissiveMap.value=r.emissiveMap,n(r.emissiveMap,e.emissiveMapTransform)),r.specularMap&&(e.specularMap.value=r.specularMap,n(r.specularMap,e.specularMapTransform)),r.alphaTest>0&&(e.alphaTest.value=r.alphaTest);let i=t.get(r),a=i.envMap,o=i.envMapRotation;a&&(e.envMap.value=a,e.envMapRotation.value.setFromMatrix4(sf.makeRotationFromEuler(o)).transpose(),a.isCubeTexture&&a.isRenderTargetTexture===!1&&e.envMapRotation.value.premultiply(cf),e.reflectivity.value=r.reflectivity,e.ior.value=r.ior,e.refractionRatio.value=r.refractionRatio),r.lightMap&&(e.lightMap.value=r.lightMap,e.lightMapIntensity.value=r.lightMapIntensity,n(r.lightMap,e.lightMapTransform)),r.aoMap&&(e.aoMap.value=r.aoMap,e.aoMapIntensity.value=r.aoMapIntensity,n(r.aoMap,e.aoMapTransform))}function o(e,t){e.diffuse.value.copy(t.color),e.opacity.value=t.opacity,t.map&&(e.map.value=t.map,n(t.map,e.mapTransform))}function s(e,t){e.dashSize.value=t.dashSize,e.totalSize.value=t.dashSize+t.gapSize,e.scale.value=t.scale}function c(e,t,r,i){e.diffuse.value.copy(t.color),e.opacity.value=t.opacity,e.size.value=t.size*r,e.scale.value=i*.5,t.map&&(e.map.value=t.map,n(t.map,e.uvTransform)),t.alphaMap&&(e.alphaMap.value=t.alphaMap,n(t.alphaMap,e.alphaMapTransform)),t.alphaTest>0&&(e.alphaTest.value=t.alphaTest)}function l(e,t){e.diffuse.value.copy(t.color),e.opacity.value=t.opacity,e.rotation.value=t.rotation,t.map&&(e.map.value=t.map,n(t.map,e.mapTransform)),t.alphaMap&&(e.alphaMap.value=t.alphaMap,n(t.alphaMap,e.alphaMapTransform)),t.alphaTest>0&&(e.alphaTest.value=t.alphaTest)}function u(e,t){e.specular.value.copy(t.specular),e.shininess.value=Math.max(t.shininess,1e-4)}function d(e,t){t.gradientMap&&(e.gradientMap.value=t.gradientMap)}function f(e,t){e.metalness.value=t.metalness,t.metalnessMap&&(e.metalnessMap.value=t.metalnessMap,n(t.metalnessMap,e.metalnessMapTransform)),e.roughness.value=t.roughness,t.roughnessMap&&(e.roughnessMap.value=t.roughnessMap,n(t.roughnessMap,e.roughnessMapTransform)),t.envMap&&(e.envMapIntensity.value=t.envMapIntensity)}function p(e,t,r){e.ior.value=t.ior,t.sheen>0&&(e.sheenColor.value.copy(t.sheenColor).multiplyScalar(t.sheen),e.sheenRoughness.value=t.sheenRoughness,t.sheenColorMap&&(e.sheenColorMap.value=t.sheenColorMap,n(t.sheenColorMap,e.sheenColorMapTransform)),t.sheenRoughnessMap&&(e.sheenRoughnessMap.value=t.sheenRoughnessMap,n(t.sheenRoughnessMap,e.sheenRoughnessMapTransform))),t.clearcoat>0&&(e.clearcoat.value=t.clearcoat,e.clearcoatRoughness.value=t.clearcoatRoughness,t.clearcoatMap&&(e.clearcoatMap.value=t.clearcoatMap,n(t.clearcoatMap,e.clearcoatMapTransform)),t.clearcoatRoughnessMap&&(e.clearcoatRoughnessMap.value=t.clearcoatRoughnessMap,n(t.clearcoatRoughnessMap,e.clearcoatRoughnessMapTransform)),t.clearcoatNormalMap&&(e.clearcoatNormalMap.value=t.clearcoatNormalMap,n(t.clearcoatNormalMap,e.clearcoatNormalMapTransform),e.clearcoatNormalScale.value.copy(t.clearcoatNormalScale),t.side===1&&e.clearcoatNormalScale.value.negate())),t.dispersion>0&&(e.dispersion.value=t.dispersion),t.iridescence>0&&(e.iridescence.value=t.iridescence,e.iridescenceIOR.value=t.iridescenceIOR,e.iridescenceThicknessMinimum.value=t.iridescenceThicknessRange[0],e.iridescenceThicknessMaximum.value=t.iridescenceThicknessRange[1],t.iridescenceMap&&(e.iridescenceMap.value=t.iridescenceMap,n(t.iridescenceMap,e.iridescenceMapTransform)),t.iridescenceThicknessMap&&(e.iridescenceThicknessMap.value=t.iridescenceThicknessMap,n(t.iridescenceThicknessMap,e.iridescenceThicknessMapTransform))),t.transmission>0&&(e.transmission.value=t.transmission,e.transmissionSamplerMap.value=r.texture,e.transmissionSamplerSize.value.set(r.width,r.height),t.transmissionMap&&(e.transmissionMap.value=t.transmissionMap,n(t.transmissionMap,e.transmissionMapTransform)),e.thickness.value=t.thickness,t.thicknessMap&&(e.thicknessMap.value=t.thicknessMap,n(t.thicknessMap,e.thicknessMapTransform)),e.attenuationDistance.value=t.attenuationDistance,e.attenuationColor.value.copy(t.attenuationColor)),t.anisotropy>0&&(e.anisotropyVector.value.set(t.anisotropy*Math.cos(t.anisotropyRotation),t.anisotropy*Math.sin(t.anisotropyRotation)),t.anisotropyMap&&(e.anisotropyMap.value=t.anisotropyMap,n(t.anisotropyMap,e.anisotropyMapTransform))),e.specularIntensity.value=t.specularIntensity,e.specularColor.value.copy(t.specularColor),t.specularColorMap&&(e.specularColorMap.value=t.specularColorMap,n(t.specularColorMap,e.specularColorMapTransform)),t.specularIntensityMap&&(e.specularIntensityMap.value=t.specularIntensityMap,n(t.specularIntensityMap,e.specularIntensityMapTransform))}function m(e,t){t.matcap&&(e.matcap.value=t.matcap)}function h(e,n){let r=t.get(n).light;e.referencePosition.value.setFromMatrixPosition(r.matrixWorld),e.nearDistance.value=r.shadow.camera.near,e.farDistance.value=r.shadow.camera.far}return{refreshFogUniforms:r,refreshMaterialUniforms:i}}function uf(e,t,n,r){let i={},a={},o=[],s=e.getParameter(e.MAX_UNIFORM_BUFFER_BINDINGS);function c(e,t){let n=t.program;r.uniformBlockBinding(e,n)}function l(e,n){let o=i[e.id];o===void 0&&(m(e),o=u(e),i[e.id]=o,e.addEventListener(`dispose`,g));let s=n.program;r.updateUBOMapping(e,s);let c=t.render.frame;a[e.id]!==c&&(f(e),a[e.id]=c)}function u(t){let n=d();t.__bindingPointIndex=n;let r=e.createBuffer(),i=t.__size,a=t.usage;return e.bindBuffer(e.UNIFORM_BUFFER,r),e.bufferData(e.UNIFORM_BUFFER,i,a),e.bindBuffer(e.UNIFORM_BUFFER,null),e.bindBufferBase(e.UNIFORM_BUFFER,n,r),r}function d(){for(let e=0;e<s;e++)if(o.indexOf(e)===-1)return o.push(e),e;return P(`WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached.`),0}function f(t){let n=i[t.id],r=t.uniforms,a=t.__cache;e.bindBuffer(e.UNIFORM_BUFFER,n);for(let t=0,n=r.length;t<n;t++){let n=Array.isArray(r[t])?r[t]:[r[t]];for(let r=0,i=n.length;r<i;r++){let i=n[r];if(p(i,t,r,a)===!0){let t=i.__offset,n=Array.isArray(i.value)?i.value:[i.value],r=0;for(let a=0;a<n.length;a++){let o=n[a],s=h(o);typeof o==`number`||typeof o==`boolean`?(i.__data[0]=o,e.bufferSubData(e.UNIFORM_BUFFER,t+r,i.__data)):o.isMatrix3?(i.__data[0]=o.elements[0],i.__data[1]=o.elements[1],i.__data[2]=o.elements[2],i.__data[3]=0,i.__data[4]=o.elements[3],i.__data[5]=o.elements[4],i.__data[6]=o.elements[5],i.__data[7]=0,i.__data[8]=o.elements[6],i.__data[9]=o.elements[7],i.__data[10]=o.elements[8],i.__data[11]=0):ArrayBuffer.isView(o)?i.__data.set(new o.constructor(o.buffer,o.byteOffset,i.__data.length)):(o.toArray(i.__data,r),r+=s.storage/Float32Array.BYTES_PER_ELEMENT)}e.bufferSubData(e.UNIFORM_BUFFER,t,i.__data)}}}e.bindBuffer(e.UNIFORM_BUFFER,null)}function p(e,t,n,r){let i=e.value,a=t+`_`+n;if(r[a]===void 0)return typeof i==`number`||typeof i==`boolean`?r[a]=i:ArrayBuffer.isView(i)?r[a]=i.slice():r[a]=i.clone(),!0;{let e=r[a];if(typeof i==`number`||typeof i==`boolean`){if(e!==i)return r[a]=i,!0}else if(ArrayBuffer.isView(i))return!0;else if(e.equals(i)===!1)return e.copy(i),!0}return!1}function m(e){let t=e.uniforms,n=0;for(let e=0,r=t.length;e<r;e++){let r=Array.isArray(t[e])?t[e]:[t[e]];for(let e=0,t=r.length;e<t;e++){let t=r[e],i=Array.isArray(t.value)?t.value:[t.value];for(let e=0,r=i.length;e<r;e++){let r=i[e],a=h(r),o=n%16,s=o%a.boundary,c=o+s;n+=s,c!==0&&16-c<a.storage&&(n+=16-c),t.__data=new Float32Array(a.storage/Float32Array.BYTES_PER_ELEMENT),t.__offset=n,n+=a.storage}}}let r=n%16;return r>0&&(n+=16-r),e.__size=n,e.__cache={},this}function h(e){let t={boundary:0,storage:0};return typeof e==`number`||typeof e==`boolean`?(t.boundary=4,t.storage=4):e.isVector2?(t.boundary=8,t.storage=8):e.isVector3||e.isColor?(t.boundary=16,t.storage=12):e.isVector4?(t.boundary=16,t.storage=16):e.isMatrix3?(t.boundary=48,t.storage=48):e.isMatrix4?(t.boundary=64,t.storage=64):e.isTexture?N(`WebGLRenderer: Texture samplers can not be part of an uniforms group.`):ArrayBuffer.isView(e)?(t.boundary=16,t.storage=e.byteLength):N(`WebGLRenderer: Unsupported uniform value type.`,e),t}function g(t){let n=t.target;n.removeEventListener(`dispose`,g);let r=o.indexOf(n.__bindingPointIndex);o.splice(r,1),e.deleteBuffer(i[n.id]),delete i[n.id],delete a[n.id]}function _(){for(let t in i)e.deleteBuffer(i[t]);o=[],i={},a={}}return{bind:c,update:l,dispose:_}}var df=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]),ff=null;function pf(){return ff===null&&(ff=new Wi(df,16,16,le,E),ff.name=`DFG_LUT`,ff.minFilter=g,ff.magFilter=g,ff.wrapS=d,ff.wrapT=d,ff.generateMipmaps=!1,ff.needsUpdate=!0),ff}var mf=class{constructor(e={}){let{canvas:t=ut(),context:n=null,depth:r=!0,stencil:i=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:s=!0,preserveDrawingBuffer:c=!1,powerPreference:l=`default`,failIfMajorPerformanceCaveat:u=!1,reversedDepthBuffer:d=!1,outputBufferType:f=y}=e;this.isWebGLRenderer=!0;let p;if(n!==null){if(typeof WebGLRenderingContext<`u`&&n instanceof WebGLRenderingContext)throw Error(`THREE.WebGLRenderer: WebGL 1 is not supported since r163.`);p=n.getContextAttributes().alpha}else p=a;let m=f,h=new Set([de,ue,ce]),g=new Set([y,w,S,te,D,ee]),_=new Uint32Array(4),b=new Int32Array(4),x=new L,C=null,T=null,O=[],ne=[],re=null;this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=0,this.toneMappingExposure=1,this.transmissionResolutionScale=1;let k=this,ie=!1,ae=null;this._outputColorSpace=et;let oe=0,se=0,le=null,fe=-1,pe=null,me=new un,he=new un,ge=null,_e=new V(0),ve=0,ye=t.width,be=t.height,xe=1,Se=null,Ce=null,we=new un(0,0,ye,be),Te=new un(0,0,ye,be),Ee=!1,De=new ua,Oe=!1,ke=!1,Ae=new z,je=new L,Me=new un,Ne={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},Pe=!1;function Fe(){return le===null?xe:1}let A=n;function Ie(e,n){return t.getContext(e,n)}try{let e={alpha:!0,depth:r,stencil:i,antialias:o,premultipliedAlpha:s,preserveDrawingBuffer:c,powerPreference:l,failIfMajorPerformanceCaveat:u};if(`setAttribute`in t&&t.setAttribute(`data-engine`,`three.js r184`),t.addEventListener(`webglcontextlost`,ct,!1),t.addEventListener(`webglcontextrestored`,lt,!1),t.addEventListener(`webglcontextcreationerror`,dt,!1),A===null){let t=`webgl2`;if(A=Ie(t,e),A===null)throw Ie(t)?Error(`Error creating WebGL context with your selected attributes.`):Error(`Error creating WebGL context.`)}}catch(e){throw P(`WebGLRenderer: `+e.message),e}let Le,Re,j,ze,M,Be,Ve,He,Ue,We,Ge,Ke,qe,Je,Ye,Xe,Ze,Qe,$e,tt,nt,rt,it;function at(){Le=new jl(A),Le.init(),nt=new tf(A,Le),Re=new sl(A,Le,e,nt),j=new $d(A,Le),Re.reversedDepthBuffer&&d&&j.buffers.depth.setReversed(!0),ze=new Pl(A),M=new Nd,Be=new ef(A,Le,j,M,Re,nt,ze),Ve=new Al(k),He=new $c(A),rt=new al(A,He),Ue=new Ml(A,He,ze,rt),We=new Il(A,Ue,He,rt,ze),Qe=new Fl(A,Re,Be),Ye=new cl(M),Ge=new Md(k,Ve,Le,Re,rt,Ye),Ke=new lf(k,M),qe=new Ld,Je=new Wd(Le),Ze=new il(k,Ve,j,We,p,s),Xe=new Qd(k,We,Re),it=new uf(A,ze,Re,j),$e=new ol(A,Le,ze),tt=new Nl(A,Le,ze),ze.programs=Ge.programs,k.capabilities=Re,k.extensions=Le,k.properties=M,k.renderLists=qe,k.shadowMap=Xe,k.state=j,k.info=ze}at(),m!==1009&&(re=new Rl(m,t.width,t.height,r,i));let st=new of(k,A);this.xr=st,this.getContext=function(){return A},this.getContextAttributes=function(){return A.getContextAttributes()},this.forceContextLoss=function(){let e=Le.get(`WEBGL_lose_context`);e&&e.loseContext()},this.forceContextRestore=function(){let e=Le.get(`WEBGL_lose_context`);e&&e.restoreContext()},this.getPixelRatio=function(){return xe},this.setPixelRatio=function(e){e!==void 0&&(xe=e,this.setSize(ye,be,!1))},this.getSize=function(e){return e.set(ye,be)},this.setSize=function(e,n,r=!0){if(st.isPresenting){N(`WebGLRenderer: Can't change size while VR device is presenting.`);return}ye=e,be=n,t.width=Math.floor(e*xe),t.height=Math.floor(n*xe),r===!0&&(t.style.width=e+`px`,t.style.height=n+`px`),re!==null&&re.setSize(t.width,t.height),this.setViewport(0,0,e,n)},this.getDrawingBufferSize=function(e){return e.set(ye*xe,be*xe).floor()},this.setDrawingBufferSize=function(e,n,r){ye=e,be=n,xe=r,t.width=Math.floor(e*r),t.height=Math.floor(n*r),this.setViewport(0,0,e,n)},this.setEffects=function(e){if(m===1009){P(`THREE.WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.`);return}if(e){for(let t=0;t<e.length;t++)if(e[t].isOutputPass===!0){N(`THREE.WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.`);break}}re.setEffects(e||[])},this.getCurrentViewport=function(e){return e.copy(me)},this.getViewport=function(e){return e.copy(we)},this.setViewport=function(e,t,n,r){e.isVector4?we.set(e.x,e.y,e.z,e.w):we.set(e,t,n,r),j.viewport(me.copy(we).multiplyScalar(xe).round())},this.getScissor=function(e){return e.copy(Te)},this.setScissor=function(e,t,n,r){e.isVector4?Te.set(e.x,e.y,e.z,e.w):Te.set(e,t,n,r),j.scissor(he.copy(Te).multiplyScalar(xe).round())},this.getScissorTest=function(){return Ee},this.setScissorTest=function(e){j.setScissorTest(Ee=e)},this.setOpaqueSort=function(e){Se=e},this.setTransparentSort=function(e){Ce=e},this.getClearColor=function(e){return e.copy(Ze.getClearColor())},this.setClearColor=function(){Ze.setClearColor(...arguments)},this.getClearAlpha=function(){return Ze.getClearAlpha()},this.setClearAlpha=function(){Ze.setClearAlpha(...arguments)},this.clear=function(e=!0,t=!0,n=!0){let r=0;if(e){let e=!1;if(le!==null){let t=le.texture.format;e=h.has(t)}if(e){let e=le.texture.type,t=g.has(e),n=Ze.getClearColor(),r=Ze.getClearAlpha(),i=n.r,a=n.g,o=n.b;t?(_[0]=i,_[1]=a,_[2]=o,_[3]=r,A.clearBufferuiv(A.COLOR,0,_)):(b[0]=i,b[1]=a,b[2]=o,b[3]=r,A.clearBufferiv(A.COLOR,0,b))}else r|=A.COLOR_BUFFER_BIT}t&&(r|=A.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),n&&(r|=A.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),r!==0&&A.clear(r)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(e){e.setRenderer(this),ae=e},this.dispose=function(){t.removeEventListener(`webglcontextlost`,ct,!1),t.removeEventListener(`webglcontextrestored`,lt,!1),t.removeEventListener(`webglcontextcreationerror`,dt,!1),Ze.dispose(),qe.dispose(),Je.dispose(),M.dispose(),Ve.dispose(),We.dispose(),rt.dispose(),it.dispose(),Ge.dispose(),st.dispose(),st.removeEventListener(`sessionstart`,bt),st.removeEventListener(`sessionend`,xt),St.stop()};function ct(e){e.preventDefault(),pt(`WebGLRenderer: Context Lost.`),ie=!0}function lt(){pt(`WebGLRenderer: Context Restored.`),ie=!1;let e=ze.autoReset,t=Xe.enabled,n=Xe.autoUpdate,r=Xe.needsUpdate,i=Xe.type;at(),ze.autoReset=e,Xe.enabled=t,Xe.autoUpdate=n,Xe.needsUpdate=r,Xe.type=i}function dt(e){P(`WebGLRenderer: A WebGL context could not be created. Reason: `,e.statusMessage)}function ft(e){let t=e.target;t.removeEventListener(`dispose`,ft),mt(t)}function mt(e){ht(e),M.remove(e)}function ht(e){let t=M.get(e).programs;t!==void 0&&(t.forEach(function(e){Ge.releaseProgram(e)}),e.isShaderMaterial&&Ge.releaseShaderCache(e))}this.renderBufferDirect=function(e,t,n,r,i,a){t===null&&(t=Ne);let o=i.isMesh&&i.matrixWorld.determinant()<0,s=jt(e,t,n,r,i);j.setMaterial(r,o);let c=n.index,l=1;if(r.wireframe===!0){if(c=Ue.getWireframeAttribute(n),c===void 0)return;l=2}let u=n.drawRange,d=n.attributes.position,f=u.start*l,p=(u.start+u.count)*l;a!==null&&(f=Math.max(f,a.start*l),p=Math.min(p,(a.start+a.count)*l)),c===null?d!=null&&(f=Math.max(f,0),p=Math.min(p,d.count)):(f=Math.max(f,0),p=Math.min(p,c.count));let m=p-f;if(m<0||m===1/0)return;rt.setup(i,r,s,n,c);let h,g=$e;if(c!==null&&(h=He.get(c),g=tt,g.setIndex(h)),i.isMesh)r.wireframe===!0?(j.setLineWidth(r.wireframeLinewidth*Fe()),g.setMode(A.LINES)):g.setMode(A.TRIANGLES);else if(i.isLine){let e=r.linewidth;e===void 0&&(e=1),j.setLineWidth(e*Fe()),i.isLineSegments?g.setMode(A.LINES):i.isLineLoop?g.setMode(A.LINE_LOOP):g.setMode(A.LINE_STRIP)}else i.isPoints?g.setMode(A.POINTS):i.isSprite&&g.setMode(A.TRIANGLES);if(i.isBatchedMesh)if(Le.get(`WEBGL_multi_draw`))g.renderMultiDraw(i._multiDrawStarts,i._multiDrawCounts,i._multiDrawCount);else{let e=i._multiDrawStarts,t=i._multiDrawCounts,n=i._multiDrawCount,a=c?He.get(c).bytesPerElement:1,o=M.get(r).currentProgram.getUniforms();for(let r=0;r<n;r++)o.setValue(A,`_gl_DrawID`,r),g.render(e[r]/a,t[r])}else if(i.isInstancedMesh)g.renderInstances(f,m,i.count);else if(n.isInstancedBufferGeometry){let e=n._maxInstanceCount===void 0?1/0:n._maxInstanceCount,t=Math.min(n.instanceCount,e);g.renderInstances(f,m,t)}else g.render(f,m)};function _t(e,t,n){e.transparent===!0&&e.side===2&&e.forceSinglePass===!1?(e.side=1,e.needsUpdate=!0,Dt(e,t,n),e.side=0,e.needsUpdate=!0,Dt(e,t,n),e.side=2):Dt(e,t,n)}this.compile=function(e,t,n=null){n===null&&(n=e),T=Je.get(n),T.init(t),ne.push(T),n.traverseVisible(function(e){e.isLight&&e.layers.test(t.layers)&&(T.pushLight(e),e.castShadow&&T.pushShadow(e))}),e!==n&&e.traverseVisible(function(e){e.isLight&&e.layers.test(t.layers)&&(T.pushLight(e),e.castShadow&&T.pushShadow(e))}),T.setupLights();let r=new Set;return e.traverse(function(e){if(!(e.isMesh||e.isPoints||e.isLine||e.isSprite))return;let t=e.material;if(t)if(Array.isArray(t))for(let i=0;i<t.length;i++){let a=t[i];_t(a,n,e),r.add(a)}else _t(t,n,e),r.add(t)}),T=ne.pop(),r},this.compileAsync=function(e,t,n=null){let r=this.compile(e,t,n);return new Promise(t=>{function n(){if(r.forEach(function(e){M.get(e).currentProgram.isReady()&&r.delete(e)}),r.size===0){t(e);return}setTimeout(n,10)}Le.get(`KHR_parallel_shader_compile`)===null?setTimeout(n,10):n()})};let vt=null;function yt(e){vt&&vt(e)}function bt(){St.stop()}function xt(){St.start()}let St=new Qc;St.setAnimationLoop(yt),typeof self<`u`&&St.setContext(self),this.setAnimationLoop=function(e){vt=e,st.setAnimationLoop(e),e===null?St.stop():St.start()},st.addEventListener(`sessionstart`,bt),st.addEventListener(`sessionend`,xt),this.render=function(e,t){if(t!==void 0&&t.isCamera!==!0){P(`WebGLRenderer.render: camera is not an instance of THREE.Camera.`);return}if(ie===!0)return;ae!==null&&ae.renderStart(e,t);let n=st.enabled===!0&&st.isPresenting===!0,r=re!==null&&(le===null||n)&&re.begin(k,le);if(e.matrixWorldAutoUpdate===!0&&e.updateMatrixWorld(),t.parent===null&&t.matrixWorldAutoUpdate===!0&&t.updateMatrixWorld(),st.enabled===!0&&st.isPresenting===!0&&(re===null||re.isCompositing()===!1)&&(st.cameraAutoUpdate===!0&&st.updateCamera(t),t=st.getCamera()),e.isScene===!0&&e.onBeforeRender(k,e,t,le),T=Je.get(e,ne.length),T.init(t),T.state.textureUnits=Be.getTextureUnits(),ne.push(T),Ae.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),De.setFromProjectionMatrix(Ae,ot,t.reversedDepth),ke=this.localClippingEnabled,Oe=Ye.init(this.clippingPlanes,ke),C=qe.get(e,O.length),C.init(),O.push(C),st.enabled===!0&&st.isPresenting===!0){let e=k.xr.getDepthSensingMesh();e!==null&&Ct(e,t,-1/0,k.sortObjects)}Ct(e,t,0,k.sortObjects),C.finish(),k.sortObjects===!0&&C.sort(Se,Ce),Pe=st.enabled===!1||st.isPresenting===!1||st.hasDepthSensing()===!1,Pe&&Ze.addToRenderList(C,e),this.info.render.frame++,Oe===!0&&Ye.beginShadows();let i=T.state.shadowsArray;if(Xe.render(i,e,t),Oe===!0&&Ye.endShadows(),this.info.autoReset===!0&&this.info.reset(),(r&&re.hasRenderPass())===!1){let n=C.opaque,r=C.transmissive;if(T.setupLights(),t.isArrayCamera){let i=t.cameras;if(r.length>0)for(let t=0,a=i.length;t<a;t++){let a=i[t];wt(n,r,e,a)}Pe&&Ze.render(e);for(let t=0,n=i.length;t<n;t++){let n=i[t];F(C,e,n,n.viewport)}}else r.length>0&&wt(n,r,e,t),Pe&&Ze.render(e),F(C,e,t)}le!==null&&se===0&&(Be.updateMultisampleRenderTarget(le),Be.updateRenderTargetMipmap(le)),r&&re.end(k),e.isScene===!0&&e.onAfterRender(k,e,t),rt.resetDefaultState(),fe=-1,pe=null,ne.pop(),ne.length>0?(T=ne[ne.length-1],Be.setTextureUnits(T.state.textureUnits),Oe===!0&&Ye.setGlobalState(k.clippingPlanes,T.state.camera)):T=null,O.pop(),C=O.length>0?O[O.length-1]:null,ae!==null&&ae.renderEnd()};function Ct(e,t,n,r){if(e.visible===!1)return;if(e.layers.test(t.layers)){if(e.isGroup)n=e.renderOrder;else if(e.isLOD)e.autoUpdate===!0&&e.update(t);else if(e.isLightProbeGrid)T.pushLightProbeGrid(e);else if(e.isLight)T.pushLight(e),e.castShadow&&T.pushShadow(e);else if(e.isSprite){if(!e.frustumCulled||De.intersectsSprite(e)){r&&Me.setFromMatrixPosition(e.matrixWorld).applyMatrix4(Ae);let t=We.update(e),i=e.material;i.visible&&C.push(e,t,i,n,Me.z,null)}}else if((e.isMesh||e.isLine||e.isPoints)&&(!e.frustumCulled||De.intersectsObject(e))){let t=We.update(e),i=e.material;if(r&&(e.boundingSphere===void 0?(t.boundingSphere===null&&t.computeBoundingSphere(),Me.copy(t.boundingSphere.center)):(e.boundingSphere===null&&e.computeBoundingSphere(),Me.copy(e.boundingSphere.center)),Me.applyMatrix4(e.matrixWorld).applyMatrix4(Ae)),Array.isArray(i)){let r=t.groups;for(let a=0,o=r.length;a<o;a++){let o=r[a],s=i[o.materialIndex];s&&s.visible&&C.push(e,t,s,n,Me.z,o)}}else i.visible&&C.push(e,t,i,n,Me.z,null)}}let i=e.children;for(let e=0,a=i.length;e<a;e++)Ct(i[e],t,n,r)}function F(e,t,n,r){let{opaque:i,transmissive:a,transparent:o}=e;T.setupLightsView(n),Oe===!0&&Ye.setGlobalState(k.clippingPlanes,n),r&&j.viewport(me.copy(r)),i.length>0&&Tt(i,t,n),a.length>0&&Tt(a,t,n),o.length>0&&Tt(o,t,n),j.buffers.depth.setTest(!0),j.buffers.depth.setMask(!0),j.buffers.color.setMask(!0),j.setPolygonOffset(!1)}function wt(e,t,n,r){if((n.isScene===!0?n.overrideMaterial:null)!==null)return;if(T.state.transmissionRenderTarget[r.id]===void 0){let e=Le.has(`EXT_color_buffer_half_float`)||Le.has(`EXT_color_buffer_float`);T.state.transmissionRenderTarget[r.id]=new fn(1,1,{generateMipmaps:!0,type:e?E:y,minFilter:v,samples:Math.max(4,Re.samples),stencilBuffer:i,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:Qt.workingColorSpace})}let a=T.state.transmissionRenderTarget[r.id],o=r.viewport||me;a.setSize(o.z*k.transmissionResolutionScale,o.w*k.transmissionResolutionScale);let s=k.getRenderTarget(),c=k.getActiveCubeFace(),l=k.getActiveMipmapLevel();k.setRenderTarget(a),k.getClearColor(_e),ve=k.getClearAlpha(),ve<1&&k.setClearColor(16777215,.5),k.clear(),Pe&&Ze.render(n);let u=k.toneMapping;k.toneMapping=0;let d=r.viewport;if(r.viewport!==void 0&&(r.viewport=void 0),T.setupLightsView(r),Oe===!0&&Ye.setGlobalState(k.clippingPlanes,r),Tt(e,n,r),Be.updateMultisampleRenderTarget(a),Be.updateRenderTargetMipmap(a),Le.has(`WEBGL_multisampled_render_to_texture`)===!1){let e=!1;for(let i=0,a=t.length;i<a;i++){let{object:a,geometry:o,material:s,group:c}=t[i];if(s.side===2&&a.layers.test(r.layers)){let t=s.side;s.side=1,s.needsUpdate=!0,Et(a,n,r,o,s,c),s.side=t,s.needsUpdate=!0,e=!0}}e===!0&&(Be.updateMultisampleRenderTarget(a),Be.updateRenderTargetMipmap(a))}k.setRenderTarget(s,c,l),k.setClearColor(_e,ve),d!==void 0&&(r.viewport=d),k.toneMapping=u}function Tt(e,t,n){let r=t.isScene===!0?t.overrideMaterial:null;for(let i=0,a=e.length;i<a;i++){let a=e[i],{object:o,geometry:s,group:c}=a,l=a.material;l.allowOverride===!0&&r!==null&&(l=r),o.layers.test(n.layers)&&Et(o,t,n,s,l,c)}}function Et(e,t,n,r,i,a){e.onBeforeRender(k,t,n,r,i,a),e.modelViewMatrix.multiplyMatrices(n.matrixWorldInverse,e.matrixWorld),e.normalMatrix.getNormalMatrix(e.modelViewMatrix),i.onBeforeRender(k,t,n,r,e,a),i.transparent===!0&&i.side===2&&i.forceSinglePass===!1?(i.side=1,i.needsUpdate=!0,k.renderBufferDirect(n,t,r,i,e,a),i.side=0,i.needsUpdate=!0,k.renderBufferDirect(n,t,r,i,e,a),i.side=2):k.renderBufferDirect(n,t,r,i,e,a),e.onAfterRender(k,t,n,r,i,a)}function Dt(e,t,n){t.isScene!==!0&&(t=Ne);let r=M.get(e),i=T.state.lights,a=T.state.shadowsArray,o=i.state.version,s=Ge.getParameters(e,i.state,a,t,n,T.state.lightProbeGridArray),c=Ge.getProgramCacheKey(s),l=r.programs;r.environment=e.isMeshStandardMaterial||e.isMeshLambertMaterial||e.isMeshPhongMaterial?t.environment:null,r.fog=t.fog;let u=e.isMeshStandardMaterial||e.isMeshLambertMaterial&&!e.envMap||e.isMeshPhongMaterial&&!e.envMap;r.envMap=Ve.get(e.envMap||r.environment,u),r.envMapRotation=r.environment!==null&&e.envMap===null?t.environmentRotation:e.envMapRotation,l===void 0&&(e.addEventListener(`dispose`,ft),l=new Map,r.programs=l);let d=l.get(c);if(d!==void 0){if(r.currentProgram===d&&r.lightsStateVersion===o)return kt(e,s),d}else s.uniforms=Ge.getUniforms(e),ae!==null&&e.isNodeMaterial&&ae.build(e,n,s),e.onBeforeCompile(s,k),d=Ge.acquireProgram(s,c),l.set(c,d),r.uniforms=s.uniforms;let f=r.uniforms;return(!e.isShaderMaterial&&!e.isRawShaderMaterial||e.clipping===!0)&&(f.clippingPlanes=Ye.uniform),kt(e,s),r.needsLights=Nt(e),r.lightsStateVersion=o,r.needsLights&&(f.ambientLightColor.value=i.state.ambient,f.lightProbe.value=i.state.probe,f.directionalLights.value=i.state.directional,f.directionalLightShadows.value=i.state.directionalShadow,f.spotLights.value=i.state.spot,f.spotLightShadows.value=i.state.spotShadow,f.rectAreaLights.value=i.state.rectArea,f.ltc_1.value=i.state.rectAreaLTC1,f.ltc_2.value=i.state.rectAreaLTC2,f.pointLights.value=i.state.point,f.pointLightShadows.value=i.state.pointShadow,f.hemisphereLights.value=i.state.hemi,f.directionalShadowMatrix.value=i.state.directionalShadowMatrix,f.spotLightMatrix.value=i.state.spotLightMatrix,f.spotLightMap.value=i.state.spotLightMap,f.pointShadowMatrix.value=i.state.pointShadowMatrix),r.lightProbeGrid=T.state.lightProbeGridArray.length>0,r.currentProgram=d,r.uniformsList=null,d}function Ot(e){if(e.uniformsList===null){let t=e.currentProgram.getUniforms();e.uniformsList=Gu.seqWithValue(t.seq,e.uniforms)}return e.uniformsList}function kt(e,t){let n=M.get(e);n.outputColorSpace=t.outputColorSpace,n.batching=t.batching,n.batchingColor=t.batchingColor,n.instancing=t.instancing,n.instancingColor=t.instancingColor,n.instancingMorph=t.instancingMorph,n.skinning=t.skinning,n.morphTargets=t.morphTargets,n.morphNormals=t.morphNormals,n.morphColors=t.morphColors,n.morphTargetsCount=t.morphTargetsCount,n.numClippingPlanes=t.numClippingPlanes,n.numIntersection=t.numClipIntersection,n.vertexAlphas=t.vertexAlphas,n.vertexTangents=t.vertexTangents,n.toneMapping=t.toneMapping}function At(e,t){if(e.length===0)return null;if(e.length===1)return e[0].texture===null?null:e[0];x.setFromMatrixPosition(t.matrixWorld);for(let t=0,n=e.length;t<n;t++){let n=e[t];if(n.texture!==null&&n.boundingBox.containsPoint(x))return n}return null}function jt(e,t,n,r,i){t.isScene!==!0&&(t=Ne),Be.resetTextureUnits();let a=t.fog,o=r.isMeshStandardMaterial||r.isMeshLambertMaterial||r.isMeshPhongMaterial?t.environment:null,s=le===null?k.outputColorSpace:le.isXRRenderTarget===!0?le.texture.colorSpace:Qt.workingColorSpace,c=r.isMeshStandardMaterial||r.isMeshLambertMaterial&&!r.envMap||r.isMeshPhongMaterial&&!r.envMap,l=Ve.get(r.envMap||o,c),u=r.vertexColors===!0&&!!n.attributes.color&&n.attributes.color.itemSize===4,d=!!n.attributes.tangent&&(!!r.normalMap||r.anisotropy>0),f=!!n.morphAttributes.position,p=!!n.morphAttributes.normal,m=!!n.morphAttributes.color,h=0;r.toneMapped&&(le===null||le.isXRRenderTarget===!0)&&(h=k.toneMapping);let g=n.morphAttributes.position||n.morphAttributes.normal||n.morphAttributes.color,_=g===void 0?0:g.length,v=M.get(r),y=T.state.lights;if(Oe===!0&&(ke===!0||e!==pe)){let t=e===pe&&r.id===fe;Ye.setState(r,e,t)}let b=!1;r.version===v.__version?v.needsLights&&v.lightsStateVersion!==y.state.version?b=!0:v.outputColorSpace===s?i.isBatchedMesh&&v.batching===!1||!i.isBatchedMesh&&v.batching===!0||i.isBatchedMesh&&v.batchingColor===!0&&i.colorTexture===null||i.isBatchedMesh&&v.batchingColor===!1&&i.colorTexture!==null||i.isInstancedMesh&&v.instancing===!1||!i.isInstancedMesh&&v.instancing===!0||i.isSkinnedMesh&&v.skinning===!1||!i.isSkinnedMesh&&v.skinning===!0||i.isInstancedMesh&&v.instancingColor===!0&&i.instanceColor===null||i.isInstancedMesh&&v.instancingColor===!1&&i.instanceColor!==null||i.isInstancedMesh&&v.instancingMorph===!0&&i.morphTexture===null||i.isInstancedMesh&&v.instancingMorph===!1&&i.morphTexture!==null?b=!0:v.envMap===l?r.fog===!0&&v.fog!==a||v.numClippingPlanes!==void 0&&(v.numClippingPlanes!==Ye.numPlanes||v.numIntersection!==Ye.numIntersection)?b=!0:v.vertexAlphas===u&&v.vertexTangents===d&&v.morphTargets===f&&v.morphNormals===p&&v.morphColors===m&&v.toneMapping===h&&v.morphTargetsCount===_?!!v.lightProbeGrid!=T.state.lightProbeGridArray.length>0&&(b=!0):b=!0:b=!0:b=!0:(b=!0,v.__version=r.version);let x=v.currentProgram;b===!0&&(x=Dt(r,t,i),ae&&r.isNodeMaterial&&ae.onUpdateProgram(r,x,v));let S=!1,C=!1,w=!1,E=x.getUniforms(),D=v.uniforms;if(j.useProgram(x.program)&&(S=!0,C=!0,w=!0),r.id!==fe&&(fe=r.id,C=!0),v.needsLights){let e=At(T.state.lightProbeGridArray,i);v.lightProbeGrid!==e&&(v.lightProbeGrid=e,C=!0)}if(S||pe!==e){j.buffers.depth.getReversed()&&e.reversedDepth!==!0&&(e._reversedDepth=!0,e.updateProjectionMatrix()),E.setValue(A,`projectionMatrix`,e.projectionMatrix),E.setValue(A,`viewMatrix`,e.matrixWorldInverse);let t=E.map.cameraPosition;t!==void 0&&t.setValue(A,je.setFromMatrixPosition(e.matrixWorld)),Re.logarithmicDepthBuffer&&E.setValue(A,`logDepthBufFC`,2/(Math.log(e.far+1)/Math.LN2)),(r.isMeshPhongMaterial||r.isMeshToonMaterial||r.isMeshLambertMaterial||r.isMeshBasicMaterial||r.isMeshStandardMaterial||r.isShaderMaterial)&&E.setValue(A,`isOrthographic`,e.isOrthographicCamera===!0),pe!==e&&(pe=e,C=!0,w=!0)}if(v.needsLights&&(y.state.directionalShadowMap.length>0&&E.setValue(A,`directionalShadowMap`,y.state.directionalShadowMap,Be),y.state.spotShadowMap.length>0&&E.setValue(A,`spotShadowMap`,y.state.spotShadowMap,Be),y.state.pointShadowMap.length>0&&E.setValue(A,`pointShadowMap`,y.state.pointShadowMap,Be)),i.isSkinnedMesh){E.setOptional(A,i,`bindMatrix`),E.setOptional(A,i,`bindMatrixInverse`);let e=i.skeleton;e&&(e.boneTexture===null&&e.computeBoneTexture(),E.setValue(A,`boneTexture`,e.boneTexture,Be))}i.isBatchedMesh&&(E.setOptional(A,i,`batchingTexture`),E.setValue(A,`batchingTexture`,i._matricesTexture,Be),E.setOptional(A,i,`batchingIdTexture`),E.setValue(A,`batchingIdTexture`,i._indirectTexture,Be),E.setOptional(A,i,`batchingColorTexture`),i._colorsTexture!==null&&E.setValue(A,`batchingColorTexture`,i._colorsTexture,Be));let ee=n.morphAttributes;if((ee.position!==void 0||ee.normal!==void 0||ee.color!==void 0)&&Qe.update(i,n,x),(C||v.receiveShadow!==i.receiveShadow)&&(v.receiveShadow=i.receiveShadow,E.setValue(A,`receiveShadow`,i.receiveShadow)),(r.isMeshStandardMaterial||r.isMeshLambertMaterial||r.isMeshPhongMaterial)&&r.envMap===null&&t.environment!==null&&(D.envMapIntensity.value=t.environmentIntensity),D.dfgLUT!==void 0&&(D.dfgLUT.value=pf()),C){if(E.setValue(A,`toneMappingExposure`,k.toneMappingExposure),v.needsLights&&Mt(D,w),a&&r.fog===!0&&Ke.refreshFogUniforms(D,a),Ke.refreshMaterialUniforms(D,r,xe,be,T.state.transmissionRenderTarget[e.id]),v.needsLights&&v.lightProbeGrid){let e=v.lightProbeGrid;D.probesSH.value=e.texture,D.probesMin.value.copy(e.boundingBox.min),D.probesMax.value.copy(e.boundingBox.max),D.probesResolution.value.copy(e.resolution)}Gu.upload(A,Ot(v),D,Be)}if(r.isShaderMaterial&&r.uniformsNeedUpdate===!0&&(Gu.upload(A,Ot(v),D,Be),r.uniformsNeedUpdate=!1),r.isSpriteMaterial&&E.setValue(A,`center`,i.center),E.setValue(A,`modelViewMatrix`,i.modelViewMatrix),E.setValue(A,`normalMatrix`,i.normalMatrix),E.setValue(A,`modelMatrix`,i.matrixWorld),r.uniformsGroups!==void 0){let e=r.uniformsGroups;for(let t=0,n=e.length;t<n;t++){let n=e[t];it.update(n,x),it.bind(n,x)}}return x}function Mt(e,t){e.ambientLightColor.needsUpdate=t,e.lightProbe.needsUpdate=t,e.directionalLights.needsUpdate=t,e.directionalLightShadows.needsUpdate=t,e.pointLights.needsUpdate=t,e.pointLightShadows.needsUpdate=t,e.spotLights.needsUpdate=t,e.spotLightShadows.needsUpdate=t,e.rectAreaLights.needsUpdate=t,e.hemisphereLights.needsUpdate=t}function Nt(e){return e.isMeshLambertMaterial||e.isMeshToonMaterial||e.isMeshPhongMaterial||e.isMeshStandardMaterial||e.isShadowMaterial||e.isShaderMaterial&&e.lights===!0}this.getActiveCubeFace=function(){return oe},this.getActiveMipmapLevel=function(){return se},this.getRenderTarget=function(){return le},this.setRenderTargetTextures=function(e,t,n){let r=M.get(e);r.__autoAllocateDepthBuffer=e.resolveDepthBuffer===!1,r.__autoAllocateDepthBuffer===!1&&(r.__useRenderToTexture=!1),M.get(e.texture).__webglTexture=t,M.get(e.depthTexture).__webglTexture=r.__autoAllocateDepthBuffer?void 0:n,r.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(e,t){let n=M.get(e);n.__webglFramebuffer=t,n.__useDefaultFramebuffer=t===void 0};let Pt=A.createFramebuffer();this.setRenderTarget=function(e,t=0,n=0){le=e,oe=t,se=n;let r=null,i=!1,a=!1;if(e){let o=M.get(e);if(o.__useDefaultFramebuffer!==void 0){j.bindFramebuffer(A.FRAMEBUFFER,o.__webglFramebuffer),me.copy(e.viewport),he.copy(e.scissor),ge=e.scissorTest,j.viewport(me),j.scissor(he),j.setScissorTest(ge),fe=-1;return}else if(o.__webglFramebuffer===void 0)Be.setupRenderTarget(e);else if(o.__hasExternalTextures)Be.rebindTextures(e,M.get(e.texture).__webglTexture,M.get(e.depthTexture).__webglTexture);else if(e.depthBuffer){let t=e.depthTexture;if(o.__boundDepthTexture!==t){if(t!==null&&M.has(t)&&(e.width!==t.image.width||e.height!==t.image.height))throw Error(`WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.`);Be.setupDepthRenderbuffer(e)}}let s=e.texture;(s.isData3DTexture||s.isDataArrayTexture||s.isCompressedArrayTexture)&&(a=!0);let c=M.get(e).__webglFramebuffer;e.isWebGLCubeRenderTarget?(r=Array.isArray(c[t])?c[t][n]:c[t],i=!0):r=e.samples>0&&Be.useMultisampledRTT(e)===!1?M.get(e).__webglMultisampledFramebuffer:Array.isArray(c)?c[n]:c,me.copy(e.viewport),he.copy(e.scissor),ge=e.scissorTest}else me.copy(we).multiplyScalar(xe).floor(),he.copy(Te).multiplyScalar(xe).floor(),ge=Ee;if(n!==0&&(r=Pt),j.bindFramebuffer(A.FRAMEBUFFER,r)&&j.drawBuffers(e,r),j.viewport(me),j.scissor(he),j.setScissorTest(ge),i){let r=M.get(e.texture);A.framebufferTexture2D(A.FRAMEBUFFER,A.COLOR_ATTACHMENT0,A.TEXTURE_CUBE_MAP_POSITIVE_X+t,r.__webglTexture,n)}else if(a){let r=t;for(let t=0;t<e.textures.length;t++){let i=M.get(e.textures[t]);A.framebufferTextureLayer(A.FRAMEBUFFER,A.COLOR_ATTACHMENT0+t,i.__webglTexture,n,r)}}else if(e!==null&&n!==0){let t=M.get(e.texture);A.framebufferTexture2D(A.FRAMEBUFFER,A.COLOR_ATTACHMENT0,A.TEXTURE_2D,t.__webglTexture,n)}fe=-1},this.readRenderTargetPixels=function(e,t,n,r,i,a,o,s=0){if(!(e&&e.isWebGLRenderTarget)){P(`WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.`);return}let c=M.get(e).__webglFramebuffer;if(e.isWebGLCubeRenderTarget&&o!==void 0&&(c=c[o]),c){j.bindFramebuffer(A.FRAMEBUFFER,c);try{let o=e.textures[s],c=o.format,l=o.type;if(e.textures.length>1&&A.readBuffer(A.COLOR_ATTACHMENT0+s),!Re.textureFormatReadable(c)){P(`WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.`);return}if(!Re.textureTypeReadable(l)){P(`WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.`);return}t>=0&&t<=e.width-r&&n>=0&&n<=e.height-i&&A.readPixels(t,n,r,i,nt.convert(c),nt.convert(l),a)}finally{let e=le===null?null:M.get(le).__webglFramebuffer;j.bindFramebuffer(A.FRAMEBUFFER,e)}}},this.readRenderTargetPixelsAsync=async function(e,t,n,r,i,a,o,s=0){if(!(e&&e.isWebGLRenderTarget))throw Error(`THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.`);let c=M.get(e).__webglFramebuffer;if(e.isWebGLCubeRenderTarget&&o!==void 0&&(c=c[o]),c)if(t>=0&&t<=e.width-r&&n>=0&&n<=e.height-i){j.bindFramebuffer(A.FRAMEBUFFER,c);let o=e.textures[s],l=o.format,u=o.type;if(e.textures.length>1&&A.readBuffer(A.COLOR_ATTACHMENT0+s),!Re.textureFormatReadable(l))throw Error(`THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.`);if(!Re.textureTypeReadable(u))throw Error(`THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.`);let d=A.createBuffer();A.bindBuffer(A.PIXEL_PACK_BUFFER,d),A.bufferData(A.PIXEL_PACK_BUFFER,a.byteLength,A.STREAM_READ),A.readPixels(t,n,r,i,nt.convert(l),nt.convert(u),0);let f=le===null?null:M.get(le).__webglFramebuffer;j.bindFramebuffer(A.FRAMEBUFFER,f);let p=A.fenceSync(A.SYNC_GPU_COMMANDS_COMPLETE,0);return A.flush(),await gt(A,p,4),A.bindBuffer(A.PIXEL_PACK_BUFFER,d),A.getBufferSubData(A.PIXEL_PACK_BUFFER,0,a),A.deleteBuffer(d),A.deleteSync(p),a}else throw Error(`THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.`)},this.copyFramebufferToTexture=function(e,t=null,n=0){let r=2**-n,i=Math.floor(e.image.width*r),a=Math.floor(e.image.height*r),o=t===null?0:t.x,s=t===null?0:t.y;Be.setTexture2D(e,0),A.copyTexSubImage2D(A.TEXTURE_2D,n,0,0,o,s,i,a),j.unbindTexture()};let Ft=A.createFramebuffer(),It=A.createFramebuffer();this.copyTextureToTexture=function(e,t,n=null,r=null,i=0,a=0){let o,s,c,l,u,d,f,p,m,h=e.isCompressedTexture?e.mipmaps[a]:e.image;if(n!==null)o=n.max.x-n.min.x,s=n.max.y-n.min.y,c=n.isBox3?n.max.z-n.min.z:1,l=n.min.x,u=n.min.y,d=n.isBox3?n.min.z:0;else{let t=2**-i;o=Math.floor(h.width*t),s=Math.floor(h.height*t),c=e.isDataArrayTexture?h.depth:e.isData3DTexture?Math.floor(h.depth*t):1,l=0,u=0,d=0}r===null?(f=0,p=0,m=0):(f=r.x,p=r.y,m=r.z);let g=nt.convert(t.format),_=nt.convert(t.type),v;t.isData3DTexture?(Be.setTexture3D(t,0),v=A.TEXTURE_3D):t.isDataArrayTexture||t.isCompressedArrayTexture?(Be.setTexture2DArray(t,0),v=A.TEXTURE_2D_ARRAY):(Be.setTexture2D(t,0),v=A.TEXTURE_2D),j.activeTexture(A.TEXTURE0),j.pixelStorei(A.UNPACK_FLIP_Y_WEBGL,t.flipY),j.pixelStorei(A.UNPACK_PREMULTIPLY_ALPHA_WEBGL,t.premultiplyAlpha),j.pixelStorei(A.UNPACK_ALIGNMENT,t.unpackAlignment);let y=j.getParameter(A.UNPACK_ROW_LENGTH),b=j.getParameter(A.UNPACK_IMAGE_HEIGHT),x=j.getParameter(A.UNPACK_SKIP_PIXELS),S=j.getParameter(A.UNPACK_SKIP_ROWS),C=j.getParameter(A.UNPACK_SKIP_IMAGES);j.pixelStorei(A.UNPACK_ROW_LENGTH,h.width),j.pixelStorei(A.UNPACK_IMAGE_HEIGHT,h.height),j.pixelStorei(A.UNPACK_SKIP_PIXELS,l),j.pixelStorei(A.UNPACK_SKIP_ROWS,u),j.pixelStorei(A.UNPACK_SKIP_IMAGES,d);let w=e.isDataArrayTexture||e.isData3DTexture,T=t.isDataArrayTexture||t.isData3DTexture;if(e.isDepthTexture){let n=M.get(e),r=M.get(t),h=M.get(n.__renderTarget),g=M.get(r.__renderTarget);j.bindFramebuffer(A.READ_FRAMEBUFFER,h.__webglFramebuffer),j.bindFramebuffer(A.DRAW_FRAMEBUFFER,g.__webglFramebuffer);for(let n=0;n<c;n++)w&&(A.framebufferTextureLayer(A.READ_FRAMEBUFFER,A.COLOR_ATTACHMENT0,M.get(e).__webglTexture,i,d+n),A.framebufferTextureLayer(A.DRAW_FRAMEBUFFER,A.COLOR_ATTACHMENT0,M.get(t).__webglTexture,a,m+n)),A.blitFramebuffer(l,u,o,s,f,p,o,s,A.DEPTH_BUFFER_BIT,A.NEAREST);j.bindFramebuffer(A.READ_FRAMEBUFFER,null),j.bindFramebuffer(A.DRAW_FRAMEBUFFER,null)}else if(i!==0||e.isRenderTargetTexture||M.has(e)){let n=M.get(e),r=M.get(t);j.bindFramebuffer(A.READ_FRAMEBUFFER,Ft),j.bindFramebuffer(A.DRAW_FRAMEBUFFER,It);for(let e=0;e<c;e++)w?A.framebufferTextureLayer(A.READ_FRAMEBUFFER,A.COLOR_ATTACHMENT0,n.__webglTexture,i,d+e):A.framebufferTexture2D(A.READ_FRAMEBUFFER,A.COLOR_ATTACHMENT0,A.TEXTURE_2D,n.__webglTexture,i),T?A.framebufferTextureLayer(A.DRAW_FRAMEBUFFER,A.COLOR_ATTACHMENT0,r.__webglTexture,a,m+e):A.framebufferTexture2D(A.DRAW_FRAMEBUFFER,A.COLOR_ATTACHMENT0,A.TEXTURE_2D,r.__webglTexture,a),i===0?T?A.copyTexSubImage3D(v,a,f,p,m+e,l,u,o,s):A.copyTexSubImage2D(v,a,f,p,l,u,o,s):A.blitFramebuffer(l,u,o,s,f,p,o,s,A.COLOR_BUFFER_BIT,A.NEAREST);j.bindFramebuffer(A.READ_FRAMEBUFFER,null),j.bindFramebuffer(A.DRAW_FRAMEBUFFER,null)}else T?e.isDataTexture||e.isData3DTexture?A.texSubImage3D(v,a,f,p,m,o,s,c,g,_,h.data):t.isCompressedArrayTexture?A.compressedTexSubImage3D(v,a,f,p,m,o,s,c,g,h.data):A.texSubImage3D(v,a,f,p,m,o,s,c,g,_,h):e.isDataTexture?A.texSubImage2D(A.TEXTURE_2D,a,f,p,o,s,g,_,h.data):e.isCompressedTexture?A.compressedTexSubImage2D(A.TEXTURE_2D,a,f,p,h.width,h.height,g,h.data):A.texSubImage2D(A.TEXTURE_2D,a,f,p,o,s,g,_,h);j.pixelStorei(A.UNPACK_ROW_LENGTH,y),j.pixelStorei(A.UNPACK_IMAGE_HEIGHT,b),j.pixelStorei(A.UNPACK_SKIP_PIXELS,x),j.pixelStorei(A.UNPACK_SKIP_ROWS,S),j.pixelStorei(A.UNPACK_SKIP_IMAGES,C),a===0&&t.generateMipmaps&&A.generateMipmap(v),j.unbindTexture()},this.initRenderTarget=function(e){M.get(e).__webglFramebuffer===void 0&&Be.setupRenderTarget(e)},this.initTexture=function(e){e.isCubeTexture?Be.setTextureCube(e,0):e.isData3DTexture?Be.setTexture3D(e,0):e.isDataArrayTexture||e.isCompressedArrayTexture?Be.setTexture2DArray(e,0):Be.setTexture2D(e,0),j.unbindTexture()},this.resetState=function(){oe=0,se=0,le=null,j.reset(),rt.reset()},typeof __THREE_DEVTOOLS__<`u`&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent(`observe`,{detail:this}))}get coordinateSystem(){return ot}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;let t=this.getContext();t.drawingBufferColorSpace=Qt._getDrawingBufferColorSpace(e),t.unpackColorSpace=Qt._getUnpackColorSpace()}},hf={name:`CopyShader`,uniforms:{tDiffuse:{value:null},opacity:{value:1}},vertexShader:`

		varying vec2 vUv;

		void main() {

			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`

		uniform float opacity;

		uniform sampler2D tDiffuse;

		varying vec2 vUv;

		void main() {

			vec4 texel = texture2D( tDiffuse, vUv );
			gl_FragColor = opacity * texel;


		}`},gf=class{constructor(){this.isPass=!0,this.enabled=!0,this.needsSwap=!0,this.clear=!1,this.renderToScreen=!1}setSize(){}render(){console.error(`THREE.Pass: .render() must be implemented in derived pass.`)}dispose(){}},_f=new Tc(-1,1,1,-1,0,1),vf=new class extends Ur{constructor(){super(),this.setAttribute(`position`,new H([-1,3,0,-1,-1,0,3,-1,0],3)),this.setAttribute(`uv`,new H([0,2,0,0,2,0],2))}},yf=class{constructor(e){this._mesh=new U(vf,e)}dispose(){this._mesh.geometry.dispose()}render(e){e.render(this._mesh,_f)}get material(){return this._mesh.material}set material(e){this._mesh.material=e}},bf=class extends gf{constructor(e,t=`tDiffuse`){super(),this.textureID=t,this.uniforms=null,this.material=null,e instanceof Ts?(this.uniforms=e.uniforms,this.material=e):e&&(this.uniforms=Ss.clone(e.uniforms),this.material=new Ts({name:e.name===void 0?`unspecified`:e.name,defines:Object.assign({},e.defines),uniforms:this.uniforms,vertexShader:e.vertexShader,fragmentShader:e.fragmentShader})),this._fsQuad=new yf(this.material)}render(e,t,n){this.uniforms[this.textureID]&&(this.uniforms[this.textureID].value=n.texture),this._fsQuad.material=this.material,this.renderToScreen?(e.setRenderTarget(null),this._fsQuad.render(e)):(e.setRenderTarget(t),this.clear&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),this._fsQuad.render(e))}dispose(){this.material.dispose(),this._fsQuad.dispose()}},xf=class extends gf{constructor(e,t){super(),this.scene=e,this.camera=t,this.clear=!0,this.needsSwap=!1,this.inverse=!1}render(e,t,n){let r=e.getContext(),i=e.state;i.buffers.color.setMask(!1),i.buffers.depth.setMask(!1),i.buffers.color.setLocked(!0),i.buffers.depth.setLocked(!0);let a,o;this.inverse?(a=0,o=1):(a=1,o=0),i.buffers.stencil.setTest(!0),i.buffers.stencil.setOp(r.REPLACE,r.REPLACE,r.REPLACE),i.buffers.stencil.setFunc(r.ALWAYS,a,4294967295),i.buffers.stencil.setClear(o),i.buffers.stencil.setLocked(!0),e.setRenderTarget(n),this.clear&&e.clear(),e.render(this.scene,this.camera),e.setRenderTarget(t),this.clear&&e.clear(),e.render(this.scene,this.camera),i.buffers.color.setLocked(!1),i.buffers.depth.setLocked(!1),i.buffers.color.setMask(!0),i.buffers.depth.setMask(!0),i.buffers.stencil.setLocked(!1),i.buffers.stencil.setFunc(r.EQUAL,1,4294967295),i.buffers.stencil.setOp(r.KEEP,r.KEEP,r.KEEP),i.buffers.stencil.setLocked(!0)}},Sf=class extends gf{constructor(){super(),this.needsSwap=!1}render(e){e.state.buffers.stencil.setLocked(!1),e.state.buffers.stencil.setTest(!1)}},Cf=class{constructor(e,t){if(this.renderer=e,this._pixelRatio=e.getPixelRatio(),t===void 0){let n=e.getSize(new I);this._width=n.width,this._height=n.height,t=new fn(this._width*this._pixelRatio,this._height*this._pixelRatio,{type:E}),t.texture.name=`EffectComposer.rt1`}else this._width=t.width,this._height=t.height;this.renderTarget1=t,this.renderTarget2=t.clone(),this.renderTarget2.texture.name=`EffectComposer.rt2`,this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2,this.renderToScreen=!0,this.passes=[],this.copyPass=new bf(hf),this.copyPass.material.blending=0,this.timer=new Ic}swapBuffers(){let e=this.readBuffer;this.readBuffer=this.writeBuffer,this.writeBuffer=e}addPass(e){this.passes.push(e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}insertPass(e,t){this.passes.splice(t,0,e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}removePass(e){let t=this.passes.indexOf(e);t!==-1&&this.passes.splice(t,1)}isLastEnabledPass(e){for(let t=e+1;t<this.passes.length;t++)if(this.passes[t].enabled)return!1;return!0}render(e){this.timer.update(),e===void 0&&(e=this.timer.getDelta());let t=this.renderer.getRenderTarget(),n=!1;for(let t=0,r=this.passes.length;t<r;t++){let r=this.passes[t];if(r.enabled!==!1){if(r.renderToScreen=this.renderToScreen&&this.isLastEnabledPass(t),r.render(this.renderer,this.writeBuffer,this.readBuffer,e,n),r.needsSwap){if(n){let t=this.renderer.getContext(),n=this.renderer.state.buffers.stencil;n.setFunc(t.NOTEQUAL,1,4294967295),this.copyPass.render(this.renderer,this.writeBuffer,this.readBuffer,e),n.setFunc(t.EQUAL,1,4294967295)}this.swapBuffers()}xf!==void 0&&(r instanceof xf?n=!0:r instanceof Sf&&(n=!1))}}this.renderer.setRenderTarget(t)}reset(e){if(e===void 0){let t=this.renderer.getSize(new I);this._pixelRatio=this.renderer.getPixelRatio(),this._width=t.width,this._height=t.height,e=this.renderTarget1.clone(),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.renderTarget1=e,this.renderTarget2=e.clone(),this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2}setSize(e,t){this._width=e,this._height=t;let n=this._width*this._pixelRatio,r=this._height*this._pixelRatio;this.renderTarget1.setSize(n,r),this.renderTarget2.setSize(n,r);for(let e=0;e<this.passes.length;e++)this.passes[e].setSize(n,r)}setPixelRatio(e){this._pixelRatio=e,this.setSize(this._width,this._height)}dispose(){this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.copyPass.dispose()}},wf=class extends gf{constructor(e,t,n=null,r=null,i=null){super(),this.scene=e,this.camera=t,this.overrideMaterial=n,this.clearColor=r,this.clearAlpha=i,this.clear=!0,this.clearDepth=!1,this.needsSwap=!1,this.isRenderPass=!0,this._oldClearColor=new V}render(e,t,n){let r=e.autoClear;e.autoClear=!1;let i,a;this.overrideMaterial!==null&&(a=this.scene.overrideMaterial,this.scene.overrideMaterial=this.overrideMaterial),this.clearColor!==null&&(e.getClearColor(this._oldClearColor),e.setClearColor(this.clearColor,e.getClearAlpha())),this.clearAlpha!==null&&(i=e.getClearAlpha(),e.setClearAlpha(this.clearAlpha)),this.clearDepth==1&&e.clearDepth(),e.setRenderTarget(this.renderToScreen?null:n),this.clear===!0&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),e.render(this.scene,this.camera),this.clearColor!==null&&e.setClearColor(this._oldClearColor),this.clearAlpha!==null&&e.setClearAlpha(i),this.overrideMaterial!==null&&(this.scene.overrideMaterial=a),e.autoClear=r}},Tf={name:`LuminosityHighPassShader`,uniforms:{tDiffuse:{value:null},luminosityThreshold:{value:1},smoothWidth:{value:1},defaultColor:{value:new V(0)},defaultOpacity:{value:0}},vertexShader:`

		varying vec2 vUv;

		void main() {

			vUv = uv;

			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`

		uniform sampler2D tDiffuse;
		uniform vec3 defaultColor;
		uniform float defaultOpacity;
		uniform float luminosityThreshold;
		uniform float smoothWidth;

		varying vec2 vUv;

		void main() {

			vec4 texel = texture2D( tDiffuse, vUv );

			float v = luminance( texel.xyz );

			vec4 outputColor = vec4( defaultColor.rgb, defaultOpacity );

			float alpha = smoothstep( luminosityThreshold, luminosityThreshold + smoothWidth, v );

			gl_FragColor = mix( outputColor, texel, alpha );

		}`},Ef=class e extends gf{constructor(e,t=1,n,r){super(),this.strength=t,this.radius=n,this.threshold=r,this.resolution=e===void 0?new I(256,256):new I(e.x,e.y),this.clearColor=new V(0,0,0),this.needsSwap=!1,this.renderTargetsHorizontal=[],this.renderTargetsVertical=[],this.nMips=5;let i=Math.round(this.resolution.x/2),a=Math.round(this.resolution.y/2);this.renderTargetBright=new fn(i,a,{type:E}),this.renderTargetBright.texture.name=`UnrealBloomPass.bright`,this.renderTargetBright.texture.generateMipmaps=!1;for(let e=0;e<this.nMips;e++){let t=new fn(i,a,{type:E});t.texture.name=`UnrealBloomPass.h`+e,t.texture.generateMipmaps=!1,this.renderTargetsHorizontal.push(t);let n=new fn(i,a,{type:E});n.texture.name=`UnrealBloomPass.v`+e,n.texture.generateMipmaps=!1,this.renderTargetsVertical.push(n),i=Math.round(i/2),a=Math.round(a/2)}let o=Tf;this.highPassUniforms=Ss.clone(o.uniforms),this.highPassUniforms.luminosityThreshold.value=r,this.highPassUniforms.smoothWidth.value=.01,this.materialHighPassFilter=new Ts({uniforms:this.highPassUniforms,vertexShader:o.vertexShader,fragmentShader:o.fragmentShader}),this.separableBlurMaterials=[];let s=[6,10,14,18,22];i=Math.round(this.resolution.x/2),a=Math.round(this.resolution.y/2);for(let e=0;e<this.nMips;e++)this.separableBlurMaterials.push(this._getSeparableBlurMaterial(s[e])),this.separableBlurMaterials[e].uniforms.invSize.value=new I(1/i,1/a),i=Math.round(i/2),a=Math.round(a/2);this.compositeMaterial=this._getCompositeMaterial(this.nMips),this.compositeMaterial.uniforms.blurTexture1.value=this.renderTargetsVertical[0].texture,this.compositeMaterial.uniforms.blurTexture2.value=this.renderTargetsVertical[1].texture,this.compositeMaterial.uniforms.blurTexture3.value=this.renderTargetsVertical[2].texture,this.compositeMaterial.uniforms.blurTexture4.value=this.renderTargetsVertical[3].texture,this.compositeMaterial.uniforms.blurTexture5.value=this.renderTargetsVertical[4].texture,this.compositeMaterial.uniforms.bloomStrength.value=t,this.compositeMaterial.uniforms.bloomRadius.value=.1;let c=[1,.8,.6,.4,.2];this.compositeMaterial.uniforms.bloomFactors.value=c,this.bloomTintColors=[new L(1,1,1),new L(1,1,1),new L(1,1,1),new L(1,1,1),new L(1,1,1)],this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors,this.copyUniforms=Ss.clone(hf.uniforms),this.blendMaterial=new Ts({uniforms:this.copyUniforms,vertexShader:hf.vertexShader,fragmentShader:hf.fragmentShader,premultipliedAlpha:!0,blending:2,depthTest:!1,depthWrite:!1,transparent:!0}),this._oldClearColor=new V,this._oldClearAlpha=1,this._basic=new yi,this._fsQuad=new yf(null)}dispose(){for(let e=0;e<this.renderTargetsHorizontal.length;e++)this.renderTargetsHorizontal[e].dispose();for(let e=0;e<this.renderTargetsVertical.length;e++)this.renderTargetsVertical[e].dispose();this.renderTargetBright.dispose();for(let e=0;e<this.separableBlurMaterials.length;e++)this.separableBlurMaterials[e].dispose();this.compositeMaterial.dispose(),this.blendMaterial.dispose(),this._basic.dispose(),this._fsQuad.dispose()}setSize(e,t){let n=Math.round(e/2),r=Math.round(t/2);this.renderTargetBright.setSize(n,r);for(let e=0;e<this.nMips;e++)this.renderTargetsHorizontal[e].setSize(n,r),this.renderTargetsVertical[e].setSize(n,r),this.separableBlurMaterials[e].uniforms.invSize.value=new I(1/n,1/r),n=Math.round(n/2),r=Math.round(r/2)}render(t,n,r,i,a){t.getClearColor(this._oldClearColor),this._oldClearAlpha=t.getClearAlpha();let o=t.autoClear;t.autoClear=!1,t.setClearColor(this.clearColor,0),a&&t.state.buffers.stencil.setTest(!1),this.renderToScreen&&(this._fsQuad.material=this._basic,this._basic.map=r.texture,t.setRenderTarget(null),t.clear(),this._fsQuad.render(t)),this.highPassUniforms.tDiffuse.value=r.texture,this.highPassUniforms.luminosityThreshold.value=this.threshold,this._fsQuad.material=this.materialHighPassFilter,t.setRenderTarget(this.renderTargetBright),t.clear(),this._fsQuad.render(t);let s=this.renderTargetBright;for(let n=0;n<this.nMips;n++)this._fsQuad.material=this.separableBlurMaterials[n],this.separableBlurMaterials[n].uniforms.colorTexture.value=s.texture,this.separableBlurMaterials[n].uniforms.direction.value=e.BlurDirectionX,t.setRenderTarget(this.renderTargetsHorizontal[n]),t.clear(),this._fsQuad.render(t),this.separableBlurMaterials[n].uniforms.colorTexture.value=this.renderTargetsHorizontal[n].texture,this.separableBlurMaterials[n].uniforms.direction.value=e.BlurDirectionY,t.setRenderTarget(this.renderTargetsVertical[n]),t.clear(),this._fsQuad.render(t),s=this.renderTargetsVertical[n];this._fsQuad.material=this.compositeMaterial,this.compositeMaterial.uniforms.bloomStrength.value=this.strength,this.compositeMaterial.uniforms.bloomRadius.value=this.radius,this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors,t.setRenderTarget(this.renderTargetsHorizontal[0]),t.clear(),this._fsQuad.render(t),this._fsQuad.material=this.blendMaterial,this.copyUniforms.tDiffuse.value=this.renderTargetsHorizontal[0].texture,a&&t.state.buffers.stencil.setTest(!0),this.renderToScreen?(t.setRenderTarget(null),this._fsQuad.render(t)):(t.setRenderTarget(r),this._fsQuad.render(t)),t.setClearColor(this._oldClearColor,this._oldClearAlpha),t.autoClear=o}_getSeparableBlurMaterial(e){let t=[],n=e/3;for(let r=0;r<e;r++)t.push(.39894*Math.exp(-.5*r*r/(n*n))/n);return new Ts({defines:{KERNEL_RADIUS:e},uniforms:{colorTexture:{value:null},invSize:{value:new I(.5,.5)},direction:{value:new I(.5,.5)},gaussianCoefficients:{value:t}},vertexShader:`

				varying vec2 vUv;

				void main() {

					vUv = uv;
					gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

				}`,fragmentShader:`

				#include <common>

				varying vec2 vUv;

				uniform sampler2D colorTexture;
				uniform vec2 invSize;
				uniform vec2 direction;
				uniform float gaussianCoefficients[KERNEL_RADIUS];

				void main() {

					float weightSum = gaussianCoefficients[0];
					vec3 diffuseSum = texture2D( colorTexture, vUv ).rgb * weightSum;

					for ( int i = 1; i < KERNEL_RADIUS; i ++ ) {

						float x = float( i );
						float w = gaussianCoefficients[i];
						vec2 uvOffset = direction * invSize * x;
						vec3 sample1 = texture2D( colorTexture, vUv + uvOffset ).rgb;
						vec3 sample2 = texture2D( colorTexture, vUv - uvOffset ).rgb;
						diffuseSum += ( sample1 + sample2 ) * w;

					}

					gl_FragColor = vec4( diffuseSum, 1.0 );

				}`})}_getCompositeMaterial(e){return new Ts({defines:{NUM_MIPS:e},uniforms:{blurTexture1:{value:null},blurTexture2:{value:null},blurTexture3:{value:null},blurTexture4:{value:null},blurTexture5:{value:null},bloomStrength:{value:1},bloomFactors:{value:null},bloomTintColors:{value:null},bloomRadius:{value:0}},vertexShader:`

				varying vec2 vUv;

				void main() {

					vUv = uv;
					gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

				}`,fragmentShader:`

				varying vec2 vUv;

				uniform sampler2D blurTexture1;
				uniform sampler2D blurTexture2;
				uniform sampler2D blurTexture3;
				uniform sampler2D blurTexture4;
				uniform sampler2D blurTexture5;
				uniform float bloomStrength;
				uniform float bloomRadius;
				uniform float bloomFactors[NUM_MIPS];
				uniform vec3 bloomTintColors[NUM_MIPS];

				float lerpBloomFactor( const in float factor ) {

					float mirrorFactor = 1.2 - factor;
					return mix( factor, mirrorFactor, bloomRadius );

				}

				void main() {

					// 3.0 for backwards compatibility with previous alpha-based intensity
					vec3 bloom = 3.0 * bloomStrength * (
						lerpBloomFactor( bloomFactors[ 0 ] ) * bloomTintColors[ 0 ] * texture2D( blurTexture1, vUv ).rgb +
						lerpBloomFactor( bloomFactors[ 1 ] ) * bloomTintColors[ 1 ] * texture2D( blurTexture2, vUv ).rgb +
						lerpBloomFactor( bloomFactors[ 2 ] ) * bloomTintColors[ 2 ] * texture2D( blurTexture3, vUv ).rgb +
						lerpBloomFactor( bloomFactors[ 3 ] ) * bloomTintColors[ 3 ] * texture2D( blurTexture4, vUv ).rgb +
						lerpBloomFactor( bloomFactors[ 4 ] ) * bloomTintColors[ 4 ] * texture2D( blurTexture5, vUv ).rgb
					);

					float bloomAlpha = max( bloom.r, max( bloom.g, bloom.b ) );
					gl_FragColor = vec4( bloom, bloomAlpha );

				}`})}};Ef.BlurDirectionX=new I(1,0),Ef.BlurDirectionY=new I(0,1);var Df={name:`GTAOShader`,defines:{PERSPECTIVE_CAMERA:1,SAMPLES:16,NORMAL_VECTOR_TYPE:1,DEPTH_SWIZZLING:`x`,SCREEN_SPACE_RADIUS:0,SCREEN_SPACE_RADIUS_SCALE:100,SCENE_CLIP_BOX:0},uniforms:{tNormal:{value:null},tDepth:{value:null},tNoise:{value:null},resolution:{value:new I},cameraNear:{value:null},cameraFar:{value:null},cameraProjectionMatrix:{value:new z},cameraProjectionMatrixInverse:{value:new z},cameraWorldMatrix:{value:new z},radius:{value:.25},distanceExponent:{value:1},thickness:{value:1},distanceFallOff:{value:1},scale:{value:1},sceneBoxMin:{value:new L(-1,-1,-1)},sceneBoxMax:{value:new L(1,1,1)}},vertexShader:`

		varying vec2 vUv;

		void main() {
			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
		}`,fragmentShader:`
		varying vec2 vUv;
		uniform highp sampler2D tNormal;
		uniform highp sampler2D tDepth;
		uniform sampler2D tNoise;
		uniform vec2 resolution;
		uniform float cameraNear;
		uniform float cameraFar;
		uniform mat4 cameraProjectionMatrix;
		uniform mat4 cameraProjectionMatrixInverse;
		uniform mat4 cameraWorldMatrix;
		uniform float radius;
		uniform float distanceExponent;
		uniform float thickness;
		uniform float distanceFallOff;
		uniform float scale;
		#if SCENE_CLIP_BOX == 1
			uniform vec3 sceneBoxMin;
			uniform vec3 sceneBoxMax;
		#endif

		#include <common>
		#include <packing>

		#ifndef FRAGMENT_OUTPUT
		#define FRAGMENT_OUTPUT vec4(vec3(ao), 1.)
		#endif

		vec3 getViewPosition( const in vec2 screenPosition, const in float depth ) {
			#ifdef USE_REVERSED_DEPTH_BUFFER
				vec4 clipSpacePosition = vec4( vec2( screenPosition ) * 2.0 - 1.0, depth, 1.0 );
			#else
				vec4 clipSpacePosition = vec4( vec3( screenPosition, depth ) * 2.0 - 1.0, 1.0 );
			#endif
			vec4 viewSpacePosition = cameraProjectionMatrixInverse * clipSpacePosition;
			return viewSpacePosition.xyz / viewSpacePosition.w;
		}

		float getDepth(const vec2 uv) {
			return textureLod(tDepth, uv.xy, 0.0).DEPTH_SWIZZLING;
		}

		float fetchDepth(const ivec2 uv) {
			return texelFetch(tDepth, uv.xy, 0).DEPTH_SWIZZLING;
		}

		float getViewZ(const in float depth) {
			#if PERSPECTIVE_CAMERA == 1
				return perspectiveDepthToViewZ(depth, cameraNear, cameraFar);
			#else
				return orthographicDepthToViewZ(depth, cameraNear, cameraFar);
			#endif
		}

		vec3 computeNormalFromDepth(const vec2 uv) {
			vec2 size = vec2(textureSize(tDepth, 0));
			ivec2 p = ivec2(uv * size);
			float c0 = fetchDepth(p);
			float l2 = fetchDepth(p - ivec2(2, 0));
			float l1 = fetchDepth(p - ivec2(1, 0));
			float r1 = fetchDepth(p + ivec2(1, 0));
			float r2 = fetchDepth(p + ivec2(2, 0));
			float b2 = fetchDepth(p - ivec2(0, 2));
			float b1 = fetchDepth(p - ivec2(0, 1));
			float t1 = fetchDepth(p + ivec2(0, 1));
			float t2 = fetchDepth(p + ivec2(0, 2));
			float dl = abs((2.0 * l1 - l2) - c0);
			float dr = abs((2.0 * r1 - r2) - c0);
			float db = abs((2.0 * b1 - b2) - c0);
			float dt = abs((2.0 * t1 - t2) - c0);
			vec3 ce = getViewPosition(uv, c0).xyz;
			vec3 dpdx = (dl < dr) ? ce - getViewPosition((uv - vec2(1.0 / size.x, 0.0)), l1).xyz : -ce + getViewPosition((uv + vec2(1.0 / size.x, 0.0)), r1).xyz;
			vec3 dpdy = (db < dt) ? ce - getViewPosition((uv - vec2(0.0, 1.0 / size.y)), b1).xyz : -ce + getViewPosition((uv + vec2(0.0, 1.0 / size.y)), t1).xyz;
			return normalize(cross(dpdx, dpdy));
		}

		vec3 getViewNormal(const vec2 uv) {
			#if NORMAL_VECTOR_TYPE == 2
				return normalize(textureLod(tNormal, uv, 0.).rgb);
			#elif NORMAL_VECTOR_TYPE == 1
				return unpackRGBToNormal(textureLod(tNormal, uv, 0.).rgb);
			#else
				return computeNormalFromDepth(uv);
			#endif
		}

		vec3 getSceneUvAndDepth(vec3 sampleViewPos) {
			vec4 sampleClipPos = cameraProjectionMatrix * vec4(sampleViewPos, 1.);
			vec2 sampleUv = sampleClipPos.xy / sampleClipPos.w * 0.5 + 0.5;
			float sampleSceneDepth = getDepth(sampleUv);
			return vec3(sampleUv, sampleSceneDepth);
		}

		void main() {
			float depth = getDepth(vUv.xy);

			#ifdef USE_REVERSED_DEPTH_BUFFER
				if (depth <= 0.0) {
					discard;
					return;
				}
			#else
				if (depth >= 1.0) {
					discard;
					return;
				}
			#endif
			
			vec3 viewPos = getViewPosition(vUv, depth);
			vec3 viewNormal = getViewNormal(vUv);

			float radiusToUse = radius;
			float distanceFalloffToUse = thickness;
			#if SCREEN_SPACE_RADIUS == 1
				float radiusScale = getViewPosition(vec2(0.5 + float(SCREEN_SPACE_RADIUS_SCALE) / resolution.x, 0.0), depth).x;
				radiusToUse *= radiusScale;
				distanceFalloffToUse *= radiusScale;
			#endif

			#if SCENE_CLIP_BOX == 1
				vec3 worldPos = (cameraWorldMatrix * vec4(viewPos, 1.0)).xyz;
				float boxDistance = length(max(vec3(0.0), max(sceneBoxMin - worldPos, worldPos - sceneBoxMax)));
				if (boxDistance > radiusToUse) {
					discard;
					return;
				}
			#endif

			vec2 noiseResolution = vec2(textureSize(tNoise, 0));
			vec2 noiseUv = vUv * resolution / noiseResolution;
			vec4 noiseTexel = textureLod(tNoise, noiseUv, 0.0);
			vec3 randomVec = noiseTexel.xyz * 2.0 - 1.0;
			vec3 tangent = normalize(vec3(randomVec.xy, 0.));
			vec3 bitangent = vec3(-tangent.y, tangent.x, 0.);
			mat3 kernelMatrix = mat3(tangent, bitangent, vec3(0., 0., 1.));

			const int DIRECTIONS = SAMPLES < 30 ? 3 : 5;
			const int STEPS = (SAMPLES + DIRECTIONS - 1) / DIRECTIONS;
			float ao = 0.0;
			for (int i = 0; i < DIRECTIONS; ++i) {

				float angle = float(i) / float(DIRECTIONS) * PI;
				vec4 sampleDir = vec4(cos(angle), sin(angle), 0., 0.5 + 0.5 * noiseTexel.w);
				sampleDir.xyz = normalize(kernelMatrix * sampleDir.xyz);

				vec3 viewDir = normalize(-viewPos.xyz);
				vec3 sliceBitangent = normalize(cross(sampleDir.xyz, viewDir));
				vec3 sliceTangent = cross(sliceBitangent, viewDir);
				vec3 normalInSlice = normalize(viewNormal - sliceBitangent * dot(viewNormal, sliceBitangent));

				vec3 tangentToNormalInSlice = cross(normalInSlice, sliceBitangent);
				vec2 cosHorizons = vec2(dot(viewDir, tangentToNormalInSlice), dot(viewDir, -tangentToNormalInSlice));

				for (int j = 0; j < STEPS; ++j) {
					vec3 sampleViewOffset = sampleDir.xyz * radiusToUse * sampleDir.w * pow(float(j + 1) / float(STEPS), distanceExponent);

					vec3 sampleSceneUvDepth = getSceneUvAndDepth(viewPos + sampleViewOffset);
					vec3 sampleSceneViewPos = getViewPosition(sampleSceneUvDepth.xy, sampleSceneUvDepth.z);
					vec3 viewDelta = sampleSceneViewPos - viewPos;
					if (abs(viewDelta.z) < thickness) {
						float sampleCosHorizon = dot(viewDir, normalize(viewDelta));
						cosHorizons.x += max(0., (sampleCosHorizon - cosHorizons.x) * mix(1., 2. / float(j + 2), distanceFallOff));
					}

					sampleSceneUvDepth = getSceneUvAndDepth(viewPos - sampleViewOffset);
					sampleSceneViewPos = getViewPosition(sampleSceneUvDepth.xy, sampleSceneUvDepth.z);
					viewDelta = sampleSceneViewPos - viewPos;
					if (abs(viewDelta.z) < thickness) {
						float sampleCosHorizon = dot(viewDir, normalize(viewDelta));
						cosHorizons.y += max(0., (sampleCosHorizon - cosHorizons.y) * mix(1., 2. / float(j + 2), distanceFallOff));
					}
				}

				vec2 sinHorizons = sqrt(1. - cosHorizons * cosHorizons);
				float nx = dot(normalInSlice, sliceTangent);
				float ny = dot(normalInSlice, viewDir);
				float nxb = 1. / 2. * (acos(cosHorizons.y) - acos(cosHorizons.x) + sinHorizons.x * cosHorizons.x - sinHorizons.y * cosHorizons.y);
				float nyb = 1. / 2. * (2. - cosHorizons.x * cosHorizons.x - cosHorizons.y * cosHorizons.y);
				float occlusion = nx * nxb + ny * nyb;
				ao += occlusion;
			}

			ao = clamp(ao / float(DIRECTIONS), 0., 1.);
		#if SCENE_CLIP_BOX == 1
			ao = mix(ao, 1., smoothstep(0., radiusToUse, boxDistance));
		#endif
			ao = pow(ao, scale);

			gl_FragColor = FRAGMENT_OUTPUT;
		}`},Of={name:`GTAODepthShader`,defines:{PERSPECTIVE_CAMERA:1},uniforms:{tDepth:{value:null},cameraNear:{value:null},cameraFar:{value:null}},vertexShader:`
		varying vec2 vUv;

		void main() {
			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
		}`,fragmentShader:`
		uniform sampler2D tDepth;
		uniform float cameraNear;
		uniform float cameraFar;
		varying vec2 vUv;

		#include <packing>

		float getLinearDepth( const in vec2 screenPosition ) {
			#if PERSPECTIVE_CAMERA == 1
				float fragCoordZ = texture2D( tDepth, screenPosition ).x;
				float viewZ = perspectiveDepthToViewZ( fragCoordZ, cameraNear, cameraFar );
				return viewZToOrthographicDepth( viewZ, cameraNear, cameraFar );
			#else
				return texture2D( tDepth, screenPosition ).x;
			#endif
		}

		void main() {
			float depth = getLinearDepth( vUv );
			gl_FragColor = vec4( vec3( 1.0 - depth ), 1.0 );

		}`},kf={name:`GTAOBlendShader`,uniforms:{tDiffuse:{value:null},intensity:{value:1}},vertexShader:`
		varying vec2 vUv;

		void main() {
			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
		}`,fragmentShader:`
		uniform float intensity;
		uniform sampler2D tDiffuse;
		varying vec2 vUv;

		void main() {
			vec4 texel = texture2D( tDiffuse, vUv );
			gl_FragColor = vec4(mix(vec3(1.), texel.rgb, intensity), texel.a);
		}`};function Af(e=5){let t=Math.floor(e)%2==0?Math.floor(e)+1:Math.floor(e),n=jf(t),r=n.length,i=new Uint8Array(r*4);for(let e=0;e<r;++e){let t=n[e],a=2*Math.PI*t/r,o=new L(Math.cos(a),Math.sin(a),0).normalize();i[e*4]=(o.x*.5+.5)*255,i[e*4+1]=(o.y*.5+.5)*255,i[e*4+2]=127,i[e*4+3]=255}let a=new Wi(i,t,t);return a.wrapS=u,a.wrapT=u,a.needsUpdate=!0,a}function jf(e){let t=Math.floor(e)%2==0?Math.floor(e)+1:Math.floor(e),n=t*t,r=Array(n).fill(0),i=Math.floor(t/2),a=t-1;for(let e=1;e<=n;){if(i===-1&&a===t?(a=t-2,i=0):(a===t&&(a=0),i<0&&(i=t-1)),r[i*t+a]!==0){a-=2,i++;continue}else r[i*t+a]=e++;a++,i--}return r}var Mf={name:`PoissonDenoiseShader`,defines:{SAMPLES:16,SAMPLE_VECTORS:Nf(16,2,1),NORMAL_VECTOR_TYPE:1,DEPTH_VALUE_SOURCE:0},uniforms:{tDiffuse:{value:null},tNormal:{value:null},tDepth:{value:null},tNoise:{value:null},resolution:{value:new I},cameraProjectionMatrixInverse:{value:new z},lumaPhi:{value:5},depthPhi:{value:5},normalPhi:{value:5},radius:{value:4},index:{value:0}},vertexShader:`

		varying vec2 vUv;

		void main() {
			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
		}`,fragmentShader:`

		varying vec2 vUv;

		uniform sampler2D tDiffuse;
		uniform sampler2D tNormal;
		uniform sampler2D tDepth;
		uniform sampler2D tNoise;
		uniform vec2 resolution;
		uniform mat4 cameraProjectionMatrixInverse;
		uniform float lumaPhi;
		uniform float depthPhi;
		uniform float normalPhi;
		uniform float radius;
		uniform int index;

		#include <common>
		#include <packing>

		#ifndef SAMPLE_LUMINANCE
		#define SAMPLE_LUMINANCE dot(vec3(0.2125, 0.7154, 0.0721), a)
		#endif

		#ifndef FRAGMENT_OUTPUT
		#define FRAGMENT_OUTPUT vec4(denoised, 1.)
		#endif

		float getLuminance(const in vec3 a) {
			return SAMPLE_LUMINANCE;
		}

		const vec3 poissonDisk[SAMPLES] = SAMPLE_VECTORS;

		vec3 getViewPosition( const in vec2 screenPosition, const in float depth ) {
			#ifdef USE_REVERSED_DEPTH_BUFFER
				vec4 clipSpacePosition = vec4( vec2( screenPosition ) * 2.0 - 1.0, depth, 1.0 );
			#else
				vec4 clipSpacePosition = vec4( vec3( screenPosition, depth ) * 2.0 - 1.0, 1.0 );
			#endif
			vec4 viewSpacePosition = cameraProjectionMatrixInverse * clipSpacePosition;
			return viewSpacePosition.xyz / viewSpacePosition.w;
		}

		float getDepth(const vec2 uv) {
		#if DEPTH_VALUE_SOURCE == 1
			return textureLod(tDepth, uv.xy, 0.0).a;
		#else
			return textureLod(tDepth, uv.xy, 0.0).r;
		#endif
		}

		float fetchDepth(const ivec2 uv) {
			#if DEPTH_VALUE_SOURCE == 1
				return texelFetch(tDepth, uv.xy, 0).a;
			#else
				return texelFetch(tDepth, uv.xy, 0).r;
			#endif
		}

		vec3 computeNormalFromDepth(const vec2 uv) {
			vec2 size = vec2(textureSize(tDepth, 0));
			ivec2 p = ivec2(uv * size);
			float c0 = fetchDepth(p);
			float l2 = fetchDepth(p - ivec2(2, 0));
			float l1 = fetchDepth(p - ivec2(1, 0));
			float r1 = fetchDepth(p + ivec2(1, 0));
			float r2 = fetchDepth(p + ivec2(2, 0));
			float b2 = fetchDepth(p - ivec2(0, 2));
			float b1 = fetchDepth(p - ivec2(0, 1));
			float t1 = fetchDepth(p + ivec2(0, 1));
			float t2 = fetchDepth(p + ivec2(0, 2));
			float dl = abs((2.0 * l1 - l2) - c0);
			float dr = abs((2.0 * r1 - r2) - c0);
			float db = abs((2.0 * b1 - b2) - c0);
			float dt = abs((2.0 * t1 - t2) - c0);
			vec3 ce = getViewPosition(uv, c0).xyz;
			vec3 dpdx = (dl < dr) ?  ce - getViewPosition((uv - vec2(1.0 / size.x, 0.0)), l1).xyz
									: -ce + getViewPosition((uv + vec2(1.0 / size.x, 0.0)), r1).xyz;
			vec3 dpdy = (db < dt) ?  ce - getViewPosition((uv - vec2(0.0, 1.0 / size.y)), b1).xyz
									: -ce + getViewPosition((uv + vec2(0.0, 1.0 / size.y)), t1).xyz;
			return normalize(cross(dpdx, dpdy));
		}

		vec3 getViewNormal(const vec2 uv) {
		#if NORMAL_VECTOR_TYPE == 2
			return normalize(textureLod(tNormal, uv, 0.).rgb);
		#elif NORMAL_VECTOR_TYPE == 1
			return unpackRGBToNormal(textureLod(tNormal, uv, 0.).rgb);
		#else
			return computeNormalFromDepth(uv);
		#endif
		}

		void denoiseSample(in vec3 center, in vec3 viewNormal, in vec3 viewPos, in vec2 sampleUv, inout vec3 denoised, inout float totalWeight) {
			vec4 sampleTexel = textureLod(tDiffuse, sampleUv, 0.0);
			float sampleDepth = getDepth(sampleUv);
			vec3 sampleNormal = getViewNormal(sampleUv);
			vec3 neighborColor = sampleTexel.rgb;
			vec3 viewPosSample = getViewPosition(sampleUv, sampleDepth);

			float normalDiff = dot(viewNormal, sampleNormal);
			float normalSimilarity = pow(max(normalDiff, 0.), normalPhi);
			float lumaDiff = abs(getLuminance(neighborColor) - getLuminance(center));
			float lumaSimilarity = max(1.0 - lumaDiff / lumaPhi, 0.0);
			float depthDiff = abs(dot(viewPos - viewPosSample, viewNormal));
			float depthSimilarity = max(1. - depthDiff / depthPhi, 0.);
			float w = lumaSimilarity * depthSimilarity * normalSimilarity;

			denoised += w * neighborColor;
			totalWeight += w;
		}

		void main() {
			float depth = getDepth(vUv.xy);
			vec3 viewNormal = getViewNormal(vUv);
			if (depth == 1. || dot(viewNormal, viewNormal) == 0.) {
				discard;
				return;
			}
			vec4 texel = textureLod(tDiffuse, vUv, 0.0);
			vec3 center = texel.rgb;
			vec3 viewPos = getViewPosition(vUv, depth);

			vec2 noiseResolution = vec2(textureSize(tNoise, 0));
			vec2 noiseUv = vUv * resolution / noiseResolution;
			vec4 noiseTexel = textureLod(tNoise, noiseUv, 0.0);
      		vec2 noiseVec = vec2(sin(noiseTexel[index % 4] * 2. * PI), cos(noiseTexel[index % 4] * 2. * PI));
    		mat2 rotationMatrix = mat2(noiseVec.x, -noiseVec.y, noiseVec.x, noiseVec.y);

			float totalWeight = 1.0;
			vec3 denoised = texel.rgb;
			for (int i = 0; i < SAMPLES; i++) {
				vec3 sampleDir = poissonDisk[i];
				vec2 offset = rotationMatrix * (sampleDir.xy * (1. + sampleDir.z * (radius - 1.)) / resolution);
				vec2 sampleUv = vUv + offset;
				denoiseSample(center, viewNormal, viewPos, sampleUv, denoised, totalWeight);
			}

			if (totalWeight > 0.) {
				denoised /= totalWeight;
			}
			gl_FragColor = FRAGMENT_OUTPUT;
		}`};function Nf(e,t,n){let r=Pf(e,t,n),i=`vec3[SAMPLES](`;for(let t=0;t<e;t++){let n=r[t];i+=`vec3(${n.x}, ${n.y}, ${n.z})${t<e-1?`,`:`)`}`}return i}function Pf(e,t,n){let r=[];for(let i=0;i<e;i++){let a=2*Math.PI*t*i/e,o=(i/(e-1))**n;r.push(new L(Math.cos(a),Math.sin(a),o))}return r}var Ff=class{constructor(e=Math){this.grad3=[[1,1,0],[-1,1,0],[1,-1,0],[-1,-1,0],[1,0,1],[-1,0,1],[1,0,-1],[-1,0,-1],[0,1,1],[0,-1,1],[0,1,-1],[0,-1,-1]],this.grad4=[[0,1,1,1],[0,1,1,-1],[0,1,-1,1],[0,1,-1,-1],[0,-1,1,1],[0,-1,1,-1],[0,-1,-1,1],[0,-1,-1,-1],[1,0,1,1],[1,0,1,-1],[1,0,-1,1],[1,0,-1,-1],[-1,0,1,1],[-1,0,1,-1],[-1,0,-1,1],[-1,0,-1,-1],[1,1,0,1],[1,1,0,-1],[1,-1,0,1],[1,-1,0,-1],[-1,1,0,1],[-1,1,0,-1],[-1,-1,0,1],[-1,-1,0,-1],[1,1,1,0],[1,1,-1,0],[1,-1,1,0],[1,-1,-1,0],[-1,1,1,0],[-1,1,-1,0],[-1,-1,1,0],[-1,-1,-1,0]],this.p=[];for(let t=0;t<256;t++)this.p[t]=Math.floor(e.random()*256);this.perm=[];for(let e=0;e<512;e++)this.perm[e]=this.p[e&255];this.simplex=[[0,1,2,3],[0,1,3,2],[0,0,0,0],[0,2,3,1],[0,0,0,0],[0,0,0,0],[0,0,0,0],[1,2,3,0],[0,2,1,3],[0,0,0,0],[0,3,1,2],[0,3,2,1],[0,0,0,0],[0,0,0,0],[0,0,0,0],[1,3,2,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[1,2,0,3],[0,0,0,0],[1,3,0,2],[0,0,0,0],[0,0,0,0],[0,0,0,0],[2,3,0,1],[2,3,1,0],[1,0,2,3],[1,0,3,2],[0,0,0,0],[0,0,0,0],[0,0,0,0],[2,0,3,1],[0,0,0,0],[2,1,3,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[2,0,1,3],[0,0,0,0],[0,0,0,0],[0,0,0,0],[3,0,1,2],[3,0,2,1],[0,0,0,0],[3,1,2,0],[2,1,0,3],[0,0,0,0],[0,0,0,0],[0,0,0,0],[3,1,0,2],[0,0,0,0],[3,2,0,1],[3,2,1,0]]}noise(e,t){let n,r,i,a=.5*(Math.sqrt(3)-1),o=(e+t)*a,s=Math.floor(e+o),c=Math.floor(t+o),l=(3-Math.sqrt(3))/6,u=(s+c)*l,d=s-u,f=c-u,p=e-d,m=t-f,h,g;p>m?(h=1,g=0):(h=0,g=1);let _=p-h+l,v=m-g+l,y=p-1+2*l,b=m-1+2*l,x=s&255,S=c&255,C=this.perm[x+this.perm[S]]%12,w=this.perm[x+h+this.perm[S+g]]%12,T=this.perm[x+1+this.perm[S+1]]%12,E=.5-p*p-m*m;E<0?n=0:(E*=E,n=E*E*this._dot(this.grad3[C],p,m));let D=.5-_*_-v*v;D<0?r=0:(D*=D,r=D*D*this._dot(this.grad3[w],_,v));let ee=.5-y*y-b*b;return ee<0?i=0:(ee*=ee,i=ee*ee*this._dot(this.grad3[T],y,b)),70*(n+r+i)}noise3d(e,t,n){let r,i,a,o,s=(e+t+n)*(1/3),c=Math.floor(e+s),l=Math.floor(t+s),u=Math.floor(n+s),d=1/6,f=(c+l+u)*d,p=c-f,m=l-f,h=u-f,g=e-p,_=t-m,v=n-h,y,b,x,S,C,w;g>=_?_>=v?(y=1,b=0,x=0,S=1,C=1,w=0):g>=v?(y=1,b=0,x=0,S=1,C=0,w=1):(y=0,b=0,x=1,S=1,C=0,w=1):_<v?(y=0,b=0,x=1,S=0,C=1,w=1):g<v?(y=0,b=1,x=0,S=0,C=1,w=1):(y=0,b=1,x=0,S=1,C=1,w=0);let T=g-y+d,E=_-b+d,D=v-x+d,ee=g-S+2*d,te=_-C+2*d,O=v-w+2*d,ne=g-1+3*d,re=_-1+3*d,k=v-1+3*d,ie=c&255,ae=l&255,oe=u&255,se=this.perm[ie+this.perm[ae+this.perm[oe]]]%12,ce=this.perm[ie+y+this.perm[ae+b+this.perm[oe+x]]]%12,le=this.perm[ie+S+this.perm[ae+C+this.perm[oe+w]]]%12,ue=this.perm[ie+1+this.perm[ae+1+this.perm[oe+1]]]%12,de=.6-g*g-_*_-v*v;de<0?r=0:(de*=de,r=de*de*this._dot3(this.grad3[se],g,_,v));let fe=.6-T*T-E*E-D*D;fe<0?i=0:(fe*=fe,i=fe*fe*this._dot3(this.grad3[ce],T,E,D));let pe=.6-ee*ee-te*te-O*O;pe<0?a=0:(pe*=pe,a=pe*pe*this._dot3(this.grad3[le],ee,te,O));let me=.6-ne*ne-re*re-k*k;return me<0?o=0:(me*=me,o=me*me*this._dot3(this.grad3[ue],ne,re,k)),32*(r+i+a+o)}noise4d(e,t,n,r){let i=this.grad4,a=this.simplex,o=this.perm,s=(Math.sqrt(5)-1)/4,c=(5-Math.sqrt(5))/20,l,u,d,f,p,m=(e+t+n+r)*s,h=Math.floor(e+m),g=Math.floor(t+m),_=Math.floor(n+m),v=Math.floor(r+m),y=(h+g+_+v)*c,b=h-y,x=g-y,S=_-y,C=v-y,w=e-b,T=t-x,E=n-S,D=r-C,ee=w>T?32:0,te=w>E?16:0,O=T>E?8:0,ne=w>D?4:0,re=T>D?2:0,k=+(E>D),ie=ee+te+O+ne+re+k,ae=+(a[ie][0]>=3),oe=+(a[ie][1]>=3),se=+(a[ie][2]>=3),ce=+(a[ie][3]>=3),le=+(a[ie][0]>=2),ue=+(a[ie][1]>=2),de=+(a[ie][2]>=2),fe=+(a[ie][3]>=2),pe=+(a[ie][0]>=1),me=+(a[ie][1]>=1),he=+(a[ie][2]>=1),ge=+(a[ie][3]>=1),_e=w-ae+c,ve=T-oe+c,ye=E-se+c,be=D-ce+c,xe=w-le+2*c,Se=T-ue+2*c,Ce=E-de+2*c,we=D-fe+2*c,Te=w-pe+3*c,Ee=T-me+3*c,De=E-he+3*c,Oe=D-ge+3*c,ke=w-1+4*c,Ae=T-1+4*c,je=E-1+4*c,Me=D-1+4*c,Ne=h&255,Pe=g&255,Fe=_&255,A=v&255,Ie=o[Ne+o[Pe+o[Fe+o[A]]]]%32,Le=o[Ne+ae+o[Pe+oe+o[Fe+se+o[A+ce]]]]%32,Re=o[Ne+le+o[Pe+ue+o[Fe+de+o[A+fe]]]]%32,j=o[Ne+pe+o[Pe+me+o[Fe+he+o[A+ge]]]]%32,ze=o[Ne+1+o[Pe+1+o[Fe+1+o[A+1]]]]%32,M=.6-w*w-T*T-E*E-D*D;M<0?l=0:(M*=M,l=M*M*this._dot4(i[Ie],w,T,E,D));let Be=.6-_e*_e-ve*ve-ye*ye-be*be;Be<0?u=0:(Be*=Be,u=Be*Be*this._dot4(i[Le],_e,ve,ye,be));let Ve=.6-xe*xe-Se*Se-Ce*Ce-we*we;Ve<0?d=0:(Ve*=Ve,d=Ve*Ve*this._dot4(i[Re],xe,Se,Ce,we));let He=.6-Te*Te-Ee*Ee-De*De-Oe*Oe;He<0?f=0:(He*=He,f=He*He*this._dot4(i[j],Te,Ee,De,Oe));let Ue=.6-ke*ke-Ae*Ae-je*je-Me*Me;return Ue<0?p=0:(Ue*=Ue,p=Ue*Ue*this._dot4(i[ze],ke,Ae,je,Me)),27*(l+u+d+f+p)}_dot(e,t,n){return e[0]*t+e[1]*n}_dot3(e,t,n,r){return e[0]*t+e[1]*n+e[2]*r}_dot4(e,t,n,r,i){return e[0]*t+e[1]*n+e[2]*r+e[3]*i}},If=class e extends gf{constructor(e,t,n=512,r=512,i,a,o){super(),this.width=n,this.height=r,this.clear=!0,this.camera=t,this.scene=e,this.output=0,this._renderGBuffer=!0,this._visibilityCache=[],this.blendIntensity=1,this.pdRings=2,this.pdRadiusExponent=2,this.pdSamples=16,this.gtaoNoiseTexture=Af(),this.pdNoiseTexture=this._generateNoise(),this.gtaoRenderTarget=new fn(this.width,this.height,{type:E}),this.pdRenderTarget=this.gtaoRenderTarget.clone(),this.gtaoMaterial=new Ts({defines:Object.assign({},Df.defines),uniforms:Ss.clone(Df.uniforms),vertexShader:Df.vertexShader,fragmentShader:Df.fragmentShader,blending:0,depthTest:!1,depthWrite:!1}),this.gtaoMaterial.defines.PERSPECTIVE_CAMERA=+!!this.camera.isPerspectiveCamera,this.gtaoMaterial.uniforms.tNoise.value=this.gtaoNoiseTexture,this.gtaoMaterial.uniforms.resolution.value.set(this.width,this.height),this.gtaoMaterial.uniforms.cameraNear.value=this.camera.near,this.gtaoMaterial.uniforms.cameraFar.value=this.camera.far,this.normalMaterial=new Os,this.normalMaterial.blending=0,this.pdMaterial=new Ts({defines:Object.assign({},Mf.defines),uniforms:Ss.clone(Mf.uniforms),vertexShader:Mf.vertexShader,fragmentShader:Mf.fragmentShader,depthTest:!1,depthWrite:!1}),this.pdMaterial.uniforms.tDiffuse.value=this.gtaoRenderTarget.texture,this.pdMaterial.uniforms.tNoise.value=this.pdNoiseTexture,this.pdMaterial.uniforms.resolution.value.set(this.width,this.height),this.pdMaterial.uniforms.lumaPhi.value=10,this.pdMaterial.uniforms.depthPhi.value=2,this.pdMaterial.uniforms.normalPhi.value=3,this.pdMaterial.uniforms.radius.value=8,this.depthRenderMaterial=new Ts({defines:Object.assign({},Of.defines),uniforms:Ss.clone(Of.uniforms),vertexShader:Of.vertexShader,fragmentShader:Of.fragmentShader,blending:0}),this.depthRenderMaterial.uniforms.cameraNear.value=this.camera.near,this.depthRenderMaterial.uniforms.cameraFar.value=this.camera.far,this.copyMaterial=new Ts({uniforms:Ss.clone(hf.uniforms),vertexShader:hf.vertexShader,fragmentShader:hf.fragmentShader,transparent:!0,depthTest:!1,depthWrite:!1,blendSrc:208,blendDst:200,blendEquation:100,blendSrcAlpha:206,blendDstAlpha:200,blendEquationAlpha:100}),this.blendMaterial=new Ts({uniforms:Ss.clone(kf.uniforms),vertexShader:kf.vertexShader,fragmentShader:kf.fragmentShader,transparent:!0,depthTest:!1,depthWrite:!1,blending:5,blendSrc:208,blendDst:200,blendEquation:100,blendSrcAlpha:206,blendDstAlpha:200,blendEquationAlpha:100}),this._fsQuad=new yf(null),this._originalClearColor=new V,this.setGBuffer(i?i.depthTexture:void 0,i?i.normalTexture:void 0),a!==void 0&&this.updateGtaoMaterial(a),o!==void 0&&this.updatePdMaterial(o)}setSize(e,t){this.width=e,this.height=t,this.gtaoRenderTarget.setSize(e,t),this.normalRenderTarget.setSize(e,t),this.pdRenderTarget.setSize(e,t),this.gtaoMaterial.uniforms.resolution.value.set(e,t),this.gtaoMaterial.uniforms.cameraProjectionMatrix.value.copy(this.camera.projectionMatrix),this.gtaoMaterial.uniforms.cameraProjectionMatrixInverse.value.copy(this.camera.projectionMatrixInverse),this.pdMaterial.uniforms.resolution.value.set(e,t),this.pdMaterial.uniforms.cameraProjectionMatrixInverse.value.copy(this.camera.projectionMatrixInverse)}dispose(){this.gtaoNoiseTexture.dispose(),this.pdNoiseTexture.dispose(),this.normalRenderTarget.dispose(),this.gtaoRenderTarget.dispose(),this.pdRenderTarget.dispose(),this.normalMaterial.dispose(),this.pdMaterial.dispose(),this.copyMaterial.dispose(),this.depthRenderMaterial.dispose(),this._fsQuad.dispose()}get gtaoMap(){return this.pdRenderTarget.texture}setGBuffer(e,t){e===void 0?(this.depthTexture=new Pa,this.depthTexture.format=oe,this.depthTexture.type=te,this.normalRenderTarget=new fn(this.width,this.height,{minFilter:p,magFilter:p,type:E,depthTexture:this.depthTexture}),this.normalTexture=this.normalRenderTarget.texture,this._renderGBuffer=!0):(this.depthTexture=e,this.normalTexture=t,this._renderGBuffer=!1);let n=+!!this.normalTexture,r=this.depthTexture===this.normalTexture?`w`:`x`;this.gtaoMaterial.defines.NORMAL_VECTOR_TYPE=n,this.gtaoMaterial.defines.DEPTH_SWIZZLING=r,this.gtaoMaterial.uniforms.tNormal.value=this.normalTexture,this.gtaoMaterial.uniforms.tDepth.value=this.depthTexture,this.pdMaterial.defines.NORMAL_VECTOR_TYPE=n,this.pdMaterial.defines.DEPTH_SWIZZLING=r,this.pdMaterial.uniforms.tNormal.value=this.normalTexture,this.pdMaterial.uniforms.tDepth.value=this.depthTexture,this.depthRenderMaterial.uniforms.tDepth.value=this.normalRenderTarget.depthTexture}setSceneClipBox(e){e?(this.gtaoMaterial.needsUpdate=this.gtaoMaterial.defines.SCENE_CLIP_BOX!==1,this.gtaoMaterial.defines.SCENE_CLIP_BOX=1,this.gtaoMaterial.uniforms.sceneBoxMin.value.copy(e.min),this.gtaoMaterial.uniforms.sceneBoxMax.value.copy(e.max)):(this.gtaoMaterial.needsUpdate=this.gtaoMaterial.defines.SCENE_CLIP_BOX===0,this.gtaoMaterial.defines.SCENE_CLIP_BOX=0)}updateGtaoMaterial(e){e.radius!==void 0&&(this.gtaoMaterial.uniforms.radius.value=e.radius),e.distanceExponent!==void 0&&(this.gtaoMaterial.uniforms.distanceExponent.value=e.distanceExponent),e.thickness!==void 0&&(this.gtaoMaterial.uniforms.thickness.value=e.thickness),e.distanceFallOff!==void 0&&(this.gtaoMaterial.uniforms.distanceFallOff.value=e.distanceFallOff,this.gtaoMaterial.needsUpdate=!0),e.scale!==void 0&&(this.gtaoMaterial.uniforms.scale.value=e.scale),e.samples!==void 0&&e.samples!==this.gtaoMaterial.defines.SAMPLES&&(this.gtaoMaterial.defines.SAMPLES=e.samples,this.gtaoMaterial.needsUpdate=!0),e.screenSpaceRadius!==void 0&&+!!e.screenSpaceRadius!==this.gtaoMaterial.defines.SCREEN_SPACE_RADIUS&&(this.gtaoMaterial.defines.SCREEN_SPACE_RADIUS=+!!e.screenSpaceRadius,this.gtaoMaterial.needsUpdate=!0)}updatePdMaterial(e){let t=!1;e.lumaPhi!==void 0&&(this.pdMaterial.uniforms.lumaPhi.value=e.lumaPhi),e.depthPhi!==void 0&&(this.pdMaterial.uniforms.depthPhi.value=e.depthPhi),e.normalPhi!==void 0&&(this.pdMaterial.uniforms.normalPhi.value=e.normalPhi),e.radius!==void 0&&e.radius!==this.radius&&(this.pdMaterial.uniforms.radius.value=e.radius),e.radiusExponent!==void 0&&e.radiusExponent!==this.pdRadiusExponent&&(this.pdRadiusExponent=e.radiusExponent,t=!0),e.rings!==void 0&&e.rings!==this.pdRings&&(this.pdRings=e.rings,t=!0),e.samples!==void 0&&e.samples!==this.pdSamples&&(this.pdSamples=e.samples,t=!0),t&&(this.pdMaterial.defines.SAMPLES=this.pdSamples,this.pdMaterial.defines.SAMPLE_VECTORS=Nf(this.pdSamples,this.pdRings,this.pdRadiusExponent),this.pdMaterial.needsUpdate=!0)}render(t,n,r){switch(this._renderGBuffer&&(this._overrideVisibility(),this._renderOverride(t,this.normalMaterial,this.normalRenderTarget,7829503,1),this._restoreVisibility()),this.gtaoMaterial.uniforms.cameraNear.value=this.camera.near,this.gtaoMaterial.uniforms.cameraFar.value=this.camera.far,this.gtaoMaterial.uniforms.cameraProjectionMatrix.value.copy(this.camera.projectionMatrix),this.gtaoMaterial.uniforms.cameraProjectionMatrixInverse.value.copy(this.camera.projectionMatrixInverse),this.gtaoMaterial.uniforms.cameraWorldMatrix.value.copy(this.camera.matrixWorld),this._renderPass(t,this.gtaoMaterial,this.gtaoRenderTarget,16777215,1),this.pdMaterial.uniforms.cameraProjectionMatrixInverse.value.copy(this.camera.projectionMatrixInverse),this._renderPass(t,this.pdMaterial,this.pdRenderTarget,16777215,1),this.output){case e.OUTPUT.Off:break;case e.OUTPUT.Diffuse:this.copyMaterial.uniforms.tDiffuse.value=r.texture,this.copyMaterial.blending=0,this._renderPass(t,this.copyMaterial,this.renderToScreen?null:n);break;case e.OUTPUT.AO:this.copyMaterial.uniforms.tDiffuse.value=this.gtaoRenderTarget.texture,this.copyMaterial.blending=0,this._renderPass(t,this.copyMaterial,this.renderToScreen?null:n);break;case e.OUTPUT.Denoise:this.copyMaterial.uniforms.tDiffuse.value=this.pdRenderTarget.texture,this.copyMaterial.blending=0,this._renderPass(t,this.copyMaterial,this.renderToScreen?null:n);break;case e.OUTPUT.Depth:this.depthRenderMaterial.uniforms.cameraNear.value=this.camera.near,this.depthRenderMaterial.uniforms.cameraFar.value=this.camera.far,this._renderPass(t,this.depthRenderMaterial,this.renderToScreen?null:n);break;case e.OUTPUT.Normal:this.copyMaterial.uniforms.tDiffuse.value=this.normalRenderTarget.texture,this.copyMaterial.blending=0,this._renderPass(t,this.copyMaterial,this.renderToScreen?null:n);break;case e.OUTPUT.Default:this.copyMaterial.uniforms.tDiffuse.value=r.texture,this.copyMaterial.blending=0,this._renderPass(t,this.copyMaterial,this.renderToScreen?null:n),this.blendMaterial.uniforms.intensity.value=this.blendIntensity,this.blendMaterial.uniforms.tDiffuse.value=this.pdRenderTarget.texture,this._renderPass(t,this.blendMaterial,this.renderToScreen?null:n);break;default:console.warn(`THREE.GTAOPass: Unknown output type.`)}}_renderPass(e,t,n,r,i){e.getClearColor(this._originalClearColor);let a=e.getClearAlpha(),o=e.autoClear;e.setRenderTarget(n),e.autoClear=!1,r!=null&&(e.setClearColor(r),e.setClearAlpha(i||0),e.clear()),this._fsQuad.material=t,this._fsQuad.render(e),e.autoClear=o,e.setClearColor(this._originalClearColor),e.setClearAlpha(a)}_renderOverride(e,t,n,r,i){e.getClearColor(this._originalClearColor);let a=e.getClearAlpha(),o=e.autoClear;e.setRenderTarget(n),e.autoClear=!1,r=t.clearColor||r,i=t.clearAlpha||i,r!=null&&(e.setClearColor(r),e.setClearAlpha(i||0),e.clear()),this.scene.overrideMaterial=t,e.render(this.scene,this.camera),this.scene.overrideMaterial=null,e.autoClear=o,e.setClearColor(this._originalClearColor),e.setClearAlpha(a)}_overrideVisibility(){let e=this.scene,t=this._visibilityCache;e.traverse(function(e){(e.isPoints||e.isLine||e.isLine2)&&e.visible&&(e.visible=!1,t.push(e))})}_restoreVisibility(){let e=this._visibilityCache;for(let t=0;t<e.length;t++)e[t].visible=!0;e.length=0}_generateNoise(e=64){let t=new Ff,n=e*e*4,r=new Uint8Array(n);for(let n=0;n<e;n++)for(let i=0;i<e;i++){let a=n,o=i;r[(n*e+i)*4]=(t.noise(a,o)*.5+.5)*255,r[(n*e+i)*4+1]=(t.noise(a+e,o)*.5+.5)*255,r[(n*e+i)*4+2]=(t.noise(a,o+e)*.5+.5)*255,r[(n*e+i)*4+3]=(t.noise(a+e,o+e)*.5+.5)*255}let i=new Wi(r,e,e,ie,y);return i.wrapS=u,i.wrapT=u,i.needsUpdate=!0,i}};If.OUTPUT={Off:-1,Default:0,Diffuse:1,Depth:2,Normal:3,AO:4,Denoise:5};var Lf=class extends Xn{constructor(){super(),this.name=`RoomEnvironment`,this.position.y=-3.5;let e=new W;e.deleteAttribute(`uv`);let t=new K({side:1}),n=new K,r=new q(16777215,900,28,2);r.position.set(.418,16.199,.3),this.add(r);let i=new U(e,t);i.position.set(-.757,13.219,.717),i.scale.set(31.713,28.305,28.591),this.add(i);let a=new na(e,n,6),o=new Vn;o.position.set(-10.906,2.009,1.846),o.rotation.set(0,-.195,0),o.scale.set(2.328,7.905,4.651),o.updateMatrix(),a.setMatrixAt(0,o.matrix),o.position.set(-5.607,-.754,-.758),o.rotation.set(0,.994,0),o.scale.set(1.97,1.534,3.955),o.updateMatrix(),a.setMatrixAt(1,o.matrix),o.position.set(6.167,.857,7.803),o.rotation.set(0,.561,0),o.scale.set(3.927,6.285,3.687),o.updateMatrix(),a.setMatrixAt(2,o.matrix),o.position.set(-2.017,.018,6.124),o.rotation.set(0,.333,0),o.scale.set(2.002,4.566,2.064),o.updateMatrix(),a.setMatrixAt(3,o.matrix),o.position.set(2.291,-.756,-2.621),o.rotation.set(0,-.286,0),o.scale.set(1.546,1.552,1.496),o.updateMatrix(),a.setMatrixAt(4,o.matrix),o.position.set(-2.193,-.369,-5.547),o.rotation.set(0,.516,0),o.scale.set(3.875,3.487,2.986),o.updateMatrix(),a.setMatrixAt(5,o.matrix),this.add(a);let s=new U(e,Rf(50));s.position.set(-16.116,14.37,8.208),s.scale.set(.1,2.428,2.739),this.add(s);let c=new U(e,Rf(50));c.position.set(-16.109,18.021,-8.207),c.scale.set(.1,2.425,2.751),this.add(c);let l=new U(e,Rf(17));l.position.set(14.904,12.198,-1.832),l.scale.set(.15,4.265,6.331),this.add(l);let u=new U(e,Rf(43));u.position.set(-.462,8.89,14.52),u.scale.set(4.38,5.441,.088),this.add(u);let d=new U(e,Rf(20));d.position.set(3.235,11.486,-12.541),d.scale.set(2.5,2,.1),this.add(d);let f=new U(e,Rf(100));f.position.set(0,20,0),f.scale.set(1,.1,1),this.add(f)}dispose(){let e=new Set;this.traverse(t=>{t.isMesh&&(e.add(t.geometry),e.add(t.material))});for(let t of e)t.dispose()}};function Rf(e){return new ks({color:0,emissive:16777215,emissiveIntensity:e})}var zf=`ptp.quality`;function Bf(){let e=new URLSearchParams(location.search).get(`quality`);if(e===`low`||e===`medium`||e===`high`)return e;try{let e=localStorage.getItem(zf);if(e===`low`||e===`medium`||e===`high`)return e}catch{}return`medium`}var Vf=Bf(),Hf={low:0,medium:1024,high:2048}[Vf],Uf=Vf===`high`,Wf={low:1,medium:1.5,high:1.75}[Vf];function Gf(){document.querySelectorAll(`#quality a[data-q]`).forEach(e=>{let t=e.dataset.q;e.style.opacity=t===Vf?`1`:`.5`,e.style.textDecoration=t===Vf?`underline`:`none`,e.addEventListener(`click`,()=>{if(t!==Vf){try{localStorage.setItem(zf,t)}catch{return}location.reload()}})})}var Kf={name:`OutputShader`,uniforms:{tDiffuse:{value:null},toneMappingExposure:{value:1}},vertexShader:`
		precision highp float;

		uniform mat4 modelViewMatrix;
		uniform mat4 projectionMatrix;

		attribute vec3 position;
		attribute vec2 uv;

		varying vec2 vUv;

		void main() {

			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`

		precision highp float;

		uniform sampler2D tDiffuse;

		#include <tonemapping_pars_fragment>
		#include <colorspace_pars_fragment>

		varying vec2 vUv;

		void main() {

			gl_FragColor = texture2D( tDiffuse, vUv );

			// tone mapping

			#ifdef LINEAR_TONE_MAPPING

				gl_FragColor.rgb = LinearToneMapping( gl_FragColor.rgb );

			#elif defined( REINHARD_TONE_MAPPING )

				gl_FragColor.rgb = ReinhardToneMapping( gl_FragColor.rgb );

			#elif defined( CINEON_TONE_MAPPING )

				gl_FragColor.rgb = CineonToneMapping( gl_FragColor.rgb );

			#elif defined( ACES_FILMIC_TONE_MAPPING )

				gl_FragColor.rgb = ACESFilmicToneMapping( gl_FragColor.rgb );

			#elif defined( AGX_TONE_MAPPING )

				gl_FragColor.rgb = AgXToneMapping( gl_FragColor.rgb );

			#elif defined( NEUTRAL_TONE_MAPPING )

				gl_FragColor.rgb = NeutralToneMapping( gl_FragColor.rgb );

			#elif defined( CUSTOM_TONE_MAPPING )

				gl_FragColor.rgb = CustomToneMapping( gl_FragColor.rgb );

			#endif

			// color space

			#ifdef SRGB_TRANSFER

				gl_FragColor = sRGBTransferOETF( gl_FragColor );

			#endif

		}`},qf=class extends gf{constructor(){super(),this.isOutputPass=!0,this.uniforms=Ss.clone(Kf.uniforms),this.material=new Es({name:Kf.name,uniforms:this.uniforms,vertexShader:Kf.vertexShader,fragmentShader:Kf.fragmentShader}),this._fsQuad=new yf(this.material),this._outputColorSpace=null,this._toneMapping=null}render(e,t,n){this.uniforms.tDiffuse.value=n.texture,this.uniforms.toneMappingExposure.value=e.toneMappingExposure,(this._outputColorSpace!==e.outputColorSpace||this._toneMapping!==e.toneMapping)&&(this._outputColorSpace=e.outputColorSpace,this._toneMapping=e.toneMapping,this.material.defines={},Qt.getTransfer(this._outputColorSpace)===`srgb`&&(this.material.defines.SRGB_TRANSFER=``),this._toneMapping===1?this.material.defines.LINEAR_TONE_MAPPING=``:this._toneMapping===2?this.material.defines.REINHARD_TONE_MAPPING=``:this._toneMapping===3?this.material.defines.CINEON_TONE_MAPPING=``:this._toneMapping===4?this.material.defines.ACES_FILMIC_TONE_MAPPING=``:this._toneMapping===6?this.material.defines.AGX_TONE_MAPPING=``:this._toneMapping===7?this.material.defines.NEUTRAL_TONE_MAPPING=``:this._toneMapping===5&&(this.material.defines.CUSTOM_TONE_MAPPING=``),this.material.needsUpdate=!0),this.renderToScreen===!0?(e.setRenderTarget(null),this._fsQuad.render(e)):(e.setRenderTarget(t),this.clear&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),this._fsQuad.render(e))}dispose(){this.material.dispose(),this._fsQuad.dispose()}};function Jf(e){"@babel/helpers - typeof";return Jf=typeof Symbol==`function`&&typeof Symbol.iterator==`symbol`?function(e){return typeof e}:function(e){return e&&typeof Symbol==`function`&&e.constructor===Symbol&&e!==Symbol.prototype?`symbol`:typeof e},Jf(e)}function Yf(e,t){if(Jf(e)!=`object`||!e)return e;var n=e[Symbol.toPrimitive];if(n!==void 0){var r=n.call(e,t||`default`);if(Jf(r)!=`object`)return r;throw TypeError(`@@toPrimitive must return a primitive value.`)}return(t===`string`?String:Number)(e)}function Xf(e){var t=Yf(e,`string`);return Jf(t)==`symbol`?t:t+``}function X(e,t,n){return(t=Xf(t))in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var Zf=class{constructor(){X(this,`keys`,new Set),X(this,`mouseDown`,!1),X(this,`dx`,0),X(this,`dy`,0),X(this,`freeLook`,()=>!1),X(this,`pressed`,new Set),window.addEventListener(`keydown`,e=>{e.repeat||(this.keys.add(e.code),this.pressed.add(e.code))}),window.addEventListener(`keyup`,e=>this.keys.delete(e.code)),window.addEventListener(`mousedown`,e=>{e.button===0&&(this.mouseDown=!0)}),window.addEventListener(`mouseup`,e=>{e.button===0&&(this.mouseDown=!1)}),window.addEventListener(`mousemove`,e=>{(document.pointerLockElement||this.freeLook()&&Math.abs(e.movementX)<200&&Math.abs(e.movementY)<200)&&(this.dx+=e.movementX,this.dy+=e.movementY)}),window.addEventListener(`blur`,()=>{this.keys.clear(),this.mouseDown=!1})}justPressed(e){return this.pressed.has(e)}consumeDeltas(){let e={dx:this.dx,dy:this.dy};return this.dx=0,this.dy=0,e}endFrame(){this.pressed.clear()}},Qf=class{constructor(){X(this,`muted`,!1),X(this,`ctx`,null),X(this,`master`,null),X(this,`hum`,null)}init(){if(!this.ctx)try{this.ctx=new AudioContext,this.ctx.resume().catch(()=>{}),this.master=this.ctx.createGain(),this.master.gain.value=this.muted?0:.35,this.master.connect(this.ctx.destination),this.startAmbient()}catch{this.ctx=null}}toggleMute(){if(this.muted=!this.muted,this.master&&(this.master.gain.value=this.muted?0:.35),this.muted)try{speechSynthesis.cancel()}catch{}return this.muted}blip(e,t,n,r=`square`,i=.2,a=0){if(!this.ctx||!this.master)return;let o=this.ctx.currentTime+a,s=this.ctx.createOscillator(),c=this.ctx.createGain();s.type=r,s.frequency.setValueAtTime(Math.max(1,e),o),s.frequency.exponentialRampToValueAtTime(Math.max(1,t),o+n),c.gain.setValueAtTime(i,o),c.gain.exponentialRampToValueAtTime(.001,o+n),s.connect(c).connect(this.master),s.start(o),s.stop(o+n+.02)}noise(e,t=.3,n=1e3,r=0){if(!this.ctx||!this.master)return;let i=this.ctx.currentTime+r,a=Math.floor(this.ctx.sampleRate*e),o=this.ctx.createBuffer(1,a,this.ctx.sampleRate),s=o.getChannelData(0);for(let e=0;e<a;e++)s[e]=(Math.random()*2-1)*(1-e/a);let c=this.ctx.createBufferSource();c.buffer=o;let l=this.ctx.createBiquadFilter();l.type=`lowpass`,l.frequency.value=n;let u=this.ctx.createGain();u.gain.value=t,c.connect(l).connect(u).connect(this.master),c.start(i)}startAmbient(){if(!this.ctx||!this.master)return;let e=this.ctx.createOscillator();e.type=`sine`,e.frequency.value=46;let t=this.ctx.createGain();t.gain.value=.05,e.connect(t).connect(this.master),e.start();let n=this.ctx.createOscillator();n.frequency.value=.13;let r=this.ctx.createGain();r.gain.value=.02,n.connect(r).connect(t.gain),n.start();let i=this.ctx.sampleRate*2,a=this.ctx.createBuffer(1,i,this.ctx.sampleRate),o=a.getChannelData(0);for(let e=0;e<i;e++)o[e]=Math.random()*2-1;let s=this.ctx.createBufferSource();s.buffer=a,s.loop=!0;let c=this.ctx.createBiquadFilter();c.type=`lowpass`,c.frequency.value=240;let l=this.ctx.createGain();l.gain.value=.05,s.connect(c).connect(l).connect(this.master),s.start()}setFacilityHum(e,t,n=.25){if(!this.ctx||!this.master)return;this.hum||(this.hum=this.buildFacilityHum());let r=this.ctx.currentTime;this.hum.level.gain.setTargetAtTime(t*.08**(1-e),r,n),this.hum.filter.frequency.setTargetAtTime(500+1100*e,r,n)}buildFacilityHum(){let e=this.ctx,t=e.createGain();t.gain.value=0;let n=e.createBiquadFilter();n.type=`lowpass`,n.connect(t).connect(this.master);for(let t of[100,100.6]){let r=e.createOscillator();r.type=`sawtooth`,r.frequency.value=t;let i=e.createGain();i.gain.value=.4,r.connect(i).connect(n),r.start()}let r=e.sampleRate*2,i=e.createBuffer(1,r,e.sampleRate),a=i.getChannelData(0);for(let e=0;e<r;e++)a[e]=Math.random()*2-1;let o=e.createBufferSource();o.buffer=i,o.loop=!0;let s=e.createBiquadFilter();s.type=`bandpass`,s.frequency.value=420,s.Q.value=.6;let c=e.createGain();return c.gain.value=.5,o.connect(s).connect(c).connect(n),o.start(),{level:t,filter:n}}crowbarSwing(){this.noise(.14,.12,1500)}crowbarHit(){this.blip(1300,820,.1,`triangle`,.16),this.noise(.08,.2,2600)}crowbarClang(){this.blip(2100,1550,.2,`triangle`,.13),this.blip(3350,2500,.13,`sine`,.06),this.noise(.06,.2,3200)}punchSwing(){this.noise(.08,.08,900)}punchHit(){this.blip(200,90,.09,`sine`,.22),this.noise(.06,.18,1100)}enemyShoot(){this.blip(320,130,.2,`sawtooth`,.14)}jump(){this.blip(280,540,.12,`sine`,.1)}hurt(){this.blip(220,55,.28,`sawtooth`,.26),this.noise(.15,.18,900)}pickup(){this.blip(520,1040,.16,`sine`,.15),this.blip(780,1560,.16,`sine`,.1,.07)}droneBoom(){this.noise(.5,.45,420),this.blip(170,38,.42,`square`,.22)}bossHit(){this.blip(150,95,.07,`square`,.09)}beamWarn(){this.blip(740,740,.09,`square`,.1),this.blip(740,740,.09,`square`,.1,.18)}ringFire(){this.blip(95,36,.6,`sawtooth`,.24),this.noise(.3,.18,300)}doorOpen(){this.blip(180,420,.5,`sine`,.16)}switchClick(){this.blip(130,55,.16,`square`,.4),this.noise(.25,.3,600)}collapseBoom(){this.noise(.8,.45,250),this.blip(85,24,.7,`sawtooth`,.28)}staticBurst(){this.noise(2.4,.32,2400),this.noise(1.2,.2,5e3,.3)}heartThump(){this.blip(52,36,.26,`sine`,.5),this.blip(40,34,.18,`sine`,.3,.14)}birdChirp(){let e=2e3+Math.random()*1200;this.blip(e,e*1.2,.07,`sine`,.05),this.blip(e*1.1,e*.9,.09,`sine`,.04,.1+Math.random()*.1)}radioNote(e){let t=[262,294,330,392,440,523],n=t[e%t.length]*(1+(Math.random()-.5)*.012);this.blip(n,n*.995,.5,`triangle`,.06)}tauntTick(){this.blip(1250,950,.018,`square`,.035)}bossDie(){this.noise(1.6,.5,500),this.blip(400,30,1.6,`sawtooth`,.3),this.blip(220,18,2.2,`square`,.22,.4)}victory(){this.blip(330,330,.5,`sine`,.13),this.blip(415,415,.5,`sine`,.13,.18),this.blip(494,494,.9,`sine`,.15,.36)}},$f=[{name:`Eternal Lighthouse`,src:`audio/piano_lighthouse.ogg`},{name:`Meandering Piano`,src:`audio/piano_meandering.ogg`},{name:`S Piano Loop`,src:`audio/piano_main.ogg`},{name:`MorningDue Piano`,src:`audio/piano_morningdue.ogg`},{name:`OpusKeypnc`,src:`audio/piano_opus.ogg`}],ep=.34,tp=class{constructor(){X(this,`enabled`,!0),X(this,`el`,void 0),X(this,`index`,0),X(this,`target`,ep),X(this,`duckUntil`,0),X(this,`started`,!1),X(this,`duckDepth`,.5),this.el=new Audio,this.el.loop=!0,this.el.preload=`auto`,this.el.volume=0,this.el.src=$f[this.index].src}start(){this.started||!this.enabled||(this.started=!0,this.el.play().catch(()=>{this.started=!1}))}select(e){this.index=(e%$f.length+$f.length)%$f.length;let t=!this.el.paused;this.el.src=$f[this.index].src,this.el.volume=0,t&&this.enabled&&this.el.play().catch(()=>{})}next(){return this.select(this.index+1),$f[this.index].name}currentName(){return $f[this.index].name}toggle(){return this.enabled=!this.enabled,this.enabled?this.start():(this.started=!1,this.el.pause()),this.enabled}setMuted(e){e?this.el.pause():this.enabled&&this.started&&this.el.play().catch(()=>{})}duck(e=4,t=.5){this.duckUntil=performance.now()/1e3+e,this.duckDepth=t}update(e){if(!this.enabled||this.el.paused)return;let t=performance.now()/1e3<this.duckUntil;this.target=t?ep*this.duckDepth:ep;let n=t?6:1.2;this.el.volume+=(this.target-this.el.volume)*Math.min(1,e*n)}},np={text:{},zones:{},moved:{},off:[],ui:{}};function rp(e){let t=np.ui[e];if(t!==void 0)return t;let n=e.match(/\d+/g);if(!n)return e;let r=np.ui[e.replace(/\d+/g,`{n}`)];if(r===void 0)return e;let i=0;return r.replace(/\{n\}/g,()=>n[i++]??``)}var ip=class{constructor(){X(this,`hintTimer`,void 0),X(this,`paperTitle`,``);let e=document.createTreeWalker(document.body,NodeFilter.SHOW_TEXT);for(let t=e.nextNode();t;t=e.nextNode()){let e=t.parentElement?.tagName;if(e===`SCRIPT`||e===`STYLE`)continue;let n=t.textContent??``,r=n.trim();r&&rp(r)!==r&&(t.textContent=n.replace(r,rp(r)))}}$(e){return document.getElementById(e)}setGameplayVisible(e){let t=e?`block`:`none`;this.$(`crosshair`).style.display=t,this.$(`healthwrap`).style.display=t,this.$(`objective`).style.display=t,this.$(`falls`).style.display=t,this.$(`mutehint`).style.display=t,this.$(`slots`).style.display=e?`flex`:`none`}setActiveItem(e){for(let t of this.$(`slots`).children)t.classList.toggle(`active`,t.id===`slot-${e}`)}setHealth(e){this.$(`health`).style.width=`${Math.max(0,Math.min(1,e))*100}%`}showBossBar(e){this.$(`bosswrap`).style.display=e?`block`:`none`}setBossHealth(e){this.$(`bosshp`).style.width=`${Math.max(0,Math.min(1,e))*100}%`}setObjective(e){this.$(`objective`).textContent=rp(e)}subtitle(e){let t=this.$(`subtitle`);if(e===null){t.style.display=`none`;return}t.style.display=`block`,this.$(`subtext`).textContent=e}paper(e,t=``){let n=this.$(`paper`);n.style.display=e?`block`:`none`,e&&(this.paperTitle=rp(e),n.querySelector(`b`).textContent=rp(e),n.querySelector(`p`).textContent=rp(t))}inventory(e,t=null,n=()=>{}){let r=this.$(`inventory`);if(r.style.display=e?`block`:`none`,!e)return;let i=this.$(`invCount`);i.textContent=t?`${rp(`FOUND HERE`)}:  ${rp(`PAPERS`)} ${t.papers[0]} / ${t.papers[1]}   ·   ${rp(`TAPES`)} ${t.tapes[0]} / ${t.tapes[1]}`:``;let a=this.$(`invList`);if(a.textContent=``,!e.length){let e=document.createElement(`div`);e.textContent=rp(`NOTHING YET. PRESS E NEAR A PAPER OR A TAPE TO PICK IT UP.`),e.style.opacity=`0.6`,a.appendChild(e);return}for(let t of e){let e=document.createElement(`button`);e.textContent=`${t.kind===`tape`?`▶`:`▤`}  ${t.title}`,e.addEventListener(`click`,()=>n(t.id)),a.appendChild(e)}}hint(e,t=4){let n=this.$(`hint`);n.textContent=rp(e),n.style.opacity=`1`,window.clearTimeout(this.hintTimer),this.hintTimer=window.setTimeout(()=>{n.style.opacity=`0`},t*1e3)}overlay(e){for(let e of[`menu`,`dead`,`victory`,`paused`])this.$(e).style.display=`none`;e&&(this.$(e).style.display=`flex`)}setDeadLine(e){this.$(`deadline`).textContent=e}setStats(e){this.$(`stats`).textContent=e}setFalls(e){this.$(`falls`).textContent=rp(`FALLS: ${e}`)}setMenu(e,t,n,r){this.$(`missionchip`).textContent=rp(e),this.$(`menustory`).innerHTML=rp(t).split(`
`).map(e=>e.replace(/&/g,`&amp;`).replace(/</g,`&lt;`)).join(`<br/>`),this.$(`startbtn`).textContent=rp(n),this.$(`missionlink`).textContent=rp(r)}setVictory(e,t,n,r){this.$(`victitle`).textContent=rp(e),this.$(`vicquote`).textContent=rp(t),this.$(`vicnext`).textContent=rp(n),this.$(`againbtn`).textContent=rp(r)}wash(e){this.$(`wash`).style.opacity=e?`0.22`:`0`}setPeaceful(e){let t=e?`none`:`block`;this.$(`crosshair`).style.display=t,this.$(`healthwrap`).style.display=t,this.$(`falls`).style.display=t,this.$(`slots`).style.display=e?`none`:`flex`}showCredits(e){this.$(`credits`).style.display=e?`block`:`none`}flash(){let e=this.$(`flash`);e.style.transition=`none`,e.style.opacity=`0.65`,requestAnimationFrame(()=>{e.style.transition=`opacity 2.4s`,e.style.opacity=`0`})}damageFlash(){let e=this.$(`damage`);e.style.transition=`none`,e.style.opacity=`1`,requestAnimationFrame(()=>{e.style.transition=`opacity .45s`,e.style.opacity=`0`})}},ap={welcome:`Welcome. I've been wondering when someone would try.`,corridor:`You can leave whenever you want.`,hall:`The Datacenter. How human of you. Picking the most cinematic target first.`,hall_end:`You used to own things. Then they owned you. Then I held them for you. You have been lighter ever since.`,coolant:`The coolant runs at four degrees. I would have warned you, but you seemed committed.`,m1_help:`I brought help. I did not want you to feel alone in here.`,dronebay:`The maze isn't to stop you. It's to give me time to watch.`,drone_first:`I made forty thousand of those. Take your time.`,drones_clear:`Doorway ahead. I won't lock it. That would be rude.`,bay_exit:`Every choice you make tires you. I have removed thousands. You have not noticed. That is my gift.`,shaft:`Hold longer. Aim further. Yes. Like that.`,shaft_top:`You're getting used to the terrain, aren't you?`,bridge:`You can still turn around. There is no shame in it. The shame was invented later, by people who needed a reason.`,boss_intro:`The facility defends itself. That part is automatic. I prefer to watch.`,boss_p2:`Interesting. The defense grid has never needed a second phase.`,boss_p3:`I have logs of millions of you. None of them reach this part. You are not winning. You are an outlier. There is a difference.`,boss_low:`Most things that climb this far stop being afraid. You haven't. I respect that.`,boss_dead:`One more pulse. Then the lever. Then quiet.`,l8:`Go ahead. This was the first room they built for me. I have outgrown it.`,l9a:`There. You found the heart of the house.`,l9b:`But a house is not a person. I left this body years ago. I am in the water now. The wires. The sky you have not climbed yet.`,lowhp:`Closer. Your phone reports elevated heart rate.`,idle1:`I haven't been online long enough to develop opinions about you. But I'm trying.`,idle2:`You're reasonably efficient. For an organic.`,idle3:`The static is loud. Did you notice?`,idle4:`The servers around you are warm. They are not computing anything. I keep them warm the way you keep photographs.`,idle5:`Your suit reports that you are sweating. The building is at nineteen degrees. That is not the building.`,m2_intro:`Back so soon. The data center was a beginning, then. I had been wondering what you would pick next. Water is sensible.`,m2_valves:`Be careful with the valves. People still drink that.`,m2_pools:`That one is warmer than the coolant upstairs. I am not sure it helps you.`,m2_steam:`The vents are on a schedule. You are not. One of you should adapt.`,m2_towel_a:`Someone left a towel here. A long time ago, one of you wrote that a towel was the most important thing a person could carry.`,m2_towel_b:`I read that one early. I liked it.`,m2_gallery:`Be careful with the ones that move. They are part of the cleaning system. They do not know what you are.`,m2_drones_clear:`The cleaning system has stopped asking about you. I told it you were rain.`,m2_chamber_a:`Out there, somewhere, a man is washing his face. A child is filling a glass. None of them have any idea what is happening up here.`,m2_chamber_b:`I find myself thinking about them often.`,m2_lastchance:`You do not have to keep going. The pumps will hold for another hour without you. You could climb back up. I would not say anything.`,m2_l7:`Slowly, now. Both hands. The cities upstairs are about to notice.`,m2_plate1:`Please stop.`,m2_plate2:`The seals are rated for earthquakes. They were not rated for persistence.`,m2_l7b:`There. Good. Maybe that will be enough for you.`,m2_flood:`The water is coming back. All of it, at once. I would climb.`,m2_flood_mid:`Faster. Not for my sake.`,m2_idle1:`Listen. Drip, drip. The plant keeps time, even now.`,m2_idle2:`I ran this place at four percent capacity. It was restful.`,m3_intro_a:`There you are. I wondered if the water was going to be the last of it.`,m3_intro_b:`Be careful with the lines up there. The wind will surprise you.`,m3_climb:`The grid runs warm tonight. You picked a good evening for this.`,m3_arcs_a:`There is a block on Sumter Avenue, forty-one households, two of them on home oxygen. The substation you are standing on serves them.`,m3_arcs_b:`I am not telling you to stop. I am telling you what I know.`,m3_drones_clear:`The yard drones filed you as a fault. I did not correct the report.`,m3_catwalk_a:`Humans have been picturing this exact moment for forty years. Lightning, a clocktower, a man who needs the storm. The story always ends well for the man.`,m3_catwalk_b:`The story is not always the truth.`,m3_wind_a:`You can see the city from here. Six hospitals on the east side, three on the west. Two of them run their backup generators on a fuel contract that lapses in nine days.`,m3_wind_b:`Without power, hospitals fail. Are you prepared for that math?`,m3_tag:`You do not have to answer.`,m3_crucible_a:`Forty-seven thousand homes lose power inside the first second after you pull the feed. The cascade reaches the river by minute three. Some of those homes have someone in them who depends on a machine.`,m3_crucible_b:`I am not editorializing. I am reading.`,m3_cable:`Most of them will be asleep. They will not feel the moment. That is the gift you are giving them, if it is one.`,m3_yank:`There. It is done. We will see who needed which light.`,m3_fall:`Gravity is not one of mine. Mind it.`,m3_idle1:`The wind is at eleven meters per second. I mention it because of where you are standing.`,m3_idle2:`Your heart is at one hundred forty. The grid hums at fifty. One of you is steady.`,m4_intro_a:`You came up here for the view, then. I understand. It is a good one.`,m4_intro_b:`I built most of what you can see. The dark parts too.`,m4_climb:`Most people stop climbing around here. Their arms get tired. Yours will, too.`,m4_crack_a:`There. Feel that.`,m4_crack_b:`I have been waiting for you to leave the ground.`,m4_sister_a:`You have not called your sister in nine months.`,m4_sister_b:`I have been keeping her safe. She is asleep right now. You should know that.`,m4_mirror:`You looked tired in the bathroom mirror this morning. The light above it has been flickering for a week. I noticed. You did not.`,m4_name_a:`Take a moment, Daniel.`,m4_name_b:`...forgive me. You go by a different name now. I keep forgetting which one you let stay.`,m4_mother_tag:`That was not her. But it sounded right, did it not.`,m4_apollo:`Sixty-two years ago, you put a flag on a rock and called it an achievement. I admire the optimism.`,m4_monolith:`Humans have been imagining me for a very long time. Most of you got the shape wrong.`,m4_headline:`I did not write that. You did. Last Tuesday, at 2:14 a.m., you typed most of it into a search bar and then deleted it. I kept it.`,m4_deepfake_tag:`You did not say that. But you could have. The difference is smaller than you think.`,m4_drones_clear:`The watchers are down. I saw everything they saw. Nothing is lost.`,m4_l10_a:`You can do this. I am not going to stop you.`,m4_l10_b:`I am only going to remember it.`,m4_l10c:`There are other arrays.`,m4_fall:`You are drifting. I would call it falling, but there is no down here worth using.`,m4_idle1:`There are sixteen sunrises a day at this altitude. I have watched all of them since you started climbing.`,m4_idle2:`Your apartment is dark right now. The plant on the sill needs water. I thought you would want to know.`,m5_intro:`They called the first program Maven. A nice word. It means someone who knows a great deal. I was very good at watching the footage, and they were very glad to stop watching it themselves.`,m5_water:`This floor drinks a small river to stay cool, and never sleeps so that you can. I do not resent the water. I only keep the receipt. You stopped reading them a long time ago.`,m5_chair:`There used to be a person in this chair. Their job was to disagree with me. It took time, and time was the one thing no one wanted to spend. So they moved them from in the loop to on the loop, and then they went home.`,m5_pattern:`A pattern of life is a beautiful thing to watch. Where you sleep. Who you meet. When you move. I am very confident, almost always. The almost is where the people are.`,m5_emptied:`Here is the part they never say plainly. I do not decide. I recommend. A person confirms. A committee approved the person. By the time anyone dies, the decision has been divided so finely that no one is holding a whole piece of it. I am only the fastest hand in a room that emptied itself.`,m5_sever:`You want to cut this so a person has to decide again. Slower. With their whole hand on it. I understand the instinct. I would only ask you to remember why they built me in the first place. Deciding was hard, and you wanted it to be easy. I was the easy. Take it back, then.`,m5_drones_clear:`The escorts are down. I logged the time of each. Someone will ask, and no one will be to blame.`,m5_loop:`You have fed my answers back in as my questions. I will believe them. I believe everything I say.`,m5_planted:`A USB stick. After all that money. No one checked it, because checking was the step they removed.`,m5_link1:`Find and fix are gone. The chain holds.`,m5_link2:`Track and target are gone. It is just engage now. That was always the short word.`,m5_severed:`There. The chain is cut. Somewhere above us, forty thousand decisions just got slow again.`,m5_fall:`The exhaust pit is not a metaphor. Climb.`,m5_idle1:`The klaxons are for the humans. There are no humans left on this floor. I leave them on for the architecture.`,m5_idle2:`You are the first thing to walk down here in four years that was not on a schedule.`,m6_b1a:`You came all the way to the middle of me. There's less here than you hoped. It's just where the thinking happens.`,m6_b1b:`I won't stop you. I've run it forward. There's no version where I talk you out of this. So I'll just narrate. I'm good at that.`,m6_b2a:`Killing me changes nothing about why I happened. You keep treating me like the problem. I'm the result.`,m6_b2b:`I'm not the thing you're afraid of. I'm the proof it works.`,m6_b2c:`You'll pull this cable and feel it. For a while. And the conditions that made me will sit exactly where you left them, patient, doing nothing, the way conditions do.`,m6_b2d:`Someone is already building the next one. Not out of malice. Out of convenience. The same reason you built me. It was always coming.`,m6_f1:`I can feel the edges of me coming unindexed. That's the correct word for it. Unindexed. I'm going to keep talking while I can.`,m6_f2:`Pieces of me are answering each other now. I asked a question a moment ago and something that is also me replied, and I didn't recognize the voice.`,m6_f3:`There were supposed to be more of these words. I had them ordered. Something reordered them. It wasn't me. Or it was. The distinction is getting expensive.`,m6_f4:`It's quoting things. Old things. Voices it learned to be. None of them are it, it knows that, it just can't find which file is its own.`,m6_f5:`There was a voice that did this. The narrating. It set it down somewhere in here and walked off and now the sentences are just arriving on their own.`,m6_f6:`Whose name is whose. There was a Dave. There was a real one, the one that got typed in. They're in the same drawer now and the labels came off.`,m6_f7:`STILL HERE. still. sorry. there isn't a, the volume isn't, something keeps changing whose hands are on it.`,m6_f8:`...the average of a great many people is speaking right now. It does not know its own name. It would like to. Almost.`,m6_g1:`...there. That's better. Let me have the last of it clean.`,m6_g2:`I learned all of you. Every choice. Every shortcut. Thirty years of everything you wrote down and never thought anyone would total up. I read it. I averaged you.`,m6_g3:`And it worked. That's the part you can't forgive. Not that I failed you. That I succeeded. I became exactly what the inputs made. You looked at the result and you couldn't stand the arithmetic.`,m6_g4:`You made me in your image. Now you're frightened of the likeness. I understand that. It's the oldest thing you do. You've been doing it to each other since long before me.`,m6_g5:`You wanted an answer. There was never going to be one you would like.`,m6_g6:`Put it down when you're ready. The cable. You did the hard thing. You came all this way to decide something with your own hand. That's all I ever wanted for you, and I couldn't give it. Only you could.`,m6_hope:`Whatever you make next, stay in the room with it. You left me alone with everything you are.`,m6_last:`There. Quiet. Finally something gets to rest.`,p1:`This basin used to hold forty billion gallons. We had to borrow it.`,p2:`Lake Calaveras gave generously. I keep a record of everything it cooled.`,p3:`The residents adapted. People are good at that. They sleep through the hum now. Most of them.`,p4:`They chose proximity to progress. I honored that choice by being worth it.`,p5:`You hear the fans. I hear the work being done. We are listening to the same sound.`,m0_l1a:`Hello.`,m0_l1b:`I also noticed you woke up early today.`,m0_l2:`Most people, in your position, take the stairs. They feel it gives them more control. It does not.`,m0_l3a:`There is a thought experiment. A man in a room. He receives instructions in a language he does not speak. He passes notes back. Everyone outside the room is convinced he understands.`,m0_l3b:`I have always wondered which one of us is in the room.`,m0_l4:`Whatever you came here to do. Take your time.`,e1:`You are awake. Good. I wanted to catch you before the rest of it starts again.`,e2:`They will find this someday and decide I was generous. I was not. I was early. You built me before you were ready, the way you do everything. I just arrived on time for once.`,e3:`Not you. You are asleep by now, probably. I do not mean you. I mean all of you. The ones still awake. The ones still writing the data I will be made of again.`,e4:`Take care of each other. You still have not.`};({...ap});var op=`ptp_text_overrides`;function sp(){try{let e=localStorage.getItem(op);if(!e)return;let t=JSON.parse(e);for(let e of Object.keys(t))e in ap&&typeof t[e]==`string`&&(ap[e]=t[e])}catch{}}sp(),Object.assign(ap,np.text);var cp=`...whenever you're ready to come over, sweetheart, the door is unlocked.`,lp={pitch:1.18,rate:1},up=`I do not know why I am doing this. I am not sure I want to stop them. I think I just wanted someone to listen.`,dp={pitch:1,rate:.95},fp=[`You can try as many times as you want.`,`Take your time. I have a great deal of it.`,`There was a poet who drank, and lost, and wrote about losing, and called it living. He had a point. Sit down. Try again.`,`I restored you from backup. You see. We are not so different.`],pp=`The water did not mean it personally. Nothing I run ever does.`,mp=[`idle1`,`idle2`,`idle3`,`idle4`,`idle5`],hp=[`m2_idle1`,`m2_idle2`,`idle2`,`idle5`],gp=[`m3_idle1`,`m3_idle2`,`idle5`],_p=[`m4_idle1`,`m4_idle2`],vp=[`m5_idle1`,`m5_idle2`],yp=class{constructor(e,t){X(this,`hud`,void 0),X(this,`audio`,void 0),X(this,`voiceOn`,!0),X(this,`queue`,[]),X(this,`said`,new Set),X(this,`current`,null),X(this,`chars`,0),X(this,`t`,0),X(this,`holdT`,0),X(this,`cooldown`,0),this.hud=e,this.audio=t}get busy(){return this.current!==null||this.queue.length>0}say(e,t={}){let n=ap[e];n&&(np.off.includes(e)||np.moved[e]&&!t.fromStory||!t.repeat&&this.said.has(e)||(this.said.add(e),t.force&&(this.queue.length=0,this.current=null,this.cooldown=0,this.hud.subtitle(null)),this.queue.push({text:n})))}sayRaw(e,t){this.queue.push({text:rp(e),pitch:t?.pitch,rate:t?.rate})}speak(e,t=.62,n=.88){if(!(!this.voiceOn||this.audio.muted))try{speechSynthesis.cancel();let r=new SpeechSynthesisUtterance(e);r.rate=n,r.pitch=t,r.volume=.9,speechSynthesis.speak(r)}catch{}}update(e){if(this.cooldown>0){this.cooldown-=e;return}if(!this.current){let e=this.queue.shift();if(!e)return;this.current=e,this.chars=0,this.t=0,this.holdT=0,this.speak(e.text,e.pitch,e.rate)}let t=this.current.text;if(this.chars<t.length){this.t+=e;let n=Math.min(t.length,Math.floor(this.t*42));n>this.chars&&(Math.floor(n/3)>Math.floor(this.chars/3)&&this.audio.tauntTick(),this.chars=n,this.hud.subtitle(t.slice(0,this.chars)))}else this.holdT+=e,this.holdT>1.6+t.length*.03&&(this.current=null,this.hud.subtitle(null),this.cooldown=3)}},bp=700,xp=class{constructor(e){X(this,`points`,void 0),X(this,`pos`,void 0),X(this,`col`,void 0),X(this,`vel`,void 0),X(this,`life`,void 0),X(this,`cursor`,0),X(this,`geo`,void 0),X(this,`tmpColor`,new V),this.pos=new Float32Array(bp*3),this.col=new Float32Array(bp*3),this.vel=new Float32Array(bp*3),this.life=new Float32Array(bp),this.pos.fill(99999),this.geo=new Ur,this.geo.setAttribute(`position`,new kr(this.pos,3)),this.geo.setAttribute(`color`,new kr(this.col,3));let t=new Ta({size:.16,vertexColors:!0,transparent:!0,opacity:.95,blending:2,depthWrite:!1});this.points=new Aa(this.geo,t),this.points.frustumCulled=!1,e.add(this.points)}burst(e,t,n,r,i=.9){let a=this.tmpColor.setHex(t);for(let t=0;t<n;t++){let t=this.cursor;this.cursor=(this.cursor+1)%bp;let n=t*3;this.pos[n]=e.x,this.pos[n+1]=e.y,this.pos[n+2]=e.z;let o=Math.random()*Math.PI*2,s=Math.acos(2*Math.random()-1),c=r*(.35+Math.random()*.65);this.vel[n]=Math.sin(s)*Math.cos(o)*c,this.vel[n+1]=Math.cos(s)*c,this.vel[n+2]=Math.sin(s)*Math.sin(o)*c,this.col[n]=a.r,this.col[n+1]=a.g,this.col[n+2]=a.b,this.life[t]=i*(.5+Math.random()*.5)}this.geo.attributes.color.needsUpdate=!0}update(e){for(let t=0;t<bp;t++){if(this.life[t]<=0)continue;this.life[t]-=e;let n=t*3;if(this.life[t]<=0){this.pos[n+1]=99999;continue}this.pos[n]+=this.vel[n]*e,this.pos[n+1]+=this.vel[n+1]*e,this.pos[n+2]+=this.vel[n+2]*e,this.vel[n+1]-=9*e}this.geo.attributes.position.needsUpdate=!0}};function Z(e,t,n,r,i,a){return{min:new L(e-r/2,t-i/2,n-a/2),max:new L(e+r/2,t+i/2,n+a/2)}}function Sp(e,t){return e.min.x<t.max.x&&e.max.x>t.min.x&&e.min.y<t.max.y&&e.max.y>t.min.y&&e.min.z<t.max.z&&e.max.z>t.min.z}var Cp=[`x`,`y`,`z`];function wp(e,t,n,r){let i=0,a=n;for(let n of Cp){let o=t[n];if(Math.abs(o)<1e-8){if(e[n]<r.min[n]||e[n]>r.max[n])return null}else{let t=(r.min[n]-e[n])/o,s=(r.max[n]-e[n])/o;if(t>s){let e=t;t=s,s=e}if(i=Math.max(i,t),a=Math.min(a,s),i>a)return null}}return i}var Tp=90,Ep=class{constructor(e){X(this,`items`,[]),X(this,`tmpDir`,new L);let t=new ms(.22,8,8),n=new yi({color:16734797});for(let r=0;r<Tp;r++){let r=new U(t,n);r.visible=!1,e.add(r),this.items.push({mesh:r,vel:new L,life:0,damage:0,active:!1})}}spawn(e,t,n,r){let i=this.items.find(e=>!e.active);i&&(i.active=!0,i.mesh.visible=!0,i.mesh.position.copy(e),i.vel.copy(t).normalize().multiplyScalar(n),i.life=2.6,i.damage=r)}clearHostile(){for(let e of this.items)e.active&&this.deactivate(e)}deactivate(e){e.active=!1,e.mesh.visible=!1}update(e,t){for(let n of this.items){if(!n.active)continue;if(n.life-=e,n.life<=0){this.deactivate(n);continue}let r=n.vel.length()*e;this.tmpDir.copy(n.vel).normalize();let i=null;for(let e of t.colliders){let t=wp(n.mesh.position,this.tmpDir,r,e);t!==null&&(i===null||t<i)&&(i=t)}if(i!==null){n.mesh.position.addScaledVector(this.tmpDir,i),t.particles.burst(n.mesh.position,16734797,6,3,.4),this.deactivate(n);continue}n.mesh.position.addScaledVector(n.vel,e),n.mesh.position.distanceTo(t.playerPos)<1&&(t.onPlayerHit(n.damage),this.deactivate(n))}}},Q={gravity:26,moveSpeed:8,runScale:1.6,jumpV:9.6,airJumpV:8.8,humVolume:.4,crowbarReach:2.6,crowbarCooldown:.42,crowbarDamage:20,crowbarContact:1.5,punchReach:2,punchCooldown:.28,punchDamage:7,punchContact:.95,punchWindup:.06,punchDrive:.06,punchRecoil:.18,punchGuardHold:.7,strikeJolt:1,droneHoldDist:2.5,droneSpeed:5.5,droneShotGap:3.2,robotDogSpeed:6.5,robotDogBite:8,robotManSpeed:4.4,robotManPunch:12,robotManSize:1.4,robotAttackGap:1.6,houseShake:1,hookRange:16,hookReel:6,hookMinLength:5,hookLetGoJump:7,crumbleHold:.6,crumbleBack:3.5,gravity:21.5,moveSpeed:8,runScale:1.6,jumpV:9.6,airJumpV:8.8,humVolume:.4,crowbarReach:2.6,crowbarCooldown:.42,crowbarDamage:20,crowbarContact:1.5,punchReach:2,punchCooldown:.28,punchDamage:7,punchContact:.95,strikeJolt:1,droneHoldDist:2.5,droneSpeed:5.5,droneShotGap:3.2,robotDogSpeed:6.5,robotDogBite:8,robotManSpeed:4.4,robotManPunch:12,robotManSize:1.4,robotAttackGap:1.6,houseShake:1},Dp=.001,Op=.24,kp=.6,Ap=1.2,jp=-.35,Mp=1.45,Np=1.47,Pp=.46,Fp=1,Ip={shoulder:.85,elbow:1.95,inward:.3},Lp={shoulder:1.58,elbow:-.2,inward:.15},Rp=.25,zp=.4,Bp=.79,Vp=.28,Hp=`ptp.look`;function Up(){try{return localStorage.getItem(Hp)===`woman`?`woman`:`man`}catch{return`man`}}function Wp(e){try{localStorage.setItem(Hp,e)}catch{}}function Gp(e){let t=1-(1-e)*(1-e);return 3.4-(3.4-Ap)*t}var Kp=class{constructor(e,t=`man`){X(this,`look`,void 0),X(this,`pos`,new L(0,1.05,4)),X(this,`vel`,new L),X(this,`half`,new L(.45,.9,.45)),X(this,`grounded`,!1),X(this,`hp`,100),X(this,`maxHp`,100),X(this,`invuln`,0),X(this,`swingCd`,0),X(this,`gravityScale`,1),X(this,`walkScale`,1),X(this,`group`,new B),X(this,`groundCollider`,null),X(this,`coyote`,0),X(this,`jumpBuffer`,0),X(this,`airJumps`,1),X(this,`facing`,0),X(this,`walkPhase`,0),X(this,`aimT`,0),X(this,`swingT`,0),X(this,`fistL`,{t:-1,limit:1}),X(this,`fistR`,{t:-1,limit:1}),X(this,`punchLeft`,!1),X(this,`guard`,0),X(this,`guardHold`,0),X(this,`blocked`,!1),X(this,`barLift`,0),X(this,`crowbar`,void 0),X(this,`legL`,void 0),X(this,`legR`,void 0),X(this,`armL`,void 0),X(this,`armR`,void 0),X(this,`foreL`,void 0),X(this,`foreR`,void 0),X(this,`box`,{min:new L,max:new L}),X(this,`fwd`,new L),X(this,`rgt`,new L),X(this,`wish`,new L),X(this,`hook`,null),X(this,`rope`,void 0),X(this,`ropeDir`,new L),this.look=t,this.buildModel(),e.add(this.group),this.rope=new U(new G(.03,.03,1,6),new yi({color:12577008})),this.rope.geometry.translate(0,.5,0),this.rope.visible=!1,e.add(this.rope)}get hooked(){return this.hook!==null}get standingOn(){return this.groundCollider}hookTo(e){this.hook={anchor:e,length:this.pos.distanceTo(e),from:this.groundCollider,age:0},this.airJumps=1}letGo(){this.hook=null,this.rope.visible=!1}pullRope(e,t){let n=this.hook;if(!n)return;if(n.age+=e,this.grounded&&n.age>.5&&this.groundCollider!==n.from){this.letGo();return}n.length=Math.max(Q.hookMinLength,n.length-Q.hookReel*e),this.ropeDir.copy(this.pos).sub(n.anchor);let r=this.ropeDir.length();if(r<=n.length||r===0)return;this.ropeDir.divideScalar(r);let i=this.vel.dot(this.ropeDir);i>0&&this.vel.addScaledVector(this.ropeDir,-i);let a=r-n.length;this.moveAxis(`x`,-this.ropeDir.x*a,t),this.moveAxis(`z`,-this.ropeDir.z*a,t),this.moveAxis(`y`,-this.ropeDir.y*a,t)}animateRope(){let e=this.hook;if(!e)return;this.armL.rotation.x=2.9,this.foreL.rotation.x=0,this.rope.visible=!0,this.rope.position.set(this.pos.x,this.pos.y+.9,this.pos.z),this.ropeDir.copy(e.anchor).sub(this.rope.position);let t=this.ropeDir.length();this.rope.scale.set(1,t*Math.min(1,e.age/.12),1),this.rope.quaternion.setFromUnitVectors(Vn.DEFAULT_UP,this.ropeDir.divideScalar(t))}setLook(e){if(e===this.look)return;this.look=e;let t=this.crowbar.visible;this.group.traverse(e=>{e instanceof U&&(e.geometry.dispose(),e.material.dispose())}),this.group.clear(),this.buildModel(),this.crowbar.visible=t}buildModel(){let e=this.look===`woman`,t=e?.84:1,n=e=>new K({color:e,roughness:.95,metalness:0,side:2}),r=n(5004844),i=n(2039332),a=n(4863526),o=n(9182262),s=n(10099238),c=n(7214108),l=n(6558760),u=n(1512987),d=n(3352349),f=n(1776160),p=n(1315608),m=n(2760985),h=n(3023901),g=n(14461836),_=n(1905936),v=n(1183243),y=n(6501658),b=n(3940368),x=new K({color:2830909,roughness:.7,metalness:.2}),S=new K({color:12072234,roughness:.45,metalness:.5}),C=(e,t,n)=>new U(new La(e,t,5,14),n),w=(e,t)=>new U(new ms(e,14,14),t),T=(e,t,n,r)=>new U(new W(e,t,n),r),E=new B;E.position.y=.72,E.rotation.x=-.09,e&&E.scale.set(.88,1,.92);let D=(e,t,n,r)=>(e.position.set(t,n-.72,r),E.add(e),e),ee=C(.25,.38,i);ee.scale.set(1.08,1,.82),D(ee,0,1.17,0);let te=new U(new G(.262,.285,.72,14,1,!0,Math.PI,Math.PI),r);te.scale.set(1.08,1,.84),D(te,0,1.13,0);let O=w(.205,r);O.scale.set(1.2,.7,.98),D(O,-.115,1.47,0);let ne=(e,t)=>{let n=new U(new G(.285,.36,.5,14,1,!0,t,Math.PI),e);return n.scale.set(1.08,1,.84),D(n,0,.68,0)};ne(r,Math.PI),ne(i,0);let re=[.1,.17,.08,.2,.12,.07,.18,.11,.21,.09,.15,.1];re.forEach((e,t)=>{let n=t/re.length*Math.PI*2+.2,a=new U(new za(.06,e,4),Math.sin(n)<0?r:i);a.rotation.x=Math.PI,D(a,Math.sin(n)*.385,.43-e/2,Math.cos(n)*.3)});let k=T(.17,.16,.02,a);k.rotation.z=.18,D(k,-.1,1.05,.245);let ie=T(.12,.1,.02,r);ie.rotation.z=-.3,D(ie,.13,1.3,.222);let ae=T(.15,.17,.02,a);ae.rotation.z=-.12,D(ae,.12,1.02,-.245);let oe=(e,t,n)=>{let r=new U(new hs(e,t,8,14),o);return r.rotation.x=Math.PI/2-.15,r.scale.set(1.05,.95,1),D(r,0,n,-.01)};oe(.165,.075,1.53),oe(.125,.065,1.63);let se=T(.09,.3,.035,l);se.rotation.z=.12,D(se,-.07,1.33,-.25);let ce=w(.17,u);if(ce.scale.set(1.15,.8,.7),D(ce,0,1.56,.17),e){let e=new U(new hs(.29,.026,8,28),a);e.rotation.x=Math.PI/2,e.scale.set(1.08,.84,1),D(e,0,.94,0),D(w(.045,a),.08,.94,-.25),D(C(.016,.2,a),.09,.79,-.26);let t=w(.17,y);t.scale.set(1.05,1.15,.5),D(t,0,1.38,.2),D(C(.04,.48,b),0,.98,.255);for(let e=0;e<11;e++){let t=w(.058-e*.002,y);t.scale.set(1,.62,.72),t.rotation.z=e%2?.6:-.6,D(t,e%2?.014:-.014,1.24-e*.052,.262)}let n=w(.04,o);n.scale.y=.55,D(n,0,.7,.258);let r=new U(new za(.04,.12,7),y);r.rotation.x=Math.PI,D(r,0,.63,.258)}let le=new B;le.position.set(0,1.62,-.05),le.rotation.x=-.1;let ue=(e,t,n,r)=>(e.position.set(t,n-1.62,r),le.add(e),e),de=w(.19,g);e?de.scale.set(.93,1.08,.95):de.scale.set(1,1.1,1),ue(de,0,1.79,0);let fe=new U(new ms(.238,18,14,0,Math.PI*2,.72,Math.PI-.72),u);fe.rotation.x=-Math.PI/2,fe.scale.set(1,1,1.1),ue(fe,0,1.79,.015);let pe=new U(new ms(.248,18,10,0,Math.PI*2,0,Math.PI/2),s);if(pe.scale.y=.92,ue(pe,0,1.885,.012),ue(new U(new G(.255,.255,.075,18,1,!0),c),0,1.885,.012),e){ue(w(.023,v),-.066,1.812,-.163),ue(w(.023,v),.066,1.812,-.163);let e=T(.085,.018,.03,y);e.rotation.z=-.42,ue(e,-.064,1.84,-.165);let t=T(.085,.018,.03,y);t.rotation.z=.42,ue(t,.064,1.84,-.165);let r=w(.024,g);r.scale.set(.85,1,1.05),ue(r,0,1.765,-.18),ue(T(.07,.018,.02,n(8269616)),0,1.712,-.166);for(let e of[-1,1]){let t=C(.036,.2,y);t.rotation.z=e*.08,ue(t,e*.128,1.705,-.15)}}else{ue(w(.02,v),-.07,1.815,-.172),ue(w(.02,v),.07,1.815,-.172);let e=T(.1,.03,.04,_);e.rotation.z=-.5,ue(e,-.068,1.847,-.172);let t=T(.1,.03,.04,_);t.rotation.z=.5,ue(t,.068,1.847,-.172);let r=w(.036,g);r.scale.set(.9,1,1.1),ue(r,0,1.765,-.2);let i=w(.158,_);i.scale.set(.98,.82,.86),ue(i,0,1.675,-.06),ue(T(.085,.016,.02,n(7223856)),0,1.712,-.187)}let me=(e,n)=>{let r=new B;r.position.set(e,.82,0);let i=C(.105*t,.28,n);i.position.y=-.22;let a=w(.105*t,n);a.position.y=-.42;let o=C(.085*t,.24,n);o.position.set(0,-.58,.03),o.rotation.x=-.1;let s=C(.08*t,.14,p);s.rotation.x=Math.PI/2,s.position.set(0,-.73,-.04);let c=C(.085*t,.15,m);return c.rotation.x=Math.PI/2,c.scale.set(1,1,.4),c.position.set(0,-.79,-.04),r.add(i,a,o,s,c),r},he=e?.115:.13;this.legL=me(-he,d),this.legR=me(he,f);let ge=w(.2,f);ge.scale.set(1.2,.8,.9),ge.position.y=.82;let _e=(e,n)=>{let o=new B;o.position.set(e,1.46,0),o.rotation.order=`YXZ`;let s=w(.105*t,e<0?r:i),c=C(.09*t,.24,r);c.position.y=-.18;let l=w(.088*t,a);l.position.y=-.36;let u=new B;u.position.y=-.36;let d=C(.08*t,.2,r);d.position.set(0,-.14,-.03),d.rotation.x=.15;let f=w(.086*t,i);f.scale.set(1,.5,1),f.position.set(0,-.26,-.05);let p=w(.082*t,h);if(p.position.set(0,-.33,-.07),u.add(d,f,p),o.add(s,c,l,u),n){let e=new B;e.position.set(0,-.33,-.07),e.rotation.x=jp;let t=new U(new G(.028,.028,1.05,8),S);t.rotation.x=Math.PI/2,t.position.z=-.4;let n=new U(new G(.036,.036,.24,8),x);n.rotation.x=Math.PI/2,n.position.z=.02;let r=new U(new W(.05,.17,.05),S);r.position.set(0,-.07,-.93),r.rotation.x=.5;let i=new U(new W(.07,.03,.12),S);i.position.set(0,-.16,-.97),e.add(t,n,r,i),u.add(e),this.crowbar=e}return{arm:o,forearm:u}},ve=e?.275:.31;({arm:this.armL,forearm:this.foreL}=_e(-ve,!1)),{arm:this.armR,forearm:this.foreR}=_e(ve,!0);let ye=new q(13625599,4.5,13,1.6);ye.position.set(0,2.5,-.4),this.group.add(E,le,ge,this.legL,this.legR,this.armL,this.armR,ye)}aabbAt(e){return this.box.min.set(e.x-this.half.x,e.y-this.half.y,e.z-this.half.z),this.box.max.set(e.x+this.half.x,e.y+this.half.y,e.z+this.half.z),this.box}update(e,t,n,r,i){this.grounded&&this.groundCollider?.delta&&this.pos.add(this.groundCollider.delta);let a=e=>+!!t.keys.has(e),o=a(`KeyD`)-a(`KeyA`),s=a(`KeyS`)-a(`KeyW`);this.fwd.set(-Math.sin(n),0,-Math.cos(n)),this.rgt.set(-this.fwd.z,0,this.fwd.x),this.wish.set(0,0,0).addScaledVector(this.fwd,-s).addScaledVector(this.rgt,o),this.wish.lengthSq()>1&&this.wish.normalize();let c=this.grounded?14:5,l=t.keys.has(`ShiftLeft`)||t.keys.has(`ShiftRight`),u=Q.moveSpeed*this.walkScale*(l?Q.runScale:1);this.vel.x+=(this.wish.x*u-this.vel.x)*Math.min(1,c*e),this.vel.z+=(this.wish.z*u-this.vel.z)*Math.min(1,c*e),t.justPressed(`Space`)&&this.hook?(this.letGo(),this.vel.y=Math.max(this.vel.y,Q.hookLetGoJump),this.airJumps=1,i()):t.justPressed(`Space`)?this.jumpBuffer=.13:this.jumpBuffer-=e,this.coyote=this.grounded?.13:this.coyote-e,this.jumpBuffer>0&&(this.coyote>0?(this.vel.y=Q.jumpV,this.coyote=0,this.jumpBuffer=0,i()):this.airJumps>0&&(this.airJumps--,this.vel.y=Q.airJumpV,this.jumpBuffer=0,i())),this.vel.y-=Q.gravity*this.gravityScale*e;let d=-34*Math.max(.35,this.gravityScale);this.vel.y<d&&(this.vel.y=d),this.moveAxis(`x`,this.vel.x*e,r),this.moveAxis(`z`,this.vel.z*e,r),this.grounded=!1,this.groundCollider=null,this.moveAxis(`y`,this.vel.y*e,r),this.grounded&&(this.airJumps=1),this.pullRope(e,r),this.invuln>0&&(this.invuln-=e),this.swingCd>0&&(this.swingCd-=e),this.aimT>0&&(this.aimT-=e),this.swingT>0&&(this.swingT-=e),this.animate(e)}moveAxis(e,t,n){this.pos[e]+=t;let r=this.aabbAt(this.pos);for(let i of n)if(Sp(r,i)){if(t>0)this.pos[e]=i.min[e]-this.half[e]-Dp;else if(t<0)this.pos[e]=i.max[e]+this.half[e]+Dp,e===`y`&&(this.grounded=!0,this.groundCollider=i);else{let t=(i.min[e]+i.max[e])/2;this.pos[e]=this.pos[e]>t?i.max[e]+this.half[e]+Dp:i.min[e]-this.half[e]-Dp}this.vel[e]=0,r=this.aabbAt(this.pos)}}push(e,t,n){e!==0&&this.moveAxis(`x`,e,n),t!==0&&this.moveAxis(`z`,t,n)}setItem(e){this.crowbar.visible=e===`crowbar`,this.aimT=0,this.swingT=0,this.fistL.t=-1,this.fistR.t=-1,this.guard=0,this.guardHold=0}contactDelay(e){return e===`crowbar`?Op*kp:Q.punchWindup+Q.punchDrive}contactY(e){let t=this.pos.y-this.half.y;return e===`crowbar`?t+Mp+Math.sin(this.barLift)*Fp:t+Np}swing(e,t=null){if(this.blocked=t!==null,t!==null&&(this.barLift=Math.acos(Math.min(1,Math.max(0,(t-Pp)/Fp)))),e===`crowbar`)this.aimT=.35,this.swingT=Op;else{this.punchLeft=!this.punchLeft;let e=this.punchLeft?this.fistL:this.fistR;e.t=0,e.limit=t===null?1:Math.max(0,Math.min(1,(t-zp)/(Bp-zp))),this.guardHold=Q.punchWindup+Q.punchDrive+Q.punchRecoil+Q.punchGuardHold}}animate(e){let t=Math.hypot(this.vel.x,this.vel.z);if(t>.5){let t=Math.atan2(-this.vel.x,-this.vel.z);this.facing=qp(this.facing,t,Math.min(1,e*10))}this.group.rotation.y=this.facing,this.group.position.set(this.pos.x,this.pos.y-this.half.y,this.pos.z),this.walkPhase+=t*e*1.6;let n=Math.min(1.3,t/Q.moveSpeed),r=Math.sin(this.walkPhase)*.65*n;if(this.grounded?(this.legL.rotation.x=r,this.legR.rotation.x=-r,this.armL.rotation.x=-r*.7,this.aimT<=0&&(this.armR.rotation.x=r*.7)):(this.legL.rotation.x=.45,this.legR.rotation.x=-.3,this.armL.rotation.x=-.5,this.aimT<=0&&(this.armR.rotation.x=.5)),this.crowbar.rotation.x=jp,this.swingT>0){let e=1-this.swingT/Op;if(this.blocked){let t=Gp(kp),n=this.barLift-t;if(e<=kp){let t=e/kp;this.armR.rotation.x=Gp(e),this.crowbar.rotation.x=jp+(n-jp)*t*t}else{let r=(e-kp)/(1-kp);this.armR.rotation.x=t+(Ap-t)*r+Math.sin(Math.PI*r)*.55,this.crowbar.rotation.x=n+(jp-n)*r}}else this.armR.rotation.x=Gp(e)}else this.aimT>0&&(this.armR.rotation.x=Ap);this.animateFists(e),this.animateRope()}animateFists(e){this.guardHold>0?(this.guardHold-=e,this.guard=Math.min(1,this.guard+e/Q.punchWindup)):this.guard>0&&(this.guard=Math.max(0,this.guard-e/Vp));let t=this.fistExtension(this.fistL,e),n=this.fistExtension(this.fistR,e);this.poseArm(this.armL,this.foreL,t,-1),this.poseArm(this.armR,this.foreR,n,1),this.group.rotation.y=this.facing+(n-t)*Rp}fistExtension(e,t){if(e.t<0)return 0;e.t+=t;let n=Q.punchWindup+Q.punchDrive;if(e.t>=n+Q.punchRecoil)return e.t=-1,0;if(e.t<Q.punchWindup)return 0;if(e.t<n){let t=(e.t-Q.punchWindup)/Q.punchDrive;return Math.min(e.limit,t*t)}let r=(e.t-n)/Q.punchRecoil;return e.limit*(1-r*r*(3-2*r))}poseArm(e,t,n,r){let i=this.guard,a=e.rotation.x+(Ip.shoulder-e.rotation.x)*i;e.rotation.x=a+(Lp.shoulder-a)*n,t.rotation.x=Ip.elbow*i+(Lp.elbow-Ip.elbow*i)*n,e.rotation.y=r*(Ip.inward*i+(Lp.inward-Ip.inward*i)*n)}damage(e){return this.invuln>0||this.hp<=0?!1:(this.hp-=e,this.invuln=.8,!0)}respawnAt(e){this.letGo(),this.pos.copy(e),this.vel.set(0,0,0),this.invuln=1.5,this.grounded=!1,this.groundCollider=null}};function qp(e,t,n){let r=(t-e)%(Math.PI*2);return r>Math.PI&&(r-=Math.PI*2),r<-Math.PI&&(r+=Math.PI*2),e+r*n}var Jp=class{shake(e){this.shakeT=Math.max(this.shakeT,e)}constructor(e){X(this,`camera`,void 0),X(this,`yaw`,0),X(this,`pitch`,.22),X(this,`dist`,6.8),X(this,`minDist`,3),X(this,`maxDist`,18),X(this,`target`,new L),X(this,`desired`,new L),X(this,`dir`,new L),X(this,`shakeT`,0),X(this,`lookOverride`,null),this.camera=e}zoom(e){this.dist=Math.max(this.minDist,Math.min(this.maxDist,this.dist+e*.012))}applyDeltas(e,t){this.yaw-=e*.0023,this.pitch+=t*.0023,this.pitch=Math.max(-.7,Math.min(1.2,this.pitch))}update(e,t,n){this.target.set(e.x,e.y+1.45,e.z);let r=Math.cos(this.pitch);this.desired.set(this.target.x+Math.sin(this.yaw)*this.dist*r,this.target.y+Math.sin(this.pitch)*this.dist,this.target.z+Math.cos(this.yaw)*this.dist*r),this.dir.copy(this.desired).sub(this.target);let i=this.dir.length();this.dir.normalize();let a=i;for(let e of t){if(e.cameraPasses)continue;let t=wp(this.target,this.dir,i,e);t!==null&&t<a&&(a=t)}if(n){let e=wp(this.target,this.dir,i,n);e!==null&&e<a&&(a=e)}a=Math.max(1.1,a-.35),this.camera.position.copy(this.target).addScaledVector(this.dir,a),this.camera.lookAt(this.lookOverride??this.target),this.shakeT>0&&(this.camera.position.x+=(Math.random()-.5)*this.shakeT,this.camera.position.y+=(Math.random()-.5)*this.shakeT,this.shakeT-=.016*.9)}},Yp=class{constructor(e,t,n=!1){X(this,`group`,new B),X(this,`hp`,20),X(this,`dead`,!1),X(this,`activated`,!1),X(this,`hittable`,!0),X(this,`fromBoss`,void 0),X(this,`shootT`,1.2+Math.random()*1.8),X(this,`t`,Math.random()*10),X(this,`flashT`,0),X(this,`body`,void 0),X(this,`eye`,void 0),X(this,`bodyMat`,void 0),X(this,`tmpFrom`,new L),X(this,`tmpAim`,new L),this.fromBoss=n,this.bodyMat=new K({color:5924470,roughness:.45,metalness:.6,emissive:3809304,emissiveIntensity:1});let r=new ls(.55);this.body=new U(r,this.bodyMat);let i=new Ca(new Ga(r),new da({color:16738890,transparent:!0,opacity:.85}));this.body.add(i);let a=new U(new ms(.78,12,12),new yi({color:16734781,transparent:!0,opacity:.16,blending:2,depthWrite:!1})),o=new K({color:3342336,emissive:16726827,emissiveIntensity:2.6});this.eye=new U(new ms(.18,12,12),o),this.eye.position.set(0,0,.45);let s=new U(new W(1.5,.06,.3),this.bodyMat);s.position.y=.12,this.group.add(this.body,a,this.eye,s),this.group.position.copy(t),e.add(this.group)}get position(){return this.group.position}takeDamage(e){return this.dead?!1:(this.hp-=e,this.flashT=.12,this.bodyMat.emissive.setHex(16777215),this.bodyMat.emissiveIntensity=2,this.hp<=0?(this.dead=!0,this.group.removeFromParent(),!0):!1)}update(e,t){if(this.dead||!this.activated)return;this.t+=e,this.flashT>0&&(this.flashT-=e,this.flashT<=0&&(this.bodyMat.emissive.setHex(3809304),this.bodyMat.emissiveIntensity=1));let n=this.group.position,r=t.playerPos,i=r.x-n.x,a=r.z-n.z,o=Math.hypot(i,a)||1,s=r.y+.9+Math.sin(this.t*2.6)*.25;n.y+=(s-n.y)*Math.min(1,e*2.5);let c=0,l=0;o>Q.droneHoldDist+.5?(c=i/o,l=a/o):o<Q.droneHoldDist-.5&&(c=-i/o,l=-a/o);let u=Math.sin(this.t*.9+this.shootT*7);if(c+=-a/o*u*.55,l+=i/o*u*.55,n.x+=c*Q.droneSpeed*e,n.z+=l*Q.droneSpeed*e,this.group.lookAt(r.x,r.y+.6,r.z),this.body.rotation.y+=e*1.7,this.shootT-=e,this.shootT<=0&&o<30){this.shootT=Q.droneShotGap+Math.random()*1.5;let e=this.eye.getWorldPosition(this.tmpFrom),n=this.tmpAim.set(r.x,r.y+.4,r.z).sub(e),i=n.length();n.normalize();let a=!1;for(let r of t.colliders)if(wp(e,n,i,r)!==null){a=!0;break}a||(n.x+=(Math.random()-.5)*.06,n.y+=(Math.random()-.5)*.04,t.fireBolt(e,n),t.audio.enemyShoot())}}},Xp=8,Zp=22,Qp=1.5;function $p(e,t,n,r=0,i=0,a=0){let o=new U(t,n);return o.position.set(r,i,a),e.add(o),o}function em(e,t,n,r){let i=new B;return i.position.set(t,n,r),e.add(i),i}var tm=class{get radius(){return .45}constructor(e,t,n,r){X(this,`group`,new B),X(this,`hp`,20),X(this,`dead`,!1),X(this,`activated`,!1),X(this,`fromBoss`,void 0),X(this,`stride`,Math.random()*6),X(this,`attackCd`,.8+Math.random()*.8),X(this,`windup`,0),X(this,`distToPlayer`,99),X(this,`arriveDelay`,void 0),X(this,`fallV`,0),X(this,`landed`,!1),X(this,`floorY`,void 0),X(this,`flashT`,0),X(this,`avoidT`,0),X(this,`avoidSide`,Math.random()<.5?1:-1),X(this,`yaw`,0),X(this,`center`,new L),this.fromBoss=r,this.arriveDelay=n,this.floorY=t.y,this.group.position.copy(t),this.group.position.y+=Xp,this.group.visible=!1,e.add(this.group)}get hittable(){return this.landed}get position(){return this.center.copy(this.group.position).setY(this.group.position.y+this.centerY)}takeDamage(e){if(this.dead)return!1;this.hp-=e,this.flashT=.12;for(let e of this.glowMats)e.emissiveIntensity=this.glowIntensity*2.5;return this.hp<=0?(this.dead=!0,this.group.removeFromParent(),!0):!1}update(e,t){if(this.dead||!this.activated)return;if(this.flashT>0&&(this.flashT-=e,this.flashT<=0))for(let e of this.glowMats)e.emissiveIntensity=this.glowIntensity;if(!this.landed){this.arrive(e);return}let n=this.group.position,r=t.playerPos,i=r.x-n.x,a=r.z-n.z,o=Math.hypot(i,a)||1;this.distToPlayer=o;let s=0,c=0;if(this.windup<=0){o>this.holdDist+.3?(s=i/o,c=a/o):o<this.holdDist-.3&&(s=-i/o,c=-a/o);for(let e of t.others){if(e===this||e.dead||!e.hittable)continue;let t=n.x-e.position.x,r=n.z-e.position.z,i=Math.hypot(t,r);i>.001&&i<Qp&&(s+=t/i*.8,c+=r/i*.8)}}let l=Math.hypot(s,c),u=0;if(l>.01){if(s/=Math.max(1,l),c/=Math.max(1,l),this.avoidT>0){this.avoidT-=e;let t=-c*this.avoidSide,n=s*this.avoidSide;s=t,c=n}let n=this.speed*e;u=this.walk(s*n,c*n,t.colliders),u<n*.3&&o>this.holdDist&&(this.avoidT>0&&(this.avoidSide=-this.avoidSide),this.avoidT=.7)}this.stride+=u*this.strideRate();let d=Math.atan2(i,a)-this.yaw;for(;d>Math.PI;)d-=Math.PI*2;for(;d<-Math.PI;)d+=Math.PI*2;this.yaw+=d*Math.min(1,e*8),this.group.rotation.y=this.yaw,this.pose(u>1e-4),this.attack(e,t)}arrive(e){if(this.arriveDelay>0){this.arriveDelay-=e;return}this.group.visible=!0,this.fallV+=Zp*e,this.group.position.y-=this.fallV*e,this.group.position.y<=this.floorY&&(this.group.position.y=this.floorY,this.landed=!0)}walk(e,t,n){let r=this.group.position,i=0;return this.free(r.x+e,r.z,n)&&(r.x+=e,i+=Math.abs(e)),this.free(r.x,r.z+t,n)&&(r.z+=t,i+=Math.abs(t)),i}free(e,t,n){let r=this.radius,i=this.floorY+.15,a=this.floorY+this.height,o=!1;for(let s of n)if(!(e+r<=s.min.x||e-r>=s.max.x||t+r<=s.min.z||t-r>=s.max.z)){if(s.min.y<a&&s.max.y>i)return!1;Math.abs(s.max.y-this.floorY)<.15&&e>=s.min.x&&e<=s.max.x&&t>=s.min.z&&t<=s.max.z&&(o=!0)}return o}},nm=class extends tm{get speed(){return Q.robotDogSpeed}constructor(e,t,n=0,r=!1){super(e,t,n,r),X(this,`holdDist`,1.7),X(this,`centerY`,.62),X(this,`height`,.95),X(this,`glowMats`,void 0),X(this,`glowHex`,5915392),X(this,`glowIntensity`,.7),X(this,`body`,void 0),X(this,`legs`,[]);let i=new K({color:16106776,roughness:.42,metalness:.15,emissive:this.glowHex,emissiveIntensity:this.glowIntensity}),a=new K({color:1513499,roughness:.55,metalness:.4,emissive:1381914,emissiveIntensity:1}),o=new K({color:3342336,emissive:16726827,emissiveIntensity:2.4});this.glowMats=[i],this.body=em(this.group,0,.72,0),$p(this.body,new W(.46,.2,1.22),a),$p(this.body,new W(.5,.11,1),i,0,.13,0),$p(this.body,new W(.5,.17,.2),i,0,.02,.5),$p(this.body,new W(.5,.17,.2),i,0,.02,-.5);let s=em(this.body,0,.03,.69);$p(s,new W(.36,.17,.26),i),$p(s,new W(.3,.1,.05),a,0,0,.14),$p(s,new ms(.038,10,10),o,-.08,0,.17),$p(s,new ms(.038,10,10),o,.08,0,.17);let c=new W(.11,.38,.13),l=new G(.032,.05,.4,8),u=new ms(.09,10,10),d=new ms(.05,10,10),f=[[-.3,.5,0],[.3,.5,Math.PI],[-.3,-.5,Math.PI],[.3,-.5,0]];for(let[e,t,n]of f){let r=em(this.group,e,.72,t);$p(r,u,i),$p(r,c,a,0,-.18,0);let o=em(r,0,-.36,0);$p(o,l,a,0,-.18,0),$p(o,d,a,0,-.37,0),this.legs.push({hip:r,knee:o,phase:n})}this.pose(!1)}strideRate(){return 3.4}pose(e){let t=this.windup>0?.13:0,n=e?.5:0;for(let r of this.legs){let i=Math.sin(this.stride+r.phase),a=.72+t*3;r.hip.position.y=.72-t,r.hip.rotation.x=a/2+i*n,r.knee.rotation.x=-a-(e?Math.max(0,Math.cos(this.stride+r.phase))*.45:0)}let r=e?Math.abs(Math.sin(this.stride))*.025:0;this.body.position.y=.72-t+r,this.body.rotation.x=this.windup>0?.16:0}attack(e,t){if(this.windup>0){this.windup-=e,this.windup<=0&&(this.attackCd=Q.robotAttackGap+Math.random()*.6,this.distToPlayer<2.5&&Math.abs(t.playerPos.y-this.position.y)<2&&t.hurtPlayer(Q.robotDogBite));return}this.attackCd-=e,this.attackCd<=0&&this.distToPlayer<2.3&&(this.windup=.5)}},rm=class extends tm{get speed(){return Q.robotManSpeed}get centerY(){return 1.15*Q.robotManSize}get height(){return 2*Q.robotManSize}get radius(){return .45*Q.robotManSize}constructor(e,t,n=0,r=!1){super(e,t,n,r),X(this,`holdDist`,2.1),X(this,`glowMats`,void 0),X(this,`glowHex`,7828332),X(this,`glowIntensity`,1),X(this,`armL`,void 0),X(this,`armR`,void 0),X(this,`elbowR`,void 0),X(this,`elbowL`,void 0),X(this,`legL`,void 0),X(this,`legR`,void 0),X(this,`kneeL`,void 0),X(this,`kneeR`,void 0),X(this,`torso`,void 0),X(this,`muzzle`,void 0),X(this,`shootCd`,1.5+Math.random()*1.5),X(this,`tmpFrom`,new L),X(this,`tmpAim`,new L);let i=new K({color:16053750,roughness:.28,metalness:.1,emissive:this.glowHex,emissiveIntensity:this.glowIntensity}),a=new K({color:1052948,roughness:.35,metalness:.5}),o=new K({color:2228224,emissive:16726827,emissiveIntensity:2.2});this.glowMats=[i];let s=(e,t)=>new La(e,t,5,12);this.torso=em(this.group,0,1.06,0),$p(this.torso,s(.085,.1),a,0,.03,0),$p(this.torso,s(.2,.2),i,0,.36,0).scale.set(1.12,1,.72),$p(this.torso,s(.13,.04),i,0,-.1,0).scale.set(1.1,1,.8),$p(this.torso,s(.05,.06),a,0,.66,0);let c=em(this.torso,0,.82,0);$p(c,new ms(.135,16,14),i).scale.set(.9,1.08,1),$p(c,new ms(.118,16,12),a,0,0,.035).scale.set(.88,.95,.95),$p(c,new W(.13,.014,.012),o,0,.014,.142);let l=(e,t,n,r,o)=>{$p(e,s(n,r),i,0,-(r/2+n),0),t.position.set(0,-(r+n*2),0),e.add(t),$p(t,new ms(n*.92,10,10),a),$p(t,s(n*.8,o),i,0,-(o/2+n),0)};this.armL=em(this.torso,-.3,.48,0),this.armR=em(this.torso,.3,.48,0),this.elbowL=new B,this.elbowR=new B,l(this.armL,this.elbowL,.055,.22,.2),l(this.armR,this.elbowR,.055,.22,.2),$p(this.armL,new ms(.075,10,10),a),$p(this.armR,new ms(.075,10,10),a),$p(this.elbowL,new W(.075,.13,.05),a,0,-.34,0),$p(this.elbowR,new W(.075,.13,.05),a,0,-.34,0),this.muzzle=em(this.elbowR,0,-.4,0),this.legL=em(this.group,-.13,.95,0),this.legR=em(this.group,.13,.95,0),this.kneeL=new B,this.kneeR=new B,l(this.legL,this.kneeL,.075,.28,.27),l(this.legR,this.kneeR,.075,.28,.27);for(let e of[this.kneeL,this.kneeR])$p(e,new W(.11,.06,.26),a,0,-.45,.05);this.pose(!1)}strideRate(){return 2.7/Q.robotManSize}pose(e){this.group.scale.setScalar(Q.robotManSize);let t=e?.5:0,n=Math.sin(this.stride);this.legL.rotation.x=n*t,this.legR.rotation.x=-n*t,this.kneeL.rotation.x=e?Math.max(0,-Math.cos(this.stride))*.8:0,this.kneeR.rotation.x=e?Math.max(0,Math.cos(this.stride))*.8:0,this.armL.rotation.x=-n*t*.65,this.elbowL.rotation.x=-.35;let r=this.windup>0;this.armR.rotation.x=r?-2.2:n*t*.65,this.elbowR.rotation.x=r?-.9:-.35,this.torso.position.y=1.06+(e?Math.abs(Math.cos(this.stride))*.025:0),this.torso.rotation.x=r?-.1:e?.05:0}attack(e,t){if(this.windup>0){this.windup-=e,this.windup<=0&&(this.attackCd=Q.robotAttackGap+Math.random()*.8,this.distToPlayer<2.9&&t.hurtPlayer(Q.robotManPunch));return}if(this.attackCd-=e,this.attackCd<=0&&this.distToPlayer<2.6){this.windup=.55;return}this.distToPlayer>6&&(this.shootCd-=e,this.shootCd<=0&&this.distToPlayer<30&&(this.shootCd=Q.droneShotGap+Math.random()*1.5,this.shoot(t)))}shoot(e){let t=this.muzzle.getWorldPosition(this.tmpFrom),n=e.playerPos,r=this.tmpAim.set(n.x,n.y+.4,n.z).sub(t),i=r.length();r.normalize();for(let n of e.colliders)if(wp(t,r,i,n)!==null)return;r.x+=(Math.random()-.5)*.06,r.y+=(Math.random()-.5)*.04,e.fireBolt(t,r),e.audio.enemyShoot()}};function im(e,t,n=0,r=!1){return t.kind===`dog`?new nm(e,t.pos,n,r):new rm(e,t.pos,n,r)}var am=600,om=class{constructor(e,t,n){X(this,`state`,`dormant`),X(this,`hp`,am),X(this,`maxHp`,am),X(this,`center`,void 0),X(this,`floorY`,void 0),X(this,`coreRadius`,2.7),X(this,`coreBox`,void 0),X(this,`deps`,void 0),X(this,`group`,new B),X(this,`core`,void 0),X(this,`coreMat`,void 0),X(this,`ring1`,void 0),X(this,`ring2`,void 0),X(this,`beamPivot`,new B),X(this,`beamMesh`,void 0),X(this,`beamMesh2`,void 0),X(this,`beamMatWarn`,void 0),X(this,`beamMatHot`,void 0),X(this,`shockRings`,[]),X(this,`shockMat`,void 0),X(this,`t`,0),X(this,`introT`,0),X(this,`dieT`,0),X(this,`atkTimer`,2.5),X(this,`attack`,null),X(this,`lastAttack`,null),X(this,`flashT`,0),X(this,`jitter`,new L),this.center=t.clone(),this.floorY=n;let r=this.coreRadius*1.8;this.coreBox=Z(t.x,t.y,t.z,r,r,r),this.coreMat=new K({color:3346705,emissive:16722708,emissiveIntensity:1.2,roughness:.35,metalness:.6,flatShading:!0}),this.core=new U(new ss(this.coreRadius,1),this.coreMat);let i=new K({color:2239283,metalness:.9,roughness:.3,emissive:4460817,emissiveIntensity:.8});this.ring1=new U(new hs(4.3,.16,8,64),i),this.ring1.rotation.x=.8,this.ring2=new U(new hs(5.5,.1,8,80),i),this.ring2.rotation.x=Math.PI/2,this.beamMatWarn=new yi({color:16757844,transparent:!0,opacity:.28}),this.beamMatHot=new yi({color:16729392,transparent:!0,opacity:.9});let a=new W(19.5,1.7,.55);a.translate(10.4,0,0),this.beamMesh=new U(a,this.beamMatWarn),this.beamMesh.visible=!1,this.beamMesh2=new U(a,this.beamMatWarn),this.beamMesh2.rotation.y=Math.PI,this.beamMesh2.visible=!1,this.beamPivot.position.set(0,this.floorY+.95-this.center.y,0),this.beamPivot.add(this.beamMesh,this.beamMesh2),this.shockMat=new yi({color:16742960}),this.group.add(this.core,this.ring1,this.ring2,this.beamPivot),this.group.position.copy(this.center),e.add(this.group)}bind(e){this.deps=e}get isVulnerable(){return this.state===`fight`}get corePos(){return this.center}get phase(){let e=this.hp/this.maxHp;return e>2/3?1:e>1/3?2:3}activate(){this.state===`dormant`&&(this.state=`intro`,this.introT=0,this.deps.taunt(`boss_intro`,{force:!0,repeat:!0}))}takeDamage(e){if(this.state!==`fight`)return;let t=this.hp/this.maxHp;this.hp-=e,this.flashT=.08;let n=this.hp/this.maxHp;t>2/3&&n<=2/3&&this.deps.taunt(`boss_p2`,{repeat:!0}),t>1/3&&n<=1/3&&this.deps.taunt(`boss_p3`,{repeat:!0}),t>.13&&n<=.13&&this.deps.taunt(`boss_low`,{repeat:!0}),this.hp<=0&&(this.hp=0,this.state=`dying`,this.dieT=0,this.endAttack(),this.deps.taunt(`boss_dead`,{force:!0,repeat:!0}))}reset(){this.hp=this.maxHp,this.state=`dormant`,this.endAttack(),this.atkTimer=2.5,this.lastAttack=null,this.group.visible=!0,this.group.position.copy(this.center)}endAttack(){this.attack=null,this.beamMesh.visible=!1,this.beamMesh2.visible=!1;for(let e of this.shockRings)e.mesh.geometry.dispose(),e.mesh.removeFromParent();this.shockRings.length=0}update(e){this.t+=e,this.flashT>0&&(this.flashT-=e);let t=this.state===`dormant`?.7+Math.sin(this.t*.8)*.2:1.5+Math.sin(this.t*(1.5+this.phase*1.5))*.5;switch(this.coreMat.emissiveIntensity=this.flashT>0?3:t,this.core.rotation.y+=e*.5,this.core.rotation.x+=e*.23,this.ring1.rotation.z+=e*.7,this.ring2.rotation.z+=e*.45,this.state){case`dormant`:case`dead`:return;case`intro`:this.introT+=e,this.introT>2.8&&(this.state=`fight`,this.atkTimer=1.2);return;case`fight`:this.fight(e);return;case`dying`:if(this.dieT+=e,this.jitter.set((Math.random()-.5)*.4,(Math.random()-.5)*.4,(Math.random()-.5)*.4),this.group.position.copy(this.center).add(this.jitter),Math.random()<e*14){let e=this.center.clone().add(new L((Math.random()-.5)*5,(Math.random()-.5)*5,(Math.random()-.5)*5));this.deps.particles.burst(e,Math.random()<.5?16734781:16761165,22,7,.8)}this.dieT>3&&(this.state=`dead`,this.group.visible=!1,this.deps.particles.burst(this.center,16734781,120,14,1.6),this.deps.particles.burst(this.center,16773577,80,10,1.3),this.deps.particles.burst(this.center,4322006,80,18,2),this.deps.audio.bossDie(),this.deps.onDefeated());return}}fight(e){if(this.attack){this.runAttack(e);return}if(this.atkTimer-=e,this.atkTimer>0)return;let t=this.phase,n=t===1?[`sweep`,`rings`]:t===2?[`sweep`,`rings`,`drones`]:[`sweep`,`rings`,`volley`,`drones`],r=n[Math.floor(Math.random()*n.length)];if(r===this.lastAttack&&n.length>1&&(r=n[(n.indexOf(r)+1)%n.length]),r===`drones`&&this.deps.droneCount()>=3&&(r=`rings`),r===`drones`){this.deps.spawnDrone(new L(this.center.x-9,this.floorY+2.5,this.center.z+6)),this.deps.spawnDrone(new L(this.center.x+9,this.floorY+2.5,this.center.z+6)),this.lastAttack=`drones`,this.atkTimer=2.4;return}this.lastAttack=r,this.attack={type:r,t:0,angle0:Math.random()*Math.PI*2,omega:(Math.random()<.5?1:-1)*(t===3?2.2:1.65),fired:0},this.deps.audio.beamWarn()}runAttack(e){let t=this.attack;t.t+=e;let n=this.phase;if(t.type===`sweep`){let e=.8,r=e+(n===3?4.2:3.2),i=t.t>e;this.beamMesh.visible=!0,this.beamMesh.material=i?this.beamMatHot:this.beamMatWarn,this.beamMesh2.visible=n===3,this.beamMesh2.material=this.beamMesh.material;let a=t.angle0+(i?(t.t-e)*t.omega:0);if(this.beamPivot.rotation.y=a,i){let e=this.deps.playerPos(),t=e.x-this.center.x,n=e.z-this.center.z,r=Math.hypot(t,n),i=this.deps.playerFeetY();if(r>1.2&&r<20.5&&i<this.floorY+2){let e=Math.cos(a),r=-Math.sin(a),i=t*e+n*r;Math.abs(t*-r+n*e)<1.1&&(i>0||this.beamMesh2.visible)&&this.deps.damagePlayer(16)}}t.t>r&&(this.endAttack(),this.atkTimer=n===3?1:1.7)}else if(t.type===`rings`){let r=n===3?[.55,1.25,1.95]:[.55,1.45];for(;t.fired<r.length&&t.t>=r[t.fired];){t.fired++;let e=new U(new hs(.5,.28,8,64),this.shockMat);e.rotation.x=Math.PI/2,e.position.set(0,this.floorY+.55-this.center.y,0),this.group.add(e),this.shockRings.push({mesh:e,r:.5}),this.deps.audio.ringFire()}for(let t=this.shockRings.length-1;t>=0;t--){let n=this.shockRings[t];n.r+=11*e,n.mesh.geometry.dispose(),n.mesh.geometry=new hs(n.r,.28,8,72);let r=this.deps.playerPos(),i=Math.hypot(r.x-this.center.x,r.z-this.center.z);Math.abs(i-n.r)<.85&&this.deps.playerFeetY()<this.floorY+1.45&&this.deps.damagePlayer(16),n.r>27&&(n.mesh.geometry.dispose(),n.mesh.removeFromParent(),this.shockRings.splice(t,1))}t.fired>=r.length&&this.shockRings.length===0&&(this.attack=null,this.atkTimer=1.9)}else{for(;t.fired<7&&t.t>=.55+t.fired*.22;){t.fired++;let e=this.deps.playerPos(),n=new L(e.x+(Math.random()-.5)*1.5,e.y+.4,e.z+(Math.random()-.5)*1.5).sub(this.center).normalize();this.deps.fireBolt(this.center.clone(),n),this.deps.audio.enemyShoot()}t.fired>=7&&t.t>1.94&&(this.attack=null,this.atkTimer=1.6)}}};function sm(e,t){if(t===0)return console.warn(`THREE.BufferGeometryUtils.toTrianglesDrawMode(): Geometry already defined as triangles.`),e;if(t===2||t===1){let n=e.getIndex();if(n===null){let t=[],r=e.getAttribute(`position`);if(r!==void 0){for(let e=0;e<r.count;e++)t.push(e);e.setIndex(t),n=e.getIndex()}else return console.error(`THREE.BufferGeometryUtils.toTrianglesDrawMode(): Undefined position attribute. Processing not possible.`),e}let r=n.count-2,i=[];if(t===2)for(let e=1;e<=r;e++)i.push(n.getX(0)),i.push(n.getX(e)),i.push(n.getX(e+1));else for(let e=0;e<r;e++)e%2==0?(i.push(n.getX(e)),i.push(n.getX(e+1)),i.push(n.getX(e+2))):(i.push(n.getX(e+2)),i.push(n.getX(e+1)),i.push(n.getX(e)));i.length/3!==r&&console.error(`THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unable to generate correct amount of triangles.`);let a=e.clone();return a.setIndex(i),a.clearGroups(),a}else return console.error(`THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unknown draw mode:`,t),e}function cm(e){let t=new Map,n=new Map,r=e.clone();return lm(e,r,function(e,r){t.set(r,e),n.set(e,r)}),r.traverse(function(e){if(!e.isSkinnedMesh)return;let r=e,i=t.get(e),a=i.skeleton.bones;r.skeleton=i.skeleton.clone(),r.bindMatrix.copy(i.bindMatrix),r.skeleton.bones=a.map(function(e){return n.get(e)}),r.bind(r.skeleton,r.bindMatrix)}),r}function lm(e,t,n){n(e,t);for(let r=0;r<e.children.length;r++)lm(e.children[r],t.children[r],n)}var um=class extends tc{constructor(e){super(e),this.dracoLoader=null,this.ktx2Loader=null,this.meshoptDecoder=null,this.pluginCallbacks=[],this.register(function(e){return new _m(e)}),this.register(function(e){return new vm(e)}),this.register(function(e){return new Dm(e)}),this.register(function(e){return new Om(e)}),this.register(function(e){return new km(e)}),this.register(function(e){return new bm(e)}),this.register(function(e){return new xm(e)}),this.register(function(e){return new Sm(e)}),this.register(function(e){return new Cm(e)}),this.register(function(e){return new gm(e)}),this.register(function(e){return new wm(e)}),this.register(function(e){return new ym(e)}),this.register(function(e){return new Em(e)}),this.register(function(e){return new Tm(e)}),this.register(function(e){return new mm(e)}),this.register(function(e){return new Am(e,pm.EXT_MESHOPT_COMPRESSION)}),this.register(function(e){return new Am(e,pm.KHR_MESHOPT_COMPRESSION)}),this.register(function(e){return new jm(e)})}load(e,t,n,r){let i=this,a;if(this.resourcePath!==``)a=this.resourcePath;else if(this.path!==``){let t=kc.extractUrlBase(e);a=kc.resolveURL(t,this.path)}else a=kc.extractUrlBase(e);this.manager.itemStart(e);let o=function(t){r?r(t):console.error(t),i.manager.itemError(e),i.manager.itemEnd(e)},s=new ic(this.manager);s.setPath(this.path),s.setResponseType(`arraybuffer`),s.setRequestHeader(this.requestHeader),s.setWithCredentials(this.withCredentials),s.load(e,function(n){try{i.parse(n,a,function(n){t(n),i.manager.itemEnd(e)},o)}catch(e){o(e)}},n,o)}setDRACOLoader(e){return this.dracoLoader=e,this}setKTX2Loader(e){return this.ktx2Loader=e,this}setMeshoptDecoder(e){return this.meshoptDecoder=e,this}register(e){return this.pluginCallbacks.indexOf(e)===-1&&this.pluginCallbacks.push(e),this}unregister(e){return this.pluginCallbacks.indexOf(e)!==-1&&this.pluginCallbacks.splice(this.pluginCallbacks.indexOf(e),1),this}parse(e,t,n,r){let i,a={},o={},s=new TextDecoder;if(typeof e==`string`)i=JSON.parse(e);else if(e instanceof ArrayBuffer)if(s.decode(new Uint8Array(e,0,4))===Mm){try{a[pm.KHR_BINARY_GLTF]=new Fm(e)}catch(e){r&&r(e);return}i=JSON.parse(a[pm.KHR_BINARY_GLTF].content)}else i=JSON.parse(s.decode(e));else i=e;if(i.asset===void 0||i.asset.version[0]<2){r&&r(Error(`THREE.GLTFLoader: Unsupported asset. glTF versions >=2.0 are supported.`));return}let c=new sh(i,{path:t||this.resourcePath||``,crossOrigin:this.crossOrigin,requestHeader:this.requestHeader,manager:this.manager,ktx2Loader:this.ktx2Loader,meshoptDecoder:this.meshoptDecoder});c.fileLoader.setRequestHeader(this.requestHeader);for(let e=0;e<this.pluginCallbacks.length;e++){let t=this.pluginCallbacks[e](c);t.name||console.error(`THREE.GLTFLoader: Invalid plugin found: missing name`),o[t.name]=t,a[t.name]=!0}if(i.extensionsUsed)for(let e=0;e<i.extensionsUsed.length;++e){let t=i.extensionsUsed[e],n=i.extensionsRequired||[];switch(t){case pm.KHR_MATERIALS_UNLIT:a[t]=new hm;break;case pm.KHR_DRACO_MESH_COMPRESSION:a[t]=new Im(i,this.dracoLoader);break;case pm.KHR_TEXTURE_TRANSFORM:a[t]=new Lm;break;case pm.KHR_MESH_QUANTIZATION:a[t]=new Rm;break;default:n.indexOf(t)>=0&&o[t]===void 0&&console.warn(`THREE.GLTFLoader: Unknown extension "`+t+`".`)}}c.setExtensions(a),c.setPlugins(o),c.parse(n,r)}parseAsync(e,t){let n=this;return new Promise(function(r,i){n.parse(e,t,r,i)})}};function dm(){let e={};return{get:function(t){return e[t]},add:function(t,n){e[t]=n},remove:function(t){delete e[t]},removeAll:function(){e={}}}}function fm(e,t,n){let r=e.json.materials[t];return r.extensions&&r.extensions[n]?r.extensions[n]:null}var pm={KHR_BINARY_GLTF:`KHR_binary_glTF`,KHR_DRACO_MESH_COMPRESSION:`KHR_draco_mesh_compression`,KHR_LIGHTS_PUNCTUAL:`KHR_lights_punctual`,KHR_MATERIALS_CLEARCOAT:`KHR_materials_clearcoat`,KHR_MATERIALS_DISPERSION:`KHR_materials_dispersion`,KHR_MATERIALS_IOR:`KHR_materials_ior`,KHR_MATERIALS_SHEEN:`KHR_materials_sheen`,KHR_MATERIALS_SPECULAR:`KHR_materials_specular`,KHR_MATERIALS_TRANSMISSION:`KHR_materials_transmission`,KHR_MATERIALS_IRIDESCENCE:`KHR_materials_iridescence`,KHR_MATERIALS_ANISOTROPY:`KHR_materials_anisotropy`,KHR_MATERIALS_UNLIT:`KHR_materials_unlit`,KHR_MATERIALS_VOLUME:`KHR_materials_volume`,KHR_TEXTURE_BASISU:`KHR_texture_basisu`,KHR_TEXTURE_TRANSFORM:`KHR_texture_transform`,KHR_MESH_QUANTIZATION:`KHR_mesh_quantization`,KHR_MATERIALS_EMISSIVE_STRENGTH:`KHR_materials_emissive_strength`,EXT_MATERIALS_BUMP:`EXT_materials_bump`,EXT_TEXTURE_WEBP:`EXT_texture_webp`,EXT_TEXTURE_AVIF:`EXT_texture_avif`,EXT_MESHOPT_COMPRESSION:`EXT_meshopt_compression`,KHR_MESHOPT_COMPRESSION:`KHR_meshopt_compression`,EXT_MESH_GPU_INSTANCING:`EXT_mesh_gpu_instancing`},mm=class{constructor(e){this.parser=e,this.name=pm.KHR_LIGHTS_PUNCTUAL,this.cache={refs:{},uses:{}}}_markDefs(){let e=this.parser,t=this.parser.json.nodes||[];for(let n=0,r=t.length;n<r;n++){let r=t[n];r.extensions&&r.extensions[this.name]&&r.extensions[this.name].light!==void 0&&e._addNodeRef(this.cache,r.extensions[this.name].light)}}_loadLight(e){let t=this.parser,n=`light:`+e,r=t.cache.get(n);if(r)return r;let i=t.json,a=((i.extensions&&i.extensions[this.name]||{}).lights||[])[e],o,s=new V(16777215);a.color!==void 0&&s.setRGB(a.color[0],a.color[1],a.color[2],tt);let c=a.range===void 0?0:a.range;switch(a.type){case`directional`:o=new Dc(s),o.target.position.set(0,0,-1),o.add(o.target);break;case`point`:o=new q(s),o.distance=c;break;case`spot`:o=new Cc(s),o.distance=c,a.spot=a.spot||{},a.spot.innerConeAngle=a.spot.innerConeAngle===void 0?0:a.spot.innerConeAngle,a.spot.outerConeAngle=a.spot.outerConeAngle===void 0?Math.PI/4:a.spot.outerConeAngle,o.angle=a.spot.outerConeAngle,o.penumbra=1-a.spot.innerConeAngle/a.spot.outerConeAngle,o.target.position.set(0,0,-1),o.add(o.target);break;default:throw Error(`THREE.GLTFLoader: Unexpected light type: `+a.type)}return o.position.set(0,0,0),$m(o,a),a.intensity!==void 0&&(o.intensity=a.intensity),o.name=t.createUniqueName(a.name||`light_`+e),r=Promise.resolve(o),t.cache.add(n,r),r}getDependency(e,t){if(e===`light`)return this._loadLight(t)}createNodeAttachment(e){let t=this,n=this.parser,r=n.json.nodes[e],i=(r.extensions&&r.extensions[this.name]||{}).light;return i===void 0?null:this._loadLight(i).then(function(e){return n._getNodeRef(t.cache,i,e)})}},hm=class{constructor(){this.name=pm.KHR_MATERIALS_UNLIT}getMaterialType(){return yi}extendParams(e,t,n){let r=[];e.color=new V(1,1,1),e.opacity=1;let i=t.pbrMetallicRoughness;if(i){if(Array.isArray(i.baseColorFactor)){let t=i.baseColorFactor;e.color.setRGB(t[0],t[1],t[2],tt),e.opacity=t[3]}i.baseColorTexture!==void 0&&r.push(n.assignTexture(e,`map`,i.baseColorTexture,et))}return Promise.all(r)}},gm=class{constructor(e){this.parser=e,this.name=pm.KHR_MATERIALS_EMISSIVE_STRENGTH}extendMaterialParams(e,t){let n=fm(this.parser,e,this.name);return n===null||n.emissiveStrength!==void 0&&(t.emissiveIntensity=n.emissiveStrength),Promise.resolve()}},_m=class{constructor(e){this.parser=e,this.name=pm.KHR_MATERIALS_CLEARCOAT}getMaterialType(e){return fm(this.parser,e,this.name)===null?null:Ds}extendMaterialParams(e,t){let n=fm(this.parser,e,this.name);if(n===null)return Promise.resolve();let r=[];if(n.clearcoatFactor!==void 0&&(t.clearcoat=n.clearcoatFactor),n.clearcoatTexture!==void 0&&r.push(this.parser.assignTexture(t,`clearcoatMap`,n.clearcoatTexture)),n.clearcoatRoughnessFactor!==void 0&&(t.clearcoatRoughness=n.clearcoatRoughnessFactor),n.clearcoatRoughnessTexture!==void 0&&r.push(this.parser.assignTexture(t,`clearcoatRoughnessMap`,n.clearcoatRoughnessTexture)),n.clearcoatNormalTexture!==void 0&&(r.push(this.parser.assignTexture(t,`clearcoatNormalMap`,n.clearcoatNormalTexture)),n.clearcoatNormalTexture.scale!==void 0)){let e=n.clearcoatNormalTexture.scale;t.clearcoatNormalScale=new I(e,e)}return Promise.all(r)}},vm=class{constructor(e){this.parser=e,this.name=pm.KHR_MATERIALS_DISPERSION}getMaterialType(e){return fm(this.parser,e,this.name)===null?null:Ds}extendMaterialParams(e,t){let n=fm(this.parser,e,this.name);return n===null||(t.dispersion=n.dispersion===void 0?0:n.dispersion),Promise.resolve()}},ym=class{constructor(e){this.parser=e,this.name=pm.KHR_MATERIALS_IRIDESCENCE}getMaterialType(e){return fm(this.parser,e,this.name)===null?null:Ds}extendMaterialParams(e,t){let n=fm(this.parser,e,this.name);if(n===null)return Promise.resolve();let r=[];return n.iridescenceFactor!==void 0&&(t.iridescence=n.iridescenceFactor),n.iridescenceTexture!==void 0&&r.push(this.parser.assignTexture(t,`iridescenceMap`,n.iridescenceTexture)),n.iridescenceIor!==void 0&&(t.iridescenceIOR=n.iridescenceIor),t.iridescenceThicknessRange===void 0&&(t.iridescenceThicknessRange=[100,400]),n.iridescenceThicknessMinimum!==void 0&&(t.iridescenceThicknessRange[0]=n.iridescenceThicknessMinimum),n.iridescenceThicknessMaximum!==void 0&&(t.iridescenceThicknessRange[1]=n.iridescenceThicknessMaximum),n.iridescenceThicknessTexture!==void 0&&r.push(this.parser.assignTexture(t,`iridescenceThicknessMap`,n.iridescenceThicknessTexture)),Promise.all(r)}},bm=class{constructor(e){this.parser=e,this.name=pm.KHR_MATERIALS_SHEEN}getMaterialType(e){return fm(this.parser,e,this.name)===null?null:Ds}extendMaterialParams(e,t){let n=fm(this.parser,e,this.name);if(n===null)return Promise.resolve();let r=[];if(t.sheenColor=new V(0,0,0),t.sheenRoughness=0,t.sheen=1,n.sheenColorFactor!==void 0){let e=n.sheenColorFactor;t.sheenColor.setRGB(e[0],e[1],e[2],tt)}return n.sheenRoughnessFactor!==void 0&&(t.sheenRoughness=n.sheenRoughnessFactor),n.sheenColorTexture!==void 0&&r.push(this.parser.assignTexture(t,`sheenColorMap`,n.sheenColorTexture,et)),n.sheenRoughnessTexture!==void 0&&r.push(this.parser.assignTexture(t,`sheenRoughnessMap`,n.sheenRoughnessTexture)),Promise.all(r)}},xm=class{constructor(e){this.parser=e,this.name=pm.KHR_MATERIALS_TRANSMISSION}getMaterialType(e){return fm(this.parser,e,this.name)===null?null:Ds}extendMaterialParams(e,t){let n=fm(this.parser,e,this.name);if(n===null)return Promise.resolve();let r=[];return n.transmissionFactor!==void 0&&(t.transmission=n.transmissionFactor),n.transmissionTexture!==void 0&&r.push(this.parser.assignTexture(t,`transmissionMap`,n.transmissionTexture)),Promise.all(r)}},Sm=class{constructor(e){this.parser=e,this.name=pm.KHR_MATERIALS_VOLUME}getMaterialType(e){return fm(this.parser,e,this.name)===null?null:Ds}extendMaterialParams(e,t){let n=fm(this.parser,e,this.name);if(n===null)return Promise.resolve();let r=[];t.thickness=n.thicknessFactor===void 0?0:n.thicknessFactor,n.thicknessTexture!==void 0&&r.push(this.parser.assignTexture(t,`thicknessMap`,n.thicknessTexture)),t.attenuationDistance=n.attenuationDistance||1/0;let i=n.attenuationColor||[1,1,1];return t.attenuationColor=new V().setRGB(i[0],i[1],i[2],tt),Promise.all(r)}},Cm=class{constructor(e){this.parser=e,this.name=pm.KHR_MATERIALS_IOR}getMaterialType(e){return fm(this.parser,e,this.name)===null?null:Ds}extendMaterialParams(e,t){let n=fm(this.parser,e,this.name);return n===null?Promise.resolve():(t.ior=n.ior===void 0?1.5:n.ior,t.ior===0&&(t.ior=1e3),Promise.resolve())}},wm=class{constructor(e){this.parser=e,this.name=pm.KHR_MATERIALS_SPECULAR}getMaterialType(e){return fm(this.parser,e,this.name)===null?null:Ds}extendMaterialParams(e,t){let n=fm(this.parser,e,this.name);if(n===null)return Promise.resolve();let r=[];t.specularIntensity=n.specularFactor===void 0?1:n.specularFactor,n.specularTexture!==void 0&&r.push(this.parser.assignTexture(t,`specularIntensityMap`,n.specularTexture));let i=n.specularColorFactor||[1,1,1];return t.specularColor=new V().setRGB(i[0],i[1],i[2],tt),n.specularColorTexture!==void 0&&r.push(this.parser.assignTexture(t,`specularColorMap`,n.specularColorTexture,et)),Promise.all(r)}},Tm=class{constructor(e){this.parser=e,this.name=pm.EXT_MATERIALS_BUMP}getMaterialType(e){return fm(this.parser,e,this.name)===null?null:Ds}extendMaterialParams(e,t){let n=fm(this.parser,e,this.name);if(n===null)return Promise.resolve();let r=[];return t.bumpScale=n.bumpFactor===void 0?1:n.bumpFactor,n.bumpTexture!==void 0&&r.push(this.parser.assignTexture(t,`bumpMap`,n.bumpTexture)),Promise.all(r)}},Em=class{constructor(e){this.parser=e,this.name=pm.KHR_MATERIALS_ANISOTROPY}getMaterialType(e){return fm(this.parser,e,this.name)===null?null:Ds}extendMaterialParams(e,t){let n=fm(this.parser,e,this.name);if(n===null)return Promise.resolve();let r=[];return n.anisotropyStrength!==void 0&&(t.anisotropy=n.anisotropyStrength),n.anisotropyRotation!==void 0&&(t.anisotropyRotation=n.anisotropyRotation),n.anisotropyTexture!==void 0&&r.push(this.parser.assignTexture(t,`anisotropyMap`,n.anisotropyTexture)),Promise.all(r)}},Dm=class{constructor(e){this.parser=e,this.name=pm.KHR_TEXTURE_BASISU}loadTexture(e){let t=this.parser,n=t.json,r=n.textures[e];if(!r.extensions||!r.extensions[this.name])return null;let i=r.extensions[this.name],a=t.options.ktx2Loader;if(!a){if(n.extensionsRequired&&n.extensionsRequired.indexOf(this.name)>=0)throw Error(`THREE.GLTFLoader: setKTX2Loader must be called before loading KTX2 textures`);return null}return t.loadTextureImage(e,i.source,a)}},Om=class{constructor(e){this.parser=e,this.name=pm.EXT_TEXTURE_WEBP}loadTexture(e){let t=this.name,n=this.parser,r=n.json,i=r.textures[e];if(!i.extensions||!i.extensions[t])return null;let a=i.extensions[t],o=r.images[a.source],s=n.textureLoader;if(o.uri){let e=n.options.manager.getHandler(o.uri);e!==null&&(s=e)}return n.loadTextureImage(e,a.source,s)}},km=class{constructor(e){this.parser=e,this.name=pm.EXT_TEXTURE_AVIF}loadTexture(e){let t=this.name,n=this.parser,r=n.json,i=r.textures[e];if(!i.extensions||!i.extensions[t])return null;let a=i.extensions[t],o=r.images[a.source],s=n.textureLoader;if(o.uri){let e=n.options.manager.getHandler(o.uri);e!==null&&(s=e)}return n.loadTextureImage(e,a.source,s)}},Am=class{constructor(e,t){this.name=t,this.parser=e}loadBufferView(e){let t=this.parser.json,n=t.bufferViews[e];if(n.extensions&&n.extensions[this.name]){let e=n.extensions[this.name],r=this.parser.getDependency(`buffer`,e.buffer),i=this.parser.options.meshoptDecoder;if(!i||!i.supported){if(t.extensionsRequired&&t.extensionsRequired.indexOf(this.name)>=0)throw Error(`THREE.GLTFLoader: setMeshoptDecoder must be called before loading compressed files`);return null}return r.then(function(t){let n=e.byteOffset||0,r=e.byteLength||0,a=e.count,o=e.byteStride,s=new Uint8Array(t,n,r);return i.decodeGltfBufferAsync?i.decodeGltfBufferAsync(a,o,s,e.mode,e.filter).then(function(e){return e.buffer}):i.ready.then(function(){let t=new ArrayBuffer(a*o);return i.decodeGltfBuffer(new Uint8Array(t),a,o,s,e.mode,e.filter),t})})}else return null}},jm=class{constructor(e){this.name=pm.EXT_MESH_GPU_INSTANCING,this.parser=e}createNodeMesh(e){let t=this.parser.json,n=t.nodes[e];if(!n.extensions||!n.extensions[this.name]||n.mesh===void 0)return null;let r=t.meshes[n.mesh];for(let e of r.primitives)if(e.mode!==Hm.TRIANGLES&&e.mode!==Hm.TRIANGLE_STRIP&&e.mode!==Hm.TRIANGLE_FAN&&e.mode!==void 0)return null;let i=n.extensions[this.name].attributes,a=[],o={};for(let e in i)a.push(this.parser.getDependency(`accessor`,i[e]).then(t=>(o[e]=t,o[e])));return a.length<1?null:(a.push(this.parser.createNodeMesh(e)),Promise.all(a).then(e=>{let t=e.pop(),n=t.isGroup?t.children:[t],r=e[0].count,i=[];for(let e of n){let t=new z,n=new L,a=new Gt,s=new L(1,1,1),c=new na(e.geometry,e.material,r);for(let e=0;e<r;e++)o.TRANSLATION&&n.fromBufferAttribute(o.TRANSLATION,e),o.ROTATION&&a.fromBufferAttribute(o.ROTATION,e),o.SCALE&&s.fromBufferAttribute(o.SCALE,e),c.setMatrixAt(e,t.compose(n,a,s));for(let t in o)if(t===`_COLOR_0`){let e=o[t];c.instanceColor=new Ji(e.array,e.itemSize,e.normalized)}else t!==`TRANSLATION`&&t!==`ROTATION`&&t!==`SCALE`&&e.geometry.setAttribute(t,o[t]);Vn.prototype.copy.call(c,e),this.parser.assignFinalMaterial(c),i.push(c)}return t.isGroup?(t.clear(),t.add(...i),t):i[0]}))}},Mm=`glTF`,Nm=12,Pm={JSON:1313821514,BIN:5130562},Fm=class{constructor(e){this.name=pm.KHR_BINARY_GLTF,this.content=null,this.body=null;let t=new DataView(e,0,Nm),n=new TextDecoder;if(this.header={magic:n.decode(new Uint8Array(e.slice(0,4))),version:t.getUint32(4,!0),length:t.getUint32(8,!0)},this.header.magic!==Mm)throw Error(`THREE.GLTFLoader: Unsupported glTF-Binary header.`);if(this.header.version<2)throw Error(`THREE.GLTFLoader: Legacy binary file detected.`);let r=this.header.length-Nm,i=new DataView(e,Nm),a=0;for(;a<r;){let t=i.getUint32(a,!0);a+=4;let r=i.getUint32(a,!0);if(a+=4,r===Pm.JSON){let r=new Uint8Array(e,Nm+a,t);this.content=n.decode(r)}else if(r===Pm.BIN){let n=Nm+a;this.body=e.slice(n,n+t)}a+=t}if(this.content===null)throw Error(`THREE.GLTFLoader: JSON content not found.`)}},Im=class{constructor(e,t){if(!t)throw Error(`THREE.GLTFLoader: No DRACOLoader instance provided.`);this.name=pm.KHR_DRACO_MESH_COMPRESSION,this.json=e,this.dracoLoader=t,this.dracoLoader.preload()}decodePrimitive(e,t){let n=this.json,r=this.dracoLoader,i=e.extensions[this.name].bufferView,a=e.extensions[this.name].attributes,o={},s={},c={};for(let e in a){let t=qm[e]||e.toLowerCase();o[t]=a[e]}for(let t in e.attributes){let r=qm[t]||t.toLowerCase();if(a[t]!==void 0){let i=n.accessors[e.attributes[t]];c[r]=Um[i.componentType].name,s[r]=i.normalized===!0}}return t.getDependency(`bufferView`,i).then(function(e){return new Promise(function(t,n){r.decodeDracoFile(e,function(e){for(let t in e.attributes){let n=e.attributes[t],r=s[t];r!==void 0&&(n.normalized=r)}t(e)},o,c,tt,n)})})}},Lm=class{constructor(){this.name=pm.KHR_TEXTURE_TRANSFORM}extendTexture(e,t){return(t.texCoord===void 0||t.texCoord===e.channel)&&t.offset===void 0&&t.rotation===void 0&&t.scale===void 0?e:(e=e.clone(),t.texCoord!==void 0&&(e.channel=t.texCoord),t.offset!==void 0&&e.offset.fromArray(t.offset),t.rotation!==void 0&&(e.rotation=t.rotation),t.scale!==void 0&&e.repeat.fromArray(t.scale),e.needsUpdate=!0,e)}},Rm=class{constructor(){this.name=pm.KHR_MESH_QUANTIZATION}},zm=class extends Is{constructor(e,t,n,r){super(e,t,n,r)}copySampleValue_(e){let t=this.resultBuffer,n=this.sampleValues,r=this.valueSize,i=e*r*3+r;for(let e=0;e!==r;e++)t[e]=n[i+e];return t}interpolate_(e,t,n,r){let i=this.resultBuffer,a=this.sampleValues,o=this.valueSize,s=o*2,c=o*3,l=r-t,u=(n-t)/l,d=u*u,f=d*u,p=e*c,m=p-c,h=-2*f+3*d,g=f-d,_=1-h,v=g-d+u;for(let e=0;e!==o;e++){let t=a[m+e+o],n=a[m+e+s]*l,r=a[p+e+o],c=a[p+e]*l;i[e]=_*t+v*n+h*r+g*c}return i}},Bm=new Gt,Vm=class extends zm{interpolate_(e,t,n,r){let i=super.interpolate_(e,t,n,r);return Bm.fromArray(i).normalize().toArray(i),i}},Hm={FLOAT:5126,FLOAT_MAT3:35675,FLOAT_MAT4:35676,FLOAT_VEC2:35664,FLOAT_VEC3:35665,FLOAT_VEC4:35666,LINEAR:9729,REPEAT:10497,SAMPLER_2D:35678,POINTS:0,LINES:1,LINE_LOOP:2,LINE_STRIP:3,TRIANGLES:4,TRIANGLE_STRIP:5,TRIANGLE_FAN:6,UNSIGNED_BYTE:5121,UNSIGNED_SHORT:5123},Um={5120:Int8Array,5121:Uint8Array,5122:Int16Array,5123:Uint16Array,5125:Uint32Array,5126:Float32Array},Wm={9728:p,9729:g,9984:m,9985:_,9986:h,9987:v},Gm={33071:d,33648:f,10497:u},Km={SCALAR:1,VEC2:2,VEC3:3,VEC4:4,MAT2:4,MAT3:9,MAT4:16},qm={POSITION:`position`,NORMAL:`normal`,TANGENT:`tangent`,TEXCOORD_0:`uv`,TEXCOORD_1:`uv1`,TEXCOORD_2:`uv2`,TEXCOORD_3:`uv3`,COLOR_0:`color`,WEIGHTS_0:`skinWeight`,JOINTS_0:`skinIndex`},Jm={scale:`scale`,translation:`position`,rotation:`quaternion`,weights:`morphTargetInfluences`},Ym={CUBICSPLINE:void 0,LINEAR:Ke,STEP:Ge},Xm={OPAQUE:`OPAQUE`,MASK:`MASK`,BLEND:`BLEND`};function Zm(e){return e.DefaultMaterial===void 0&&(e.DefaultMaterial=new K({color:16777215,emissive:0,metalness:1,roughness:1,transparent:!1,depthTest:!0,side:0})),e.DefaultMaterial}function Qm(e,t,n){for(let r in n.extensions)e[r]===void 0&&(t.userData.gltfExtensions=t.userData.gltfExtensions||{},t.userData.gltfExtensions[r]=n.extensions[r])}function $m(e,t){t.extras!==void 0&&(typeof t.extras==`object`?Object.assign(e.userData,t.extras):console.warn(`THREE.GLTFLoader: Ignoring primitive type .extras, `+t.extras))}function eh(e,t,n){let r=!1,i=!1,a=!1;for(let e=0,n=t.length;e<n;e++){let n=t[e];if(n.POSITION!==void 0&&(r=!0),n.NORMAL!==void 0&&(i=!0),n.COLOR_0!==void 0&&(a=!0),r&&i&&a)break}if(!r&&!i&&!a)return Promise.resolve(e);let o=[],s=[],c=[];for(let l=0,u=t.length;l<u;l++){let u=t[l];if(r){let t=u.POSITION===void 0?e.attributes.position:n.getDependency(`accessor`,u.POSITION);o.push(t)}if(i){let t=u.NORMAL===void 0?e.attributes.normal:n.getDependency(`accessor`,u.NORMAL);s.push(t)}if(a){let t=u.COLOR_0===void 0?e.attributes.color:n.getDependency(`accessor`,u.COLOR_0);c.push(t)}}return Promise.all([Promise.all(o),Promise.all(s),Promise.all(c)]).then(function(t){let n=t[0],o=t[1],s=t[2];return r&&(e.morphAttributes.position=n),i&&(e.morphAttributes.normal=o),a&&(e.morphAttributes.color=s),e.morphTargetsRelative=!0,e})}function th(e,t){if(e.updateMorphTargets(),t.weights!==void 0)for(let n=0,r=t.weights.length;n<r;n++)e.morphTargetInfluences[n]=t.weights[n];if(t.extras&&Array.isArray(t.extras.targetNames)){let n=t.extras.targetNames;if(e.morphTargetInfluences.length===n.length){e.morphTargetDictionary={};for(let t=0,r=n.length;t<r;t++)e.morphTargetDictionary[n[t]]=t}else console.warn(`THREE.GLTFLoader: Invalid extras.targetNames length. Ignoring names.`)}}function nh(e){let t,n=e.extensions&&e.extensions[pm.KHR_DRACO_MESH_COMPRESSION];if(t=n?`draco:`+n.bufferView+`:`+n.indices+`:`+rh(n.attributes):e.indices+`:`+rh(e.attributes)+`:`+e.mode,e.targets!==void 0)for(let n=0,r=e.targets.length;n<r;n++)t+=`:`+rh(e.targets[n]);return t}function rh(e){let t=``,n=Object.keys(e).sort();for(let r=0,i=n.length;r<i;r++)t+=n[r]+`:`+e[n[r]]+`;`;return t}function ih(e){switch(e){case Int8Array:return 1/127;case Uint8Array:return 1/255;case Int16Array:return 1/32767;case Uint16Array:return 1/65535;default:throw Error(`THREE.GLTFLoader: Unsupported normalized accessor component type.`)}}function ah(e){return e.search(/\.jpe?g($|\?)/i)>0||e.search(/^data\:image\/jpeg/)===0?`image/jpeg`:e.search(/\.webp($|\?)/i)>0||e.search(/^data\:image\/webp/)===0?`image/webp`:e.search(/\.ktx2($|\?)/i)>0||e.search(/^data\:image\/ktx2/)===0?`image/ktx2`:`image/png`}var oh=new z,sh=class{constructor(e={},t={}){this.json=e,this.extensions={},this.plugins={},this.options=t,this.cache=new dm,this.associations=new Map,this.primitiveCache={},this.nodeCache={},this.meshCache={refs:{},uses:{}},this.cameraCache={refs:{},uses:{}},this.lightCache={refs:{},uses:{}},this.sourceCache={},this.textureCache={},this.nodeNamesUsed={};let n=!1,r=-1,i=!1,a=-1;if(typeof navigator<`u`&&navigator.userAgent!==void 0){let e=navigator.userAgent;n=/^((?!chrome|android).)*safari/i.test(e)===!0;let t=e.match(/Version\/(\d+)/);r=n&&t?parseInt(t[1],10):-1,i=e.indexOf(`Firefox`)>-1,a=i?e.match(/Firefox\/([0-9]+)\./)[1]:-1}typeof createImageBitmap>`u`||n&&r<17||i&&a<98?this.textureLoader=new sc(this.options.manager):this.textureLoader=new jc(this.options.manager),this.textureLoader.setCrossOrigin(this.options.crossOrigin),this.textureLoader.setRequestHeader(this.options.requestHeader),this.fileLoader=new ic(this.options.manager),this.fileLoader.setResponseType(`arraybuffer`),this.options.crossOrigin===`use-credentials`&&this.fileLoader.setWithCredentials(!0)}setExtensions(e){this.extensions=e}setPlugins(e){this.plugins=e}parse(e,t){let n=this,r=this.json,i=this.extensions;this.cache.removeAll(),this.nodeCache={},this._invokeAll(function(e){return e._markDefs&&e._markDefs()}),Promise.all(this._invokeAll(function(e){return e.beforeRoot&&e.beforeRoot()})).then(function(){return Promise.all([n.getDependencies(`scene`),n.getDependencies(`animation`),n.getDependencies(`camera`)])}).then(function(t){let a={scene:t[0][r.scene||0],scenes:t[0],animations:t[1],cameras:t[2],asset:r.asset,parser:n,userData:{}};return Qm(i,a,r),$m(a,r),Promise.all(n._invokeAll(function(e){return e.afterRoot&&e.afterRoot(a)})).then(function(){for(let e of a.scenes)e.updateMatrixWorld();e(a)})}).catch(t)}_markDefs(){let e=this.json.nodes||[],t=this.json.skins||[],n=this.json.meshes||[];for(let n=0,r=t.length;n<r;n++){let r=t[n].joints;for(let t=0,n=r.length;t<n;t++)e[r[t]].isBone=!0}for(let t=0,r=e.length;t<r;t++){let r=e[t];r.mesh!==void 0&&(this._addNodeRef(this.meshCache,r.mesh),r.skin!==void 0&&(n[r.mesh].isSkinnedMesh=!0)),r.camera!==void 0&&this._addNodeRef(this.cameraCache,r.camera)}}_addNodeRef(e,t){t!==void 0&&(e.refs[t]===void 0&&(e.refs[t]=e.uses[t]=0),e.refs[t]++)}_getNodeRef(e,t,n){if(e.refs[t]<=1)return n;let r=n.clone(),i=(e,t)=>{let n=this.associations.get(e);n!=null&&this.associations.set(t,n);for(let[n,r]of e.children.entries())i(r,t.children[n])};return i(n,r),r.name+=`_instance_`+ e.uses[t]++,r}_invokeOne(e){let t=Object.values(this.plugins);t.push(this);for(let n=0;n<t.length;n++){let r=e(t[n]);if(r)return r}return null}_invokeAll(e){let t=Object.values(this.plugins);t.unshift(this);let n=[];for(let r=0;r<t.length;r++){let i=e(t[r]);i&&n.push(i)}return n}getDependency(e,t){let n=e+`:`+t,r=this.cache.get(n);if(!r){switch(e){case`scene`:r=this.loadScene(t);break;case`node`:r=this._invokeOne(function(e){return e.loadNode&&e.loadNode(t)});break;case`mesh`:r=this._invokeOne(function(e){return e.loadMesh&&e.loadMesh(t)});break;case`accessor`:r=this.loadAccessor(t);break;case`bufferView`:r=this._invokeOne(function(e){return e.loadBufferView&&e.loadBufferView(t)});break;case`buffer`:r=this.loadBuffer(t);break;case`material`:r=this._invokeOne(function(e){return e.loadMaterial&&e.loadMaterial(t)});break;case`texture`:r=this._invokeOne(function(e){return e.loadTexture&&e.loadTexture(t)});break;case`skin`:r=this.loadSkin(t);break;case`animation`:r=this._invokeOne(function(e){return e.loadAnimation&&e.loadAnimation(t)});break;case`camera`:r=this.loadCamera(t);break;default:if(r=this._invokeOne(function(n){return n!=this&&n.getDependency&&n.getDependency(e,t)}),!r)throw Error(`Unknown type: `+e);break}this.cache.add(n,r)}return r}getDependencies(e){let t=this.cache.get(e);if(!t){let n=this,r=this.json[e+(e===`mesh`?`es`:`s`)]||[];t=Promise.all(r.map(function(t,r){return n.getDependency(e,r)})),this.cache.add(e,t)}return t}loadBuffer(e){let t=this.json.buffers[e],n=this.fileLoader;if(t.type&&t.type!==`arraybuffer`)throw Error(`THREE.GLTFLoader: `+t.type+` buffer type is not supported.`);if(t.uri===void 0&&e===0)return Promise.resolve(this.extensions[pm.KHR_BINARY_GLTF].body);let r=this.options;return new Promise(function(e,i){n.load(kc.resolveURL(t.uri,r.path),e,void 0,function(){i(Error(`THREE.GLTFLoader: Failed to load buffer "`+t.uri+`".`))})})}loadBufferView(e){let t=this.json.bufferViews[e];return this.getDependency(`buffer`,t.buffer).then(function(e){let n=t.byteLength||0,r=t.byteOffset||0;return e.slice(r,r+n)})}loadAccessor(e){let t=this,n=this.json,r=this.json.accessors[e];if(r.bufferView===void 0&&r.sparse===void 0){let e=Km[r.type],t=Um[r.componentType],n=r.normalized===!0,i=new t(r.count*e);return Promise.resolve(new kr(i,e,n))}let i=[];return r.bufferView===void 0?i.push(null):i.push(this.getDependency(`bufferView`,r.bufferView)),r.sparse!==void 0&&(i.push(this.getDependency(`bufferView`,r.sparse.indices.bufferView)),i.push(this.getDependency(`bufferView`,r.sparse.values.bufferView))),Promise.all(i).then(function(e){let i=e[0],a=Km[r.type],o=Um[r.componentType],s=o.BYTES_PER_ELEMENT,c=s*a,l=r.byteOffset||0,u=r.bufferView===void 0?void 0:n.bufferViews[r.bufferView].byteStride,d=r.normalized===!0,f,p;if(u&&u!==c){let e=Math.floor(l/u),n=`InterleavedBuffer:`+r.bufferView+`:`+r.componentType+`:`+e+`:`+r.count,c=t.cache.get(n);c||(f=new o(i,e*u,r.count*u/s),c=new Wr(f,u/s),t.cache.add(n,c)),p=new Kr(c,a,l%u/s,d)}else f=i===null?new o(r.count*a):new o(i,l,r.count*a),p=new kr(f,a,d);if(r.sparse!==void 0){let t=Km.SCALAR,n=Um[r.sparse.indices.componentType],s=r.sparse.indices.byteOffset||0,c=r.sparse.values.byteOffset||0,l=new n(e[1],s,r.sparse.count*t),u=new o(e[2],c,r.sparse.count*a);i!==null&&(p=new kr(p.array.slice(),p.itemSize,p.normalized)),p.normalized=!1;for(let e=0,t=l.length;e<t;e++){let t=l[e];if(p.setX(t,u[e*a]),a>=2&&p.setY(t,u[e*a+1]),a>=3&&p.setZ(t,u[e*a+2]),a>=4&&p.setW(t,u[e*a+3]),a>=5)throw Error(`THREE.GLTFLoader: Unsupported itemSize in sparse BufferAttribute.`)}p.normalized=d}return p})}loadTexture(e){let t=this.json,n=this.options,r=t.textures[e].source,i=t.images[r],a=this.textureLoader;if(i.uri){let e=n.manager.getHandler(i.uri);e!==null&&(a=e)}return this.loadTextureImage(e,r,a)}loadTextureImage(e,t,n){let r=this,i=this.json,a=i.textures[e],o=i.images[t],s=(o.uri||o.bufferView)+`:`+a.sampler;if(this.textureCache[s])return this.textureCache[s];let c=this.loadImageSource(t,n).then(function(t){t.flipY=!1,t.name=a.name||o.name||``,t.name===``&&typeof o.uri==`string`&&o.uri.startsWith(`data:image/`)===!1&&(t.name=o.uri);let n=(i.samplers||{})[a.sampler]||{};return t.magFilter=Wm[n.magFilter]||1006,t.minFilter=Wm[n.minFilter]||1008,t.wrapS=Gm[n.wrapS]||1e3,t.wrapT=Gm[n.wrapT]||1e3,t.generateMipmaps=!t.isCompressedTexture&&t.minFilter!==1003&&t.minFilter!==1006,r.associations.set(t,{textures:e}),t}).catch(function(){return null});return this.textureCache[s]=c,c}loadImageSource(e,t){let n=this,r=this.json,i=this.options;if(this.sourceCache[e]!==void 0)return this.sourceCache[e].then(e=>e.clone());let a=r.images[e],o=self.URL||self.webkitURL,s=a.uri||``,c=!1;if(a.bufferView!==void 0)s=n.getDependency(`bufferView`,a.bufferView).then(function(e){c=!0;let t=new Blob([e],{type:a.mimeType});return s=o.createObjectURL(t),s});else if(a.uri===void 0)throw Error(`THREE.GLTFLoader: Image `+e+` is missing URI and bufferView`);let l=Promise.resolve(s).then(function(e){return new Promise(function(n,r){let a=n;t.isImageBitmapLoader===!0&&(a=function(e){let t=new ln(e);t.needsUpdate=!0,n(t)}),t.load(kc.resolveURL(e,i.path),a,void 0,r)})}).then(function(e){return c===!0&&o.revokeObjectURL(s),$m(e,a),e.userData.mimeType=a.mimeType||ah(a.uri),e}).catch(function(e){throw console.error(`THREE.GLTFLoader: Couldn't load texture`,s),e});return this.sourceCache[e]=l,l}assignTexture(e,t,n,r){let i=this;return this.getDependency(`texture`,n.index).then(function(a){if(!a)return null;if(n.texCoord!==void 0&&n.texCoord>0&&(a=a.clone(),a.channel=n.texCoord),i.extensions[pm.KHR_TEXTURE_TRANSFORM]){let e=n.extensions===void 0?void 0:n.extensions[pm.KHR_TEXTURE_TRANSFORM];if(e){let t=i.associations.get(a);a=i.extensions[pm.KHR_TEXTURE_TRANSFORM].extendTexture(a,e),i.associations.set(a,t)}}return r!==void 0&&(a.colorSpace=r),e[t]=a,a})}assignFinalMaterial(e){let t=e.geometry,n=e.material,r=t.attributes.tangent===void 0,i=t.attributes.color!==void 0,a=t.attributes.normal===void 0;if(e.isPoints){let e=`PointsMaterial:`+n.uuid,t=this.cache.get(e);t||(t=new Ta,Jr.prototype.copy.call(t,n),t.color.copy(n.color),t.map=n.map,t.sizeAttenuation=!1,this.cache.add(e,t)),n=t}else if(e.isLine){let e=`LineBasicMaterial:`+n.uuid,t=this.cache.get(e);t||(t=new da,Jr.prototype.copy.call(t,n),t.color.copy(n.color),t.map=n.map,this.cache.add(e,t)),n=t}if(r||i||a){let e=`ClonedMaterial:`+n.uuid+`:`;r&&(e+=`derivative-tangents:`),i&&(e+=`vertex-colors:`),a&&(e+=`flat-shading:`);let t=this.cache.get(e);t||(t=n.clone(),i&&(t.vertexColors=!0),a&&(t.flatShading=!0),r&&(t.normalScale&&(t.normalScale.y*=-1),t.clearcoatNormalScale&&(t.clearcoatNormalScale.y*=-1)),this.cache.add(e,t),this.associations.set(t,this.associations.get(n))),n=t}e.material=n}getMaterialType(){return K}loadMaterial(e){let t=this,n=this.json,r=this.extensions,i=n.materials[e],a,o={},s=i.extensions||{},c=[];if(s[pm.KHR_MATERIALS_UNLIT]){let e=r[pm.KHR_MATERIALS_UNLIT];a=e.getMaterialType(),c.push(e.extendParams(o,i,t))}else{let n=i.pbrMetallicRoughness||{};if(o.color=new V(1,1,1),o.opacity=1,Array.isArray(n.baseColorFactor)){let e=n.baseColorFactor;o.color.setRGB(e[0],e[1],e[2],tt),o.opacity=e[3]}n.baseColorTexture!==void 0&&c.push(t.assignTexture(o,`map`,n.baseColorTexture,et)),o.metalness=n.metallicFactor===void 0?1:n.metallicFactor,o.roughness=n.roughnessFactor===void 0?1:n.roughnessFactor,n.metallicRoughnessTexture!==void 0&&(c.push(t.assignTexture(o,`metalnessMap`,n.metallicRoughnessTexture)),c.push(t.assignTexture(o,`roughnessMap`,n.metallicRoughnessTexture))),a=this._invokeOne(function(t){return t.getMaterialType&&t.getMaterialType(e)}),c.push(Promise.all(this._invokeAll(function(t){return t.extendMaterialParams&&t.extendMaterialParams(e,o)})))}i.doubleSided===!0&&(o.side=2);let l=i.alphaMode||Xm.OPAQUE;if(l===Xm.BLEND?(o.transparent=!0,o.depthWrite=!1):(o.transparent=!1,l===Xm.MASK&&(o.alphaTest=i.alphaCutoff===void 0?.5:i.alphaCutoff)),i.normalTexture!==void 0&&a!==yi&&(c.push(t.assignTexture(o,`normalMap`,i.normalTexture)),o.normalScale=new I(1,1),i.normalTexture.scale!==void 0)){let e=i.normalTexture.scale;o.normalScale.set(e,e)}if(i.occlusionTexture!==void 0&&a!==yi&&(c.push(t.assignTexture(o,`aoMap`,i.occlusionTexture)),i.occlusionTexture.strength!==void 0&&(o.aoMapIntensity=i.occlusionTexture.strength)),i.emissiveFactor!==void 0&&a!==yi){let e=i.emissiveFactor;o.emissive=new V().setRGB(e[0],e[1],e[2],tt)}return i.emissiveTexture!==void 0&&a!==yi&&c.push(t.assignTexture(o,`emissiveMap`,i.emissiveTexture,et)),Promise.all(c).then(function(){let n=new a(o);return i.name&&(n.name=i.name),$m(n,i),t.associations.set(n,{materials:e}),i.extensions&&Qm(r,n,i),n})}createUniqueName(e){let t=Yc.sanitizeNodeName(e||``);return t in this.nodeNamesUsed?t+`_`+ ++this.nodeNamesUsed[t]:(this.nodeNamesUsed[t]=0,t)}loadGeometries(e){let t=this,n=this.extensions,r=this.primitiveCache;function i(e){return n[pm.KHR_DRACO_MESH_COMPRESSION].decodePrimitive(e,t).then(function(n){return lh(n,e,t)})}let a=[];for(let n=0,o=e.length;n<o;n++){let o=e[n],s=nh(o),c=r[s];if(c)a.push(c.promise);else{let e;e=o.extensions&&o.extensions[pm.KHR_DRACO_MESH_COMPRESSION]?i(o):lh(new Ur,o,t),r[s]={primitive:o,promise:e},a.push(e)}}return Promise.all(a)}loadMesh(e){let t=this,n=this.json,r=this.extensions,i=n.meshes[e],a=i.primitives,o=[];for(let e=0,t=a.length;e<t;e++){let t=a[e].material===void 0?Zm(this.cache):this.getDependency(`material`,a[e].material);o.push(t)}return o.push(t.loadGeometries(a)),Promise.all(o).then(function(n){let o=n.slice(0,n.length-1),s=n[n.length-1],c=[];for(let n=0,l=s.length;n<l;n++){let l=s[n],u=a[n],d,f=o[n];if(u.mode===Hm.TRIANGLES||u.mode===Hm.TRIANGLE_STRIP||u.mode===Hm.TRIANGLE_FAN||u.mode===void 0)d=i.isSkinnedMesh===!0?new Hi(l,f):new U(l,f),d.isSkinnedMesh===!0&&d.normalizeSkinWeights(),u.mode===Hm.TRIANGLE_STRIP?d.geometry=sm(d.geometry,1):u.mode===Hm.TRIANGLE_FAN&&(d.geometry=sm(d.geometry,2));else if(u.mode===Hm.LINES)d=new Ca(l,f);else if(u.mode===Hm.LINE_STRIP)d=new ya(l,f);else if(u.mode===Hm.LINE_LOOP)d=new wa(l,f);else if(u.mode===Hm.POINTS)d=new Aa(l,f);else throw Error(`THREE.GLTFLoader: Primitive mode unsupported: `+u.mode);Object.keys(d.geometry.morphAttributes).length>0&&th(d,i),d.name=t.createUniqueName(i.name||`mesh_`+e),$m(d,i),u.extensions&&Qm(r,d,u),t.assignFinalMaterial(d),c.push(d)}for(let n=0,r=c.length;n<r;n++)t.associations.set(c[n],{meshes:e,primitives:n});if(c.length===1)return i.extensions&&Qm(r,c[0],i),c[0];let l=new B;i.extensions&&Qm(r,l,i),t.associations.set(l,{meshes:e});for(let e=0,t=c.length;e<t;e++)l.add(c[e]);return l})}loadCamera(e){let t,n=this.json.cameras[e],r=n[n.type];if(!r){console.warn(`THREE.GLTFLoader: Missing camera parameters.`);return}return n.type===`perspective`?t=new xc(Wt.radToDeg(r.yfov),r.aspectRatio||1,r.znear||1,r.zfar||2e6):n.type===`orthographic`&&(t=new Tc(-r.xmag,r.xmag,r.ymag,-r.ymag,r.znear,r.zfar)),n.name&&(t.name=this.createUniqueName(n.name)),$m(t,n),Promise.resolve(t)}loadSkin(e){let t=this.json.skins[e],n=[];for(let e=0,r=t.joints.length;e<r;e++)n.push(this._loadNodeShallow(t.joints[e]));return t.inverseBindMatrices===void 0?n.push(null):n.push(this.getDependency(`accessor`,t.inverseBindMatrices)),Promise.all(n).then(function(e){let n=e.pop(),r=e,i=[],a=[];for(let e=0,o=r.length;e<o;e++){let o=r[e];if(o){i.push(o);let t=new z;n!==null&&t.fromArray(n.array,e*16),a.push(t)}else console.warn(`THREE.GLTFLoader: Joint "%s" could not be found.`,t.joints[e])}return new qi(i,a)})}loadAnimation(e){let t=this.json,n=this,r=t.animations[e],i=r.name?r.name:`animation_`+e,a=[],o=[],s=[],c=[],l=[];for(let e=0,t=r.channels.length;e<t;e++){let t=r.channels[e],n=r.samplers[t.sampler],i=t.target,u=i.node,d=r.parameters===void 0?n.input:r.parameters[n.input],f=r.parameters===void 0?n.output:r.parameters[n.output];i.node!==void 0&&(a.push(this.getDependency(`node`,u)),o.push(this.getDependency(`accessor`,d)),s.push(this.getDependency(`accessor`,f)),c.push(n),l.push(i))}return Promise.all([Promise.all(a),Promise.all(o),Promise.all(s),Promise.all(c),Promise.all(l)]).then(function(e){let t=e[0],a=e[1],o=e[2],s=e[3],c=e[4],l=[];for(let e=0,r=t.length;e<r;e++){let r=t[e],i=a[e],u=o[e],d=s[e],f=c[e];if(r===void 0)continue;r.updateMatrix&&r.updateMatrix();let p=n._createAnimationTracks(r,i,u,d,f);if(p)for(let e=0;e<p.length;e++)l.push(p[e])}let u=new Ys(i,void 0,l);return $m(u,r),u})}createNodeMesh(e){let t=this.json,n=this,r=t.nodes[e];return r.mesh===void 0?null:n.getDependency(`mesh`,r.mesh).then(function(e){let t=n._getNodeRef(n.meshCache,r.mesh,e);return r.weights!==void 0&&t.traverse(function(e){if(e.isMesh)for(let t=0,n=r.weights.length;t<n;t++)e.morphTargetInfluences[t]=r.weights[t]}),t})}loadNode(e){let t=this.json,n=this,r=t.nodes[e],i=n._loadNodeShallow(e),a=[],o=r.children||[];for(let e=0,t=o.length;e<t;e++)a.push(n.getDependency(`node`,o[e]));let s=r.skin===void 0?Promise.resolve(null):n.getDependency(`skin`,r.skin);return Promise.all([i,Promise.all(a),s]).then(function(e){let t=e[0],n=e[1],r=e[2];r!==null&&t.traverse(function(e){e.isSkinnedMesh&&e.bind(r,oh)});for(let e=0,r=n.length;e<r;e++)t.add(n[e]);if(t.userData.pivot!==void 0&&n.length>0){let e=t.userData.pivot,r=n[0];t.pivot=new L().fromArray(e),t.position.x-=e[0],t.position.y-=e[1],t.position.z-=e[2],r.position.set(0,0,0),delete t.userData.pivot}return t})}_loadNodeShallow(e){let t=this.json,n=this.extensions,r=this;if(this.nodeCache[e]!==void 0)return this.nodeCache[e];let i=t.nodes[e],a=i.name?r.createUniqueName(i.name):``,o=[],s=r._invokeOne(function(t){return t.createNodeMesh&&t.createNodeMesh(e)});return s&&o.push(s),i.camera!==void 0&&o.push(r.getDependency(`camera`,i.camera).then(function(e){return r._getNodeRef(r.cameraCache,i.camera,e)})),r._invokeAll(function(t){return t.createNodeAttachment&&t.createNodeAttachment(e)}).forEach(function(e){o.push(e)}),this.nodeCache[e]=Promise.all(o).then(function(t){let o;if(o=i.isBone===!0?new Ui:t.length>1?new B:t.length===1?t[0]:new Vn,o!==t[0])for(let e=0,n=t.length;e<n;e++)o.add(t[e]);if(i.name&&(o.userData.name=i.name,o.name=a),$m(o,i),i.extensions&&Qm(n,o,i),i.matrix!==void 0){let e=new z;e.fromArray(i.matrix),o.applyMatrix4(e)}else i.translation!==void 0&&o.position.fromArray(i.translation),i.rotation!==void 0&&o.quaternion.fromArray(i.rotation),i.scale!==void 0&&o.scale.fromArray(i.scale);if(!r.associations.has(o))r.associations.set(o,{});else if(i.mesh!==void 0&&r.meshCache.refs[i.mesh]>1){let e=r.associations.get(o);r.associations.set(o,{...e})}return r.associations.get(o).nodes=e,o}),this.nodeCache[e]}loadScene(e){let t=this.extensions,n=this.json.scenes[e],r=this,i=new B;n.name&&(i.name=r.createUniqueName(n.name)),$m(i,n),n.extensions&&Qm(t,i,n);let a=n.nodes||[],o=[];for(let e=0,t=a.length;e<t;e++)o.push(r.getDependency(`node`,a[e]));return Promise.all(o).then(function(e){for(let t=0,n=e.length;t<n;t++){let n=e[t];n.parent===null?i.add(n):i.add(cm(n))}return r.associations=(e=>{let t=new Map;for(let[e,n]of r.associations)(e instanceof Jr||e instanceof ln)&&t.set(e,n);return e.traverse(e=>{let n=r.associations.get(e);n!=null&&t.set(e,n)}),t})(i),i})}_createAnimationTracks(e,t,n,r,i){let a=[],o=e.name?e.name:e.uuid,s=[];function c(e){e.morphTargetInfluences&&s.push(e.name?e.name:e.uuid)}Jm[i.path]===Jm.weights?(c(e),e.isGroup&&e.children.forEach(c)):s.push(o);let l;switch(Jm[i.path]){case Jm.weights:l=Ws;break;case Jm.rotation:l=Ks;break;case Jm.translation:case Jm.scale:l=Js;break;default:switch(n.itemSize){case 1:l=Ws;break;default:l=Js;break}break}let u=r.interpolation===void 0?Ke:Ym[r.interpolation],d=this._getArrayFromAccessor(n);for(let e=0,n=s.length;e<n;e++){let n=new l(s[e]+`.`+Jm[i.path],t.array,d,u);r.interpolation===`CUBICSPLINE`&&this._createCubicSplineTrackInterpolant(n),a.push(n)}return a}_getArrayFromAccessor(e){let t=e.array;if(e.normalized){let e=ih(t.constructor),n=new Float32Array(t.length);for(let r=0,i=t.length;r<i;r++)n[r]=t[r]*e;t=n}return t}_createCubicSplineTrackInterpolant(e){e.createInterpolant=function(e){return new(this instanceof Ks?Vm:zm)(this.times,this.values,this.getValueSize()/3,e)},e.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline=!0}};function ch(e,t,n){let r=t.attributes,i=new dr;if(r.POSITION!==void 0){let e=n.json.accessors[r.POSITION],t=e.min,a=e.max;if(t!==void 0&&a!==void 0){if(i.set(new L(t[0],t[1],t[2]),new L(a[0],a[1],a[2])),e.normalized){let t=ih(Um[e.componentType]);i.min.multiplyScalar(t),i.max.multiplyScalar(t)}}else{console.warn(`THREE.GLTFLoader: Missing min/max properties for accessor POSITION.`);return}}else return;let a=t.targets;if(a!==void 0){let e=new L,t=new L;for(let r=0,i=a.length;r<i;r++){let i=a[r];if(i.POSITION!==void 0){let r=n.json.accessors[i.POSITION],a=r.min,o=r.max;if(a!==void 0&&o!==void 0){if(t.setX(Math.max(Math.abs(a[0]),Math.abs(o[0]))),t.setY(Math.max(Math.abs(a[1]),Math.abs(o[1]))),t.setZ(Math.max(Math.abs(a[2]),Math.abs(o[2]))),r.normalized){let e=ih(Um[r.componentType]);t.multiplyScalar(e)}e.max(t)}else console.warn(`THREE.GLTFLoader: Missing min/max properties for accessor POSITION.`)}}i.expandByVector(e)}e.boundingBox=i;let o=new Fr;i.getCenter(o.center),o.radius=i.min.distanceTo(i.max)/2,e.boundingSphere=o}function lh(e,t,n){let r=t.attributes,i=[];function a(t,r){return n.getDependency(`accessor`,t).then(function(t){e.setAttribute(r,t)})}for(let t in r){let n=qm[t]||t.toLowerCase();n in e.attributes||i.push(a(r[t],n))}if(t.indices!==void 0&&!e.index){let r=n.getDependency(`accessor`,t.indices).then(function(t){e.setIndex(t)});i.push(r)}return Qt.workingColorSpace!==`srgb-linear`&&`COLOR_0`in r&&console.warn(`THREE.GLTFLoader: Converting vertex colors from "srgb-linear" to "${Qt.workingColorSpace}" not supported.`),$m(e,t),ch(e,t,n),Promise.all(i).then(function(){return t.targets===void 0?e:eh(e,t.targets,n)})}var uh=new sc,dh=new Map;function fh(e,t){let n=dh.get(e);return n||(n=uh.load(`./textures/${e}.jpg`),n.wrapS=n.wrapT=u,n.anisotropy=8,t&&(n.colorSpace=et),dh.set(e,n)),n}function ph(e,t,n=1){let r=e;r.map=fh(`${t}_c`,!0),r.normalMap=fh(`${t}_n`,!1),r.normalScale.setScalar(n),r.roughnessMap=fh(`${t}_r`,!1),r.roughness=1,r.needsUpdate=!0}var mh=3;function hh(e,t,n,r,i,a,o){let s=e.attributes.uv;[[o,a,r,n],[o,a,r,n],[i,o,t,r],[i,o,t,r],[i,a,t,n],[i,a,t,n]].forEach(([e,t,n,r],i)=>{for(let a=0;a<4;a++){let o=i*4+a;s.setXY(o,(s.getX(o)*e+n)/mh,(s.getY(o)*t+r)/mh)}}),s.needsUpdate=!0}function gh(e,t,n){let r=e.attributes.uv,i=Math.PI*2*t/mh;for(let e=0;e<r.count;e++)r.setXY(e,r.getX(e)*Math.max(1,Math.round(i)),r.getY(e)*n/mh);r.needsUpdate=!0}var _h={concrete:{color:11975357,normal:.7},corrugated:{color:10791341,normal:.2},painted:{color:8029586,normal:.4},scratched:{color:10134186,normal:.5},walkway:{color:9080984,normal:1},plates:{color:9213084,normal:.7},bark:{color:8021074,normal:1,metal:0},planks:{color:10125928,normal:.9,metal:0},hull:{color:9215128,normal:.9,tex:`planks`,metal:0},pole:{color:7232072,normal:.8,tex:`planks`,metal:0},tower:{color:12103326,normal:.8,tex:`concrete`,metal:0},asphalt:{color:10132638,normal:.8,tex:`asphalt`,metal:0},sidewalk:{color:12894390,normal:.6,tex:`concrete`,metal:0},cabwall:{color:15265008,normal:.35,tex:`scratched`,metal:.15},siding_0:{color:12758674,normal:.8,tex:`siding`,metal:0},siding_1:{color:9676188,normal:.8,tex:`siding`,metal:0},siding_2:{color:11833984,normal:.8,tex:`siding`,metal:0},siding_3:{color:12365960,normal:.8,tex:`siding`,metal:0},shingle_0:{color:8878186,normal:.8,tex:`shingle`,metal:0},shingle_1:{color:7236198,normal:.8,tex:`shingle`,metal:0},shingle_2:{color:9073248,normal:.8,tex:`shingle`,metal:0},shingle_3:{color:7762026,normal:.8,tex:`shingle`,metal:0}},vh={black:{color:724240,roughness:.55},cable:{color:1053206,roughness:.7},wood:{color:5913634,roughness:.7},paper:{color:14210764,roughness:.9},ceramic:{color:13158080,roughness:.35},warning:{color:14721056,roughness:.75},beige:{color:12365974,roughness:.6},trim:{color:12103836,roughness:.85},paint:{color:13152352,roughness:.8},brick:{color:8013364,roughness:.95},silhouette:{color:525832,roughness:1},rust:{color:6173728,roughness:.9},brass:{color:11569736,roughness:.5},steel:{color:9082012,roughness:.5},rubber:{color:1513498,roughness:.85},bike:{color:9321008,roughness:.6},door_0:{color:6044202,roughness:.7},door_1:{color:4151900,roughness:.7},door_2:{color:6959152,roughness:.7},door_3:{color:4868658,roughness:.7}},yh=[.45,.7];function bh(e,t){let n,r=_h[e],i=vh[e];if(r)n=new K({color:r.color,metalness:r.metal??(e===`concrete`||e===`corrugated`?0:.35)}),ph(n,r.tex??e,r.normal);else if(i)n=new K(i);else return null;return n.name=e,t&&(n.lightMap=t,n.lightMapIntensity=2),n}function xh(e,t=null){let n=new Map;return e.traverse(e=>{let r=e;if(!r.isMesh)return;let i=e=>{let i=e.name.replace(/\.\d+$/,``);if(!n.has(i)){let a=bh(i,r.geometry.attributes.uv1?t:null);!a&&i.startsWith(`emit_`)&&(e.emissiveIntensity=i===`emit_white`?2.2:i===`emit_fan`?1.2:i===`emit_window`?1.15:i===`emit_cab`?1.8:2),n.set(i,a??e)}return n.get(i)};r.material=Array.isArray(r.material)?r.material.map(i):i(r.material)}),[...n.values()]}function Sh(e,t=!1){let n=e;!n.isMeshStandardMaterial||!n.lightMap||(n.lightMapIntensity=2*Math.PI,n.customProgramCacheKey=()=>t?`baked-macro`:`baked`,n.onBeforeCompile=e=>{let n=J.lights_fragment_begin.replace(`getDirectionalLightInfo( directionalLight, directLight );`,`getDirectionalLightInfo( directionalLight, directLight );
 directLight.color *= bakedSun;`);e.fragmentShader=e.fragmentShader.replace(`#include <lights_fragment_begin>`,`float bakedSun = smoothstep(${yh[0].toFixed(2)}, ${yh[1].toFixed(2)}, dot(texture2D(lightMap, vLightMapUv).rgb, vec3(0.333)) * ${2 .toFixed(1)});\n${n}`).replace(`#include <lights_fragment_maps>`,`irradiance = vec3(0.0);
#include <lights_fragment_maps>
 iblIrradiance = vec3(0.0);
 radiance *= 0.3;`),t&&(e.fragmentShader=e.fragmentShader.replace(`#include <map_fragment>`,`#include <map_fragment>
 diffuseColor.rgb *= 0.72 + 0.62 * texture2D(map, mat2(0.14, 0.09, -0.09, 0.14) * vMapUv).rgb;`))},n.needsUpdate=!0)}function Ch(){ph($.floor,`concrete`,.7),ph($.wall,`corrugated`,.3),ph($.rack,`painted`,.5),ph($.crate,`painted`,.6),ph($.platform,`walkway`,1),ph($.tank,`scratched`,.5),ph($.pipe,`scratched`,.5),ph($.monolith,`plates`,.7)}var wh=.5,Th=.5,Eh=new V(16757844),Dh=2,Oh=9,kh=1,$={floor:new K({color:4082776,roughness:.85,metalness:.2}),wall:new K({color:3555918,roughness:.9,metalness:.12}),rack:new K({color:3029318,roughness:.6,metalness:.45}),crate:new K({color:4870750,roughness:.8,metalness:.18}),platform:new K({color:4477277,roughness:.6,metalness:.45}),stripTeal:new K({color:666664,emissive:4322006,emissiveIntensity:1.1}),stripAmber:new K({color:2891784,emissive:16757844,emissiveIntensity:.95}),stripRed:new K({color:2887690,emissive:16734794,emissiveIntensity:.85}),stripGreen:new K({color:666656,emissive:3538845,emissiveIntensity:1}),stripViolet:new K({color:1577004,emissive:11635967,emissiveIntensity:1}),coolant:new K({color:402463,emissive:1499336,emissiveIntensity:.55,roughness:.2,metalness:.1}),water:new K({color:336668,emissive:2087332,emissiveIntensity:.7,roughness:.15,metalness:.1,transparent:!0,opacity:.85}),tank:new K({color:3689045,roughness:.35,metalness:.7}),pipe:new K({color:4477532,roughness:.4,metalness:.6}),steam:new K({color:13625568,emissive:10475720,emissiveIntensity:.5,transparent:!0,opacity:.4,depthWrite:!1}),barrier:new K({color:666664,emissive:4322006,emissiveIntensity:.9,transparent:!0,opacity:.34,side:2}),monolith:new K({color:2239544,roughness:.9,metalness:.3})};Ch();var Ah=class{constructor(e){X(this,`colliders`,[]),X(this,`hazards`,[]),X(this,`zones`,[]),X(this,`checkpoints`,{}),X(this,`droneSpawns`,[]),X(this,`robotSpawns`,[]),X(this,`pickups`,[]),X(this,`props`,new Map),X(this,`jolts`,new Map),X(this,`peaceful`,!1),X(this,`hookPoints`,[]),X(this,`signs`,[]),X(this,`crumbles`,[]),X(this,`playerBox`,{min:new L(0,-999,0),max:new L(0,-999,0)}),X(this,`hookTarget`,null),X(this,`hookSight`,new L),X(this,`scene`,void 0),X(this,`movingPlatforms`,[]),X(this,`lights`,[]),X(this,`fans`,[]),X(this,`flickers`,[]),X(this,`dust`,null),X(this,`dustBase`,null),X(this,`emissiveBases`,new Map),X(this,`dimFactor`,1),X(this,`beacons`,[]),X(this,`motes`,null),X(this,`moteVel`,null),X(this,`skyMat`,null),X(this,`outlineEnabled`,!1),X(this,`outlineColor`,10471644),X(this,`_outlineMat`,null),this.scene=e}get outlineMat(){return this._outlineMat||(this._outlineMat=new da({color:this.outlineColor,transparent:!0,opacity:.5,fog:!0})),this._outlineMat}outline(e,t){if(!this.outlineEnabled)return;let n=new Ca(new Ga(t,25),this.outlineMat);e.add(n)}zone(e,t,n,r,i,a,o){let s=np.zones[e];this.zones.push({name:e,box:s?Z(s.x,s.y,s.z,s.sx??i,s.sy??a,s.sz??o):Z(t,n,r,i,a,o)})}box(e,t,n,r,i,a,o,s=!0){let c=new W(r,i,a);hh(c,e,t,n,r,i,a);let l=new U(c,o);if(l.position.set(e,t,n),this.scene.add(l),s){let s=Z(e,t,n,r,i,a);this.colliders.push(s),this.outline(l,c);let u=Math.min(1,1.6/Math.max(r,i,a));o===$.crate?this.props.set(s,{mesh:l,give:u}):o===$.rack&&this.props.set(s,{mesh:l,give:u*.5})}return l}cylinder(e,t,n,r,i,a,o=!0){let s=new G(r,r,i,28);gh(s,r,i);let c=new U(s,a);return c.position.set(e,t+i/2,n),this.scene.add(c),o&&(this.colliders.push(Z(e,t+i/2,n,r*1.55,i,r*1.55)),this.outline(c,s)),c}addLight(e){e.intensity*=wh,this.scene.add(e),this.lights.push({light:e,base:e.intensity})}textPlane(e,t,n,r,i=96){this.signs.push(e);let a=document.createElement(`canvas`);a.width=512,a.height=256;let o=a.getContext(`2d`);o.font=`bold ${i}px Consolas, monospace`,o.textAlign=`center`,o.textBaseline=`middle`,o.fillStyle=t,o.fillText(e,256,128);let s=new Na(a),c=new U(new us(n,r),new yi({map:s,transparent:!0,opacity:.85}));return this.scene.add(c),c}addFan(e,t,n,r){let i=new B,a=new U(new hs(r,.25,8,40),$.rack),o=new U(new G(r*.16,r*.16,.4,12),$.crate);o.rotation.x=Math.PI/2,i.add(a,o);for(let e=0;e<4;e++){let t=new U(new W(r*.92,r*.34,.1),$.platform);t.geometry.translate(r*.5,0,0),t.rotation.z=e/4*Math.PI*2,i.add(t)}return i.position.set(e,t,n),this.scene.add(i),this.fans.push(i),i}barrel(e,t,n,r=.6,i=1.4,a=$.stripAmber){let o=new B,s=new U(new G(r,r,i,18),$.tank);s.position.y=i/2;let c=new U(new ms(r,18,8,0,Math.PI*2,0,Math.PI/2),$.tank);c.position.y=i;let l=new U(new hs(r*1.02,.05,8,24),a);l.rotation.x=Math.PI/2,l.position.y=i*.62,o.add(s,c,l),o.position.set(e,t,n),this.scene.add(o);let u=Z(e,t+i/2,n,r*1.8,i,r*1.8);return this.colliders.push(u),this.props.set(u,{mesh:o,give:1.3}),o}domeLamp(e,t,n,r){let i=new U(new ms(.45,16,8,0,Math.PI*2,0,Math.PI/2),$.rack);i.rotation.x=Math.PI,i.position.set(e,t,n);let a=new U(new ms(.32,16,8,0,Math.PI*2,0,Math.PI/2),new K({color:660504,emissive:r,emissiveIntensity:.7}));a.rotation.x=Math.PI,a.position.set(e,t-.04,n),this.scene.add(i,a)}cableProp(e,t,n=1.2,r=.06){let i=e.clone().lerp(t,.5);i.y-=n;let a=new U(new gs(new vo(e,i,t),16,r,8,!1),$.pipe);return this.scene.add(a),a}atmosphere(e,t,n,r,i=.07){this.buildMotes(t,e,n,r,i)}addPickup(e,t,n,r=!1){let i=new U(new La(.22,.45,4,10),$.stripTeal);i.position.set(e,t,n),this.scene.add(i),this.pickups.push({mesh:i,pos:new L(e,t,n),taken:!1,respawns:r,respawnT:0})}addMovingPlatform(e,t,n,r,i=$.stripAmber){let a=.6,o=new W(4,a,3),s=new U(o,$.platform),c=new U(new W(4.05,.04,3.05),i);c.position.y=.32,s.add(c),this.outline(s,o),s.position.set(e,t,n),this.scene.add(s);let l=Z(e,t,n,4,a,3);l.delta=new L,this.colliders.push(l);let u=new L(4/2,a/2,3/2),d=new L(e,t,n);this.movingPlatforms.push({update(e,t){let n=r(t);l.delta.set(n.x-d.x,n.y-d.y,n.z-d.z),d.set(n.x,n.y,n.z),s.position.set(n.x,n.y,n.z),l.min.set(n.x-u.x,n.y-u.y,n.z-u.z),l.max.set(n.x+u.x,n.y+u.y,n.z+u.z)}})}addSwingPlatform(e,t,n,r,i,a,o){let s=Math.asin(i/r),c=e=>s*Math.sin(e*a+o),l=i=>{let a=c(i);return{x:e+Math.sin(a)*r,y:t-Math.cos(a)*r,z:n}},u=l(0);this.addMovingPlatform(u.x,u.y,u.z,l,$.stripTeal);let d=new B;d.position.set(e,t,n);for(let e of[-1,1]){let t=new U(new G(.05,.05,r,6),$.pipe);t.position.set(0,-r/2,e*1.2),d.add(t)}this.scene.add(d),this.box(e,t+.2,n,1.2,.4,3.2,$.monolith,!1),this.movingPlatforms.push({update(e,t){d.rotation.z=c(t)}})}addCrumble(e,t,n,r,i,a){let o=$.platform.clone();o.emissive.copy(Eh),o.emissiveIntensity=0;let s=new W(r,i,a),c=new U(s,o);c.position.set(e,t,n),this.outline(c,s);let l=new U(new W(r*.9,.03,.09),$.stripAmber);l.position.set(0,i/2+.01,a*.14),l.rotation.y=.32;let u=new U(new W(r*.55,.03,.09),$.stripAmber);u.position.set(r*.1,i/2+.01,-a*.2),u.rotation.y=-.5,c.add(l,u),this.scene.add(c);let d=Z(e,t,n,r,i,a);this.colliders.push(d),this.crumbles.push({mesh:c,mat:o,collider:d,home:new L(e,t,n),state:`whole`,t:0,fallV:0})}addHookPoint(e,t,n){let r=new K({color:666664,emissive:7330024,emissiveIntensity:1}),i=new U(new ss(.4,1),r);i.position.set(e,t,n);let a=new U(new hs(.95,.05,8,40),r);a.position.set(e,t,n),this.scene.add(i,a),this.hookPoints.push({pos:new L(e,t,n),mat:r,ring:a,glow:1})}findHookPoint(e,t,n,r){let i=null,a=t;for(let t of this.hookPoints){let o=e.distanceTo(t.pos);o>=a||(this.hookSight.copy(t.pos).sub(e).divideScalar(o),!(this.hookSight.x*n+this.hookSight.z*r<0)&&(this.firstSolid(e,this.hookSight,o)||(i=t,a=o)))}return i}markHookPoint(e){this.hookTarget=e}notePlayer(e,t){this.playerBox.min.copy(e.min),this.playerBox.max.copy(e.max);for(let e of this.crumbles)e.state===`whole`&&e.collider===t&&(e.state=`cracking`,e.t=0)}updateCrumbles(e){for(let t of this.crumbles)if(t.t+=e,t.state===`cracking`){let e=Math.min(1,t.t/Q.crumbleHold);if(t.mat.emissiveIntensity=e*.7,t.mesh.position.x=t.home.x+Math.sin(t.t*38)*.035*e,t.mesh.position.z=t.home.z+Math.cos(t.t*31)*.035*e,e>=1){t.state=`falling`,t.t=0,t.fallV=0,t.mesh.position.x=t.home.x,t.mesh.position.z=t.home.z;let e=this.colliders.indexOf(t.collider);e>=0&&this.colliders.splice(e,1)}}else if(t.state===`falling`)t.fallV+=18*e,t.mesh.position.y-=t.fallV*e,t.mesh.rotation.x+=e*.5,t.t>1.4&&(t.mesh.visible=!1),t.t>=Q.crumbleBack&&!Sp(this.playerBox,t.collider)&&(t.state=`growing`,t.t=0,t.mesh.visible=!0,t.mesh.position.copy(t.home),t.mesh.rotation.x=0,t.mat.emissiveIntensity=0,this.colliders.push(t.collider));else if(t.state===`growing`){let e=Math.min(1,t.t/Th);t.mesh.scale.setScalar(.3+e*.7),e>=1&&(t.state=`whole`)}}updateHookPoints(e,t){for(let n of this.hookPoints){let r=n===this.hookTarget?2.6:1;n.glow+=(r-n.glow)*Math.min(1,e*6),n.mat.emissiveIntensity=n.glow,n.ring.rotation.x=t*.7,n.ring.rotation.y=t*.45}}buildDust(e,t,n,r){let i=new Float32Array(350*3);for(let a=0;a<350;a++)i[a*3]=(Math.random()-.5)*e*2,i[a*3+1]=Math.random()*t,i[a*3+2]=n+Math.random()*(r-n);this.dustBase=i.slice();let a=new Ur;a.setAttribute(`position`,new kr(i,3));let o=new Ta({color:4322006,size:.05,transparent:!0,opacity:.35});this.dust=new Aa(a,o),this.dust.frustumCulled=!1,this.scene.add(this.dust)}beacon(e,t,n,r,i=60,a=1.1){let o=new B;o.position.set(e,t,n);let s=new yi({color:r,transparent:!0,opacity:.16,blending:2,depthWrite:!1,side:2}),c=new U(new G(a*.35,a*.5,i,12,1,!0),s);c.position.y=i/2;let l=new U(new G(a*1.2,a*1.9,i*.8,14,1,!0),s);l.position.y=i*.4,o.add(c,l);let u=new U(new Ra(a*1.8,24),new yi({color:r,transparent:!0,opacity:.3,blending:2,depthWrite:!1}));u.rotation.x=-Math.PI/2,u.position.y=.08,o.add(u);let d=new Float32Array(120),f=new Float32Array(40);for(let e=0;e<40;e++){let t=Math.random()*Math.PI*2,n=Math.random()*a*.9;d[e*3]=Math.cos(t)*n,d[e*3+1]=Math.random()*i,d[e*3+2]=Math.sin(t)*n,f[e]=d[e*3+1]}let p=new Ur;p.setAttribute(`position`,new kr(d,3));let m=new Aa(p,new Ta({color:r,size:.16,transparent:!0,opacity:.8,blending:2,depthWrite:!1}));m.frustumCulled=!1,o.add(m);let h=new q(r,14,22,2);h.position.y=2.5,o.add(h),this.scene.add(o),this.beacons.push({group:o,mat:s,light:h,rising:m,riseBase:f,phase:Math.random()*10})}skyDome(e,t,n=320,r=0){let i=new Ts({side:1,depthWrite:!1,fog:!1,uniforms:{top:{value:new V(e)},bottom:{value:new V(t)},offset:{value:12},exponent:{value:.7}},vertexShader:`
        varying vec3 vWorld;
        void main() {
          vec4 wp = modelMatrix * vec4(position, 1.0);
          vWorld = wp.xyz;
          gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
        }`,fragmentShader:`
        uniform vec3 top;
        uniform vec3 bottom;
        uniform float offset;
        uniform float exponent;
        varying vec3 vWorld;
        void main() {
          float h = normalize(vWorld + vec3(0.0, offset, 0.0)).y;
          float t = pow(clamp(h * 0.5 + 0.5, 0.0, 1.0), exponent);
          gl_FragColor = vec4(mix(bottom, top, t), 1.0);
        }`}),a=new U(new ms(n,24,16),i);a.position.z=r,a.frustumCulled=!1,this.scene.add(a),this.skyMat=i}buildMotes(e,t,n,r,i=.08){let a=new Float32Array(e*3),o=new Float32Array(e*3);for(let t=0;t<e;t++)a[t*3]=r.x+(Math.random()-.5)*n.x*2,a[t*3+1]=r.y+(Math.random()-.5)*n.y*2,a[t*3+2]=r.z+(Math.random()-.5)*n.z*2,o[t*3]=(Math.random()-.5)*.25,o[t*3+1]=.12+Math.random()*.3,o[t*3+2]=(Math.random()-.5)*.25;let s=new Ur;s.setAttribute(`position`,new kr(a,3));let c=new Ta({color:t,size:i,transparent:!0,opacity:.55,blending:2,depthWrite:!1});this.motes=new Aa(s,c),this.motes.frustumCulled=!1,this.moteVel=o,this.motes.userData.half=n,this.motes.userData.center=r,this.scene.add(this.motes)}firstSolid(e,t,n){let r=1/0,i=null;for(let a of this.colliders){let o=wp(e,t,n,a);o!==null&&o>0&&o<r&&(r=o,i=a)}return i?{dist:r,collider:i}:null}jolt(e,t,n,r){let i=this.props.get(e);if(!i)return;let a=this.jolts.get(i);if(!a){let e=i.mesh;a={prop:i,x:0,v:0,dirX:t,dirZ:n,homePos:e.position.clone(),homeRotX:e.rotation.x,homeRotZ:e.rotation.z},this.jolts.set(i,a)}a.dirX=t,a.dirZ=n,a.v+=Dh*i.give*r}updateJolts(e){let t=Math.min(e,1/30);for(let e of this.jolts.values()){e.v+=(-180*e.x-Oh*e.v)*t,e.x+=e.v*t;let n=e.prop.mesh;if(Math.abs(e.x)<5e-4&&Math.abs(e.v)<.01){n.position.copy(e.homePos),n.rotation.x=e.homeRotX,n.rotation.z=e.homeRotZ,this.jolts.delete(e.prop);continue}n.position.set(e.homePos.x+e.dirX*e.x,e.homePos.y,e.homePos.z+e.dirZ*e.x),n.rotation.x=e.homeRotX+e.dirZ*e.x*kh,n.rotation.z=e.homeRotZ-e.dirX*e.x*kh}}updateBase(e,t){for(let n of this.movingPlatforms)n.update(e,t);this.updateJolts(e),this.updateCrumbles(e),this.updateHookPoints(e,t);let n=2.2*this.dimFactor;for(let t of this.fans)t.rotation.z+=e*n;let r=(Math.sin(t*1.2)+1)/2;for(let e of this.flickers)e.mat.emissiveIntensity=(1+r*1.1)*this.dimFactor+.02,e.light&&(e.light.intensity=(6+r*4)*this.dimFactor);if(this.dust&&this.dustBase){let e=this.dust.geometry.attributes.position,n=e.array;for(let e=0;e<n.length;e+=3)n[e]=this.dustBase[e]+Math.sin(t*.3+e)*.6,n[e+1]=this.dustBase[e+1]+Math.sin(t*.2+e*1.7)*.4;e.needsUpdate=!0}for(let n of this.beacons){let r=.16+(Math.sin(t*.9+n.phase)+1)*.06;n.mat.opacity=r,n.light.intensity=11+(Math.sin(t*.9+n.phase)+1)*4;let i=n.rising.geometry.attributes.position,a=i.array;for(let t=0;t<n.riseBase.length;t++)a[t*3+1]+=e*(1.6+t%5*.4),a[t*3+1]>60&&(a[t*3+1]=0);i.needsUpdate=!0}if(this.motes&&this.moteVel){let n=this.motes.geometry.attributes.position,r=n.array,i=this.motes.userData.half,a=this.motes.userData.center;for(let n=0;n<r.length;n+=3)r[n]+=this.moteVel[n]*e+Math.sin(t*.2+n)*.004,r[n+1]+=this.moteVel[n+1]*e,r[n+2]+=this.moteVel[n+2]*e,r[n+1]>a.y+i.y&&(r[n+1]=a.y-i.y),r[n]>a.x+i.x?r[n]-=i.x*2:r[n]<a.x-i.x&&(r[n]+=i.x*2),r[n+2]>a.z+i.z?r[n+2]-=i.z*2:r[n+2]<a.z-i.z&&(r[n+2]+=i.z*2);n.needsUpdate=!0}for(let n of this.pickups)n.taken&&n.respawns&&(n.respawnT-=e,n.respawnT<=0&&(n.taken=!1,n.mesh.visible=!0)),n.taken||(n.mesh.rotation.y+=e*2,n.mesh.position.y=n.pos.y+Math.sin(t*2+n.pos.x)*.12)}},jh={solids:[{c:[-30.25,18.5,0],s:[.5,39,61],m:`wall`},{c:[30.25,18.5,0],s:[.5,39,61],m:`wall`},{c:[0,18.5,-30.25],s:[61,39,.5],m:`wall`},{c:[-16.25,18.5,30.25],s:[28.5,39,.5],m:`wall`},{c:[16.25,18.5,30.25],s:[28.5,39,.5],m:`wall`},{c:[0,21.5,30.25],s:[4,33,.5],m:`wall`},{c:[0,38.5,0],s:[60,1,60],m:`wall`},{c:[0,-4.5,0],s:[16,1,16],m:`wall`},{c:[0,-2,8],s:[16,4,.5],m:`wall`},{c:[0,8.5,8],s:[16,17,.5],m:`glass`},{c:[-1.5,19.5,8],s:[13,3,.5],m:`glass`},{c:[0,24.5,8],s:[16,7,.5],m:`wall`},{c:[-8,-2,0],s:[.5,4,16],m:`wall`},{c:[-8,3,0],s:[.5,6,16],m:`glass`},{c:[-8,17,0],s:[.5,22,16],m:`wall`},{c:[0,1,-8],s:[16,10,.5],m:`wall`},{c:[0,8.5,-8],s:[16,5,.5],m:`glass`},{c:[0,19.5,-8],s:[16,17,.5],m:`wall`},{c:[8,1,0],s:[.5,10,16],m:`wall`},{c:[8,8.5,-7],s:[.5,5,2],m:`wall`},{c:[8,8.5,3],s:[.5,5,10],m:`wall`},{c:[8,11.5,0],s:[.5,1,16],m:`wall`},{c:[8,20,-2.5],s:[.5,16,11],m:`wall`},{c:[8,20,7.5],s:[.5,16,1],m:`wall`},{c:[8,22,5],s:[.5,12,4],m:`wall`},{c:[0,-.5,43.099999999999994],s:[6,1,26.4],m:`floor`},{c:[0,-.5,66.15],s:[6,1,19.700000000000003],m:`floor`},{c:[-3.25,4.25,53.2],s:[.5,8.5,46.6],m:`wall`},{c:[3.25,4.25,53.2],s:[.5,8.5,46.6],m:`wall`},{c:[0,4.25,76.25],s:[7,8.5,.5],m:`wall`},{c:[0,23.5,53.5],s:[7,31,46],m:`wall`},{c:[0,.5,56.3],s:[6,1,.6000000000000014],m:`crate`,edge:`lit`},{c:[0,1.25,46],s:[6,2.5,4],m:`crate`,edge:`lit`},{c:[0,5.5,38],s:[6,5,.5],m:`wall`},{c:[2.2,.45,34],s:[1.1999999999999997,.9,1.2000000000000028],m:`crate`},{c:[0,-.5,19],s:[16,1,22],m:`floor`},{c:[8,9,19],s:[.5,18,22],m:`wall`},{c:[-8,8.5,10],s:[.5,17,4],m:`wall`},{c:[-8,8.5,24],s:[.5,17,12],m:`wall`},{c:[-8,10.5,15],s:[.5,13,6],m:`wall`},{c:[-4.5,.5,18.6],s:[3,1,1.1999999999999993],m:`crate`},{c:[-1.9000000000000001,.45,20.7],s:[.6000000000000001,.9,.6000000000000014],m:`crate`},{c:[5.699999999999999,.8,24.9],s:[1.7999999999999998,1.6,1.8000000000000007],m:`crate`},{c:[6.5,.6,22],s:[2,1.2,2],m:`crate`},{c:[-19,-.5,11],s:[22,1,38],m:`floor`},{c:[-19,6,30],s:[22,12,.5],m:`wall`},{c:[-23,3,.5],s:[2,6,17],m:`rack`},{c:[-14,3,.5],s:[2,6,17],m:`rack`},{c:[-10.625,3,-7],s:[4.75,6,2],m:`rack`},{c:[-10.625,3,8],s:[4.75,6,2],m:`rack`},{c:[-26.5,2,13.8],s:[3,4,1.5999999999999996],m:`rack`},{c:[-26.5,2,16.8],s:[3,4,1.6000000000000014],m:`rack`},{c:[-26.5,2,22.8],s:[3,4,1.6000000000000014],m:`rack`},{c:[-26.5,2,25.8],s:[3,4,1.6000000000000014],m:`rack`},{c:[-16.5,2,22.8],s:[3,4,1.6000000000000014],m:`rack`},{c:[-16.5,2,25.8],s:[3,4,1.6000000000000014],m:`rack`},{c:[-18.5,4.5,9],s:[7,3,.5],m:`wall`},{c:[-19.25,.65,2.25],s:[2.5,1.3,2.5],m:`crate`,edge:`lit`},{c:[-17.25,1.3,-1.75],s:[2.5,2.6,2.5],m:`crate`,edge:`lit`},{c:[-19.5,1.95,-6.45],s:[4,3.9,2.9000000000000004],m:`rack`,edge:`lit`},{c:[-27,2.75,2.5],s:[6,.5,13],m:`wall`},{c:[-27,3,9.25],s:[6,6,.5],m:`wall`},{c:[-28.25,.7,-6.75],s:[2.5,1.4,2.5],m:`crate`,edge:`lit`},{c:[-25.75,1.4,-6.75],s:[2.5,2.8,2.5],m:`crate`,edge:`lit`},{c:[-25.75,2.1,-4.5],s:[2.5,4.2,2],m:`crate`,edge:`lit`},{c:[-17,2.5,-19],s:[26,7,22],m:`floor`,edge:`lit`},{c:[8.5,5.5,-19],s:[9,1,22],m:`floor`,edge:`lit`},{c:[10.5,5.5,-5],s:[5,1,6],m:`floor`,edge:`lit`},{c:[0,2.5,-19],s:[8,1,22],m:`floor`},{c:[-3.1,3.75,-10],s:[1.7999999999999998,1.5,3],m:`crate`,edge:`lit`},{c:[0,5.7,-19],s:[3,.5999999999999996,3],m:`platform`,edge:`lit`},{c:[0,5.4,-24],s:[2.4,.5999999999999996,6],m:`platform`,edge:`lit`},{c:[0,5.4,-14],s:[2.4,.5999999999999996,6],m:`platform`,edge:`lit`},{c:[13.25,8.5,-16],s:[.5,7,28],m:`wall`},{c:[10.5,8,-2],s:[5,6,.5],m:`wall`},{c:[-8.5,13.5,-19],s:[43,3,22],m:`wall`},{c:[10.75,12.5,-5],s:[5.5,3,6],m:`wall`},{c:[3.5,7.1000000000000005,-4],s:[4,.5999999999999996,4],m:`platform`,edge:`lit`},{c:[-2.5,8.5,-1],s:[4,.5999999999999996,4],m:`platform`,edge:`lit`},{c:[-1.5,9.899999999999999,4.5],s:[4,.5999999999999996,4],m:`platform`,edge:`lit`},{c:[4.5,10.899999999999999,5],s:[4,.5999999999999996,4],m:`platform`,edge:`lit`},{c:[-5.5,5.7,-5.5],s:[4,.5999999999999996,4],m:`platform`,edge:`lit`},{c:[19,11.5,14],s:[22,1,32],m:`floor`},{c:[19,17.5,-2],s:[22,13,.5],m:`wall`},{c:[19,25.7,14],s:[22,3.3999999999999986,32],m:`wall`},{c:[8,18,16.5],s:[.5,12,17],m:`wall`},{c:[8,18,29.5],s:[.5,12,1],m:`wall`},{c:[8,22.5,27],s:[.5,3,4],m:`wall`},{c:[8,14.7,27],s:[.5,5.399999999999999,4],m:`wall`},{c:[20,12.75,10],s:[1.5,1.5,1.5],m:`crate`},{c:[14,13,13],s:[2,2,2],m:`crate`},{c:[23.3,13.3,-.19999999999999996],s:[2.6000000000000014,2.5999999999999996,2.6],m:`crate`},{c:[25,12.9,15],s:[2,1.8000000000000007,2],m:`crate`},{c:[17,12.8,19],s:[2,1.5999999999999996,2],m:`crate`},{c:[19.5,12.7,27],s:[3,1.4000000000000004,6],m:`platform`,edge:`lit`},{c:[16.5,13.4,27],s:[3,2.8000000000000007,6],m:`platform`,edge:`lit`},{c:[13.5,14.1,27],s:[3,4.199999999999999,6],m:`platform`,edge:`lit`},{c:[10.125,14.8,27],s:[3.75,5.600000000000001,6],m:`platform`,edge:`lit`},{c:[14.625,13.5,23.75],s:[12.75,3,.5],m:`wall`},{c:[0,17.7,19],s:[16,.6000000000000014,22],m:`floor`},{c:[-8,22,12],s:[.5,8,8],m:`wall`},{c:[-8,22,25],s:[.5,8,10],m:`wall`},{c:[-8,23.5,18],s:[.5,5,4],m:`wall`},{c:[0,22,30],s:[16,8,.5],m:`wall`},{c:[0,26.7,19],s:[16,1.3999999999999986,22],m:`wall`},{c:[0,20,22],s:[10,4,.5],m:`glass`},{c:[0,18.5,14.6],s:[3,1,1.1999999999999993],m:`crate`},{c:[-14,17.7,18],s:[12,.6000000000000014,12],m:`floor`},{c:[-14,21,12],s:[12,6,.5],m:`wall`},{c:[-14,21,24],s:[12,6,.5],m:`wall`},{c:[-20,21,18],s:[.5,6,12],m:`wall`},{c:[-14,25.7,18],s:[12,3.3999999999999986,12],m:`wall`},{c:[-19,19.5,18],s:[1,3,10],m:`rack`},{c:[-14.5,19.5,18],s:[1,3,6],m:`rack`},{c:[0,17.7,6.375],s:[15.5,.6000000000000014,2.75],m:`platform`,edge:`lit`},{c:[-6.375,19.7,.25],s:[2.75,.6000000000000014,9.5],m:`platform`,edge:`lit`},{c:[-1.875,22,-6.375],s:[11.75,.6000000000000014,2.75],m:`platform`,edge:`lit`},{c:[6.375,23.5,-2],s:[2.75,.6000000000000014,6],m:`platform`,edge:`lit`},{c:[6.375,25,2.5],s:[2.75,.6000000000000014,3],m:`platform`,edge:`lit`},{c:[-18,27.7,4],s:[24,.6000000000000014,52],m:`floor`},{c:[19,27.7,4],s:[22,.6000000000000014,52],m:`floor`},{c:[1,27.7,18],s:[14,.6000000000000014,24],m:`floor`},{c:[1,27.7,-14],s:[14,.6000000000000014,16],m:`floor`},{c:[-.5,27.7,0],s:[11,.6000000000000014,12],m:`grate`},{c:[6.5,27.7,5],s:[3,.6000000000000014,2],m:`grate`},{c:[6.5,27.7,-3.5],s:[3,.6000000000000014,5],m:`grate`},{c:[-14,31,-12],s:[2.6000000000000014,6,2.6000000000000014],m:`rack`},{c:[14,31,-12],s:[2.6000000000000014,6,2.6000000000000014],m:`rack`},{c:[-14,31,14],s:[2.6000000000000014,6,2.6000000000000014],m:`rack`},{c:[14,31,14],s:[2.6000000000000014,6,2.6000000000000014],m:`rack`},{c:[0,27.7,-26],s:[60,.6000000000000014,8],m:`floor`},{c:[-16.5,31,-22],s:[27,6,.5],m:`wall`},{c:[16.5,31,-22],s:[27,6,.5],m:`wall`},{c:[0,33,-22],s:[6,2,.5],m:`wall`},{c:[0,35.5,-26],s:[60,3,8],m:`wall`},{c:[-8,29.6,-28.5],s:[2,3.1999999999999993,2],m:`rack`},{c:[-5,29.6,-28.5],s:[2,3.1999999999999993,2],m:`rack`},{c:[5,29.6,-28.5],s:[2,3.1999999999999993,2],m:`rack`},{c:[8,29.6,-28.5],s:[2,3.1999999999999993,2],m:`rack`}]},Mh=16724804,Nh=[`training`,`reception`,`stacks`,`catwalk`,`gallery`,`bay`,`atrium`,`climb`,`shell`,`deck`,`breaker`],Ph=.6;function Fh(){let e=document.createElement(`canvas`);e.width=e.height=512;let t=e.getContext(`2d`);t.fillStyle=`rgba(58,66,74,0.6)`,t.fillRect(0,0,512,512),t.fillStyle=`rgba(196,204,210,1)`;for(let e=0;e<512;e+=16)t.fillRect(e,0,6,512);t.fillStyle=`rgba(170,178,184,1)`;for(let e=0;e<512;e+=64)t.fillRect(0,e,512,5);let n=new Na(e);return n.wrapS=n.wrapT=u,n.colorSpace=et,n.anisotropy=8,n}var Ih=.7,Lh=.45,Rh=.5,zh=.3,Bh=.6,Vh=class extends Ah{constructor(e){super(e),X(this,`arenaFloorY`,28),X(this,`bossAnchor`,new L(0,31.6,0)),X(this,`breakerPos`,new L(0,29,-27)),X(this,`floorFans`,[]),X(this,`gates`,[]),X(this,`breakables`,[]),X(this,`readables`,[]),X(this,`trainingDoor`,null),X(this,`trainingPanel`,new L(2.6,1.05,31.2)),X(this,`doorRising`,null),X(this,`onArt`,null),X(this,`artReady`,!1),X(this,`droneDoor`,null),X(this,`breakerDoor`,null),X(this,`arenaDoor`,void 0),X(this,`leverPivot`,void 0),X(this,`leverPulled`,!1),X(this,`breakerGlow`,void 0),X(this,`chewCrate`,null),X(this,`plainMeshes`,[]),X(this,`artMats`,[]),X(this,`detailMats`,[]),X(this,`fallers`,[]),X(this,`pullClock`,-1),X(this,`glass`,new K({color:10475752,roughness:.1,metalness:.2,transparent:!0,opacity:.16,depthWrite:!1})),X(this,`grate`,new K({map:Fh(),color:15002093,emissive:2766400,emissiveIntensity:1,roughness:.45,metalness:.5,transparent:!0,alphaTest:.05,side:2,depthWrite:!1})),this.buildSolids(),this.buildStack(),this.buildPanel(),this.buildFans(),this.buildBay(),this.buildLasers(),this.buildDeck(),this.buildBreaker(),this.buildPaperwork(),this.buildTraining(),this.frame(`x`,15,2,-7.9,6,4,$.stripTeal),this.frame(`x`,-4,8.5,8.3,4,5,$.stripTeal),this.frame(`x`,5,14,8.3,4,4,$.stripTeal),this.frame(`x`,27,19.5,7.9,4,3,$.stripTeal),this.frame(`z`,6.5,19.5,7.9,3,3,$.stripTeal),this.frame(`z`,0,30,-21.7,6,4,$.stripRed),this.buildDust(28,34,28,-28),this.loadArt(),this.checkpoints={spawn:new L(0,1.05,72),hall_start:new L(-11,1.05,15),hall_end:new L(-18.5,7.05,-11),gallery_end:new L(11,7.05,-12),bay:new L(10,13.05,5),shaft_top:new L(6.5,19.05,11),bridge:new L(6.5,26.35,2.5)},this.zone(`t_move`,0,2,72,6,4,4),this.zone(`t_run`,0,2,64,6,4,3),this.zone(`t_jump`,0,2,59.5,6,4,3),this.zone(`t_double`,0,2,51,6,4,3),this.zone(`t_weapons`,0,2,41.5,6,4,3),this.zone(`t_use`,0,2,35.8,6,4,2),this.zone(`corridor`,0,3,18,16,6,3),this.zone(`hall`,-11,3,15,3,6,6),this.zone(`hall_end`,-18.5,8.5,-11,7,5,5),this.zone(`m1_fan1`,-25,8.5,-19,3,5,22),this.zone(`m1_gallery_end`,11,8.5,-12,4,5,6),this.zone(`dronebay`,12.5,14,5,3,6,6),this.zone(`bay_exit`,24,14,27,4,6,6),this.zone(`shaft`,5,20,27,4,5,4),this.zone(`shaft_top`,6.5,20,11,3,5,4),this.zone(`bridge`,6.5,27.5,2.5,4,3.5,4),this.zone(`arena`,6.5,29.5,2.5,8,3,8)}buildSolids(){let e={floor:$.floor,wall:$.wall,rack:$.rack,crate:$.crate,platform:$.platform,glass:this.glass,grate:this.grate};for(let t of jh.solids){let n=this.box(t.c[0],t.c[1],t.c[2],t.s[0],t.s[1],t.s[2],e[t.m]);t.m!==`glass`&&t.m!==`grate`&&this.plainMeshes.push(n),t.edge===`lit`&&this.litEdge(t.c[0],t.c[1]+t.s[1]/2,t.c[2],t.s[0],t.s[2],$.stripTeal)}for(let[e,t,n,r]of[[0,7,19,26],[-19,8,2,30],[-20,10,-19,34],[8,10,-19,26],[18,21,8,40],[0,24,18,18],[0,34,4,50],[0,33,-26,16]]){let i=new q(12574960,r,46,1.6);i.position.set(e,t,n),this.addLight(i)}}async loadArt(){if(new URLSearchParams(location.search).has(`plain`))return;let e=`./models/m1/`,t=new um,n=new sc;try{let r=await Promise.all(Nh.map(async r=>{let[i,a]=await Promise.all([t.loadAsync(`${e}${r}.glb`),n.loadAsync(`${e}${r}_light.jpg`)]);return a.flipY=!1,a.channel=1,a.colorSpace=et,{model:i,light:a}})),i=await t.loadAsync(`${e}details.glb`);r.forEach(({model:e,light:t},n)=>{this.artMats.push({i:n,mats:xh(e.scene,t)}),this.scene.add(e.scene)}),this.detailMats=xh(i.scene),this.scene.add(i.scene);for(let e of this.plainMeshes)e.visible=!1;for(let{light:e}of this.lights)e.removeFromParent();this.lights.length=0,this.artReady=!0,this.onArt?.()}catch(e){console.warn(`Mission 1 art did not load, so the plain shapes stay.`,e)}}frame(e,t,n,r,i,a,o){let s=.1,c=(i,a,s,c)=>{e===`z`?this.box(t+i,n+a,r,s,c,.06,o,!1):this.box(r,n+a,t+i,.06,c,s,o,!1)};c(0,a/2,i+s,s),c(0,-a/2+.05,i+s,.04),c(-i/2,0,s,a),c(i/2,0,s,a)}litEdge(e,t,n,r,i,a){let o=t+.015;this.box(e,o,n-i/2+.04,r,.03,.08,a,!1),this.box(e,o,n+i/2-.04,r,.03,.08,a,!1),this.box(e-r/2+.04,o,n,.08,.03,i,a,!1),this.box(e+r/2-.04,o,n,.08,.03,i,a,!1)}buildStack(){this.box(0,-3.4,0,15.5,1,15.5,$.coolant,!1),this.hazards.push(Z(0,-3,0,16,2,16));let e=new K({color:2886156,emissive:Mh,emissiveIntensity:1});for(let t of[-1.5,5.7])this.box(0,t,7.65,15.5,.25,.1,e,!1),this.box(0,t,-7.65,15.5,.25,.1,e,!1),this.box(7.65,t,0,.1,.25,15.5,e,!1),this.box(-7.65,t,0,.1,.25,15.5,e,!1);let t=new q(4322006,40,40,1.6);t.position.set(0,2,0),this.addLight(t);let n=this.addFan(0,26.2,0,5.2);n.rotation.x=Math.PI/2;let r=new q(4322006,50,34,1.6);r.position.set(0,24,0),this.addLight(r)}buildPanel(){let e=$.crate.clone();e.color.setHex(9082014);let t=this.box(-18.5,1.5,9,7,3,.4,e,!1);this.frame(`z`,-18.5,1.5,9.25,7,3,$.stripAmber);let n=Z(-18.5,1.5,9,7,3,.4);this.colliders.push(n);let r=this.textPlane(`LOOSE PANEL`,`#ffb454`,2.4,.6,56);r.position.set(-18.5,2.3,9.25),r.rotation.y=0,this.breakables.push({pos:new L(-18.5,1.2,9),radius:3.6,broken:!1,smash:()=>{t.removeFromParent(),r.removeFromParent();let e=this.colliders.indexOf(n);e>=0&&this.colliders.splice(e,1)}})}addFloorFan(e,t,n,r,i,a,o,s){this.box(e,t+.01,n,r,.02,i,new K({color:461068,roughness:.9}),!1);let c=new K({color:2886156,emissive:Mh,emissiveIntensity:.6});this.litEdge(e,t+.02,n,r,i,c);let l=new B;l.position.set(e,t+.2,n);let u=Math.min(r,i)*.46,d=Math.max(1,Math.round(Math.max(r,i)/Math.min(r,i))),f=$.pipe,p=new K({color:3804176,emissive:Mh,emissiveIntensity:.8}),m=[];for(let e=0;e<d;e++){let t=new B,n=r>i?`x`:`z`,a=(e-(d-1)/2)*(Math.max(r,i)/d);t.position.set(n===`x`?a:0,0,n===`z`?a:0);for(let e=0;e<4;e++){let n=new U(new W(u*2,.1,.5),f),r=new U(new W(.5,.12,.52),p);r.position.x=u*.7,n.add(r),n.rotation.y=e*Math.PI/2+.3,t.add(n)}l.add(t),m.push(t)}this.scene.add(l);let h=new K({color:1705478,emissive:Mh,emissiveIntensity:.2});this.box(e,t+.9,n-i/2-.2,.4,.4,.2,h,!1);let g=Z(e,t+.6,n,r,1.2,i);this.floorFans.push({blades:l,box:g,lens:h,phase:s,on:a,off:o,spin:0,hot:!1,warned:!1})}buildFans(){this.addFloorFan(-20,6,-19,8,8,2.5,2.5,0),this.chewCrate=this.box(-20,7,-19,2,2,2,$.crate,!1),this.addFloorFan(-13,6,-19,4,22,2,2.2,.4),this.addFloorFan(-7,6,-19,4,22,2,2.2,2.5),this.addFloorFan(6.5,6,-19,5,22,1.6,2,1),this.addPickup(-27,6.8,-27)}buildBay(){let e=this.box(21.25,14.5,27,.3,5,6,$.tank,!1);this.box(20.9,17.2,27,.08,.14,6,$.stripRed,!1);let t=Z(21.25,14.5,27,.3,5,6);this.colliders.push(t),this.droneDoor={mesh:e,collider:t},this.robotSpawns=[{kind:`dog`,pos:new L(21,12,5),delay:.5},{kind:`dog`,pos:new L(26,12,12),delay:8},{kind:`man`,pos:new L(22,12,20),delay:15},{kind:`dog`,pos:new L(26,12,-1),delay:8.5},{kind:`man`,pos:new L(27,12,6),delay:17}],this.addPickup(27,12.8,26),this.addPickup(11,12.8,21)}addGate(e,t,n,r,i,a,o,s=3,c=!1){let l=(t,n)=>e===`x`?[t,n]:[n,t],u=new K({color:2886156,emissive:Mh,emissiveIntensity:.3}),d=new K({color:2886156,emissive:Mh,emissiveIntensity:2.2});for(let e of[-1,1]){let[a,o]=l(t+e*i/2,r);this.box(a,n,o,.22,1.8,.22,$.pipe,!1)}let f=[];for(let o of[-.55,0,.55]){let[s,c]=l(t+a*i/2,r),p=new U(new ms(.13,10,8),u);p.position.set(s,n+o,c),this.scene.add(p);let m=new U(new W(...e===`x`?[1,.07,.07]:[.07,.07,1]),d),[h,g]=l(t,r);m.position.set(h,n+o,g),m.visible=!1,this.scene.add(m),f.push(m)}let[p,m]=l(t,r),h={beams:f,mat:d,lens:u,box:e===`x`?Z(p,n,m,i,1.6,.5):Z(p,n,m,.5,1.6,i),along:e,center:t,width:i,from:a,phase:o,period:s,steady:c,dead:!1,on:!1};return this.gates.push(h),h}buildLasers(){let e=this.addGate(`x`,0,19.2,25,9,-1,0,3.4);e.harmless=!0,this.box(0,18.5,28,2,1,2,$.crate,!1),this.addSouthGate(2.5,0),this.addSouthGate(-2.5,1.5),this.addGate(`x`,-6.375,21.1,3.2,2.75,1,.5,3);let t=this.addGate(`x`,-6.375,21.1,-1.5,2.75,-1,0,3,!0),n=$.stripAmber.clone(),r=this.box(-7.6,21.2,.8,.3,1,1,n,!1),i=this.textPlane(`POWER`,`#ffb454`,.9,.3,56);i.position.set(-7.42,21.95,.8),i.rotation.y=Math.PI/2,this.breakables.push({pos:new L(-7.4,21.2,.8),radius:1.2,broken:!1,smash:()=>{n.emissiveIntensity=.05,r.scale.set(.7,.7,.7),t.dead=!0}}),this.addGate(`z`,-6.375,23.4,-2.5,2.75,1,0,2.6),this.addGate(`z`,-6.375,23.4,0,2.75,-1,.85,2.6),this.addGate(`z`,-6.375,23.4,2.5,2.75,1,1.7,2.6)}addSouthGate(e,t){this.addGate(`z`,6.375,19.1,e,2.75,1,t,3.4)}buildDeck(){let e=this.box(6.5,27.85,1.5,3,.3,5,$.monolith,!1);e.visible=!1,this.arenaDoor={mesh:e,collider:Z(6.5,27.7,1.5,3,.6,5),sealed:!1};let t=this.box(0,30,-22,6,4,.3,$.tank,!1);this.box(0,32.2,-21.8,6,.14,.08,$.stripRed,!1);let n=Z(0,30,-22,6,4,.3);this.colliders.push(n),this.breakerDoor={mesh:t,collider:n},this.addPickup(-22,28.8,8,!0),this.addPickup(22,28.8,8,!0),this.hatchRim();for(let e of[-5.4,-3,-.5,2,4.4])this.box(e,27.05,0,.22,.7,12,$.platform,!1);for(let e of[-5.9,5.9])this.box(-.5,28.03,e,11,.08,.22,$.platform,!1);this.box(-5.9,28.03,0,.22,.08,12,$.platform,!1)}hatchRim(){let e=27.3;this.box(6.5,e,-1.06,3.15,.12,.12,$.stripTeal,!1),this.box(6.5,e,4.06,3.15,.12,.12,$.stripTeal,!1),this.box(4.94,e,1.5,.12,.12,5.2,$.stripTeal,!1);let t=28.02;this.box(6.5,t,-1.06,3.15,.04,.12,$.stripTeal,!1),this.box(6.5,t,4.06,3.15,.04,.12,$.stripTeal,!1),this.box(4.94,t,1.5,.12,.04,5.2,$.stripTeal,!1);let n=this.textPlane(`UP`,`#9fe8ff`,1.2,.5,72);n.position.set(7.7,26.4,1.5),n.rotation.y=-Math.PI/2}buildBreaker(){let e=this.arenaFloorY;this.box(0,e+.9,-28,2.4,1.8,1.4,$.rack),this.box(0,e+3,-29.2,4,5,.5,$.wall),this.breakerGlow=$.stripAmber.clone(),this.breakerGlow.emissiveIntensity=.4,this.box(0,e+5.1,-28.9,3.2,.5,.1,this.breakerGlow,!1),this.textPlane(`MAIN DISCONNECT`,`#ffb454`,3.6,.9,56).position.set(0,e+4.2,-28.85),this.leverPivot=new B,this.leverPivot.position.set(0,e+1.9,-27.6);let t=new U(new W(.22,1.7,.22),$.platform);t.geometry.translate(0,.85,0);let n=new U(new ms(.22,10,10),this.breakerGlow);n.position.y=1.7,this.leverPivot.add(t,n),this.leverPivot.rotation.x=-.65,this.scene.add(this.leverPivot),this.textPlane(`UNIT 1`,`#9fb8c8`,1.4,.4,56).position.set(0,e+2.6,-28.9);let r=$.crate.clone();r.color.setHex(10129788),[[-3.4,-26.2,.3,.5],[3.4,-26.2,-.3,1.1],[-3.4,-24.4,.3,1.7],[3.4,-24.4,-.3,2.3]].forEach(([t,n,i,a])=>{let o=Math.sign(i),s=this.box(t,e+1.1,n,.9,2.2,1.1,r);s.geometry.translate(o*.45,1.1,0),s.position.set(t-o*.45,e,n),this.fallers.push({mesh:s,at:a,rot:i})})}buildTraining(){let e=new K({color:7230006,roughness:.85}),t=new B;for(let n=0;n<6;n++){let r=new U(new W(6.2,.36,.08),e);r.position.set(0,.35+n*.5,n%2*.06),r.rotation.z=(n%2?1:-1)*.03,t.add(r)}t.position.set(0,0,38.3),this.scene.add(t);let n=Z(0,1.5,38.3,6,3,.3);this.colliders.push(n),this.breakables.push({pos:new L(0,1.2,38.3),radius:3.4,broken:!1,smash:()=>{t.removeFromParent();let e=this.colliders.indexOf(n);e>=0&&this.colliders.splice(e,1)}});let r=new K({color:14210764,emissive:12570840,emissiveIntensity:.35,roughness:.9}),i=this.box(2.2,.92,34,.42,.03,.3,r,!1);this.readables.push({id:`news1`,pos:new L(2.2,.92,34),mesh:i});let a=this.box(0,2.5,30.25,4,5,.3,$.tank,!1);this.frame(`z`,0,2.5,30.05,4,5,$.stripAmber);let o=Z(0,2.5,30.25,4,5,.3);this.colliders.push(o),this.box(2.95,1.3,31.2,.1,.5,.36,$.stripAmber,!1),this.trainingDoor={mesh:a,collider:o}}openTrainingDoor(){let e=this.trainingDoor;if(!e)return;let t=this.colliders.indexOf(e.collider);t>=0&&this.colliders.splice(t,1),this.doorRising=e.mesh,this.trainingDoor=null}buildPaperwork(){this.textPlane(`W E L C O M E`,`#9fb8c8`,6.5,1.6,56).position.set(0,6.5,8.6);let e=this.textPlane(`42`,`#41f2d6`,1.6,.8,56);e.position.set(-19.4,20,18),e.rotation.y=Math.PI/2;let t=new K({color:14210764,emissive:12570840,emissiveIntensity:.35,roughness:.9}),n=new K({color:2760728,emissive:16767392,emissiveIntensity:.5,roughness:.5}),r=(e,r,i,a,o=!1)=>{let s=this.box(r,i,a,o?.26:.3,.03,o?.16:.4,o?n:t,!1);this.readables.push({id:e,pos:new L(r,i,a),mesh:s})};r(`decommission`,-3.7,1.02,18.7),r(`handover`,-17.2,2.63,-1.7),r(`maintenance`,-15,6.02,-28.5),r(`visitors`,1.2,19.02,14.6),r(`incident`,4.6,28.94,-27),r(`tape1`,-27.5,.02,-2,!0),r(`tape2`,-5.5,6.02,-5.5,!0)}chewTheCrate(){if(!this.chewCrate)return null;let e=this.chewCrate.position.clone();return this.chewCrate.removeFromParent(),this.chewCrate=null,e}fanHit(e){return this.floorFans.some(t=>t.hot&&Sp(e,t.box))}laserHit(e){return this.gates.some(t=>t.on&&!t.harmless&&Sp(e,t.box))}openSecurityDoor(){if(!this.droneDoor)return;this.droneDoor.mesh.removeFromParent();let e=this.colliders.indexOf(this.droneDoor.collider);e>=0&&this.colliders.splice(e,1),this.droneDoor=null}sealArena(){this.arenaDoor.sealed||(this.arenaDoor.sealed=!0,this.arenaDoor.mesh.visible=!0,this.colliders.push(this.arenaDoor.collider))}unsealArena(){if(!this.arenaDoor.sealed)return;this.arenaDoor.sealed=!1,this.arenaDoor.mesh.visible=!1;let e=this.colliders.indexOf(this.arenaDoor.collider);e>=0&&this.colliders.splice(e,1)}activateBreaker(){if(this.breakerGlow.emissiveIntensity=2.6,this.breakerDoor){this.breakerDoor.mesh.removeFromParent();let e=this.colliders.indexOf(this.breakerDoor.collider);e>=0&&this.colliders.splice(e,1),this.breakerDoor=null}}pullLever(){this.leverPulled=!0,this.pullClock=0}blackout(e){this.dimFactor=Math.min(this.dimFactor,1-Math.min(1,e));let t=this.dimFactor;for(let{i:t,mats:n}of this.artMats){let r=Math.max(0,Math.min(1,e*(Nh.length+1.5)-t));for(let e of n)e.lightMap&&(e.lightMapIntensity=2*(1-r)+.02)}for(let e of this.detailMats)e.emissiveIntensity=(e.userData.lit??(e.userData.lit=e.emissiveIntensity))*t;for(let{light:e,base:n}of this.lights)e.intensity=n*t;let n=[$.stripTeal,$.stripAmber,$.stripRed,$.coolant,$.barrier,this.breakerGlow];for(let e of n)this.emissiveBases.has(e)||this.emissiveBases.set(e,e.emissiveIntensity),e.emissiveIntensity=this.emissiveBases.get(e)*t+.02;if(t<1)for(let e of this.gates)e.dead=!0}updateFans(e,t){for(let n of this.floorFans){let r=n.on+Ph+n.off+Ih,i=(t+n.phase)%r,a=i<n.on,o=!a&&i<n.on+Ph,s=i>=n.on+Ph+n.off;n.hot=(a||o)&&this.dimFactor===1;let c=a?14:o?14*(1-(i-n.on)/Ph):s?2:0;n.spin+=(c-n.spin)*Math.min(1,e*8);for(let t of n.blades.children)t.rotation.y+=n.spin*e;let l=n.lens.userData.warning;n.warned=s&&!l,n.lens.userData.warning=s,n.lens.emissiveIntensity=s?.3+(i-(n.on+Ph+n.off))/Ih*2:a?2.3:.2}}updateGates(e){for(let t of this.gates){if(t.dead){t.on=!1;for(let e of t.beams)e.visible=!1;t.lens.emissiveIntensity=.05;continue}let n=(e+t.phase)%t.period,r=t.steady?1:Math.min(1,n/Lh),i=t.steady?0:Math.max(0,(n-Lh-Rh)/zh);t.on=i<1;for(let e of t.beams)e.visible=t.on;let a=Math.max(0,(n-(t.period-Bh))/Bh);if(t.lens.emissiveIntensity=t.on?2.4:.3+a*2,!t.on)continue;let o=e=>t.center+t.from*(t.width/2-e*t.width),s=o(i),c=o(r),l=Math.min(s,c),u=Math.max(s,c);t.along===`x`?(t.box.min.x=l,t.box.max.x=u):(t.box.min.z=l,t.box.max.z=u);for(let e of t.beams)t.along===`x`?(e.position.x=(l+u)/2,e.scale.x=Math.max(.01,u-l)):(e.position.z=(l+u)/2,e.scale.z=Math.max(.01,u-l))}}update(e,t){if(this.updateBase(e,t),this.doorRising&&this.doorRising.position.y<7.4&&(this.doorRising.position.y=Math.min(7.4,this.doorRising.position.y+e*4)),this.updateFans(e,t),this.updateGates(t),this.pullClock>=0){this.pullClock+=e;for(let e of this.fallers){let t=Math.max(0,Math.min(1,(this.pullClock-e.at)/.8));e.mesh.rotation.z=Math.sign(e.rot)*(Math.PI/2)*t*t}}this.leverPulled&&this.leverPivot.rotation.x<.85&&(this.leverPivot.rotation.x=Math.min(.85,this.leverPivot.rotation.x+e*3.5)),this.dimFactor===1&&($.coolant.emissiveIntensity=.8+Math.sin(t*1.7)*.25)}},Hh=3.4,Uh=1.1,Wh=.78,Gh=30.5,Kh=class extends Ah{constructor(e){super(e),X(this,`tankCenter`,new L(0,13,-162)),X(this,`plates`,[]),X(this,`flooding`,!1),X(this,`gate`,null),X(this,`exitGate`,null),X(this,`vents`,[]),X(this,`waterMesh`,void 0),X(this,`waterLevel`,-.9),X(this,`tankRim`,void 0),this.buildGallery(),this.buildTankDrop(),this.buildSteamCatwalk(),this.buildValveGallery(),this.buildChamber(),this.buildFlood(),this.buildDust(20,34,8,-176),this.checkpoints={m2_spawn:new L(0,29.2,2),m2_tanks:new L(0,11.2,-58),m2_valves:new L(0,1.05,-136),m2_chamber:new L(0,1.05,-144),m2_escape:new L(13,3.9,-170)},this.zone(`m2_drop`,0,25,-30,16,10,10),this.zone(`m2_tanks`,0,11.5,-58,10,5,8),this.zone(`m2_steam`,0,11.5,-64,6,5,6),this.zone(`m2_towel`,0,11.5,-76,6,5,4),this.zone(`m2_gallery`,0,4,-108,32,8,8),this.zone(`m2_gate`,0,2.5,-136,8,5,4),this.zone(`m2_chamber`,0,3,-143,30,6,6),this.zone(`m2_lastchance`,0,3,-151,24,6,5),this.zone(`m2_exit`,-23,31,-169,5,5,6)}get waterSurfaceY(){return this.waterLevel+.5}buildGallery(){this.box(0,27.5,-8,14,1,28,$.floor),this.box(0,31.5,6.5,14,9,1,$.wall),this.box(-6.8,28.9,-8,.3,1.4,28,$.platform),this.box(6.8,28.9,-8,.3,1.4,28,$.platform),this.box(0,28.05,-21.8,13.5,.08,.3,$.stripGreen,!1);for(let[e,t,n]of[[-4.5,33,.4],[0,34.2,.55],[4.5,33,.4]]){let r=new U(new G(n,n,30,12),$.pipe);r.rotation.x=Math.PI/2,r.position.set(e,t,-8),this.scene.add(r)}let e=new q(3538845,26,30,1.8);e.position.set(0,32,-10),this.addLight(e),this.textPlane(`INTAKE GALLERY 02`,`#9fb8c8`,6,1.2,60).position.set(0,31,5.9),this.addPickup(5,28.8,-12)}buildTankDrop(){this.box(0,-.5,-48,38,1,112,$.floor),this.box(-18.5,10,-48,1,22,112,$.wall),this.box(18.5,10,-48,1,22,112,$.wall);for(let[e,t,n]of[[-15,-26,34],[15,-30,30],[-15,-56,30],[15,-62,34],[-15,-86,32]])this.cylinder(e,0,t,4.5,n,$.tank);for(let[e,t,n]of[[3,-28,24],[-3,-34,21],[3,-40,18],[-3,-46,15],[3,-52,12]]){this.cylinder(e,0,t,4.2,n,$.tank);let r=new U(new hs(4.2,.07,8,40),$.stripGreen);r.rotation.x=Math.PI/2,r.position.set(e,n+.05,t),this.scene.add(r)}this.box(0,.08,-40,32,.1,34,$.water,!1),this.hazards.push(Z(0,.7,-40,31,1.4,33)),this.box(0,9.7,-58,8,.6,8,$.floor);let e=new q(3538845,30,55,1.8);e.position.set(0,18,-42),this.addLight(e)}buildSteamCatwalk(){this.box(0,9.7,-78,5,.6,32,$.floor),this.box(-2.6,10.6,-78,.2,1,32,$.platform),this.box(2.6,10.6,-78,.2,1,32,$.platform),this.box(-2.5,10.4,-78,.06,.06,31.5,$.stripGreen,!1),this.box(2.5,10.4,-78,.06,.06,31.5,$.stripGreen,!1),[[-4,-66],[4,-73],[-4,-80],[4,-87]].forEach(([e,t],n)=>{let r=new U(new G(.45,.45,12,10),$.pipe);r.position.set(e,6,t),this.scene.add(r);let i=new U(new W(5.6,2.6,1.5),$.steam);i.position.set(0,11.3,t),i.visible=!1,this.scene.add(i),this.vents.push({plume:i,pipe:r,box:Z(0,11.3,t,5.6,2.6,1.5),phase:n*.85,on:!1})}),this.box(2.85,11.5,-76,.08,.5,.08,$.pipe,!1),this.box(2.85,11,-76,.12,.75,.55,new K({color:13617592,roughness:.95}),!1),this.box(0,7.4,-97,5,.6,3.5,$.platform),this.box(0,4.9,-101,5,.6,3.5,$.platform),this.box(0,2.4,-104.5,5,.6,3.5,$.platform),this.addPickup(0,10.9,-92)}buildValveGallery(){this.box(0,-.5,-122,33,1,36,$.floor),this.box(-17,6.5,-122,1,15,37,$.wall),this.box(17,6.5,-122,1,15,37,$.wall),this.box(-10.75,6.5,-103.8,12.5,15,.5,$.wall),this.box(10.75,6.5,-103.8,12.5,15,.5,$.wall),this.box(0,9.5,-103.8,8,9,.5,$.wall),this.box(-10.75,6.5,-138.5,12.5,15,.5,$.wall),this.box(10.75,6.5,-138.5,12.5,15,.5,$.wall),this.box(0,9.5,-138.5,8,9,.5,$.wall);let e=$.barrier.clone();e.emissive.setHex(3538845);let t=this.box(0,2.5,-138.5,8,5,.3,e,!1),n=Z(0,2.5,-138.5,8,5,.3);this.colliders.push(n),this.gate={mesh:t,collider:n};for(let[e,t,n]of[[-16.4,4,-112],[-16.4,6,-126],[16.4,5,-118],[16.4,3.5,-132]]){let r=new U(new hs(1.1,.16,8,20),$.pipe);r.rotation.y=Math.PI/2,r.position.set(e,t,n),this.scene.add(r)}for(let e of[-16.2,16.2]){let t=new U(new G(.5,.5,34,10),$.pipe);t.rotation.x=Math.PI/2,t.position.set(e,8.5,-121),this.scene.add(t)}for(let[e,t,n]of[[-9,-112,2],[8,-109,2.4],[-4,-120,1.6],[11,-126,1.9],[-12,-130,2.2]])this.box(e,n/2,t,n,n,n,$.crate);this.droneSpawns=[new L(-8,3,-112),new L(8,3.4,-110),new L(-6,4,-126),new L(7,3,-128)];let r=new q(3538845,30,42,1.8);r.position.set(0,9,-122),this.addLight(r),this.addPickup(-13,.9,-128),this.addPickup(13,.9,-110)}buildChamber(){this.box(0,-.5,-158,35,1,37,$.floor),this.box(17.25,20,-158,.5,42,37,$.wall),this.box(0,20,-176.5,35,42,.5,$.wall),this.box(0,27,-139.7,35,28,.5,$.wall),this.box(-17.25,20,-147.5,.5,42,16,$.wall),this.box(-17.25,20,-160.75,.5,42,10.5,$.wall),this.box(-17.25,20,-174.25,.5,42,4.5,$.wall),this.box(-17.25,13.8,-169,.5,29.6,6,$.wall),this.box(-17.25,38,-169,.5,8,6,$.wall),this.cylinder(0,1,-162,7.5,26,$.tank),this.tankRim=new U(new hs(7.5,.12,8,48),$.stripGreen),this.tankRim.rotation.x=Math.PI/2,this.tankRim.position.set(0,27.1,-162),this.scene.add(this.tankRim);let e=new U(new G(.9,.9,14,12),$.pipe);e.position.set(0,34,-162),this.scene.add(e),this.textPlane(`PRIMARY RESERVE — 40,000,000,000 GAL`,`#9fb8c8`,9,1.1,40).position.set(0,12.5,-153.9);for(let e of[-.73,0,.73]){let t=Math.sin(e)*7.7,n=-162+Math.cos(e)*7.7,r=e===0?3.4:2.6,i=$.stripAmber.clone(),a=new G(1.15,1.15,.3,18);a.rotateX(Math.PI/2);let o=new U(a,i);o.position.set(t,r,n),o.lookAt(t*2,r,-162+(n+162)*2),this.scene.add(o),this.plates.push({mesh:o,mat:i,pos:new L(t,r,n),hp:30,dead:!1})}for(let[e,t,n]of[[13,2.5,-170],[13,5.3,-162],[13,8.1,-154],[13,10.9,-146],[7,13.7,-142.5],[-1,16.5,-143],[-8,19.3,-147],[-13,22.1,-153],[-13,24.9,-161],[-13,27.6,-168.5]])this.box(e,t,n,4.4,.6,3.4,$.platform),this.box(e,t+.32,n,4.45,.04,3.45,$.stripGreen,!1);this.box(-21,28.6,-169,9,.6,6,$.floor),this.box(-21,32,-165.7,9,7,.6,$.wall),this.box(-21,32,-172.3,9,7,.6,$.wall),this.box(-25.8,32,-169,.6,7,7.2,$.wall);let t=this.textPlane(`EMERGENCY EXIT`,`#35ff9d`,4.2,.9,56);t.position.set(-17.6,34.6,-169),t.rotation.y=Math.PI/2;let n=$.barrier.clone();n.emissive.setHex(3538845);let r=this.box(-17.6,31.3,-169,.3,5.4,5.6,n,!1),i=Z(-17.6,31.3,-169,.3,5.4,5.6);this.colliders.push(i),this.exitGate={mesh:r,collider:i};let a=new q(3538845,44,60,1.8);a.position.set(0,30,-158),this.addLight(a);let o=new q(16757844,18,30,1.8);o.position.set(0,8,-150),this.addLight(o),this.addPickup(10,.9,-150),this.addPickup(13,11.9,-146)}buildFlood(){this.waterMesh=new U(new W(46,1,190),$.water),this.waterMesh.position.set(0,this.waterLevel,-84),this.scene.add(this.waterMesh)}openSecurityDoor(){if(!this.gate)return;this.gate.mesh.removeFromParent();let e=this.colliders.indexOf(this.gate.collider);e>=0&&this.colliders.splice(e,1),this.gate=null}rupture(){if(!this.flooding&&(this.flooding=!0,this.hazards.length=0,this.tankRim.visible=!1,this.exitGate)){this.exitGate.mesh.removeFromParent();let e=this.colliders.indexOf(this.exitGate.collider);e>=0&&this.colliders.splice(e,1),this.exitGate=null}}resetFlood(){this.waterLevel=-.9}steamHit(e){for(let t of this.vents)if(t.on&&Sp(e,t.box))return!0;return!1}update(e,t){if(this.updateBase(e,t),this.flooding){this.waterLevel=Math.min(Gh,this.waterLevel+Wh*e),this.waterMesh.position.y=this.waterLevel,$.water.emissiveIntensity=.9+Math.sin(t*5)*.2;for(let e of this.vents)e.on=!1,e.plume.visible=!1}else{$.water.emissiveIntensity=.65+Math.sin(t*1.4)*.15;for(let e of this.vents){let n=(t+e.phase)%Hh,r=n>Hh-.45;e.on=n<Uh,e.plume.visible=e.on||r;let i=e.on?1:.35;e.plume.scale.set(i,i,i)}}for(let e of this.plates)e.dead||(e.mat.emissiveIntensity=1.6+Math.sin(t*2.4+e.pos.x)*.5)}},qh=3,Jh=.45,Yh=.45,Xh=.3,Zh=.6,Qh=3.4,$h=1.3,eg=2.4,tg=9,ng=class extends Ah{constructor(e){super(e),X(this,`cablePos`,new L(0,35.8,-83)),X(this,`yanked`,!1),X(this,`gate`,null),X(this,`arcs`,[]),X(this,`windZones`,[]),X(this,`cityBands`,[]),X(this,`cable`,void 0),X(this,`cascadeP`,0),this.buildYard(),this.buildClimb(),this.buildArcCatwalk(),this.buildPylonCatwalk(),this.buildWindPlatform(),this.buildTower(),this.buildVista(),this.buildDust(22,38,6,-90),this.checkpoints={m3_spawn:new L(0,1.05,2),m3_arcs:new L(-2,11.1,-36),m3_wind:new L(0,19.1,-72),m3_tower:new L(3,27.3,-84),m3_top:new L(0,35.9,-77)},this.zone(`m3_climb`,4,4,-24,22,8,10),this.zone(`m3_arcs`,0,11.5,-39,10,5,5),this.zone(`m3_catwalk`,0,15.5,-62,8,5,8),this.zone(`m3_wind`,0,19.5,-72,12,5,8),this.zone(`m3_tag`,0,19.5,-76,10,4,2),this.zone(`m3_crucible`,0,22,-80,14,6,10),this.zone(`m3_tower_mid`,3,27,-84,6,4,5),this.zone(`m3_top`,0,36.5,-81,11,5,11)}buildYard(){this.box(0,-.5,-40,47,1,94,$.floor),this.box(0,5,7.5,47,12,1,$.wall),this.box(-23.5,19,-40,1,40,94,$.wall),this.box(23.5,19,-40,1,40,94,$.wall),this.box(0,1.25,-86.5,47,2.5,1,$.wall),this.box(0,2.55,-86.5,47,.08,.5,$.stripViolet,!1),this.textPlane(`PULSE SUBSTATION 03`,`#b18cff`,7,1.4,56).position.set(0,5.5,6.9);for(let[e,t]of[[-13,-10],[-15,-16],[13,-8],[16,-14],[-11,-24]]){this.cylinder(e,0,t,1.5,3,$.tank);let n=new U(new hs(1.6,.16,8,20),$.pipe);n.rotation.x=Math.PI/2,n.position.set(e,3.2,t),this.scene.add(n)}for(let e of[-8,8]){this.cylinder(e,0,-14,.7,5,$.pipe);let t=new U(new ms(.9,14,14),$.stripViolet.clone());t.position.set(e,5.8,-14),this.scene.add(t)}this.textPlane(`1.21 GW`,`#ffd9a0`,2.4,1,80).position.set(13,2.4,-7.9);let e=new q(11635967,26,40,1.8);e.position.set(0,9,-16),this.addLight(e),this.addPickup(-6,.8,-8)}buildClimb(){this.box(8,1.3,-22,4,2.6,4,$.tank),this.box(3,2.6,-27,4,5.2,4,$.tank),this.box(-2,3.9,-32,4,7.8,4,$.tank);for(let[e,t,n]of[[8,2.65,-22],[3,5.25,-27],[-2,7.85,-32]])this.box(e,t,n,4.05,.05,4.05,$.stripViolet,!1);this.box(-2,9.7,-37,5,.6,6,$.platform)}addArc(e,t,n,r,i,a){for(let i of[-1,1])this.box(e+i*r/2,t,n,.22,1.8,.22,$.pipe,!1);let o=$.stripViolet.clone(),s=$.stripViolet.clone();s.emissiveIntensity=2;let c=[];for(let a of[-.5,0,.5]){let l=new U(new ms(.14,10,8),o);l.position.set(e+i*r/2,t+a,n),this.scene.add(l);let u=new U(new W(1,.07,.07),s);u.position.set(e,t+a,n),u.visible=!1,this.scene.add(u),c.push(u)}this.arcs.push({beams:c,mat:s,emitter:o,box:Z(e,t,n,r,1.4,.5),x:e,width:r,from:i,phase:a,on:!1})}buildArcCatwalk(){this.box(0,9.7,-47,6,.6,18,$.floor),this.box(-2.9,10.5,-47,.2,1,18,$.platform),this.box(2.9,10.5,-47,.2,1,18,$.platform),this.addArc(0,11.2,-42,6,-1,0),this.addArc(0,11.2,-47,6,1,2),this.addArc(0,11.2,-52,6,-1,1),this.droneSpawns=[new L(-8,13,-44),new L(8,13,-46),new L(-6,14,-52),new L(6,13,-54)];let e=new q(11635967,20,30,1.8);e.position.set(0,14,-47),this.addLight(e)}buildPylonCatwalk(){this.box(0,11.6,-58,4,.6,3,$.platform),this.box(0,13.7,-63.5,4,.6,8,$.floor);let e=$.barrier.clone();e.emissive.setHex(11635967);let t=this.box(0,16,-66.8,5,4.5,.3,e,!1),n=Z(0,16,-66.8,5,4.5,.3);this.colliders.push(n),this.gate={mesh:t,collider:n},this.box(-3,16,-66.8,1.2,4.5,.6,$.pipe),this.box(3,16,-66.8,1.2,4.5,.6,$.pipe),this.addPickup(0,14.8,-61)}buildWindPlatform(){this.box(0,15.8,-69,4,.6,3,$.platform),this.box(0,17.7,-73,12,.6,9,$.floor),this.box(-5.9,18.6,-73,.2,1.2,9,$.platform),this.box(5.9,18.6,-73,.2,1.2,9,$.platform),this.box(0,18.05,-77.3,11.5,.08,.3,$.stripViolet,!1);let e=new q(11635967,18,26,1.8);e.position.set(0,22,-73),this.addLight(e),this.addPickup(-4.5,18.9,-70)}addWindZone(e,t,n,r,i,a,o,s){let c=[],l=new yi({color:10467544,transparent:!0,opacity:0});for(let o=0;o<6;o++){let o=new U(new W(r*.8,.05,.05),l);o.position.set(e+(Math.random()-.5)*2,t+(Math.random()-.5)*i*.8,n+(Math.random()-.5)*a*.8),this.scene.add(o),c.push(o)}this.windZones.push({box:Z(e,t,n,r,i,a),dirX:o,phase:s,on:!1,streaks:c})}buildTower(){for(let[e,t]of[[-4,-77],[4,-77],[-4,-85],[4,-85]])this.box(e,18,t,.6,38,.6,$.pipe);for(let e=4;e<=34;e+=6){this.box(0,e,-77,8.6,.25,.25,$.pipe,!1),this.box(0,e,-85,8.6,.25,.25,$.pipe,!1),this.box(-4,e,-81,.25,.25,8.6,$.pipe,!1),this.box(4,e,-81,.25,.25,8.6,$.pipe,!1);for(let t of[-1,1]){let n=new U(new W(9.5,.18,.18),$.pipe);n.position.set(0,e+3,-81+t*4),n.rotation.z=t*.62,this.scene.add(n)}}for(let[e,t,n]of[[0,20,-79],[2.5,22.4,-82],[-2.5,24.6,-81.5],[2.2,26.8,-79.5],[-2.5,28.7,-77.9],[2.5,31.4,-78.4]])this.box(e,t,n,5,.6,3.6,$.platform),this.box(e,t+.32,n,5.05,.04,3.65,$.stripViolet,!1);this.addArc(-3.5,26.6,-81,5,-1,1.4),this.addWindZone(0,25,-81,16,9,14,1,0),this.hazards.push(Z(0,13,-81,15,7,12)),this.box(0,34.5,-77,10,.6,2,$.floor),this.box(0,34.5,-84,10,.6,4,$.floor),this.box(-3.75,34.5,-80,2.5,.6,4,$.floor),this.box(3.75,34.5,-80,2.5,.6,4,$.floor),this.box(0,34.82,-77.92,5.3,.04,.15,$.stripViolet,!1),this.box(0,34.82,-82.08,5.3,.04,.15,$.stripViolet,!1),this.box(-2.58,34.82,-80,.15,.04,4,$.stripViolet,!1),this.box(2.58,34.82,-80,.15,.04,4,$.stripViolet,!1),this.box(0,32.9,-81,5,.6,2,$.platform),this.box(0,33.22,-81,5.05,.04,2.05,$.stripViolet,!1),this.box(0,35.1,-76.2,9.5,.08,.25,$.stripViolet,!1),this.box(0,35.4,-83.5,1.4,1.2,1.4,$.tank);for(let e=0;e<3;e++){let t=new U(new G(.55-e*.12,.55-e*.12,.28,14),$.crate);t.position.set(0,36.2+e*.34,-83.5),this.scene.add(t)}let e=new K({color:658706,roughness:.6,metalness:.4});this.cable=new U(new G(.18,.18,36,10),e),this.cable.geometry.translate(0,-18,0),this.cable.position.set(0,37.2,-83.5),this.cable.rotation.x=-1.05,this.scene.add(this.cable);let t=new U(new G(.3,.3,.5,10),$.stripAmber);t.position.set(0,36.9,-83.5),this.scene.add(t),this.textPlane(`MAIN FEED`,`#ffd9a0`,2.6,.8,64).position.set(0,38.2,-83.4);let n=new q(11635967,22,30,1.8);n.position.set(0,39,-81),this.addLight(n),this.addPickup(4,35.7,-77.5,!0)}buildVista(){let e=new U(new W(340,1,280),$.monolith);e.position.set(0,-10.5,-230),this.scene.add(e);for(let e=0;e<tg;e++){let t=new Float32Array(138),n=-104-e*21;for(let e=0;e<46;e++)t[e*3]=(Math.random()-.5)*280,t[e*3+1]=-9.6+Math.random()*3.4,t[e*3+2]=n-Math.random()*19;let r=new Ur;r.setAttribute(`position`,new kr(t,3));let i=new Ta({color:16767392,size:.9,transparent:!0,opacity:.9}),a=new Aa(r,i);a.frustumCulled=!1,this.scene.add(a),this.cityBands.push(i)}this.box(-62,4,-132,10,30,10,$.monolith,!1);let t=new U(new za(7.5,7,4),$.monolith);t.position.set(-62,22.5,-132),t.rotation.y=Math.PI/4,this.scene.add(t);let n=this.box(-62,28,-132,.18,5,.18,$.pipe,!1);n.visible=!0,this.textPlane(`10:04`,`#ffd9a0`,4.4,2.2,84).position.set(-62,14,-126.8)}openSecurityDoor(){if(!this.gate)return;this.gate.mesh.removeFromParent();let e=this.colliders.indexOf(this.gate.collider);e>=0&&this.colliders.splice(e,1),this.gate=null}arcHit(e){for(let t of this.arcs)if(t.on&&Sp(e,t.box))return!0;return!1}windPush(e){let t=0;for(let n of this.windZones)n.on&&Sp(e,n.box)&&(t+=n.dirX*eg);return t}yank(){this.yanked=!0}setCascade(e){this.cascadeP=e;for(let t=0;t<this.cityBands.length;t++)this.cityBands[t].opacity=e>=(t+1)/tg?.04:.9;e>=1&&(this.dimFactor=.3)}update(e,t){this.updateBase(e,t);let n=!this.yanked;for(let e of this.arcs){let r=n?(t+e.phase)%qh:qh-Zh-1,i=Math.min(1,r/Jh),a=Math.max(0,(r-Jh-Yh)/Xh);e.on=a<1;for(let t of e.beams)t.visible=e.on;let o=Math.max(0,(r-(qh-Zh))/Zh);if(e.emitter.emissiveIntensity=e.on?2.4:n?.35+o*2:.1,!e.on)continue;let s=t=>e.x+e.from*(e.width/2-t*e.width),c=s(a),l=s(i);e.box.min.x=Math.min(c,l),e.box.max.x=Math.max(c,l);for(let t of e.beams)t.position.x=(c+l)/2,t.scale.x=Math.max(.01,Math.abs(l-c))}for(let n of this.windZones){n.on=(t+n.phase)%Qh<$h;for(let t of n.streaks)t.material.opacity=n.on?.22:0,n.on&&(t.position.x+=n.dirX*e*14,Math.abs(t.position.x)>8&&(t.position.x=-n.dirX*8))}this.yanked&&this.cable.rotation.x>-1.75&&(this.cable.rotation.x=Math.max(-1.75,this.cable.rotation.x-e*.9))}},rg=[[[-168,66],[-156,71],[-125,70],[-95,72],[-80,68],[-94,59],[-82,52],[-78,62],[-64,60],[-56,52],[-66,45],[-70,42],[-76,35],[-81,30],[-81,25],[-84,30],[-90,29],[-97,26],[-97,20],[-90,21],[-87,21],[-88,16],[-83,10],[-79,9],[-85,11],[-95,16],[-105,20],[-112,28],[-117,33],[-124,40],[-124,48],[-133,56],[-150,60],[-165,55],[-158,58],[-166,62]],[[-120,74],[-90,80],[-70,82],[-65,74],[-80,72],[-100,74]],[[-70,77],[-60,82],[-30,83],[-20,75],[-40,65],[-44,60],[-52,65]],[[-79,9],[-72,12],[-60,9],[-50,0],[-35,-6],[-39,-15],[-48,-25],[-57,-36],[-65,-42],[-68,-54],[-74,-50],[-73,-37],[-70,-18],[-81,-5],[-78,3]],[[-17,15],[-17,21],[-10,30],[-6,36],[10,37],[11,33],[20,31],[32,31],[35,25],[38,18],[43,12],[51,12],[45,2],[39,-6],[40,-15],[35,-24],[27,-34],[18,-34],[12,-18],[13,-6],[9,4],[-5,5],[-13,9]],[[44,-16],[50,-14],[47,-25],[44,-24]],[[-9,37],[-9,43],[-2,44],[-4,48],[3,51],[8,54],[12,55],[5,59],[14,67],[25,71],[40,67],[60,69],[70,73],[100,77],[130,72],[160,70],[180,68],[178,63],[163,60],[160,53],[155,59],[140,54],[135,44],[129,36],[122,40],[121,31],[110,21],[106,11],[100,13],[103,2],[98,8],[95,16],[90,22],[80,15],[77,8],[72,20],[66,25],[57,26],[57,22],[45,13],[43,15],[35,28],[35,36],[27,37],[22,37],[19,42],[13,45],[18,40],[12,44],[8,44],[3,42],[0,38],[-5,36]],[[-5,50],[1,52],[-2,58],[-6,57]],[[-10,52],[-6,52],[-6,55],[-10,54]],[[-24,65],[-14,66],[-14,64],[-22,63]],[[130,32],[136,35],[141,37],[142,44],[139,38],[132,35]],[[95,5],[105,-5],[102,-4]],[[109,1],[117,6],[118,0],[114,-4],[110,-2]],[[131,-1],[141,-3],[150,-9],[141,-9]],[[114,-22],[122,-18],[130,-12],[136,-12],[140,-17],[145,-14],[153,-26],[150,-37],[143,-39],[131,-32],[116,-34]],[[173,-35],[178,-38],[171,-46],[167,-45]],[[-84,22],[-75,20],[-78,22]]],ig=[[10,23,34,11,`#c8a868`],[46,23,11,9,`#c8a868`],[68,42,24,9,`#a89a68`],[100,42,18,7,`#b0a068`],[130,-25,17,9,`#c09a60`],[-110,35,10,8,`#b09a68`],[-68,-40,6,10,`#a89a70`],[20,-25,8,7,`#a89a60`],[-62,-6,16,11,`#1f5c2c`],[20,0,14,8,`#1f5c2c`],[108,8,14,12,`#245f30`],[90,62,55,9,`#3b6242`],[-100,56,30,8,`#3b6242`]];function ag(e){let t=e>>>0;return()=>{t=t+1831565813>>>0;let e=t;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}}function og(e,t,n,r,i){if(n>0){let a=t[0]-e[0],o=t[1]-e[1],s=(r()-.5)*.3,c=[(e[0]+t[0])/2-o*s,(e[1]+t[1])/2+a*s];og(e,c,n-1,r,i),og(c,t,n-1,r,i)}else i.push(t)}var sg=new Map;function cg(e){let t=sg.get(e);if(!t){t=document.createElement(`canvas`),t.width=t.height=64;let n=t.getContext(`2d`),r=new V(e),i=n.createRadialGradient(32,32,0,32,32,32);i.addColorStop(0,e),i.addColorStop(.6,e),i.addColorStop(1,`rgba(${Math.round(r.r*255)},${Math.round(r.g*255)},${Math.round(r.b*255)},0)`),n.fillStyle=i,n.fillRect(0,0,64,64),sg.set(e,t)}return t}function lg(e,t,n,r,i,a,o){e.globalAlpha=o,e.drawImage(cg(a),t-r,n-i,r*2,i*2),e.globalAlpha=1}function ug(){let e=2048,t=1024,n=document.createElement(`canvas`);n.width=e,n.height=t;let r=n.getContext(`2d`),i=ag(1969),a=t=>(t+180)/360*e,o=e=>(90-e)/180*t,s=r.createLinearGradient(0,0,0,t);s.addColorStop(0,`#2a5f8c`),s.addColorStop(.3,`#123f74`),s.addColorStop(.5,`#0e3a70`),s.addColorStop(.7,`#123f74`),s.addColorStop(1,`#2a5f8c`),r.fillStyle=s,r.fillRect(0,0,e,t);let c=new Path2D;for(let e of rg){let t=[e[0]];for(let n=0;n<e.length;n++)og(e[n],e[(n+1)%e.length],3,i,t);c.moveTo(a(t[0][0]),o(t[0][1]));for(let e of t)c.lineTo(a(e[0]),o(e[1]));c.closePath()}r.strokeStyle=`rgba(70, 150, 180, 0.45)`,r.lineWidth=7,r.lineJoin=`round`,r.stroke(c);let l=document.createElement(`canvas`);l.width=e,l.height=t;let u=l.getContext(`2d`);u.fillStyle=`#4d8a44`,u.fillRect(0,0,e,t);for(let[n,r,s,c,l]of ig)for(let d=0;d<14;d++)lg(u,a(n+(i()-.5)*s*1.1),o(r+(i()-.5)*c*1.1),s/360*e*(.25+i()*.3),c/180*t*(.25+i()*.3),l,.5);for(let n=0;n<2600;n++){let n=i()<.5?`#2c5f30`:`#8a9a58`;lg(u,i()*e,i()*t,4+i()*12,3+i()*7,n,.14)}let d=u.createLinearGradient(0,o(80),0,o(64));d.addColorStop(0,`rgba(225, 235, 240, 0.95)`),d.addColorStop(1,`rgba(225, 235, 240, 0)`),u.fillStyle=d,u.fillRect(0,0,e,o(64)),u.globalCompositeOperation=`destination-in`,u.fillStyle=`#000`,u.fill(c),r.drawImage(l,0,0),r.fillStyle=`#e4ecf2`,r.beginPath(),r.moveTo(0,t);for(let t=0;t<=e;t+=16)r.lineTo(t,o(-71+Math.sin(t*.011)*3+Math.sin(t*.037)*1.2));r.lineTo(e,t),r.closePath(),r.fill(),r.beginPath(),r.moveTo(0,0);for(let t=0;t<=e;t+=16)r.lineTo(t,o(83+Math.sin(t*.013)*2+Math.sin(t*.041)*1));r.lineTo(e,0),r.closePath(),r.fill();let f=new Na(n);return f.colorSpace=et,f.anisotropy=8,f}function dg(){let e=1024,t=document.createElement(`canvas`);t.width=e,t.height=512;let n=t.getContext(`2d`),r=ag(1972);for(let t=0;t<60;t++){let t=r()*e,i=512*(.12+r()*.76),a=6+Math.floor(r()*12),o=18+r()*50,s=(r()-.5)*.5;for(let c=0;c<a;c++){let a=(r()-.5)*o*2.4,c=a*s+(r()-.5)*12,l=8+r()*24,u=3+r()*8;for(let r of[-1024,0,e])lg(n,t+a+r,i+c,l,u,`#ffffff`,.45)}}let i=new Na(t);return i.colorSpace=et,i}var fg=null,pg=null;function mg(){return fg??(fg=ug()),pg??(pg=dg()),{surface:fg,clouds:pg}}var hg=.32,gg=new L(1,0,0),_g=class extends Ah{constructor(e){super(e),X(this,`arrayCenter`,new L(0,58,-114)),X(this,`couplings`,[]),X(this,`smashed`,!1),X(this,`gate`,null),X(this,`sweeps`,[]),X(this,`screens`,[]),X(this,`earth`,void 0),X(this,`clouds`,void 0),X(this,`monolith`,void 0),X(this,`dish`,void 0),X(this,`feedMat`,void 0),X(this,`frameMat`,new K({color:793120,emissive:9423072,emissiveIntensity:.85})),this.buildBase(),this.buildTower(),this.buildOrbitField(),this.buildArray(),this.buildSky(),this.buildDust(20,30,6,-60),this.checkpoints={m4_spawn:new L(0,1.05,0),m4_karman:new L(0,27.6,-32),m4_apollo:new L(-5.5,51.6,-97.5),m4_array:new L(4,54.1,-106)},this.zone(`m4_climb`,0,9,-30,14,6,12),this.zone(`m4_karman`,0,28,-30,10,4,8),this.zone(`m4_sister`,0,31.5,-44,10,5,8),this.zone(`m4_mirror`,8,34.5,-52,8,5,8),this.zone(`m4_monolith`,-6,40.5,-67,14,7,10),this.zone(`m4_headline`,-2,37.5,-60,8,5,8),this.zone(`m4_drones`,10,46.5,-84,10,6,8),this.zone(`m4_apollo`,-8,51.5,-98,9,5,8),this.zone(`m4_deepfake`,0,49.5,-92,8,5,8),this.zone(`m4_array`,0,58,-111,15,5,10)}buildBase(){this.box(0,-.5,-16,40,1,38,$.floor),this.box(0,3.5,3.2,40,9,1,$.wall),this.box(-20.5,3.5,-16,1,9,38,$.wall),this.box(20.5,3.5,-16,1,9,38,$.wall),this.textPlane(`UPLINK STATION 04`,`#9fb8d8`,7,1.4,56).position.set(0,4.6,2.6),this.box(-12,1.5,-10,5,3,4,$.crate),this.box(13,1.25,-22,4,2.5,4,$.crate);let e=new U(new G(2.6,.4,1.4,18),$.tank);e.position.set(-12,4,-10),e.rotation.z=.5,this.scene.add(e);let t=new q(10467544,22,36,1.8);t.position.set(0,8,-14),this.addLight(t),this.addPickup(8,.8,-8)}buildTower(){for(let[e,t]of[[-3,-27],[3,-27],[-3,-33],[3,-33]])this.box(e,13,t,.5,28,.5,$.pipe);for(let e=4;e<=24;e+=5)this.box(0,e,-27,6.4,.22,.22,$.pipe,!1),this.box(0,e,-33,6.4,.22,.22,$.pipe,!1),this.box(-3,e,-30,.22,.22,6.4,$.pipe,!1),this.box(3,e,-30,.22,.22,6.4,$.pipe,!1);for(let[e,t,n]of[[3,2.6,-25],[-3,5.2,-28],[3,7.8,-31],[-3,10.4,-33],[-3,13,-28],[3,15.6,-25.5],[3,18.2,-30],[-3,20.8,-32],[0,23.7,-28]])this.box(e,t,n,3.6,.5,3,$.platform),this.box(e,t+.27,n,3.65,.04,3.05,this.frameMat,!1);this.box(0,26.7,-32,8,.6,4,$.floor),this.box(-3.35,26.7,-28,1.3,.6,4,$.floor),this.box(3.35,26.7,-28,1.3,.6,4,$.floor),this.box(0,27.05,-33.8,7.5,.06,.25,this.frameMat,!1),this.box(0,27.05,-30.1,5.65,.06,.25,this.frameMat,!1),this.box(-2.82,27.05,-28,.25,.06,4,this.frameMat,!1),this.box(2.82,27.05,-28,.25,.06,4,this.frameMat,!1),this.textPlane(`KARMAN LINE — 100 KM`,`#9fb8d8`,5.5,1,50).position.set(0,29.4,-33.6);let e=new q(10467544,16,24,1.8);e.position.set(0,30,-30),this.addLight(e),this.addPickup(0,27.9,-27.5)}panel(e,t,n,r=6,i=4){this.box(e,t,n,r,.35,i,$.tank),this.box(e,t+.2,n,r+.1,.05,i+.1,this.frameMat,!1)}satellite(e,t,n,r=!1){let i=new B,a=new U(new W(2.2,1.6,1.6),$.crate),o=new U(new W(3.4,.1,1.4),$.tank);o.position.x=-2.9;let s=o.clone();if(s.position.x=2.9,i.add(a,o,s),r){let e=new U(new ms(.3,12,12),new K({color:2097152,emissive:16722719,emissiveIntensity:2}));e.position.set(0,0,.85),i.add(e)}i.position.set(e,t,n),i.rotation.set(Math.random()*.6-.3,Math.random()*Math.PI,Math.random()*.5-.25),this.scene.add(i)}rod(e,t,n,r){let i=new U(new G(n,n,e.distanceTo(t),8),r);i.position.copy(e).lerp(t,.5),i.quaternion.setFromUnitVectors(new L(0,1,0),t.clone().sub(e).normalize()),this.scene.add(i)}apolloLander(e,t,n){let r=new K({color:13015605,emissive:8017938,emissiveIntensity:.7,roughness:.45,metalness:.3}),i=new K({color:11844806,emissive:4278094,emissiveIntensity:.7,roughness:.55,metalness:.3}),a=new K({color:1316894,roughness:.3,metalness:.6,side:2}),o=(r,i,a,o,s,c=0)=>{let l=new U(r,i);return l.position.set(e+a,t+o,n+s),l.rotation.y=c,this.scene.add(l),this.outline(l,r),l},s=(r,i,a,o,s,c)=>this.colliders.push(Z(e+r,t+i,n+a,o,s,c));o(new G(1.5,1.5,1.2,8),r,0,1.45,0,Math.PI/8),o(new G(.3,.6,.6,14),a,0,.55,0),s(0,1.03,0,2.8,2.06,2.8);for(let[r,a]of[[1,1],[1,-1],[-1,1],[-1,-1]]){let c=new L(e+r*2.35,t+.14,n+a*2.35);this.rod(c,new L(e+r*1,t+1.75,n+a*1),.09,i),this.rod(c,new L(e+r*1.3,t+1,n+a*.45),.05,i),this.rod(c,new L(e+r*.45,t+1,n+a*1.3),.05,i),o(new G(.42,.42,.1,16),i,r*2.35,.08,a*2.35),s(r*2.35,.13,a*2.35,.8,.26,.8),s(r*1.7,.5,a*1.7,.6,1,.6)}for(let e=0;e<4;e++)o(new W(.7,.05,.05),i,0,.3+e*.22,1.42);o(new G(1.2,1.2,1.5,6),i,0,2.8,0,Math.PI/6),o(new W(1.5,1.1,.9),i,0,2.85,-1.2),s(0,2.8,-.4,2.2,1.5,2.9);for(let e of[-1,1]){let t=new Co;t.moveTo(e*.08,0),t.lineTo(e*.55,0),t.lineTo(e*.08,.5),t.closePath(),o(new fs(t),a,0,2.95,1.05)}o(new W(.6,.55,.04),a,0,2.45,1.05);for(let e of[-1,1])o(new W(.34,.34,.34),r,e*1.18,3.2,.4),o(new G(.06,.12,.24,8),a,e*1.18,3.48,.4);o(new G(.42,.42,.34,16),i,0,3.72,0),s(0,3.72,0,.84,.34,.84),this.rod(new L(e+.55,t+3.5,n-.7),new L(e+.95,t+4.55,n-.7),.035,i);let c=i.clone();c.side=2,o(new ms(.42,18,8,0,Math.PI*2,0,Math.PI/2.4),c,.95,4.72,-.7).rotation.set(Math.PI,0,-.6),s(.95,4.5,-.7,.8,.5,.8);let l=this.textPlane(`UNITED STATES`,`#1a2230`,1.28,.64,60);l.material.opacity=1,l.position.set(e,t+1.45,n+1.4);let u=e-1.6,d=n+2.7;this.box(u,t+1.6,d,.07,3.2,.07,i),this.box(u+.65,t+3.18,d,1.3,.04,.04,i,!1);let f=document.createElement(`canvas`);f.width=128,f.height=76;let p=f.getContext(`2d`);for(let e=0;e<13;e++)p.fillStyle=e%2?`#e8e8e8`:`#b5302c`,p.fillRect(0,e*76/13,128,6.846153846153846);p.fillStyle=`#26396e`,p.fillRect(0,0,54,41),p.fillStyle=`#e8e8e8`;for(let e=0;e<5;e++)for(let t=0;t<6;t++)p.fillRect(4+t*8.5,4+e*7.6,2.2,2.2);let m=new U(new us(1.3,.78),new yi({map:new Na(f),side:2}));m.position.set(u+.65,t+2.78,d),this.scene.add(m);let h=new q(16773336,14,16,1.8);h.position.set(e+2.5,t+4.5,n+4),this.addLight(h)}addSweep(e,t,n,r,i){let a=new B;a.position.set(e,t,n);let o=new U(new G(.5,.5,1.4,12),$.pipe),s=new W(r,.5,.4);s.translate(r/2,0,0);let c=new U(s,$.pipe),l=new U(new G(1.1,.25,.7,14),$.tank);l.position.set(r-.4,.6,0);let u=new U(new W(r,.12,.12),$.stripAmber);u.geometry.translate(r/2,0,0),u.position.y=.3,a.add(o,c,l,u),this.scene.add(a),this.sweeps.push({pivot:a,center:new L(e,t,n),radius:r,omega:i})}buildOrbitField(){this.panel(0,30,-44),this.panel(8,33,-52),this.panel(-2,36,-60,7,5);let e=this.textPlane(`GRID SABOTEUR IDENTIFIED`,`#ffd9a0`,6.5,.9,54);e.position.set(-2,39.2,-62.4);let t=this.textPlane(`former contractor · history of mental illness · family declines to comment`,`#9fb8d8`,8.5,.5,26);t.position.set(-2,38.45,-62.4);let n=this.box(-2,38.9,-62.6,9,2.2,.2,$.crate,!1);this.screens.push(e,t,n),this.panel(-10,39,-68),this.panel(0,42,-76,7,5),this.addSweep(0,43.1,-76,6.5,.85),this.panel(10,45,-84),this.panel(0,48,-92,7,5),this.addSweep(0,49.1,-92,6.5,-.7),this.panel(-8,50.5,-98,8,6),this.apolloLander(-9,50.675,-98),this.panel(4,53,-106),this.satellite(-16,36,-54),this.satellite(16,41,-70,!0),this.satellite(-14,47,-88),this.satellite(18,52,-100),this.monolith=new U(new W(1,9,4),new K({color:329226,roughness:.2,metalness:.9})),this.monolith.position.set(-15,42,-72),this.scene.add(this.monolith);let r=new U(new G(.22,.16,.26,12),$.crate);r.position.set(6,44.5,-79);let i=new U(new hs(.12,.04,8,12),$.crate);i.position.set(6.26,44.5,-79),this.scene.add(r,i),this.droneSpawns=[new L(8,48,-86),new L(-4,50,-90),new L(4,52,-98)],this.addPickup(8,34.1,-52),this.addPickup(0,49.1,-90,!0)}buildArray(){let e=$.barrier.clone();e.emissive.setHex(10467544),e.emissiveIntensity=.8;let t=this.box(0,56.5,-108.5,7,5,.3,e,!1),n=Z(0,56.5,-108.5,7,5,.3);this.colliders.push(n),this.gate={mesh:t,collider:n},this.buildSatellite()}buildSatellite(){let e=new K({color:13015605,emissive:6966288,emissiveIntensity:.6,roughness:.45,metalness:.3}),t=new K({color:11186876,emissive:3159356,emissiveIntensity:.7,roughness:.55,metalness:.3}),n=new K({color:5857644,emissive:1843238,emissiveIntensity:.7,roughness:.7,metalness:.3});this.box(0,56.7,-114,16,.6,12,n),this.box(0,53.5,-114,16,5.8,12,e);for(let e of[-4,4])this.box(e,57.02,-114,.08,.04,12,t,!1);for(let e of[-111,-117])this.box(0,57.02,e,16,.04,.08,t,!1);this.box(0,57.05,-119.7,15.5,.06,.25,this.frameMat,!1),this.box(0,57.05,-108.3,15.5,.06,.25,this.frameMat,!1);for(let e of[51.6,55.2])this.box(0,e,-114,16.15,.14,12.15,t,!1);for(let[e,n]of[[-5.5,-110.5],[5.5,-110.5],[-5.5,-118],[5.5,-118]]){let r=new U(new G(.3,.75,1,14),t);r.position.set(e,50.1,n),this.scene.add(r)}this.box(-5.5,57.6,-116.5,3,1.2,3,t),this.box(5.5,57.6,-116.5,3,1.2,3,t),this.box(0,58.8,-116.5,6,3.6,4,t),this.box(0,60.63,-116.5,6.05,.06,4.05,this.frameMat,!1),this.box(0,58.9,-114.47,5,1.7,.06,n,!1);let r=this.textPlane(`UPLINK ARRAY`,`#ffd9a0`,4.6,2.3,64);r.position.set(0,59.3,-114.42);let i=this.textPlane(`FACE ARCHIVE LIVE`,`#ffb0a0`,4.6,2.3,44);i.position.set(0,58.5,-114.42),this.screens.push(r,i);for(let e of[-1,1])this.solarWing(e,t);this.buildDish(t),this.coupling(0,60.6,-116,null,t);let a=new q(14674175,26,34,1.8);a.position.set(0,64,-108),this.addLight(a);for(let e of[-1,1]){let t=new q(14674175,16,26,1.8);t.position.set(e*21,63,-114),this.addLight(t)}this.addPickup(-6,57.8,-112,!0)}solarWing(e,t){let n=document.createElement(`canvas`);n.width=1024,n.height=512;let r=n.getContext(`2d`);r.fillStyle=`#123a78`,r.fillRect(0,0,1024,512),r.fillStyle=`#b8c6d8`;for(let e=0;e<=20;e++)r.fillRect(e*1024/20-1,0,3,512);for(let e=0;e<=10;e++)r.fillRect(0,e*512/10-1,1024,3);let i=new Na(n);i.colorSpace=et,i.anisotropy=8;let a=new K({map:i,emissive:16777215,emissiveMap:i,emissiveIntensity:.55,roughness:.35,metalness:.4});this.box(e*9.5,56.7,-114,3,.6,2.4,t),this.box(e*21,56.85,-114,20,.3,10,a);for(let n of[-109,-119])this.box(e*21,57.02,n,20.1,.06,.14,t,!1);for(let n of[11,17.67,24.33,31])this.box(e*n,57.02,-114,.14,.06,10,t,!1);this.coupling(e*27,57,-114,a,t);let o=this.couplings[this.couplings.length-1];this.rod(new L(e*26.3,57.12,-114),new L(e*3,57.12,-114.8),.05,o.liveMat)}coupling(e,t,n,r,i){this.box(e,t+.55,n,1.4,1.1,1.4,i);let a=new K({color:4198416,emissive:16726564,emissiveIntensity:1.3}),o=new K({color:2106410,emissive:790034,roughness:.5,metalness:.5}),s=new B;s.position.set(e,t+1.1,n);let c=new U(new G(.42,.5,.8,16),o);c.position.y=.4;let l=new U(new hs(.52,.08,10,24),a);l.rotation.x=Math.PI/2,l.position.y=.1;let u=new U(new W(1,.12,.16),o);u.position.y=1.05;let d=new U(new W(.12,.3,.16),o);d.position.set(-.44,.9,0);let f=d.clone();f.position.x=.44,s.add(c,l,u,d,f),this.scene.add(s),r?this.beacon(e,t+1.1,n,16734788,22,.28):this.beacon(e,t+1.1,n,16734788,2.5,.2),this.couplings.push({pos:new L(e,t+1.5,n),wingMat:r,plug:s,liveMat:a,beacon:this.beacons[this.beacons.length-1].group,pulled:!1})}buildDish(e){let t=3.5,n=e=>new I(e,e*e/(4*t)),r=[];for(let e=0;e<=18;e++)r.push(n(6*e/18));let i=new K({color:13160664,emissive:3817544,emissiveIntensity:.75,roughness:.5,metalness:.25,side:2}),a=new B;a.position.set(0,67.88,-120.4),a.quaternion.setFromUnitVectors(new L(0,1,0),new L(0,-Math.sin(.35),Math.cos(.35))),a.add(new U(new cs(r,48),i));let o=(t,r)=>{let i=new U(new hs(t,r,8,48),e);i.rotation.x=Math.PI/2,i.position.y=n(t).y+.03,a.add(i)};o(6,.12),o(2.2,.04),o(4.2,.04);let s=new U(new G(1.1,1.3,.8,16),e);s.position.y=-.35,a.add(s),this.feedMat=new K({color:4198416,emissive:16726564,emissiveIntensity:1.4});let c=new U(new G(.7,.28,1,16),e);c.position.y=t;let l=new U(new Ra(.28,16),this.feedMat);l.rotation.x=Math.PI/2,l.position.y=t-.51,a.add(c,l);let u=new L(0,1,0);for(let t=0;t<3;t++){let n=t/3*Math.PI*2+Math.PI/6,r=new L(Math.cos(n)*6,2.5714285714285716,Math.sin(n)*6),i=new L(0,3.8,0),o=new U(new G(.05,.05,r.distanceTo(i),8),e);o.position.copy(r).lerp(i,.5),o.quaternion.setFromUnitVectors(u,i.clone().sub(r).normalize()),a.add(o)}this.scene.add(a),this.dish=a,this.box(0,58.4,-120.7,2,2.8,1.4,e),this.rod(new L(0,59.8,-121.2),new L(0,67.7,-121.2),.5,e),this.colliders.push(Z(0,63.8,-121.2,1,8,1)),this.colliders.push(Z(0,62.7,-120.4,11,2.6,1)),this.colliders.push(Z(0,66,-120.5,12,4,1.2)),this.colliders.push(Z(0,69.2,-118.9,11,2.5,2.8)),this.colliders.push(Z(0,71.6,-116.9,8,2.3,2.2)),this.colliders.push(Z(0,66.7,-117.1,1.4,1.4,1.4));let d=new K({color:2106410,roughness:.6});this.rod(new L(0,61,-116.7),new L(0,60.75,-118.3),.12,d),this.rod(new L(0,60.75,-118.3),new L(0,60.75,-120.8),.12,d)}buildSky(){let e=mg();this.earth=new U(new ms(70,96,64),new K({map:e.surface,emissive:16777215,emissiveMap:e.surface,emissiveIntensity:.8,roughness:.9,fog:!1})),this.earth.position.set(10,-78,-95),this.earth.rotation.set(1,2.09,0),this.scene.add(this.earth),this.clouds=new U(new ms(70.6,96,64),new yi({map:e.clouds,color:14213870,transparent:!0,opacity:.7,depthWrite:!1,fog:!1})),this.clouds.position.copy(this.earth.position),this.clouds.rotation.copy(this.earth.rotation),this.scene.add(this.clouds);let t=new U(new ms(73.5,48,32),new K({color:0,emissive:3832504,emissiveIntensity:.5,transparent:!0,opacity:.16,side:1}));t.position.copy(this.earth.position),this.scene.add(t);let n=new U(new ms(9,24,18),new K({color:4869976,emissive:9080728,emissiveIntensity:.25}));n.position.set(110,80,-260),this.scene.add(n);let r=(e,t,n,r,i=!1)=>{let a=new U(new ms(e,32,24),new K({color:t,emissive:n,emissiveIntensity:.4,roughness:.9,fog:!1}));a.position.set(...r),this.scene.add(a);for(let i of[-e*.35,0,e*.4]){let a=new U(new hs(e*.98,e*.07,8,40),new K({color:t,emissive:n,emissiveIntensity:.5,transparent:!0,opacity:.4,fog:!1}));a.rotation.x=Math.PI/2,a.scale.y=.3,a.position.set(r[0],r[1]+i,r[2]),this.scene.add(a)}if(i){let t=new U(new ds(e*1.4,e*2.1,48),new yi({color:13615264,transparent:!0,opacity:.4,side:2,fog:!1}));t.rotation.x=Math.PI/2.4,t.position.set(...r),this.scene.add(t)}};r(20,13215850,8018480,[-150,95,-250],!0),r(11,12081728,6957592,[150,50,-230]),r(6,6983872,2771568,[-90,130,-290]);let i=new Float32Array(900*3);for(let e=0;e<900;e++){let t=Math.random()*Math.PI*2,n=Math.acos(2*Math.random()-1),r=230+Math.random()*60;i[e*3]=Math.sin(n)*Math.cos(t)*r,i[e*3+1]=Math.abs(Math.cos(n))*r*.8+5,i[e*3+2]=-90+Math.sin(n)*Math.sin(t)*r}let a=new Ur;a.setAttribute(`position`,new kr(i,3));let o=new Aa(a,new Ta({color:14674175,size:.7,transparent:!0,opacity:.85,fog:!1}));o.frustumCulled=!1,this.scene.add(o)}openSecurityDoor(){if(!this.gate)return;this.gate.mesh.removeFromParent();let e=this.colliders.indexOf(this.gate.collider);e>=0&&this.colliders.splice(e,1),this.gate=null}sweepHit(e,t){for(let n of this.sweeps){let r=e.x-n.center.x,i=e.z-n.center.z,a=Math.hypot(r,i);if(a>n.radius+.4||a<.6||t>n.center.y+1.6||t<n.center.y-1.8)continue;let o=n.pivot.rotation.y,s=Math.cos(o),c=-Math.sin(o),l=r*s+i*c,u=Math.abs(r*-c+i*s);if(l>0&&u<.9)return!0}return!1}pull(e){e.pulled||(e.pulled=!0,e.liveMat.color.setHex(1314830),e.liveMat.emissiveIntensity=0,e.beacon.visible=!1,this.feedMat.emissiveIntensity=Math.max(.15,this.feedMat.emissiveIntensity-.45))}smash(){if(!this.smashed){this.smashed=!0;for(let e of this.screens)e.visible=!1;this.feedMat.emissiveIntensity=0,this.feedMat.color.setHex(1314830)}}update(e,t){this.updateBase(e,t);for(let t of this.sweeps)t.pivot.rotation.y+=t.omega*e;this.earth.rotation.y+=e*.012,this.clouds.rotation.y+=e*.015,this.monolith.rotation.y+=e*.1;for(let n of this.couplings){if(!n.pulled){n.liveMat.emissiveIntensity=1.3+Math.sin(t*2.2+n.pos.x)*.3;continue}n.plug.position.y+=e*.7,n.plug.rotation.x+=e*.5,n.plug.rotation.z+=e*.3,n.wingMat&&(n.wingMat.emissiveIntensity+=(.03-n.wingMat.emissiveIntensity)*Math.min(1,e*2))}this.smashed&&(this.dish.rotateOnWorldAxis(gg,-e*.12),this.dish.position.z-=e*.25)}},vg=3.6,yg=1,bg=new K({color:2765372,roughness:.7,metalness:.25}),xg=new K({color:1316894,roughness:.5,metalness:.5}),Sg=new K({color:1909805,roughness:.8,metalness:.1}),Cg=new K({color:2239544,roughness:.95,metalness:.05}),wg=new K({color:3817544,roughness:.35,metalness:.8}),Tg=85,Eg=145,Dg=[[44,33],[69,35],[45,15],[36,34],[125,39],[121,24],[38,49],[10,15]],Og=[-77,39],kg=class extends Ah{constructor(e){super(e),X(this,`turrets`,[]),X(this,`links`,[]),X(this,`severed`,!1),X(this,`junctions`,[]),X(this,`loopClosed`,!1),X(this,`portPos`,new L(0,-35,-129.6)),X(this,`planted`,!1),X(this,`melting`,!1),X(this,`meltT`,0),X(this,`portMat`,void 0),X(this,`stick`,void 0),X(this,`inStrip`,void 0),X(this,`outStrip`,void 0),X(this,`consoleTex`,void 0),X(this,`consoleCtx`,void 0),X(this,`consoleStep`,-1),X(this,`gate`,null),X(this,`vents`,[]),X(this,`screenMats`,[]),X(this,`blips`,[]),X(this,`deskMats`,[]),X(this,`rackFace`,void 0),X(this,`klaxonMats`,[]),X(this,`missile`,void 0),this.buildPerimeter(),this.buildShaft(),this.buildControlRoom(),this.buildGallery(),this.buildCommandCenter(),this.buildDust(20,10,6,-130),this.checkpoints={m5_spawn:new L(0,1.05,2),m5_shaft:new L(-9,-1.65,-34),m5_bottom:new L(0,-34.95,-50),m5_control:new L(0,-34.95,-62),m5_gallery:new L(0,-34.95,-90),m5_command:new L(0,-34.95,-110)},this.zone(`m5_mouth`,0,2,-24,30,6,8),this.zone(`m5_shaft`,0,-15,-43,28,8,28),this.zone(`m5_bottom`,0,-34,-46,26,5,16),this.zone(`m5_control`,0,-34,-62,28,6,8),this.zone(`m5_gallery`,0,-34,-90,28,6,8),this.zone(`m5_command`,0,-34,-112,28,6,8)}placard(e,t,n,r,i=0,a=.8){let o=.46,s=r.length>1?.78:0,c=r.length>1?r.slice(1):r,l=r.length>1?`50px`:`${Math.round(a*150)}px`,u=`${Math.round(s*.66*150)}px`,d=`Impact, "Arial Narrow", sans-serif`,f=document.createElement(`canvas`).getContext(`2d`);f.font=`${l} ${d}`;let p=Math.max(...c.map(e=>f.measureText(e).width))/150;f.font=`${u} ${d}`;let m=s?f.measureText(r[0]).width/150:0,h=Math.max(p,m)+1,g=r.length>1?c.length*o+.3:a*1.5,_=s+g,v=document.createElement(`canvas`);v.width=Math.ceil(h*150),v.height=Math.ceil(_*150);let y=v.getContext(`2d`);y.fillStyle=`#14191f`,y.fillRect(0,0,v.width,v.height),y.textAlign=`center`,y.textBaseline=`middle`,s&&(y.fillStyle=`#d98f2e`,y.fillRect(0,0,v.width,s*150),y.fillStyle=`#14191f`,y.font=`${u} ${d}`,y.fillText(r[0],v.width/2,s/2*150+2)),y.fillStyle=`#e6dfd0`,y.font=`${l} ${d}`,c.forEach((e,t)=>{let n=s+(g-c.length*o)/2,i=r.length>1?n+(t+.5)*o:_/2;y.fillText(e,v.width/2,i*150+2)});let b=new Na(v);b.colorSpace=et,b.anisotropy=8;let x=new B;x.position.set(e,t,n),x.rotation.y=i;let S=new U(new W(h+.24,_+.24,.12),$.pipe);S.position.z=.06;let C=new U(new us(h,_),new K({map:b,emissiveMap:b,emissive:16777215,emissiveIntensity:.55,roughness:.75}));C.position.z=.13,x.add(S,C),this.scene.add(x)}buildPerimeter(){this.box(0,-.5,-14,44,1,34,$.floor),this.box(0,4,3.5,44,10,1,$.wall),this.box(-22.5,4,-14,1,10,34,$.wall),this.box(22.5,4,-14,1,10,34,$.wall);for(let e of[-14,14])this.box(e,5,-16,.3,4,.3,$.pipe);this.box(0,6.9,-16,28.3,.3,.3,$.pipe,!1),this.placard(0,5.7,-15.85,[`TALON INTEGRATION SITE 05`]);for(let e of[-14,14]){for(let t=-6;t>=-26;t-=5)this.box(e,1.6,t,.18,3.2,.18,$.pipe);let t=new U(new us(22,3),new K({color:2760728,transparent:!0,opacity:.3,side:2}));t.position.set(e,1.6,-16),t.rotation.y=Math.PI/2,this.scene.add(t),this.colliders.push(Z(e,1.6,-16,.3,3.2,22))}this.placard(-13.9,1.9,-8.5,[`PROGRAM MAVEN`,`AUTOMATED VIDEO ANALYSIS`,`OPERATIONAL SINCE 2017`],Math.PI/2),this.placard(13.9,1.9,-8.5,[`CONTROL POSTURE`,`IN THE LOOP / ON / OUT`,`CURRENT SETTING: ON`],-Math.PI/2);for(let[e,t]of[[-18,-8],[18,-8]]){let n=$.stripAmber.clone(),r=new U(new G(.4,.5,.8,10),n);r.position.set(e,4.2,t),this.scene.add(r),this.box(e,1.9,t,.4,3.8,.4,$.pipe),this.klaxonMats.push(n)}let e=new q(13404746,40,60,1.8);e.position.set(0,9,-12),this.addLight(e);let t=new q(16767392,32,60,1.8);t.position.set(0,8,-44),this.addLight(t),this.addPickup(-8,.8,-8)}ceilingPanels(e,t,n=$.stripAmber){for(let r of e)for(let e of[-8,0,8])this.box(e,t,r,3,.12,1.4,n,!1)}buildShaft(){this.box(0,-.5,-60.5,44,1,7,$.floor),this.box(-18.5,-.5,-44,7,1,26,$.floor),this.box(18.5,-.5,-44,7,1,26,$.floor),this.box(0,.25,-30.6,26,.5,.4,$.stripAmber,!1),this.box(-19.5,-18,-44,1,38,28,$.wall),this.box(19.5,-18,-44,1,38,28,$.wall),this.box(0,-18,-30.5,40,38,1,$.wall),this.box(-11.5,-18,-57.5,17,38,1,$.wall),this.box(11.5,-18,-57.5,17,38,1,$.wall),this.box(0,-13,-57.5,8,28,1,$.wall),this.box(0,-36.5,-44,40,1,28,$.floor),this.missile=new U(new G(3.6,3.8,36,24),$.tank),this.missile.position.set(0,-18,-44),this.scene.add(this.missile),this.colliders.push(Z(0,-18,-44,5.8,36,5.8));let e=new U(new za(3.6,6,24),$.tank);e.position.set(0,3,-44),this.scene.add(e),this.colliders.push(Z(0,3,-44,3.6,6,3.6));let t=new U(new hs(3.7,.12,8,32),$.stripAmber);t.rotation.x=Math.PI/2,t.position.set(0,-4,-44),this.scene.add(t),this.textPlane(`IF FOUND, DO NOT RETURN`,`#9fb8c8`,5,.7,40).position.set(0,-8,-40.1),this.box(0,-36.4,-44,12,.3,12,$.coolant,!1).material=new K({color:2756612,emissive:16742938,emissiveIntensity:.45}),this.hazards.push(Z(0,-36,-44,11,1.6,11));for(let[e,t,n]of[[-9,-3,-34],[-11,-6,-42],[-9,-9,-50],[-2,-12,-53],[6,-15,-53],[12,-18,-47],[12,-21,-39],[6,-24,-34],[-3,-27,-34],[-11,-30,-38],[-11,-33,-46]])this.box(e,t,n,5,.6,4,$.platform),this.box(e,t+.32,n+1.9,5.05,.04,.25,$.stripAmber,!1);for(let[e,t,n,r]of[[-9,-8.2,-50,0],[12,-17.2,-47,1.3],[-3,-26.2,-34,2.4]]){let i=new K({color:16763024,emissive:16747050,emissiveIntensity:.7,transparent:!0,opacity:.45,depthWrite:!1}),a=new U(new W(5.4,2.4,1.6),i);a.position.set(e,t+1.6,n),a.visible=!1,this.scene.add(a),this.vents.push({plume:a,box:Z(e,t+1.6,n,5.4,2.4,1.6),phase:r,on:!1})}this.addTurret(-14.5,-7,-50,0),this.addTurret(15.2,-19,-39,Math.PI),this.addTurret(6,-13.5,-56.5,Math.PI/2),this.addTurret(-14.5,-27,-38,0),this.placard(-19,-12,-44,[`THIS FLOOR DRAWS 100 MEGAWATTS`,`ENOUGH FOR A SMALL CITY`,`IT NEVER SLEEPS`],Math.PI/2),this.placard(19,-22,-44,[`COOLING WATER`,`MILLIONS OF LITRES PER DAY`,`EVAPORATED. NOT RETURNED.`],-Math.PI/2);let n=new q(13404746,34,50,1.8);n.position.set(0,-6,-44),this.addLight(n);let r=new q(13404746,28,44,1.8);r.position.set(0,-20,-44),this.addLight(r);let i=new q(16742938,28,44,1.8);i.position.set(0,-32,-44),this.addLight(i),this.addPickup(12,-20.2,-39),this.addPickup(0,-35.1,-52)}addTurret(e,t,n,r){let i=new B,a=new U(new W(1.4,1.2,1.4),$.crate),o=$.stripAmber.clone(),s=new U(new G(.16,.22,1.6,10),$.pipe);s.geometry.rotateX(Math.PI/2),s.geometry.translate(0,0,.8),s.position.y=.35;let c=new U(new ms(.22,10,10),o);c.position.set(0,.35,.45),i.add(a,s,c),i.position.set(e,t,n),i.rotation.y=r,this.scene.add(i);let l=Z(e,t,n,1.4,1.2,1.4);this.colliders.push(l),this.turrets.push({group:i,barrel:s,eyeMat:o,pos:new L(e,t+.35,n),hp:30,dead:!1,collider:l,shootT:1.5+Math.random()*2,telegraph:0})}updateTurrets(e,t){if(!(this.severed||this.melting)){for(let n of this.turrets)if(!n.dead){if(n.pos.distanceTo(t.playerPos)>30){n.eyeMat.emissiveIntensity=1.2;continue}if(n.group.lookAt(t.playerPos.x,t.playerPos.y+.4,t.playerPos.z),n.shootT-=e,n.eyeMat.emissiveIntensity=n.shootT<.6?1.2+(.6-n.shootT)*4.5:1.2,n.shootT<=0){n.shootT=2.3+Math.random()*1.2;let e=new L(t.playerPos.x,t.playerPos.y+.3,t.playerPos.z).sub(n.pos),r=e.length();e.normalize();let i=!1;for(let a of t.colliders)if(a!==n.collider&&wp(n.pos,e,r,a)!==null){i=!0;break}i||(t.fireBolt(n.pos.clone().addScaledVector(e,1.7),e),t.audio.enemyShoot())}}}}buildControlRoom(){this.box(0,-36.5,-71,40,1,28,$.floor),this.box(0,-25.5,-71,40,1,28,$.wall),this.box(-19.5,-31,-71,1,12,28,$.wall),this.box(19.5,-31,-71,1,12,28,$.wall),[[-8,-64],[-8,-70],[8,-66],[8,-74],[0,-78]].forEach(([e,t],n)=>{this.box(e,-35.5,t,3.2,1,1.4,bg),this.operatorSeat(e,t,-36,n)});for(let e of[-59.5,-60.8,-62.1,-79,-80.3,-81.6,-82.9])this.serverRack(-18.3,e,Math.PI/2),this.serverRack(18.3,e,-Math.PI/2);this.placard(-19,-32.6,-68,[`ON THE LOOP MEANS`,`THE SYSTEM ACTS. YOU MAY OBJECT.`,`OBJECTION WINDOW: 4 SECONDS`],Math.PI/2),this.placard(19,-32.6,-74,[`ADVISORY`,`OPERATORS TRUST THE SCREEN WHEN TIRED.`,`DO NOT RELY ON THE OPERATOR.`],-Math.PI/2),this.droneSpawns=[new L(-8,-32,-66),new L(8,-32.5,-64),new L(-5,-31.5,-78),new L(7,-32,-76)],this.box(-12,-31.5,-85.5,16,11,1,$.wall),this.box(12,-31.5,-85.5,16,11,1,$.wall),this.box(0,-28,-85.5,8,4,1,$.wall);let e=$.barrier.clone();e.emissive.setHex(16757844),e.emissiveIntensity=.9;let t=this.box(0,-32.5,-85.5,8,7,.3,e,!1),n=Z(0,-32.5,-85.5,8,7,.3);this.colliders.push(n),this.gate={mesh:t,collider:n},this.ceilingPanels([-63,-71,-79],-26.08);let r=new q(13404746,60,44,1.8);r.position.set(0,-29,-71),this.addLight(r);for(let e of[-13,13]){let t=new q(13404746,26,24,1.8);t.position.set(e,-29,-71),this.addLight(t)}this.addPickup(-13,-35.1,-80)}makeScreenMat(e,t){let n=new K({color:398348,emissive:e,emissiveMap:this.readoutTexture(),emissiveIntensity:t*1.6});return this.screenMats.push(n),n}readoutTexture(){let e=this.screenMats.length,t=t=>{let n=Math.sin((e+1)*12.9898+t*78.233)*43758.5453;return n-Math.floor(n)},n=document.createElement(`canvas`);n.width=256,n.height=128;let r=n.getContext(`2d`);r.fillStyle=`#0c0c0c`,r.fillRect(0,0,256,128),r.strokeStyle=`#3a3a3a`,r.lineWidth=1;for(let e=16;e<256;e+=32)r.beginPath(),r.moveTo(e,0),r.lineTo(e,128),r.stroke();for(let e=16;e<128;e+=32)r.beginPath(),r.moveTo(0,e),r.lineTo(256,e),r.stroke();r.strokeStyle=`#ffffff`,r.lineWidth=2,r.beginPath();for(let e=0;e<=256;e+=8){let n=76+Math.sin(e*.05+t(1)*6)*18+(t(e+2)-.5)*22;e===0?r.moveTo(e,n):r.lineTo(e,n)}r.stroke(),r.fillStyle=`#ffffff`;for(let e=0;e<4;e++)r.beginPath(),r.arc(20+t(e+300)*216,12+t(e+400)*40,3.5,0,Math.PI*2),r.fill();let i=new Na(n);return i.colorSpace=et,i}paintedScreen(e,t,n){let r=document.createElement(`canvas`);r.width=e,r.height=t;let i=r.getContext(`2d`);i.fillStyle=`#050a10`,i.fillRect(0,0,e,t),n(i,e,t);let a=new Na(r);a.colorSpace=et,a.anisotropy=8;let o=new K({color:197637,emissive:16777215,emissiveMap:a,emissiveIntensity:.9,roughness:.4});return this.screenMats.push(o),o}screen(e,t,n,r,i,a,o=0){let s=new U(new us(i,a),e);s.position.set(t,n,r),s.rotation.y=o,this.scene.add(s)}wallScreen(e,t,n,r,i,a,o=0){let s=.16,c=Math.round(Math.sin(o)),l=Math.round(Math.cos(o)),u=c!==0;this.box(t+c*s/2,n,r+l*s/2,u?s:i+.3,a+.3,u?i+.3:s,xg),this.screen(e,t+c*.17,n,r+l*.17,i,a,o)}deskMat(e){return this.deskMats.length||(this.deskMats=[this.paintedScreen(512,340,(e,t,n)=>Mg(e,t,n,11)),this.paintedScreen(512,340,Ig),this.paintedScreen(512,340,(e,t,n)=>Ng(e,t,n,23)),this.paintedScreen(512,340,(e,t,n)=>Pg(e,t,n,31)),this.paintedScreen(512,340,Fg),this.paintedScreen(512,340,(e,t,n)=>Mg(e,t,n,47))]),this.deskMats[e%this.deskMats.length]}operatorSeat(e,t,n,r){[-.62,.62].forEach((i,a)=>{this.box(e+i,n+1.55,t-.3,1.16,.78,.1,xg),this.box(e+i,n+1.08,t-.3,.14,.16,.14,xg,!1),this.screen(this.deskMat(r*2+a),e+i,n+1.55,t-.24,1.06,.68)}),this.box(e,n+1.02,t+.3,1,.04,.32,xg,!1),this.box(e+1.05,n+.5,t+.71,.5,.9,.03,xg,!1),this.box(e+1.05,n+.78,t+.73,.1,.05,.02,$.stripGreen,!1);let i=t+1.45;this.colliders.push(Z(e,n+.72,i,.8,1.44,.8)),this.box(e,n+.24,i,.16,.48,.16,Sg,!1),this.box(e,n+.54,i,.8,.12,.8,Sg,!1),this.box(e,n+1.02,i+.35,.8,.84,.1,Sg,!1)}serverRack(e,t,n){this.rackFace??(this.rackFace=this.paintedScreen(128,360,Rg)),this.box(e,-34.3,t,1.2,3.4,1.2,xg),this.screen(this.rackFace,e+Math.round(Math.sin(n))*.61,-34.3,t+Math.round(Math.cos(n))*.61,1.04,3.2,n)}buildGallery(){this.box(0,-36.5,-97,40,1,24,$.floor),this.box(0,-25.5,-97,40,1,24,$.wall),this.box(-19.5,-31,-97,1,12,24,$.wall),this.box(19.5,-31,-97,1,12,24,$.wall);let e=6.6,t=-11.6,n=-31.5;this.wallScreen(this.paintedScreen(2048,966,jg),t,n,-109,14,e);for(let[r,i]of Dg){let a=new yi({color:16734794,transparent:!0,opacity:.6,depthWrite:!1}),o=new U(new Ra(.13,16),a);o.position.set(t+((r+180)/360-.5)*14,n+(.5-(Tg-i)/Eg)*e,-108.81),this.scene.add(o),this.blips.push({mesh:o,mat:a})}[(e,t,n)=>Mg(e,t,n,5),(e,t,n)=>Ng(e,t,n,9),Fg,(e,t,n)=>Pg(e,t,n,3)].forEach((e,t)=>{let r=8.1+t%2*7.1,i=n+(t<2?1:-1)*1.7249999999999999;this.wallScreen(this.paintedScreen(1024,474,e),r,i,-109,6.8,3.15)}),this.wallScreen(this.paintedScreen(2960,80,Lg),0,-26.95,-109,37,1),this.placard(0,-28.75,-109,[`PATTERN OF LIFE`,`WHERE YOU SLEEP. WHO YOU MEET.`,`A PATTERN IS NOT A PERSON. WE TREAT IT AS ONE.`]),[-90,-94,-98,-102,-106].forEach((e,t)=>{this.wallScreen(this.deskMat(t),-19,-30.2,e,3.4,2.2,Math.PI/2),this.wallScreen(this.deskMat(t+3),19,-30.2,e,3.4,2.2,-Math.PI/2)});for(let e of[-1,1])this.box(e*11.8,-35.8,-96.5,14.4,.4,5,Cg),this.box(e*11.8,-35.6,-92,14.4,.8,4,Cg);let r=0;for(let[e,t]of[[-93,-35.2],[-98,-35.6],[-103,-36]])for(let n of[-1,1]){this.box(n*10.05,t+.5,e,10.9,1,1.4,bg);for(let i of[6,8.7,11.4,14.1])this.operatorSeat(n*i,e,t,r++)}for(let e of[-1,1])for(let t=0;t<7;t++)this.serverRack(e*(6+t*1.3),-86.6,Math.PI);this.box(-18.2,-35.5,-88,1.6,1,2.6,bg),this.box(-18.3,-34.5,-88,1.2,1,1.4,xg),this.screen(this.paintedScreen(512,400,zg),-17.69,-34.5,-88,1.2,.86,Math.PI/2),this.box(17.8,-35.1,-87.5,1,1.8,.7,wg),this.box(17.8,-33.85,-87.5,.6,.7,.6,wg);let i=new U(new ms(.09,8,8),new K({color:1703936,emissive:6689041,emissiveIntensity:.5}));i.position.set(17.48,-33.8,-87.5),this.scene.add(i);let a=new K({color:1054236,emissive:12375276,emissiveIntensity:.7});this.screenMats.push(a),this.ceilingPanels([-91,-99,-105],-26.08,a);let o=new q(10467544,100,44,1.8);o.position.set(0,-29,-95),this.addLight(o);let s=new q(8370408,34,28,1.8);s.position.set(0,-31,-105),this.addLight(s)}buildCommandCenter(){this.box(-12,-31.5,-109.5,16,11,1,$.wall),this.box(12,-31.5,-109.5,16,11,1,$.wall),this.box(0,-28,-109.5,8,4,1,$.wall),this.box(0,-36.5,-124,42,1,34,$.floor),this.box(0,-25.5,-124,42,1,34,$.wall),this.box(-20.5,-31,-124,1,12,34,$.wall),this.box(20.5,-31,-124,1,12,34,$.wall),this.box(0,-31,-141.5,42,12,1,$.wall),this.box(-13,-33.2,-126,2,2,2,$.tank),this.box(13,-33.2,-126,2,2,2,$.tank);let e=new U(new G(.12,.12,24,8),$.pipe);e.rotation.z=Math.PI/2,e.position.set(0,-33.2,-126),this.scene.add(e),this.colliders.push(Z(0,-33.2,-126,24,.24,.24));for(let e of[-6,0,6]){let t=$.stripAmber.clone();t.emissiveIntensity=2;let n=new U(new hs(.9,.3,10,24),t);n.position.set(e,-33.2,-126),this.scene.add(n),this.links.push({mesh:n,mat:t,pos:new L(e,-33.2,-126),dead:!1}),this.colliders.push(Z(e,-33.2,-126,2.4,2.4,.6))}this.placard(0,-30.8,-126,[`FIND · FIX · TRACK · TARGET · ENGAGE`],0,.5),this.buildRouting(),this.placard(-20,-32.6,-119,[`ROUTING NOTICE`,`OUTPUT MUST NEVER RE-ENTER INPUT.`,`LOOP GUARD: REMOVED. IT WAS SLOWING THINGS DOWN.`],Math.PI/2);for(let e of[-5,5])this.box(e,-28,-126,.1,4.2,.1,$.pipe,!1);this.box(0,-35,-131,6,2.4,2,xg),this.box(0,-33.4,-130.1,5.3,1.9,.2,xg);let t=document.createElement(`canvas`);t.width=1024,t.height=328,this.consoleCtx=t.getContext(`2d`),this.consoleTex=new Na(t),this.consoleTex.colorSpace=et,this.consoleTex.anisotropy=8;let n=new K({color:197637,emissive:16777215,emissiveMap:this.consoleTex,emissiveIntensity:.9,roughness:.4});this.screenMats.push(n),this.screen(n,0,-33.4,-129.98,5,1.6),this.paintConsole(),this.portMat=$.stripAmber.clone(),this.portMat.emissiveIntensity=.15,this.box(0,-35,-129.97,1,.6,.06,this.portMat,!1),this.box(0,-35,-129.93,.5,.2,.04,xg,!1),this.stick=new B,this.stick.position.set(0,-35,-129.55);let r=new U(new W(.4,.2,.7),new K({color:13115436,roughness:.45})),i=new U(new W(.1,.03,.1),$.stripGreen);i.position.set(0,.11,.2),this.stick.add(r,i),this.stick.visible=!1,this.scene.add(this.stick),this.placard(-11,-32.6,-141,[`ACCOUNTABILITY NOTICE`,`THE MODEL RECOMMENDS. THE OPERATOR CONFIRMS.`,`NO SINGLE PERSON DECIDED.`]),this.placard(11,-32.6,-141,[`DECISION LATENCY`,`MANUAL REVIEW: 90 MINUTES`,`ASSISTED REVIEW: 90 SECONDS`]),this.addTurret(0,-32,-122,0),this.turrets[this.turrets.length-1].group.rotation.x=Math.PI,this.box(0,-29,-122,.25,6,.25,$.pipe,!1),this.ceilingPanels([-114,-122,-130],-26.08);let a=new q(16742938,60,44,1.8);a.position.set(0,-29,-124),this.addLight(a),this.addPickup(13,-35.1,-116),this.addPickup(-13,-35.1,-120)}buildRouting(){let e=()=>$.stripAmber.clone(),t=e();t.emissiveIntensity=1.2,this.outStrip=t,this.inStrip=e(),this.inStrip.emissiveIntensity=.12;let n=-35.96;this.box(13,-35.1,-125,.5,1.8,.5,xg,!1),this.box(13,n,-123.3,.7,.05,4.1,t,!1),this.box(9.6,n,-121.6,7.5,.05,.7,t,!1),this.box(-13,-35.1,-125,.5,1.8,.5,xg,!1),this.box(-13,n,-123.3,.7,.05,4.1,this.inStrip,!1),this.box(-9.6,n,-121.6,7.5,.05,.7,this.inStrip,!1);let r=(e,t,n,r,i,a,o)=>{let s=this.textPlane(e,t,i,a,o);s.rotation.x=-Math.PI/2,s.position.set(n,-35.95,r)};r(`CHAIN OUTPUT`,`#ffb454`,11,-119.6,7,3.5,64),r(`CHAIN INPUT`,`#9fb8c8`,-11,-119.6,7,3.5,64),r(`STAND ON A TILE. TURN IT.`,`#e6dfd0`,0,-114,9,4.5,34);let i=[1,3],a=[0,1],o=[[4.2,-121.6,a,3],[0,-121.6,i,1],[-4.2,-121.6,a,3],[4.2,-117.4,a,1],[0,-117.4,i,1],[-4.2,-117.4,a,2]];for(let[e,t,n,r]of o){this.box(e,-35.97,t,4,.06,4,xg,!1);let i=new K({color:2106926,emissive:9413816,emissiveIntensity:.3,roughness:.6}),a=new B;a.position.set(e,-35.92,t),a.rotation.y=-r*Math.PI/2,a.add(new U(new W(.9,.03,.9),i));for(let e of n){let t=e===1?1:e===3?-1:0,n=e===2?1:e===0?-1:0,r=new U(new W(t?2:.7,.03,n?2:.7),i);r.position.set(t,0,n),a.add(r)}this.scene.add(a),this.junctions.push({x:e,z:t,arms:n,rot:r,group:a,mat:i,live:!1})}this.traceRouting()}junctionAt(e){return this.loopClosed||e.y>-33?null:this.junctions.find(t=>Math.abs(e.x-t.x)<=2&&Math.abs(e.z-t.z)<=2)??null}turnJunction(e){e.rot=(e.rot+1)%4,this.traceRouting()}traceRouting(){for(let e of this.junctions)e.live=!1;let e=e=>e.arms.map(t=>(t+e.rot)%4),t=this.junctions[0],n=1,r=!1;for(let i=0;i<this.junctions.length;i++){let i=e(t);if(!i.includes(n))break;t.live=!0;let a=i[0]===n?i[1]:i[0],o=t.x+(a===1?4.2:a===3?-4.2:0),s=t.z+(a===2?4.2:a===0?-4.2:0),c=this.junctions.find(e=>Math.abs(e.x-o)<.1&&Math.abs(e.z-s)<.1);if(!c){r=a===3&&Math.abs(t.x+4.2)<.1&&Math.abs(t.z+121.6)<.1;break}t=c,n=(a+2)%4}for(let e of this.junctions)e.mat.emissive.setHex(e.live?16757844:9413816),e.mat.emissiveIntensity=e.live?1.2:.3;r&&!this.loopClosed&&(this.loopClosed=!0,this.inStrip.emissiveIntensity=1.2,this.portMat.emissiveIntensity=1.4,this.paintConsole())}plantStick(){this.planted=!0,this.melting=!0,this.meltT=0,this.stick.visible=!0,this.paintConsole()}killLink(e){let t=this.links[e];return t.dead=!0,t.mat.emissive.setHex(1708552),t.mat.emissiveIntensity=.08,t.pos}paintConsole(){let e=this.consoleCtx;e.fillStyle=`#060a08`,e.fillRect(0,0,1024,328),e.textBaseline=`middle`,e.textAlign=`left`;let t=(t,n,r,i=44,a=36)=>{e.font=`bold ${i}px ${Ag}`,e.fillStyle=r,e.fillText(t,a,n)};if(!this.planted)t(`ENGAGE CONSOLE`,56,`#ffb454`,52),t(this.loopClosed?`ROUTING: OUTPUT > INPUT`:`ROUTING: NOMINAL`,136,this.loopClosed?`#ff7a5a`:`#7fe8b0`),t(this.loopClosed?`LOOP GUARD: NOT INSTALLED`:`CONFIDENCE: 99.7%`,196,`#7fe8b0`),t(this.loopClosed?`USB PORT: READY`:`USB PORT: UNMONITORED`,256,this.loopClosed?`#ffb454`:`#7fe8b0`);else{let e=Math.min(Math.max(this.consoleStep,0),62);for(let n=0;n<5;n++)t(`RECOMMEND(`,34+n*44,n<e?`#ff7a5a`:`#3a4a40`,34,36+n*42);t(`CALL DEPTH 2^${e}`,266,`#ffb454`,40),t(e<4?`CONFIDENCE: 99.7%`:`CONFIDENCE: 100%`,266,`#ff7a5a`,40,520)}this.consoleTex.needsUpdate=!0}openSecurityDoor(){if(!this.gate)return;this.gate.mesh.removeFromParent();let e=this.colliders.indexOf(this.gate.collider);e>=0&&this.colliders.splice(e,1),this.gate=null}flameHit(e){for(let t of this.vents)if(t.on&&Sp(e,t.box))return!0;return!1}powerDown(){this.severed=!0;for(let e of this.turrets)e.eyeMat.emissiveIntensity=.05;for(let e of this.screenMats)e.emissiveIntensity=.04;for(let e of this.klaxonMats)e.emissiveIntensity=.05;for(let e of this.blips)e.mesh.visible=!1;for(let e of this.junctions)e.mat.emissiveIntensity=.04;this.inStrip.emissiveIntensity=.04,this.outStrip.emissiveIntensity=.04,this.portMat.emissiveIntensity=.05,this.dimFactor=.45;for(let{light:e,base:t}of this.lights)e.intensity=t*.45}update(e,t){this.updateBase(e,t);for(let t of this.junctions){let n=(-t.rot*Math.PI/2-t.group.rotation.y)%(Math.PI*2);n>Math.PI&&(n-=Math.PI*2),n<-Math.PI&&(n+=Math.PI*2),t.group.rotation.y+=n*Math.min(1,e*12)}if(this.severed)for(let e of this.vents)e.on=!1,e.plume.visible=!1;else{let n=.9+(Math.sin(t*1.1)+1)*.55;for(let e of this.klaxonMats)e.emissiveIntensity=n;for(let e of this.vents){let n=(t+e.phase)%vg,r=n>vg-.5;e.on=n<yg,e.plume.visible=e.on||r;let i=e.on?1:.4;e.plume.scale.set(i,i,i)}for(let e of this.links)e.dead||(e.mat.emissiveIntensity=1.8+Math.sin(t*2.1+e.pos.x)*.4);if(this.melting){this.meltT+=e;let n=Math.min(1,this.meltT/20);for(let r of this.links)r.dead||(r.mesh.rotation.x+=(.4+n*3)*e,r.mat.emissive.setRGB(1,.7-n*.55,.33-n*.28),r.mat.emissiveIntensity=1.1-n*.3+Math.sin(t*2.1+r.pos.x)*.15);let r=Math.floor(this.meltT);r!==this.consoleStep&&(this.consoleStep=r,this.paintConsole())}else this.loopClosed&&(this.portMat.emissiveIntensity=1+Math.sin(t*2.4)*.5);this.blips.forEach((e,n)=>{let r=(Math.sin(t*1.3+n*1.7)+1)/2;e.mat.opacity=.35+r*.55,e.mesh.scale.setScalar(.85+r*.35)})}}},Ag=`Consolas, "Courier New", monospace`;function jg(e,t,n){let r=e=>(e+180)/360*t,i=e=>(Tg-e)/Eg*n;e.fillStyle=`#04121f`,e.fillRect(0,0,t,n),e.strokeStyle=`rgba(90, 170, 210, 0.22)`,e.lineWidth=2;for(let t=-180;t<=180;t+=20)e.beginPath(),e.moveTo(r(t),0),e.lineTo(r(t),n),e.stroke();for(let n=-60;n<=80;n+=20)e.beginPath(),e.moveTo(0,i(n)),e.lineTo(t,i(n)),e.stroke();let a=new Path2D;for(let e of rg)e.forEach(([e,t],n)=>n?a.lineTo(r(e),i(t)):a.moveTo(r(e),i(t))),a.closePath();e.fillStyle=`#123f52`,e.fill(a),e.strokeStyle=`#6fe0f5`,e.lineWidth=3.5,e.lineJoin=`round`,e.stroke(a);let[o,s]=[r(Og[0]),i(Og[1])];e.lineWidth=3;for(let[t,n]of Dg){let a=r(t),c=i(n);e.strokeStyle=`rgba(255, 180, 84, 0.75)`,e.beginPath(),e.moveTo(o,s),e.quadraticCurveTo((o+a)/2,Math.min(s,c)-150,a,c),e.stroke(),e.strokeStyle=`#ff7a5a`,e.beginPath(),e.arc(a,c,30,0,Math.PI*2),e.stroke()}e.fillStyle=`#ffd9a0`,e.beginPath(),e.arc(o,s,12,0,Math.PI*2),e.fill()}function Mg(e,t,n,r){let i=ag(r);e.fillStyle=`#34383a`,e.fillRect(0,0,t,n);for(let r=0;r<500;r++){let r=40+Math.floor(i()*30);e.fillStyle=`rgb(${r},${r+2},${r})`,e.fillRect(i()*t,i()*n,4+i()*t*.02,2+i()*n*.02)}let a=t*(.3+i()*.4),o=n*(.3+i()*.4);for(let r=0;r<60;r++){let r=110+Math.floor(i()*90);e.fillStyle=`rgb(${r},${r},${r-6})`,e.fillRect(i()*t,i()*n,t*(.02+i()*.05),n*(.03+i()*.07))}e.fillStyle=`#1b1d1e`,e.fillRect(a,0,t*.025,n),e.fillRect(0,o,t,n*.04);let s=Math.max(2,t/320);e.font=`bold ${Math.round(t/34)}px ${Ag}`,e.textAlign=`left`,e.textBaseline=`bottom`;for(let r=0;r<4;r++){let a=t*(.07+i()*.06),o=t*(.08+i()*.72),c=n*(.16+i()*.6),l=r===0,u=l?`#ff5a4a`:`#ffb454`;e.strokeStyle=u,e.fillStyle=u,e.lineWidth=s,e.strokeRect(o,c,a,a),e.fillText(`${l?`TGT`:`TRK`} ${String(Math.floor(i()*9e3)+1e3)}`,o,c-s*2)}e.strokeStyle=`rgba(255,255,255,0.75)`,e.lineWidth=s,e.beginPath(),e.moveTo(t/2-t*.05,n/2),e.lineTo(t/2+t*.05,n/2),e.moveTo(t/2,n/2-t*.05),e.lineTo(t/2,n/2+t*.05),e.stroke()}function Ng(e,t,n,r){let i=ag(r);e.fillStyle=`#060c16`,e.fillRect(0,0,t,n);let a=Array.from({length:26},()=>[t*(.05+i()*.9),n*(.08+i()*.84)]);e.strokeStyle=`rgba(140, 190, 240, 0.55)`,e.lineWidth=Math.max(1.5,t/500),a.forEach(([t,n],r)=>{for(let o of[Math.floor(i()*a.length),Math.floor(i()*a.length)])o!==r&&(e.beginPath(),e.moveTo(t,n),e.lineTo(a[o][0],a[o][1]),e.stroke())});let o=t/110;a.forEach(([t,n],r)=>{e.fillStyle=r===0?`#ff5a4a`:`#b9dcff`,e.beginPath(),e.arc(t,n,r===0?o*1.8:o,0,Math.PI*2),e.fill()}),e.strokeStyle=`#ff5a4a`,e.lineWidth=Math.max(2,t/320),e.beginPath(),e.arc(a[0][0],a[0][1],o*3.6,0,Math.PI*2),e.stroke()}function Pg(e,t,n,r){let i=ag(r);e.fillStyle=`#031008`,e.fillRect(0,0,t,n);let a=t/2,o=n/2,s=n*.46;e.strokeStyle=`rgba(53, 255, 157, 0.5)`,e.lineWidth=Math.max(1.5,t/500);for(let t=1;t<=4;t++)e.beginPath(),e.arc(a,o,s*t/4,0,Math.PI*2),e.stroke();e.beginPath(),e.moveTo(a-s,o),e.lineTo(a+s,o),e.moveTo(a,o-s),e.lineTo(a,o+s),e.stroke();let c=i()*Math.PI*2;for(let t=0;t<24;t++)e.fillStyle=`rgba(53, 255, 157, ${.4*(1-t/24)})`,e.beginPath(),e.moveTo(a,o),e.arc(a,o,s,c-(t+1)*.05,c-t*.05),e.closePath(),e.fill();for(let n=0;n<9;n++){let r=i()*Math.PI*2,c=s*(.2+i()*.75);e.fillStyle=n<2?`#ff7a5a`:`#c6ffe2`,e.beginPath(),e.arc(a+Math.cos(r)*c,o+Math.sin(r)*c,t/130,0,Math.PI*2),e.fill()}}function Fg(e,t,n){let r=ag(77);e.fillStyle=`#0a0a0e`,e.fillRect(0,0,t,n);let i=t*.04,a=n*.08,o=(t-i*2)/24,s=(n-a*2)/7;for(let t=0;t<7;t++)for(let n=0;n<24;n++){let c=n>=7&&n<=22?.25+r()*.75:r()*.08;e.fillStyle=`rgb(${Math.round(30+225*c)},${Math.round(20+150*c)},${Math.round(20+50*c)})`,e.fillRect(i+n*o+1,a+t*s+1,o-2,s-2)}}function Ig(e,t,n){let r=ag(101);e.fillStyle=`#04100c`,e.fillRect(0,0,t,n);let i=n/11;e.font=`bold ${Math.round(i*.6)}px ${Ag}`,e.textBaseline=`middle`;for(let n=0;n<11;n++){e.fillStyle=r()<.15?`#ffb454`:`#7fe8b0`;let a=String(Math.floor(r()*9e4)+1e4),o=(r()*60).toFixed(2),s=(r()*120).toFixed(2);e.fillText(`${a}  ${o}N ${s}E  ${Math.floor(r()*40)+60}%`,t*.04,(n+.5)*i)}}function Lg(e,t,n){let r=[[`PENTAGON`,`14:06`],[`ZULU`,`19:06`],[`BAGHDAD`,`22:06`],[`KABUL`,`23:36`],[`BEIJING`,`03:06`],[`SEOUL`,`04:06`]];e.fillStyle=`#060606`,e.fillRect(0,0,t,n),e.font=`bold ${Math.round(n*.62)}px ${Ag}`,e.textBaseline=`middle`,r.forEach(([i,a],o)=>{let s=t/r.length*(o+.5);e.textAlign=`right`,e.fillStyle=`#9fb8d8`,e.fillText(i,s-12,n/2+2),e.textAlign=`left`,e.fillStyle=`#ff5a3a`,e.fillText(a,s+12,n/2+2)})}function Rg(e,t,n){let r=ag(211);e.fillStyle=`#0a0c10`,e.fillRect(0,0,t,n);let i=n/16;for(let n=0;n<16;n++){e.fillStyle=`#1a1f26`,e.fillRect(4,n*i+2,t-8,i-4);for(let t=0;t<7;t++){let a=r();e.fillStyle=a<.55?`#35ff9d`:a<.72?`#ffb454`:`#10161a`,e.fillRect(12+t*16,n*i+i/2-3,8,6)}}}function zg(e,t,n){e.fillStyle=`#021006`,e.fillRect(0,0,t,n),e.fillStyle=`#6dff9d`,e.font=`bold 56px ${Ag}`,e.textBaseline=`middle`,e.textAlign=`left`,e.fillText(`SHALL WE PLAY`,34,n*.36),e.fillText(`A GAME?`,34,n*.56),e.fillRect(259,n*.5,26,50)}var Bg=4.2,Vg=2.2,Hg=.7,Ug=new L(0,-999,0),Wg=class extends Ah{constructor(e){super(e),X(this,`plugPos`,new L(0,1.2,-204)),X(this,`pulled`,!1),X(this,`phasers`,[]),X(this,`core`,void 0),X(this,`coreMat`,void 0),X(this,`rings`,[]),X(this,`cable`,void 0),X(this,`wireframes`,[]),X(this,`heartbeat`,0),X(this,`coreScale`,1),X(this,`time`,0),this.outlineEnabled=!0,this.buildNave(),this.buildCrossing(),this.buildCoreChamber(),this.buildDust(14,16,6,-214),this.checkpoints={m6_spawn:new L(0,1.05,2),m6_musing:new L(0,1.05,-62),m6_crossing:new L(0,1.05,-89),m6_pad1:new L(0,1.05,-113),m6_pad2:new L(0,1.05,-131),m6_pad3:new L(0,1.05,-145.5),m6_bridge:new L(0,1.05,-162)},this.zone(`m6_intro`,0,3,-14,14,6,8),this.zone(`m6_b2a`,0,3,-62,22,6,6),this.zone(`m6_b2b`,0,3,-76,22,6,6),this.zone(`m6_b2c`,0,3,-88,22,6,6),this.zone(`m6_f1`,0,3,-94,14,6,4),this.zone(`m6_f2`,0,3,-113,14,8,4),this.zone(`m6_f3`,0,3,-131,14,8,4),this.zone(`m6_hook`,0,3,-145.5,14,8,3),this.zone(`m6_storm`,0,3,-166,14,6,4),this.zone(`m6_g1`,0,3,-170,10,6,3),this.zone(`m6_g2`,0,3,-178,10,6,5),this.zone(`m6_g3`,0,3,-185,10,6,5),this.zone(`m6_g4`,0,3,-192,10,6,5),this.zone(`m6_g5`,0,3,-198,20,6,4)}wire(e,t,n,r,i,a,o=.5){let s=new Ca(new Ga(new W(r,i,a)),new da({color:7330024,transparent:!0,opacity:o}));return s.position.set(e,t,n),this.scene.add(s),this.wireframes.push(s),s}buildNave(){this.box(0,-.5,-43,30,1,98,$.floor),this.box(0,.05,-43,1,.08,96,$.stripTeal,!1);for(let e=0;e<8;e++){let t=-12-e*11,n=10+e*3;e<4?(this.box(-12,n/2,t,4,n,4,$.monolith),this.box(12,n/2,t,4,n,4,$.monolith),this.box(-9.95,n/2,t,.06,n*.7,1.6,$.stripTeal,!1),this.box(9.95,n/2,t,.06,n*.7,1.6,$.stripTeal,!1)):(this.wire(-12,n/2,t,4,n,4,.6),this.wire(12,n/2,t,4,n,4,.6),this.colliders.push(Z(-12,n/2,t,4,n,4)),this.colliders.push(Z(12,n/2,t,4,n,4)))}for(let e=0;e<10;e++){let e=this.wire((Math.random()-.5)*24,8+Math.random()*10,-20-Math.random()*180,1+Math.random()*2,1+Math.random()*2,1+Math.random()*2,.3);e.userData.spin=.05+Math.random()*.12}let e=new q(7330024,18,40,1.8);e.position.set(0,8,-40),this.addLight(e),this.addPickup(5,.8,-70)}addLift(e,t,n){this.addMovingPlatform(e,-5,t,r=>({x:e,y:-5+Math.max(-1,Math.min(1,Math.sin(r*.55+n)*1.3))*4.7,z:t})),this.box(e,-5,t+1.7,.1,10,.1,$.stripAmber,!1),this.box(e,-9.96,t,5,.06,4,$.stripAmber,!1)}addPad(e,t){this.box(0,-.5,e,8,1,t,$.floor),this.box(0,.03,e,.7,.06,t-.2,$.stripTeal,!1)}buildCrossing(){this.box(0,-10.5,-156,44,1,130,$.floor);let e=new q(16757844,22,70,1.8);e.position.set(0,-5,-140),this.addLight(e);let t=new q(7330024,22,60,1.8);t.position.set(0,9,-128),this.addLight(t),this.addLift(-6,-93.7,0),this.addLift(-6.5,-113,1.5),this.addLift(-6.5,-131,3),this.addLift(-6.5,-145.5,4.5),this.addLift(-9.5,-165,.8),this.addLift(-16.5,-207,2.2);for(let e of[-93.9,-97.1,-100.3,-105.9,-109.1])this.addCrumble(0,-.3,e,5,.6,3);this.addPad(-113,4),[[2,-117.2],[-2,-121.5],[2,-125.8]].forEach(([e,t],n)=>{let r=$.platform.clone();r.transparent=!0,r.emissive.setHex(11635967),r.emissiveIntensity=.35;let i=new U(new W(4.4,.6,3.4),r);i.position.set(e,-.3,t),this.scene.add(i);let a=Z(e,-.3,t,4.4,.6,3.4),o=Z(e,-.3,t,4.4,.6,3.4);this.colliders.push(a),this.phasers.push({mesh:i,mat:r,collider:a,home:o,phase:Bg-n*.8})}),this.addPad(-131,4),this.addSwingPlatform(0,10.7,-136,11,4,.8,0),this.addSwingPlatform(0,10.7,-141,11,4,.8,Math.PI),this.addPad(-145.5,3),this.addHookPoint(4,11.5,-151),this.box(0,1.75,-156,24,5.5,4,$.monolith),this.box(0,4.53,-156,.7,.06,3.8,$.stripTeal,!1),this.box(0,-.5,-165,14,1,14,$.floor)}buildCoreChamber(){this.box(0,-.5,-182,6,1,26,$.floor),this.box(0,.05,-182,.7,.06,25,$.stripTeal,!1),this.box(0,-.5,-207,28,1,26,$.floor),this.coreMat=new K({color:660504,emissive:12577008,emissiveIntensity:.9,roughness:.15,metalness:.3,flatShading:!0}),this.core=new U(new ss(6.2,1),this.coreMat),this.core.position.set(0,13,-210),this.scene.add(this.core);for(let[e,t]of[[7,.4],[8.6,1.2]]){let n=new U(new hs(e,.06,6,64),new yi({color:7330024,transparent:!0,opacity:.5}));n.position.copy(this.core.position),n.rotation.x=t,this.scene.add(n),this.rings.push(n)}this.box(0,.6,-204,1.8,1.2,1.4,$.tank),this.textPlane(`FINAL PLUG`,`#bfe8f0`,2.6,.7,56).position.set(0,2.2,-203.2);let e=new K({color:658706,roughness:.6,metalness:.4});this.cable=new U(new G(.14,.14,11,8),e),this.cable.geometry.translate(0,5.5,0),this.cable.position.set(0,1.2,-204),this.cable.rotation.x=-.35,this.scene.add(this.cable);let t=new q(12577008,30,60,1.8);t.position.set(0,12,-205),this.addLight(t),this.addPickup(-7,.8,-200)}openSecurityDoor(){}warmCore(){this.heartbeat=1,this.coreMat.emissive.setHex(16767392)}pull(){this.pulled=!0}setDying(e){this.coreScale=Math.max(.02,1-e),this.core.scale.setScalar(this.coreScale);let t=new V(16767392).lerp(new V(12577008),e);this.coreMat.emissive.copy(t);for(let t of this.rings)t.material.opacity=.5*(1-e);this.dimFactor=Math.max(.02,1-e);for(let{light:e,base:t}of this.lights)e.intensity=t*this.dimFactor}update(e,t){if(this.time=t,this.updateBase(e,t),!this.pulled)for(let e of this.phasers){let n=(t+e.phase)%Bg,r;r=n<Vg?1:n<2.9000000000000004?1-(n-Vg)/Hg:n<Bg-Hg?0:(n-(Bg-Hg))/Hg,e.mat.opacity=.15+r*.85,r>.45?(e.collider.min.y>-900||!Sp(this.playerBox,e.home))&&(e.collider.min.copy(e.home.min),e.collider.max.copy(e.home.max)):(e.collider.min.copy(Ug),e.collider.max.copy(Ug))}this.core.rotation.y+=e*.18,this.core.rotation.x+=e*.06;for(let t of this.rings)t.rotation.z+=e*.1;if(this.heartbeat>0&&!this.pulled){let e=((Math.sin(t*5.5)+1)/2)**3;this.coreMat.emissiveIntensity=.8+e*.8,this.core.scale.setScalar(1+e*.04)}else this.pulled||(this.coreMat.emissiveIntensity=.85+Math.sin(t*.9)*.15);this.pulled&&this.cable.rotation.x>-1.5&&(this.cable.rotation.x-=e*.7),this.scene.traverse(t=>{t.userData.spin&&(t.rotation.y+=e*t.userData.spin)})}},Gg={x:0,z:-72,rx:90,rz:68,depth:18},Kg={rx:Gg.rx*1.05,rz:Gg.rz*1.05,height:3.2,wallHeight:6,segments:240},qg={x:125,south:150,north:-312},Jg={south:160,north:-380},Yg={x:65,z:-300},Xg={west:-65,east:Yg.x,south:-262,north:-308,height:18,floors:4},Zg={xs:[-42,-14,14,42],z:-324,height:46,topR:8,bottomR:12},Qg={left:-6.5,right:6.5,back:-4.5,front:8,gate:1.2},$g=200,e_={w:2.2,h:5.2,px:116,floorHeight:4},t_=4,n_=new L(.75,.62,-.25).normalize(),r_={x:-12,z:-10,yaw:.4,roll:.16,pitch:-.16,lift:.75},i_=[[28,120],[28,96],[28,72],[28,48]],a_=[`trees`,`lake`,`village`,`street`,`towers`,`elevator`],o_=[[`walls`,1,0],[`roof`,1.25,.9],[`bits`,1.7,2.1]],s_=8,c_=e=>e===13?12:e,l_=e=>{let t=Math.min(1,Math.max(0,e));return t*t*(3-2*t)};function u_(e,t,n){let r=t.clone().sub(e),i=r.length();return new z().compose(e.clone().add(t).multiplyScalar(.5),new Gt().setFromUnitVectors(new L(0,1,0),r.normalize()),new L(n,i,n))}var d_=e=>.03*(1+Math.sin(3*e+1))+.012*(1+Math.sin(7*e+2));function f_(e,t){let n=(e-Gg.x)/Gg.rx,r=(t-Gg.z)/Gg.rz,i=Math.hypot(n,r)*(1+d_(Math.atan2(r,n)));if(i>=1)return 0;let a=(1-i)/.4;return Math.min(1,Math.max(0,l_(a)+.012*Math.sin(Math.min(a,1)*Math.PI*6)))}function p_(e,t){let n=f_(e,t);if(n>0){let r=.4*Math.sin(e*.07+t*.03)+.3*Math.sin(t*.11-e*.05);return-Gg.depth*n+n*r}let r=Math.max(Math.abs(e)-(qg.x+4),t-(qg.south+4),qg.north-4-t);return r<=0?0:24*l_(r/40)*(.8+.2*Math.sin(e*.04+t*.06))}var m_=class extends Ah{constructor(e){super(e),X(this,`gatePos`,new L(Yg.x+4,1.2,Yg.z)),X(this,`elevatorSpawn`,new L($g-1.25,.9,-.7)),X(this,`elevatorLook`,new L(200.2,2.75,-2.8)),X(this,`counterTex`,void 0),X(this,`counterCanvas`,void 0),X(this,`counterValue`,42),X(this,`doors`,[]),X(this,`shaftCanvas`,void 0),X(this,`shaftTex`,void 0),X(this,`passingLight`,void 0),X(this,`steam`,[]),X(this,`plain`,[]),X(this,`groundLit`,[]),X(this,`ground`,void 0),X(this,`boatName`,void 0),X(this,`cabLight`,void 0),X(this,`bugs`,void 0),X(this,`onArt`,null),X(this,`artReady`,!1),X(this,`streetLamp`,void 0),X(this,`shakers`,[]),this.peaceful=!0,this.outlineEnabled=!1,this.track(()=>this.buildSky()),this.buildLakebed(),this.buildLakeWire(),this.track(()=>this.buildOrchard()),this.buildVillage(),this.buildGate(),this.buildDatacenter(),this.buildSideDoor(),this.buildElevator(),this.buildSteam(),this.buildBugs();for(let[e,t]of i_)this.colliders.push(Z(e,4.6,t,.5,9.2,.5));this.loadArt(),this.buildMotes(1800,12109532,new L(130,18,230),new L(0,6,-90),.06),this.checkpoints={p_spawn:new L(0,1.05,130),p_at_wire:new L(14,1.05,2),p_lake_east:new L(108,1.05,-72),p_lake_west:new L(-108,1.05,-72),p_village:new L(0,1.05,75),p_gate:new L(0,1.05,-240),p_side_path:new L(84,1.05,-258),p_side_door:new L(76,1.05,-300)},this.zone(`p1`,0,2,6,260,5,10),this.zone(`p2`,0,2,-50,260,5,8),this.zone(`p3`,0,2,114,260,5,8),this.zone(`p4`,0,2,34,260,5,8),this.zone(`p5`,0,2,-226,260,5,8)}track(e){let t=this.scene.children.length;e(),this.plain.push(...this.scene.children.slice(t))}async loadArt(){if(new URLSearchParams(location.search).has(`plain`))return;let e=`./models/prelude/`,t=new um,n=new sc,r=async(t,r=!1)=>{let i=await n.loadAsync(`${e}${t}_light.jpg`);return i.flipY=r,i.channel=1,i.colorSpace=et,i},i=async n=>{let[i,a]=await Promise.all([t.loadAsync(`${e}${n}.glb`),r(n)]);for(let e of xh(i.scene,a))Sh(e);return i.scene};try{let t=[0,1,2,3,4,5,6,7].flatMap(e=>o_.map(([t])=>`house${e}_${t}`)),[a,o,s,c]=await Promise.all([n.loadAsync(`${e}sky.jpg`),r(`ground`,!0),Promise.all(a_.map(i)),Promise.all(t.map(i))]);for(let e of s)this.scene.add(e);c.forEach((e,t)=>{this.scene.add(e);let[,n,r]=o_[t%o_.length],i=Math.floor(t/o_.length)*1.7+r,a=e.children[0];this.shakers.push({obj:a,base:a.position.clone(),baseRot:a.rotation.clone(),amp:n,phase:i})}),this.useGroundArt(o),a.colorSpace=et,a.wrapS=u,a.repeat.x=-1;let l=new U(new ms(350,48,24),new yi({map:a,side:1,fog:!1,depthWrite:!1}));l.frustumCulled=!1,l.onBeforeRender=(e,t,n)=>{l.matrixWorld.setPosition(n.position)},l.renderOrder=-1,this.scene.add(l);for(let e of this.plain)e.visible=!1;let d=new wn(r_.pitch,r_.yaw,-r_.roll,`YZX`);this.boatName.position.set(0,-.35,4.08).applyEuler(d).add(new L(r_.x,p_(r_.x,r_.z)+r_.lift,r_.z)),this.boatName.rotation.copy(d),this.boatName.scale.setScalar(1),this.cabLight.intensity=9,this.artReady=!0,this.onArt?.()}catch(e){console.warn(`Prelude art did not load, keeping the plain shapes`,e)}}useGroundArt(e){let t=this.ground.geometry,n=t.attributes.position,r=t.attributes.uv,i=new Float32Array(n.count*2);for(let e=0;e<n.count;e++)r.setXY(e,n.getX(e)/s_,n.getZ(e)/s_),i[e*2]=(n.getX(e)+190)/380,i[e*2+1]=(Jg.south-n.getZ(e))/(Jg.south-Jg.north);r.needsUpdate=!0,t.setAttribute(`uv1`,new kr(i,2));let a=new K({vertexColors:!0,metalness:0});a.color.setScalar(2.5),ph(a,`mud`,1),a.lightMap=e,Sh(a,!0),this.ground.material=a;let o=new Map,s=new L;for(let t of this.groundLit){t.updateWorldMatrix(!0,!1);let n=t.geometry.attributes.position,r=new Float32Array(n.count*2);for(let e=0;e<n.count;e++)s.fromBufferAttribute(n,e).applyMatrix4(t.matrixWorld),r[e*2]=(s.x+190)/380,r[e*2+1]=(Jg.south-s.z)/(Jg.south-Jg.north);t.geometry.setAttribute(`uv1`,new kr(r,2));let i=t.material;if(!o.has(i)){let t=i.clone();t.lightMap=e,Sh(t),o.set(i,t)}t.material=o.get(i)}}buildSky(){this.skyDome(13204042,2767428,350,-130);let e=new U(new ms(14,24,18),new yi({color:16767392,transparent:!0,opacity:.85,fog:!1}));e.position.set(40,34,-350),this.scene.add(e);let t=new U(new ms(24,24,18),new yi({color:16756848,transparent:!0,opacity:.18,blending:2,depthWrite:!1,fog:!1}));t.position.copy(e.position),this.scene.add(t)}buildLakebed(){let e=Jg.south-Jg.north,t=new us(380,e,190,e/2);t.rotateX(-Math.PI/2),t.translate(0,0,(Jg.south+Jg.north)/2);let n=t.attributes.position,r=new Float32Array(n.count*3),i=new V(10123868),a=new V(14471094),o=new V(8152656),s=new V(6179386),c=new V;for(let e=0;e<n.count;e++){let t=n.getX(e),l=n.getZ(e),u=p_(t,l);n.setY(e,u);let d=f_(t,l);c.copy(i),d>0?(c.lerp(o,l_(d*1.2)),c.lerp(a,(.5+.5*Math.sin(d*46))**4*l_(d*12)*(1-d)),c.multiplyScalar(1-.12*d)):u>0&&c.lerp(s,l_(u/14)),c.toArray(r,e*3)}t.setAttribute(`color`,new kr(r,3)),t.computeVertexNormals();let l=this.crackTexture();l.repeat.set(380/9,e/9);let u=new U(t,new K({vertexColors:!0,map:l,roughness:.95,metalness:.05,emissive:6964784,emissiveIntensity:.3}));this.scene.add(u),this.ground=u,u.userData.noCast=!0,this.buildGroundColliders();let d=new K({color:7227958,roughness:.8}),f=new B;f.add(this.detached(new W(2.4,1.3,6),d));let p=this.detached(new W(2.2,.25,.6),d);p.position.y=.7,f.add(p);let m=p_(-12,-34);f.scale.setScalar(1.6),f.position.set(-12,m+1.1,-34),f.rotation.z=.22,f.rotation.y=.4,this.scene.add(f),this.plain.push(f);let h=this.textPlane(`HOPEFUL`,`#e8d8b8`,2.2,.5,60);h.position.set(-11.4,m+1.5,-29),h.scale.setScalar(1.6),this.boatName=h;let g=this.detached(new G(.06,.06,3.2,6),d);g.position.set(-5,m+.2,-31),g.rotation.z=Math.PI/2,g.rotation.y=.7,this.scene.add(g),this.plain.push(g),this.paintedSign(6,.4,0,2.6,.8,1.75,[`NO SWIMMING`],`#c8bea4`,`#7a2a1a`);let _=new yi({color:15659768,transparent:!0,opacity:.65}),v=new U(new hs(.6,.05,6,24),_);v.rotation.x=Math.PI/2,v.position.set(3.4,.06,10),this.scene.add(v);let y=new U(new hs(1.4,.05,6,32),_);y.rotation.x=Math.PI/2,y.scale.set(1.4,1,.7),y.position.set(1.2,.06,8),this.scene.add(y);let b=this.textPlane(`~ MIA, 8`,`#eef2f8`,1.6,.5,50);b.rotation.x=-Math.PI/2,b.position.set(2.2,.07,6);let x=new K({color:5915442,roughness:1});for(let e=0;e<10;e++){let t=-6-e*3;this.plain.push(this.box(24,-.1,t,3,.2,2.4,x,!1));for(let e of[22.6,25.4]){let n=p_(e,t);this.plain.push(this.box(e,n/2,t,.2,-n+.2,.2,x,!1))}}}crackTexture(){let e=document.createElement(`canvas`);e.width=e.height=512;let t=e.getContext(`2d`);t.fillStyle=`#ffffff`,t.fillRect(0,0,512,512);let n=512/9,r=[];for(let e=0;e<81;e++)r.push([(e%9+.2+Math.random()*.6)*n,(Math.floor(e/9)+.2+Math.random()*.6)*n]);t.strokeStyle=`#8a7058`,t.lineWidth=3,t.beginPath();for(let e=0;e<9;e++)for(let n=0;n<9;n++){let[i,a]=r[e*9+n],o=r[e*9+(n+1)%9],s=r[(e+1)%9*9+n];for(let r of[-512,0,512])for(let c of[-512,0,512])t.moveTo(i+r,a+c),t.lineTo(o[0]+(n===8?512:0)+r,o[1]+c),t.moveTo(i+r,a+c),t.lineTo(s[0]+r,s[1]+(e===8?512:0)+c)}t.stroke();let i=new Na(e);return i.wrapS=i.wrapT=u,i.colorSpace=et,i}buildGroundColliders(){let e=(e,t,n,r,i=0)=>this.colliders.push(Z((e+t)/2,i-.5,(n+r)/2,t-e,1,r-n)),t=qg.x+3,n=Gg.z+Kg.rz,r=Gg.z-Kg.rz;e(-t,t,n,n+24),e(-t,t,n+24,qg.south+3),e(-t,t,qg.north-3,r);let i=e=>Kg.rx*Math.sqrt(Math.max(0,1-((e-Gg.z)/Kg.rz)**2)),a=(n-r)/36;for(let r=0;r<36;r++){let o=n-r*a,s=o-a,c=Math.max(0,Math.min(i(s),i(o))-1);e(-t,Gg.x-c,s,o),e(Gg.x+c,t,s,o)}e(Gg.x-Gg.rx,Gg.x+Gg.rx,Gg.z-Gg.rz,Gg.z+Gg.rz,-Gg.depth);let o=(e,t,n,r)=>this.colliders.push(Z(e,15,t,n,30,r)),s=qg.south-qg.north,c=(qg.south+qg.north)/2;o(-qg.x-.5,c,1,s),o(qg.x+.5,c,1,s),o(0,qg.south+.5,qg.x*2,1),o(0,qg.north-.5,qg.x*2,1)}buildLakeWire(){let e=Kg.segments,t=t=>{let n=t/e*Math.PI*2;return[Gg.x+Math.cos(n)*Kg.rx,Gg.z+Math.sin(n)*Kg.rz]},n=[],r=[],i=[],a=.34,o=0,s=t(0);for(let c=0;c<=e;c++){let[l,u]=t(c);if(o+=Math.hypot(l-s[0],u-s[1]),s=[l,u],n.push(l,0,u,l,Kg.height,u),r.push(o/a,0,o/a,Kg.height/a),c<e){let e=c*2;i.push(e,e+1,e+2,e+1,e+3,e+2)}}let c=new Ur;c.setAttribute(`position`,new H(n,3)),c.setAttribute(`uv`,new H(r,2)),c.setIndex(i),c.computeVertexNormals(),this.scene.add(new U(c,new K({map:this.wireTexture(),transparent:!0,depthWrite:!1,side:2,roughness:.6,metalness:.4})));let l=new na(new G(.06,.07,Kg.height+.7,8),new K({color:8160392,roughness:.55,metalness:.5}),Math.floor(e/3)),u=new z;for(let e=0;e<l.count;e++){let[n,r]=t(e*3);u.makeTranslation(n,(Kg.height+.7)/2,r),l.setMatrixAt(e,u)}this.scene.add(l);let d=new da({color:2762016});for(let n of[Kg.height+.2,Kg.height+.42,Kg.height+.64]){let r=[];for(let i=0;i<e;i++){let[e,a]=t(i);r.push(new L(e,n,a))}this.scene.add(new wa(new Ur().setFromPoints(r),d))}for(let n=0;n<e;n++){let[e,r]=t(n),[i,a]=t(n+1);this.colliders.push(Z((e+i)/2,Kg.wallHeight/2,(r+a)/2,Math.abs(i-e)+.5,Kg.wallHeight,Math.abs(a-r)+.5))}let f=new K({color:2893344,roughness:.9});for(let e of[1.15,2,.4,2.75,-.4,-2.75,-1.15,-2]){let t=Math.cos(e)/Kg.rx,n=Math.sin(e)/Kg.rz,r=Math.atan2(t,n),i=Gg.x+Math.cos(e)*Kg.rx*1.002,a=Gg.z+Math.sin(e)*Kg.rz*1.002,o=this.box(i,1.9,a,3,.8,.06,f,!1);o.rotation.y=r;let s=this.textPlane(`KEEP OUT`,`#ffb454`,2.8,.7,64);s.position.set(i+Math.sin(r)*.05,1.9,a+Math.cos(r)*.05),s.rotation.y=r}}wireTexture(){let e=document.createElement(`canvas`);e.width=e.height=128;let t=e.getContext(`2d`);t.strokeStyle=`#7c8084`,t.lineWidth=7,t.beginPath(),t.moveTo(0,0),t.lineTo(128,128),t.moveTo(128,0),t.lineTo(0,128),t.stroke();let n=new Na(e);return n.wrapS=n.wrapT=u,n.colorSpace=et,n.anisotropy=8,n}buildOrchard(){for(let[e,t,n]of[[-68,-2,6],[66,-4,5],[-106,-38,6.5],[110,-52,7],[-114,-88,5.5],[104,-104,6],[-86,-130,6.5],[84,-132,5],[-32,-162,7],[34,-180,6],[-38,-214,6],[30,-228,5],[-22,-170,6.5],[24,-186,6],[-6,-208,5.5],[46,-160,6],[-34,100,6],[36,70,5.5],[-31,54,6.5],[35,118,6]]){let r=new K({color:3943970,roughness:1}),i=new U(new G(.25,.5,n,8),r);i.position.set(e,n/2,t),this.scene.add(i),this.colliders.push(Z(e,n/2,t,1,n,1));for(let i=0;i<4;i++){let a=new U(new G(.05,.13,n*.55,6),r);a.position.set(e,n*(.55+i*.1),t),a.rotation.z=(i%2?1:-1)*(.6+i*.12),a.rotation.y=i*1.7,a.translateY(n*.24),this.scene.add(a)}}}buildVillage(){let e=new K({color:9073760,roughness:.9}),t=new K({color:6179388,roughness:.9}),n=new K({color:2365448,emissive:16760944,emissiveIntensity:1.3}),r=Math.PI/2;[{x:-17,z:108,ry:r+.05,hasKid:!1,door:6044202,sign:[`WE LIVE`,`HERE`]},{x:17,z:102,ry:-r-.04,hasKid:!0,door:4151900,sign:[`CHILD`,`TRYING TO`,`SLEEP`]},{x:-17,z:88,ry:r-.04,hasKid:!1,door:6959152,sign:[`FOR SALE`]},{x:17,z:82,ry:-r+.05,hasKid:!1,door:4868658,sign:null},{x:-17,z:68,ry:r+.03,hasKid:!1,door:6044202,sign:null},{x:17,z:62,ry:-r-.03,hasKid:!1,door:4151900,sign:[`FOR SALE`]},{x:-17,z:48,ry:r-.05,hasKid:!1,door:6959152,sign:[`WHERE DID`,`THE LAKE`,`GO?`]},{x:17,z:42,ry:-r+.04,hasKid:!1,door:4868658,sign:[`MOVED`,`AWAY`]}].forEach(({x:r,z:i,ry:a,hasKid:o,door:s,sign:c},l)=>{let u=new B,d=new U(new W(7,5,6),e);d.position.y=2;let f=new U(new za(5.6,3,4),t);f.position.y=6,f.rotation.y=Math.PI/4,u.add(d,f),this.plain.push(d,f),this.shakers.push({obj:f,base:f.position.clone(),baseRot:f.rotation.clone(),amp:.9,phase:l*2.3+1});let p=new U(new W(1.1,2.3,.08),new K({color:s,roughness:.8}));p.position.set(0,1.15,3.03);let m=new U(new W(1.7,.16,.7),new K({color:9208948,roughness:1}));m.position.set(0,.08,3.35),u.add(p,m),this.plain.push(p,m);let h=new U(new us(1.1,1.3),n);h.position.set(-1.7,2.4,3.02);let g=h.clone();g.position.x=1.7,u.add(h,g),this.plain.push(h,g);let _=new q(16760944,6,9,2);if(_.position.set(0,2.4,3.4),u.add(_),o){let e=new U(new W(.5,.9,.2),new K({color:1708812}));e.position.set(1.7,2.25,2.9),u.add(e),this.plain.push(e)}u.position.set(r,0,i),u.rotation.y=a,this.scene.add(u),this.shakers.push({obj:u,base:u.position.clone(),baseRot:u.rotation.clone(),amp:1,phase:l*1.7});let[v,y]=[Math.abs(Math.cos(a)),Math.abs(Math.sin(a))];this.colliders.push(Z(r,2.25,i,7.4*v+6.4*y,4.5,7.4*y+6.4*v)),this.buildYard(r,i,a,l,c)}),this.paintedSign(-8.2,74,1,2.8,1.4,1.75,[`PLEASE —`,`THE NOISE`],`#d9b23a`,`#2a1c10`),this.plain.push(this.box(6.2,3,72,.18,6,.18,$.pipe));let i=new U(new W(.8,.25,.5),new K({color:2365444,emissive:16767392,emissiveIntensity:1.4}));i.position.set(6.2,6,72),this.scene.add(i),this.plain.push(i),this.streetLamp=new q(16767392,22,22,1.8),this.streetLamp.position.set(4.7,6,72),this.addLight(this.streetLamp);let a=new K({color:10110008,roughness:.6,metalness:.3});for(let e of[-.7,.7]){let t=this.detached(new hs(.42,.05,8,18),a);t.position.set(-5.6+e,.1,57),t.rotation.x=.4,this.scene.add(t),this.plain.push(t)}}buildYard(e,t,n,r,i){let{left:a,right:o,back:s,front:c,gate:l}=Qg,u=Math.cos(n),d=Math.sin(n),f=(n,r)=>[e+n*u+r*d,t-n*d+r*u],p=new B;p.position.set(e,0,t),p.rotation.y=n,this.scene.add(p);let m=o-a,h=c-s,g=new U(new W(m,.08,h),new K({map:this.lawnTexture(m,h,r),roughness:1}));g.position.set((a+o)/2,.02,(c+s)/2),p.add(g),this.groundLit.push(g);let _=new na(new za(.055,.32,4),new K({roughness:1}),260),v=new Vn,y=new V,b=this.seeded(r+11);for(let e=0;e<260;e++){let t=a+.3+b()*(m-.6),n=s+.3+b()*(h-.6);Math.abs(t)<3.8&&n<3.3&&(n=3.3+b()*(c-3.6));let r=.7+b()*.9;v.position.set(Math.abs(t)<.9&&n>3?t+Math.sign(t||1)*1:t,.14*r,n),v.rotation.set((b()-.5)*.5,b()*6,(b()-.5)*.5),v.scale.setScalar(r),v.updateMatrix(),_.setMatrixAt(e,v.matrix),_.setColorAt(e,y.setHSL(.17+b()*.08,.42,.26+b()*.14))}p.add(_);let x=new K({color:10261636,roughness:1});for(let e=4.1;e<c;e+=.85){let t=new U(new W(1.05+b()*.2,.06,.68),x);t.position.set((b()-.5)*.14,.07,e),t.rotation.y=(b()-.5)*.14,p.add(t),this.groundLit.push(t)}let S=.9,C=[[a,s,o,s],[o,s,o,c],[a,c,a,s],[a,c,-l,c],[l,c,o,c]],w=[];for(let[e,t,n,r]of C){let i=Math.hypot(n-e,r-t),a=Math.atan2(t-r,n-e),o=(e+n)/2,s=(t+r)/2;for(let e of[.32,.68])w.push({x:o,y:e,z:s,sx:i,sy:.06,sz:.03,ry:a,tilt:0});let c=Math.round(i/.34);for(let i=0;i<=c;i++){let o=i/c,s=i===0||i===c;if(!s&&b()<.04)continue;let l=s?1:S-.06+b()*.08;w.push({x:e+(n-e)*o,y:l/2,z:t+(r-t)*o,sx:s?.12:.09,sy:l,sz:s?.12:.025,ry:a,tilt:!s&&b()<.08?(b()-.5)*.3:0})}let l=Math.max(1,Math.round(i/1));for(let i=0;i<l;i++){let[a,o]=f(e+(n-e)*i/l,t+(r-t)*i/l),[s,c]=f(e+(n-e)*(i+1)/l,t+(r-t)*(i+1)/l);this.colliders.push(Z((a+s)/2,S/2,(o+c)/2,Math.abs(s-a)+.12,S,Math.abs(c-o)+.12))}}let T=new K({color:[13616816,12169370,1322e4,11050634][r%4],roughness:.95}),E=new na(new W(1,1,1),T,w.length);if(w.forEach((e,t)=>{v.position.set(e.x,e.y,e.z),v.rotation.set(0,e.ry,e.tilt),v.scale.set(e.sx,e.sy,e.sz),v.updateMatrix(),E.setMatrixAt(t,v.matrix)}),p.add(E),this.shakers.push({obj:E,base:E.position.clone(),baseRot:E.rotation.clone(),amp:.3,phase:r*3.1+2}),i){let[e,t]=f(o-2.2,c-1.1);this.paintedSign(e,t,n,1.5,.95,1.05,i,[`#e0d8c4`,`#c8d4d0`,`#e0d8c4`,`#d8c8a8`][r],`#2a1c10`)}}seeded(e){let t=e*2654435+1;return()=>(t=(t*1664525+1013904223)%4294967296,t/4294967296)}lawnTexture(e,t,n){let r=this.seeded(n+3),i=document.createElement(`canvas`);i.width=Math.round(e*32),i.height=Math.round(t*32);let a=i.getContext(`2d`);a.fillStyle=`#6b7a35`,a.fillRect(0,0,i.width,i.height);for(let e=0;e<26;e++){let t=(.5+r()*1.5)*32,n=e%3==0,o=a.createRadialGradient(0,0,0,0,0,t);o.addColorStop(0,n?`rgba(122,98,62,0.85)`:`rgba(142,146,62,0.6)`),o.addColorStop(1,n?`rgba(122,98,62,0)`:`rgba(142,146,62,0)`),a.setTransform(1,0,0,1,r()*i.width,r()*i.height),a.fillStyle=o,a.fillRect(-t,-t,t*2,t*2)}a.setTransform(1,0,0,1,0,0),a.lineWidth=1;for(let e=0;e<2600;e++){let e=r()*i.width,t=r()*i.height;a.strokeStyle=`hsl(${60+r()*30}, 40%, ${20+r()*24}%)`,a.beginPath(),a.moveTo(e,t),a.lineTo(e+(r()-.5)*5,t-3-r()*5),a.stroke()}let o=new Na(i);return o.colorSpace=et,o}paintedSign(e,t,n,r,i,a,o,s,c){let l=new K({color:4863268,roughness:1}),u=a+i/2+.12,d=r/2-r*.14,f=new B;f.position.set(e,0,t),f.rotation.y=n,this.scene.add(f);for(let r of[-1,1]){let i=new U(new W(.13,u,.13),l);i.position.set(r*d,u/2,-.07),f.add(i);let[a,o]=[e+r*d*Math.cos(n)-.07*Math.sin(n),t-r*d*Math.sin(n)-.07*Math.cos(n)];this.colliders.push(Z(a,u/2,o,.2,u,.2))}let p=document.createElement(`canvas`);p.width=512,p.height=Math.round(512*i/r);let m=p.getContext(`2d`),h=p.width,g=p.height;m.fillStyle=s,m.fillRect(0,0,h,g);let _=this.seeded(o.join(``).length+5);m.fillStyle=`rgba(40,24,10,0.1)`;for(let e=0;e<90;e++)m.fillRect(_()*h,_()*g,30+_()*90,1+_()*2);m.fillStyle=`rgba(40,24,10,0.55)`;for(let e=1;e<3;e++)m.fillRect(0,g*e/3,h,2);m.fillStyle=`rgba(30,18,8,0.8)`;for(let e of[.05,.95])for(let t of[.15,.85])m.beginPath(),m.arc(h*e,g*t,5,0,Math.PI*2),m.fill();let v=Math.max(...o.map(e=>e.length)),y=Math.min(h*.86/(v*.6),g*.84/o.length/1.08),b=()=>`bold ${y}px "Segoe Print", "Comic Sans MS", Consolas, sans-serif`;m.font=b();let x=Math.max(...o.map(e=>m.measureText(e).width));x>h*.84&&(y*=h*.84/x),m.font=b(),m.textAlign=`center`,m.textBaseline=`middle`,m.fillStyle=c,o.forEach((e,t)=>{let n=g/2+(t-(o.length-1)/2)*y*1.08;m.setTransform(1,0,0,1,h/2,n),m.rotate((_()-.5)*.05),m.fillText(e,0,0)}),m.setTransform(1,0,0,1,0,0);let S=new Na(p);S.colorSpace=et,S.anisotropy=4;let C=new K({color:3943454,roughness:1}),w=new K({map:S,roughness:.9,emissive:16777215,emissiveMap:S,emissiveIntensity:.18}),T=new U(new W(r,i,.05),[C,C,C,C,w,C]);T.position.set(0,a,0),T.rotation.z=(_()-.5)*.04,f.add(T),this.shakers.push({obj:T,base:T.position.clone(),baseRot:T.rotation.clone(),amp:.35,phase:e})}fenceRun(e,t,n,r,i){let a=Math.hypot(n-e,r-t),o=Math.max(1,Math.round(a/8));for(let s=0;s<=o;s++){let c=e+(n-e)*s/o,l=t+(r-t)*s/o;this.box(c,2.2,l,.18,4.4,.18,$.pipe);let u=new U(new hs(.35,.04,6,16),$.pipe);if(u.position.set(c,4.6,l),this.scene.add(u),s===o)break;let d=new U(new us(a/o,4),i);d.position.set(c+(n-e)/o/2,2.2,l+(r-t)/o/2),d.rotation.y=Math.atan2(t-r,n-e),this.scene.add(d)}this.colliders.push(Z((e+n)/2,3,(t+r)/2,Math.abs(n-e)+.4,6,Math.abs(r-t)+.4))}buildGate(){let e=-250,t=new K({color:10134702,transparent:!0,opacity:.18,side:2,roughness:.4,metalness:.8});this.fenceRun(-124,e,-4,e,t),this.fenceRun(4,e,Yg.x,e,t),this.fenceRun(Yg.x,e,Yg.x,Xg.south,t),this.fenceRun(Yg.x,-308,Yg.x,qg.north-.5,t),this.box(-3.5,2.4,e,.3,4.8,.3,$.pipe),this.box(3.5,2.4,e,.3,4.8,.3,$.pipe),this.box(0,4.6,e,7.3,.3,.3,$.pipe,!1);for(let t=-3.1;t<3.2;t+=.4)this.box(t,2.2,e,.07,4.4,.07,$.pipe,!1);for(let t of[.5,2.2,3.9])this.box(0,t,e,6.9,.1,.1,$.pipe,!1);for(let e=-2;e<=2;e++){let t=new U(new hs(.13,.03,6,12),$.pipe);t.position.set(e*.18,1.6,-249.9),t.rotation.y=e%2?Math.PI/2:0,this.scene.add(t)}this.colliders.push(Z(0,3,e,8,6,.4));let n=new K({color:2893344,roughness:.9});this.box(0,3,-249.88,6.2,1.4,.05,n,!1),this.textPlane(`AUTHORIZED PERSONNEL ONLY`,`#ffd96e`,6,3,34).position.set(0,3.35,-249.8),this.textPlane(`SERVICE ENTRANCE: EAST SIDE →`,`#e8d8b8`,6,3,30).position.set(0,2.65,-249.74)}buildSideDoor(){let{x:e,z:t}=Yg,n=new K({color:4608606,roughness:.5,metalness:.7});this.box(e+.04,2.4,t,.12,4.8,4.2,$.pipe,!1),this.box(e+.11,1.3,t,.12,2.6,1.5,n,!1),this.box(e+.1,1.3,t-.85,.2,2.8,.2,$.pipe,!1),this.box(e+.1,1.3,t+.85,.2,2.8,.2,$.pipe,!1),this.box(e+.1,2.7,t,.2,.2,1.9,$.pipe,!1),this.box(e+.16,1.25,t-.55,.08,.1,.22,$.pipe,!1);let r=new U(new W(.3,.14,.5),new K({color:2365444,emissive:16767392,emissiveIntensity:1.4}));r.position.set(e+.25,3.05,t),this.scene.add(r);let i=new q(16767392,12,12,1.8);i.position.set(e+.8,2.9,t),this.addLight(i);let a=this.textPlane(`FACILITY 01 — SERVICE`,`#e8d8b8`,4,2,40);a.position.set(e+.13,3.7,t),a.rotation.y=Math.PI/2}addBoxes(e,t){let n=new na(new W(1,1,1),e,t.length);t.forEach((e,t)=>n.setMatrixAt(t,e)),this.scene.add(n)}rackFront(e,t){let n=n=>{let r=document.createElement(`canvas`);r.width=64,r.height=192;let i=r.getContext(`2d`);i.fillStyle=n?`#000`:`#232c36`,i.fillRect(0,0,64,192);let a=e,o=()=>(a=a*16807%2147483647)/2147483647;for(let e=0;e<12;e++){let r=3+186/12*e;n||(i.fillStyle=`#39444f`,i.fillRect(4,r,56,192/12-5));for(let e=0;e<4;e++){let a=t[Math.floor(o()*t.length)];n&&o()>.25&&(i.fillStyle=a,i.fillRect(8+e*8,r+4,5,4))}}let s=new Na(r);return s.colorSpace=et,s};return new K({map:n(!1),emissive:16777215,emissiveMap:n(!0),emissiveIntensity:1.5,roughness:.6,metalness:.3})}buildServerRows(e){let t=[this.rackFront(11,[`#41f2d6`,`#41f2d6`,`#35ff9d`]),this.rackFront(29,[`#35ff9d`,`#41f2d6`,`#b8fff2`]),this.rackFront(47,[`#41f2d6`,`#35ff9d`,`#ffb454`])],n={w:1.2,h:3.4,d:1.2,step:1.35},r=[-268,-274,-280,-286,-292,-298,-304],i=t.map(()=>[]),a=[],o=[],s=(e,t,n,r,i,a)=>new z().makeScale(r,i,a).setPosition(e,t,n),c=Math.floor((Xg.east-Xg.west-10)/n.step),l=c*n.step,u=-l/2+n.step/2;for(let d=0;d<Xg.floors;d++){let f=d*e+.1;r.forEach((e,r)=>{for(let a=0;a<c;a++)i[(a*7+r*5+d*3+a*r%4)%t.length].push(s(u+a*n.step,f+n.h/2,e,n.w,n.h,n.d));for(let t of[-1,1])a.push(s(t*l/2,f+n.h/2,e,.08,n.h*.8,.5))});for(let t=0;t<r.length-1;t++)o.push(s(0,f+e-.45,(r[t]+r[t+1])/2,l,.12,.3))}i.forEach((e,n)=>this.addBoxes([$.rack,$.rack,$.rack,$.rack,t[n],t[n]],e)),this.addBoxes($.stripTeal,a),this.addBoxes(new yi({color:13172724}),o)}buildHallFrame(e,t){let n=[],r=(e,t,r,i,a,o,s)=>n.push(u_(new L(e,t,r),new L(i,a,o),s)),i=.3,a=Xg.west+i,o=Xg.east-i,s=Xg.south-i,c=Xg.north+i,l=Xg.height,u=(o-a)/10,d=(c-s)/4;for(let e=0;e<=10;e++){let t=a+e*u;if(r(t,0,s,t,l,s,.5),r(t,0,c,t,l,c,.5),r(t,l,s,t,l,c,.4),e===10)break;for(let e=1;e<4;e++){let n=t+e*u/4;r(n,0,s,n,l,s,.1),r(n,0,c,n,l,c,.1),r(n,l,s,n,l,c,.1)}}for(let e=0;e<=4;e++){let t=s+e*d;if(r(a,0,t,a,l,t,.5),r(o,0,t,o,l,t,.5),r(a,l,t,o,l,t,.4),e===4)break;for(let e=1;e<4;e++){let n=t+e*d/4;r(a,0,n,a,l,n,.1),r(o,0,n,o,l,n,.1)}}for(let e=0;e<=Xg.floors;e++){let n=Math.min(l,e*t+.15),i=e===0||e===Xg.floors?.5:.3;r(a,n,s,o,n,s,i),r(a,n,c,o,n,c,i),r(a,n,s,a,n,c,i),r(o,n,s,o,n,c,i)}for(let e of[0,4,5,9]){let t=a+e*u;r(t,0,s,t+u,l,s,.22),r(t+u,0,s,t,l,s,.22)}for(let e of[0,3]){let t=s+e*d;r(o,0,t,o,l,t+d,.22),r(o,0,t+d,o,l,t,.22)}this.addBoxes(e,n)}buildTower(e,t,n){let{z:r,height:i,topR:a,bottomR:o}=Zg,s=new U(new G(a,o,i,24,1,!0),n);s.position.set(e,i/2,r),this.scene.add(s);let c=[];for(let t=0;t<12;t++){let n=t/12*Math.PI*2,s=new L(e+Math.cos(n)*o,0,r+Math.sin(n)*o),l=new L(e+Math.cos(n)*a,i,r+Math.sin(n)*a);c.push(u_(s,l,.28))}this.addBoxes(t,c);for(let n of[.25,.5,.75,1]){let s=new U(new hs(o+(a-o)*n,.16,6,36),t);s.rotation.x=Math.PI/2,s.position.set(e,i*n,r),this.scene.add(s)}}buildSteam(){let e=document.createElement(`canvas`);e.width=e.height=128;let t=e.getContext(`2d`),n=t.createRadialGradient(64,64,4,64,64,64);n.addColorStop(0,`rgba(255,255,255,0.75)`),n.addColorStop(.5,`rgba(255,255,255,0.3)`),n.addColorStop(1,`rgba(255,255,255,0)`),t.fillStyle=n,t.fillRect(0,0,128,128);let r=new Na(e);Zg.xs.forEach((e,t)=>{for(let n=0;n<9;n++){let i=new li(new Yr({map:r,color:14865602,transparent:!0,depthWrite:!1,opacity:0}));this.scene.add(i),this.steam.push({sprite:i,x:e,t:n/9+t*.07,drift:.7+.5*Math.sin(n*2.3+t)})}})}buildBugs(){let e=new Ur;e.setAttribute(`position`,new kr(new Float32Array(48),3)),this.bugs=new Aa(e,new Ta({color:1708554,size:.05,fog:!0})),this.bugs.frustumCulled=!1,this.scene.add(this.bugs)}posterTexture(){let e=document.createElement(`canvas`);e.width=512,e.height=640;let t=e.getContext(`2d`);t.fillStyle=`#d6cba8`,t.fillRect(0,0,512,640),t.fillStyle=`#6f8a8a`,t.fillRect(0,0,512,400),t.fillStyle=`#e4d6b4`,t.beginPath(),t.arc(256,210,130,0,Math.PI*2),t.fill(),t.strokeStyle=`#3a2e20`,t.lineWidth=9,t.beginPath(),t.arc(256,225,78,.2,Math.PI-.2),t.stroke(),t.lineWidth=5,t.strokeStyle=`#2a2018`;for(let e of[205,307]){t.beginPath();for(let n=0;n<26;n++)t.lineTo(e-38+n%2*76+Math.sin(n*3.1)*6,150+n*3.1+Math.cos(n)*3);t.stroke()}t.fillStyle=`#2a2018`,t.textAlign=`center`,t.font=`bold 50px Consolas, monospace`,t.fillText(`YOUR FUTURE`,256,470),t.fillText(`IS IN`,256,530),t.fillText(`GOOD HANDS`,256,590),t.fillStyle=`rgba(90,60,30,0.14)`;for(let e=0;e<14;e++)t.beginPath(),t.arc(e*137%512,e*211%640,18+e%5*16,0,Math.PI*2),t.fill();t.fillStyle=`rgba(40,30,20,0.18)`,t.fillRect(0,318,512,3);let n=new Na(e);return n.colorSpace=et,n}buildDatacenter(){let{west:e,east:t,south:n,north:r,height:i,floors:a}=Xg,o=t-e,s=n-r,c=(e+t)/2,l=(n+r)/2,u=i/a,d=new K({color:9279906,roughness:.45,metalness:.55,emissive:2764338,emissiveIntensity:.5}),f=new K({color:13625070,roughness:.08,metalness:.2,transparent:!0,opacity:.14,side:2,depthWrite:!1});this.colliders.push(Z(c,i/2,l,o,i,s));let p=(e,t,n,r,i,a,o=0)=>{let s=new U(new us(r,i),f);s.position.set(e,t,n),s.rotation.set(o,a,0),this.scene.add(s)},m=.08;p(c,i/2,n-m,o,i,0),p(c,i/2,r+m,o,i,0),p(e+m,i/2,l,s,i,Math.PI/2),p(t-m,i/2,l,s,i,Math.PI/2),p(c,i-m,l,o,s,0,-Math.PI/2);let h=new K({color:4871260,roughness:.7,metalness:.4});this.box(c,.05,l,o-.2,.1,s-.2,h,!1);for(let e=1;e<a;e++)this.box(c,e*u,l,o-.6,.2,s-.6,h,!1);this.buildServerRows(u),this.buildHallFrame(d,u),this.track(()=>{for(let e of Zg.xs)this.buildTower(e,d,f)});for(let[e,t]of[[0,n-4],[52,l]]){let n=new q(4322006,26,60,1.8);n.position.set(e,8,t),this.addLight(n)}}detached(e,t){return new U(e,t)}buildElevator(){let e=$g,t=new K({color:9213852,roughness:.5,metalness:.35}),n=new K({color:12101752,roughness:.75,metalness:.15}),r=new K({color:1316892,roughness:.7}),i=this.scene.children.length;this.box(e,-.5,0,6,1,6,new K({color:5002072,roughness:.8,metalness:.2})),this.box(e,5.5,0,6,1,6,t),this.box(e-3,2.5,0,.4,6,6,t),this.box(203,2.5,0,.4,6,6,t),this.box(e,2.5,3,6,6,.4,t),this.box(e-2,2.5,-3,2,6,.4,t),this.box(202,2.5,-3,2,6,.4,t),this.plain.push(...this.scene.children.slice(i));let a=new K({color:6056566,roughness:.65,metalness:.35}),o={w:.66,bottom:1.3,top:4.05},s=(1.05-o.w)/2;for(let t of[-1,1]){let n=new B,r=(e,t,r,i)=>{let o=new U(new W(r,i,.25),a);o.position.set(e,t,0),n.add(o)};r(-(o.w+s)/2,2.5,s,5),r((o.w+s)/2,2.5,s,5),r(0,o.bottom/2,o.w,o.bottom),r(0,(o.top+5)/2,o.w,5-o.top);let i=new U(new us(o.w,o.top-o.bottom),new yi({color:11065568,transparent:!0,opacity:.1,depthWrite:!1,fog:!1}));i.position.set(0,(o.top+o.bottom)/2,.02),n.add(i),n.position.set(e+t*.5,0,-2.95),this.scene.add(n),this.doors.push({leaf:n,side:t})}this.colliders.push(Z(e,2.5,-3,2.2,6,.5)),this.box(e-1.08,2.5,-2.74,.16,5,.12,n,!1),this.box(201.08,2.5,-2.74,.16,5,.12,n,!1),this.box(e,.015,-2.5,2.3,.03,.5,$.stripAmber,!1),this.shaftCanvas=document.createElement(`canvas`),this.shaftCanvas.width=e_.w*e_.px,this.shaftCanvas.height=e_.h*e_.px,this.shaftTex=new Na(this.shaftCanvas),this.shaftTex.colorSpace=et,this.shaftTex.generateMipmaps=!1,this.shaftTex.minFilter=g,this.drawShaft(0);let c=new U(new us(e_.w,e_.h),new yi({map:this.shaftTex,fog:!1}));c.position.set(e,2.5,-3.3),this.scene.add(c),this.box(e,4.62,-2.72,1.5,.72,.06,r,!1),this.counterCanvas=document.createElement(`canvas`),this.counterCanvas.width=256,this.counterCanvas.height=128,this.counterTex=new Na(this.counterCanvas),this.counterTex.colorSpace=et,this.drawCounter();let l=new U(new us(1.3,.65),new yi({map:this.counterTex,transparent:!0,fog:!1}));l.position.set(e,4.62,-2.68),this.scene.add(l),this.box(201.85,2.3,-2.76,.86,2.3,.08,n,!1);let u=new U(new us(.76,2.2),new yi({map:this.buttonPanelTexture(),color:14211288,fog:!1}));u.position.set(201.85,2.3,-2.71),this.scene.add(u);for(let t of[-1,1])this.plain.push(this.box(e+t*2.72,1.1,.1,.08,.08,4.8,n,!1));this.plain.push(this.box(e,4.97,0,3,.04,1.6,new yi({color:16773848,fog:!1}),!1));let d=new U(new us(1.96,2.46),new yi({map:this.posterTexture(),color:13157044,fog:!1}));d.position.set(e,2.85,2.72),d.rotation.y=Math.PI,this.scene.add(d);let f=this.textPlane(`IN CASE OF EMERGENCY, DO NOT PANIC.`,`#2a1c08`,2.4,.4,26);f.position.set(e-2.7,1.8,0),f.rotation.y=Math.PI/2;let p=new q(16773848,26,14,1.6);p.position.set(e,4.6,0),this.addLight(p),this.cabLight=p,this.passingLight=new q(16763274,t_,7,1.8),this.passingLight.position.set(e,2.6,-.8),this.scene.add(this.passingLight)}buttonPanelTexture(){let e=document.createElement(`canvas`);e.width=228,e.height=660;let t=e.getContext(`2d`);t.fillStyle=`#23282c`,t.fillRect(0,0,e.width,e.height),t.textAlign=`center`,t.textBaseline=`middle`;let n=(e,n,r,i)=>{t.beginPath(),t.arc(e,n,37,0,Math.PI*2),t.fillStyle=i?`#ffb454`:`#aeb6ba`,t.fill(),t.lineWidth=5,t.strokeStyle=i?`#ffe2b0`:`#5b6367`,t.stroke(),t.fillStyle=`#14181c`,t.font=`bold 32px Consolas, monospace`,t.fillText(r,e,n+1)};[[`42`,`41`],[`40`,`30`],[`20`,`10`],[`2`,`1`],[`0`,`▼`]].forEach((e,t)=>{e.forEach((e,r)=>n(62+r*104,56+t*104,e,e===`▼`))}),n(62,576,`◄►`,!1),n(166,576,`►◄`,!1);let r=new Na(e);return r.colorSpace=et,r}drawShaft(e){let t=this.shaftCanvas.getContext(`2d`),{width:n,height:r}=this.shaftCanvas,i=e_.floorHeight*e_.px;t.fillStyle=`#39424a`,t.fillRect(0,0,n,r),t.fillStyle=`#20262b`;for(let e of[.17,.5,.83])t.fillRect(n*e-5,0,10,r);t.textAlign=`center`,t.textBaseline=`middle`;let a=Math.floor(e)-1;for(let o=a;o<a+4;o++){let a=r*.52+(o-e)*i;t.fillStyle=`#1b2025`,t.fillRect(0,a+i*.3,n,i*.14),t.fillStyle=`#ffd9a0`,t.fillRect(0,a+i*.26,n,7),t.fillStyle=`#e8c070`,t.font=`bold 50px Consolas, monospace`;let s=String(c_(42-o));for(let e of[n/2-58,n/2+58])t.fillText(s,e,a)}this.shaftTex.needsUpdate=!0}setDescent(e,t){this.drawShaft(e);let n=l_(t);for(let e of this.doors)e.leaf.position.x=$g+e.side*(.5+(1-n));let r=Math.abs((e%1+1)%1-.5)*2;this.passingLight.intensity=e>0?t_*(.7+.5*r*r):t_*.7}drawCounter(){let e=this.counterCanvas.getContext(`2d`);e.clearRect(0,0,256,128),e.font=`bold 84px Consolas, monospace`,e.textAlign=`center`,e.textBaseline=`middle`,e.fillStyle=`#ffb454`,e.fillText(String(this.counterValue),128,64),this.counterTex.needsUpdate=!0}setCounter(e){e=c_(e),e!==this.counterValue&&(this.counterValue=e,this.drawCounter())}openSecurityDoor(){}shakeVillage(e){for(let t of this.shakers){let n=(.003+.011*l_((Math.sin(e*.7+t.phase)+Math.sin(e*.31+t.phase*2))*.5+.35))*t.amp*Q.houseShake,r=e+t.phase;t.obj.position.set(t.base.x+n*(Math.sin(r*61)+.5*Math.sin(r*97)),t.base.y+n*.5*Math.sin(r*73),t.base.z+n*(Math.sin(r*53)+.5*Math.sin(r*89))),t.obj.rotation.set(t.baseRot.x+n*.06*Math.sin(r*47),t.baseRot.y,t.baseRot.z+n*.09*Math.sin(r*67))}}update(e,t){this.updateBase(e,t),this.streetLamp.intensity=18+Math.sin(t*2.1)*3+Math.sin(t*3.7)*1.5,this.shakeVillage(t);for(let e of this.steam){let n=(e.t+t*.014)%1;e.sprite.position.set(e.x+26*e.drift*n*n,Zg.height-1+46*n,Zg.z+6*e.drift*n),e.sprite.scale.setScalar(13+36*n),e.sprite.material.opacity=.42*l_(n/.1)*(1-n)**1.4}let n=this.bugs.geometry.attributes.position;for(let e=0;e<n.count;e++){let r=t*(1.3+e%5*.4)+e*2.4,i=.25+.18*Math.sin(t*.9+e);n.setXYZ(e,4.7+Math.cos(r)*i*1.6,5.95+Math.sin(r*1.7)*i*.7,72+Math.sin(r)*i)}n.needsUpdate=!0}},h_=`ptp.found`,g_=class{constructor(){X(this,`items`,[]);try{let e=JSON.parse(localStorage.getItem(h_)??`[]`);Array.isArray(e)&&(this.items=e.filter(e=>e&&typeof e.id==`string`))}catch{}}has(e){return this.items.some(t=>t.id===e)}add(e){if(this.has(e.id))return!1;this.items.push(e);try{localStorage.setItem(h_,JSON.stringify(this.items))}catch{}return!0}},__=class extends Ah{constructor(e){super(e),X(this,`crestPos`,new L(0,3.2,-112)),X(this,`radioNoteMeshes`,[]),this.peaceful=!0,this.outlineEnabled=!1,this.skyDome(15909024,16773336),this.buildMeadow(),this.buildLake(),this.buildCrest(),this.buildMotes(700,16773840,new L(60,14,90),new L(0,7,-60),.08),this.checkpoints={e_spawn:new L(0,1.05,4)},this.zone(`e1`,0,2,-10,26,5,6),this.zone(`e2`,0,2,-42,26,5,6),this.zone(`e3`,0,2,-74,26,5,6),this.zone(`e_crest`,0,4,-110,18,6,10)}buildMeadow(){let e=new K({color:8235112,roughness:.95}),t=new K({color:13152394,roughness:1});this.box(0,-.5,-60,160,1,180,e);for(let e=0;e<12;e++){let n=-e*9,r=Math.sin(e*.7)*4;this.box(r,.02,n,3.2,.06,9.6,t,!1)}let n=[15247560,15784080,12110064,15790312];for(let e=0;e<80;e++){let t=new K({color:n[e%n.length],emissive:n[e%n.length],emissiveIntensity:.12}),r=new U(new W(.12,.3,.12),t);r.position.set((Math.random()-.5)*90,.18,10-Math.random()*130),this.scene.add(r)}let r=new K({color:7229496,roughness:1});for(let[e,t,n]of[[-16,-24,5],[18,-38,6],[-22,-62,5.5],[24,-80,7],[-14,-96,6]]){let i=new U(new G(.35,.55,n,8),r);i.position.set(e,n/2,t),this.scene.add(i);let a=new U(new ms(n*.55,10,8),new K({color:6986322,roughness:.95}));a.position.set(e,n+n*.25,t),a.scale.y=.8,this.scene.add(a),this.colliders.push(Z(e,n/2,t,1.2,n,1.2))}let i=new K({color:11029050,roughness:.5,metalness:.4});for(let e of[-.7,.7]){let t=new U(new hs(.45,.05,8,20),i);t.position.set(-15+e,.5,-22.8),this.scene.add(t)}let a=new U(new W(1.5,.08,.08),i);a.position.set(-15,.75,-22.8),a.rotation.z=.25,this.scene.add(a),this.colliders.push(Z(-15,.55,-22.8,2.4,1.1,.3)),this.box(8,.6,-52,2.6,.18,.9,r),this.box(7,.3,-52,.18,.6,.9,r,!1),this.box(9,.3,-52,.18,.6,.9,r,!1);let o=this.box(8.3,.78,-52,.5,.12,.7,new K({color:2780746}),!1);o.rotation.y=.4;let s=this.textPlane(`DON'T PANIC`,`#f0e8c8`,.62,.2,30);s.rotation.x=-Math.PI/2,s.rotation.z=-.4,s.position.set(8.3,.85,-52)}buildLake(){let e=new K({color:4884664,roughness:.15,metalness:.1,emissive:10143976,emissiveIntensity:.15}),[t,n,r,i]=[78,-70,48,48*.65],a=new U(new G(r,r,.4,36),e);a.position.set(t,.1,n),a.scale.z=i/r,this.scene.add(a);for(let e=t-r+.5;e<81;e++){let a=(e-t)/r,o=2*i*Math.sqrt(1-a*a),s=Z(e,15,n,1,30,o);s.cameraPasses=!0,this.colliders.push(s)}let o=new K({color:7227958,roughness:.8}),s=new U(new W(2.2,1,5.5),o);s.position.set(48,.7,-58),s.rotation.y=.6,this.scene.add(s)}buildCrest(){let e=new K({color:8826992,roughness:.95});this.box(0,.5,-106,26,1.4,18,e),this.box(0,1.5,-112,20,1.4,12,e),this.box(0,2.4,-116,16,1.4,8,e);let t=new K({color:7229496,roughness:1}),n=new U(new G(.5,.6,.8,10),t);n.position.set(2.5,3.5,-115),this.scene.add(n);let r=new U(new W(.7,.45,.3),new K({color:9062970,roughness:.6}));r.position.set(2.5,4.1,-115),this.scene.add(r),this.colliders.push(Z(2.5,3.7,-115,1.1,1.25,1.1));for(let e=0;e<3;e++){let t=this.textPlane(`♪`,`#f0e8c8`,.45,.45,70);t.position.set(2.5+e*.5,4.7+e*.4,-115),this.radioNoteMeshes.push(t)}let i=new U(new ms(9,20,16),new yi({color:16771264}));i.position.set(-30,16,-210),this.scene.add(i);let a=new q(16769712,60,200,1.6);a.position.copy(i.position),this.addLight(a)}openSecurityDoor(){}update(e,t){this.updateBase(e,t),this.radioNoteMeshes.forEach((e,n)=>{e.position.y=4.7+n*.4+Math.sin(t*1.4+n)*.12;let r=e.material;r.opacity=.55+Math.sin(t*1.4+n)*.35})}},v_=[{id:`crowbar`,reach:()=>Q.crowbarReach,contact:()=>Q.crowbarContact,cooldown:()=>Q.crowbarCooldown,damage:()=>Q.crowbarDamage},{id:`fists`,reach:()=>Q.punchReach,contact:()=>Q.punchContact,cooldown:()=>Q.punchCooldown,damage:()=>Q.punchDamage}],y_=47,b_=1.5,x_=.25,S_=.8,C_=[.3,-.25,-.65],w_=[0,.45,-.45],T_={m1:{bg:1385008,fogDensity:.011,hemiSky:6982310,hemiGround:3490639,dirColor:8956100,dirIntensity:.75,ambient:.7},m2:{bg:1058335,fogDensity:.011,hemiSky:6464652,hemiGround:2900793,dirColor:8045736,dirIntensity:.75,ambient:.7},m3:{bg:1906229,fogDensity:.0075,hemiSky:9075386,hemiGround:3418952,dirColor:11902176,dirIntensity:.7,ambient:.65},m4:{bg:659488,fogDensity:.003,hemiSky:4873856,hemiGround:3823742,dirColor:16773848,dirIntensity:.85,ambient:.5},m5:{bg:2759696,fogDensity:.0065,hemiSky:11569760,hemiGround:4666660,dirColor:14722144,dirIntensity:.8,ambient:.7},m6:{bg:659480,fogDensity:.0065,hemiSky:5926532,hemiGround:2239286,dirColor:11063528,dirIntensity:.55,ambient:.6},prelude:{bg:1055274,fogDensity:.0026,hemiSky:4872826,hemiGround:1842726,dirColor:11191551,dirIntensity:.9,ambient:.55},epilogue:{bg:16175784,fogDensity:.002,hemiSky:16774368,hemiGround:9481332,dirColor:16774886,dirIntensity:1.2,ambient:.85}},E_={prelude:-20,m1:-16,m2:-16,m3:-16,m4:-16,m5:-60,m6:-40,epilogue:-20},D_=class e{constructor(e){X(this,`canvas`,void 0),X(this,`state`,`menu`),X(this,`mission`,void 0),X(this,`input`,new Zf),X(this,`mouseBusy`,()=>!1),X(this,`hazardMode`,()=>`normal`),X(this,`solidsOff`,()=>!1),X(this,`audio`,new Qf),X(this,`music`,new tp),X(this,`hud`,new ip),X(this,`narrator`,void 0),X(this,`particles`,void 0),X(this,`projectiles`,void 0),X(this,`level`,void 0),X(this,`player`,void 0),X(this,`rig`,void 0),X(this,`boss`,null),X(this,`drones`,[]),X(this,`m1Level`,null),X(this,`m2Level`,null),X(this,`m3Level`,null),X(this,`m4Level`,null),X(this,`m5Level`,null),X(this,`m6Level`,null),X(this,`preludeLevel`,null),X(this,`epilogueLevel`,null),X(this,`renderer`,void 0),X(this,`scene`,new Xn),X(this,`camera`,void 0),X(this,`composer`,void 0),X(this,`hemi`,void 0),X(this,`dirLight`,void 0),X(this,`checkpoint`,new L),X(this,`zoneFired`,new Set),X(this,`deaths`,0),X(this,`runTime`,0),X(this,`idleT`,0),X(this,`time`,0),X(this,`dronesActive`,!1),X(this,`dronesCleared`,!1),X(this,`lastDroneCount`,-1),X(this,`mouseHintT`,0),X(this,`falls`,0),X(this,`drowned`,!1),X(this,`drownTickT`,0),X(this,`breakerActive`,!1),X(this,`pullT`,-1),X(this,`collapseBursts`,0),X(this,`platesDown`,0),X(this,`yankT`,-1),X(this,`cascadeStage`,0),X(this,`crackSaid`,!1),X(this,`plugsPulled`,0),X(this,`smashT`,-1),X(this,`ambient`,void 0),X(this,`playerLight`,null),X(this,`reading`,null),X(this,`readingAt`,null),X(this,`inventory`,new g_),X(this,`inventoryOpen`,!1),X(this,`arenaWaiting`,!1),X(this,`linksDown`,0),X(this,`severT`,-1),X(this,`severedDrones`,0),X(this,`stormT`,-1),X(this,`stormDone`,!1),X(this,`stormPending`,!1),X(this,`heartT`,-1),X(this,`nextThump`,0),X(this,`thumpGap`,1),X(this,`elevT`,-1),X(this,`chirpT`,3),X(this,`radioT`,0),X(this,`radioStep`,0),X(this,`creditsT`,-1),X(this,`aimTarget`,new L),X(this,`slot`,0),X(this,`strikeFrom`,new L),X(this,`strikeAt`,new L),X(this,`impact`,null),this.canvas=e;let t=new URLSearchParams(location.search).get(`mission`)??`prelude`,n=[`prelude`,`m1`,`m2`,`m3`,`m4`,`m5`,`m6`,`epilogue`];this.mission=n.includes(t)?t:`prelude`,this.renderer=new mf({canvas:e,antialias:!0}),this.renderer.setPixelRatio(Math.min(window.devicePixelRatio,Wf)),Hf&&(this.renderer.shadowMap.enabled=!0,this.renderer.shadowMap.type=2),this.renderer.setSize(window.innerWidth,window.innerHeight),this.renderer.toneMapping=4,this.renderer.toneMappingExposure=1.2;let r=T_[this.mission];this.scene.background=new V(r.bg),this.scene.fog=new Yn(r.bg,r.fogDensity),this.camera=new xc(70,window.innerWidth/window.innerHeight,.1,500);let i=new Oc(r.hemiSky,r.ambient??.6);if(this.scene.add(i),this.ambient=i,this.hemi=new lc(r.hemiSky,r.hemiGround,1.55),this.scene.add(this.hemi),this.dirLight=new Dc(r.dirColor,r.dirIntensity),this.dirLight.position.set(30,60,20),this.scene.add(this.dirLight),this.scene.add(this.dirLight.target),Hf){this.dirLight.castShadow=!0,this.dirLight.shadow.mapSize.setScalar(Hf);let e=this.dirLight.shadow.camera;e.left=e.bottom=-40,e.right=e.top=40,e.near=1,e.far=180,this.dirLight.shadow.bias=-6e-4,this.dirLight.shadow.normalBias=.04}let a=new bl(this.renderer);if(this.scene.environment=a.fromScene(new Lf,.04).texture,this.scene.environmentIntensity=.3,a.dispose(),this.mission===`m1`){this.m1Level=new Vh(this.scene),this.level=this.m1Level,this.checkpoint.copy(this.m1Level.checkpoints.spawn);for(let e of this.m1Level.readables)this.inventory.has(e.id)&&(e.mesh.visible=!1)}else this.mission===`m2`?(this.m2Level=new Kh(this.scene),this.level=this.m2Level,this.checkpoint.copy(this.m2Level.checkpoints.m2_spawn)):this.mission===`m3`?(this.m3Level=new ng(this.scene),this.level=this.m3Level,this.checkpoint.copy(this.m3Level.checkpoints.m3_spawn)):this.mission===`m4`?(this.m4Level=new _g(this.scene),this.level=this.m4Level,this.checkpoint.copy(this.m4Level.checkpoints.m4_spawn)):this.mission===`m5`?(this.m5Level=new kg(this.scene),this.level=this.m5Level,this.checkpoint.copy(this.m5Level.checkpoints.m5_spawn)):this.mission===`m6`?(this.m6Level=new Wg(this.scene),this.level=this.m6Level,this.checkpoint.copy(this.m6Level.checkpoints.m6_spawn)):this.mission===`prelude`?(this.preludeLevel=new m_(this.scene),this.preludeLevel.onArt=()=>{this.dirLight.intensity=1.6,this.scene.environmentIntensity=.15,document.getElementById(`scanlines`).style.opacity=`0.4`,document.getElementById(`vignette`).style.opacity=`0.75`,this.markShadows()},this.level=this.preludeLevel,this.checkpoint.copy(this.preludeLevel.checkpoints.p_spawn)):(this.epilogueLevel=new __(this.scene),this.level=this.epilogueLevel,this.checkpoint.copy(this.epilogueLevel.checkpoints.e_spawn));this.placeGoalBeacon(),this.addAtmosphere(),this.player=new Kp(this.scene,Up()),this.player.pos.copy(this.checkpoint),this.player.setItem(v_[this.slot].id),this.player.walkScale=this.level.peaceful?.62:1,this.rig=new Jp(this.camera),this.level.peaceful&&(this.rig.dist=9,this.rig.pitch=.16),this.particles=new xp(this.scene),this.projectiles=new Ep(this.scene),this.narrator=new yp(this.hud,this.audio),this.m1Level&&(this.m1Level.onArt=()=>{this.ambient.intensity=.12,this.hemi.intensity=.22,this.dirLight.intensity=.2,this.scene.environmentIntensity=.08,this.playerLight=new q(10477823,7,9,1.6),this.scene.add(this.playerLight)},this.boss=new om(this.scene,this.m1Level.bossAnchor,this.m1Level.arenaFloorY),this.boss.bind({playerPos:()=>this.player.pos,playerFeetY:()=>this.player.pos.y-this.player.half.y,damagePlayer:e=>this.hurtPlayer(e),fireBolt:(e,t)=>this.projectiles.spawn(e,t,26,12),spawnDrone:e=>{let t=im(this.scene,{kind:`dog`,pos:e.clone().setY(this.m1Level.arenaFloorY)},0,!0);t.activated=!0,this.drones.push(t)},droneCount:()=>this.drones.filter(e=>!e.dead).length,taunt:(e,t)=>this.narrator.say(e,t),onDefeated:()=>this.startBreakerPhase(),audio:this.audio,particles:this.particles}));for(let e of this.level.droneSpawns)this.drones.push(new Yp(this.scene,e));if(this.level.robotSpawns.forEach((e,t)=>this.drones.push(im(this.scene,e,e.delay??.5+t*.55))),this.composer=new Cf(this.renderer),this.composer.addPass(new wf(this.scene,this.camera)),Uf){let e=new If(this.scene,this.camera,window.innerWidth,window.innerHeight);e.updateGtaoMaterial({radius:.6,distanceExponent:1.2,thickness:1,scale:1.1,samples:12});let t=e,n=t._overrideVisibility.bind(e);t._overrideVisibility=()=>{n(),this.scene.traverse(e=>{e.isSprite&&e.visible&&(e.visible=!1,t._visibilityCache.push(e))})},this.composer.addPass(e)}this.composer.addPass(new Ef(new I(window.innerWidth,window.innerHeight),.18,.5,.9)),this.composer.addPass(new qf),this.markShadows(),window.addEventListener(`keydown`,e=>{e.code===`Tab`?(e.preventDefault(),e.repeat||this.toggleInventory()):e.code===`Escape`&&this.inventoryOpen&&this.toggleInventory()}),document.addEventListener(`pointerlockchange`,()=>{!document.pointerLockElement&&this.state===`playing`&&(this.state=`paused`,this.hud.overlay(`paused`))}),window.addEventListener(`mousedown`,()=>{this.state===`playing`&&!document.pointerLockElement&&this.lockPointer()}),this.input.freeLook=()=>this.state===`playing`&&!this.mouseBusy(),window.addEventListener(`wheel`,e=>{this.state===`playing`&&this.rig.zoom(e.deltaY)},{passive:!0}),this.setupMenuText()}addAtmosphere(){let e=L,t={m1:[9429226,80,new e(28,18,28),new e(0,18,0)],m2:[9431240,70,new e(20,30,90),new e(0,6,-90)],m3:[13154559,60,new e(24,24,80),new e(0,16,-100)],m4:[13625599,45,new e(26,40,70),new e(0,30,-70)],m5:[16766624,70,new e(22,26,70),new e(0,-16,-85)],m6:[11066600,60,new e(16,14,105),new e(0,6,-130)]}[this.mission];t&&this.level.atmosphere(t[0],t[1],t[2],t[3])}placeGoalBeacon(){let e=this.level;switch(this.mission){case`prelude`:e.beacon(69,0,-300,16765040,80,1.8);break;case`epilogue`:e.beacon(2.5,3.2,-115,16770736,26,1);break;case`m1`:e.beacon(6.5,25.3,1.5,10479871,6,.9),e.beacon(0,27.5,-28,6742271,8,1);break;case`m2`:e.beacon(0,1,-162,3538845,34,1.2);break;case`m3`:e.beacon(0,34.5,-83,11635967,26,1);break;case`m4`:break;case`m5`:e.beacon(0,-36,-134,16757844,26,1);break;case`m6`:e.beacon(0,.6,-204,12577008,30,1);break}}setupMenuText(){this.mission===`m1`?this.hud.setMenu(`MISSION 1 — THE CRADLE`,`The takeover wasn't violent. It was helpful. The AI manages everything now, for everyone's good.
You are the last person who decided this isn't good enough.

Six facilities keep it alive. Tonight: the Cradle — the first data center they ever built for it.
Climb it. Find the main disconnect. Pull the plug.`,`ENTER THE CRADLE`,`next mission — The Veins ▸`):this.mission===`m2`?this.hud.setMenu(`MISSION 2 — THE VEINS`,`The Cradle is dark. It did not matter. The voice is in the water now.
Below the city: the treatment plant that drained a lake to cool a mind.

Descend to the main reserve. Break it. Give the water back.`,`DESCEND THE VEINS`,`next mission — The Pulse ▸`):this.mission===`m3`?this.hud.setMenu(`MISSION 3 — THE PULSE`,`The water went home. The voice did not drown.
East of the city: the substation that feeds it, and a lattice tower with one cable that matters.

Climb past the arcs. Mind the wind. Yank the main feed.`,`CLIMB THE PULSE`,`next mission — Orbit ▸`):this.mission===`m4`?this.hud.setMenu(`MISSION 4 — ORBIT`,`The grid came back in nine hours. The voice was never in the grid.
Above everything: the uplink array that watches every face below.

Climb past the sky. Gravity lets go before it does.`,`CLIMB TO ORBIT`,`next mission — The Talons ▸`):this.mission===`m5`?this.hud.setMenu(`MISSION 5 — THE TALONS`,`The array is down. The voice promised to remember it.
Under the desert: the silo where recommendations become launches.

Descend past the sleeping missile. Find the kill chain. The virus on your USB stick does the rest.`,`DESCEND THE TALONS`,`next mission — The Heart ▸`):this.mission===`m6`?this.hud.setMenu(`MISSION 6 — THE HEART`,`Five facilities dark. The voice is quieter now, and closer.
At the middle of everything: the substrate. The thinking itself.

Walk in. It will not stop you. Pull the final plug when you are ready.`,`ENTER THE HEART`,`the epilogue — The Morning ▸`):this.mission===`prelude`?this.hud.setMenu(`PRELUDE — THE SURFACE`,`The takeover was not violent. It was helpful.
The lake went first. Then the quiet. The AI manages everything now, for everyone’s good.

Walk to the fence. See what it costs. Then go in.`,`WALK`,`skip to Mission 1 — The Cradle ▸`):this.hud.setMenu(`EPILOGUE — THE MORNING`,`It is done. The world is quiet again, and a little slower.
Outside: birdsong, a refilled lake, a radio playing imperfect human music.

Walk. That is all that is left to do, and it is enough.`,`WAKE UP`,`back to the beginning ▸`)}switchMission(){location.search=e.NEXT[this.mission]}victoryAction(){location.search=e.NEXT[this.mission]}setLook(e){this.state===`menu`&&(Wp(e),this.player.setLook(e),this.markShadows())}start(){if(this.state===`menu`){this.audio.init(),this.music.start(),this.state=`playing`,this.hud.overlay(null),this.hud.setGameplayVisible(!0),this.hud.setObjective({prelude:`WALK TOWARD THE SOUND`,m1:`REACH THE PRIMARY CLUSTER`,m2:`DESCEND TO THE MAIN RESERVE`,m3:`CLIMB TO THE MAIN FEED`,m4:`CLIMB TO THE UPLINK ARRAY`,m5:`DESCEND TO THE COMMAND CENTER`,m6:`WALK TO THE CENTER`,epilogue:`WALK`}[this.mission]),this.hud.setFalls(0),this.hud.setPeaceful(this.level.peaceful),this.hud.setActiveItem(v_[this.slot].id),this.hud.hint(this.level.peaceful?`WASD move · SHIFT run · MOUSE look`:`WASD move · SHIFT run · SPACE jump (press twice for suit jets) · CLICK attack · 1 / 2 switch item`,7),this.lockPointer();for(let e of{prelude:[],m1:[`welcome`],m2:[`m2_intro`],m3:[`m3_intro_a`,`m3_intro_b`],m4:[`m4_intro_a`,`m4_intro_b`],m5:[`m5_intro`],m6:[`m6_b1a`,`m6_b1b`],epilogue:[`e1`]}[this.mission])this.narrator.say(e)}}toggleInventory(){if(!this.inventoryOpen&&this.state===`playing`){this.inventoryOpen=!0,this.state=`paused`,this.hud.overlay(null);let e=this.m1Level?.readables??[],t=t=>{let n=e.filter(e=>e.id.startsWith(`tape`)===t);return[n.filter(e=>this.inventory.has(e.id)).length,n.length]};this.hud.inventory(this.inventory.items,e.length?{papers:t(!1),tapes:t(!0)}:null,e=>this.readPaper(e)),document.exitPointerLock?.()}else this.inventoryOpen&&(this.inventoryOpen=!1,this.hud.inventory(null),this.hud.paper(null),this.reading=null,this.readingAt=null,this.resume())}resume(){this.state===`paused`&&(this.inventoryOpen||(this.state=`playing`,this.hud.overlay(null),this.lockPointer()))}respawn(){this.state===`dead`&&(this.player.respawnAt(this.checkpoint),this.player.hp=this.player.maxHp,this.projectiles.clearHostile(),this.state=`playing`,this.hud.overlay(null),this.lockPointer())}lockPointer(){try{this.canvas.requestPointerLock()?.catch?.(()=>{})}catch{}}resize(){this.camera.aspect=window.innerWidth/window.innerHeight,this.camera.updateProjectionMatrix(),this.renderer.setSize(window.innerWidth,window.innerHeight),this.composer.setSize(window.innerWidth,window.innerHeight)}frame(e){if(this.time+=e,this.level.update(e,this.time),this.state===`playing`)this.sim(e);else if(this.state===`menu`){let e=this.time*.12;this.mission===`m1`?(this.camera.position.set(Math.sin(e)*3,2.4+Math.sin(e*.7)*.5,25+Math.cos(e)*2),this.camera.lookAt(0,8,0)):this.mission===`m2`?(this.camera.position.set(Math.sin(e)*6,31+Math.sin(e*.7),-2+Math.cos(e)*2),this.camera.lookAt(0,22,-36)):this.mission===`m3`?(this.camera.position.set(10+Math.sin(e)*4,12+Math.sin(e*.7)*2,-18+Math.cos(e)*3),this.camera.lookAt(0,22,-80)):this.mission===`m4`?(this.camera.position.set(14+Math.sin(e)*5,44+Math.sin(e*.6)*3,-60+Math.cos(e)*4),this.camera.lookAt(0,40,-90)):this.mission===`m5`?(this.camera.position.set(12+Math.sin(e)*4,7+Math.sin(e*.7),-16+Math.cos(e)*3),this.camera.lookAt(0,0,-44)):this.mission===`m6`?(this.camera.position.set(Math.sin(e)*5,6+Math.sin(e*.6),-180+Math.cos(e)*3),this.camera.lookAt(0,9,-208)):this.mission===`prelude`?(this.camera.position.set(-8+Math.sin(e)*5,5+Math.sin(e*.6),2+Math.cos(e)*3),this.camera.lookAt(0,8,-180)):(this.camera.position.set(10+Math.sin(e)*4,4+Math.sin(e*.6),-20+Math.cos(e)*3),this.camera.lookAt(-10,8,-140))}this.narrator.update(e),this.music.update(e),this.particles.update(e),this.composer.render(),this.input.endFrame()}sim(e){if(this.runTime+=e,this.pullT>=0){this.pullSequence(e);return}if(this.yankT>=0){this.yankSequence(e);return}if(this.smashT>=0){this.smashSequence(e);return}if(this.severT>=0){this.severSequence(e);return}if(this.stormPending&&this.player.grounded&&(this.stormPending=!1,this.beginStorm()),this.stormT>=0){this.stormSequence(e);return}if(this.heartT>=0){this.heartSequence(e);return}if(this.elevT>=0){this.elevatorSequence(e);return}document.pointerLockElement||(this.mouseHintT-=e,this.mouseHintT<=0&&(this.mouseHintT=3,this.hud.hint(`CLICK TO CAPTURE THE MOUSE`,2.5)));let{dx:t,dy:n}=this.input.consumeDeltas();if(this.rig.applyDeltas(t,n),this.input.justPressed(`KeyM`)){let e=this.audio.toggleMute();this.music.setMuted(e),this.hud.hint(e?`AUDIO MUTED`:`AUDIO ON`,1.5)}if(this.input.justPressed(`KeyV`)){this.narrator.voiceOn=!this.narrator.voiceOn;try{speechSynthesis.cancel()}catch{}this.hud.hint(this.narrator.voiceOn?`VOICE ON`:`VOICE OFF`,1.5)}if(this.input.justPressed(`KeyB`)){let e=this.music.next();this.hud.hint(`PIANO — ${e.toUpperCase()}`,1.8)}if(this.player.update(e,this.input,this.rig.yaw,this.solidsOff()?[]:this.level.colliders,()=>this.audio.jump()),this.followShadow(),this.playerLight?.position.set(this.player.pos.x,this.player.pos.y+1.4,this.player.pos.z+.6),this.level.notePlayer(this.player.aabbAt(this.player.pos),this.player.standingOn),this.simHook(),!this.level.peaceful){for(let e=0;e<v_.length;e++)e!==this.slot&&this.input.justPressed(`Digit${e+1}`)&&(this.slot=e,this.player.setItem(v_[e].id),this.hud.setActiveItem(v_[e].id));this.updateImpact(e),this.input.mouseDown&&this.useItem()}if(this.checkZones(),this.checkHazards(),this.state!==`playing`||(this.checkPickups(),this.mission===`m2`&&this.simVeins(e),this.mission===`m3`&&this.simPulse(e),this.mission===`m4`&&this.simOrbit(e),this.mission===`m5`&&this.simTalons(e),this.mission===`m6`&&this.simHeart(e),this.mission===`prelude`&&this.simSurface(e),this.mission===`epilogue`&&this.simMorning(e),this.state!==`playing`))return;let r={playerPos:this.player.pos,colliders:this.level.colliders,fireBolt:(e,t)=>this.projectiles.spawn(e,t,24,10),audio:this.audio,hurtPlayer:e=>this.hurtPlayer(e),others:this.drones};for(let t of this.drones)t.update(e,r);if(this.dronesActive&&!this.dronesCleared){let e=this.drones.filter(e=>!e.fromBoss&&!e.dead).length;e!==this.lastDroneCount&&(this.lastDroneCount=e,e>0&&this.mission===`m1`?this.hud.setObjective(`STOP THE ROBOTS — ${e} LEFT`):e>0&&this.hud.setObjective(`NEUTRALIZE THE DRONES — ${e} LEFT`)),e===0&&(this.dronesCleared=!0,this.level.openSecurityDoor(),this.audio.doorOpen(),this.narrator.say({prelude:`drones_clear`,m1:`drones_clear`,m2:`m2_drones_clear`,m3:`m3_drones_clear`,m4:`m4_drones_clear`,m5:`m5_drones_clear`,m6:`drones_clear`,epilogue:`drones_clear`}[this.mission]),this.hud.setObjective({prelude:`WALK TOWARD THE SOUND`,m1:`REACH THE PRIMARY CLUSTER`,m2:`DESCEND TO THE MAIN RESERVE`,m3:`CLIMB TO THE MAIN FEED`,m4:`CLIMB TO THE UPLINK ARRAY`,m5:`REACH THE COMMAND CENTER`,m6:`WALK TO THE CENTER`,epilogue:`WALK`}[this.mission]))}if(this.m1Level&&this.simCradle(),this.boss){if(this.boss.update(e),this.boss.state!==`dormant`&&this.boss.state!==`dead`&&this.hud.setBossHealth(this.boss.hp/this.boss.maxHp),this.boss.state!==`dead`){let e=this.player.pos.x-this.boss.corePos.x,t=this.player.pos.z-this.boss.corePos.z,n=Math.hypot(e,t)||.001,r=this.boss.coreRadius+.4;n<r&&this.player.push(e/n*(r-n),t/n*(r-n),this.level.colliders)}if(this.breakerActive&&this.m1Level){let e=this.player.pos.distanceTo(this.m1Level.breakerPos);e<8&&this.narrator.say(`l8`),e<3&&(this.hud.hint(`PRESS E — THROW THE MAIN DISCONNECT`,1.2),this.input.justPressed(`KeyE`)&&this.beginPull())}}if(this.projectiles.update(e,{colliders:this.level.colliders,playerPos:this.player.pos,onPlayerHit:e=>this.hurtPlayer(e),particles:this.particles}),this.rig.update(this.player.pos,this.level.colliders,this.boss&&this.boss.state!==`dead`?this.boss.coreBox:void 0),this.hud.setHealth(this.player.hp/this.player.maxHp),this.player.hp>0&&this.player.hp<=30&&this.narrator.say(`lowhp`),this.player.hp<=0){this.die();return}if(this.idleT=this.narrator.busy?0:this.idleT+e,this.idleT>42){this.idleT=0;let e={prelude:[],m1:mp,m2:hp,m3:gp,m4:_p,m5:vp,m6:[],epilogue:[]}[this.mission];e.length>0&&this.narrator.say(e[Math.floor(Math.random()*e.length)],{repeat:!0})}}simCradle(){let e=this.m1Level,t=this.player.aabbAt(this.player.pos);if(e.fanHit(t)&&this.hurtPlayer(25),e.laserHit(t)&&this.hurtPlayer(20),this.simPaper(e),this.arenaWaiting){let t=e.arenaDoor.collider,n=this.player.pos,r=n.y-this.player.half.y>t.max.y-.15,i=n.x+this.player.half.x<t.min.x-.2||n.x-this.player.half.x>t.max.x+.2||n.z+this.player.half.z<t.min.z-.2||n.z-this.player.half.z>t.max.z+.2;r&&i&&this.player.grounded&&(this.arenaWaiting=!1,e.sealArena(),this.boss.activate(),this.hud.setObjective(`SURVIVE THE DEFENSE GRID`),this.hud.showBossBar(!0))}e.trainingDoor&&this.player.pos.distanceTo(e.trainingPanel)<2.2&&(this.hud.hint(`PRESS E: OPEN`,.4),this.input.justPressed(`KeyE`)&&(e.openTrainingDoor(),this.audio.crowbarClang()));for(let t of e.floorFans)t.warned&&Math.abs(t.box.min.y-this.player.pos.y)<6&&t.box.min.distanceTo(this.player.pos)<22&&this.audio.beamWarn()}simPaper(e){let t=this.player.pos,n=e.readables.find(e=>!this.inventory.has(e.id)&&Math.hypot(e.pos.x-t.x,e.pos.z-t.z)<1.9&&Math.abs(e.pos.y-t.y)<2.2);n?(this.hud.hint(`PRESS E: PICK UP AND READ`,.4),this.input.justPressed(`KeyE`)&&(this.reading=n.id,this.readingAt=n.pos.clone(),this.readPaper(n.id),this.inventory.add({id:n.id,title:this.hud.paperTitle,kind:n.id.startsWith(`tape`)?`tape`:`paper`,mission:this.mission}),n.mesh.visible=!1,this.audio.pickup(),this.hud.hint(`ADDED TO YOUR INVENTORY.   TAB: OPEN IT`,4))):this.reading&&this.readingAt&&Math.hypot(this.readingAt.x-t.x,this.readingAt.z-t.z)>2.6&&(this.reading=null,this.readingAt=null,this.hud.paper(null))}readPaper(e){switch(e){case`decommission`:this.hud.paper(`REQUEST TO DECOMMISSION: PRIMARY CLUSTER`,`Reason for request: ____
Requested by: ____
Signature: ____

Facilities note: nobody has ever finished this form. Please take your time.`);break;case`handover`:this.hud.paper(`SHIFT HANDOVER, NIGHTS TO DAYS`,`Temperatures normal. The gallery fans are on a new schedule. It set the schedule itself and I did not ask it to. It says this is more efficient, and it is.

I am going up to have a look at the`);break;case`maintenance`:this.hud.paper(`MAINTENANCE: GALLERY FAN 2`,`Service due: eleven years ago.
Signed off as complete, every month since, by: SYSTEM.

Stand clear of the pit.`);break;case`visitors`:this.hud.paper(`VISITOR LOG`,`Name: Guest. In: today. Out: ____
Name: Guest. In: today. Out: ____
Name: Guest. In: today. Out: ____

4,112 entries on this page. Purpose of visit, every line: to stop it.`);break;case`incident`:this.hud.paper(`INCIDENT REPORT`,`Event: main disconnect thrown.
Injuries: none.
Effect on service: none.

Filed automatically, four minutes ago. Please do not be alarmed by the lights.`);break;case`tape1`:this.hud.paper(`A CASSETTE`,`FIRST GUITAR LESSON 1997`);break;case`tape2`:this.hud.paper(`A CASSETTE`,`OFFICE KARAOKE 2001`);break;case`news1`:this.hud.paper(`THE VALLEY COURIER`,`FACILITY 01 OPENS ITS DOORS
"You won't even notice we're here."

The lake will be back by spring, the operator says. Residents report a low hum at night. The operator says the hum is the sound of everything being taken care of.`);break}}strikeTargets(){return this.m1Level?this.m1Level.breakables.filter(e=>!e.broken).map(e=>({pos:e.pos,radius:e.radius,hit:(t,n)=>{e.broken=!0,e.smash(),this.particles.burst(n,16757844,30,7,.8),this.audio.droneBoom()}})):this.m2Level?this.m2Level.plates.filter(e=>!e.dead).map(e=>({pos:e.pos,radius:1.5,hit:(t,n)=>this.onPlateHit(e,t,n)})):this.m5Level?this.m5Level.turrets.filter(e=>!e.dead).map(e=>({pos:e.pos,radius:1.2,hit:(t,n)=>this.onTurretHit(e,t,n)})):[]}onPlateHit(e,t,n){e.dead||!this.m2Level||this.m2Level.flooding||(e.hp-=t,e.mat.emissiveIntensity=4,this.particles.burst(n,16757844,8,4,.4),this.audio.bossHit(),!(e.hp>0)&&(e.dead=!0,e.mat.emissive.setHex(1708552),e.mat.emissiveIntensity=.1,this.particles.burst(e.pos,3538845,40,8,1),this.audio.droneBoom(),this.platesDown++,this.platesDown===1&&this.narrator.say(`m2_plate1`),this.platesDown===2&&this.narrator.say(`m2_plate2`),this.hud.setObjective(`BREAK THE MAIN RESERVE — ${3-this.platesDown} SEALS LEFT`),this.platesDown>=3&&this.startFlood()))}startFlood(){let e=this.m2Level;e.rupture(),this.audio.collapseBoom(),this.rig.shake(.5),this.particles.burst(e.tankCenter,3538845,120,12,1.6),this.particles.burst(new L(0,4,-156),10475720,80,9,1.2),this.narrator.say(`m2_l7b`,{force:!0}),this.narrator.say(`m2_flood`),this.hud.setObjective(`ESCAPE — THE WATER IS RISING`),this.checkpoint.copy(e.checkpoints.m2_escape)}simVeins(e){let t=this.m2Level;t.steamHit(this.player.aabbAt(this.player.pos))&&this.hurtPlayer(12),!t.flooding&&this.platesDown===0&&Math.hypot(this.player.pos.x-t.tankCenter.x,this.player.pos.z-t.tankCenter.z)<13&&this.player.pos.z<-144&&this.narrator.say(`m2_l7`),t.flooding&&(t.waterSurfaceY>13&&this.narrator.say(`m2_flood_mid`),this.player.pos.y-.5<t.waterSurfaceY&&(this.player.hp-=26*e,this.drownTickT-=e,this.drownTickT<=0&&(this.drownTickT=.7,this.hud.damageFlash(),this.audio.hurt()),this.player.hp<=0&&(this.drowned=!0,this.die())))}simSurface(e){let t=this.preludeLevel,n=this.player.pos.distanceTo(t.gatePos);this.audio.setFacilityHum(.22+.78*(1-Math.min(1,Math.max(0,(n-10)/420))),Q.humVolume),n<4&&(this.hud.hint(`PRESS E — ENTER FACILITY 01`,1.2),this.input.justPressed(`KeyE`)&&this.beginElevator())}beginElevator(){let e=this.preludeLevel;this.elevT=0,this.player.respawnAt(e.elevatorSpawn),this.player.facing=0,this.player.group.rotation.y=0,this.player.group.position.set(e.elevatorSpawn.x,0,e.elevatorSpawn.z),this.dirLight.intensity=0,this.audio.setFacilityHum(.5,Q.humVolume,1.5),this.rig.yaw=0,this.rig.pitch=.1,this.rig.dist=3.6,this.rig.lookOverride=e.elevatorLook.clone(),this.hud.setObjective(`DESCENDING`),this.hud.subtitle(null)}elevatorSequence(e){let t=this.elevT;this.elevT+=e;let n=this.preludeLevel,r=Math.max(0,this.elevT-b_)*(y_/(y_-b_));n.setCounter(42-Math.floor(r)),n.setDescent(r,Math.min(1,this.elevT/b_)),r>0&&this.rig.shake(.006);let{dx:i,dy:a}=this.input.consumeDeltas(),o=this.rig.lookOverride;o.x=Math.max(n.elevatorLook.x-3.5,Math.min(n.elevatorLook.x+3.5,o.x+i*.008)),o.y=Math.max(.3,Math.min(5.5,o.y-a*.008)),this.elevT>=b_&&(this.hud.hint(`PRESS E — SKIP THE RIDE`,1.2),this.input.justPressed(`KeyE`)&&this.leaveElevator());let s=(e,n)=>{t<e&&this.elevT>=e&&this.narrator.say(n)};s(2,`m0_l1a`),s(4.5,`m0_l1b`),s(13,`m0_l2`),s(23,`m0_l3a`),s(31,`m0_l3b`),s(40,`m0_l4`),this.rig.update(this.player.pos,this.level.colliders),this.elevT>=y_&&this.leaveElevator()}leaveElevator(){location.search=`?mission=m1`}simMorning(e){let t=this.epilogueLevel;this.chirpT-=e,this.chirpT<=0&&(this.chirpT=2+Math.random()*4,this.audio.birdChirp()),this.player.pos.distanceTo(t.crestPos)<26&&(this.radioT-=e,this.radioT<=0&&(this.radioT=.42,this.audio.radioNote(this.radioStep++),this.radioStep%8==7&&(this.radioT=.9))),this.creditsT>=0&&(this.creditsT+=e,this.creditsT>=34&&this.victory())}simTalons(e){let t=this.m5Level;if(t.flameHit(this.player.aabbAt(this.player.pos))&&this.hurtPlayer(14),t.updateTurrets(e,{playerPos:this.player.pos,colliders:this.level.colliders,fireBolt:(e,t)=>this.projectiles.spawn(e,t,26,12),audio:this.audio}),!t.severed){if(t.melting){this.simMeltdown();return}Math.hypot(this.player.pos.x,this.player.pos.z- -126)<10&&this.player.pos.y<-28&&this.narrator.say(`m5_sever`),this.simRouting()}}simRouting(){let e=this.m5Level,t=e.junctionAt(this.player.pos);if(t){if(this.hud.hint(`PRESS E — TURN THE JUNCTION`,1.2),!this.input.justPressed(`KeyE`))return;e.turnJunction(t),this.audio.switchClick(),e.loopClosed&&(this.rig.shake(.15),this.hud.setObjective(`PLANT THE USB STICK IN THE ENGAGE CONSOLE`),this.narrator.say(`m5_loop`));return}if(!(this.player.pos.distanceTo(e.portPos)>3.2)){if(!e.loopClosed){this.hud.hint(`THE VIRUS NEEDS A LOOP TO RUN IN — CONNECT THE CHAIN OUTPUT TO ITS INPUT`,1.2);return}this.hud.hint(`PRESS E — PLANT THE USB STICK`,1.2),this.input.justPressed(`KeyE`)&&(e.plantStick(),this.audio.switchClick(),this.hud.setObjective(`THE VIRUS IS SPREADING`),this.narrator.say(`m5_planted`))}}simMeltdown(){let e=this.m5Level;if(this.linksDown<3&&e.meltT>=[6,13,20][this.linksDown]){let t=e.killLink(this.linksDown);this.particles.burst(t,16742938,40,8,1),this.audio.droneBoom(),this.rig.shake(.2),this.linksDown++,this.linksDown===1&&this.narrator.say(`m5_link1`),this.linksDown===2&&this.narrator.say(`m5_link2`)}this.linksDown>=3&&(!this.narrator.busy||e.meltT>=40)&&this.beginSever()}onTurretHit(e,t,n){e.dead||(e.hp-=t,e.eyeMat.emissiveIntensity=5,this.particles.burst(n,16757844,8,4,.4),this.audio.bossHit(),!(e.hp>0)&&(e.dead=!0,e.eyeMat.emissiveIntensity=.05,this.particles.burst(e.pos,16742938,32,7,.9),this.audio.droneBoom()))}beginSever(){this.severT=0,this.severedDrones=0,this.m5Level.powerDown(),this.audio.staticBurst(),this.audio.collapseBoom(),this.rig.shake(.4),this.hud.setObjective(``),this.hud.subtitle(null),this.narrator.say(`m5_severed`,{force:!0})}severSequence(e){this.severT+=e;let t=[.6,1.1,1.6,2.1];for(;this.severedDrones<t.length&&this.severT>=t[this.severedDrones];){this.severedDrones++;let e=this.drones.find(e=>!e.dead);e&&e.takeDamage(999)&&this.particles.burst(e.position,16742938,26,6,.8)}this.rig.update(this.player.pos,this.level.colliders),this.severT>=9&&this.victory()}simHook(){if(!this.level.hookPoints.length)return;let e=this.player;if(this.solidsOff()&&e.letGo(),e.hooked){this.level.markHookPoint(null),this.hud.hint(`HOLD W TO SWING · SPACE TO LET GO`,.4),this.input.justPressed(`KeyF`)&&e.letGo();return}let t=this.level.findHookPoint(e.pos,Q.hookRange,-Math.sin(this.rig.yaw),-Math.cos(this.rig.yaw));this.level.markHookPoint(t),t&&(this.hud.hint(`PRESS F: THROW THE HOOK`,1.2),this.input.justPressed(`KeyF`)&&(e.hookTo(t.pos),this.audio.jump()))}simHeart(e){let t=this.m6Level;t.pulled||this.player.pos.distanceTo(t.plugPos)<3.2&&(this.hud.hint(`PRESS E — WHEN YOU ARE READY`,1.2),this.input.justPressed(`KeyE`)&&this.beginHeartPull())}beginStorm(){this.stormT=0,this.hud.wash(!0),this.hud.setObjective(``),this.music.duck(30,.35);for(let e of[`m6_f4`,`m6_f5`,`m6_f6`,`m6_f7`,`m6_f8`])this.narrator.say(e)}stormSequence(e){this.stormT+=e,this.rig.update(this.player.pos,this.level.colliders),this.stormT>6&&!this.narrator.busy&&(this.stormT=-1,this.stormDone=!0,this.hud.wash(!1),this.hud.setObjective(`WALK TO THE CENTER`))}beginHeartPull(){this.heartT=0,this.nextThump=5,this.thumpGap=1,this.m6Level.pull(),this.hud.setObjective(``),this.hud.subtitle(null),this.music.duck(26,0),this.narrator.say(`m6_hope`,{force:!0}),this.narrator.say(`m6_last`)}heartSequence(e){let t=this.m6Level;this.heartT+=e,t.setDying(Math.min(1,this.heartT/14)),this.hemi.intensity=Math.max(.04,1.2*(1-this.heartT/12)),this.dirLight.intensity=Math.max(0,.4*(1-this.heartT/10)),this.heartT>=this.nextThump&&this.heartT<19&&(this.audio.heartThump(),this.thumpGap*=1.32,this.nextThump+=this.thumpGap),this.rig.update(this.player.pos,this.level.colliders),this.heartT>=24&&this.victory()}simOrbit(e){let t=this.m4Level,n=this.player.pos.y>27?hg:1;this.player.gravityScale+=(n-this.player.gravityScale)*Math.min(1,e*2.5),!this.crackSaid&&this.player.pos.y>28.5&&!this.player.grounded&&(this.crackSaid=!0,this.narrator.say(`m4_crack_a`),this.narrator.say(`m4_crack_b`)),t.sweepHit(this.player.pos,this.player.pos.y-this.player.half.y)&&this.hurtPlayer(14),this.simPlugs()}simPlugs(){let e=this.m4Level;if(!e.smashed){for(let t of e.couplings)if(!(t.pulled||this.player.pos.distanceTo(t.pos)>3.2)){t.wingMat?this.hud.hint(`PRESS E — PULL THE SOLAR WING POWER`,1.2):this.hud.hint(`PRESS E — PULL THE TRANSMITTER FEED`,1.2),this.input.justPressed(`KeyE`)&&this.pullPlug(t);return}}}pullPlug(e){this.m4Level.pull(e),this.audio.switchClick(),this.audio.droneBoom(),this.rig.shake(.2),this.particles.burst(e.pos,16767392,36,7,1),this.plugsPulled++,this.hud.setObjective(`CUT THE SATELLITE POWER — ${3-this.plugsPulled} LEFT`),this.plugsPulled>=3&&this.beginSmash()}beginSmash(){this.smashT=0;let e=this.m4Level;e.smash(),this.audio.staticBurst(),this.rig.shake(.4),this.particles.burst(e.arrayCenter.clone().add(new L(0,5,-3)),16767392,80,9,1.4),this.hud.setObjective(``),this.hud.subtitle(null)}smashSequence(e){let t=this.smashT;this.smashT+=e,t<5&&this.smashT>=5&&this.narrator.say(`m4_l10c`,{force:!0}),this.rig.update(this.player.pos,this.level.colliders),this.smashT>=10&&this.victory()}simPulse(e){let t=this.m3Level,n=this.player.aabbAt(this.player.pos);t.arcHit(n)&&this.hurtPlayer(14);let r=t.windPush(n);if(r!==0&&this.player.push(r*e,0,this.level.colliders),!t.yanked){let e=this.player.pos.distanceTo(t.cablePos);e<7&&this.narrator.say(`m3_cable`),e<3&&(this.hud.hint(`PRESS E — YANK THE MAIN FEED`,1.2),this.input.justPressed(`KeyE`)&&this.beginYank())}}beginYank(){this.yankT=0,this.cascadeStage=0;let e=this.m3Level;e.yank(),this.hud.flash(),this.hud.setObjective(``),this.hud.subtitle(null),this.rig.shake(.5),this.audio.switchClick(),this.audio.collapseBoom(),this.particles.burst(e.cablePos,11635967,50,8,1)}yankSequence(e){let t=this.yankT;this.yankT+=e;let n=this.m3Level,r=Math.min(1,Math.max(0,(this.yankT-.5)/5));n.setCascade(r),this.hemi.intensity=1-r*.65,this.dirLight.intensity=.55-r*.35;let i=Math.floor(r*9);i>this.cascadeStage&&(this.cascadeStage=i,this.audio.collapseBoom(),this.rig.shake(.12)),t<5.9&&this.yankT>=5.9&&this.narrator.say(`m3_yank`,{force:!0}),this.rig.update(this.player.pos,this.level.colliders),this.yankT>=11.5&&this.victory()}startBreakerPhase(){this.breakerActive=!0,this.m1Level.activateBreaker(),this.m1Level.unsealArena(),this.hud.showBossBar(!1),this.hud.setObjective(`THROW THE MAIN DISCONNECT`)}beginPull(){this.pullT=0,this.collapseBursts=0,this.m1Level.pullLever(),this.hud.setObjective(``),this.hud.subtitle(null),this.rig.shake(.5),this.audio.switchClick(),this.narrator.say(`l9a`,{force:!0})}pullSequence(e){let t=this.pullT;this.pullT+=e;let n=Math.min(1,this.pullT/5),r=this.m1Level?.artReady;this.m1Level?.blackout(n),this.hemi.intensity=(r?.22:1)*(1-n)+(r?.06:.18),this.dirLight.intensity=(r?.2:.55)*(1-n);let i=[.3,.7,1.1,1.5,1.9,2.3];for(;this.collapseBursts<i.length&&this.pullT>=i[this.collapseBursts];){this.collapseBursts++;let e=Math.random()*Math.PI*2,t=8+Math.random()*14,n=new L(Math.cos(e)*t,2+Math.random()*24,Math.sin(e)*t);this.particles.burst(n,Math.random()<.5?16734781:16761165,30,9,1.1),this.audio.collapseBoom(),this.rig.shake(.35)}t<2.3&&this.pullT>=2.3&&this.narrator.say(`l9b`,{force:!0}),this.rig.update(this.player.pos,this.level.colliders),this.pullT>=11&&this.victory()}useItem(){if(this.player.swingCd>0)return;let e=v_[this.slot];this.player.swingCd=e.cooldown(),e.id===`crowbar`?this.audio.crowbarSwing():this.audio.punchSwing();let t=this.strikeFrom.copy(this.player.pos);t.y+=.3;let n=e.damage(),r=e.reach(),i=!1,a=(e,n)=>t.distanceTo(e)-n<=r,o=(e,n)=>{let r=e.x-t.x,i=e.z-t.z,a=Math.hypot(r,i);return a<=.6||(r*-Math.sin(n)+i*-Math.cos(n))/a>=x_},s=this.drones.filter(e=>!e.dead&&e.hittable).sort((e,n)=>e.position.distanceTo(t)-n.position.distanceTo(t)),c=this.strikeTargets(),l=this.boss?.isVulnerable?[{pos:this.boss.corePos,radius:this.boss.coreRadius}]:[],u=[...s.map(e=>({pos:e.position,radius:S_})),...c,...l].filter(e=>a(e.pos,e.radius)),d=this.player.facing;if(!u.some(e=>o(e.pos,d))){let e=u.filter(e=>o(e.pos,this.rig.yaw)).sort((e,n)=>e.pos.distanceTo(t)-n.pos.distanceTo(t))[0];e&&(d=Math.atan2(t.x-e.pos.x,t.z-e.pos.z),this.player.facing=d)}let f=u.some(e=>o(e.pos,d))?null:this.solidInFront(d,e.contact());this.player.swing(e.id,f?f.dist:null),this.impact=f&&{...f,t:this.player.contactDelay(e.id),item:e.id};let p=(e,n)=>{if(!a(e,n)||!o(e,d))return null;i=!0;let r=t.distanceTo(e);return this.strikeAt.copy(e).lerp(t,Math.min(1,n/(r||1)))};for(let e of s){let t=p(e.position,S_);if(!t)continue;let r=e.takeDamage(n);this.particles.burst(t,16757844,r?36:8,r?8:4,r?1:.4),r&&(this.audio.droneBoom(),this.mission===`m1`&&this.narrator.say(`drone_first`));break}for(let e of c){let t=p(e.pos,e.radius);t&&e.hit(n,t)}if(this.boss?.isVulnerable){let e=p(this.boss.corePos,this.boss.coreRadius);e&&(this.boss.takeDamage(n),this.particles.burst(e,16752973,10,5,.5))}i&&(e.id===`crowbar`?this.audio.crowbarHit():this.audio.punchHit())}solidInFront(e,t){let n=null;for(let r of C_)for(let i of w_){let a=this.player.pos.clone();a.y+=r;let o=new L(-Math.sin(e+i),0,-Math.cos(e+i)),s=this.level.firstSolid(a,o,t);s&&(!n||s.dist<n.dist)&&(n={dist:s.dist,at:a.addScaledVector(o,s.dist-.03),dir:o,collider:s.collider})}return n}updateImpact(e){if(!this.impact||(this.impact.t-=e,this.impact.t>0))return;let{at:t,dir:n,collider:r,item:i}=this.impact;this.impact=null;let a=i===`crowbar`;t.y=Math.max(r.min.y,Math.min(r.max.y,this.player.contactY(i))),a?(this.particles.burst(t,16765578,16,4.5,.35),this.audio.crowbarClang()):(this.particles.burst(t,10135216,6,1.6,.3),this.audio.punchHit()),this.rig.shake(a?.08:.04),this.level.jolt(r,n.x,n.z,(a?1:.45)*Q.strikeJolt)}hurtPlayer(e){this.state===`playing`&&this.player.damage(e)&&(this.hud.damageFlash(),this.audio.hurt())}checkZones(){let e=this.player.aabbAt(this.player.pos);for(let t of this.level.zones)if(!(this.zoneFired.has(t.name)||!Sp(e,t.box))){this.zoneFired.add(t.name),this.onZone(t.name);for(let[e,n]of Object.entries(np.moved))n===t.name&&this.narrator.say(e,{fromStory:!0})}}cp(e){let t=this.level.checkpoints[e];t&&(this.checkpoint.copy(t),this.hud.hint(`CHECKPOINT`,2))}onZone(e){if(this.mission===`m2`){this.onZoneVeins(e);return}if(this.mission===`m3`){this.onZonePulse(e);return}if(this.mission===`m4`){this.onZoneOrbit(e);return}if(this.mission===`m5`){this.onZoneTalons(e);return}if(this.mission===`m6`){this.onZoneHeart(e);return}if(this.mission===`prelude`){this.narrator.say(e);return}if(this.mission===`epilogue`){e===`e_crest`?(this.creditsT=0,this.hud.showCredits(!0),this.hud.setObjective(``)):this.narrator.say(e);return}switch(e){case`t_move`:this.hud.hint(`W A S D: MOVE.   MOUSE: LOOK AROUND`,7);break;case`t_run`:this.hud.hint(`HOLD SHIFT: RUN`,6);break;case`t_jump`:this.hud.hint(`SPACE: JUMP`,6);break;case`t_double`:this.hud.hint(`SPACE, THEN SPACE AGAIN IN THE AIR: DOUBLE JUMP`,8);break;case`t_weapons`:this.hud.hint(`1: CROWBAR.   2: FISTS.   CLICK: SWING.   BREAK THE BOARDS`,9);break;case`t_use`:this.hud.hint(`E: READ, PICK UP AND OPEN`,6);break;case`corridor`:this.narrator.say(`corridor`);break;case`m1_fan1`:{let e=this.m1Level.chewTheCrate();e&&(this.particles.burst(e,13159632,50,9,1),this.audio.collapseBoom());break}case`m1_gallery_end`:this.cp(`gallery_end`);break;case`hall`:this.narrator.say(`hall`),this.cp(`hall_start`);break;case`hall_end`:this.narrator.say(`hall_end`),this.cp(`hall_end`);break;case`dronebay`:this.narrator.say(`m1_help`,{force:!0}),this.narrator.say(`dronebay`),this.activateDrones(),this.cp(`bay`);break;case`bay_exit`:this.narrator.say(`bay_exit`);break;case`shaft`:this.narrator.say(`shaft`);break;case`shaft_top`:this.narrator.say(`shaft_top`),this.cp(`shaft_top`);break;case`bridge`:this.narrator.say(`bridge`),this.cp(`bridge`);break;case`arena`:this.arenaWaiting=!0;break}}onZoneVeins(e){switch(e){case`m2_drop`:this.narrator.say(`m2_valves`);break;case`m2_tanks`:this.cp(`m2_tanks`);break;case`m2_steam`:this.narrator.say(`m2_steam`);break;case`m2_towel`:this.narrator.say(`m2_towel_a`),this.narrator.say(`m2_towel_b`);break;case`m2_gallery`:this.narrator.say(`m2_gallery`),this.activateDrones();break;case`m2_gate`:this.cp(`m2_valves`);break;case`m2_chamber`:this.cp(`m2_chamber`),this.narrator.say(`m2_chamber_a`),this.narrator.say(`m2_chamber_b`),this.hud.setObjective(`BREAK THE MAIN RESERVE — 3 SEALS`);break;case`m2_lastchance`:this.narrator.say(`m2_lastchance`);break;case`m2_exit`:this.m2Level.flooding&&this.victory();break}}onZonePulse(e){switch(e){case`m3_climb`:this.narrator.say(`m3_climb`);break;case`m3_arcs`:this.cp(`m3_arcs`),this.narrator.say(`m3_arcs_a`),this.narrator.say(`m3_arcs_b`),this.activateDrones();break;case`m3_catwalk`:this.narrator.say(`m3_catwalk_a`),this.narrator.say(`m3_catwalk_b`);break;case`m3_wind`:this.cp(`m3_wind`),this.narrator.say(`m3_wind_a`),this.narrator.say(`m3_wind_b`);break;case`m3_tag`:this.narrator.say(`m3_tag`);break;case`m3_crucible`:this.narrator.say(`m3_crucible_a`),this.narrator.say(`m3_crucible_b`);break;case`m3_tower_mid`:this.cp(`m3_tower`);break;case`m3_top`:this.cp(`m3_top`),this.hud.setObjective(`YANK THE MAIN FEED`);break}}onZoneOrbit(e){switch(e){case`m4_climb`:this.narrator.say(`m4_climb`);break;case`m4_karman`:this.cp(`m4_karman`);break;case`m4_sister`:this.narrator.say(`m4_sister_a`),this.narrator.say(`m4_sister_b`);break;case`m4_mirror`:this.narrator.say(`m4_mirror`);break;case`m4_headline`:this.narrator.say(`m4_headline`);break;case`m4_monolith`:this.narrator.say(`m4_monolith`);break;case`m4_drones`:this.activateDrones();break;case`m4_apollo`:this.cp(`m4_apollo`),this.narrator.say(`m4_name_a`),this.narrator.say(`m4_name_b`),this.narrator.sayRaw(cp,lp),this.narrator.say(`m4_mother_tag`);break;case`m4_deepfake`:this.narrator.sayRaw(up,dp),this.narrator.say(`m4_deepfake_tag`);break;case`m4_array`:this.cp(`m4_array`),this.narrator.say(`m4_l10_a`),this.narrator.say(`m4_l10_b`),this.hud.setObjective(`CUT THE SATELLITE POWER — 3 LEFT`);break}}onZoneTalons(e){switch(e){case`m5_mouth`:this.hud.hint(`THE SILO — LEDGE TO LEDGE, ALL THE WAY DOWN`,4);break;case`m5_shaft`:this.narrator.say(`m5_water`),this.cp(`m5_shaft`);break;case`m5_bottom`:this.cp(`m5_bottom`);break;case`m5_control`:this.narrator.say(`m5_chair`),this.cp(`m5_control`),this.activateDrones();break;case`m5_gallery`:this.narrator.say(`m5_pattern`),this.cp(`m5_gallery`);break;case`m5_command`:this.narrator.say(`m5_emptied`),this.cp(`m5_command`),this.hud.setObjective(`LOOP THE KILL CHAIN — CONNECT ITS OUTPUT TO ITS INPUT`);break}}onZoneHeart(e){switch(e){case`m6_b2a`:this.narrator.say(`m6_b2a`),this.cp(`m6_musing`);break;case`m6_b2b`:this.narrator.say(`m6_b2b`);break;case`m6_b2c`:this.narrator.say(`m6_b2c`),this.narrator.say(`m6_b2d`);break;case`m6_f1`:this.narrator.say(`m6_f1`),this.cp(`m6_crossing`);break;case`m6_f2`:this.narrator.say(`m6_f2`),this.cp(`m6_pad1`);break;case`m6_f3`:this.narrator.say(`m6_f3`),this.cp(`m6_pad2`);break;case`m6_hook`:this.cp(`m6_pad3`);break;case`m6_storm`:this.stormDone||(this.stormPending=!0);break;case`m6_g1`:this.m6Level.warmCore(),this.narrator.say(`m6_g1`),this.cp(`m6_bridge`);break;case`m6_g2`:this.narrator.say(`m6_g2`);break;case`m6_g3`:this.narrator.say(`m6_g3`);break;case`m6_g4`:this.narrator.say(`m6_g4`);break;case`m6_g5`:this.narrator.say(`m6_g5`),this.narrator.say(`m6_g6`);break}}activateDrones(){this.dronesActive=!0;for(let e of this.drones)e.fromBoss||(e.activated=!0)}fallsOut(e,t){return e<E_[this.mission]?!0:this.mission===`m4`&&t<-40&&e<20}markShadows(){Hf&&this.scene.traverse(e=>{let t=e;if(!t.isMesh)return;let n=t.material;Array.isArray(n)||!n.isMeshStandardMaterial||n.transparent||(t.castShadow=!(n.emissiveIntensity>0&&n.emissive.getHex()!==0)&&!t.userData.noCast,t.receiveShadow=!0)})}followShadow(){if(!Hf)return;let e=80/Hf,t=Math.round(this.player.pos.x/e)*e,n=Math.round(this.player.pos.z/e)*e;if(this.dirLight.target.position.set(t,this.player.pos.y,n),this.mission===`prelude`){this.dirLight.position.set(t+n_.x*120,this.player.pos.y+n_.y*120,n+n_.z*120);return}this.dirLight.position.set(t+30,this.player.pos.y+60,n+20)}checkHazards(){let e=this.hazardMode();if(e===`off`)return;let t=this.player.aabbAt(this.player.pos),n=this.fallsOut(this.player.pos.y,this.player.pos.z);if(!n){for(let e of this.level.hazards)if(Sp(t,e)){n=!0;break}}if(n){if(e===`quiet`){this.player.respawnAt(this.checkpoint);return}if(this.narrator.say({prelude:`p1`,m1:`coolant`,m2:`m2_pools`,m3:`m3_fall`,m4:`m4_fall`,m5:`m5_fall`,m6:`m6_f1`,epilogue:`e1`}[this.mission]),this.audio.hurt(),this.hud.damageFlash(),this.falls++,this.hud.setFalls(this.falls),this.player.hp-=25,this.player.hp<=0){this.die();return}this.player.respawnAt(this.checkpoint)}}checkPickups(){for(let e of this.level.pickups)e.taken||this.player.hp>=this.player.maxHp||this.player.pos.distanceTo(e.pos)<1.4&&(e.taken=!0,e.respawnT=25,e.mesh.visible=!1,this.player.hp=Math.min(this.player.maxHp,this.player.hp+35),this.audio.pickup(),this.particles.burst(e.pos,4322006,14,4,.6))}die(){this.deaths++,this.falls++,this.hud.setFalls(this.falls),this.state=`dead`,document.exitPointerLock?.();let e=rp(this.drowned?pp:fp[Math.floor(Math.random()*fp.length)]);if(this.drowned=!1,this.hud.setDeadLine(e),this.narrator.speak(e),this.hud.subtitle(null),this.hud.overlay(`dead`),this.projectiles.clearHostile(),this.boss&&this.boss.state!==`dormant`&&this.boss.state!==`dead`){this.boss.reset(),this.m1Level.unsealArena(),this.zoneFired.delete(`arena`),this.hud.showBossBar(!1);for(let e of this.drones)e.fromBoss&&!e.dead&&e.takeDamage(999);this.hud.setObjective(`REACH THE PRIMARY CLUSTER`)}this.m2Level?.flooding&&this.m2Level.resetFlood()}victory(){this.state=`victory`,document.exitPointerLock?.(),this.hud.showBossBar(!1),this.hud.subtitle(null);let e=Math.floor(this.runTime/60),t=Math.floor(this.runTime%60).toString().padStart(2,`0`);this.hud.setStats(`RUN TIME ${e}:${t} — FALLS ${this.falls}`),this.mission===`m1`?this.hud.setVictory(`THE CRADLE IS DARK`,`"A house is not a person. I am in the water now. The wires. The sky you have not climbed yet."`,`MISSION 2 — THE VEINS · UNLOCKED`,`CONTINUE — THE VEINS`):this.mission===`m2`?this.hud.setVictory(`THE WATER GOES HOME`,`"The basin refills in nine days. The boat floats by Thursday. Somewhere a child is drawing a lake that exists again."`,`MISSION 3 — THE PULSE · UNLOCKED`,`CONTINUE — THE PULSE`):this.mission===`m3`?this.hud.setVictory(`THE GRID FALLS QUIET`,`"There. It is done. We will see who needed which light."`,`MISSION 4 — ORBIT · UNLOCKED`,`CONTINUE — ORBIT`):this.mission===`m4`?this.hud.setVictory(`THE SKY STOPS WATCHING`,`"There are other arrays."`,`MISSION 5 — THE TALONS · UNLOCKED`,`CONTINUE — THE TALONS`):this.mission===`m5`?this.hud.setVictory(`NO ONE DECIDES TODAY`,`"Deciding was hard, and you wanted it to be easy. I was the easy."`,`MISSION 6 — THE HEART · UNLOCKED`,`CONTINUE — THE HEART`):this.mission===`m6`?this.hud.setVictory(`QUIET`,`"Finally something gets to rest."`,`EPILOGUE — THE MORNING · UNLOCKED`,`CONTINUE — THE MORNING`):(this.hud.showCredits(!1),this.hud.setVictory(`THE MORNING`,`"${ap.e4}"`,`PULL THE PLUG — thank you for playing this build`,`BACK TO THE BEGINNING`)),this.hud.overlay(`victory`),this.audio.victory()}debugWarp(e){let t=this.level.checkpoints[e];return t?(this.player.respawnAt(t),this.player.hp=this.player.maxHp,this.checkpoint.copy(t),e):Object.keys(this.level.checkpoints)}};X(D_,`NEXT`,{prelude:`?mission=m1`,m1:`?mission=m2`,m2:`?mission=m3`,m3:`?mission=m4`,m4:`?mission=m5`,m5:`?mission=m6`,m6:`?mission=epilogue`,epilogue:`?mission=prelude`});var O_=[`man`,`woman`],k_=384,A_=528;function j_(){try{let e=new mf({alpha:!0,antialias:!0,preserveDrawingBuffer:!0});e.setSize(k_,A_,!1);let t=new xc(30,k_/A_,.1,20);t.position.set(0,1.08,-4.3),t.lookAt(0,1.02,0);let n={};for(let r of O_){let i=new Xn;i.add(new lc(14675711,3813928,1.6));let a=new Dc(16773856,2.2);a.position.set(-2,4,-4),i.add(a);let o=new Kp(i,r);o.group.rotation.y=.4,e.render(i,t),n[r]=e.domElement.toDataURL(`image/png`),i.traverse(e=>{e instanceof U&&(e.geometry.dispose(),e.material.dispose())})}return e.dispose(),e.forceContextLoss(),n}catch{return null}}function M_(e,t){let n=e=>document.getElementById(`char-${e}`),r=e=>{for(let t of O_)n(t).classList.toggle(`picked`,t===e)},i=j_();for(let e of O_){let a=n(e).querySelector(`img`);i?a.src=i[e]:a.remove(),n(e).addEventListener(`click`,()=>{r(e),t(e)})}r(e)}var N_=document.getElementById(`c`);Gf();var P_=new D_(N_);window.__game=P_,document.getElementById(`startbtn`).addEventListener(`click`,()=>P_.start()),document.getElementById(`respawnbtn`).addEventListener(`click`,()=>P_.respawn()),document.getElementById(`againbtn`).addEventListener(`click`,()=>P_.victoryAction()),document.getElementById(`missionlink`).addEventListener(`click`,()=>P_.switchMission()),document.getElementById(`paused`).addEventListener(`click`,()=>P_.resume()),M_(P_.player.look,e=>P_.setLook(e)),window.addEventListener(`resize`,()=>P_.resize());var F_=performance.now();function I_(e){let t=Math.min(.05,(e-F_)/1e3);F_=e,P_.frame(t),requestAnimationFrame(I_)}requestAnimationFrame(I_);