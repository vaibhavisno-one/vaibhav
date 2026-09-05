(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))n(i);new MutationObserver(i=>{for(const r of i)if(r.type==="childList")for(const o of r.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&n(o)}).observe(document,{childList:!0,subtree:!0});function e(i){const r={};return i.integrity&&(r.integrity=i.integrity),i.referrerPolicy&&(r.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?r.credentials="include":i.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function n(i){if(i.ep)return;i.ep=!0;const r=e(i);fetch(i.href,r)}})();/**
 * @license
 * Copyright 2010-2023 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const _r="160",sl=0,Dr=1,rl=2,po=1,mo=2,ln=3,En=0,De=1,fe=2,un=0,ri=1,oi=2,Ir=3,Ur=4,al=5,In=100,ol=101,ll=102,Nr=103,Fr=104,cl=200,hl=201,ul=202,dl=203,ar=204,or=205,fl=206,pl=207,ml=208,gl=209,_l=210,vl=211,xl=212,Ml=213,yl=214,Sl=0,Tl=1,El=2,ls=3,bl=4,wl=5,Al=6,Rl=7,go=0,Cl=1,Pl=2,Sn=0,Ll=1,Dl=2,Il=3,_o=4,Ul=5,Nl=6,vo=300,li=301,ci=302,lr=303,cr=304,vs=306,Ai=1e3,je=1001,hr=1002,Ce=1003,Or=1004,As=1005,He=1006,Fl=1007,Ri=1008,Tn=1009,Ol=1010,Bl=1011,vr=1012,xo=1013,Mn=1014,yn=1015,dn=1016,Mo=1017,yo=1018,Fn=1020,zl=1021,$e=1023,kl=1024,Gl=1025,On=1026,hi=1027,Vl=1028,So=1029,Hl=1030,To=1031,Eo=1033,Rs=33776,Cs=33777,Ps=33778,Ls=33779,Br=35840,zr=35841,kr=35842,Gr=35843,bo=36196,Vr=37492,Hr=37496,Wr=37808,Xr=37809,qr=37810,Yr=37811,Kr=37812,jr=37813,$r=37814,Zr=37815,Jr=37816,Qr=37817,ta=37818,ea=37819,na=37820,ia=37821,Ds=36492,sa=36494,ra=36495,Wl=36283,aa=36284,oa=36285,la=36286,wo=3e3,Bn=3001,Xl=3200,ql=3201,Ao=0,Yl=1,We="",Jt="srgb",fn="srgb-linear",xr="display-p3",xs="display-p3-linear",cs="linear",Zt="srgb",hs="rec709",us="p3",kn=7680,ca=519,Kl=512,jl=513,$l=514,Ro=515,Zl=516,Jl=517,Ql=518,tc=519,ha=35044,ua="300 es",ur=1035,hn=2e3,ds=2001;class pi{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[t]===void 0&&(n[t]=[]),n[t].indexOf(e)===-1&&n[t].push(e)}hasEventListener(t,e){if(this._listeners===void 0)return!1;const n=this._listeners;return n[t]!==void 0&&n[t].indexOf(e)!==-1}removeEventListener(t,e){if(this._listeners===void 0)return;const i=this._listeners[t];if(i!==void 0){const r=i.indexOf(e);r!==-1&&i.splice(r,1)}}dispatchEvent(t){if(this._listeners===void 0)return;const n=this._listeners[t.type];if(n!==void 0){t.target=this;const i=n.slice(0);for(let r=0,o=i.length;r<o;r++)i[r].call(this,t);t.target=null}}}const _e=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let da=1234567;const Ti=Math.PI/180,ui=180/Math.PI;function mi(){const s=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(_e[s&255]+_e[s>>8&255]+_e[s>>16&255]+_e[s>>24&255]+"-"+_e[t&255]+_e[t>>8&255]+"-"+_e[t>>16&15|64]+_e[t>>24&255]+"-"+_e[e&63|128]+_e[e>>8&255]+"-"+_e[e>>16&255]+_e[e>>24&255]+_e[n&255]+_e[n>>8&255]+_e[n>>16&255]+_e[n>>24&255]).toLowerCase()}function Pe(s,t,e){return Math.max(t,Math.min(e,s))}function Mr(s,t){return(s%t+t)%t}function ec(s,t,e,n,i){return n+(s-t)*(i-n)/(e-t)}function nc(s,t,e){return s!==t?(e-s)/(t-s):0}function Ei(s,t,e){return(1-e)*s+e*t}function ic(s,t,e,n){return Ei(s,t,1-Math.exp(-e*n))}function sc(s,t=1){return t-Math.abs(Mr(s,t*2)-t)}function rc(s,t,e){return s<=t?0:s>=e?1:(s=(s-t)/(e-t),s*s*(3-2*s))}function ac(s,t,e){return s<=t?0:s>=e?1:(s=(s-t)/(e-t),s*s*s*(s*(s*6-15)+10))}function oc(s,t){return s+Math.floor(Math.random()*(t-s+1))}function lc(s,t){return s+Math.random()*(t-s)}function cc(s){return s*(.5-Math.random())}function hc(s){s!==void 0&&(da=s);let t=da+=1831565813;return t=Math.imul(t^t>>>15,t|1),t^=t+Math.imul(t^t>>>7,t|61),((t^t>>>14)>>>0)/4294967296}function uc(s){return s*Ti}function dc(s){return s*ui}function dr(s){return(s&s-1)===0&&s!==0}function fc(s){return Math.pow(2,Math.ceil(Math.log(s)/Math.LN2))}function fs(s){return Math.pow(2,Math.floor(Math.log(s)/Math.LN2))}function pc(s,t,e,n,i){const r=Math.cos,o=Math.sin,a=r(e/2),l=o(e/2),c=r((t+n)/2),h=o((t+n)/2),u=r((t-n)/2),d=o((t-n)/2),p=r((n-t)/2),g=o((n-t)/2);switch(i){case"XYX":s.set(a*h,l*u,l*d,a*c);break;case"YZY":s.set(l*d,a*h,l*u,a*c);break;case"ZXZ":s.set(l*u,l*d,a*h,a*c);break;case"XZX":s.set(a*h,l*g,l*p,a*c);break;case"YXY":s.set(l*p,a*h,l*g,a*c);break;case"ZYZ":s.set(l*g,l*p,a*h,a*c);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+i)}}function ni(s,t){switch(t.constructor){case Float32Array:return s;case Uint32Array:return s/4294967295;case Uint16Array:return s/65535;case Uint8Array:return s/255;case Int32Array:return Math.max(s/2147483647,-1);case Int16Array:return Math.max(s/32767,-1);case Int8Array:return Math.max(s/127,-1);default:throw new Error("Invalid component type.")}}function we(s,t){switch(t.constructor){case Float32Array:return s;case Uint32Array:return Math.round(s*4294967295);case Uint16Array:return Math.round(s*65535);case Uint8Array:return Math.round(s*255);case Int32Array:return Math.round(s*2147483647);case Int16Array:return Math.round(s*32767);case Int8Array:return Math.round(s*127);default:throw new Error("Invalid component type.")}}const cn={DEG2RAD:Ti,RAD2DEG:ui,generateUUID:mi,clamp:Pe,euclideanModulo:Mr,mapLinear:ec,inverseLerp:nc,lerp:Ei,damp:ic,pingpong:sc,smoothstep:rc,smootherstep:ac,randInt:oc,randFloat:lc,randFloatSpread:cc,seededRandom:hc,degToRad:uc,radToDeg:dc,isPowerOfTwo:dr,ceilPowerOfTwo:fc,floorPowerOfTwo:fs,setQuaternionFromProperEuler:pc,normalize:we,denormalize:ni};class ht{constructor(t=0,e=0){ht.prototype.isVector2=!0,this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){const e=this.x,n=this.y,i=t.elements;return this.x=i[0]*e+i[3]*n+i[6],this.y=i[1]*e+i[4]*n+i[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const n=this.dot(t)/e;return Math.acos(Pe(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,n=this.y-t.y;return e*e+n*n}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){const n=Math.cos(e),i=Math.sin(e),r=this.x-t.x,o=this.y-t.y;return this.x=r*n-o*i+t.x,this.y=r*i+o*n+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Gt{constructor(t,e,n,i,r,o,a,l,c){Gt.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,n,i,r,o,a,l,c)}set(t,e,n,i,r,o,a,l,c){const h=this.elements;return h[0]=t,h[1]=i,h[2]=a,h[3]=e,h[4]=r,h[5]=l,h[6]=n,h[7]=o,h[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){const e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],this}extractBasis(t,e,n){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(t){const e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const n=t.elements,i=e.elements,r=this.elements,o=n[0],a=n[3],l=n[6],c=n[1],h=n[4],u=n[7],d=n[2],p=n[5],g=n[8],_=i[0],m=i[3],f=i[6],E=i[1],v=i[4],S=i[7],P=i[2],w=i[5],A=i[8];return r[0]=o*_+a*E+l*P,r[3]=o*m+a*v+l*w,r[6]=o*f+a*S+l*A,r[1]=c*_+h*E+u*P,r[4]=c*m+h*v+u*w,r[7]=c*f+h*S+u*A,r[2]=d*_+p*E+g*P,r[5]=d*m+p*v+g*w,r[8]=d*f+p*S+g*A,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){const t=this.elements,e=t[0],n=t[1],i=t[2],r=t[3],o=t[4],a=t[5],l=t[6],c=t[7],h=t[8];return e*o*h-e*a*c-n*r*h+n*a*l+i*r*c-i*o*l}invert(){const t=this.elements,e=t[0],n=t[1],i=t[2],r=t[3],o=t[4],a=t[5],l=t[6],c=t[7],h=t[8],u=h*o-a*c,d=a*l-h*r,p=c*r-o*l,g=e*u+n*d+i*p;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);const _=1/g;return t[0]=u*_,t[1]=(i*c-h*n)*_,t[2]=(a*n-i*o)*_,t[3]=d*_,t[4]=(h*e-i*l)*_,t[5]=(i*r-a*e)*_,t[6]=p*_,t[7]=(n*l-c*e)*_,t[8]=(o*e-n*r)*_,this}transpose(){let t;const e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){const e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,n,i,r,o,a){const l=Math.cos(r),c=Math.sin(r);return this.set(n*l,n*c,-n*(l*o+c*a)+o+t,-i*c,i*l,-i*(-c*o+l*a)+a+e,0,0,1),this}scale(t,e){return this.premultiply(Is.makeScale(t,e)),this}rotate(t){return this.premultiply(Is.makeRotation(-t)),this}translate(t,e){return this.premultiply(Is.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,n,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){const e=this.elements,n=t.elements;for(let i=0;i<9;i++)if(e[i]!==n[i])return!1;return!0}fromArray(t,e=0){for(let n=0;n<9;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){const n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t}clone(){return new this.constructor().fromArray(this.elements)}}const Is=new Gt;function Co(s){for(let t=s.length-1;t>=0;--t)if(s[t]>=65535)return!0;return!1}function ps(s){return document.createElementNS("http://www.w3.org/1999/xhtml",s)}function mc(){const s=ps("canvas");return s.style.display="block",s}const fa={};function bi(s){s in fa||(fa[s]=!0,console.warn(s))}const pa=new Gt().set(.8224621,.177538,0,.0331941,.9668058,0,.0170827,.0723974,.9105199),ma=new Gt().set(1.2249401,-.2249404,0,-.0420569,1.0420571,0,-.0196376,-.0786361,1.0982735),Ni={[fn]:{transfer:cs,primaries:hs,toReference:s=>s,fromReference:s=>s},[Jt]:{transfer:Zt,primaries:hs,toReference:s=>s.convertSRGBToLinear(),fromReference:s=>s.convertLinearToSRGB()},[xs]:{transfer:cs,primaries:us,toReference:s=>s.applyMatrix3(ma),fromReference:s=>s.applyMatrix3(pa)},[xr]:{transfer:Zt,primaries:us,toReference:s=>s.convertSRGBToLinear().applyMatrix3(ma),fromReference:s=>s.applyMatrix3(pa).convertLinearToSRGB()}},gc=new Set([fn,xs]),qt={enabled:!0,_workingColorSpace:fn,get workingColorSpace(){return this._workingColorSpace},set workingColorSpace(s){if(!gc.has(s))throw new Error(`Unsupported working color space, "${s}".`);this._workingColorSpace=s},convert:function(s,t,e){if(this.enabled===!1||t===e||!t||!e)return s;const n=Ni[t].toReference,i=Ni[e].fromReference;return i(n(s))},fromWorkingColorSpace:function(s,t){return this.convert(s,this._workingColorSpace,t)},toWorkingColorSpace:function(s,t){return this.convert(s,t,this._workingColorSpace)},getPrimaries:function(s){return Ni[s].primaries},getTransfer:function(s){return s===We?cs:Ni[s].transfer}};function ai(s){return s<.04045?s*.0773993808:Math.pow(s*.9478672986+.0521327014,2.4)}function Us(s){return s<.0031308?s*12.92:1.055*Math.pow(s,.41666)-.055}let Gn;class Po{static getDataURL(t){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let e;if(t instanceof HTMLCanvasElement)e=t;else{Gn===void 0&&(Gn=ps("canvas")),Gn.width=t.width,Gn.height=t.height;const n=Gn.getContext("2d");t instanceof ImageData?n.putImageData(t,0,0):n.drawImage(t,0,0,t.width,t.height),e=Gn}return e.width>2048||e.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",t),e.toDataURL("image/jpeg",.6)):e.toDataURL("image/png")}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){const e=ps("canvas");e.width=t.width,e.height=t.height;const n=e.getContext("2d");n.drawImage(t,0,0,t.width,t.height);const i=n.getImageData(0,0,t.width,t.height),r=i.data;for(let o=0;o<r.length;o++)r[o]=ai(r[o]/255)*255;return n.putImageData(i,0,0),e}else if(t.data){const e=t.data.slice(0);for(let n=0;n<e.length;n++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[n]=Math.floor(ai(e[n]/255)*255):e[n]=ai(e[n]);return{data:e,width:t.width,height:t.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}}let _c=0;class Lo{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:_c++}),this.uuid=mi(),this.data=t,this.version=0}set needsUpdate(t){t===!0&&this.version++}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];const n={uuid:this.uuid,url:""},i=this.data;if(i!==null){let r;if(Array.isArray(i)){r=[];for(let o=0,a=i.length;o<a;o++)i[o].isDataTexture?r.push(Ns(i[o].image)):r.push(Ns(i[o]))}else r=Ns(i);n.url=r}return e||(t.images[this.uuid]=n),n}}function Ns(s){return typeof HTMLImageElement<"u"&&s instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&s instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&s instanceof ImageBitmap?Po.getDataURL(s):s.data?{data:Array.from(s.data),width:s.width,height:s.height,type:s.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let vc=0;class Ie extends pi{constructor(t=Ie.DEFAULT_IMAGE,e=Ie.DEFAULT_MAPPING,n=je,i=je,r=He,o=Ri,a=$e,l=Tn,c=Ie.DEFAULT_ANISOTROPY,h=We){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:vc++}),this.uuid=mi(),this.name="",this.source=new Lo(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=n,this.wrapT=i,this.magFilter=r,this.minFilter=o,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=l,this.offset=new ht(0,0),this.repeat=new ht(1,1),this.center=new ht(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Gt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,typeof h=="string"?this.colorSpace=h:(bi("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=h===Bn?Jt:We),this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.needsPMREMUpdate=!1}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];const n={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),e||(t.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==vo)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case Ai:t.x=t.x-Math.floor(t.x);break;case je:t.x=t.x<0?0:1;break;case hr:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case Ai:t.y=t.y-Math.floor(t.y);break;case je:t.y=t.y<0?0:1;break;case hr:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}get encoding(){return bi("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace===Jt?Bn:wo}set encoding(t){bi("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=t===Bn?Jt:We}}Ie.DEFAULT_IMAGE=null;Ie.DEFAULT_MAPPING=vo;Ie.DEFAULT_ANISOTROPY=1;class Qt{constructor(t=0,e=0,n=0,i=1){Qt.prototype.isVector4=!0,this.x=t,this.y=e,this.z=n,this.w=i}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,n,i){return this.x=t,this.y=e,this.z=n,this.w=i,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){const e=this.x,n=this.y,i=this.z,r=this.w,o=t.elements;return this.x=o[0]*e+o[4]*n+o[8]*i+o[12]*r,this.y=o[1]*e+o[5]*n+o[9]*i+o[13]*r,this.z=o[2]*e+o[6]*n+o[10]*i+o[14]*r,this.w=o[3]*e+o[7]*n+o[11]*i+o[15]*r,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);const e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,n,i,r;const l=t.elements,c=l[0],h=l[4],u=l[8],d=l[1],p=l[5],g=l[9],_=l[2],m=l[6],f=l[10];if(Math.abs(h-d)<.01&&Math.abs(u-_)<.01&&Math.abs(g-m)<.01){if(Math.abs(h+d)<.1&&Math.abs(u+_)<.1&&Math.abs(g+m)<.1&&Math.abs(c+p+f-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;const v=(c+1)/2,S=(p+1)/2,P=(f+1)/2,w=(h+d)/4,A=(u+_)/4,G=(g+m)/4;return v>S&&v>P?v<.01?(n=0,i=.707106781,r=.707106781):(n=Math.sqrt(v),i=w/n,r=A/n):S>P?S<.01?(n=.707106781,i=0,r=.707106781):(i=Math.sqrt(S),n=w/i,r=G/i):P<.01?(n=.707106781,i=.707106781,r=0):(r=Math.sqrt(P),n=A/r,i=G/r),this.set(n,i,r,e),this}let E=Math.sqrt((m-g)*(m-g)+(u-_)*(u-_)+(d-h)*(d-h));return Math.abs(E)<.001&&(E=1),this.x=(m-g)/E,this.y=(u-_)/E,this.z=(d-h)/E,this.w=Math.acos((c+p+f-1)/2),this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this.w=Math.max(t.w,Math.min(e.w,this.w)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this.w=Math.max(t,Math.min(e,this.w)),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this.w=t.w+(e.w-t.w)*n,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class xc extends pi{constructor(t=1,e=1,n={}){super(),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=1,this.scissor=new Qt(0,0,t,e),this.scissorTest=!1,this.viewport=new Qt(0,0,t,e);const i={width:t,height:e,depth:1};n.encoding!==void 0&&(bi("THREE.WebGLRenderTarget: option.encoding has been replaced by option.colorSpace."),n.colorSpace=n.encoding===Bn?Jt:We),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:He,depthBuffer:!0,stencilBuffer:!1,depthTexture:null,samples:0},n),this.texture=new Ie(i,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.flipY=!1,this.texture.generateMipmaps=n.generateMipmaps,this.texture.internalFormat=n.internalFormat,this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.depthTexture=n.depthTexture,this.samples=n.samples}setSize(t,e,n=1){(this.width!==t||this.height!==e||this.depth!==n)&&(this.width=t,this.height=e,this.depth=n,this.texture.image.width=t,this.texture.image.height=e,this.texture.image.depth=n,this.dispose()),this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.texture=t.texture.clone(),this.texture.isRenderTargetTexture=!0;const e=Object.assign({},t.texture.image);return this.texture.source=new Lo(e),this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Ze extends xc{constructor(t=1,e=1,n={}){super(t,e,n),this.isWebGLRenderTarget=!0}}class Do extends Ie{constructor(t=null,e=1,n=1,i=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:n,depth:i},this.magFilter=Ce,this.minFilter=Ce,this.wrapR=je,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Mc extends Ie{constructor(t=null,e=1,n=1,i=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:n,depth:i},this.magFilter=Ce,this.minFilter=Ce,this.wrapR=je,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Ci{constructor(t=0,e=0,n=0,i=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=n,this._w=i}static slerpFlat(t,e,n,i,r,o,a){let l=n[i+0],c=n[i+1],h=n[i+2],u=n[i+3];const d=r[o+0],p=r[o+1],g=r[o+2],_=r[o+3];if(a===0){t[e+0]=l,t[e+1]=c,t[e+2]=h,t[e+3]=u;return}if(a===1){t[e+0]=d,t[e+1]=p,t[e+2]=g,t[e+3]=_;return}if(u!==_||l!==d||c!==p||h!==g){let m=1-a;const f=l*d+c*p+h*g+u*_,E=f>=0?1:-1,v=1-f*f;if(v>Number.EPSILON){const P=Math.sqrt(v),w=Math.atan2(P,f*E);m=Math.sin(m*w)/P,a=Math.sin(a*w)/P}const S=a*E;if(l=l*m+d*S,c=c*m+p*S,h=h*m+g*S,u=u*m+_*S,m===1-a){const P=1/Math.sqrt(l*l+c*c+h*h+u*u);l*=P,c*=P,h*=P,u*=P}}t[e]=l,t[e+1]=c,t[e+2]=h,t[e+3]=u}static multiplyQuaternionsFlat(t,e,n,i,r,o){const a=n[i],l=n[i+1],c=n[i+2],h=n[i+3],u=r[o],d=r[o+1],p=r[o+2],g=r[o+3];return t[e]=a*g+h*u+l*p-c*d,t[e+1]=l*g+h*d+c*u-a*p,t[e+2]=c*g+h*p+a*d-l*u,t[e+3]=h*g-a*u-l*d-c*p,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,n,i){return this._x=t,this._y=e,this._z=n,this._w=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){const n=t._x,i=t._y,r=t._z,o=t._order,a=Math.cos,l=Math.sin,c=a(n/2),h=a(i/2),u=a(r/2),d=l(n/2),p=l(i/2),g=l(r/2);switch(o){case"XYZ":this._x=d*h*u+c*p*g,this._y=c*p*u-d*h*g,this._z=c*h*g+d*p*u,this._w=c*h*u-d*p*g;break;case"YXZ":this._x=d*h*u+c*p*g,this._y=c*p*u-d*h*g,this._z=c*h*g-d*p*u,this._w=c*h*u+d*p*g;break;case"ZXY":this._x=d*h*u-c*p*g,this._y=c*p*u+d*h*g,this._z=c*h*g+d*p*u,this._w=c*h*u-d*p*g;break;case"ZYX":this._x=d*h*u-c*p*g,this._y=c*p*u+d*h*g,this._z=c*h*g-d*p*u,this._w=c*h*u+d*p*g;break;case"YZX":this._x=d*h*u+c*p*g,this._y=c*p*u+d*h*g,this._z=c*h*g-d*p*u,this._w=c*h*u-d*p*g;break;case"XZY":this._x=d*h*u-c*p*g,this._y=c*p*u-d*h*g,this._z=c*h*g+d*p*u,this._w=c*h*u+d*p*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){const n=e/2,i=Math.sin(n);return this._x=t.x*i,this._y=t.y*i,this._z=t.z*i,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(t){const e=t.elements,n=e[0],i=e[4],r=e[8],o=e[1],a=e[5],l=e[9],c=e[2],h=e[6],u=e[10],d=n+a+u;if(d>0){const p=.5/Math.sqrt(d+1);this._w=.25/p,this._x=(h-l)*p,this._y=(r-c)*p,this._z=(o-i)*p}else if(n>a&&n>u){const p=2*Math.sqrt(1+n-a-u);this._w=(h-l)/p,this._x=.25*p,this._y=(i+o)/p,this._z=(r+c)/p}else if(a>u){const p=2*Math.sqrt(1+a-n-u);this._w=(r-c)/p,this._x=(i+o)/p,this._y=.25*p,this._z=(l+h)/p}else{const p=2*Math.sqrt(1+u-n-a);this._w=(o-i)/p,this._x=(r+c)/p,this._y=(l+h)/p,this._z=.25*p}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let n=t.dot(e)+1;return n<Number.EPSILON?(n=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=n):(this._x=0,this._y=-t.z,this._z=t.y,this._w=n)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=n),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(Pe(this.dot(t),-1,1)))}rotateTowards(t,e){const n=this.angleTo(t);if(n===0)return this;const i=Math.min(1,e/n);return this.slerp(t,i),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){const n=t._x,i=t._y,r=t._z,o=t._w,a=e._x,l=e._y,c=e._z,h=e._w;return this._x=n*h+o*a+i*c-r*l,this._y=i*h+o*l+r*a-n*c,this._z=r*h+o*c+n*l-i*a,this._w=o*h-n*a-i*l-r*c,this._onChangeCallback(),this}slerp(t,e){if(e===0)return this;if(e===1)return this.copy(t);const n=this._x,i=this._y,r=this._z,o=this._w;let a=o*t._w+n*t._x+i*t._y+r*t._z;if(a<0?(this._w=-t._w,this._x=-t._x,this._y=-t._y,this._z=-t._z,a=-a):this.copy(t),a>=1)return this._w=o,this._x=n,this._y=i,this._z=r,this;const l=1-a*a;if(l<=Number.EPSILON){const p=1-e;return this._w=p*o+e*this._w,this._x=p*n+e*this._x,this._y=p*i+e*this._y,this._z=p*r+e*this._z,this.normalize(),this}const c=Math.sqrt(l),h=Math.atan2(c,a),u=Math.sin((1-e)*h)/c,d=Math.sin(e*h)/c;return this._w=o*u+this._w*d,this._x=n*u+this._x*d,this._y=i*u+this._y*d,this._z=r*u+this._z*d,this._onChangeCallback(),this}slerpQuaternions(t,e,n){return this.copy(t).slerp(e,n)}random(){const t=Math.random(),e=Math.sqrt(1-t),n=Math.sqrt(t),i=2*Math.PI*Math.random(),r=2*Math.PI*Math.random();return this.set(e*Math.cos(i),n*Math.sin(r),n*Math.cos(r),e*Math.sin(i))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class R{constructor(t=0,e=0,n=0){R.prototype.isVector3=!0,this.x=t,this.y=e,this.z=n}set(t,e,n){return n===void 0&&(n=this.z),this.x=t,this.y=e,this.z=n,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(ga.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(ga.setFromAxisAngle(t,e))}applyMatrix3(t){const e=this.x,n=this.y,i=this.z,r=t.elements;return this.x=r[0]*e+r[3]*n+r[6]*i,this.y=r[1]*e+r[4]*n+r[7]*i,this.z=r[2]*e+r[5]*n+r[8]*i,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){const e=this.x,n=this.y,i=this.z,r=t.elements,o=1/(r[3]*e+r[7]*n+r[11]*i+r[15]);return this.x=(r[0]*e+r[4]*n+r[8]*i+r[12])*o,this.y=(r[1]*e+r[5]*n+r[9]*i+r[13])*o,this.z=(r[2]*e+r[6]*n+r[10]*i+r[14])*o,this}applyQuaternion(t){const e=this.x,n=this.y,i=this.z,r=t.x,o=t.y,a=t.z,l=t.w,c=2*(o*i-a*n),h=2*(a*e-r*i),u=2*(r*n-o*e);return this.x=e+l*c+o*u-a*h,this.y=n+l*h+a*c-r*u,this.z=i+l*u+r*h-o*c,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){const e=this.x,n=this.y,i=this.z,r=t.elements;return this.x=r[0]*e+r[4]*n+r[8]*i,this.y=r[1]*e+r[5]*n+r[9]*i,this.z=r[2]*e+r[6]*n+r[10]*i,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){const n=t.x,i=t.y,r=t.z,o=e.x,a=e.y,l=e.z;return this.x=i*l-r*a,this.y=r*o-n*l,this.z=n*a-i*o,this}projectOnVector(t){const e=t.lengthSq();if(e===0)return this.set(0,0,0);const n=t.dot(this)/e;return this.copy(t).multiplyScalar(n)}projectOnPlane(t){return Fs.copy(this).projectOnVector(t),this.sub(Fs)}reflect(t){return this.sub(Fs.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const n=this.dot(t)/e;return Math.acos(Pe(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,n=this.y-t.y,i=this.z-t.z;return e*e+n*n+i*i}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,n){const i=Math.sin(e)*t;return this.x=i*Math.sin(n),this.y=Math.cos(e)*t,this.z=i*Math.cos(n),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,n){return this.x=t*Math.sin(e),this.y=n,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){const e=this.setFromMatrixColumn(t,0).length(),n=this.setFromMatrixColumn(t,1).length(),i=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=n,this.z=i,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const t=(Math.random()-.5)*2,e=Math.random()*Math.PI*2,n=Math.sqrt(1-t**2);return this.x=n*Math.cos(e),this.y=n*Math.sin(e),this.z=t,this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Fs=new R,ga=new Ci;class Pi{constructor(t=new R(1/0,1/0,1/0),e=new R(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e+=3)this.expandByPoint(Xe.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,n=t.count;e<n;e++)this.expandByPoint(Xe.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){const n=Xe.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(n),this.max.copy(t).add(n),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);const n=t.geometry;if(n!==void 0){const r=n.getAttribute("position");if(e===!0&&r!==void 0&&t.isInstancedMesh!==!0)for(let o=0,a=r.count;o<a;o++)t.isMesh===!0?t.getVertexPosition(o,Xe):Xe.fromBufferAttribute(r,o),Xe.applyMatrix4(t.matrixWorld),this.expandByPoint(Xe);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),Fi.copy(t.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),Fi.copy(n.boundingBox)),Fi.applyMatrix4(t.matrixWorld),this.union(Fi)}const i=t.children;for(let r=0,o=i.length;r<o;r++)this.expandByObject(i[r],e);return this}containsPoint(t){return!(t.x<this.min.x||t.x>this.max.x||t.y<this.min.y||t.y>this.max.y||t.z<this.min.z||t.z>this.max.z)}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return!(t.max.x<this.min.x||t.min.x>this.max.x||t.max.y<this.min.y||t.min.y>this.max.y||t.max.z<this.min.z||t.min.z>this.max.z)}intersectsSphere(t){return this.clampPoint(t.center,Xe),Xe.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,n;return t.normal.x>0?(e=t.normal.x*this.min.x,n=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,n=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,n+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,n+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,n+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,n+=t.normal.z*this.min.z),e<=-t.constant&&n>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(vi),Oi.subVectors(this.max,vi),Vn.subVectors(t.a,vi),Hn.subVectors(t.b,vi),Wn.subVectors(t.c,vi),pn.subVectors(Hn,Vn),mn.subVectors(Wn,Hn),An.subVectors(Vn,Wn);let e=[0,-pn.z,pn.y,0,-mn.z,mn.y,0,-An.z,An.y,pn.z,0,-pn.x,mn.z,0,-mn.x,An.z,0,-An.x,-pn.y,pn.x,0,-mn.y,mn.x,0,-An.y,An.x,0];return!Os(e,Vn,Hn,Wn,Oi)||(e=[1,0,0,0,1,0,0,0,1],!Os(e,Vn,Hn,Wn,Oi))?!1:(Bi.crossVectors(pn,mn),e=[Bi.x,Bi.y,Bi.z],Os(e,Vn,Hn,Wn,Oi))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,Xe).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(Xe).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(nn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),nn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),nn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),nn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),nn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),nn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),nn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),nn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(nn),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}}const nn=[new R,new R,new R,new R,new R,new R,new R,new R],Xe=new R,Fi=new Pi,Vn=new R,Hn=new R,Wn=new R,pn=new R,mn=new R,An=new R,vi=new R,Oi=new R,Bi=new R,Rn=new R;function Os(s,t,e,n,i){for(let r=0,o=s.length-3;r<=o;r+=3){Rn.fromArray(s,r);const a=i.x*Math.abs(Rn.x)+i.y*Math.abs(Rn.y)+i.z*Math.abs(Rn.z),l=t.dot(Rn),c=e.dot(Rn),h=n.dot(Rn);if(Math.max(-Math.max(l,c,h),Math.min(l,c,h))>a)return!1}return!0}const yc=new Pi,xi=new R,Bs=new R;class Li{constructor(t=new R,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){const n=this.center;e!==void 0?n.copy(e):yc.setFromPoints(t).getCenter(n);let i=0;for(let r=0,o=t.length;r<o;r++)i=Math.max(i,n.distanceToSquared(t[r]));return this.radius=Math.sqrt(i),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){const e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){const n=this.center.distanceToSquared(t);return e.copy(t),n>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;xi.subVectors(t,this.center);const e=xi.lengthSq();if(e>this.radius*this.radius){const n=Math.sqrt(e),i=(n-this.radius)*.5;this.center.addScaledVector(xi,i/n),this.radius+=i}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(Bs.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(xi.copy(t.center).add(Bs)),this.expandByPoint(xi.copy(t.center).sub(Bs))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}}const sn=new R,zs=new R,zi=new R,gn=new R,ks=new R,ki=new R,Gs=new R;class Ms{constructor(t=new R,e=new R(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,sn)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);const n=e.dot(this.direction);return n<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){const e=sn.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(sn.copy(this.origin).addScaledVector(this.direction,e),sn.distanceToSquared(t))}distanceSqToSegment(t,e,n,i){zs.copy(t).add(e).multiplyScalar(.5),zi.copy(e).sub(t).normalize(),gn.copy(this.origin).sub(zs);const r=t.distanceTo(e)*.5,o=-this.direction.dot(zi),a=gn.dot(this.direction),l=-gn.dot(zi),c=gn.lengthSq(),h=Math.abs(1-o*o);let u,d,p,g;if(h>0)if(u=o*l-a,d=o*a-l,g=r*h,u>=0)if(d>=-g)if(d<=g){const _=1/h;u*=_,d*=_,p=u*(u+o*d+2*a)+d*(o*u+d+2*l)+c}else d=r,u=Math.max(0,-(o*d+a)),p=-u*u+d*(d+2*l)+c;else d=-r,u=Math.max(0,-(o*d+a)),p=-u*u+d*(d+2*l)+c;else d<=-g?(u=Math.max(0,-(-o*r+a)),d=u>0?-r:Math.min(Math.max(-r,-l),r),p=-u*u+d*(d+2*l)+c):d<=g?(u=0,d=Math.min(Math.max(-r,-l),r),p=d*(d+2*l)+c):(u=Math.max(0,-(o*r+a)),d=u>0?r:Math.min(Math.max(-r,-l),r),p=-u*u+d*(d+2*l)+c);else d=o>0?-r:r,u=Math.max(0,-(o*d+a)),p=-u*u+d*(d+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,u),i&&i.copy(zs).addScaledVector(zi,d),p}intersectSphere(t,e){sn.subVectors(t.center,this.origin);const n=sn.dot(this.direction),i=sn.dot(sn)-n*n,r=t.radius*t.radius;if(i>r)return null;const o=Math.sqrt(r-i),a=n-o,l=n+o;return l<0?null:a<0?this.at(l,e):this.at(a,e)}intersectsSphere(t){return this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){const e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(t.normal)+t.constant)/e;return n>=0?n:null}intersectPlane(t,e){const n=this.distanceToPlane(t);return n===null?null:this.at(n,e)}intersectsPlane(t){const e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let n,i,r,o,a,l;const c=1/this.direction.x,h=1/this.direction.y,u=1/this.direction.z,d=this.origin;return c>=0?(n=(t.min.x-d.x)*c,i=(t.max.x-d.x)*c):(n=(t.max.x-d.x)*c,i=(t.min.x-d.x)*c),h>=0?(r=(t.min.y-d.y)*h,o=(t.max.y-d.y)*h):(r=(t.max.y-d.y)*h,o=(t.min.y-d.y)*h),n>o||r>i||((r>n||isNaN(n))&&(n=r),(o<i||isNaN(i))&&(i=o),u>=0?(a=(t.min.z-d.z)*u,l=(t.max.z-d.z)*u):(a=(t.max.z-d.z)*u,l=(t.min.z-d.z)*u),n>l||a>i)||((a>n||n!==n)&&(n=a),(l<i||i!==i)&&(i=l),i<0)?null:this.at(n>=0?n:i,e)}intersectsBox(t){return this.intersectBox(t,sn)!==null}intersectTriangle(t,e,n,i,r){ks.subVectors(e,t),ki.subVectors(n,t),Gs.crossVectors(ks,ki);let o=this.direction.dot(Gs),a;if(o>0){if(i)return null;a=1}else if(o<0)a=-1,o=-o;else return null;gn.subVectors(this.origin,t);const l=a*this.direction.dot(ki.crossVectors(gn,ki));if(l<0)return null;const c=a*this.direction.dot(ks.cross(gn));if(c<0||l+c>o)return null;const h=-a*gn.dot(Gs);return h<0?null:this.at(h/o,r)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class se{constructor(t,e,n,i,r,o,a,l,c,h,u,d,p,g,_,m){se.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,n,i,r,o,a,l,c,h,u,d,p,g,_,m)}set(t,e,n,i,r,o,a,l,c,h,u,d,p,g,_,m){const f=this.elements;return f[0]=t,f[4]=e,f[8]=n,f[12]=i,f[1]=r,f[5]=o,f[9]=a,f[13]=l,f[2]=c,f[6]=h,f[10]=u,f[14]=d,f[3]=p,f[7]=g,f[11]=_,f[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new se().fromArray(this.elements)}copy(t){const e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],e[9]=n[9],e[10]=n[10],e[11]=n[11],e[12]=n[12],e[13]=n[13],e[14]=n[14],e[15]=n[15],this}copyPosition(t){const e=this.elements,n=t.elements;return e[12]=n[12],e[13]=n[13],e[14]=n[14],this}setFromMatrix3(t){const e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,n){return t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(t,e,n){return this.set(t.x,e.x,n.x,0,t.y,e.y,n.y,0,t.z,e.z,n.z,0,0,0,0,1),this}extractRotation(t){const e=this.elements,n=t.elements,i=1/Xn.setFromMatrixColumn(t,0).length(),r=1/Xn.setFromMatrixColumn(t,1).length(),o=1/Xn.setFromMatrixColumn(t,2).length();return e[0]=n[0]*i,e[1]=n[1]*i,e[2]=n[2]*i,e[3]=0,e[4]=n[4]*r,e[5]=n[5]*r,e[6]=n[6]*r,e[7]=0,e[8]=n[8]*o,e[9]=n[9]*o,e[10]=n[10]*o,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){const e=this.elements,n=t.x,i=t.y,r=t.z,o=Math.cos(n),a=Math.sin(n),l=Math.cos(i),c=Math.sin(i),h=Math.cos(r),u=Math.sin(r);if(t.order==="XYZ"){const d=o*h,p=o*u,g=a*h,_=a*u;e[0]=l*h,e[4]=-l*u,e[8]=c,e[1]=p+g*c,e[5]=d-_*c,e[9]=-a*l,e[2]=_-d*c,e[6]=g+p*c,e[10]=o*l}else if(t.order==="YXZ"){const d=l*h,p=l*u,g=c*h,_=c*u;e[0]=d+_*a,e[4]=g*a-p,e[8]=o*c,e[1]=o*u,e[5]=o*h,e[9]=-a,e[2]=p*a-g,e[6]=_+d*a,e[10]=o*l}else if(t.order==="ZXY"){const d=l*h,p=l*u,g=c*h,_=c*u;e[0]=d-_*a,e[4]=-o*u,e[8]=g+p*a,e[1]=p+g*a,e[5]=o*h,e[9]=_-d*a,e[2]=-o*c,e[6]=a,e[10]=o*l}else if(t.order==="ZYX"){const d=o*h,p=o*u,g=a*h,_=a*u;e[0]=l*h,e[4]=g*c-p,e[8]=d*c+_,e[1]=l*u,e[5]=_*c+d,e[9]=p*c-g,e[2]=-c,e[6]=a*l,e[10]=o*l}else if(t.order==="YZX"){const d=o*l,p=o*c,g=a*l,_=a*c;e[0]=l*h,e[4]=_-d*u,e[8]=g*u+p,e[1]=u,e[5]=o*h,e[9]=-a*h,e[2]=-c*h,e[6]=p*u+g,e[10]=d-_*u}else if(t.order==="XZY"){const d=o*l,p=o*c,g=a*l,_=a*c;e[0]=l*h,e[4]=-u,e[8]=c*h,e[1]=d*u+_,e[5]=o*h,e[9]=p*u-g,e[2]=g*u-p,e[6]=a*h,e[10]=_*u+d}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(Sc,t,Tc)}lookAt(t,e,n){const i=this.elements;return Ne.subVectors(t,e),Ne.lengthSq()===0&&(Ne.z=1),Ne.normalize(),_n.crossVectors(n,Ne),_n.lengthSq()===0&&(Math.abs(n.z)===1?Ne.x+=1e-4:Ne.z+=1e-4,Ne.normalize(),_n.crossVectors(n,Ne)),_n.normalize(),Gi.crossVectors(Ne,_n),i[0]=_n.x,i[4]=Gi.x,i[8]=Ne.x,i[1]=_n.y,i[5]=Gi.y,i[9]=Ne.y,i[2]=_n.z,i[6]=Gi.z,i[10]=Ne.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const n=t.elements,i=e.elements,r=this.elements,o=n[0],a=n[4],l=n[8],c=n[12],h=n[1],u=n[5],d=n[9],p=n[13],g=n[2],_=n[6],m=n[10],f=n[14],E=n[3],v=n[7],S=n[11],P=n[15],w=i[0],A=i[4],G=i[8],M=i[12],b=i[1],B=i[5],k=i[9],q=i[13],L=i[2],I=i[6],V=i[10],X=i[14],W=i[3],Y=i[7],K=i[11],tt=i[15];return r[0]=o*w+a*b+l*L+c*W,r[4]=o*A+a*B+l*I+c*Y,r[8]=o*G+a*k+l*V+c*K,r[12]=o*M+a*q+l*X+c*tt,r[1]=h*w+u*b+d*L+p*W,r[5]=h*A+u*B+d*I+p*Y,r[9]=h*G+u*k+d*V+p*K,r[13]=h*M+u*q+d*X+p*tt,r[2]=g*w+_*b+m*L+f*W,r[6]=g*A+_*B+m*I+f*Y,r[10]=g*G+_*k+m*V+f*K,r[14]=g*M+_*q+m*X+f*tt,r[3]=E*w+v*b+S*L+P*W,r[7]=E*A+v*B+S*I+P*Y,r[11]=E*G+v*k+S*V+P*K,r[15]=E*M+v*q+S*X+P*tt,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){const t=this.elements,e=t[0],n=t[4],i=t[8],r=t[12],o=t[1],a=t[5],l=t[9],c=t[13],h=t[2],u=t[6],d=t[10],p=t[14],g=t[3],_=t[7],m=t[11],f=t[15];return g*(+r*l*u-i*c*u-r*a*d+n*c*d+i*a*p-n*l*p)+_*(+e*l*p-e*c*d+r*o*d-i*o*p+i*c*h-r*l*h)+m*(+e*c*u-e*a*p-r*o*u+n*o*p+r*a*h-n*c*h)+f*(-i*a*h-e*l*u+e*a*d+i*o*u-n*o*d+n*l*h)}transpose(){const t=this.elements;let e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,n){const i=this.elements;return t.isVector3?(i[12]=t.x,i[13]=t.y,i[14]=t.z):(i[12]=t,i[13]=e,i[14]=n),this}invert(){const t=this.elements,e=t[0],n=t[1],i=t[2],r=t[3],o=t[4],a=t[5],l=t[6],c=t[7],h=t[8],u=t[9],d=t[10],p=t[11],g=t[12],_=t[13],m=t[14],f=t[15],E=u*m*c-_*d*c+_*l*p-a*m*p-u*l*f+a*d*f,v=g*d*c-h*m*c-g*l*p+o*m*p+h*l*f-o*d*f,S=h*_*c-g*u*c+g*a*p-o*_*p-h*a*f+o*u*f,P=g*u*l-h*_*l-g*a*d+o*_*d+h*a*m-o*u*m,w=e*E+n*v+i*S+r*P;if(w===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const A=1/w;return t[0]=E*A,t[1]=(_*d*r-u*m*r-_*i*p+n*m*p+u*i*f-n*d*f)*A,t[2]=(a*m*r-_*l*r+_*i*c-n*m*c-a*i*f+n*l*f)*A,t[3]=(u*l*r-a*d*r-u*i*c+n*d*c+a*i*p-n*l*p)*A,t[4]=v*A,t[5]=(h*m*r-g*d*r+g*i*p-e*m*p-h*i*f+e*d*f)*A,t[6]=(g*l*r-o*m*r-g*i*c+e*m*c+o*i*f-e*l*f)*A,t[7]=(o*d*r-h*l*r+h*i*c-e*d*c-o*i*p+e*l*p)*A,t[8]=S*A,t[9]=(g*u*r-h*_*r-g*n*p+e*_*p+h*n*f-e*u*f)*A,t[10]=(o*_*r-g*a*r+g*n*c-e*_*c-o*n*f+e*a*f)*A,t[11]=(h*a*r-o*u*r-h*n*c+e*u*c+o*n*p-e*a*p)*A,t[12]=P*A,t[13]=(h*_*i-g*u*i+g*n*d-e*_*d-h*n*m+e*u*m)*A,t[14]=(g*a*i-o*_*i-g*n*l+e*_*l+o*n*m-e*a*m)*A,t[15]=(o*u*i-h*a*i+h*n*l-e*u*l-o*n*d+e*a*d)*A,this}scale(t){const e=this.elements,n=t.x,i=t.y,r=t.z;return e[0]*=n,e[4]*=i,e[8]*=r,e[1]*=n,e[5]*=i,e[9]*=r,e[2]*=n,e[6]*=i,e[10]*=r,e[3]*=n,e[7]*=i,e[11]*=r,this}getMaxScaleOnAxis(){const t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],n=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],i=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,n,i))}makeTranslation(t,e,n){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,n,0,0,0,1),this}makeRotationX(t){const e=Math.cos(t),n=Math.sin(t);return this.set(1,0,0,0,0,e,-n,0,0,n,e,0,0,0,0,1),this}makeRotationY(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,0,n,0,0,1,0,0,-n,0,e,0,0,0,0,1),this}makeRotationZ(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,0,n,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){const n=Math.cos(e),i=Math.sin(e),r=1-n,o=t.x,a=t.y,l=t.z,c=r*o,h=r*a;return this.set(c*o+n,c*a-i*l,c*l+i*a,0,c*a+i*l,h*a+n,h*l-i*o,0,c*l-i*a,h*l+i*o,r*l*l+n,0,0,0,0,1),this}makeScale(t,e,n){return this.set(t,0,0,0,0,e,0,0,0,0,n,0,0,0,0,1),this}makeShear(t,e,n,i,r,o){return this.set(1,n,r,0,t,1,o,0,e,i,1,0,0,0,0,1),this}compose(t,e,n){const i=this.elements,r=e._x,o=e._y,a=e._z,l=e._w,c=r+r,h=o+o,u=a+a,d=r*c,p=r*h,g=r*u,_=o*h,m=o*u,f=a*u,E=l*c,v=l*h,S=l*u,P=n.x,w=n.y,A=n.z;return i[0]=(1-(_+f))*P,i[1]=(p+S)*P,i[2]=(g-v)*P,i[3]=0,i[4]=(p-S)*w,i[5]=(1-(d+f))*w,i[6]=(m+E)*w,i[7]=0,i[8]=(g+v)*A,i[9]=(m-E)*A,i[10]=(1-(d+_))*A,i[11]=0,i[12]=t.x,i[13]=t.y,i[14]=t.z,i[15]=1,this}decompose(t,e,n){const i=this.elements;let r=Xn.set(i[0],i[1],i[2]).length();const o=Xn.set(i[4],i[5],i[6]).length(),a=Xn.set(i[8],i[9],i[10]).length();this.determinant()<0&&(r=-r),t.x=i[12],t.y=i[13],t.z=i[14],qe.copy(this);const c=1/r,h=1/o,u=1/a;return qe.elements[0]*=c,qe.elements[1]*=c,qe.elements[2]*=c,qe.elements[4]*=h,qe.elements[5]*=h,qe.elements[6]*=h,qe.elements[8]*=u,qe.elements[9]*=u,qe.elements[10]*=u,e.setFromRotationMatrix(qe),n.x=r,n.y=o,n.z=a,this}makePerspective(t,e,n,i,r,o,a=hn){const l=this.elements,c=2*r/(e-t),h=2*r/(n-i),u=(e+t)/(e-t),d=(n+i)/(n-i);let p,g;if(a===hn)p=-(o+r)/(o-r),g=-2*o*r/(o-r);else if(a===ds)p=-o/(o-r),g=-o*r/(o-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return l[0]=c,l[4]=0,l[8]=u,l[12]=0,l[1]=0,l[5]=h,l[9]=d,l[13]=0,l[2]=0,l[6]=0,l[10]=p,l[14]=g,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(t,e,n,i,r,o,a=hn){const l=this.elements,c=1/(e-t),h=1/(n-i),u=1/(o-r),d=(e+t)*c,p=(n+i)*h;let g,_;if(a===hn)g=(o+r)*u,_=-2*u;else if(a===ds)g=r*u,_=-1*u;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return l[0]=2*c,l[4]=0,l[8]=0,l[12]=-d,l[1]=0,l[5]=2*h,l[9]=0,l[13]=-p,l[2]=0,l[6]=0,l[10]=_,l[14]=-g,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(t){const e=this.elements,n=t.elements;for(let i=0;i<16;i++)if(e[i]!==n[i])return!1;return!0}fromArray(t,e=0){for(let n=0;n<16;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){const n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t[e+9]=n[9],t[e+10]=n[10],t[e+11]=n[11],t[e+12]=n[12],t[e+13]=n[13],t[e+14]=n[14],t[e+15]=n[15],t}}const Xn=new R,qe=new se,Sc=new R(0,0,0),Tc=new R(1,1,1),_n=new R,Gi=new R,Ne=new R,_a=new se,va=new Ci;class ys{constructor(t=0,e=0,n=0,i=ys.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=n,this._order=i}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,n,i=this._order){return this._x=t,this._y=e,this._z=n,this._order=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,n=!0){const i=t.elements,r=i[0],o=i[4],a=i[8],l=i[1],c=i[5],h=i[9],u=i[2],d=i[6],p=i[10];switch(e){case"XYZ":this._y=Math.asin(Pe(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-h,p),this._z=Math.atan2(-o,r)):(this._x=Math.atan2(d,c),this._z=0);break;case"YXZ":this._x=Math.asin(-Pe(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(a,p),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-u,r),this._z=0);break;case"ZXY":this._x=Math.asin(Pe(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-u,p),this._z=Math.atan2(-o,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-Pe(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(d,p),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-o,c));break;case"YZX":this._z=Math.asin(Pe(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-h,c),this._y=Math.atan2(-u,r)):(this._x=0,this._y=Math.atan2(a,p));break;case"XZY":this._z=Math.asin(-Pe(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(d,c),this._y=Math.atan2(a,r)):(this._x=Math.atan2(-h,p),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,n===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,n){return _a.makeRotationFromQuaternion(t),this.setFromRotationMatrix(_a,e,n)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return va.setFromEuler(this),this.setFromQuaternion(va,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}ys.DEFAULT_ORDER="XYZ";class yr{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}}let Ec=0;const xa=new R,qn=new Ci,rn=new se,Vi=new R,Mi=new R,bc=new R,wc=new Ci,Ma=new R(1,0,0),ya=new R(0,1,0),Sa=new R(0,0,1),Ac={type:"added"},Rc={type:"removed"};class pe extends pi{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Ec++}),this.uuid=mi(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=pe.DEFAULT_UP.clone();const t=new R,e=new ys,n=new Ci,i=new R(1,1,1);function r(){n.setFromEuler(e,!1)}function o(){e.setFromQuaternion(n,void 0,!1)}e._onChange(r),n._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:i},modelViewMatrix:{value:new se},normalMatrix:{value:new Gt}}),this.matrix=new se,this.matrixWorld=new se,this.matrixAutoUpdate=pe.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=pe.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new yr,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return qn.setFromAxisAngle(t,e),this.quaternion.multiply(qn),this}rotateOnWorldAxis(t,e){return qn.setFromAxisAngle(t,e),this.quaternion.premultiply(qn),this}rotateX(t){return this.rotateOnAxis(Ma,t)}rotateY(t){return this.rotateOnAxis(ya,t)}rotateZ(t){return this.rotateOnAxis(Sa,t)}translateOnAxis(t,e){return xa.copy(t).applyQuaternion(this.quaternion),this.position.add(xa.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(Ma,t)}translateY(t){return this.translateOnAxis(ya,t)}translateZ(t){return this.translateOnAxis(Sa,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(rn.copy(this.matrixWorld).invert())}lookAt(t,e,n){t.isVector3?Vi.copy(t):Vi.set(t,e,n);const i=this.parent;this.updateWorldMatrix(!0,!1),Mi.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?rn.lookAt(Mi,Vi,this.up):rn.lookAt(Vi,Mi,this.up),this.quaternion.setFromRotationMatrix(rn),i&&(rn.extractRotation(i.matrixWorld),qn.setFromRotationMatrix(rn),this.quaternion.premultiply(qn.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.parent!==null&&t.parent.remove(t),t.parent=this,this.children.push(t),t.dispatchEvent(Ac)):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(Rc)),this}removeFromParent(){const t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),rn.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),rn.multiply(t.parent.matrixWorld)),t.applyMatrix4(rn),this.add(t),t.updateWorldMatrix(!1,!0),this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let n=0,i=this.children.length;n<i;n++){const o=this.children[n].getObjectByProperty(t,e);if(o!==void 0)return o}}getObjectsByProperty(t,e,n=[]){this[t]===e&&n.push(this);const i=this.children;for(let r=0,o=i.length;r<o;r++)i[r].getObjectsByProperty(t,e,n);return n}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Mi,t,bc),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Mi,wc,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);const e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}traverse(t){t(this);const e=this.children;for(let n=0,i=e.length;n<i;n++)e[n].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);const e=this.children;for(let n=0,i=e.length;n<i;n++)e[n].traverseVisible(t)}traverseAncestors(t){const e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,t=!0);const e=this.children;for(let n=0,i=e.length;n<i;n++){const r=e[n];(r.matrixWorldAutoUpdate===!0||t===!0)&&r.updateMatrixWorld(t)}}updateWorldMatrix(t,e){const n=this.parent;if(t===!0&&n!==null&&n.matrixWorldAutoUpdate===!0&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),e===!0){const i=this.children;for(let r=0,o=i.length;r<o;r++){const a=i[r];a.matrixWorldAutoUpdate===!0&&a.updateWorldMatrix(!1,!0)}}}toJSON(t){const e=t===void 0||typeof t=="string",n={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const i={};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.castShadow===!0&&(i.castShadow=!0),this.receiveShadow===!0&&(i.receiveShadow=!0),this.visible===!1&&(i.visible=!1),this.frustumCulled===!1&&(i.frustumCulled=!1),this.renderOrder!==0&&(i.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(i.userData=this.userData),i.layers=this.layers.mask,i.matrix=this.matrix.toArray(),i.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(i.matrixAutoUpdate=!1),this.isInstancedMesh&&(i.type="InstancedMesh",i.count=this.count,i.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(i.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(i.type="BatchedMesh",i.perObjectFrustumCulled=this.perObjectFrustumCulled,i.sortObjects=this.sortObjects,i.drawRanges=this._drawRanges,i.reservedRanges=this._reservedRanges,i.visibility=this._visibility,i.active=this._active,i.bounds=this._bounds.map(a=>({boxInitialized:a.boxInitialized,boxMin:a.box.min.toArray(),boxMax:a.box.max.toArray(),sphereInitialized:a.sphereInitialized,sphereRadius:a.sphere.radius,sphereCenter:a.sphere.center.toArray()})),i.maxGeometryCount=this._maxGeometryCount,i.maxVertexCount=this._maxVertexCount,i.maxIndexCount=this._maxIndexCount,i.geometryInitialized=this._geometryInitialized,i.geometryCount=this._geometryCount,i.matricesTexture=this._matricesTexture.toJSON(t),this.boundingSphere!==null&&(i.boundingSphere={center:i.boundingSphere.center.toArray(),radius:i.boundingSphere.radius}),this.boundingBox!==null&&(i.boundingBox={min:i.boundingBox.min.toArray(),max:i.boundingBox.max.toArray()}));function r(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(t)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?i.background=this.background.toJSON():this.background.isTexture&&(i.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(i.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){i.geometry=r(t.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const l=a.shapes;if(Array.isArray(l))for(let c=0,h=l.length;c<h;c++){const u=l[c];r(t.shapes,u)}else r(t.shapes,l)}}if(this.isSkinnedMesh&&(i.bindMode=this.bindMode,i.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(t.skeletons,this.skeleton),i.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let l=0,c=this.material.length;l<c;l++)a.push(r(t.materials,this.material[l]));i.material=a}else i.material=r(t.materials,this.material);if(this.children.length>0){i.children=[];for(let a=0;a<this.children.length;a++)i.children.push(this.children[a].toJSON(t).object)}if(this.animations.length>0){i.animations=[];for(let a=0;a<this.animations.length;a++){const l=this.animations[a];i.animations.push(r(t.animations,l))}}if(e){const a=o(t.geometries),l=o(t.materials),c=o(t.textures),h=o(t.images),u=o(t.shapes),d=o(t.skeletons),p=o(t.animations),g=o(t.nodes);a.length>0&&(n.geometries=a),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),h.length>0&&(n.images=h),u.length>0&&(n.shapes=u),d.length>0&&(n.skeletons=d),p.length>0&&(n.animations=p),g.length>0&&(n.nodes=g)}return n.object=i,n;function o(a){const l=[];for(const c in a){const h=a[c];delete h.metadata,l.push(h)}return l}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let n=0;n<t.children.length;n++){const i=t.children[n];this.add(i.clone())}return this}}pe.DEFAULT_UP=new R(0,1,0);pe.DEFAULT_MATRIX_AUTO_UPDATE=!0;pe.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const Ye=new R,an=new R,Vs=new R,on=new R,Yn=new R,Kn=new R,Ta=new R,Hs=new R,Ws=new R,Xs=new R;let Hi=!1;class Ke{constructor(t=new R,e=new R,n=new R){this.a=t,this.b=e,this.c=n}static getNormal(t,e,n,i){i.subVectors(n,e),Ye.subVectors(t,e),i.cross(Ye);const r=i.lengthSq();return r>0?i.multiplyScalar(1/Math.sqrt(r)):i.set(0,0,0)}static getBarycoord(t,e,n,i,r){Ye.subVectors(i,e),an.subVectors(n,e),Vs.subVectors(t,e);const o=Ye.dot(Ye),a=Ye.dot(an),l=Ye.dot(Vs),c=an.dot(an),h=an.dot(Vs),u=o*c-a*a;if(u===0)return r.set(0,0,0),null;const d=1/u,p=(c*l-a*h)*d,g=(o*h-a*l)*d;return r.set(1-p-g,g,p)}static containsPoint(t,e,n,i){return this.getBarycoord(t,e,n,i,on)===null?!1:on.x>=0&&on.y>=0&&on.x+on.y<=1}static getUV(t,e,n,i,r,o,a,l){return Hi===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),Hi=!0),this.getInterpolation(t,e,n,i,r,o,a,l)}static getInterpolation(t,e,n,i,r,o,a,l){return this.getBarycoord(t,e,n,i,on)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,on.x),l.addScaledVector(o,on.y),l.addScaledVector(a,on.z),l)}static isFrontFacing(t,e,n,i){return Ye.subVectors(n,e),an.subVectors(t,e),Ye.cross(an).dot(i)<0}set(t,e,n){return this.a.copy(t),this.b.copy(e),this.c.copy(n),this}setFromPointsAndIndices(t,e,n,i){return this.a.copy(t[e]),this.b.copy(t[n]),this.c.copy(t[i]),this}setFromAttributeAndIndices(t,e,n,i){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,n),this.c.fromBufferAttribute(t,i),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return Ye.subVectors(this.c,this.b),an.subVectors(this.a,this.b),Ye.cross(an).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return Ke.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return Ke.getBarycoord(t,this.a,this.b,this.c,e)}getUV(t,e,n,i,r){return Hi===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),Hi=!0),Ke.getInterpolation(t,this.a,this.b,this.c,e,n,i,r)}getInterpolation(t,e,n,i,r){return Ke.getInterpolation(t,this.a,this.b,this.c,e,n,i,r)}containsPoint(t){return Ke.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return Ke.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){const n=this.a,i=this.b,r=this.c;let o,a;Yn.subVectors(i,n),Kn.subVectors(r,n),Hs.subVectors(t,n);const l=Yn.dot(Hs),c=Kn.dot(Hs);if(l<=0&&c<=0)return e.copy(n);Ws.subVectors(t,i);const h=Yn.dot(Ws),u=Kn.dot(Ws);if(h>=0&&u<=h)return e.copy(i);const d=l*u-h*c;if(d<=0&&l>=0&&h<=0)return o=l/(l-h),e.copy(n).addScaledVector(Yn,o);Xs.subVectors(t,r);const p=Yn.dot(Xs),g=Kn.dot(Xs);if(g>=0&&p<=g)return e.copy(r);const _=p*c-l*g;if(_<=0&&c>=0&&g<=0)return a=c/(c-g),e.copy(n).addScaledVector(Kn,a);const m=h*g-p*u;if(m<=0&&u-h>=0&&p-g>=0)return Ta.subVectors(r,i),a=(u-h)/(u-h+(p-g)),e.copy(i).addScaledVector(Ta,a);const f=1/(m+_+d);return o=_*f,a=d*f,e.copy(n).addScaledVector(Yn,o).addScaledVector(Kn,a)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}}const Io={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},vn={h:0,s:0,l:0},Wi={h:0,s:0,l:0};function qs(s,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?s+(t-s)*6*e:e<1/2?t:e<2/3?s+(t-s)*6*(2/3-e):s}class Nt{constructor(t,e,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,n)}set(t,e,n){if(e===void 0&&n===void 0){const i=t;i&&i.isColor?this.copy(i):typeof i=="number"?this.setHex(i):typeof i=="string"&&this.setStyle(i)}else this.setRGB(t,e,n);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=Jt){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,qt.toWorkingColorSpace(this,e),this}setRGB(t,e,n,i=qt.workingColorSpace){return this.r=t,this.g=e,this.b=n,qt.toWorkingColorSpace(this,i),this}setHSL(t,e,n,i=qt.workingColorSpace){if(t=Mr(t,1),e=Pe(e,0,1),n=Pe(n,0,1),e===0)this.r=this.g=this.b=n;else{const r=n<=.5?n*(1+e):n+e-n*e,o=2*n-r;this.r=qs(o,r,t+1/3),this.g=qs(o,r,t),this.b=qs(o,r,t-1/3)}return qt.toWorkingColorSpace(this,i),this}setStyle(t,e=Jt){function n(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+t+" will be ignored.")}let i;if(i=/^(\w+)\(([^\)]*)\)/.exec(t)){let r;const o=i[1],a=i[2];switch(o){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,e);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,e);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,e);break;default:console.warn("THREE.Color: Unknown color model "+t)}}else if(i=/^\#([A-Fa-f\d]+)$/.exec(t)){const r=i[1],o=r.length;if(o===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,e);if(o===6)return this.setHex(parseInt(r,16),e);console.warn("THREE.Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=Jt){const n=Io[t.toLowerCase()];return n!==void 0?this.setHex(n,e):console.warn("THREE.Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=ai(t.r),this.g=ai(t.g),this.b=ai(t.b),this}copyLinearToSRGB(t){return this.r=Us(t.r),this.g=Us(t.g),this.b=Us(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=Jt){return qt.fromWorkingColorSpace(ve.copy(this),t),Math.round(Pe(ve.r*255,0,255))*65536+Math.round(Pe(ve.g*255,0,255))*256+Math.round(Pe(ve.b*255,0,255))}getHexString(t=Jt){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=qt.workingColorSpace){qt.fromWorkingColorSpace(ve.copy(this),e);const n=ve.r,i=ve.g,r=ve.b,o=Math.max(n,i,r),a=Math.min(n,i,r);let l,c;const h=(a+o)/2;if(a===o)l=0,c=0;else{const u=o-a;switch(c=h<=.5?u/(o+a):u/(2-o-a),o){case n:l=(i-r)/u+(i<r?6:0);break;case i:l=(r-n)/u+2;break;case r:l=(n-i)/u+4;break}l/=6}return t.h=l,t.s=c,t.l=h,t}getRGB(t,e=qt.workingColorSpace){return qt.fromWorkingColorSpace(ve.copy(this),e),t.r=ve.r,t.g=ve.g,t.b=ve.b,t}getStyle(t=Jt){qt.fromWorkingColorSpace(ve.copy(this),t);const e=ve.r,n=ve.g,i=ve.b;return t!==Jt?`color(${t} ${e.toFixed(3)} ${n.toFixed(3)} ${i.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(n*255)},${Math.round(i*255)})`}offsetHSL(t,e,n){return this.getHSL(vn),this.setHSL(vn.h+t,vn.s+e,vn.l+n)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,n){return this.r=t.r+(e.r-t.r)*n,this.g=t.g+(e.g-t.g)*n,this.b=t.b+(e.b-t.b)*n,this}lerpHSL(t,e){this.getHSL(vn),t.getHSL(Wi);const n=Ei(vn.h,Wi.h,e),i=Ei(vn.s,Wi.s,e),r=Ei(vn.l,Wi.l,e);return this.setHSL(n,i,r),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){const e=this.r,n=this.g,i=this.b,r=t.elements;return this.r=r[0]*e+r[3]*n+r[6]*i,this.g=r[1]*e+r[4]*n+r[7]*i,this.b=r[2]*e+r[5]*n+r[8]*i,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const ve=new Nt;Nt.NAMES=Io;let Cc=0;class zn extends pi{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Cc++}),this.uuid=mi(),this.name="",this.type="Material",this.blending=ri,this.side=En,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=ar,this.blendDst=or,this.blendEquation=In,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Nt(0,0,0),this.blendAlpha=0,this.depthFunc=ls,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=ca,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=kn,this.stencilZFail=kn,this.stencilZPass=kn,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBuild(){}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(const e in t){const n=t[e];if(n===void 0){console.warn(`THREE.Material: parameter '${e}' has value of undefined.`);continue}const i=this[e];if(i===void 0){console.warn(`THREE.Material: '${e}' is not a property of THREE.${this.type}.`);continue}i&&i.isColor?i.set(n):i&&i.isVector3&&n&&n.isVector3?i.copy(n):this[e]=n}}toJSON(t){const e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});const n={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(t).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(t).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(t).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(t).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(t).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==ri&&(n.blending=this.blending),this.side!==En&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==ar&&(n.blendSrc=this.blendSrc),this.blendDst!==or&&(n.blendDst=this.blendDst),this.blendEquation!==In&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==ls&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==ca&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==kn&&(n.stencilFail=this.stencilFail),this.stencilZFail!==kn&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==kn&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function i(r){const o=[];for(const a in r){const l=r[a];delete l.metadata,o.push(l)}return o}if(e){const r=i(t.textures),o=i(t.images);r.length>0&&(n.textures=r),o.length>0&&(n.images=o)}return n}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;const e=t.clippingPlanes;let n=null;if(e!==null){const i=e.length;n=new Array(i);for(let r=0;r!==i;++r)n[r]=e[r].clone()}return this.clippingPlanes=n,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}}class me extends zn{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Nt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=go,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}}const ae=new R,Xi=new ht;class Je{constructor(t,e,n=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=n,this.usage=ha,this._updateRange={offset:0,count:-1},this.updateRanges=[],this.gpuType=yn,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}get updateRange(){return console.warn("THREE.BufferAttribute: updateRange() is deprecated and will be removed in r169. Use addUpdateRange() instead."),this._updateRange}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,n){t*=this.itemSize,n*=e.itemSize;for(let i=0,r=this.itemSize;i<r;i++)this.array[t+i]=e.array[n+i];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,n=this.count;e<n;e++)Xi.fromBufferAttribute(this,e),Xi.applyMatrix3(t),this.setXY(e,Xi.x,Xi.y);else if(this.itemSize===3)for(let e=0,n=this.count;e<n;e++)ae.fromBufferAttribute(this,e),ae.applyMatrix3(t),this.setXYZ(e,ae.x,ae.y,ae.z);return this}applyMatrix4(t){for(let e=0,n=this.count;e<n;e++)ae.fromBufferAttribute(this,e),ae.applyMatrix4(t),this.setXYZ(e,ae.x,ae.y,ae.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)ae.fromBufferAttribute(this,e),ae.applyNormalMatrix(t),this.setXYZ(e,ae.x,ae.y,ae.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)ae.fromBufferAttribute(this,e),ae.transformDirection(t),this.setXYZ(e,ae.x,ae.y,ae.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let n=this.array[t*this.itemSize+e];return this.normalized&&(n=ni(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=we(n,this.array)),this.array[t*this.itemSize+e]=n,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=ni(e,this.array)),e}setX(t,e){return this.normalized&&(e=we(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=ni(e,this.array)),e}setY(t,e){return this.normalized&&(e=we(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=ni(e,this.array)),e}setZ(t,e){return this.normalized&&(e=we(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=ni(e,this.array)),e}setW(t,e){return this.normalized&&(e=we(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,n){return t*=this.itemSize,this.normalized&&(e=we(e,this.array),n=we(n,this.array)),this.array[t+0]=e,this.array[t+1]=n,this}setXYZ(t,e,n,i){return t*=this.itemSize,this.normalized&&(e=we(e,this.array),n=we(n,this.array),i=we(i,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=i,this}setXYZW(t,e,n,i,r){return t*=this.itemSize,this.normalized&&(e=we(e,this.array),n=we(n,this.array),i=we(i,this.array),r=we(r,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=i,this.array[t+3]=r,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==ha&&(t.usage=this.usage),t}}class Uo extends Je{constructor(t,e,n){super(new Uint16Array(t),e,n)}}class No extends Je{constructor(t,e,n){super(new Uint32Array(t),e,n)}}class oe extends Je{constructor(t,e,n){super(new Float32Array(t),e,n)}}let Pc=0;const Ve=new se,Ys=new pe,jn=new R,Fe=new Pi,yi=new Pi,de=new R;class Se extends pi{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Pc++}),this.uuid=mi(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(Co(t)?No:Uo)(t,1):this.index=t,this}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,n=0){this.groups.push({start:t,count:e,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){const e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const r=new Gt().getNormalMatrix(t);n.applyNormalMatrix(r),n.needsUpdate=!0}const i=this.attributes.tangent;return i!==void 0&&(i.transformDirection(t),i.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return Ve.makeRotationFromQuaternion(t),this.applyMatrix4(Ve),this}rotateX(t){return Ve.makeRotationX(t),this.applyMatrix4(Ve),this}rotateY(t){return Ve.makeRotationY(t),this.applyMatrix4(Ve),this}rotateZ(t){return Ve.makeRotationZ(t),this.applyMatrix4(Ve),this}translate(t,e,n){return Ve.makeTranslation(t,e,n),this.applyMatrix4(Ve),this}scale(t,e,n){return Ve.makeScale(t,e,n),this.applyMatrix4(Ve),this}lookAt(t){return Ys.lookAt(t),Ys.updateMatrix(),this.applyMatrix4(Ys.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(jn).negate(),this.translate(jn.x,jn.y,jn.z),this}setFromPoints(t){const e=[];for(let n=0,i=t.length;n<i;n++){const r=t[n];e.push(r.x,r.y,r.z||0)}return this.setAttribute("position",new oe(e,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Pi);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingBox.set(new R(-1/0,-1/0,-1/0),new R(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let n=0,i=e.length;n<i;n++){const r=e[n];Fe.setFromBufferAttribute(r),this.morphTargetsRelative?(de.addVectors(this.boundingBox.min,Fe.min),this.boundingBox.expandByPoint(de),de.addVectors(this.boundingBox.max,Fe.max),this.boundingBox.expandByPoint(de)):(this.boundingBox.expandByPoint(Fe.min),this.boundingBox.expandByPoint(Fe.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Li);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingSphere.set(new R,1/0);return}if(t){const n=this.boundingSphere.center;if(Fe.setFromBufferAttribute(t),e)for(let r=0,o=e.length;r<o;r++){const a=e[r];yi.setFromBufferAttribute(a),this.morphTargetsRelative?(de.addVectors(Fe.min,yi.min),Fe.expandByPoint(de),de.addVectors(Fe.max,yi.max),Fe.expandByPoint(de)):(Fe.expandByPoint(yi.min),Fe.expandByPoint(yi.max))}Fe.getCenter(n);let i=0;for(let r=0,o=t.count;r<o;r++)de.fromBufferAttribute(t,r),i=Math.max(i,n.distanceToSquared(de));if(e)for(let r=0,o=e.length;r<o;r++){const a=e[r],l=this.morphTargetsRelative;for(let c=0,h=a.count;c<h;c++)de.fromBufferAttribute(a,c),l&&(jn.fromBufferAttribute(t,c),de.add(jn)),i=Math.max(i,n.distanceToSquared(de))}this.boundingSphere.radius=Math.sqrt(i),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=t.array,i=e.position.array,r=e.normal.array,o=e.uv.array,a=i.length/3;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Je(new Float32Array(4*a),4));const l=this.getAttribute("tangent").array,c=[],h=[];for(let b=0;b<a;b++)c[b]=new R,h[b]=new R;const u=new R,d=new R,p=new R,g=new ht,_=new ht,m=new ht,f=new R,E=new R;function v(b,B,k){u.fromArray(i,b*3),d.fromArray(i,B*3),p.fromArray(i,k*3),g.fromArray(o,b*2),_.fromArray(o,B*2),m.fromArray(o,k*2),d.sub(u),p.sub(u),_.sub(g),m.sub(g);const q=1/(_.x*m.y-m.x*_.y);isFinite(q)&&(f.copy(d).multiplyScalar(m.y).addScaledVector(p,-_.y).multiplyScalar(q),E.copy(p).multiplyScalar(_.x).addScaledVector(d,-m.x).multiplyScalar(q),c[b].add(f),c[B].add(f),c[k].add(f),h[b].add(E),h[B].add(E),h[k].add(E))}let S=this.groups;S.length===0&&(S=[{start:0,count:n.length}]);for(let b=0,B=S.length;b<B;++b){const k=S[b],q=k.start,L=k.count;for(let I=q,V=q+L;I<V;I+=3)v(n[I+0],n[I+1],n[I+2])}const P=new R,w=new R,A=new R,G=new R;function M(b){A.fromArray(r,b*3),G.copy(A);const B=c[b];P.copy(B),P.sub(A.multiplyScalar(A.dot(B))).normalize(),w.crossVectors(G,B);const q=w.dot(h[b])<0?-1:1;l[b*4]=P.x,l[b*4+1]=P.y,l[b*4+2]=P.z,l[b*4+3]=q}for(let b=0,B=S.length;b<B;++b){const k=S[b],q=k.start,L=k.count;for(let I=q,V=q+L;I<V;I+=3)M(n[I+0]),M(n[I+1]),M(n[I+2])}}computeVertexNormals(){const t=this.index,e=this.getAttribute("position");if(e!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new Je(new Float32Array(e.count*3),3),this.setAttribute("normal",n);else for(let d=0,p=n.count;d<p;d++)n.setXYZ(d,0,0,0);const i=new R,r=new R,o=new R,a=new R,l=new R,c=new R,h=new R,u=new R;if(t)for(let d=0,p=t.count;d<p;d+=3){const g=t.getX(d+0),_=t.getX(d+1),m=t.getX(d+2);i.fromBufferAttribute(e,g),r.fromBufferAttribute(e,_),o.fromBufferAttribute(e,m),h.subVectors(o,r),u.subVectors(i,r),h.cross(u),a.fromBufferAttribute(n,g),l.fromBufferAttribute(n,_),c.fromBufferAttribute(n,m),a.add(h),l.add(h),c.add(h),n.setXYZ(g,a.x,a.y,a.z),n.setXYZ(_,l.x,l.y,l.z),n.setXYZ(m,c.x,c.y,c.z)}else for(let d=0,p=e.count;d<p;d+=3)i.fromBufferAttribute(e,d+0),r.fromBufferAttribute(e,d+1),o.fromBufferAttribute(e,d+2),h.subVectors(o,r),u.subVectors(i,r),h.cross(u),n.setXYZ(d+0,h.x,h.y,h.z),n.setXYZ(d+1,h.x,h.y,h.z),n.setXYZ(d+2,h.x,h.y,h.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const t=this.attributes.normal;for(let e=0,n=t.count;e<n;e++)de.fromBufferAttribute(t,e),de.normalize(),t.setXYZ(e,de.x,de.y,de.z)}toNonIndexed(){function t(a,l){const c=a.array,h=a.itemSize,u=a.normalized,d=new c.constructor(l.length*h);let p=0,g=0;for(let _=0,m=l.length;_<m;_++){a.isInterleavedBufferAttribute?p=l[_]*a.data.stride+a.offset:p=l[_]*h;for(let f=0;f<h;f++)d[g++]=c[p++]}return new Je(d,h,u)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const e=new Se,n=this.index.array,i=this.attributes;for(const a in i){const l=i[a],c=t(l,n);e.setAttribute(a,c)}const r=this.morphAttributes;for(const a in r){const l=[],c=r[a];for(let h=0,u=c.length;h<u;h++){const d=c[h],p=t(d,n);l.push(p)}e.morphAttributes[a]=l}e.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let a=0,l=o.length;a<l;a++){const c=o[a];e.addGroup(c.start,c.count,c.materialIndex)}return e}toJSON(){const t={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(t[c]=l[c]);return t}t.data={attributes:{}};const e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});const n=this.attributes;for(const l in n){const c=n[l];t.data.attributes[l]=c.toJSON(t.data)}const i={};let r=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],h=[];for(let u=0,d=c.length;u<d;u++){const p=c[u];h.push(p.toJSON(t.data))}h.length>0&&(i[l]=h,r=!0)}r&&(t.data.morphAttributes=i,t.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(t.data.groups=JSON.parse(JSON.stringify(o)));const a=this.boundingSphere;return a!==null&&(t.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const e={};this.name=t.name;const n=t.index;n!==null&&this.setIndex(n.clone(e));const i=t.attributes;for(const c in i){const h=i[c];this.setAttribute(c,h.clone(e))}const r=t.morphAttributes;for(const c in r){const h=[],u=r[c];for(let d=0,p=u.length;d<p;d++)h.push(u[d].clone(e));this.morphAttributes[c]=h}this.morphTargetsRelative=t.morphTargetsRelative;const o=t.groups;for(let c=0,h=o.length;c<h;c++){const u=o[c];this.addGroup(u.start,u.count,u.materialIndex)}const a=t.boundingBox;a!==null&&(this.boundingBox=a.clone());const l=t.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const Ea=new se,Cn=new Ms,qi=new Li,ba=new R,$n=new R,Zn=new R,Jn=new R,Ks=new R,Yi=new R,Ki=new ht,ji=new ht,$i=new ht,wa=new R,Aa=new R,Ra=new R,Zi=new R,Ji=new R;class ot extends pe{constructor(t=new Se,e=new me){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){const e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){const i=e[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=i.length;r<o;r++){const a=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}getVertexPosition(t,e){const n=this.geometry,i=n.attributes.position,r=n.morphAttributes.position,o=n.morphTargetsRelative;e.fromBufferAttribute(i,t);const a=this.morphTargetInfluences;if(r&&a){Yi.set(0,0,0);for(let l=0,c=r.length;l<c;l++){const h=a[l],u=r[l];h!==0&&(Ks.fromBufferAttribute(u,t),o?Yi.addScaledVector(Ks,h):Yi.addScaledVector(Ks.sub(e),h))}e.add(Yi)}return e}raycast(t,e){const n=this.geometry,i=this.material,r=this.matrixWorld;i!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),qi.copy(n.boundingSphere),qi.applyMatrix4(r),Cn.copy(t.ray).recast(t.near),!(qi.containsPoint(Cn.origin)===!1&&(Cn.intersectSphere(qi,ba)===null||Cn.origin.distanceToSquared(ba)>(t.far-t.near)**2))&&(Ea.copy(r).invert(),Cn.copy(t.ray).applyMatrix4(Ea),!(n.boundingBox!==null&&Cn.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(t,e,Cn)))}_computeIntersections(t,e,n){let i;const r=this.geometry,o=this.material,a=r.index,l=r.attributes.position,c=r.attributes.uv,h=r.attributes.uv1,u=r.attributes.normal,d=r.groups,p=r.drawRange;if(a!==null)if(Array.isArray(o))for(let g=0,_=d.length;g<_;g++){const m=d[g],f=o[m.materialIndex],E=Math.max(m.start,p.start),v=Math.min(a.count,Math.min(m.start+m.count,p.start+p.count));for(let S=E,P=v;S<P;S+=3){const w=a.getX(S),A=a.getX(S+1),G=a.getX(S+2);i=Qi(this,f,t,n,c,h,u,w,A,G),i&&(i.faceIndex=Math.floor(S/3),i.face.materialIndex=m.materialIndex,e.push(i))}}else{const g=Math.max(0,p.start),_=Math.min(a.count,p.start+p.count);for(let m=g,f=_;m<f;m+=3){const E=a.getX(m),v=a.getX(m+1),S=a.getX(m+2);i=Qi(this,o,t,n,c,h,u,E,v,S),i&&(i.faceIndex=Math.floor(m/3),e.push(i))}}else if(l!==void 0)if(Array.isArray(o))for(let g=0,_=d.length;g<_;g++){const m=d[g],f=o[m.materialIndex],E=Math.max(m.start,p.start),v=Math.min(l.count,Math.min(m.start+m.count,p.start+p.count));for(let S=E,P=v;S<P;S+=3){const w=S,A=S+1,G=S+2;i=Qi(this,f,t,n,c,h,u,w,A,G),i&&(i.faceIndex=Math.floor(S/3),i.face.materialIndex=m.materialIndex,e.push(i))}}else{const g=Math.max(0,p.start),_=Math.min(l.count,p.start+p.count);for(let m=g,f=_;m<f;m+=3){const E=m,v=m+1,S=m+2;i=Qi(this,o,t,n,c,h,u,E,v,S),i&&(i.faceIndex=Math.floor(m/3),e.push(i))}}}}function Lc(s,t,e,n,i,r,o,a){let l;if(t.side===De?l=n.intersectTriangle(o,r,i,!0,a):l=n.intersectTriangle(i,r,o,t.side===En,a),l===null)return null;Ji.copy(a),Ji.applyMatrix4(s.matrixWorld);const c=e.ray.origin.distanceTo(Ji);return c<e.near||c>e.far?null:{distance:c,point:Ji.clone(),object:s}}function Qi(s,t,e,n,i,r,o,a,l,c){s.getVertexPosition(a,$n),s.getVertexPosition(l,Zn),s.getVertexPosition(c,Jn);const h=Lc(s,t,e,n,$n,Zn,Jn,Zi);if(h){i&&(Ki.fromBufferAttribute(i,a),ji.fromBufferAttribute(i,l),$i.fromBufferAttribute(i,c),h.uv=Ke.getInterpolation(Zi,$n,Zn,Jn,Ki,ji,$i,new ht)),r&&(Ki.fromBufferAttribute(r,a),ji.fromBufferAttribute(r,l),$i.fromBufferAttribute(r,c),h.uv1=Ke.getInterpolation(Zi,$n,Zn,Jn,Ki,ji,$i,new ht),h.uv2=h.uv1),o&&(wa.fromBufferAttribute(o,a),Aa.fromBufferAttribute(o,l),Ra.fromBufferAttribute(o,c),h.normal=Ke.getInterpolation(Zi,$n,Zn,Jn,wa,Aa,Ra,new R),h.normal.dot(n.direction)>0&&h.normal.multiplyScalar(-1));const u={a,b:l,c,normal:new R,materialIndex:0};Ke.getNormal($n,Zn,Jn,u.normal),h.face=u}return h}class $t extends Se{constructor(t=1,e=1,n=1,i=1,r=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:n,widthSegments:i,heightSegments:r,depthSegments:o};const a=this;i=Math.floor(i),r=Math.floor(r),o=Math.floor(o);const l=[],c=[],h=[],u=[];let d=0,p=0;g("z","y","x",-1,-1,n,e,t,o,r,0),g("z","y","x",1,-1,n,e,-t,o,r,1),g("x","z","y",1,1,t,n,e,i,o,2),g("x","z","y",1,-1,t,n,-e,i,o,3),g("x","y","z",1,-1,t,e,n,i,r,4),g("x","y","z",-1,-1,t,e,-n,i,r,5),this.setIndex(l),this.setAttribute("position",new oe(c,3)),this.setAttribute("normal",new oe(h,3)),this.setAttribute("uv",new oe(u,2));function g(_,m,f,E,v,S,P,w,A,G,M){const b=S/A,B=P/G,k=S/2,q=P/2,L=w/2,I=A+1,V=G+1;let X=0,W=0;const Y=new R;for(let K=0;K<V;K++){const tt=K*B-q;for(let et=0;et<I;et++){const H=et*b-k;Y[_]=H*E,Y[m]=tt*v,Y[f]=L,c.push(Y.x,Y.y,Y.z),Y[_]=0,Y[m]=0,Y[f]=w>0?1:-1,h.push(Y.x,Y.y,Y.z),u.push(et/A),u.push(1-K/G),X+=1}}for(let K=0;K<G;K++)for(let tt=0;tt<A;tt++){const et=d+tt+I*K,H=d+tt+I*(K+1),j=d+(tt+1)+I*(K+1),lt=d+(tt+1)+I*K;l.push(et,H,lt),l.push(H,j,lt),W+=6}a.addGroup(p,W,M),p+=W,d+=X}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new $t(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}}function di(s){const t={};for(const e in s){t[e]={};for(const n in s[e]){const i=s[e][n];i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)?i.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][n]=null):t[e][n]=i.clone():Array.isArray(i)?t[e][n]=i.slice():t[e][n]=i}}return t}function Ae(s){const t={};for(let e=0;e<s.length;e++){const n=di(s[e]);for(const i in n)t[i]=n[i]}return t}function Dc(s){const t=[];for(let e=0;e<s.length;e++)t.push(s[e].clone());return t}function Fo(s){return s.getRenderTarget()===null?s.outputColorSpace:qt.workingColorSpace}const ms={clone:di,merge:Ae};var Ic=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Uc=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class ke extends zn{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Ic,this.fragmentShader=Uc,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={derivatives:!1,fragDepth:!1,drawBuffers:!1,shaderTextureLOD:!1,clipCullDistance:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=di(t.uniforms),this.uniformsGroups=Dc(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this}toJSON(t){const e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(const i in this.uniforms){const o=this.uniforms[i].value;o&&o.isTexture?e.uniforms[i]={type:"t",value:o.toJSON(t).uuid}:o&&o.isColor?e.uniforms[i]={type:"c",value:o.getHex()}:o&&o.isVector2?e.uniforms[i]={type:"v2",value:o.toArray()}:o&&o.isVector3?e.uniforms[i]={type:"v3",value:o.toArray()}:o&&o.isVector4?e.uniforms[i]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?e.uniforms[i]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?e.uniforms[i]={type:"m4",value:o.toArray()}:e.uniforms[i]={value:o}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;const n={};for(const i in this.extensions)this.extensions[i]===!0&&(n[i]=!0);return Object.keys(n).length>0&&(e.extensions=n),e}}class Oo extends pe{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new se,this.projectionMatrix=new se,this.projectionMatrixInverse=new se,this.coordinateSystem=hn}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(t,e){super.updateWorldMatrix(t,e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}class Le extends Oo{constructor(t=50,e=1,n=.1,i=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=n,this.far=i,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){const e=.5*this.getFilmHeight()/t;this.fov=ui*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){const t=Math.tan(Ti*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return ui*2*Math.atan(Math.tan(Ti*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}setViewOffset(t,e,n,i,r,o){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=i,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=this.near;let e=t*Math.tan(Ti*.5*this.fov)/this.zoom,n=2*e,i=this.aspect*n,r=-.5*i;const o=this.view;if(this.view!==null&&this.view.enabled){const l=o.fullWidth,c=o.fullHeight;r+=o.offsetX*i/l,e-=o.offsetY*n/c,i*=o.width/l,n*=o.height/c}const a=this.filmOffset;a!==0&&(r+=t*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+i,e,e-n,t,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}}const Qn=-90,ti=1;class Nc extends pe{constructor(t,e,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;const i=new Le(Qn,ti,t,e);i.layers=this.layers,this.add(i);const r=new Le(Qn,ti,t,e);r.layers=this.layers,this.add(r);const o=new Le(Qn,ti,t,e);o.layers=this.layers,this.add(o);const a=new Le(Qn,ti,t,e);a.layers=this.layers,this.add(a);const l=new Le(Qn,ti,t,e);l.layers=this.layers,this.add(l);const c=new Le(Qn,ti,t,e);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const t=this.coordinateSystem,e=this.children.concat(),[n,i,r,o,a,l]=e;for(const c of e)this.remove(c);if(t===hn)n.up.set(0,1,0),n.lookAt(1,0,0),i.up.set(0,1,0),i.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(t===ds)n.up.set(0,-1,0),n.lookAt(-1,0,0),i.up.set(0,-1,0),i.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(const c of e)this.add(c),c.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();const{renderTarget:n,activeMipmapLevel:i}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());const[r,o,a,l,c,h]=this.children,u=t.getRenderTarget(),d=t.getActiveCubeFace(),p=t.getActiveMipmapLevel(),g=t.xr.enabled;t.xr.enabled=!1;const _=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,t.setRenderTarget(n,0,i),t.render(e,r),t.setRenderTarget(n,1,i),t.render(e,o),t.setRenderTarget(n,2,i),t.render(e,a),t.setRenderTarget(n,3,i),t.render(e,l),t.setRenderTarget(n,4,i),t.render(e,c),n.texture.generateMipmaps=_,t.setRenderTarget(n,5,i),t.render(e,h),t.setRenderTarget(u,d,p),t.xr.enabled=g,n.texture.needsPMREMUpdate=!0}}class Bo extends Ie{constructor(t,e,n,i,r,o,a,l,c,h){t=t!==void 0?t:[],e=e!==void 0?e:li,super(t,e,n,i,r,o,a,l,c,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}}class Fc extends Ze{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;const n={width:t,height:t,depth:1},i=[n,n,n,n,n,n];e.encoding!==void 0&&(bi("THREE.WebGLCubeRenderTarget: option.encoding has been replaced by option.colorSpace."),e.colorSpace=e.encoding===Bn?Jt:We),this.texture=new Bo(i,e.mapping,e.wrapS,e.wrapT,e.magFilter,e.minFilter,e.format,e.type,e.anisotropy,e.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=e.generateMipmaps!==void 0?e.generateMipmaps:!1,this.texture.minFilter=e.minFilter!==void 0?e.minFilter:He}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},i=new $t(5,5,5),r=new ke({name:"CubemapFromEquirect",uniforms:di(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:De,blending:un});r.uniforms.tEquirect.value=e;const o=new ot(i,r),a=e.minFilter;return e.minFilter===Ri&&(e.minFilter=He),new Nc(1,10,this).update(t,o),e.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(t,e,n,i){const r=t.getRenderTarget();for(let o=0;o<6;o++)t.setRenderTarget(this,o),t.clear(e,n,i);t.setRenderTarget(r)}}const js=new R,Oc=new R,Bc=new Gt;class Ln{constructor(t=new R(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,n,i){return this.normal.set(t,e,n),this.constant=i,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,n){const i=js.subVectors(n,e).cross(Oc.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(i,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){const t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e){const n=t.delta(js),i=this.normal.dot(n);if(i===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;const r=-(t.start.dot(this.normal)+this.constant)/i;return r<0||r>1?null:e.copy(t.start).addScaledVector(n,r)}intersectsLine(t){const e=this.distanceToPoint(t.start),n=this.distanceToPoint(t.end);return e<0&&n>0||n<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){const n=e||Bc.getNormalMatrix(t),i=this.coplanarPoint(js).applyMatrix4(t),r=this.normal.applyMatrix3(n).normalize();return this.constant=-i.dot(r),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Pn=new Li,ts=new R;class Sr{constructor(t=new Ln,e=new Ln,n=new Ln,i=new Ln,r=new Ln,o=new Ln){this.planes=[t,e,n,i,r,o]}set(t,e,n,i,r,o){const a=this.planes;return a[0].copy(t),a[1].copy(e),a[2].copy(n),a[3].copy(i),a[4].copy(r),a[5].copy(o),this}copy(t){const e=this.planes;for(let n=0;n<6;n++)e[n].copy(t.planes[n]);return this}setFromProjectionMatrix(t,e=hn){const n=this.planes,i=t.elements,r=i[0],o=i[1],a=i[2],l=i[3],c=i[4],h=i[5],u=i[6],d=i[7],p=i[8],g=i[9],_=i[10],m=i[11],f=i[12],E=i[13],v=i[14],S=i[15];if(n[0].setComponents(l-r,d-c,m-p,S-f).normalize(),n[1].setComponents(l+r,d+c,m+p,S+f).normalize(),n[2].setComponents(l+o,d+h,m+g,S+E).normalize(),n[3].setComponents(l-o,d-h,m-g,S-E).normalize(),n[4].setComponents(l-a,d-u,m-_,S-v).normalize(),e===hn)n[5].setComponents(l+a,d+u,m+_,S+v).normalize();else if(e===ds)n[5].setComponents(a,u,_,v).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),Pn.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{const e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),Pn.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(Pn)}intersectsSprite(t){return Pn.center.set(0,0,0),Pn.radius=.7071067811865476,Pn.applyMatrix4(t.matrixWorld),this.intersectsSphere(Pn)}intersectsSphere(t){const e=this.planes,n=t.center,i=-t.radius;for(let r=0;r<6;r++)if(e[r].distanceToPoint(n)<i)return!1;return!0}intersectsBox(t){const e=this.planes;for(let n=0;n<6;n++){const i=e[n];if(ts.x=i.normal.x>0?t.max.x:t.min.x,ts.y=i.normal.y>0?t.max.y:t.min.y,ts.z=i.normal.z>0?t.max.z:t.min.z,i.distanceToPoint(ts)<0)return!1}return!0}containsPoint(t){const e=this.planes;for(let n=0;n<6;n++)if(e[n].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function zo(){let s=null,t=!1,e=null,n=null;function i(r,o){e(r,o),n=s.requestAnimationFrame(i)}return{start:function(){t!==!0&&e!==null&&(n=s.requestAnimationFrame(i),t=!0)},stop:function(){s.cancelAnimationFrame(n),t=!1},setAnimationLoop:function(r){e=r},setContext:function(r){s=r}}}function zc(s,t){const e=t.isWebGL2,n=new WeakMap;function i(c,h){const u=c.array,d=c.usage,p=u.byteLength,g=s.createBuffer();s.bindBuffer(h,g),s.bufferData(h,u,d),c.onUploadCallback();let _;if(u instanceof Float32Array)_=s.FLOAT;else if(u instanceof Uint16Array)if(c.isFloat16BufferAttribute)if(e)_=s.HALF_FLOAT;else throw new Error("THREE.WebGLAttributes: Usage of Float16BufferAttribute requires WebGL2.");else _=s.UNSIGNED_SHORT;else if(u instanceof Int16Array)_=s.SHORT;else if(u instanceof Uint32Array)_=s.UNSIGNED_INT;else if(u instanceof Int32Array)_=s.INT;else if(u instanceof Int8Array)_=s.BYTE;else if(u instanceof Uint8Array)_=s.UNSIGNED_BYTE;else if(u instanceof Uint8ClampedArray)_=s.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+u);return{buffer:g,type:_,bytesPerElement:u.BYTES_PER_ELEMENT,version:c.version,size:p}}function r(c,h,u){const d=h.array,p=h._updateRange,g=h.updateRanges;if(s.bindBuffer(u,c),p.count===-1&&g.length===0&&s.bufferSubData(u,0,d),g.length!==0){for(let _=0,m=g.length;_<m;_++){const f=g[_];e?s.bufferSubData(u,f.start*d.BYTES_PER_ELEMENT,d,f.start,f.count):s.bufferSubData(u,f.start*d.BYTES_PER_ELEMENT,d.subarray(f.start,f.start+f.count))}h.clearUpdateRanges()}p.count!==-1&&(e?s.bufferSubData(u,p.offset*d.BYTES_PER_ELEMENT,d,p.offset,p.count):s.bufferSubData(u,p.offset*d.BYTES_PER_ELEMENT,d.subarray(p.offset,p.offset+p.count)),p.count=-1),h.onUploadCallback()}function o(c){return c.isInterleavedBufferAttribute&&(c=c.data),n.get(c)}function a(c){c.isInterleavedBufferAttribute&&(c=c.data);const h=n.get(c);h&&(s.deleteBuffer(h.buffer),n.delete(c))}function l(c,h){if(c.isGLBufferAttribute){const d=n.get(c);(!d||d.version<c.version)&&n.set(c,{buffer:c.buffer,type:c.type,bytesPerElement:c.elementSize,version:c.version});return}c.isInterleavedBufferAttribute&&(c=c.data);const u=n.get(c);if(u===void 0)n.set(c,i(c,h));else if(u.version<c.version){if(u.size!==c.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");r(u.buffer,c,h),u.version=c.version}}return{get:o,remove:a,update:l}}class Re extends Se{constructor(t=1,e=1,n=1,i=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:n,heightSegments:i};const r=t/2,o=e/2,a=Math.floor(n),l=Math.floor(i),c=a+1,h=l+1,u=t/a,d=e/l,p=[],g=[],_=[],m=[];for(let f=0;f<h;f++){const E=f*d-o;for(let v=0;v<c;v++){const S=v*u-r;g.push(S,-E,0),_.push(0,0,1),m.push(v/a),m.push(1-f/l)}}for(let f=0;f<l;f++)for(let E=0;E<a;E++){const v=E+c*f,S=E+c*(f+1),P=E+1+c*(f+1),w=E+1+c*f;p.push(v,S,w),p.push(S,P,w)}this.setIndex(p),this.setAttribute("position",new oe(g,3)),this.setAttribute("normal",new oe(_,3)),this.setAttribute("uv",new oe(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Re(t.width,t.height,t.widthSegments,t.heightSegments)}}var kc=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Gc=`#ifdef USE_ALPHAHASH
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
#endif`,Vc=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Hc=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Wc=`#ifdef USE_ALPHATEST
	if ( diffuseColor.a < alphaTest ) discard;
#endif`,Xc=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,qc=`#ifdef USE_AOMAP
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
#endif`,Yc=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Kc=`#ifdef USE_BATCHING
	attribute float batchId;
	uniform highp sampler2D batchingTexture;
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
#endif`,jc=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( batchId );
#endif`,$c=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Zc=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Jc=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,Qc=`#ifdef USE_IRIDESCENCE
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
#endif`,th=`#ifdef USE_BUMPMAP
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
#endif`,eh=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
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
#endif`,nh=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,ih=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,sh=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,rh=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,ah=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,oh=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	varying vec3 vColor;
#endif`,lh=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif`,ch=`#define PI 3.141592653589793
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
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
float luminance( const in vec3 rgb ) {
	const vec3 weights = vec3( 0.2126729, 0.7151522, 0.0721750 );
	return dot( weights, rgb );
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
} // validated`,hh=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,uh=`vec3 transformedNormal = objectNormal;
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
#endif`,dh=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,fh=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,ph=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,mh=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,gh="gl_FragColor = linearToOutputTexel( gl_FragColor );",_h=`
const mat3 LINEAR_SRGB_TO_LINEAR_DISPLAY_P3 = mat3(
	vec3( 0.8224621, 0.177538, 0.0 ),
	vec3( 0.0331941, 0.9668058, 0.0 ),
	vec3( 0.0170827, 0.0723974, 0.9105199 )
);
const mat3 LINEAR_DISPLAY_P3_TO_LINEAR_SRGB = mat3(
	vec3( 1.2249401, - 0.2249404, 0.0 ),
	vec3( - 0.0420569, 1.0420571, 0.0 ),
	vec3( - 0.0196376, - 0.0786361, 1.0982735 )
);
vec4 LinearSRGBToLinearDisplayP3( in vec4 value ) {
	return vec4( value.rgb * LINEAR_SRGB_TO_LINEAR_DISPLAY_P3, value.a );
}
vec4 LinearDisplayP3ToLinearSRGB( in vec4 value ) {
	return vec4( value.rgb * LINEAR_DISPLAY_P3_TO_LINEAR_SRGB, value.a );
}
vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}
vec4 LinearToLinear( in vec4 value ) {
	return value;
}
vec4 LinearTosRGB( in vec4 value ) {
	return sRGBTransferOETF( value );
}`,vh=`#ifdef USE_ENVMAP
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
		vec4 envColor = textureCube( envMap, vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,xh=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,Mh=`#ifdef USE_ENVMAP
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
#endif`,yh=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Sh=`#ifdef USE_ENVMAP
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
#endif`,Th=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Eh=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,bh=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,wh=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Ah=`#ifdef USE_GRADIENTMAP
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
}`,Rh=`#ifdef USE_LIGHTMAP
	vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
	vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
	reflectedLight.indirectDiffuse += lightMapIrradiance;
#endif`,Ch=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Ph=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Lh=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Dh=`uniform bool receiveShadow;
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
	#if defined ( LEGACY_LIGHTS )
		if ( cutoffDistance > 0.0 && decayExponent > 0.0 ) {
			return pow( saturate( - lightDistance / cutoffDistance + 1.0 ), decayExponent );
		}
		return 1.0;
	#else
		float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
		if ( cutoffDistance > 0.0 ) {
			distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
		}
		return distanceFalloff;
	#endif
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
#endif`,Ih=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, reflectVec, roughness );
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
#endif`,Uh=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Nh=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Fh=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Oh=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Bh=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
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
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
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
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
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
#endif`,zh=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
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
		float v = 0.5 / ( gv + gl );
		return saturate(v);
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
	vec3 f0 = material.specularColor;
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
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
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
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
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
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
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
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,kh=`
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
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
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
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
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
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
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
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
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
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,Gh=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
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
#endif`,Vh=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Hh=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	gl_FragDepthEXT = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Wh=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Xh=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		varying float vFragDepth;
		varying float vIsPerspective;
	#else
		uniform float logDepthBufFC;
	#endif
#endif`,qh=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		vFragDepth = 1.0 + gl_Position.w;
		vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
	#else
		if ( isPerspectiveMatrix( projectionMatrix ) ) {
			gl_Position.z = log2( max( EPSILON, gl_Position.w + 1.0 ) ) * logDepthBufFC - 1.0;
			gl_Position.z *= gl_Position.w;
		}
	#endif
#endif`,Yh=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Kh=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,jh=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,$h=`#if defined( USE_POINTS_UV )
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
#endif`,Zh=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Jh=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Qh=`#if defined( USE_MORPHCOLORS ) && defined( MORPHTARGETS_TEXTURE )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,tu=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		objectNormal += morphNormal0 * morphTargetInfluences[ 0 ];
		objectNormal += morphNormal1 * morphTargetInfluences[ 1 ];
		objectNormal += morphNormal2 * morphTargetInfluences[ 2 ];
		objectNormal += morphNormal3 * morphTargetInfluences[ 3 ];
	#endif
#endif`,eu=`#ifdef USE_MORPHTARGETS
	uniform float morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
		uniform sampler2DArray morphTargetsTexture;
		uniform ivec2 morphTargetsTextureSize;
		vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
			int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
			int y = texelIndex / morphTargetsTextureSize.x;
			int x = texelIndex - y * morphTargetsTextureSize.x;
			ivec3 morphUV = ivec3( x, y, morphTargetIndex );
			return texelFetch( morphTargetsTexture, morphUV, 0 );
		}
	#else
		#ifndef USE_MORPHNORMALS
			uniform float morphTargetInfluences[ 8 ];
		#else
			uniform float morphTargetInfluences[ 4 ];
		#endif
	#endif
#endif`,nu=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		transformed += morphTarget0 * morphTargetInfluences[ 0 ];
		transformed += morphTarget1 * morphTargetInfluences[ 1 ];
		transformed += morphTarget2 * morphTargetInfluences[ 2 ];
		transformed += morphTarget3 * morphTargetInfluences[ 3 ];
		#ifndef USE_MORPHNORMALS
			transformed += morphTarget4 * morphTargetInfluences[ 4 ];
			transformed += morphTarget5 * morphTargetInfluences[ 5 ];
			transformed += morphTarget6 * morphTargetInfluences[ 6 ];
			transformed += morphTarget7 * morphTargetInfluences[ 7 ];
		#endif
	#endif
#endif`,iu=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,su=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,ru=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,au=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,ou=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,lu=`#ifdef USE_NORMALMAP
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
#endif`,cu=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,hu=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,uu=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,du=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,fu=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,pu=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;
const vec3 PackFactors = vec3( 256. * 256. * 256., 256. * 256., 256. );
const vec4 UnpackFactors = UnpackDownscale / vec4( PackFactors, 1. );
const float ShiftRight8 = 1. / 256.;
vec4 packDepthToRGBA( const in float v ) {
	vec4 r = vec4( fract( v * PackFactors ), v );
	r.yzw -= r.xyz * ShiftRight8;	return r * PackUpscale;
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors );
}
vec2 packDepthToRG( in highp float v ) {
	return packDepthToRGBA( v ).yx;
}
float unpackRGToDepth( const in highp vec2 v ) {
	return unpackRGBAToDepth( vec4( v.xy, 0.0, 0.0 ) );
}
vec4 pack2HalfToRGBA( vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,mu=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,gu=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,_u=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,vu=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,xu=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Mu=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,yu=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return shadow;
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
		vec3 lightToPosition = shadowCoord.xyz;
		float dp = ( length( lightToPosition ) - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );		dp += shadowBias;
		vec3 bd3D = normalize( lightToPosition );
		#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
			vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
			return (
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
			) * ( 1.0 / 9.0 );
		#else
			return texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
		#endif
	}
#endif`,Su=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
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
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,Tu=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
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
#endif`,Eu=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,bu=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,wu=`#ifdef USE_SKINNING
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
#endif`,Au=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Ru=`#ifdef USE_SKINNING
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
#endif`,Cu=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Pu=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Lu=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Du=`#ifndef saturate
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
vec3 OptimizedCineonToneMapping( vec3 color ) {
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
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color *= toneMappingExposure;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	return color;
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,Iu=`#ifdef USE_TRANSMISSION
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
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,Uu=`#ifdef USE_TRANSMISSION
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
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
		vec3 refractedRayExit = position + transmissionRay;
		vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
		vec2 refractionCoords = ndcPos.xy / ndcPos.w;
		refractionCoords += 1.0;
		refractionCoords /= 2.0;
		vec4 transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
		vec3 transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,Nu=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Fu=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Ou=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Bu=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const zu=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,ku=`uniform sampler2D t2D;
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
}`,Gu=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Vu=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Hu=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Wu=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Xu=`#include <common>
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
}`,qu=`#if DEPTH_PACKING == 3200
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
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( 1.0 );
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#endif
}`,Yu=`#define DISTANCE
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
}`,Ku=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( 1.0 );
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,ju=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,$u=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Zu=`uniform float scale;
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
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,Ju=`uniform vec3 diffuse;
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
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Qu=`#include <common>
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
}`,td=`uniform vec3 diffuse;
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
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
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
}`,ed=`#define LAMBERT
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
}`,nd=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
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
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
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
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
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
}`,id=`#define MATCAP
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
}`,sd=`#define MATCAP
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
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
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
}`,rd=`#define NORMAL
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
}`,ad=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), opacity );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,od=`#define PHONG
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
}`,ld=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
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
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
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
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
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
}`,cd=`#define STANDARD
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
}`,hd=`#define STANDARD
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
#include <packing>
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
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
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
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
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
}`,ud=`#define TOON
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
}`,dd=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
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
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
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
}`,fd=`uniform float size;
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
}`,pd=`uniform vec3 diffuse;
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
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
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
}`,md=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
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
}`,gd=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
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
}`,_d=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix * vec4( 0.0, 0.0, 0.0, 1.0 );
	vec2 scale;
	scale.x = length( vec3( modelMatrix[ 0 ].x, modelMatrix[ 0 ].y, modelMatrix[ 0 ].z ) );
	scale.y = length( vec3( modelMatrix[ 1 ].x, modelMatrix[ 1 ].y, modelMatrix[ 1 ].z ) );
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
}`,vd=`uniform vec3 diffuse;
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
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
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
}`,Ut={alphahash_fragment:kc,alphahash_pars_fragment:Gc,alphamap_fragment:Vc,alphamap_pars_fragment:Hc,alphatest_fragment:Wc,alphatest_pars_fragment:Xc,aomap_fragment:qc,aomap_pars_fragment:Yc,batching_pars_vertex:Kc,batching_vertex:jc,begin_vertex:$c,beginnormal_vertex:Zc,bsdfs:Jc,iridescence_fragment:Qc,bumpmap_pars_fragment:th,clipping_planes_fragment:eh,clipping_planes_pars_fragment:nh,clipping_planes_pars_vertex:ih,clipping_planes_vertex:sh,color_fragment:rh,color_pars_fragment:ah,color_pars_vertex:oh,color_vertex:lh,common:ch,cube_uv_reflection_fragment:hh,defaultnormal_vertex:uh,displacementmap_pars_vertex:dh,displacementmap_vertex:fh,emissivemap_fragment:ph,emissivemap_pars_fragment:mh,colorspace_fragment:gh,colorspace_pars_fragment:_h,envmap_fragment:vh,envmap_common_pars_fragment:xh,envmap_pars_fragment:Mh,envmap_pars_vertex:yh,envmap_physical_pars_fragment:Ih,envmap_vertex:Sh,fog_vertex:Th,fog_pars_vertex:Eh,fog_fragment:bh,fog_pars_fragment:wh,gradientmap_pars_fragment:Ah,lightmap_fragment:Rh,lightmap_pars_fragment:Ch,lights_lambert_fragment:Ph,lights_lambert_pars_fragment:Lh,lights_pars_begin:Dh,lights_toon_fragment:Uh,lights_toon_pars_fragment:Nh,lights_phong_fragment:Fh,lights_phong_pars_fragment:Oh,lights_physical_fragment:Bh,lights_physical_pars_fragment:zh,lights_fragment_begin:kh,lights_fragment_maps:Gh,lights_fragment_end:Vh,logdepthbuf_fragment:Hh,logdepthbuf_pars_fragment:Wh,logdepthbuf_pars_vertex:Xh,logdepthbuf_vertex:qh,map_fragment:Yh,map_pars_fragment:Kh,map_particle_fragment:jh,map_particle_pars_fragment:$h,metalnessmap_fragment:Zh,metalnessmap_pars_fragment:Jh,morphcolor_vertex:Qh,morphnormal_vertex:tu,morphtarget_pars_vertex:eu,morphtarget_vertex:nu,normal_fragment_begin:iu,normal_fragment_maps:su,normal_pars_fragment:ru,normal_pars_vertex:au,normal_vertex:ou,normalmap_pars_fragment:lu,clearcoat_normal_fragment_begin:cu,clearcoat_normal_fragment_maps:hu,clearcoat_pars_fragment:uu,iridescence_pars_fragment:du,opaque_fragment:fu,packing:pu,premultiplied_alpha_fragment:mu,project_vertex:gu,dithering_fragment:_u,dithering_pars_fragment:vu,roughnessmap_fragment:xu,roughnessmap_pars_fragment:Mu,shadowmap_pars_fragment:yu,shadowmap_pars_vertex:Su,shadowmap_vertex:Tu,shadowmask_pars_fragment:Eu,skinbase_vertex:bu,skinning_pars_vertex:wu,skinning_vertex:Au,skinnormal_vertex:Ru,specularmap_fragment:Cu,specularmap_pars_fragment:Pu,tonemapping_fragment:Lu,tonemapping_pars_fragment:Du,transmission_fragment:Iu,transmission_pars_fragment:Uu,uv_pars_fragment:Nu,uv_pars_vertex:Fu,uv_vertex:Ou,worldpos_vertex:Bu,background_vert:zu,background_frag:ku,backgroundCube_vert:Gu,backgroundCube_frag:Vu,cube_vert:Hu,cube_frag:Wu,depth_vert:Xu,depth_frag:qu,distanceRGBA_vert:Yu,distanceRGBA_frag:Ku,equirect_vert:ju,equirect_frag:$u,linedashed_vert:Zu,linedashed_frag:Ju,meshbasic_vert:Qu,meshbasic_frag:td,meshlambert_vert:ed,meshlambert_frag:nd,meshmatcap_vert:id,meshmatcap_frag:sd,meshnormal_vert:rd,meshnormal_frag:ad,meshphong_vert:od,meshphong_frag:ld,meshphysical_vert:cd,meshphysical_frag:hd,meshtoon_vert:ud,meshtoon_frag:dd,points_vert:fd,points_frag:pd,shadow_vert:md,shadow_frag:gd,sprite_vert:_d,sprite_frag:vd},it={common:{diffuse:{value:new Nt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Gt},alphaMap:{value:null},alphaMapTransform:{value:new Gt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Gt}},envmap:{envMap:{value:null},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Gt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Gt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Gt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Gt},normalScale:{value:new ht(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Gt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Gt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Gt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Gt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Nt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Nt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Gt},alphaTest:{value:0},uvTransform:{value:new Gt}},sprite:{diffuse:{value:new Nt(16777215)},opacity:{value:1},center:{value:new ht(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Gt},alphaMap:{value:null},alphaMapTransform:{value:new Gt},alphaTest:{value:0}}},tn={basic:{uniforms:Ae([it.common,it.specularmap,it.envmap,it.aomap,it.lightmap,it.fog]),vertexShader:Ut.meshbasic_vert,fragmentShader:Ut.meshbasic_frag},lambert:{uniforms:Ae([it.common,it.specularmap,it.envmap,it.aomap,it.lightmap,it.emissivemap,it.bumpmap,it.normalmap,it.displacementmap,it.fog,it.lights,{emissive:{value:new Nt(0)}}]),vertexShader:Ut.meshlambert_vert,fragmentShader:Ut.meshlambert_frag},phong:{uniforms:Ae([it.common,it.specularmap,it.envmap,it.aomap,it.lightmap,it.emissivemap,it.bumpmap,it.normalmap,it.displacementmap,it.fog,it.lights,{emissive:{value:new Nt(0)},specular:{value:new Nt(1118481)},shininess:{value:30}}]),vertexShader:Ut.meshphong_vert,fragmentShader:Ut.meshphong_frag},standard:{uniforms:Ae([it.common,it.envmap,it.aomap,it.lightmap,it.emissivemap,it.bumpmap,it.normalmap,it.displacementmap,it.roughnessmap,it.metalnessmap,it.fog,it.lights,{emissive:{value:new Nt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Ut.meshphysical_vert,fragmentShader:Ut.meshphysical_frag},toon:{uniforms:Ae([it.common,it.aomap,it.lightmap,it.emissivemap,it.bumpmap,it.normalmap,it.displacementmap,it.gradientmap,it.fog,it.lights,{emissive:{value:new Nt(0)}}]),vertexShader:Ut.meshtoon_vert,fragmentShader:Ut.meshtoon_frag},matcap:{uniforms:Ae([it.common,it.bumpmap,it.normalmap,it.displacementmap,it.fog,{matcap:{value:null}}]),vertexShader:Ut.meshmatcap_vert,fragmentShader:Ut.meshmatcap_frag},points:{uniforms:Ae([it.points,it.fog]),vertexShader:Ut.points_vert,fragmentShader:Ut.points_frag},dashed:{uniforms:Ae([it.common,it.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Ut.linedashed_vert,fragmentShader:Ut.linedashed_frag},depth:{uniforms:Ae([it.common,it.displacementmap]),vertexShader:Ut.depth_vert,fragmentShader:Ut.depth_frag},normal:{uniforms:Ae([it.common,it.bumpmap,it.normalmap,it.displacementmap,{opacity:{value:1}}]),vertexShader:Ut.meshnormal_vert,fragmentShader:Ut.meshnormal_frag},sprite:{uniforms:Ae([it.sprite,it.fog]),vertexShader:Ut.sprite_vert,fragmentShader:Ut.sprite_frag},background:{uniforms:{uvTransform:{value:new Gt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Ut.background_vert,fragmentShader:Ut.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1}},vertexShader:Ut.backgroundCube_vert,fragmentShader:Ut.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Ut.cube_vert,fragmentShader:Ut.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Ut.equirect_vert,fragmentShader:Ut.equirect_frag},distanceRGBA:{uniforms:Ae([it.common,it.displacementmap,{referencePosition:{value:new R},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Ut.distanceRGBA_vert,fragmentShader:Ut.distanceRGBA_frag},shadow:{uniforms:Ae([it.lights,it.fog,{color:{value:new Nt(0)},opacity:{value:1}}]),vertexShader:Ut.shadow_vert,fragmentShader:Ut.shadow_frag}};tn.physical={uniforms:Ae([tn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Gt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Gt},clearcoatNormalScale:{value:new ht(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Gt},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Gt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Gt},sheen:{value:0},sheenColor:{value:new Nt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Gt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Gt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Gt},transmissionSamplerSize:{value:new ht},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Gt},attenuationDistance:{value:0},attenuationColor:{value:new Nt(0)},specularColor:{value:new Nt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Gt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Gt},anisotropyVector:{value:new ht},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Gt}}]),vertexShader:Ut.meshphysical_vert,fragmentShader:Ut.meshphysical_frag};const es={r:0,b:0,g:0};function xd(s,t,e,n,i,r,o){const a=new Nt(0);let l=r===!0?0:1,c,h,u=null,d=0,p=null;function g(m,f){let E=!1,v=f.isScene===!0?f.background:null;v&&v.isTexture&&(v=(f.backgroundBlurriness>0?e:t).get(v)),v===null?_(a,l):v&&v.isColor&&(_(v,1),E=!0);const S=s.xr.getEnvironmentBlendMode();S==="additive"?n.buffers.color.setClear(0,0,0,1,o):S==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,o),(s.autoClear||E)&&s.clear(s.autoClearColor,s.autoClearDepth,s.autoClearStencil),v&&(v.isCubeTexture||v.mapping===vs)?(h===void 0&&(h=new ot(new $t(1,1,1),new ke({name:"BackgroundCubeMaterial",uniforms:di(tn.backgroundCube.uniforms),vertexShader:tn.backgroundCube.vertexShader,fragmentShader:tn.backgroundCube.fragmentShader,side:De,depthTest:!1,depthWrite:!1,fog:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(P,w,A){this.matrixWorld.copyPosition(A.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(h)),h.material.uniforms.envMap.value=v,h.material.uniforms.flipEnvMap.value=v.isCubeTexture&&v.isRenderTargetTexture===!1?-1:1,h.material.uniforms.backgroundBlurriness.value=f.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=f.backgroundIntensity,h.material.toneMapped=qt.getTransfer(v.colorSpace)!==Zt,(u!==v||d!==v.version||p!==s.toneMapping)&&(h.material.needsUpdate=!0,u=v,d=v.version,p=s.toneMapping),h.layers.enableAll(),m.unshift(h,h.geometry,h.material,0,0,null)):v&&v.isTexture&&(c===void 0&&(c=new ot(new Re(2,2),new ke({name:"BackgroundMaterial",uniforms:di(tn.background.uniforms),vertexShader:tn.background.vertexShader,fragmentShader:tn.background.fragmentShader,side:En,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(c)),c.material.uniforms.t2D.value=v,c.material.uniforms.backgroundIntensity.value=f.backgroundIntensity,c.material.toneMapped=qt.getTransfer(v.colorSpace)!==Zt,v.matrixAutoUpdate===!0&&v.updateMatrix(),c.material.uniforms.uvTransform.value.copy(v.matrix),(u!==v||d!==v.version||p!==s.toneMapping)&&(c.material.needsUpdate=!0,u=v,d=v.version,p=s.toneMapping),c.layers.enableAll(),m.unshift(c,c.geometry,c.material,0,0,null))}function _(m,f){m.getRGB(es,Fo(s)),n.buffers.color.setClear(es.r,es.g,es.b,f,o)}return{getClearColor:function(){return a},setClearColor:function(m,f=1){a.set(m),l=f,_(a,l)},getClearAlpha:function(){return l},setClearAlpha:function(m){l=m,_(a,l)},render:g}}function Md(s,t,e,n){const i=s.getParameter(s.MAX_VERTEX_ATTRIBS),r=n.isWebGL2?null:t.get("OES_vertex_array_object"),o=n.isWebGL2||r!==null,a={},l=m(null);let c=l,h=!1;function u(L,I,V,X,W){let Y=!1;if(o){const K=_(X,V,I);c!==K&&(c=K,p(c.object)),Y=f(L,X,V,W),Y&&E(L,X,V,W)}else{const K=I.wireframe===!0;(c.geometry!==X.id||c.program!==V.id||c.wireframe!==K)&&(c.geometry=X.id,c.program=V.id,c.wireframe=K,Y=!0)}W!==null&&e.update(W,s.ELEMENT_ARRAY_BUFFER),(Y||h)&&(h=!1,G(L,I,V,X),W!==null&&s.bindBuffer(s.ELEMENT_ARRAY_BUFFER,e.get(W).buffer))}function d(){return n.isWebGL2?s.createVertexArray():r.createVertexArrayOES()}function p(L){return n.isWebGL2?s.bindVertexArray(L):r.bindVertexArrayOES(L)}function g(L){return n.isWebGL2?s.deleteVertexArray(L):r.deleteVertexArrayOES(L)}function _(L,I,V){const X=V.wireframe===!0;let W=a[L.id];W===void 0&&(W={},a[L.id]=W);let Y=W[I.id];Y===void 0&&(Y={},W[I.id]=Y);let K=Y[X];return K===void 0&&(K=m(d()),Y[X]=K),K}function m(L){const I=[],V=[],X=[];for(let W=0;W<i;W++)I[W]=0,V[W]=0,X[W]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:I,enabledAttributes:V,attributeDivisors:X,object:L,attributes:{},index:null}}function f(L,I,V,X){const W=c.attributes,Y=I.attributes;let K=0;const tt=V.getAttributes();for(const et in tt)if(tt[et].location>=0){const j=W[et];let lt=Y[et];if(lt===void 0&&(et==="instanceMatrix"&&L.instanceMatrix&&(lt=L.instanceMatrix),et==="instanceColor"&&L.instanceColor&&(lt=L.instanceColor)),j===void 0||j.attribute!==lt||lt&&j.data!==lt.data)return!0;K++}return c.attributesNum!==K||c.index!==X}function E(L,I,V,X){const W={},Y=I.attributes;let K=0;const tt=V.getAttributes();for(const et in tt)if(tt[et].location>=0){let j=Y[et];j===void 0&&(et==="instanceMatrix"&&L.instanceMatrix&&(j=L.instanceMatrix),et==="instanceColor"&&L.instanceColor&&(j=L.instanceColor));const lt={};lt.attribute=j,j&&j.data&&(lt.data=j.data),W[et]=lt,K++}c.attributes=W,c.attributesNum=K,c.index=X}function v(){const L=c.newAttributes;for(let I=0,V=L.length;I<V;I++)L[I]=0}function S(L){P(L,0)}function P(L,I){const V=c.newAttributes,X=c.enabledAttributes,W=c.attributeDivisors;V[L]=1,X[L]===0&&(s.enableVertexAttribArray(L),X[L]=1),W[L]!==I&&((n.isWebGL2?s:t.get("ANGLE_instanced_arrays"))[n.isWebGL2?"vertexAttribDivisor":"vertexAttribDivisorANGLE"](L,I),W[L]=I)}function w(){const L=c.newAttributes,I=c.enabledAttributes;for(let V=0,X=I.length;V<X;V++)I[V]!==L[V]&&(s.disableVertexAttribArray(V),I[V]=0)}function A(L,I,V,X,W,Y,K){K===!0?s.vertexAttribIPointer(L,I,V,W,Y):s.vertexAttribPointer(L,I,V,X,W,Y)}function G(L,I,V,X){if(n.isWebGL2===!1&&(L.isInstancedMesh||X.isInstancedBufferGeometry)&&t.get("ANGLE_instanced_arrays")===null)return;v();const W=X.attributes,Y=V.getAttributes(),K=I.defaultAttributeValues;for(const tt in Y){const et=Y[tt];if(et.location>=0){let H=W[tt];if(H===void 0&&(tt==="instanceMatrix"&&L.instanceMatrix&&(H=L.instanceMatrix),tt==="instanceColor"&&L.instanceColor&&(H=L.instanceColor)),H!==void 0){const j=H.normalized,lt=H.itemSize,_t=e.get(H);if(_t===void 0)continue;const gt=_t.buffer,Pt=_t.type,Dt=_t.bytesPerElement,Et=n.isWebGL2===!0&&(Pt===s.INT||Pt===s.UNSIGNED_INT||H.gpuType===xo);if(H.isInterleavedBufferAttribute){const Ht=H.data,U=Ht.stride,Te=H.offset;if(Ht.isInstancedInterleavedBuffer){for(let xt=0;xt<et.locationSize;xt++)P(et.location+xt,Ht.meshPerAttribute);L.isInstancedMesh!==!0&&X._maxInstanceCount===void 0&&(X._maxInstanceCount=Ht.meshPerAttribute*Ht.count)}else for(let xt=0;xt<et.locationSize;xt++)S(et.location+xt);s.bindBuffer(s.ARRAY_BUFFER,gt);for(let xt=0;xt<et.locationSize;xt++)A(et.location+xt,lt/et.locationSize,Pt,j,U*Dt,(Te+lt/et.locationSize*xt)*Dt,Et)}else{if(H.isInstancedBufferAttribute){for(let Ht=0;Ht<et.locationSize;Ht++)P(et.location+Ht,H.meshPerAttribute);L.isInstancedMesh!==!0&&X._maxInstanceCount===void 0&&(X._maxInstanceCount=H.meshPerAttribute*H.count)}else for(let Ht=0;Ht<et.locationSize;Ht++)S(et.location+Ht);s.bindBuffer(s.ARRAY_BUFFER,gt);for(let Ht=0;Ht<et.locationSize;Ht++)A(et.location+Ht,lt/et.locationSize,Pt,j,lt*Dt,lt/et.locationSize*Ht*Dt,Et)}}else if(K!==void 0){const j=K[tt];if(j!==void 0)switch(j.length){case 2:s.vertexAttrib2fv(et.location,j);break;case 3:s.vertexAttrib3fv(et.location,j);break;case 4:s.vertexAttrib4fv(et.location,j);break;default:s.vertexAttrib1fv(et.location,j)}}}}w()}function M(){k();for(const L in a){const I=a[L];for(const V in I){const X=I[V];for(const W in X)g(X[W].object),delete X[W];delete I[V]}delete a[L]}}function b(L){if(a[L.id]===void 0)return;const I=a[L.id];for(const V in I){const X=I[V];for(const W in X)g(X[W].object),delete X[W];delete I[V]}delete a[L.id]}function B(L){for(const I in a){const V=a[I];if(V[L.id]===void 0)continue;const X=V[L.id];for(const W in X)g(X[W].object),delete X[W];delete V[L.id]}}function k(){q(),h=!0,c!==l&&(c=l,p(c.object))}function q(){l.geometry=null,l.program=null,l.wireframe=!1}return{setup:u,reset:k,resetDefaultState:q,dispose:M,releaseStatesOfGeometry:b,releaseStatesOfProgram:B,initAttributes:v,enableAttribute:S,disableUnusedAttributes:w}}function yd(s,t,e,n){const i=n.isWebGL2;let r;function o(h){r=h}function a(h,u){s.drawArrays(r,h,u),e.update(u,r,1)}function l(h,u,d){if(d===0)return;let p,g;if(i)p=s,g="drawArraysInstanced";else if(p=t.get("ANGLE_instanced_arrays"),g="drawArraysInstancedANGLE",p===null){console.error("THREE.WebGLBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}p[g](r,h,u,d),e.update(u,r,d)}function c(h,u,d){if(d===0)return;const p=t.get("WEBGL_multi_draw");if(p===null)for(let g=0;g<d;g++)this.render(h[g],u[g]);else{p.multiDrawArraysWEBGL(r,h,0,u,0,d);let g=0;for(let _=0;_<d;_++)g+=u[_];e.update(g,r,1)}}this.setMode=o,this.render=a,this.renderInstances=l,this.renderMultiDraw=c}function Sd(s,t,e){let n;function i(){if(n!==void 0)return n;if(t.has("EXT_texture_filter_anisotropic")===!0){const A=t.get("EXT_texture_filter_anisotropic");n=s.getParameter(A.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else n=0;return n}function r(A){if(A==="highp"){if(s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.HIGH_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.HIGH_FLOAT).precision>0)return"highp";A="mediump"}return A==="mediump"&&s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.MEDIUM_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}const o=typeof WebGL2RenderingContext<"u"&&s.constructor.name==="WebGL2RenderingContext";let a=e.precision!==void 0?e.precision:"highp";const l=r(a);l!==a&&(console.warn("THREE.WebGLRenderer:",a,"not supported, using",l,"instead."),a=l);const c=o||t.has("WEBGL_draw_buffers"),h=e.logarithmicDepthBuffer===!0,u=s.getParameter(s.MAX_TEXTURE_IMAGE_UNITS),d=s.getParameter(s.MAX_VERTEX_TEXTURE_IMAGE_UNITS),p=s.getParameter(s.MAX_TEXTURE_SIZE),g=s.getParameter(s.MAX_CUBE_MAP_TEXTURE_SIZE),_=s.getParameter(s.MAX_VERTEX_ATTRIBS),m=s.getParameter(s.MAX_VERTEX_UNIFORM_VECTORS),f=s.getParameter(s.MAX_VARYING_VECTORS),E=s.getParameter(s.MAX_FRAGMENT_UNIFORM_VECTORS),v=d>0,S=o||t.has("OES_texture_float"),P=v&&S,w=o?s.getParameter(s.MAX_SAMPLES):0;return{isWebGL2:o,drawBuffers:c,getMaxAnisotropy:i,getMaxPrecision:r,precision:a,logarithmicDepthBuffer:h,maxTextures:u,maxVertexTextures:d,maxTextureSize:p,maxCubemapSize:g,maxAttributes:_,maxVertexUniforms:m,maxVaryings:f,maxFragmentUniforms:E,vertexTextures:v,floatFragmentTextures:S,floatVertexTextures:P,maxSamples:w}}function Td(s){const t=this;let e=null,n=0,i=!1,r=!1;const o=new Ln,a=new Gt,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(u,d){const p=u.length!==0||d||n!==0||i;return i=d,n=u.length,p},this.beginShadows=function(){r=!0,h(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(u,d){e=h(u,d,0)},this.setState=function(u,d,p){const g=u.clippingPlanes,_=u.clipIntersection,m=u.clipShadows,f=s.get(u);if(!i||g===null||g.length===0||r&&!m)r?h(null):c();else{const E=r?0:n,v=E*4;let S=f.clippingState||null;l.value=S,S=h(g,d,v,p);for(let P=0;P!==v;++P)S[P]=e[P];f.clippingState=S,this.numIntersection=_?this.numPlanes:0,this.numPlanes+=E}};function c(){l.value!==e&&(l.value=e,l.needsUpdate=n>0),t.numPlanes=n,t.numIntersection=0}function h(u,d,p,g){const _=u!==null?u.length:0;let m=null;if(_!==0){if(m=l.value,g!==!0||m===null){const f=p+_*4,E=d.matrixWorldInverse;a.getNormalMatrix(E),(m===null||m.length<f)&&(m=new Float32Array(f));for(let v=0,S=p;v!==_;++v,S+=4)o.copy(u[v]).applyMatrix4(E,a),o.normal.toArray(m,S),m[S+3]=o.constant}l.value=m,l.needsUpdate=!0}return t.numPlanes=_,t.numIntersection=0,m}}function Ed(s){let t=new WeakMap;function e(o,a){return a===lr?o.mapping=li:a===cr&&(o.mapping=ci),o}function n(o){if(o&&o.isTexture){const a=o.mapping;if(a===lr||a===cr)if(t.has(o)){const l=t.get(o).texture;return e(l,o.mapping)}else{const l=o.image;if(l&&l.height>0){const c=new Fc(l.height/2);return c.fromEquirectangularTexture(s,o),t.set(o,c),o.addEventListener("dispose",i),e(c.texture,o.mapping)}else return null}}return o}function i(o){const a=o.target;a.removeEventListener("dispose",i);const l=t.get(a);l!==void 0&&(t.delete(a),l.dispose())}function r(){t=new WeakMap}return{get:n,dispose:r}}class ko extends Oo{constructor(t=-1,e=1,n=1,i=-1,r=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=n,this.bottom=i,this.near=r,this.far=o,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,n,i,r,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=i,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,i=(this.top+this.bottom)/2;let r=n-t,o=n+t,a=i+e,l=i-e;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,o=r+c*this.view.width,a-=h*this.view.offsetY,l=a-h*this.view.height}this.projectionMatrix.makeOrthographic(r,o,a,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}}const ii=4,Ca=[.125,.215,.35,.446,.526,.582],Un=20,$s=new ko,Pa=new Nt;let Zs=null,Js=0,Qs=0;const Dn=(1+Math.sqrt(5))/2,ei=1/Dn,La=[new R(1,1,1),new R(-1,1,1),new R(1,1,-1),new R(-1,1,-1),new R(0,Dn,ei),new R(0,Dn,-ei),new R(ei,0,Dn),new R(-ei,0,Dn),new R(Dn,ei,0),new R(-Dn,ei,0)];class Da{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(t,e=0,n=.1,i=100){Zs=this._renderer.getRenderTarget(),Js=this._renderer.getActiveCubeFace(),Qs=this._renderer.getActiveMipmapLevel(),this._setSize(256);const r=this._allocateTargets();return r.depthBuffer=!0,this._sceneToCubeUV(t,n,i,r),e>0&&this._blur(r,0,0,e),this._applyPMREM(r),this._cleanup(r),r}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Na(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Ua(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodPlanes.length;t++)this._lodPlanes[t].dispose()}_cleanup(t){this._renderer.setRenderTarget(Zs,Js,Qs),t.scissorTest=!1,ns(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===li||t.mapping===ci?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),Zs=this._renderer.getRenderTarget(),Js=this._renderer.getActiveCubeFace(),Qs=this._renderer.getActiveMipmapLevel();const n=e||this._allocateTargets();return this._textureToCubeUV(t,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,n={magFilter:He,minFilter:He,generateMipmaps:!1,type:dn,format:$e,colorSpace:fn,depthBuffer:!1},i=Ia(t,e,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Ia(t,e,n);const{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=bd(r)),this._blurMaterial=wd(r,t,e)}return i}_compileMaterial(t){const e=new ot(this._lodPlanes[0],t);this._renderer.compile(e,$s)}_sceneToCubeUV(t,e,n,i){const a=new Le(90,1,e,n),l=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],h=this._renderer,u=h.autoClear,d=h.toneMapping;h.getClearColor(Pa),h.toneMapping=Sn,h.autoClear=!1;const p=new me({name:"PMREM.Background",side:De,depthWrite:!1,depthTest:!1}),g=new ot(new $t,p);let _=!1;const m=t.background;m?m.isColor&&(p.color.copy(m),t.background=null,_=!0):(p.color.copy(Pa),_=!0);for(let f=0;f<6;f++){const E=f%3;E===0?(a.up.set(0,l[f],0),a.lookAt(c[f],0,0)):E===1?(a.up.set(0,0,l[f]),a.lookAt(0,c[f],0)):(a.up.set(0,l[f],0),a.lookAt(0,0,c[f]));const v=this._cubeSize;ns(i,E*v,f>2?v:0,v,v),h.setRenderTarget(i),_&&h.render(g,a),h.render(t,a)}g.geometry.dispose(),g.material.dispose(),h.toneMapping=d,h.autoClear=u,t.background=m}_textureToCubeUV(t,e){const n=this._renderer,i=t.mapping===li||t.mapping===ci;i?(this._cubemapMaterial===null&&(this._cubemapMaterial=Na()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Ua());const r=i?this._cubemapMaterial:this._equirectMaterial,o=new ot(this._lodPlanes[0],r),a=r.uniforms;a.envMap.value=t;const l=this._cubeSize;ns(e,0,0,3*l,2*l),n.setRenderTarget(e),n.render(o,$s)}_applyPMREM(t){const e=this._renderer,n=e.autoClear;e.autoClear=!1;for(let i=1;i<this._lodPlanes.length;i++){const r=Math.sqrt(this._sigmas[i]*this._sigmas[i]-this._sigmas[i-1]*this._sigmas[i-1]),o=La[(i-1)%La.length];this._blur(t,i-1,i,r,o)}e.autoClear=n}_blur(t,e,n,i,r){const o=this._pingPongRenderTarget;this._halfBlur(t,o,e,n,i,"latitudinal",r),this._halfBlur(o,t,n,n,i,"longitudinal",r)}_halfBlur(t,e,n,i,r,o,a){const l=this._renderer,c=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const h=3,u=new ot(this._lodPlanes[i],c),d=c.uniforms,p=this._sizeLods[n]-1,g=isFinite(r)?Math.PI/(2*p):2*Math.PI/(2*Un-1),_=r/g,m=isFinite(r)?1+Math.floor(h*_):Un;m>Un&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${Un}`);const f=[];let E=0;for(let A=0;A<Un;++A){const G=A/_,M=Math.exp(-G*G/2);f.push(M),A===0?E+=M:A<m&&(E+=2*M)}for(let A=0;A<f.length;A++)f[A]=f[A]/E;d.envMap.value=t.texture,d.samples.value=m,d.weights.value=f,d.latitudinal.value=o==="latitudinal",a&&(d.poleAxis.value=a);const{_lodMax:v}=this;d.dTheta.value=g,d.mipInt.value=v-n;const S=this._sizeLods[i],P=3*S*(i>v-ii?i-v+ii:0),w=4*(this._cubeSize-S);ns(e,P,w,3*S,2*S),l.setRenderTarget(e),l.render(u,$s)}}function bd(s){const t=[],e=[],n=[];let i=s;const r=s-ii+1+Ca.length;for(let o=0;o<r;o++){const a=Math.pow(2,i);e.push(a);let l=1/a;o>s-ii?l=Ca[o-s+ii-1]:o===0&&(l=0),n.push(l);const c=1/(a-2),h=-c,u=1+c,d=[h,h,u,h,u,u,h,h,u,u,h,u],p=6,g=6,_=3,m=2,f=1,E=new Float32Array(_*g*p),v=new Float32Array(m*g*p),S=new Float32Array(f*g*p);for(let w=0;w<p;w++){const A=w%3*2/3-1,G=w>2?0:-1,M=[A,G,0,A+2/3,G,0,A+2/3,G+1,0,A,G,0,A+2/3,G+1,0,A,G+1,0];E.set(M,_*g*w),v.set(d,m*g*w);const b=[w,w,w,w,w,w];S.set(b,f*g*w)}const P=new Se;P.setAttribute("position",new Je(E,_)),P.setAttribute("uv",new Je(v,m)),P.setAttribute("faceIndex",new Je(S,f)),t.push(P),i>ii&&i--}return{lodPlanes:t,sizeLods:e,sigmas:n}}function Ia(s,t,e){const n=new Ze(s,t,e);return n.texture.mapping=vs,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function ns(s,t,e,n,i){s.viewport.set(t,e,n,i),s.scissor.set(t,e,n,i)}function wd(s,t,e){const n=new Float32Array(Un),i=new R(0,1,0);return new ke({name:"SphericalGaussianBlur",defines:{n:Un,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${s}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:i}},vertexShader:Tr(),fragmentShader:`

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
		`,blending:un,depthTest:!1,depthWrite:!1})}function Ua(){return new ke({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Tr(),fragmentShader:`

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
		`,blending:un,depthTest:!1,depthWrite:!1})}function Na(){return new ke({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Tr(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:un,depthTest:!1,depthWrite:!1})}function Tr(){return`

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
	`}function Ad(s){let t=new WeakMap,e=null;function n(a){if(a&&a.isTexture){const l=a.mapping,c=l===lr||l===cr,h=l===li||l===ci;if(c||h)if(a.isRenderTargetTexture&&a.needsPMREMUpdate===!0){a.needsPMREMUpdate=!1;let u=t.get(a);return e===null&&(e=new Da(s)),u=c?e.fromEquirectangular(a,u):e.fromCubemap(a,u),t.set(a,u),u.texture}else{if(t.has(a))return t.get(a).texture;{const u=a.image;if(c&&u&&u.height>0||h&&u&&i(u)){e===null&&(e=new Da(s));const d=c?e.fromEquirectangular(a):e.fromCubemap(a);return t.set(a,d),a.addEventListener("dispose",r),d.texture}else return null}}}return a}function i(a){let l=0;const c=6;for(let h=0;h<c;h++)a[h]!==void 0&&l++;return l===c}function r(a){const l=a.target;l.removeEventListener("dispose",r);const c=t.get(l);c!==void 0&&(t.delete(l),c.dispose())}function o(){t=new WeakMap,e!==null&&(e.dispose(),e=null)}return{get:n,dispose:o}}function Rd(s){const t={};function e(n){if(t[n]!==void 0)return t[n];let i;switch(n){case"WEBGL_depth_texture":i=s.getExtension("WEBGL_depth_texture")||s.getExtension("MOZ_WEBGL_depth_texture")||s.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":i=s.getExtension("EXT_texture_filter_anisotropic")||s.getExtension("MOZ_EXT_texture_filter_anisotropic")||s.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":i=s.getExtension("WEBGL_compressed_texture_s3tc")||s.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||s.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":i=s.getExtension("WEBGL_compressed_texture_pvrtc")||s.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:i=s.getExtension(n)}return t[n]=i,i}return{has:function(n){return e(n)!==null},init:function(n){n.isWebGL2?(e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance")):(e("WEBGL_depth_texture"),e("OES_texture_float"),e("OES_texture_half_float"),e("OES_texture_half_float_linear"),e("OES_standard_derivatives"),e("OES_element_index_uint"),e("OES_vertex_array_object"),e("ANGLE_instanced_arrays")),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture")},get:function(n){const i=e(n);return i===null&&console.warn("THREE.WebGLRenderer: "+n+" extension not supported."),i}}}function Cd(s,t,e,n){const i={},r=new WeakMap;function o(u){const d=u.target;d.index!==null&&t.remove(d.index);for(const g in d.attributes)t.remove(d.attributes[g]);for(const g in d.morphAttributes){const _=d.morphAttributes[g];for(let m=0,f=_.length;m<f;m++)t.remove(_[m])}d.removeEventListener("dispose",o),delete i[d.id];const p=r.get(d);p&&(t.remove(p),r.delete(d)),n.releaseStatesOfGeometry(d),d.isInstancedBufferGeometry===!0&&delete d._maxInstanceCount,e.memory.geometries--}function a(u,d){return i[d.id]===!0||(d.addEventListener("dispose",o),i[d.id]=!0,e.memory.geometries++),d}function l(u){const d=u.attributes;for(const g in d)t.update(d[g],s.ARRAY_BUFFER);const p=u.morphAttributes;for(const g in p){const _=p[g];for(let m=0,f=_.length;m<f;m++)t.update(_[m],s.ARRAY_BUFFER)}}function c(u){const d=[],p=u.index,g=u.attributes.position;let _=0;if(p!==null){const E=p.array;_=p.version;for(let v=0,S=E.length;v<S;v+=3){const P=E[v+0],w=E[v+1],A=E[v+2];d.push(P,w,w,A,A,P)}}else if(g!==void 0){const E=g.array;_=g.version;for(let v=0,S=E.length/3-1;v<S;v+=3){const P=v+0,w=v+1,A=v+2;d.push(P,w,w,A,A,P)}}else return;const m=new(Co(d)?No:Uo)(d,1);m.version=_;const f=r.get(u);f&&t.remove(f),r.set(u,m)}function h(u){const d=r.get(u);if(d){const p=u.index;p!==null&&d.version<p.version&&c(u)}else c(u);return r.get(u)}return{get:a,update:l,getWireframeAttribute:h}}function Pd(s,t,e,n){const i=n.isWebGL2;let r;function o(p){r=p}let a,l;function c(p){a=p.type,l=p.bytesPerElement}function h(p,g){s.drawElements(r,g,a,p*l),e.update(g,r,1)}function u(p,g,_){if(_===0)return;let m,f;if(i)m=s,f="drawElementsInstanced";else if(m=t.get("ANGLE_instanced_arrays"),f="drawElementsInstancedANGLE",m===null){console.error("THREE.WebGLIndexedBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}m[f](r,g,a,p*l,_),e.update(g,r,_)}function d(p,g,_){if(_===0)return;const m=t.get("WEBGL_multi_draw");if(m===null)for(let f=0;f<_;f++)this.render(p[f]/l,g[f]);else{m.multiDrawElementsWEBGL(r,g,0,a,p,0,_);let f=0;for(let E=0;E<_;E++)f+=g[E];e.update(f,r,1)}}this.setMode=o,this.setIndex=c,this.render=h,this.renderInstances=u,this.renderMultiDraw=d}function Ld(s){const t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,o,a){switch(e.calls++,o){case s.TRIANGLES:e.triangles+=a*(r/3);break;case s.LINES:e.lines+=a*(r/2);break;case s.LINE_STRIP:e.lines+=a*(r-1);break;case s.LINE_LOOP:e.lines+=a*r;break;case s.POINTS:e.points+=a*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function i(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:i,update:n}}function Dd(s,t){return s[0]-t[0]}function Id(s,t){return Math.abs(t[1])-Math.abs(s[1])}function Ud(s,t,e){const n={},i=new Float32Array(8),r=new WeakMap,o=new Qt,a=[];for(let c=0;c<8;c++)a[c]=[c,0];function l(c,h,u){const d=c.morphTargetInfluences;if(t.isWebGL2===!0){const g=h.morphAttributes.position||h.morphAttributes.normal||h.morphAttributes.color,_=g!==void 0?g.length:0;let m=r.get(h);if(m===void 0||m.count!==_){let I=function(){q.dispose(),r.delete(h),h.removeEventListener("dispose",I)};var p=I;m!==void 0&&m.texture.dispose();const v=h.morphAttributes.position!==void 0,S=h.morphAttributes.normal!==void 0,P=h.morphAttributes.color!==void 0,w=h.morphAttributes.position||[],A=h.morphAttributes.normal||[],G=h.morphAttributes.color||[];let M=0;v===!0&&(M=1),S===!0&&(M=2),P===!0&&(M=3);let b=h.attributes.position.count*M,B=1;b>t.maxTextureSize&&(B=Math.ceil(b/t.maxTextureSize),b=t.maxTextureSize);const k=new Float32Array(b*B*4*_),q=new Do(k,b,B,_);q.type=yn,q.needsUpdate=!0;const L=M*4;for(let V=0;V<_;V++){const X=w[V],W=A[V],Y=G[V],K=b*B*4*V;for(let tt=0;tt<X.count;tt++){const et=tt*L;v===!0&&(o.fromBufferAttribute(X,tt),k[K+et+0]=o.x,k[K+et+1]=o.y,k[K+et+2]=o.z,k[K+et+3]=0),S===!0&&(o.fromBufferAttribute(W,tt),k[K+et+4]=o.x,k[K+et+5]=o.y,k[K+et+6]=o.z,k[K+et+7]=0),P===!0&&(o.fromBufferAttribute(Y,tt),k[K+et+8]=o.x,k[K+et+9]=o.y,k[K+et+10]=o.z,k[K+et+11]=Y.itemSize===4?o.w:1)}}m={count:_,texture:q,size:new ht(b,B)},r.set(h,m),h.addEventListener("dispose",I)}let f=0;for(let v=0;v<d.length;v++)f+=d[v];const E=h.morphTargetsRelative?1:1-f;u.getUniforms().setValue(s,"morphTargetBaseInfluence",E),u.getUniforms().setValue(s,"morphTargetInfluences",d),u.getUniforms().setValue(s,"morphTargetsTexture",m.texture,e),u.getUniforms().setValue(s,"morphTargetsTextureSize",m.size)}else{const g=d===void 0?0:d.length;let _=n[h.id];if(_===void 0||_.length!==g){_=[];for(let S=0;S<g;S++)_[S]=[S,0];n[h.id]=_}for(let S=0;S<g;S++){const P=_[S];P[0]=S,P[1]=d[S]}_.sort(Id);for(let S=0;S<8;S++)S<g&&_[S][1]?(a[S][0]=_[S][0],a[S][1]=_[S][1]):(a[S][0]=Number.MAX_SAFE_INTEGER,a[S][1]=0);a.sort(Dd);const m=h.morphAttributes.position,f=h.morphAttributes.normal;let E=0;for(let S=0;S<8;S++){const P=a[S],w=P[0],A=P[1];w!==Number.MAX_SAFE_INTEGER&&A?(m&&h.getAttribute("morphTarget"+S)!==m[w]&&h.setAttribute("morphTarget"+S,m[w]),f&&h.getAttribute("morphNormal"+S)!==f[w]&&h.setAttribute("morphNormal"+S,f[w]),i[S]=A,E+=A):(m&&h.hasAttribute("morphTarget"+S)===!0&&h.deleteAttribute("morphTarget"+S),f&&h.hasAttribute("morphNormal"+S)===!0&&h.deleteAttribute("morphNormal"+S),i[S]=0)}const v=h.morphTargetsRelative?1:1-E;u.getUniforms().setValue(s,"morphTargetBaseInfluence",v),u.getUniforms().setValue(s,"morphTargetInfluences",i)}}return{update:l}}function Nd(s,t,e,n){let i=new WeakMap;function r(l){const c=n.render.frame,h=l.geometry,u=t.get(l,h);if(i.get(u)!==c&&(t.update(u),i.set(u,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",a)===!1&&l.addEventListener("dispose",a),i.get(l)!==c&&(e.update(l.instanceMatrix,s.ARRAY_BUFFER),l.instanceColor!==null&&e.update(l.instanceColor,s.ARRAY_BUFFER),i.set(l,c))),l.isSkinnedMesh){const d=l.skeleton;i.get(d)!==c&&(d.update(),i.set(d,c))}return u}function o(){i=new WeakMap}function a(l){const c=l.target;c.removeEventListener("dispose",a),e.remove(c.instanceMatrix),c.instanceColor!==null&&e.remove(c.instanceColor)}return{update:r,dispose:o}}class Go extends Ie{constructor(t,e,n,i,r,o,a,l,c,h){if(h=h!==void 0?h:On,h!==On&&h!==hi)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&h===On&&(n=Mn),n===void 0&&h===hi&&(n=Fn),super(null,i,r,o,a,l,h,n,c),this.isDepthTexture=!0,this.image={width:t,height:e},this.magFilter=a!==void 0?a:Ce,this.minFilter=l!==void 0?l:Ce,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.compareFunction=t.compareFunction,this}toJSON(t){const e=super.toJSON(t);return this.compareFunction!==null&&(e.compareFunction=this.compareFunction),e}}const Vo=new Ie,Ho=new Go(1,1);Ho.compareFunction=Ro;const Wo=new Do,Xo=new Mc,qo=new Bo,Fa=[],Oa=[],Ba=new Float32Array(16),za=new Float32Array(9),ka=new Float32Array(4);function gi(s,t,e){const n=s[0];if(n<=0||n>0)return s;const i=t*e;let r=Fa[i];if(r===void 0&&(r=new Float32Array(i),Fa[i]=r),t!==0){n.toArray(r,0);for(let o=1,a=0;o!==t;++o)a+=e,s[o].toArray(r,a)}return r}function le(s,t){if(s.length!==t.length)return!1;for(let e=0,n=s.length;e<n;e++)if(s[e]!==t[e])return!1;return!0}function ce(s,t){for(let e=0,n=t.length;e<n;e++)s[e]=t[e]}function Ss(s,t){let e=Oa[t];e===void 0&&(e=new Int32Array(t),Oa[t]=e);for(let n=0;n!==t;++n)e[n]=s.allocateTextureUnit();return e}function Fd(s,t){const e=this.cache;e[0]!==t&&(s.uniform1f(this.addr,t),e[0]=t)}function Od(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(s.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(le(e,t))return;s.uniform2fv(this.addr,t),ce(e,t)}}function Bd(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(s.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(s.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(le(e,t))return;s.uniform3fv(this.addr,t),ce(e,t)}}function zd(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(s.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(le(e,t))return;s.uniform4fv(this.addr,t),ce(e,t)}}function kd(s,t){const e=this.cache,n=t.elements;if(n===void 0){if(le(e,t))return;s.uniformMatrix2fv(this.addr,!1,t),ce(e,t)}else{if(le(e,n))return;ka.set(n),s.uniformMatrix2fv(this.addr,!1,ka),ce(e,n)}}function Gd(s,t){const e=this.cache,n=t.elements;if(n===void 0){if(le(e,t))return;s.uniformMatrix3fv(this.addr,!1,t),ce(e,t)}else{if(le(e,n))return;za.set(n),s.uniformMatrix3fv(this.addr,!1,za),ce(e,n)}}function Vd(s,t){const e=this.cache,n=t.elements;if(n===void 0){if(le(e,t))return;s.uniformMatrix4fv(this.addr,!1,t),ce(e,t)}else{if(le(e,n))return;Ba.set(n),s.uniformMatrix4fv(this.addr,!1,Ba),ce(e,n)}}function Hd(s,t){const e=this.cache;e[0]!==t&&(s.uniform1i(this.addr,t),e[0]=t)}function Wd(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(s.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(le(e,t))return;s.uniform2iv(this.addr,t),ce(e,t)}}function Xd(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(s.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(le(e,t))return;s.uniform3iv(this.addr,t),ce(e,t)}}function qd(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(s.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(le(e,t))return;s.uniform4iv(this.addr,t),ce(e,t)}}function Yd(s,t){const e=this.cache;e[0]!==t&&(s.uniform1ui(this.addr,t),e[0]=t)}function Kd(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(s.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(le(e,t))return;s.uniform2uiv(this.addr,t),ce(e,t)}}function jd(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(s.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(le(e,t))return;s.uniform3uiv(this.addr,t),ce(e,t)}}function $d(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(s.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(le(e,t))return;s.uniform4uiv(this.addr,t),ce(e,t)}}function Zd(s,t,e){const n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i);const r=this.type===s.SAMPLER_2D_SHADOW?Ho:Vo;e.setTexture2D(t||r,i)}function Jd(s,t,e){const n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),e.setTexture3D(t||Xo,i)}function Qd(s,t,e){const n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),e.setTextureCube(t||qo,i)}function tf(s,t,e){const n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),e.setTexture2DArray(t||Wo,i)}function ef(s){switch(s){case 5126:return Fd;case 35664:return Od;case 35665:return Bd;case 35666:return zd;case 35674:return kd;case 35675:return Gd;case 35676:return Vd;case 5124:case 35670:return Hd;case 35667:case 35671:return Wd;case 35668:case 35672:return Xd;case 35669:case 35673:return qd;case 5125:return Yd;case 36294:return Kd;case 36295:return jd;case 36296:return $d;case 35678:case 36198:case 36298:case 36306:case 35682:return Zd;case 35679:case 36299:case 36307:return Jd;case 35680:case 36300:case 36308:case 36293:return Qd;case 36289:case 36303:case 36311:case 36292:return tf}}function nf(s,t){s.uniform1fv(this.addr,t)}function sf(s,t){const e=gi(t,this.size,2);s.uniform2fv(this.addr,e)}function rf(s,t){const e=gi(t,this.size,3);s.uniform3fv(this.addr,e)}function af(s,t){const e=gi(t,this.size,4);s.uniform4fv(this.addr,e)}function of(s,t){const e=gi(t,this.size,4);s.uniformMatrix2fv(this.addr,!1,e)}function lf(s,t){const e=gi(t,this.size,9);s.uniformMatrix3fv(this.addr,!1,e)}function cf(s,t){const e=gi(t,this.size,16);s.uniformMatrix4fv(this.addr,!1,e)}function hf(s,t){s.uniform1iv(this.addr,t)}function uf(s,t){s.uniform2iv(this.addr,t)}function df(s,t){s.uniform3iv(this.addr,t)}function ff(s,t){s.uniform4iv(this.addr,t)}function pf(s,t){s.uniform1uiv(this.addr,t)}function mf(s,t){s.uniform2uiv(this.addr,t)}function gf(s,t){s.uniform3uiv(this.addr,t)}function _f(s,t){s.uniform4uiv(this.addr,t)}function vf(s,t,e){const n=this.cache,i=t.length,r=Ss(e,i);le(n,r)||(s.uniform1iv(this.addr,r),ce(n,r));for(let o=0;o!==i;++o)e.setTexture2D(t[o]||Vo,r[o])}function xf(s,t,e){const n=this.cache,i=t.length,r=Ss(e,i);le(n,r)||(s.uniform1iv(this.addr,r),ce(n,r));for(let o=0;o!==i;++o)e.setTexture3D(t[o]||Xo,r[o])}function Mf(s,t,e){const n=this.cache,i=t.length,r=Ss(e,i);le(n,r)||(s.uniform1iv(this.addr,r),ce(n,r));for(let o=0;o!==i;++o)e.setTextureCube(t[o]||qo,r[o])}function yf(s,t,e){const n=this.cache,i=t.length,r=Ss(e,i);le(n,r)||(s.uniform1iv(this.addr,r),ce(n,r));for(let o=0;o!==i;++o)e.setTexture2DArray(t[o]||Wo,r[o])}function Sf(s){switch(s){case 5126:return nf;case 35664:return sf;case 35665:return rf;case 35666:return af;case 35674:return of;case 35675:return lf;case 35676:return cf;case 5124:case 35670:return hf;case 35667:case 35671:return uf;case 35668:case 35672:return df;case 35669:case 35673:return ff;case 5125:return pf;case 36294:return mf;case 36295:return gf;case 36296:return _f;case 35678:case 36198:case 36298:case 36306:case 35682:return vf;case 35679:case 36299:case 36307:return xf;case 35680:case 36300:case 36308:case 36293:return Mf;case 36289:case 36303:case 36311:case 36292:return yf}}class Tf{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.setValue=ef(e.type)}}class Ef{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=Sf(e.type)}}class bf{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,n){const i=this.seq;for(let r=0,o=i.length;r!==o;++r){const a=i[r];a.setValue(t,e[a.id],n)}}}const tr=/(\w+)(\])?(\[|\.)?/g;function Ga(s,t){s.seq.push(t),s.map[t.id]=t}function wf(s,t,e){const n=s.name,i=n.length;for(tr.lastIndex=0;;){const r=tr.exec(n),o=tr.lastIndex;let a=r[1];const l=r[2]==="]",c=r[3];if(l&&(a=a|0),c===void 0||c==="["&&o+2===i){Ga(e,c===void 0?new Tf(a,s,t):new Ef(a,s,t));break}else{let u=e.map[a];u===void 0&&(u=new bf(a),Ga(e,u)),e=u}}}class os{constructor(t,e){this.seq=[],this.map={};const n=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let i=0;i<n;++i){const r=t.getActiveUniform(e,i),o=t.getUniformLocation(e,r.name);wf(r,o,this)}}setValue(t,e,n,i){const r=this.map[e];r!==void 0&&r.setValue(t,n,i)}setOptional(t,e,n){const i=e[n];i!==void 0&&this.setValue(t,n,i)}static upload(t,e,n,i){for(let r=0,o=e.length;r!==o;++r){const a=e[r],l=n[a.id];l.needsUpdate!==!1&&a.setValue(t,l.value,i)}}static seqWithValue(t,e){const n=[];for(let i=0,r=t.length;i!==r;++i){const o=t[i];o.id in e&&n.push(o)}return n}}function Va(s,t,e){const n=s.createShader(t);return s.shaderSource(n,e),s.compileShader(n),n}const Af=37297;let Rf=0;function Cf(s,t){const e=s.split(`
`),n=[],i=Math.max(t-6,0),r=Math.min(t+6,e.length);for(let o=i;o<r;o++){const a=o+1;n.push(`${a===t?">":" "} ${a}: ${e[o]}`)}return n.join(`
`)}function Pf(s){const t=qt.getPrimaries(qt.workingColorSpace),e=qt.getPrimaries(s);let n;switch(t===e?n="":t===us&&e===hs?n="LinearDisplayP3ToLinearSRGB":t===hs&&e===us&&(n="LinearSRGBToLinearDisplayP3"),s){case fn:case xs:return[n,"LinearTransferOETF"];case Jt:case xr:return[n,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",s),[n,"LinearTransferOETF"]}}function Ha(s,t,e){const n=s.getShaderParameter(t,s.COMPILE_STATUS),i=s.getShaderInfoLog(t).trim();if(n&&i==="")return"";const r=/ERROR: 0:(\d+)/.exec(i);if(r){const o=parseInt(r[1]);return e.toUpperCase()+`

`+i+`

`+Cf(s.getShaderSource(t),o)}else return i}function Lf(s,t){const e=Pf(t);return`vec4 ${s}( vec4 value ) { return ${e[0]}( ${e[1]}( value ) ); }`}function Df(s,t){let e;switch(t){case Ll:e="Linear";break;case Dl:e="Reinhard";break;case Il:e="OptimizedCineon";break;case _o:e="ACESFilmic";break;case Nl:e="AgX";break;case Ul:e="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",t),e="Linear"}return"vec3 "+s+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}function If(s){return[s.extensionDerivatives||s.envMapCubeUVHeight||s.bumpMap||s.normalMapTangentSpace||s.clearcoatNormalMap||s.flatShading||s.shaderID==="physical"?"#extension GL_OES_standard_derivatives : enable":"",(s.extensionFragDepth||s.logarithmicDepthBuffer)&&s.rendererExtensionFragDepth?"#extension GL_EXT_frag_depth : enable":"",s.extensionDrawBuffers&&s.rendererExtensionDrawBuffers?"#extension GL_EXT_draw_buffers : require":"",(s.extensionShaderTextureLOD||s.envMap||s.transmission)&&s.rendererExtensionShaderTextureLod?"#extension GL_EXT_shader_texture_lod : enable":""].filter(si).join(`
`)}function Uf(s){return[s.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":""].filter(si).join(`
`)}function Nf(s){const t=[];for(const e in s){const n=s[e];n!==!1&&t.push("#define "+e+" "+n)}return t.join(`
`)}function Ff(s,t){const e={},n=s.getProgramParameter(t,s.ACTIVE_ATTRIBUTES);for(let i=0;i<n;i++){const r=s.getActiveAttrib(t,i),o=r.name;let a=1;r.type===s.FLOAT_MAT2&&(a=2),r.type===s.FLOAT_MAT3&&(a=3),r.type===s.FLOAT_MAT4&&(a=4),e[o]={type:r.type,location:s.getAttribLocation(t,o),locationSize:a}}return e}function si(s){return s!==""}function Wa(s,t){const e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return s.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function Xa(s,t){return s.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}const Of=/^[ \t]*#include +<([\w\d./]+)>/gm;function fr(s){return s.replace(Of,zf)}const Bf=new Map([["encodings_fragment","colorspace_fragment"],["encodings_pars_fragment","colorspace_pars_fragment"],["output_fragment","opaque_fragment"]]);function zf(s,t){let e=Ut[t];if(e===void 0){const n=Bf.get(t);if(n!==void 0)e=Ut[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,n);else throw new Error("Can not resolve #include <"+t+">")}return fr(e)}const kf=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function qa(s){return s.replace(kf,Gf)}function Gf(s,t,e,n){let i="";for(let r=parseInt(t);r<parseInt(e);r++)i+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return i}function Ya(s){let t="precision "+s.precision+` float;
precision `+s.precision+" int;";return s.precision==="highp"?t+=`
#define HIGH_PRECISION`:s.precision==="mediump"?t+=`
#define MEDIUM_PRECISION`:s.precision==="lowp"&&(t+=`
#define LOW_PRECISION`),t}function Vf(s){let t="SHADOWMAP_TYPE_BASIC";return s.shadowMapType===po?t="SHADOWMAP_TYPE_PCF":s.shadowMapType===mo?t="SHADOWMAP_TYPE_PCF_SOFT":s.shadowMapType===ln&&(t="SHADOWMAP_TYPE_VSM"),t}function Hf(s){let t="ENVMAP_TYPE_CUBE";if(s.envMap)switch(s.envMapMode){case li:case ci:t="ENVMAP_TYPE_CUBE";break;case vs:t="ENVMAP_TYPE_CUBE_UV";break}return t}function Wf(s){let t="ENVMAP_MODE_REFLECTION";if(s.envMap)switch(s.envMapMode){case ci:t="ENVMAP_MODE_REFRACTION";break}return t}function Xf(s){let t="ENVMAP_BLENDING_NONE";if(s.envMap)switch(s.combine){case go:t="ENVMAP_BLENDING_MULTIPLY";break;case Cl:t="ENVMAP_BLENDING_MIX";break;case Pl:t="ENVMAP_BLENDING_ADD";break}return t}function qf(s){const t=s.envMapCubeUVHeight;if(t===null)return null;const e=Math.log2(t)-2,n=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),7*16)),texelHeight:n,maxMip:e}}function Yf(s,t,e,n){const i=s.getContext(),r=e.defines;let o=e.vertexShader,a=e.fragmentShader;const l=Vf(e),c=Hf(e),h=Wf(e),u=Xf(e),d=qf(e),p=e.isWebGL2?"":If(e),g=Uf(e),_=Nf(r),m=i.createProgram();let f,E,v=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(f=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,_].filter(si).join(`
`),f.length>0&&(f+=`
`),E=[p,"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,_].filter(si).join(`
`),E.length>0&&(E+=`
`)):(f=[Ya(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,_,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+h:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors&&e.isWebGL2?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0&&e.isWebGL2?"#define MORPHTARGETS_TEXTURE":"",e.morphTargetsCount>0&&e.isWebGL2?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0&&e.isWebGL2?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.useLegacyLights?"#define LEGACY_LIGHTS":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.logarithmicDepthBuffer&&e.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#if ( defined( USE_MORPHTARGETS ) && ! defined( MORPHTARGETS_TEXTURE ) )","	attribute vec3 morphTarget0;","	attribute vec3 morphTarget1;","	attribute vec3 morphTarget2;","	attribute vec3 morphTarget3;","	#ifdef USE_MORPHNORMALS","		attribute vec3 morphNormal0;","		attribute vec3 morphNormal1;","		attribute vec3 morphNormal2;","		attribute vec3 morphNormal3;","	#else","		attribute vec3 morphTarget4;","		attribute vec3 morphTarget5;","		attribute vec3 morphTarget6;","		attribute vec3 morphTarget7;","	#endif","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(si).join(`
`),E=[p,Ya(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,_,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+c:"",e.envMap?"#define "+h:"",e.envMap?"#define "+u:"",d?"#define CUBEUV_TEXEL_WIDTH "+d.texelWidth:"",d?"#define CUBEUV_TEXEL_HEIGHT "+d.texelHeight:"",d?"#define CUBEUV_MAX_MIP "+d.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.useLegacyLights?"#define LEGACY_LIGHTS":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.logarithmicDepthBuffer&&e.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==Sn?"#define TONE_MAPPING":"",e.toneMapping!==Sn?Ut.tonemapping_pars_fragment:"",e.toneMapping!==Sn?Df("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",Ut.colorspace_pars_fragment,Lf("linearToOutputTexel",e.outputColorSpace),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(si).join(`
`)),o=fr(o),o=Wa(o,e),o=Xa(o,e),a=fr(a),a=Wa(a,e),a=Xa(a,e),o=qa(o),a=qa(a),e.isWebGL2&&e.isRawShaderMaterial!==!0&&(v=`#version 300 es
`,f=[g,"precision mediump sampler2DArray;","#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+f,E=["precision mediump sampler2DArray;","#define varying in",e.glslVersion===ua?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===ua?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+E);const S=v+f+o,P=v+E+a,w=Va(i,i.VERTEX_SHADER,S),A=Va(i,i.FRAGMENT_SHADER,P);i.attachShader(m,w),i.attachShader(m,A),e.index0AttributeName!==void 0?i.bindAttribLocation(m,0,e.index0AttributeName):e.morphTargets===!0&&i.bindAttribLocation(m,0,"position"),i.linkProgram(m);function G(k){if(s.debug.checkShaderErrors){const q=i.getProgramInfoLog(m).trim(),L=i.getShaderInfoLog(w).trim(),I=i.getShaderInfoLog(A).trim();let V=!0,X=!0;if(i.getProgramParameter(m,i.LINK_STATUS)===!1)if(V=!1,typeof s.debug.onShaderError=="function")s.debug.onShaderError(i,m,w,A);else{const W=Ha(i,w,"vertex"),Y=Ha(i,A,"fragment");console.error("THREE.WebGLProgram: Shader Error "+i.getError()+" - VALIDATE_STATUS "+i.getProgramParameter(m,i.VALIDATE_STATUS)+`

Program Info Log: `+q+`
`+W+`
`+Y)}else q!==""?console.warn("THREE.WebGLProgram: Program Info Log:",q):(L===""||I==="")&&(X=!1);X&&(k.diagnostics={runnable:V,programLog:q,vertexShader:{log:L,prefix:f},fragmentShader:{log:I,prefix:E}})}i.deleteShader(w),i.deleteShader(A),M=new os(i,m),b=Ff(i,m)}let M;this.getUniforms=function(){return M===void 0&&G(this),M};let b;this.getAttributes=function(){return b===void 0&&G(this),b};let B=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return B===!1&&(B=i.getProgramParameter(m,Af)),B},this.destroy=function(){n.releaseStatesOfProgram(this),i.deleteProgram(m),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=Rf++,this.cacheKey=t,this.usedTimes=1,this.program=m,this.vertexShader=w,this.fragmentShader=A,this}let Kf=0;class jf{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){const e=t.vertexShader,n=t.fragmentShader,i=this._getShaderStage(e),r=this._getShaderStage(n),o=this._getShaderCacheForMaterial(t);return o.has(i)===!1&&(o.add(i),i.usedTimes++),o.has(r)===!1&&(o.add(r),r.usedTimes++),this}remove(t){const e=this.materialCache.get(t);for(const n of e)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){const e=this.materialCache;let n=e.get(t);return n===void 0&&(n=new Set,e.set(t,n)),n}_getShaderStage(t){const e=this.shaderCache;let n=e.get(t);return n===void 0&&(n=new $f(t),e.set(t,n)),n}}class $f{constructor(t){this.id=Kf++,this.code=t,this.usedTimes=0}}function Zf(s,t,e,n,i,r,o){const a=new yr,l=new jf,c=[],h=i.isWebGL2,u=i.logarithmicDepthBuffer,d=i.vertexTextures;let p=i.precision;const g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function _(M){return M===0?"uv":`uv${M}`}function m(M,b,B,k,q){const L=k.fog,I=q.geometry,V=M.isMeshStandardMaterial?k.environment:null,X=(M.isMeshStandardMaterial?e:t).get(M.envMap||V),W=X&&X.mapping===vs?X.image.height:null,Y=g[M.type];M.precision!==null&&(p=i.getMaxPrecision(M.precision),p!==M.precision&&console.warn("THREE.WebGLProgram.getParameters:",M.precision,"not supported, using",p,"instead."));const K=I.morphAttributes.position||I.morphAttributes.normal||I.morphAttributes.color,tt=K!==void 0?K.length:0;let et=0;I.morphAttributes.position!==void 0&&(et=1),I.morphAttributes.normal!==void 0&&(et=2),I.morphAttributes.color!==void 0&&(et=3);let H,j,lt,_t;if(Y){const Ee=tn[Y];H=Ee.vertexShader,j=Ee.fragmentShader}else H=M.vertexShader,j=M.fragmentShader,l.update(M),lt=l.getVertexShaderID(M),_t=l.getFragmentShaderID(M);const gt=s.getRenderTarget(),Pt=q.isInstancedMesh===!0,Dt=q.isBatchedMesh===!0,Et=!!M.map,Ht=!!M.matcap,U=!!X,Te=!!M.aoMap,xt=!!M.lightMap,Rt=!!M.bumpMap,ft=!!M.normalMap,te=!!M.displacementMap,Ft=!!M.emissiveMap,T=!!M.metalnessMap,x=!!M.roughnessMap,F=M.anisotropy>0,J=M.clearcoat>0,Z=M.iridescence>0,Q=M.sheen>0,pt=M.transmission>0,at=F&&!!M.anisotropyMap,ut=J&&!!M.clearcoatMap,Tt=J&&!!M.clearcoatNormalMap,Ot=J&&!!M.clearcoatRoughnessMap,$=Z&&!!M.iridescenceMap,Xt=Z&&!!M.iridescenceThicknessMap,Vt=Q&&!!M.sheenColorMap,At=Q&&!!M.sheenRoughnessMap,vt=!!M.specularMap,dt=!!M.specularColorMap,It=!!M.specularIntensityMap,Wt=pt&&!!M.transmissionMap,ne=pt&&!!M.thicknessMap,zt=!!M.gradientMap,nt=!!M.alphaMap,C=M.alphaTest>0,st=!!M.alphaHash,rt=!!M.extensions,bt=!!I.attributes.uv1,Mt=!!I.attributes.uv2,Yt=!!I.attributes.uv3;let Kt=Sn;return M.toneMapped&&(gt===null||gt.isXRRenderTarget===!0)&&(Kt=s.toneMapping),{isWebGL2:h,shaderID:Y,shaderType:M.type,shaderName:M.name,vertexShader:H,fragmentShader:j,defines:M.defines,customVertexShaderID:lt,customFragmentShaderID:_t,isRawShaderMaterial:M.isRawShaderMaterial===!0,glslVersion:M.glslVersion,precision:p,batching:Dt,instancing:Pt,instancingColor:Pt&&q.instanceColor!==null,supportsVertexTextures:d,outputColorSpace:gt===null?s.outputColorSpace:gt.isXRRenderTarget===!0?gt.texture.colorSpace:fn,map:Et,matcap:Ht,envMap:U,envMapMode:U&&X.mapping,envMapCubeUVHeight:W,aoMap:Te,lightMap:xt,bumpMap:Rt,normalMap:ft,displacementMap:d&&te,emissiveMap:Ft,normalMapObjectSpace:ft&&M.normalMapType===Yl,normalMapTangentSpace:ft&&M.normalMapType===Ao,metalnessMap:T,roughnessMap:x,anisotropy:F,anisotropyMap:at,clearcoat:J,clearcoatMap:ut,clearcoatNormalMap:Tt,clearcoatRoughnessMap:Ot,iridescence:Z,iridescenceMap:$,iridescenceThicknessMap:Xt,sheen:Q,sheenColorMap:Vt,sheenRoughnessMap:At,specularMap:vt,specularColorMap:dt,specularIntensityMap:It,transmission:pt,transmissionMap:Wt,thicknessMap:ne,gradientMap:zt,opaque:M.transparent===!1&&M.blending===ri,alphaMap:nt,alphaTest:C,alphaHash:st,combine:M.combine,mapUv:Et&&_(M.map.channel),aoMapUv:Te&&_(M.aoMap.channel),lightMapUv:xt&&_(M.lightMap.channel),bumpMapUv:Rt&&_(M.bumpMap.channel),normalMapUv:ft&&_(M.normalMap.channel),displacementMapUv:te&&_(M.displacementMap.channel),emissiveMapUv:Ft&&_(M.emissiveMap.channel),metalnessMapUv:T&&_(M.metalnessMap.channel),roughnessMapUv:x&&_(M.roughnessMap.channel),anisotropyMapUv:at&&_(M.anisotropyMap.channel),clearcoatMapUv:ut&&_(M.clearcoatMap.channel),clearcoatNormalMapUv:Tt&&_(M.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Ot&&_(M.clearcoatRoughnessMap.channel),iridescenceMapUv:$&&_(M.iridescenceMap.channel),iridescenceThicknessMapUv:Xt&&_(M.iridescenceThicknessMap.channel),sheenColorMapUv:Vt&&_(M.sheenColorMap.channel),sheenRoughnessMapUv:At&&_(M.sheenRoughnessMap.channel),specularMapUv:vt&&_(M.specularMap.channel),specularColorMapUv:dt&&_(M.specularColorMap.channel),specularIntensityMapUv:It&&_(M.specularIntensityMap.channel),transmissionMapUv:Wt&&_(M.transmissionMap.channel),thicknessMapUv:ne&&_(M.thicknessMap.channel),alphaMapUv:nt&&_(M.alphaMap.channel),vertexTangents:!!I.attributes.tangent&&(ft||F),vertexColors:M.vertexColors,vertexAlphas:M.vertexColors===!0&&!!I.attributes.color&&I.attributes.color.itemSize===4,vertexUv1s:bt,vertexUv2s:Mt,vertexUv3s:Yt,pointsUvs:q.isPoints===!0&&!!I.attributes.uv&&(Et||nt),fog:!!L,useFog:M.fog===!0,fogExp2:L&&L.isFogExp2,flatShading:M.flatShading===!0,sizeAttenuation:M.sizeAttenuation===!0,logarithmicDepthBuffer:u,skinning:q.isSkinnedMesh===!0,morphTargets:I.morphAttributes.position!==void 0,morphNormals:I.morphAttributes.normal!==void 0,morphColors:I.morphAttributes.color!==void 0,morphTargetsCount:tt,morphTextureStride:et,numDirLights:b.directional.length,numPointLights:b.point.length,numSpotLights:b.spot.length,numSpotLightMaps:b.spotLightMap.length,numRectAreaLights:b.rectArea.length,numHemiLights:b.hemi.length,numDirLightShadows:b.directionalShadowMap.length,numPointLightShadows:b.pointShadowMap.length,numSpotLightShadows:b.spotShadowMap.length,numSpotLightShadowsWithMaps:b.numSpotLightShadowsWithMaps,numLightProbes:b.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:M.dithering,shadowMapEnabled:s.shadowMap.enabled&&B.length>0,shadowMapType:s.shadowMap.type,toneMapping:Kt,useLegacyLights:s._useLegacyLights,decodeVideoTexture:Et&&M.map.isVideoTexture===!0&&qt.getTransfer(M.map.colorSpace)===Zt,premultipliedAlpha:M.premultipliedAlpha,doubleSided:M.side===fe,flipSided:M.side===De,useDepthPacking:M.depthPacking>=0,depthPacking:M.depthPacking||0,index0AttributeName:M.index0AttributeName,extensionDerivatives:rt&&M.extensions.derivatives===!0,extensionFragDepth:rt&&M.extensions.fragDepth===!0,extensionDrawBuffers:rt&&M.extensions.drawBuffers===!0,extensionShaderTextureLOD:rt&&M.extensions.shaderTextureLOD===!0,extensionClipCullDistance:rt&&M.extensions.clipCullDistance&&n.has("WEBGL_clip_cull_distance"),rendererExtensionFragDepth:h||n.has("EXT_frag_depth"),rendererExtensionDrawBuffers:h||n.has("WEBGL_draw_buffers"),rendererExtensionShaderTextureLod:h||n.has("EXT_shader_texture_lod"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:M.customProgramCacheKey()}}function f(M){const b=[];if(M.shaderID?b.push(M.shaderID):(b.push(M.customVertexShaderID),b.push(M.customFragmentShaderID)),M.defines!==void 0)for(const B in M.defines)b.push(B),b.push(M.defines[B]);return M.isRawShaderMaterial===!1&&(E(b,M),v(b,M),b.push(s.outputColorSpace)),b.push(M.customProgramCacheKey),b.join()}function E(M,b){M.push(b.precision),M.push(b.outputColorSpace),M.push(b.envMapMode),M.push(b.envMapCubeUVHeight),M.push(b.mapUv),M.push(b.alphaMapUv),M.push(b.lightMapUv),M.push(b.aoMapUv),M.push(b.bumpMapUv),M.push(b.normalMapUv),M.push(b.displacementMapUv),M.push(b.emissiveMapUv),M.push(b.metalnessMapUv),M.push(b.roughnessMapUv),M.push(b.anisotropyMapUv),M.push(b.clearcoatMapUv),M.push(b.clearcoatNormalMapUv),M.push(b.clearcoatRoughnessMapUv),M.push(b.iridescenceMapUv),M.push(b.iridescenceThicknessMapUv),M.push(b.sheenColorMapUv),M.push(b.sheenRoughnessMapUv),M.push(b.specularMapUv),M.push(b.specularColorMapUv),M.push(b.specularIntensityMapUv),M.push(b.transmissionMapUv),M.push(b.thicknessMapUv),M.push(b.combine),M.push(b.fogExp2),M.push(b.sizeAttenuation),M.push(b.morphTargetsCount),M.push(b.morphAttributeCount),M.push(b.numDirLights),M.push(b.numPointLights),M.push(b.numSpotLights),M.push(b.numSpotLightMaps),M.push(b.numHemiLights),M.push(b.numRectAreaLights),M.push(b.numDirLightShadows),M.push(b.numPointLightShadows),M.push(b.numSpotLightShadows),M.push(b.numSpotLightShadowsWithMaps),M.push(b.numLightProbes),M.push(b.shadowMapType),M.push(b.toneMapping),M.push(b.numClippingPlanes),M.push(b.numClipIntersection),M.push(b.depthPacking)}function v(M,b){a.disableAll(),b.isWebGL2&&a.enable(0),b.supportsVertexTextures&&a.enable(1),b.instancing&&a.enable(2),b.instancingColor&&a.enable(3),b.matcap&&a.enable(4),b.envMap&&a.enable(5),b.normalMapObjectSpace&&a.enable(6),b.normalMapTangentSpace&&a.enable(7),b.clearcoat&&a.enable(8),b.iridescence&&a.enable(9),b.alphaTest&&a.enable(10),b.vertexColors&&a.enable(11),b.vertexAlphas&&a.enable(12),b.vertexUv1s&&a.enable(13),b.vertexUv2s&&a.enable(14),b.vertexUv3s&&a.enable(15),b.vertexTangents&&a.enable(16),b.anisotropy&&a.enable(17),b.alphaHash&&a.enable(18),b.batching&&a.enable(19),M.push(a.mask),a.disableAll(),b.fog&&a.enable(0),b.useFog&&a.enable(1),b.flatShading&&a.enable(2),b.logarithmicDepthBuffer&&a.enable(3),b.skinning&&a.enable(4),b.morphTargets&&a.enable(5),b.morphNormals&&a.enable(6),b.morphColors&&a.enable(7),b.premultipliedAlpha&&a.enable(8),b.shadowMapEnabled&&a.enable(9),b.useLegacyLights&&a.enable(10),b.doubleSided&&a.enable(11),b.flipSided&&a.enable(12),b.useDepthPacking&&a.enable(13),b.dithering&&a.enable(14),b.transmission&&a.enable(15),b.sheen&&a.enable(16),b.opaque&&a.enable(17),b.pointsUvs&&a.enable(18),b.decodeVideoTexture&&a.enable(19),M.push(a.mask)}function S(M){const b=g[M.type];let B;if(b){const k=tn[b];B=ms.clone(k.uniforms)}else B=M.uniforms;return B}function P(M,b){let B;for(let k=0,q=c.length;k<q;k++){const L=c[k];if(L.cacheKey===b){B=L,++B.usedTimes;break}}return B===void 0&&(B=new Yf(s,b,M,r),c.push(B)),B}function w(M){if(--M.usedTimes===0){const b=c.indexOf(M);c[b]=c[c.length-1],c.pop(),M.destroy()}}function A(M){l.remove(M)}function G(){l.dispose()}return{getParameters:m,getProgramCacheKey:f,getUniforms:S,acquireProgram:P,releaseProgram:w,releaseShaderCache:A,programs:c,dispose:G}}function Jf(){let s=new WeakMap;function t(r){let o=s.get(r);return o===void 0&&(o={},s.set(r,o)),o}function e(r){s.delete(r)}function n(r,o,a){s.get(r)[o]=a}function i(){s=new WeakMap}return{get:t,remove:e,update:n,dispose:i}}function Qf(s,t){return s.groupOrder!==t.groupOrder?s.groupOrder-t.groupOrder:s.renderOrder!==t.renderOrder?s.renderOrder-t.renderOrder:s.material.id!==t.material.id?s.material.id-t.material.id:s.z!==t.z?s.z-t.z:s.id-t.id}function Ka(s,t){return s.groupOrder!==t.groupOrder?s.groupOrder-t.groupOrder:s.renderOrder!==t.renderOrder?s.renderOrder-t.renderOrder:s.z!==t.z?t.z-s.z:s.id-t.id}function ja(){const s=[];let t=0;const e=[],n=[],i=[];function r(){t=0,e.length=0,n.length=0,i.length=0}function o(u,d,p,g,_,m){let f=s[t];return f===void 0?(f={id:u.id,object:u,geometry:d,material:p,groupOrder:g,renderOrder:u.renderOrder,z:_,group:m},s[t]=f):(f.id=u.id,f.object=u,f.geometry=d,f.material=p,f.groupOrder=g,f.renderOrder=u.renderOrder,f.z=_,f.group=m),t++,f}function a(u,d,p,g,_,m){const f=o(u,d,p,g,_,m);p.transmission>0?n.push(f):p.transparent===!0?i.push(f):e.push(f)}function l(u,d,p,g,_,m){const f=o(u,d,p,g,_,m);p.transmission>0?n.unshift(f):p.transparent===!0?i.unshift(f):e.unshift(f)}function c(u,d){e.length>1&&e.sort(u||Qf),n.length>1&&n.sort(d||Ka),i.length>1&&i.sort(d||Ka)}function h(){for(let u=t,d=s.length;u<d;u++){const p=s[u];if(p.id===null)break;p.id=null,p.object=null,p.geometry=null,p.material=null,p.group=null}}return{opaque:e,transmissive:n,transparent:i,init:r,push:a,unshift:l,finish:h,sort:c}}function tp(){let s=new WeakMap;function t(n,i){const r=s.get(n);let o;return r===void 0?(o=new ja,s.set(n,[o])):i>=r.length?(o=new ja,r.push(o)):o=r[i],o}function e(){s=new WeakMap}return{get:t,dispose:e}}function ep(){const s={};return{get:function(t){if(s[t.id]!==void 0)return s[t.id];let e;switch(t.type){case"DirectionalLight":e={direction:new R,color:new Nt};break;case"SpotLight":e={position:new R,direction:new R,color:new Nt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new R,color:new Nt,distance:0,decay:0};break;case"HemisphereLight":e={direction:new R,skyColor:new Nt,groundColor:new Nt};break;case"RectAreaLight":e={color:new Nt,position:new R,halfWidth:new R,halfHeight:new R};break}return s[t.id]=e,e}}}function np(){const s={};return{get:function(t){if(s[t.id]!==void 0)return s[t.id];let e;switch(t.type){case"DirectionalLight":e={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ht};break;case"SpotLight":e={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ht};break;case"PointLight":e={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ht,shadowCameraNear:1,shadowCameraFar:1e3};break}return s[t.id]=e,e}}}let ip=0;function sp(s,t){return(t.castShadow?2:0)-(s.castShadow?2:0)+(t.map?1:0)-(s.map?1:0)}function rp(s,t){const e=new ep,n=np(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let h=0;h<9;h++)i.probe.push(new R);const r=new R,o=new se,a=new se;function l(h,u){let d=0,p=0,g=0;for(let k=0;k<9;k++)i.probe[k].set(0,0,0);let _=0,m=0,f=0,E=0,v=0,S=0,P=0,w=0,A=0,G=0,M=0;h.sort(sp);const b=u===!0?Math.PI:1;for(let k=0,q=h.length;k<q;k++){const L=h[k],I=L.color,V=L.intensity,X=L.distance,W=L.shadow&&L.shadow.map?L.shadow.map.texture:null;if(L.isAmbientLight)d+=I.r*V*b,p+=I.g*V*b,g+=I.b*V*b;else if(L.isLightProbe){for(let Y=0;Y<9;Y++)i.probe[Y].addScaledVector(L.sh.coefficients[Y],V);M++}else if(L.isDirectionalLight){const Y=e.get(L);if(Y.color.copy(L.color).multiplyScalar(L.intensity*b),L.castShadow){const K=L.shadow,tt=n.get(L);tt.shadowBias=K.bias,tt.shadowNormalBias=K.normalBias,tt.shadowRadius=K.radius,tt.shadowMapSize=K.mapSize,i.directionalShadow[_]=tt,i.directionalShadowMap[_]=W,i.directionalShadowMatrix[_]=L.shadow.matrix,S++}i.directional[_]=Y,_++}else if(L.isSpotLight){const Y=e.get(L);Y.position.setFromMatrixPosition(L.matrixWorld),Y.color.copy(I).multiplyScalar(V*b),Y.distance=X,Y.coneCos=Math.cos(L.angle),Y.penumbraCos=Math.cos(L.angle*(1-L.penumbra)),Y.decay=L.decay,i.spot[f]=Y;const K=L.shadow;if(L.map&&(i.spotLightMap[A]=L.map,A++,K.updateMatrices(L),L.castShadow&&G++),i.spotLightMatrix[f]=K.matrix,L.castShadow){const tt=n.get(L);tt.shadowBias=K.bias,tt.shadowNormalBias=K.normalBias,tt.shadowRadius=K.radius,tt.shadowMapSize=K.mapSize,i.spotShadow[f]=tt,i.spotShadowMap[f]=W,w++}f++}else if(L.isRectAreaLight){const Y=e.get(L);Y.color.copy(I).multiplyScalar(V),Y.halfWidth.set(L.width*.5,0,0),Y.halfHeight.set(0,L.height*.5,0),i.rectArea[E]=Y,E++}else if(L.isPointLight){const Y=e.get(L);if(Y.color.copy(L.color).multiplyScalar(L.intensity*b),Y.distance=L.distance,Y.decay=L.decay,L.castShadow){const K=L.shadow,tt=n.get(L);tt.shadowBias=K.bias,tt.shadowNormalBias=K.normalBias,tt.shadowRadius=K.radius,tt.shadowMapSize=K.mapSize,tt.shadowCameraNear=K.camera.near,tt.shadowCameraFar=K.camera.far,i.pointShadow[m]=tt,i.pointShadowMap[m]=W,i.pointShadowMatrix[m]=L.shadow.matrix,P++}i.point[m]=Y,m++}else if(L.isHemisphereLight){const Y=e.get(L);Y.skyColor.copy(L.color).multiplyScalar(V*b),Y.groundColor.copy(L.groundColor).multiplyScalar(V*b),i.hemi[v]=Y,v++}}E>0&&(t.isWebGL2?s.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=it.LTC_FLOAT_1,i.rectAreaLTC2=it.LTC_FLOAT_2):(i.rectAreaLTC1=it.LTC_HALF_1,i.rectAreaLTC2=it.LTC_HALF_2):s.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=it.LTC_FLOAT_1,i.rectAreaLTC2=it.LTC_FLOAT_2):s.has("OES_texture_half_float_linear")===!0?(i.rectAreaLTC1=it.LTC_HALF_1,i.rectAreaLTC2=it.LTC_HALF_2):console.error("THREE.WebGLRenderer: Unable to use RectAreaLight. Missing WebGL extensions.")),i.ambient[0]=d,i.ambient[1]=p,i.ambient[2]=g;const B=i.hash;(B.directionalLength!==_||B.pointLength!==m||B.spotLength!==f||B.rectAreaLength!==E||B.hemiLength!==v||B.numDirectionalShadows!==S||B.numPointShadows!==P||B.numSpotShadows!==w||B.numSpotMaps!==A||B.numLightProbes!==M)&&(i.directional.length=_,i.spot.length=f,i.rectArea.length=E,i.point.length=m,i.hemi.length=v,i.directionalShadow.length=S,i.directionalShadowMap.length=S,i.pointShadow.length=P,i.pointShadowMap.length=P,i.spotShadow.length=w,i.spotShadowMap.length=w,i.directionalShadowMatrix.length=S,i.pointShadowMatrix.length=P,i.spotLightMatrix.length=w+A-G,i.spotLightMap.length=A,i.numSpotLightShadowsWithMaps=G,i.numLightProbes=M,B.directionalLength=_,B.pointLength=m,B.spotLength=f,B.rectAreaLength=E,B.hemiLength=v,B.numDirectionalShadows=S,B.numPointShadows=P,B.numSpotShadows=w,B.numSpotMaps=A,B.numLightProbes=M,i.version=ip++)}function c(h,u){let d=0,p=0,g=0,_=0,m=0;const f=u.matrixWorldInverse;for(let E=0,v=h.length;E<v;E++){const S=h[E];if(S.isDirectionalLight){const P=i.directional[d];P.direction.setFromMatrixPosition(S.matrixWorld),r.setFromMatrixPosition(S.target.matrixWorld),P.direction.sub(r),P.direction.transformDirection(f),d++}else if(S.isSpotLight){const P=i.spot[g];P.position.setFromMatrixPosition(S.matrixWorld),P.position.applyMatrix4(f),P.direction.setFromMatrixPosition(S.matrixWorld),r.setFromMatrixPosition(S.target.matrixWorld),P.direction.sub(r),P.direction.transformDirection(f),g++}else if(S.isRectAreaLight){const P=i.rectArea[_];P.position.setFromMatrixPosition(S.matrixWorld),P.position.applyMatrix4(f),a.identity(),o.copy(S.matrixWorld),o.premultiply(f),a.extractRotation(o),P.halfWidth.set(S.width*.5,0,0),P.halfHeight.set(0,S.height*.5,0),P.halfWidth.applyMatrix4(a),P.halfHeight.applyMatrix4(a),_++}else if(S.isPointLight){const P=i.point[p];P.position.setFromMatrixPosition(S.matrixWorld),P.position.applyMatrix4(f),p++}else if(S.isHemisphereLight){const P=i.hemi[m];P.direction.setFromMatrixPosition(S.matrixWorld),P.direction.transformDirection(f),m++}}}return{setup:l,setupView:c,state:i}}function $a(s,t){const e=new rp(s,t),n=[],i=[];function r(){n.length=0,i.length=0}function o(u){n.push(u)}function a(u){i.push(u)}function l(u){e.setup(n,u)}function c(u){e.setupView(n,u)}return{init:r,state:{lightsArray:n,shadowsArray:i,lights:e},setupLights:l,setupLightsView:c,pushLight:o,pushShadow:a}}function ap(s,t){let e=new WeakMap;function n(r,o=0){const a=e.get(r);let l;return a===void 0?(l=new $a(s,t),e.set(r,[l])):o>=a.length?(l=new $a(s,t),a.push(l)):l=a[o],l}function i(){e=new WeakMap}return{get:n,dispose:i}}class op extends zn{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Xl,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}}class lp extends zn{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}}const cp=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,hp=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function up(s,t,e){let n=new Sr;const i=new ht,r=new ht,o=new Qt,a=new op({depthPacking:ql}),l=new lp,c={},h=e.maxTextureSize,u={[En]:De,[De]:En,[fe]:fe},d=new ke({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new ht},radius:{value:4}},vertexShader:cp,fragmentShader:hp}),p=d.clone();p.defines.HORIZONTAL_PASS=1;const g=new Se;g.setAttribute("position",new Je(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const _=new ot(g,d),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=po;let f=this.type;this.render=function(w,A,G){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||w.length===0)return;const M=s.getRenderTarget(),b=s.getActiveCubeFace(),B=s.getActiveMipmapLevel(),k=s.state;k.setBlending(un),k.buffers.color.setClear(1,1,1,1),k.buffers.depth.setTest(!0),k.setScissorTest(!1);const q=f!==ln&&this.type===ln,L=f===ln&&this.type!==ln;for(let I=0,V=w.length;I<V;I++){const X=w[I],W=X.shadow;if(W===void 0){console.warn("THREE.WebGLShadowMap:",X,"has no shadow.");continue}if(W.autoUpdate===!1&&W.needsUpdate===!1)continue;i.copy(W.mapSize);const Y=W.getFrameExtents();if(i.multiply(Y),r.copy(W.mapSize),(i.x>h||i.y>h)&&(i.x>h&&(r.x=Math.floor(h/Y.x),i.x=r.x*Y.x,W.mapSize.x=r.x),i.y>h&&(r.y=Math.floor(h/Y.y),i.y=r.y*Y.y,W.mapSize.y=r.y)),W.map===null||q===!0||L===!0){const tt=this.type!==ln?{minFilter:Ce,magFilter:Ce}:{};W.map!==null&&W.map.dispose(),W.map=new Ze(i.x,i.y,tt),W.map.texture.name=X.name+".shadowMap",W.camera.updateProjectionMatrix()}s.setRenderTarget(W.map),s.clear();const K=W.getViewportCount();for(let tt=0;tt<K;tt++){const et=W.getViewport(tt);o.set(r.x*et.x,r.y*et.y,r.x*et.z,r.y*et.w),k.viewport(o),W.updateMatrices(X,tt),n=W.getFrustum(),S(A,G,W.camera,X,this.type)}W.isPointLightShadow!==!0&&this.type===ln&&E(W,G),W.needsUpdate=!1}f=this.type,m.needsUpdate=!1,s.setRenderTarget(M,b,B)};function E(w,A){const G=t.update(_);d.defines.VSM_SAMPLES!==w.blurSamples&&(d.defines.VSM_SAMPLES=w.blurSamples,p.defines.VSM_SAMPLES=w.blurSamples,d.needsUpdate=!0,p.needsUpdate=!0),w.mapPass===null&&(w.mapPass=new Ze(i.x,i.y)),d.uniforms.shadow_pass.value=w.map.texture,d.uniforms.resolution.value=w.mapSize,d.uniforms.radius.value=w.radius,s.setRenderTarget(w.mapPass),s.clear(),s.renderBufferDirect(A,null,G,d,_,null),p.uniforms.shadow_pass.value=w.mapPass.texture,p.uniforms.resolution.value=w.mapSize,p.uniforms.radius.value=w.radius,s.setRenderTarget(w.map),s.clear(),s.renderBufferDirect(A,null,G,p,_,null)}function v(w,A,G,M){let b=null;const B=G.isPointLight===!0?w.customDistanceMaterial:w.customDepthMaterial;if(B!==void 0)b=B;else if(b=G.isPointLight===!0?l:a,s.localClippingEnabled&&A.clipShadows===!0&&Array.isArray(A.clippingPlanes)&&A.clippingPlanes.length!==0||A.displacementMap&&A.displacementScale!==0||A.alphaMap&&A.alphaTest>0||A.map&&A.alphaTest>0){const k=b.uuid,q=A.uuid;let L=c[k];L===void 0&&(L={},c[k]=L);let I=L[q];I===void 0&&(I=b.clone(),L[q]=I,A.addEventListener("dispose",P)),b=I}if(b.visible=A.visible,b.wireframe=A.wireframe,M===ln?b.side=A.shadowSide!==null?A.shadowSide:A.side:b.side=A.shadowSide!==null?A.shadowSide:u[A.side],b.alphaMap=A.alphaMap,b.alphaTest=A.alphaTest,b.map=A.map,b.clipShadows=A.clipShadows,b.clippingPlanes=A.clippingPlanes,b.clipIntersection=A.clipIntersection,b.displacementMap=A.displacementMap,b.displacementScale=A.displacementScale,b.displacementBias=A.displacementBias,b.wireframeLinewidth=A.wireframeLinewidth,b.linewidth=A.linewidth,G.isPointLight===!0&&b.isMeshDistanceMaterial===!0){const k=s.properties.get(b);k.light=G}return b}function S(w,A,G,M,b){if(w.visible===!1)return;if(w.layers.test(A.layers)&&(w.isMesh||w.isLine||w.isPoints)&&(w.castShadow||w.receiveShadow&&b===ln)&&(!w.frustumCulled||n.intersectsObject(w))){w.modelViewMatrix.multiplyMatrices(G.matrixWorldInverse,w.matrixWorld);const q=t.update(w),L=w.material;if(Array.isArray(L)){const I=q.groups;for(let V=0,X=I.length;V<X;V++){const W=I[V],Y=L[W.materialIndex];if(Y&&Y.visible){const K=v(w,Y,M,b);w.onBeforeShadow(s,w,A,G,q,K,W),s.renderBufferDirect(G,null,q,K,w,W),w.onAfterShadow(s,w,A,G,q,K,W)}}}else if(L.visible){const I=v(w,L,M,b);w.onBeforeShadow(s,w,A,G,q,I,null),s.renderBufferDirect(G,null,q,I,w,null),w.onAfterShadow(s,w,A,G,q,I,null)}}const k=w.children;for(let q=0,L=k.length;q<L;q++)S(k[q],A,G,M,b)}function P(w){w.target.removeEventListener("dispose",P);for(const G in c){const M=c[G],b=w.target.uuid;b in M&&(M[b].dispose(),delete M[b])}}}function dp(s,t,e){const n=e.isWebGL2;function i(){let C=!1;const st=new Qt;let rt=null;const bt=new Qt(0,0,0,0);return{setMask:function(Mt){rt!==Mt&&!C&&(s.colorMask(Mt,Mt,Mt,Mt),rt=Mt)},setLocked:function(Mt){C=Mt},setClear:function(Mt,Yt,Kt,he,Ee){Ee===!0&&(Mt*=he,Yt*=he,Kt*=he),st.set(Mt,Yt,Kt,he),bt.equals(st)===!1&&(s.clearColor(Mt,Yt,Kt,he),bt.copy(st))},reset:function(){C=!1,rt=null,bt.set(-1,0,0,0)}}}function r(){let C=!1,st=null,rt=null,bt=null;return{setTest:function(Mt){Mt?Dt(s.DEPTH_TEST):Et(s.DEPTH_TEST)},setMask:function(Mt){st!==Mt&&!C&&(s.depthMask(Mt),st=Mt)},setFunc:function(Mt){if(rt!==Mt){switch(Mt){case Sl:s.depthFunc(s.NEVER);break;case Tl:s.depthFunc(s.ALWAYS);break;case El:s.depthFunc(s.LESS);break;case ls:s.depthFunc(s.LEQUAL);break;case bl:s.depthFunc(s.EQUAL);break;case wl:s.depthFunc(s.GEQUAL);break;case Al:s.depthFunc(s.GREATER);break;case Rl:s.depthFunc(s.NOTEQUAL);break;default:s.depthFunc(s.LEQUAL)}rt=Mt}},setLocked:function(Mt){C=Mt},setClear:function(Mt){bt!==Mt&&(s.clearDepth(Mt),bt=Mt)},reset:function(){C=!1,st=null,rt=null,bt=null}}}function o(){let C=!1,st=null,rt=null,bt=null,Mt=null,Yt=null,Kt=null,he=null,Ee=null;return{setTest:function(jt){C||(jt?Dt(s.STENCIL_TEST):Et(s.STENCIL_TEST))},setMask:function(jt){st!==jt&&!C&&(s.stencilMask(jt),st=jt)},setFunc:function(jt,be,Qe){(rt!==jt||bt!==be||Mt!==Qe)&&(s.stencilFunc(jt,be,Qe),rt=jt,bt=be,Mt=Qe)},setOp:function(jt,be,Qe){(Yt!==jt||Kt!==be||he!==Qe)&&(s.stencilOp(jt,be,Qe),Yt=jt,Kt=be,he=Qe)},setLocked:function(jt){C=jt},setClear:function(jt){Ee!==jt&&(s.clearStencil(jt),Ee=jt)},reset:function(){C=!1,st=null,rt=null,bt=null,Mt=null,Yt=null,Kt=null,he=null,Ee=null}}}const a=new i,l=new r,c=new o,h=new WeakMap,u=new WeakMap;let d={},p={},g=new WeakMap,_=[],m=null,f=!1,E=null,v=null,S=null,P=null,w=null,A=null,G=null,M=new Nt(0,0,0),b=0,B=!1,k=null,q=null,L=null,I=null,V=null;const X=s.getParameter(s.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let W=!1,Y=0;const K=s.getParameter(s.VERSION);K.indexOf("WebGL")!==-1?(Y=parseFloat(/^WebGL (\d)/.exec(K)[1]),W=Y>=1):K.indexOf("OpenGL ES")!==-1&&(Y=parseFloat(/^OpenGL ES (\d)/.exec(K)[1]),W=Y>=2);let tt=null,et={};const H=s.getParameter(s.SCISSOR_BOX),j=s.getParameter(s.VIEWPORT),lt=new Qt().fromArray(H),_t=new Qt().fromArray(j);function gt(C,st,rt,bt){const Mt=new Uint8Array(4),Yt=s.createTexture();s.bindTexture(C,Yt),s.texParameteri(C,s.TEXTURE_MIN_FILTER,s.NEAREST),s.texParameteri(C,s.TEXTURE_MAG_FILTER,s.NEAREST);for(let Kt=0;Kt<rt;Kt++)n&&(C===s.TEXTURE_3D||C===s.TEXTURE_2D_ARRAY)?s.texImage3D(st,0,s.RGBA,1,1,bt,0,s.RGBA,s.UNSIGNED_BYTE,Mt):s.texImage2D(st+Kt,0,s.RGBA,1,1,0,s.RGBA,s.UNSIGNED_BYTE,Mt);return Yt}const Pt={};Pt[s.TEXTURE_2D]=gt(s.TEXTURE_2D,s.TEXTURE_2D,1),Pt[s.TEXTURE_CUBE_MAP]=gt(s.TEXTURE_CUBE_MAP,s.TEXTURE_CUBE_MAP_POSITIVE_X,6),n&&(Pt[s.TEXTURE_2D_ARRAY]=gt(s.TEXTURE_2D_ARRAY,s.TEXTURE_2D_ARRAY,1,1),Pt[s.TEXTURE_3D]=gt(s.TEXTURE_3D,s.TEXTURE_3D,1,1)),a.setClear(0,0,0,1),l.setClear(1),c.setClear(0),Dt(s.DEPTH_TEST),l.setFunc(ls),Ft(!1),T(Dr),Dt(s.CULL_FACE),ft(un);function Dt(C){d[C]!==!0&&(s.enable(C),d[C]=!0)}function Et(C){d[C]!==!1&&(s.disable(C),d[C]=!1)}function Ht(C,st){return p[C]!==st?(s.bindFramebuffer(C,st),p[C]=st,n&&(C===s.DRAW_FRAMEBUFFER&&(p[s.FRAMEBUFFER]=st),C===s.FRAMEBUFFER&&(p[s.DRAW_FRAMEBUFFER]=st)),!0):!1}function U(C,st){let rt=_,bt=!1;if(C)if(rt=g.get(st),rt===void 0&&(rt=[],g.set(st,rt)),C.isWebGLMultipleRenderTargets){const Mt=C.texture;if(rt.length!==Mt.length||rt[0]!==s.COLOR_ATTACHMENT0){for(let Yt=0,Kt=Mt.length;Yt<Kt;Yt++)rt[Yt]=s.COLOR_ATTACHMENT0+Yt;rt.length=Mt.length,bt=!0}}else rt[0]!==s.COLOR_ATTACHMENT0&&(rt[0]=s.COLOR_ATTACHMENT0,bt=!0);else rt[0]!==s.BACK&&(rt[0]=s.BACK,bt=!0);bt&&(e.isWebGL2?s.drawBuffers(rt):t.get("WEBGL_draw_buffers").drawBuffersWEBGL(rt))}function Te(C){return m!==C?(s.useProgram(C),m=C,!0):!1}const xt={[In]:s.FUNC_ADD,[ol]:s.FUNC_SUBTRACT,[ll]:s.FUNC_REVERSE_SUBTRACT};if(n)xt[Nr]=s.MIN,xt[Fr]=s.MAX;else{const C=t.get("EXT_blend_minmax");C!==null&&(xt[Nr]=C.MIN_EXT,xt[Fr]=C.MAX_EXT)}const Rt={[cl]:s.ZERO,[hl]:s.ONE,[ul]:s.SRC_COLOR,[ar]:s.SRC_ALPHA,[_l]:s.SRC_ALPHA_SATURATE,[ml]:s.DST_COLOR,[fl]:s.DST_ALPHA,[dl]:s.ONE_MINUS_SRC_COLOR,[or]:s.ONE_MINUS_SRC_ALPHA,[gl]:s.ONE_MINUS_DST_COLOR,[pl]:s.ONE_MINUS_DST_ALPHA,[vl]:s.CONSTANT_COLOR,[xl]:s.ONE_MINUS_CONSTANT_COLOR,[Ml]:s.CONSTANT_ALPHA,[yl]:s.ONE_MINUS_CONSTANT_ALPHA};function ft(C,st,rt,bt,Mt,Yt,Kt,he,Ee,jt){if(C===un){f===!0&&(Et(s.BLEND),f=!1);return}if(f===!1&&(Dt(s.BLEND),f=!0),C!==al){if(C!==E||jt!==B){if((v!==In||w!==In)&&(s.blendEquation(s.FUNC_ADD),v=In,w=In),jt)switch(C){case ri:s.blendFuncSeparate(s.ONE,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case oi:s.blendFunc(s.ONE,s.ONE);break;case Ir:s.blendFuncSeparate(s.ZERO,s.ONE_MINUS_SRC_COLOR,s.ZERO,s.ONE);break;case Ur:s.blendFuncSeparate(s.ZERO,s.SRC_COLOR,s.ZERO,s.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",C);break}else switch(C){case ri:s.blendFuncSeparate(s.SRC_ALPHA,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case oi:s.blendFunc(s.SRC_ALPHA,s.ONE);break;case Ir:s.blendFuncSeparate(s.ZERO,s.ONE_MINUS_SRC_COLOR,s.ZERO,s.ONE);break;case Ur:s.blendFunc(s.ZERO,s.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",C);break}S=null,P=null,A=null,G=null,M.set(0,0,0),b=0,E=C,B=jt}return}Mt=Mt||st,Yt=Yt||rt,Kt=Kt||bt,(st!==v||Mt!==w)&&(s.blendEquationSeparate(xt[st],xt[Mt]),v=st,w=Mt),(rt!==S||bt!==P||Yt!==A||Kt!==G)&&(s.blendFuncSeparate(Rt[rt],Rt[bt],Rt[Yt],Rt[Kt]),S=rt,P=bt,A=Yt,G=Kt),(he.equals(M)===!1||Ee!==b)&&(s.blendColor(he.r,he.g,he.b,Ee),M.copy(he),b=Ee),E=C,B=!1}function te(C,st){C.side===fe?Et(s.CULL_FACE):Dt(s.CULL_FACE);let rt=C.side===De;st&&(rt=!rt),Ft(rt),C.blending===ri&&C.transparent===!1?ft(un):ft(C.blending,C.blendEquation,C.blendSrc,C.blendDst,C.blendEquationAlpha,C.blendSrcAlpha,C.blendDstAlpha,C.blendColor,C.blendAlpha,C.premultipliedAlpha),l.setFunc(C.depthFunc),l.setTest(C.depthTest),l.setMask(C.depthWrite),a.setMask(C.colorWrite);const bt=C.stencilWrite;c.setTest(bt),bt&&(c.setMask(C.stencilWriteMask),c.setFunc(C.stencilFunc,C.stencilRef,C.stencilFuncMask),c.setOp(C.stencilFail,C.stencilZFail,C.stencilZPass)),F(C.polygonOffset,C.polygonOffsetFactor,C.polygonOffsetUnits),C.alphaToCoverage===!0?Dt(s.SAMPLE_ALPHA_TO_COVERAGE):Et(s.SAMPLE_ALPHA_TO_COVERAGE)}function Ft(C){k!==C&&(C?s.frontFace(s.CW):s.frontFace(s.CCW),k=C)}function T(C){C!==sl?(Dt(s.CULL_FACE),C!==q&&(C===Dr?s.cullFace(s.BACK):C===rl?s.cullFace(s.FRONT):s.cullFace(s.FRONT_AND_BACK))):Et(s.CULL_FACE),q=C}function x(C){C!==L&&(W&&s.lineWidth(C),L=C)}function F(C,st,rt){C?(Dt(s.POLYGON_OFFSET_FILL),(I!==st||V!==rt)&&(s.polygonOffset(st,rt),I=st,V=rt)):Et(s.POLYGON_OFFSET_FILL)}function J(C){C?Dt(s.SCISSOR_TEST):Et(s.SCISSOR_TEST)}function Z(C){C===void 0&&(C=s.TEXTURE0+X-1),tt!==C&&(s.activeTexture(C),tt=C)}function Q(C,st,rt){rt===void 0&&(tt===null?rt=s.TEXTURE0+X-1:rt=tt);let bt=et[rt];bt===void 0&&(bt={type:void 0,texture:void 0},et[rt]=bt),(bt.type!==C||bt.texture!==st)&&(tt!==rt&&(s.activeTexture(rt),tt=rt),s.bindTexture(C,st||Pt[C]),bt.type=C,bt.texture=st)}function pt(){const C=et[tt];C!==void 0&&C.type!==void 0&&(s.bindTexture(C.type,null),C.type=void 0,C.texture=void 0)}function at(){try{s.compressedTexImage2D.apply(s,arguments)}catch(C){console.error("THREE.WebGLState:",C)}}function ut(){try{s.compressedTexImage3D.apply(s,arguments)}catch(C){console.error("THREE.WebGLState:",C)}}function Tt(){try{s.texSubImage2D.apply(s,arguments)}catch(C){console.error("THREE.WebGLState:",C)}}function Ot(){try{s.texSubImage3D.apply(s,arguments)}catch(C){console.error("THREE.WebGLState:",C)}}function $(){try{s.compressedTexSubImage2D.apply(s,arguments)}catch(C){console.error("THREE.WebGLState:",C)}}function Xt(){try{s.compressedTexSubImage3D.apply(s,arguments)}catch(C){console.error("THREE.WebGLState:",C)}}function Vt(){try{s.texStorage2D.apply(s,arguments)}catch(C){console.error("THREE.WebGLState:",C)}}function At(){try{s.texStorage3D.apply(s,arguments)}catch(C){console.error("THREE.WebGLState:",C)}}function vt(){try{s.texImage2D.apply(s,arguments)}catch(C){console.error("THREE.WebGLState:",C)}}function dt(){try{s.texImage3D.apply(s,arguments)}catch(C){console.error("THREE.WebGLState:",C)}}function It(C){lt.equals(C)===!1&&(s.scissor(C.x,C.y,C.z,C.w),lt.copy(C))}function Wt(C){_t.equals(C)===!1&&(s.viewport(C.x,C.y,C.z,C.w),_t.copy(C))}function ne(C,st){let rt=u.get(st);rt===void 0&&(rt=new WeakMap,u.set(st,rt));let bt=rt.get(C);bt===void 0&&(bt=s.getUniformBlockIndex(st,C.name),rt.set(C,bt))}function zt(C,st){const bt=u.get(st).get(C);h.get(st)!==bt&&(s.uniformBlockBinding(st,bt,C.__bindingPointIndex),h.set(st,bt))}function nt(){s.disable(s.BLEND),s.disable(s.CULL_FACE),s.disable(s.DEPTH_TEST),s.disable(s.POLYGON_OFFSET_FILL),s.disable(s.SCISSOR_TEST),s.disable(s.STENCIL_TEST),s.disable(s.SAMPLE_ALPHA_TO_COVERAGE),s.blendEquation(s.FUNC_ADD),s.blendFunc(s.ONE,s.ZERO),s.blendFuncSeparate(s.ONE,s.ZERO,s.ONE,s.ZERO),s.blendColor(0,0,0,0),s.colorMask(!0,!0,!0,!0),s.clearColor(0,0,0,0),s.depthMask(!0),s.depthFunc(s.LESS),s.clearDepth(1),s.stencilMask(4294967295),s.stencilFunc(s.ALWAYS,0,4294967295),s.stencilOp(s.KEEP,s.KEEP,s.KEEP),s.clearStencil(0),s.cullFace(s.BACK),s.frontFace(s.CCW),s.polygonOffset(0,0),s.activeTexture(s.TEXTURE0),s.bindFramebuffer(s.FRAMEBUFFER,null),n===!0&&(s.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),s.bindFramebuffer(s.READ_FRAMEBUFFER,null)),s.useProgram(null),s.lineWidth(1),s.scissor(0,0,s.canvas.width,s.canvas.height),s.viewport(0,0,s.canvas.width,s.canvas.height),d={},tt=null,et={},p={},g=new WeakMap,_=[],m=null,f=!1,E=null,v=null,S=null,P=null,w=null,A=null,G=null,M=new Nt(0,0,0),b=0,B=!1,k=null,q=null,L=null,I=null,V=null,lt.set(0,0,s.canvas.width,s.canvas.height),_t.set(0,0,s.canvas.width,s.canvas.height),a.reset(),l.reset(),c.reset()}return{buffers:{color:a,depth:l,stencil:c},enable:Dt,disable:Et,bindFramebuffer:Ht,drawBuffers:U,useProgram:Te,setBlending:ft,setMaterial:te,setFlipSided:Ft,setCullFace:T,setLineWidth:x,setPolygonOffset:F,setScissorTest:J,activeTexture:Z,bindTexture:Q,unbindTexture:pt,compressedTexImage2D:at,compressedTexImage3D:ut,texImage2D:vt,texImage3D:dt,updateUBOMapping:ne,uniformBlockBinding:zt,texStorage2D:Vt,texStorage3D:At,texSubImage2D:Tt,texSubImage3D:Ot,compressedTexSubImage2D:$,compressedTexSubImage3D:Xt,scissor:It,viewport:Wt,reset:nt}}function fp(s,t,e,n,i,r,o){const a=i.isWebGL2,l=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,c=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),h=new WeakMap;let u;const d=new WeakMap;let p=!1;try{p=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(T,x){return p?new OffscreenCanvas(T,x):ps("canvas")}function _(T,x,F,J){let Z=1;if((T.width>J||T.height>J)&&(Z=J/Math.max(T.width,T.height)),Z<1||x===!0)if(typeof HTMLImageElement<"u"&&T instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&T instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&T instanceof ImageBitmap){const Q=x?fs:Math.floor,pt=Q(Z*T.width),at=Q(Z*T.height);u===void 0&&(u=g(pt,at));const ut=F?g(pt,at):u;return ut.width=pt,ut.height=at,ut.getContext("2d").drawImage(T,0,0,pt,at),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+T.width+"x"+T.height+") to ("+pt+"x"+at+")."),ut}else return"data"in T&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+T.width+"x"+T.height+")."),T;return T}function m(T){return dr(T.width)&&dr(T.height)}function f(T){return a?!1:T.wrapS!==je||T.wrapT!==je||T.minFilter!==Ce&&T.minFilter!==He}function E(T,x){return T.generateMipmaps&&x&&T.minFilter!==Ce&&T.minFilter!==He}function v(T){s.generateMipmap(T)}function S(T,x,F,J,Z=!1){if(a===!1)return x;if(T!==null){if(s[T]!==void 0)return s[T];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+T+"'")}let Q=x;if(x===s.RED&&(F===s.FLOAT&&(Q=s.R32F),F===s.HALF_FLOAT&&(Q=s.R16F),F===s.UNSIGNED_BYTE&&(Q=s.R8)),x===s.RED_INTEGER&&(F===s.UNSIGNED_BYTE&&(Q=s.R8UI),F===s.UNSIGNED_SHORT&&(Q=s.R16UI),F===s.UNSIGNED_INT&&(Q=s.R32UI),F===s.BYTE&&(Q=s.R8I),F===s.SHORT&&(Q=s.R16I),F===s.INT&&(Q=s.R32I)),x===s.RG&&(F===s.FLOAT&&(Q=s.RG32F),F===s.HALF_FLOAT&&(Q=s.RG16F),F===s.UNSIGNED_BYTE&&(Q=s.RG8)),x===s.RGBA){const pt=Z?cs:qt.getTransfer(J);F===s.FLOAT&&(Q=s.RGBA32F),F===s.HALF_FLOAT&&(Q=s.RGBA16F),F===s.UNSIGNED_BYTE&&(Q=pt===Zt?s.SRGB8_ALPHA8:s.RGBA8),F===s.UNSIGNED_SHORT_4_4_4_4&&(Q=s.RGBA4),F===s.UNSIGNED_SHORT_5_5_5_1&&(Q=s.RGB5_A1)}return(Q===s.R16F||Q===s.R32F||Q===s.RG16F||Q===s.RG32F||Q===s.RGBA16F||Q===s.RGBA32F)&&t.get("EXT_color_buffer_float"),Q}function P(T,x,F){return E(T,F)===!0||T.isFramebufferTexture&&T.minFilter!==Ce&&T.minFilter!==He?Math.log2(Math.max(x.width,x.height))+1:T.mipmaps!==void 0&&T.mipmaps.length>0?T.mipmaps.length:T.isCompressedTexture&&Array.isArray(T.image)?x.mipmaps.length:1}function w(T){return T===Ce||T===Or||T===As?s.NEAREST:s.LINEAR}function A(T){const x=T.target;x.removeEventListener("dispose",A),M(x),x.isVideoTexture&&h.delete(x)}function G(T){const x=T.target;x.removeEventListener("dispose",G),B(x)}function M(T){const x=n.get(T);if(x.__webglInit===void 0)return;const F=T.source,J=d.get(F);if(J){const Z=J[x.__cacheKey];Z.usedTimes--,Z.usedTimes===0&&b(T),Object.keys(J).length===0&&d.delete(F)}n.remove(T)}function b(T){const x=n.get(T);s.deleteTexture(x.__webglTexture);const F=T.source,J=d.get(F);delete J[x.__cacheKey],o.memory.textures--}function B(T){const x=T.texture,F=n.get(T),J=n.get(x);if(J.__webglTexture!==void 0&&(s.deleteTexture(J.__webglTexture),o.memory.textures--),T.depthTexture&&T.depthTexture.dispose(),T.isWebGLCubeRenderTarget)for(let Z=0;Z<6;Z++){if(Array.isArray(F.__webglFramebuffer[Z]))for(let Q=0;Q<F.__webglFramebuffer[Z].length;Q++)s.deleteFramebuffer(F.__webglFramebuffer[Z][Q]);else s.deleteFramebuffer(F.__webglFramebuffer[Z]);F.__webglDepthbuffer&&s.deleteRenderbuffer(F.__webglDepthbuffer[Z])}else{if(Array.isArray(F.__webglFramebuffer))for(let Z=0;Z<F.__webglFramebuffer.length;Z++)s.deleteFramebuffer(F.__webglFramebuffer[Z]);else s.deleteFramebuffer(F.__webglFramebuffer);if(F.__webglDepthbuffer&&s.deleteRenderbuffer(F.__webglDepthbuffer),F.__webglMultisampledFramebuffer&&s.deleteFramebuffer(F.__webglMultisampledFramebuffer),F.__webglColorRenderbuffer)for(let Z=0;Z<F.__webglColorRenderbuffer.length;Z++)F.__webglColorRenderbuffer[Z]&&s.deleteRenderbuffer(F.__webglColorRenderbuffer[Z]);F.__webglDepthRenderbuffer&&s.deleteRenderbuffer(F.__webglDepthRenderbuffer)}if(T.isWebGLMultipleRenderTargets)for(let Z=0,Q=x.length;Z<Q;Z++){const pt=n.get(x[Z]);pt.__webglTexture&&(s.deleteTexture(pt.__webglTexture),o.memory.textures--),n.remove(x[Z])}n.remove(x),n.remove(T)}let k=0;function q(){k=0}function L(){const T=k;return T>=i.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+T+" texture units while this GPU supports only "+i.maxTextures),k+=1,T}function I(T){const x=[];return x.push(T.wrapS),x.push(T.wrapT),x.push(T.wrapR||0),x.push(T.magFilter),x.push(T.minFilter),x.push(T.anisotropy),x.push(T.internalFormat),x.push(T.format),x.push(T.type),x.push(T.generateMipmaps),x.push(T.premultiplyAlpha),x.push(T.flipY),x.push(T.unpackAlignment),x.push(T.colorSpace),x.join()}function V(T,x){const F=n.get(T);if(T.isVideoTexture&&te(T),T.isRenderTargetTexture===!1&&T.version>0&&F.__version!==T.version){const J=T.image;if(J===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(J.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{lt(F,T,x);return}}e.bindTexture(s.TEXTURE_2D,F.__webglTexture,s.TEXTURE0+x)}function X(T,x){const F=n.get(T);if(T.version>0&&F.__version!==T.version){lt(F,T,x);return}e.bindTexture(s.TEXTURE_2D_ARRAY,F.__webglTexture,s.TEXTURE0+x)}function W(T,x){const F=n.get(T);if(T.version>0&&F.__version!==T.version){lt(F,T,x);return}e.bindTexture(s.TEXTURE_3D,F.__webglTexture,s.TEXTURE0+x)}function Y(T,x){const F=n.get(T);if(T.version>0&&F.__version!==T.version){_t(F,T,x);return}e.bindTexture(s.TEXTURE_CUBE_MAP,F.__webglTexture,s.TEXTURE0+x)}const K={[Ai]:s.REPEAT,[je]:s.CLAMP_TO_EDGE,[hr]:s.MIRRORED_REPEAT},tt={[Ce]:s.NEAREST,[Or]:s.NEAREST_MIPMAP_NEAREST,[As]:s.NEAREST_MIPMAP_LINEAR,[He]:s.LINEAR,[Fl]:s.LINEAR_MIPMAP_NEAREST,[Ri]:s.LINEAR_MIPMAP_LINEAR},et={[Kl]:s.NEVER,[tc]:s.ALWAYS,[jl]:s.LESS,[Ro]:s.LEQUAL,[$l]:s.EQUAL,[Ql]:s.GEQUAL,[Zl]:s.GREATER,[Jl]:s.NOTEQUAL};function H(T,x,F){if(F?(s.texParameteri(T,s.TEXTURE_WRAP_S,K[x.wrapS]),s.texParameteri(T,s.TEXTURE_WRAP_T,K[x.wrapT]),(T===s.TEXTURE_3D||T===s.TEXTURE_2D_ARRAY)&&s.texParameteri(T,s.TEXTURE_WRAP_R,K[x.wrapR]),s.texParameteri(T,s.TEXTURE_MAG_FILTER,tt[x.magFilter]),s.texParameteri(T,s.TEXTURE_MIN_FILTER,tt[x.minFilter])):(s.texParameteri(T,s.TEXTURE_WRAP_S,s.CLAMP_TO_EDGE),s.texParameteri(T,s.TEXTURE_WRAP_T,s.CLAMP_TO_EDGE),(T===s.TEXTURE_3D||T===s.TEXTURE_2D_ARRAY)&&s.texParameteri(T,s.TEXTURE_WRAP_R,s.CLAMP_TO_EDGE),(x.wrapS!==je||x.wrapT!==je)&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.wrapS and Texture.wrapT should be set to THREE.ClampToEdgeWrapping."),s.texParameteri(T,s.TEXTURE_MAG_FILTER,w(x.magFilter)),s.texParameteri(T,s.TEXTURE_MIN_FILTER,w(x.minFilter)),x.minFilter!==Ce&&x.minFilter!==He&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.minFilter should be set to THREE.NearestFilter or THREE.LinearFilter.")),x.compareFunction&&(s.texParameteri(T,s.TEXTURE_COMPARE_MODE,s.COMPARE_REF_TO_TEXTURE),s.texParameteri(T,s.TEXTURE_COMPARE_FUNC,et[x.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){const J=t.get("EXT_texture_filter_anisotropic");if(x.magFilter===Ce||x.minFilter!==As&&x.minFilter!==Ri||x.type===yn&&t.has("OES_texture_float_linear")===!1||a===!1&&x.type===dn&&t.has("OES_texture_half_float_linear")===!1)return;(x.anisotropy>1||n.get(x).__currentAnisotropy)&&(s.texParameterf(T,J.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(x.anisotropy,i.getMaxAnisotropy())),n.get(x).__currentAnisotropy=x.anisotropy)}}function j(T,x){let F=!1;T.__webglInit===void 0&&(T.__webglInit=!0,x.addEventListener("dispose",A));const J=x.source;let Z=d.get(J);Z===void 0&&(Z={},d.set(J,Z));const Q=I(x);if(Q!==T.__cacheKey){Z[Q]===void 0&&(Z[Q]={texture:s.createTexture(),usedTimes:0},o.memory.textures++,F=!0),Z[Q].usedTimes++;const pt=Z[T.__cacheKey];pt!==void 0&&(Z[T.__cacheKey].usedTimes--,pt.usedTimes===0&&b(x)),T.__cacheKey=Q,T.__webglTexture=Z[Q].texture}return F}function lt(T,x,F){let J=s.TEXTURE_2D;(x.isDataArrayTexture||x.isCompressedArrayTexture)&&(J=s.TEXTURE_2D_ARRAY),x.isData3DTexture&&(J=s.TEXTURE_3D);const Z=j(T,x),Q=x.source;e.bindTexture(J,T.__webglTexture,s.TEXTURE0+F);const pt=n.get(Q);if(Q.version!==pt.__version||Z===!0){e.activeTexture(s.TEXTURE0+F);const at=qt.getPrimaries(qt.workingColorSpace),ut=x.colorSpace===We?null:qt.getPrimaries(x.colorSpace),Tt=x.colorSpace===We||at===ut?s.NONE:s.BROWSER_DEFAULT_WEBGL;s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,x.flipY),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,x.premultiplyAlpha),s.pixelStorei(s.UNPACK_ALIGNMENT,x.unpackAlignment),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,Tt);const Ot=f(x)&&m(x.image)===!1;let $=_(x.image,Ot,!1,i.maxTextureSize);$=Ft(x,$);const Xt=m($)||a,Vt=r.convert(x.format,x.colorSpace);let At=r.convert(x.type),vt=S(x.internalFormat,Vt,At,x.colorSpace,x.isVideoTexture);H(J,x,Xt);let dt;const It=x.mipmaps,Wt=a&&x.isVideoTexture!==!0&&vt!==bo,ne=pt.__version===void 0||Z===!0,zt=P(x,$,Xt);if(x.isDepthTexture)vt=s.DEPTH_COMPONENT,a?x.type===yn?vt=s.DEPTH_COMPONENT32F:x.type===Mn?vt=s.DEPTH_COMPONENT24:x.type===Fn?vt=s.DEPTH24_STENCIL8:vt=s.DEPTH_COMPONENT16:x.type===yn&&console.error("WebGLRenderer: Floating point depth texture requires WebGL2."),x.format===On&&vt===s.DEPTH_COMPONENT&&x.type!==vr&&x.type!==Mn&&(console.warn("THREE.WebGLRenderer: Use UnsignedShortType or UnsignedIntType for DepthFormat DepthTexture."),x.type=Mn,At=r.convert(x.type)),x.format===hi&&vt===s.DEPTH_COMPONENT&&(vt=s.DEPTH_STENCIL,x.type!==Fn&&(console.warn("THREE.WebGLRenderer: Use UnsignedInt248Type for DepthStencilFormat DepthTexture."),x.type=Fn,At=r.convert(x.type))),ne&&(Wt?e.texStorage2D(s.TEXTURE_2D,1,vt,$.width,$.height):e.texImage2D(s.TEXTURE_2D,0,vt,$.width,$.height,0,Vt,At,null));else if(x.isDataTexture)if(It.length>0&&Xt){Wt&&ne&&e.texStorage2D(s.TEXTURE_2D,zt,vt,It[0].width,It[0].height);for(let nt=0,C=It.length;nt<C;nt++)dt=It[nt],Wt?e.texSubImage2D(s.TEXTURE_2D,nt,0,0,dt.width,dt.height,Vt,At,dt.data):e.texImage2D(s.TEXTURE_2D,nt,vt,dt.width,dt.height,0,Vt,At,dt.data);x.generateMipmaps=!1}else Wt?(ne&&e.texStorage2D(s.TEXTURE_2D,zt,vt,$.width,$.height),e.texSubImage2D(s.TEXTURE_2D,0,0,0,$.width,$.height,Vt,At,$.data)):e.texImage2D(s.TEXTURE_2D,0,vt,$.width,$.height,0,Vt,At,$.data);else if(x.isCompressedTexture)if(x.isCompressedArrayTexture){Wt&&ne&&e.texStorage3D(s.TEXTURE_2D_ARRAY,zt,vt,It[0].width,It[0].height,$.depth);for(let nt=0,C=It.length;nt<C;nt++)dt=It[nt],x.format!==$e?Vt!==null?Wt?e.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,nt,0,0,0,dt.width,dt.height,$.depth,Vt,dt.data,0,0):e.compressedTexImage3D(s.TEXTURE_2D_ARRAY,nt,vt,dt.width,dt.height,$.depth,0,dt.data,0,0):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Wt?e.texSubImage3D(s.TEXTURE_2D_ARRAY,nt,0,0,0,dt.width,dt.height,$.depth,Vt,At,dt.data):e.texImage3D(s.TEXTURE_2D_ARRAY,nt,vt,dt.width,dt.height,$.depth,0,Vt,At,dt.data)}else{Wt&&ne&&e.texStorage2D(s.TEXTURE_2D,zt,vt,It[0].width,It[0].height);for(let nt=0,C=It.length;nt<C;nt++)dt=It[nt],x.format!==$e?Vt!==null?Wt?e.compressedTexSubImage2D(s.TEXTURE_2D,nt,0,0,dt.width,dt.height,Vt,dt.data):e.compressedTexImage2D(s.TEXTURE_2D,nt,vt,dt.width,dt.height,0,dt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Wt?e.texSubImage2D(s.TEXTURE_2D,nt,0,0,dt.width,dt.height,Vt,At,dt.data):e.texImage2D(s.TEXTURE_2D,nt,vt,dt.width,dt.height,0,Vt,At,dt.data)}else if(x.isDataArrayTexture)Wt?(ne&&e.texStorage3D(s.TEXTURE_2D_ARRAY,zt,vt,$.width,$.height,$.depth),e.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,0,$.width,$.height,$.depth,Vt,At,$.data)):e.texImage3D(s.TEXTURE_2D_ARRAY,0,vt,$.width,$.height,$.depth,0,Vt,At,$.data);else if(x.isData3DTexture)Wt?(ne&&e.texStorage3D(s.TEXTURE_3D,zt,vt,$.width,$.height,$.depth),e.texSubImage3D(s.TEXTURE_3D,0,0,0,0,$.width,$.height,$.depth,Vt,At,$.data)):e.texImage3D(s.TEXTURE_3D,0,vt,$.width,$.height,$.depth,0,Vt,At,$.data);else if(x.isFramebufferTexture){if(ne)if(Wt)e.texStorage2D(s.TEXTURE_2D,zt,vt,$.width,$.height);else{let nt=$.width,C=$.height;for(let st=0;st<zt;st++)e.texImage2D(s.TEXTURE_2D,st,vt,nt,C,0,Vt,At,null),nt>>=1,C>>=1}}else if(It.length>0&&Xt){Wt&&ne&&e.texStorage2D(s.TEXTURE_2D,zt,vt,It[0].width,It[0].height);for(let nt=0,C=It.length;nt<C;nt++)dt=It[nt],Wt?e.texSubImage2D(s.TEXTURE_2D,nt,0,0,Vt,At,dt):e.texImage2D(s.TEXTURE_2D,nt,vt,Vt,At,dt);x.generateMipmaps=!1}else Wt?(ne&&e.texStorage2D(s.TEXTURE_2D,zt,vt,$.width,$.height),e.texSubImage2D(s.TEXTURE_2D,0,0,0,Vt,At,$)):e.texImage2D(s.TEXTURE_2D,0,vt,Vt,At,$);E(x,Xt)&&v(J),pt.__version=Q.version,x.onUpdate&&x.onUpdate(x)}T.__version=x.version}function _t(T,x,F){if(x.image.length!==6)return;const J=j(T,x),Z=x.source;e.bindTexture(s.TEXTURE_CUBE_MAP,T.__webglTexture,s.TEXTURE0+F);const Q=n.get(Z);if(Z.version!==Q.__version||J===!0){e.activeTexture(s.TEXTURE0+F);const pt=qt.getPrimaries(qt.workingColorSpace),at=x.colorSpace===We?null:qt.getPrimaries(x.colorSpace),ut=x.colorSpace===We||pt===at?s.NONE:s.BROWSER_DEFAULT_WEBGL;s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,x.flipY),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,x.premultiplyAlpha),s.pixelStorei(s.UNPACK_ALIGNMENT,x.unpackAlignment),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,ut);const Tt=x.isCompressedTexture||x.image[0].isCompressedTexture,Ot=x.image[0]&&x.image[0].isDataTexture,$=[];for(let nt=0;nt<6;nt++)!Tt&&!Ot?$[nt]=_(x.image[nt],!1,!0,i.maxCubemapSize):$[nt]=Ot?x.image[nt].image:x.image[nt],$[nt]=Ft(x,$[nt]);const Xt=$[0],Vt=m(Xt)||a,At=r.convert(x.format,x.colorSpace),vt=r.convert(x.type),dt=S(x.internalFormat,At,vt,x.colorSpace),It=a&&x.isVideoTexture!==!0,Wt=Q.__version===void 0||J===!0;let ne=P(x,Xt,Vt);H(s.TEXTURE_CUBE_MAP,x,Vt);let zt;if(Tt){It&&Wt&&e.texStorage2D(s.TEXTURE_CUBE_MAP,ne,dt,Xt.width,Xt.height);for(let nt=0;nt<6;nt++){zt=$[nt].mipmaps;for(let C=0;C<zt.length;C++){const st=zt[C];x.format!==$e?At!==null?It?e.compressedTexSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+nt,C,0,0,st.width,st.height,At,st.data):e.compressedTexImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+nt,C,dt,st.width,st.height,0,st.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):It?e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+nt,C,0,0,st.width,st.height,At,vt,st.data):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+nt,C,dt,st.width,st.height,0,At,vt,st.data)}}}else{zt=x.mipmaps,It&&Wt&&(zt.length>0&&ne++,e.texStorage2D(s.TEXTURE_CUBE_MAP,ne,dt,$[0].width,$[0].height));for(let nt=0;nt<6;nt++)if(Ot){It?e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+nt,0,0,0,$[nt].width,$[nt].height,At,vt,$[nt].data):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+nt,0,dt,$[nt].width,$[nt].height,0,At,vt,$[nt].data);for(let C=0;C<zt.length;C++){const rt=zt[C].image[nt].image;It?e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+nt,C+1,0,0,rt.width,rt.height,At,vt,rt.data):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+nt,C+1,dt,rt.width,rt.height,0,At,vt,rt.data)}}else{It?e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+nt,0,0,0,At,vt,$[nt]):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+nt,0,dt,At,vt,$[nt]);for(let C=0;C<zt.length;C++){const st=zt[C];It?e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+nt,C+1,0,0,At,vt,st.image[nt]):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+nt,C+1,dt,At,vt,st.image[nt])}}}E(x,Vt)&&v(s.TEXTURE_CUBE_MAP),Q.__version=Z.version,x.onUpdate&&x.onUpdate(x)}T.__version=x.version}function gt(T,x,F,J,Z,Q){const pt=r.convert(F.format,F.colorSpace),at=r.convert(F.type),ut=S(F.internalFormat,pt,at,F.colorSpace);if(!n.get(x).__hasExternalTextures){const Ot=Math.max(1,x.width>>Q),$=Math.max(1,x.height>>Q);Z===s.TEXTURE_3D||Z===s.TEXTURE_2D_ARRAY?e.texImage3D(Z,Q,ut,Ot,$,x.depth,0,pt,at,null):e.texImage2D(Z,Q,ut,Ot,$,0,pt,at,null)}e.bindFramebuffer(s.FRAMEBUFFER,T),ft(x)?l.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,J,Z,n.get(F).__webglTexture,0,Rt(x)):(Z===s.TEXTURE_2D||Z>=s.TEXTURE_CUBE_MAP_POSITIVE_X&&Z<=s.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&s.framebufferTexture2D(s.FRAMEBUFFER,J,Z,n.get(F).__webglTexture,Q),e.bindFramebuffer(s.FRAMEBUFFER,null)}function Pt(T,x,F){if(s.bindRenderbuffer(s.RENDERBUFFER,T),x.depthBuffer&&!x.stencilBuffer){let J=a===!0?s.DEPTH_COMPONENT24:s.DEPTH_COMPONENT16;if(F||ft(x)){const Z=x.depthTexture;Z&&Z.isDepthTexture&&(Z.type===yn?J=s.DEPTH_COMPONENT32F:Z.type===Mn&&(J=s.DEPTH_COMPONENT24));const Q=Rt(x);ft(x)?l.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,Q,J,x.width,x.height):s.renderbufferStorageMultisample(s.RENDERBUFFER,Q,J,x.width,x.height)}else s.renderbufferStorage(s.RENDERBUFFER,J,x.width,x.height);s.framebufferRenderbuffer(s.FRAMEBUFFER,s.DEPTH_ATTACHMENT,s.RENDERBUFFER,T)}else if(x.depthBuffer&&x.stencilBuffer){const J=Rt(x);F&&ft(x)===!1?s.renderbufferStorageMultisample(s.RENDERBUFFER,J,s.DEPTH24_STENCIL8,x.width,x.height):ft(x)?l.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,J,s.DEPTH24_STENCIL8,x.width,x.height):s.renderbufferStorage(s.RENDERBUFFER,s.DEPTH_STENCIL,x.width,x.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.DEPTH_STENCIL_ATTACHMENT,s.RENDERBUFFER,T)}else{const J=x.isWebGLMultipleRenderTargets===!0?x.texture:[x.texture];for(let Z=0;Z<J.length;Z++){const Q=J[Z],pt=r.convert(Q.format,Q.colorSpace),at=r.convert(Q.type),ut=S(Q.internalFormat,pt,at,Q.colorSpace),Tt=Rt(x);F&&ft(x)===!1?s.renderbufferStorageMultisample(s.RENDERBUFFER,Tt,ut,x.width,x.height):ft(x)?l.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,Tt,ut,x.width,x.height):s.renderbufferStorage(s.RENDERBUFFER,ut,x.width,x.height)}}s.bindRenderbuffer(s.RENDERBUFFER,null)}function Dt(T,x){if(x&&x.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(e.bindFramebuffer(s.FRAMEBUFFER,T),!(x.depthTexture&&x.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!n.get(x.depthTexture).__webglTexture||x.depthTexture.image.width!==x.width||x.depthTexture.image.height!==x.height)&&(x.depthTexture.image.width=x.width,x.depthTexture.image.height=x.height,x.depthTexture.needsUpdate=!0),V(x.depthTexture,0);const J=n.get(x.depthTexture).__webglTexture,Z=Rt(x);if(x.depthTexture.format===On)ft(x)?l.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,s.DEPTH_ATTACHMENT,s.TEXTURE_2D,J,0,Z):s.framebufferTexture2D(s.FRAMEBUFFER,s.DEPTH_ATTACHMENT,s.TEXTURE_2D,J,0);else if(x.depthTexture.format===hi)ft(x)?l.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,s.DEPTH_STENCIL_ATTACHMENT,s.TEXTURE_2D,J,0,Z):s.framebufferTexture2D(s.FRAMEBUFFER,s.DEPTH_STENCIL_ATTACHMENT,s.TEXTURE_2D,J,0);else throw new Error("Unknown depthTexture format")}function Et(T){const x=n.get(T),F=T.isWebGLCubeRenderTarget===!0;if(T.depthTexture&&!x.__autoAllocateDepthBuffer){if(F)throw new Error("target.depthTexture not supported in Cube render targets");Dt(x.__webglFramebuffer,T)}else if(F){x.__webglDepthbuffer=[];for(let J=0;J<6;J++)e.bindFramebuffer(s.FRAMEBUFFER,x.__webglFramebuffer[J]),x.__webglDepthbuffer[J]=s.createRenderbuffer(),Pt(x.__webglDepthbuffer[J],T,!1)}else e.bindFramebuffer(s.FRAMEBUFFER,x.__webglFramebuffer),x.__webglDepthbuffer=s.createRenderbuffer(),Pt(x.__webglDepthbuffer,T,!1);e.bindFramebuffer(s.FRAMEBUFFER,null)}function Ht(T,x,F){const J=n.get(T);x!==void 0&&gt(J.__webglFramebuffer,T,T.texture,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,0),F!==void 0&&Et(T)}function U(T){const x=T.texture,F=n.get(T),J=n.get(x);T.addEventListener("dispose",G),T.isWebGLMultipleRenderTargets!==!0&&(J.__webglTexture===void 0&&(J.__webglTexture=s.createTexture()),J.__version=x.version,o.memory.textures++);const Z=T.isWebGLCubeRenderTarget===!0,Q=T.isWebGLMultipleRenderTargets===!0,pt=m(T)||a;if(Z){F.__webglFramebuffer=[];for(let at=0;at<6;at++)if(a&&x.mipmaps&&x.mipmaps.length>0){F.__webglFramebuffer[at]=[];for(let ut=0;ut<x.mipmaps.length;ut++)F.__webglFramebuffer[at][ut]=s.createFramebuffer()}else F.__webglFramebuffer[at]=s.createFramebuffer()}else{if(a&&x.mipmaps&&x.mipmaps.length>0){F.__webglFramebuffer=[];for(let at=0;at<x.mipmaps.length;at++)F.__webglFramebuffer[at]=s.createFramebuffer()}else F.__webglFramebuffer=s.createFramebuffer();if(Q)if(i.drawBuffers){const at=T.texture;for(let ut=0,Tt=at.length;ut<Tt;ut++){const Ot=n.get(at[ut]);Ot.__webglTexture===void 0&&(Ot.__webglTexture=s.createTexture(),o.memory.textures++)}}else console.warn("THREE.WebGLRenderer: WebGLMultipleRenderTargets can only be used with WebGL2 or WEBGL_draw_buffers extension.");if(a&&T.samples>0&&ft(T)===!1){const at=Q?x:[x];F.__webglMultisampledFramebuffer=s.createFramebuffer(),F.__webglColorRenderbuffer=[],e.bindFramebuffer(s.FRAMEBUFFER,F.__webglMultisampledFramebuffer);for(let ut=0;ut<at.length;ut++){const Tt=at[ut];F.__webglColorRenderbuffer[ut]=s.createRenderbuffer(),s.bindRenderbuffer(s.RENDERBUFFER,F.__webglColorRenderbuffer[ut]);const Ot=r.convert(Tt.format,Tt.colorSpace),$=r.convert(Tt.type),Xt=S(Tt.internalFormat,Ot,$,Tt.colorSpace,T.isXRRenderTarget===!0),Vt=Rt(T);s.renderbufferStorageMultisample(s.RENDERBUFFER,Vt,Xt,T.width,T.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+ut,s.RENDERBUFFER,F.__webglColorRenderbuffer[ut])}s.bindRenderbuffer(s.RENDERBUFFER,null),T.depthBuffer&&(F.__webglDepthRenderbuffer=s.createRenderbuffer(),Pt(F.__webglDepthRenderbuffer,T,!0)),e.bindFramebuffer(s.FRAMEBUFFER,null)}}if(Z){e.bindTexture(s.TEXTURE_CUBE_MAP,J.__webglTexture),H(s.TEXTURE_CUBE_MAP,x,pt);for(let at=0;at<6;at++)if(a&&x.mipmaps&&x.mipmaps.length>0)for(let ut=0;ut<x.mipmaps.length;ut++)gt(F.__webglFramebuffer[at][ut],T,x,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+at,ut);else gt(F.__webglFramebuffer[at],T,x,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+at,0);E(x,pt)&&v(s.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(Q){const at=T.texture;for(let ut=0,Tt=at.length;ut<Tt;ut++){const Ot=at[ut],$=n.get(Ot);e.bindTexture(s.TEXTURE_2D,$.__webglTexture),H(s.TEXTURE_2D,Ot,pt),gt(F.__webglFramebuffer,T,Ot,s.COLOR_ATTACHMENT0+ut,s.TEXTURE_2D,0),E(Ot,pt)&&v(s.TEXTURE_2D)}e.unbindTexture()}else{let at=s.TEXTURE_2D;if((T.isWebGL3DRenderTarget||T.isWebGLArrayRenderTarget)&&(a?at=T.isWebGL3DRenderTarget?s.TEXTURE_3D:s.TEXTURE_2D_ARRAY:console.error("THREE.WebGLTextures: THREE.Data3DTexture and THREE.DataArrayTexture only supported with WebGL2.")),e.bindTexture(at,J.__webglTexture),H(at,x,pt),a&&x.mipmaps&&x.mipmaps.length>0)for(let ut=0;ut<x.mipmaps.length;ut++)gt(F.__webglFramebuffer[ut],T,x,s.COLOR_ATTACHMENT0,at,ut);else gt(F.__webglFramebuffer,T,x,s.COLOR_ATTACHMENT0,at,0);E(x,pt)&&v(at),e.unbindTexture()}T.depthBuffer&&Et(T)}function Te(T){const x=m(T)||a,F=T.isWebGLMultipleRenderTargets===!0?T.texture:[T.texture];for(let J=0,Z=F.length;J<Z;J++){const Q=F[J];if(E(Q,x)){const pt=T.isWebGLCubeRenderTarget?s.TEXTURE_CUBE_MAP:s.TEXTURE_2D,at=n.get(Q).__webglTexture;e.bindTexture(pt,at),v(pt),e.unbindTexture()}}}function xt(T){if(a&&T.samples>0&&ft(T)===!1){const x=T.isWebGLMultipleRenderTargets?T.texture:[T.texture],F=T.width,J=T.height;let Z=s.COLOR_BUFFER_BIT;const Q=[],pt=T.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,at=n.get(T),ut=T.isWebGLMultipleRenderTargets===!0;if(ut)for(let Tt=0;Tt<x.length;Tt++)e.bindFramebuffer(s.FRAMEBUFFER,at.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+Tt,s.RENDERBUFFER,null),e.bindFramebuffer(s.FRAMEBUFFER,at.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+Tt,s.TEXTURE_2D,null,0);e.bindFramebuffer(s.READ_FRAMEBUFFER,at.__webglMultisampledFramebuffer),e.bindFramebuffer(s.DRAW_FRAMEBUFFER,at.__webglFramebuffer);for(let Tt=0;Tt<x.length;Tt++){Q.push(s.COLOR_ATTACHMENT0+Tt),T.depthBuffer&&Q.push(pt);const Ot=at.__ignoreDepthValues!==void 0?at.__ignoreDepthValues:!1;if(Ot===!1&&(T.depthBuffer&&(Z|=s.DEPTH_BUFFER_BIT),T.stencilBuffer&&(Z|=s.STENCIL_BUFFER_BIT)),ut&&s.framebufferRenderbuffer(s.READ_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.RENDERBUFFER,at.__webglColorRenderbuffer[Tt]),Ot===!0&&(s.invalidateFramebuffer(s.READ_FRAMEBUFFER,[pt]),s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,[pt])),ut){const $=n.get(x[Tt]).__webglTexture;s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,$,0)}s.blitFramebuffer(0,0,F,J,0,0,F,J,Z,s.NEAREST),c&&s.invalidateFramebuffer(s.READ_FRAMEBUFFER,Q)}if(e.bindFramebuffer(s.READ_FRAMEBUFFER,null),e.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),ut)for(let Tt=0;Tt<x.length;Tt++){e.bindFramebuffer(s.FRAMEBUFFER,at.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+Tt,s.RENDERBUFFER,at.__webglColorRenderbuffer[Tt]);const Ot=n.get(x[Tt]).__webglTexture;e.bindFramebuffer(s.FRAMEBUFFER,at.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+Tt,s.TEXTURE_2D,Ot,0)}e.bindFramebuffer(s.DRAW_FRAMEBUFFER,at.__webglMultisampledFramebuffer)}}function Rt(T){return Math.min(i.maxSamples,T.samples)}function ft(T){const x=n.get(T);return a&&T.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&x.__useRenderToTexture!==!1}function te(T){const x=o.render.frame;h.get(T)!==x&&(h.set(T,x),T.update())}function Ft(T,x){const F=T.colorSpace,J=T.format,Z=T.type;return T.isCompressedTexture===!0||T.isVideoTexture===!0||T.format===ur||F!==fn&&F!==We&&(qt.getTransfer(F)===Zt?a===!1?t.has("EXT_sRGB")===!0&&J===$e?(T.format=ur,T.minFilter=He,T.generateMipmaps=!1):x=Po.sRGBToLinear(x):(J!==$e||Z!==Tn)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",F)),x}this.allocateTextureUnit=L,this.resetTextureUnits=q,this.setTexture2D=V,this.setTexture2DArray=X,this.setTexture3D=W,this.setTextureCube=Y,this.rebindTextures=Ht,this.setupRenderTarget=U,this.updateRenderTargetMipmap=Te,this.updateMultisampleRenderTarget=xt,this.setupDepthRenderbuffer=Et,this.setupFrameBufferTexture=gt,this.useMultisampledRTT=ft}function pp(s,t,e){const n=e.isWebGL2;function i(r,o=We){let a;const l=qt.getTransfer(o);if(r===Tn)return s.UNSIGNED_BYTE;if(r===Mo)return s.UNSIGNED_SHORT_4_4_4_4;if(r===yo)return s.UNSIGNED_SHORT_5_5_5_1;if(r===Ol)return s.BYTE;if(r===Bl)return s.SHORT;if(r===vr)return s.UNSIGNED_SHORT;if(r===xo)return s.INT;if(r===Mn)return s.UNSIGNED_INT;if(r===yn)return s.FLOAT;if(r===dn)return n?s.HALF_FLOAT:(a=t.get("OES_texture_half_float"),a!==null?a.HALF_FLOAT_OES:null);if(r===zl)return s.ALPHA;if(r===$e)return s.RGBA;if(r===kl)return s.LUMINANCE;if(r===Gl)return s.LUMINANCE_ALPHA;if(r===On)return s.DEPTH_COMPONENT;if(r===hi)return s.DEPTH_STENCIL;if(r===ur)return a=t.get("EXT_sRGB"),a!==null?a.SRGB_ALPHA_EXT:null;if(r===Vl)return s.RED;if(r===So)return s.RED_INTEGER;if(r===Hl)return s.RG;if(r===To)return s.RG_INTEGER;if(r===Eo)return s.RGBA_INTEGER;if(r===Rs||r===Cs||r===Ps||r===Ls)if(l===Zt)if(a=t.get("WEBGL_compressed_texture_s3tc_srgb"),a!==null){if(r===Rs)return a.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(r===Cs)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(r===Ps)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(r===Ls)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(a=t.get("WEBGL_compressed_texture_s3tc"),a!==null){if(r===Rs)return a.COMPRESSED_RGB_S3TC_DXT1_EXT;if(r===Cs)return a.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(r===Ps)return a.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(r===Ls)return a.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(r===Br||r===zr||r===kr||r===Gr)if(a=t.get("WEBGL_compressed_texture_pvrtc"),a!==null){if(r===Br)return a.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(r===zr)return a.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(r===kr)return a.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(r===Gr)return a.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(r===bo)return a=t.get("WEBGL_compressed_texture_etc1"),a!==null?a.COMPRESSED_RGB_ETC1_WEBGL:null;if(r===Vr||r===Hr)if(a=t.get("WEBGL_compressed_texture_etc"),a!==null){if(r===Vr)return l===Zt?a.COMPRESSED_SRGB8_ETC2:a.COMPRESSED_RGB8_ETC2;if(r===Hr)return l===Zt?a.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:a.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(r===Wr||r===Xr||r===qr||r===Yr||r===Kr||r===jr||r===$r||r===Zr||r===Jr||r===Qr||r===ta||r===ea||r===na||r===ia)if(a=t.get("WEBGL_compressed_texture_astc"),a!==null){if(r===Wr)return l===Zt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:a.COMPRESSED_RGBA_ASTC_4x4_KHR;if(r===Xr)return l===Zt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:a.COMPRESSED_RGBA_ASTC_5x4_KHR;if(r===qr)return l===Zt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:a.COMPRESSED_RGBA_ASTC_5x5_KHR;if(r===Yr)return l===Zt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:a.COMPRESSED_RGBA_ASTC_6x5_KHR;if(r===Kr)return l===Zt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:a.COMPRESSED_RGBA_ASTC_6x6_KHR;if(r===jr)return l===Zt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:a.COMPRESSED_RGBA_ASTC_8x5_KHR;if(r===$r)return l===Zt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:a.COMPRESSED_RGBA_ASTC_8x6_KHR;if(r===Zr)return l===Zt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:a.COMPRESSED_RGBA_ASTC_8x8_KHR;if(r===Jr)return l===Zt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:a.COMPRESSED_RGBA_ASTC_10x5_KHR;if(r===Qr)return l===Zt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:a.COMPRESSED_RGBA_ASTC_10x6_KHR;if(r===ta)return l===Zt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:a.COMPRESSED_RGBA_ASTC_10x8_KHR;if(r===ea)return l===Zt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:a.COMPRESSED_RGBA_ASTC_10x10_KHR;if(r===na)return l===Zt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:a.COMPRESSED_RGBA_ASTC_12x10_KHR;if(r===ia)return l===Zt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:a.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(r===Ds||r===sa||r===ra)if(a=t.get("EXT_texture_compression_bptc"),a!==null){if(r===Ds)return l===Zt?a.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:a.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(r===sa)return a.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(r===ra)return a.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(r===Wl||r===aa||r===oa||r===la)if(a=t.get("EXT_texture_compression_rgtc"),a!==null){if(r===Ds)return a.COMPRESSED_RED_RGTC1_EXT;if(r===aa)return a.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(r===oa)return a.COMPRESSED_RED_GREEN_RGTC2_EXT;if(r===la)return a.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return r===Fn?n?s.UNSIGNED_INT_24_8:(a=t.get("WEBGL_depth_texture"),a!==null?a.UNSIGNED_INT_24_8_WEBGL:null):s[r]!==void 0?s[r]:null}return{convert:i}}class mp extends Le{constructor(t=[]){super(),this.isArrayCamera=!0,this.cameras=t}}class Me extends pe{constructor(){super(),this.isGroup=!0,this.type="Group"}}const gp={type:"move"};class er{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Me,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Me,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new R,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new R),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Me,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new R,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new R),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){const e=this._hand;if(e)for(const n of t.hand.values())this._getHandJoint(e,n)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,n){let i=null,r=null,o=null;const a=this._targetRay,l=this._grip,c=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(c&&t.hand){o=!0;for(const _ of t.hand.values()){const m=e.getJointPose(_,n),f=this._getHandJoint(c,_);m!==null&&(f.matrix.fromArray(m.transform.matrix),f.matrix.decompose(f.position,f.rotation,f.scale),f.matrixWorldNeedsUpdate=!0,f.jointRadius=m.radius),f.visible=m!==null}const h=c.joints["index-finger-tip"],u=c.joints["thumb-tip"],d=h.position.distanceTo(u.position),p=.02,g=.005;c.inputState.pinching&&d>p+g?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!c.inputState.pinching&&d<=p-g&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else l!==null&&t.gripSpace&&(r=e.getPose(t.gripSpace,n),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1));a!==null&&(i=e.getPose(t.targetRaySpace,n),i===null&&r!==null&&(i=r),i!==null&&(a.matrix.fromArray(i.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,i.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(i.linearVelocity)):a.hasLinearVelocity=!1,i.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(i.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(gp)))}return a!==null&&(a.visible=i!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=o!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){const n=new Me;n.matrixAutoUpdate=!1,n.visible=!1,t.joints[e.jointName]=n,t.add(n)}return t.joints[e.jointName]}}class _p extends pi{constructor(t,e){super();const n=this;let i=null,r=1,o=null,a="local-floor",l=1,c=null,h=null,u=null,d=null,p=null,g=null;const _=e.getContextAttributes();let m=null,f=null;const E=[],v=[],S=new ht;let P=null;const w=new Le;w.layers.enable(1),w.viewport=new Qt;const A=new Le;A.layers.enable(2),A.viewport=new Qt;const G=[w,A],M=new mp;M.layers.enable(1),M.layers.enable(2);let b=null,B=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(H){let j=E[H];return j===void 0&&(j=new er,E[H]=j),j.getTargetRaySpace()},this.getControllerGrip=function(H){let j=E[H];return j===void 0&&(j=new er,E[H]=j),j.getGripSpace()},this.getHand=function(H){let j=E[H];return j===void 0&&(j=new er,E[H]=j),j.getHandSpace()};function k(H){const j=v.indexOf(H.inputSource);if(j===-1)return;const lt=E[j];lt!==void 0&&(lt.update(H.inputSource,H.frame,c||o),lt.dispatchEvent({type:H.type,data:H.inputSource}))}function q(){i.removeEventListener("select",k),i.removeEventListener("selectstart",k),i.removeEventListener("selectend",k),i.removeEventListener("squeeze",k),i.removeEventListener("squeezestart",k),i.removeEventListener("squeezeend",k),i.removeEventListener("end",q),i.removeEventListener("inputsourceschange",L);for(let H=0;H<E.length;H++){const j=v[H];j!==null&&(v[H]=null,E[H].disconnect(j))}b=null,B=null,t.setRenderTarget(m),p=null,d=null,u=null,i=null,f=null,et.stop(),n.isPresenting=!1,t.setPixelRatio(P),t.setSize(S.width,S.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(H){r=H,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(H){a=H,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||o},this.setReferenceSpace=function(H){c=H},this.getBaseLayer=function(){return d!==null?d:p},this.getBinding=function(){return u},this.getFrame=function(){return g},this.getSession=function(){return i},this.setSession=async function(H){if(i=H,i!==null){if(m=t.getRenderTarget(),i.addEventListener("select",k),i.addEventListener("selectstart",k),i.addEventListener("selectend",k),i.addEventListener("squeeze",k),i.addEventListener("squeezestart",k),i.addEventListener("squeezeend",k),i.addEventListener("end",q),i.addEventListener("inputsourceschange",L),_.xrCompatible!==!0&&await e.makeXRCompatible(),P=t.getPixelRatio(),t.getSize(S),i.renderState.layers===void 0||t.capabilities.isWebGL2===!1){const j={antialias:i.renderState.layers===void 0?_.antialias:!0,alpha:!0,depth:_.depth,stencil:_.stencil,framebufferScaleFactor:r};p=new XRWebGLLayer(i,e,j),i.updateRenderState({baseLayer:p}),t.setPixelRatio(1),t.setSize(p.framebufferWidth,p.framebufferHeight,!1),f=new Ze(p.framebufferWidth,p.framebufferHeight,{format:$e,type:Tn,colorSpace:t.outputColorSpace,stencilBuffer:_.stencil})}else{let j=null,lt=null,_t=null;_.depth&&(_t=_.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,j=_.stencil?hi:On,lt=_.stencil?Fn:Mn);const gt={colorFormat:e.RGBA8,depthFormat:_t,scaleFactor:r};u=new XRWebGLBinding(i,e),d=u.createProjectionLayer(gt),i.updateRenderState({layers:[d]}),t.setPixelRatio(1),t.setSize(d.textureWidth,d.textureHeight,!1),f=new Ze(d.textureWidth,d.textureHeight,{format:$e,type:Tn,depthTexture:new Go(d.textureWidth,d.textureHeight,lt,void 0,void 0,void 0,void 0,void 0,void 0,j),stencilBuffer:_.stencil,colorSpace:t.outputColorSpace,samples:_.antialias?4:0});const Pt=t.properties.get(f);Pt.__ignoreDepthValues=d.ignoreDepthValues}f.isXRRenderTarget=!0,this.setFoveation(l),c=null,o=await i.requestReferenceSpace(a),et.setContext(i),et.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(i!==null)return i.environmentBlendMode};function L(H){for(let j=0;j<H.removed.length;j++){const lt=H.removed[j],_t=v.indexOf(lt);_t>=0&&(v[_t]=null,E[_t].disconnect(lt))}for(let j=0;j<H.added.length;j++){const lt=H.added[j];let _t=v.indexOf(lt);if(_t===-1){for(let Pt=0;Pt<E.length;Pt++)if(Pt>=v.length){v.push(lt),_t=Pt;break}else if(v[Pt]===null){v[Pt]=lt,_t=Pt;break}if(_t===-1)break}const gt=E[_t];gt&&gt.connect(lt)}}const I=new R,V=new R;function X(H,j,lt){I.setFromMatrixPosition(j.matrixWorld),V.setFromMatrixPosition(lt.matrixWorld);const _t=I.distanceTo(V),gt=j.projectionMatrix.elements,Pt=lt.projectionMatrix.elements,Dt=gt[14]/(gt[10]-1),Et=gt[14]/(gt[10]+1),Ht=(gt[9]+1)/gt[5],U=(gt[9]-1)/gt[5],Te=(gt[8]-1)/gt[0],xt=(Pt[8]+1)/Pt[0],Rt=Dt*Te,ft=Dt*xt,te=_t/(-Te+xt),Ft=te*-Te;j.matrixWorld.decompose(H.position,H.quaternion,H.scale),H.translateX(Ft),H.translateZ(te),H.matrixWorld.compose(H.position,H.quaternion,H.scale),H.matrixWorldInverse.copy(H.matrixWorld).invert();const T=Dt+te,x=Et+te,F=Rt-Ft,J=ft+(_t-Ft),Z=Ht*Et/x*T,Q=U*Et/x*T;H.projectionMatrix.makePerspective(F,J,Z,Q,T,x),H.projectionMatrixInverse.copy(H.projectionMatrix).invert()}function W(H,j){j===null?H.matrixWorld.copy(H.matrix):H.matrixWorld.multiplyMatrices(j.matrixWorld,H.matrix),H.matrixWorldInverse.copy(H.matrixWorld).invert()}this.updateCamera=function(H){if(i===null)return;M.near=A.near=w.near=H.near,M.far=A.far=w.far=H.far,(b!==M.near||B!==M.far)&&(i.updateRenderState({depthNear:M.near,depthFar:M.far}),b=M.near,B=M.far);const j=H.parent,lt=M.cameras;W(M,j);for(let _t=0;_t<lt.length;_t++)W(lt[_t],j);lt.length===2?X(M,w,A):M.projectionMatrix.copy(w.projectionMatrix),Y(H,M,j)};function Y(H,j,lt){lt===null?H.matrix.copy(j.matrixWorld):(H.matrix.copy(lt.matrixWorld),H.matrix.invert(),H.matrix.multiply(j.matrixWorld)),H.matrix.decompose(H.position,H.quaternion,H.scale),H.updateMatrixWorld(!0),H.projectionMatrix.copy(j.projectionMatrix),H.projectionMatrixInverse.copy(j.projectionMatrixInverse),H.isPerspectiveCamera&&(H.fov=ui*2*Math.atan(1/H.projectionMatrix.elements[5]),H.zoom=1)}this.getCamera=function(){return M},this.getFoveation=function(){if(!(d===null&&p===null))return l},this.setFoveation=function(H){l=H,d!==null&&(d.fixedFoveation=H),p!==null&&p.fixedFoveation!==void 0&&(p.fixedFoveation=H)};let K=null;function tt(H,j){if(h=j.getViewerPose(c||o),g=j,h!==null){const lt=h.views;p!==null&&(t.setRenderTargetFramebuffer(f,p.framebuffer),t.setRenderTarget(f));let _t=!1;lt.length!==M.cameras.length&&(M.cameras.length=0,_t=!0);for(let gt=0;gt<lt.length;gt++){const Pt=lt[gt];let Dt=null;if(p!==null)Dt=p.getViewport(Pt);else{const Ht=u.getViewSubImage(d,Pt);Dt=Ht.viewport,gt===0&&(t.setRenderTargetTextures(f,Ht.colorTexture,d.ignoreDepthValues?void 0:Ht.depthStencilTexture),t.setRenderTarget(f))}let Et=G[gt];Et===void 0&&(Et=new Le,Et.layers.enable(gt),Et.viewport=new Qt,G[gt]=Et),Et.matrix.fromArray(Pt.transform.matrix),Et.matrix.decompose(Et.position,Et.quaternion,Et.scale),Et.projectionMatrix.fromArray(Pt.projectionMatrix),Et.projectionMatrixInverse.copy(Et.projectionMatrix).invert(),Et.viewport.set(Dt.x,Dt.y,Dt.width,Dt.height),gt===0&&(M.matrix.copy(Et.matrix),M.matrix.decompose(M.position,M.quaternion,M.scale)),_t===!0&&M.cameras.push(Et)}}for(let lt=0;lt<E.length;lt++){const _t=v[lt],gt=E[lt];_t!==null&&gt!==void 0&&gt.update(_t,j,c||o)}K&&K(H,j),j.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:j}),g=null}const et=new zo;et.setAnimationLoop(tt),this.setAnimationLoop=function(H){K=H},this.dispose=function(){}}}function vp(s,t){function e(m,f){m.matrixAutoUpdate===!0&&m.updateMatrix(),f.value.copy(m.matrix)}function n(m,f){f.color.getRGB(m.fogColor.value,Fo(s)),f.isFog?(m.fogNear.value=f.near,m.fogFar.value=f.far):f.isFogExp2&&(m.fogDensity.value=f.density)}function i(m,f,E,v,S){f.isMeshBasicMaterial||f.isMeshLambertMaterial?r(m,f):f.isMeshToonMaterial?(r(m,f),u(m,f)):f.isMeshPhongMaterial?(r(m,f),h(m,f)):f.isMeshStandardMaterial?(r(m,f),d(m,f),f.isMeshPhysicalMaterial&&p(m,f,S)):f.isMeshMatcapMaterial?(r(m,f),g(m,f)):f.isMeshDepthMaterial?r(m,f):f.isMeshDistanceMaterial?(r(m,f),_(m,f)):f.isMeshNormalMaterial?r(m,f):f.isLineBasicMaterial?(o(m,f),f.isLineDashedMaterial&&a(m,f)):f.isPointsMaterial?l(m,f,E,v):f.isSpriteMaterial?c(m,f):f.isShadowMaterial?(m.color.value.copy(f.color),m.opacity.value=f.opacity):f.isShaderMaterial&&(f.uniformsNeedUpdate=!1)}function r(m,f){m.opacity.value=f.opacity,f.color&&m.diffuse.value.copy(f.color),f.emissive&&m.emissive.value.copy(f.emissive).multiplyScalar(f.emissiveIntensity),f.map&&(m.map.value=f.map,e(f.map,m.mapTransform)),f.alphaMap&&(m.alphaMap.value=f.alphaMap,e(f.alphaMap,m.alphaMapTransform)),f.bumpMap&&(m.bumpMap.value=f.bumpMap,e(f.bumpMap,m.bumpMapTransform),m.bumpScale.value=f.bumpScale,f.side===De&&(m.bumpScale.value*=-1)),f.normalMap&&(m.normalMap.value=f.normalMap,e(f.normalMap,m.normalMapTransform),m.normalScale.value.copy(f.normalScale),f.side===De&&m.normalScale.value.negate()),f.displacementMap&&(m.displacementMap.value=f.displacementMap,e(f.displacementMap,m.displacementMapTransform),m.displacementScale.value=f.displacementScale,m.displacementBias.value=f.displacementBias),f.emissiveMap&&(m.emissiveMap.value=f.emissiveMap,e(f.emissiveMap,m.emissiveMapTransform)),f.specularMap&&(m.specularMap.value=f.specularMap,e(f.specularMap,m.specularMapTransform)),f.alphaTest>0&&(m.alphaTest.value=f.alphaTest);const E=t.get(f).envMap;if(E&&(m.envMap.value=E,m.flipEnvMap.value=E.isCubeTexture&&E.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=f.reflectivity,m.ior.value=f.ior,m.refractionRatio.value=f.refractionRatio),f.lightMap){m.lightMap.value=f.lightMap;const v=s._useLegacyLights===!0?Math.PI:1;m.lightMapIntensity.value=f.lightMapIntensity*v,e(f.lightMap,m.lightMapTransform)}f.aoMap&&(m.aoMap.value=f.aoMap,m.aoMapIntensity.value=f.aoMapIntensity,e(f.aoMap,m.aoMapTransform))}function o(m,f){m.diffuse.value.copy(f.color),m.opacity.value=f.opacity,f.map&&(m.map.value=f.map,e(f.map,m.mapTransform))}function a(m,f){m.dashSize.value=f.dashSize,m.totalSize.value=f.dashSize+f.gapSize,m.scale.value=f.scale}function l(m,f,E,v){m.diffuse.value.copy(f.color),m.opacity.value=f.opacity,m.size.value=f.size*E,m.scale.value=v*.5,f.map&&(m.map.value=f.map,e(f.map,m.uvTransform)),f.alphaMap&&(m.alphaMap.value=f.alphaMap,e(f.alphaMap,m.alphaMapTransform)),f.alphaTest>0&&(m.alphaTest.value=f.alphaTest)}function c(m,f){m.diffuse.value.copy(f.color),m.opacity.value=f.opacity,m.rotation.value=f.rotation,f.map&&(m.map.value=f.map,e(f.map,m.mapTransform)),f.alphaMap&&(m.alphaMap.value=f.alphaMap,e(f.alphaMap,m.alphaMapTransform)),f.alphaTest>0&&(m.alphaTest.value=f.alphaTest)}function h(m,f){m.specular.value.copy(f.specular),m.shininess.value=Math.max(f.shininess,1e-4)}function u(m,f){f.gradientMap&&(m.gradientMap.value=f.gradientMap)}function d(m,f){m.metalness.value=f.metalness,f.metalnessMap&&(m.metalnessMap.value=f.metalnessMap,e(f.metalnessMap,m.metalnessMapTransform)),m.roughness.value=f.roughness,f.roughnessMap&&(m.roughnessMap.value=f.roughnessMap,e(f.roughnessMap,m.roughnessMapTransform)),t.get(f).envMap&&(m.envMapIntensity.value=f.envMapIntensity)}function p(m,f,E){m.ior.value=f.ior,f.sheen>0&&(m.sheenColor.value.copy(f.sheenColor).multiplyScalar(f.sheen),m.sheenRoughness.value=f.sheenRoughness,f.sheenColorMap&&(m.sheenColorMap.value=f.sheenColorMap,e(f.sheenColorMap,m.sheenColorMapTransform)),f.sheenRoughnessMap&&(m.sheenRoughnessMap.value=f.sheenRoughnessMap,e(f.sheenRoughnessMap,m.sheenRoughnessMapTransform))),f.clearcoat>0&&(m.clearcoat.value=f.clearcoat,m.clearcoatRoughness.value=f.clearcoatRoughness,f.clearcoatMap&&(m.clearcoatMap.value=f.clearcoatMap,e(f.clearcoatMap,m.clearcoatMapTransform)),f.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=f.clearcoatRoughnessMap,e(f.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),f.clearcoatNormalMap&&(m.clearcoatNormalMap.value=f.clearcoatNormalMap,e(f.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(f.clearcoatNormalScale),f.side===De&&m.clearcoatNormalScale.value.negate())),f.iridescence>0&&(m.iridescence.value=f.iridescence,m.iridescenceIOR.value=f.iridescenceIOR,m.iridescenceThicknessMinimum.value=f.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=f.iridescenceThicknessRange[1],f.iridescenceMap&&(m.iridescenceMap.value=f.iridescenceMap,e(f.iridescenceMap,m.iridescenceMapTransform)),f.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=f.iridescenceThicknessMap,e(f.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),f.transmission>0&&(m.transmission.value=f.transmission,m.transmissionSamplerMap.value=E.texture,m.transmissionSamplerSize.value.set(E.width,E.height),f.transmissionMap&&(m.transmissionMap.value=f.transmissionMap,e(f.transmissionMap,m.transmissionMapTransform)),m.thickness.value=f.thickness,f.thicknessMap&&(m.thicknessMap.value=f.thicknessMap,e(f.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=f.attenuationDistance,m.attenuationColor.value.copy(f.attenuationColor)),f.anisotropy>0&&(m.anisotropyVector.value.set(f.anisotropy*Math.cos(f.anisotropyRotation),f.anisotropy*Math.sin(f.anisotropyRotation)),f.anisotropyMap&&(m.anisotropyMap.value=f.anisotropyMap,e(f.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=f.specularIntensity,m.specularColor.value.copy(f.specularColor),f.specularColorMap&&(m.specularColorMap.value=f.specularColorMap,e(f.specularColorMap,m.specularColorMapTransform)),f.specularIntensityMap&&(m.specularIntensityMap.value=f.specularIntensityMap,e(f.specularIntensityMap,m.specularIntensityMapTransform))}function g(m,f){f.matcap&&(m.matcap.value=f.matcap)}function _(m,f){const E=t.get(f).light;m.referencePosition.value.setFromMatrixPosition(E.matrixWorld),m.nearDistance.value=E.shadow.camera.near,m.farDistance.value=E.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:i}}function xp(s,t,e,n){let i={},r={},o=[];const a=e.isWebGL2?s.getParameter(s.MAX_UNIFORM_BUFFER_BINDINGS):0;function l(E,v){const S=v.program;n.uniformBlockBinding(E,S)}function c(E,v){let S=i[E.id];S===void 0&&(g(E),S=h(E),i[E.id]=S,E.addEventListener("dispose",m));const P=v.program;n.updateUBOMapping(E,P);const w=t.render.frame;r[E.id]!==w&&(d(E),r[E.id]=w)}function h(E){const v=u();E.__bindingPointIndex=v;const S=s.createBuffer(),P=E.__size,w=E.usage;return s.bindBuffer(s.UNIFORM_BUFFER,S),s.bufferData(s.UNIFORM_BUFFER,P,w),s.bindBuffer(s.UNIFORM_BUFFER,null),s.bindBufferBase(s.UNIFORM_BUFFER,v,S),S}function u(){for(let E=0;E<a;E++)if(o.indexOf(E)===-1)return o.push(E),E;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function d(E){const v=i[E.id],S=E.uniforms,P=E.__cache;s.bindBuffer(s.UNIFORM_BUFFER,v);for(let w=0,A=S.length;w<A;w++){const G=Array.isArray(S[w])?S[w]:[S[w]];for(let M=0,b=G.length;M<b;M++){const B=G[M];if(p(B,w,M,P)===!0){const k=B.__offset,q=Array.isArray(B.value)?B.value:[B.value];let L=0;for(let I=0;I<q.length;I++){const V=q[I],X=_(V);typeof V=="number"||typeof V=="boolean"?(B.__data[0]=V,s.bufferSubData(s.UNIFORM_BUFFER,k+L,B.__data)):V.isMatrix3?(B.__data[0]=V.elements[0],B.__data[1]=V.elements[1],B.__data[2]=V.elements[2],B.__data[3]=0,B.__data[4]=V.elements[3],B.__data[5]=V.elements[4],B.__data[6]=V.elements[5],B.__data[7]=0,B.__data[8]=V.elements[6],B.__data[9]=V.elements[7],B.__data[10]=V.elements[8],B.__data[11]=0):(V.toArray(B.__data,L),L+=X.storage/Float32Array.BYTES_PER_ELEMENT)}s.bufferSubData(s.UNIFORM_BUFFER,k,B.__data)}}}s.bindBuffer(s.UNIFORM_BUFFER,null)}function p(E,v,S,P){const w=E.value,A=v+"_"+S;if(P[A]===void 0)return typeof w=="number"||typeof w=="boolean"?P[A]=w:P[A]=w.clone(),!0;{const G=P[A];if(typeof w=="number"||typeof w=="boolean"){if(G!==w)return P[A]=w,!0}else if(G.equals(w)===!1)return G.copy(w),!0}return!1}function g(E){const v=E.uniforms;let S=0;const P=16;for(let A=0,G=v.length;A<G;A++){const M=Array.isArray(v[A])?v[A]:[v[A]];for(let b=0,B=M.length;b<B;b++){const k=M[b],q=Array.isArray(k.value)?k.value:[k.value];for(let L=0,I=q.length;L<I;L++){const V=q[L],X=_(V),W=S%P;W!==0&&P-W<X.boundary&&(S+=P-W),k.__data=new Float32Array(X.storage/Float32Array.BYTES_PER_ELEMENT),k.__offset=S,S+=X.storage}}}const w=S%P;return w>0&&(S+=P-w),E.__size=S,E.__cache={},this}function _(E){const v={boundary:0,storage:0};return typeof E=="number"||typeof E=="boolean"?(v.boundary=4,v.storage=4):E.isVector2?(v.boundary=8,v.storage=8):E.isVector3||E.isColor?(v.boundary=16,v.storage=12):E.isVector4?(v.boundary=16,v.storage=16):E.isMatrix3?(v.boundary=48,v.storage=48):E.isMatrix4?(v.boundary=64,v.storage=64):E.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",E),v}function m(E){const v=E.target;v.removeEventListener("dispose",m);const S=o.indexOf(v.__bindingPointIndex);o.splice(S,1),s.deleteBuffer(i[v.id]),delete i[v.id],delete r[v.id]}function f(){for(const E in i)s.deleteBuffer(i[E]);o=[],i={},r={}}return{bind:l,update:c,dispose:f}}class Yo{constructor(t={}){const{canvas:e=mc(),context:n=null,depth:i=!0,stencil:r=!0,alpha:o=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:u=!1}=t;this.isWebGLRenderer=!0;let d;n!==null?d=n.getContextAttributes().alpha:d=o;const p=new Uint32Array(4),g=new Int32Array(4);let _=null,m=null;const f=[],E=[];this.domElement=e,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=Jt,this._useLegacyLights=!1,this.toneMapping=Sn,this.toneMappingExposure=1;const v=this;let S=!1,P=0,w=0,A=null,G=-1,M=null;const b=new Qt,B=new Qt;let k=null;const q=new Nt(0);let L=0,I=e.width,V=e.height,X=1,W=null,Y=null;const K=new Qt(0,0,I,V),tt=new Qt(0,0,I,V);let et=!1;const H=new Sr;let j=!1,lt=!1,_t=null;const gt=new se,Pt=new ht,Dt=new R,Et={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};function Ht(){return A===null?X:1}let U=n;function Te(y,D){for(let O=0;O<y.length;O++){const z=y[O],N=e.getContext(z,D);if(N!==null)return N}return null}try{const y={alpha:!0,depth:i,stencil:r,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:h,failIfMajorPerformanceCaveat:u};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${_r}`),e.addEventListener("webglcontextlost",nt,!1),e.addEventListener("webglcontextrestored",C,!1),e.addEventListener("webglcontextcreationerror",st,!1),U===null){const D=["webgl2","webgl","experimental-webgl"];if(v.isWebGL1Renderer===!0&&D.shift(),U=Te(D,y),U===null)throw Te(D)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}typeof WebGLRenderingContext<"u"&&U instanceof WebGLRenderingContext&&console.warn("THREE.WebGLRenderer: WebGL 1 support was deprecated in r153 and will be removed in r163."),U.getShaderPrecisionFormat===void 0&&(U.getShaderPrecisionFormat=function(){return{rangeMin:1,rangeMax:1,precision:1}})}catch(y){throw console.error("THREE.WebGLRenderer: "+y.message),y}let xt,Rt,ft,te,Ft,T,x,F,J,Z,Q,pt,at,ut,Tt,Ot,$,Xt,Vt,At,vt,dt,It,Wt;function ne(){xt=new Rd(U),Rt=new Sd(U,xt,t),xt.init(Rt),dt=new pp(U,xt,Rt),ft=new dp(U,xt,Rt),te=new Ld(U),Ft=new Jf,T=new fp(U,xt,ft,Ft,Rt,dt,te),x=new Ed(v),F=new Ad(v),J=new zc(U,Rt),It=new Md(U,xt,J,Rt),Z=new Cd(U,J,te,It),Q=new Nd(U,Z,J,te),Vt=new Ud(U,Rt,T),Ot=new Td(Ft),pt=new Zf(v,x,F,xt,Rt,It,Ot),at=new vp(v,Ft),ut=new tp,Tt=new ap(xt,Rt),Xt=new xd(v,x,F,ft,Q,d,l),$=new up(v,Q,Rt),Wt=new xp(U,te,Rt,ft),At=new yd(U,xt,te,Rt),vt=new Pd(U,xt,te,Rt),te.programs=pt.programs,v.capabilities=Rt,v.extensions=xt,v.properties=Ft,v.renderLists=ut,v.shadowMap=$,v.state=ft,v.info=te}ne();const zt=new _p(v,U);this.xr=zt,this.getContext=function(){return U},this.getContextAttributes=function(){return U.getContextAttributes()},this.forceContextLoss=function(){const y=xt.get("WEBGL_lose_context");y&&y.loseContext()},this.forceContextRestore=function(){const y=xt.get("WEBGL_lose_context");y&&y.restoreContext()},this.getPixelRatio=function(){return X},this.setPixelRatio=function(y){y!==void 0&&(X=y,this.setSize(I,V,!1))},this.getSize=function(y){return y.set(I,V)},this.setSize=function(y,D,O=!0){if(zt.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}I=y,V=D,e.width=Math.floor(y*X),e.height=Math.floor(D*X),O===!0&&(e.style.width=y+"px",e.style.height=D+"px"),this.setViewport(0,0,y,D)},this.getDrawingBufferSize=function(y){return y.set(I*X,V*X).floor()},this.setDrawingBufferSize=function(y,D,O){I=y,V=D,X=O,e.width=Math.floor(y*O),e.height=Math.floor(D*O),this.setViewport(0,0,y,D)},this.getCurrentViewport=function(y){return y.copy(b)},this.getViewport=function(y){return y.copy(K)},this.setViewport=function(y,D,O,z){y.isVector4?K.set(y.x,y.y,y.z,y.w):K.set(y,D,O,z),ft.viewport(b.copy(K).multiplyScalar(X).floor())},this.getScissor=function(y){return y.copy(tt)},this.setScissor=function(y,D,O,z){y.isVector4?tt.set(y.x,y.y,y.z,y.w):tt.set(y,D,O,z),ft.scissor(B.copy(tt).multiplyScalar(X).floor())},this.getScissorTest=function(){return et},this.setScissorTest=function(y){ft.setScissorTest(et=y)},this.setOpaqueSort=function(y){W=y},this.setTransparentSort=function(y){Y=y},this.getClearColor=function(y){return y.copy(Xt.getClearColor())},this.setClearColor=function(){Xt.setClearColor.apply(Xt,arguments)},this.getClearAlpha=function(){return Xt.getClearAlpha()},this.setClearAlpha=function(){Xt.setClearAlpha.apply(Xt,arguments)},this.clear=function(y=!0,D=!0,O=!0){let z=0;if(y){let N=!1;if(A!==null){const ct=A.texture.format;N=ct===Eo||ct===To||ct===So}if(N){const ct=A.texture.type,mt=ct===Tn||ct===Mn||ct===vr||ct===Fn||ct===Mo||ct===yo,St=Xt.getClearColor(),wt=Xt.getClearAlpha(),Bt=St.r,Ct=St.g,Lt=St.b;mt?(p[0]=Bt,p[1]=Ct,p[2]=Lt,p[3]=wt,U.clearBufferuiv(U.COLOR,0,p)):(g[0]=Bt,g[1]=Ct,g[2]=Lt,g[3]=wt,U.clearBufferiv(U.COLOR,0,g))}else z|=U.COLOR_BUFFER_BIT}D&&(z|=U.DEPTH_BUFFER_BIT),O&&(z|=U.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),U.clear(z)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){e.removeEventListener("webglcontextlost",nt,!1),e.removeEventListener("webglcontextrestored",C,!1),e.removeEventListener("webglcontextcreationerror",st,!1),ut.dispose(),Tt.dispose(),Ft.dispose(),x.dispose(),F.dispose(),Q.dispose(),It.dispose(),Wt.dispose(),pt.dispose(),zt.dispose(),zt.removeEventListener("sessionstart",Ee),zt.removeEventListener("sessionend",jt),_t&&(_t.dispose(),_t=null),be.stop()};function nt(y){y.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),S=!0}function C(){console.log("THREE.WebGLRenderer: Context Restored."),S=!1;const y=te.autoReset,D=$.enabled,O=$.autoUpdate,z=$.needsUpdate,N=$.type;ne(),te.autoReset=y,$.enabled=D,$.autoUpdate=O,$.needsUpdate=z,$.type=N}function st(y){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",y.statusMessage)}function rt(y){const D=y.target;D.removeEventListener("dispose",rt),bt(D)}function bt(y){Mt(y),Ft.remove(y)}function Mt(y){const D=Ft.get(y).programs;D!==void 0&&(D.forEach(function(O){pt.releaseProgram(O)}),y.isShaderMaterial&&pt.releaseShaderCache(y))}this.renderBufferDirect=function(y,D,O,z,N,ct){D===null&&(D=Et);const mt=N.isMesh&&N.matrixWorld.determinant()<0,St=tl(y,D,O,z,N);ft.setMaterial(z,mt);let wt=O.index,Bt=1;if(z.wireframe===!0){if(wt=Z.getWireframeAttribute(O),wt===void 0)return;Bt=2}const Ct=O.drawRange,Lt=O.attributes.position;let re=Ct.start*Bt,Ue=(Ct.start+Ct.count)*Bt;ct!==null&&(re=Math.max(re,ct.start*Bt),Ue=Math.min(Ue,(ct.start+ct.count)*Bt)),wt!==null?(re=Math.max(re,0),Ue=Math.min(Ue,wt.count)):Lt!=null&&(re=Math.max(re,0),Ue=Math.min(Ue,Lt.count));const ue=Ue-re;if(ue<0||ue===1/0)return;It.setup(N,z,St,O,wt);let en,ee=At;if(wt!==null&&(en=J.get(wt),ee=vt,ee.setIndex(en)),N.isMesh)z.wireframe===!0?(ft.setLineWidth(z.wireframeLinewidth*Ht()),ee.setMode(U.LINES)):ee.setMode(U.TRIANGLES);else if(N.isLine){let kt=z.linewidth;kt===void 0&&(kt=1),ft.setLineWidth(kt*Ht()),N.isLineSegments?ee.setMode(U.LINES):N.isLineLoop?ee.setMode(U.LINE_LOOP):ee.setMode(U.LINE_STRIP)}else N.isPoints?ee.setMode(U.POINTS):N.isSprite&&ee.setMode(U.TRIANGLES);if(N.isBatchedMesh)ee.renderMultiDraw(N._multiDrawStarts,N._multiDrawCounts,N._multiDrawCount);else if(N.isInstancedMesh)ee.renderInstances(re,ue,N.count);else if(O.isInstancedBufferGeometry){const kt=O._maxInstanceCount!==void 0?O._maxInstanceCount:1/0,Ts=Math.min(O.instanceCount,kt);ee.renderInstances(re,ue,Ts)}else ee.render(re,ue)};function Yt(y,D,O){y.transparent===!0&&y.side===fe&&y.forceSinglePass===!1?(y.side=De,y.needsUpdate=!0,Ui(y,D,O),y.side=En,y.needsUpdate=!0,Ui(y,D,O),y.side=fe):Ui(y,D,O)}this.compile=function(y,D,O=null){O===null&&(O=y),m=Tt.get(O),m.init(),E.push(m),O.traverseVisible(function(N){N.isLight&&N.layers.test(D.layers)&&(m.pushLight(N),N.castShadow&&m.pushShadow(N))}),y!==O&&y.traverseVisible(function(N){N.isLight&&N.layers.test(D.layers)&&(m.pushLight(N),N.castShadow&&m.pushShadow(N))}),m.setupLights(v._useLegacyLights);const z=new Set;return y.traverse(function(N){const ct=N.material;if(ct)if(Array.isArray(ct))for(let mt=0;mt<ct.length;mt++){const St=ct[mt];Yt(St,O,N),z.add(St)}else Yt(ct,O,N),z.add(ct)}),E.pop(),m=null,z},this.compileAsync=function(y,D,O=null){const z=this.compile(y,D,O);return new Promise(N=>{function ct(){if(z.forEach(function(mt){Ft.get(mt).currentProgram.isReady()&&z.delete(mt)}),z.size===0){N(y);return}setTimeout(ct,10)}xt.get("KHR_parallel_shader_compile")!==null?ct():setTimeout(ct,10)})};let Kt=null;function he(y){Kt&&Kt(y)}function Ee(){be.stop()}function jt(){be.start()}const be=new zo;be.setAnimationLoop(he),typeof self<"u"&&be.setContext(self),this.setAnimationLoop=function(y){Kt=y,zt.setAnimationLoop(y),y===null?be.stop():be.start()},zt.addEventListener("sessionstart",Ee),zt.addEventListener("sessionend",jt),this.render=function(y,D){if(D!==void 0&&D.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(S===!0)return;y.matrixWorldAutoUpdate===!0&&y.updateMatrixWorld(),D.parent===null&&D.matrixWorldAutoUpdate===!0&&D.updateMatrixWorld(),zt.enabled===!0&&zt.isPresenting===!0&&(zt.cameraAutoUpdate===!0&&zt.updateCamera(D),D=zt.getCamera()),y.isScene===!0&&y.onBeforeRender(v,y,D,A),m=Tt.get(y,E.length),m.init(),E.push(m),gt.multiplyMatrices(D.projectionMatrix,D.matrixWorldInverse),H.setFromProjectionMatrix(gt),lt=this.localClippingEnabled,j=Ot.init(this.clippingPlanes,lt),_=ut.get(y,f.length),_.init(),f.push(_),Qe(y,D,0,v.sortObjects),_.finish(),v.sortObjects===!0&&_.sort(W,Y),this.info.render.frame++,j===!0&&Ot.beginShadows();const O=m.state.shadowsArray;if($.render(O,y,D),j===!0&&Ot.endShadows(),this.info.autoReset===!0&&this.info.reset(),Xt.render(_,y),m.setupLights(v._useLegacyLights),D.isArrayCamera){const z=D.cameras;for(let N=0,ct=z.length;N<ct;N++){const mt=z[N];wr(_,y,mt,mt.viewport)}}else wr(_,y,D);A!==null&&(T.updateMultisampleRenderTarget(A),T.updateRenderTargetMipmap(A)),y.isScene===!0&&y.onAfterRender(v,y,D),It.resetDefaultState(),G=-1,M=null,E.pop(),E.length>0?m=E[E.length-1]:m=null,f.pop(),f.length>0?_=f[f.length-1]:_=null};function Qe(y,D,O,z){if(y.visible===!1)return;if(y.layers.test(D.layers)){if(y.isGroup)O=y.renderOrder;else if(y.isLOD)y.autoUpdate===!0&&y.update(D);else if(y.isLight)m.pushLight(y),y.castShadow&&m.pushShadow(y);else if(y.isSprite){if(!y.frustumCulled||H.intersectsSprite(y)){z&&Dt.setFromMatrixPosition(y.matrixWorld).applyMatrix4(gt);const mt=Q.update(y),St=y.material;St.visible&&_.push(y,mt,St,O,Dt.z,null)}}else if((y.isMesh||y.isLine||y.isPoints)&&(!y.frustumCulled||H.intersectsObject(y))){const mt=Q.update(y),St=y.material;if(z&&(y.boundingSphere!==void 0?(y.boundingSphere===null&&y.computeBoundingSphere(),Dt.copy(y.boundingSphere.center)):(mt.boundingSphere===null&&mt.computeBoundingSphere(),Dt.copy(mt.boundingSphere.center)),Dt.applyMatrix4(y.matrixWorld).applyMatrix4(gt)),Array.isArray(St)){const wt=mt.groups;for(let Bt=0,Ct=wt.length;Bt<Ct;Bt++){const Lt=wt[Bt],re=St[Lt.materialIndex];re&&re.visible&&_.push(y,mt,re,O,Dt.z,Lt)}}else St.visible&&_.push(y,mt,St,O,Dt.z,null)}}const ct=y.children;for(let mt=0,St=ct.length;mt<St;mt++)Qe(ct[mt],D,O,z)}function wr(y,D,O,z){const N=y.opaque,ct=y.transmissive,mt=y.transparent;m.setupLightsView(O),j===!0&&Ot.setGlobalState(v.clippingPlanes,O),ct.length>0&&Qo(N,ct,D,O),z&&ft.viewport(b.copy(z)),N.length>0&&Ii(N,D,O),ct.length>0&&Ii(ct,D,O),mt.length>0&&Ii(mt,D,O),ft.buffers.depth.setTest(!0),ft.buffers.depth.setMask(!0),ft.buffers.color.setMask(!0),ft.setPolygonOffset(!1)}function Qo(y,D,O,z){if((O.isScene===!0?O.overrideMaterial:null)!==null)return;const ct=Rt.isWebGL2;_t===null&&(_t=new Ze(1,1,{generateMipmaps:!0,type:xt.has("EXT_color_buffer_half_float")?dn:Tn,minFilter:Ri,samples:ct?4:0})),v.getDrawingBufferSize(Pt),ct?_t.setSize(Pt.x,Pt.y):_t.setSize(fs(Pt.x),fs(Pt.y));const mt=v.getRenderTarget();v.setRenderTarget(_t),v.getClearColor(q),L=v.getClearAlpha(),L<1&&v.setClearColor(16777215,.5),v.clear();const St=v.toneMapping;v.toneMapping=Sn,Ii(y,O,z),T.updateMultisampleRenderTarget(_t),T.updateRenderTargetMipmap(_t);let wt=!1;for(let Bt=0,Ct=D.length;Bt<Ct;Bt++){const Lt=D[Bt],re=Lt.object,Ue=Lt.geometry,ue=Lt.material,en=Lt.group;if(ue.side===fe&&re.layers.test(z.layers)){const ee=ue.side;ue.side=De,ue.needsUpdate=!0,Ar(re,O,z,Ue,ue,en),ue.side=ee,ue.needsUpdate=!0,wt=!0}}wt===!0&&(T.updateMultisampleRenderTarget(_t),T.updateRenderTargetMipmap(_t)),v.setRenderTarget(mt),v.setClearColor(q,L),v.toneMapping=St}function Ii(y,D,O){const z=D.isScene===!0?D.overrideMaterial:null;for(let N=0,ct=y.length;N<ct;N++){const mt=y[N],St=mt.object,wt=mt.geometry,Bt=z===null?mt.material:z,Ct=mt.group;St.layers.test(O.layers)&&Ar(St,D,O,wt,Bt,Ct)}}function Ar(y,D,O,z,N,ct){y.onBeforeRender(v,D,O,z,N,ct),y.modelViewMatrix.multiplyMatrices(O.matrixWorldInverse,y.matrixWorld),y.normalMatrix.getNormalMatrix(y.modelViewMatrix),N.onBeforeRender(v,D,O,z,y,ct),N.transparent===!0&&N.side===fe&&N.forceSinglePass===!1?(N.side=De,N.needsUpdate=!0,v.renderBufferDirect(O,D,z,N,y,ct),N.side=En,N.needsUpdate=!0,v.renderBufferDirect(O,D,z,N,y,ct),N.side=fe):v.renderBufferDirect(O,D,z,N,y,ct),y.onAfterRender(v,D,O,z,N,ct)}function Ui(y,D,O){D.isScene!==!0&&(D=Et);const z=Ft.get(y),N=m.state.lights,ct=m.state.shadowsArray,mt=N.state.version,St=pt.getParameters(y,N.state,ct,D,O),wt=pt.getProgramCacheKey(St);let Bt=z.programs;z.environment=y.isMeshStandardMaterial?D.environment:null,z.fog=D.fog,z.envMap=(y.isMeshStandardMaterial?F:x).get(y.envMap||z.environment),Bt===void 0&&(y.addEventListener("dispose",rt),Bt=new Map,z.programs=Bt);let Ct=Bt.get(wt);if(Ct!==void 0){if(z.currentProgram===Ct&&z.lightsStateVersion===mt)return Cr(y,St),Ct}else St.uniforms=pt.getUniforms(y),y.onBuild(O,St,v),y.onBeforeCompile(St,v),Ct=pt.acquireProgram(St,wt),Bt.set(wt,Ct),z.uniforms=St.uniforms;const Lt=z.uniforms;return(!y.isShaderMaterial&&!y.isRawShaderMaterial||y.clipping===!0)&&(Lt.clippingPlanes=Ot.uniform),Cr(y,St),z.needsLights=nl(y),z.lightsStateVersion=mt,z.needsLights&&(Lt.ambientLightColor.value=N.state.ambient,Lt.lightProbe.value=N.state.probe,Lt.directionalLights.value=N.state.directional,Lt.directionalLightShadows.value=N.state.directionalShadow,Lt.spotLights.value=N.state.spot,Lt.spotLightShadows.value=N.state.spotShadow,Lt.rectAreaLights.value=N.state.rectArea,Lt.ltc_1.value=N.state.rectAreaLTC1,Lt.ltc_2.value=N.state.rectAreaLTC2,Lt.pointLights.value=N.state.point,Lt.pointLightShadows.value=N.state.pointShadow,Lt.hemisphereLights.value=N.state.hemi,Lt.directionalShadowMap.value=N.state.directionalShadowMap,Lt.directionalShadowMatrix.value=N.state.directionalShadowMatrix,Lt.spotShadowMap.value=N.state.spotShadowMap,Lt.spotLightMatrix.value=N.state.spotLightMatrix,Lt.spotLightMap.value=N.state.spotLightMap,Lt.pointShadowMap.value=N.state.pointShadowMap,Lt.pointShadowMatrix.value=N.state.pointShadowMatrix),z.currentProgram=Ct,z.uniformsList=null,Ct}function Rr(y){if(y.uniformsList===null){const D=y.currentProgram.getUniforms();y.uniformsList=os.seqWithValue(D.seq,y.uniforms)}return y.uniformsList}function Cr(y,D){const O=Ft.get(y);O.outputColorSpace=D.outputColorSpace,O.batching=D.batching,O.instancing=D.instancing,O.instancingColor=D.instancingColor,O.skinning=D.skinning,O.morphTargets=D.morphTargets,O.morphNormals=D.morphNormals,O.morphColors=D.morphColors,O.morphTargetsCount=D.morphTargetsCount,O.numClippingPlanes=D.numClippingPlanes,O.numIntersection=D.numClipIntersection,O.vertexAlphas=D.vertexAlphas,O.vertexTangents=D.vertexTangents,O.toneMapping=D.toneMapping}function tl(y,D,O,z,N){D.isScene!==!0&&(D=Et),T.resetTextureUnits();const ct=D.fog,mt=z.isMeshStandardMaterial?D.environment:null,St=A===null?v.outputColorSpace:A.isXRRenderTarget===!0?A.texture.colorSpace:fn,wt=(z.isMeshStandardMaterial?F:x).get(z.envMap||mt),Bt=z.vertexColors===!0&&!!O.attributes.color&&O.attributes.color.itemSize===4,Ct=!!O.attributes.tangent&&(!!z.normalMap||z.anisotropy>0),Lt=!!O.morphAttributes.position,re=!!O.morphAttributes.normal,Ue=!!O.morphAttributes.color;let ue=Sn;z.toneMapped&&(A===null||A.isXRRenderTarget===!0)&&(ue=v.toneMapping);const en=O.morphAttributes.position||O.morphAttributes.normal||O.morphAttributes.color,ee=en!==void 0?en.length:0,kt=Ft.get(z),Ts=m.state.lights;if(j===!0&&(lt===!0||y!==M)){const Ge=y===M&&z.id===G;Ot.setState(z,y,Ge)}let ie=!1;z.version===kt.__version?(kt.needsLights&&kt.lightsStateVersion!==Ts.state.version||kt.outputColorSpace!==St||N.isBatchedMesh&&kt.batching===!1||!N.isBatchedMesh&&kt.batching===!0||N.isInstancedMesh&&kt.instancing===!1||!N.isInstancedMesh&&kt.instancing===!0||N.isSkinnedMesh&&kt.skinning===!1||!N.isSkinnedMesh&&kt.skinning===!0||N.isInstancedMesh&&kt.instancingColor===!0&&N.instanceColor===null||N.isInstancedMesh&&kt.instancingColor===!1&&N.instanceColor!==null||kt.envMap!==wt||z.fog===!0&&kt.fog!==ct||kt.numClippingPlanes!==void 0&&(kt.numClippingPlanes!==Ot.numPlanes||kt.numIntersection!==Ot.numIntersection)||kt.vertexAlphas!==Bt||kt.vertexTangents!==Ct||kt.morphTargets!==Lt||kt.morphNormals!==re||kt.morphColors!==Ue||kt.toneMapping!==ue||Rt.isWebGL2===!0&&kt.morphTargetsCount!==ee)&&(ie=!0):(ie=!0,kt.__version=z.version);let bn=kt.currentProgram;ie===!0&&(bn=Ui(z,D,N));let Pr=!1,_i=!1,Es=!1;const ge=bn.getUniforms(),wn=kt.uniforms;if(ft.useProgram(bn.program)&&(Pr=!0,_i=!0,Es=!0),z.id!==G&&(G=z.id,_i=!0),Pr||M!==y){ge.setValue(U,"projectionMatrix",y.projectionMatrix),ge.setValue(U,"viewMatrix",y.matrixWorldInverse);const Ge=ge.map.cameraPosition;Ge!==void 0&&Ge.setValue(U,Dt.setFromMatrixPosition(y.matrixWorld)),Rt.logarithmicDepthBuffer&&ge.setValue(U,"logDepthBufFC",2/(Math.log(y.far+1)/Math.LN2)),(z.isMeshPhongMaterial||z.isMeshToonMaterial||z.isMeshLambertMaterial||z.isMeshBasicMaterial||z.isMeshStandardMaterial||z.isShaderMaterial)&&ge.setValue(U,"isOrthographic",y.isOrthographicCamera===!0),M!==y&&(M=y,_i=!0,Es=!0)}if(N.isSkinnedMesh){ge.setOptional(U,N,"bindMatrix"),ge.setOptional(U,N,"bindMatrixInverse");const Ge=N.skeleton;Ge&&(Rt.floatVertexTextures?(Ge.boneTexture===null&&Ge.computeBoneTexture(),ge.setValue(U,"boneTexture",Ge.boneTexture,T)):console.warn("THREE.WebGLRenderer: SkinnedMesh can only be used with WebGL 2. With WebGL 1 OES_texture_float and vertex textures support is required."))}N.isBatchedMesh&&(ge.setOptional(U,N,"batchingTexture"),ge.setValue(U,"batchingTexture",N._matricesTexture,T));const bs=O.morphAttributes;if((bs.position!==void 0||bs.normal!==void 0||bs.color!==void 0&&Rt.isWebGL2===!0)&&Vt.update(N,O,bn),(_i||kt.receiveShadow!==N.receiveShadow)&&(kt.receiveShadow=N.receiveShadow,ge.setValue(U,"receiveShadow",N.receiveShadow)),z.isMeshGouraudMaterial&&z.envMap!==null&&(wn.envMap.value=wt,wn.flipEnvMap.value=wt.isCubeTexture&&wt.isRenderTargetTexture===!1?-1:1),_i&&(ge.setValue(U,"toneMappingExposure",v.toneMappingExposure),kt.needsLights&&el(wn,Es),ct&&z.fog===!0&&at.refreshFogUniforms(wn,ct),at.refreshMaterialUniforms(wn,z,X,V,_t),os.upload(U,Rr(kt),wn,T)),z.isShaderMaterial&&z.uniformsNeedUpdate===!0&&(os.upload(U,Rr(kt),wn,T),z.uniformsNeedUpdate=!1),z.isSpriteMaterial&&ge.setValue(U,"center",N.center),ge.setValue(U,"modelViewMatrix",N.modelViewMatrix),ge.setValue(U,"normalMatrix",N.normalMatrix),ge.setValue(U,"modelMatrix",N.matrixWorld),z.isShaderMaterial||z.isRawShaderMaterial){const Ge=z.uniformsGroups;for(let ws=0,il=Ge.length;ws<il;ws++)if(Rt.isWebGL2){const Lr=Ge[ws];Wt.update(Lr,bn),Wt.bind(Lr,bn)}else console.warn("THREE.WebGLRenderer: Uniform Buffer Objects can only be used with WebGL 2.")}return bn}function el(y,D){y.ambientLightColor.needsUpdate=D,y.lightProbe.needsUpdate=D,y.directionalLights.needsUpdate=D,y.directionalLightShadows.needsUpdate=D,y.pointLights.needsUpdate=D,y.pointLightShadows.needsUpdate=D,y.spotLights.needsUpdate=D,y.spotLightShadows.needsUpdate=D,y.rectAreaLights.needsUpdate=D,y.hemisphereLights.needsUpdate=D}function nl(y){return y.isMeshLambertMaterial||y.isMeshToonMaterial||y.isMeshPhongMaterial||y.isMeshStandardMaterial||y.isShadowMaterial||y.isShaderMaterial&&y.lights===!0}this.getActiveCubeFace=function(){return P},this.getActiveMipmapLevel=function(){return w},this.getRenderTarget=function(){return A},this.setRenderTargetTextures=function(y,D,O){Ft.get(y.texture).__webglTexture=D,Ft.get(y.depthTexture).__webglTexture=O;const z=Ft.get(y);z.__hasExternalTextures=!0,z.__hasExternalTextures&&(z.__autoAllocateDepthBuffer=O===void 0,z.__autoAllocateDepthBuffer||xt.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),z.__useRenderToTexture=!1))},this.setRenderTargetFramebuffer=function(y,D){const O=Ft.get(y);O.__webglFramebuffer=D,O.__useDefaultFramebuffer=D===void 0},this.setRenderTarget=function(y,D=0,O=0){A=y,P=D,w=O;let z=!0,N=null,ct=!1,mt=!1;if(y){const wt=Ft.get(y);wt.__useDefaultFramebuffer!==void 0?(ft.bindFramebuffer(U.FRAMEBUFFER,null),z=!1):wt.__webglFramebuffer===void 0?T.setupRenderTarget(y):wt.__hasExternalTextures&&T.rebindTextures(y,Ft.get(y.texture).__webglTexture,Ft.get(y.depthTexture).__webglTexture);const Bt=y.texture;(Bt.isData3DTexture||Bt.isDataArrayTexture||Bt.isCompressedArrayTexture)&&(mt=!0);const Ct=Ft.get(y).__webglFramebuffer;y.isWebGLCubeRenderTarget?(Array.isArray(Ct[D])?N=Ct[D][O]:N=Ct[D],ct=!0):Rt.isWebGL2&&y.samples>0&&T.useMultisampledRTT(y)===!1?N=Ft.get(y).__webglMultisampledFramebuffer:Array.isArray(Ct)?N=Ct[O]:N=Ct,b.copy(y.viewport),B.copy(y.scissor),k=y.scissorTest}else b.copy(K).multiplyScalar(X).floor(),B.copy(tt).multiplyScalar(X).floor(),k=et;if(ft.bindFramebuffer(U.FRAMEBUFFER,N)&&Rt.drawBuffers&&z&&ft.drawBuffers(y,N),ft.viewport(b),ft.scissor(B),ft.setScissorTest(k),ct){const wt=Ft.get(y.texture);U.framebufferTexture2D(U.FRAMEBUFFER,U.COLOR_ATTACHMENT0,U.TEXTURE_CUBE_MAP_POSITIVE_X+D,wt.__webglTexture,O)}else if(mt){const wt=Ft.get(y.texture),Bt=D||0;U.framebufferTextureLayer(U.FRAMEBUFFER,U.COLOR_ATTACHMENT0,wt.__webglTexture,O||0,Bt)}G=-1},this.readRenderTargetPixels=function(y,D,O,z,N,ct,mt){if(!(y&&y.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let St=Ft.get(y).__webglFramebuffer;if(y.isWebGLCubeRenderTarget&&mt!==void 0&&(St=St[mt]),St){ft.bindFramebuffer(U.FRAMEBUFFER,St);try{const wt=y.texture,Bt=wt.format,Ct=wt.type;if(Bt!==$e&&dt.convert(Bt)!==U.getParameter(U.IMPLEMENTATION_COLOR_READ_FORMAT)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}const Lt=Ct===dn&&(xt.has("EXT_color_buffer_half_float")||Rt.isWebGL2&&xt.has("EXT_color_buffer_float"));if(Ct!==Tn&&dt.convert(Ct)!==U.getParameter(U.IMPLEMENTATION_COLOR_READ_TYPE)&&!(Ct===yn&&(Rt.isWebGL2||xt.has("OES_texture_float")||xt.has("WEBGL_color_buffer_float")))&&!Lt){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}D>=0&&D<=y.width-z&&O>=0&&O<=y.height-N&&U.readPixels(D,O,z,N,dt.convert(Bt),dt.convert(Ct),ct)}finally{const wt=A!==null?Ft.get(A).__webglFramebuffer:null;ft.bindFramebuffer(U.FRAMEBUFFER,wt)}}},this.copyFramebufferToTexture=function(y,D,O=0){const z=Math.pow(2,-O),N=Math.floor(D.image.width*z),ct=Math.floor(D.image.height*z);T.setTexture2D(D,0),U.copyTexSubImage2D(U.TEXTURE_2D,O,0,0,y.x,y.y,N,ct),ft.unbindTexture()},this.copyTextureToTexture=function(y,D,O,z=0){const N=D.image.width,ct=D.image.height,mt=dt.convert(O.format),St=dt.convert(O.type);T.setTexture2D(O,0),U.pixelStorei(U.UNPACK_FLIP_Y_WEBGL,O.flipY),U.pixelStorei(U.UNPACK_PREMULTIPLY_ALPHA_WEBGL,O.premultiplyAlpha),U.pixelStorei(U.UNPACK_ALIGNMENT,O.unpackAlignment),D.isDataTexture?U.texSubImage2D(U.TEXTURE_2D,z,y.x,y.y,N,ct,mt,St,D.image.data):D.isCompressedTexture?U.compressedTexSubImage2D(U.TEXTURE_2D,z,y.x,y.y,D.mipmaps[0].width,D.mipmaps[0].height,mt,D.mipmaps[0].data):U.texSubImage2D(U.TEXTURE_2D,z,y.x,y.y,mt,St,D.image),z===0&&O.generateMipmaps&&U.generateMipmap(U.TEXTURE_2D),ft.unbindTexture()},this.copyTextureToTexture3D=function(y,D,O,z,N=0){if(v.isWebGL1Renderer){console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: can only be used with WebGL2.");return}const ct=y.max.x-y.min.x+1,mt=y.max.y-y.min.y+1,St=y.max.z-y.min.z+1,wt=dt.convert(z.format),Bt=dt.convert(z.type);let Ct;if(z.isData3DTexture)T.setTexture3D(z,0),Ct=U.TEXTURE_3D;else if(z.isDataArrayTexture||z.isCompressedArrayTexture)T.setTexture2DArray(z,0),Ct=U.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}U.pixelStorei(U.UNPACK_FLIP_Y_WEBGL,z.flipY),U.pixelStorei(U.UNPACK_PREMULTIPLY_ALPHA_WEBGL,z.premultiplyAlpha),U.pixelStorei(U.UNPACK_ALIGNMENT,z.unpackAlignment);const Lt=U.getParameter(U.UNPACK_ROW_LENGTH),re=U.getParameter(U.UNPACK_IMAGE_HEIGHT),Ue=U.getParameter(U.UNPACK_SKIP_PIXELS),ue=U.getParameter(U.UNPACK_SKIP_ROWS),en=U.getParameter(U.UNPACK_SKIP_IMAGES),ee=O.isCompressedTexture?O.mipmaps[N]:O.image;U.pixelStorei(U.UNPACK_ROW_LENGTH,ee.width),U.pixelStorei(U.UNPACK_IMAGE_HEIGHT,ee.height),U.pixelStorei(U.UNPACK_SKIP_PIXELS,y.min.x),U.pixelStorei(U.UNPACK_SKIP_ROWS,y.min.y),U.pixelStorei(U.UNPACK_SKIP_IMAGES,y.min.z),O.isDataTexture||O.isData3DTexture?U.texSubImage3D(Ct,N,D.x,D.y,D.z,ct,mt,St,wt,Bt,ee.data):O.isCompressedArrayTexture?(console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: untested support for compressed srcTexture."),U.compressedTexSubImage3D(Ct,N,D.x,D.y,D.z,ct,mt,St,wt,ee.data)):U.texSubImage3D(Ct,N,D.x,D.y,D.z,ct,mt,St,wt,Bt,ee),U.pixelStorei(U.UNPACK_ROW_LENGTH,Lt),U.pixelStorei(U.UNPACK_IMAGE_HEIGHT,re),U.pixelStorei(U.UNPACK_SKIP_PIXELS,Ue),U.pixelStorei(U.UNPACK_SKIP_ROWS,ue),U.pixelStorei(U.UNPACK_SKIP_IMAGES,en),N===0&&z.generateMipmaps&&U.generateMipmap(Ct),ft.unbindTexture()},this.initTexture=function(y){y.isCubeTexture?T.setTextureCube(y,0):y.isData3DTexture?T.setTexture3D(y,0):y.isDataArrayTexture||y.isCompressedArrayTexture?T.setTexture2DArray(y,0):T.setTexture2D(y,0),ft.unbindTexture()},this.resetState=function(){P=0,w=0,A=null,ft.reset(),It.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return hn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;const e=this.getContext();e.drawingBufferColorSpace=t===xr?"display-p3":"srgb",e.unpackColorSpace=qt.workingColorSpace===xs?"display-p3":"srgb"}get outputEncoding(){return console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace===Jt?Bn:wo}set outputEncoding(t){console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace=t===Bn?Jt:fn}get useLegacyLights(){return console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights}set useLegacyLights(t){console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights=t}}class Mp extends Yo{}Mp.prototype.isWebGL1Renderer=!0;class Nn{constructor(t,e=25e-5){this.isFogExp2=!0,this.name="",this.color=new Nt(t),this.density=e}clone(){return new Nn(this.color,this.density)}toJSON(){return{type:"FogExp2",name:this.name,color:this.color.getHex(),density:this.density}}}class yp extends pe{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){const e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(e.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(e.object.backgroundIntensity=this.backgroundIntensity),e}}class Ko extends zn{constructor(t){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new Nt(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.linewidth=t.linewidth,this.linecap=t.linecap,this.linejoin=t.linejoin,this.fog=t.fog,this}}const Za=new R,Ja=new R,Qa=new se,nr=new Ms,is=new Li;class to extends pe{constructor(t=new Se,e=new Ko){super(),this.isLine=!0,this.type="Line",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}computeLineDistances(){const t=this.geometry;if(t.index===null){const e=t.attributes.position,n=[0];for(let i=1,r=e.count;i<r;i++)Za.fromBufferAttribute(e,i-1),Ja.fromBufferAttribute(e,i),n[i]=n[i-1],n[i]+=Za.distanceTo(Ja);t.setAttribute("lineDistance",new oe(n,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(t,e){const n=this.geometry,i=this.matrixWorld,r=t.params.Line.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),is.copy(n.boundingSphere),is.applyMatrix4(i),is.radius+=r,t.ray.intersectsSphere(is)===!1)return;Qa.copy(i).invert(),nr.copy(t.ray).applyMatrix4(Qa);const a=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=new R,h=new R,u=new R,d=new R,p=this.isLineSegments?2:1,g=n.index,m=n.attributes.position;if(g!==null){const f=Math.max(0,o.start),E=Math.min(g.count,o.start+o.count);for(let v=f,S=E-1;v<S;v+=p){const P=g.getX(v),w=g.getX(v+1);if(c.fromBufferAttribute(m,P),h.fromBufferAttribute(m,w),nr.distanceSqToSegment(c,h,d,u)>l)continue;d.applyMatrix4(this.matrixWorld);const G=t.ray.origin.distanceTo(d);G<t.near||G>t.far||e.push({distance:G,point:u.clone().applyMatrix4(this.matrixWorld),index:v,face:null,faceIndex:null,object:this})}}else{const f=Math.max(0,o.start),E=Math.min(m.count,o.start+o.count);for(let v=f,S=E-1;v<S;v+=p){if(c.fromBufferAttribute(m,v),h.fromBufferAttribute(m,v+1),nr.distanceSqToSegment(c,h,d,u)>l)continue;d.applyMatrix4(this.matrixWorld);const w=t.ray.origin.distanceTo(d);w<t.near||w>t.far||e.push({distance:w,point:u.clone().applyMatrix4(this.matrixWorld),index:v,face:null,faceIndex:null,object:this})}}}updateMorphTargets(){const e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){const i=e[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=i.length;r<o;r++){const a=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}}class jo extends zn{constructor(t){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new Nt(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.size=t.size,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}}const eo=new se,pr=new Ms,ss=new Li,rs=new R;class Sp extends pe{constructor(t=new Se,e=new jo){super(),this.isPoints=!0,this.type="Points",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}raycast(t,e){const n=this.geometry,i=this.matrixWorld,r=t.params.Points.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),ss.copy(n.boundingSphere),ss.applyMatrix4(i),ss.radius+=r,t.ray.intersectsSphere(ss)===!1)return;eo.copy(i).invert(),pr.copy(t.ray).applyMatrix4(eo);const a=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=n.index,u=n.attributes.position;if(c!==null){const d=Math.max(0,o.start),p=Math.min(c.count,o.start+o.count);for(let g=d,_=p;g<_;g++){const m=c.getX(g);rs.fromBufferAttribute(u,m),no(rs,m,l,i,t,e,this)}}else{const d=Math.max(0,o.start),p=Math.min(u.count,o.start+o.count);for(let g=d,_=p;g<_;g++)rs.fromBufferAttribute(u,g),no(rs,g,l,i,t,e,this)}}updateMorphTargets(){const e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){const i=e[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=i.length;r<o;r++){const a=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}}function no(s,t,e,n,i,r,o){const a=pr.distanceSqToPoint(s);if(a<e){const l=new R;pr.closestPointToPoint(s,l),l.applyMatrix4(n);const c=i.ray.origin.distanceTo(l);if(c<i.near||c>i.far)return;r.push({distance:c,distanceToRay:Math.sqrt(a),point:l,index:t,face:null,object:o})}}class wi extends Ie{constructor(t,e,n,i,r,o,a,l,c){super(t,e,n,i,r,o,a,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}}class ye extends Se{constructor(t=1,e=1,n=1,i=32,r=1,o=!1,a=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:t,radiusBottom:e,height:n,radialSegments:i,heightSegments:r,openEnded:o,thetaStart:a,thetaLength:l};const c=this;i=Math.floor(i),r=Math.floor(r);const h=[],u=[],d=[],p=[];let g=0;const _=[],m=n/2;let f=0;E(),o===!1&&(t>0&&v(!0),e>0&&v(!1)),this.setIndex(h),this.setAttribute("position",new oe(u,3)),this.setAttribute("normal",new oe(d,3)),this.setAttribute("uv",new oe(p,2));function E(){const S=new R,P=new R;let w=0;const A=(e-t)/n;for(let G=0;G<=r;G++){const M=[],b=G/r,B=b*(e-t)+t;for(let k=0;k<=i;k++){const q=k/i,L=q*l+a,I=Math.sin(L),V=Math.cos(L);P.x=B*I,P.y=-b*n+m,P.z=B*V,u.push(P.x,P.y,P.z),S.set(I,A,V).normalize(),d.push(S.x,S.y,S.z),p.push(q,1-b),M.push(g++)}_.push(M)}for(let G=0;G<i;G++)for(let M=0;M<r;M++){const b=_[M][G],B=_[M+1][G],k=_[M+1][G+1],q=_[M][G+1];h.push(b,B,q),h.push(B,k,q),w+=6}c.addGroup(f,w,0),f+=w}function v(S){const P=g,w=new ht,A=new R;let G=0;const M=S===!0?t:e,b=S===!0?1:-1;for(let k=1;k<=i;k++)u.push(0,m*b,0),d.push(0,b,0),p.push(.5,.5),g++;const B=g;for(let k=0;k<=i;k++){const L=k/i*l+a,I=Math.cos(L),V=Math.sin(L);A.x=M*V,A.y=m*b,A.z=M*I,u.push(A.x,A.y,A.z),d.push(0,b,0),w.x=I*.5+.5,w.y=V*.5*b+.5,p.push(w.x,w.y),g++}for(let k=0;k<i;k++){const q=P+k,L=B+k;S===!0?h.push(L,L+1,q):h.push(L+1,L,q),G+=3}c.addGroup(f,G,S===!0?1:2),f+=G}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new ye(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}}class Er extends ye{constructor(t=1,e=1,n=32,i=1,r=!1,o=0,a=Math.PI*2){super(0,t,e,n,i,r,o,a),this.type="ConeGeometry",this.parameters={radius:t,height:e,radialSegments:n,heightSegments:i,openEnded:r,thetaStart:o,thetaLength:a}}static fromJSON(t){return new Er(t.radius,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}}class ze extends Se{constructor(t=1,e=32,n=16,i=0,r=Math.PI*2,o=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:e,heightSegments:n,phiStart:i,phiLength:r,thetaStart:o,thetaLength:a},e=Math.max(3,Math.floor(e)),n=Math.max(2,Math.floor(n));const l=Math.min(o+a,Math.PI);let c=0;const h=[],u=new R,d=new R,p=[],g=[],_=[],m=[];for(let f=0;f<=n;f++){const E=[],v=f/n;let S=0;f===0&&o===0?S=.5/e:f===n&&l===Math.PI&&(S=-.5/e);for(let P=0;P<=e;P++){const w=P/e;u.x=-t*Math.cos(i+w*r)*Math.sin(o+v*a),u.y=t*Math.cos(o+v*a),u.z=t*Math.sin(i+w*r)*Math.sin(o+v*a),g.push(u.x,u.y,u.z),d.copy(u).normalize(),_.push(d.x,d.y,d.z),m.push(w+S,1-v),E.push(c++)}h.push(E)}for(let f=0;f<n;f++)for(let E=0;E<e;E++){const v=h[f][E+1],S=h[f][E],P=h[f+1][E],w=h[f+1][E+1];(f!==0||o>0)&&p.push(v,S,w),(f!==n-1||l<Math.PI)&&p.push(S,P,w)}this.setIndex(p),this.setAttribute("position",new oe(g,3)),this.setAttribute("normal",new oe(_,3)),this.setAttribute("uv",new oe(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new ze(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}}class gs extends Se{constructor(t=1,e=.4,n=12,i=48,r=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:t,tube:e,radialSegments:n,tubularSegments:i,arc:r},n=Math.floor(n),i=Math.floor(i);const o=[],a=[],l=[],c=[],h=new R,u=new R,d=new R;for(let p=0;p<=n;p++)for(let g=0;g<=i;g++){const _=g/i*r,m=p/n*Math.PI*2;u.x=(t+e*Math.cos(m))*Math.cos(_),u.y=(t+e*Math.cos(m))*Math.sin(_),u.z=e*Math.sin(m),a.push(u.x,u.y,u.z),h.x=t*Math.cos(_),h.y=t*Math.sin(_),d.subVectors(u,h).normalize(),l.push(d.x,d.y,d.z),c.push(g/i),c.push(p/n)}for(let p=1;p<=n;p++)for(let g=1;g<=i;g++){const _=(i+1)*p+g-1,m=(i+1)*(p-1)+g-1,f=(i+1)*(p-1)+g,E=(i+1)*p+g;o.push(_,m,E),o.push(m,f,E)}this.setIndex(o),this.setAttribute("position",new oe(a,3)),this.setAttribute("normal",new oe(l,3)),this.setAttribute("uv",new oe(c,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new gs(t.radius,t.tube,t.radialSegments,t.tubularSegments,t.arc)}}class yt extends zn{constructor(t){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.type="MeshStandardMaterial",this.color=new Nt(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Nt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Ao,this.normalScale=new ht(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.defines={STANDARD:""},this.color.copy(t.color),this.roughness=t.roughness,this.metalness=t.metalness,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.roughnessMap=t.roughnessMap,this.metalnessMap=t.metalnessMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapIntensity=t.envMapIntensity,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}}class br extends pe{constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new Nt(t),this.intensity=e}dispose(){}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){const e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,this.groundColor!==void 0&&(e.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(e.object.distance=this.distance),this.angle!==void 0&&(e.object.angle=this.angle),this.decay!==void 0&&(e.object.decay=this.decay),this.penumbra!==void 0&&(e.object.penumbra=this.penumbra),this.shadow!==void 0&&(e.object.shadow=this.shadow.toJSON()),e}}const ir=new se,io=new R,so=new R;class $o{constructor(t){this.camera=t,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new ht(512,512),this.map=null,this.mapPass=null,this.matrix=new se,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Sr,this._frameExtents=new ht(1,1),this._viewportCount=1,this._viewports=[new Qt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(t){const e=this.camera,n=this.matrix;io.setFromMatrixPosition(t.matrixWorld),e.position.copy(io),so.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(so),e.updateMatrixWorld(),ir.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),this._frustum.setFromProjectionMatrix(ir),n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(ir)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.bias=t.bias,this.radius=t.radius,this.mapSize.copy(t.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const t={};return this.bias!==0&&(t.bias=this.bias),this.normalBias!==0&&(t.normalBias=this.normalBias),this.radius!==1&&(t.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(t.mapSize=this.mapSize.toArray()),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}}class Tp extends $o{constructor(){super(new Le(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1}updateMatrices(t){const e=this.camera,n=ui*2*t.angle*this.focus,i=this.mapSize.width/this.mapSize.height,r=t.distance||e.far;(n!==e.fov||i!==e.aspect||r!==e.far)&&(e.fov=n,e.aspect=i,e.far=r,e.updateProjectionMatrix()),super.updateMatrices(t)}copy(t){return super.copy(t),this.focus=t.focus,this}}class Ep extends br{constructor(t,e,n=0,i=Math.PI/3,r=0,o=2){super(t,e),this.isSpotLight=!0,this.type="SpotLight",this.position.copy(pe.DEFAULT_UP),this.updateMatrix(),this.target=new pe,this.distance=n,this.angle=i,this.penumbra=r,this.decay=o,this.map=null,this.shadow=new Tp}get power(){return this.intensity*Math.PI}set power(t){this.intensity=t/Math.PI}dispose(){this.shadow.dispose()}copy(t,e){return super.copy(t,e),this.distance=t.distance,this.angle=t.angle,this.penumbra=t.penumbra,this.decay=t.decay,this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}}const ro=new se,Si=new R,sr=new R;class bp extends $o{constructor(){super(new Le(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new ht(4,2),this._viewportCount=6,this._viewports=[new Qt(2,1,1,1),new Qt(0,1,1,1),new Qt(3,1,1,1),new Qt(1,1,1,1),new Qt(3,0,1,1),new Qt(1,0,1,1)],this._cubeDirections=[new R(1,0,0),new R(-1,0,0),new R(0,0,1),new R(0,0,-1),new R(0,1,0),new R(0,-1,0)],this._cubeUps=[new R(0,1,0),new R(0,1,0),new R(0,1,0),new R(0,1,0),new R(0,0,1),new R(0,0,-1)]}updateMatrices(t,e=0){const n=this.camera,i=this.matrix,r=t.distance||n.far;r!==n.far&&(n.far=r,n.updateProjectionMatrix()),Si.setFromMatrixPosition(t.matrixWorld),n.position.copy(Si),sr.copy(n.position),sr.add(this._cubeDirections[e]),n.up.copy(this._cubeUps[e]),n.lookAt(sr),n.updateMatrixWorld(),i.makeTranslation(-Si.x,-Si.y,-Si.z),ro.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(ro)}}class as extends br{constructor(t,e,n=0,i=2){super(t,e),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=i,this.shadow=new bp}get power(){return this.intensity*4*Math.PI}set power(t){this.intensity=t/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(t,e){return super.copy(t,e),this.distance=t.distance,this.decay=t.decay,this.shadow=t.shadow.clone(),this}}class wp extends br{constructor(t,e){super(t,e),this.isAmbientLight=!0,this.type="AmbientLight"}}class Ap{constructor(t=!0){this.autoStart=t,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=ao(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let t=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const e=ao();t=(e-this.oldTime)/1e3,this.oldTime=e,this.elapsedTime+=t}return t}}function ao(){return(typeof performance>"u"?Date:performance).now()}class Rp{constructor(t,e,n=0,i=1/0){this.ray=new Ms(t,e),this.near=n,this.far=i,this.camera=null,this.layers=new yr,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(t,e){this.ray.set(t,e)}setFromCamera(t,e){e.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(t.x,t.y,.5).unproject(e).sub(this.ray.origin).normalize(),this.camera=e):e.isOrthographicCamera?(this.ray.origin.set(t.x,t.y,(e.near+e.far)/(e.near-e.far)).unproject(e),this.ray.direction.set(0,0,-1).transformDirection(e.matrixWorld),this.camera=e):console.error("THREE.Raycaster: Unsupported camera type: "+e.type)}intersectObject(t,e=!0,n=[]){return mr(t,this,n,e),n.sort(oo),n}intersectObjects(t,e=!0,n=[]){for(let i=0,r=t.length;i<r;i++)mr(t[i],this,n,e);return n.sort(oo),n}}function oo(s,t){return s.distance-t.distance}function mr(s,t,e,n){if(s.layers.test(t.layers)&&s.raycast(t,e),n===!0){const i=s.children;for(let r=0,o=i.length;r<o;r++)mr(i[r],t,e,!0)}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:_r}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=_r);const Zo={name:"CopyShader",uniforms:{tDiffuse:{value:null},opacity:{value:1}},vertexShader:`

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


		}`};class Di{constructor(){this.isPass=!0,this.enabled=!0,this.needsSwap=!0,this.clear=!1,this.renderToScreen=!1}setSize(){}render(){console.error("THREE.Pass: .render() must be implemented in derived pass.")}dispose(){}}const Cp=new ko(-1,1,1,-1,0,1);class Pp extends Se{constructor(){super(),this.setAttribute("position",new oe([-1,3,0,-1,-1,0,3,-1,0],3)),this.setAttribute("uv",new oe([0,2,0,0,2,0],2))}}const Lp=new Pp;class Jo{constructor(t){this._mesh=new ot(Lp,t)}dispose(){this._mesh.geometry.dispose()}render(t){t.render(this._mesh,Cp)}get material(){return this._mesh.material}set material(t){this._mesh.material=t}}class Dp extends Di{constructor(t,e){super(),this.textureID=e!==void 0?e:"tDiffuse",t instanceof ke?(this.uniforms=t.uniforms,this.material=t):t&&(this.uniforms=ms.clone(t.uniforms),this.material=new ke({name:t.name!==void 0?t.name:"unspecified",defines:Object.assign({},t.defines),uniforms:this.uniforms,vertexShader:t.vertexShader,fragmentShader:t.fragmentShader})),this.fsQuad=new Jo(this.material)}render(t,e,n){this.uniforms[this.textureID]&&(this.uniforms[this.textureID].value=n.texture),this.fsQuad.material=this.material,this.renderToScreen?(t.setRenderTarget(null),this.fsQuad.render(t)):(t.setRenderTarget(e),this.clear&&t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil),this.fsQuad.render(t))}dispose(){this.material.dispose(),this.fsQuad.dispose()}}class lo extends Di{constructor(t,e){super(),this.scene=t,this.camera=e,this.clear=!0,this.needsSwap=!1,this.inverse=!1}render(t,e,n){const i=t.getContext(),r=t.state;r.buffers.color.setMask(!1),r.buffers.depth.setMask(!1),r.buffers.color.setLocked(!0),r.buffers.depth.setLocked(!0);let o,a;this.inverse?(o=0,a=1):(o=1,a=0),r.buffers.stencil.setTest(!0),r.buffers.stencil.setOp(i.REPLACE,i.REPLACE,i.REPLACE),r.buffers.stencil.setFunc(i.ALWAYS,o,4294967295),r.buffers.stencil.setClear(a),r.buffers.stencil.setLocked(!0),t.setRenderTarget(n),this.clear&&t.clear(),t.render(this.scene,this.camera),t.setRenderTarget(e),this.clear&&t.clear(),t.render(this.scene,this.camera),r.buffers.color.setLocked(!1),r.buffers.depth.setLocked(!1),r.buffers.color.setMask(!0),r.buffers.depth.setMask(!0),r.buffers.stencil.setLocked(!1),r.buffers.stencil.setFunc(i.EQUAL,1,4294967295),r.buffers.stencil.setOp(i.KEEP,i.KEEP,i.KEEP),r.buffers.stencil.setLocked(!0)}}class Ip extends Di{constructor(){super(),this.needsSwap=!1}render(t){t.state.buffers.stencil.setLocked(!1),t.state.buffers.stencil.setTest(!1)}}class Up{constructor(t,e){if(this.renderer=t,this._pixelRatio=t.getPixelRatio(),e===void 0){const n=t.getSize(new ht);this._width=n.width,this._height=n.height,e=new Ze(this._width*this._pixelRatio,this._height*this._pixelRatio,{type:dn}),e.texture.name="EffectComposer.rt1"}else this._width=e.width,this._height=e.height;this.renderTarget1=e,this.renderTarget2=e.clone(),this.renderTarget2.texture.name="EffectComposer.rt2",this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2,this.renderToScreen=!0,this.passes=[],this.copyPass=new Dp(Zo),this.copyPass.material.blending=un,this.clock=new Ap}swapBuffers(){const t=this.readBuffer;this.readBuffer=this.writeBuffer,this.writeBuffer=t}addPass(t){this.passes.push(t),t.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}insertPass(t,e){this.passes.splice(e,0,t),t.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}removePass(t){const e=this.passes.indexOf(t);e!==-1&&this.passes.splice(e,1)}isLastEnabledPass(t){for(let e=t+1;e<this.passes.length;e++)if(this.passes[e].enabled)return!1;return!0}render(t){t===void 0&&(t=this.clock.getDelta());const e=this.renderer.getRenderTarget();let n=!1;for(let i=0,r=this.passes.length;i<r;i++){const o=this.passes[i];if(o.enabled!==!1){if(o.renderToScreen=this.renderToScreen&&this.isLastEnabledPass(i),o.render(this.renderer,this.writeBuffer,this.readBuffer,t,n),o.needsSwap){if(n){const a=this.renderer.getContext(),l=this.renderer.state.buffers.stencil;l.setFunc(a.NOTEQUAL,1,4294967295),this.copyPass.render(this.renderer,this.writeBuffer,this.readBuffer,t),l.setFunc(a.EQUAL,1,4294967295)}this.swapBuffers()}lo!==void 0&&(o instanceof lo?n=!0:o instanceof Ip&&(n=!1))}}this.renderer.setRenderTarget(e)}reset(t){if(t===void 0){const e=this.renderer.getSize(new ht);this._pixelRatio=this.renderer.getPixelRatio(),this._width=e.width,this._height=e.height,t=this.renderTarget1.clone(),t.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.renderTarget1=t,this.renderTarget2=t.clone(),this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2}setSize(t,e){this._width=t,this._height=e;const n=this._width*this._pixelRatio,i=this._height*this._pixelRatio;this.renderTarget1.setSize(n,i),this.renderTarget2.setSize(n,i);for(let r=0;r<this.passes.length;r++)this.passes[r].setSize(n,i)}setPixelRatio(t){this._pixelRatio=t,this.setSize(this._width,this._height)}dispose(){this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.copyPass.dispose()}}class Np extends Di{constructor(t,e,n=null,i=null,r=null){super(),this.scene=t,this.camera=e,this.overrideMaterial=n,this.clearColor=i,this.clearAlpha=r,this.clear=!0,this.clearDepth=!1,this.needsSwap=!1,this._oldClearColor=new Nt}render(t,e,n){const i=t.autoClear;t.autoClear=!1;let r,o;this.overrideMaterial!==null&&(o=this.scene.overrideMaterial,this.scene.overrideMaterial=this.overrideMaterial),this.clearColor!==null&&(t.getClearColor(this._oldClearColor),t.setClearColor(this.clearColor)),this.clearAlpha!==null&&(r=t.getClearAlpha(),t.setClearAlpha(this.clearAlpha)),this.clearDepth==!0&&t.clearDepth(),t.setRenderTarget(this.renderToScreen?null:n),this.clear===!0&&t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil),t.render(this.scene,this.camera),this.clearColor!==null&&t.setClearColor(this._oldClearColor),this.clearAlpha!==null&&t.setClearAlpha(r),this.overrideMaterial!==null&&(this.scene.overrideMaterial=o),t.autoClear=i}}const Fp={uniforms:{tDiffuse:{value:null},luminosityThreshold:{value:1},smoothWidth:{value:1},defaultColor:{value:new Nt(0)},defaultOpacity:{value:0}},vertexShader:`

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

			vec3 luma = vec3( 0.299, 0.587, 0.114 );

			float v = dot( texel.xyz, luma );

			vec4 outputColor = vec4( defaultColor.rgb, defaultOpacity );

			float alpha = smoothstep( luminosityThreshold, luminosityThreshold + smoothWidth, v );

			gl_FragColor = mix( outputColor, texel, alpha );

		}`};class fi extends Di{constructor(t,e,n,i){super(),this.strength=e!==void 0?e:1,this.radius=n,this.threshold=i,this.resolution=t!==void 0?new ht(t.x,t.y):new ht(256,256),this.clearColor=new Nt(0,0,0),this.renderTargetsHorizontal=[],this.renderTargetsVertical=[],this.nMips=5;let r=Math.round(this.resolution.x/2),o=Math.round(this.resolution.y/2);this.renderTargetBright=new Ze(r,o,{type:dn}),this.renderTargetBright.texture.name="UnrealBloomPass.bright",this.renderTargetBright.texture.generateMipmaps=!1;for(let u=0;u<this.nMips;u++){const d=new Ze(r,o,{type:dn});d.texture.name="UnrealBloomPass.h"+u,d.texture.generateMipmaps=!1,this.renderTargetsHorizontal.push(d);const p=new Ze(r,o,{type:dn});p.texture.name="UnrealBloomPass.v"+u,p.texture.generateMipmaps=!1,this.renderTargetsVertical.push(p),r=Math.round(r/2),o=Math.round(o/2)}const a=Fp;this.highPassUniforms=ms.clone(a.uniforms),this.highPassUniforms.luminosityThreshold.value=i,this.highPassUniforms.smoothWidth.value=.01,this.materialHighPassFilter=new ke({uniforms:this.highPassUniforms,vertexShader:a.vertexShader,fragmentShader:a.fragmentShader}),this.separableBlurMaterials=[];const l=[3,5,7,9,11];r=Math.round(this.resolution.x/2),o=Math.round(this.resolution.y/2);for(let u=0;u<this.nMips;u++)this.separableBlurMaterials.push(this.getSeperableBlurMaterial(l[u])),this.separableBlurMaterials[u].uniforms.invSize.value=new ht(1/r,1/o),r=Math.round(r/2),o=Math.round(o/2);this.compositeMaterial=this.getCompositeMaterial(this.nMips),this.compositeMaterial.uniforms.blurTexture1.value=this.renderTargetsVertical[0].texture,this.compositeMaterial.uniforms.blurTexture2.value=this.renderTargetsVertical[1].texture,this.compositeMaterial.uniforms.blurTexture3.value=this.renderTargetsVertical[2].texture,this.compositeMaterial.uniforms.blurTexture4.value=this.renderTargetsVertical[3].texture,this.compositeMaterial.uniforms.blurTexture5.value=this.renderTargetsVertical[4].texture,this.compositeMaterial.uniforms.bloomStrength.value=e,this.compositeMaterial.uniforms.bloomRadius.value=.1;const c=[1,.8,.6,.4,.2];this.compositeMaterial.uniforms.bloomFactors.value=c,this.bloomTintColors=[new R(1,1,1),new R(1,1,1),new R(1,1,1),new R(1,1,1),new R(1,1,1)],this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors;const h=Zo;this.copyUniforms=ms.clone(h.uniforms),this.blendMaterial=new ke({uniforms:this.copyUniforms,vertexShader:h.vertexShader,fragmentShader:h.fragmentShader,blending:oi,depthTest:!1,depthWrite:!1,transparent:!0}),this.enabled=!0,this.needsSwap=!1,this._oldClearColor=new Nt,this.oldClearAlpha=1,this.basic=new me,this.fsQuad=new Jo(null)}dispose(){for(let t=0;t<this.renderTargetsHorizontal.length;t++)this.renderTargetsHorizontal[t].dispose();for(let t=0;t<this.renderTargetsVertical.length;t++)this.renderTargetsVertical[t].dispose();this.renderTargetBright.dispose();for(let t=0;t<this.separableBlurMaterials.length;t++)this.separableBlurMaterials[t].dispose();this.compositeMaterial.dispose(),this.blendMaterial.dispose(),this.basic.dispose(),this.fsQuad.dispose()}setSize(t,e){let n=Math.round(t/2),i=Math.round(e/2);this.renderTargetBright.setSize(n,i);for(let r=0;r<this.nMips;r++)this.renderTargetsHorizontal[r].setSize(n,i),this.renderTargetsVertical[r].setSize(n,i),this.separableBlurMaterials[r].uniforms.invSize.value=new ht(1/n,1/i),n=Math.round(n/2),i=Math.round(i/2)}render(t,e,n,i,r){t.getClearColor(this._oldClearColor),this.oldClearAlpha=t.getClearAlpha();const o=t.autoClear;t.autoClear=!1,t.setClearColor(this.clearColor,0),r&&t.state.buffers.stencil.setTest(!1),this.renderToScreen&&(this.fsQuad.material=this.basic,this.basic.map=n.texture,t.setRenderTarget(null),t.clear(),this.fsQuad.render(t)),this.highPassUniforms.tDiffuse.value=n.texture,this.highPassUniforms.luminosityThreshold.value=this.threshold,this.fsQuad.material=this.materialHighPassFilter,t.setRenderTarget(this.renderTargetBright),t.clear(),this.fsQuad.render(t);let a=this.renderTargetBright;for(let l=0;l<this.nMips;l++)this.fsQuad.material=this.separableBlurMaterials[l],this.separableBlurMaterials[l].uniforms.colorTexture.value=a.texture,this.separableBlurMaterials[l].uniforms.direction.value=fi.BlurDirectionX,t.setRenderTarget(this.renderTargetsHorizontal[l]),t.clear(),this.fsQuad.render(t),this.separableBlurMaterials[l].uniforms.colorTexture.value=this.renderTargetsHorizontal[l].texture,this.separableBlurMaterials[l].uniforms.direction.value=fi.BlurDirectionY,t.setRenderTarget(this.renderTargetsVertical[l]),t.clear(),this.fsQuad.render(t),a=this.renderTargetsVertical[l];this.fsQuad.material=this.compositeMaterial,this.compositeMaterial.uniforms.bloomStrength.value=this.strength,this.compositeMaterial.uniforms.bloomRadius.value=this.radius,this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors,t.setRenderTarget(this.renderTargetsHorizontal[0]),t.clear(),this.fsQuad.render(t),this.fsQuad.material=this.blendMaterial,this.copyUniforms.tDiffuse.value=this.renderTargetsHorizontal[0].texture,r&&t.state.buffers.stencil.setTest(!0),this.renderToScreen?(t.setRenderTarget(null),this.fsQuad.render(t)):(t.setRenderTarget(n),this.fsQuad.render(t)),t.setClearColor(this._oldClearColor,this.oldClearAlpha),t.autoClear=o}getSeperableBlurMaterial(t){const e=[];for(let n=0;n<t;n++)e.push(.39894*Math.exp(-.5*n*n/(t*t))/t);return new ke({defines:{KERNEL_RADIUS:t},uniforms:{colorTexture:{value:null},invSize:{value:new ht(.5,.5)},direction:{value:new ht(.5,.5)},gaussianCoefficients:{value:e}},vertexShader:`varying vec2 vUv;
				void main() {
					vUv = uv;
					gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
				}`,fragmentShader:`#include <common>
				varying vec2 vUv;
				uniform sampler2D colorTexture;
				uniform vec2 invSize;
				uniform vec2 direction;
				uniform float gaussianCoefficients[KERNEL_RADIUS];

				void main() {
					float weightSum = gaussianCoefficients[0];
					vec3 diffuseSum = texture2D( colorTexture, vUv ).rgb * weightSum;
					for( int i = 1; i < KERNEL_RADIUS; i ++ ) {
						float x = float(i);
						float w = gaussianCoefficients[i];
						vec2 uvOffset = direction * invSize * x;
						vec3 sample1 = texture2D( colorTexture, vUv + uvOffset ).rgb;
						vec3 sample2 = texture2D( colorTexture, vUv - uvOffset ).rgb;
						diffuseSum += (sample1 + sample2) * w;
						weightSum += 2.0 * w;
					}
					gl_FragColor = vec4(diffuseSum/weightSum, 1.0);
				}`})}getCompositeMaterial(t){return new ke({defines:{NUM_MIPS:t},uniforms:{blurTexture1:{value:null},blurTexture2:{value:null},blurTexture3:{value:null},blurTexture4:{value:null},blurTexture5:{value:null},bloomStrength:{value:1},bloomFactors:{value:null},bloomTintColors:{value:null},bloomRadius:{value:0}},vertexShader:`varying vec2 vUv;
				void main() {
					vUv = uv;
					gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
				}`,fragmentShader:`varying vec2 vUv;
				uniform sampler2D blurTexture1;
				uniform sampler2D blurTexture2;
				uniform sampler2D blurTexture3;
				uniform sampler2D blurTexture4;
				uniform sampler2D blurTexture5;
				uniform float bloomStrength;
				uniform float bloomRadius;
				uniform float bloomFactors[NUM_MIPS];
				uniform vec3 bloomTintColors[NUM_MIPS];

				float lerpBloomFactor(const in float factor) {
					float mirrorFactor = 1.2 - factor;
					return mix(factor, mirrorFactor, bloomRadius);
				}

				void main() {
					gl_FragColor = bloomStrength * ( lerpBloomFactor(bloomFactors[0]) * vec4(bloomTintColors[0], 1.0) * texture2D(blurTexture1, vUv) +
						lerpBloomFactor(bloomFactors[1]) * vec4(bloomTintColors[1], 1.0) * texture2D(blurTexture2, vUv) +
						lerpBloomFactor(bloomFactors[2]) * vec4(bloomTintColors[2], 1.0) * texture2D(blurTexture3, vUv) +
						lerpBloomFactor(bloomFactors[3]) * vec4(bloomTintColors[3], 1.0) * texture2D(blurTexture4, vUv) +
						lerpBloomFactor(bloomFactors[4]) * vec4(bloomTintColors[4], 1.0) * texture2D(blurTexture5, vUv) );
				}`})}}fi.BlurDirectionX=new ht(1,0);fi.BlurDirectionY=new ht(0,1);class gr{constructor(){this.cache={}}get(t){if(this.cache[t])return this.cache[t];let e;switch(t){case"woodFloor":e=this.woodFloor();break;case"wallpaper":e=this.wallpaper();break;case"plaster":e=this.plaster();break;case"woodDark":e=this.woodDark();break;case"portrait":e=this.portrait(Math.random());break;case"candleNoise":e=this.candleNoise();break;default:e=this.plaster()}return e.wrapS=e.wrapT=Ai,e.colorSpace=Jt,this.cache[t]=e,e}createCanvasTexture(t,e,n){const i=document.createElement("canvas");i.width=t,i.height=e;const r=i.getContext("2d");n(r,t,e);const o=new wi(i);return o.wrapS=o.wrapT=Ai,o.colorSpace=Jt,o.anisotropy=4,o}woodFloor(){return this.createCanvasTexture(512,512,(t,e,n)=>{t.fillStyle="#2d2118",t.fillRect(0,0,e,n);const i=6,r=n/i;for(let a=0;a<i;a++){const l=a*r,c=35+Math.random()*10;t.fillStyle=`rgb(${c+15},${c+5},${c-5})`,t.fillRect(0,l+1,e,r-2),t.strokeStyle="rgba(15,10,8,0.45)",t.lineWidth=.7;for(let h=0;h<14;h++){const u=l+Math.random()*r;t.beginPath(),t.moveTo(0,u);for(let d=0;d<e;d+=10){const p=Math.sin(d*.015+a*1.3+h*.7)*4+(Math.random()-.5)*2;t.lineTo(d,u+p)}t.stroke()}for(let h=0;h<2;h++){const u=Math.random()*e,d=l+Math.random()*r,p=6+Math.random()*10,g=t.createRadialGradient(u,d,0,u,d,p);g.addColorStop(0,"rgba(20,12,8,0.9)"),g.addColorStop(.35,"rgba(48,28,18,0.6)"),g.addColorStop(1,"rgba(50,30,20,0)"),t.fillStyle=g,t.beginPath(),t.arc(u,d,p,0,Math.PI*2),t.fill(),t.strokeStyle="rgba(20,12,8,0.55)",t.lineWidth=1.2,t.beginPath(),t.ellipse(u,d,p*.65,p*.45,Math.random()*Math.PI,0,Math.PI*2),t.stroke()}t.fillStyle="rgba(10,6,4,0.9)",t.fillRect(0,l+r-2,e,2),t.strokeStyle="rgba(255,230,190,0.04)",t.lineWidth=.5;for(let h=0;h<3;h++){const u=l+Math.random()*r;t.beginPath(),t.moveTo(0,u),t.lineTo(e,u+(Math.random()-.5)*6),t.stroke()}}const o=t.createRadialGradient(e/2,n/2,n*.25,e/2,n/2,n*.75);o.addColorStop(0,"rgba(0,0,0,0)"),o.addColorStop(1,"rgba(0,0,0,0.35)"),t.fillStyle=o,t.fillRect(0,0,e,n)})}woodDark(){return this.createCanvasTexture(256,256,(t,e,n)=>{t.fillStyle="#1a120e",t.fillRect(0,0,e,n);for(let i=0;i<1600;i++){const r=Math.random()*e,o=Math.random()*n,a=18+Math.random()*22;t.fillStyle=`rgba(${a+8},${a},${a-4},0.35)`,t.fillRect(r,o,1.5,Math.random()*18+4)}t.strokeStyle="rgba(0,0,0,0.28)",t.lineWidth=.6;for(let i=0;i<8;i++){const r=Math.random()*n;t.beginPath(),t.moveTo(0,r);for(let o=0;o<e;o+=8)t.lineTo(o,r+Math.sin(o*.03+i)*2);t.stroke()}})}wallpaper(){return this.createCanvasTexture(512,512,(t,e,n)=>{t.fillStyle="#3d3528",t.fillRect(0,0,e,n);const i=64;for(let o=0;o<e;o+=i){const a=Math.floor(o/i)%2===0;t.fillStyle=a?"#4a3f2f":"#3a3326",t.fillRect(o,0,i,n),t.fillStyle="rgba(70,60,45,0.6)",t.fillRect(o,0,2,n),t.fillStyle=a?"rgba(90,80,55,0.18)":"rgba(70,60,45,0.12)";for(let l=32;l<n;l+=96)for(let c=16;c<i;c+=32){t.beginPath();const h=o+c,u=l+(Math.floor(c/32)%2?48:0);t.moveTo(h,u-8),t.lineTo(h+8,u),t.lineTo(h,u+8),t.lineTo(h-8,u),t.closePath(),t.fill()}}for(let o=0;o<18;o++){const a=Math.random()*e,l=Math.random()*n*.7,c=14+Math.random()*38,h=60+Math.random()*180,u=t.createLinearGradient(a,l,a,l+h);u.addColorStop(0,"rgba(65,50,30,0)"),u.addColorStop(.2,"rgba(80,65,40,0.22)"),u.addColorStop(.5,"rgba(70,55,32,0.28)"),u.addColorStop(1,"rgba(60,48,28,0)"),t.fillStyle=u,t.beginPath(),t.moveTo(a-c/2,l),t.bezierCurveTo(a-c/3,l+h*.3,a+c/3,l+h*.6,a,l+h),t.bezierCurveTo(a+c/2,l+h*.55,a+c/2,l+h*.2,a+c/2,l),t.closePath(),t.fill()}for(let o=0;o<900;o++){const a=Math.random()*e,l=Math.random()*n,c=Math.random()*1.8,h=Math.random()*.22;t.fillStyle=`rgba(${40+Math.random()*20},${35+Math.random()*12},22,${h})`,t.beginPath(),t.arc(a,l,c,0,Math.PI*2),t.fill()}t.strokeStyle="rgba(20,16,12,0.18)",t.lineWidth=.7;for(let o=0;o<14;o++){t.beginPath();let a=Math.random()*e,l=Math.random()*n;t.moveTo(a,l);for(let c=0;c<6;c++)a+=(Math.random()-.5)*28,l+=(Math.random()-.5)*28,t.lineTo(a,l);t.stroke()}const r=t.createLinearGradient(0,n*.55,0,n);r.addColorStop(0,"rgba(0,0,0,0)"),r.addColorStop(1,"rgba(18,12,8,0.55)"),t.fillStyle=r,t.fillRect(0,n*.55,e,n*.45)})}plaster(){return this.createCanvasTexture(512,512,(t,e,n)=>{t.fillStyle="#2a2520",t.fillRect(0,0,e,n);for(let r=0;r<6e3;r++){const o=Math.random()*e,a=Math.random()*n,l=Math.random()*1.4,c=32+Math.random()*30,h=Math.random()*.45;t.fillStyle=`rgba(${c},${c-2},${c-6},${h})`,t.beginPath(),t.arc(o,a,l,0,Math.PI*2),t.fill()}t.strokeStyle="rgba(14,10,8,0.55)",t.lineWidth=1;for(let r=0;r<9;r++){t.beginPath();let o=Math.random()*e,a=Math.random()*n;t.moveTo(o,a);for(let l=0;l<10;l++){const c=o+(Math.random()-.5)*80,h=a+(Math.random()-.5)*80;t.lineTo(c,h),Math.random()<.35&&(t.moveTo(c,h),t.lineTo(c+(Math.random()-.5)*30,h+(Math.random()-.5)*30),t.moveTo(c,h)),o=c,a=h}t.stroke()}const i=t.createRadialGradient(e*.66,n*.12,10,e*.66,n*.12,160);i.addColorStop(0,"rgba(55,45,30,0.28)"),i.addColorStop(.5,"rgba(45,38,28,0.14)"),i.addColorStop(1,"rgba(0,0,0,0)"),t.fillStyle=i,t.beginPath(),t.arc(e*.66,n*.12,160,0,Math.PI*2),t.fill()})}candleNoise(){return this.createCanvasTexture(64,64,(t,e,n)=>{t.fillStyle="#111",t.fillRect(0,0,e,n);for(let i=0;i<800;i++)t.fillStyle=`rgba(${120+Math.random()*80},${90+Math.random()*40},40,${Math.random()*.5})`,t.fillRect(Math.random()*e,Math.random()*n,1,1)})}portrait(t=0){return this.createCanvasTexture(256,320,(e,n,i)=>{e.fillStyle="#0e0a08",e.fillRect(0,0,n,i),e.fillStyle="#1e1812",e.fillRect(8,8,n-16,i-16);for(let w=0;w<1200;w++)e.fillStyle=`rgba(${30+Math.random()*30},${24+Math.random()*18},18,${Math.random()*.18})`,e.fillRect(8+Math.random()*(n-16),8+Math.random()*(i-16),1.2,1.2);const r=(()=>{let w=Math.floor(t*9999)+1;return()=>(w=w*16807%2147483647,(w-1)/2147483646)})(),o=n/2,a=i/2-10,l=88+r()*18,c=108+r()*14,h=58+r()*28,u=42+r()*18,d=32+r()*14;e.fillStyle="rgba(0,0,0,0.45)",e.beginPath(),e.ellipse(o+3,a+8,l/2+6,c/2+8,0,0,Math.PI*2),e.fill();const p=e.createRadialGradient(o-12,a-18,8,o,a,l);p.addColorStop(0,`rgb(${Math.min(255,h+30)},${Math.min(255,u+18)},${Math.min(255,d+10)})`),p.addColorStop(.45,`rgb(${h},${u},${d})`),p.addColorStop(1,`rgb(${h-18},${u-14},${d-10})`),e.fillStyle=p,e.beginPath(),e.ellipse(o,a,l/2,c/2,0,0,Math.PI*2),e.fill(),e.fillStyle=`rgb(${14+r()*12},${10+r()*8},${8+r()*6})`,e.beginPath(),e.ellipse(o,a-c*.28,l/2+14,c*.42,0,Math.PI,Math.PI*2),e.fill(),e.beginPath(),e.ellipse(o-l/2-2,a+6,14,c*.52,.08,0,Math.PI*2),e.fill(),e.beginPath(),e.ellipse(o+l/2+2,a+6,14,c*.52,-.08,0,Math.PI*2),e.fill();const g=a-10,_=28+r()*6,m=19+r()*6,f=13+r()*3,E=r()<.12,v=r()<.45;for(let w of[-1,1]){const A=o+w*_/1.8;if(e.fillStyle="rgba(0,0,0,0.65)",e.beginPath(),e.ellipse(A,g,m/2+5,f/2+6,0,0,Math.PI*2),e.fill(),e.fillStyle=r()<.3?"#d8c8a8":"#e8ddd0",E&&w===1)e.strokeStyle="#1a0f0a",e.lineWidth=2,e.beginPath(),e.moveTo(A-m/2,g),e.lineTo(A+m/2,g+1),e.stroke(),e.strokeStyle="rgba(90,20,20,0.55)",e.lineWidth=1,e.beginPath(),e.moveTo(A-m/2-2,g-2),e.lineTo(A+m/2+2,g+2),e.stroke();else{e.beginPath(),e.ellipse(A,g,m/2,f/2,0,0,Math.PI*2),e.fill(),e.strokeStyle="rgba(140,30,30,0.35)",e.lineWidth=.6;for(let b=0;b<3;b++)e.beginPath(),e.moveTo(A-m/2+2,g+(r()-.5)*5),e.lineTo(A+m/2-2,g+(r()-.5)*5),e.stroke();const G=v?m*.42:m*.33,M=r()<.5?"#2a1e16":"#1a242e";e.fillStyle=M,e.beginPath(),e.arc(A+(r()-.5)*3,g+(r()-.5)*1.5,G,0,Math.PI*2),e.fill(),e.fillStyle="#050405",e.beginPath(),e.arc(A+(r()-.5)*2,g,G*.62,0,Math.PI*2),e.fill(),r()>.28&&(e.fillStyle="rgba(255,255,255,0.92)",e.beginPath(),e.arc(A+G*.38,g-G*.3,2.2,0,Math.PI*2),e.fill())}}e.strokeStyle="rgba(0,0,0,0.45)",e.lineWidth=1.1,e.beginPath(),e.moveTo(o,g+10),e.lineTo(o-3,a+16),e.lineTo(o+3,a+16),e.stroke(),e.fillStyle="rgba(0,0,0,0.65)",e.beginPath(),e.arc(o-5,a+16,1.3,0,Math.PI*2),e.fill(),e.beginPath(),e.arc(o+5,a+16,1.3,0,Math.PI*2),e.fill();const S=a+32+r()*6,P=Math.floor(r()*4);e.strokeStyle="#0f0706",e.lineWidth=1.6,e.lineCap="round",P===0?(e.beginPath(),e.moveTo(o-16,S),e.quadraticCurveTo(o,S+2,o+16,S),e.stroke(),e.beginPath(),e.moveTo(o-16,S),e.lineTo(o-18,S+4),e.stroke(),e.beginPath(),e.moveTo(o+16,S),e.lineTo(o+18,S+4),e.stroke()):P===1?(e.beginPath(),e.moveTo(o-20,S-2),e.quadraticCurveTo(o,S+9,o+20,S-2),e.stroke(),e.fillStyle="#0a0404",e.beginPath(),e.ellipse(o,S+3,13,5,0,0,Math.PI*2),e.fill(),e.fillStyle="rgba(210,200,180,0.92)",e.fillRect(o-10,S-1,20,2.2)):P===2?(e.fillStyle="#060202",e.beginPath(),e.ellipse(o,S+2,14,10,0,0,Math.PI*2),e.fill(),e.fillStyle="rgba(40,10,10,0.95)",e.beginPath(),e.ellipse(o,S+6,7,4,0,0,Math.PI*2),e.fill()):(e.fillStyle="#080303",e.beginPath(),e.ellipse(o,S,8,10,0,0,Math.PI*2),e.fill(),e.fillStyle="rgba(0,0,0,0.9)",e.beginPath(),e.ellipse(o,S,4,6,0,0,Math.PI*2),e.fill()),e.strokeStyle="rgba(0,0,0,0.18)",e.lineWidth=.5;for(let w=0;w<18;w++){e.beginPath();let A=14+r()*(n-28),G=14+r()*(i-28);e.moveTo(A,G);for(let M=0;M<4;M++)A+=(r()-.5)*50,G+=(r()-.5)*50,e.lineTo(A,G);e.stroke()}e.strokeStyle="#3a2e18",e.lineWidth=8,e.strokeRect(4,4,n-8,i-8),e.strokeStyle="#6b5626",e.lineWidth=2,e.strokeRect(9,9,n-18,i-18),e.fillStyle="rgba(0,0,0,0.35)",e.fillRect(0,0,n,14)})}bumpTexture(t,e=.35){return t}}const Oe=20,Be=16,xe=3;class co{constructor(t,e){this.scene=t,this.tex=e,this.walls=[],this.colliders=[],this.doors=[],this.interactables=[],this.lights=[],this.dustParticles=null,this.candles=[],this.group=new Me,t.add(this.group),this.build(),this.buildDustMotes()}wallBox(t,e,n,i,r=xe){return{min:new ht(t-n/2,e-i/2),max:new ht(t+n/2,e+i/2),h:r}}addWall(t,e,n,i,r){const o=new $t(n,xe,i),a=new ot(o,r);return a.position.set(t,xe/2,e),a.castShadow=!1,a.receiveShadow=!0,this.group.add(a),this.walls.push(a),this.colliders.push({min:new ht(t-n/2,e-i/2),max:new ht(t+n/2,e+i/2)}),a}addWallWithDoorway(t,e,n,i,r,o){if(n>i){const a=(n-r)/2;this.addWall(t-(r/2+a/2),e,a,i,o),this.addWall(t+(r/2+a/2),e,a,i,o)}else{const a=(i-r)/2;this.addWall(t,e-(r/2+a/2),n,a,o),this.addWall(t,e+(r/2+a/2),n,a,o)}}build(){const t=this.tex.get("woodFloor");t.repeat.set(2,1.6),t.anisotropy=8;const e=this.tex.get("wallpaper");e.repeat.set(2,1);const n=new yt({map:e,roughness:.85,metalness:.02,side:fe}),i=this.tex.get("plaster");i.repeat.set(1.5,1);const r=new yt({map:i,roughness:.95,metalness:0,side:fe,color:3025444}),o=this.tex.get("woodDark");o.repeat.set(1,1);const a=new yt({map:o,roughness:.7,color:4863269}),l=new Re(Oe,Be),c=new yt({map:t,roughness:.78,metalness:.06,color:7035464}),h=new ot(l,c);h.rotation.x=-Math.PI/2,h.position.y=0,h.receiveShadow=!0,this.group.add(h);const u=new Re(Oe,Be),d=new ot(u,r);d.rotation.x=Math.PI/2,d.position.y=xe,d.receiveShadow=!1,this.group.add(d);const p=.22;{const k=Be/2-p/2,q=(Oe-1.6)/2;this.addWall(-Oe/2+q/2,k,q,p,n),this.addWall(Oe/2-q/2,k,q,p,n);const L=new $t(1.6+.2,.4,p),I=new ot(L,a);I.position.set(0,xe-.2,k),this.group.add(I);const V=new $t(.12,xe,.12),X=new ot(V,a);X.position.set(-1.6/2,xe/2,k),this.group.add(X);const W=new ot(V,a);W.position.set(1.6/2,xe/2,k),this.group.add(W)}this.addWall(0,-Be/2+p/2,Oe,p,n),this.addWall(-Oe/2+p/2,0,p,Be,n),this.addWall(Oe/2-p/2,0,p,Be,n);const g=-2.5,_=2.5,m=n,f=-6.6,E=.35,v=7,S=1.15,P=[{x0:-10,x1:f-S/2},{x0:f+S/2,x1:E-S/2},{x0:E+S/2,x1:v-S/2},{x0:v+S/2,x1:10}];for(const B of P){const k=(B.x0+B.x1)/2,q=B.x1-B.x0;q>.05&&this.addWall(k,g,q,p,m)}const w=1.9,A=-6.6,G=6.6,M=[A,0,G],b=[{x0:-10,x1:A-w/2},{x0:A+w/2,x1:0-w/2},{x0:0+w/2,x1:G-w/2},{x0:G+w/2,x1:10}];for(const B of b){const k=(B.x0+B.x1)/2,q=B.x1-B.x0;q>.05&&this.addWall(k,_,q,p,m)}for(const B of M){const k=new ot(new $t(w+.15,.35,p),a);k.position.set(B,xe-.55,_),this.group.add(k);const q=new $t(.14,xe-.55,.08),L=new ot(q,a);L.position.set(B-w/2,(xe-.55)/2,_),this.group.add(L);const I=new ot(q,a);I.position.set(B+w/2,(xe-.55)/2,_),this.group.add(I)}this.addWall(-3.33,(-8+g)/2,p,Math.abs(-8-g),m),this.addWall(4,(-8+g)/2,p,Math.abs(-8-g),m),this.addWall(-3.33,(_+8)/2,p,Math.abs(8-_),m),this.addWall(3.33,(_+8)/2,p,Math.abs(8-_),m),this.addBaseboards(),this.createDoor(f,g,S,2.08,a,"study"),this.createDoor(E,g,S,2.08,a,"bedroom"),this.createFrontDoor(0,Be/2-.12,1.48,2.22,a),this.dressRooms(a),this.placeLights(),this.placeItems()}addBaseboards(){const n=new yt({color:1971215,roughness:.85}),i=(r,o,a,l)=>{const c=new ot(new $t(a,.14,l),n);c.position.set(r,.14/2+.01,o),c.receiveShadow=!0,this.group.add(c)};i(0,7.84,20,.04),i(0,-7.84,20,.04),i(-9.84,0,.04,16),i(9.84,0,.04,16),i(-3.33,-5.25,.04,5.5),i(4,-5.25,.04,5.5),i(-3.33,5.25,.04,5.5),i(3.33,5.25,.04,5.5),i(0,-2.38,20,.04),i(0,2.38,20,.04)}createDoor(t,e,n,i,r,o){const a=new Me;a.position.set(t-n/2,0,e),this.group.add(a);const l=new $t(n,i,.08),c=new yt({map:this.tex.get("woodDark"),roughness:.65,metalness:.06,color:5059618});c.map.repeat.set(1,1);const h=new ot(l,c);h.position.set(n/2,i/2,0),h.castShadow=!0,h.receiveShadow=!0,a.add(h);const u=new yt({color:3876888,roughness:.8});for(let _ of[.5,1.25]){const m=new ot(new $t(n*.62,.55,.02),u);m.position.set(n/2,_,.04),h.add(m)}const d=new ot(new ze(.075,10,10),new yt({color:12099690,metalness:.8,roughness:.25}));d.position.set(n-.18,i*.52,.09),h.add(d);const p=new ot(new $t(n+.18,.12,.14),r);p.position.set(n/2,i+.06,0),a.add(p);const g={id:o,pivot:a,mesh:h,w:n,h:i,closed:!0,angle:0,targetAngle:0,aabbClosed:{min:new ht(t-n/2,e-.08),max:new ht(t+n/2,e+.08)},isOpen:!1,interactsAt:new R(t,i/2,e),type:"door",locked:!1};this.doors.push(g),this.colliders.push(g.aabbClosed),g.colliderRef=this.colliders[this.colliders.length-1]}createFrontDoor(t,e,n,i,r){const o=new Me;o.position.set(t-n/2,0,e),this.group.add(o);const a=new yt({map:this.tex.get("woodDark"),roughness:.7,color:4073238}),l=new $t(n,i,.1),c=new ot(l,a);c.position.set(n/2,i/2,0),c.castShadow=!0,c.receiveShadow=!0,o.add(c);const h=new ot(new $t(n*.9,.04,.02),new yt({color:8018990,metalness:.6,roughness:.35}));h.position.set(n/2,i*.5,.06),c.add(h);const u=new ot(new $t(.14,.2,.03),new yt({color:13215820,metalness:.78,roughness:.28}));u.position.set(n-.2,i*.5,.07),c.add(u);const d=new ot(new Re(.55,.42),new yt({color:658964,roughness:.2,metalness:.1}));d.position.set(n/2,i*.78,.055),c.add(d);const p=new ot(new $t(n+.22,.14,.16),r);p.position.set(n/2,i+.07,0),o.add(p);const g=new ot(new gs(.09,.015,6,12),new yt({color:7039851,metalness:.7}));g.position.set(n-.14,i*.58,.08),g.rotation.y=Math.PI/2,c.add(g);const _={id:"front",pivot:o,mesh:c,w:n,h:i,closed:!0,angle:0,targetAngle:0,aabbClosed:{min:new ht(t-n/2,e-.12),max:new ht(t+n/2,e+.14)},isOpen:!1,interactsAt:new R(t+n/2,i/2,e-.55),type:"door",locked:!0,isFront:!0};this.doors.push(_),this.colliders.push(_.aabbClosed),_.colliderRef=this.colliders[this.colliders.length-1],this.frontDoor=_}updateDoors(t){for(const e of this.doors){const n=e.isOpen?-Math.PI*.52:0;e.isFront&&e.locked&&(e.isOpen=!1),e.angle+=(n-e.angle)*Math.min(1,t*6.5),e.pivot.rotation.y=e.angle;const r=Math.abs(e.angle)<.35,o=this.colliders.indexOf(e.colliderRef);r&&o===-1&&this.colliders.push(e.colliderRef),!r&&o!==-1&&this.colliders.splice(o,1)}}dressRooms(t){const e=this.tex.get("woodDark"),n=new yt({map:e,roughness:.72,color:4863270}),i=new yt({color:3023904,roughness:.92}),r=(u,d,p,g,_,m,f=n,E=!0)=>{const v=new ot(new $t(g,_,m),f);return v.position.set(u,d+_/2,p),v.castShadow=E,v.receiveShadow=!0,this.group.add(v),g*m>.7&&this.colliders.push({min:new ht(u-g/2,p-m/2),max:new ht(u+g/2,p+m/2)}),v},o=(u,d,p,g,_,m)=>{const f=new ot(new ye(g,g,_,12),m);return f.position.set(u,d+_/2,p),f.castShadow=!0,f.receiveShadow=!0,this.group.add(f),f};r(-7.2,0,6.2,1.9,.85,.95,n),r(-7.2,.85,6.2,1.9,.22,.95,i,!1),r(-8.6,0,4.2,.85,.6,.55),r(-4.8,0,5.8,1.25,.45,.72),r(-9.2,0,6.9,.12,1.1,.9,t),this.addPortrait(-9.78,1.65,5.25,Math.PI/2),this.addPortrait(-6.6,1.65,7.78,Math.PI),r(0,0,4.05,1.55,.78,.62),o(.35,.78,4.05,.12,.28,new yt({color:3811870})),o(-1.9,0,5.9,.06,1.85,new yt({color:1708558})),r(-1.9,1.85,5.9,.45,.06,.06,new yt({color:2825490})),r(6.6,0,5.55,2.1,.78,1.15);for(const[u,d]of[[6.6,4.55],[6.6,6.55],[5.45,5.55],[7.75,5.55]])r(u,0,d,.55,.95,.52,n);r(8.9,0,6.6,.9,1.55,.45),this.addPortrait(9.78,1.7,4.6,-Math.PI/2),this.addPortrait(6.6,1.7,7.78,Math.PI);const a=new yt({color:1709585,roughness:.95}),l=new ot(new Re(2.2,10.2),a);l.rotation.x=-Math.PI/2,l.position.set(0,.015,0),l.receiveShadow=!0,this.group.add(l),r(2.9,0,-.1,.62,.78,.42),this.addPortrait(-1.9,1.6,-2.62,0),this.addCobweb(-9.6,2.55,-2.3),this.addCobweb(9.6,2.55,-2.3),r(-8.7,0,-6.3,1.55,.78,.82),r(-8.7,.78,-6.3,1.55,.06,.82,new yt({color:2760212})),r(-6.3,0,-6.8,.58,.92,.58),r(-9.2,0,-4.05,1.45,1.75,.42);for(let u=0;u<7;u++){const d=-9.2+(Math.random()-.5)*1,p=.32+Math.random()*.18,g=new Nt().setHSL(.08+Math.random()*.08,.38,.22+Math.random()*.12);r(d,.28+u*.22,-3.82,.18,p,.22,new yt({color:g}))}r(-4.55,0,-5.3,.52,.88,1.05),this.addPortrait(-9.78,1.65,-5.25,Math.PI/2),this.addCobweb(-9.7,2.6,-7.6),o(-8.1,.84,-6,.08,.38,new yt({color:2827288,metalness:.4})),r(1.35,0,-6.9,2.05,.55,1.55,i),r(1.35,.55,-6.9,2.05,.18,1.55,new yt({color:4008474})),r(1.35,.73,-7.45,1.55,.22,.42,new yt({color:15261136})),r(-.95,0,-6.2,.62,.58,.52),r(2.95,0,-4.55,1.05,1.05,.62),r(2.95,1.05,-4.3,1.05,.06,.62,new yt({color:2760212})),this.addPortrait(.35,1.65,-7.78,0),this.addCobweb(3.6,2.55,-7.8),r(7.2,0,-7.4,4.2,.88,.62),r(9.45,0,-5.1,.62,.88,3.2),r(7.2,1.95,-7.68,3.9,.72,.38),r(9.68,1.95,-5.1,.38,.72,2.9),r(5.05,0,-6.9,.85,1.72,.78,new yt({color:15263974,roughness:.45,metalness:.15})),r(7,0,-4.2,.95,.78,.95);for(const[u,d]of[[6.2,-4.2],[7.8,-4.2],[7,-3.45]])r(u,0,d,.48,.86,.48);r(7.8,.88,-7.38,.72,.04,.42,new yt({color:10133670,metalness:.75,roughness:.25})),r(6.1,.88,-7.38,.68,.05,.48,new yt({color:1118481,roughness:.35,metalness:.2}));for(let u=0;u<4;u++){const d=new ot(new ye(.09,.09,.02,10),new yt({color:2763306}));d.position.set(5.88+u%2*.42,.91,-7.38+Math.floor(u/2)*.24-.12),this.group.add(d)}const c=[[-8.6,.6,4.2],[.35,.78,4.05],[8.9,1.55,6.6],[-8.1,.84,-6],[-.95,.58,-6.2],[7,.78,-4.2],[2.9,.78,-.1],[-4.8,.45,5.8]];for(const[u,d,p]of c)this.addCandle(u,d,p);const h=new yt({color:1708558,roughness:.9});for(let u of[-5,0,5]){const d=new ot(new $t(.22,.14,Be),h);d.position.set(u,xe-.07,0),this.group.add(d)}}addPortrait(t,e,n,i){this.tex.get("portrait");const r=this.tex.createCanvasTexture(256,320,(d,p,g)=>{const m=new gr().portrait(Math.random());d.drawImage(m.image,0,0,p,g)});r.colorSpace=Jt;const o=new yt({map:r,roughness:.65}),a=new Re(.92,1.15),l=new ot(a,o);l.position.set(t,e,n),l.rotation.y=i;const c=.12;Math.abs(i)<.1?l.position.z+=c:Math.abs(i-Math.PI)<.1?l.position.z-=c:Math.abs(i-Math.PI/2)<.1?l.position.x+=c:l.position.x-=c,this.group.add(l);const h=new ot(new $t(1.02,1.25,.035),new yt({color:2759951}));h.position.copy(l.position),h.rotation.y=i;const u=.025;Math.abs(i)<.1?h.position.z-=u:Math.abs(i-Math.PI)<.1?h.position.z+=u:Math.abs(i-Math.PI/2)<.1?h.position.x-=u:h.position.x+=u,this.group.add(h)}addCobweb(t,e,n){const i=new Me;i.position.set(t,e,n);const r=new Ko({color:7829367,transparent:!0,opacity:.18});for(let o=0;o<7;o++){const a=[],l=Math.random()*Math.PI*2;for(let u=0;u<=1;u+=.2){const d=u*.85,p=l+(Math.random()-.5)*.6;a.push(new R(Math.cos(p)*d,Math.sin(p)*d*.45,(Math.random()-.5)*.08))}const c=new Se().setFromPoints(a),h=new to(c,r);i.add(h)}for(let o=0;o<3;o++){const a=new Se().setFromPoints([new R(0,0,0),new R((Math.random()-.5)*1.2,(Math.random()-.5)*.4,0)]);i.add(new to(a,r))}this.group.add(i)}addCandle(t,e,n){const i=new ot(new ye(.065,.07,.22,8),new yt({color:15918792,roughness:.9}));i.position.set(t,e+.11,n),i.castShadow=!0,this.group.add(i);const r=new ot(new ye(.01,.01,.05,6),new yt({color:1118481}));r.position.set(t,e+.235,n),this.group.add(r);const o=new ze(.065,8,8);o.scale(1,1.8,1);const a=new me({color:16755268,transparent:!0,opacity:.92}),l=new ot(o,a);l.position.set(t,e+.3,n),this.group.add(l);const c=new as(16747562,1.45,6.2,1.8);c.position.set(t,e+.32,n),c.userData.baseIntensity=1.45,c.userData.flickerPhase=Math.random()*Math.PI*2,c.userData.isCandle=!0,this.group.add(c),this.lights.push(c),this.candles.push({wax:i,flame:l,light:c,x:t,y:e,z:n})}placeLights(){new me({color:11193599,transparent:!0,opacity:0});const t=[{x:-6.6,z:-7.92,col:8235263,inten:2.1},{x:.35,z:-7.92,col:8235263,inten:1.9},{x:7,z:-7.92,col:9154815,inten:2},{x:-9.92,z:5.25,col:7773695,inten:1.6},{x:9.92,z:5.25,col:7773695,inten:1.6},{x:9.92,z:-5.25,col:8235263,inten:1.4},{x:0,z:7.92,col:7311326,inten:1.2}];for(const n of t){const i=new as(n.col,n.inten,10,1.9);i.position.set(n.x,1.35,n.z),i.userData.isMoon=!0,i.userData.baseIntensity=n.inten,this.group.add(i),this.lights.push(i);const r=new ot(new Re(1.25,1.55),new me({color:n.col,transparent:!0,opacity:.075,side:fe}));Math.abs(n.z)>7?(r.position.set(n.x,1.55,n.z+(n.z<0?.12:-.12)),n.z<0?r.rotation.y=0:r.rotation.y=Math.PI):(r.position.set(n.x+(n.x<0?.12:-.12),1.55,n.z),r.rotation.y=n.x<0?Math.PI/2:-Math.PI/2),this.group.add(r);const o=new Me;o.position.copy(r.position),o.rotation.copy(r.rotation);const a=new ot(new $t(1.35,.06,.02),new yt({color:1708558}));a.position.z=.01,o.add(a);const l=new ot(new $t(.06,1.65,.02),new yt({color:1708558}));l.position.z=.01,o.add(l),this.group.add(o)}const e=[{x:0,y:2.82,z:3.9},{x:0,y:2.82,z:0}];for(const n of e){const i=new as(16763258,1.15,11,1.85);i.position.set(n.x,n.y,n.z),i.userData.isBulb=!0,i.userData.baseIntensity=1.15,i.userData.flickerPhase=Math.random()*Math.PI*2,this.group.add(i),this.lights.push(i);const r=new ot(new ze(.11,10,10),new yt({color:16773312,emissive:16757850,emissiveIntensity:2.2}));r.position.set(n.x,n.y,n.z),this.group.add(r);const o=new ot(new ye(.18,.18,.04,12),new yt({color:2760210}));o.position.set(n.x,n.y+.12,n.z),this.group.add(o)}}placeItems(){this.keySpots={kitchen:[{x:6.95,y:.44,z:-4.2},{x:6.1,y:.95,z:-7.38},{x:7.8,y:.95,z:-7.38},{x:9.2,y:.45,z:-5.8}],study:[{x:-8.7,y:.9,z:-6.3},{x:-9.2,y:1.05,z:-4.1},{x:-4.55,y:.9,z:-5.3},{x:-6.8,y:.15,z:-4.8}],bedroom:[{x:-.95,y:.62,z:-6.2},{x:1.35,y:.78,z:-6.9},{x:2.95,y:.45,z:-4.5},{x:.1,y:.15,z:-5}]},this.keyPositions=[];for(const e of["kitchen","study","bedroom"]){const n=this.keySpots[e],i=n[Math.floor(Math.random()*n.length)];this.keyPositions.push({room:e,...i})}this.keyMeshes=[];for(let e=0;e<this.keyPositions.length;e++){const n=this.keyPositions[e],i=this.makeKeyMesh(e+1);i.position.set(n.x,n.y+.32,n.z),i.userData.type="key",i.userData.index=e,i.userData.room=n.room,i.userData.collected=!1;const r=new as(16765562,.85,2.2,2);r.position.set(0,.08,0),i.add(r),i.userData.bobPhase=Math.random()*Math.PI*2,i.userData.baseY=n.y+.32,this.group.add(i),this.interactables.push(i),this.keyMeshes.push(i)}const t=[{x:-8.6,y:.62,z:4.2,id:"b1"},{x:6.6,y:.82,z:5.55,id:"b2"},{x:2.9,y:.8,z:-.1,id:"b3"},{x:5.05,y:.15,z:-5.8,id:"b4"}];this.batteryMeshes=[];for(const e of t){const n=this.makeBatteryMesh();n.position.set(e.x,e.y+.18,e.z),n.userData.type="battery",n.userData.collected=!1,n.userData.baseY=e.y+.18,n.userData.bobPhase=Math.random()*Math.PI*2,this.group.add(n),this.interactables.push(n),this.batteryMeshes.push(n)}this.noteSpots=[{x:0,y:.8,z:4.05,text:"note1",title:"A WARNING",body:`They sealed every exit. Three brass keys —
Kitchen, Study, Bedroom — open the front door.
If you see him, LIGHT burns him. Hold the
beam on him until he shrieks. Battery fades.
Find spares.

— M`},{x:-8.7,y:.9,z:-6.3,text:"note2",title:"HIS WEAKNESS",body:`He hates the light. The beam fills a burn
meter — keep it on him and he will banish.
In the end he will chase without rest.
You can only buy seconds. Run for the door.

— M`}];for(const e of this.noteSpots){const n=this.makeNoteMesh();n.position.set(e.x,e.y+.08,e.z),n.userData.type="note",n.userData.title=e.title,n.userData.body=e.body,n.userData.baseY=e.y+.08,n.userData.bobPhase=Math.random()*Math.PI*2,this.group.add(n),this.interactables.push(n)}}makeKeyMesh(t){const e=new Me,n=new yt({color:13215820,metalness:.82,roughness:.32,emissive:4009482,emissiveIntensity:.35}),i=new ot(new gs(.13,.032,8,16),n);i.rotation.y=Math.PI/2,i.position.set(-.14,0,0),e.add(i);const r=new ot(new ye(.03,.03,.42,8),n);r.rotation.z=Math.PI/2,r.position.set(.14,0,0),e.add(r);for(let u=0;u<3;u++){const d=new ot(new $t(.07,.055+Math.random()*.045,.03),n);d.position.set(.28+u*.06,-.045,0),e.add(d)}const o=document.createElement("canvas");o.width=64,o.height=64;const a=o.getContext("2d");a.fillStyle="#1a1208",a.fillRect(0,0,64,64),a.fillStyle="#c9a84c",a.font="bold 36px serif",a.textAlign="center",a.textBaseline="middle",a.fillText(String(t),32,34);const l=new wi(o);l.colorSpace=Jt;const c=new ot(new Re(.13,.13),new me({map:l,transparent:!0,side:fe}));c.position.set(-.14,.13,0),c.rotation.y=Math.PI/2,e.add(c);const h=new ot(new ze(.12,8,8),new me({color:16767082,transparent:!0,opacity:.22}));return e.add(h),e.userData.glow=h,e.scale.set(1.2,1.2,1.2),e}makeBatteryMesh(){const t=new Me,e=new yt({color:1975088,roughness:.6}),n=new yt({color:13215820,metalness:.6,roughness:.35}),i=new ot(new ye(.09,.09,.34,10),e);i.rotation.z=Math.PI/2,t.add(i);const r=new ot(new ye(.092,.092,.04,10),n);r.rotation.z=Math.PI/2,r.position.set(.18,0,0),t.add(r);const o=r.clone();o.position.set(-.18,0,0),t.add(o);const a=document.createElement("canvas");a.width=128,a.height=48;const l=a.getContext("2d");l.fillStyle="#d9dde8",l.fillRect(0,0,128,48),l.fillStyle="#0f1420",l.font="bold 14px sans-serif",l.textAlign="center",l.fillText("BATTERY",64,20),l.fillStyle="#1a5fb4",l.font="10px sans-serif",l.fillText("HEAVY DUTY",64,34);const c=new wi(a);c.colorSpace=Jt;const h=new ot(new Re(.2,.075),new me({map:c}));h.position.set(0,.091,0),h.rotation.x=-Math.PI/2,t.add(h);const u=new ot(new ze(.13,8,8),new me({color:6739199,transparent:!0,opacity:.18}));return t.add(u),t.userData.glow=u,t}makeNoteMesh(){const t=new Me,e=new yt({color:15261136,roughness:.92}),n=new ot(new $t(.32,.02,.42),e);t.add(n);const i=document.createElement("canvas");i.width=256,i.height=256;const r=i.getContext("2d");r.fillStyle="#e8ddd0",r.fillRect(0,0,256,256),r.strokeStyle="rgba(0,0,0,0.75)",r.lineWidth=1.8;for(let c=48;c<210;c+=18)r.beginPath(),r.moveTo(18,c),r.lineTo(238,c),r.stroke();r.fillStyle="rgba(120,20,20,0.35)",r.beginPath(),r.arc(198,38,9,0,Math.PI*2),r.fill();const o=new wi(i);o.colorSpace=Jt;const a=new ot(new Re(.32,.42),new me({map:o}));a.rotation.x=-Math.PI/2,a.position.y=.011,t.add(a);const l=new ot(new ze(.11,8,8),new me({color:16773824,transparent:!0,opacity:.14}));return t.add(l),t}buildDustMotes(){const e=new Se,n=new Float32Array(420*3),i=new Float32Array(420*3);for(let a=0;a<420;a++)n[a*3+0]=(Math.random()-.5)*Oe,n[a*3+1]=Math.random()*(xe-.2)+.15,n[a*3+2]=(Math.random()-.5)*Be,i[a*3+0]=(Math.random()-.5)*.1,i[a*3+1]=(Math.random()-.5)*.05-.02,i[a*3+2]=(Math.random()-.5)*.1;e.setAttribute("position",new Je(n,3)),e.userData.vel=i;const r=new jo({color:16773320,size:.04,transparent:!0,opacity:.78,blending:oi,depthWrite:!1,sizeAttenuation:!0}),o=new Sp(e,r);this.group.add(o),this.dustParticles=o}update(t,e,n,i,r){for(const o of this.candles){const a=Math.sin(e*7.2+o.light.userData.flickerPhase)*.22+Math.sin(e*13.5+o.light.userData.flickerPhase*1.7)*.11+(Math.random()-.5)*.06;o.light.intensity=Math.max(.15,o.light.userData.baseIntensity+a),o.flame.scale.setScalar(.92+Math.sin(e*9+o.light.userData.flickerPhase)*.18),o.flame.material.opacity=.72+Math.sin(e*11+o.light.userData.flickerPhase)*.22;const l=(Math.random()-.5)*.02;o.flame.material.color.setHSL(.075+l,1,.62)}for(const o of this.lights)if(o.userData.isBulb){const a=Math.sin(e*2.8+o.userData.flickerPhase)*.06+(Math.random()<.02?-.28:0);o.intensity=Math.max(.2,o.userData.baseIntensity+a)}for(const o of this.interactables){if(o.userData.collected)continue;const a=o.userData.bobPhase||0,l=o.userData.baseY+Math.sin(e*1.4+a)*.065;o.position.y=l,o.rotation.y+=t*.9,o.userData.glow&&(o.userData.glow.material.opacity=.18+Math.sin(e*2.2+a)*.08)}if(this.dustParticles){const o=this.dustParticles.geometry.attributes.position,a=this.dustParticles.geometry.userData.vel,l=o.array;let c=null;i&&r&&(r.position,c=new R(0,0,-1).applyQuaternion(r.quaternion));for(let h=0;h<l.length/3;h++)l[h*3+0]+=a[h*3+0]*t,l[h*3+1]+=a[h*3+1]*t,l[h*3+2]+=a[h*3+2]*t,l[h*3+0]<-Oe/2&&(l[h*3+0]=Oe/2),l[h*3+0]>Oe/2&&(l[h*3+0]=-Oe/2),l[h*3+1]<.1&&(l[h*3+1]=xe-.1),l[h*3+1]>xe&&(l[h*3+1]=.2),l[h*3+2]<-Be/2&&(l[h*3+2]=Be/2),l[h*3+2]>Be/2&&(l[h*3+2]=-Be/2),a[h*3+0]+=(Math.random()-.5)*.02*t*10,a[h*3+2]+=(Math.random()-.5)*.02*t*10,a[h*3+0]=Math.max(-.22,Math.min(.22,a[h*3+0])),a[h*3+2]=Math.max(-.22,Math.min(.22,a[h*3+2]));o.needsUpdate=!0,i&&c?(this.dustParticles.material.opacity=.52,this.dustParticles.visible=!0):this.dustParticles.material.opacity=.035}}getInteractableInRange(t,e=1.55){let n=null,i=1/0;for(const r of this.interactables){if(r.userData.collected)continue;const o=r.position.distanceTo(t);o<e&&o<i&&(i=o,n=r)}for(const r of this.doors){const a=(r.interactsAt||r.pivot.position).distanceTo(t);a<1.9&&a<i&&(i=a,n=r)}return n}collectKey(t){t.userData.collected=!0,t.visible=!1;for(const e of t.children)e.isPointLight&&(e.visible=!1)}collectBattery(t){t.userData.collected=!0,t.visible=!1}keysCollectedCount(){return this.keyMeshes.filter(t=>t.userData.collected).length}totalKeys(){return this.keyMeshes.length}}class Op{constructor(t,e,n,i){this.camera=t,this.scene=e,this.house=n,this.hud=i,this.pos=new R(0,1.62,5.55),this.vel=new R,this.yaw=0,this.pitch=0,this.yawTarget=0,this.pitchTarget=0,this.moveSpeed=2.35,this.sprintSpeed=4.15,this.isSprinting=!1,this.keys={w:!1,a:!1,s:!1,d:!1,shift:!1},this.radius=.32,this.mouseSens=.0022,this.flashlightOn=!0,this.battery=100,this.batteryDrainRate=.42,this.burnDrainRate=6.2,this.sputterThreshold=20,this.sputterTimer=0,this.flashlight=null,this.flashTarget=null,this.flashGroup=new Me,this.setupFlashlight(),this.headBob=0,this.isMoving=!1,this.locked=!1,this.enabled=!1,this.setupInput(),this.updateCamera(0)}setupFlashlight(){const t=new Ep(16774092,38,18,Math.PI/6.2,.38,1.6);t.castShadow=!0,t.shadow.mapSize.set(1024,1024),t.shadow.camera.near=.12,t.shadow.camera.far=18,t.shadow.focus=1,t.shadow.bias=-35e-5,t.decay=1.8,t.shadow.intensity=1,this.flashlight=t,this.scene.add(t),this.scene.add(t.target);const e=this.makeCookieTexture();this.flashCookie=e;const n=new ye(.05,3.1,12,20,1,!0);n.translate(0,-6,0);const i=new me({color:16773570,transparent:!0,opacity:.032,blending:oi,depthWrite:!1,side:fe});this.flashCone=new ot(n,i),this.flashCone.visible=!0,this.scene.add(this.flashCone),this.flashSway=new ht(0,0),this.flashSwayVel=new ht(0,0)}makeCookieTexture(){const t=document.createElement("canvas");t.width=256,t.height=256;const e=t.getContext("2d"),n=e.createRadialGradient(128,128,0,128,128,128);n.addColorStop(0,"rgba(255,255,255,1)"),n.addColorStop(.48,"rgba(255,255,255,0.92)"),n.addColorStop(.72,"rgba(255,255,255,0.42)"),n.addColorStop(.86,"rgba(255,255,255,0.08)"),n.addColorStop(1,"rgba(0,0,0,0)"),e.fillStyle=n,e.fillRect(0,0,256,256),e.strokeStyle="rgba(0,0,0,0.14)",e.lineWidth=1;for(let r=28;r<118;r+=22)e.beginPath(),e.arc(128,128,r+(Math.random()-.5)*4,0,Math.PI*2),e.stroke();return new wi(t)}setupInput(){document.addEventListener("keydown",t=>{if(!this.enabled)return;const e=t.key.toLowerCase();e==="w"&&(this.keys.w=!0),e==="a"&&(this.keys.a=!0),e==="s"&&(this.keys.s=!0),e==="d"&&(this.keys.d=!0),t.key==="Shift"&&(this.keys.shift=!0,this.isSprinting=!0),e==="f"&&this.toggleFlashlight()}),document.addEventListener("keyup",t=>{const e=t.key.toLowerCase();e==="w"&&(this.keys.w=!1),e==="a"&&(this.keys.a=!1),e==="s"&&(this.keys.s=!1),e==="d"&&(this.keys.d=!1),t.key==="Shift"&&(this.keys.shift=!1,this.isSprinting=!1)}),document.addEventListener("mousemove",t=>{if(!this.enabled||!document.pointerLockElement)return;const e=t.movementX||0,n=t.movementY||0;this.yawTarget-=e*this.mouseSens,this.pitchTarget-=n*this.mouseSens,this.pitchTarget=Math.max(-1.42,Math.min(1.42,this.pitchTarget))}),document.addEventListener("pointerlockchange",()=>{this.locked=document.pointerLockElement!==null})}enable(){this.enabled=!0}disable(){this.enabled=!1,this.keys.w=this.keys.a=this.keys.s=this.keys.d=!1}toggleFlashlight(){if(this.battery<=0){this.flashlightOn=!1;return}this.flashlightOn=!this.flashlightOn}collide(t,e,n){let i=t.clone();for(const r of n){const o=Math.max(r.min.x,Math.min(i.x,r.max.x)),a=Math.max(r.min.y,Math.min(i.z,r.max.y)),l=i.x-o,c=i.z-a,h=l*l+c*c;if(h<e*e){const u=Math.sqrt(h)||.001,d=e-u,p=l/u,g=c/u;i.x+=p*(d+.002),i.z+=g*(d+.002)}}return i}update(t,e,n){if(!this.enabled)return;this.yaw+=(this.yawTarget-this.yaw)*Math.min(1,t*22),this.pitch+=(this.pitchTarget-this.pitch)*Math.min(1,t*22);const i=new R,r=new R;i.set(-Math.sin(this.yaw),0,-Math.cos(this.yaw)),r.set(Math.cos(this.yaw),0,-Math.sin(this.yaw));const o=new R;this.keys.w&&o.add(i),this.keys.s&&o.sub(i),this.keys.a&&o.sub(r),this.keys.d&&o.add(r),o.lengthSq()>0?(o.normalize(),this.isMoving=!0):this.isMoving=!1;const a=this.keys.shift?this.sprintSpeed:this.moveSpeed,l=o.multiplyScalar(a*t);let c=this.pos.clone(),h=new R(c.x+l.x,c.y,c.z),u=this.collide(h,this.radius,this.house.colliders);if(c.x=u.x,h=new R(c.x,c.y,c.z+l.z),u=this.collide(h,this.radius,this.house.colliders),c.z=u.z,c.x=Math.max(-9.7,Math.min(9.7,c.x)),c.z=Math.max(-7.7,Math.min(7.7,c.z)),this.pos.copy(c),this.isMoving){const p=this.keys.shift?9.2:6.4,g=this.keys.shift?.065:.038;this.headBob+=t*p;const _=Math.sin(this.headBob)*g;Math.sin(this.headBob*.5)*g*.55,this.pos.y=1.62+_,this.camera.rotation.z=Math.sin(this.headBob*.5)*.014*(this.keys.shift?1.6:1),this.flashSwayVel.x+=(Math.sin(this.headBob)*.06-this.flashSway.x)*t*10,this.flashSwayVel.y+=(Math.sin(this.headBob*.5)*.03-this.flashSway.y)*t*10}else this.headBob+=t*1.2,this.pos.y+=Math.sin(this.headBob)*.004*t*60,this.pos.y=cn.lerp(this.pos.y,1.62,t*3),this.camera.rotation.z=cn.lerp(this.camera.rotation.z,0,t*5);if(this.updateCamera(t),this.flashlightOn){let p=this.batteryDrainRate;n&&(p+=this.burnDrainRate),this.battery-=p*t,this.battery<0&&(this.battery=0),this.battery===0&&(this.flashlightOn=!1)}this.sputterTimer+=t;let d=!1;if(this.flashlightOn&&this.battery<this.sputterThreshold&&this.battery>0){const p=this.battery/this.sputterThreshold,g=(1-p)*.18;Math.random()<g&&(d=!0),Math.random()<.015*(1-p)*6&&(this._sputterDip=.45)}this._sputterDip&&this._sputterDip>0&&(this._sputterDip-=t,d=!0),this.updateFlashlight(t,e,d)}updateCamera(t){this.camera.position.copy(this.pos),this.camera.rotation.order="YXZ",this.camera.rotation.y=this.yaw,this.camera.rotation.x=this.pitch}updateFlashlight(t,e,n){if(!this.flashlight)return;const i=this.camera.position.clone(),r=new R(0,0,-1).applyQuaternion(this.camera.quaternion),o=new R().crossVectors(r,new R(0,1,0)).normalize(),a=new R().crossVectors(o,r).normalize(),l=this.flashSway.x+Math.sin(e*.85)*.012,c=this.flashSway.y+Math.cos(e*.62)*.009,h=new R().addScaledVector(o,l).addScaledVector(a,c),u=i.clone().add(h).addScaledVector(r,.18).add(new R(0,-.14,0));this._flatPos||(this._flatPos=u.clone()),this._flatPos.lerp(u,Math.min(1,t*14)),this.flashlight.position.copy(this._flatPos);const p=i.clone().addScaledVector(r,9.5).addScaledVector(o,l*3.2).addScaledVector(a,c*2.1+Math.sin(e*1.1)*.04);this._flatTarget||(this._flatTarget=p.clone()),this._flatTarget.lerp(p,Math.min(1,t*11)),this.flashlight.target.position.copy(this._flatTarget);let g=38;if(!this.flashlightOn||this.battery<=0)this.flashlight.intensity=0,this.flashCone&&(this.flashCone.visible=!1);else{let _=g;if(_+=Math.sin(e*6.5)*.55+(Math.random()-.5)*.35,n)_*=.18+Math.random()*.38,this.flashlight.angle=cn.lerp(this.flashlight.angle,Math.PI/7.2,t*18);else{const m=.72+.28*(this.battery/100);_*=m,this.flashlight.angle=cn.lerp(this.flashlight.angle,Math.PI/6.2,t*6)}if(this.flashlight.intensity=_,this.flashCone){this.flashCone.visible=!0,this.flashCone.position.copy(this.flashlight.position);const m=new R().subVectors(this.flashlight.target.position,this.flashlight.position).normalize();this.flashCone.quaternion.setFromUnitVectors(new R(0,-1,0),m),this.flashCone.material.opacity=n?.012:.031+Math.sin(e*2)*.004}}}setBurningBoost(t){this.flashlight&&t&&this.flashlightOn&&(this.flashlight.intensity=Math.min(52,this.flashlight.intensity+6),this.flashlight.angle=Math.PI/5.6)}addBattery(t=42){this.battery=Math.min(100,this.battery+t),this.battery>2&&this.flashlightOn}getBattery(){return this.battery}isFlashlightOn(){return this.flashlightOn&&this.battery>0}getPosition(){return this.pos.clone()}getDirection(){return new R(0,0,-1).applyQuaternion(this.camera.quaternion)}requestPointerLock(t){t&&t.requestPointerLock&&t.requestPointerLock()}}class Bp{constructor(){this.ctx=null,this.master=null,this.started=!1,this.nodes={},this.heartbeatRate=0,this.breathingIntensity=0,this.chaseActive=!1,this.lowDroneGain=null,this._heartbeatTimer=0,this._heartInterval=.9,this._breathPhase=0,this._rainNodes=[],this._thunderTimeout=null}async start(){if(this.started)return;const t=window.AudioContext||window.webkitAudioContext;this.ctx=new t,this.ctx.state==="suspended"&&await this.ctx.resume(),this.master=this.ctx.createGain(),this.master.gain.value=.82,this.master.connect(this.ctx.destination),this.reverb=this.ctx.createConvolver(),this.reverb.buffer=this.makeReverbImpulse(2.6,2.8),this.reverbGain=this.ctx.createGain(),this.reverbGain.gain.value=.22,this.reverb.connect(this.reverbGain),this.reverbGain.connect(this.master),this.startDrone(),this.startRain(),this.startHeartbeatLoop(),this.startBreathingLoop(),this.started=!0}makeReverbImpulse(t,e){const n=this.ctx.sampleRate,i=n*t,r=this.ctx.createBuffer(2,i,n);for(let o=0;o<2;o++){const a=r.getChannelData(o);for(let l=0;l<i;l++)a[l]=(Math.random()*2-1)*Math.pow(1-l/i,e)*.55}return r}startDrone(){const t=this.ctx,e=t.createGain();e.gain.value=0,e.gain.linearRampToValueAtTime(.09,t.currentTime+2.5);const n=t.createBiquadFilter();n.type="lowpass",n.frequency.value=220,n.Q.value=.7,n.connect(e),e.connect(this.master),e.connect(this.reverb);const i=t.createOscillator();i.type="sawtooth",i.frequency.value=38;const r=t.createGain();r.gain.value=.07,i.connect(r),r.connect(n),i.start();const o=t.createOscillator();o.type="triangle",o.frequency.value=56.5;const a=t.createGain();a.gain.value=.05,o.connect(a),a.connect(n),o.start();const l=t.createBuffer(1,t.sampleRate*2,t.sampleRate),c=l.getChannelData(0);let h=0;for(let m=0;m<c.length;m++){const f=Math.random()*2-1;h=(h+.02*f)/1.02,c[m]=h*3.5}const u=t.createBufferSource();u.buffer=l,u.loop=!0;const d=t.createGain();d.gain.value=.016;const p=t.createBiquadFilter();p.type="lowpass",p.frequency.value=90,u.connect(p),p.connect(d),d.connect(n),u.start(),this.nodes.droneGain=e,this.nodes.droneFilt=n,this.lowDroneGain=e;const g=t.createOscillator();g.frequency.value=.07;const _=t.createGain();_.gain.value=14,g.connect(_),_.connect(n.frequency),g.start(),setInterval(()=>{this.ctx&&i.frequency.linearRampToValueAtTime(38+Math.sin(Date.now()*13e-5)*2.2,t.currentTime+.8)},900)}startRain(){const t=this.ctx;for(let n=0;n<2;n++){const i=t.createBuffer(1,t.sampleRate*2,t.sampleRate),r=i.getChannelData(0);for(let h=0;h<r.length;h++)r[h]=Math.random()*2-1;const o=t.createBufferSource();o.buffer=i,o.loop=!0;const a=t.createBiquadFilter();a.type="bandpass",a.frequency.value=3200,a.Q.value=.3;const l=t.createGain();l.gain.value=n===0?.045:.042;const c=t.createStereoPanner();c.pan.value=n===0?-.55:.55,o.connect(a),a.connect(l),l.connect(c),c.connect(this.master),o.start(),this._rainNodes.push({src:o,gain:l,filt:a})}const e=()=>{this.ctx&&(Math.random()<.42&&this.playDrip(),setTimeout(e,280+Math.random()*900))};setTimeout(e,600)}playDrip(t=(Math.random()-.5)*.8){if(!this.ctx)return;const e=this.ctx,n=e.createOscillator();n.type="sine",n.frequency.value=1800+Math.random()*800;const i=e.createGain();i.gain.value=0;const r=e.createBiquadFilter();r.type="lowpass",r.frequency.value=4e3;const o=e.createStereoPanner();o.pan.value=t,n.connect(r),r.connect(i),i.connect(o),o.connect(this.master);const a=e.currentTime;i.gain.setValueAtTime(0,a),i.gain.linearRampToValueAtTime(.14,a+.008),i.gain.exponentialRampToValueAtTime(.001,a+.38),n.frequency.exponentialRampToValueAtTime(620,a+.38),n.start(a),n.stop(a+.4)}setHeartbeat(t){this.heartbeatRate=Math.max(0,Math.min(1,t))}startHeartbeatLoop(){const t=()=>{if(!this.ctx){requestAnimationFrame(t);return}if(this._heartbeatTimer-=.016,this._heartbeatTimer<=0){const e=this.heartbeatRate;if(e>.02){this.playHeartbeat(e),setTimeout(()=>{this.heartbeatRate>.04&&this.playHeartbeat(e*.78)},210);const n=.92-e*.52;this._heartbeatTimer=n+(Math.random()-.5)*.06}else this._heartbeatTimer=.55}requestAnimationFrame(t)};requestAnimationFrame(t)}playHeartbeat(t){const e=this.ctx,n=e.currentTime,i=e.createOscillator();i.type="sine",i.frequency.value=48+t*6;const r=e.createGain();r.gain.value=0;const o=e.createBiquadFilter();o.type="lowpass",o.frequency.value=140,i.connect(o),o.connect(r),r.connect(this.master),r.gain.setValueAtTime(0,n),r.gain.linearRampToValueAtTime(.38*(.35+t*.85),n+.018),r.gain.exponentialRampToValueAtTime(.001,n+.42),i.start(n),i.stop(n+.45);const a=e.createOscillator();a.type="sine",a.frequency.value=96;const l=e.createGain();l.gain.value=0,a.connect(l),l.connect(this.master),l.gain.setValueAtTime(0,n),l.gain.linearRampToValueAtTime(.08*t,n+.02),l.gain.exponentialRampToValueAtTime(.001,n+.28),a.start(n),a.stop(n+.3)}setBreathing(t){this.breathingIntensity=Math.max(0,Math.min(1,t))}startBreathingLoop(){this.ctx;const t=()=>{if(!this.ctx){setTimeout(t,600);return}const e=this.breathingIntensity;e>.03&&Math.random()<.92&&this.playBreath(e);const n=e>.5?1400+Math.random()*500:2600+Math.random()*1800;setTimeout(t,n)};setTimeout(t,1200)}playBreath(t){const e=this.ctx,n=e.currentTime,i=1.15+t*.45,r=e.createBuffer(1,e.sampleRate*i,e.sampleRate),o=r.getChannelData(0);for(let g=0;g<o.length;g++)o[g]=(Math.random()*2-1)*.5;const a=e.createBufferSource();a.buffer=r;const l=e.createBiquadFilter();l.type="bandpass",l.frequency.value=420+t*180,l.Q.value=.85;const c=e.createGain();c.gain.value=0;const h=e.createStereoPanner();h.pan.value=(Math.random()-.5)*.35,a.connect(l),l.connect(c),c.connect(h),h.connect(this.master),h.connect(this.reverb);const u=.06+t*.22;c.gain.setValueAtTime(0,n),c.gain.linearRampToValueAtTime(u,n+i*.28),c.gain.linearRampToValueAtTime(u*.85,n+i*.62),c.gain.exponentialRampToValueAtTime(.001,n+i);const d=e.createOscillator();d.type="sine",d.frequency.value=78+t*22;const p=e.createGain();p.gain.value=0,d.connect(p),p.connect(this.master),p.gain.setValueAtTime(0,n),p.gain.linearRampToValueAtTime(.07*t,n+.15),p.gain.exponentialRampToValueAtTime(.001,n+i*.9),a.start(n),d.start(n),a.stop(n+i),d.stop(n+i)}playCreak(t=(Math.random()-.5)*.9,e=.5){if(!this.ctx)return;const n=this.ctx,i=n.currentTime,r=.65+Math.random()*.9,o=n.createOscillator();o.type="sawtooth",o.frequency.setValueAtTime(220+Math.random()*180,i),o.frequency.exponentialRampToValueAtTime(38+Math.random()*24,i+r);const a=n.createGain();a.gain.setValueAtTime(0,i),a.gain.linearRampToValueAtTime(.18*(.45+e*.85),i+.06),a.gain.exponentialRampToValueAtTime(.001,i+r);const l=n.createBiquadFilter();l.type="lowpass",l.frequency.value=1400;const c=n.createStereoPanner();c.pan.value=t,o.connect(l),l.connect(a),a.connect(c),c.connect(this.master),c.connect(this.reverb),o.start(i),o.stop(i+r+.05);const h=n.createOscillator();h.type="square",h.frequency.value=120;const u=n.createGain();u.gain.setValueAtTime(0,i),u.gain.linearRampToValueAtTime(.11,i+.008),u.gain.exponentialRampToValueAtTime(.001,i+.09),h.connect(u),u.connect(c),h.start(i),h.stop(i+.1)}playWhisper(t=(Math.random()-.5)*.85){if(!this.ctx)return;const e=this.ctx,n=e.currentTime,i=1.2+Math.random()*1,r=e.createBuffer(1,e.sampleRate*i,e.sampleRate),o=r.getChannelData(0);for(let f=0;f<o.length;f++)o[f]=Math.random()*2-1;const a=e.createBufferSource();a.buffer=r;const l=e.createBiquadFilter();l.type="highpass",l.frequency.value=1100;const c=e.createBiquadFilter();c.type="bandpass",c.frequency.value=1800+Math.random()*900,c.Q.value=3.2;const h=e.createGain();h.gain.value=0;const u=e.createStereoPanner();u.pan.value=t,a.connect(l),l.connect(c),c.connect(h),h.connect(u),u.connect(this.master);const d=e.createGain();d.gain.value=.18,h.connect(d),d.connect(this.reverb),h.gain.setValueAtTime(0,n),h.gain.linearRampToValueAtTime(.065,n+.22),h.gain.linearRampToValueAtTime(.048,n+i*.65),h.gain.exponentialRampToValueAtTime(.001,n+i);const p=e.createOscillator();p.type="sine",p.frequency.value=165+Math.random()*120;const g=e.createGain();g.gain.setValueAtTime(0,n),g.gain.linearRampToValueAtTime(.035,n+.18),g.gain.exponentialRampToValueAtTime(.001,n+i*.9);const _=e.createOscillator();_.frequency.value=5.2;const m=e.createGain();m.gain.value=6,_.connect(m),m.connect(p.frequency),_.start(n),p.connect(g),g.connect(u),a.start(n),p.start(n),a.stop(n+i),p.stop(n+i),_.stop(n+i)}playKnock(t){if(!this.ctx)return;const e=this.ctx,n=e.currentTime;for(let i=0;i<2+Math.floor(Math.random()*2);i++){const r=e.createOscillator();r.type="sine",r.frequency.value=85+Math.random()*25;const o=e.createGain();o.gain.value=0;const a=e.createStereoPanner();a.pan.value=t+(Math.random()-.5)*.12,r.connect(o),o.connect(a),a.connect(this.master);const l=n+i*.22+Math.random()*.05;o.gain.setValueAtTime(0,l),o.gain.linearRampToValueAtTime(.42,l+.008),o.gain.exponentialRampToValueAtTime(.001,l+.22),r.start(l),r.stop(l+.24);const c=e.createOscillator();c.type="square",c.frequency.value=180;const h=e.createGain();h.gain.value=0,c.connect(h),h.connect(a),h.gain.setValueAtTime(0,l),h.gain.linearRampToValueAtTime(.13,l+.004),h.gain.exponentialRampToValueAtTime(.001,l+.06),c.start(l),c.stop(l+.07)}}playThud(t=0){if(!this.ctx)return;const e=this.ctx,n=e.currentTime,i=e.createOscillator();i.type="sine",i.frequency.setValueAtTime(72,n),i.frequency.exponentialRampToValueAtTime(28,n+.55);const r=e.createGain(),o=e.createStereoPanner();o.pan.value=t,i.connect(r),r.connect(o),o.connect(this.master),o.connect(this.reverb),r.gain.setValueAtTime(0,n),r.gain.linearRampToValueAtTime(.58,n+.012),r.gain.exponentialRampToValueAtTime(.001,n+.72),i.start(n),i.stop(n+.75);const a=e.createOscillator();a.type="sine",a.frequency.value=34;const l=e.createGain();l.gain.setValueAtTime(0,n),l.gain.linearRampToValueAtTime(.42,n+.015),l.gain.exponentialRampToValueAtTime(.001,n+.9),a.connect(l),l.connect(this.master),a.start(n),a.stop(n+.95)}playDoorCreak(t=!0){if(!this.ctx)return;const e=this.ctx,n=e.currentTime,i=t?1.05:.75,r=e.createOscillator();r.type="sawtooth",r.frequency.setValueAtTime(t?95:145,n),r.frequency.linearRampToValueAtTime(t?285:72,n+i);const o=e.createGain();o.gain.setValueAtTime(0,n),o.gain.linearRampToValueAtTime(.21,n+.09),o.gain.linearRampToValueAtTime(.16,n+i*.6),o.gain.exponentialRampToValueAtTime(.001,n+i);const a=e.createBiquadFilter();a.type="lowpass",a.frequency.value=1100,r.connect(a),a.connect(o),o.connect(this.master),o.connect(this.reverb),r.start(n),r.stop(n+i+.05);const l=e.createOscillator();l.type="sine",l.frequency.value=1150;const c=e.createGain();c.gain.setValueAtTime(0,n+.08),c.gain.linearRampToValueAtTime(.045,n+.14),c.gain.exponentialRampToValueAtTime(.001,n+.55),l.connect(c),c.connect(this.master),l.start(n+.08),l.stop(n+.6)}playSlam(){if(!this.ctx)return;const t=this.ctx,e=t.currentTime;this.playThud((Math.random()-.5)*.6);const n=t.createOscillator();n.type="square",n.frequency.value=180;const i=t.createGain();i.gain.setValueAtTime(0,e),i.gain.linearRampToValueAtTime(.22,e+.006),i.gain.exponentialRampToValueAtTime(.001,e+.18);const r=t.createStereoPanner();r.pan.value=(Math.random()-.5)*.5,n.connect(i),i.connect(r),r.connect(this.master),n.start(e),n.stop(e+.2);const o=t.createOscillator();o.type="sine",o.frequency.value=42;const a=t.createGain();a.gain.setValueAtTime(0,e),a.gain.linearRampToValueAtTime(.5,e+.012),a.gain.exponentialRampToValueAtTime(.001,e+.65),o.connect(a),a.connect(this.reverb),o.start(e),o.stop(e+.7)}playCabinetBang(){if(!this.ctx)return;const t=this.ctx,e=t.currentTime;for(let l=0;l<2;l++){const c=t.createOscillator();c.type="square",c.frequency.value=145+l*52;const h=t.createGain();h.gain.setValueAtTime(0,e+l*.09),h.gain.linearRampToValueAtTime(.26,e+l*.09+.008),h.gain.exponentialRampToValueAtTime(.001,e+l*.09+.22);const u=t.createStereoPanner();u.pan.value=.35,c.connect(h),h.connect(u),u.connect(this.master),c.start(e+l*.09),c.stop(e+l*.09+.25)}const n=t.createBuffer(1,t.sampleRate*.35,t.sampleRate),i=n.getChannelData(0);for(let l=0;l<i.length;l++)i[l]=Math.random()*2-1;const r=t.createBufferSource();r.buffer=n;const o=t.createBiquadFilter();o.type="bandpass",o.frequency.value=2200,o.Q.value=.9;const a=t.createGain();a.gain.value=0,r.connect(o),o.connect(a),a.connect(this.master),a.gain.setValueAtTime(0,e+.14),a.gain.linearRampToValueAtTime(.11,e+.16),a.gain.exponentialRampToValueAtTime(.001,e+.45),r.start(e+.14)}playStinger(t=1){if(!this.ctx)return;const e=this.ctx,n=e.currentTime,i=[110,138.5,164.8,195,233];for(const d of i){const p=e.createOscillator();p.type="sawtooth",p.frequency.value=d+(Math.random()-.5)*6;const g=e.createGain();g.gain.setValueAtTime(0,n),g.gain.linearRampToValueAtTime(.11*t,n+.018),g.gain.exponentialRampToValueAtTime(.001,n+1.45);const _=e.createBiquadFilter();_.type="lowpass",_.frequency.value=1800,p.connect(_),_.connect(g),g.connect(this.master),p.start(n),p.stop(n+1.5)}const r=e.createOscillator();r.type="sine",r.frequency.setValueAtTime(38,n),r.frequency.exponentialRampToValueAtTime(22,n+.9);const o=e.createGain();o.gain.setValueAtTime(0,n),o.gain.linearRampToValueAtTime(.65*t,n+.02),o.gain.exponentialRampToValueAtTime(.001,n+1.2),r.connect(o),o.connect(this.master),r.start(n),r.stop(n+1.25);const a=e.createBuffer(1,e.sampleRate*.45,e.sampleRate),l=a.getChannelData(0);for(let d=0;d<l.length;d++)l[d]=Math.random()*2-1;const c=e.createBufferSource();c.buffer=a;const h=e.createBiquadFilter();h.type="highpass",h.frequency.value=1400;const u=e.createGain();u.gain.setValueAtTime(0,n),u.gain.linearRampToValueAtTime(.22*t,n+.01),u.gain.exponentialRampToValueAtTime(.001,n+.38),c.connect(h),h.connect(u),u.connect(this.master),c.start(n)}playScream(t=!1){if(!this.ctx)return;const e=this.ctx,n=e.currentTime,i=t?1.45:.95,r=420+Math.random()*120,o=e.createOscillator();o.type="sawtooth",o.frequency.setValueAtTime(r,n),o.frequency.linearRampToValueAtTime(r*.58,n+i*.42),o.frequency.linearRampToValueAtTime(r*1.25,n+i);const a=e.createGain();a.gain.setValueAtTime(0,n),a.gain.linearRampToValueAtTime(t?.48:.32,n+.04),a.gain.exponentialRampToValueAtTime(.001,n+i);const l=e.createBiquadFilter();l.type="bandpass",l.frequency.value=1500,l.Q.value=.9;const c=e.createOscillator();c.frequency.value=11;const h=e.createGain();h.gain.value=32,c.connect(h),h.connect(o.frequency),c.start(n),o.connect(l),l.connect(a),a.connect(this.master);const u=e.createOscillator();u.type="sawtooth",u.frequency.value=r*1.01;const d=e.createGain();d.gain.setValueAtTime(0,n),d.gain.linearRampToValueAtTime(.22,n+.035),d.gain.exponentialRampToValueAtTime(.001,n+i*.95),u.connect(d),d.connect(this.master),o.start(n),u.start(n),o.stop(n+i),u.stop(n+i),c.stop(n+i),this.playThud(0)}playGrowl(){if(!this.ctx)return;const t=this.ctx,e=t.currentTime,n=1.45,i=t.createOscillator();i.type="sawtooth",i.frequency.setValueAtTime(72,e),i.frequency.linearRampToValueAtTime(38,e+n);const r=t.createGain();r.gain.setValueAtTime(0,e),r.gain.linearRampToValueAtTime(.38,e+.12),r.gain.exponentialRampToValueAtTime(.001,e+n);const o=t.createBiquadFilter();o.type="lowpass",o.frequency.value=520;const a=t.createOscillator();a.type="sine",a.frequency.value=28;const l=t.createGain();l.gain.value=22,a.connect(l),l.connect(i.frequency),a.start(e),i.connect(o),o.connect(r),r.connect(this.master),r.connect(this.reverb),i.start(e),i.stop(e+n),a.stop(e+n),this.playBreath(.92)}playPickup(t=!0){if(!this.ctx)return;const e=this.ctx,n=e.currentTime;if(t){for(let a=0;a<3;a++){const l=e.createOscillator();l.type="sine",l.frequency.value=620+a*420;const c=e.createGain();c.gain.setValueAtTime(0,n+a*.07),c.gain.linearRampToValueAtTime(.18,n+a*.07+.015),c.gain.exponentialRampToValueAtTime(.001,n+a*.07+.85),l.connect(c),c.connect(this.master),l.start(n+a*.07),l.stop(n+a*.07+.9)}const i=e.createOscillator();i.type="triangle",i.frequency.value=1240;const r=e.createGain();r.gain.value=0,i.connect(r),r.connect(this.master);const o=n+.18;r.gain.setValueAtTime(0,o),r.gain.linearRampToValueAtTime(.08,o+.02),r.gain.exponentialRampToValueAtTime(.001,o+1),i.start(o),i.stop(o+1.05)}else{const i=e.createOscillator();i.type="sine",i.frequency.value=340;const r=e.createGain();r.gain.setValueAtTime(0,n),r.gain.linearRampToValueAtTime(.22,n+.02),r.gain.exponentialRampToValueAtTime(.001,n+.45),i.connect(r),r.connect(this.master),i.start(n),i.stop(n+.5);const o=e.createOscillator();o.type="sine",o.frequency.value=680;const a=e.createGain();a.gain.setValueAtTime(0,n+.06),a.gain.linearRampToValueAtTime(.12,n+.08),a.gain.exponentialRampToValueAtTime(.001,n+.65),o.connect(a),a.connect(this.master),o.start(n+.06),o.stop(n+.7)}}playThunder(t=.2+Math.random()*.9){if(!this.ctx)return;const e=this.ctx,n=e.currentTime+t,i=2.2+Math.random()*2.4,r=e.createBuffer(1,e.sampleRate*i,e.sampleRate),o=r.getChannelData(0);let a=0;for(let u=0;u<o.length;u++){const d=Math.random()*2-1;a=(a+.018*d)/1.018,o[u]=a*3.2*(.65+Math.sin(u*42e-5)*.35)}const l=e.createBufferSource();l.buffer=r;const c=e.createBiquadFilter();c.type="lowpass",c.frequency.setValueAtTime(420,n),c.frequency.exponentialRampToValueAtTime(85,n+i*.72);const h=e.createGain();if(h.gain.setValueAtTime(0,n),h.gain.linearRampToValueAtTime(.42,n+.18),h.gain.linearRampToValueAtTime(.31,n+i*.38),h.gain.exponentialRampToValueAtTime(.001,n+i),l.connect(c),c.connect(h),h.connect(this.master),h.connect(this.reverb),l.start(n),Math.random()<.42){const u=e.createBuffer(1,e.sampleRate*.18,e.sampleRate),d=u.getChannelData(0);for(let m=0;m<d.length;m++)d[m]=Math.random()*2-1;const p=e.createBufferSource();p.buffer=u;const g=e.createBiquadFilter();g.type="highpass",g.frequency.value=1600;const _=e.createGain();_.gain.setValueAtTime(0,n+.08),_.gain.linearRampToValueAtTime(.32,n+.095),_.gain.exponentialRampToValueAtTime(.001,n+.32),p.connect(g),g.connect(_),_.connect(this.master),p.start(n+.08)}}startChaseMusic(){if(!this.ctx||this.chaseActive)return;this.chaseActive=!0;const t=this.ctx;this._chaseNodes=[];const e=t.currentTime,n=t.createOscillator();n.type="sine",n.frequency.value=52;const i=t.createGain();i.gain.value=0;const r=t.createBiquadFilter();r.type="lowpass",r.frequency.value=180,n.connect(r),r.connect(i),i.connect(this.master),n.start(e);const o=t.createOscillator();o.type="sawtooth",o.frequency.value=220;const a=t.createOscillator();a.type="sawtooth",a.frequency.value=221.5;const l=t.createGain();l.gain.value=0;const c=t.createBiquadFilter();c.type="bandpass",c.frequency.value=1200,c.Q.value=.8,o.connect(l),a.connect(l),l.connect(c),c.connect(this.master),o.start(e),a.start(e);const h=t.createOscillator();h.frequency.value=14;const u=t.createGain();u.gain.value=.075,h.connect(u),u.connect(l.gain),h.start(e),this._chaseNodes.push(n,o,a,h),i.gain.linearRampToValueAtTime(.19,e+.8),l.gain.linearRampToValueAtTime(.11,e+.6),this.chasePulseGain=i,this.chaseStrGain=l,this.chasePulseOsc=n,this.chaseTremLFO=h;const d=setInterval(()=>{if(!this.chaseActive||!this.ctx){clearInterval(d);return}const _=t.currentTime,m=this.chasePulseGain.gain;m.cancelScheduledValues(_),m.setValueAtTime(m.value,_),m.linearRampToValueAtTime(.32,_+.04),m.exponentialRampToValueAtTime(.09,_+.32)},540);this._chasePulseInterval=d;let p=220;const g=setInterval(()=>{if(!this.chaseActive||!this.ctx){clearInterval(g);return}p+=.35,p>360&&(p=220),o.frequency.linearRampToValueAtTime(p,t.currentTime+.4),a.frequency.linearRampToValueAtTime(p*1.0068,t.currentTime+.4),Math.random()<.18&&(o.frequency.setValueAtTime(p*1.48,t.currentTime),setTimeout(()=>{this.chaseActive&&o.frequency.linearRampToValueAtTime(p,t.currentTime+.2)},120))},420);this._chaseStrInterval=g}stopChaseMusic(t=.8){if(!this.ctx||!this.chaseActive)return;this.chaseActive=!1;const e=this.ctx.currentTime;this.chasePulseGain&&this.chasePulseGain.gain.linearRampToValueAtTime(0,e+t),this.chaseStrGain&&this.chaseStrGain.gain.linearRampToValueAtTime(0,e+t),clearInterval(this._chasePulseInterval),clearInterval(this._chaseStrInterval),setTimeout(()=>{for(const n of this._chaseNodes||[])try{n.stop(),n.disconnect()}catch{}this._chaseNodes=[]},(t+.25)*1e3)}playClick(){if(!this.ctx)return;const t=this.ctx,e=t.currentTime,n=t.createOscillator();n.type="sine",n.frequency.value=720;const i=t.createGain();i.gain.setValueAtTime(0,e),i.gain.linearRampToValueAtTime(.14,e+.008),i.gain.exponentialRampToValueAtTime(.001,e+.16),n.connect(i),i.connect(this.master),n.start(e),n.stop(e+.18)}playChairSlide(t){if(!this.ctx)return;const e=this.ctx,n=e.currentTime,i=1.35,r=e.createBuffer(1,e.sampleRate*i,e.sampleRate),o=r.getChannelData(0);for(let p=0;p<o.length;p++)o[p]=Math.random()*2-1;const a=e.createBufferSource();a.buffer=r;const l=e.createBiquadFilter();l.type="bandpass",l.frequency.setValueAtTime(900,n),l.frequency.linearRampToValueAtTime(420,n+i),l.Q.value=.7;const c=e.createGain();c.gain.setValueAtTime(0,n),c.gain.linearRampToValueAtTime(.19,n+.12),c.gain.linearRampToValueAtTime(.14,n+i*.55),c.gain.exponentialRampToValueAtTime(.001,n+i);const h=e.createStereoPanner();h.pan.value=t,a.connect(l),l.connect(c),c.connect(h),h.connect(this.master),a.start(n);const u=e.createOscillator();u.type="sawtooth",u.frequency.value=52;const d=e.createGain();d.gain.setValueAtTime(0,n),d.gain.linearRampToValueAtTime(.13,n+.14),d.gain.exponentialRampToValueAtTime(.001,n+i*.88),u.connect(d),d.connect(h),u.start(n),u.stop(n+i)}setMasterVolume(t){this.master&&(this.master.gain.value=t)}updateProximityAudio(t,e,n,i){let r=0,o=0;if(e&&n){const a=t.distanceTo(e);r=Math.max(0,1-a/11),o=Math.max(0,1-a/7.5)*.85}i>=2&&(o=Math.max(o,.22+i*.12)),i===3&&(o=Math.max(o,.62)),this.setBreathing(r*.95),this.setHeartbeat(Math.min(1,o))}}class ho{constructor(t){this.scene=t,this.group=new Me,this.group.visible=!1,this.scene.add(this.group),this.pos=new R(0,0,-12),this.targetPos=new R,this.vel=new R,this.baseY=1.15,this.state="hidden",this.stateTimer=0,this.banishTimer=0,this.visibleTimer=0,this.burnMeter=0,this.burnRate=.52,this.decayRate=.38,this.banishCount=0,this.isVisible=!1,this.flickerPhase=0,this.createMesh(),this.stalkSpeed=1.05,this.chaseSpeed=2.85,this.apparitionDist=2.2,this.banishRespite=8,this.weavePhase=0}createMesh(){const t=this.group,e=new ye(.16,.32,1.95,12);e.translate(0,.95,0);const n=new yt({color:657930,roughness:.92,metalness:.04,emissive:986895,emissiveIntensity:.18}),i=new ot(e,n);i.castShadow=!0,t.add(i),this.body=i;const r=new yt({color:526344,roughness:.95,side:fe,transparent:!0,opacity:.88});this.strips=[];for(let f=0;f<10;f++){const E=.09+Math.random()*.11,v=.65+Math.random()*.95,S=new Re(E,v,2,6),P=S.attributes.position;for(let M=0;M<P.count;M++)P.getY(M)<-v*.35&&P.setX(M,P.getX(M)+(Math.random()-.5)*.045);P.needsUpdate=!0;const w=new ot(S,r.clone()),A=f/10*Math.PI*2+(Math.random()-.5)*.35,G=.17+Math.random()*.08;w.position.set(Math.cos(A)*G,1.35-Math.random()*.25,Math.sin(A)*G),w.rotation.y=-A+Math.PI,w.rotation.z=(Math.random()-.5)*.32,w.rotation.x=(Math.random()-.5)*.18,w.userData.baseY=w.position.y,w.userData.phase=Math.random()*Math.PI*2,w.userData.ang=A,t.add(w),this.strips.push(w)}const o=new ye(.055,.042,.95,8);o.translate(0,-.47,0);const a=new yt({color:854538,roughness:.88});for(let f of[-1,1]){const E=new ot(o,a);E.position.set(f*.26,1.38,0),E.rotation.z=f*-.22,E.rotation.x=.28,t.add(E);const v=new Me;v.position.set(f*.3,.58,.14),v.rotation.x=.55,t.add(v);const S=new ot(new ze(.075,8,8),a);S.scale.set(1,.6,1.25),v.add(S);for(let P=0;P<4;P++){const w=new ye(.015,.007,.24,6);w.translate(0,-.12,0);const A=new ot(w,new yt({color:1118224,roughness:.78}));A.position.set((P-1.5)*.042,0,.04),A.rotation.x=.55+Math.random()*.18,A.rotation.z=(P-1.5)*.08,v.add(A);const G=new ot(new Er(.012,.07,6),new yt({color:1710618}));G.position.set((P-1.5)*.042,-.24,.045),G.rotation.x=A.rotation.x+.35,v.add(G)}f===-1?this.leftHand=v:this.rightHand=v}const l=new ze(.195,14,12);l.scale(1,1.28,.92);const c=new yt({color:1118223,roughness:.78}),h=new ot(l,c);h.position.set(0,2.04,0),t.add(h),this.head=h;const u=new ze(.11,10,8);u.scale(1,.72,.9);const d=new ot(u,c);d.position.set(0,1.88,.08),h.add(d),this.jaw=d;const p=new yt({color:328965,roughness:1,transparent:!0,opacity:.92,side:fe});for(let f=0;f<8;f++){const E=new Re(.08+Math.random()*.05,.95+Math.random()*.45),v=new ot(E,p.clone()),S=f/8*Math.PI*2;v.position.set(Math.cos(S)*.11,2.06+Math.random()*.12,Math.sin(S)*.11),v.rotation.y=-S,v.rotation.x=(Math.random()-.5)*.25,v.userData.phase=Math.random()*Math.PI*2,t.add(v),this.hair||(this.hair=[]),this.hair.push(v)}const g=new ze(.038,10,10),_=new me({color:16726546});for(let f of[-1,1]){const E=new ot(g,_.clone());E.position.set(f*.082,2.09,.145),t.add(E),f===-1?this.eyeL=E:this.eyeR=E;const v=new ot(new ze(.075,8,8),new me({color:16720384,transparent:!0,opacity:.22}));v.position.copy(E.position),v.scale.set(1,1,.45),t.add(v),f===-1?this.coronaL=v:this.coronaR=v}this.faceExpression=0,this.setExpression(0),this.vaporGroup=new Me,t.add(this.vaporGroup);const m=new me({color:526344,transparent:!0,opacity:.38,depthWrite:!1,side:fe});for(let f=0;f<14;f++){const E=new Re(.28+Math.random()*.32,.38+Math.random()*.42),v=new ot(E,m.clone()),S=Math.random()*Math.PI*2,P=.18+Math.random()*.35;v.position.set(Math.cos(S)*P,.35+Math.random()*1.2,Math.sin(S)*P),v.rotation.y=Math.random()*Math.PI*2,v.userData.ang=S,v.userData.rad=P,v.userData.phase=Math.random()*Math.PI*2,v.userData.y0=v.position.y,this.vaporGroup.add(v)}this.burnOverlay=new ot(new ye(.18,.34,2,12,1,!0),new me({color:16747029,transparent:!0,opacity:0,side:fe,blending:oi,depthWrite:!1})),this.burnOverlay.position.set(0,.98,0),t.add(this.burnOverlay),t.position.copy(this.pos),this.group.scale.set(1,1,1)}setExpression(t){this.faceExpression=t,this.head&&(t===0?(this.jaw.position.y=1.88-2.04,this.jaw.position.set(0,-.16,.08),this.jaw.scale.set(1,.72,.9),this.head.scale.set(1,1.28,.92),this.eyeL&&(this.eyeL.material.color.setHex(16726546),this.eyeR.material.color.setHex(16726546)),this.coronaL&&(this.coronaL.material.opacity=.22,this.coronaR.material.opacity=.22)):t===1?(this.jaw.position.set(0,-.26,.1),this.jaw.scale.set(1.05,.95,1),this.head.rotation.x=-.22,this.eyeL&&(this.eyeL.material.color.setHex(16773328),this.eyeR.material.color.setHex(16773328)),this.coronaL&&(this.coronaL.material.color.setHex(16755336),this.coronaL.material.opacity=.42,this.coronaR.material.color.setHex(16755336),this.coronaR.material.opacity=.42)):t===2&&(this.jaw.position.set(0,-.2,.07),this.jaw.scale.set(1.22,.58,.92),this.head.rotation.x=.08,this.head.rotation.z=.06,this.eyeL&&(this.eyeL.material.color.setHex(9374208),this.eyeR.material.color.setHex(9374208)),this.coronaL&&(this.coronaL.material.color.setHex(5572608),this.coronaL.material.opacity=.32,this.coronaR.material.color.setHex(5572608),this.coronaR.material.opacity=.32)))}apparitionAt(t){this.pos.copy(t),this.pos.y=0,this.group.position.copy(this.pos),this.state="apparition",this.stateTimer=0,this.isVisible=!0,this.group.visible=!0,this.visibleTimer=0,this.flickerPhase=Math.random()*Math.PI*2,this.setExpression(Math.floor(Math.random()*3)),this.group.scale.set(1,1,1),this.burnMeter=0}beginStalking(t){this.state="stalking",this.stateTimer=0,this._stalkCooldown=2.5+Math.random()*3.5,this.group.visible=!1,this.isVisible=!1}beginChase(t){this.state="chasing",this.stateTimer=0,this.banishTimer=0,this.pos.set(0,0,-7.2),this.group.position.copy(this.pos),this.group.visible=!0,this.isVisible=!0,this.setExpression(1),this.burnMeter=0}banish(){this.banishCount++,this.state="banished",this.banishTimer=this.banishRespite,this.burnMeter=0,this.isVisible=!1,this.group.visible=!1,this.setExpression(0)}reformToChase(t){const e=new R((Math.random()-.5)*8,0,(Math.random()-.5)*8),n=t.clone().add(e);n.x=Math.max(-9,Math.min(9,n.x)),n.z=Math.max(-7.2,Math.min(7.2,n.z)),n.distanceTo(t)<3.2&&(n.x+=Math.sign(n.x-t.x)*3,n.z+=Math.sign(n.z-t.z)*3),n.y=0,this.pos.copy(n),this.group.position.copy(this.pos),this.state="chasing",this.isVisible=!0,this.group.visible=!0,this.burnMeter=0,this.setExpression(1+Math.floor(Math.random()*2)),this.stateTimer=0}reformToStalk(t){this.state="stalking",this._stalkCooldown=4+Math.random()*4,this.group.visible=!1,this.isVisible=!1,this.stateTimer=0}update(t,e,n,i,r,o){this.stateTimer+=t,this.weavePhase+=t;const a=this.checkInBeam(n,i,r);let l=!1;if(this.isVisible&&this.group.visible&&a&&r){this.burnMeter+=this.burnRate*t,this.burnMeter>=1&&(this.burnMeter=1),l=!0,this.burnOverlay.material.opacity=cn.lerp(this.burnOverlay.material.opacity,.42+Math.sin(e*18)*.12,t*12);const c=1+Math.sin(e*22)*.35;this.eyeL.material.color.setHSL(.06,1,.55*c),this.eyeR.material.color.setHSL(.06,1,.55*c)}else this.burnMeter=Math.max(0,this.burnMeter-this.decayRate*t),this.burnOverlay.material.opacity=cn.lerp(this.burnOverlay.material.opacity,0,t*6);this.burnOverlay.scale.set(1+this.burnMeter*.08,1,1+this.burnMeter*.08);for(const c of this.vaporGroup.children){c.userData.phase+=t*(.9+Math.random()*.6),c.position.y=c.userData.y0+Math.sin(c.userData.phase)*.22+Math.sin(e*.7+c.userData.phase*.5)*.12,c.rotation.y+=t*.6,c.rotation.z=Math.sin(e*.9+c.userData.phase)*.18,c.material.opacity=.28+Math.sin(e*1.2+c.userData.phase)*.12;const h=c.userData.ang+e*.22;c.position.x=Math.cos(h)*c.userData.rad+Math.sin(e*.45)*.06,c.position.z=Math.sin(h)*c.userData.rad*.85}for(const c of this.strips)c.rotation.z=Math.sin(e*1.4+c.userData.phase)*.22+Math.sin(e*.7+c.userData.phase*1.3)*.12,c.rotation.x=Math.sin(e*.9+c.userData.phase)*.15,c.position.y=c.userData.baseY+Math.sin(e*1.1+c.userData.phase)*.04;if(this.hair)for(const c of this.hair)c.rotation.x=Math.sin(e*1.6+c.userData.phase)*.18,c.rotation.z=Math.sin(e*1.05+c.userData.phase*.8)*.09;if(this.state==="apparition"){this.group.traverse(h=>{h.isMesh&&h.material&&h.material.transparent});const c=Math.random()<.12?(Math.random()-.5)*.08:0;this.group.position.x=this.pos.x+c,this.group.position.z=this.pos.z+(Math.random()<.12?(Math.random()-.5)*.07:0),Math.random()<.08?this.group.scale.x=1+(Math.random()-.5)*.18:this.group.scale.x=cn.lerp(this.group.scale.x,1,t*12),this.head.rotation.y=Math.sin(e*2.2)*.12,this.head.rotation.z=Math.sin(e*1.45)*.07,this.stateTimer>1.2&&(this.group.visible=!1,this.isVisible=!1,this.state="hidden",this.stateTimer=0,this.group.position.copy(this.pos),this.group.scale.set(1,1,1))}else if(this.state==="stalking"){if(!this.isVisible&&(this._stalkCooldown-=t,this._stalkCooldown<=0)){const c=[new R(-6.6,0,-2.5),new R(.35,0,-2.5),new R(7,0,-2.5),new R(-6.6,0,2.5),new R(0,0,2.5),new R(6.6,0,2.5)];let h=c[0],u=-1;for(const d of c){const p=d.distanceTo(n);p>3&&p<12&&p>u&&(u=p,h=d)}this.apparitionAt(h),this.state="stalking_apparition",this.stateTimer=0,this._driftTime=3.2+Math.random()*2}}else if(this.state==="stalking_apparition"){const c=new R().subVectors(n,this.pos);if(c.y=0,c.length()>.3){c.normalize().multiplyScalar(this.stalkSpeed*.55*t);const u=Math.sin(this.weavePhase*1.2)*.55*t,d=new R(-c.z,0,c.x).normalize();c.addScaledVector(d,u),this.pos.add(c),this.group.position.copy(this.pos);const p=Math.atan2(n.x-this.pos.x,n.z-this.pos.z);this.group.rotation.y=cn.lerp(this.group.rotation.y,p,t*4)}this.group.position.y=Math.sin(e*1)*.07,this.stateTimer+=t,this.stateTimer>this._driftTime&&(this.group.visible=!1,this.isVisible=!1,this.state="stalking",this._stalkCooldown=6+Math.random()*7,this.stateTimer=0),this.burnMeter>=1&&this.banish()}else if(this.state==="chasing"){const c=new R().subVectors(n,this.pos);if(c.y=0,c.length()>.12){c.normalize();const d=new R(-c.z,0,c.x),p=Math.sin(this.weavePhase*1.9)*.72+Math.sin(this.weavePhase*3.1)*.32;c.addScaledVector(d,p*.38),c.normalize();const g=1+Math.sin(this.weavePhase*4.2)*.38+Math.sin(this.weavePhase*1.3)*.18,_=this.chaseSpeed*g;this.pos.addScaledVector(c,_*t),this.group.position.copy(this.pos),this.group.position.y=Math.sin(e*2.8)*.11+Math.sin(this.weavePhase*5.1)*.05;let f=Math.atan2(c.x,c.z)-this.group.rotation.y;for(;f>Math.PI;)f-=Math.PI*2;for(;f<-Math.PI;)f+=Math.PI*2;this.group.rotation.y+=f*Math.min(1,t*4.2),this.leftHand&&(this.leftHand.rotation.x=.55+Math.sin(this.weavePhase*4.2)*.42,this.rightHand.rotation.x=.55-Math.sin(this.weavePhase*4.2)*.42),this.head.rotation.x=-.2+Math.sin(this.weavePhase*2.1)*.18,this.head.rotation.y=Math.sin(this.weavePhase*1.45)*.22}const u=1+Math.sin(e*3.2)*.04;this.group.scale.set(u,u,u)}else this.state==="banished"?(this.banishTimer-=t,this.group.visible=!1,this.isVisible=!1):this.state==="hidden"&&(this.group.visible=!1,this.isVisible=!1);if(l&&this.isVisible&&(Math.random()<.22&&(this.group.position.x+=(Math.random()-.5)*.05,this.group.position.z+=(Math.random()-.5)*.05),Math.random()<.12&&(this.group.scale.x=1+(Math.random()-.5)*.22)),this.isVisible&&this.group.visible){const c=new R().subVectors(n,this.group.position),h=Math.atan2(c.x,c.z)-this.group.rotation.y;this.head.rotation.y=cn.lerp(this.head.rotation.y,Math.max(-.55,Math.min(.55,h*.45)),t*5)}}checkInBeam(t,e,n){if(!n||!this.isVisible||!this.group.visible)return!1;const i=new R().subVectors(this.pos,t);i.y=0;const r=i.length();if(r>11.5||r<.4)return!1;i.normalize();const o=e.clone();o.y=0,o.normalize();const a=o.dot(i),l=Math.acos(Math.max(-1,Math.min(1,a))),c=Math.PI/6.8;if(l>c)return!1;this.group.position.y+1.05-t.y,new ht(i.x,i.z).length()*r;const h=new R().subVectors(new R(this.pos.x,1.05,this.pos.z),t),u=h.length();h.normalize();const d=e.dot(h);return Math.acos(Math.max(-1,Math.min(1,d)))<Math.PI/5.4&&u<13}getPosition(){return this.pos.clone()}getBurnProgress(){return this.burnMeter}isGhostVisible(){return this.isVisible&&this.group.visible}isTouchingPlayer(t,e=.95){return this.isGhostVisible()?new ht(this.pos.x-t.x,this.pos.z-t.z).length()<e:!1}}class uo{constructor(t,e,n,i){this.scene=t,this.house=e,this.audio=n,this.hud=i,this.triggered=new Set,this.keysCollected=0,this.finalKeyTaken=!1,this.secondKeyTaken=!1,this.ambientTimer=4.2+Math.random()*4,this.lightningTimer=7+Math.random()*9,this.isBlackout=!1,this.blackoutTimer=0,this.chaseStarted=!1,this.lightningFlashTimer=0,this.thunderDelay=0,this.hooks={onApparition:null,onStalkingStart:null,onChaseStart:null,onBlackout:null},this.setupTriggers()}setupTriggers(){this.triggers=[{id:"living_enter",min:new ht(-9.7,2.9),max:new ht(-3.6,7.6),once:!0},{id:"hallway_enter",min:new ht(-9.2,-1.9),max:new ht(9.2,1.9),once:!0},{id:"kitchen_enter",min:new ht(4.4,-7.6),max:new ht(9.7,-2.9),once:!0},{id:"bedroom_enter",min:new ht(-3,-7.6),max:new ht(3.7,-2.9),once:!0}]}setKeysCollected(t){this.keysCollected=t}onKeyTaken(t,e){const n=this.keysCollected;n===1?t==="study"&&!this.triggered.has("study_key_scare")&&(this.triggered.add("study_key_scare"),this.fireStudyKeyScare(e)):n>=1&&t==="study"&&!this.triggered.has("study_key_scare")&&(this.triggered.add("study_key_scare"),this.fireStudyKeyScare(e)),n===2&&!this.secondKeyTaken&&(this.secondKeyTaken=!0,this.fireSecondKeyScare(e)),n===3&&!this.finalKeyTaken&&(this.finalKeyTaken=!0,this.fireFinalKeyChase(e))}fireStudyKeyScare(t){const e=new R(-6.6,0,-1.5);this.hooks.onApparition&&this.hooks.onApparition(e),this.audio&&(this.audio.playStinger(.85),setTimeout(()=>this.audio.playWhisper(.55),320)),this.hud&&(this.hud.screenFlash("#ff1a1a",.18,220),this.hud.shake(.9,280))}fireSecondKeyScare(t){this.audio&&(this.audio.playGrowl(),setTimeout(()=>this.audio.playStinger(.42),650)),this.hud&&(this.hud.screenFlash("#ff1e1e",.22,380),this.hud.shake(1.15,420),this.hud.showObjective("HE IS COMING — KEEP THE LIGHT ON HIM",3.2)),this.hooks.onStalkingStart&&this.hooks.onStalkingStart(t)}fireFinalKeyChase(t){this.isBlackout=!0,this.blackoutTimer=1.85,this.audio&&(this.audio.master,setTimeout(()=>{this.audio.playScream(!0),this.audio.playStinger(1)},820)),this.hud&&(this.hud.blackoutPulse(1.85),this.hud.shake(1.65,900)),setTimeout(()=>{this.isBlackout=!1,this.chaseStarted=!0,this.hooks.onChaseStart&&this.hooks.onChaseStart(t),this.hooks.onBlackout&&this.hooks.onBlackout(!1)},1850),this.hooks.onBlackout&&this.hooks.onBlackout(!0)}update(t,e,n){for(const i of this.triggers)this.triggered.has(i.id)||n.x>=i.min.x&&n.x<=i.max.x&&n.z>=i.min.y&&n.z<=i.max.y&&(this.triggered.add(i.id),this.fireTrigger(i.id,n));if((!this.chaseStarted||this.chaseStarted&&Math.random()<.04)&&(this.ambientTimer-=t,this.ambientTimer<=0)){this.fireAmbientEvent(n);const i=this.keysCollected===0?9+Math.random()*11:this.keysCollected===1?7+Math.random()*9:this.keysCollected>=2?5.5+Math.random()*7:8;this.ambientTimer=i}this.lightningTimer-=t,this.lightningTimer<=0&&(this.fireLightning(),this.lightningTimer=9+Math.random()*14),this.isBlackout&&(this.blackoutTimer-=t,this.blackoutTimer<=0&&(this.isBlackout=!1)),this.lightningFlashTimer>0&&(this.lightningFlashTimer-=t)}fireTrigger(t,e){switch(t){case"living_enter":this.audio&&(this.audio.playThud((Math.random()-.5)*.7),setTimeout(()=>this.audio.playWhisper((Math.random()-.5)*.85),1100+Math.random()*600)),this.hud&&this.hud.showObjective("Find the 3 brass keys",2);break;case"hallway_enter":this.audio&&(setTimeout(()=>this.audio.playSlam(),420+Math.random()*280),this.flickerHouseLights(1.55)),this.hud&&(this.hud.screenFlash("#ffffff",.09,90),setTimeout(()=>this.hud.screenFlash("#ffffff",.07,70),190),setTimeout(()=>this.hud.screenFlash("#ffffff",.11,110),380),this.hud.shake(.65,320));break;case"kitchen_enter":this.audio&&(this.audio.playCabinetBang(),this.audio.playStinger(.52),setTimeout(()=>this.audio.playChairSlide(.42),520)),this.hud&&(this.hud.screenFlash("#ffdddd",.12,180),this.hud.shake(.85,380)),this.slideKitchenChair();break;case"bedroom_enter":this.audio&&(setTimeout(()=>this.audio.playSlam(),180),setTimeout(()=>this.audio.playCreak(.25,.7),620)),this.hud&&(this.hud.screenFlash("#ffd0d0",.1,150),this.hud.shake(.72,300)),window.dispatchEvent(new CustomEvent("horror:slamBedroom"));break}}flickerHouseLights(t=1.4){if(!this.house||!this.house.lights)return;const e=performance.now()+t*1e3,n=setInterval(()=>{if(performance.now()>e){clearInterval(n);return}for(const i of this.house.lights)i.userData.isBulb&&(i.intensity=Math.random()<.5?.12:i.userData.baseIntensity*(.35+Math.random()*.65))},68);setTimeout(()=>{for(const i of this.house.lights)i.userData.isBulb&&(i.intensity=i.userData.baseIntensity)},t*1e3+80)}slideKitchenChair(){if(!this.house||!this.house.group)return;let t=null,e=1/0;const n=new R(6.2,.43,-4.2);if(this.house.group.traverse(i=>{if(i.isMesh&&i.geometry&&i.geometry.type==="BoxGeometry"){const r=i.position;if(Math.abs(r.y-.43)<.15){const o=r.distanceTo(n);o<e&&r.x>4&&r.z<-2.8&&(e=o,t=i)}}}),t){const i=t.position.z,r=i+.85+Math.random()*.45,o=performance.now(),a=650,l=()=>{const c=Math.min(1,(performance.now()-o)/a),h=1-Math.pow(1-c,3);t.position.z=i+(r-i)*h,t.rotation.y=Math.sin(c*Math.PI*5)*.025*(1-c),c<1&&requestAnimationFrame(l)};requestAnimationFrame(l)}}fireAmbientEvent(t){if(!this.audio)return;const e=[{fn:()=>this.audio.playCreak((Math.random()-.5)*.9,.45+Math.random()*.35),w:3},{fn:()=>this.audio.playWhisper((Math.random()-.5)*.85),w:this.keysCollected>=1?2.2:.9},{fn:()=>this.audio.playKnock((Math.random()-.5)*.75),w:1.4},{fn:()=>this.audio.playThud((Math.random()-.5)*.65),w:.85},{fn:()=>this.audio.playDrip((Math.random()-.5)*.8),w:1.1}];if(Math.random()<.08)return;const n=e.reduce((r,o)=>r+o.w,0);let i=Math.random()*n;for(const r of e)if(i-=r.w,i<=0){r.fn();break}Math.random()<.22&&this.hud&&this.hud.vignettePulse(.45,800)}fireLightning(){if(this.hud&&(this.hud.lightningFlash(),Math.random()<.55&&setTimeout(()=>this.hud.lightningFlash(),135+Math.random()*90),Math.random()<.28&&setTimeout(()=>this.hud.lightningFlash(),320+Math.random()*80)),this.house&&this.house.lights){for(const e of this.house.lights)if(e.userData.isMoon){const n=e.userData.baseIntensity;e.intensity=n*3.2,setTimeout(()=>{e.intensity=n},90+Math.random()*60),setTimeout(()=>{e.intensity=n*2.1,setTimeout(()=>e.intensity=n,70)},160)}}const t=.55+Math.random()*1.25;this.audio&&this.audio.playThunder(t)}}class zp{constructor(){this.objectiveEl=document.getElementById("objective"),this.objectiveText=document.getElementById("objective-text"),this.keysEl=document.getElementById("keys"),this.batteryFill=document.getElementById("battery-fill"),this.batteryText=document.getElementById("battery-text"),this.burnContainer=document.getElementById("burn-container"),this.burnFill=document.getElementById("burn-fill"),this.crosshair=document.getElementById("crosshair"),this.interactPrompt=document.getElementById("interact-prompt"),this.vignette=document.getElementById("vignette"),this.grain=document.getElementById("grain"),this.flashOverlay=document.getElementById("flash-overlay"),this.shakeEl=document.getElementById("hud-shake-wrapper")||document.body,this._objectiveTimeout=null,this._shakeRaf=null}setKeys(t,e){this.keysEl&&(this.keysEl.textContent=`${t} / ${e}`)}setBattery(t){const e=Math.max(0,Math.min(100,t));if(this.batteryFill){this.batteryFill.style.width=e+"%";let n="#7af05a";e<55&&(n="#e8d84a"),e<32&&(n="#ff8c2a"),e<18&&(n="#ff2a2a"),this.batteryFill.style.background=n,this.batteryFill.style.boxShadow=e<20?`0 0 8px ${n}`:"none",e<20&&e>0&&Math.random()<.12&&(this.batteryFill.style.opacity="0.55",setTimeout(()=>{this.batteryFill&&(this.batteryFill.style.opacity="1")},90))}this.batteryText&&(this.batteryText.textContent=Math.round(e)+"%")}setBurnProgress(t){if(!(!this.burnContainer||!this.burnFill))if(t>.015){this.burnContainer.style.opacity="1",this.burnFill.style.width=t*100+"%";let e="#ffd86a";t>.38&&(e="#ff8c2a"),t>.72&&(e="#ff1e1e"),this.burnFill.style.background=e,this.burnFill.style.boxShadow=`0 0 ${6+t*10}px ${e}`,this.crosshair&&(this.crosshair.style.borderColor=e,this.crosshair.style.boxShadow=`0 0 6px ${e}`,this.crosshair.classList.add("burning"))}else this.burnContainer.style.opacity="0",this.burnFill.style.width="0%",this.crosshair&&(this.crosshair.style.borderColor="rgba(255,255,255,0.82)",this.crosshair.style.boxShadow="none",this.crosshair.classList.remove("burning"))}showObjective(t,e=3){this.objectiveText&&(this.objectiveText.textContent=t,this.objectiveEl&&(this.objectiveEl.style.opacity="1",this.objectiveEl.style.transform="translateX(-50%) translateY(0)"),this._objectiveTimeout&&clearTimeout(this._objectiveTimeout),e>0&&(this._objectiveTimeout=setTimeout(()=>{this.objectiveEl&&(this.objectiveEl.style.opacity="0.78")},e*1e3)))}setInteractPrompt(t){this.interactPrompt&&(t?(this.interactPrompt.textContent=t,this.interactPrompt.style.opacity="1"):this.interactPrompt.style.opacity="0")}screenFlash(t="#ffffff",e=.2,n=140){this.flashOverlay&&(this.flashOverlay.style.background=t,this.flashOverlay.style.opacity=String(e),this.flashOverlay.style.transition="none",this.flashOverlay.offsetWidth,this.flashOverlay.style.transition=`opacity ${n}ms ease-out`,this.flashOverlay.style.opacity="0")}vignettePulse(t=.5,e=900){this.vignette&&(this.vignette.style.transition="none",this.vignette.style.opacity=String(.55+t*.45),this.vignette.offsetWidth,this.vignette.style.transition=`opacity ${e}ms ease-out`,this.vignette.style.opacity="0.72")}lightningFlash(){this.screenFlash("#e6f0ff",.42,95),setTimeout(()=>this.screenFlash("#ffffff",.18,70),45),this.vignette&&(this.vignette.style.opacity="0.2",setTimeout(()=>{this.vignette&&(this.vignette.style.opacity="0.72")},120))}blackoutPulse(t=1.85){this.flashOverlay&&(this.flashOverlay.style.background="#000000",this.flashOverlay.style.transition="none",this.flashOverlay.style.opacity="1",this.flashOverlay.offsetWidth,setTimeout(()=>{this.flashOverlay.style.transition="opacity 420ms ease-out",this.flashOverlay.style.opacity="0"},t*1e3-420))}shake(t=1,e=320){const n=this.shakeEl,i=document.getElementById("c");if(!n)return;const r=performance.now(),o=n.style.transform||"",a=i&&i.style.transform||"",l=c=>{const h=c-r;if(h>=e){n.style.transform=o,i&&(i.style.transform=a);return}const u=1-h/e,d=t*u*8,p=(Math.random()-.5)*d*2,g=(Math.random()-.5)*d*1.4,_=(Math.random()-.5)*d*.22;n.style.transform=`translate(${p}px, ${g}px) rotate(${_}deg)`,i&&(i.style.transform=`translate(${(p*.6).toFixed(1)}px, ${(g*.6).toFixed(1)}px)`),requestAnimationFrame(l)};requestAnimationFrame(l)}setCrosshairVisible(t){this.crosshair&&(this.crosshair.style.opacity=t?"1":"0")}showDeathScreen(){const t=document.getElementById("death-screen");t&&t.classList.add("visible")}hideDeathScreen(){const t=document.getElementById("death-screen");t&&t.classList.remove("visible")}showWinScreen(t,e){const n=document.getElementById("win-screen");if(n){const i=document.getElementById("win-time"),r=document.getElementById("win-banish");i&&(i.textContent=t),r&&(r.textContent=String(e)),n.classList.add("visible")}}hideWinScreen(){const t=document.getElementById("win-screen");t&&t.classList.remove("visible")}showNote(t,e){const n=document.getElementById("note-overlay"),i=document.getElementById("note-title"),r=document.getElementById("note-body");n&&(i&&(i.textContent=t),r&&(r.textContent=e),n.classList.add("visible"))}hideNote(){const t=document.getElementById("note-overlay");t&&t.classList.remove("visible")}setTitleVisible(t){const e=document.getElementById("title-screen");e&&(e.style.display=t?"flex":"none")}}class kp{constructor(){this.container=document.getElementById("game-container"),this.canvas=document.getElementById("c"),this.hud=new zp,this.state="TITLE",this.timeSurvived=0,this.banishCountTotal=0,this.keysFound=0,this.totalKeys=3,this.raycaster=new Rp,this._lastTime=0,this._isBurning=!1,this.initThree(),this.initWorld(),this.bindUI(),this.animate=this.animate.bind(this),requestAnimationFrame(this.animate)}initThree(){const t=this.canvas;this.scene=new yp,this.scene.background=new Nt(263432),this.scene.fog=new Nn(197896,.038),this.camera=new Le(74,window.innerWidth/window.innerHeight,.1,40),this.camera.position.set(0,1.62,5.55),this.renderer=new Yo({canvas:t,antialias:!0,powerPreference:"high-performance"}),this.renderer.setPixelRatio(Math.min(window.devicePixelRatio,1.75)),this.renderer.setSize(window.innerWidth,window.innerHeight),this.renderer.shadowMap.enabled=!0,this.renderer.shadowMap.type=mo,this.renderer.toneMapping=_o,this.renderer.toneMappingExposure=.88,this.renderer.outputColorSpace=Jt,"useLegacyLights"in this.renderer&&(this.renderer.useLegacyLights=!1),this.composer=new Up(this.renderer),this.composer.addPass(new Np(this.scene,this.camera)),this.bloomPass=new fi(new ht(window.innerWidth,window.innerHeight),.38,.45,.82),this.composer.addPass(this.bloomPass),window.addEventListener("resize",()=>{this.camera.aspect=window.innerWidth/window.innerHeight,this.camera.updateProjectionMatrix(),this.renderer.setSize(window.innerWidth,window.innerHeight),this.composer.setSize(window.innerWidth,window.innerHeight)}),this.ambient=new wp(1711394,.045),this.scene.add(this.ambient)}initWorld(){this.textures=new gr,this.house=new co(this.scene,this.textures),this.player=new Op(this.camera,this.scene,this.house,this.hud),this.audio=new Bp,this.ghost=new ho(this.scene),this.scareDirector=new uo(this.scene,this.house,this.audio,this.hud),this.scareDirector.hooks.onApparition=t=>this.ghost.apparitionAt(t),this.scareDirector.hooks.onStalkingStart=t=>this.ghost.beginStalking(t),this.scareDirector.hooks.onChaseStart=t=>this.ghost.beginChase(t),this.scareDirector.hooks.onBlackout=t=>{if(t){for(const e of this.house.lights)e.userData.prevIntensity=e.intensity,e.intensity=0;this.ambient.intensity=.005,this.scene.fog=new Nn(0,.055)}else{for(const e of this.house.lights)e.userData.prevIntensity!==void 0&&(e.intensity=e.userData.prevIntensity);this.ambient.intensity=.045,this.scene.fog=new Nn(197896,.038)}},this._onSlamBedroom=()=>{const t=this.house.doors.find(e=>e.id==="bedroom");t&&(t.isOpen=!1,this.hud.shake(.7,260))},window.addEventListener("horror:slamBedroom",this._onSlamBedroom),this.hud.setKeys(0,this.totalKeys),this.hud.showObjective("Find the 3 brass keys and escape",3),this.hud.setBattery(100)}bindUI(){document.addEventListener("keydown",n=>{if(n.key.toLowerCase()==="e"&&this.tryInteract(),n.key==="Escape"){this.state==="PLAYING"&&document.pointerLockElement&&document.exitPointerLock();const i=document.getElementById("note-overlay");i&&i.classList.contains("visible")&&(this.hud.hideNote(),this.player.enable(),this.canvas&&this.player.requestPointerLock(this.canvas))}n.key.toLowerCase()==="f"&&this.state==="PLAYING"&&this.audio&&this.audio.playClick()});const t=document.getElementById("restart-death");t&&t.addEventListener("click",()=>this.restart());const e=document.getElementById("restart-win");e&&e.addEventListener("click",()=>this.restart()),this.canvas.addEventListener("click",()=>{this.state==="PLAYING"&&!document.pointerLockElement&&this.canvas.requestPointerLock()})}async startGame(){this.state="PLAYING",this._generation=(this._generation||0)+1,this._chaseMusicStarted=!1,this.timeSurvived=0,this._lastTime=performance.now(),this.hud.setTitleVisible(!1),this.hud.hideDeathScreen(),this.hud.hideWinScreen(),this.hud.hideNote(),this.player.enable(),this.player.pos.set(0,1.62,5.55),this.player.yaw=0,this.player.yawTarget=0,this.player.pitch=0,this.player.pitchTarget=0,this.player.battery=100,this.player.flashlightOn=!0,this.hud.setBattery(100);try{await this.audio.start()}catch(t){console.warn("audio start failed",t)}if(this.canvas)try{await this.canvas.requestPointerLock()}catch{}this.hud.showObjective("Find the 3 brass keys and escape",3.5)}restart(){this._generation=(this._generation||0)+1,this._generation,this._onSlamBedroom&&window.removeEventListener("horror:slamBedroom",this._onSlamBedroom),this.scene.remove(this.house.group),this.textures=new gr,this.house=new co(this.scene,this.textures),this.player.house=this.house,this.scene.remove(this.ghost.group),this.ghost=new ho(this.scene),this.scareDirector=new uo(this.scene,this.house,this.audio,this.hud),this.scareDirector.hooks.onApparition=n=>this.ghost.apparitionAt(n),this.scareDirector.hooks.onStalkingStart=n=>this.ghost.beginStalking(n),this.scareDirector.hooks.onChaseStart=n=>this.ghost.beginChase(n),this.scareDirector.hooks.onBlackout=n=>{if(n){for(const i of this.house.lights)i.userData.prevIntensity=i.intensity,i.intensity=0;this.ambient.intensity=.005,this.scene.fog=new Nn(0,.055)}else{for(const i of this.house.lights)i.userData.prevIntensity!==void 0&&(i.intensity=i.userData.prevIntensity);this.ambient.intensity=.045,this.scene.fog=new Nn(197896,.038)}},this._onSlamBedroom=()=>{const n=this.house.doors.find(i=>i.id==="bedroom");n&&(n.isOpen=!1,this.hud.shake(.7,260))},window.addEventListener("horror:slamBedroom",this._onSlamBedroom),this.keysFound=0,this.totalKeys=3,this.banishCountTotal=0,this.timeSurvived=0,this._chaseMusicStarted=!1,this._isBurning=!1,this.hud.setKeys(0,3),this.hud.hideDeathScreen(),this.hud.hideWinScreen(),this.hud.hideNote();const t=document.getElementById("jumpscare");t&&t.classList.remove("active"),this.state="TITLE",this.hud.setTitleVisible(!0),this.player.disable();const e=document.getElementById("enter-btn");e&&(e.textContent="ENTER THE HOUSE",e.disabled=!1)}tryInteract(){if(this.state!=="PLAYING")return;const t=document.getElementById("note-overlay");if(t&&t.classList.contains("visible"))return;const e=this.player.getPosition(),n=this.house.getInteractableInRange(e,1.65);if(n){if(n.type==="door"){n.isFront?n.locked?this.keysFound>=this.totalKeys?(n.locked=!1,n.isOpen=!0,this.audio&&this.audio.playDoorCreak(!0),this.hud.showObjective("The door is open — RUN!",2.5),this.hud.screenFlash("#ffffff",.12,180)):(this.audio&&this.audio.playKnock(.05),this.hud.showObjective(`Front door locked — ${this.keysFound} / ${this.totalKeys} keys`,2.2),this.hud.shake(.45,220)):(n.isOpen=!n.isOpen,this.audio&&this.audio.playDoorCreak(n.isOpen)):(n.isOpen=!n.isOpen,this.audio&&this.audio.playDoorCreak(n.isOpen));return}if(n.userData.type==="key"){this.house.collectKey(n),this.keysFound++,this.hud.setKeys(this.keysFound,this.totalKeys),this.audio&&this.audio.playPickup(!0),this.hud.screenFlash("#ffd86a",.14,220),this.hud.showObjective(`Key found — ${this.keysFound} / ${this.totalKeys}`,2.4),this.scareDirector.setKeysCollected(this.keysFound),this.scareDirector.onKeyTaken(n.userData.room,e),this.keysFound===this.totalKeys&&(this.hud.showObjective("All keys — GET TO THE FRONT DOOR!",3),this.audio&&setTimeout(()=>this.audio.playWhisper(0),420));return}if(n.userData.type==="battery"){this.house.collectBattery(n);const i=this.player.getBattery()<=0;this.player.addBattery(42),i&&!this.player.flashlightOn&&(this.player.flashlightOn=!0),this.hud.setBattery(this.player.getBattery()),this.audio&&this.audio.playPickup(!1),this.hud.showObjective("Battery — flashlight restored",1.9),this.hud.screenFlash("#66d4ff",.1,160);return}if(n.userData.type==="note"){const i=n.userData.title||"NOTE",r=n.userData.body||"";this.hud.showNote(i,r),document.pointerLockElement&&document.exitPointerLock(),this.player.disable();const o=l=>{(l.key==="Escape"||l.key.toLowerCase()==="e")&&(this.hud.hideNote(),this.player.enable(),this.state==="PLAYING"&&this.canvas&&this.canvas.requestPointerLock(),document.removeEventListener("keydown",o))};setTimeout(()=>document.addEventListener("keydown",o),180);const a=document.getElementById("note-overlay");if(a){const l=()=>{this.hud.hideNote(),this.player.enable(),this.state==="PLAYING"&&this.canvas&&this.canvas.requestPointerLock(),a.removeEventListener("click",l),document.removeEventListener("keydown",o)};a.addEventListener("click",l)}return}}}checkWinCondition(){if(this.keysFound<this.totalKeys)return!1;const t=this.player.getPosition(),e=this.house.frontDoor;if(!e)return!1;const n=t.x-0,i=t.z-7.7;return Math.sqrt(n*n+i*i)<1.35&&(!e.locked||this.keysFound>=this.totalKeys)}triggerCaught(){if(this.state==="CAUGHT"||this.state==="ESCAPED")return;this.state="CAUGHT",this.player.disable(),document.pointerLockElement&&document.exitPointerLock(),this.audio&&(this.audio.stopChaseMusic(.35),this.audio.playScream(!0),this.audio.playStinger(1)),this.hud.shake(2.2,680),this.hud.screenFlash("#ff0a0a",.62,320),setTimeout(()=>this.hud.screenFlash("#000000",.88,400),340);const t=document.getElementById("jumpscare");t?(t.classList.add("active"),setTimeout(()=>{t.classList.remove("active"),this.hud.showDeathScreen()},1350)):setTimeout(()=>this.hud.showDeathScreen(),1150)}triggerWin(){if(this.state==="ESCAPED")return;this.state="ESCAPED",this.player.disable(),document.pointerLockElement&&document.exitPointerLock(),this.audio&&this.audio.stopChaseMusic(.6),this.hud.shake(.6,280),this.hud.screenFlash("#ffffff",.48,420);const t=Math.floor(this.timeSurvived/60),e=Math.floor(this.timeSurvived%60),n=Math.floor(this.timeSurvived*10%10),i=`${String(t).padStart(2,"0")}:${String(e).padStart(2,"0")}.${n}`;this.hud.showWinScreen(i,this.banishCountTotal+this.ghost.banishCount)}update(t,e){if(this.state==="TITLE"){this.house.update(t,e,this.player.getPosition(),this.player.isFlashlightOn(),this.camera);return}if(this.state==="CAUGHT"||this.state==="ESCAPED"){this.house.update(t,e,this.player.getPosition(),this.player.isFlashlightOn(),this.camera);return}this.timeSurvived+=t;const n=this.player.getPosition(),i=this.house.getInteractableInRange(n,1.65);i?i.type==="door"?i.isFront?i.locked&&this.keysFound>=this.totalKeys?this.hud.setInteractPrompt("[E] Unlock & Escape"):i.locked?this.hud.setInteractPrompt(`[E] Locked — ${this.keysFound}/${this.totalKeys} keys`):this.hud.setInteractPrompt(i.isOpen?"[E] Close Door":"[E] Open Door"):this.hud.setInteractPrompt(i.isOpen?"[E] Close Door":"[E] Open Door"):i.userData.type==="key"?this.hud.setInteractPrompt("[E] Pick Up Brass Key"):i.userData.type==="battery"?this.hud.setInteractPrompt("[E] Pick Up Battery"):i.userData.type==="note"?this.hud.setInteractPrompt("[E] Read Note"):this.hud.setInteractPrompt("[E] Interact"):this.hud.setInteractPrompt("");const r=this.ghost.getPosition(),o=this.ghost.isGhostVisible(),a=this.player.getDirection(),l=this.player.isFlashlightOn(),c=o&&l&&this.ghost.checkInBeam(n,a,l);if(this._isBurning=c&&o,this.player.update(t,e,this._isBurning),this.hud.setBattery(this.player.getBattery()),this._isBurning&&this.player.setBurningBoost(!0),this.house.update(t,e,n,l,this.camera),this.house.updateDoors(t),this.ghost.update(t,e,n,a,l,this.player.flashlight?this.player.flashlight.position:n),this.ghost.getBurnProgress()>=1){const h=this.ghost.state==="chasing"||this.ghost.state==="stalking_apparition"||this.ghost.state==="stalking";this.ghost.banish(),this.banishCountTotal++,this.audio&&(this.audio.playScream(!1),this.audio.playStinger(.72)),this.hud.screenFlash("#ff8a15",.24,320),this.hud.shake(1.25,480);const u=this._generation||0;h&&this.scareDirector.chaseStarted?setTimeout(()=>{u===(this._generation||0)&&this.state==="PLAYING"&&this.ghost.state==="banished"&&(this.ghost.reformToChase(this.player.getPosition()),this.audio&&(this.audio.playGrowl(),this.audio.playStinger(.35)),this.hud.screenFlash("#ff1a1a",.14,180))},this.ghost.banishRespite*1e3):setTimeout(()=>{u===(this._generation||0)&&this.state==="PLAYING"&&this.ghost.state==="banished"&&this.ghost.reformToStalk(this.player.getPosition())},(this.ghost.banishRespite+2+Math.random()*3)*1e3)}if(this.ghost.state==="banished"&&this.ghost.banishTimer<=0&&(this.scareDirector.chaseStarted?this.state==="PLAYING"&&this.ghost.reformToChase(n):this.scareDirector.secondKeyTaken?this.ghost.reformToStalk(n):this.ghost.state="hidden"),this.scareDirector.setKeysCollected(this.keysFound),this.scareDirector.update(t,e,n),this.scareDirector.chaseStarted&&!this._chaseMusicStarted&&(this._chaseMusicStarted=!0,this.audio&&this.audio.startChaseMusic(),this.hud.showObjective("RUN — HOLD LIGHT ON HIM TO BURN",2.8)),this.audio&&this.audio.updateProximityAudio(n,r,o,this.keysFound),this.hud.setBurnProgress(this.ghost.getBurnProgress()),this.checkWinCondition()){this.triggerWin();return}if(this.ghost.isTouchingPlayer(n,.88)){this.triggerCaught();return}}animate(t){requestAnimationFrame(this.animate);const e=Math.min(.033,(t-this._lastTime)/1e3)||.016;this._lastTime=t;const n=t*.001;this.update(e,n),this.composer.render()}}const _s=new kp;window.game=_s;const xn=document.getElementById("enter-btn"),rr=document.getElementById("title-screen"),fo=document.getElementById("c");xn&&(xn.addEventListener("click",async()=>{xn.textContent="Entering...",xn.disabled=!0;try{await _s.startGame()}catch(s){console.error(s),xn.textContent="ENTER THE HOUSE",xn.disabled=!1}}),document.addEventListener("keydown",s=>{_s.state==="TITLE"&&s.key==="Enter"&&xn.click()}));rr&&rr.addEventListener("click",s=>{s.target===rr&&_s.state==="TITLE"&&xn?.click()});fo&&fo.setAttribute("tabindex","0");
