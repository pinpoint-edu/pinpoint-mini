const Gd="134",Hd={LEFT:0,MIDDLE:1,RIGHT:2,ROTATE:0,DOLLY:1,PAN:2},kd={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},wl=0,ms=1,bl=2,Vd=3,Wd=0,fs=1,Ml=2,ur=3,Ri=0,Xe=1,Pi=2,gs=1,jd=2,jt=0,dr=1,vs=2,ys=3,xs=4,Sl=5,Ii=100,Tl=101,El=102,_s=103,ws=104,Al=200,Ll=201,Cl=202,Rl=203,bs=204,Ms=205,Pl=206,Il=207,Dl=208,Nl=209,Bl=210,Fl=0,Ol=1,zl=2,Zn=3,Ul=4,Gl=5,Hl=6,kl=7,an=0,Vl=1,Wl=2,si=0,jl=1,ql=2,Xl=3,Yl=4,Zl=5,Jn=300,Di=301,Ni=302,sn=303,on=304,pr=306,ln=307,cn=1e3,ot=1001,hn=1002,Ke=1003,Kn=1004,qd=1004,Qn=1005,Xd=1005,$e=1006,Ss=1007,Yd=1007,Bi=1008,Zd=1008,qt=1009,Jl=1010,Kl=1011,un=1012,Ql=1013,dn=1014,Ft=1015,Fi=1016,$l=1017,ec=1018,tc=1019,mr=1020,ic=1021,Oi=1022,lt=1023,rc=1024,nc=1025,ac=lt,zi=1026,fr=1027,sc=1028,oc=1029,lc=1030,cc=1031,hc=1032,uc=1033,Ts=33776,Es=33777,As=33778,Ls=33779,Cs=35840,Rs=35841,Ps=35842,Is=35843,dc=36196,Ds=37492,Ns=37496,pc=37808,mc=37809,fc=37810,gc=37811,vc=37812,yc=37813,xc=37814,_c=37815,wc=37816,bc=37817,Mc=37818,Sc=37819,Tc=37820,Ec=37821,Ac=36492,Lc=37840,Cc=37841,Rc=37842,Pc=37843,Ic=37844,Dc=37845,Nc=37846,Bc=37847,Fc=37848,Oc=37849,zc=37850,Uc=37851,Gc=37852,Hc=37853,kc=2200,Vc=2201,Wc=2202,pn=2300,mn=2301,$n=2302,Ui=2400,Gi=2401,fn=2402,ea=2500,Bs=2501,jc=0,Jd=1,Kd=2,ct=3e3,oi=3001,ta=3007,ia=3002,qc=3003,Fs=3004,Os=3005,zs=3006,Xc=3200,Yc=3201,Hi=0,Zc=1,Qd=0,ra=7680,$d=7681,ep=7682,tp=7683,ip=34055,rp=34056,np=5386,ap=512,sp=513,op=514,lp=515,cp=516,hp=517,up=518,Jc=519,gr=35044,vr=35048,dp=35040,pp=35045,mp=35049,fp=35041,gp=35046,vp=35050,yp=35042,xp="100",Us="300 es";class li{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(t)===-1&&i[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;const i=this._listeners;return i[e]!==void 0&&i[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;const i=this._listeners[e];if(i!==void 0){const r=i.indexOf(t);r!==-1&&i.splice(r,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const t=this._listeners[e.type];if(t!==void 0){e.target=this;const i=t.slice(0);for(let r=0,n=i.length;r<n;r++)i[r].call(this,e);e.target=null}}}let na=1234567;const ki=Math.PI/180,gn=180/Math.PI,ht=[];for(let a=0;a<256;a++)ht[a]=(a<16?"0":"")+a.toString(16);const _p=typeof crypto<"u"&&"randomUUID"in crypto;function _t(){if(_p)return crypto.randomUUID().toUpperCase();const a=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(ht[a&255]+ht[a>>8&255]+ht[a>>16&255]+ht[a>>24&255]+"-"+ht[e&255]+ht[e>>8&255]+"-"+ht[e>>16&15|64]+ht[e>>24&255]+"-"+ht[t&63|128]+ht[t>>8&255]+"-"+ht[t>>16&255]+ht[t>>24&255]+ht[i&255]+ht[i>>8&255]+ht[i>>16&255]+ht[i>>24&255]).toUpperCase()}function ut(a,e,t){return Math.max(e,Math.min(t,a))}function Gs(a,e){return(a%e+e)%e}function wp(a,e,t,i,r){return i+(a-e)*(r-i)/(t-e)}function bp(a,e,t){return a!==e?(t-a)/(e-a):0}function vn(a,e,t){return(1-t)*a+t*e}function Mp(a,e,t,i){return vn(a,e,1-Math.exp(-t*i))}function Sp(a,e=1){return e-Math.abs(Gs(a,e*2)-e)}function Tp(a,e,t){return a<=e?0:a>=t?1:(a=(a-e)/(t-e),a*a*(3-2*a))}function Ep(a,e,t){return a<=e?0:a>=t?1:(a=(a-e)/(t-e),a*a*a*(a*(a*6-15)+10))}function Ap(a,e){return a+Math.floor(Math.random()*(e-a+1))}function Lp(a,e){return a+Math.random()*(e-a)}function Cp(a){return a*(.5-Math.random())}function Rp(a){return a!==void 0&&(na=a%2147483647),na=na*16807%2147483647,(na-1)/2147483646}function Pp(a){return a*ki}function Ip(a){return a*gn}function Hs(a){return(a&a-1)===0&&a!==0}function Kc(a){return Math.pow(2,Math.ceil(Math.log(a)/Math.LN2))}function Qc(a){return Math.pow(2,Math.floor(Math.log(a)/Math.LN2))}function Dp(a,e,t,i,r){const n=Math.cos,s=Math.sin,o=n(t/2),l=s(t/2),c=n((e+i)/2),h=s((e+i)/2),d=n((e-i)/2),u=s((e-i)/2),p=n((i-e)/2),g=s((i-e)/2);switch(r){case"XYX":a.set(o*h,l*d,l*u,o*c);break;case"YZY":a.set(l*u,o*h,l*d,o*c);break;case"ZXZ":a.set(l*d,l*u,o*h,o*c);break;case"XZX":a.set(o*h,l*g,l*p,o*c);break;case"YXY":a.set(l*p,o*h,l*g,o*c);break;case"ZYZ":a.set(l*g,l*p,o*h,o*c);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+r)}}var $c=Object.freeze({__proto__:null,DEG2RAD:ki,RAD2DEG:gn,generateUUID:_t,clamp:ut,euclideanModulo:Gs,mapLinear:wp,inverseLerp:bp,lerp:vn,damp:Mp,pingpong:Sp,smoothstep:Tp,smootherstep:Ep,randInt:Ap,randFloat:Lp,randFloatSpread:Cp,seededRandom:Rp,degToRad:Pp,radToDeg:Ip,isPowerOfTwo:Hs,ceilPowerOfTwo:Kc,floorPowerOfTwo:Qc,setQuaternionFromProperEuler:Dp});class j{constructor(e=0,t=0){this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e,t){return t!==void 0?(console.warn("THREE.Vector2: .add() now only accepts one argument. Use .addVectors( a, b ) instead."),this.addVectors(e,t)):(this.x+=e.x,this.y+=e.y,this)}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e,t){return t!==void 0?(console.warn("THREE.Vector2: .sub() now only accepts one argument. Use .subVectors( a, b ) instead."),this.subVectors(e,t)):(this.x-=e.x,this.y-=e.y,this)}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,i=this.y,r=e.elements;return this.x=r[0]*t+r[3]*i+r[6],this.y=r[1]*t+r[4]*i+r[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,i=this.y-e.y;return t*t+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t,i){return i!==void 0&&console.warn("THREE.Vector2: offset has been removed from .fromBufferAttribute()."),this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const i=Math.cos(t),r=Math.sin(t),n=this.x-e.x,s=this.y-e.y;return this.x=n*i-s*r+e.x,this.y=n*r+s*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}j.prototype.isVector2=!0;class et{constructor(){this.elements=[1,0,0,0,1,0,0,0,1],arguments.length>0&&console.error("THREE.Matrix3: the constructor no longer reads arguments. use .set() instead.")}set(e,t,i,r,n,s,o,l,c){const h=this.elements;return h[0]=e,h[1]=r,h[2]=o,h[3]=t,h[4]=n,h[5]=l,h[6]=i,h[7]=s,h[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],this}extractBasis(e,t,i){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const i=e.elements,r=t.elements,n=this.elements,s=i[0],o=i[3],l=i[6],c=i[1],h=i[4],d=i[7],u=i[2],p=i[5],g=i[8],v=r[0],x=r[3],f=r[6],m=r[1],w=r[4],y=r[7],M=r[2],A=r[5],_=r[8];return n[0]=s*v+o*m+l*M,n[3]=s*x+o*w+l*A,n[6]=s*f+o*y+l*_,n[1]=c*v+h*m+d*M,n[4]=c*x+h*w+d*A,n[7]=c*f+h*y+d*_,n[2]=u*v+p*m+g*M,n[5]=u*x+p*w+g*A,n[8]=u*f+p*y+g*_,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],i=e[1],r=e[2],n=e[3],s=e[4],o=e[5],l=e[6],c=e[7],h=e[8];return t*s*h-t*o*c-i*n*h+i*o*l+r*n*c-r*s*l}invert(){const e=this.elements,t=e[0],i=e[1],r=e[2],n=e[3],s=e[4],o=e[5],l=e[6],c=e[7],h=e[8],d=h*s-o*c,u=o*l-h*n,p=c*n-s*l,g=t*d+i*u+r*p;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);const v=1/g;return e[0]=d*v,e[1]=(r*c-h*i)*v,e[2]=(o*i-r*s)*v,e[3]=u*v,e[4]=(h*t-r*l)*v,e[5]=(r*n-o*t)*v,e[6]=p*v,e[7]=(i*l-c*t)*v,e[8]=(s*t-i*n)*v,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,i,r,n,s,o){const l=Math.cos(n),c=Math.sin(n);return this.set(i*l,i*c,-i*(l*s+c*o)+s+e,-r*c,r*l,-r*(-c*s+l*o)+o+t,0,0,1),this}scale(e,t){const i=this.elements;return i[0]*=e,i[3]*=e,i[6]*=e,i[1]*=t,i[4]*=t,i[7]*=t,this}rotate(e){const t=Math.cos(e),i=Math.sin(e),r=this.elements,n=r[0],s=r[3],o=r[6],l=r[1],c=r[4],h=r[7];return r[0]=t*n+i*l,r[3]=t*s+i*c,r[6]=t*o+i*h,r[1]=-i*n+t*l,r[4]=-i*s+t*c,r[7]=-i*o+t*h,this}translate(e,t){const i=this.elements;return i[0]+=e*i[2],i[3]+=e*i[5],i[6]+=e*i[8],i[1]+=t*i[2],i[4]+=t*i[5],i[7]+=t*i[8],this}equals(e){const t=this.elements,i=e.elements;for(let r=0;r<9;r++)if(t[r]!==i[r])return!1;return!0}fromArray(e,t=0){for(let i=0;i<9;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){const i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}}et.prototype.isMatrix3=!0;function eh(a){if(a.length===0)return-1/0;let e=a[0];for(let t=1,i=a.length;t<i;++t)a[t]>e&&(e=a[t]);return e}const Np={Int8Array,Uint8Array,Uint8ClampedArray,Int16Array,Uint16Array,Int32Array,Uint32Array,Float32Array,Float64Array};function yr(a,e){return new Np[a](e)}function aa(a){return document.createElementNS("http://www.w3.org/1999/xhtml",a)}function th(a,e=0){let t=3735928559^e,i=1103547991^e;for(let r=0,n;r<a.length;r++)n=a.charCodeAt(r),t=Math.imul(t^n,2654435761),i=Math.imul(i^n,1597334677);return t=Math.imul(t^t>>>16,2246822507)^Math.imul(i^i>>>13,3266489909),i=Math.imul(i^i>>>16,2246822507)^Math.imul(t^t>>>13,3266489909),4294967296*(2097151&i)+(t>>>0)}let xr;class Vi{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{xr===void 0&&(xr=aa("canvas")),xr.width=e.width,xr.height=e.height;const i=xr.getContext("2d");e instanceof ImageData?i.putImageData(e,0,0):i.drawImage(e,0,0,e.width,e.height),t=xr}return t.width>2048||t.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),t.toDataURL("image/jpeg",.6)):t.toDataURL("image/png")}}let Bp=0;class tt extends li{constructor(e=tt.DEFAULT_IMAGE,t=tt.DEFAULT_MAPPING,i=ot,r=ot,n=$e,s=Bi,o=lt,l=qt,c=1,h=ct){super(),Object.defineProperty(this,"id",{value:Bp++}),this.uuid=_t(),this.name="",this.image=e,this.mipmaps=[],this.mapping=t,this.wrapS=i,this.wrapT=r,this.magFilter=n,this.minFilter=s,this.anisotropy=c,this.format=o,this.internalFormat=null,this.type=l,this.offset=new j(0,0),this.repeat=new j(1,1),this.center=new j(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new et,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.encoding=h,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.image=e.image,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.encoding=e.encoding,this.userData=JSON.parse(JSON.stringify(e.userData)),this}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const i={metadata:{version:4.5,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,mapping:this.mapping,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,type:this.type,encoding:this.encoding,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};if(this.image!==void 0){const r=this.image;if(r.uuid===void 0&&(r.uuid=_t()),!t&&e.images[r.uuid]===void 0){let n;if(Array.isArray(r)){n=[];for(let s=0,o=r.length;s<o;s++)r[s].isDataTexture?n.push(ks(r[s].image)):n.push(ks(r[s]))}else n=ks(r);e.images[r.uuid]={uuid:r.uuid,url:n}}i.image=r.uuid}return JSON.stringify(this.userData)!=="{}"&&(i.userData=this.userData),t||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Jn)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case cn:e.x=e.x-Math.floor(e.x);break;case ot:e.x=e.x<0?0:1;break;case hn:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case cn:e.y=e.y-Math.floor(e.y);break;case ot:e.y=e.y<0?0:1;break;case hn:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&this.version++}}tt.DEFAULT_IMAGE=void 0,tt.DEFAULT_MAPPING=Jn,tt.prototype.isTexture=!0;function ks(a){return typeof HTMLImageElement<"u"&&a instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&a instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&a instanceof ImageBitmap?Vi.getDataURL(a):a.data?{data:Array.prototype.slice.call(a.data),width:a.width,height:a.height,type:a.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}class ze{constructor(e=0,t=0,i=0,r=1){this.x=e,this.y=t,this.z=i,this.w=r}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,i,r){return this.x=e,this.y=t,this.z=i,this.w=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e,t){return t!==void 0?(console.warn("THREE.Vector4: .add() now only accepts one argument. Use .addVectors( a, b ) instead."),this.addVectors(e,t)):(this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this)}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e,t){return t!==void 0?(console.warn("THREE.Vector4: .sub() now only accepts one argument. Use .subVectors( a, b ) instead."),this.subVectors(e,t)):(this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this)}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,i=this.y,r=this.z,n=this.w,s=e.elements;return this.x=s[0]*t+s[4]*i+s[8]*r+s[12]*n,this.y=s[1]*t+s[5]*i+s[9]*r+s[13]*n,this.z=s[2]*t+s[6]*i+s[10]*r+s[14]*n,this.w=s[3]*t+s[7]*i+s[11]*r+s[15]*n,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,i,r,n;const s=e.elements,o=s[0],l=s[4],c=s[8],h=s[1],d=s[5],u=s[9],p=s[2],g=s[6],v=s[10];if(Math.abs(l-h)<.01&&Math.abs(c-p)<.01&&Math.abs(u-g)<.01){if(Math.abs(l+h)<.1&&Math.abs(c+p)<.1&&Math.abs(u+g)<.1&&Math.abs(o+d+v-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const f=(o+1)/2,m=(d+1)/2,w=(v+1)/2,y=(l+h)/4,M=(c+p)/4,A=(u+g)/4;return f>m&&f>w?f<.01?(i=0,r=.707106781,n=.707106781):(i=Math.sqrt(f),r=y/i,n=M/i):m>w?m<.01?(i=.707106781,r=0,n=.707106781):(r=Math.sqrt(m),i=y/r,n=A/r):w<.01?(i=.707106781,r=.707106781,n=0):(n=Math.sqrt(w),i=M/n,r=A/n),this.set(i,r,n,t),this}let x=Math.sqrt((g-u)*(g-u)+(c-p)*(c-p)+(h-l)*(h-l));return Math.abs(x)<.001&&(x=1),this.x=(g-u)/x,this.y=(c-p)/x,this.z=(h-l)/x,this.w=Math.acos((o+d+v-1)/2),this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this.w=Math.max(e.w,Math.min(t.w,this.w)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this.w=Math.max(e,Math.min(t,this.w)),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this.z=this.z<0?Math.ceil(this.z):Math.floor(this.z),this.w=this.w<0?Math.ceil(this.w):Math.floor(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this.w=e.w+(t.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t,i){return i!==void 0&&console.warn("THREE.Vector4: offset has been removed from .fromBufferAttribute()."),this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}ze.prototype.isVector4=!0;class Ct extends li{constructor(e,t,i={}){super(),this.width=e,this.height=t,this.depth=1,this.scissor=new ze(0,0,e,t),this.scissorTest=!1,this.viewport=new ze(0,0,e,t),this.texture=new tt(void 0,i.mapping,i.wrapS,i.wrapT,i.magFilter,i.minFilter,i.format,i.type,i.anisotropy,i.encoding),this.texture.isRenderTargetTexture=!0,this.texture.image={width:e,height:t,depth:1},this.texture.generateMipmaps=i.generateMipmaps!==void 0?i.generateMipmaps:!1,this.texture.internalFormat=i.internalFormat!==void 0?i.internalFormat:null,this.texture.minFilter=i.minFilter!==void 0?i.minFilter:$e,this.depthBuffer=i.depthBuffer!==void 0?i.depthBuffer:!0,this.stencilBuffer=i.stencilBuffer!==void 0?i.stencilBuffer:!1,this.depthTexture=i.depthTexture!==void 0?i.depthTexture:null}setTexture(e){e.image={width:this.width,height:this.height,depth:this.depth},this.texture=e}setSize(e,t,i=1){(this.width!==e||this.height!==t||this.depth!==i)&&(this.width=e,this.height=t,this.depth=i,this.texture.image.width=e,this.texture.image.height=t,this.texture.image.depth=i,this.dispose()),this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.width=e.width,this.height=e.height,this.depth=e.depth,this.viewport.copy(e.viewport),this.texture=e.texture.clone(),this.texture.image={...this.texture.image},this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.depthTexture=e.depthTexture,this}dispose(){this.dispatchEvent({type:"dispose"})}}Ct.prototype.isWebGLRenderTarget=!0;class ih extends Ct{constructor(e,t,i){super(e,t);const r=this.texture;this.texture=[];for(let n=0;n<i;n++)this.texture[n]=r.clone()}setSize(e,t,i=1){if(this.width!==e||this.height!==t||this.depth!==i){this.width=e,this.height=t,this.depth=i;for(let r=0,n=this.texture.length;r<n;r++)this.texture[r].image.width=e,this.texture[r].image.height=t,this.texture[r].image.depth=i;this.dispose()}return this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t),this}copy(e){this.dispose(),this.width=e.width,this.height=e.height,this.depth=e.depth,this.viewport.set(0,0,this.width,this.height),this.scissor.set(0,0,this.width,this.height),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.depthTexture=e.depthTexture,this.texture.length=0;for(let t=0,i=e.texture.length;t<i;t++)this.texture[t]=e.texture[t].clone();return this}}ih.prototype.isWebGLMultipleRenderTargets=!0;class Vs extends Ct{constructor(e,t,i){super(e,t,i),this.samples=4}copy(e){return super.copy.call(this,e),this.samples=e.samples,this}}Vs.prototype.isWebGLMultisampleRenderTarget=!0;class dt{constructor(e=0,t=0,i=0,r=1){this._x=e,this._y=t,this._z=i,this._w=r}static slerp(e,t,i,r){return console.warn("THREE.Quaternion: Static .slerp() has been deprecated. Use qm.slerpQuaternions( qa, qb, t ) instead."),i.slerpQuaternions(e,t,r)}static slerpFlat(e,t,i,r,n,s,o){let l=i[r+0],c=i[r+1],h=i[r+2],d=i[r+3];const u=n[s+0],p=n[s+1],g=n[s+2],v=n[s+3];if(o===0){e[t+0]=l,e[t+1]=c,e[t+2]=h,e[t+3]=d;return}if(o===1){e[t+0]=u,e[t+1]=p,e[t+2]=g,e[t+3]=v;return}if(d!==v||l!==u||c!==p||h!==g){let x=1-o;const f=l*u+c*p+h*g+d*v,m=f>=0?1:-1,w=1-f*f;if(w>Number.EPSILON){const M=Math.sqrt(w),A=Math.atan2(M,f*m);x=Math.sin(x*A)/M,o=Math.sin(o*A)/M}const y=o*m;if(l=l*x+u*y,c=c*x+p*y,h=h*x+g*y,d=d*x+v*y,x===1-o){const M=1/Math.sqrt(l*l+c*c+h*h+d*d);l*=M,c*=M,h*=M,d*=M}}e[t]=l,e[t+1]=c,e[t+2]=h,e[t+3]=d}static multiplyQuaternionsFlat(e,t,i,r,n,s){const o=i[r],l=i[r+1],c=i[r+2],h=i[r+3],d=n[s],u=n[s+1],p=n[s+2],g=n[s+3];return e[t]=o*g+h*d+l*p-c*u,e[t+1]=l*g+h*u+c*d-o*p,e[t+2]=c*g+h*p+o*u-l*d,e[t+3]=h*g-o*d-l*u-c*p,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,i,r){return this._x=e,this._y=t,this._z=i,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t){if(!(e&&e.isEuler))throw new Error("THREE.Quaternion: .setFromEuler() now expects an Euler rotation rather than a Vector3 and order.");const i=e._x,r=e._y,n=e._z,s=e._order,o=Math.cos,l=Math.sin,c=o(i/2),h=o(r/2),d=o(n/2),u=l(i/2),p=l(r/2),g=l(n/2);switch(s){case"XYZ":this._x=u*h*d+c*p*g,this._y=c*p*d-u*h*g,this._z=c*h*g+u*p*d,this._w=c*h*d-u*p*g;break;case"YXZ":this._x=u*h*d+c*p*g,this._y=c*p*d-u*h*g,this._z=c*h*g-u*p*d,this._w=c*h*d+u*p*g;break;case"ZXY":this._x=u*h*d-c*p*g,this._y=c*p*d+u*h*g,this._z=c*h*g+u*p*d,this._w=c*h*d-u*p*g;break;case"ZYX":this._x=u*h*d-c*p*g,this._y=c*p*d+u*h*g,this._z=c*h*g-u*p*d,this._w=c*h*d+u*p*g;break;case"YZX":this._x=u*h*d+c*p*g,this._y=c*p*d+u*h*g,this._z=c*h*g-u*p*d,this._w=c*h*d-u*p*g;break;case"XZY":this._x=u*h*d-c*p*g,this._y=c*p*d-u*h*g,this._z=c*h*g+u*p*d,this._w=c*h*d+u*p*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+s)}return t!==!1&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const i=t/2,r=Math.sin(i);return this._x=e.x*r,this._y=e.y*r,this._z=e.z*r,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,i=t[0],r=t[4],n=t[8],s=t[1],o=t[5],l=t[9],c=t[2],h=t[6],d=t[10],u=i+o+d;if(u>0){const p=.5/Math.sqrt(u+1);this._w=.25/p,this._x=(h-l)*p,this._y=(n-c)*p,this._z=(s-r)*p}else if(i>o&&i>d){const p=2*Math.sqrt(1+i-o-d);this._w=(h-l)/p,this._x=.25*p,this._y=(r+s)/p,this._z=(n+c)/p}else if(o>d){const p=2*Math.sqrt(1+o-i-d);this._w=(n-c)/p,this._x=(r+s)/p,this._y=.25*p,this._z=(l+h)/p}else{const p=2*Math.sqrt(1+d-i-o);this._w=(s-r)/p,this._x=(n+c)/p,this._y=(l+h)/p,this._z=.25*p}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let i=e.dot(t)+1;return i<Number.EPSILON?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(ut(this.dot(e),-1,1)))}rotateTowards(e,t){const i=this.angleTo(e);if(i===0)return this;const r=Math.min(1,t/i);return this.slerp(e,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e,t){return t!==void 0?(console.warn("THREE.Quaternion: .multiply() now only accepts one argument. Use .multiplyQuaternions( a, b ) instead."),this.multiplyQuaternions(e,t)):this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const i=e._x,r=e._y,n=e._z,s=e._w,o=t._x,l=t._y,c=t._z,h=t._w;return this._x=i*h+s*o+r*c-n*l,this._y=r*h+s*l+n*o-i*c,this._z=n*h+s*c+i*l-r*o,this._w=s*h-i*o-r*l-n*c,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);const i=this._x,r=this._y,n=this._z,s=this._w;let o=s*e._w+i*e._x+r*e._y+n*e._z;if(o<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,o=-o):this.copy(e),o>=1)return this._w=s,this._x=i,this._y=r,this._z=n,this;const l=1-o*o;if(l<=Number.EPSILON){const p=1-t;return this._w=p*s+t*this._w,this._x=p*i+t*this._x,this._y=p*r+t*this._y,this._z=p*n+t*this._z,this.normalize(),this._onChangeCallback(),this}const c=Math.sqrt(l),h=Math.atan2(c,o),d=Math.sin((1-t)*h)/c,u=Math.sin(t*h)/c;return this._w=s*d+this._w*u,this._x=i*d+this._x*u,this._y=r*d+this._y*u,this._z=n*d+this._z*u,this._onChangeCallback(),this}slerpQuaternions(e,t,i){this.copy(e).slerp(t,i)}random(){const e=Math.random(),t=Math.sqrt(1-e),i=Math.sqrt(e),r=2*Math.PI*Math.random(),n=2*Math.PI*Math.random();return this.set(t*Math.cos(r),i*Math.sin(n),i*Math.cos(n),t*Math.sin(r))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}}dt.prototype.isQuaternion=!0;class b{constructor(e=0,t=0,i=0){this.x=e,this.y=t,this.z=i}set(e,t,i){return i===void 0&&(i=this.z),this.x=e,this.y=t,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e,t){return t!==void 0?(console.warn("THREE.Vector3: .add() now only accepts one argument. Use .addVectors( a, b ) instead."),this.addVectors(e,t)):(this.x+=e.x,this.y+=e.y,this.z+=e.z,this)}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e,t){return t!==void 0?(console.warn("THREE.Vector3: .sub() now only accepts one argument. Use .subVectors( a, b ) instead."),this.subVectors(e,t)):(this.x-=e.x,this.y-=e.y,this.z-=e.z,this)}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e,t){return t!==void 0?(console.warn("THREE.Vector3: .multiply() now only accepts one argument. Use .multiplyVectors( a, b ) instead."),this.multiplyVectors(e,t)):(this.x*=e.x,this.y*=e.y,this.z*=e.z,this)}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return e&&e.isEuler||console.error("THREE.Vector3: .applyEuler() now expects an Euler rotation rather than a Vector3 and order."),this.applyQuaternion(rh.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(rh.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,i=this.y,r=this.z,n=e.elements;return this.x=n[0]*t+n[3]*i+n[6]*r,this.y=n[1]*t+n[4]*i+n[7]*r,this.z=n[2]*t+n[5]*i+n[8]*r,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,i=this.y,r=this.z,n=e.elements,s=1/(n[3]*t+n[7]*i+n[11]*r+n[15]);return this.x=(n[0]*t+n[4]*i+n[8]*r+n[12])*s,this.y=(n[1]*t+n[5]*i+n[9]*r+n[13])*s,this.z=(n[2]*t+n[6]*i+n[10]*r+n[14])*s,this}applyQuaternion(e){const t=this.x,i=this.y,r=this.z,n=e.x,s=e.y,o=e.z,l=e.w,c=l*t+s*r-o*i,h=l*i+o*t-n*r,d=l*r+n*i-s*t,u=-n*t-s*i-o*r;return this.x=c*l+u*-n+h*-o-d*-s,this.y=h*l+u*-s+d*-n-c*-o,this.z=d*l+u*-o+c*-s-h*-n,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,i=this.y,r=this.z,n=e.elements;return this.x=n[0]*t+n[4]*i+n[8]*r,this.y=n[1]*t+n[5]*i+n[9]*r,this.z=n[2]*t+n[6]*i+n[10]*r,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this.z=this.z<0?Math.ceil(this.z):Math.floor(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this}cross(e,t){return t!==void 0?(console.warn("THREE.Vector3: .cross() now only accepts one argument. Use .crossVectors( a, b ) instead."),this.crossVectors(e,t)):this.crossVectors(this,e)}crossVectors(e,t){const i=e.x,r=e.y,n=e.z,s=t.x,o=t.y,l=t.z;return this.x=r*l-n*o,this.y=n*s-i*l,this.z=i*o-r*s,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const i=e.dot(this)/t;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return Ws.copy(this).projectOnVector(e),this.sub(Ws)}reflect(e){return this.sub(Ws.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const i=this.dot(e)/t;return Math.acos(ut(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,i=this.y-e.y,r=this.z-e.z;return t*t+i*i+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,i){const r=Math.sin(t)*e;return this.x=r*Math.sin(i),this.y=Math.cos(t)*e,this.z=r*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,i){return this.x=e*Math.sin(t),this.y=i,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),r=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=i,this.z=r,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t,i){return i!==void 0&&console.warn("THREE.Vector3: offset has been removed from .fromBufferAttribute()."),this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=(Math.random()-.5)*2,t=Math.random()*Math.PI*2,i=Math.sqrt(1-e**2);return this.x=i*Math.cos(t),this.y=i*Math.sin(t),this.z=e,this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}b.prototype.isVector3=!0;const Ws=new b,rh=new dt;class wt{constructor(e=new b(1/0,1/0,1/0),t=new b(-1/0,-1/0,-1/0)){this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){let t=1/0,i=1/0,r=1/0,n=-1/0,s=-1/0,o=-1/0;for(let l=0,c=e.length;l<c;l+=3){const h=e[l],d=e[l+1],u=e[l+2];h<t&&(t=h),d<i&&(i=d),u<r&&(r=u),h>n&&(n=h),d>s&&(s=d),u>o&&(o=u)}return this.min.set(t,i,r),this.max.set(n,s,o),this}setFromBufferAttribute(e){let t=1/0,i=1/0,r=1/0,n=-1/0,s=-1/0,o=-1/0;for(let l=0,c=e.count;l<c;l++){const h=e.getX(l),d=e.getY(l),u=e.getZ(l);h<t&&(t=h),d<i&&(i=d),u<r&&(r=u),h>n&&(n=h),d>s&&(s=d),u>o&&(o=u)}return this.min.set(t,i,r),this.max.set(n,s,o),this}setFromPoints(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const i=yn.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e){return this.makeEmpty(),this.expandByObject(e)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e){e.updateWorldMatrix(!1,!1);const t=e.geometry;t!==void 0&&(t.boundingBox===null&&t.computeBoundingBox(),js.copy(t.boundingBox),js.applyMatrix4(e.matrixWorld),this.union(js));const i=e.children;for(let r=0,n=i.length;r<n;r++)this.expandByObject(i[r]);return this}containsPoint(e){return!(e.x<this.min.x||e.x>this.max.x||e.y<this.min.y||e.y>this.max.y||e.z<this.min.z||e.z>this.max.z)}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return!(e.max.x<this.min.x||e.min.x>this.max.x||e.max.y<this.min.y||e.min.y>this.max.y||e.max.z<this.min.z||e.min.z>this.max.z)}intersectsSphere(e){return this.clampPoint(e.center,yn),yn.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,i;return e.normal.x>0?(t=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),t<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(xn),sa.subVectors(this.max,xn),_r.subVectors(e.a,xn),wr.subVectors(e.b,xn),br.subVectors(e.c,xn),ci.subVectors(wr,_r),hi.subVectors(br,wr),Wi.subVectors(_r,br);let t=[0,-ci.z,ci.y,0,-hi.z,hi.y,0,-Wi.z,Wi.y,ci.z,0,-ci.x,hi.z,0,-hi.x,Wi.z,0,-Wi.x,-ci.y,ci.x,0,-hi.y,hi.x,0,-Wi.y,Wi.x,0];return!qs(t,_r,wr,br,sa)||(t=[1,0,0,0,1,0,0,0,1],!qs(t,_r,wr,br,sa))?!1:(oa.crossVectors(ci,hi),t=[oa.x,oa.y,oa.z],qs(t,_r,wr,br,sa))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return yn.copy(e).clamp(this.min,this.max).sub(e).length()}getBoundingSphere(e){return this.getCenter(e.center),e.radius=this.getSize(yn).length()*.5,e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Xt[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Xt[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Xt[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Xt[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Xt[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Xt[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Xt[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Xt[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Xt),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}wt.prototype.isBox3=!0;const Xt=[new b,new b,new b,new b,new b,new b,new b,new b],yn=new b,js=new wt,_r=new b,wr=new b,br=new b,ci=new b,hi=new b,Wi=new b,xn=new b,sa=new b,oa=new b,ji=new b;function qs(a,e,t,i,r){for(let n=0,s=a.length-3;n<=s;n+=3){ji.fromArray(a,n);const o=r.x*Math.abs(ji.x)+r.y*Math.abs(ji.y)+r.z*Math.abs(ji.z),l=e.dot(ji),c=t.dot(ji),h=i.dot(ji);if(Math.max(-Math.max(l,c,h),Math.min(l,c,h))>o)return!1}return!0}const Fp=new wt,nh=new b,Xs=new b,Ys=new b;class ui{constructor(e=new b,t=-1){this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const i=this.center;t!==void 0?i.copy(t):Fp.setFromPoints(e).getCenter(i);let r=0;for(let n=0,s=e.length;n<s;n++)r=Math.max(r,i.distanceToSquared(e[n]));return this.radius=Math.sqrt(r),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const i=this.center.distanceToSquared(e);return t.copy(e),i>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){Ys.subVectors(e,this.center);const t=Ys.lengthSq();if(t>this.radius*this.radius){const i=Math.sqrt(t),r=(i-this.radius)*.5;this.center.add(Ys.multiplyScalar(r/i)),this.radius+=r}return this}union(e){return Xs.subVectors(e.center,this.center).normalize().multiplyScalar(e.radius),this.expandByPoint(nh.copy(e.center).add(Xs)),this.expandByPoint(nh.copy(e.center).sub(Xs)),this}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const Yt=new b,Zs=new b,la=new b,di=new b,Js=new b,ca=new b,Ks=new b;class pi{constructor(e=new b,t=new b(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.direction).multiplyScalar(e).add(this.origin)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Yt)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const i=t.dot(this.direction);return i<0?t.copy(this.origin):t.copy(this.direction).multiplyScalar(i).add(this.origin)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=Yt.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(Yt.copy(this.direction).multiplyScalar(t).add(this.origin),Yt.distanceToSquared(e))}distanceSqToSegment(e,t,i,r){Zs.copy(e).add(t).multiplyScalar(.5),la.copy(t).sub(e).normalize(),di.copy(this.origin).sub(Zs);const n=e.distanceTo(t)*.5,s=-this.direction.dot(la),o=di.dot(this.direction),l=-di.dot(la),c=di.lengthSq(),h=Math.abs(1-s*s);let d,u,p,g;if(h>0)if(d=s*l-o,u=s*o-l,g=n*h,d>=0)if(u>=-g)if(u<=g){const v=1/h;d*=v,u*=v,p=d*(d+s*u+2*o)+u*(s*d+u+2*l)+c}else u=n,d=Math.max(0,-(s*u+o)),p=-d*d+u*(u+2*l)+c;else u=-n,d=Math.max(0,-(s*u+o)),p=-d*d+u*(u+2*l)+c;else u<=-g?(d=Math.max(0,-(-s*n+o)),u=d>0?-n:Math.min(Math.max(-n,-l),n),p=-d*d+u*(u+2*l)+c):u<=g?(d=0,u=Math.min(Math.max(-n,-l),n),p=u*(u+2*l)+c):(d=Math.max(0,-(s*n+o)),u=d>0?n:Math.min(Math.max(-n,-l),n),p=-d*d+u*(u+2*l)+c);else u=s>0?-n:n,d=Math.max(0,-(s*u+o)),p=-d*d+u*(u+2*l)+c;return i&&i.copy(this.direction).multiplyScalar(d).add(this.origin),r&&r.copy(la).multiplyScalar(u).add(Zs),p}intersectSphere(e,t){Yt.subVectors(e.center,this.origin);const i=Yt.dot(this.direction),r=Yt.dot(Yt)-i*i,n=e.radius*e.radius;if(r>n)return null;const s=Math.sqrt(n-r),o=i-s,l=i+s;return o<0&&l<0?null:o<0?this.at(l,t):this.at(o,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(e.normal)+e.constant)/t;return i>=0?i:null}intersectPlane(e,t){const i=this.distanceToPlane(e);return i===null?null:this.at(i,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let i,r,n,s,o,l;const c=1/this.direction.x,h=1/this.direction.y,d=1/this.direction.z,u=this.origin;return c>=0?(i=(e.min.x-u.x)*c,r=(e.max.x-u.x)*c):(i=(e.max.x-u.x)*c,r=(e.min.x-u.x)*c),h>=0?(n=(e.min.y-u.y)*h,s=(e.max.y-u.y)*h):(n=(e.max.y-u.y)*h,s=(e.min.y-u.y)*h),i>s||n>r||((n>i||i!==i)&&(i=n),(s<r||r!==r)&&(r=s),d>=0?(o=(e.min.z-u.z)*d,l=(e.max.z-u.z)*d):(o=(e.max.z-u.z)*d,l=(e.min.z-u.z)*d),i>l||o>r)||((o>i||i!==i)&&(i=o),(l<r||r!==r)&&(r=l),r<0)?null:this.at(i>=0?i:r,t)}intersectsBox(e){return this.intersectBox(e,Yt)!==null}intersectTriangle(e,t,i,r,n){Js.subVectors(t,e),ca.subVectors(i,e),Ks.crossVectors(Js,ca);let s=this.direction.dot(Ks),o;if(s>0){if(r)return null;o=1}else if(s<0)o=-1,s=-s;else return null;di.subVectors(this.origin,e);const l=o*this.direction.dot(ca.crossVectors(di,ca));if(l<0)return null;const c=o*this.direction.dot(Js.cross(di));if(c<0||l+c>s)return null;const h=-o*di.dot(Ks);return h<0?null:this.at(h/s,n)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class ue{constructor(){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],arguments.length>0&&console.error("THREE.Matrix4: the constructor no longer reads arguments. use .set() instead.")}set(e,t,i,r,n,s,o,l,c,h,d,u,p,g,v,x){const f=this.elements;return f[0]=e,f[4]=t,f[8]=i,f[12]=r,f[1]=n,f[5]=s,f[9]=o,f[13]=l,f[2]=c,f[6]=h,f[10]=d,f[14]=u,f[3]=p,f[7]=g,f[11]=v,f[15]=x,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new ue().fromArray(this.elements)}copy(e){const t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],t[9]=i[9],t[10]=i[10],t[11]=i[11],t[12]=i[12],t[13]=i[13],t[14]=i[14],t[15]=i[15],this}copyPosition(e){const t=this.elements,i=e.elements;return t[12]=i[12],t[13]=i[13],t[14]=i[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,i){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this}makeBasis(e,t,i){return this.set(e.x,t.x,i.x,0,e.y,t.y,i.y,0,e.z,t.z,i.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,i=e.elements,r=1/Mr.setFromMatrixColumn(e,0).length(),n=1/Mr.setFromMatrixColumn(e,1).length(),s=1/Mr.setFromMatrixColumn(e,2).length();return t[0]=i[0]*r,t[1]=i[1]*r,t[2]=i[2]*r,t[3]=0,t[4]=i[4]*n,t[5]=i[5]*n,t[6]=i[6]*n,t[7]=0,t[8]=i[8]*s,t[9]=i[9]*s,t[10]=i[10]*s,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){e&&e.isEuler||console.error("THREE.Matrix4: .makeRotationFromEuler() now expects a Euler rotation rather than a Vector3 and order.");const t=this.elements,i=e.x,r=e.y,n=e.z,s=Math.cos(i),o=Math.sin(i),l=Math.cos(r),c=Math.sin(r),h=Math.cos(n),d=Math.sin(n);if(e.order==="XYZ"){const u=s*h,p=s*d,g=o*h,v=o*d;t[0]=l*h,t[4]=-l*d,t[8]=c,t[1]=p+g*c,t[5]=u-v*c,t[9]=-o*l,t[2]=v-u*c,t[6]=g+p*c,t[10]=s*l}else if(e.order==="YXZ"){const u=l*h,p=l*d,g=c*h,v=c*d;t[0]=u+v*o,t[4]=g*o-p,t[8]=s*c,t[1]=s*d,t[5]=s*h,t[9]=-o,t[2]=p*o-g,t[6]=v+u*o,t[10]=s*l}else if(e.order==="ZXY"){const u=l*h,p=l*d,g=c*h,v=c*d;t[0]=u-v*o,t[4]=-s*d,t[8]=g+p*o,t[1]=p+g*o,t[5]=s*h,t[9]=v-u*o,t[2]=-s*c,t[6]=o,t[10]=s*l}else if(e.order==="ZYX"){const u=s*h,p=s*d,g=o*h,v=o*d;t[0]=l*h,t[4]=g*c-p,t[8]=u*c+v,t[1]=l*d,t[5]=v*c+u,t[9]=p*c-g,t[2]=-c,t[6]=o*l,t[10]=s*l}else if(e.order==="YZX"){const u=s*l,p=s*c,g=o*l,v=o*c;t[0]=l*h,t[4]=v-u*d,t[8]=g*d+p,t[1]=d,t[5]=s*h,t[9]=-o*h,t[2]=-c*h,t[6]=p*d+g,t[10]=u-v*d}else if(e.order==="XZY"){const u=s*l,p=s*c,g=o*l,v=o*c;t[0]=l*h,t[4]=-d,t[8]=c*h,t[1]=u*d+v,t[5]=s*h,t[9]=p*d-g,t[2]=g*d-p,t[6]=o*h,t[10]=v*d+u}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(Op,e,zp)}lookAt(e,t,i){const r=this.elements;return bt.subVectors(e,t),bt.lengthSq()===0&&(bt.z=1),bt.normalize(),mi.crossVectors(i,bt),mi.lengthSq()===0&&(Math.abs(i.z)===1?bt.x+=1e-4:bt.z+=1e-4,bt.normalize(),mi.crossVectors(i,bt)),mi.normalize(),ha.crossVectors(bt,mi),r[0]=mi.x,r[4]=ha.x,r[8]=bt.x,r[1]=mi.y,r[5]=ha.y,r[9]=bt.y,r[2]=mi.z,r[6]=ha.z,r[10]=bt.z,this}multiply(e,t){return t!==void 0?(console.warn("THREE.Matrix4: .multiply() now only accepts one argument. Use .multiplyMatrices( a, b ) instead."),this.multiplyMatrices(e,t)):this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const i=e.elements,r=t.elements,n=this.elements,s=i[0],o=i[4],l=i[8],c=i[12],h=i[1],d=i[5],u=i[9],p=i[13],g=i[2],v=i[6],x=i[10],f=i[14],m=i[3],w=i[7],y=i[11],M=i[15],A=r[0],_=r[4],L=r[8],N=r[12],R=r[1],C=r[5],Y=r[9],I=r[13],B=r[2],O=r[6],z=r[10],U=r[14],$=r[3],he=r[7],de=r[11],se=r[15];return n[0]=s*A+o*R+l*B+c*$,n[4]=s*_+o*C+l*O+c*he,n[8]=s*L+o*Y+l*z+c*de,n[12]=s*N+o*I+l*U+c*se,n[1]=h*A+d*R+u*B+p*$,n[5]=h*_+d*C+u*O+p*he,n[9]=h*L+d*Y+u*z+p*de,n[13]=h*N+d*I+u*U+p*se,n[2]=g*A+v*R+x*B+f*$,n[6]=g*_+v*C+x*O+f*he,n[10]=g*L+v*Y+x*z+f*de,n[14]=g*N+v*I+x*U+f*se,n[3]=m*A+w*R+y*B+M*$,n[7]=m*_+w*C+y*O+M*he,n[11]=m*L+w*Y+y*z+M*de,n[15]=m*N+w*I+y*U+M*se,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],i=e[4],r=e[8],n=e[12],s=e[1],o=e[5],l=e[9],c=e[13],h=e[2],d=e[6],u=e[10],p=e[14],g=e[3],v=e[7],x=e[11],f=e[15];return g*(+n*l*d-r*c*d-n*o*u+i*c*u+r*o*p-i*l*p)+v*(+t*l*p-t*c*u+n*s*u-r*s*p+r*c*h-n*l*h)+x*(+t*c*d-t*o*p-n*s*d+i*s*p+n*o*h-i*c*h)+f*(-r*o*h-t*l*d+t*o*u+r*s*d-i*s*u+i*l*h)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,i){const r=this.elements;return e.isVector3?(r[12]=e.x,r[13]=e.y,r[14]=e.z):(r[12]=e,r[13]=t,r[14]=i),this}invert(){const e=this.elements,t=e[0],i=e[1],r=e[2],n=e[3],s=e[4],o=e[5],l=e[6],c=e[7],h=e[8],d=e[9],u=e[10],p=e[11],g=e[12],v=e[13],x=e[14],f=e[15],m=d*x*c-v*u*c+v*l*p-o*x*p-d*l*f+o*u*f,w=g*u*c-h*x*c-g*l*p+s*x*p+h*l*f-s*u*f,y=h*v*c-g*d*c+g*o*p-s*v*p-h*o*f+s*d*f,M=g*d*l-h*v*l-g*o*u+s*v*u+h*o*x-s*d*x,A=t*m+i*w+r*y+n*M;if(A===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const _=1/A;return e[0]=m*_,e[1]=(v*u*n-d*x*n-v*r*p+i*x*p+d*r*f-i*u*f)*_,e[2]=(o*x*n-v*l*n+v*r*c-i*x*c-o*r*f+i*l*f)*_,e[3]=(d*l*n-o*u*n-d*r*c+i*u*c+o*r*p-i*l*p)*_,e[4]=w*_,e[5]=(h*x*n-g*u*n+g*r*p-t*x*p-h*r*f+t*u*f)*_,e[6]=(g*l*n-s*x*n-g*r*c+t*x*c+s*r*f-t*l*f)*_,e[7]=(s*u*n-h*l*n+h*r*c-t*u*c-s*r*p+t*l*p)*_,e[8]=y*_,e[9]=(g*d*n-h*v*n-g*i*p+t*v*p+h*i*f-t*d*f)*_,e[10]=(s*v*n-g*o*n+g*i*c-t*v*c-s*i*f+t*o*f)*_,e[11]=(h*o*n-s*d*n-h*i*c+t*d*c+s*i*p-t*o*p)*_,e[12]=M*_,e[13]=(h*v*r-g*d*r+g*i*u-t*v*u-h*i*x+t*d*x)*_,e[14]=(g*o*r-s*v*r-g*i*l+t*v*l+s*i*x-t*o*x)*_,e[15]=(s*d*r-h*o*r+h*i*l-t*d*l-s*i*u+t*o*u)*_,this}scale(e){const t=this.elements,i=e.x,r=e.y,n=e.z;return t[0]*=i,t[4]*=r,t[8]*=n,t[1]*=i,t[5]*=r,t[9]*=n,t[2]*=i,t[6]*=r,t[10]*=n,t[3]*=i,t[7]*=r,t[11]*=n,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],r=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,i,r))}makeTranslation(e,t,i){return this.set(1,0,0,e,0,1,0,t,0,0,1,i,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,t,-i,0,0,i,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,0,i,0,0,1,0,0,-i,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,0,i,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const i=Math.cos(t),r=Math.sin(t),n=1-i,s=e.x,o=e.y,l=e.z,c=n*s,h=n*o;return this.set(c*s+i,c*o-r*l,c*l+r*o,0,c*o+r*l,h*o+i,h*l-r*s,0,c*l-r*o,h*l+r*s,n*l*l+i,0,0,0,0,1),this}makeScale(e,t,i){return this.set(e,0,0,0,0,t,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,t,i,r,n,s){return this.set(1,i,n,0,e,1,s,0,t,r,1,0,0,0,0,1),this}compose(e,t,i){const r=this.elements,n=t._x,s=t._y,o=t._z,l=t._w,c=n+n,h=s+s,d=o+o,u=n*c,p=n*h,g=n*d,v=s*h,x=s*d,f=o*d,m=l*c,w=l*h,y=l*d,M=i.x,A=i.y,_=i.z;return r[0]=(1-(v+f))*M,r[1]=(p+y)*M,r[2]=(g-w)*M,r[3]=0,r[4]=(p-y)*A,r[5]=(1-(u+f))*A,r[6]=(x+m)*A,r[7]=0,r[8]=(g+w)*_,r[9]=(x-m)*_,r[10]=(1-(u+v))*_,r[11]=0,r[12]=e.x,r[13]=e.y,r[14]=e.z,r[15]=1,this}decompose(e,t,i){const r=this.elements;let n=Mr.set(r[0],r[1],r[2]).length();const s=Mr.set(r[4],r[5],r[6]).length(),o=Mr.set(r[8],r[9],r[10]).length();this.determinant()<0&&(n=-n),e.x=r[12],e.y=r[13],e.z=r[14],Rt.copy(this);const l=1/n,c=1/s,h=1/o;return Rt.elements[0]*=l,Rt.elements[1]*=l,Rt.elements[2]*=l,Rt.elements[4]*=c,Rt.elements[5]*=c,Rt.elements[6]*=c,Rt.elements[8]*=h,Rt.elements[9]*=h,Rt.elements[10]*=h,t.setFromRotationMatrix(Rt),i.x=n,i.y=s,i.z=o,this}makePerspective(e,t,i,r,n,s){s===void 0&&console.warn("THREE.Matrix4: .makePerspective() has been redefined and has a new signature. Please check the docs.");const o=this.elements,l=2*n/(t-e),c=2*n/(i-r),h=(t+e)/(t-e),d=(i+r)/(i-r),u=-(s+n)/(s-n),p=-2*s*n/(s-n);return o[0]=l,o[4]=0,o[8]=h,o[12]=0,o[1]=0,o[5]=c,o[9]=d,o[13]=0,o[2]=0,o[6]=0,o[10]=u,o[14]=p,o[3]=0,o[7]=0,o[11]=-1,o[15]=0,this}makeOrthographic(e,t,i,r,n,s){const o=this.elements,l=1/(t-e),c=1/(i-r),h=1/(s-n),d=(t+e)*l,u=(i+r)*c,p=(s+n)*h;return o[0]=2*l,o[4]=0,o[8]=0,o[12]=-d,o[1]=0,o[5]=2*c,o[9]=0,o[13]=-u,o[2]=0,o[6]=0,o[10]=-2*h,o[14]=-p,o[3]=0,o[7]=0,o[11]=0,o[15]=1,this}equals(e){const t=this.elements,i=e.elements;for(let r=0;r<16;r++)if(t[r]!==i[r])return!1;return!0}fromArray(e,t=0){for(let i=0;i<16;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){const i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e[t+9]=i[9],e[t+10]=i[10],e[t+11]=i[11],e[t+12]=i[12],e[t+13]=i[13],e[t+14]=i[14],e[t+15]=i[15],e}}ue.prototype.isMatrix4=!0;const Mr=new b,Rt=new ue,Op=new b(0,0,0),zp=new b(1,1,1),mi=new b,ha=new b,bt=new b,ah=new ue,sh=new dt;class sr{constructor(e=0,t=0,i=0,r=sr.DefaultOrder){this._x=e,this._y=t,this._z=i,this._order=r}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,i,r=this._order){return this._x=e,this._y=t,this._z=i,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,i=!0){const r=e.elements,n=r[0],s=r[4],o=r[8],l=r[1],c=r[5],h=r[9],d=r[2],u=r[6],p=r[10];switch(t){case"XYZ":this._y=Math.asin(ut(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-h,p),this._z=Math.atan2(-s,n)):(this._x=Math.atan2(u,c),this._z=0);break;case"YXZ":this._x=Math.asin(-ut(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(o,p),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-d,n),this._z=0);break;case"ZXY":this._x=Math.asin(ut(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(-d,p),this._z=Math.atan2(-s,c)):(this._y=0,this._z=Math.atan2(l,n));break;case"ZYX":this._y=Math.asin(-ut(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(u,p),this._z=Math.atan2(l,n)):(this._x=0,this._z=Math.atan2(-s,c));break;case"YZX":this._z=Math.asin(ut(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-h,c),this._y=Math.atan2(-d,n)):(this._x=0,this._y=Math.atan2(o,p));break;case"XZY":this._z=Math.asin(-ut(s,-1,1)),Math.abs(s)<.9999999?(this._x=Math.atan2(u,c),this._y=Math.atan2(o,n)):(this._x=Math.atan2(-h,p),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,i){return ah.makeRotationFromQuaternion(e),this.setFromRotationMatrix(ah,t,i)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return sh.setFromEuler(this),this.setFromQuaternion(sh,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}toVector3(e){return e?e.set(this._x,this._y,this._z):new b(this._x,this._y,this._z)}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}}sr.prototype.isEuler=!0,sr.DefaultOrder="XYZ",sr.RotationOrders=["XYZ","YZX","ZXY","XZY","YXZ","ZYX"];class Qs{constructor(){this.mask=1}set(e){this.mask=1<<e|0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}}let Up=0;const oh=new b,Sr=new dt,Zt=new ue,ua=new b,_n=new b,Gp=new b,Hp=new dt,lh=new b(1,0,0),ch=new b(0,1,0),hh=new b(0,0,1),kp={type:"added"},uh={type:"removed"};class Re extends li{constructor(){super(),Object.defineProperty(this,"id",{value:Up++}),this.uuid=_t(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Re.DefaultUp.clone();const e=new b,t=new sr,i=new dt,r=new b(1,1,1);function n(){i.setFromEuler(t,!1)}function s(){t.setFromQuaternion(i,void 0,!1)}t._onChange(n),i._onChange(s),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new ue},normalMatrix:{value:new et}}),this.matrix=new ue,this.matrixWorld=new ue,this.matrixAutoUpdate=Re.DefaultMatrixAutoUpdate,this.matrixWorldNeedsUpdate=!1,this.layers=new Qs,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return Sr.setFromAxisAngle(e,t),this.quaternion.multiply(Sr),this}rotateOnWorldAxis(e,t){return Sr.setFromAxisAngle(e,t),this.quaternion.premultiply(Sr),this}rotateX(e){return this.rotateOnAxis(lh,e)}rotateY(e){return this.rotateOnAxis(ch,e)}rotateZ(e){return this.rotateOnAxis(hh,e)}translateOnAxis(e,t){return oh.copy(e).applyQuaternion(this.quaternion),this.position.add(oh.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(lh,e)}translateY(e){return this.translateOnAxis(ch,e)}translateZ(e){return this.translateOnAxis(hh,e)}localToWorld(e){return e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return e.applyMatrix4(Zt.copy(this.matrixWorld).invert())}lookAt(e,t,i){e.isVector3?ua.copy(e):ua.set(e,t,i);const r=this.parent;this.updateWorldMatrix(!0,!1),_n.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Zt.lookAt(_n,ua,this.up):Zt.lookAt(ua,_n,this.up),this.quaternion.setFromRotationMatrix(Zt),r&&(Zt.extractRotation(r.matrixWorld),Sr.setFromRotationMatrix(Zt),this.quaternion.premultiply(Sr.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.parent!==null&&e.parent.remove(e),e.parent=this,this.children.push(e),e.dispatchEvent(kp)):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(uh)),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){for(let e=0;e<this.children.length;e++){const t=this.children[e];t.parent=null,t.dispatchEvent(uh)}return this.children.length=0,this}attach(e){return this.updateWorldMatrix(!0,!1),Zt.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Zt.multiply(e.parent.matrixWorld)),e.applyMatrix4(Zt),this.add(e),e.updateWorldMatrix(!1,!0),this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let i=0,r=this.children.length;i<r;i++){const n=this.children[i].getObjectByProperty(e,t);if(n!==void 0)return n}}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(_n,e,Gp),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(_n,Hp,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let i=0,r=t.length;i<r;i++)t[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let i=0,r=t.length;i<r;i++)t[i].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let i=0,r=t.length;i<r;i++)t[i].updateMatrixWorld(e)}updateWorldMatrix(e,t){const i=this.parent;if(e===!0&&i!==null&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),t===!0){const r=this.children;for(let n=0,s=r.length;n<s;n++)r[n].updateWorldMatrix(!1,!0)}}toJSON(e){const t=e===void 0||typeof e=="string",i={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{}},i.metadata={version:4.5,type:"Object",generator:"Object3D.toJSON"});const r={};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.castShadow===!0&&(r.castShadow=!0),this.receiveShadow===!0&&(r.receiveShadow=!0),this.visible===!1&&(r.visible=!1),this.frustumCulled===!1&&(r.frustumCulled=!1),this.renderOrder!==0&&(r.renderOrder=this.renderOrder),JSON.stringify(this.userData)!=="{}"&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),this.matrixAutoUpdate===!1&&(r.matrixAutoUpdate=!1),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON()));function n(o,l){return o[l.uuid]===void 0&&(o[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&(r.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=n(e.geometries,this.geometry);const o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){const l=o.shapes;if(Array.isArray(l))for(let c=0,h=l.length;c<h;c++){const d=l[c];n(e.shapes,d)}else n(e.shapes,l)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(n(e.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const o=[];for(let l=0,c=this.material.length;l<c;l++)o.push(n(e.materials,this.material[l]));r.material=o}else r.material=n(e.materials,this.material);if(this.children.length>0){r.children=[];for(let o=0;o<this.children.length;o++)r.children.push(this.children[o].toJSON(e).object)}if(this.animations.length>0){r.animations=[];for(let o=0;o<this.animations.length;o++){const l=this.animations[o];r.animations.push(n(e.animations,l))}}if(t){const o=s(e.geometries),l=s(e.materials),c=s(e.textures),h=s(e.images),d=s(e.shapes),u=s(e.skeletons),p=s(e.animations);o.length>0&&(i.geometries=o),l.length>0&&(i.materials=l),c.length>0&&(i.textures=c),h.length>0&&(i.images=h),d.length>0&&(i.shapes=d),u.length>0&&(i.skeletons=u),p.length>0&&(i.animations=p)}return i.object=r,i;function s(o){const l=[];for(const c in o){const h=o[c];delete h.metadata,l.push(h)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let i=0;i<e.children.length;i++){const r=e.children[i];this.add(r.clone())}return this}}Re.DefaultUp=new b(0,1,0),Re.DefaultMatrixAutoUpdate=!0,Re.prototype.isObject3D=!0;const Pt=new b,Jt=new b,$s=new b,Kt=new b,Tr=new b,Er=new b,dh=new b,eo=new b,to=new b,io=new b;class Je{constructor(e=new b,t=new b,i=new b){this.a=e,this.b=t,this.c=i}static getNormal(e,t,i,r){r.subVectors(i,t),Pt.subVectors(e,t),r.cross(Pt);const n=r.lengthSq();return n>0?r.multiplyScalar(1/Math.sqrt(n)):r.set(0,0,0)}static getBarycoord(e,t,i,r,n){Pt.subVectors(r,t),Jt.subVectors(i,t),$s.subVectors(e,t);const s=Pt.dot(Pt),o=Pt.dot(Jt),l=Pt.dot($s),c=Jt.dot(Jt),h=Jt.dot($s),d=s*c-o*o;if(d===0)return n.set(-2,-1,-1);const u=1/d,p=(c*l-o*h)*u,g=(s*h-o*l)*u;return n.set(1-p-g,g,p)}static containsPoint(e,t,i,r){return this.getBarycoord(e,t,i,r,Kt),Kt.x>=0&&Kt.y>=0&&Kt.x+Kt.y<=1}static getUV(e,t,i,r,n,s,o,l){return this.getBarycoord(e,t,i,r,Kt),l.set(0,0),l.addScaledVector(n,Kt.x),l.addScaledVector(s,Kt.y),l.addScaledVector(o,Kt.z),l}static isFrontFacing(e,t,i,r){return Pt.subVectors(i,t),Jt.subVectors(e,t),Pt.cross(Jt).dot(r)<0}set(e,t,i){return this.a.copy(e),this.b.copy(t),this.c.copy(i),this}setFromPointsAndIndices(e,t,i,r){return this.a.copy(e[t]),this.b.copy(e[i]),this.c.copy(e[r]),this}setFromAttributeAndIndices(e,t,i,r){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,r),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Pt.subVectors(this.c,this.b),Jt.subVectors(this.a,this.b),Pt.cross(Jt).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return Je.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return Je.getBarycoord(e,this.a,this.b,this.c,t)}getUV(e,t,i,r,n){return Je.getUV(e,this.a,this.b,this.c,t,i,r,n)}containsPoint(e){return Je.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return Je.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const i=this.a,r=this.b,n=this.c;let s,o;Tr.subVectors(r,i),Er.subVectors(n,i),eo.subVectors(e,i);const l=Tr.dot(eo),c=Er.dot(eo);if(l<=0&&c<=0)return t.copy(i);to.subVectors(e,r);const h=Tr.dot(to),d=Er.dot(to);if(h>=0&&d<=h)return t.copy(r);const u=l*d-h*c;if(u<=0&&l>=0&&h<=0)return s=l/(l-h),t.copy(i).addScaledVector(Tr,s);io.subVectors(e,n);const p=Tr.dot(io),g=Er.dot(io);if(g>=0&&p<=g)return t.copy(n);const v=p*c-l*g;if(v<=0&&c>=0&&g<=0)return o=c/(c-g),t.copy(i).addScaledVector(Er,o);const x=h*g-p*d;if(x<=0&&d-h>=0&&p-g>=0)return dh.subVectors(n,r),o=(d-h)/(d-h+(p-g)),t.copy(r).addScaledVector(dh,o);const f=1/(x+v+u);return s=v*f,o=u*f,t.copy(i).addScaledVector(Tr,s).addScaledVector(Er,o)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}let Vp=0;class rt extends li{constructor(){super(),Object.defineProperty(this,"id",{value:Vp++}),this.uuid=_t(),this.name="",this.type="Material",this.fog=!0,this.blending=dr,this.side=Ri,this.vertexColors=!1,this.opacity=1,this.format=lt,this.transparent=!1,this.blendSrc=bs,this.blendDst=Ms,this.blendEquation=Ii,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.depthFunc=Zn,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Jc,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=ra,this.stencilZFail=ra,this.stencilZPass=ra,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBuild(){}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const i=e[t];if(i===void 0){console.warn("THREE.Material: '"+t+"' parameter is undefined.");continue}if(t==="shading"){console.warn("THREE."+this.type+": .shading has been removed. Use the boolean .flatShading instead."),this.flatShading=i===gs;continue}const r=this[t];if(r===void 0){console.warn("THREE."+this.type+": '"+t+"' is not a property of this material.");continue}r&&r.isColor?r.set(i):r&&r.isVector3&&i&&i.isVector3?r.copy(i):this[t]=i}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const i={metadata:{version:4.5,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==dr&&(i.blending=this.blending),this.side!==Ri&&(i.side=this.side),this.vertexColors&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.format!==lt&&(i.format=this.format),this.transparent===!0&&(i.transparent=this.transparent),i.depthFunc=this.depthFunc,i.depthTest=this.depthTest,i.depthWrite=this.depthWrite,i.colorWrite=this.colorWrite,i.stencilWrite=this.stencilWrite,i.stencilWriteMask=this.stencilWriteMask,i.stencilFunc=this.stencilFunc,i.stencilRef=this.stencilRef,i.stencilFuncMask=this.stencilFuncMask,i.stencilFail=this.stencilFail,i.stencilZFail=this.stencilZFail,i.stencilZPass=this.stencilZPass,this.rotation&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaToCoverage===!0&&(i.alphaToCoverage=this.alphaToCoverage),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=this.premultipliedAlpha),this.wireframe===!0&&(i.wireframe=this.wireframe),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=this.flatShading),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),JSON.stringify(this.userData)!=="{}"&&(i.userData=this.userData);function r(n){const s=[];for(const o in n){const l=n[o];delete l.metadata,s.push(l)}return s}if(t){const n=r(e.textures),s=r(e.images);n.length>0&&(i.textures=n),s.length>0&&(i.images=s)}return i}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.fog=e.fog,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.format=e.format,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let i=null;if(t!==null){const r=t.length;i=new Array(r);for(let n=0;n!==r;++n)i[n]=t[n].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}rt.prototype.isMaterial=!0;const ph={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},It={h:0,s:0,l:0},da={h:0,s:0,l:0};function ro(a,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?a+(e-a)*6*t:t<1/2?e:t<2/3?a+(e-a)*6*(2/3-t):a}function no(a){return a<.04045?a*.0773993808:Math.pow(a*.9478672986+.0521327014,2.4)}function ao(a){return a<.0031308?a*12.92:1.055*Math.pow(a,.41666)-.055}class ie{constructor(e,t,i){return t===void 0&&i===void 0?this.set(e):this.setRGB(e,t,i)}set(e){return e&&e.isColor?this.copy(e):typeof e=="number"?this.setHex(e):typeof e=="string"&&this.setStyle(e),this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,this}setRGB(e,t,i){return this.r=e,this.g=t,this.b=i,this}setHSL(e,t,i){if(e=Gs(e,1),t=ut(t,0,1),i=ut(i,0,1),t===0)this.r=this.g=this.b=i;else{const r=i<=.5?i*(1+t):i+t-i*t,n=2*i-r;this.r=ro(n,r,e+1/3),this.g=ro(n,r,e),this.b=ro(n,r,e-1/3)}return this}setStyle(e){function t(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let i;if(i=/^((?:rgb|hsl)a?)\(([^\)]*)\)/.exec(e)){let r;const n=i[1],s=i[2];switch(n){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(s))return this.r=Math.min(255,parseInt(r[1],10))/255,this.g=Math.min(255,parseInt(r[2],10))/255,this.b=Math.min(255,parseInt(r[3],10))/255,t(r[4]),this;if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(s))return this.r=Math.min(100,parseInt(r[1],10))/100,this.g=Math.min(100,parseInt(r[2],10))/100,this.b=Math.min(100,parseInt(r[3],10))/100,t(r[4]),this;break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(s)){const o=parseFloat(r[1])/360,l=parseInt(r[2],10)/100,c=parseInt(r[3],10)/100;return t(r[4]),this.setHSL(o,l,c)}break}}else if(i=/^\#([A-Fa-f\d]+)$/.exec(e)){const r=i[1],n=r.length;if(n===3)return this.r=parseInt(r.charAt(0)+r.charAt(0),16)/255,this.g=parseInt(r.charAt(1)+r.charAt(1),16)/255,this.b=parseInt(r.charAt(2)+r.charAt(2),16)/255,this;if(n===6)return this.r=parseInt(r.charAt(0)+r.charAt(1),16)/255,this.g=parseInt(r.charAt(2)+r.charAt(3),16)/255,this.b=parseInt(r.charAt(4)+r.charAt(5),16)/255,this}return e&&e.length>0?this.setColorName(e):this}setColorName(e){const t=ph[e.toLowerCase()];return t!==void 0?this.setHex(t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copyGammaToLinear(e,t=2){return this.r=Math.pow(e.r,t),this.g=Math.pow(e.g,t),this.b=Math.pow(e.b,t),this}copyLinearToGamma(e,t=2){const i=t>0?1/t:1;return this.r=Math.pow(e.r,i),this.g=Math.pow(e.g,i),this.b=Math.pow(e.b,i),this}convertGammaToLinear(e){return this.copyGammaToLinear(this,e),this}convertLinearToGamma(e){return this.copyLinearToGamma(this,e),this}copySRGBToLinear(e){return this.r=no(e.r),this.g=no(e.g),this.b=no(e.b),this}copyLinearToSRGB(e){return this.r=ao(e.r),this.g=ao(e.g),this.b=ao(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(){return this.r*255<<16^this.g*255<<8^this.b*255<<0}getHexString(){return("000000"+this.getHex().toString(16)).slice(-6)}getHSL(e){const t=this.r,i=this.g,r=this.b,n=Math.max(t,i,r),s=Math.min(t,i,r);let o,l;const c=(s+n)/2;if(s===n)o=0,l=0;else{const h=n-s;switch(l=c<=.5?h/(n+s):h/(2-n-s),n){case t:o=(i-r)/h+(i<r?6:0);break;case i:o=(r-t)/h+2;break;case r:o=(t-i)/h+4;break}o/=6}return e.h=o,e.s=l,e.l=c,e}getStyle(){return"rgb("+(this.r*255|0)+","+(this.g*255|0)+","+(this.b*255|0)+")"}offsetHSL(e,t,i){return this.getHSL(It),It.h+=e,It.s+=t,It.l+=i,this.setHSL(It.h,It.s,It.l),this}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,i){return this.r=e.r+(t.r-e.r)*i,this.g=e.g+(t.g-e.g)*i,this.b=e.b+(t.b-e.b)*i,this}lerpHSL(e,t){this.getHSL(It),e.getHSL(da);const i=vn(It.h,da.h,t),r=vn(It.s,da.s,t),n=vn(It.l,da.l,t);return this.setHSL(i,r,n),this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),e.normalized===!0&&(this.r/=255,this.g/=255,this.b/=255),this}toJSON(){return this.getHex()}}ie.NAMES=ph,ie.prototype.isColor=!0,ie.prototype.r=1,ie.prototype.g=1,ie.prototype.b=1;class Qt extends rt{constructor(e){super(),this.type="MeshBasicMaterial",this.color=new ie(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=an,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this}}Qt.prototype.isMeshBasicMaterial=!0;const Ge=new b,pa=new j;class De{constructor(e,t,i){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=i===!0,this.usage=gr,this.updateRange={offset:0,count:-1},this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this}copyAt(e,t,i){e*=this.itemSize,i*=t.itemSize;for(let r=0,n=this.itemSize;r<n;r++)this.array[e+r]=t.array[i+r];return this}copyArray(e){return this.array.set(e),this}copyColorsArray(e){const t=this.array;let i=0;for(let r=0,n=e.length;r<n;r++){let s=e[r];s===void 0&&(console.warn("THREE.BufferAttribute.copyColorsArray(): color is undefined",r),s=new ie),t[i++]=s.r,t[i++]=s.g,t[i++]=s.b}return this}copyVector2sArray(e){const t=this.array;let i=0;for(let r=0,n=e.length;r<n;r++){let s=e[r];s===void 0&&(console.warn("THREE.BufferAttribute.copyVector2sArray(): vector is undefined",r),s=new j),t[i++]=s.x,t[i++]=s.y}return this}copyVector3sArray(e){const t=this.array;let i=0;for(let r=0,n=e.length;r<n;r++){let s=e[r];s===void 0&&(console.warn("THREE.BufferAttribute.copyVector3sArray(): vector is undefined",r),s=new b),t[i++]=s.x,t[i++]=s.y,t[i++]=s.z}return this}copyVector4sArray(e){const t=this.array;let i=0;for(let r=0,n=e.length;r<n;r++){let s=e[r];s===void 0&&(console.warn("THREE.BufferAttribute.copyVector4sArray(): vector is undefined",r),s=new ze),t[i++]=s.x,t[i++]=s.y,t[i++]=s.z,t[i++]=s.w}return this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,i=this.count;t<i;t++)pa.fromBufferAttribute(this,t),pa.applyMatrix3(e),this.setXY(t,pa.x,pa.y);else if(this.itemSize===3)for(let t=0,i=this.count;t<i;t++)Ge.fromBufferAttribute(this,t),Ge.applyMatrix3(e),this.setXYZ(t,Ge.x,Ge.y,Ge.z);return this}applyMatrix4(e){for(let t=0,i=this.count;t<i;t++)Ge.x=this.getX(t),Ge.y=this.getY(t),Ge.z=this.getZ(t),Ge.applyMatrix4(e),this.setXYZ(t,Ge.x,Ge.y,Ge.z);return this}applyNormalMatrix(e){for(let t=0,i=this.count;t<i;t++)Ge.x=this.getX(t),Ge.y=this.getY(t),Ge.z=this.getZ(t),Ge.applyNormalMatrix(e),this.setXYZ(t,Ge.x,Ge.y,Ge.z);return this}transformDirection(e){for(let t=0,i=this.count;t<i;t++)Ge.x=this.getX(t),Ge.y=this.getY(t),Ge.z=this.getZ(t),Ge.transformDirection(e),this.setXYZ(t,Ge.x,Ge.y,Ge.z);return this}set(e,t=0){return this.array.set(e,t),this}getX(e){return this.array[e*this.itemSize]}setX(e,t){return this.array[e*this.itemSize]=t,this}getY(e){return this.array[e*this.itemSize+1]}setY(e,t){return this.array[e*this.itemSize+1]=t,this}getZ(e){return this.array[e*this.itemSize+2]}setZ(e,t){return this.array[e*this.itemSize+2]=t,this}getW(e){return this.array[e*this.itemSize+3]}setW(e,t){return this.array[e*this.itemSize+3]=t,this}setXY(e,t,i){return e*=this.itemSize,this.array[e+0]=t,this.array[e+1]=i,this}setXYZ(e,t,i,r){return e*=this.itemSize,this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=r,this}setXYZW(e,t,i,r,n){return e*=this.itemSize,this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=r,this.array[e+3]=n,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.prototype.slice.call(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==gr&&(e.usage=this.usage),(this.updateRange.offset!==0||this.updateRange.count!==-1)&&(e.updateRange=this.updateRange),e}}De.prototype.isBufferAttribute=!0;class mh extends De{constructor(e,t,i){super(new Int8Array(e),t,i)}}class fh extends De{constructor(e,t,i){super(new Uint8Array(e),t,i)}}class gh extends De{constructor(e,t,i){super(new Uint8ClampedArray(e),t,i)}}class vh extends De{constructor(e,t,i){super(new Int16Array(e),t,i)}}class ma extends De{constructor(e,t,i){super(new Uint16Array(e),t,i)}}class yh extends De{constructor(e,t,i){super(new Int32Array(e),t,i)}}class fa extends De{constructor(e,t,i){super(new Uint32Array(e),t,i)}}class xh extends De{constructor(e,t,i){super(new Uint16Array(e),t,i)}}xh.prototype.isFloat16BufferAttribute=!0;class le extends De{constructor(e,t,i){super(new Float32Array(e),t,i)}}class _h extends De{constructor(e,t,i){super(new Float64Array(e),t,i)}}let Wp=0;const Et=new ue,so=new Re,Ar=new b,Mt=new wt,wn=new wt,nt=new b;class we extends li{constructor(){super(),Object.defineProperty(this,"id",{value:Wp++}),this.uuid=_t(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(eh(e)>65535?fa:ma)(e,1):this.index=e,this}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,i=0){this.groups.push({start:e,count:t,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const n=new et().getNormalMatrix(e);i.applyNormalMatrix(n),i.needsUpdate=!0}const r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(e),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return Et.makeRotationFromQuaternion(e),this.applyMatrix4(Et),this}rotateX(e){return Et.makeRotationX(e),this.applyMatrix4(Et),this}rotateY(e){return Et.makeRotationY(e),this.applyMatrix4(Et),this}rotateZ(e){return Et.makeRotationZ(e),this.applyMatrix4(Et),this}translate(e,t,i){return Et.makeTranslation(e,t,i),this.applyMatrix4(Et),this}scale(e,t,i){return Et.makeScale(e,t,i),this.applyMatrix4(Et),this}lookAt(e){return so.lookAt(e),so.updateMatrix(),this.applyMatrix4(so.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Ar).negate(),this.translate(Ar.x,Ar.y,Ar.z),this}setFromPoints(e){const t=[];for(let i=0,r=e.length;i<r;i++){const n=e[i];t.push(n.x,n.y,n.z||0)}return this.setAttribute("position",new le(t,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new wt);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingBox.set(new b(-1/0,-1/0,-1/0),new b(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let i=0,r=t.length;i<r;i++){const n=t[i];Mt.setFromBufferAttribute(n),this.morphTargetsRelative?(nt.addVectors(this.boundingBox.min,Mt.min),this.boundingBox.expandByPoint(nt),nt.addVectors(this.boundingBox.max,Mt.max),this.boundingBox.expandByPoint(nt)):(this.boundingBox.expandByPoint(Mt.min),this.boundingBox.expandByPoint(Mt.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new ui);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingSphere.set(new b,1/0);return}if(e){const i=this.boundingSphere.center;if(Mt.setFromBufferAttribute(e),t)for(let n=0,s=t.length;n<s;n++){const o=t[n];wn.setFromBufferAttribute(o),this.morphTargetsRelative?(nt.addVectors(Mt.min,wn.min),Mt.expandByPoint(nt),nt.addVectors(Mt.max,wn.max),Mt.expandByPoint(nt)):(Mt.expandByPoint(wn.min),Mt.expandByPoint(wn.max))}Mt.getCenter(i);let r=0;for(let n=0,s=e.count;n<s;n++)nt.fromBufferAttribute(e,n),r=Math.max(r,i.distanceToSquared(nt));if(t)for(let n=0,s=t.length;n<s;n++){const o=t[n],l=this.morphTargetsRelative;for(let c=0,h=o.count;c<h;c++)nt.fromBufferAttribute(o,c),l&&(Ar.fromBufferAttribute(e,c),nt.add(Ar)),r=Math.max(r,i.distanceToSquared(nt))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=e.array,r=t.position.array,n=t.normal.array,s=t.uv.array,o=r.length/3;t.tangent===void 0&&this.setAttribute("tangent",new De(new Float32Array(4*o),4));const l=t.tangent.array,c=[],h=[];for(let R=0;R<o;R++)c[R]=new b,h[R]=new b;const d=new b,u=new b,p=new b,g=new j,v=new j,x=new j,f=new b,m=new b;function w(R,C,Y){d.fromArray(r,R*3),u.fromArray(r,C*3),p.fromArray(r,Y*3),g.fromArray(s,R*2),v.fromArray(s,C*2),x.fromArray(s,Y*2),u.sub(d),p.sub(d),v.sub(g),x.sub(g);const I=1/(v.x*x.y-x.x*v.y);isFinite(I)&&(f.copy(u).multiplyScalar(x.y).addScaledVector(p,-v.y).multiplyScalar(I),m.copy(p).multiplyScalar(v.x).addScaledVector(u,-x.x).multiplyScalar(I),c[R].add(f),c[C].add(f),c[Y].add(f),h[R].add(m),h[C].add(m),h[Y].add(m))}let y=this.groups;y.length===0&&(y=[{start:0,count:i.length}]);for(let R=0,C=y.length;R<C;++R){const Y=y[R],I=Y.start,B=Y.count;for(let O=I,z=I+B;O<z;O+=3)w(i[O+0],i[O+1],i[O+2])}const M=new b,A=new b,_=new b,L=new b;function N(R){_.fromArray(n,R*3),L.copy(_);const C=c[R];M.copy(C),M.sub(_.multiplyScalar(_.dot(C))).normalize(),A.crossVectors(L,C);const Y=A.dot(h[R])<0?-1:1;l[R*4]=M.x,l[R*4+1]=M.y,l[R*4+2]=M.z,l[R*4+3]=Y}for(let R=0,C=y.length;R<C;++R){const Y=y[R],I=Y.start,B=Y.count;for(let O=I,z=I+B;O<z;O+=3)N(i[O+0]),N(i[O+1]),N(i[O+2])}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new De(new Float32Array(t.count*3),3),this.setAttribute("normal",i);else for(let u=0,p=i.count;u<p;u++)i.setXYZ(u,0,0,0);const r=new b,n=new b,s=new b,o=new b,l=new b,c=new b,h=new b,d=new b;if(e)for(let u=0,p=e.count;u<p;u+=3){const g=e.getX(u+0),v=e.getX(u+1),x=e.getX(u+2);r.fromBufferAttribute(t,g),n.fromBufferAttribute(t,v),s.fromBufferAttribute(t,x),h.subVectors(s,n),d.subVectors(r,n),h.cross(d),o.fromBufferAttribute(i,g),l.fromBufferAttribute(i,v),c.fromBufferAttribute(i,x),o.add(h),l.add(h),c.add(h),i.setXYZ(g,o.x,o.y,o.z),i.setXYZ(v,l.x,l.y,l.z),i.setXYZ(x,c.x,c.y,c.z)}else for(let u=0,p=t.count;u<p;u+=3)r.fromBufferAttribute(t,u+0),n.fromBufferAttribute(t,u+1),s.fromBufferAttribute(t,u+2),h.subVectors(s,n),d.subVectors(r,n),h.cross(d),i.setXYZ(u+0,h.x,h.y,h.z),i.setXYZ(u+1,h.x,h.y,h.z),i.setXYZ(u+2,h.x,h.y,h.z);this.normalizeNormals(),i.needsUpdate=!0}}merge(e,t){if(!(e&&e.isBufferGeometry)){console.error("THREE.BufferGeometry.merge(): geometry not an instance of THREE.BufferGeometry.",e);return}t===void 0&&(t=0,console.warn("THREE.BufferGeometry.merge(): Overwriting original geometry, starting at offset=0. Use BufferGeometryUtils.mergeBufferGeometries() for lossless merge."));const i=this.attributes;for(const r in i){if(e.attributes[r]===void 0)continue;const n=i[r].array,s=e.attributes[r],o=s.array,l=s.itemSize*t,c=Math.min(o.length,n.length-l);for(let h=0,d=l;h<c;h++,d++)n[d]=o[h]}return this}normalizeNormals(){const e=this.attributes.normal;for(let t=0,i=e.count;t<i;t++)nt.fromBufferAttribute(e,t),nt.normalize(),e.setXYZ(t,nt.x,nt.y,nt.z)}toNonIndexed(){function e(o,l){const c=o.array,h=o.itemSize,d=o.normalized,u=new c.constructor(l.length*h);let p=0,g=0;for(let v=0,x=l.length;v<x;v++){o.isInterleavedBufferAttribute?p=l[v]*o.data.stride+o.offset:p=l[v]*h;for(let f=0;f<h;f++)u[g++]=c[p++]}return new De(u,h,d)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new we,i=this.index.array,r=this.attributes;for(const o in r){const l=r[o],c=e(l,i);t.setAttribute(o,c)}const n=this.morphAttributes;for(const o in n){const l=[],c=n[o];for(let h=0,d=c.length;h<d;h++){const u=c[h],p=e(u,i);l.push(p)}t.morphAttributes[o]=l}t.morphTargetsRelative=this.morphTargetsRelative;const s=this.groups;for(let o=0,l=s.length;o<l;o++){const c=s[o];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){const e={metadata:{version:4.5,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const i=this.attributes;for(const l in i){const c=i[l];e.data.attributes[l]=c.toJSON(e.data)}const r={};let n=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],h=[];for(let d=0,u=c.length;d<u;d++){const p=c[d];h.push(p.toJSON(e.data))}h.length>0&&(r[l]=h,n=!0)}n&&(e.data.morphAttributes=r,e.data.morphTargetsRelative=this.morphTargetsRelative);const s=this.groups;s.length>0&&(e.data.groups=JSON.parse(JSON.stringify(s)));const o=this.boundingSphere;return o!==null&&(e.data.boundingSphere={center:o.center.toArray(),radius:o.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const i=e.index;i!==null&&this.setIndex(i.clone(t));const r=e.attributes;for(const c in r){const h=r[c];this.setAttribute(c,h.clone(t))}const n=e.morphAttributes;for(const c in n){const h=[],d=n[c];for(let u=0,p=d.length;u<p;u++)h.push(d[u].clone(t));this.morphAttributes[c]=h}this.morphTargetsRelative=e.morphTargetsRelative;const s=e.groups;for(let c=0,h=s.length;c<h;c++){const d=s[c];this.addGroup(d.start,d.count,d.materialIndex)}const o=e.boundingBox;o!==null&&(this.boundingBox=o.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,e.parameters!==void 0&&(this.parameters=Object.assign({},e.parameters)),this}dispose(){this.dispatchEvent({type:"dispose"})}}we.prototype.isBufferGeometry=!0;const wh=new ue,Lr=new pi,oo=new ui,fi=new b,gi=new b,vi=new b,lo=new b,co=new b,ho=new b,ga=new b,va=new b,ya=new b,xa=new j,_a=new j,wa=new j,uo=new b,ba=new b;class Qe extends Re{constructor(e=new we,t=new Qt){super(),this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e){return super.copy(e),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=e.material,this.geometry=e.geometry,this}updateMorphTargets(){const e=this.geometry;if(e.isBufferGeometry){const t=e.morphAttributes,i=Object.keys(t);if(i.length>0){const r=t[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let n=0,s=r.length;n<s;n++){const o=r[n].name||String(n);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=n}}}}else{const t=e.morphTargets;t!==void 0&&t.length>0&&console.error("THREE.Mesh.updateMorphTargets() no longer supports THREE.Geometry. Use THREE.BufferGeometry instead.")}}raycast(e,t){const i=this.geometry,r=this.material,n=this.matrixWorld;if(r===void 0||(i.boundingSphere===null&&i.computeBoundingSphere(),oo.copy(i.boundingSphere),oo.applyMatrix4(n),e.ray.intersectsSphere(oo)===!1)||(wh.copy(n).invert(),Lr.copy(e.ray).applyMatrix4(wh),i.boundingBox!==null&&Lr.intersectsBox(i.boundingBox)===!1))return;let s;if(i.isBufferGeometry){const o=i.index,l=i.attributes.position,c=i.morphAttributes.position,h=i.morphTargetsRelative,d=i.attributes.uv,u=i.attributes.uv2,p=i.groups,g=i.drawRange;if(o!==null)if(Array.isArray(r))for(let v=0,x=p.length;v<x;v++){const f=p[v],m=r[f.materialIndex],w=Math.max(f.start,g.start),y=Math.min(o.count,Math.min(f.start+f.count,g.start+g.count));for(let M=w,A=y;M<A;M+=3){const _=o.getX(M),L=o.getX(M+1),N=o.getX(M+2);s=Ma(this,m,e,Lr,l,c,h,d,u,_,L,N),s&&(s.faceIndex=Math.floor(M/3),s.face.materialIndex=f.materialIndex,t.push(s))}}else{const v=Math.max(0,g.start),x=Math.min(o.count,g.start+g.count);for(let f=v,m=x;f<m;f+=3){const w=o.getX(f),y=o.getX(f+1),M=o.getX(f+2);s=Ma(this,r,e,Lr,l,c,h,d,u,w,y,M),s&&(s.faceIndex=Math.floor(f/3),t.push(s))}}else if(l!==void 0)if(Array.isArray(r))for(let v=0,x=p.length;v<x;v++){const f=p[v],m=r[f.materialIndex],w=Math.max(f.start,g.start),y=Math.min(l.count,Math.min(f.start+f.count,g.start+g.count));for(let M=w,A=y;M<A;M+=3){const _=M,L=M+1,N=M+2;s=Ma(this,m,e,Lr,l,c,h,d,u,_,L,N),s&&(s.faceIndex=Math.floor(M/3),s.face.materialIndex=f.materialIndex,t.push(s))}}else{const v=Math.max(0,g.start),x=Math.min(l.count,g.start+g.count);for(let f=v,m=x;f<m;f+=3){const w=f,y=f+1,M=f+2;s=Ma(this,r,e,Lr,l,c,h,d,u,w,y,M),s&&(s.faceIndex=Math.floor(f/3),t.push(s))}}}else i.isGeometry&&console.error("THREE.Mesh.raycast() no longer supports THREE.Geometry. Use THREE.BufferGeometry instead.")}}Qe.prototype.isMesh=!0;function jp(a,e,t,i,r,n,s,o){let l;if(e.side===Xe?l=i.intersectTriangle(s,n,r,!0,o):l=i.intersectTriangle(r,n,s,e.side!==Pi,o),l===null)return null;ba.copy(o),ba.applyMatrix4(a.matrixWorld);const c=t.ray.origin.distanceTo(ba);return c<t.near||c>t.far?null:{distance:c,point:ba.clone(),object:a}}function Ma(a,e,t,i,r,n,s,o,l,c,h,d){fi.fromBufferAttribute(r,c),gi.fromBufferAttribute(r,h),vi.fromBufferAttribute(r,d);const u=a.morphTargetInfluences;if(n&&u){ga.set(0,0,0),va.set(0,0,0),ya.set(0,0,0);for(let g=0,v=n.length;g<v;g++){const x=u[g],f=n[g];x!==0&&(lo.fromBufferAttribute(f,c),co.fromBufferAttribute(f,h),ho.fromBufferAttribute(f,d),s?(ga.addScaledVector(lo,x),va.addScaledVector(co,x),ya.addScaledVector(ho,x)):(ga.addScaledVector(lo.sub(fi),x),va.addScaledVector(co.sub(gi),x),ya.addScaledVector(ho.sub(vi),x)))}fi.add(ga),gi.add(va),vi.add(ya)}a.isSkinnedMesh&&(a.boneTransform(c,fi),a.boneTransform(h,gi),a.boneTransform(d,vi));const p=jp(a,e,t,i,fi,gi,vi,uo);if(p){o&&(xa.fromBufferAttribute(o,c),_a.fromBufferAttribute(o,h),wa.fromBufferAttribute(o,d),p.uv=Je.getUV(uo,fi,gi,vi,xa,_a,wa,new j)),l&&(xa.fromBufferAttribute(l,c),_a.fromBufferAttribute(l,h),wa.fromBufferAttribute(l,d),p.uv2=Je.getUV(uo,fi,gi,vi,xa,_a,wa,new j));const g={a:c,b:h,c:d,normal:new b,materialIndex:0};Je.getNormal(fi,gi,vi,g.normal),p.face=g}return p}class ri extends we{constructor(e=1,t=1,i=1,r=1,n=1,s=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:i,widthSegments:r,heightSegments:n,depthSegments:s};const o=this;r=Math.floor(r),n=Math.floor(n),s=Math.floor(s);const l=[],c=[],h=[],d=[];let u=0,p=0;g("z","y","x",-1,-1,i,t,e,s,n,0),g("z","y","x",1,-1,i,t,-e,s,n,1),g("x","z","y",1,1,e,i,t,r,s,2),g("x","z","y",1,-1,e,i,-t,r,s,3),g("x","y","z",1,-1,e,t,i,r,n,4),g("x","y","z",-1,-1,e,t,-i,r,n,5),this.setIndex(l),this.setAttribute("position",new le(c,3)),this.setAttribute("normal",new le(h,3)),this.setAttribute("uv",new le(d,2));function g(v,x,f,m,w,y,M,A,_,L,N){const R=y/_,C=M/L,Y=y/2,I=M/2,B=A/2,O=_+1,z=L+1;let U=0,$=0;const he=new b;for(let de=0;de<z;de++){const se=de*C-I;for(let Te=0;Te<O;Te++){const Z=Te*R-Y;he[v]=Z*m,he[x]=se*w,he[f]=B,c.push(he.x,he.y,he.z),he[v]=0,he[x]=0,he[f]=A>0?1:-1,h.push(he.x,he.y,he.z),d.push(Te/_),d.push(1-de/L),U+=1}}for(let de=0;de<L;de++)for(let se=0;se<_;se++){const Te=u+se+O*de,Z=u+se+O*(de+1),Q=u+(se+1)+O*(de+1),pe=u+(se+1)+O*de;l.push(Te,Z,pe),l.push(Z,Q,pe),$+=6}o.addGroup(p,$,N),p+=$,u+=U}}static fromJSON(e){return new ri(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function Cr(a){const e={};for(const t in a){e[t]={};for(const i in a[t]){const r=a[t][i];r&&(r.isColor||r.isMatrix3||r.isMatrix4||r.isVector2||r.isVector3||r.isVector4||r.isTexture||r.isQuaternion)?e[t][i]=r.clone():Array.isArray(r)?e[t][i]=r.slice():e[t][i]=r}}return e}function ft(a){const e={};for(let t=0;t<a.length;t++){const i=Cr(a[t]);for(const r in i)e[r]=i[r]}return e}const bh={clone:Cr,merge:ft};var qp=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Xp=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class $t extends rt{constructor(e){super(),this.type="ShaderMaterial",this.defines={},this.uniforms={},this.vertexShader=qp,this.fragmentShader=Xp,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.extensions={derivatives:!1,fragDepth:!1,drawBuffers:!1,shaderTextureLOD:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv2:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&(e.attributes!==void 0&&console.error("THREE.ShaderMaterial: attributes should now be defined in THREE.BufferGeometry instead."),this.setValues(e))}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Cr(e.uniforms),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const r in this.uniforms){const n=this.uniforms[r].value;n&&n.isTexture?t.uniforms[r]={type:"t",value:n.toJSON(e).uuid}:n&&n.isColor?t.uniforms[r]={type:"c",value:n.getHex()}:n&&n.isVector2?t.uniforms[r]={type:"v2",value:n.toArray()}:n&&n.isVector3?t.uniforms[r]={type:"v3",value:n.toArray()}:n&&n.isVector4?t.uniforms[r]={type:"v4",value:n.toArray()}:n&&n.isMatrix3?t.uniforms[r]={type:"m3",value:n.toArray()}:n&&n.isMatrix4?t.uniforms[r]={type:"m4",value:n.toArray()}:t.uniforms[r]={value:n}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader;const i={};for(const r in this.extensions)this.extensions[r]===!0&&(i[r]=!0);return Object.keys(i).length>0&&(t.extensions=i),t}}$t.prototype.isShaderMaterial=!0;class bn extends Re{constructor(){super(),this.type="Camera",this.matrixWorldInverse=new ue,this.projectionMatrix=new ue,this.projectionMatrixInverse=new ue}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(-t[8],-t[9],-t[10]).normalize()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}bn.prototype.isCamera=!0;class at extends bn{constructor(e=50,t=1,i=.1,r=2e3){super(),this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=r,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=gn*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(ki*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return gn*2*Math.atan(Math.tan(ki*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}setViewOffset(e,t,i,r,n,s){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=r,this.view.width=n,this.view.height=s,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(ki*.5*this.fov)/this.zoom,i=2*t,r=this.aspect*i,n=-.5*r;const s=this.view;if(this.view!==null&&this.view.enabled){const l=s.fullWidth,c=s.fullHeight;n+=s.offsetX*r/l,t-=s.offsetY*i/c,r*=s.width/l,i*=s.height/c}const o=this.filmOffset;o!==0&&(n+=e*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(n,n+r,t,t-i,e,this.far),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}at.prototype.isPerspectiveCamera=!0;const Rr=90,Pr=1;class Sa extends Re{constructor(e,t,i){if(super(),this.type="CubeCamera",i.isWebGLCubeRenderTarget!==!0){console.error("THREE.CubeCamera: The constructor now expects an instance of WebGLCubeRenderTarget as third parameter.");return}this.renderTarget=i;const r=new at(Rr,Pr,e,t);r.layers=this.layers,r.up.set(0,-1,0),r.lookAt(new b(1,0,0)),this.add(r);const n=new at(Rr,Pr,e,t);n.layers=this.layers,n.up.set(0,-1,0),n.lookAt(new b(-1,0,0)),this.add(n);const s=new at(Rr,Pr,e,t);s.layers=this.layers,s.up.set(0,0,1),s.lookAt(new b(0,1,0)),this.add(s);const o=new at(Rr,Pr,e,t);o.layers=this.layers,o.up.set(0,0,-1),o.lookAt(new b(0,-1,0)),this.add(o);const l=new at(Rr,Pr,e,t);l.layers=this.layers,l.up.set(0,-1,0),l.lookAt(new b(0,0,1)),this.add(l);const c=new at(Rr,Pr,e,t);c.layers=this.layers,c.up.set(0,-1,0),c.lookAt(new b(0,0,-1)),this.add(c)}update(e,t){this.parent===null&&this.updateMatrixWorld();const i=this.renderTarget,[r,n,s,o,l,c]=this.children,h=e.xr.enabled,d=e.getRenderTarget();e.xr.enabled=!1;const u=i.texture.generateMipmaps;i.texture.generateMipmaps=!1,e.setRenderTarget(i,0),e.render(t,r),e.setRenderTarget(i,1),e.render(t,n),e.setRenderTarget(i,2),e.render(t,s),e.setRenderTarget(i,3),e.render(t,o),e.setRenderTarget(i,4),e.render(t,l),i.texture.generateMipmaps=u,e.setRenderTarget(i,5),e.render(t,c),e.setRenderTarget(d),e.xr.enabled=h}}class Ir extends tt{constructor(e,t,i,r,n,s,o,l,c,h){e=e!==void 0?e:[],t=t!==void 0?t:Di,super(e,t,i,r,n,s,o,l,c,h),this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}Ir.prototype.isCubeTexture=!0;class Ta extends Ct{constructor(e,t,i){Number.isInteger(t)&&(console.warn("THREE.WebGLCubeRenderTarget: constructor signature is now WebGLCubeRenderTarget( size, options )"),t=i),super(e,e,t),t=t||{},this.texture=new Ir(void 0,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.encoding),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:$e,this.texture._needsFlipEnvMap=!1}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.format=lt,this.texture.encoding=t.encoding,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},r=new ri(5,5,5),n=new $t({name:"CubemapFromEquirect",uniforms:Cr(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:Xe,blending:jt});n.uniforms.tEquirect.value=t;const s=new Qe(r,n),o=t.minFilter;return t.minFilter===Bi&&(t.minFilter=$e),new Sa(1,10,this).update(e,s),t.minFilter=o,s.geometry.dispose(),s.material.dispose(),this}clear(e,t,i,r){const n=e.getRenderTarget();for(let s=0;s<6;s++)e.setRenderTarget(this,s),e.clear(t,i,r);e.setRenderTarget(n)}}Ta.prototype.isWebGLCubeRenderTarget=!0;const po=new b,Yp=new b,Zp=new et;class Ot{constructor(e=new b(1,0,0),t=0){this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,i,r){return this.normal.set(e,t,i),this.constant=r,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,i){const r=po.subVectors(i,t).cross(Yp.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(r,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(this.normal).multiplyScalar(-this.distanceToPoint(e)).add(e)}intersectLine(e,t){const i=e.delta(po),r=this.normal.dot(i);if(r===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const n=-(e.start.dot(this.normal)+this.constant)/r;return n<0||n>1?null:t.copy(i).multiplyScalar(n).add(e.start)}intersectsLine(e){const t=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return t<0&&i>0||i<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const i=t||Zp.getNormalMatrix(e),r=this.coplanarPoint(po).applyMatrix4(e),n=this.normal.applyMatrix3(i).normalize();return this.constant=-r.dot(n),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}Ot.prototype.isPlane=!0;const Dr=new ui,Ea=new b;class Mn{constructor(e=new Ot,t=new Ot,i=new Ot,r=new Ot,n=new Ot,s=new Ot){this.planes=[e,t,i,r,n,s]}set(e,t,i,r,n,s){const o=this.planes;return o[0].copy(e),o[1].copy(t),o[2].copy(i),o[3].copy(r),o[4].copy(n),o[5].copy(s),this}copy(e){const t=this.planes;for(let i=0;i<6;i++)t[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e){const t=this.planes,i=e.elements,r=i[0],n=i[1],s=i[2],o=i[3],l=i[4],c=i[5],h=i[6],d=i[7],u=i[8],p=i[9],g=i[10],v=i[11],x=i[12],f=i[13],m=i[14],w=i[15];return t[0].setComponents(o-r,d-l,v-u,w-x).normalize(),t[1].setComponents(o+r,d+l,v+u,w+x).normalize(),t[2].setComponents(o+n,d+c,v+p,w+f).normalize(),t[3].setComponents(o-n,d-c,v-p,w-f).normalize(),t[4].setComponents(o-s,d-h,v-g,w-m).normalize(),t[5].setComponents(o+s,d+h,v+g,w+m).normalize(),this}intersectsObject(e){const t=e.geometry;return t.boundingSphere===null&&t.computeBoundingSphere(),Dr.copy(t.boundingSphere).applyMatrix4(e.matrixWorld),this.intersectsSphere(Dr)}intersectsSprite(e){return Dr.center.set(0,0,0),Dr.radius=.7071067811865476,Dr.applyMatrix4(e.matrixWorld),this.intersectsSphere(Dr)}intersectsSphere(e){const t=this.planes,i=e.center,r=-e.radius;for(let n=0;n<6;n++)if(t[n].distanceToPoint(i)<r)return!1;return!0}intersectsBox(e){const t=this.planes;for(let i=0;i<6;i++){const r=t[i];if(Ea.x=r.normal.x>0?e.max.x:e.min.x,Ea.y=r.normal.y>0?e.max.y:e.min.y,Ea.z=r.normal.z>0?e.max.z:e.min.z,r.distanceToPoint(Ea)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let i=0;i<6;i++)if(t[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function Mh(){let a=null,e=!1,t=null,i=null;function r(n,s){t(n,s),i=a.requestAnimationFrame(r)}return{start:function(){e!==!0&&t!==null&&(i=a.requestAnimationFrame(r),e=!0)},stop:function(){a.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(n){t=n},setContext:function(n){a=n}}}function Jp(a,e){const t=e.isWebGL2,i=new WeakMap;function r(c,h){const d=c.array,u=c.usage,p=a.createBuffer();a.bindBuffer(h,p),a.bufferData(h,d,u),c.onUploadCallback();let g=5126;return d instanceof Float32Array?g=5126:d instanceof Float64Array?console.warn("THREE.WebGLAttributes: Unsupported data buffer format: Float64Array."):d instanceof Uint16Array?c.isFloat16BufferAttribute?t?g=5131:console.warn("THREE.WebGLAttributes: Usage of Float16BufferAttribute requires WebGL2."):g=5123:d instanceof Int16Array?g=5122:d instanceof Uint32Array?g=5125:d instanceof Int32Array?g=5124:d instanceof Int8Array?g=5120:(d instanceof Uint8Array||d instanceof Uint8ClampedArray)&&(g=5121),{buffer:p,type:g,bytesPerElement:d.BYTES_PER_ELEMENT,version:c.version}}function n(c,h,d){const u=h.array,p=h.updateRange;a.bindBuffer(d,c),p.count===-1?a.bufferSubData(d,0,u):(t?a.bufferSubData(d,p.offset*u.BYTES_PER_ELEMENT,u,p.offset,p.count):a.bufferSubData(d,p.offset*u.BYTES_PER_ELEMENT,u.subarray(p.offset,p.offset+p.count)),p.count=-1)}function s(c){return c.isInterleavedBufferAttribute&&(c=c.data),i.get(c)}function o(c){c.isInterleavedBufferAttribute&&(c=c.data);const h=i.get(c);h&&(a.deleteBuffer(h.buffer),i.delete(c))}function l(c,h){if(c.isGLBufferAttribute){const u=i.get(c);(!u||u.version<c.version)&&i.set(c,{buffer:c.buffer,type:c.type,bytesPerElement:c.elementSize,version:c.version});return}c.isInterleavedBufferAttribute&&(c=c.data);const d=i.get(c);d===void 0?i.set(c,r(c,h)):d.version<c.version&&(n(d.buffer,c,h),d.version=c.version)}return{get:s,remove:o,update:l}}class or extends we{constructor(e=1,t=1,i=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:i,heightSegments:r};const n=e/2,s=t/2,o=Math.floor(i),l=Math.floor(r),c=o+1,h=l+1,d=e/o,u=t/l,p=[],g=[],v=[],x=[];for(let f=0;f<h;f++){const m=f*u-s;for(let w=0;w<c;w++){const y=w*d-n;g.push(y,-m,0),v.push(0,0,1),x.push(w/o),x.push(1-f/l)}}for(let f=0;f<l;f++)for(let m=0;m<o;m++){const w=m+c*f,y=m+c*(f+1),M=m+1+c*(f+1),A=m+1+c*f;p.push(w,y,A),p.push(y,M,A)}this.setIndex(p),this.setAttribute("position",new le(g,3)),this.setAttribute("normal",new le(v,3)),this.setAttribute("uv",new le(x,2))}static fromJSON(e){return new or(e.width,e.height,e.widthSegments,e.heightSegments)}}var Kp=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vUv ).g;
#endif`,Qp=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,$p=`#ifdef USE_ALPHATEST
	if ( diffuseColor.a < alphaTest ) discard;
#endif`,em=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,tm=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vUv2 ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometry.normal, geometry.viewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,im=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,rm="vec3 transformed = vec3( position );",nm=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,am=`vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
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
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 f0, const in float f90, const in float roughness ) {
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
float G_BlinnPhong_Implicit( ) {
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
#endif`,sm=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vUv );
		vec2 dSTdy = dFdy( vUv );
		float Hll = bumpScale * texture2D( bumpMap, vUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = vec3( dFdx( surf_pos.x ), dFdx( surf_pos.y ), dFdx( surf_pos.z ) );
		vec3 vSigmaY = vec3( dFdy( surf_pos.x ), dFdy( surf_pos.y ), dFdy( surf_pos.z ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,om=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,lm=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,cm=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,hm=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,um=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,dm=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,pm=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	varying vec3 vColor;
#endif`,mm=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif`,fm=`#define PI 3.141592653589793
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
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 color ) { return dot( color, vec3( 0.3333 ) ); }
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
struct GeometricContext {
	vec3 position;
	vec3 normal;
	vec3 viewDir;
#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal;
#endif
};
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
float linearToRelativeLuminance( const in vec3 color ) {
	vec3 weights = vec3( 0.2126, 0.7152, 0.0722 );
	return dot( weights, color.rgb );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}`,gm=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_maxMipLevel 8.0
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_maxTileSize 256.0
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
		float texelSize = 1.0 / ( 3.0 * cubeUV_maxTileSize );
		vec2 uv = getUV( direction, face ) * ( faceSize - 1.0 );
		vec2 f = fract( uv );
		uv += 0.5 - f;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		if ( mipInt < cubeUV_maxMipLevel ) {
			uv.y += 2.0 * cubeUV_maxTileSize;
		}
		uv.y += filterInt * 2.0 * cubeUV_minTileSize;
		uv.x += 3.0 * max( 0.0, cubeUV_maxTileSize - 2.0 * faceSize );
		uv *= texelSize;
		vec3 tl = envMapTexelToLinear( texture2D( envMap, uv ) ).rgb;
		uv.x += texelSize;
		vec3 tr = envMapTexelToLinear( texture2D( envMap, uv ) ).rgb;
		uv.y += texelSize;
		vec3 br = envMapTexelToLinear( texture2D( envMap, uv ) ).rgb;
		uv.x -= texelSize;
		vec3 bl = envMapTexelToLinear( texture2D( envMap, uv ) ).rgb;
		vec3 tm = mix( tl, tr, f.x );
		vec3 bm = mix( bl, br, f.x );
		return mix( tm, bm, f.y );
	}
	#define r0 1.0
	#define v0 0.339
	#define m0 - 2.0
	#define r1 0.8
	#define v1 0.276
	#define m1 - 1.0
	#define r4 0.4
	#define v4 0.046
	#define m4 2.0
	#define r5 0.305
	#define v5 0.016
	#define m5 3.0
	#define r6 0.21
	#define v6 0.0038
	#define m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= r1 ) {
			mip = ( r0 - roughness ) * ( m1 - m0 ) / ( r0 - r1 ) + m0;
		} else if ( roughness >= r4 ) {
			mip = ( r1 - roughness ) * ( m4 - m1 ) / ( r1 - r4 ) + m1;
		} else if ( roughness >= r5 ) {
			mip = ( r4 - roughness ) * ( m5 - m4 ) / ( r4 - r5 ) + m4;
		} else if ( roughness >= r6 ) {
			mip = ( r5 - roughness ) * ( m6 - m5 ) / ( r5 - r6 ) + m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), m0, cubeUV_maxMipLevel );
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
#endif`,vm=`vec3 transformedNormal = objectNormal;
#ifdef USE_INSTANCING
	mat3 m = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( m[ 0 ], m[ 0 ] ), dot( m[ 1 ], m[ 1 ] ), dot( m[ 2 ], m[ 2 ] ) );
	transformedNormal = m * transformedNormal;
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	vec3 transformedTangent = ( modelViewMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,ym=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,xm=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vUv ).x * displacementScale + displacementBias );
#endif`,_m=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vUv );
	emissiveColor.rgb = emissiveMapTexelToLinear( emissiveColor ).rgb;
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,wm=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,bm="gl_FragColor = linearToOutputTexel( gl_FragColor );",Mm=`
vec4 LinearToLinear( in vec4 value ) {
	return value;
}
vec4 GammaToLinear( in vec4 value, in float gammaFactor ) {
	return vec4( pow( value.rgb, vec3( gammaFactor ) ), value.a );
}
vec4 LinearToGamma( in vec4 value, in float gammaFactor ) {
	return vec4( pow( value.rgb, vec3( 1.0 / gammaFactor ) ), value.a );
}
vec4 sRGBToLinear( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 LinearTosRGB( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}
vec4 RGBEToLinear( in vec4 value ) {
	return vec4( value.rgb * exp2( value.a * 255.0 - 128.0 ), 1.0 );
}
vec4 LinearToRGBE( in vec4 value ) {
	float maxComponent = max( max( value.r, value.g ), value.b );
	float fExp = clamp( ceil( log2( maxComponent ) ), -128.0, 127.0 );
	return vec4( value.rgb / exp2( fExp ), ( fExp + 128.0 ) / 255.0 );
}
vec4 RGBMToLinear( in vec4 value, in float maxRange ) {
	return vec4( value.rgb * value.a * maxRange, 1.0 );
}
vec4 LinearToRGBM( in vec4 value, in float maxRange ) {
	float maxRGB = max( value.r, max( value.g, value.b ) );
	float M = clamp( maxRGB / maxRange, 0.0, 1.0 );
	M = ceil( M * 255.0 ) / 255.0;
	return vec4( value.rgb / ( M * maxRange ), M );
}
vec4 RGBDToLinear( in vec4 value, in float maxRange ) {
	return vec4( value.rgb * ( ( maxRange / 255.0 ) / value.a ), 1.0 );
}
vec4 LinearToRGBD( in vec4 value, in float maxRange ) {
	float maxRGB = max( value.r, max( value.g, value.b ) );
	float D = max( maxRange / maxRGB, 1.0 );
	D = clamp( floor( D ) / 255.0, 0.0, 1.0 );
	return vec4( value.rgb * ( D * ( 255.0 / maxRange ) ), D );
}
const mat3 cLogLuvM = mat3( 0.2209, 0.3390, 0.4184, 0.1138, 0.6780, 0.7319, 0.0102, 0.1130, 0.2969 );
vec4 LinearToLogLuv( in vec4 value ) {
	vec3 Xp_Y_XYZp = cLogLuvM * value.rgb;
	Xp_Y_XYZp = max( Xp_Y_XYZp, vec3( 1e-6, 1e-6, 1e-6 ) );
	vec4 vResult;
	vResult.xy = Xp_Y_XYZp.xy / Xp_Y_XYZp.z;
	float Le = 2.0 * log2(Xp_Y_XYZp.y) + 127.0;
	vResult.w = fract( Le );
	vResult.z = ( Le - ( floor( vResult.w * 255.0 ) ) / 255.0 ) / 255.0;
	return vResult;
}
const mat3 cLogLuvInverseM = mat3( 6.0014, -2.7008, -1.7996, -1.3320, 3.1029, -5.7721, 0.3008, -1.0882, 5.6268 );
vec4 LogLuvToLinear( in vec4 value ) {
	float Le = value.z * 255.0 + value.w;
	vec3 Xp_Y_XYZp;
	Xp_Y_XYZp.y = exp2( ( Le - 127.0 ) / 2.0 );
	Xp_Y_XYZp.z = Xp_Y_XYZp.y / value.y;
	Xp_Y_XYZp.x = value.x * Xp_Y_XYZp.z;
	vec3 vRGB = cLogLuvInverseM * Xp_Y_XYZp.rgb;
	return vec4( max( vRGB, 0.0 ), 1.0 );
}`,Sm=`#ifdef USE_ENVMAP
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
		envColor = envMapTexelToLinear( envColor );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 envColor = textureCubeUV( envMap, reflectVec, 0.0 );
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
#endif`,Tm=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform int maxMipLevel;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,Em=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,Am=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) ||defined( PHONG )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Lm=`#ifdef USE_ENVMAP
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
#endif`,Cm=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Rm=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Pm=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Im=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Dm=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return texture2D( gradientMap, coord ).rgb;
	#else
		return ( coord.x < 0.7 ) ? vec3( 0.7 ) : vec3( 1.0 );
	#endif
}`,Nm=`#ifdef USE_LIGHTMAP
	vec4 lightMapTexel = texture2D( lightMap, vUv2 );
	vec3 lightMapIrradiance = lightMapTexelToLinear( lightMapTexel ).rgb * lightMapIntensity;
	#ifndef PHYSICALLY_CORRECT_LIGHTS
		lightMapIrradiance *= PI;
	#endif
	reflectedLight.indirectDiffuse += lightMapIrradiance;
#endif`,Bm=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Fm=`vec3 diffuse = vec3( 1.0 );
GeometricContext geometry;
geometry.position = mvPosition.xyz;
geometry.normal = normalize( transformedNormal );
geometry.viewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( -mvPosition.xyz );
GeometricContext backGeometry;
backGeometry.position = geometry.position;
backGeometry.normal = -geometry.normal;
backGeometry.viewDir = geometry.viewDir;
vLightFront = vec3( 0.0 );
vIndirectFront = vec3( 0.0 );
#ifdef DOUBLE_SIDED
	vLightBack = vec3( 0.0 );
	vIndirectBack = vec3( 0.0 );
#endif
IncidentLight directLight;
float dotNL;
vec3 directLightColor_Diffuse;
vIndirectFront += getAmbientLightIrradiance( ambientLightColor );
vIndirectFront += getLightProbeIrradiance( lightProbe, geometry.normal );
#ifdef DOUBLE_SIDED
	vIndirectBack += getAmbientLightIrradiance( ambientLightColor );
	vIndirectBack += getLightProbeIrradiance( lightProbe, backGeometry.normal );
#endif
#if NUM_POINT_LIGHTS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		getPointLightInfo( pointLights[ i ], geometry, directLight );
		dotNL = dot( geometry.normal, directLight.direction );
		directLightColor_Diffuse = directLight.color;
		vLightFront += saturate( dotNL ) * directLightColor_Diffuse;
		#ifdef DOUBLE_SIDED
			vLightBack += saturate( - dotNL ) * directLightColor_Diffuse;
		#endif
	}
	#pragma unroll_loop_end
#endif
#if NUM_SPOT_LIGHTS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		getSpotLightInfo( spotLights[ i ], geometry, directLight );
		dotNL = dot( geometry.normal, directLight.direction );
		directLightColor_Diffuse = directLight.color;
		vLightFront += saturate( dotNL ) * directLightColor_Diffuse;
		#ifdef DOUBLE_SIDED
			vLightBack += saturate( - dotNL ) * directLightColor_Diffuse;
		#endif
	}
	#pragma unroll_loop_end
#endif
#if NUM_DIR_LIGHTS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		getDirectionalLightInfo( directionalLights[ i ], geometry, directLight );
		dotNL = dot( geometry.normal, directLight.direction );
		directLightColor_Diffuse = directLight.color;
		vLightFront += saturate( dotNL ) * directLightColor_Diffuse;
		#ifdef DOUBLE_SIDED
			vLightBack += saturate( - dotNL ) * directLightColor_Diffuse;
		#endif
	}
	#pragma unroll_loop_end
#endif
#if NUM_HEMI_LIGHTS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
		vIndirectFront += getHemisphereLightIrradiance( hemisphereLights[ i ], geometry.normal );
		#ifdef DOUBLE_SIDED
			vIndirectBack += getHemisphereLightIrradiance( hemisphereLights[ i ], backGeometry.normal );
		#endif
	}
	#pragma unroll_loop_end
#endif`,Om=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
uniform vec3 lightProbe[ 9 ];
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
	#if defined ( PHYSICALLY_CORRECT_LIGHTS )
		float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
		if ( cutoffDistance > 0.0 ) {
			distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
		}
		return distanceFalloff;
	#else
		if ( cutoffDistance > 0.0 && decayExponent > 0.0 ) {
			return pow( saturate( - lightDistance / cutoffDistance + 1.0 ), decayExponent );
		}
		return 1.0;
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
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, const in GeometricContext geometry, out IncidentLight light ) {
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
	void getPointLightInfo( const in PointLight pointLight, const in GeometricContext geometry, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometry.position;
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
	void getSpotLightInfo( const in SpotLight spotLight, const in GeometricContext geometry, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometry.position;
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
#endif`,zm=`#if defined( USE_ENVMAP )
	#ifdef ENVMAP_MODE_REFRACTION
		uniform float refractionRatio;
	#endif
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#if defined( ENVMAP_TYPE_CUBE_UV )
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#if defined( ENVMAP_TYPE_CUBE_UV )
			vec3 reflectVec;
			#ifdef ENVMAP_MODE_REFLECTION
				reflectVec = reflect( - viewDir, normal );
				reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			#else
				reflectVec = refract( - viewDir, normal, refractionRatio );
			#endif
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
#endif`,Um=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Gm=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in GeometricContext geometry, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometry.normal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in GeometricContext geometry, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon
#define Material_LightProbeLOD( material )	(0)`,Hm=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,km=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in GeometricContext geometry, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometry.normal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometry.viewDir, geometry.normal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in GeometricContext geometry, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong
#define Material_LightProbeLOD( material )	(0)`,Vm=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( geometryNormal ) ), abs( dFdy( geometryNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	#ifdef SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULARINTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vUv ).a;
		#endif
		#ifdef USE_SPECULARCOLORMAP
			specularColorFactor *= specularColorMapTexelToLinear( texture2D( specularColorMap, vUv ) ).rgb;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( ior - 1.0 ) / ( ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
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
		material.clearcoat *= texture2D( clearcoatMap, vUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEENCOLORMAP
		material.sheenColor *= sheenColorMapTexelToLinear( texture2D( sheenColorMap, vUv ) ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEENROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vUv ).a;
	#endif
#endif`,Wm=`struct PhysicalMaterial {
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
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
};
vec3 clearcoatSpecular = vec3( 0.0 );
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
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	vec3 FssEss = specularColor * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = specularColor + ( 1.0 - specularColor ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometry.normal;
		vec3 viewDir = geometry.viewDir;
		vec3 position = geometry.position;
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
void RE_Direct_Physical( const in IncidentLight directLight, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometry.normal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometry.clearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecular += ccIrradiance * BRDF_GGX( directLight.direction, geometry.viewDir, geometry.clearcoatNormal, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		reflectedLight.directSpecular += irradiance * BRDF_Sheen( directLight.direction, geometry.viewDir, geometry.normal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometry.viewDir, geometry.normal, material.specularColor, material.specularF90, material.roughness );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecular += clearcoatRadiance * EnvironmentBRDF( geometry.clearcoatNormal, geometry.viewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	computeMultiscattering( geometry.normal, geometry.viewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	vec3 diffuse = material.diffuseColor * ( 1.0 - ( singleScattering + multiScattering ) );
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
}`,jm=`
GeometricContext geometry;
geometry.position = - vViewPosition;
geometry.normal = normal;
geometry.viewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
#ifdef USE_CLEARCOAT
	geometry.clearcoatNormal = clearcoatNormal;
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
		getPointLightInfo( pointLight, geometry, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= all( bvec2( directLight.visible, receiveShadow ) ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometry, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= all( bvec2( directLight.visible, receiveShadow ) ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometry, material, reflectedLight );
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
		getDirectionalLightInfo( directionalLight, geometry, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= all( bvec2( directLight.visible, receiveShadow ) ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	irradiance += getLightProbeIrradiance( lightProbe, geometry.normal );
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometry.normal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,qm=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vUv2 );
		vec3 lightMapIrradiance = lightMapTexelToLinear( lightMapTexel ).rgb * lightMapIntensity;
		#ifndef PHYSICALLY_CORRECT_LIGHTS
			lightMapIrradiance *= PI;
		#endif
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometry.normal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	radiance += getIBLRadiance( geometry.viewDir, geometry.normal, material.roughness );
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometry.viewDir, geometry.clearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,Xm=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometry, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometry, material, reflectedLight );
#endif`,Ym=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	gl_FragDepthEXT = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Zm=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Jm=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		varying float vFragDepth;
		varying float vIsPerspective;
	#else
		uniform float logDepthBufFC;
	#endif
#endif`,Km=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		vFragDepth = 1.0 + gl_Position.w;
		vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
	#else
		if ( isPerspectiveMatrix( projectionMatrix ) ) {
			gl_Position.z = log2( max( EPSILON, gl_Position.w + 1.0 ) ) * logDepthBufFC - 1.0;
			gl_Position.z *= gl_Position.w;
		}
	#endif
#endif`,Qm=`#ifdef USE_MAP
	vec4 texelColor = texture2D( map, vUv );
	texelColor = mapTexelToLinear( texelColor );
	diffuseColor *= texelColor;
#endif`,$m=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,ef=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
#endif
#ifdef USE_MAP
	vec4 mapTexel = texture2D( map, uv );
	diffuseColor *= mapTexelToLinear( mapTexel );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,tf=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	uniform mat3 uvTransform;
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,rf=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vUv );
	metalnessFactor *= texelMetalness.b;
#endif`,nf=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,af=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] > 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1, 2 ) * morphTargetInfluences[ i ];
		}
	#else
		objectNormal += morphNormal0 * morphTargetInfluences[ 0 ];
		objectNormal += morphNormal1 * morphTargetInfluences[ 1 ];
		objectNormal += morphNormal2 * morphTargetInfluences[ 2 ];
		objectNormal += morphNormal3 * morphTargetInfluences[ 3 ];
	#endif
#endif`,sf=`#ifdef USE_MORPHTARGETS
	uniform float morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
		uniform sampler2DArray morphTargetsTexture;
		uniform vec2 morphTargetsTextureSize;
		vec3 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset, const in int stride ) {
			float texelIndex = float( vertexIndex * stride + offset );
			float y = floor( texelIndex / morphTargetsTextureSize.x );
			float x = texelIndex - y * morphTargetsTextureSize.x;
			vec3 morphUV = vec3( ( x + 0.5 ) / morphTargetsTextureSize.x, y / morphTargetsTextureSize.y, morphTargetIndex );
			return texture( morphTargetsTexture, morphUV ).xyz;
		}
	#else
		#ifndef USE_MORPHNORMALS
			uniform float morphTargetInfluences[ 8 ];
		#else
			uniform float morphTargetInfluences[ 4 ];
		#endif
	#endif
#endif`,of=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			#ifndef USE_MORPHNORMALS
				if ( morphTargetInfluences[ i ] > 0.0 ) transformed += getMorph( gl_VertexID, i, 0, 1 ) * morphTargetInfluences[ i ];
			#else
				if ( morphTargetInfluences[ i ] > 0.0 ) transformed += getMorph( gl_VertexID, i, 0, 2 ) * morphTargetInfluences[ i ];
			#endif
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
#endif`,lf=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = vec3( dFdx( vViewPosition.x ), dFdx( vViewPosition.y ), dFdx( vViewPosition.z ) );
	vec3 fdy = vec3( dFdy( vViewPosition.x ), dFdy( vViewPosition.y ), dFdy( vViewPosition.z ) );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	#ifdef USE_TANGENT
		vec3 tangent = normalize( vTangent );
		vec3 bitangent = normalize( vBitangent );
		#ifdef DOUBLE_SIDED
			tangent = tangent * faceDirection;
			bitangent = bitangent * faceDirection;
		#endif
		#if defined( TANGENTSPACE_NORMALMAP ) || defined( USE_CLEARCOAT_NORMALMAP )
			mat3 vTBN = mat3( tangent, bitangent, normal );
		#endif
	#endif
#endif
vec3 geometryNormal = normal;`,cf=`#ifdef OBJECTSPACE_NORMALMAP
	normal = texture2D( normalMap, vUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( TANGENTSPACE_NORMALMAP )
	vec3 mapN = texture2D( normalMap, vUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	#ifdef USE_TANGENT
		normal = normalize( vTBN * mapN );
	#else
		normal = perturbNormal2Arb( - vViewPosition, normal, mapN, faceDirection );
	#endif
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,hf=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,uf=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,df=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,pf=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef OBJECTSPACE_NORMALMAP
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( TANGENTSPACE_NORMALMAP ) || defined ( USE_CLEARCOAT_NORMALMAP ) )
	vec3 perturbNormal2Arb( vec3 eye_pos, vec3 surf_norm, vec3 mapN, float faceDirection ) {
		vec3 q0 = vec3( dFdx( eye_pos.x ), dFdx( eye_pos.y ), dFdx( eye_pos.z ) );
		vec3 q1 = vec3( dFdy( eye_pos.x ), dFdy( eye_pos.y ), dFdy( eye_pos.z ) );
		vec2 st0 = dFdx( vUv.st );
		vec2 st1 = dFdy( vUv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : faceDirection * inversesqrt( det );
		return normalize( T * ( mapN.x * scale ) + B * ( mapN.y * scale ) + N * mapN.z );
	}
#endif`,mf=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = geometryNormal;
#endif`,ff=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	#ifdef USE_TANGENT
		clearcoatNormal = normalize( vTBN * clearcoatMapN );
	#else
		clearcoatNormal = perturbNormal2Arb( - vViewPosition, clearcoatNormal, clearcoatMapN, faceDirection );
	#endif
#endif`,gf=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif`,vf=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= transmissionAlpha + 0.1;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,yf=`vec3 packNormalToRGB( const in vec3 normal ) {
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
float orthographicDepthToViewZ( const in float linearClipZ, const in float near, const in float far ) {
	return linearClipZ * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float invClipZ, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * invClipZ - far );
}`,xf=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,_f=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,wf=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,bf=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Mf=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Sf=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Tf=`#ifdef USE_SHADOWMAP
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
		varying vec4 vSpotShadowCoord[ NUM_SPOT_LIGHT_SHADOWS ];
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
		bvec4 inFrustumVec = bvec4 ( shadowCoord.x >= 0.0, shadowCoord.x <= 1.0, shadowCoord.y >= 0.0, shadowCoord.y <= 1.0 );
		bool inFrustum = all( inFrustumVec );
		bvec2 frustumTestVec = bvec2( inFrustum, shadowCoord.z <= 1.0 );
		bool frustumTest = all( frustumTestVec );
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
#endif`,Ef=`#ifdef USE_SHADOWMAP
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
		uniform mat4 spotShadowMatrix[ NUM_SPOT_LIGHT_SHADOWS ];
		varying vec4 vSpotShadowCoord[ NUM_SPOT_LIGHT_SHADOWS ];
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
#endif`,Af=`#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0 || NUM_SPOT_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0
		vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		vec4 shadowWorldPosition;
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
		vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias, 0 );
		vSpotShadowCoord[ i ] = spotShadowMatrix[ i ] * shadowWorldPosition;
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
#endif`,Lf=`float getShadowMask() {
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
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowBias, spotLight.shadowRadius, vSpotShadowCoord[ i ] ) : 1.0;
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
}`,Cf=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Rf=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	#ifdef BONE_TEXTURE
		uniform highp sampler2D boneTexture;
		uniform int boneTextureSize;
		mat4 getBoneMatrix( const in float i ) {
			float j = i * 4.0;
			float x = mod( j, float( boneTextureSize ) );
			float y = floor( j / float( boneTextureSize ) );
			float dx = 1.0 / float( boneTextureSize );
			float dy = 1.0 / float( boneTextureSize );
			y = dy * ( y + 0.5 );
			vec4 v1 = texture2D( boneTexture, vec2( dx * ( x + 0.5 ), y ) );
			vec4 v2 = texture2D( boneTexture, vec2( dx * ( x + 1.5 ), y ) );
			vec4 v3 = texture2D( boneTexture, vec2( dx * ( x + 2.5 ), y ) );
			vec4 v4 = texture2D( boneTexture, vec2( dx * ( x + 3.5 ), y ) );
			mat4 bone = mat4( v1, v2, v3, v4 );
			return bone;
		}
	#else
		uniform mat4 boneMatrices[ MAX_BONES ];
		mat4 getBoneMatrix( const in float i ) {
			mat4 bone = boneMatrices[ int(i) ];
			return bone;
		}
	#endif
#endif`,Pf=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,If=`#ifdef USE_SKINNING
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
#endif`,Df=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Nf=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Bf=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Ff=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return toneMappingExposure * color;
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,Of=`#ifdef USE_TRANSMISSION
	float transmissionAlpha = 1.0;
	float transmissionFactor = transmission;
	float thicknessFactor = thickness;
	#ifdef USE_TRANSMISSIONMAP
		transmissionFactor *= texture2D( transmissionMap, vUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		thicknessFactor *= texture2D( thicknessMap, vUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmission = getIBLVolumeRefraction(
		n, v, roughnessFactor, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, ior, thicknessFactor,
		attenuationColor, attenuationDistance );
	totalDiffuse = mix( totalDiffuse, transmission.rgb, transmissionFactor );
	transmissionAlpha = mix( transmissionAlpha, transmission.a, transmissionFactor );
#endif`,zf=`#ifdef USE_TRANSMISSION
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
	vec3 getVolumeTransmissionRay( vec3 n, vec3 v, float thickness, float ior, mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( float roughness, float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( vec2 fragCoord, float roughness, float ior ) {
		float framebufferLod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		#ifdef TEXTURE_LOD_EXT
			return texture2DLodEXT( transmissionSamplerMap, fragCoord.xy, framebufferLod );
		#else
			return texture2D( transmissionSamplerMap, fragCoord.xy, framebufferLod );
		#endif
	}
	vec3 applyVolumeAttenuation( vec3 radiance, float transmissionDistance, vec3 attenuationColor, float attenuationDistance ) {
		if ( attenuationDistance == 0.0 ) {
			return radiance;
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance * radiance;
		}
	}
	vec4 getIBLVolumeRefraction( vec3 n, vec3 v, float roughness, vec3 diffuseColor, vec3 specularColor, float specularF90,
		vec3 position, mat4 modelMatrix, mat4 viewMatrix, mat4 projMatrix, float ior, float thickness,
		vec3 attenuationColor, float attenuationDistance ) {
		vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
		vec3 refractedRayExit = position + transmissionRay;
		vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
		vec2 refractionCoords = ndcPos.xy / ndcPos.w;
		refractionCoords += 1.0;
		refractionCoords /= 2.0;
		vec4 transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
		vec3 attenuatedColor = applyVolumeAttenuation( transmittedLight.rgb, length( transmissionRay ), attenuationColor, attenuationDistance );
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		return vec4( ( 1.0 - F ) * attenuatedColor * diffuseColor, transmittedLight.a );
	}
#endif`,Uf=`#if ( defined( USE_UV ) && ! defined( UVS_VERTEX_ONLY ) )
	varying vec2 vUv;
#endif`,Gf=`#ifdef USE_UV
	#ifdef UVS_VERTEX_ONLY
		vec2 vUv;
	#else
		varying vec2 vUv;
	#endif
	uniform mat3 uvTransform;
#endif`,Hf=`#ifdef USE_UV
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
#endif`,kf=`#if defined( USE_LIGHTMAP ) || defined( USE_AOMAP )
	varying vec2 vUv2;
#endif`,Vf=`#if defined( USE_LIGHTMAP ) || defined( USE_AOMAP )
	attribute vec2 uv2;
	varying vec2 vUv2;
	uniform mat3 uv2Transform;
#endif`,Wf=`#if defined( USE_LIGHTMAP ) || defined( USE_AOMAP )
	vUv2 = ( uv2Transform * vec3( uv2, 1 ) ).xy;
#endif`,jf=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION )
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const qf=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Xf=`uniform sampler2D t2D;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	gl_FragColor = mapTexelToLinear( texColor );
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`,Yf=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Zf=`#include <envmap_common_pars_fragment>
uniform float opacity;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	vec3 vReflect = vWorldDirection;
	#include <envmap_fragment>
	gl_FragColor = envColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`,Jf=`#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
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
}`,Kf=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
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
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#endif
}`,Qf=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
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
}`,$f=`#define DISTANCE
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
#include <clipping_planes_pars_fragment>
void main () {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( 1.0 );
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,eg=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,tg=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	vec4 texColor = texture2D( tEquirect, sampleUV );
	gl_FragColor = mapTexelToLinear( texColor );
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`,ig=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <color_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,rg=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
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
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,ng=`#include <common>
#include <uv_pars_vertex>
#include <uv2_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <uv2_vertex>
	#include <color_vertex>
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
}`,ag=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <uv2_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <cube_uv_reflection_fragment>
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
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel= texture2D( lightMap, vUv2 );
		reflectedLight.indirectDiffuse += lightMapTexelToLinear( lightMapTexel ).rgb * lightMapIntensity;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,sg=`#define LAMBERT
varying vec3 vLightFront;
varying vec3 vIndirectFront;
#ifdef DOUBLE_SIDED
	varying vec3 vLightBack;
	varying vec3 vIndirectBack;
#endif
#include <common>
#include <uv_pars_vertex>
#include <uv2_pars_vertex>
#include <envmap_pars_vertex>
#include <bsdfs>
#include <lights_pars_begin>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <uv2_vertex>
	#include <color_vertex>
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
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <lights_lambert_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,og=`uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
varying vec3 vLightFront;
varying vec3 vIndirectFront;
#ifdef DOUBLE_SIDED
	varying vec3 vLightBack;
	varying vec3 vIndirectBack;
#endif
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <uv2_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <fog_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
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
	#include <specularmap_fragment>
	#include <emissivemap_fragment>
	#ifdef DOUBLE_SIDED
		reflectedLight.indirectDiffuse += ( gl_FrontFacing ) ? vIndirectFront : vIndirectBack;
	#else
		reflectedLight.indirectDiffuse += vIndirectFront;
	#endif
	#include <lightmap_fragment>
	reflectedLight.indirectDiffuse *= BRDF_Lambert( diffuseColor.rgb );
	#ifdef DOUBLE_SIDED
		reflectedLight.directDiffuse = ( gl_FrontFacing ) ? vLightFront : vLightBack;
	#else
		reflectedLight.directDiffuse = vLightFront;
	#endif
	reflectedLight.directDiffuse *= BRDF_Lambert( diffuseColor.rgb ) * getShadowMask();
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,lg=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
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
}`,cg=`#define MATCAP
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
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
		matcapColor = matcapTexelToLinear( matcapColor );
	#else
		vec4 matcapColor = vec4( 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,hg=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( TANGENTSPACE_NORMALMAP )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
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
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( TANGENTSPACE_NORMALMAP )
	vViewPosition = - mvPosition.xyz;
#endif
}`,ug=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( TANGENTSPACE_NORMALMAP )
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
}`,dg=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <uv_pars_vertex>
#include <uv2_pars_vertex>
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
	#include <uv2_vertex>
	#include <color_vertex>
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
}`,pg=`#define PHONG
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
#include <uv2_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <cube_uv_reflection_fragment>
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
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,mg=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <uv_pars_vertex>
#include <uv2_pars_vertex>
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
	#include <uv2_vertex>
	#include <color_vertex>
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
}`,fg=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULARINTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
	#ifdef USE_SPECULARCOLORMAP
		uniform sampler2D specularColorMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEENCOLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEENROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <uv2_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <bsdfs>
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
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometry.clearcoatNormal, geometry.viewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - clearcoat * Fcc ) + clearcoatSpecular * clearcoat;
	#endif
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,gg=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <uv_pars_vertex>
#include <uv2_pars_vertex>
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
	#include <uv2_vertex>
	#include <color_vertex>
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
}`,vg=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <uv2_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
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
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,yg=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <color_vertex>
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
}`,xg=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
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
	outgoingLight = diffuseColor.rgb;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,_g=`#include <common>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,wg=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
}`,bg=`uniform float rotation;
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
}`,Mg=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
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
	outgoingLight = diffuseColor.rgb;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
}`,Ce={alphamap_fragment:Kp,alphamap_pars_fragment:Qp,alphatest_fragment:$p,alphatest_pars_fragment:em,aomap_fragment:tm,aomap_pars_fragment:im,begin_vertex:rm,beginnormal_vertex:nm,bsdfs:am,bumpmap_pars_fragment:sm,clipping_planes_fragment:om,clipping_planes_pars_fragment:lm,clipping_planes_pars_vertex:cm,clipping_planes_vertex:hm,color_fragment:um,color_pars_fragment:dm,color_pars_vertex:pm,color_vertex:mm,common:fm,cube_uv_reflection_fragment:gm,defaultnormal_vertex:vm,displacementmap_pars_vertex:ym,displacementmap_vertex:xm,emissivemap_fragment:_m,emissivemap_pars_fragment:wm,encodings_fragment:bm,encodings_pars_fragment:Mm,envmap_fragment:Sm,envmap_common_pars_fragment:Tm,envmap_pars_fragment:Em,envmap_pars_vertex:Am,envmap_physical_pars_fragment:zm,envmap_vertex:Lm,fog_vertex:Cm,fog_pars_vertex:Rm,fog_fragment:Pm,fog_pars_fragment:Im,gradientmap_pars_fragment:Dm,lightmap_fragment:Nm,lightmap_pars_fragment:Bm,lights_lambert_vertex:Fm,lights_pars_begin:Om,lights_toon_fragment:Um,lights_toon_pars_fragment:Gm,lights_phong_fragment:Hm,lights_phong_pars_fragment:km,lights_physical_fragment:Vm,lights_physical_pars_fragment:Wm,lights_fragment_begin:jm,lights_fragment_maps:qm,lights_fragment_end:Xm,logdepthbuf_fragment:Ym,logdepthbuf_pars_fragment:Zm,logdepthbuf_pars_vertex:Jm,logdepthbuf_vertex:Km,map_fragment:Qm,map_pars_fragment:$m,map_particle_fragment:ef,map_particle_pars_fragment:tf,metalnessmap_fragment:rf,metalnessmap_pars_fragment:nf,morphnormal_vertex:af,morphtarget_pars_vertex:sf,morphtarget_vertex:of,normal_fragment_begin:lf,normal_fragment_maps:cf,normal_pars_fragment:hf,normal_pars_vertex:uf,normal_vertex:df,normalmap_pars_fragment:pf,clearcoat_normal_fragment_begin:mf,clearcoat_normal_fragment_maps:ff,clearcoat_pars_fragment:gf,output_fragment:vf,packing:yf,premultiplied_alpha_fragment:xf,project_vertex:_f,dithering_fragment:wf,dithering_pars_fragment:bf,roughnessmap_fragment:Mf,roughnessmap_pars_fragment:Sf,shadowmap_pars_fragment:Tf,shadowmap_pars_vertex:Ef,shadowmap_vertex:Af,shadowmask_pars_fragment:Lf,skinbase_vertex:Cf,skinning_pars_vertex:Rf,skinning_vertex:Pf,skinnormal_vertex:If,specularmap_fragment:Df,specularmap_pars_fragment:Nf,tonemapping_fragment:Bf,tonemapping_pars_fragment:Ff,transmission_fragment:Of,transmission_pars_fragment:zf,uv_pars_fragment:Uf,uv_pars_vertex:Gf,uv_vertex:Hf,uv2_pars_fragment:kf,uv2_pars_vertex:Vf,uv2_vertex:Wf,worldpos_vertex:jf,background_vert:qf,background_frag:Xf,cube_vert:Yf,cube_frag:Zf,depth_vert:Jf,depth_frag:Kf,distanceRGBA_vert:Qf,distanceRGBA_frag:$f,equirect_vert:eg,equirect_frag:tg,linedashed_vert:ig,linedashed_frag:rg,meshbasic_vert:ng,meshbasic_frag:ag,meshlambert_vert:sg,meshlambert_frag:og,meshmatcap_vert:lg,meshmatcap_frag:cg,meshnormal_vert:hg,meshnormal_frag:ug,meshphong_vert:dg,meshphong_frag:pg,meshphysical_vert:mg,meshphysical_frag:fg,meshtoon_vert:gg,meshtoon_frag:vg,points_vert:yg,points_frag:xg,shadow_vert:_g,shadow_frag:wg,sprite_vert:bg,sprite_frag:Mg},te={common:{diffuse:{value:new ie(16777215)},opacity:{value:1},map:{value:null},uvTransform:{value:new et},uv2Transform:{value:new et},alphaMap:{value:null},alphaTest:{value:0}},specularmap:{specularMap:{value:null}},envmap:{envMap:{value:null},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},maxMipLevel:{value:0}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1}},emissivemap:{emissiveMap:{value:null}},bumpmap:{bumpMap:{value:null},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalScale:{value:new j(1,1)}},displacementmap:{displacementMap:{value:null},displacementScale:{value:1},displacementBias:{value:0}},roughnessmap:{roughnessMap:{value:null}},metalnessmap:{metalnessMap:{value:null}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new ie(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotShadowMap:{value:[]},spotShadowMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new ie(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaTest:{value:0},uvTransform:{value:new et}},sprite:{diffuse:{value:new ie(16777215)},opacity:{value:1},center:{value:new j(.5,.5)},rotation:{value:0},map:{value:null},alphaMap:{value:null},alphaTest:{value:0},uvTransform:{value:new et}}},Dt={basic:{uniforms:ft([te.common,te.specularmap,te.envmap,te.aomap,te.lightmap,te.fog]),vertexShader:Ce.meshbasic_vert,fragmentShader:Ce.meshbasic_frag},lambert:{uniforms:ft([te.common,te.specularmap,te.envmap,te.aomap,te.lightmap,te.emissivemap,te.fog,te.lights,{emissive:{value:new ie(0)}}]),vertexShader:Ce.meshlambert_vert,fragmentShader:Ce.meshlambert_frag},phong:{uniforms:ft([te.common,te.specularmap,te.envmap,te.aomap,te.lightmap,te.emissivemap,te.bumpmap,te.normalmap,te.displacementmap,te.fog,te.lights,{emissive:{value:new ie(0)},specular:{value:new ie(1118481)},shininess:{value:30}}]),vertexShader:Ce.meshphong_vert,fragmentShader:Ce.meshphong_frag},standard:{uniforms:ft([te.common,te.envmap,te.aomap,te.lightmap,te.emissivemap,te.bumpmap,te.normalmap,te.displacementmap,te.roughnessmap,te.metalnessmap,te.fog,te.lights,{emissive:{value:new ie(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Ce.meshphysical_vert,fragmentShader:Ce.meshphysical_frag},toon:{uniforms:ft([te.common,te.aomap,te.lightmap,te.emissivemap,te.bumpmap,te.normalmap,te.displacementmap,te.gradientmap,te.fog,te.lights,{emissive:{value:new ie(0)}}]),vertexShader:Ce.meshtoon_vert,fragmentShader:Ce.meshtoon_frag},matcap:{uniforms:ft([te.common,te.bumpmap,te.normalmap,te.displacementmap,te.fog,{matcap:{value:null}}]),vertexShader:Ce.meshmatcap_vert,fragmentShader:Ce.meshmatcap_frag},points:{uniforms:ft([te.points,te.fog]),vertexShader:Ce.points_vert,fragmentShader:Ce.points_frag},dashed:{uniforms:ft([te.common,te.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Ce.linedashed_vert,fragmentShader:Ce.linedashed_frag},depth:{uniforms:ft([te.common,te.displacementmap]),vertexShader:Ce.depth_vert,fragmentShader:Ce.depth_frag},normal:{uniforms:ft([te.common,te.bumpmap,te.normalmap,te.displacementmap,{opacity:{value:1}}]),vertexShader:Ce.meshnormal_vert,fragmentShader:Ce.meshnormal_frag},sprite:{uniforms:ft([te.sprite,te.fog]),vertexShader:Ce.sprite_vert,fragmentShader:Ce.sprite_frag},background:{uniforms:{uvTransform:{value:new et},t2D:{value:null}},vertexShader:Ce.background_vert,fragmentShader:Ce.background_frag},cube:{uniforms:ft([te.envmap,{opacity:{value:1}}]),vertexShader:Ce.cube_vert,fragmentShader:Ce.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Ce.equirect_vert,fragmentShader:Ce.equirect_frag},distanceRGBA:{uniforms:ft([te.common,te.displacementmap,{referencePosition:{value:new b},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Ce.distanceRGBA_vert,fragmentShader:Ce.distanceRGBA_frag},shadow:{uniforms:ft([te.lights,te.fog,{color:{value:new ie(0)},opacity:{value:1}}]),vertexShader:Ce.shadow_vert,fragmentShader:Ce.shadow_frag}};Dt.physical={uniforms:ft([Dt.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatNormalScale:{value:new j(1,1)},clearcoatNormalMap:{value:null},sheen:{value:0},sheenColor:{value:new ie(0)},sheenColorMap:{value:null},sheenRoughness:{value:0},sheenRoughnessMap:{value:null},transmission:{value:0},transmissionMap:{value:null},transmissionSamplerSize:{value:new j},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},attenuationDistance:{value:0},attenuationColor:{value:new ie(0)},specularIntensity:{value:0},specularIntensityMap:{value:null},specularColor:{value:new ie(1,1,1)},specularColorMap:{value:null}}]),vertexShader:Ce.meshphysical_vert,fragmentShader:Ce.meshphysical_frag};function Sg(a,e,t,i,r){const n=new ie(0);let s=0,o,l,c=null,h=0,d=null;function u(g,v){let x=!1,f=v.isScene===!0?v.background:null;f&&f.isTexture&&(f=e.get(f));const m=a.xr,w=m.getSession&&m.getSession();w&&w.environmentBlendMode==="additive"&&(f=null),f===null?p(n,s):f&&f.isColor&&(p(f,1),x=!0),(a.autoClear||x)&&a.clear(a.autoClearColor,a.autoClearDepth,a.autoClearStencil),f&&(f.isCubeTexture||f.mapping===pr)?(l===void 0&&(l=new Qe(new ri(1,1,1),new $t({name:"BackgroundCubeMaterial",uniforms:Cr(Dt.cube.uniforms),vertexShader:Dt.cube.vertexShader,fragmentShader:Dt.cube.fragmentShader,side:Xe,depthTest:!1,depthWrite:!1,fog:!1})),l.geometry.deleteAttribute("normal"),l.geometry.deleteAttribute("uv"),l.onBeforeRender=function(y,M,A){this.matrixWorld.copyPosition(A.matrixWorld)},Object.defineProperty(l.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(l)),l.material.uniforms.envMap.value=f,l.material.uniforms.flipEnvMap.value=f.isCubeTexture&&f.isRenderTargetTexture===!1?-1:1,(c!==f||h!==f.version||d!==a.toneMapping)&&(l.material.needsUpdate=!0,c=f,h=f.version,d=a.toneMapping),g.unshift(l,l.geometry,l.material,0,0,null)):f&&f.isTexture&&(o===void 0&&(o=new Qe(new or(2,2),new $t({name:"BackgroundMaterial",uniforms:Cr(Dt.background.uniforms),vertexShader:Dt.background.vertexShader,fragmentShader:Dt.background.fragmentShader,side:Ri,depthTest:!1,depthWrite:!1,fog:!1})),o.geometry.deleteAttribute("normal"),Object.defineProperty(o.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(o)),o.material.uniforms.t2D.value=f,f.matrixAutoUpdate===!0&&f.updateMatrix(),o.material.uniforms.uvTransform.value.copy(f.matrix),(c!==f||h!==f.version||d!==a.toneMapping)&&(o.material.needsUpdate=!0,c=f,h=f.version,d=a.toneMapping),g.unshift(o,o.geometry,o.material,0,0,null))}function p(g,v){t.buffers.color.setClear(g.r,g.g,g.b,v,r)}return{getClearColor:function(){return n},setClearColor:function(g,v=1){n.set(g),s=v,p(n,s)},getClearAlpha:function(){return s},setClearAlpha:function(g){s=g,p(n,s)},render:u}}function Tg(a,e,t,i){const r=a.getParameter(34921),n=i.isWebGL2?null:e.get("OES_vertex_array_object"),s=i.isWebGL2||n!==null,o={},l=v(null);let c=l;function h(I,B,O,z,U){let $=!1;if(s){const he=g(z,O,B);c!==he&&(c=he,u(c.object)),$=x(z,U),$&&f(z,U)}else{const he=B.wireframe===!0;(c.geometry!==z.id||c.program!==O.id||c.wireframe!==he)&&(c.geometry=z.id,c.program=O.id,c.wireframe=he,$=!0)}I.isInstancedMesh===!0&&($=!0),U!==null&&t.update(U,34963),$&&(_(I,B,O,z),U!==null&&a.bindBuffer(34963,t.get(U).buffer))}function d(){return i.isWebGL2?a.createVertexArray():n.createVertexArrayOES()}function u(I){return i.isWebGL2?a.bindVertexArray(I):n.bindVertexArrayOES(I)}function p(I){return i.isWebGL2?a.deleteVertexArray(I):n.deleteVertexArrayOES(I)}function g(I,B,O){const z=O.wireframe===!0;let U=o[I.id];U===void 0&&(U={},o[I.id]=U);let $=U[B.id];$===void 0&&($={},U[B.id]=$);let he=$[z];return he===void 0&&(he=v(d()),$[z]=he),he}function v(I){const B=[],O=[],z=[];for(let U=0;U<r;U++)B[U]=0,O[U]=0,z[U]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:B,enabledAttributes:O,attributeDivisors:z,object:I,attributes:{},index:null}}function x(I,B){const O=c.attributes,z=I.attributes;let U=0;for(const $ in z){const he=O[$],de=z[$];if(he===void 0||he.attribute!==de||he.data!==de.data)return!0;U++}return c.attributesNum!==U||c.index!==B}function f(I,B){const O={},z=I.attributes;let U=0;for(const $ in z){const he=z[$],de={};de.attribute=he,he.data&&(de.data=he.data),O[$]=de,U++}c.attributes=O,c.attributesNum=U,c.index=B}function m(){const I=c.newAttributes;for(let B=0,O=I.length;B<O;B++)I[B]=0}function w(I){y(I,0)}function y(I,B){const O=c.newAttributes,z=c.enabledAttributes,U=c.attributeDivisors;O[I]=1,z[I]===0&&(a.enableVertexAttribArray(I),z[I]=1),U[I]!==B&&((i.isWebGL2?a:e.get("ANGLE_instanced_arrays"))[i.isWebGL2?"vertexAttribDivisor":"vertexAttribDivisorANGLE"](I,B),U[I]=B)}function M(){const I=c.newAttributes,B=c.enabledAttributes;for(let O=0,z=B.length;O<z;O++)B[O]!==I[O]&&(a.disableVertexAttribArray(O),B[O]=0)}function A(I,B,O,z,U,$){i.isWebGL2===!0&&(O===5124||O===5125)?a.vertexAttribIPointer(I,B,O,U,$):a.vertexAttribPointer(I,B,O,z,U,$)}function _(I,B,O,z){if(i.isWebGL2===!1&&(I.isInstancedMesh||z.isInstancedBufferGeometry)&&e.get("ANGLE_instanced_arrays")===null)return;m();const U=z.attributes,$=O.getAttributes(),he=B.defaultAttributeValues;for(const de in $){const se=$[de];if(se.location>=0){let Te=U[de];if(Te===void 0&&(de==="instanceMatrix"&&I.instanceMatrix&&(Te=I.instanceMatrix),de==="instanceColor"&&I.instanceColor&&(Te=I.instanceColor)),Te!==void 0){const Z=Te.normalized,Q=Te.itemSize,pe=t.get(Te);if(pe===void 0)continue;const G=pe.buffer,be=pe.type,Ee=pe.bytesPerElement;if(Te.isInterleavedBufferAttribute){const re=Te.data,fe=re.stride,X=Te.offset;if(re&&re.isInstancedInterleavedBuffer){for(let V=0;V<se.locationSize;V++)y(se.location+V,re.meshPerAttribute);I.isInstancedMesh!==!0&&z._maxInstanceCount===void 0&&(z._maxInstanceCount=re.meshPerAttribute*re.count)}else for(let V=0;V<se.locationSize;V++)w(se.location+V);a.bindBuffer(34962,G);for(let V=0;V<se.locationSize;V++)A(se.location+V,Q/se.locationSize,be,Z,fe*Ee,(X+Q/se.locationSize*V)*Ee)}else{if(Te.isInstancedBufferAttribute){for(let re=0;re<se.locationSize;re++)y(se.location+re,Te.meshPerAttribute);I.isInstancedMesh!==!0&&z._maxInstanceCount===void 0&&(z._maxInstanceCount=Te.meshPerAttribute*Te.count)}else for(let re=0;re<se.locationSize;re++)w(se.location+re);a.bindBuffer(34962,G);for(let re=0;re<se.locationSize;re++)A(se.location+re,Q/se.locationSize,be,Z,Q*Ee,Q/se.locationSize*re*Ee)}}else if(he!==void 0){const Z=he[de];if(Z!==void 0)switch(Z.length){case 2:a.vertexAttrib2fv(se.location,Z);break;case 3:a.vertexAttrib3fv(se.location,Z);break;case 4:a.vertexAttrib4fv(se.location,Z);break;default:a.vertexAttrib1fv(se.location,Z)}}}}M()}function L(){C();for(const I in o){const B=o[I];for(const O in B){const z=B[O];for(const U in z)p(z[U].object),delete z[U];delete B[O]}delete o[I]}}function N(I){if(o[I.id]===void 0)return;const B=o[I.id];for(const O in B){const z=B[O];for(const U in z)p(z[U].object),delete z[U];delete B[O]}delete o[I.id]}function R(I){for(const B in o){const O=o[B];if(O[I.id]===void 0)continue;const z=O[I.id];for(const U in z)p(z[U].object),delete z[U];delete O[I.id]}}function C(){Y(),c!==l&&(c=l,u(c.object))}function Y(){l.geometry=null,l.program=null,l.wireframe=!1}return{setup:h,reset:C,resetDefaultState:Y,dispose:L,releaseStatesOfGeometry:N,releaseStatesOfProgram:R,initAttributes:m,enableAttribute:w,disableUnusedAttributes:M}}function Eg(a,e,t,i){const r=i.isWebGL2;let n;function s(c){n=c}function o(c,h){a.drawArrays(n,c,h),t.update(h,n,1)}function l(c,h,d){if(d===0)return;let u,p;if(r)u=a,p="drawArraysInstanced";else if(u=e.get("ANGLE_instanced_arrays"),p="drawArraysInstancedANGLE",u===null){console.error("THREE.WebGLBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}u[p](n,c,h,d),t.update(h,n,d)}this.setMode=s,this.render=o,this.renderInstances=l}function Ag(a,e,t){let i;function r(){if(i!==void 0)return i;if(e.has("EXT_texture_filter_anisotropic")===!0){const _=e.get("EXT_texture_filter_anisotropic");i=a.getParameter(_.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else i=0;return i}function n(_){if(_==="highp"){if(a.getShaderPrecisionFormat(35633,36338).precision>0&&a.getShaderPrecisionFormat(35632,36338).precision>0)return"highp";_="mediump"}return _==="mediump"&&a.getShaderPrecisionFormat(35633,36337).precision>0&&a.getShaderPrecisionFormat(35632,36337).precision>0?"mediump":"lowp"}const s=typeof WebGL2RenderingContext<"u"&&a instanceof WebGL2RenderingContext||typeof WebGL2ComputeRenderingContext<"u"&&a instanceof WebGL2ComputeRenderingContext;let o=t.precision!==void 0?t.precision:"highp";const l=n(o);l!==o&&(console.warn("THREE.WebGLRenderer:",o,"not supported, using",l,"instead."),o=l);const c=s||e.has("WEBGL_draw_buffers"),h=t.logarithmicDepthBuffer===!0,d=a.getParameter(34930),u=a.getParameter(35660),p=a.getParameter(3379),g=a.getParameter(34076),v=a.getParameter(34921),x=a.getParameter(36347),f=a.getParameter(36348),m=a.getParameter(36349),w=u>0,y=s||e.has("OES_texture_float"),M=w&&y,A=s?a.getParameter(36183):0;return{isWebGL2:s,drawBuffers:c,getMaxAnisotropy:r,getMaxPrecision:n,precision:o,logarithmicDepthBuffer:h,maxTextures:d,maxVertexTextures:u,maxTextureSize:p,maxCubemapSize:g,maxAttributes:v,maxVertexUniforms:x,maxVaryings:f,maxFragmentUniforms:m,vertexTextures:w,floatFragmentTextures:y,floatVertexTextures:M,maxSamples:A}}function Lg(a){const e=this;let t=null,i=0,r=!1,n=!1;const s=new Ot,o=new et,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(d,u,p){const g=d.length!==0||u||i!==0||r;return r=u,t=h(d,p,0),i=d.length,g},this.beginShadows=function(){n=!0,h(null)},this.endShadows=function(){n=!1,c()},this.setState=function(d,u,p){const g=d.clippingPlanes,v=d.clipIntersection,x=d.clipShadows,f=a.get(d);if(!r||g===null||g.length===0||n&&!x)n?h(null):c();else{const m=n?0:i,w=m*4;let y=f.clippingState||null;l.value=y,y=h(g,u,w,p);for(let M=0;M!==w;++M)y[M]=t[M];f.clippingState=y,this.numIntersection=v?this.numPlanes:0,this.numPlanes+=m}};function c(){l.value!==t&&(l.value=t,l.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function h(d,u,p,g){const v=d!==null?d.length:0;let x=null;if(v!==0){if(x=l.value,g!==!0||x===null){const f=p+v*4,m=u.matrixWorldInverse;o.getNormalMatrix(m),(x===null||x.length<f)&&(x=new Float32Array(f));for(let w=0,y=p;w!==v;++w,y+=4)s.copy(d[w]).applyMatrix4(m,o),s.normal.toArray(x,y),x[y+3]=s.constant}l.value=x,l.needsUpdate=!0}return e.numPlanes=v,e.numIntersection=0,x}}function Cg(a){let e=new WeakMap;function t(s,o){return o===sn?s.mapping=Di:o===on&&(s.mapping=Ni),s}function i(s){if(s&&s.isTexture&&s.isRenderTargetTexture===!1){const o=s.mapping;if(o===sn||o===on)if(e.has(s)){const l=e.get(s).texture;return t(l,s.mapping)}else{const l=s.image;if(l&&l.height>0){const c=a.getRenderTarget(),h=new Ta(l.height/2);return h.fromEquirectangularTexture(a,s),e.set(s,h),a.setRenderTarget(c),s.addEventListener("dispose",r),t(h.texture,s.mapping)}else return null}}return s}function r(s){const o=s.target;o.removeEventListener("dispose",r);const l=e.get(o);l!==void 0&&(e.delete(o),l.dispose())}function n(){e=new WeakMap}return{get:i,dispose:n}}class Sn extends bn{constructor(e=-1,t=1,i=1,r=-1,n=.1,s=2e3){super(),this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=i,this.bottom=r,this.near=n,this.far=s,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,i,r,n,s){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=r,this.view.width=n,this.view.height=s,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,r=(this.top+this.bottom)/2;let n=i-e,s=i+e,o=r+t,l=r-t;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;n+=c*this.view.offsetX,s=n+c*this.view.width,o-=h*this.view.offsetY,l=o-h*this.view.height}this.projectionMatrix.makeOrthographic(n,s,o,l,this.near,this.far),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}Sn.prototype.isOrthographicCamera=!0;class Nr extends $t{constructor(e){super(e),this.type="RawShaderMaterial"}}Nr.prototype.isRawShaderMaterial=!0;const Br=4,yi=8,zt=Math.pow(2,yi),Sh=[.125,.215,.35,.446,.526,.582],Th=yi-Br+1+Sh.length,Fr=20,xi={[ct]:0,[oi]:1,[ia]:2,[Fs]:3,[Os]:4,[zs]:5,[ta]:6},mo=new Sn,{_lodPlanes:Tn,_sizeLods:Eh,_sigmas:Aa}=Pg(),Ah=new ie;let fo=null;const qi=(1+Math.sqrt(5))/2,Or=1/qi,Lh=[new b(1,1,1),new b(-1,1,1),new b(1,1,-1),new b(-1,1,-1),new b(0,qi,Or),new b(0,qi,-Or),new b(Or,0,qi),new b(-Or,0,qi),new b(qi,Or,0),new b(-qi,Or,0)];class Ch{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._blurMaterial=Ig(Fr),this._equirectShader=null,this._cubemapShader=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,i=.1,r=100){fo=this._renderer.getRenderTarget();const n=this._allocateTargets();return this._sceneToCubeUV(e,i,r,n),t>0&&this._blur(n,0,0,t),this._applyPMREM(n),this._cleanup(n),n}fromEquirectangular(e){return this._fromTexture(e)}fromCubemap(e){return this._fromTexture(e)}compileCubemapShader(){this._cubemapShader===null&&(this._cubemapShader=Ih(),this._compileMaterial(this._cubemapShader))}compileEquirectangularShader(){this._equirectShader===null&&(this._equirectShader=Ph(),this._compileMaterial(this._equirectShader))}dispose(){this._blurMaterial.dispose(),this._cubemapShader!==null&&this._cubemapShader.dispose(),this._equirectShader!==null&&this._equirectShader.dispose();for(let e=0;e<Tn.length;e++)Tn[e].dispose()}_cleanup(e){this._pingPongRenderTarget.dispose(),this._renderer.setRenderTarget(fo),e.scissorTest=!1,La(e,0,0,e.width,e.height)}_fromTexture(e){fo=this._renderer.getRenderTarget();const t=this._allocateTargets(e);return this._textureToCubeUV(e,t),this._applyPMREM(t),this._cleanup(t),t}_allocateTargets(e){const t={magFilter:Ke,minFilter:Ke,generateMipmaps:!1,type:qt,format:ac,encoding:Rg(e)?e.encoding:ia,depthBuffer:!1},i=Rh(t);return i.depthBuffer=!e,this._pingPongRenderTarget=Rh(t),i}_compileMaterial(e){const t=new Qe(Tn[0],e);this._renderer.compile(t,mo)}_sceneToCubeUV(e,t,i,r){const n=new at(90,1,t,i),s=[1,-1,1,1,1,1],o=[1,1,1,-1,-1,-1],l=this._renderer,c=l.autoClear,h=l.outputEncoding,d=l.toneMapping;l.getClearColor(Ah),l.toneMapping=si,l.outputEncoding=ct,l.autoClear=!1;const u=new Qt({name:"PMREM.Background",side:Xe,depthWrite:!1,depthTest:!1}),p=new Qe(new ri,u);let g=!1;const v=e.background;v?v.isColor&&(u.color.copy(v),e.background=null,g=!0):(u.color.copy(Ah),g=!0);for(let x=0;x<6;x++){const f=x%3;f==0?(n.up.set(0,s[x],0),n.lookAt(o[x],0,0)):f==1?(n.up.set(0,0,s[x]),n.lookAt(0,o[x],0)):(n.up.set(0,s[x],0),n.lookAt(0,0,o[x])),La(r,f*zt,x>2?zt:0,zt,zt),l.setRenderTarget(r),g&&l.render(p,n),l.render(e,n)}p.geometry.dispose(),p.material.dispose(),l.toneMapping=d,l.outputEncoding=h,l.autoClear=c,e.background=v}_setEncoding(e,t){this._renderer.capabilities.isWebGL2===!0&&t.format===lt&&t.type===qt&&t.encoding===oi?e.value=xi[ct]:e.value=xi[t.encoding]}_textureToCubeUV(e,t){const i=this._renderer,r=e.mapping===Di||e.mapping===Ni;r?this._cubemapShader==null&&(this._cubemapShader=Ih()):this._equirectShader==null&&(this._equirectShader=Ph());const n=r?this._cubemapShader:this._equirectShader,s=new Qe(Tn[0],n),o=n.uniforms;o.envMap.value=e,r||o.texelSize.value.set(1/e.image.width,1/e.image.height),this._setEncoding(o.inputEncoding,e),this._setEncoding(o.outputEncoding,t.texture),La(t,0,0,3*zt,2*zt),i.setRenderTarget(t),i.render(s,mo)}_applyPMREM(e){const t=this._renderer,i=t.autoClear;t.autoClear=!1;for(let r=1;r<Th;r++){const n=Math.sqrt(Aa[r]*Aa[r]-Aa[r-1]*Aa[r-1]),s=Lh[(r-1)%Lh.length];this._blur(e,r-1,r,n,s)}t.autoClear=i}_blur(e,t,i,r,n){const s=this._pingPongRenderTarget;this._halfBlur(e,s,t,i,r,"latitudinal",n),this._halfBlur(s,e,i,i,r,"longitudinal",n)}_halfBlur(e,t,i,r,n,s,o){const l=this._renderer,c=this._blurMaterial;s!=="latitudinal"&&s!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const h=3,d=new Qe(Tn[r],c),u=c.uniforms,p=Eh[i]-1,g=isFinite(n)?Math.PI/(2*p):2*Math.PI/(2*Fr-1),v=n/g,x=isFinite(n)?1+Math.floor(h*v):Fr;x>Fr&&console.warn(`sigmaRadians, ${n}, is too large and will clip, as it requested ${x} samples when the maximum is set to ${Fr}`);const f=[];let m=0;for(let A=0;A<Fr;++A){const _=A/v,L=Math.exp(-_*_/2);f.push(L),A==0?m+=L:A<x&&(m+=2*L)}for(let A=0;A<f.length;A++)f[A]=f[A]/m;u.envMap.value=e.texture,u.samples.value=x,u.weights.value=f,u.latitudinal.value=s==="latitudinal",o&&(u.poleAxis.value=o),u.dTheta.value=g,u.mipInt.value=yi-i,this._setEncoding(u.inputEncoding,e.texture),this._setEncoding(u.outputEncoding,e.texture);const w=Eh[r],y=3*Math.max(0,zt-2*w),M=(r===0?0:2*zt)+2*w*(r>yi-Br?r-yi+Br:0);La(t,y,M,3*w,2*w),l.setRenderTarget(t),l.render(d,mo)}}function Rg(a){return a===void 0||a.type!==qt?!1:a.encoding===ct||a.encoding===oi||a.encoding===ta}function Pg(){const a=[],e=[],t=[];let i=yi;for(let r=0;r<Th;r++){const n=Math.pow(2,i);e.push(n);let s=1/n;r>yi-Br?s=Sh[r-yi+Br-1]:r==0&&(s=0),t.push(s);const o=1/(n-1),l=-o/2,c=1+o/2,h=[l,l,c,l,c,c,l,l,c,c,l,c],d=6,u=6,p=3,g=2,v=1,x=new Float32Array(p*u*d),f=new Float32Array(g*u*d),m=new Float32Array(v*u*d);for(let y=0;y<d;y++){const M=y%3*2/3-1,A=y>2?0:-1,_=[M,A,0,M+2/3,A,0,M+2/3,A+1,0,M,A,0,M+2/3,A+1,0,M,A+1,0];x.set(_,p*u*y),f.set(h,g*u*y);const L=[y,y,y,y,y,y];m.set(L,v*u*y)}const w=new we;w.setAttribute("position",new De(x,p)),w.setAttribute("uv",new De(f,g)),w.setAttribute("faceIndex",new De(m,v)),a.push(w),i>Br&&i--}return{_lodPlanes:a,_sizeLods:e,_sigmas:t}}function Rh(a){const e=new Ct(3*zt,3*zt,a);return e.texture.mapping=pr,e.texture.name="PMREM.cubeUv",e.scissorTest=!0,e}function La(a,e,t,i,r){a.viewport.set(e,t,i,r),a.scissor.set(e,t,i,r)}function Ig(a){const e=new Float32Array(a),t=new b(0,1,0);return new Nr({name:"SphericalGaussianBlur",defines:{n:a},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:e},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:t},inputEncoding:{value:xi[ct]},outputEncoding:{value:xi[ct]}},vertexShader:go(),fragmentShader:`

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

			${vo()}

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

				gl_FragColor = linearToOutputTexel( gl_FragColor );

			}
		`,blending:jt,depthTest:!1,depthWrite:!1})}function Ph(){const a=new j(1,1);return new Nr({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null},texelSize:{value:a},inputEncoding:{value:xi[ct]},outputEncoding:{value:xi[ct]}},vertexShader:go(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform vec2 texelSize;

			${vo()}

			#include <common>

			void main() {

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				vec2 f = fract( uv / texelSize - 0.5 );
				uv -= f * texelSize;
				vec3 tl = envMapTexelToLinear( texture2D ( envMap, uv ) ).rgb;
				uv.x += texelSize.x;
				vec3 tr = envMapTexelToLinear( texture2D ( envMap, uv ) ).rgb;
				uv.y += texelSize.y;
				vec3 br = envMapTexelToLinear( texture2D ( envMap, uv ) ).rgb;
				uv.x -= texelSize.x;
				vec3 bl = envMapTexelToLinear( texture2D ( envMap, uv ) ).rgb;

				vec3 tm = mix( tl, tr, f.x );
				vec3 bm = mix( bl, br, f.x );
				gl_FragColor.rgb = mix( tm, bm, f.y );

				gl_FragColor = linearToOutputTexel( gl_FragColor );

			}
		`,blending:jt,depthTest:!1,depthWrite:!1})}function Ih(){return new Nr({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},inputEncoding:{value:xi[ct]},outputEncoding:{value:xi[ct]}},vertexShader:go(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			${vo()}

			void main() {

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb = envMapTexelToLinear( textureCube( envMap, vec3( - vOutputDirection.x, vOutputDirection.yz ) ) ).rgb;
				gl_FragColor = linearToOutputTexel( gl_FragColor );

			}
		`,blending:jt,depthTest:!1,depthWrite:!1})}function go(){return`

		precision mediump float;
		precision mediump int;

		attribute vec3 position;
		attribute vec2 uv;
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
	`}function vo(){return`

		uniform int inputEncoding;
		uniform int outputEncoding;

		#include <encodings_pars_fragment>

		vec4 inputTexelToLinear( vec4 value ) {

			if ( inputEncoding == 0 ) {

				return value;

			} else if ( inputEncoding == 1 ) {

				return sRGBToLinear( value );

			} else if ( inputEncoding == 2 ) {

				return RGBEToLinear( value );

			} else if ( inputEncoding == 3 ) {

				return RGBMToLinear( value, 7.0 );

			} else if ( inputEncoding == 4 ) {

				return RGBMToLinear( value, 16.0 );

			} else if ( inputEncoding == 5 ) {

				return RGBDToLinear( value, 256.0 );

			} else {

				return GammaToLinear( value, 2.2 );

			}

		}

		vec4 linearToOutputTexel( vec4 value ) {

			if ( outputEncoding == 0 ) {

				return value;

			} else if ( outputEncoding == 1 ) {

				return LinearTosRGB( value );

			} else if ( outputEncoding == 2 ) {

				return LinearToRGBE( value );

			} else if ( outputEncoding == 3 ) {

				return LinearToRGBM( value, 7.0 );

			} else if ( outputEncoding == 4 ) {

				return LinearToRGBM( value, 16.0 );

			} else if ( outputEncoding == 5 ) {

				return LinearToRGBD( value, 256.0 );

			} else {

				return LinearToGamma( value, 2.2 );

			}

		}

		vec4 envMapTexelToLinear( vec4 color ) {

			return inputTexelToLinear( color );

		}
	`}function Dg(a){let e=new WeakMap,t=null;function i(o){if(o&&o.isTexture&&o.isRenderTargetTexture===!1){const l=o.mapping,c=l===sn||l===on,h=l===Di||l===Ni;if(c||h){if(e.has(o))return e.get(o).texture;{const d=o.image;if(c&&d&&d.height>0||h&&d&&r(d)){const u=a.getRenderTarget();t===null&&(t=new Ch(a));const p=c?t.fromEquirectangular(o):t.fromCubemap(o);return e.set(o,p),a.setRenderTarget(u),o.addEventListener("dispose",n),p.texture}else return null}}}return o}function r(o){let l=0;const c=6;for(let h=0;h<c;h++)o[h]!==void 0&&l++;return l===c}function n(o){const l=o.target;l.removeEventListener("dispose",n);const c=e.get(l);c!==void 0&&(e.delete(l),c.dispose())}function s(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:i,dispose:s}}function Ng(a){const e={};function t(i){if(e[i]!==void 0)return e[i];let r;switch(i){case"WEBGL_depth_texture":r=a.getExtension("WEBGL_depth_texture")||a.getExtension("MOZ_WEBGL_depth_texture")||a.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":r=a.getExtension("EXT_texture_filter_anisotropic")||a.getExtension("MOZ_EXT_texture_filter_anisotropic")||a.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":r=a.getExtension("WEBGL_compressed_texture_s3tc")||a.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||a.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":r=a.getExtension("WEBGL_compressed_texture_pvrtc")||a.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:r=a.getExtension(i)}return e[i]=r,r}return{has:function(i){return t(i)!==null},init:function(i){i.isWebGL2?t("EXT_color_buffer_float"):(t("WEBGL_depth_texture"),t("OES_texture_float"),t("OES_texture_half_float"),t("OES_texture_half_float_linear"),t("OES_standard_derivatives"),t("OES_element_index_uint"),t("OES_vertex_array_object"),t("ANGLE_instanced_arrays")),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float")},get:function(i){const r=t(i);return r===null&&console.warn("THREE.WebGLRenderer: "+i+" extension not supported."),r}}}function Bg(a,e,t,i){const r={},n=new WeakMap;function s(d){const u=d.target;u.index!==null&&e.remove(u.index);for(const g in u.attributes)e.remove(u.attributes[g]);u.removeEventListener("dispose",s),delete r[u.id];const p=n.get(u);p&&(e.remove(p),n.delete(u)),i.releaseStatesOfGeometry(u),u.isInstancedBufferGeometry===!0&&delete u._maxInstanceCount,t.memory.geometries--}function o(d,u){return r[u.id]===!0||(u.addEventListener("dispose",s),r[u.id]=!0,t.memory.geometries++),u}function l(d){const u=d.attributes;for(const g in u)e.update(u[g],34962);const p=d.morphAttributes;for(const g in p){const v=p[g];for(let x=0,f=v.length;x<f;x++)e.update(v[x],34962)}}function c(d){const u=[],p=d.index,g=d.attributes.position;let v=0;if(p!==null){const m=p.array;v=p.version;for(let w=0,y=m.length;w<y;w+=3){const M=m[w+0],A=m[w+1],_=m[w+2];u.push(M,A,A,_,_,M)}}else{const m=g.array;v=g.version;for(let w=0,y=m.length/3-1;w<y;w+=3){const M=w+0,A=w+1,_=w+2;u.push(M,A,A,_,_,M)}}const x=new(eh(u)>65535?fa:ma)(u,1);x.version=v;const f=n.get(d);f&&e.remove(f),n.set(d,x)}function h(d){const u=n.get(d);if(u){const p=d.index;p!==null&&u.version<p.version&&c(d)}else c(d);return n.get(d)}return{get:o,update:l,getWireframeAttribute:h}}function Fg(a,e,t,i){const r=i.isWebGL2;let n;function s(u){n=u}let o,l;function c(u){o=u.type,l=u.bytesPerElement}function h(u,p){a.drawElements(n,p,o,u*l),t.update(p,n,1)}function d(u,p,g){if(g===0)return;let v,x;if(r)v=a,x="drawElementsInstanced";else if(v=e.get("ANGLE_instanced_arrays"),x="drawElementsInstancedANGLE",v===null){console.error("THREE.WebGLIndexedBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}v[x](n,p,o,u*l,g),t.update(p,n,g)}this.setMode=s,this.setIndex=c,this.render=h,this.renderInstances=d}function Og(a){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function i(n,s,o){switch(t.calls++,s){case 4:t.triangles+=o*(n/3);break;case 1:t.lines+=o*(n/2);break;case 3:t.lines+=o*(n-1);break;case 2:t.lines+=o*n;break;case 0:t.points+=o*n;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",s);break}}function r(){t.frame++,t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:r,update:i}}class Ca extends tt{constructor(e=null,t=1,i=1,r=1){super(null),this.image={data:e,width:t,height:i,depth:r},this.magFilter=Ke,this.minFilter=Ke,this.wrapR=ot,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.needsUpdate=!0}}Ca.prototype.isDataTexture2DArray=!0;function zg(a,e){return a[0]-e[0]}function Ug(a,e){return Math.abs(e[1])-Math.abs(a[1])}function Dh(a,e){let t=1;const i=e.isInterleavedBufferAttribute?e.data.array:e.array;i instanceof Int8Array?t=127:i instanceof Int16Array?t=32767:i instanceof Int32Array?t=2147483647:console.error("THREE.WebGLMorphtargets: Unsupported morph attribute data type: ",i),a.divideScalar(t)}function Gg(a,e,t){const i={},r=new Float32Array(8),n=new WeakMap,s=new b,o=[];for(let c=0;c<8;c++)o[c]=[c,0];function l(c,h,d,u){const p=c.morphTargetInfluences;if(e.isWebGL2===!0){const g=h.morphAttributes.position.length;let v=n.get(h);if(v===void 0||v.count!==g){v!==void 0&&v.texture.dispose();const m=h.morphAttributes.normal!==void 0,w=h.morphAttributes.position,y=h.morphAttributes.normal||[],M=h.attributes.position.count,A=m===!0?2:1;let _=M*A,L=1;_>e.maxTextureSize&&(L=Math.ceil(_/e.maxTextureSize),_=e.maxTextureSize);const N=new Float32Array(_*L*4*g),R=new Ca(N,_,L,g);R.format=lt,R.type=Ft;const C=A*4;for(let Y=0;Y<g;Y++){const I=w[Y],B=y[Y],O=_*L*4*Y;for(let z=0;z<I.count;z++){s.fromBufferAttribute(I,z),I.normalized===!0&&Dh(s,I);const U=z*C;N[O+U+0]=s.x,N[O+U+1]=s.y,N[O+U+2]=s.z,N[O+U+3]=0,m===!0&&(s.fromBufferAttribute(B,z),B.normalized===!0&&Dh(s,B),N[O+U+4]=s.x,N[O+U+5]=s.y,N[O+U+6]=s.z,N[O+U+7]=0)}}v={count:g,texture:R,size:new j(_,L)},n.set(h,v)}let x=0;for(let m=0;m<p.length;m++)x+=p[m];const f=h.morphTargetsRelative?1:1-x;u.getUniforms().setValue(a,"morphTargetBaseInfluence",f),u.getUniforms().setValue(a,"morphTargetInfluences",p),u.getUniforms().setValue(a,"morphTargetsTexture",v.texture,t),u.getUniforms().setValue(a,"morphTargetsTextureSize",v.size)}else{const g=p===void 0?0:p.length;let v=i[h.id];if(v===void 0||v.length!==g){v=[];for(let y=0;y<g;y++)v[y]=[y,0];i[h.id]=v}for(let y=0;y<g;y++){const M=v[y];M[0]=y,M[1]=p[y]}v.sort(Ug);for(let y=0;y<8;y++)y<g&&v[y][1]?(o[y][0]=v[y][0],o[y][1]=v[y][1]):(o[y][0]=Number.MAX_SAFE_INTEGER,o[y][1]=0);o.sort(zg);const x=h.morphAttributes.position,f=h.morphAttributes.normal;let m=0;for(let y=0;y<8;y++){const M=o[y],A=M[0],_=M[1];A!==Number.MAX_SAFE_INTEGER&&_?(x&&h.getAttribute("morphTarget"+y)!==x[A]&&h.setAttribute("morphTarget"+y,x[A]),f&&h.getAttribute("morphNormal"+y)!==f[A]&&h.setAttribute("morphNormal"+y,f[A]),r[y]=_,m+=_):(x&&h.hasAttribute("morphTarget"+y)===!0&&h.deleteAttribute("morphTarget"+y),f&&h.hasAttribute("morphNormal"+y)===!0&&h.deleteAttribute("morphNormal"+y),r[y]=0)}const w=h.morphTargetsRelative?1:1-m;u.getUniforms().setValue(a,"morphTargetBaseInfluence",w),u.getUniforms().setValue(a,"morphTargetInfluences",r)}}return{update:l}}function Hg(a,e,t,i){let r=new WeakMap;function n(l){const c=i.render.frame,h=l.geometry,d=e.get(l,h);return r.get(d)!==c&&(e.update(d),r.set(d,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",o)===!1&&l.addEventListener("dispose",o),t.update(l.instanceMatrix,34962),l.instanceColor!==null&&t.update(l.instanceColor,34962)),d}function s(){r=new WeakMap}function o(l){const c=l.target;c.removeEventListener("dispose",o),t.remove(c.instanceMatrix),c.instanceColor!==null&&t.remove(c.instanceColor)}return{update:n,dispose:s}}class yo extends tt{constructor(e=null,t=1,i=1,r=1){super(null),this.image={data:e,width:t,height:i,depth:r},this.magFilter=Ke,this.minFilter=Ke,this.wrapR=ot,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.needsUpdate=!0}}yo.prototype.isDataTexture3D=!0;const Nh=new tt,kg=new Ca,Vg=new yo,Bh=new Ir,Fh=[],Oh=[],zh=new Float32Array(16),Uh=new Float32Array(9),Gh=new Float32Array(4);function zr(a,e,t){const i=a[0];if(i<=0||i>0)return a;const r=e*t;let n=Fh[r];if(n===void 0&&(n=new Float32Array(r),Fh[r]=n),e!==0){i.toArray(n,0);for(let s=1,o=0;s!==e;++s)o+=t,a[s].toArray(n,o)}return n}function vt(a,e){if(a.length!==e.length)return!1;for(let t=0,i=a.length;t<i;t++)if(a[t]!==e[t])return!1;return!0}function gt(a,e){for(let t=0,i=e.length;t<i;t++)a[t]=e[t]}function Hh(a,e){let t=Oh[e];t===void 0&&(t=new Int32Array(e),Oh[e]=t);for(let i=0;i!==e;++i)t[i]=a.allocateTextureUnit();return t}function Wg(a,e){const t=this.cache;t[0]!==e&&(a.uniform1f(this.addr,e),t[0]=e)}function jg(a,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(a.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(vt(t,e))return;a.uniform2fv(this.addr,e),gt(t,e)}}function qg(a,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(a.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(a.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(vt(t,e))return;a.uniform3fv(this.addr,e),gt(t,e)}}function Xg(a,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(a.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(vt(t,e))return;a.uniform4fv(this.addr,e),gt(t,e)}}function Yg(a,e){const t=this.cache,i=e.elements;if(i===void 0){if(vt(t,e))return;a.uniformMatrix2fv(this.addr,!1,e),gt(t,e)}else{if(vt(t,i))return;Gh.set(i),a.uniformMatrix2fv(this.addr,!1,Gh),gt(t,i)}}function Zg(a,e){const t=this.cache,i=e.elements;if(i===void 0){if(vt(t,e))return;a.uniformMatrix3fv(this.addr,!1,e),gt(t,e)}else{if(vt(t,i))return;Uh.set(i),a.uniformMatrix3fv(this.addr,!1,Uh),gt(t,i)}}function Jg(a,e){const t=this.cache,i=e.elements;if(i===void 0){if(vt(t,e))return;a.uniformMatrix4fv(this.addr,!1,e),gt(t,e)}else{if(vt(t,i))return;zh.set(i),a.uniformMatrix4fv(this.addr,!1,zh),gt(t,i)}}function Kg(a,e){const t=this.cache;t[0]!==e&&(a.uniform1i(this.addr,e),t[0]=e)}function Qg(a,e){const t=this.cache;vt(t,e)||(a.uniform2iv(this.addr,e),gt(t,e))}function $g(a,e){const t=this.cache;vt(t,e)||(a.uniform3iv(this.addr,e),gt(t,e))}function ev(a,e){const t=this.cache;vt(t,e)||(a.uniform4iv(this.addr,e),gt(t,e))}function tv(a,e){const t=this.cache;t[0]!==e&&(a.uniform1ui(this.addr,e),t[0]=e)}function iv(a,e){const t=this.cache;vt(t,e)||(a.uniform2uiv(this.addr,e),gt(t,e))}function rv(a,e){const t=this.cache;vt(t,e)||(a.uniform3uiv(this.addr,e),gt(t,e))}function nv(a,e){const t=this.cache;vt(t,e)||(a.uniform4uiv(this.addr,e),gt(t,e))}function av(a,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(a.uniform1i(this.addr,r),i[0]=r),t.safeSetTexture2D(e||Nh,r)}function sv(a,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(a.uniform1i(this.addr,r),i[0]=r),t.setTexture3D(e||Vg,r)}function ov(a,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(a.uniform1i(this.addr,r),i[0]=r),t.safeSetTextureCube(e||Bh,r)}function lv(a,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(a.uniform1i(this.addr,r),i[0]=r),t.setTexture2DArray(e||kg,r)}function cv(a){switch(a){case 5126:return Wg;case 35664:return jg;case 35665:return qg;case 35666:return Xg;case 35674:return Yg;case 35675:return Zg;case 35676:return Jg;case 5124:case 35670:return Kg;case 35667:case 35671:return Qg;case 35668:case 35672:return $g;case 35669:case 35673:return ev;case 5125:return tv;case 36294:return iv;case 36295:return rv;case 36296:return nv;case 35678:case 36198:case 36298:case 36306:case 35682:return av;case 35679:case 36299:case 36307:return sv;case 35680:case 36300:case 36308:case 36293:return ov;case 36289:case 36303:case 36311:case 36292:return lv}}function hv(a,e){a.uniform1fv(this.addr,e)}function uv(a,e){const t=zr(e,this.size,2);a.uniform2fv(this.addr,t)}function dv(a,e){const t=zr(e,this.size,3);a.uniform3fv(this.addr,t)}function pv(a,e){const t=zr(e,this.size,4);a.uniform4fv(this.addr,t)}function mv(a,e){const t=zr(e,this.size,4);a.uniformMatrix2fv(this.addr,!1,t)}function fv(a,e){const t=zr(e,this.size,9);a.uniformMatrix3fv(this.addr,!1,t)}function gv(a,e){const t=zr(e,this.size,16);a.uniformMatrix4fv(this.addr,!1,t)}function vv(a,e){a.uniform1iv(this.addr,e)}function yv(a,e){a.uniform2iv(this.addr,e)}function xv(a,e){a.uniform3iv(this.addr,e)}function _v(a,e){a.uniform4iv(this.addr,e)}function wv(a,e){a.uniform1uiv(this.addr,e)}function bv(a,e){a.uniform2uiv(this.addr,e)}function Mv(a,e){a.uniform3uiv(this.addr,e)}function Sv(a,e){a.uniform4uiv(this.addr,e)}function Tv(a,e,t){const i=e.length,r=Hh(t,i);a.uniform1iv(this.addr,r);for(let n=0;n!==i;++n)t.safeSetTexture2D(e[n]||Nh,r[n])}function Ev(a,e,t){const i=e.length,r=Hh(t,i);a.uniform1iv(this.addr,r);for(let n=0;n!==i;++n)t.safeSetTextureCube(e[n]||Bh,r[n])}function Av(a){switch(a){case 5126:return hv;case 35664:return uv;case 35665:return dv;case 35666:return pv;case 35674:return mv;case 35675:return fv;case 35676:return gv;case 5124:case 35670:return vv;case 35667:case 35671:return yv;case 35668:case 35672:return xv;case 35669:case 35673:return _v;case 5125:return wv;case 36294:return bv;case 36295:return Mv;case 36296:return Sv;case 35678:case 36198:case 36298:case 36306:case 35682:return Tv;case 35680:case 36300:case 36308:case 36293:return Ev}}function Lv(a,e,t){this.id=a,this.addr=t,this.cache=[],this.setValue=cv(e.type)}function kh(a,e,t){this.id=a,this.addr=t,this.cache=[],this.size=e.size,this.setValue=Av(e.type)}kh.prototype.updateCache=function(a){const e=this.cache;a instanceof Float32Array&&e.length!==a.length&&(this.cache=new Float32Array(a.length)),gt(e,a)};function Vh(a){this.id=a,this.seq=[],this.map={}}Vh.prototype.setValue=function(a,e,t){const i=this.seq;for(let r=0,n=i.length;r!==n;++r){const s=i[r];s.setValue(a,e[s.id],t)}};const xo=/(\w+)(\])?(\[|\.)?/g;function Wh(a,e){a.seq.push(e),a.map[e.id]=e}function Cv(a,e,t){const i=a.name,r=i.length;for(xo.lastIndex=0;;){const n=xo.exec(i),s=xo.lastIndex;let o=n[1];const l=n[2]==="]",c=n[3];if(l&&(o=o|0),c===void 0||c==="["&&s+2===r){Wh(t,c===void 0?new Lv(o,a,e):new kh(o,a,e));break}else{let h=t.map[o];h===void 0&&(h=new Vh(o),Wh(t,h)),t=h}}}function _i(a,e){this.seq=[],this.map={};const t=a.getProgramParameter(e,35718);for(let i=0;i<t;++i){const r=a.getActiveUniform(e,i),n=a.getUniformLocation(e,r.name);Cv(r,n,this)}}_i.prototype.setValue=function(a,e,t,i){const r=this.map[e];r!==void 0&&r.setValue(a,t,i)},_i.prototype.setOptional=function(a,e,t){const i=e[t];i!==void 0&&this.setValue(a,t,i)},_i.upload=function(a,e,t,i){for(let r=0,n=e.length;r!==n;++r){const s=e[r],o=t[s.id];o.needsUpdate!==!1&&s.setValue(a,o.value,i)}},_i.seqWithValue=function(a,e){const t=[];for(let i=0,r=a.length;i!==r;++i){const n=a[i];n.id in e&&t.push(n)}return t};function jh(a,e,t){const i=a.createShader(e);return a.shaderSource(i,t),a.compileShader(i),i}let Rv=0;function Pv(a){const e=a.split(`
`);for(let t=0;t<e.length;t++)e[t]=t+1+": "+e[t];return e.join(`
`)}function qh(a){switch(a){case ct:return["Linear","( value )"];case oi:return["sRGB","( value )"];case ia:return["RGBE","( value )"];case Fs:return["RGBM","( value, 7.0 )"];case Os:return["RGBM","( value, 16.0 )"];case zs:return["RGBD","( value, 256.0 )"];case ta:return["Gamma","( value, float( GAMMA_FACTOR ) )"];case qc:return["LogLuv","( value )"];default:return console.warn("THREE.WebGLProgram: Unsupported encoding:",a),["Linear","( value )"]}}function Xh(a,e,t){const i=a.getShaderParameter(e,35713),r=a.getShaderInfoLog(e).trim();return i&&r===""?"":t.toUpperCase()+`

`+r+`

`+Pv(a.getShaderSource(e))}function Xi(a,e){const t=qh(e);return"vec4 "+a+"( vec4 value ) { return "+t[0]+"ToLinear"+t[1]+"; }"}function Iv(a,e){const t=qh(e);return"vec4 "+a+"( vec4 value ) { return LinearTo"+t[0]+t[1]+"; }"}function Dv(a,e){let t;switch(e){case jl:t="Linear";break;case ql:t="Reinhard";break;case Xl:t="OptimizedCineon";break;case Yl:t="ACESFilmic";break;case Zl:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+a+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}function Nv(a){return[a.extensionDerivatives||a.envMapCubeUV||a.bumpMap||a.tangentSpaceNormalMap||a.clearcoatNormalMap||a.flatShading||a.shaderID==="physical"?"#extension GL_OES_standard_derivatives : enable":"",(a.extensionFragDepth||a.logarithmicDepthBuffer)&&a.rendererExtensionFragDepth?"#extension GL_EXT_frag_depth : enable":"",a.extensionDrawBuffers&&a.rendererExtensionDrawBuffers?"#extension GL_EXT_draw_buffers : require":"",(a.extensionShaderTextureLOD||a.envMap||a.transmission)&&a.rendererExtensionShaderTextureLod?"#extension GL_EXT_shader_texture_lod : enable":""].filter(En).join(`
`)}function Bv(a){const e=[];for(const t in a){const i=a[t];i!==!1&&e.push("#define "+t+" "+i)}return e.join(`
`)}function Fv(a,e){const t={},i=a.getProgramParameter(e,35721);for(let r=0;r<i;r++){const n=a.getActiveAttrib(e,r),s=n.name;let o=1;n.type===35674&&(o=2),n.type===35675&&(o=3),n.type===35676&&(o=4),t[s]={type:n.type,location:a.getAttribLocation(e,s),locationSize:o}}return t}function En(a){return a!==""}function Yh(a,e){return a.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Zh(a,e){return a.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const Ov=/^[ \t]*#include +<([\w\d./]+)>/gm;function _o(a){return a.replace(Ov,zv)}function zv(a,e){const t=Ce[e];if(t===void 0)throw new Error("Can not resolve #include <"+e+">");return _o(t)}const Uv=/#pragma unroll_loop[\s]+?for \( int i \= (\d+)\; i < (\d+)\; i \+\+ \) \{([\s\S]+?)(?=\})\}/g,Gv=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Jh(a){return a.replace(Gv,Kh).replace(Uv,Hv)}function Hv(a,e,t,i){return console.warn("WebGLProgram: #pragma unroll_loop shader syntax is deprecated. Please use #pragma unroll_loop_start syntax instead."),Kh(a,e,t,i)}function Kh(a,e,t,i){let r="";for(let n=parseInt(e);n<parseInt(t);n++)r+=i.replace(/\[\s*i\s*\]/g,"[ "+n+" ]").replace(/UNROLLED_LOOP_INDEX/g,n);return r}function Qh(a){let e="precision "+a.precision+` float;
precision `+a.precision+" int;";return a.precision==="highp"?e+=`
#define HIGH_PRECISION`:a.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:a.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function kv(a){let e="SHADOWMAP_TYPE_BASIC";return a.shadowMapType===fs?e="SHADOWMAP_TYPE_PCF":a.shadowMapType===Ml?e="SHADOWMAP_TYPE_PCF_SOFT":a.shadowMapType===ur&&(e="SHADOWMAP_TYPE_VSM"),e}function Vv(a){let e="ENVMAP_TYPE_CUBE";if(a.envMap)switch(a.envMapMode){case Di:case Ni:e="ENVMAP_TYPE_CUBE";break;case pr:case ln:e="ENVMAP_TYPE_CUBE_UV";break}return e}function Wv(a){let e="ENVMAP_MODE_REFLECTION";if(a.envMap)switch(a.envMapMode){case Ni:case ln:e="ENVMAP_MODE_REFRACTION";break}return e}function jv(a){let e="ENVMAP_BLENDING_NONE";if(a.envMap)switch(a.combine){case an:e="ENVMAP_BLENDING_MULTIPLY";break;case Vl:e="ENVMAP_BLENDING_MIX";break;case Wl:e="ENVMAP_BLENDING_ADD";break}return e}function qv(a,e,t,i){const r=a.getContext(),n=t.defines;let s=t.vertexShader,o=t.fragmentShader;const l=kv(t),c=Vv(t),h=Wv(t),d=jv(t),u=a.gammaFactor>0?a.gammaFactor:1,p=t.isWebGL2?"":Nv(t),g=Bv(n),v=r.createProgram();let x,f,m=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(x=[g].filter(En).join(`
`),x.length>0&&(x+=`
`),f=[p,g].filter(En).join(`
`),f.length>0&&(f+=`
`)):(x=[Qh(t),"#define SHADER_NAME "+t.shaderName,g,t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.supportsVertexTextures?"#define VERTEX_TEXTURES":"","#define GAMMA_FACTOR "+u,"#define MAX_BONES "+t.maxBones,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+h:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMap&&t.objectSpaceNormalMap?"#define OBJECTSPACE_NORMALMAP":"",t.normalMap&&t.tangentSpaceNormalMap?"#define TANGENTSPACE_NORMALMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.displacementMap&&t.supportsVertexTextures?"#define USE_DISPLACEMENTMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularIntensityMap?"#define USE_SPECULARINTENSITYMAP":"",t.specularColorMap?"#define USE_SPECULARCOLORMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEENCOLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEENROUGHNESSMAP":"",t.vertexTangents?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUvs?"#define USE_UV":"",t.uvsVertexOnly?"#define UVS_VERTEX_ONLY":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.useVertexTexture?"#define BONE_TEXTURE":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphTargets&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE":"",t.morphTargets&&t.isWebGL2?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#if ( defined( USE_MORPHTARGETS ) && ! defined( MORPHTARGETS_TEXTURE ) )","	attribute vec3 morphTarget0;","	attribute vec3 morphTarget1;","	attribute vec3 morphTarget2;","	attribute vec3 morphTarget3;","	#ifdef USE_MORPHNORMALS","		attribute vec3 morphNormal0;","		attribute vec3 morphNormal1;","		attribute vec3 morphNormal2;","		attribute vec3 morphNormal3;","	#else","		attribute vec3 morphTarget4;","		attribute vec3 morphTarget5;","		attribute vec3 morphTarget6;","		attribute vec3 morphTarget7;","	#endif","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(En).join(`
`),f=[p,Qh(t),"#define SHADER_NAME "+t.shaderName,g,"#define GAMMA_FACTOR "+u,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+h:"",t.envMap?"#define "+d:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMap&&t.objectSpaceNormalMap?"#define OBJECTSPACE_NORMALMAP":"",t.normalMap&&t.tangentSpaceNormalMap?"#define TANGENTSPACE_NORMALMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularIntensityMap?"#define USE_SPECULARINTENSITYMAP":"",t.specularColorMap?"#define USE_SPECULARCOLORMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEENCOLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEENROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUvs?"#define USE_UV":"",t.uvsVertexOnly?"#define UVS_VERTEX_ONLY":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.physicallyCorrectLights?"#define PHYSICALLY_CORRECT_LIGHTS":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"",(t.extensionShaderTextureLOD||t.envMap)&&t.rendererExtensionShaderTextureLod?"#define TEXTURE_LOD_EXT":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==si?"#define TONE_MAPPING":"",t.toneMapping!==si?Ce.tonemapping_pars_fragment:"",t.toneMapping!==si?Dv("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.format===Oi?"#define OPAQUE":"",Ce.encodings_pars_fragment,t.map?Xi("mapTexelToLinear",t.mapEncoding):"",t.matcap?Xi("matcapTexelToLinear",t.matcapEncoding):"",t.envMap?Xi("envMapTexelToLinear",t.envMapEncoding):"",t.emissiveMap?Xi("emissiveMapTexelToLinear",t.emissiveMapEncoding):"",t.specularColorMap?Xi("specularColorMapTexelToLinear",t.specularColorMapEncoding):"",t.sheenColorMap?Xi("sheenColorMapTexelToLinear",t.sheenColorMapEncoding):"",t.lightMap?Xi("lightMapTexelToLinear",t.lightMapEncoding):"",Iv("linearToOutputTexel",t.outputEncoding),t.depthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(En).join(`
`)),s=_o(s),s=Yh(s,t),s=Zh(s,t),o=_o(o),o=Yh(o,t),o=Zh(o,t),s=Jh(s),o=Jh(o),t.isWebGL2&&t.isRawShaderMaterial!==!0&&(m=`#version 300 es
`,x=["precision mediump sampler2DArray;","#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+x,f=["#define varying in",t.glslVersion===Us?"":"out highp vec4 pc_fragColor;",t.glslVersion===Us?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+f);const w=m+x+s,y=m+f+o,M=jh(r,35633,w),A=jh(r,35632,y);if(r.attachShader(v,M),r.attachShader(v,A),t.index0AttributeName!==void 0?r.bindAttribLocation(v,0,t.index0AttributeName):t.morphTargets===!0&&r.bindAttribLocation(v,0,"position"),r.linkProgram(v),a.debug.checkShaderErrors){const N=r.getProgramInfoLog(v).trim(),R=r.getShaderInfoLog(M).trim(),C=r.getShaderInfoLog(A).trim();let Y=!0,I=!0;if(r.getProgramParameter(v,35714)===!1){Y=!1;const B=Xh(r,M,"vertex"),O=Xh(r,A,"fragment");console.error("THREE.WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(v,35715)+`

Program Info Log: `+N+`
`+B+`
`+O)}else N!==""?console.warn("THREE.WebGLProgram: Program Info Log:",N):(R===""||C==="")&&(I=!1);I&&(this.diagnostics={runnable:Y,programLog:N,vertexShader:{log:R,prefix:x},fragmentShader:{log:C,prefix:f}})}r.deleteShader(M),r.deleteShader(A);let _;this.getUniforms=function(){return _===void 0&&(_=new _i(r,v)),_};let L;return this.getAttributes=function(){return L===void 0&&(L=Fv(r,v)),L},this.destroy=function(){i.releaseStatesOfProgram(this),r.deleteProgram(v),this.program=void 0},this.name=t.shaderName,this.id=Rv++,this.cacheKey=e,this.usedTimes=1,this.program=v,this.vertexShader=M,this.fragmentShader=A,this}function Xv(a,e,t,i,r,n,s){const o=[],l=r.isWebGL2,c=r.logarithmicDepthBuffer,h=r.floatVertexTextures,d=r.maxVertexUniforms,u=r.vertexTextures;let p=r.precision;const g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"},v=["precision","isWebGL2","supportsVertexTextures","outputEncoding","instancing","instancingColor","map","mapEncoding","matcap","matcapEncoding","envMap","envMapMode","envMapEncoding","envMapCubeUV","lightMap","lightMapEncoding","aoMap","emissiveMap","emissiveMapEncoding","bumpMap","normalMap","objectSpaceNormalMap","tangentSpaceNormalMap","clearcoat","clearcoatMap","clearcoatRoughnessMap","clearcoatNormalMap","displacementMap","specularMap",,"roughnessMap","metalnessMap","gradientMap","alphaMap","alphaTest","combine","vertexColors","vertexAlphas","vertexTangents","vertexUvs","uvsVertexOnly","fog","useFog","fogExp2","flatShading","sizeAttenuation","logarithmicDepthBuffer","skinning","maxBones","useVertexTexture","morphTargets","morphNormals","morphTargetsCount","premultipliedAlpha","numDirLights","numPointLights","numSpotLights","numHemiLights","numRectAreaLights","numDirLightShadows","numPointLightShadows","numSpotLightShadows","shadowMapEnabled","shadowMapType","toneMapping","physicallyCorrectLights","doubleSided","flipSided","numClippingPlanes","numClipIntersection","depthPacking","dithering","format","specularIntensityMap","specularColorMap","specularColorMapEncoding","transmission","transmissionMap","thicknessMap","sheen","sheenColorMap","sheenColorMapEncoding","sheenRoughnessMap"];function x(_){const L=_.skeleton.bones;if(h)return 1024;{const N=Math.floor((d-20)/4),R=Math.min(N,L.length);return R<L.length?(console.warn("THREE.WebGLRenderer: Skeleton has "+L.length+" bones. This GPU supports "+R+"."),0):R}}function f(_){let L;return _&&_.isTexture?L=_.encoding:_&&_.isWebGLRenderTarget?(console.warn("THREE.WebGLPrograms.getTextureEncodingFromMap: don't use render targets as textures. Use their .texture property instead."),L=_.texture.encoding):L=ct,l&&_&&_.isTexture&&_.format===lt&&_.type===qt&&_.encoding===oi&&(L=ct),L}function m(_,L,N,R,C){const Y=R.fog,I=_.isMeshStandardMaterial?R.environment:null,B=(_.isMeshStandardMaterial?t:e).get(_.envMap||I),O=g[_.type],z=C.isSkinnedMesh?x(C):0;_.precision!==null&&(p=r.getMaxPrecision(_.precision),p!==_.precision&&console.warn("THREE.WebGLProgram.getParameters:",_.precision,"not supported, using",p,"instead."));let U,$;if(O){const Te=Dt[O];U=Te.vertexShader,$=Te.fragmentShader}else U=_.vertexShader,$=_.fragmentShader;const he=a.getRenderTarget(),de=_.alphaTest>0,se=_.clearcoat>0;return{isWebGL2:l,shaderID:O,shaderName:_.type,vertexShader:U,fragmentShader:$,defines:_.defines,isRawShaderMaterial:_.isRawShaderMaterial===!0,glslVersion:_.glslVersion,precision:p,instancing:C.isInstancedMesh===!0,instancingColor:C.isInstancedMesh===!0&&C.instanceColor!==null,supportsVertexTextures:u,outputEncoding:he!==null?f(he.texture):a.outputEncoding,map:!!_.map,mapEncoding:f(_.map),matcap:!!_.matcap,matcapEncoding:f(_.matcap),envMap:!!B,envMapMode:B&&B.mapping,envMapEncoding:f(B),envMapCubeUV:!!B&&(B.mapping===pr||B.mapping===ln),lightMap:!!_.lightMap,lightMapEncoding:f(_.lightMap),aoMap:!!_.aoMap,emissiveMap:!!_.emissiveMap,emissiveMapEncoding:f(_.emissiveMap),bumpMap:!!_.bumpMap,normalMap:!!_.normalMap,objectSpaceNormalMap:_.normalMapType===Zc,tangentSpaceNormalMap:_.normalMapType===Hi,clearcoat:se,clearcoatMap:se&&!!_.clearcoatMap,clearcoatRoughnessMap:se&&!!_.clearcoatRoughnessMap,clearcoatNormalMap:se&&!!_.clearcoatNormalMap,displacementMap:!!_.displacementMap,roughnessMap:!!_.roughnessMap,metalnessMap:!!_.metalnessMap,specularMap:!!_.specularMap,specularIntensityMap:!!_.specularIntensityMap,specularColorMap:!!_.specularColorMap,specularColorMapEncoding:f(_.specularColorMap),alphaMap:!!_.alphaMap,alphaTest:de,gradientMap:!!_.gradientMap,sheen:_.sheen>0,sheenColorMap:!!_.sheenColorMap,sheenColorMapEncoding:f(_.sheenColorMap),sheenRoughnessMap:!!_.sheenRoughnessMap,transmission:_.transmission>0,transmissionMap:!!_.transmissionMap,thicknessMap:!!_.thicknessMap,combine:_.combine,vertexTangents:!!_.normalMap&&!!C.geometry&&!!C.geometry.attributes.tangent,vertexColors:_.vertexColors,vertexAlphas:_.vertexColors===!0&&!!C.geometry&&!!C.geometry.attributes.color&&C.geometry.attributes.color.itemSize===4,vertexUvs:!!_.map||!!_.bumpMap||!!_.normalMap||!!_.specularMap||!!_.alphaMap||!!_.emissiveMap||!!_.roughnessMap||!!_.metalnessMap||!!_.clearcoatMap||!!_.clearcoatRoughnessMap||!!_.clearcoatNormalMap||!!_.displacementMap||!!_.transmissionMap||!!_.thicknessMap||!!_.specularIntensityMap||!!_.specularColorMap||!!_.sheenColorMap||_.sheenRoughnessMap,uvsVertexOnly:!(_.map||_.bumpMap||_.normalMap||_.specularMap||_.alphaMap||_.emissiveMap||_.roughnessMap||_.metalnessMap||_.clearcoatNormalMap||_.transmission>0||_.transmissionMap||_.thicknessMap||_.specularIntensityMap||_.specularColorMap||!!_.sheen>0||_.sheenColorMap||_.sheenRoughnessMap)&&!!_.displacementMap,fog:!!Y,useFog:_.fog,fogExp2:Y&&Y.isFogExp2,flatShading:!!_.flatShading,sizeAttenuation:_.sizeAttenuation,logarithmicDepthBuffer:c,skinning:C.isSkinnedMesh===!0&&z>0,maxBones:z,useVertexTexture:h,morphTargets:!!C.geometry&&!!C.geometry.morphAttributes.position,morphNormals:!!C.geometry&&!!C.geometry.morphAttributes.normal,morphTargetsCount:C.geometry&&C.geometry.morphAttributes.position?C.geometry.morphAttributes.position.length:0,numDirLights:L.directional.length,numPointLights:L.point.length,numSpotLights:L.spot.length,numRectAreaLights:L.rectArea.length,numHemiLights:L.hemi.length,numDirLightShadows:L.directionalShadowMap.length,numPointLightShadows:L.pointShadowMap.length,numSpotLightShadows:L.spotShadowMap.length,numClippingPlanes:s.numPlanes,numClipIntersection:s.numIntersection,format:_.format,dithering:_.dithering,shadowMapEnabled:a.shadowMap.enabled&&N.length>0,shadowMapType:a.shadowMap.type,toneMapping:_.toneMapped?a.toneMapping:si,physicallyCorrectLights:a.physicallyCorrectLights,premultipliedAlpha:_.premultipliedAlpha,doubleSided:_.side===Pi,flipSided:_.side===Xe,depthPacking:_.depthPacking!==void 0?_.depthPacking:!1,index0AttributeName:_.index0AttributeName,extensionDerivatives:_.extensions&&_.extensions.derivatives,extensionFragDepth:_.extensions&&_.extensions.fragDepth,extensionDrawBuffers:_.extensions&&_.extensions.drawBuffers,extensionShaderTextureLOD:_.extensions&&_.extensions.shaderTextureLOD,rendererExtensionFragDepth:l||i.has("EXT_frag_depth"),rendererExtensionDrawBuffers:l||i.has("WEBGL_draw_buffers"),rendererExtensionShaderTextureLod:l||i.has("EXT_shader_texture_lod"),customProgramCacheKey:_.customProgramCacheKey()}}function w(_){const L=[];if(_.shaderID?L.push(_.shaderID):(L.push(th(_.fragmentShader)),L.push(th(_.vertexShader))),_.defines!==void 0)for(const N in _.defines)L.push(N),L.push(_.defines[N]);if(_.isRawShaderMaterial===!1){for(let N=0;N<v.length;N++)L.push(_[v[N]]);L.push(a.outputEncoding),L.push(a.gammaFactor)}return L.push(_.customProgramCacheKey),L.join()}function y(_){const L=g[_.type];let N;if(L){const R=Dt[L];N=bh.clone(R.uniforms)}else N=_.uniforms;return N}function M(_,L){let N;for(let R=0,C=o.length;R<C;R++){const Y=o[R];if(Y.cacheKey===L){N=Y,++N.usedTimes;break}}return N===void 0&&(N=new qv(a,L,_,n),o.push(N)),N}function A(_){if(--_.usedTimes===0){const L=o.indexOf(_);o[L]=o[o.length-1],o.pop(),_.destroy()}}return{getParameters:m,getProgramCacheKey:w,getUniforms:y,acquireProgram:M,releaseProgram:A,programs:o}}function Yv(){let a=new WeakMap;function e(n){let s=a.get(n);return s===void 0&&(s={},a.set(n,s)),s}function t(n){a.delete(n)}function i(n,s,o){a.get(n)[s]=o}function r(){a=new WeakMap}return{get:e,remove:t,update:i,dispose:r}}function Zv(a,e){return a.groupOrder!==e.groupOrder?a.groupOrder-e.groupOrder:a.renderOrder!==e.renderOrder?a.renderOrder-e.renderOrder:a.program!==e.program?a.program.id-e.program.id:a.material.id!==e.material.id?a.material.id-e.material.id:a.z!==e.z?a.z-e.z:a.id-e.id}function $h(a,e){return a.groupOrder!==e.groupOrder?a.groupOrder-e.groupOrder:a.renderOrder!==e.renderOrder?a.renderOrder-e.renderOrder:a.z!==e.z?e.z-a.z:a.id-e.id}function eu(a){const e=[];let t=0;const i=[],r=[],n=[],s={id:-1};function o(){t=0,i.length=0,r.length=0,n.length=0}function l(p,g,v,x,f,m){let w=e[t];const y=a.get(v);return w===void 0?(w={id:p.id,object:p,geometry:g,material:v,program:y.program||s,groupOrder:x,renderOrder:p.renderOrder,z:f,group:m},e[t]=w):(w.id=p.id,w.object=p,w.geometry=g,w.material=v,w.program=y.program||s,w.groupOrder=x,w.renderOrder=p.renderOrder,w.z=f,w.group=m),t++,w}function c(p,g,v,x,f,m){const w=l(p,g,v,x,f,m);v.transmission>0?r.push(w):v.transparent===!0?n.push(w):i.push(w)}function h(p,g,v,x,f,m){const w=l(p,g,v,x,f,m);v.transmission>0?r.unshift(w):v.transparent===!0?n.unshift(w):i.unshift(w)}function d(p,g){i.length>1&&i.sort(p||Zv),r.length>1&&r.sort(g||$h),n.length>1&&n.sort(g||$h)}function u(){for(let p=t,g=e.length;p<g;p++){const v=e[p];if(v.id===null)break;v.id=null,v.object=null,v.geometry=null,v.material=null,v.program=null,v.group=null}}return{opaque:i,transmissive:r,transparent:n,init:o,push:c,unshift:h,finish:u,sort:d}}function Jv(a){let e=new WeakMap;function t(r,n){let s;return e.has(r)===!1?(s=new eu(a),e.set(r,[s])):n>=e.get(r).length?(s=new eu(a),e.get(r).push(s)):s=e.get(r)[n],s}function i(){e=new WeakMap}return{get:t,dispose:i}}function Kv(){const a={};return{get:function(e){if(a[e.id]!==void 0)return a[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new b,color:new ie};break;case"SpotLight":t={position:new b,direction:new b,color:new ie,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new b,color:new ie,distance:0,decay:0};break;case"HemisphereLight":t={direction:new b,skyColor:new ie,groundColor:new ie};break;case"RectAreaLight":t={color:new ie,position:new b,halfWidth:new b,halfHeight:new b};break}return a[e.id]=t,t}}}function Qv(){const a={};return{get:function(e){if(a[e.id]!==void 0)return a[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new j};break;case"SpotLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new j};break;case"PointLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new j,shadowCameraNear:1,shadowCameraFar:1e3};break}return a[e.id]=t,t}}}let $v=0;function e0(a,e){return(e.castShadow?1:0)-(a.castShadow?1:0)}function t0(a,e){const t=new Kv,i=Qv(),r={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotShadow:[],spotShadowMap:[],spotShadowMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[]};for(let h=0;h<9;h++)r.probe.push(new b);const n=new b,s=new ue,o=new ue;function l(h,d){let u=0,p=0,g=0;for(let N=0;N<9;N++)r.probe[N].set(0,0,0);let v=0,x=0,f=0,m=0,w=0,y=0,M=0,A=0;h.sort(e0);const _=d!==!0?Math.PI:1;for(let N=0,R=h.length;N<R;N++){const C=h[N],Y=C.color,I=C.intensity,B=C.distance,O=C.shadow&&C.shadow.map?C.shadow.map.texture:null;if(C.isAmbientLight)u+=Y.r*I*_,p+=Y.g*I*_,g+=Y.b*I*_;else if(C.isLightProbe)for(let z=0;z<9;z++)r.probe[z].addScaledVector(C.sh.coefficients[z],I);else if(C.isDirectionalLight){const z=t.get(C);if(z.color.copy(C.color).multiplyScalar(C.intensity*_),C.castShadow){const U=C.shadow,$=i.get(C);$.shadowBias=U.bias,$.shadowNormalBias=U.normalBias,$.shadowRadius=U.radius,$.shadowMapSize=U.mapSize,r.directionalShadow[v]=$,r.directionalShadowMap[v]=O,r.directionalShadowMatrix[v]=C.shadow.matrix,y++}r.directional[v]=z,v++}else if(C.isSpotLight){const z=t.get(C);if(z.position.setFromMatrixPosition(C.matrixWorld),z.color.copy(Y).multiplyScalar(I*_),z.distance=B,z.coneCos=Math.cos(C.angle),z.penumbraCos=Math.cos(C.angle*(1-C.penumbra)),z.decay=C.decay,C.castShadow){const U=C.shadow,$=i.get(C);$.shadowBias=U.bias,$.shadowNormalBias=U.normalBias,$.shadowRadius=U.radius,$.shadowMapSize=U.mapSize,r.spotShadow[f]=$,r.spotShadowMap[f]=O,r.spotShadowMatrix[f]=C.shadow.matrix,A++}r.spot[f]=z,f++}else if(C.isRectAreaLight){const z=t.get(C);z.color.copy(Y).multiplyScalar(I),z.halfWidth.set(C.width*.5,0,0),z.halfHeight.set(0,C.height*.5,0),r.rectArea[m]=z,m++}else if(C.isPointLight){const z=t.get(C);if(z.color.copy(C.color).multiplyScalar(C.intensity*_),z.distance=C.distance,z.decay=C.decay,C.castShadow){const U=C.shadow,$=i.get(C);$.shadowBias=U.bias,$.shadowNormalBias=U.normalBias,$.shadowRadius=U.radius,$.shadowMapSize=U.mapSize,$.shadowCameraNear=U.camera.near,$.shadowCameraFar=U.camera.far,r.pointShadow[x]=$,r.pointShadowMap[x]=O,r.pointShadowMatrix[x]=C.shadow.matrix,M++}r.point[x]=z,x++}else if(C.isHemisphereLight){const z=t.get(C);z.skyColor.copy(C.color).multiplyScalar(I*_),z.groundColor.copy(C.groundColor).multiplyScalar(I*_),r.hemi[w]=z,w++}}m>0&&(e.isWebGL2||a.has("OES_texture_float_linear")===!0?(r.rectAreaLTC1=te.LTC_FLOAT_1,r.rectAreaLTC2=te.LTC_FLOAT_2):a.has("OES_texture_half_float_linear")===!0?(r.rectAreaLTC1=te.LTC_HALF_1,r.rectAreaLTC2=te.LTC_HALF_2):console.error("THREE.WebGLRenderer: Unable to use RectAreaLight. Missing WebGL extensions.")),r.ambient[0]=u,r.ambient[1]=p,r.ambient[2]=g;const L=r.hash;(L.directionalLength!==v||L.pointLength!==x||L.spotLength!==f||L.rectAreaLength!==m||L.hemiLength!==w||L.numDirectionalShadows!==y||L.numPointShadows!==M||L.numSpotShadows!==A)&&(r.directional.length=v,r.spot.length=f,r.rectArea.length=m,r.point.length=x,r.hemi.length=w,r.directionalShadow.length=y,r.directionalShadowMap.length=y,r.pointShadow.length=M,r.pointShadowMap.length=M,r.spotShadow.length=A,r.spotShadowMap.length=A,r.directionalShadowMatrix.length=y,r.pointShadowMatrix.length=M,r.spotShadowMatrix.length=A,L.directionalLength=v,L.pointLength=x,L.spotLength=f,L.rectAreaLength=m,L.hemiLength=w,L.numDirectionalShadows=y,L.numPointShadows=M,L.numSpotShadows=A,r.version=$v++)}function c(h,d){let u=0,p=0,g=0,v=0,x=0;const f=d.matrixWorldInverse;for(let m=0,w=h.length;m<w;m++){const y=h[m];if(y.isDirectionalLight){const M=r.directional[u];M.direction.setFromMatrixPosition(y.matrixWorld),n.setFromMatrixPosition(y.target.matrixWorld),M.direction.sub(n),M.direction.transformDirection(f),u++}else if(y.isSpotLight){const M=r.spot[g];M.position.setFromMatrixPosition(y.matrixWorld),M.position.applyMatrix4(f),M.direction.setFromMatrixPosition(y.matrixWorld),n.setFromMatrixPosition(y.target.matrixWorld),M.direction.sub(n),M.direction.transformDirection(f),g++}else if(y.isRectAreaLight){const M=r.rectArea[v];M.position.setFromMatrixPosition(y.matrixWorld),M.position.applyMatrix4(f),o.identity(),s.copy(y.matrixWorld),s.premultiply(f),o.extractRotation(s),M.halfWidth.set(y.width*.5,0,0),M.halfHeight.set(0,y.height*.5,0),M.halfWidth.applyMatrix4(o),M.halfHeight.applyMatrix4(o),v++}else if(y.isPointLight){const M=r.point[p];M.position.setFromMatrixPosition(y.matrixWorld),M.position.applyMatrix4(f),p++}else if(y.isHemisphereLight){const M=r.hemi[x];M.direction.setFromMatrixPosition(y.matrixWorld),M.direction.transformDirection(f),M.direction.normalize(),x++}}}return{setup:l,setupView:c,state:r}}function tu(a,e){const t=new t0(a,e),i=[],r=[];function n(){i.length=0,r.length=0}function s(h){i.push(h)}function o(h){r.push(h)}function l(h){t.setup(i,h)}function c(h){t.setupView(i,h)}return{init:n,state:{lightsArray:i,shadowsArray:r,lights:t},setupLights:l,setupLightsView:c,pushLight:s,pushShadow:o}}function i0(a,e){let t=new WeakMap;function i(n,s=0){let o;return t.has(n)===!1?(o=new tu(a,e),t.set(n,[o])):s>=t.get(n).length?(o=new tu(a,e),t.get(n).push(o)):o=t.get(n)[s],o}function r(){t=new WeakMap}return{get:i,dispose:r}}class Ra extends rt{constructor(e){super(),this.type="MeshDepthMaterial",this.depthPacking=Xc,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}Ra.prototype.isMeshDepthMaterial=!0;class Pa extends rt{constructor(e){super(),this.type="MeshDistanceMaterial",this.referencePosition=new b,this.nearDistance=1,this.farDistance=1e3,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.fog=!1,this.setValues(e)}copy(e){return super.copy(e),this.referencePosition.copy(e.referencePosition),this.nearDistance=e.nearDistance,this.farDistance=e.farDistance,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}Pa.prototype.isMeshDistanceMaterial=!0;const r0=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,n0=`uniform sampler2D shadow_pass;
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
}`;function iu(a,e,t){let i=new Mn;const r=new j,n=new j,s=new ze,o=new Ra({depthPacking:Yc}),l=new Pa,c={},h=t.maxTextureSize,d={0:Xe,1:Ri,2:Pi},u=new $t({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new j},radius:{value:4}},vertexShader:r0,fragmentShader:n0}),p=u.clone();p.defines.HORIZONTAL_PASS=1;const g=new we;g.setAttribute("position",new De(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const v=new Qe(g,u),x=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=fs,this.render=function(y,M,A){if(x.enabled===!1||x.autoUpdate===!1&&x.needsUpdate===!1||y.length===0)return;const _=a.getRenderTarget(),L=a.getActiveCubeFace(),N=a.getActiveMipmapLevel(),R=a.state;R.setBlending(jt),R.buffers.color.setClear(1,1,1,1),R.buffers.depth.setTest(!0),R.setScissorTest(!1);for(let C=0,Y=y.length;C<Y;C++){const I=y[C],B=I.shadow;if(B===void 0){console.warn("THREE.WebGLShadowMap:",I,"has no shadow.");continue}if(B.autoUpdate===!1&&B.needsUpdate===!1)continue;r.copy(B.mapSize);const O=B.getFrameExtents();if(r.multiply(O),n.copy(B.mapSize),(r.x>h||r.y>h)&&(r.x>h&&(n.x=Math.floor(h/O.x),r.x=n.x*O.x,B.mapSize.x=n.x),r.y>h&&(n.y=Math.floor(h/O.y),r.y=n.y*O.y,B.mapSize.y=n.y)),B.map===null&&!B.isPointLightShadow&&this.type===ur){const U={minFilter:$e,magFilter:$e,format:lt};B.map=new Ct(r.x,r.y,U),B.map.texture.name=I.name+".shadowMap",B.mapPass=new Ct(r.x,r.y,U),B.camera.updateProjectionMatrix()}if(B.map===null){const U={minFilter:Ke,magFilter:Ke,format:lt};B.map=new Ct(r.x,r.y,U),B.map.texture.name=I.name+".shadowMap",B.camera.updateProjectionMatrix()}a.setRenderTarget(B.map),a.clear();const z=B.getViewportCount();for(let U=0;U<z;U++){const $=B.getViewport(U);s.set(n.x*$.x,n.y*$.y,n.x*$.z,n.y*$.w),R.viewport(s),B.updateMatrices(I,U),i=B.getFrustum(),w(M,A,B.camera,I,this.type)}!B.isPointLightShadow&&this.type===ur&&f(B,A),B.needsUpdate=!1}x.needsUpdate=!1,a.setRenderTarget(_,L,N)};function f(y,M){const A=e.update(v);u.defines.VSM_SAMPLES!==y.blurSamples&&(u.defines.VSM_SAMPLES=y.blurSamples,p.defines.VSM_SAMPLES=y.blurSamples,u.needsUpdate=!0,p.needsUpdate=!0),u.uniforms.shadow_pass.value=y.map.texture,u.uniforms.resolution.value=y.mapSize,u.uniforms.radius.value=y.radius,a.setRenderTarget(y.mapPass),a.clear(),a.renderBufferDirect(M,null,A,u,v,null),p.uniforms.shadow_pass.value=y.mapPass.texture,p.uniforms.resolution.value=y.mapSize,p.uniforms.radius.value=y.radius,a.setRenderTarget(y.map),a.clear(),a.renderBufferDirect(M,null,A,p,v,null)}function m(y,M,A,_,L,N,R){let C=null;const Y=_.isPointLight===!0?y.customDistanceMaterial:y.customDepthMaterial;if(Y!==void 0?C=Y:C=_.isPointLight===!0?l:o,a.localClippingEnabled&&A.clipShadows===!0&&A.clippingPlanes.length!==0||A.displacementMap&&A.displacementScale!==0||A.alphaMap&&A.alphaTest>0){const I=C.uuid,B=A.uuid;let O=c[I];O===void 0&&(O={},c[I]=O);let z=O[B];z===void 0&&(z=C.clone(),O[B]=z),C=z}return C.visible=A.visible,C.wireframe=A.wireframe,R===ur?C.side=A.shadowSide!==null?A.shadowSide:A.side:C.side=A.shadowSide!==null?A.shadowSide:d[A.side],C.alphaMap=A.alphaMap,C.alphaTest=A.alphaTest,C.clipShadows=A.clipShadows,C.clippingPlanes=A.clippingPlanes,C.clipIntersection=A.clipIntersection,C.displacementMap=A.displacementMap,C.displacementScale=A.displacementScale,C.displacementBias=A.displacementBias,C.wireframeLinewidth=A.wireframeLinewidth,C.linewidth=A.linewidth,_.isPointLight===!0&&C.isMeshDistanceMaterial===!0&&(C.referencePosition.setFromMatrixPosition(_.matrixWorld),C.nearDistance=L,C.farDistance=N),C}function w(y,M,A,_,L){if(y.visible===!1)return;if(y.layers.test(M.layers)&&(y.isMesh||y.isLine||y.isPoints)&&(y.castShadow||y.receiveShadow&&L===ur)&&(!y.frustumCulled||i.intersectsObject(y))){y.modelViewMatrix.multiplyMatrices(A.matrixWorldInverse,y.matrixWorld);const R=e.update(y),C=y.material;if(Array.isArray(C)){const Y=R.groups;for(let I=0,B=Y.length;I<B;I++){const O=Y[I],z=C[O.materialIndex];if(z&&z.visible){const U=m(y,R,z,_,A.near,A.far,L);a.renderBufferDirect(A,null,R,U,y,O)}}}else if(C.visible){const Y=m(y,R,C,_,A.near,A.far,L);a.renderBufferDirect(A,null,R,Y,y,null)}}const N=y.children;for(let R=0,C=N.length;R<C;R++)w(N[R],M,A,_,L)}}function a0(a,e,t){const i=t.isWebGL2;function r(){let P=!1;const ne=new ze;let q=null;const ge=new ze(0,0,0,0);return{setMask:function(me){q!==me&&!P&&(a.colorMask(me,me,me,me),q=me)},setLocked:function(me){P=me},setClear:function(me,Fe,pt,mt,ni){ni===!0&&(me*=mt,Fe*=mt,pt*=mt),ne.set(me,Fe,pt,mt),ge.equals(ne)===!1&&(a.clearColor(me,Fe,pt,mt),ge.copy(ne))},reset:function(){P=!1,q=null,ge.set(-1,0,0,0)}}}function n(){let P=!1,ne=null,q=null,ge=null;return{setTest:function(me){me?Q(2929):pe(2929)},setMask:function(me){ne!==me&&!P&&(a.depthMask(me),ne=me)},setFunc:function(me){if(q!==me){if(me)switch(me){case Fl:a.depthFunc(512);break;case Ol:a.depthFunc(519);break;case zl:a.depthFunc(513);break;case Zn:a.depthFunc(515);break;case Ul:a.depthFunc(514);break;case Gl:a.depthFunc(518);break;case Hl:a.depthFunc(516);break;case kl:a.depthFunc(517);break;default:a.depthFunc(515)}else a.depthFunc(515);q=me}},setLocked:function(me){P=me},setClear:function(me){ge!==me&&(a.clearDepth(me),ge=me)},reset:function(){P=!1,ne=null,q=null,ge=null}}}function s(){let P=!1,ne=null,q=null,ge=null,me=null,Fe=null,pt=null,mt=null,ni=null;return{setTest:function(qe){P||(qe?Q(2960):pe(2960))},setMask:function(qe){ne!==qe&&!P&&(a.stencilMask(qe),ne=qe)},setFunc:function(qe,Wt,At){(q!==qe||ge!==Wt||me!==At)&&(a.stencilFunc(qe,Wt,At),q=qe,ge=Wt,me=At)},setOp:function(qe,Wt,At){(Fe!==qe||pt!==Wt||mt!==At)&&(a.stencilOp(qe,Wt,At),Fe=qe,pt=Wt,mt=At)},setLocked:function(qe){P=qe},setClear:function(qe){ni!==qe&&(a.clearStencil(qe),ni=qe)},reset:function(){P=!1,ne=null,q=null,ge=null,me=null,Fe=null,pt=null,mt=null,ni=null}}}const o=new r,l=new n,c=new s;let h={},d=null,u={},p=null,g=!1,v=null,x=null,f=null,m=null,w=null,y=null,M=null,A=!1,_=null,L=null,N=null,R=null,C=null;const Y=a.getParameter(35661);let I=!1,B=0;const O=a.getParameter(7938);O.indexOf("WebGL")!==-1?(B=parseFloat(/^WebGL (\d)/.exec(O)[1]),I=B>=1):O.indexOf("OpenGL ES")!==-1&&(B=parseFloat(/^OpenGL ES (\d)/.exec(O)[1]),I=B>=2);let z=null,U={};const $=a.getParameter(3088),he=a.getParameter(2978),de=new ze().fromArray($),se=new ze().fromArray(he);function Te(P,ne,q){const ge=new Uint8Array(4),me=a.createTexture();a.bindTexture(P,me),a.texParameteri(P,10241,9728),a.texParameteri(P,10240,9728);for(let Fe=0;Fe<q;Fe++)a.texImage2D(ne+Fe,0,6408,1,1,0,6408,5121,ge);return me}const Z={};Z[3553]=Te(3553,3553,1),Z[34067]=Te(34067,34069,6),o.setClear(0,0,0,1),l.setClear(1),c.setClear(0),Q(2929),l.setFunc(Zn),J(!1),ce(ms),Q(2884),X(jt);function Q(P){h[P]!==!0&&(a.enable(P),h[P]=!0)}function pe(P){h[P]!==!1&&(a.disable(P),h[P]=!1)}function G(P){P!==d&&(a.bindFramebuffer(36160,P),d=P)}function be(P,ne){return ne===null&&d!==null&&(ne=d),u[P]!==ne?(a.bindFramebuffer(P,ne),u[P]=ne,i&&(P===36009&&(u[36160]=ne),P===36160&&(u[36009]=ne)),!0):!1}function Ee(P){return p!==P?(a.useProgram(P),p=P,!0):!1}const re={[Ii]:32774,[Tl]:32778,[El]:32779};if(i)re[_s]=32775,re[ws]=32776;else{const P=e.get("EXT_blend_minmax");P!==null&&(re[_s]=P.MIN_EXT,re[ws]=P.MAX_EXT)}const fe={[Al]:0,[Ll]:1,[Cl]:768,[bs]:770,[Bl]:776,[Dl]:774,[Pl]:772,[Rl]:769,[Ms]:771,[Nl]:775,[Il]:773};function X(P,ne,q,ge,me,Fe,pt,mt){if(P===jt){g===!0&&(pe(3042),g=!1);return}if(g===!1&&(Q(3042),g=!0),P!==Sl){if(P!==v||mt!==A){if((x!==Ii||w!==Ii)&&(a.blendEquation(32774),x=Ii,w=Ii),mt)switch(P){case dr:a.blendFuncSeparate(1,771,1,771);break;case vs:a.blendFunc(1,1);break;case ys:a.blendFuncSeparate(0,0,769,771);break;case xs:a.blendFuncSeparate(0,768,0,770);break;default:console.error("THREE.WebGLState: Invalid blending: ",P);break}else switch(P){case dr:a.blendFuncSeparate(770,771,1,771);break;case vs:a.blendFunc(770,1);break;case ys:a.blendFunc(0,769);break;case xs:a.blendFunc(0,768);break;default:console.error("THREE.WebGLState: Invalid blending: ",P);break}f=null,m=null,y=null,M=null,v=P,A=mt}return}me=me||ne,Fe=Fe||q,pt=pt||ge,(ne!==x||me!==w)&&(a.blendEquationSeparate(re[ne],re[me]),x=ne,w=me),(q!==f||ge!==m||Fe!==y||pt!==M)&&(a.blendFuncSeparate(fe[q],fe[ge],fe[Fe],fe[pt]),f=q,m=ge,y=Fe,M=pt),v=P,A=null}function V(P,ne){P.side===Pi?pe(2884):Q(2884);let q=P.side===Xe;ne&&(q=!q),J(q),P.blending===dr&&P.transparent===!1?X(jt):X(P.blending,P.blendEquation,P.blendSrc,P.blendDst,P.blendEquationAlpha,P.blendSrcAlpha,P.blendDstAlpha,P.premultipliedAlpha),l.setFunc(P.depthFunc),l.setTest(P.depthTest),l.setMask(P.depthWrite),o.setMask(P.colorWrite);const ge=P.stencilWrite;c.setTest(ge),ge&&(c.setMask(P.stencilWriteMask),c.setFunc(P.stencilFunc,P.stencilRef,P.stencilFuncMask),c.setOp(P.stencilFail,P.stencilZFail,P.stencilZPass)),Ae(P.polygonOffset,P.polygonOffsetFactor,P.polygonOffsetUnits),P.alphaToCoverage===!0?Q(32926):pe(32926)}function J(P){_!==P&&(P?a.frontFace(2304):a.frontFace(2305),_=P)}function ce(P){P!==wl?(Q(2884),P!==L&&(P===ms?a.cullFace(1029):P===bl?a.cullFace(1028):a.cullFace(1032))):pe(2884),L=P}function ae(P){P!==N&&(I&&a.lineWidth(P),N=P)}function Ae(P,ne,q){P?(Q(32823),(R!==ne||C!==q)&&(a.polygonOffset(ne,q),R=ne,C=q)):pe(32823)}function E(P){P?Q(3089):pe(3089)}function S(P){P===void 0&&(P=33984+Y-1),z!==P&&(a.activeTexture(P),z=P)}function k(P,ne){z===null&&S();let q=U[z];q===void 0&&(q={type:void 0,texture:void 0},U[z]=q),(q.type!==P||q.texture!==ne)&&(a.bindTexture(P,ne||Z[P]),q.type=P,q.texture=ne)}function K(){const P=U[z];P!==void 0&&P.type!==void 0&&(a.bindTexture(P.type,null),P.type=void 0,P.texture=void 0)}function ee(){try{a.compressedTexImage2D.apply(a,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function oe(){try{a.texImage2D.apply(a,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function xe(){try{a.texImage3D.apply(a,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function Me(P){de.equals(P)===!1&&(a.scissor(P.x,P.y,P.z,P.w),de.copy(P))}function Se(P){se.equals(P)===!1&&(a.viewport(P.x,P.y,P.z,P.w),se.copy(P))}function ye(){a.disable(3042),a.disable(2884),a.disable(2929),a.disable(32823),a.disable(3089),a.disable(2960),a.disable(32926),a.blendEquation(32774),a.blendFunc(1,0),a.blendFuncSeparate(1,0,1,0),a.colorMask(!0,!0,!0,!0),a.clearColor(0,0,0,0),a.depthMask(!0),a.depthFunc(513),a.clearDepth(1),a.stencilMask(4294967295),a.stencilFunc(519,0,4294967295),a.stencilOp(7680,7680,7680),a.clearStencil(0),a.cullFace(1029),a.frontFace(2305),a.polygonOffset(0,0),a.activeTexture(33984),a.bindFramebuffer(36160,null),i===!0&&(a.bindFramebuffer(36009,null),a.bindFramebuffer(36008,null)),a.useProgram(null),a.lineWidth(1),a.scissor(0,0,a.canvas.width,a.canvas.height),a.viewport(0,0,a.canvas.width,a.canvas.height),h={},z=null,U={},d=null,u={},p=null,g=!1,v=null,x=null,f=null,m=null,w=null,y=null,M=null,A=!1,_=null,L=null,N=null,R=null,C=null,de.set(0,0,a.canvas.width,a.canvas.height),se.set(0,0,a.canvas.width,a.canvas.height),o.reset(),l.reset(),c.reset()}return{buffers:{color:o,depth:l,stencil:c},enable:Q,disable:pe,bindFramebuffer:be,bindXRFramebuffer:G,useProgram:Ee,setBlending:X,setMaterial:V,setFlipSided:J,setCullFace:ce,setLineWidth:ae,setPolygonOffset:Ae,setScissorTest:E,activeTexture:S,bindTexture:k,unbindTexture:K,compressedTexImage2D:ee,texImage2D:oe,texImage3D:xe,scissor:Me,viewport:Se,reset:ye}}function s0(a,e,t,i,r,n,s){const o=r.isWebGL2,l=r.maxTextures,c=r.maxCubemapSize,h=r.maxTextureSize,d=r.maxSamples,u=new WeakMap;let p,g=!1;try{g=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function v(E,S){return g?new OffscreenCanvas(E,S):aa("canvas")}function x(E,S,k,K){let ee=1;if((E.width>K||E.height>K)&&(ee=K/Math.max(E.width,E.height)),ee<1||S===!0)if(typeof HTMLImageElement<"u"&&E instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&E instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&E instanceof ImageBitmap){const oe=S?Qc:Math.floor,xe=oe(ee*E.width),Me=oe(ee*E.height);p===void 0&&(p=v(xe,Me));const Se=k?v(xe,Me):p;return Se.width=xe,Se.height=Me,Se.getContext("2d").drawImage(E,0,0,xe,Me),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+E.width+"x"+E.height+") to ("+xe+"x"+Me+")."),Se}else return"data"in E&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+E.width+"x"+E.height+")."),E;return E}function f(E){return Hs(E.width)&&Hs(E.height)}function m(E){return o?!1:E.wrapS!==ot||E.wrapT!==ot||E.minFilter!==Ke&&E.minFilter!==$e}function w(E,S){return E.generateMipmaps&&S&&E.minFilter!==Ke&&E.minFilter!==$e}function y(E,S,k,K,ee=1){a.generateMipmap(E);const oe=i.get(S);oe.__maxMipLevel=Math.log2(Math.max(k,K,ee))}function M(E,S,k,K){if(o===!1)return S;if(E!==null){if(a[E]!==void 0)return a[E];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+E+"'")}let ee=S;return S===6403&&(k===5126&&(ee=33326),k===5131&&(ee=33325),k===5121&&(ee=33321)),S===6407&&(k===5126&&(ee=34837),k===5131&&(ee=34843),k===5121&&(ee=32849)),S===6408&&(k===5126&&(ee=34836),k===5131&&(ee=34842),k===5121&&(ee=K===oi?35907:32856)),(ee===33325||ee===33326||ee===34842||ee===34836)&&e.get("EXT_color_buffer_float"),ee}function A(E){return E===Ke||E===Kn||E===Qn?9728:9729}function _(E){const S=E.target;S.removeEventListener("dispose",_),N(S),S.isVideoTexture&&u.delete(S),s.memory.textures--}function L(E){const S=E.target;S.removeEventListener("dispose",L),R(S)}function N(E){const S=i.get(E);S.__webglInit!==void 0&&(a.deleteTexture(S.__webglTexture),i.remove(E))}function R(E){const S=E.texture,k=i.get(E),K=i.get(S);if(E){if(K.__webglTexture!==void 0&&(a.deleteTexture(K.__webglTexture),s.memory.textures--),E.depthTexture&&E.depthTexture.dispose(),E.isWebGLCubeRenderTarget)for(let ee=0;ee<6;ee++)a.deleteFramebuffer(k.__webglFramebuffer[ee]),k.__webglDepthbuffer&&a.deleteRenderbuffer(k.__webglDepthbuffer[ee]);else a.deleteFramebuffer(k.__webglFramebuffer),k.__webglDepthbuffer&&a.deleteRenderbuffer(k.__webglDepthbuffer),k.__webglMultisampledFramebuffer&&a.deleteFramebuffer(k.__webglMultisampledFramebuffer),k.__webglColorRenderbuffer&&a.deleteRenderbuffer(k.__webglColorRenderbuffer),k.__webglDepthRenderbuffer&&a.deleteRenderbuffer(k.__webglDepthRenderbuffer);if(E.isWebGLMultipleRenderTargets)for(let ee=0,oe=S.length;ee<oe;ee++){const xe=i.get(S[ee]);xe.__webglTexture&&(a.deleteTexture(xe.__webglTexture),s.memory.textures--),i.remove(S[ee])}i.remove(S),i.remove(E)}}let C=0;function Y(){C=0}function I(){const E=C;return E>=l&&console.warn("THREE.WebGLTextures: Trying to use "+E+" texture units while this GPU supports only "+l),C+=1,E}function B(E,S){const k=i.get(E);if(E.isVideoTexture&&V(E),E.version>0&&k.__version!==E.version){const K=E.image;if(K===void 0)console.warn("THREE.WebGLRenderer: Texture marked for update but image is undefined");else if(K.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{Te(k,E,S);return}}t.activeTexture(33984+S),t.bindTexture(3553,k.__webglTexture)}function O(E,S){const k=i.get(E);if(E.version>0&&k.__version!==E.version){Te(k,E,S);return}t.activeTexture(33984+S),t.bindTexture(35866,k.__webglTexture)}function z(E,S){const k=i.get(E);if(E.version>0&&k.__version!==E.version){Te(k,E,S);return}t.activeTexture(33984+S),t.bindTexture(32879,k.__webglTexture)}function U(E,S){const k=i.get(E);if(E.version>0&&k.__version!==E.version){Z(k,E,S);return}t.activeTexture(33984+S),t.bindTexture(34067,k.__webglTexture)}const $={[cn]:10497,[ot]:33071,[hn]:33648},he={[Ke]:9728,[Kn]:9984,[Qn]:9986,[$e]:9729,[Ss]:9985,[Bi]:9987};function de(E,S,k){if(k?(a.texParameteri(E,10242,$[S.wrapS]),a.texParameteri(E,10243,$[S.wrapT]),(E===32879||E===35866)&&a.texParameteri(E,32882,$[S.wrapR]),a.texParameteri(E,10240,he[S.magFilter]),a.texParameteri(E,10241,he[S.minFilter])):(a.texParameteri(E,10242,33071),a.texParameteri(E,10243,33071),(E===32879||E===35866)&&a.texParameteri(E,32882,33071),(S.wrapS!==ot||S.wrapT!==ot)&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.wrapS and Texture.wrapT should be set to THREE.ClampToEdgeWrapping."),a.texParameteri(E,10240,A(S.magFilter)),a.texParameteri(E,10241,A(S.minFilter)),S.minFilter!==Ke&&S.minFilter!==$e&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.minFilter should be set to THREE.NearestFilter or THREE.LinearFilter.")),e.has("EXT_texture_filter_anisotropic")===!0){const K=e.get("EXT_texture_filter_anisotropic");if(S.type===Ft&&e.has("OES_texture_float_linear")===!1||o===!1&&S.type===Fi&&e.has("OES_texture_half_float_linear")===!1)return;(S.anisotropy>1||i.get(S).__currentAnisotropy)&&(a.texParameterf(E,K.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(S.anisotropy,r.getMaxAnisotropy())),i.get(S).__currentAnisotropy=S.anisotropy)}}function se(E,S){E.__webglInit===void 0&&(E.__webglInit=!0,S.addEventListener("dispose",_),E.__webglTexture=a.createTexture(),s.memory.textures++)}function Te(E,S,k){let K=3553;S.isDataTexture2DArray&&(K=35866),S.isDataTexture3D&&(K=32879),se(E,S),t.activeTexture(33984+k),t.bindTexture(K,E.__webglTexture),a.pixelStorei(37440,S.flipY),a.pixelStorei(37441,S.premultiplyAlpha),a.pixelStorei(3317,S.unpackAlignment),a.pixelStorei(37443,0);const ee=m(S)&&f(S.image)===!1,oe=x(S.image,ee,!1,h),xe=f(oe)||o,Me=n.convert(S.format);let Se=n.convert(S.type),ye=M(S.internalFormat,Me,Se,S.encoding);de(K,S,xe);let P;const ne=S.mipmaps;if(S.isDepthTexture)ye=6402,o?S.type===Ft?ye=36012:S.type===dn?ye=33190:S.type===mr?ye=35056:ye=33189:S.type===Ft&&console.error("WebGLRenderer: Floating point depth texture requires WebGL2."),S.format===zi&&ye===6402&&S.type!==un&&S.type!==dn&&(console.warn("THREE.WebGLRenderer: Use UnsignedShortType or UnsignedIntType for DepthFormat DepthTexture."),S.type=un,Se=n.convert(S.type)),S.format===fr&&ye===6402&&(ye=34041,S.type!==mr&&(console.warn("THREE.WebGLRenderer: Use UnsignedInt248Type for DepthStencilFormat DepthTexture."),S.type=mr,Se=n.convert(S.type))),t.texImage2D(3553,0,ye,oe.width,oe.height,0,Me,Se,null);else if(S.isDataTexture)if(ne.length>0&&xe){for(let q=0,ge=ne.length;q<ge;q++)P=ne[q],t.texImage2D(3553,q,ye,P.width,P.height,0,Me,Se,P.data);S.generateMipmaps=!1,E.__maxMipLevel=ne.length-1}else t.texImage2D(3553,0,ye,oe.width,oe.height,0,Me,Se,oe.data),E.__maxMipLevel=0;else if(S.isCompressedTexture){for(let q=0,ge=ne.length;q<ge;q++)P=ne[q],S.format!==lt&&S.format!==Oi?Me!==null?t.compressedTexImage2D(3553,q,ye,P.width,P.height,0,P.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):t.texImage2D(3553,q,ye,P.width,P.height,0,Me,Se,P.data);E.__maxMipLevel=ne.length-1}else if(S.isDataTexture2DArray)t.texImage3D(35866,0,ye,oe.width,oe.height,oe.depth,0,Me,Se,oe.data),E.__maxMipLevel=0;else if(S.isDataTexture3D)t.texImage3D(32879,0,ye,oe.width,oe.height,oe.depth,0,Me,Se,oe.data),E.__maxMipLevel=0;else if(ne.length>0&&xe){for(let q=0,ge=ne.length;q<ge;q++)P=ne[q],t.texImage2D(3553,q,ye,Me,Se,P);S.generateMipmaps=!1,E.__maxMipLevel=ne.length-1}else t.texImage2D(3553,0,ye,Me,Se,oe),E.__maxMipLevel=0;w(S,xe)&&y(K,S,oe.width,oe.height),E.__version=S.version,S.onUpdate&&S.onUpdate(S)}function Z(E,S,k){if(S.image.length!==6)return;se(E,S),t.activeTexture(33984+k),t.bindTexture(34067,E.__webglTexture),a.pixelStorei(37440,S.flipY),a.pixelStorei(37441,S.premultiplyAlpha),a.pixelStorei(3317,S.unpackAlignment),a.pixelStorei(37443,0);const K=S&&(S.isCompressedTexture||S.image[0].isCompressedTexture),ee=S.image[0]&&S.image[0].isDataTexture,oe=[];for(let q=0;q<6;q++)!K&&!ee?oe[q]=x(S.image[q],!1,!0,c):oe[q]=ee?S.image[q].image:S.image[q];const xe=oe[0],Me=f(xe)||o,Se=n.convert(S.format),ye=n.convert(S.type),P=M(S.internalFormat,Se,ye,S.encoding);de(34067,S,Me);let ne;if(K){for(let q=0;q<6;q++){ne=oe[q].mipmaps;for(let ge=0;ge<ne.length;ge++){const me=ne[ge];S.format!==lt&&S.format!==Oi?Se!==null?t.compressedTexImage2D(34069+q,ge,P,me.width,me.height,0,me.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):t.texImage2D(34069+q,ge,P,me.width,me.height,0,Se,ye,me.data)}}E.__maxMipLevel=ne.length-1}else{ne=S.mipmaps;for(let q=0;q<6;q++)if(ee){t.texImage2D(34069+q,0,P,oe[q].width,oe[q].height,0,Se,ye,oe[q].data);for(let ge=0;ge<ne.length;ge++){const me=ne[ge].image[q].image;t.texImage2D(34069+q,ge+1,P,me.width,me.height,0,Se,ye,me.data)}}else{t.texImage2D(34069+q,0,P,Se,ye,oe[q]);for(let ge=0;ge<ne.length;ge++){const me=ne[ge];t.texImage2D(34069+q,ge+1,P,Se,ye,me.image[q])}}E.__maxMipLevel=ne.length}w(S,Me)&&y(34067,S,xe.width,xe.height),E.__version=S.version,S.onUpdate&&S.onUpdate(S)}function Q(E,S,k,K,ee){const oe=n.convert(k.format),xe=n.convert(k.type),Me=M(k.internalFormat,oe,xe,k.encoding);ee===32879||ee===35866?t.texImage3D(ee,0,Me,S.width,S.height,S.depth,0,oe,xe,null):t.texImage2D(ee,0,Me,S.width,S.height,0,oe,xe,null),t.bindFramebuffer(36160,E),a.framebufferTexture2D(36160,K,ee,i.get(k).__webglTexture,0),t.bindFramebuffer(36160,null)}function pe(E,S,k){if(a.bindRenderbuffer(36161,E),S.depthBuffer&&!S.stencilBuffer){let K=33189;if(k){const ee=S.depthTexture;ee&&ee.isDepthTexture&&(ee.type===Ft?K=36012:ee.type===dn&&(K=33190));const oe=X(S);a.renderbufferStorageMultisample(36161,oe,K,S.width,S.height)}else a.renderbufferStorage(36161,K,S.width,S.height);a.framebufferRenderbuffer(36160,36096,36161,E)}else if(S.depthBuffer&&S.stencilBuffer){if(k){const K=X(S);a.renderbufferStorageMultisample(36161,K,35056,S.width,S.height)}else a.renderbufferStorage(36161,34041,S.width,S.height);a.framebufferRenderbuffer(36160,33306,36161,E)}else{const K=S.isWebGLMultipleRenderTargets===!0?S.texture[0]:S.texture,ee=n.convert(K.format),oe=n.convert(K.type),xe=M(K.internalFormat,ee,oe,K.encoding);if(k){const Me=X(S);a.renderbufferStorageMultisample(36161,Me,xe,S.width,S.height)}else a.renderbufferStorage(36161,xe,S.width,S.height)}a.bindRenderbuffer(36161,null)}function G(E,S){if(S&&S.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(36160,E),!(S.depthTexture&&S.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!i.get(S.depthTexture).__webglTexture||S.depthTexture.image.width!==S.width||S.depthTexture.image.height!==S.height)&&(S.depthTexture.image.width=S.width,S.depthTexture.image.height=S.height,S.depthTexture.needsUpdate=!0),B(S.depthTexture,0);const k=i.get(S.depthTexture).__webglTexture;if(S.depthTexture.format===zi)a.framebufferTexture2D(36160,36096,3553,k,0);else if(S.depthTexture.format===fr)a.framebufferTexture2D(36160,33306,3553,k,0);else throw new Error("Unknown depthTexture format")}function be(E){const S=i.get(E),k=E.isWebGLCubeRenderTarget===!0;if(E.depthTexture){if(k)throw new Error("target.depthTexture not supported in Cube render targets");G(S.__webglFramebuffer,E)}else if(k){S.__webglDepthbuffer=[];for(let K=0;K<6;K++)t.bindFramebuffer(36160,S.__webglFramebuffer[K]),S.__webglDepthbuffer[K]=a.createRenderbuffer(),pe(S.__webglDepthbuffer[K],E,!1)}else t.bindFramebuffer(36160,S.__webglFramebuffer),S.__webglDepthbuffer=a.createRenderbuffer(),pe(S.__webglDepthbuffer,E,!1);t.bindFramebuffer(36160,null)}function Ee(E){const S=E.texture,k=i.get(E),K=i.get(S);E.addEventListener("dispose",L),E.isWebGLMultipleRenderTargets!==!0&&(K.__webglTexture=a.createTexture(),K.__version=S.version,s.memory.textures++);const ee=E.isWebGLCubeRenderTarget===!0,oe=E.isWebGLMultipleRenderTargets===!0,xe=E.isWebGLMultisampleRenderTarget===!0,Me=S.isDataTexture3D||S.isDataTexture2DArray,Se=f(E)||o;if(o&&S.format===Oi&&(S.type===Ft||S.type===Fi)&&(S.format=lt,console.warn("THREE.WebGLRenderer: Rendering to textures with RGB format is not supported. Using RGBA format instead.")),ee){k.__webglFramebuffer=[];for(let ye=0;ye<6;ye++)k.__webglFramebuffer[ye]=a.createFramebuffer()}else if(k.__webglFramebuffer=a.createFramebuffer(),oe)if(r.drawBuffers){const ye=E.texture;for(let P=0,ne=ye.length;P<ne;P++){const q=i.get(ye[P]);q.__webglTexture===void 0&&(q.__webglTexture=a.createTexture(),s.memory.textures++)}}else console.warn("THREE.WebGLRenderer: WebGLMultipleRenderTargets can only be used with WebGL2 or WEBGL_draw_buffers extension.");else if(xe)if(o){k.__webglMultisampledFramebuffer=a.createFramebuffer(),k.__webglColorRenderbuffer=a.createRenderbuffer(),a.bindRenderbuffer(36161,k.__webglColorRenderbuffer);const ye=n.convert(S.format),P=n.convert(S.type),ne=M(S.internalFormat,ye,P,S.encoding),q=X(E);a.renderbufferStorageMultisample(36161,q,ne,E.width,E.height),t.bindFramebuffer(36160,k.__webglMultisampledFramebuffer),a.framebufferRenderbuffer(36160,36064,36161,k.__webglColorRenderbuffer),a.bindRenderbuffer(36161,null),E.depthBuffer&&(k.__webglDepthRenderbuffer=a.createRenderbuffer(),pe(k.__webglDepthRenderbuffer,E,!0)),t.bindFramebuffer(36160,null)}else console.warn("THREE.WebGLRenderer: WebGLMultisampleRenderTarget can only be used with WebGL2.");if(ee){t.bindTexture(34067,K.__webglTexture),de(34067,S,Se);for(let ye=0;ye<6;ye++)Q(k.__webglFramebuffer[ye],E,S,36064,34069+ye);w(S,Se)&&y(34067,S,E.width,E.height),t.unbindTexture()}else if(oe){const ye=E.texture;for(let P=0,ne=ye.length;P<ne;P++){const q=ye[P],ge=i.get(q);t.bindTexture(3553,ge.__webglTexture),de(3553,q,Se),Q(k.__webglFramebuffer,E,q,36064+P,3553),w(q,Se)&&y(3553,q,E.width,E.height)}t.unbindTexture()}else{let ye=3553;Me&&(o?ye=S.isDataTexture3D?32879:35866:console.warn("THREE.DataTexture3D and THREE.DataTexture2DArray only supported with WebGL2.")),t.bindTexture(ye,K.__webglTexture),de(ye,S,Se),Q(k.__webglFramebuffer,E,S,36064,ye),w(S,Se)&&y(ye,S,E.width,E.height,E.depth),t.unbindTexture()}E.depthBuffer&&be(E)}function re(E){const S=f(E)||o,k=E.isWebGLMultipleRenderTargets===!0?E.texture:[E.texture];for(let K=0,ee=k.length;K<ee;K++){const oe=k[K];if(w(oe,S)){const xe=E.isWebGLCubeRenderTarget?34067:3553,Me=i.get(oe).__webglTexture;t.bindTexture(xe,Me),y(xe,oe,E.width,E.height),t.unbindTexture()}}}function fe(E){if(E.isWebGLMultisampleRenderTarget)if(o){const S=E.width,k=E.height;let K=16384;E.depthBuffer&&(K|=256),E.stencilBuffer&&(K|=1024);const ee=i.get(E);t.bindFramebuffer(36008,ee.__webglMultisampledFramebuffer),t.bindFramebuffer(36009,ee.__webglFramebuffer),a.blitFramebuffer(0,0,S,k,0,0,S,k,K,9728),t.bindFramebuffer(36008,null),t.bindFramebuffer(36009,ee.__webglMultisampledFramebuffer)}else console.warn("THREE.WebGLRenderer: WebGLMultisampleRenderTarget can only be used with WebGL2.")}function X(E){return o&&E.isWebGLMultisampleRenderTarget?Math.min(d,E.samples):0}function V(E){const S=s.render.frame;u.get(E)!==S&&(u.set(E,S),E.update())}let J=!1,ce=!1;function ae(E,S){E&&E.isWebGLRenderTarget&&(J===!1&&(console.warn("THREE.WebGLTextures.safeSetTexture2D: don't use render targets as textures. Use their .texture property instead."),J=!0),E=E.texture),B(E,S)}function Ae(E,S){E&&E.isWebGLCubeRenderTarget&&(ce===!1&&(console.warn("THREE.WebGLTextures.safeSetTextureCube: don't use cube render targets as textures. Use their .texture property instead."),ce=!0),E=E.texture),U(E,S)}this.allocateTextureUnit=I,this.resetTextureUnits=Y,this.setTexture2D=B,this.setTexture2DArray=O,this.setTexture3D=z,this.setTextureCube=U,this.setupRenderTarget=Ee,this.updateRenderTargetMipmap=re,this.updateMultisampleRenderTarget=fe,this.safeSetTexture2D=ae,this.safeSetTextureCube=Ae}function ru(a,e,t){const i=t.isWebGL2;function r(n){let s;if(n===qt)return 5121;if(n===$l)return 32819;if(n===ec)return 32820;if(n===tc)return 33635;if(n===Jl)return 5120;if(n===Kl)return 5122;if(n===un)return 5123;if(n===Ql)return 5124;if(n===dn)return 5125;if(n===Ft)return 5126;if(n===Fi)return i?5131:(s=e.get("OES_texture_half_float"),s!==null?s.HALF_FLOAT_OES:null);if(n===ic)return 6406;if(n===Oi)return 6407;if(n===lt)return 6408;if(n===rc)return 6409;if(n===nc)return 6410;if(n===zi)return 6402;if(n===fr)return 34041;if(n===sc)return 6403;if(n===oc)return 36244;if(n===lc)return 33319;if(n===cc)return 33320;if(n===hc)return 36248;if(n===uc)return 36249;if(n===Ts||n===Es||n===As||n===Ls)if(s=e.get("WEBGL_compressed_texture_s3tc"),s!==null){if(n===Ts)return s.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===Es)return s.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===As)return s.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===Ls)return s.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===Cs||n===Rs||n===Ps||n===Is)if(s=e.get("WEBGL_compressed_texture_pvrtc"),s!==null){if(n===Cs)return s.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===Rs)return s.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===Ps)return s.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===Is)return s.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===dc)return s=e.get("WEBGL_compressed_texture_etc1"),s!==null?s.COMPRESSED_RGB_ETC1_WEBGL:null;if((n===Ds||n===Ns)&&(s=e.get("WEBGL_compressed_texture_etc"),s!==null)){if(n===Ds)return s.COMPRESSED_RGB8_ETC2;if(n===Ns)return s.COMPRESSED_RGBA8_ETC2_EAC}if(n===pc||n===mc||n===fc||n===gc||n===vc||n===yc||n===xc||n===_c||n===wc||n===bc||n===Mc||n===Sc||n===Tc||n===Ec||n===Lc||n===Cc||n===Rc||n===Pc||n===Ic||n===Dc||n===Nc||n===Bc||n===Fc||n===Oc||n===zc||n===Uc||n===Gc||n===Hc)return s=e.get("WEBGL_compressed_texture_astc"),s!==null?n:null;if(n===Ac)return s=e.get("EXT_texture_compression_bptc"),s!==null?n:null;if(n===mr)return i?34042:(s=e.get("WEBGL_depth_texture"),s!==null?s.UNSIGNED_INT_24_8_WEBGL:null)}return{convert:r}}class wo extends at{constructor(e=[]){super(),this.cameras=e}}wo.prototype.isArrayCamera=!0;class Yi extends Re{constructor(){super(),this.type="Group"}}Yi.prototype.isGroup=!0;const o0={type:"move"};class bo{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Yi,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Yi,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new b,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new b),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Yi,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new b,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new b),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,i){let r=null,n=null,s=null;const o=this._targetRay,l=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred")if(o!==null&&(r=t.getPose(e.targetRaySpace,i),r!==null&&(o.matrix.fromArray(r.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),r.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(r.linearVelocity)):o.hasLinearVelocity=!1,r.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(r.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(o0))),c&&e.hand){s=!0;for(const v of e.hand.values()){const x=t.getJointPose(v,i);if(c.joints[v.jointName]===void 0){const m=new Yi;m.matrixAutoUpdate=!1,m.visible=!1,c.joints[v.jointName]=m,c.add(m)}const f=c.joints[v.jointName];x!==null&&(f.matrix.fromArray(x.transform.matrix),f.matrix.decompose(f.position,f.rotation,f.scale),f.jointRadius=x.radius),f.visible=x!==null}const h=c.joints["index-finger-tip"],d=c.joints["thumb-tip"],u=h.position.distanceTo(d.position),p=.02,g=.005;c.inputState.pinching&&u>p+g?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&u<=p-g&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(n=t.getPose(e.gripSpace,i),n!==null&&(l.matrix.fromArray(n.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),n.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(n.linearVelocity)):l.hasLinearVelocity=!1,n.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(n.angularVelocity)):l.hasAngularVelocity=!1));return o!==null&&(o.visible=r!==null),l!==null&&(l.visible=n!==null),c!==null&&(c.visible=s!==null),this}}class l0 extends li{constructor(e,t){super();const i=this,r=e.state;let n=null,s=1,o=null,l="local-floor",c=null,h=null,d=null,u=null,p=null,g=!1,v=null,x=null,f=null,m=null,w=null,y=null;const M=[],A=new Map,_=new at;_.layers.enable(1),_.viewport=new ze;const L=new at;L.layers.enable(2),L.viewport=new ze;const N=[_,L],R=new wo;R.layers.enable(1),R.layers.enable(2);let C=null,Y=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(Z){let Q=M[Z];return Q===void 0&&(Q=new bo,M[Z]=Q),Q.getTargetRaySpace()},this.getControllerGrip=function(Z){let Q=M[Z];return Q===void 0&&(Q=new bo,M[Z]=Q),Q.getGripSpace()},this.getHand=function(Z){let Q=M[Z];return Q===void 0&&(Q=new bo,M[Z]=Q),Q.getHandSpace()};function I(Z){const Q=A.get(Z.inputSource);Q&&Q.dispatchEvent({type:Z.type,data:Z.inputSource})}function B(){A.forEach(function(Z,Q){Z.disconnect(Q)}),A.clear(),C=null,Y=null,r.bindXRFramebuffer(null),e.setRenderTarget(e.getRenderTarget()),d&&t.deleteFramebuffer(d),v&&t.deleteFramebuffer(v),x&&t.deleteRenderbuffer(x),f&&t.deleteRenderbuffer(f),d=null,v=null,x=null,f=null,p=null,u=null,h=null,n=null,Te.stop(),i.isPresenting=!1,i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(Z){s=Z,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(Z){l=Z,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return o},this.getBaseLayer=function(){return u!==null?u:p},this.getBinding=function(){return h},this.getFrame=function(){return m},this.getSession=function(){return n},this.setSession=async function(Z){if(n=Z,n!==null){n.addEventListener("select",I),n.addEventListener("selectstart",I),n.addEventListener("selectend",I),n.addEventListener("squeeze",I),n.addEventListener("squeezestart",I),n.addEventListener("squeezeend",I),n.addEventListener("end",B),n.addEventListener("inputsourceschange",O);const Q=t.getContextAttributes();if(Q.xrCompatible!==!0&&await t.makeXRCompatible(),n.renderState.layers===void 0){const pe={antialias:Q.antialias,alpha:Q.alpha,depth:Q.depth,stencil:Q.stencil,framebufferScaleFactor:s};p=new XRWebGLLayer(n,t,pe),n.updateRenderState({baseLayer:p})}else if(t instanceof WebGLRenderingContext){const pe={antialias:!0,alpha:Q.alpha,depth:Q.depth,stencil:Q.stencil,framebufferScaleFactor:s};p=new XRWebGLLayer(n,t,pe),n.updateRenderState({layers:[p]})}else{g=Q.antialias;let pe=null;Q.depth&&(y=256,Q.stencil&&(y|=1024),w=Q.stencil?33306:36096,pe=Q.stencil?35056:33190);const G={colorFormat:Q.alpha?32856:32849,depthFormat:pe,scaleFactor:s};h=new XRWebGLBinding(n,t),u=h.createProjectionLayer(G),d=t.createFramebuffer(),n.updateRenderState({layers:[u]}),g&&(v=t.createFramebuffer(),x=t.createRenderbuffer(),t.bindRenderbuffer(36161,x),t.renderbufferStorageMultisample(36161,4,32856,u.textureWidth,u.textureHeight),r.bindFramebuffer(36160,v),t.framebufferRenderbuffer(36160,36064,36161,x),t.bindRenderbuffer(36161,null),pe!==null&&(f=t.createRenderbuffer(),t.bindRenderbuffer(36161,f),t.renderbufferStorageMultisample(36161,4,pe,u.textureWidth,u.textureHeight),t.framebufferRenderbuffer(36160,w,36161,f),t.bindRenderbuffer(36161,null)),r.bindFramebuffer(36160,null))}o=await n.requestReferenceSpace(l),Te.setContext(n),Te.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}};function O(Z){const Q=n.inputSources;for(let pe=0;pe<M.length;pe++)A.set(Q[pe],M[pe]);for(let pe=0;pe<Z.removed.length;pe++){const G=Z.removed[pe],be=A.get(G);be&&(be.dispatchEvent({type:"disconnected",data:G}),A.delete(G))}for(let pe=0;pe<Z.added.length;pe++){const G=Z.added[pe],be=A.get(G);be&&be.dispatchEvent({type:"connected",data:G})}}const z=new b,U=new b;function $(Z,Q,pe){z.setFromMatrixPosition(Q.matrixWorld),U.setFromMatrixPosition(pe.matrixWorld);const G=z.distanceTo(U),be=Q.projectionMatrix.elements,Ee=pe.projectionMatrix.elements,re=be[14]/(be[10]-1),fe=be[14]/(be[10]+1),X=(be[9]+1)/be[5],V=(be[9]-1)/be[5],J=(be[8]-1)/be[0],ce=(Ee[8]+1)/Ee[0],ae=re*J,Ae=re*ce,E=G/(-J+ce),S=E*-J;Q.matrixWorld.decompose(Z.position,Z.quaternion,Z.scale),Z.translateX(S),Z.translateZ(E),Z.matrixWorld.compose(Z.position,Z.quaternion,Z.scale),Z.matrixWorldInverse.copy(Z.matrixWorld).invert();const k=re+E,K=fe+E,ee=ae-S,oe=Ae+(G-S),xe=X*fe/K*k,Me=V*fe/K*k;Z.projectionMatrix.makePerspective(ee,oe,xe,Me,k,K)}function he(Z,Q){Q===null?Z.matrixWorld.copy(Z.matrix):Z.matrixWorld.multiplyMatrices(Q.matrixWorld,Z.matrix),Z.matrixWorldInverse.copy(Z.matrixWorld).invert()}this.updateCamera=function(Z){if(n===null)return;R.near=L.near=_.near=Z.near,R.far=L.far=_.far=Z.far,(C!==R.near||Y!==R.far)&&(n.updateRenderState({depthNear:R.near,depthFar:R.far}),C=R.near,Y=R.far);const Q=Z.parent,pe=R.cameras;he(R,Q);for(let be=0;be<pe.length;be++)he(pe[be],Q);R.matrixWorld.decompose(R.position,R.quaternion,R.scale),Z.position.copy(R.position),Z.quaternion.copy(R.quaternion),Z.scale.copy(R.scale),Z.matrix.copy(R.matrix),Z.matrixWorld.copy(R.matrixWorld);const G=Z.children;for(let be=0,Ee=G.length;be<Ee;be++)G[be].updateMatrixWorld(!0);pe.length===2?$(R,_,L):R.projectionMatrix.copy(_.projectionMatrix)},this.getCamera=function(){return R},this.getFoveation=function(){if(u!==null)return u.fixedFoveation;if(p!==null)return p.fixedFoveation},this.setFoveation=function(Z){u!==null&&(u.fixedFoveation=Z),p!==null&&p.fixedFoveation!==void 0&&(p.fixedFoveation=Z)};let de=null;function se(Z,Q){if(c=Q.getViewerPose(o),m=Q,c!==null){const G=c.views;p!==null&&r.bindXRFramebuffer(p.framebuffer);let be=!1;G.length!==R.cameras.length&&(R.cameras.length=0,be=!0);for(let Ee=0;Ee<G.length;Ee++){const re=G[Ee];let fe=null;if(p!==null)fe=p.getViewport(re);else{const V=h.getViewSubImage(u,re);r.bindXRFramebuffer(d),V.depthStencilTexture!==void 0&&t.framebufferTexture2D(36160,w,3553,V.depthStencilTexture,0),t.framebufferTexture2D(36160,36064,3553,V.colorTexture,0),fe=V.viewport}const X=N[Ee];X.matrix.fromArray(re.transform.matrix),X.projectionMatrix.fromArray(re.projectionMatrix),X.viewport.set(fe.x,fe.y,fe.width,fe.height),Ee===0&&R.matrix.copy(X.matrix),be===!0&&R.cameras.push(X)}g&&(r.bindXRFramebuffer(v),y!==null&&t.clear(y))}const pe=n.inputSources;for(let G=0;G<M.length;G++){const be=M[G],Ee=pe[G];be.update(Ee,Q,o)}if(de&&de(Z,Q),g){const G=u.textureWidth,be=u.textureHeight;r.bindFramebuffer(36008,v),r.bindFramebuffer(36009,d),t.invalidateFramebuffer(36008,[w]),t.invalidateFramebuffer(36009,[w]),t.blitFramebuffer(0,0,G,be,0,0,G,be,16384,9728),t.invalidateFramebuffer(36008,[36064]),r.bindFramebuffer(36008,null),r.bindFramebuffer(36009,null),r.bindFramebuffer(36160,v)}m=null}const Te=new Mh;Te.setAnimationLoop(se),this.setAnimationLoop=function(Z){de=Z},this.dispose=function(){}}}function c0(a){function e(f,m){f.fogColor.value.copy(m.color),m.isFog?(f.fogNear.value=m.near,f.fogFar.value=m.far):m.isFogExp2&&(f.fogDensity.value=m.density)}function t(f,m,w,y,M){m.isMeshBasicMaterial?i(f,m):m.isMeshLambertMaterial?(i(f,m),l(f,m)):m.isMeshToonMaterial?(i(f,m),h(f,m)):m.isMeshPhongMaterial?(i(f,m),c(f,m)):m.isMeshStandardMaterial?(i(f,m),m.isMeshPhysicalMaterial?u(f,m,M):d(f,m)):m.isMeshMatcapMaterial?(i(f,m),p(f,m)):m.isMeshDepthMaterial?(i(f,m),g(f,m)):m.isMeshDistanceMaterial?(i(f,m),v(f,m)):m.isMeshNormalMaterial?(i(f,m),x(f,m)):m.isLineBasicMaterial?(r(f,m),m.isLineDashedMaterial&&n(f,m)):m.isPointsMaterial?s(f,m,w,y):m.isSpriteMaterial?o(f,m):m.isShadowMaterial?(f.color.value.copy(m.color),f.opacity.value=m.opacity):m.isShaderMaterial&&(m.uniformsNeedUpdate=!1)}function i(f,m){f.opacity.value=m.opacity,m.color&&f.diffuse.value.copy(m.color),m.emissive&&f.emissive.value.copy(m.emissive).multiplyScalar(m.emissiveIntensity),m.map&&(f.map.value=m.map),m.alphaMap&&(f.alphaMap.value=m.alphaMap),m.specularMap&&(f.specularMap.value=m.specularMap),m.alphaTest>0&&(f.alphaTest.value=m.alphaTest);const w=a.get(m).envMap;if(w){f.envMap.value=w,f.flipEnvMap.value=w.isCubeTexture&&w.isRenderTargetTexture===!1?-1:1,f.reflectivity.value=m.reflectivity,f.ior.value=m.ior,f.refractionRatio.value=m.refractionRatio;const A=a.get(w).__maxMipLevel;A!==void 0&&(f.maxMipLevel.value=A)}m.lightMap&&(f.lightMap.value=m.lightMap,f.lightMapIntensity.value=m.lightMapIntensity),m.aoMap&&(f.aoMap.value=m.aoMap,f.aoMapIntensity.value=m.aoMapIntensity);let y;m.map?y=m.map:m.specularMap?y=m.specularMap:m.displacementMap?y=m.displacementMap:m.normalMap?y=m.normalMap:m.bumpMap?y=m.bumpMap:m.roughnessMap?y=m.roughnessMap:m.metalnessMap?y=m.metalnessMap:m.alphaMap?y=m.alphaMap:m.emissiveMap?y=m.emissiveMap:m.clearcoatMap?y=m.clearcoatMap:m.clearcoatNormalMap?y=m.clearcoatNormalMap:m.clearcoatRoughnessMap?y=m.clearcoatRoughnessMap:m.specularIntensityMap?y=m.specularIntensityMap:m.specularColorMap?y=m.specularColorMap:m.transmissionMap?y=m.transmissionMap:m.thicknessMap?y=m.thicknessMap:m.sheenColorMap?y=m.sheenColorMap:m.sheenRoughnessMap&&(y=m.sheenRoughnessMap),y!==void 0&&(y.isWebGLRenderTarget&&(y=y.texture),y.matrixAutoUpdate===!0&&y.updateMatrix(),f.uvTransform.value.copy(y.matrix));let M;m.aoMap?M=m.aoMap:m.lightMap&&(M=m.lightMap),M!==void 0&&(M.isWebGLRenderTarget&&(M=M.texture),M.matrixAutoUpdate===!0&&M.updateMatrix(),f.uv2Transform.value.copy(M.matrix))}function r(f,m){f.diffuse.value.copy(m.color),f.opacity.value=m.opacity}function n(f,m){f.dashSize.value=m.dashSize,f.totalSize.value=m.dashSize+m.gapSize,f.scale.value=m.scale}function s(f,m,w,y){f.diffuse.value.copy(m.color),f.opacity.value=m.opacity,f.size.value=m.size*w,f.scale.value=y*.5,m.map&&(f.map.value=m.map),m.alphaMap&&(f.alphaMap.value=m.alphaMap),m.alphaTest>0&&(f.alphaTest.value=m.alphaTest);let M;m.map?M=m.map:m.alphaMap&&(M=m.alphaMap),M!==void 0&&(M.matrixAutoUpdate===!0&&M.updateMatrix(),f.uvTransform.value.copy(M.matrix))}function o(f,m){f.diffuse.value.copy(m.color),f.opacity.value=m.opacity,f.rotation.value=m.rotation,m.map&&(f.map.value=m.map),m.alphaMap&&(f.alphaMap.value=m.alphaMap),m.alphaTest>0&&(f.alphaTest.value=m.alphaTest);let w;m.map?w=m.map:m.alphaMap&&(w=m.alphaMap),w!==void 0&&(w.matrixAutoUpdate===!0&&w.updateMatrix(),f.uvTransform.value.copy(w.matrix))}function l(f,m){m.emissiveMap&&(f.emissiveMap.value=m.emissiveMap)}function c(f,m){f.specular.value.copy(m.specular),f.shininess.value=Math.max(m.shininess,1e-4),m.emissiveMap&&(f.emissiveMap.value=m.emissiveMap),m.bumpMap&&(f.bumpMap.value=m.bumpMap,f.bumpScale.value=m.bumpScale,m.side===Xe&&(f.bumpScale.value*=-1)),m.normalMap&&(f.normalMap.value=m.normalMap,f.normalScale.value.copy(m.normalScale),m.side===Xe&&f.normalScale.value.negate()),m.displacementMap&&(f.displacementMap.value=m.displacementMap,f.displacementScale.value=m.displacementScale,f.displacementBias.value=m.displacementBias)}function h(f,m){m.gradientMap&&(f.gradientMap.value=m.gradientMap),m.emissiveMap&&(f.emissiveMap.value=m.emissiveMap),m.bumpMap&&(f.bumpMap.value=m.bumpMap,f.bumpScale.value=m.bumpScale,m.side===Xe&&(f.bumpScale.value*=-1)),m.normalMap&&(f.normalMap.value=m.normalMap,f.normalScale.value.copy(m.normalScale),m.side===Xe&&f.normalScale.value.negate()),m.displacementMap&&(f.displacementMap.value=m.displacementMap,f.displacementScale.value=m.displacementScale,f.displacementBias.value=m.displacementBias)}function d(f,m){f.roughness.value=m.roughness,f.metalness.value=m.metalness,m.roughnessMap&&(f.roughnessMap.value=m.roughnessMap),m.metalnessMap&&(f.metalnessMap.value=m.metalnessMap),m.emissiveMap&&(f.emissiveMap.value=m.emissiveMap),m.bumpMap&&(f.bumpMap.value=m.bumpMap,f.bumpScale.value=m.bumpScale,m.side===Xe&&(f.bumpScale.value*=-1)),m.normalMap&&(f.normalMap.value=m.normalMap,f.normalScale.value.copy(m.normalScale),m.side===Xe&&f.normalScale.value.negate()),m.displacementMap&&(f.displacementMap.value=m.displacementMap,f.displacementScale.value=m.displacementScale,f.displacementBias.value=m.displacementBias),a.get(m).envMap&&(f.envMapIntensity.value=m.envMapIntensity)}function u(f,m,w){d(f,m),f.ior.value=m.ior,m.sheen>0&&(f.sheenColor.value.copy(m.sheenColor).multiplyScalar(m.sheen),f.sheenRoughness.value=m.sheenRoughness,m.sheenColorMap&&(f.sheenColorMap.value=m.sheenColorMap),m.sheenRoughnessMap&&(f.sheenRoughnessMap.value=m.sheenRoughnessMap)),m.clearcoat>0&&(f.clearcoat.value=m.clearcoat,f.clearcoatRoughness.value=m.clearcoatRoughness,m.clearcoatMap&&(f.clearcoatMap.value=m.clearcoatMap),m.clearcoatRoughnessMap&&(f.clearcoatRoughnessMap.value=m.clearcoatRoughnessMap),m.clearcoatNormalMap&&(f.clearcoatNormalScale.value.copy(m.clearcoatNormalScale),f.clearcoatNormalMap.value=m.clearcoatNormalMap,m.side===Xe&&f.clearcoatNormalScale.value.negate())),m.transmission>0&&(f.transmission.value=m.transmission,f.transmissionSamplerMap.value=w.texture,f.transmissionSamplerSize.value.set(w.width,w.height),m.transmissionMap&&(f.transmissionMap.value=m.transmissionMap),f.thickness.value=m.thickness,m.thicknessMap&&(f.thicknessMap.value=m.thicknessMap),f.attenuationDistance.value=m.attenuationDistance,f.attenuationColor.value.copy(m.attenuationColor)),f.specularIntensity.value=m.specularIntensity,f.specularColor.value.copy(m.specularColor),m.specularIntensityMap&&(f.specularIntensityMap.value=m.specularIntensityMap),m.specularColorMap&&(f.specularColorMap.value=m.specularColorMap)}function p(f,m){m.matcap&&(f.matcap.value=m.matcap),m.bumpMap&&(f.bumpMap.value=m.bumpMap,f.bumpScale.value=m.bumpScale,m.side===Xe&&(f.bumpScale.value*=-1)),m.normalMap&&(f.normalMap.value=m.normalMap,f.normalScale.value.copy(m.normalScale),m.side===Xe&&f.normalScale.value.negate()),m.displacementMap&&(f.displacementMap.value=m.displacementMap,f.displacementScale.value=m.displacementScale,f.displacementBias.value=m.displacementBias)}function g(f,m){m.displacementMap&&(f.displacementMap.value=m.displacementMap,f.displacementScale.value=m.displacementScale,f.displacementBias.value=m.displacementBias)}function v(f,m){m.displacementMap&&(f.displacementMap.value=m.displacementMap,f.displacementScale.value=m.displacementScale,f.displacementBias.value=m.displacementBias),f.referencePosition.value.copy(m.referencePosition),f.nearDistance.value=m.nearDistance,f.farDistance.value=m.farDistance}function x(f,m){m.bumpMap&&(f.bumpMap.value=m.bumpMap,f.bumpScale.value=m.bumpScale,m.side===Xe&&(f.bumpScale.value*=-1)),m.normalMap&&(f.normalMap.value=m.normalMap,f.normalScale.value.copy(m.normalScale),m.side===Xe&&f.normalScale.value.negate()),m.displacementMap&&(f.displacementMap.value=m.displacementMap,f.displacementScale.value=m.displacementScale,f.displacementBias.value=m.displacementBias)}return{refreshFogUniforms:e,refreshMaterialUniforms:t}}function h0(){const a=aa("canvas");return a.style.display="block",a}function Ue(a={}){const e=a.canvas!==void 0?a.canvas:h0(),t=a.context!==void 0?a.context:null,i=a.alpha!==void 0?a.alpha:!1,r=a.depth!==void 0?a.depth:!0,n=a.stencil!==void 0?a.stencil:!0,s=a.antialias!==void 0?a.antialias:!1,o=a.premultipliedAlpha!==void 0?a.premultipliedAlpha:!0,l=a.preserveDrawingBuffer!==void 0?a.preserveDrawingBuffer:!1,c=a.powerPreference!==void 0?a.powerPreference:"default",h=a.failIfMajorPerformanceCaveat!==void 0?a.failIfMajorPerformanceCaveat:!1;let d=null,u=null;const p=[],g=[];this.domElement=e,this.debug={checkShaderErrors:!0},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.gammaFactor=2,this.outputEncoding=ct,this.physicallyCorrectLights=!1,this.toneMapping=si,this.toneMappingExposure=1;const v=this;let x=!1,f=0,m=0,w=null,y=-1,M=null;const A=new ze,_=new ze;let L=null,N=e.width,R=e.height,C=1,Y=null,I=null;const B=new ze(0,0,N,R),O=new ze(0,0,N,R);let z=!1;const U=[],$=new Mn;let he=!1,de=!1,se=null;const Te=new ue,Z=new b,Q={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};function pe(){return w===null?C:1}let G=t;function be(T,D){for(let H=0;H<T.length;H++){const F=T[H],W=e.getContext(F,D);if(W!==null)return W}return null}try{const T={alpha:i,depth:r,stencil:n,antialias:s,premultipliedAlpha:o,preserveDrawingBuffer:l,powerPreference:c,failIfMajorPerformanceCaveat:h};if(e.addEventListener("webglcontextlost",pt,!1),e.addEventListener("webglcontextrestored",mt,!1),G===null){const D=["webgl2","webgl","experimental-webgl"];if(v.isWebGL1Renderer===!0&&D.shift(),G=be(D,T),G===null)throw be(D)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}G.getShaderPrecisionFormat===void 0&&(G.getShaderPrecisionFormat=function(){return{rangeMin:1,rangeMax:1,precision:1}})}catch(T){throw console.error("THREE.WebGLRenderer: "+T.message),T}let Ee,re,fe,X,V,J,ce,ae,Ae,E,S,k,K,ee,oe,xe,Me,Se,ye,P,ne,q,ge;function me(){Ee=new Ng(G),re=new Ag(G,Ee,a),Ee.init(re),q=new ru(G,Ee,re),fe=new a0(G,Ee,re),U[0]=1029,X=new Og,V=new Yv,J=new s0(G,Ee,fe,V,re,q,X),ce=new Cg(v),ae=new Dg(v),Ae=new Jp(G,re),ge=new Tg(G,Ee,Ae,re),E=new Bg(G,Ae,X,ge),S=new Hg(G,E,Ae,X),ye=new Gg(G,re,J),xe=new Lg(V),k=new Xv(v,ce,ae,Ee,re,ge,xe),K=new c0(V),ee=new Jv(V),oe=new i0(Ee,re),Se=new Sg(v,ce,fe,S,o),Me=new iu(v,S,re),P=new Eg(G,Ee,X,re),ne=new Fg(G,Ee,X,re),X.programs=k.programs,v.capabilities=re,v.extensions=Ee,v.properties=V,v.renderLists=ee,v.shadowMap=Me,v.state=fe,v.info=X}me();const Fe=new l0(v,G);this.xr=Fe,this.getContext=function(){return G},this.getContextAttributes=function(){return G.getContextAttributes()},this.forceContextLoss=function(){const T=Ee.get("WEBGL_lose_context");T&&T.loseContext()},this.forceContextRestore=function(){const T=Ee.get("WEBGL_lose_context");T&&T.restoreContext()},this.getPixelRatio=function(){return C},this.setPixelRatio=function(T){T!==void 0&&(C=T,this.setSize(N,R,!1))},this.getSize=function(T){return T.set(N,R)},this.setSize=function(T,D,H){if(Fe.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}N=T,R=D,e.width=Math.floor(T*C),e.height=Math.floor(D*C),H!==!1&&(e.style.width=T+"px",e.style.height=D+"px"),this.setViewport(0,0,T,D)},this.getDrawingBufferSize=function(T){return T.set(N*C,R*C).floor()},this.setDrawingBufferSize=function(T,D,H){N=T,R=D,C=H,e.width=Math.floor(T*H),e.height=Math.floor(D*H),this.setViewport(0,0,T,D)},this.getCurrentViewport=function(T){return T.copy(A)},this.getViewport=function(T){return T.copy(B)},this.setViewport=function(T,D,H,F){T.isVector4?B.set(T.x,T.y,T.z,T.w):B.set(T,D,H,F),fe.viewport(A.copy(B).multiplyScalar(C).floor())},this.getScissor=function(T){return T.copy(O)},this.setScissor=function(T,D,H,F){T.isVector4?O.set(T.x,T.y,T.z,T.w):O.set(T,D,H,F),fe.scissor(_.copy(O).multiplyScalar(C).floor())},this.getScissorTest=function(){return z},this.setScissorTest=function(T){fe.setScissorTest(z=T)},this.setOpaqueSort=function(T){Y=T},this.setTransparentSort=function(T){I=T},this.getClearColor=function(T){return T.copy(Se.getClearColor())},this.setClearColor=function(){Se.setClearColor.apply(Se,arguments)},this.getClearAlpha=function(){return Se.getClearAlpha()},this.setClearAlpha=function(){Se.setClearAlpha.apply(Se,arguments)},this.clear=function(T,D,H){let F=0;(T===void 0||T)&&(F|=16384),(D===void 0||D)&&(F|=256),(H===void 0||H)&&(F|=1024),G.clear(F)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){e.removeEventListener("webglcontextlost",pt,!1),e.removeEventListener("webglcontextrestored",mt,!1),ee.dispose(),oe.dispose(),V.dispose(),ce.dispose(),ae.dispose(),S.dispose(),ge.dispose(),Fe.dispose(),Fe.removeEventListener("sessionstart",gl),Fe.removeEventListener("sessionend",vl),se&&(se.dispose(),se=null),Ti.stop()};function pt(T){T.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),x=!0}function mt(){console.log("THREE.WebGLRenderer: Context Restored."),x=!1;const T=X.autoReset,D=Me.enabled,H=Me.autoUpdate,F=Me.needsUpdate,W=Me.type;me(),X.autoReset=T,Me.enabled=D,Me.autoUpdate=H,Me.needsUpdate=F,Me.type=W}function ni(T){const D=T.target;D.removeEventListener("dispose",ni),qe(D)}function qe(T){Wt(T),V.remove(T)}function Wt(T){const D=V.get(T).programs;D!==void 0&&D.forEach(function(H){k.releaseProgram(H)})}this.renderBufferDirect=function(T,D,H,F,W,_e){D===null&&(D=Q);const ve=W.isMesh&&W.matrixWorld.determinant()<0,Le=Od(T,D,H,F,W);fe.setMaterial(F,ve);let Pe=H.index;const ke=H.attributes.position;if(Pe===null){if(ke===void 0||ke.count===0)return}else if(Pe.count===0)return;let Ie=1;F.wireframe===!0&&(Pe=E.getWireframeAttribute(H),Ie=2),ge.setup(W,F,Le,H,Pe);let Ne,it=P;Pe!==null&&(Ne=Ae.get(Pe),it=ne,it.setIndex(Ne));const Ei=Pe!==null?Pe.count:ke.count,Oe=H.drawRange.start*Ie,rn=H.drawRange.count*Ie,Tt=_e!==null?_e.start*Ie:0,Ai=_e!==null?_e.count*Ie:1/0,Li=Math.max(Oe,Tt),Ci=Math.min(Ei,Oe+rn,Tt+Ai)-1,ai=Math.max(0,Ci-Li+1);if(ai!==0){if(W.isMesh)F.wireframe===!0?(fe.setLineWidth(F.wireframeLinewidth*pe()),it.setMode(1)):it.setMode(4);else if(W.isLine){let We=F.linewidth;We===void 0&&(We=1),fe.setLineWidth(We*pe()),W.isLineSegments?it.setMode(1):W.isLineLoop?it.setMode(2):it.setMode(3)}else W.isPoints?it.setMode(0):W.isSprite&&it.setMode(4);if(W.isInstancedMesh)it.renderInstances(Li,ai,W.count);else if(H.isInstancedBufferGeometry){const We=Math.min(H.instanceCount,H._maxInstanceCount);it.renderInstances(Li,ai,We)}else it.render(Li,ai)}},this.compile=function(T,D){u=oe.get(T),u.init(),g.push(u),T.traverseVisible(function(H){H.isLight&&H.layers.test(D.layers)&&(u.pushLight(H),H.castShadow&&u.pushShadow(H))}),u.setupLights(v.physicallyCorrectLights),T.traverse(function(H){const F=H.material;if(F)if(Array.isArray(F))for(let W=0;W<F.length;W++){const _e=F[W];ps(_e,T,H)}else ps(F,T,H)}),g.pop(),u=null};let At=null;function Nd(T){At&&At(T)}function gl(){Ti.stop()}function vl(){Ti.start()}const Ti=new Mh;Ti.setAnimationLoop(Nd),typeof window<"u"&&Ti.setContext(window),this.setAnimationLoop=function(T){At=T,Fe.setAnimationLoop(T),T===null?Ti.stop():Ti.start()},Fe.addEventListener("sessionstart",gl),Fe.addEventListener("sessionend",vl),this.render=function(T,D){if(D!==void 0&&D.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(x===!0)return;T.autoUpdate===!0&&T.updateMatrixWorld(),D.parent===null&&D.updateMatrixWorld(),Fe.enabled===!0&&Fe.isPresenting===!0&&(Fe.cameraAutoUpdate===!0&&Fe.updateCamera(D),D=Fe.getCamera()),T.isScene===!0&&T.onBeforeRender(v,T,D,w),u=oe.get(T,g.length),u.init(),g.push(u),Te.multiplyMatrices(D.projectionMatrix,D.matrixWorldInverse),$.setFromProjectionMatrix(Te),de=this.localClippingEnabled,he=xe.init(this.clippingPlanes,de,D),d=ee.get(T,p.length),d.init(),p.push(d),yl(T,D,0,v.sortObjects),d.finish(),v.sortObjects===!0&&d.sort(Y,I),he===!0&&xe.beginShadows();const H=u.state.shadowsArray;if(Me.render(H,T,D),he===!0&&xe.endShadows(),this.info.autoReset===!0&&this.info.reset(),Se.render(d,T),u.setupLights(v.physicallyCorrectLights),D.isArrayCamera){const F=D.cameras;for(let W=0,_e=F.length;W<_e;W++){const ve=F[W];xl(d,T,ve,ve.viewport)}}else xl(d,T,D);w!==null&&(J.updateMultisampleRenderTarget(w),J.updateRenderTargetMipmap(w)),T.isScene===!0&&T.onAfterRender(v,T,D),fe.buffers.depth.setTest(!0),fe.buffers.depth.setMask(!0),fe.buffers.color.setMask(!0),fe.setPolygonOffset(!1),ge.resetDefaultState(),y=-1,M=null,g.pop(),g.length>0?u=g[g.length-1]:u=null,p.pop(),p.length>0?d=p[p.length-1]:d=null};function yl(T,D,H,F){if(T.visible===!1)return;if(T.layers.test(D.layers)){if(T.isGroup)H=T.renderOrder;else if(T.isLOD)T.autoUpdate===!0&&T.update(D);else if(T.isLight)u.pushLight(T),T.castShadow&&u.pushShadow(T);else if(T.isSprite){if(!T.frustumCulled||$.intersectsSprite(T)){F&&Z.setFromMatrixPosition(T.matrixWorld).applyMatrix4(Te);const _e=S.update(T),ve=T.material;ve.visible&&d.push(T,_e,ve,H,Z.z,null)}}else if((T.isMesh||T.isLine||T.isPoints)&&(T.isSkinnedMesh&&T.skeleton.frame!==X.render.frame&&(T.skeleton.update(),T.skeleton.frame=X.render.frame),!T.frustumCulled||$.intersectsObject(T))){F&&Z.setFromMatrixPosition(T.matrixWorld).applyMatrix4(Te);const _e=S.update(T),ve=T.material;if(Array.isArray(ve)){const Le=_e.groups;for(let Pe=0,ke=Le.length;Pe<ke;Pe++){const Ie=Le[Pe],Ne=ve[Ie.materialIndex];Ne&&Ne.visible&&d.push(T,_e,Ne,H,Z.z,Ie)}}else ve.visible&&d.push(T,_e,ve,H,Z.z,null)}}const W=T.children;for(let _e=0,ve=W.length;_e<ve;_e++)yl(W[_e],D,H,F)}function xl(T,D,H,F){const W=T.opaque,_e=T.transmissive,ve=T.transparent;u.setupLightsView(H),_e.length>0&&Bd(W,D,H),F&&fe.viewport(A.copy(F)),W.length>0&&Yn(W,D,H),_e.length>0&&Yn(_e,D,H),ve.length>0&&Yn(ve,D,H)}function Bd(T,D,H){if(se===null){const _e=s===!0&&re.isWebGL2===!0?Vs:Ct;se=new _e(1024,1024,{generateMipmaps:!0,type:q.convert(Fi)!==null?Fi:qt,minFilter:Bi,magFilter:Ke,wrapS:ot,wrapT:ot})}const F=v.getRenderTarget();v.setRenderTarget(se),v.clear();const W=v.toneMapping;v.toneMapping=si,Yn(T,D,H),v.toneMapping=W,J.updateMultisampleRenderTarget(se),J.updateRenderTargetMipmap(se),v.setRenderTarget(F)}function Yn(T,D,H){const F=D.isScene===!0?D.overrideMaterial:null;for(let W=0,_e=T.length;W<_e;W++){const ve=T[W],Le=ve.object,Pe=ve.geometry,ke=F===null?ve.material:F,Ie=ve.group;Le.layers.test(H.layers)&&Fd(Le,D,H,Pe,ke,Ie)}}function Fd(T,D,H,F,W,_e){T.onBeforeRender(v,D,H,F,W,_e),T.modelViewMatrix.multiplyMatrices(H.matrixWorldInverse,T.matrixWorld),T.normalMatrix.getNormalMatrix(T.modelViewMatrix),W.onBeforeRender(v,D,H,F,T,_e),W.transparent===!0&&W.side===Pi?(W.side=Xe,W.needsUpdate=!0,v.renderBufferDirect(H,D,F,W,T,_e),W.side=Ri,W.needsUpdate=!0,v.renderBufferDirect(H,D,F,W,T,_e),W.side=Pi):v.renderBufferDirect(H,D,F,W,T,_e),T.onAfterRender(v,D,H,F,W,_e)}function ps(T,D,H){D.isScene!==!0&&(D=Q);const F=V.get(T),W=u.state.lights,_e=u.state.shadowsArray,ve=W.state.version,Le=k.getParameters(T,W.state,_e,D,H),Pe=k.getProgramCacheKey(Le);let ke=F.programs;F.environment=T.isMeshStandardMaterial?D.environment:null,F.fog=D.fog,F.envMap=(T.isMeshStandardMaterial?ae:ce).get(T.envMap||F.environment),ke===void 0&&(T.addEventListener("dispose",ni),ke=new Map,F.programs=ke);let Ie=ke.get(Pe);if(Ie!==void 0){if(F.currentProgram===Ie&&F.lightsStateVersion===ve)return _l(T,Le),Ie}else Le.uniforms=k.getUniforms(T),T.onBuild(H,Le,v),T.onBeforeCompile(Le,v),Ie=k.acquireProgram(Le,Pe),ke.set(Pe,Ie),F.uniforms=Le.uniforms;const Ne=F.uniforms;(!T.isShaderMaterial&&!T.isRawShaderMaterial||T.clipping===!0)&&(Ne.clippingPlanes=xe.uniform),_l(T,Le),F.needsLights=Ud(T),F.lightsStateVersion=ve,F.needsLights&&(Ne.ambientLightColor.value=W.state.ambient,Ne.lightProbe.value=W.state.probe,Ne.directionalLights.value=W.state.directional,Ne.directionalLightShadows.value=W.state.directionalShadow,Ne.spotLights.value=W.state.spot,Ne.spotLightShadows.value=W.state.spotShadow,Ne.rectAreaLights.value=W.state.rectArea,Ne.ltc_1.value=W.state.rectAreaLTC1,Ne.ltc_2.value=W.state.rectAreaLTC2,Ne.pointLights.value=W.state.point,Ne.pointLightShadows.value=W.state.pointShadow,Ne.hemisphereLights.value=W.state.hemi,Ne.directionalShadowMap.value=W.state.directionalShadowMap,Ne.directionalShadowMatrix.value=W.state.directionalShadowMatrix,Ne.spotShadowMap.value=W.state.spotShadowMap,Ne.spotShadowMatrix.value=W.state.spotShadowMatrix,Ne.pointShadowMap.value=W.state.pointShadowMap,Ne.pointShadowMatrix.value=W.state.pointShadowMatrix);const it=Ie.getUniforms(),Ei=_i.seqWithValue(it.seq,Ne);return F.currentProgram=Ie,F.uniformsList=Ei,Ie}function _l(T,D){const H=V.get(T);H.outputEncoding=D.outputEncoding,H.instancing=D.instancing,H.skinning=D.skinning,H.morphTargets=D.morphTargets,H.morphNormals=D.morphNormals,H.morphTargetsCount=D.morphTargetsCount,H.numClippingPlanes=D.numClippingPlanes,H.numIntersection=D.numClipIntersection,H.vertexAlphas=D.vertexAlphas,H.vertexTangents=D.vertexTangents}function Od(T,D,H,F,W){D.isScene!==!0&&(D=Q),J.resetTextureUnits();const _e=D.fog,ve=F.isMeshStandardMaterial?D.environment:null,Le=w===null?v.outputEncoding:w.texture.encoding,Pe=(F.isMeshStandardMaterial?ae:ce).get(F.envMap||ve),ke=F.vertexColors===!0&&!!H.attributes.color&&H.attributes.color.itemSize===4,Ie=!!F.normalMap&&!!H.attributes.tangent,Ne=!!H.morphAttributes.position,it=!!H.morphAttributes.normal,Ei=H.morphAttributes.position?H.morphAttributes.position.length:0,Oe=V.get(F),rn=u.state.lights;if(he===!0&&(de===!0||T!==M)){const Lt=T===M&&F.id===y;xe.setState(F,T,Lt)}let Tt=!1;F.version===Oe.__version?(Oe.needsLights&&Oe.lightsStateVersion!==rn.state.version||Oe.outputEncoding!==Le||W.isInstancedMesh&&Oe.instancing===!1||!W.isInstancedMesh&&Oe.instancing===!0||W.isSkinnedMesh&&Oe.skinning===!1||!W.isSkinnedMesh&&Oe.skinning===!0||Oe.envMap!==Pe||F.fog&&Oe.fog!==_e||Oe.numClippingPlanes!==void 0&&(Oe.numClippingPlanes!==xe.numPlanes||Oe.numIntersection!==xe.numIntersection)||Oe.vertexAlphas!==ke||Oe.vertexTangents!==Ie||Oe.morphTargets!==Ne||Oe.morphNormals!==it||re.isWebGL2===!0&&Oe.morphTargetsCount!==Ei)&&(Tt=!0):(Tt=!0,Oe.__version=F.version);let Ai=Oe.currentProgram;Tt===!0&&(Ai=ps(F,D,W));let Li=!1,Ci=!1,ai=!1;const We=Ai.getUniforms(),nn=Oe.uniforms;if(fe.useProgram(Ai.program)&&(Li=!0,Ci=!0,ai=!0),F.id!==y&&(y=F.id,Ci=!0),Li||M!==T){if(We.setValue(G,"projectionMatrix",T.projectionMatrix),re.logarithmicDepthBuffer&&We.setValue(G,"logDepthBufFC",2/(Math.log(T.far+1)/Math.LN2)),M!==T&&(M=T,Ci=!0,ai=!0),F.isShaderMaterial||F.isMeshPhongMaterial||F.isMeshToonMaterial||F.isMeshStandardMaterial||F.envMap){const Lt=We.map.cameraPosition;Lt!==void 0&&Lt.setValue(G,Z.setFromMatrixPosition(T.matrixWorld))}(F.isMeshPhongMaterial||F.isMeshToonMaterial||F.isMeshLambertMaterial||F.isMeshBasicMaterial||F.isMeshStandardMaterial||F.isShaderMaterial)&&We.setValue(G,"isOrthographic",T.isOrthographicCamera===!0),(F.isMeshPhongMaterial||F.isMeshToonMaterial||F.isMeshLambertMaterial||F.isMeshBasicMaterial||F.isMeshStandardMaterial||F.isShaderMaterial||F.isShadowMaterial||W.isSkinnedMesh)&&We.setValue(G,"viewMatrix",T.matrixWorldInverse)}if(W.isSkinnedMesh){We.setOptional(G,W,"bindMatrix"),We.setOptional(G,W,"bindMatrixInverse");const Lt=W.skeleton;Lt&&(re.floatVertexTextures?(Lt.boneTexture===null&&Lt.computeBoneTexture(),We.setValue(G,"boneTexture",Lt.boneTexture,J),We.setValue(G,"boneTextureSize",Lt.boneTextureSize)):We.setOptional(G,Lt,"boneMatrices"))}return H&&(H.morphAttributes.position!==void 0||H.morphAttributes.normal!==void 0)&&ye.update(W,H,F,Ai),(Ci||Oe.receiveShadow!==W.receiveShadow)&&(Oe.receiveShadow=W.receiveShadow,We.setValue(G,"receiveShadow",W.receiveShadow)),Ci&&(We.setValue(G,"toneMappingExposure",v.toneMappingExposure),Oe.needsLights&&zd(nn,ai),_e&&F.fog&&K.refreshFogUniforms(nn,_e),K.refreshMaterialUniforms(nn,F,C,R,se),_i.upload(G,Oe.uniformsList,nn,J)),F.isShaderMaterial&&F.uniformsNeedUpdate===!0&&(_i.upload(G,Oe.uniformsList,nn,J),F.uniformsNeedUpdate=!1),F.isSpriteMaterial&&We.setValue(G,"center",W.center),We.setValue(G,"modelViewMatrix",W.modelViewMatrix),We.setValue(G,"normalMatrix",W.normalMatrix),We.setValue(G,"modelMatrix",W.matrixWorld),Ai}function zd(T,D){T.ambientLightColor.needsUpdate=D,T.lightProbe.needsUpdate=D,T.directionalLights.needsUpdate=D,T.directionalLightShadows.needsUpdate=D,T.pointLights.needsUpdate=D,T.pointLightShadows.needsUpdate=D,T.spotLights.needsUpdate=D,T.spotLightShadows.needsUpdate=D,T.rectAreaLights.needsUpdate=D,T.hemisphereLights.needsUpdate=D}function Ud(T){return T.isMeshLambertMaterial||T.isMeshToonMaterial||T.isMeshPhongMaterial||T.isMeshStandardMaterial||T.isShadowMaterial||T.isShaderMaterial&&T.lights===!0}this.getActiveCubeFace=function(){return f},this.getActiveMipmapLevel=function(){return m},this.getRenderTarget=function(){return w},this.setRenderTarget=function(T,D=0,H=0){w=T,f=D,m=H,T&&V.get(T).__webglFramebuffer===void 0&&J.setupRenderTarget(T);let F=null,W=!1,_e=!1;if(T){const ve=T.texture;(ve.isDataTexture3D||ve.isDataTexture2DArray)&&(_e=!0);const Le=V.get(T).__webglFramebuffer;T.isWebGLCubeRenderTarget?(F=Le[D],W=!0):T.isWebGLMultisampleRenderTarget?F=V.get(T).__webglMultisampledFramebuffer:F=Le,A.copy(T.viewport),_.copy(T.scissor),L=T.scissorTest}else A.copy(B).multiplyScalar(C).floor(),_.copy(O).multiplyScalar(C).floor(),L=z;if(fe.bindFramebuffer(36160,F)&&re.drawBuffers){let ve=!1;if(T)if(T.isWebGLMultipleRenderTargets){const Le=T.texture;if(U.length!==Le.length||U[0]!==36064){for(let Pe=0,ke=Le.length;Pe<ke;Pe++)U[Pe]=36064+Pe;U.length=Le.length,ve=!0}}else(U.length!==1||U[0]!==36064)&&(U[0]=36064,U.length=1,ve=!0);else(U.length!==1||U[0]!==1029)&&(U[0]=1029,U.length=1,ve=!0);ve&&(re.isWebGL2?G.drawBuffers(U):Ee.get("WEBGL_draw_buffers").drawBuffersWEBGL(U))}if(fe.viewport(A),fe.scissor(_),fe.setScissorTest(L),W){const ve=V.get(T.texture);G.framebufferTexture2D(36160,36064,34069+D,ve.__webglTexture,H)}else if(_e){const ve=V.get(T.texture),Le=D||0;G.framebufferTextureLayer(36160,36064,ve.__webglTexture,H||0,Le)}y=-1},this.readRenderTargetPixels=function(T,D,H,F,W,_e,ve){if(!(T&&T.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Le=V.get(T).__webglFramebuffer;if(T.isWebGLCubeRenderTarget&&ve!==void 0&&(Le=Le[ve]),Le){fe.bindFramebuffer(36160,Le);try{const Pe=T.texture,ke=Pe.format,Ie=Pe.type;if(ke!==lt&&q.convert(ke)!==G.getParameter(35739)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}const Ne=Ie===Fi&&(Ee.has("EXT_color_buffer_half_float")||re.isWebGL2&&Ee.has("EXT_color_buffer_float"));if(Ie!==qt&&q.convert(Ie)!==G.getParameter(35738)&&!(Ie===Ft&&(re.isWebGL2||Ee.has("OES_texture_float")||Ee.has("WEBGL_color_buffer_float")))&&!Ne){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}G.checkFramebufferStatus(36160)===36053?D>=0&&D<=T.width-F&&H>=0&&H<=T.height-W&&G.readPixels(D,H,F,W,q.convert(ke),q.convert(Ie),_e):console.error("THREE.WebGLRenderer.readRenderTargetPixels: readPixels from renderTarget failed. Framebuffer not complete.")}finally{const Pe=w!==null?V.get(w).__webglFramebuffer:null;fe.bindFramebuffer(36160,Pe)}}},this.copyFramebufferToTexture=function(T,D,H=0){const F=Math.pow(2,-H),W=Math.floor(D.image.width*F),_e=Math.floor(D.image.height*F);let ve=q.convert(D.format);re.isWebGL2&&(ve===6407&&(ve=32849),ve===6408&&(ve=32856)),J.setTexture2D(D,0),G.copyTexImage2D(3553,H,ve,T.x,T.y,W,_e,0),fe.unbindTexture()},this.copyTextureToTexture=function(T,D,H,F=0){const W=D.image.width,_e=D.image.height,ve=q.convert(H.format),Le=q.convert(H.type);J.setTexture2D(H,0),G.pixelStorei(37440,H.flipY),G.pixelStorei(37441,H.premultiplyAlpha),G.pixelStorei(3317,H.unpackAlignment),D.isDataTexture?G.texSubImage2D(3553,F,T.x,T.y,W,_e,ve,Le,D.image.data):D.isCompressedTexture?G.compressedTexSubImage2D(3553,F,T.x,T.y,D.mipmaps[0].width,D.mipmaps[0].height,ve,D.mipmaps[0].data):G.texSubImage2D(3553,F,T.x,T.y,ve,Le,D.image),F===0&&H.generateMipmaps&&G.generateMipmap(3553),fe.unbindTexture()},this.copyTextureToTexture3D=function(T,D,H,F,W=0){if(v.isWebGL1Renderer){console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: can only be used with WebGL2.");return}const _e=T.max.x-T.min.x+1,ve=T.max.y-T.min.y+1,Le=T.max.z-T.min.z+1,Pe=q.convert(F.format),ke=q.convert(F.type);let Ie;if(F.isDataTexture3D)J.setTexture3D(F,0),Ie=32879;else if(F.isDataTexture2DArray)J.setTexture2DArray(F,0),Ie=35866;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}G.pixelStorei(37440,F.flipY),G.pixelStorei(37441,F.premultiplyAlpha),G.pixelStorei(3317,F.unpackAlignment);const Ne=G.getParameter(3314),it=G.getParameter(32878),Ei=G.getParameter(3316),Oe=G.getParameter(3315),rn=G.getParameter(32877),Tt=H.isCompressedTexture?H.mipmaps[0]:H.image;G.pixelStorei(3314,Tt.width),G.pixelStorei(32878,Tt.height),G.pixelStorei(3316,T.min.x),G.pixelStorei(3315,T.min.y),G.pixelStorei(32877,T.min.z),H.isDataTexture||H.isDataTexture3D?G.texSubImage3D(Ie,W,D.x,D.y,D.z,_e,ve,Le,Pe,ke,Tt.data):H.isCompressedTexture?(console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: untested support for compressed srcTexture."),G.compressedTexSubImage3D(Ie,W,D.x,D.y,D.z,_e,ve,Le,Pe,Tt.data)):G.texSubImage3D(Ie,W,D.x,D.y,D.z,_e,ve,Le,Pe,ke,Tt),G.pixelStorei(3314,Ne),G.pixelStorei(32878,it),G.pixelStorei(3316,Ei),G.pixelStorei(3315,Oe),G.pixelStorei(32877,rn),W===0&&F.generateMipmaps&&G.generateMipmap(Ie),fe.unbindTexture()},this.initTexture=function(T){J.setTexture2D(T,0),fe.unbindTexture()},this.resetState=function(){f=0,m=0,w=null,fe.reset(),ge.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}Ue.prototype.isWebGLRenderer=!0;class nu extends Ue{}nu.prototype.isWebGL1Renderer=!0;class qn{constructor(e,t=25e-5){this.name="",this.color=new ie(e),this.density=t}clone(){return new qn(this.color,this.density)}toJSON(){return{type:"FogExp2",color:this.color.getHex(),density:this.density}}}qn.prototype.isFogExp2=!0;class Xn{constructor(e,t=1,i=1e3){this.name="",this.color=new ie(e),this.near=t,this.far=i}clone(){return new Xn(this.color,this.near,this.far)}toJSON(){return{type:"Fog",color:this.color.getHex(),near:this.near,far:this.far}}}Xn.prototype.isFog=!0;class Ia extends Re{constructor(){super(),this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.overrideMaterial=null,this.autoUpdate=!0,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.autoUpdate=e.autoUpdate,this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),t}}Ia.prototype.isScene=!0;class Zi{constructor(e,t){this.array=e,this.stride=t,this.count=e!==void 0?e.length/t:0,this.usage=gr,this.updateRange={offset:0,count:-1},this.version=0,this.uuid=_t()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,t,i){e*=this.stride,i*=t.stride;for(let r=0,n=this.stride;r<n;r++)this.array[e+r]=t.array[i+r];return this}set(e,t=0){return this.array.set(e,t),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=_t()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);const t=new this.array.constructor(e.arrayBuffers[this.array.buffer._uuid]),i=new this.constructor(t,this.stride);return i.setUsage(this.usage),i}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){return e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=_t()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=Array.prototype.slice.call(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}}Zi.prototype.isInterleavedBuffer=!0;const Ye=new b;class Mi{constructor(e,t,i,r=!1){this.name="",this.data=e,this.itemSize=t,this.offset=i,this.normalized=r===!0}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let t=0,i=this.data.count;t<i;t++)Ye.x=this.getX(t),Ye.y=this.getY(t),Ye.z=this.getZ(t),Ye.applyMatrix4(e),this.setXYZ(t,Ye.x,Ye.y,Ye.z);return this}applyNormalMatrix(e){for(let t=0,i=this.count;t<i;t++)Ye.x=this.getX(t),Ye.y=this.getY(t),Ye.z=this.getZ(t),Ye.applyNormalMatrix(e),this.setXYZ(t,Ye.x,Ye.y,Ye.z);return this}transformDirection(e){for(let t=0,i=this.count;t<i;t++)Ye.x=this.getX(t),Ye.y=this.getY(t),Ye.z=this.getZ(t),Ye.transformDirection(e),this.setXYZ(t,Ye.x,Ye.y,Ye.z);return this}setX(e,t){return this.data.array[e*this.data.stride+this.offset]=t,this}setY(e,t){return this.data.array[e*this.data.stride+this.offset+1]=t,this}setZ(e,t){return this.data.array[e*this.data.stride+this.offset+2]=t,this}setW(e,t){return this.data.array[e*this.data.stride+this.offset+3]=t,this}getX(e){return this.data.array[e*this.data.stride+this.offset]}getY(e){return this.data.array[e*this.data.stride+this.offset+1]}getZ(e){return this.data.array[e*this.data.stride+this.offset+2]}getW(e){return this.data.array[e*this.data.stride+this.offset+3]}setXY(e,t,i){return e=e*this.data.stride+this.offset,this.data.array[e+0]=t,this.data.array[e+1]=i,this}setXYZ(e,t,i,r){return e=e*this.data.stride+this.offset,this.data.array[e+0]=t,this.data.array[e+1]=i,this.data.array[e+2]=r,this}setXYZW(e,t,i,r,n){return e=e*this.data.stride+this.offset,this.data.array[e+0]=t,this.data.array[e+1]=i,this.data.array[e+2]=r,this.data.array[e+3]=n,this}clone(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interlaved buffer attribute will deinterleave buffer data.");const t=[];for(let i=0;i<this.count;i++){const r=i*this.data.stride+this.offset;for(let n=0;n<this.itemSize;n++)t.push(this.data.array[r+n])}return new De(new this.array.constructor(t),this.itemSize,this.normalized)}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.clone(e)),new Mi(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interlaved buffer attribute will deinterleave buffer data.");const t=[];for(let i=0;i<this.count;i++){const r=i*this.data.stride+this.offset;for(let n=0;n<this.itemSize;n++)t.push(this.data.array[r+n])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:t,normalized:this.normalized}}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}}Mi.prototype.isInterleavedBufferAttribute=!0;class Da extends rt{constructor(e){super(),this.type="SpriteMaterial",this.color=new ie(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.rotation=e.rotation,this.sizeAttenuation=e.sizeAttenuation,this}}Da.prototype.isSpriteMaterial=!0;let Ur;const An=new b,Gr=new b,Hr=new b,kr=new j,Ln=new j,au=new ue,Na=new b,Cn=new b,Ba=new b,su=new j,Mo=new j,ou=new j;class Fa extends Re{constructor(e){if(super(),this.type="Sprite",Ur===void 0){Ur=new we;const t=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),i=new Zi(t,5);Ur.setIndex([0,1,2,0,2,3]),Ur.setAttribute("position",new Mi(i,3,0,!1)),Ur.setAttribute("uv",new Mi(i,2,3,!1))}this.geometry=Ur,this.material=e!==void 0?e:new Da,this.center=new j(.5,.5)}raycast(e,t){e.camera===null&&console.error('THREE.Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),Gr.setFromMatrixScale(this.matrixWorld),au.copy(e.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(e.camera.matrixWorldInverse,this.matrixWorld),Hr.setFromMatrixPosition(this.modelViewMatrix),e.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&Gr.multiplyScalar(-Hr.z);const i=this.material.rotation;let r,n;i!==0&&(n=Math.cos(i),r=Math.sin(i));const s=this.center;Oa(Na.set(-.5,-.5,0),Hr,s,Gr,r,n),Oa(Cn.set(.5,-.5,0),Hr,s,Gr,r,n),Oa(Ba.set(.5,.5,0),Hr,s,Gr,r,n),su.set(0,0),Mo.set(1,0),ou.set(1,1);let o=e.ray.intersectTriangle(Na,Cn,Ba,!1,An);if(o===null&&(Oa(Cn.set(-.5,.5,0),Hr,s,Gr,r,n),Mo.set(0,1),o=e.ray.intersectTriangle(Na,Ba,Cn,!1,An),o===null))return;const l=e.ray.origin.distanceTo(An);l<e.near||l>e.far||t.push({distance:l,point:An.clone(),uv:Je.getUV(An,Na,Cn,Ba,su,Mo,ou,new j),face:null,object:this})}copy(e){return super.copy(e),e.center!==void 0&&this.center.copy(e.center),this.material=e.material,this}}Fa.prototype.isSprite=!0;function Oa(a,e,t,i,r,n){kr.subVectors(a,t).addScalar(.5).multiply(i),r!==void 0?(Ln.x=n*kr.x-r*kr.y,Ln.y=r*kr.x+n*kr.y):Ln.copy(kr),a.copy(e),a.x+=Ln.x,a.y+=Ln.y,a.applyMatrix4(au)}const za=new b,lu=new b;class cu extends Re{constructor(){super(),this._currentLevel=0,this.type="LOD",Object.defineProperties(this,{levels:{enumerable:!0,value:[]},isLOD:{value:!0}}),this.autoUpdate=!0}copy(e){super.copy(e,!1);const t=e.levels;for(let i=0,r=t.length;i<r;i++){const n=t[i];this.addLevel(n.object.clone(),n.distance)}return this.autoUpdate=e.autoUpdate,this}addLevel(e,t=0){t=Math.abs(t);const i=this.levels;let r;for(r=0;r<i.length&&!(t<i[r].distance);r++);return i.splice(r,0,{distance:t,object:e}),this.add(e),this}getCurrentLevel(){return this._currentLevel}getObjectForDistance(e){const t=this.levels;if(t.length>0){let i,r;for(i=1,r=t.length;i<r&&!(e<t[i].distance);i++);return t[i-1].object}return null}raycast(e,t){if(this.levels.length>0){za.setFromMatrixPosition(this.matrixWorld);const i=e.ray.origin.distanceTo(za);this.getObjectForDistance(i).raycast(e,t)}}update(e){const t=this.levels;if(t.length>1){za.setFromMatrixPosition(e.matrixWorld),lu.setFromMatrixPosition(this.matrixWorld);const i=za.distanceTo(lu)/e.zoom;t[0].object.visible=!0;let r,n;for(r=1,n=t.length;r<n&&i>=t[r].distance;r++)t[r-1].object.visible=!1,t[r].object.visible=!0;for(this._currentLevel=r-1;r<n;r++)t[r].object.visible=!1}}toJSON(e){const t=super.toJSON(e);this.autoUpdate===!1&&(t.object.autoUpdate=!1),t.object.levels=[];const i=this.levels;for(let r=0,n=i.length;r<n;r++){const s=i[r];t.object.levels.push({object:s.object.uuid,distance:s.distance})}return t}}const hu=new b,uu=new ze,du=new ze,u0=new b,pu=new ue;class Ua extends Qe{constructor(e,t){super(e,t),this.type="SkinnedMesh",this.bindMode="attached",this.bindMatrix=new ue,this.bindMatrixInverse=new ue}copy(e){return super.copy(e),this.bindMode=e.bindMode,this.bindMatrix.copy(e.bindMatrix),this.bindMatrixInverse.copy(e.bindMatrixInverse),this.skeleton=e.skeleton,this}bind(e,t){this.skeleton=e,t===void 0&&(this.updateMatrixWorld(!0),this.skeleton.calculateInverses(),t=this.matrixWorld),this.bindMatrix.copy(t),this.bindMatrixInverse.copy(t).invert()}pose(){this.skeleton.pose()}normalizeSkinWeights(){const e=new ze,t=this.geometry.attributes.skinWeight;for(let i=0,r=t.count;i<r;i++){e.x=t.getX(i),e.y=t.getY(i),e.z=t.getZ(i),e.w=t.getW(i);const n=1/e.manhattanLength();n!==1/0?e.multiplyScalar(n):e.set(1,0,0,0),t.setXYZW(i,e.x,e.y,e.z,e.w)}}updateMatrixWorld(e){super.updateMatrixWorld(e),this.bindMode==="attached"?this.bindMatrixInverse.copy(this.matrixWorld).invert():this.bindMode==="detached"?this.bindMatrixInverse.copy(this.bindMatrix).invert():console.warn("THREE.SkinnedMesh: Unrecognized bindMode: "+this.bindMode)}boneTransform(e,t){const i=this.skeleton,r=this.geometry;uu.fromBufferAttribute(r.attributes.skinIndex,e),du.fromBufferAttribute(r.attributes.skinWeight,e),hu.copy(t).applyMatrix4(this.bindMatrix),t.set(0,0,0);for(let n=0;n<4;n++){const s=du.getComponent(n);if(s!==0){const o=uu.getComponent(n);pu.multiplyMatrices(i.bones[o].matrixWorld,i.boneInverses[o]),t.addScaledVector(u0.copy(hu).applyMatrix4(pu),s)}}return t.applyMatrix4(this.bindMatrixInverse)}}Ua.prototype.isSkinnedMesh=!0;class Ga extends Re{constructor(){super(),this.type="Bone"}}Ga.prototype.isBone=!0;class Ji extends tt{constructor(e=null,t=1,i=1,r,n,s,o,l,c=Ke,h=Ke,d,u){super(null,s,o,l,c,h,r,n,d,u),this.image={data:e,width:t,height:i},this.magFilter=c,this.minFilter=h,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.needsUpdate=!0}}Ji.prototype.isDataTexture=!0;const mu=new ue,d0=new ue;class us{constructor(e=[],t=[]){this.uuid=_t(),this.bones=e.slice(0),this.boneInverses=t,this.boneMatrices=null,this.boneTexture=null,this.boneTextureSize=0,this.frame=-1,this.init()}init(){const e=this.bones,t=this.boneInverses;if(this.boneMatrices=new Float32Array(e.length*16),t.length===0)this.calculateInverses();else if(e.length!==t.length){console.warn("THREE.Skeleton: Number of inverse bone matrices does not match amount of bones."),this.boneInverses=[];for(let i=0,r=this.bones.length;i<r;i++)this.boneInverses.push(new ue)}}calculateInverses(){this.boneInverses.length=0;for(let e=0,t=this.bones.length;e<t;e++){const i=new ue;this.bones[e]&&i.copy(this.bones[e].matrixWorld).invert(),this.boneInverses.push(i)}}pose(){for(let e=0,t=this.bones.length;e<t;e++){const i=this.bones[e];i&&i.matrixWorld.copy(this.boneInverses[e]).invert()}for(let e=0,t=this.bones.length;e<t;e++){const i=this.bones[e];i&&(i.parent&&i.parent.isBone?(i.matrix.copy(i.parent.matrixWorld).invert(),i.matrix.multiply(i.matrixWorld)):i.matrix.copy(i.matrixWorld),i.matrix.decompose(i.position,i.quaternion,i.scale))}}update(){const e=this.bones,t=this.boneInverses,i=this.boneMatrices,r=this.boneTexture;for(let n=0,s=e.length;n<s;n++){const o=e[n]?e[n].matrixWorld:d0;mu.multiplyMatrices(o,t[n]),mu.toArray(i,n*16)}r!==null&&(r.needsUpdate=!0)}clone(){return new us(this.bones,this.boneInverses)}computeBoneTexture(){let e=Math.sqrt(this.bones.length*4);e=Kc(e),e=Math.max(e,4);const t=new Float32Array(e*e*4);t.set(this.boneMatrices);const i=new Ji(t,e,e,lt,Ft);return this.boneMatrices=t,this.boneTexture=i,this.boneTextureSize=e,this}getBoneByName(e){for(let t=0,i=this.bones.length;t<i;t++){const r=this.bones[t];if(r.name===e)return r}}dispose(){this.boneTexture!==null&&(this.boneTexture.dispose(),this.boneTexture=null)}fromJSON(e,t){this.uuid=e.uuid;for(let i=0,r=e.bones.length;i<r;i++){const n=e.bones[i];let s=t[n];s===void 0&&(console.warn("THREE.Skeleton: No bone found with UUID:",n),s=new Ga),this.bones.push(s),this.boneInverses.push(new ue().fromArray(e.boneInverses[i]))}return this.init(),this}toJSON(){const e={metadata:{version:4.5,type:"Skeleton",generator:"Skeleton.toJSON"},bones:[],boneInverses:[]};e.uuid=this.uuid;const t=this.bones,i=this.boneInverses;for(let r=0,n=t.length;r<n;r++){const s=t[r];e.bones.push(s.uuid);const o=i[r];e.boneInverses.push(o.toArray())}return e}}class Ki extends De{constructor(e,t,i,r=1){typeof i=="number"&&(r=i,i=!1,console.error("THREE.InstancedBufferAttribute: The constructor now expects normalized as the third argument.")),super(e,t,i),this.meshPerAttribute=r}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){const e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}}Ki.prototype.isInstancedBufferAttribute=!0;const fu=new ue,gu=new ue,Ha=[],Rn=new Qe;class So extends Qe{constructor(e,t,i){super(e,t),this.instanceMatrix=new Ki(new Float32Array(i*16),16),this.instanceColor=null,this.count=i,this.frustumCulled=!1}copy(e){return super.copy(e),this.instanceMatrix.copy(e.instanceMatrix),e.instanceColor!==null&&(this.instanceColor=e.instanceColor.clone()),this.count=e.count,this}getColorAt(e,t){t.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,t){t.fromArray(this.instanceMatrix.array,e*16)}raycast(e,t){const i=this.matrixWorld,r=this.count;if(Rn.geometry=this.geometry,Rn.material=this.material,Rn.material!==void 0)for(let n=0;n<r;n++){this.getMatrixAt(n,fu),gu.multiplyMatrices(i,fu),Rn.matrixWorld=gu,Rn.raycast(e,Ha);for(let s=0,o=Ha.length;s<o;s++){const l=Ha[s];l.instanceId=n,l.object=this,t.push(l)}Ha.length=0}}setColorAt(e,t){this.instanceColor===null&&(this.instanceColor=new Ki(new Float32Array(this.instanceMatrix.count*3),3)),t.toArray(this.instanceColor.array,e*3)}setMatrixAt(e,t){t.toArray(this.instanceMatrix.array,e*16)}updateMorphTargets(){}dispose(){this.dispatchEvent({type:"dispose"})}}So.prototype.isInstancedMesh=!0;class st extends rt{constructor(e){super(),this.type="LineBasicMaterial",this.color=new ie(16777215),this.linewidth=1,this.linecap="round",this.linejoin="round",this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this}}st.prototype.isLineBasicMaterial=!0;const vu=new b,yu=new b,xu=new ue,To=new pi,ka=new ui;class ei extends Re{constructor(e=new we,t=new st){super(),this.type="Line",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e){return super.copy(e),this.material=e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.isBufferGeometry)if(e.index===null){const t=e.attributes.position,i=[0];for(let r=1,n=t.count;r<n;r++)vu.fromBufferAttribute(t,r-1),yu.fromBufferAttribute(t,r),i[r]=i[r-1],i[r]+=vu.distanceTo(yu);e.setAttribute("lineDistance",new le(i,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");else e.isGeometry&&console.error("THREE.Line.computeLineDistances() no longer supports THREE.Geometry. Use THREE.BufferGeometry instead.");return this}raycast(e,t){const i=this.geometry,r=this.matrixWorld,n=e.params.Line.threshold,s=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),ka.copy(i.boundingSphere),ka.applyMatrix4(r),ka.radius+=n,e.ray.intersectsSphere(ka)===!1)return;xu.copy(r).invert(),To.copy(e.ray).applyMatrix4(xu);const o=n/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,c=new b,h=new b,d=new b,u=new b,p=this.isLineSegments?2:1;if(i.isBufferGeometry){const g=i.index,v=i.attributes.position;if(g!==null){const x=Math.max(0,s.start),f=Math.min(g.count,s.start+s.count);for(let m=x,w=f-1;m<w;m+=p){const y=g.getX(m),M=g.getX(m+1);if(c.fromBufferAttribute(v,y),h.fromBufferAttribute(v,M),To.distanceSqToSegment(c,h,u,d)>l)continue;u.applyMatrix4(this.matrixWorld);const A=e.ray.origin.distanceTo(u);A<e.near||A>e.far||t.push({distance:A,point:d.clone().applyMatrix4(this.matrixWorld),index:m,face:null,faceIndex:null,object:this})}}else{const x=Math.max(0,s.start),f=Math.min(v.count,s.start+s.count);for(let m=x,w=f-1;m<w;m+=p){if(c.fromBufferAttribute(v,m),h.fromBufferAttribute(v,m+1),To.distanceSqToSegment(c,h,u,d)>l)continue;u.applyMatrix4(this.matrixWorld);const y=e.ray.origin.distanceTo(u);y<e.near||y>e.far||t.push({distance:y,point:d.clone().applyMatrix4(this.matrixWorld),index:m,face:null,faceIndex:null,object:this})}}}else i.isGeometry&&console.error("THREE.Line.raycast() no longer supports THREE.Geometry. Use THREE.BufferGeometry instead.")}updateMorphTargets(){const e=this.geometry;if(e.isBufferGeometry){const t=e.morphAttributes,i=Object.keys(t);if(i.length>0){const r=t[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let n=0,s=r.length;n<s;n++){const o=r[n].name||String(n);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=n}}}}else{const t=e.morphTargets;t!==void 0&&t.length>0&&console.error("THREE.Line.updateMorphTargets() does not support THREE.Geometry. Use THREE.BufferGeometry instead.")}}}ei.prototype.isLine=!0;const _u=new b,wu=new b;class xt extends ei{constructor(e,t){super(e,t),this.type="LineSegments"}computeLineDistances(){const e=this.geometry;if(e.isBufferGeometry)if(e.index===null){const t=e.attributes.position,i=[];for(let r=0,n=t.count;r<n;r+=2)_u.fromBufferAttribute(t,r),wu.fromBufferAttribute(t,r+1),i[r]=r===0?0:i[r-1],i[r+1]=i[r]+_u.distanceTo(wu);e.setAttribute("lineDistance",new le(i,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");else e.isGeometry&&console.error("THREE.LineSegments.computeLineDistances() no longer supports THREE.Geometry. Use THREE.BufferGeometry instead.");return this}}xt.prototype.isLineSegments=!0;class Eo extends ei{constructor(e,t){super(e,t),this.type="LineLoop"}}Eo.prototype.isLineLoop=!0;class Qi extends rt{constructor(e){super(),this.type="PointsMaterial",this.color=new ie(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this}}Qi.prototype.isPointsMaterial=!0;const bu=new ue,Ao=new pi,Va=new ui,Wa=new b;class Pn extends Re{constructor(e=new we,t=new Qi){super(),this.type="Points",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e){return super.copy(e),this.material=e.material,this.geometry=e.geometry,this}raycast(e,t){const i=this.geometry,r=this.matrixWorld,n=e.params.Points.threshold,s=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),Va.copy(i.boundingSphere),Va.applyMatrix4(r),Va.radius+=n,e.ray.intersectsSphere(Va)===!1)return;bu.copy(r).invert(),Ao.copy(e.ray).applyMatrix4(bu);const o=n/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o;if(i.isBufferGeometry){const c=i.index,h=i.attributes.position;if(c!==null){const d=Math.max(0,s.start),u=Math.min(c.count,s.start+s.count);for(let p=d,g=u;p<g;p++){const v=c.getX(p);Wa.fromBufferAttribute(h,v),Mu(Wa,v,l,r,e,t,this)}}else{const d=Math.max(0,s.start),u=Math.min(h.count,s.start+s.count);for(let p=d,g=u;p<g;p++)Wa.fromBufferAttribute(h,p),Mu(Wa,p,l,r,e,t,this)}}else console.error("THREE.Points.raycast() no longer supports THREE.Geometry. Use THREE.BufferGeometry instead.")}updateMorphTargets(){const e=this.geometry;if(e.isBufferGeometry){const t=e.morphAttributes,i=Object.keys(t);if(i.length>0){const r=t[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let n=0,s=r.length;n<s;n++){const o=r[n].name||String(n);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=n}}}}else{const t=e.morphTargets;t!==void 0&&t.length>0&&console.error("THREE.Points.updateMorphTargets() does not support THREE.Geometry. Use THREE.BufferGeometry instead.")}}}Pn.prototype.isPoints=!0;function Mu(a,e,t,i,r,n,s){const o=Ao.distanceSqToPoint(a);if(o<t){const l=new b;Ao.closestPointToPoint(a,l),l.applyMatrix4(i);const c=r.ray.origin.distanceTo(l);if(c<r.near||c>r.far)return;n.push({distance:c,distanceToRay:Math.sqrt(o),point:l,index:e,face:null,object:s})}}class Su extends tt{constructor(e,t,i,r,n,s,o,l,c){super(e,t,i,r,n,s,o,l,c),this.format=o!==void 0?o:Oi,this.minFilter=s!==void 0?s:$e,this.magFilter=n!==void 0?n:$e,this.generateMipmaps=!1;const h=this;function d(){h.needsUpdate=!0,e.requestVideoFrameCallback(d)}"requestVideoFrameCallback"in e&&e.requestVideoFrameCallback(d)}clone(){return new this.constructor(this.image).copy(this)}update(){const e=this.image;!("requestVideoFrameCallback"in e)&&e.readyState>=e.HAVE_CURRENT_DATA&&(this.needsUpdate=!0)}}Su.prototype.isVideoTexture=!0;class Lo extends tt{constructor(e,t,i,r,n,s,o,l,c,h,d,u){super(null,s,o,l,c,h,r,n,d,u),this.image={width:t,height:i},this.mipmaps=e,this.flipY=!1,this.generateMipmaps=!1}}Lo.prototype.isCompressedTexture=!0;class Tu extends tt{constructor(e,t,i,r,n,s,o,l,c){super(e,t,i,r,n,s,o,l,c),this.needsUpdate=!0}}Tu.prototype.isCanvasTexture=!0;class Eu extends tt{constructor(e,t,i,r,n,s,o,l,c,h){if(h=h!==void 0?h:zi,h!==zi&&h!==fr)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");i===void 0&&h===zi&&(i=un),i===void 0&&h===fr&&(i=mr),super(null,r,n,s,o,l,h,i,c),this.image={width:e,height:t},this.magFilter=o!==void 0?o:Ke,this.minFilter=l!==void 0?l:Ke,this.flipY=!1,this.generateMipmaps=!1}}Eu.prototype.isDepthTexture=!0;class qr extends we{constructor(e=1,t=8,i=0,r=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:e,segments:t,thetaStart:i,thetaLength:r},t=Math.max(3,t);const n=[],s=[],o=[],l=[],c=new b,h=new j;s.push(0,0,0),o.push(0,0,1),l.push(.5,.5);for(let d=0,u=3;d<=t;d++,u+=3){const p=i+d/t*r;c.x=e*Math.cos(p),c.y=e*Math.sin(p),s.push(c.x,c.y,c.z),o.push(0,0,1),h.x=(s[u]/e+1)/2,h.y=(s[u+1]/e+1)/2,l.push(h.x,h.y)}for(let d=1;d<=t;d++)n.push(d,d+1,0);this.setIndex(n),this.setAttribute("position",new le(s,3)),this.setAttribute("normal",new le(o,3)),this.setAttribute("uv",new le(l,2))}static fromJSON(e){return new qr(e.radius,e.segments,e.thetaStart,e.thetaLength)}}class Si extends we{constructor(e=1,t=1,i=1,r=8,n=1,s=!1,o=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:i,radialSegments:r,heightSegments:n,openEnded:s,thetaStart:o,thetaLength:l};const c=this;r=Math.floor(r),n=Math.floor(n);const h=[],d=[],u=[],p=[];let g=0;const v=[],x=i/2;let f=0;m(),s===!1&&(e>0&&w(!0),t>0&&w(!1)),this.setIndex(h),this.setAttribute("position",new le(d,3)),this.setAttribute("normal",new le(u,3)),this.setAttribute("uv",new le(p,2));function m(){const y=new b,M=new b;let A=0;const _=(t-e)/i;for(let L=0;L<=n;L++){const N=[],R=L/n,C=R*(t-e)+e;for(let Y=0;Y<=r;Y++){const I=Y/r,B=I*l+o,O=Math.sin(B),z=Math.cos(B);M.x=C*O,M.y=-R*i+x,M.z=C*z,d.push(M.x,M.y,M.z),y.set(O,_,z).normalize(),u.push(y.x,y.y,y.z),p.push(I,1-R),N.push(g++)}v.push(N)}for(let L=0;L<r;L++)for(let N=0;N<n;N++){const R=v[N][L],C=v[N+1][L],Y=v[N+1][L+1],I=v[N][L+1];h.push(R,C,I),h.push(C,Y,I),A+=6}c.addGroup(f,A,0),f+=A}function w(y){const M=g,A=new j,_=new b;let L=0;const N=y===!0?e:t,R=y===!0?1:-1;for(let Y=1;Y<=r;Y++)d.push(0,x*R,0),u.push(0,R,0),p.push(.5,.5),g++;const C=g;for(let Y=0;Y<=r;Y++){const I=Y/r*l+o,B=Math.cos(I),O=Math.sin(I);_.x=N*O,_.y=x*R,_.z=N*B,d.push(_.x,_.y,_.z),u.push(0,R,0),A.x=B*.5+.5,A.y=O*.5*R+.5,p.push(A.x,A.y),g++}for(let Y=0;Y<r;Y++){const I=M+Y,B=C+Y;y===!0?h.push(B,B+1,I):h.push(B+1,B,I),L+=3}c.addGroup(f,L,y===!0?1:2),f+=L}}static fromJSON(e){return new Si(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class Xr extends Si{constructor(e=1,t=1,i=8,r=1,n=!1,s=0,o=Math.PI*2){super(0,e,t,i,r,n,s,o),this.type="ConeGeometry",this.parameters={radius:e,height:t,radialSegments:i,heightSegments:r,openEnded:n,thetaStart:s,thetaLength:o}}static fromJSON(e){return new Xr(e.radius,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class Ht extends we{constructor(e=[],t=[],i=1,r=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:e,indices:t,radius:i,detail:r};const n=[],s=[];o(r),c(i),h(),this.setAttribute("position",new le(n,3)),this.setAttribute("normal",new le(n.slice(),3)),this.setAttribute("uv",new le(s,2)),r===0?this.computeVertexNormals():this.normalizeNormals();function o(m){const w=new b,y=new b,M=new b;for(let A=0;A<t.length;A+=3)p(t[A+0],w),p(t[A+1],y),p(t[A+2],M),l(w,y,M,m)}function l(m,w,y,M){const A=M+1,_=[];for(let L=0;L<=A;L++){_[L]=[];const N=m.clone().lerp(y,L/A),R=w.clone().lerp(y,L/A),C=A-L;for(let Y=0;Y<=C;Y++)Y===0&&L===A?_[L][Y]=N:_[L][Y]=N.clone().lerp(R,Y/C)}for(let L=0;L<A;L++)for(let N=0;N<2*(A-L)-1;N++){const R=Math.floor(N/2);N%2===0?(u(_[L][R+1]),u(_[L+1][R]),u(_[L][R])):(u(_[L][R+1]),u(_[L+1][R+1]),u(_[L+1][R]))}}function c(m){const w=new b;for(let y=0;y<n.length;y+=3)w.x=n[y+0],w.y=n[y+1],w.z=n[y+2],w.normalize().multiplyScalar(m),n[y+0]=w.x,n[y+1]=w.y,n[y+2]=w.z}function h(){const m=new b;for(let w=0;w<n.length;w+=3){m.x=n[w+0],m.y=n[w+1],m.z=n[w+2];const y=x(m)/2/Math.PI+.5,M=f(m)/Math.PI+.5;s.push(y,1-M)}g(),d()}function d(){for(let m=0;m<s.length;m+=6){const w=s[m+0],y=s[m+2],M=s[m+4],A=Math.max(w,y,M),_=Math.min(w,y,M);A>.9&&_<.1&&(w<.2&&(s[m+0]+=1),y<.2&&(s[m+2]+=1),M<.2&&(s[m+4]+=1))}}function u(m){n.push(m.x,m.y,m.z)}function p(m,w){const y=m*3;w.x=e[y+0],w.y=e[y+1],w.z=e[y+2]}function g(){const m=new b,w=new b,y=new b,M=new b,A=new j,_=new j,L=new j;for(let N=0,R=0;N<n.length;N+=9,R+=6){m.set(n[N+0],n[N+1],n[N+2]),w.set(n[N+3],n[N+4],n[N+5]),y.set(n[N+6],n[N+7],n[N+8]),A.set(s[R+0],s[R+1]),_.set(s[R+2],s[R+3]),L.set(s[R+4],s[R+5]),M.copy(m).add(w).add(y).divideScalar(3);const C=x(M);v(A,R+0,m,C),v(_,R+2,w,C),v(L,R+4,y,C)}}function v(m,w,y,M){M<0&&m.x===1&&(s[w]=m.x-1),y.x===0&&y.z===0&&(s[w]=M/2/Math.PI+.5)}function x(m){return Math.atan2(m.z,-m.x)}function f(m){return Math.atan2(-m.y,Math.sqrt(m.x*m.x+m.z*m.z))}}static fromJSON(e){return new Ht(e.vertices,e.indices,e.radius,e.details)}}class Yr extends Ht{constructor(e=1,t=0){const i=(1+Math.sqrt(5))/2,r=1/i,n=[-1,-1,-1,-1,-1,1,-1,1,-1,-1,1,1,1,-1,-1,1,-1,1,1,1,-1,1,1,1,0,-r,-i,0,-r,i,0,r,-i,0,r,i,-r,-i,0,-r,i,0,r,-i,0,r,i,0,-i,0,-r,i,0,-r,-i,0,r,i,0,r],s=[3,11,7,3,7,15,3,15,13,7,19,17,7,17,6,7,6,15,17,4,8,17,8,10,17,10,6,8,0,16,8,16,2,8,2,10,0,12,1,0,1,18,0,18,16,6,10,2,6,2,13,6,13,15,2,16,18,2,18,3,2,3,13,18,1,9,18,9,11,18,11,3,4,14,12,4,12,0,4,0,8,11,9,5,11,5,19,11,19,7,19,5,14,19,14,4,19,4,17,1,12,14,1,14,5,1,5,9];super(n,s,e,t),this.type="DodecahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new Yr(e.radius,e.detail)}}const ja=new b,qa=new b,Co=new b,Xa=new Je;class Ro extends we{constructor(e=null,t=1){if(super(),this.type="EdgesGeometry",this.parameters={geometry:e,thresholdAngle:t},e!==null){const i=Math.pow(10,4),r=Math.cos(ki*t),n=e.getIndex(),s=e.getAttribute("position"),o=n?n.count:s.count,l=[0,0,0],c=["a","b","c"],h=new Array(3),d={},u=[];for(let p=0;p<o;p+=3){n?(l[0]=n.getX(p),l[1]=n.getX(p+1),l[2]=n.getX(p+2)):(l[0]=p,l[1]=p+1,l[2]=p+2);const{a:g,b:v,c:x}=Xa;if(g.fromBufferAttribute(s,l[0]),v.fromBufferAttribute(s,l[1]),x.fromBufferAttribute(s,l[2]),Xa.getNormal(Co),h[0]=`${Math.round(g.x*i)},${Math.round(g.y*i)},${Math.round(g.z*i)}`,h[1]=`${Math.round(v.x*i)},${Math.round(v.y*i)},${Math.round(v.z*i)}`,h[2]=`${Math.round(x.x*i)},${Math.round(x.y*i)},${Math.round(x.z*i)}`,!(h[0]===h[1]||h[1]===h[2]||h[2]===h[0]))for(let f=0;f<3;f++){const m=(f+1)%3,w=h[f],y=h[m],M=Xa[c[f]],A=Xa[c[m]],_=`${w}_${y}`,L=`${y}_${w}`;L in d&&d[L]?(Co.dot(d[L].normal)<=r&&(u.push(M.x,M.y,M.z),u.push(A.x,A.y,A.z)),d[L]=null):_ in d||(d[_]={index0:l[f],index1:l[m],normal:Co.clone()})}}for(const p in d)if(d[p]){const{index0:g,index1:v}=d[p];ja.fromBufferAttribute(s,g),qa.fromBufferAttribute(s,v),u.push(ja.x,ja.y,ja.z),u.push(qa.x,qa.y,qa.z)}this.setAttribute("position",new le(u,3))}}}class St{constructor(){this.type="Curve",this.arcLengthDivisions=200}getPoint(){return console.warn("THREE.Curve: .getPoint() not implemented."),null}getPointAt(e,t){const i=this.getUtoTmapping(e);return this.getPoint(i,t)}getPoints(e=5){const t=[];for(let i=0;i<=e;i++)t.push(this.getPoint(i/e));return t}getSpacedPoints(e=5){const t=[];for(let i=0;i<=e;i++)t.push(this.getPointAt(i/e));return t}getLength(){const e=this.getLengths();return e[e.length-1]}getLengths(e=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===e+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;const t=[];let i,r=this.getPoint(0),n=0;t.push(0);for(let s=1;s<=e;s++)i=this.getPoint(s/e),n+=i.distanceTo(r),t.push(n),r=i;return this.cacheArcLengths=t,t}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(e,t){const i=this.getLengths();let r=0;const n=i.length;let s;t?s=t:s=e*i[n-1];let o=0,l=n-1,c;for(;o<=l;)if(r=Math.floor(o+(l-o)/2),c=i[r]-s,c<0)o=r+1;else if(c>0)l=r-1;else{l=r;break}if(r=l,i[r]===s)return r/(n-1);const h=i[r],d=i[r+1]-h,u=(s-h)/d;return(r+u)/(n-1)}getTangent(e,t){let i=e-1e-4,r=e+1e-4;i<0&&(i=0),r>1&&(r=1);const n=this.getPoint(i),s=this.getPoint(r),o=t||(n.isVector2?new j:new b);return o.copy(s).sub(n).normalize(),o}getTangentAt(e,t){const i=this.getUtoTmapping(e);return this.getTangent(i,t)}computeFrenetFrames(e,t){const i=new b,r=[],n=[],s=[],o=new b,l=new ue;for(let p=0;p<=e;p++){const g=p/e;r[p]=this.getTangentAt(g,new b)}n[0]=new b,s[0]=new b;let c=Number.MAX_VALUE;const h=Math.abs(r[0].x),d=Math.abs(r[0].y),u=Math.abs(r[0].z);h<=c&&(c=h,i.set(1,0,0)),d<=c&&(c=d,i.set(0,1,0)),u<=c&&i.set(0,0,1),o.crossVectors(r[0],i).normalize(),n[0].crossVectors(r[0],o),s[0].crossVectors(r[0],n[0]);for(let p=1;p<=e;p++){if(n[p]=n[p-1].clone(),s[p]=s[p-1].clone(),o.crossVectors(r[p-1],r[p]),o.length()>Number.EPSILON){o.normalize();const g=Math.acos(ut(r[p-1].dot(r[p]),-1,1));n[p].applyMatrix4(l.makeRotationAxis(o,g))}s[p].crossVectors(r[p],n[p])}if(t===!0){let p=Math.acos(ut(n[0].dot(n[e]),-1,1));p/=e,r[0].dot(o.crossVectors(n[0],n[e]))>0&&(p=-p);for(let g=1;g<=e;g++)n[g].applyMatrix4(l.makeRotationAxis(r[g],p*g)),s[g].crossVectors(r[g],n[g])}return{tangents:r,normals:n,binormals:s}}clone(){return new this.constructor().copy(this)}copy(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}toJSON(){const e={metadata:{version:4.5,type:"Curve",generator:"Curve.toJSON"}};return e.arcLengthDivisions=this.arcLengthDivisions,e.type=this.type,e}fromJSON(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}}class In extends St{constructor(e=0,t=0,i=1,r=1,n=0,s=Math.PI*2,o=!1,l=0){super(),this.type="EllipseCurve",this.aX=e,this.aY=t,this.xRadius=i,this.yRadius=r,this.aStartAngle=n,this.aEndAngle=s,this.aClockwise=o,this.aRotation=l}getPoint(e,t){const i=t||new j,r=Math.PI*2;let n=this.aEndAngle-this.aStartAngle;const s=Math.abs(n)<Number.EPSILON;for(;n<0;)n+=r;for(;n>r;)n-=r;n<Number.EPSILON&&(s?n=0:n=r),this.aClockwise===!0&&!s&&(n===r?n=-r:n=n-r);const o=this.aStartAngle+e*n;let l=this.aX+this.xRadius*Math.cos(o),c=this.aY+this.yRadius*Math.sin(o);if(this.aRotation!==0){const h=Math.cos(this.aRotation),d=Math.sin(this.aRotation),u=l-this.aX,p=c-this.aY;l=u*h-p*d+this.aX,c=u*d+p*h+this.aY}return i.set(l,c)}copy(e){return super.copy(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}toJSON(){const e=super.toJSON();return e.aX=this.aX,e.aY=this.aY,e.xRadius=this.xRadius,e.yRadius=this.yRadius,e.aStartAngle=this.aStartAngle,e.aEndAngle=this.aEndAngle,e.aClockwise=this.aClockwise,e.aRotation=this.aRotation,e}fromJSON(e){return super.fromJSON(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}}In.prototype.isEllipseCurve=!0;class Po extends In{constructor(e,t,i,r,n,s){super(e,t,i,i,r,n,s),this.type="ArcCurve"}}Po.prototype.isArcCurve=!0;function Io(){let a=0,e=0,t=0,i=0;function r(n,s,o,l){a=n,e=o,t=-3*n+3*s-2*o-l,i=2*n-2*s+o+l}return{initCatmullRom:function(n,s,o,l,c){r(s,o,c*(o-n),c*(l-s))},initNonuniformCatmullRom:function(n,s,o,l,c,h,d){let u=(s-n)/c-(o-n)/(c+h)+(o-s)/h,p=(o-s)/h-(l-s)/(h+d)+(l-o)/d;u*=h,p*=h,r(s,o,u,p)},calc:function(n){const s=n*n,o=s*n;return a+e*n+t*s+i*o}}}const Ya=new b,Do=new Io,No=new Io,Bo=new Io;class Fo extends St{constructor(e=[],t=!1,i="centripetal",r=.5){super(),this.type="CatmullRomCurve3",this.points=e,this.closed=t,this.curveType=i,this.tension=r}getPoint(e,t=new b){const i=t,r=this.points,n=r.length,s=(n-(this.closed?0:1))*e;let o=Math.floor(s),l=s-o;this.closed?o+=o>0?0:(Math.floor(Math.abs(o)/n)+1)*n:l===0&&o===n-1&&(o=n-2,l=1);let c,h;this.closed||o>0?c=r[(o-1)%n]:(Ya.subVectors(r[0],r[1]).add(r[0]),c=Ya);const d=r[o%n],u=r[(o+1)%n];if(this.closed||o+2<n?h=r[(o+2)%n]:(Ya.subVectors(r[n-1],r[n-2]).add(r[n-1]),h=Ya),this.curveType==="centripetal"||this.curveType==="chordal"){const p=this.curveType==="chordal"?.5:.25;let g=Math.pow(c.distanceToSquared(d),p),v=Math.pow(d.distanceToSquared(u),p),x=Math.pow(u.distanceToSquared(h),p);v<1e-4&&(v=1),g<1e-4&&(g=v),x<1e-4&&(x=v),Do.initNonuniformCatmullRom(c.x,d.x,u.x,h.x,g,v,x),No.initNonuniformCatmullRom(c.y,d.y,u.y,h.y,g,v,x),Bo.initNonuniformCatmullRom(c.z,d.z,u.z,h.z,g,v,x)}else this.curveType==="catmullrom"&&(Do.initCatmullRom(c.x,d.x,u.x,h.x,this.tension),No.initCatmullRom(c.y,d.y,u.y,h.y,this.tension),Bo.initCatmullRom(c.z,d.z,u.z,h.z,this.tension));return i.set(Do.calc(l),No.calc(l),Bo.calc(l)),i}copy(e){super.copy(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){const r=e.points[t];this.points.push(r.clone())}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}toJSON(){const e=super.toJSON();e.points=[];for(let t=0,i=this.points.length;t<i;t++){const r=this.points[t];e.points.push(r.toArray())}return e.closed=this.closed,e.curveType=this.curveType,e.tension=this.tension,e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){const r=e.points[t];this.points.push(new b().fromArray(r))}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}}Fo.prototype.isCatmullRomCurve3=!0;function Au(a,e,t,i,r){const n=(i-e)*.5,s=(r-t)*.5,o=a*a,l=a*o;return(2*t-2*i+n+s)*l+(-3*t+3*i-2*n-s)*o+n*a+t}function p0(a,e){const t=1-a;return t*t*e}function m0(a,e){return 2*(1-a)*a*e}function f0(a,e){return a*a*e}function Dn(a,e,t,i){return p0(a,e)+m0(a,t)+f0(a,i)}function g0(a,e){const t=1-a;return t*t*t*e}function v0(a,e){const t=1-a;return 3*t*t*a*e}function y0(a,e){return 3*(1-a)*a*a*e}function x0(a,e){return a*a*a*e}function Nn(a,e,t,i,r){return g0(a,e)+v0(a,t)+y0(a,i)+x0(a,r)}class Za extends St{constructor(e=new j,t=new j,i=new j,r=new j){super(),this.type="CubicBezierCurve",this.v0=e,this.v1=t,this.v2=i,this.v3=r}getPoint(e,t=new j){const i=t,r=this.v0,n=this.v1,s=this.v2,o=this.v3;return i.set(Nn(e,r.x,n.x,s.x,o.x),Nn(e,r.y,n.y,s.y,o.y)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}}Za.prototype.isCubicBezierCurve=!0;class Oo extends St{constructor(e=new b,t=new b,i=new b,r=new b){super(),this.type="CubicBezierCurve3",this.v0=e,this.v1=t,this.v2=i,this.v3=r}getPoint(e,t=new b){const i=t,r=this.v0,n=this.v1,s=this.v2,o=this.v3;return i.set(Nn(e,r.x,n.x,s.x,o.x),Nn(e,r.y,n.y,s.y,o.y),Nn(e,r.z,n.z,s.z,o.z)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}}Oo.prototype.isCubicBezierCurve3=!0;class Bn extends St{constructor(e=new j,t=new j){super(),this.type="LineCurve",this.v1=e,this.v2=t}getPoint(e,t=new j){const i=t;return e===1?i.copy(this.v2):(i.copy(this.v2).sub(this.v1),i.multiplyScalar(e).add(this.v1)),i}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t){const i=t||new j;return i.copy(this.v2).sub(this.v1).normalize(),i}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}Bn.prototype.isLineCurve=!0;class Lu extends St{constructor(e=new b,t=new b){super(),this.type="LineCurve3",this.isLineCurve3=!0,this.v1=e,this.v2=t}getPoint(e,t=new b){const i=t;return e===1?i.copy(this.v2):(i.copy(this.v2).sub(this.v1),i.multiplyScalar(e).add(this.v1)),i}getPointAt(e,t){return this.getPoint(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class Ja extends St{constructor(e=new j,t=new j,i=new j){super(),this.type="QuadraticBezierCurve",this.v0=e,this.v1=t,this.v2=i}getPoint(e,t=new j){const i=t,r=this.v0,n=this.v1,s=this.v2;return i.set(Dn(e,r.x,n.x,s.x),Dn(e,r.y,n.y,s.y)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}Ja.prototype.isQuadraticBezierCurve=!0;class Ka extends St{constructor(e=new b,t=new b,i=new b){super(),this.type="QuadraticBezierCurve3",this.v0=e,this.v1=t,this.v2=i}getPoint(e,t=new b){const i=t,r=this.v0,n=this.v1,s=this.v2;return i.set(Dn(e,r.x,n.x,s.x),Dn(e,r.y,n.y,s.y),Dn(e,r.z,n.z,s.z)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}Ka.prototype.isQuadraticBezierCurve3=!0;class Qa extends St{constructor(e=[]){super(),this.type="SplineCurve",this.points=e}getPoint(e,t=new j){const i=t,r=this.points,n=(r.length-1)*e,s=Math.floor(n),o=n-s,l=r[s===0?s:s-1],c=r[s],h=r[s>r.length-2?r.length-1:s+1],d=r[s>r.length-3?r.length-1:s+2];return i.set(Au(o,l.x,c.x,h.x,d.x),Au(o,l.y,c.y,h.y,d.y)),i}copy(e){super.copy(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){const r=e.points[t];this.points.push(r.clone())}return this}toJSON(){const e=super.toJSON();e.points=[];for(let t=0,i=this.points.length;t<i;t++){const r=this.points[t];e.points.push(r.toArray())}return e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){const r=e.points[t];this.points.push(new j().fromArray(r))}return this}}Qa.prototype.isSplineCurve=!0;var zo=Object.freeze({__proto__:null,ArcCurve:Po,CatmullRomCurve3:Fo,CubicBezierCurve:Za,CubicBezierCurve3:Oo,EllipseCurve:In,LineCurve:Bn,LineCurve3:Lu,QuadraticBezierCurve:Ja,QuadraticBezierCurve3:Ka,SplineCurve:Qa});class Cu extends St{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(e){this.curves.push(e)}closePath(){const e=this.curves[0].getPoint(0),t=this.curves[this.curves.length-1].getPoint(1);e.equals(t)||this.curves.push(new Bn(t,e))}getPoint(e,t){const i=e*this.getLength(),r=this.getCurveLengths();let n=0;for(;n<r.length;){if(r[n]>=i){const s=r[n]-i,o=this.curves[n],l=o.getLength(),c=l===0?0:1-s/l;return o.getPointAt(c,t)}n++}return null}getLength(){const e=this.getCurveLengths();return e[e.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;const e=[];let t=0;for(let i=0,r=this.curves.length;i<r;i++)t+=this.curves[i].getLength(),e.push(t);return this.cacheLengths=e,e}getSpacedPoints(e=40){const t=[];for(let i=0;i<=e;i++)t.push(this.getPoint(i/e));return this.autoClose&&t.push(t[0]),t}getPoints(e=12){const t=[];let i;for(let r=0,n=this.curves;r<n.length;r++){const s=n[r],o=s&&s.isEllipseCurve?e*2:s&&(s.isLineCurve||s.isLineCurve3)?1:s&&s.isSplineCurve?e*s.points.length:e,l=s.getPoints(o);for(let c=0;c<l.length;c++){const h=l[c];i&&i.equals(h)||(t.push(h),i=h)}}return this.autoClose&&t.length>1&&!t[t.length-1].equals(t[0])&&t.push(t[0]),t}copy(e){super.copy(e),this.curves=[];for(let t=0,i=e.curves.length;t<i;t++){const r=e.curves[t];this.curves.push(r.clone())}return this.autoClose=e.autoClose,this}toJSON(){const e=super.toJSON();e.autoClose=this.autoClose,e.curves=[];for(let t=0,i=this.curves.length;t<i;t++){const r=this.curves[t];e.curves.push(r.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.autoClose=e.autoClose,this.curves=[];for(let t=0,i=e.curves.length;t<i;t++){const r=e.curves[t];this.curves.push(new zo[r.type]().fromJSON(r))}return this}}class Fn extends Cu{constructor(e){super(),this.type="Path",this.currentPoint=new j,e&&this.setFromPoints(e)}setFromPoints(e){this.moveTo(e[0].x,e[0].y);for(let t=1,i=e.length;t<i;t++)this.lineTo(e[t].x,e[t].y);return this}moveTo(e,t){return this.currentPoint.set(e,t),this}lineTo(e,t){const i=new Bn(this.currentPoint.clone(),new j(e,t));return this.curves.push(i),this.currentPoint.set(e,t),this}quadraticCurveTo(e,t,i,r){const n=new Ja(this.currentPoint.clone(),new j(e,t),new j(i,r));return this.curves.push(n),this.currentPoint.set(i,r),this}bezierCurveTo(e,t,i,r,n,s){const o=new Za(this.currentPoint.clone(),new j(e,t),new j(i,r),new j(n,s));return this.curves.push(o),this.currentPoint.set(n,s),this}splineThru(e){const t=[this.currentPoint.clone()].concat(e),i=new Qa(t);return this.curves.push(i),this.currentPoint.copy(e[e.length-1]),this}arc(e,t,i,r,n,s){const o=this.currentPoint.x,l=this.currentPoint.y;return this.absarc(e+o,t+l,i,r,n,s),this}absarc(e,t,i,r,n,s){return this.absellipse(e,t,i,i,r,n,s),this}ellipse(e,t,i,r,n,s,o,l){const c=this.currentPoint.x,h=this.currentPoint.y;return this.absellipse(e+c,t+h,i,r,n,s,o,l),this}absellipse(e,t,i,r,n,s,o,l){const c=new In(e,t,i,r,n,s,o,l);if(this.curves.length>0){const d=c.getPoint(0);d.equals(this.currentPoint)||this.lineTo(d.x,d.y)}this.curves.push(c);const h=c.getPoint(1);return this.currentPoint.copy(h),this}copy(e){return super.copy(e),this.currentPoint.copy(e.currentPoint),this}toJSON(){const e=super.toJSON();return e.currentPoint=this.currentPoint.toArray(),e}fromJSON(e){return super.fromJSON(e),this.currentPoint.fromArray(e.currentPoint),this}}class Ut extends Fn{constructor(e){super(e),this.uuid=_t(),this.type="Shape",this.holes=[]}getPointsHoles(e){const t=[];for(let i=0,r=this.holes.length;i<r;i++)t[i]=this.holes[i].getPoints(e);return t}extractPoints(e){return{shape:this.getPoints(e),holes:this.getPointsHoles(e)}}copy(e){super.copy(e),this.holes=[];for(let t=0,i=e.holes.length;t<i;t++){const r=e.holes[t];this.holes.push(r.clone())}return this}toJSON(){const e=super.toJSON();e.uuid=this.uuid,e.holes=[];for(let t=0,i=this.holes.length;t<i;t++){const r=this.holes[t];e.holes.push(r.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.uuid=e.uuid,this.holes=[];for(let t=0,i=e.holes.length;t<i;t++){const r=e.holes[t];this.holes.push(new Fn().fromJSON(r))}return this}}const _0={triangulate:function(a,e,t=2){const i=e&&e.length,r=i?e[0]*t:a.length;let n=Ru(a,0,r,t,!0);const s=[];if(!n||n.next===n.prev)return s;let o,l,c,h,d,u,p;if(i&&(n=T0(a,e,n,t)),a.length>80*t){o=c=a[0],l=h=a[1];for(let g=t;g<r;g+=t)d=a[g],u=a[g+1],d<o&&(o=d),u<l&&(l=u),d>c&&(c=d),u>h&&(h=u);p=Math.max(c-o,h-l),p=p!==0?1/p:0}return On(n,s,t,o,l,p),s}};function Ru(a,e,t,i,r){let n,s;if(r===F0(a,e,t,i)>0)for(n=e;n<t;n+=i)s=Du(n,a[n],a[n+1],s);else for(n=t-i;n>=e;n-=i)s=Du(n,a[n],a[n+1],s);return s&&$a(s,s.next)&&(Un(s),s=s.next),s}function wi(a,e){if(!a)return a;e||(e=a);let t=a,i;do if(i=!1,!t.steiner&&($a(t,t.next)||Ve(t.prev,t,t.next)===0)){if(Un(t),t=e=t.prev,t===t.next)break;i=!0}else t=t.next;while(i||t!==e);return e}function On(a,e,t,i,r,n,s){if(!a)return;!s&&n&&R0(a,i,r,n);let o=a,l,c;for(;a.prev!==a.next;){if(l=a.prev,c=a.next,n?b0(a,i,r,n):w0(a)){e.push(l.i/t),e.push(a.i/t),e.push(c.i/t),Un(a),a=c.next,o=c.next;continue}if(a=c,a===o){s?s===1?(a=M0(wi(a),e,t),On(a,e,t,i,r,n,2)):s===2&&S0(a,e,t,i,r,n):On(wi(a),e,t,i,r,n,1);break}}}function w0(a){const e=a.prev,t=a,i=a.next;if(Ve(e,t,i)>=0)return!1;let r=a.next.next;for(;r!==a.prev;){if(Vr(e.x,e.y,t.x,t.y,i.x,i.y,r.x,r.y)&&Ve(r.prev,r,r.next)>=0)return!1;r=r.next}return!0}function b0(a,e,t,i){const r=a.prev,n=a,s=a.next;if(Ve(r,n,s)>=0)return!1;const o=r.x<n.x?r.x<s.x?r.x:s.x:n.x<s.x?n.x:s.x,l=r.y<n.y?r.y<s.y?r.y:s.y:n.y<s.y?n.y:s.y,c=r.x>n.x?r.x>s.x?r.x:s.x:n.x>s.x?n.x:s.x,h=r.y>n.y?r.y>s.y?r.y:s.y:n.y>s.y?n.y:s.y,d=Uo(o,l,e,t,i),u=Uo(c,h,e,t,i);let p=a.prevZ,g=a.nextZ;for(;p&&p.z>=d&&g&&g.z<=u;){if(p!==a.prev&&p!==a.next&&Vr(r.x,r.y,n.x,n.y,s.x,s.y,p.x,p.y)&&Ve(p.prev,p,p.next)>=0||(p=p.prevZ,g!==a.prev&&g!==a.next&&Vr(r.x,r.y,n.x,n.y,s.x,s.y,g.x,g.y)&&Ve(g.prev,g,g.next)>=0))return!1;g=g.nextZ}for(;p&&p.z>=d;){if(p!==a.prev&&p!==a.next&&Vr(r.x,r.y,n.x,n.y,s.x,s.y,p.x,p.y)&&Ve(p.prev,p,p.next)>=0)return!1;p=p.prevZ}for(;g&&g.z<=u;){if(g!==a.prev&&g!==a.next&&Vr(r.x,r.y,n.x,n.y,s.x,s.y,g.x,g.y)&&Ve(g.prev,g,g.next)>=0)return!1;g=g.nextZ}return!0}function M0(a,e,t){let i=a;do{const r=i.prev,n=i.next.next;!$a(r,n)&&Pu(r,i,i.next,n)&&zn(r,n)&&zn(n,r)&&(e.push(r.i/t),e.push(i.i/t),e.push(n.i/t),Un(i),Un(i.next),i=a=n),i=i.next}while(i!==a);return wi(i)}function S0(a,e,t,i,r,n){let s=a;do{let o=s.next.next;for(;o!==s.prev;){if(s.i!==o.i&&D0(s,o)){let l=Iu(s,o);s=wi(s,s.next),l=wi(l,l.next),On(s,e,t,i,r,n),On(l,e,t,i,r,n);return}o=o.next}s=s.next}while(s!==a)}function T0(a,e,t,i){const r=[];let n,s,o,l,c;for(n=0,s=e.length;n<s;n++)o=e[n]*i,l=n<s-1?e[n+1]*i:a.length,c=Ru(a,o,l,i,!1),c===c.next&&(c.steiner=!0),r.push(I0(c));for(r.sort(E0),n=0;n<r.length;n++)A0(r[n],t),t=wi(t,t.next);return t}function E0(a,e){return a.x-e.x}function A0(a,e){if(e=L0(a,e),e){const t=Iu(e,a);wi(e,e.next),wi(t,t.next)}}function L0(a,e){let t=e;const i=a.x,r=a.y;let n=-1/0,s;do{if(r<=t.y&&r>=t.next.y&&t.next.y!==t.y){const u=t.x+(r-t.y)*(t.next.x-t.x)/(t.next.y-t.y);if(u<=i&&u>n){if(n=u,u===i){if(r===t.y)return t;if(r===t.next.y)return t.next}s=t.x<t.next.x?t:t.next}}t=t.next}while(t!==e);if(!s)return null;if(i===n)return s;const o=s,l=s.x,c=s.y;let h=1/0,d;t=s;do i>=t.x&&t.x>=l&&i!==t.x&&Vr(r<c?i:n,r,l,c,r<c?n:i,r,t.x,t.y)&&(d=Math.abs(r-t.y)/(i-t.x),zn(t,a)&&(d<h||d===h&&(t.x>s.x||t.x===s.x&&C0(s,t)))&&(s=t,h=d)),t=t.next;while(t!==o);return s}function C0(a,e){return Ve(a.prev,a,e.prev)<0&&Ve(e.next,a,a.next)<0}function R0(a,e,t,i){let r=a;do r.z===null&&(r.z=Uo(r.x,r.y,e,t,i)),r.prevZ=r.prev,r.nextZ=r.next,r=r.next;while(r!==a);r.prevZ.nextZ=null,r.prevZ=null,P0(r)}function P0(a){let e,t,i,r,n,s,o,l,c=1;do{for(t=a,a=null,n=null,s=0;t;){for(s++,i=t,o=0,e=0;e<c&&(o++,i=i.nextZ,!!i);e++);for(l=c;o>0||l>0&&i;)o!==0&&(l===0||!i||t.z<=i.z)?(r=t,t=t.nextZ,o--):(r=i,i=i.nextZ,l--),n?n.nextZ=r:a=r,r.prevZ=n,n=r;t=i}n.nextZ=null,c*=2}while(s>1);return a}function Uo(a,e,t,i,r){return a=32767*(a-t)*r,e=32767*(e-i)*r,a=(a|a<<8)&16711935,a=(a|a<<4)&252645135,a=(a|a<<2)&858993459,a=(a|a<<1)&1431655765,e=(e|e<<8)&16711935,e=(e|e<<4)&252645135,e=(e|e<<2)&858993459,e=(e|e<<1)&1431655765,a|e<<1}function I0(a){let e=a,t=a;do(e.x<t.x||e.x===t.x&&e.y<t.y)&&(t=e),e=e.next;while(e!==a);return t}function Vr(a,e,t,i,r,n,s,o){return(r-s)*(e-o)-(a-s)*(n-o)>=0&&(a-s)*(i-o)-(t-s)*(e-o)>=0&&(t-s)*(n-o)-(r-s)*(i-o)>=0}function D0(a,e){return a.next.i!==e.i&&a.prev.i!==e.i&&!N0(a,e)&&(zn(a,e)&&zn(e,a)&&B0(a,e)&&(Ve(a.prev,a,e.prev)||Ve(a,e.prev,e))||$a(a,e)&&Ve(a.prev,a,a.next)>0&&Ve(e.prev,e,e.next)>0)}function Ve(a,e,t){return(e.y-a.y)*(t.x-e.x)-(e.x-a.x)*(t.y-e.y)}function $a(a,e){return a.x===e.x&&a.y===e.y}function Pu(a,e,t,i){const r=ts(Ve(a,e,t)),n=ts(Ve(a,e,i)),s=ts(Ve(t,i,a)),o=ts(Ve(t,i,e));return!!(r!==n&&s!==o||r===0&&es(a,t,e)||n===0&&es(a,i,e)||s===0&&es(t,a,i)||o===0&&es(t,e,i))}function es(a,e,t){return e.x<=Math.max(a.x,t.x)&&e.x>=Math.min(a.x,t.x)&&e.y<=Math.max(a.y,t.y)&&e.y>=Math.min(a.y,t.y)}function ts(a){return a>0?1:a<0?-1:0}function N0(a,e){let t=a;do{if(t.i!==a.i&&t.next.i!==a.i&&t.i!==e.i&&t.next.i!==e.i&&Pu(t,t.next,a,e))return!0;t=t.next}while(t!==a);return!1}function zn(a,e){return Ve(a.prev,a,a.next)<0?Ve(a,e,a.next)>=0&&Ve(a,a.prev,e)>=0:Ve(a,e,a.prev)<0||Ve(a,a.next,e)<0}function B0(a,e){let t=a,i=!1;const r=(a.x+e.x)/2,n=(a.y+e.y)/2;do t.y>n!=t.next.y>n&&t.next.y!==t.y&&r<(t.next.x-t.x)*(n-t.y)/(t.next.y-t.y)+t.x&&(i=!i),t=t.next;while(t!==a);return i}function Iu(a,e){const t=new Go(a.i,a.x,a.y),i=new Go(e.i,e.x,e.y),r=a.next,n=e.prev;return a.next=e,e.prev=a,t.next=r,r.prev=t,i.next=t,t.prev=i,n.next=i,i.prev=n,i}function Du(a,e,t,i){const r=new Go(a,e,t);return i?(r.next=i.next,r.prev=i,i.next.prev=r,i.next=r):(r.prev=r,r.next=r),r}function Un(a){a.next.prev=a.prev,a.prev.next=a.next,a.prevZ&&(a.prevZ.nextZ=a.nextZ),a.nextZ&&(a.nextZ.prevZ=a.prevZ)}function Go(a,e,t){this.i=a,this.x=e,this.y=t,this.prev=null,this.next=null,this.z=null,this.prevZ=null,this.nextZ=null,this.steiner=!1}function F0(a,e,t,i){let r=0;for(let n=e,s=t-i;n<t;n+=i)r+=(a[s]-a[n])*(a[n+1]+a[s+1]),s=n;return r}class kt{static area(e){const t=e.length;let i=0;for(let r=t-1,n=0;n<t;r=n++)i+=e[r].x*e[n].y-e[n].x*e[r].y;return i*.5}static isClockWise(e){return kt.area(e)<0}static triangulateShape(e,t){const i=[],r=[],n=[];Nu(e),Bu(i,e);let s=e.length;t.forEach(Nu);for(let l=0;l<t.length;l++)r.push(s),s+=t[l].length,Bu(i,t[l]);const o=_0.triangulate(i,r);for(let l=0;l<o.length;l+=3)n.push(o.slice(l,l+3));return n}}function Nu(a){const e=a.length;e>2&&a[e-1].equals(a[0])&&a.pop()}function Bu(a,e){for(let t=0;t<e.length;t++)a.push(e[t].x),a.push(e[t].y)}class Vt extends we{constructor(e=new Ut([new j(.5,.5),new j(-.5,.5),new j(-.5,-.5),new j(.5,-.5)]),t={}){super(),this.type="ExtrudeGeometry",this.parameters={shapes:e,options:t},e=Array.isArray(e)?e:[e];const i=this,r=[],n=[];for(let o=0,l=e.length;o<l;o++){const c=e[o];s(c)}this.setAttribute("position",new le(r,3)),this.setAttribute("uv",new le(n,2)),this.computeVertexNormals();function s(o){const l=[],c=t.curveSegments!==void 0?t.curveSegments:12,h=t.steps!==void 0?t.steps:1;let d=t.depth!==void 0?t.depth:1,u=t.bevelEnabled!==void 0?t.bevelEnabled:!0,p=t.bevelThickness!==void 0?t.bevelThickness:.2,g=t.bevelSize!==void 0?t.bevelSize:p-.1,v=t.bevelOffset!==void 0?t.bevelOffset:0,x=t.bevelSegments!==void 0?t.bevelSegments:3;const f=t.extrudePath,m=t.UVGenerator!==void 0?t.UVGenerator:O0;t.amount!==void 0&&(console.warn("THREE.ExtrudeBufferGeometry: amount has been renamed to depth."),d=t.amount);let w,y=!1,M,A,_,L;f&&(w=f.getSpacedPoints(h),y=!0,u=!1,M=f.computeFrenetFrames(h,!1),A=new b,_=new b,L=new b),u||(x=0,p=0,g=0,v=0);const N=o.extractPoints(c);let R=N.shape;const C=N.holes;if(!kt.isClockWise(R)){R=R.reverse();for(let X=0,V=C.length;X<V;X++){const J=C[X];kt.isClockWise(J)&&(C[X]=J.reverse())}}const Y=kt.triangulateShape(R,C),I=R;for(let X=0,V=C.length;X<V;X++){const J=C[X];R=R.concat(J)}function B(X,V,J){return V||console.error("THREE.ExtrudeGeometry: vec does not exist"),V.clone().multiplyScalar(J).add(X)}const O=R.length,z=Y.length;function U(X,V,J){let ce,ae,Ae;const E=X.x-V.x,S=X.y-V.y,k=J.x-X.x,K=J.y-X.y,ee=E*E+S*S,oe=E*K-S*k;if(Math.abs(oe)>Number.EPSILON){const xe=Math.sqrt(ee),Me=Math.sqrt(k*k+K*K),Se=V.x-S/xe,ye=V.y+E/xe,P=J.x-K/Me,ne=J.y+k/Me,q=((P-Se)*K-(ne-ye)*k)/(E*K-S*k);ce=Se+E*q-X.x,ae=ye+S*q-X.y;const ge=ce*ce+ae*ae;if(ge<=2)return new j(ce,ae);Ae=Math.sqrt(ge/2)}else{let xe=!1;E>Number.EPSILON?k>Number.EPSILON&&(xe=!0):E<-Number.EPSILON?k<-Number.EPSILON&&(xe=!0):Math.sign(S)===Math.sign(K)&&(xe=!0),xe?(ce=-S,ae=E,Ae=Math.sqrt(ee)):(ce=E,ae=S,Ae=Math.sqrt(ee/2))}return new j(ce/Ae,ae/Ae)}const $=[];for(let X=0,V=I.length,J=V-1,ce=X+1;X<V;X++,J++,ce++)J===V&&(J=0),ce===V&&(ce=0),$[X]=U(I[X],I[J],I[ce]);const he=[];let de,se=$.concat();for(let X=0,V=C.length;X<V;X++){const J=C[X];de=[];for(let ce=0,ae=J.length,Ae=ae-1,E=ce+1;ce<ae;ce++,Ae++,E++)Ae===ae&&(Ae=0),E===ae&&(E=0),de[ce]=U(J[ce],J[Ae],J[E]);he.push(de),se=se.concat(de)}for(let X=0;X<x;X++){const V=X/x,J=p*Math.cos(V*Math.PI/2),ce=g*Math.sin(V*Math.PI/2)+v;for(let ae=0,Ae=I.length;ae<Ae;ae++){const E=B(I[ae],$[ae],ce);G(E.x,E.y,-J)}for(let ae=0,Ae=C.length;ae<Ae;ae++){const E=C[ae];de=he[ae];for(let S=0,k=E.length;S<k;S++){const K=B(E[S],de[S],ce);G(K.x,K.y,-J)}}}const Te=g+v;for(let X=0;X<O;X++){const V=u?B(R[X],se[X],Te):R[X];y?(_.copy(M.normals[0]).multiplyScalar(V.x),A.copy(M.binormals[0]).multiplyScalar(V.y),L.copy(w[0]).add(_).add(A),G(L.x,L.y,L.z)):G(V.x,V.y,0)}for(let X=1;X<=h;X++)for(let V=0;V<O;V++){const J=u?B(R[V],se[V],Te):R[V];y?(_.copy(M.normals[X]).multiplyScalar(J.x),A.copy(M.binormals[X]).multiplyScalar(J.y),L.copy(w[X]).add(_).add(A),G(L.x,L.y,L.z)):G(J.x,J.y,d/h*X)}for(let X=x-1;X>=0;X--){const V=X/x,J=p*Math.cos(V*Math.PI/2),ce=g*Math.sin(V*Math.PI/2)+v;for(let ae=0,Ae=I.length;ae<Ae;ae++){const E=B(I[ae],$[ae],ce);G(E.x,E.y,d+J)}for(let ae=0,Ae=C.length;ae<Ae;ae++){const E=C[ae];de=he[ae];for(let S=0,k=E.length;S<k;S++){const K=B(E[S],de[S],ce);y?G(K.x,K.y+w[h-1].y,w[h-1].x+J):G(K.x,K.y,d+J)}}}Z(),Q();function Z(){const X=r.length/3;if(u){let V=0,J=O*V;for(let ce=0;ce<z;ce++){const ae=Y[ce];be(ae[2]+J,ae[1]+J,ae[0]+J)}V=h+x*2,J=O*V;for(let ce=0;ce<z;ce++){const ae=Y[ce];be(ae[0]+J,ae[1]+J,ae[2]+J)}}else{for(let V=0;V<z;V++){const J=Y[V];be(J[2],J[1],J[0])}for(let V=0;V<z;V++){const J=Y[V];be(J[0]+O*h,J[1]+O*h,J[2]+O*h)}}i.addGroup(X,r.length/3-X,0)}function Q(){const X=r.length/3;let V=0;pe(I,V),V+=I.length;for(let J=0,ce=C.length;J<ce;J++){const ae=C[J];pe(ae,V),V+=ae.length}i.addGroup(X,r.length/3-X,1)}function pe(X,V){let J=X.length;for(;--J>=0;){const ce=J;let ae=J-1;ae<0&&(ae=X.length-1);for(let Ae=0,E=h+x*2;Ae<E;Ae++){const S=O*Ae,k=O*(Ae+1),K=V+ce+S,ee=V+ae+S,oe=V+ae+k,xe=V+ce+k;Ee(K,ee,oe,xe)}}}function G(X,V,J){l.push(X),l.push(V),l.push(J)}function be(X,V,J){re(X),re(V),re(J);const ce=r.length/3,ae=m.generateTopUV(i,r,ce-3,ce-2,ce-1);fe(ae[0]),fe(ae[1]),fe(ae[2])}function Ee(X,V,J,ce){re(X),re(V),re(ce),re(V),re(J),re(ce);const ae=r.length/3,Ae=m.generateSideWallUV(i,r,ae-6,ae-3,ae-2,ae-1);fe(Ae[0]),fe(Ae[1]),fe(Ae[3]),fe(Ae[1]),fe(Ae[2]),fe(Ae[3])}function re(X){r.push(l[X*3+0]),r.push(l[X*3+1]),r.push(l[X*3+2])}function fe(X){n.push(X.x),n.push(X.y)}}}toJSON(){const e=super.toJSON(),t=this.parameters.shapes,i=this.parameters.options;return z0(t,i,e)}static fromJSON(e,t){const i=[];for(let n=0,s=e.shapes.length;n<s;n++){const o=t[e.shapes[n]];i.push(o)}const r=e.options.extrudePath;return r!==void 0&&(e.options.extrudePath=new zo[r.type]().fromJSON(r)),new Vt(i,e.options)}}const O0={generateTopUV:function(a,e,t,i,r){const n=e[t*3],s=e[t*3+1],o=e[i*3],l=e[i*3+1],c=e[r*3],h=e[r*3+1];return[new j(n,s),new j(o,l),new j(c,h)]},generateSideWallUV:function(a,e,t,i,r,n){const s=e[t*3],o=e[t*3+1],l=e[t*3+2],c=e[i*3],h=e[i*3+1],d=e[i*3+2],u=e[r*3],p=e[r*3+1],g=e[r*3+2],v=e[n*3],x=e[n*3+1],f=e[n*3+2];return Math.abs(o-h)<Math.abs(s-c)?[new j(s,1-l),new j(c,1-d),new j(u,1-g),new j(v,1-f)]:[new j(o,1-l),new j(h,1-d),new j(p,1-g),new j(x,1-f)]}};function z0(a,e,t){if(t.shapes=[],Array.isArray(a))for(let i=0,r=a.length;i<r;i++){const n=a[i];t.shapes.push(n.uuid)}else t.shapes.push(a.uuid);return e.extrudePath!==void 0&&(t.options.extrudePath=e.extrudePath.toJSON()),t}class Zr extends Ht{constructor(e=1,t=0){const i=(1+Math.sqrt(5))/2,r=[-1,i,0,1,i,0,-1,-i,0,1,-i,0,0,-1,i,0,1,i,0,-1,-i,0,1,-i,i,0,-1,i,0,1,-i,0,-1,-i,0,1],n=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(r,n,e,t),this.type="IcosahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new Zr(e.radius,e.detail)}}class Jr extends we{constructor(e=[new j(0,.5),new j(.5,0),new j(0,-.5)],t=12,i=0,r=Math.PI*2){super(),this.type="LatheGeometry",this.parameters={points:e,segments:t,phiStart:i,phiLength:r},t=Math.floor(t),r=ut(r,0,Math.PI*2);const n=[],s=[],o=[],l=1/t,c=new b,h=new j;for(let d=0;d<=t;d++){const u=i+d*l*r,p=Math.sin(u),g=Math.cos(u);for(let v=0;v<=e.length-1;v++)c.x=e[v].x*p,c.y=e[v].y,c.z=e[v].x*g,s.push(c.x,c.y,c.z),h.x=d/t,h.y=v/(e.length-1),o.push(h.x,h.y)}for(let d=0;d<t;d++)for(let u=0;u<e.length-1;u++){const p=u+d*e.length,g=p,v=p+e.length,x=p+e.length+1,f=p+1;n.push(g,v,f),n.push(v,x,f)}if(this.setIndex(n),this.setAttribute("position",new le(s,3)),this.setAttribute("uv",new le(o,2)),this.computeVertexNormals(),r===Math.PI*2){const d=this.attributes.normal.array,u=new b,p=new b,g=new b,v=t*e.length*3;for(let x=0,f=0;x<e.length;x++,f+=3)u.x=d[f+0],u.y=d[f+1],u.z=d[f+2],p.x=d[v+f+0],p.y=d[v+f+1],p.z=d[v+f+2],g.addVectors(u,p).normalize(),d[f+0]=d[v+f+0]=g.x,d[f+1]=d[v+f+1]=g.y,d[f+2]=d[v+f+2]=g.z}}static fromJSON(e){return new Jr(e.points,e.segments,e.phiStart,e.phiLength)}}class lr extends Ht{constructor(e=1,t=0){const i=[1,0,0,-1,0,0,0,1,0,0,-1,0,0,0,1,0,0,-1],r=[0,2,4,0,4,3,0,3,5,0,5,2,1,2,5,1,5,3,1,3,4,1,4,2];super(i,r,e,t),this.type="OctahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new lr(e.radius,e.detail)}}class Kr extends we{constructor(e=.5,t=1,i=8,r=1,n=0,s=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:e,outerRadius:t,thetaSegments:i,phiSegments:r,thetaStart:n,thetaLength:s},i=Math.max(3,i),r=Math.max(1,r);const o=[],l=[],c=[],h=[];let d=e;const u=(t-e)/r,p=new b,g=new j;for(let v=0;v<=r;v++){for(let x=0;x<=i;x++){const f=n+x/i*s;p.x=d*Math.cos(f),p.y=d*Math.sin(f),l.push(p.x,p.y,p.z),c.push(0,0,1),g.x=(p.x/t+1)/2,g.y=(p.y/t+1)/2,h.push(g.x,g.y)}d+=u}for(let v=0;v<r;v++){const x=v*(i+1);for(let f=0;f<i;f++){const m=f+x,w=m,y=m+i+1,M=m+i+2,A=m+1;o.push(w,y,A),o.push(y,M,A)}}this.setIndex(o),this.setAttribute("position",new le(l,3)),this.setAttribute("normal",new le(c,3)),this.setAttribute("uv",new le(h,2))}static fromJSON(e){return new Kr(e.innerRadius,e.outerRadius,e.thetaSegments,e.phiSegments,e.thetaStart,e.thetaLength)}}class cr extends we{constructor(e=new Ut([new j(0,.5),new j(-.5,-.5),new j(.5,-.5)]),t=12){super(),this.type="ShapeGeometry",this.parameters={shapes:e,curveSegments:t};const i=[],r=[],n=[],s=[];let o=0,l=0;if(Array.isArray(e)===!1)c(e);else for(let h=0;h<e.length;h++)c(e[h]),this.addGroup(o,l,h),o+=l,l=0;this.setIndex(i),this.setAttribute("position",new le(r,3)),this.setAttribute("normal",new le(n,3)),this.setAttribute("uv",new le(s,2));function c(h){const d=r.length/3,u=h.extractPoints(t);let p=u.shape;const g=u.holes;kt.isClockWise(p)===!1&&(p=p.reverse());for(let x=0,f=g.length;x<f;x++){const m=g[x];kt.isClockWise(m)===!0&&(g[x]=m.reverse())}const v=kt.triangulateShape(p,g);for(let x=0,f=g.length;x<f;x++){const m=g[x];p=p.concat(m)}for(let x=0,f=p.length;x<f;x++){const m=p[x];r.push(m.x,m.y,0),n.push(0,0,1),s.push(m.x,m.y)}for(let x=0,f=v.length;x<f;x++){const m=v[x],w=m[0]+d,y=m[1]+d,M=m[2]+d;i.push(w,y,M),l+=3}}}toJSON(){const e=super.toJSON(),t=this.parameters.shapes;return U0(t,e)}static fromJSON(e,t){const i=[];for(let r=0,n=e.shapes.length;r<n;r++){const s=t[e.shapes[r]];i.push(s)}return new cr(i,e.curveSegments)}}function U0(a,e){if(e.shapes=[],Array.isArray(a))for(let t=0,i=a.length;t<i;t++){const r=a[t];e.shapes.push(r.uuid)}else e.shapes.push(a.uuid);return e}class hr extends we{constructor(e=1,t=32,i=16,r=0,n=Math.PI*2,s=0,o=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:i,phiStart:r,phiLength:n,thetaStart:s,thetaLength:o},t=Math.max(3,Math.floor(t)),i=Math.max(2,Math.floor(i));const l=Math.min(s+o,Math.PI);let c=0;const h=[],d=new b,u=new b,p=[],g=[],v=[],x=[];for(let f=0;f<=i;f++){const m=[],w=f/i;let y=0;f==0&&s==0?y=.5/t:f==i&&l==Math.PI&&(y=-.5/t);for(let M=0;M<=t;M++){const A=M/t;d.x=-e*Math.cos(r+A*n)*Math.sin(s+w*o),d.y=e*Math.cos(s+w*o),d.z=e*Math.sin(r+A*n)*Math.sin(s+w*o),g.push(d.x,d.y,d.z),u.copy(d).normalize(),v.push(u.x,u.y,u.z),x.push(A+y,1-w),m.push(c++)}h.push(m)}for(let f=0;f<i;f++)for(let m=0;m<t;m++){const w=h[f][m+1],y=h[f][m],M=h[f+1][m],A=h[f+1][m+1];(f!==0||s>0)&&p.push(w,y,A),(f!==i-1||l<Math.PI)&&p.push(y,M,A)}this.setIndex(p),this.setAttribute("position",new le(g,3)),this.setAttribute("normal",new le(v,3)),this.setAttribute("uv",new le(x,2))}static fromJSON(e){return new hr(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}}class Qr extends Ht{constructor(e=1,t=0){const i=[1,1,1,-1,-1,1,-1,1,-1,1,-1,-1],r=[2,1,0,0,3,2,1,3,0,2,3,1];super(i,r,e,t),this.type="TetrahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new Qr(e.radius,e.detail)}}class $r extends we{constructor(e=1,t=.4,i=8,r=6,n=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:e,tube:t,radialSegments:i,tubularSegments:r,arc:n},i=Math.floor(i),r=Math.floor(r);const s=[],o=[],l=[],c=[],h=new b,d=new b,u=new b;for(let p=0;p<=i;p++)for(let g=0;g<=r;g++){const v=g/r*n,x=p/i*Math.PI*2;d.x=(e+t*Math.cos(x))*Math.cos(v),d.y=(e+t*Math.cos(x))*Math.sin(v),d.z=t*Math.sin(x),o.push(d.x,d.y,d.z),h.x=e*Math.cos(v),h.y=e*Math.sin(v),u.subVectors(d,h).normalize(),l.push(u.x,u.y,u.z),c.push(g/r),c.push(p/i)}for(let p=1;p<=i;p++)for(let g=1;g<=r;g++){const v=(r+1)*p+g-1,x=(r+1)*(p-1)+g-1,f=(r+1)*(p-1)+g,m=(r+1)*p+g;s.push(v,x,m),s.push(x,f,m)}this.setIndex(s),this.setAttribute("position",new le(o,3)),this.setAttribute("normal",new le(l,3)),this.setAttribute("uv",new le(c,2))}static fromJSON(e){return new $r(e.radius,e.tube,e.radialSegments,e.tubularSegments,e.arc)}}class en extends we{constructor(e=1,t=.4,i=64,r=8,n=2,s=3){super(),this.type="TorusKnotGeometry",this.parameters={radius:e,tube:t,tubularSegments:i,radialSegments:r,p:n,q:s},i=Math.floor(i),r=Math.floor(r);const o=[],l=[],c=[],h=[],d=new b,u=new b,p=new b,g=new b,v=new b,x=new b,f=new b;for(let w=0;w<=i;++w){const y=w/i*n*Math.PI*2;m(y,n,s,e,p),m(y+.01,n,s,e,g),x.subVectors(g,p),f.addVectors(g,p),v.crossVectors(x,f),f.crossVectors(v,x),v.normalize(),f.normalize();for(let M=0;M<=r;++M){const A=M/r*Math.PI*2,_=-t*Math.cos(A),L=t*Math.sin(A);d.x=p.x+(_*f.x+L*v.x),d.y=p.y+(_*f.y+L*v.y),d.z=p.z+(_*f.z+L*v.z),l.push(d.x,d.y,d.z),u.subVectors(d,p).normalize(),c.push(u.x,u.y,u.z),h.push(w/i),h.push(M/r)}}for(let w=1;w<=i;w++)for(let y=1;y<=r;y++){const M=(r+1)*(w-1)+(y-1),A=(r+1)*w+(y-1),_=(r+1)*w+y,L=(r+1)*(w-1)+y;o.push(M,A,L),o.push(A,_,L)}this.setIndex(o),this.setAttribute("position",new le(l,3)),this.setAttribute("normal",new le(c,3)),this.setAttribute("uv",new le(h,2));function m(w,y,M,A,_){const L=Math.cos(w),N=Math.sin(w),R=M/y*w,C=Math.cos(R);_.x=A*(2+C)*.5*L,_.y=A*(2+C)*N*.5,_.z=A*Math.sin(R)*.5}}static fromJSON(e){return new en(e.radius,e.tube,e.tubularSegments,e.radialSegments,e.p,e.q)}}class tn extends we{constructor(e=new Ka(new b(-1,-1,0),new b(-1,1,0),new b(1,1,0)),t=64,i=1,r=8,n=!1){super(),this.type="TubeGeometry",this.parameters={path:e,tubularSegments:t,radius:i,radialSegments:r,closed:n};const s=e.computeFrenetFrames(t,n);this.tangents=s.tangents,this.normals=s.normals,this.binormals=s.binormals;const o=new b,l=new b,c=new j;let h=new b;const d=[],u=[],p=[],g=[];v(),this.setIndex(g),this.setAttribute("position",new le(d,3)),this.setAttribute("normal",new le(u,3)),this.setAttribute("uv",new le(p,2));function v(){for(let w=0;w<t;w++)x(w);x(n===!1?t:0),m(),f()}function x(w){h=e.getPointAt(w/t,h);const y=s.normals[w],M=s.binormals[w];for(let A=0;A<=r;A++){const _=A/r*Math.PI*2,L=Math.sin(_),N=-Math.cos(_);l.x=N*y.x+L*M.x,l.y=N*y.y+L*M.y,l.z=N*y.z+L*M.z,l.normalize(),u.push(l.x,l.y,l.z),o.x=h.x+i*l.x,o.y=h.y+i*l.y,o.z=h.z+i*l.z,d.push(o.x,o.y,o.z)}}function f(){for(let w=1;w<=t;w++)for(let y=1;y<=r;y++){const M=(r+1)*(w-1)+(y-1),A=(r+1)*w+(y-1),_=(r+1)*w+y,L=(r+1)*(w-1)+y;g.push(M,A,L),g.push(A,_,L)}}function m(){for(let w=0;w<=t;w++)for(let y=0;y<=r;y++)c.x=w/t,c.y=y/r,p.push(c.x,c.y)}}toJSON(){const e=super.toJSON();return e.path=this.parameters.path.toJSON(),e}static fromJSON(e){return new tn(new zo[e.path.type]().fromJSON(e.path),e.tubularSegments,e.radius,e.radialSegments,e.closed)}}class Ho extends we{constructor(e=null){if(super(),this.type="WireframeGeometry",this.parameters={geometry:e},e!==null){const t=[],i=new Set,r=new b,n=new b;if(e.index!==null){const s=e.attributes.position,o=e.index;let l=e.groups;l.length===0&&(l=[{start:0,count:o.count,materialIndex:0}]);for(let c=0,h=l.length;c<h;++c){const d=l[c],u=d.start,p=d.count;for(let g=u,v=u+p;g<v;g+=3)for(let x=0;x<3;x++){const f=o.getX(g+x),m=o.getX(g+(x+1)%3);r.fromBufferAttribute(s,f),n.fromBufferAttribute(s,m),Fu(r,n,i)===!0&&(t.push(r.x,r.y,r.z),t.push(n.x,n.y,n.z))}}}else{const s=e.attributes.position;for(let o=0,l=s.count/3;o<l;o++)for(let c=0;c<3;c++){const h=3*o+c,d=3*o+(c+1)%3;r.fromBufferAttribute(s,h),n.fromBufferAttribute(s,d),Fu(r,n,i)===!0&&(t.push(r.x,r.y,r.z),t.push(n.x,n.y,n.z))}}this.setAttribute("position",new le(t,3))}}}function Fu(a,e,t){const i=`${a.x},${a.y},${a.z}-${e.x},${e.y},${e.z}`,r=`${e.x},${e.y},${e.z}-${a.x},${a.y},${a.z}`;return t.has(i)===!0||t.has(r)===!0?!1:(t.add(i,r),!0)}var Ou=Object.freeze({__proto__:null,BoxGeometry:ri,BoxBufferGeometry:ri,CircleGeometry:qr,CircleBufferGeometry:qr,ConeGeometry:Xr,ConeBufferGeometry:Xr,CylinderGeometry:Si,CylinderBufferGeometry:Si,DodecahedronGeometry:Yr,DodecahedronBufferGeometry:Yr,EdgesGeometry:Ro,ExtrudeGeometry:Vt,ExtrudeBufferGeometry:Vt,IcosahedronGeometry:Zr,IcosahedronBufferGeometry:Zr,LatheGeometry:Jr,LatheBufferGeometry:Jr,OctahedronGeometry:lr,OctahedronBufferGeometry:lr,PlaneGeometry:or,PlaneBufferGeometry:or,PolyhedronGeometry:Ht,PolyhedronBufferGeometry:Ht,RingGeometry:Kr,RingBufferGeometry:Kr,ShapeGeometry:cr,ShapeBufferGeometry:cr,SphereGeometry:hr,SphereBufferGeometry:hr,TetrahedronGeometry:Qr,TetrahedronBufferGeometry:Qr,TorusGeometry:$r,TorusBufferGeometry:$r,TorusKnotGeometry:en,TorusKnotBufferGeometry:en,TubeGeometry:tn,TubeBufferGeometry:tn,WireframeGeometry:Ho});class ko extends rt{constructor(e){super(),this.type="ShadowMaterial",this.color=new ie(0),this.transparent=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this}}ko.prototype.isShadowMaterial=!0;class is extends rt{constructor(e){super(),this.defines={STANDARD:""},this.type="MeshStandardMaterial",this.color=new ie(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new ie(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Hi,this.normalScale=new j(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapIntensity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapIntensity=e.envMapIntensity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this}}is.prototype.isMeshStandardMaterial=!0;class Vo extends is{constructor(e){super(),this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new j(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return ut(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(t){this.ior=(1+.4*t)/(1-.4*t)}}),this.sheenColor=new ie(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=.01,this.thicknessMap=null,this.attenuationDistance=0,this.attenuationColor=new ie(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new ie(1,1,1),this.specularColorMap=null,this._sheen=0,this._clearcoat=0,this._transmission=0,this.setValues(e)}get sheen(){return this._sheen}set sheen(e){this._sheen>0!=e>0&&this.version++,this._sheen=e}get clearcoat(){return this._clearcoat}set clearcoat(e){this._clearcoat>0!=e>0&&this.version++,this._clearcoat=e}get transmission(){return this._transmission}set transmission(e){this._transmission>0!=e>0&&this.version++,this._transmission=e}copy(e){return super.copy(e),this.defines={STANDARD:"",PHYSICAL:""},this.clearcoat=e.clearcoat,this.clearcoatMap=e.clearcoatMap,this.clearcoatRoughness=e.clearcoatRoughness,this.clearcoatRoughnessMap=e.clearcoatRoughnessMap,this.clearcoatNormalMap=e.clearcoatNormalMap,this.clearcoatNormalScale.copy(e.clearcoatNormalScale),this.ior=e.ior,this.sheen=e.sheen,this.sheenColor.copy(e.sheenColor),this.sheenColorMap=e.sheenColorMap,this.sheenRoughness=e.sheenRoughness,this.sheenRoughnessMap=e.sheenRoughnessMap,this.transmission=e.transmission,this.transmissionMap=e.transmissionMap,this.thickness=e.thickness,this.thicknessMap=e.thicknessMap,this.attenuationDistance=e.attenuationDistance,this.attenuationColor.copy(e.attenuationColor),this.specularIntensity=e.specularIntensity,this.specularIntensityMap=e.specularIntensityMap,this.specularColor.copy(e.specularColor),this.specularColorMap=e.specularColorMap,this}}Vo.prototype.isMeshPhysicalMaterial=!0;class Wo extends rt{constructor(e){super(),this.type="MeshPhongMaterial",this.color=new ie(16777215),this.specular=new ie(1118481),this.shininess=30,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new ie(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Hi,this.normalScale=new j(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=an,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.specular.copy(e.specular),this.shininess=e.shininess,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this}}Wo.prototype.isMeshPhongMaterial=!0;class jo extends rt{constructor(e){super(),this.defines={TOON:""},this.type="MeshToonMaterial",this.color=new ie(16777215),this.map=null,this.gradientMap=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new ie(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Hi,this.normalScale=new j(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.alphaMap=null,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.gradientMap=e.gradientMap,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.alphaMap=e.alphaMap,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this}}jo.prototype.isMeshToonMaterial=!0;class qo extends rt{constructor(e){super(),this.type="MeshNormalMaterial",this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Hi,this.normalScale=new j(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.flatShading=!1,this.setValues(e)}copy(e){return super.copy(e),this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.flatShading=e.flatShading,this}}qo.prototype.isMeshNormalMaterial=!0;class Xo extends rt{constructor(e){super(),this.type="MeshLambertMaterial",this.color=new ie(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new ie(0),this.emissiveIntensity=1,this.emissiveMap=null,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=an,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this}}Xo.prototype.isMeshLambertMaterial=!0;class Yo extends rt{constructor(e){super(),this.defines={MATCAP:""},this.type="MeshMatcapMaterial",this.color=new ie(16777215),this.matcap=null,this.map=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Hi,this.normalScale=new j(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.alphaMap=null,this.flatShading=!1,this.setValues(e)}copy(e){return super.copy(e),this.defines={MATCAP:""},this.color.copy(e.color),this.matcap=e.matcap,this.map=e.map,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.alphaMap=e.alphaMap,this.flatShading=e.flatShading,this}}Yo.prototype.isMeshMatcapMaterial=!0;class Zo extends st{constructor(e){super(),this.type="LineDashedMaterial",this.scale=1,this.dashSize=3,this.gapSize=1,this.setValues(e)}copy(e){return super.copy(e),this.scale=e.scale,this.dashSize=e.dashSize,this.gapSize=e.gapSize,this}}Zo.prototype.isLineDashedMaterial=!0;var G0=Object.freeze({__proto__:null,ShadowMaterial:ko,SpriteMaterial:Da,RawShaderMaterial:Nr,ShaderMaterial:$t,PointsMaterial:Qi,MeshPhysicalMaterial:Vo,MeshStandardMaterial:is,MeshPhongMaterial:Wo,MeshToonMaterial:jo,MeshNormalMaterial:qo,MeshLambertMaterial:Xo,MeshDepthMaterial:Ra,MeshDistanceMaterial:Pa,MeshBasicMaterial:Qt,MeshMatcapMaterial:Yo,LineDashedMaterial:Zo,LineBasicMaterial:st,Material:rt});const He={arraySlice:function(a,e,t){return He.isTypedArray(a)?new a.constructor(a.subarray(e,t!==void 0?t:a.length)):a.slice(e,t)},convertArray:function(a,e,t){return!a||!t&&a.constructor===e?a:typeof e.BYTES_PER_ELEMENT=="number"?new e(a):Array.prototype.slice.call(a)},isTypedArray:function(a){return ArrayBuffer.isView(a)&&!(a instanceof DataView)},getKeyframeOrder:function(a){function e(r,n){return a[r]-a[n]}const t=a.length,i=new Array(t);for(let r=0;r!==t;++r)i[r]=r;return i.sort(e),i},sortedArray:function(a,e,t){const i=a.length,r=new a.constructor(i);for(let n=0,s=0;s!==i;++n){const o=t[n]*e;for(let l=0;l!==e;++l)r[s++]=a[o+l]}return r},flattenJSON:function(a,e,t,i){let r=1,n=a[0];for(;n!==void 0&&n[i]===void 0;)n=a[r++];if(n===void 0)return;let s=n[i];if(s!==void 0)if(Array.isArray(s))do s=n[i],s!==void 0&&(e.push(n.time),t.push.apply(t,s)),n=a[r++];while(n!==void 0);else if(s.toArray!==void 0)do s=n[i],s!==void 0&&(e.push(n.time),s.toArray(t,t.length)),n=a[r++];while(n!==void 0);else do s=n[i],s!==void 0&&(e.push(n.time),t.push(s)),n=a[r++];while(n!==void 0)},subclip:function(a,e,t,i,r=30){const n=a.clone();n.name=e;const s=[];for(let l=0;l<n.tracks.length;++l){const c=n.tracks[l],h=c.getValueSize(),d=[],u=[];for(let p=0;p<c.times.length;++p){const g=c.times[p]*r;if(!(g<t||g>=i)){d.push(c.times[p]);for(let v=0;v<h;++v)u.push(c.values[p*h+v])}}d.length!==0&&(c.times=He.convertArray(d,c.times.constructor),c.values=He.convertArray(u,c.values.constructor),s.push(c))}n.tracks=s;let o=1/0;for(let l=0;l<n.tracks.length;++l)o>n.tracks[l].times[0]&&(o=n.tracks[l].times[0]);for(let l=0;l<n.tracks.length;++l)n.tracks[l].shift(-1*o);return n.resetDuration(),n},makeClipAdditive:function(a,e=0,t=a,i=30){i<=0&&(i=30);const r=t.tracks.length,n=e/i;for(let s=0;s<r;++s){const o=t.tracks[s],l=o.ValueTypeName;if(l==="bool"||l==="string")continue;const c=a.tracks.find(function(f){return f.name===o.name&&f.ValueTypeName===l});if(c===void 0)continue;let h=0;const d=o.getValueSize();o.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline&&(h=d/3);let u=0;const p=c.getValueSize();c.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline&&(u=p/3);const g=o.times.length-1;let v;if(n<=o.times[0]){const f=h,m=d-h;v=He.arraySlice(o.values,f,m)}else if(n>=o.times[g]){const f=g*d+h,m=f+d-h;v=He.arraySlice(o.values,f,m)}else{const f=o.createInterpolant(),m=h,w=d-h;f.evaluate(n),v=He.arraySlice(f.resultBuffer,m,w)}l==="quaternion"&&new dt().fromArray(v).normalize().conjugate().toArray(v);const x=c.times.length;for(let f=0;f<x;++f){const m=f*p+u;if(l==="quaternion")dt.multiplyQuaternionsFlat(c.values,m,v,0,c.values,m);else{const w=p-u*2;for(let y=0;y<w;++y)c.values[m+y]-=v[y]}}}return a.blendMode=Bs,a}};class ti{constructor(e,t,i,r){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=r!==void 0?r:new t.constructor(i),this.sampleValues=t,this.valueSize=i,this.settings=null,this.DefaultSettings_={}}evaluate(e){const t=this.parameterPositions;let i=this._cachedIndex,r=t[i],n=t[i-1];e:{t:{let s;i:{r:if(!(e<r)){for(let o=i+2;;){if(r===void 0){if(e<n)break r;return i=t.length,this._cachedIndex=i,this.afterEnd_(i-1,e,n)}if(i===o)break;if(n=r,r=t[++i],e<r)break t}s=t.length;break i}if(!(e>=n)){const o=t[1];e<o&&(i=2,n=o);for(let l=i-2;;){if(n===void 0)return this._cachedIndex=0,this.beforeStart_(0,e,r);if(i===l)break;if(r=n,n=t[--i-1],e>=n)break t}s=i,i=0;break i}break e}for(;i<s;){const o=i+s>>>1;e<t[o]?s=o:i=o+1}if(r=t[i],n=t[i-1],n===void 0)return this._cachedIndex=0,this.beforeStart_(0,e,r);if(r===void 0)return i=t.length,this._cachedIndex=i,this.afterEnd_(i-1,n,e)}this._cachedIndex=i,this.intervalChanged_(i,n,r)}return this.interpolate_(i,n,e,r)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){const t=this.resultBuffer,i=this.sampleValues,r=this.valueSize,n=e*r;for(let s=0;s!==r;++s)t[s]=i[n+s];return t}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}}ti.prototype.beforeStart_=ti.prototype.copySampleValue_,ti.prototype.afterEnd_=ti.prototype.copySampleValue_;class zu extends ti{constructor(e,t,i,r){super(e,t,i,r),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:Ui,endingEnd:Ui}}intervalChanged_(e,t,i){const r=this.parameterPositions;let n=e-2,s=e+1,o=r[n],l=r[s];if(o===void 0)switch(this.getSettings_().endingStart){case Gi:n=e,o=2*t-i;break;case fn:n=r.length-2,o=t+r[n]-r[n+1];break;default:n=e,o=i}if(l===void 0)switch(this.getSettings_().endingEnd){case Gi:s=e,l=2*i-t;break;case fn:s=1,l=i+r[1]-r[0];break;default:s=e-1,l=t}const c=(i-t)*.5,h=this.valueSize;this._weightPrev=c/(t-o),this._weightNext=c/(l-i),this._offsetPrev=n*h,this._offsetNext=s*h}interpolate_(e,t,i,r){const n=this.resultBuffer,s=this.sampleValues,o=this.valueSize,l=e*o,c=l-o,h=this._offsetPrev,d=this._offsetNext,u=this._weightPrev,p=this._weightNext,g=(i-t)/(r-t),v=g*g,x=v*g,f=-u*x+2*u*v-u*g,m=(1+u)*x+(-1.5-2*u)*v+(-.5+u)*g+1,w=(-1-p)*x+(1.5+p)*v+.5*g,y=p*x-p*v;for(let M=0;M!==o;++M)n[M]=f*s[h+M]+m*s[c+M]+w*s[l+M]+y*s[d+M];return n}}class Jo extends ti{constructor(e,t,i,r){super(e,t,i,r)}interpolate_(e,t,i,r){const n=this.resultBuffer,s=this.sampleValues,o=this.valueSize,l=e*o,c=l-o,h=(i-t)/(r-t),d=1-h;for(let u=0;u!==o;++u)n[u]=s[c+u]*d+s[l+u]*h;return n}}class Uu extends ti{constructor(e,t,i,r){super(e,t,i,r)}interpolate_(e){return this.copySampleValue_(e-1)}}class Nt{constructor(e,t,i,r){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=He.convertArray(t,this.TimeBufferType),this.values=He.convertArray(i,this.ValueBufferType),this.setInterpolation(r||this.DefaultInterpolation)}static toJSON(e){const t=e.constructor;let i;if(t.toJSON!==this.toJSON)i=t.toJSON(e);else{i={name:e.name,times:He.convertArray(e.times,Array),values:He.convertArray(e.values,Array)};const r=e.getInterpolation();r!==e.DefaultInterpolation&&(i.interpolation=r)}return i.type=e.ValueTypeName,i}InterpolantFactoryMethodDiscrete(e){return new Uu(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new Jo(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new zu(this.times,this.values,this.getValueSize(),e)}setInterpolation(e){let t;switch(e){case pn:t=this.InterpolantFactoryMethodDiscrete;break;case mn:t=this.InterpolantFactoryMethodLinear;break;case $n:t=this.InterpolantFactoryMethodSmooth;break}if(t===void 0){const i="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(i);return console.warn("THREE.KeyframeTrack:",i),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return pn;case this.InterpolantFactoryMethodLinear:return mn;case this.InterpolantFactoryMethodSmooth:return $n}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){const t=this.times;for(let i=0,r=t.length;i!==r;++i)t[i]+=e}return this}scale(e){if(e!==1){const t=this.times;for(let i=0,r=t.length;i!==r;++i)t[i]*=e}return this}trim(e,t){const i=this.times,r=i.length;let n=0,s=r-1;for(;n!==r&&i[n]<e;)++n;for(;s!==-1&&i[s]>t;)--s;if(++s,n!==0||s!==r){n>=s&&(s=Math.max(s,1),n=s-1);const o=this.getValueSize();this.times=He.arraySlice(i,n,s),this.values=He.arraySlice(this.values,n*o,s*o)}return this}validate(){let e=!0;const t=this.getValueSize();t-Math.floor(t)!==0&&(console.error("THREE.KeyframeTrack: Invalid value size in track.",this),e=!1);const i=this.times,r=this.values,n=i.length;n===0&&(console.error("THREE.KeyframeTrack: Track is empty.",this),e=!1);let s=null;for(let o=0;o!==n;o++){const l=i[o];if(typeof l=="number"&&isNaN(l)){console.error("THREE.KeyframeTrack: Time is not a valid number.",this,o,l),e=!1;break}if(s!==null&&s>l){console.error("THREE.KeyframeTrack: Out of order keys.",this,o,l,s),e=!1;break}s=l}if(r!==void 0&&He.isTypedArray(r))for(let o=0,l=r.length;o!==l;++o){const c=r[o];if(isNaN(c)){console.error("THREE.KeyframeTrack: Value is not a valid number.",this,o,c),e=!1;break}}return e}optimize(){const e=He.arraySlice(this.times),t=He.arraySlice(this.values),i=this.getValueSize(),r=this.getInterpolation()===$n,n=e.length-1;let s=1;for(let o=1;o<n;++o){let l=!1;const c=e[o],h=e[o+1];if(c!==h&&(o!==1||c!==e[0]))if(r)l=!0;else{const d=o*i,u=d-i,p=d+i;for(let g=0;g!==i;++g){const v=t[d+g];if(v!==t[u+g]||v!==t[p+g]){l=!0;break}}}if(l){if(o!==s){e[s]=e[o];const d=o*i,u=s*i;for(let p=0;p!==i;++p)t[u+p]=t[d+p]}++s}}if(n>0){e[s]=e[n];for(let o=n*i,l=s*i,c=0;c!==i;++c)t[l+c]=t[o+c];++s}return s!==e.length?(this.times=He.arraySlice(e,0,s),this.values=He.arraySlice(t,0,s*i)):(this.times=e,this.values=t),this}clone(){const e=He.arraySlice(this.times,0),t=He.arraySlice(this.values,0),i=this.constructor,r=new i(this.name,e,t);return r.createInterpolant=this.createInterpolant,r}}Nt.prototype.TimeBufferType=Float32Array,Nt.prototype.ValueBufferType=Float32Array,Nt.prototype.DefaultInterpolation=mn;class $i extends Nt{}$i.prototype.ValueTypeName="bool",$i.prototype.ValueBufferType=Array,$i.prototype.DefaultInterpolation=pn,$i.prototype.InterpolantFactoryMethodLinear=void 0,$i.prototype.InterpolantFactoryMethodSmooth=void 0;class Ko extends Nt{}Ko.prototype.ValueTypeName="color";class Gn extends Nt{}Gn.prototype.ValueTypeName="number";class Gu extends ti{constructor(e,t,i,r){super(e,t,i,r)}interpolate_(e,t,i,r){const n=this.resultBuffer,s=this.sampleValues,o=this.valueSize,l=(i-t)/(r-t);let c=e*o;for(let h=c+o;c!==h;c+=4)dt.slerpFlat(n,0,s,c-o,s,c,l);return n}}class Wr extends Nt{InterpolantFactoryMethodLinear(e){return new Gu(this.times,this.values,this.getValueSize(),e)}}Wr.prototype.ValueTypeName="quaternion",Wr.prototype.DefaultInterpolation=mn,Wr.prototype.InterpolantFactoryMethodSmooth=void 0;class er extends Nt{}er.prototype.ValueTypeName="string",er.prototype.ValueBufferType=Array,er.prototype.DefaultInterpolation=pn,er.prototype.InterpolantFactoryMethodLinear=void 0,er.prototype.InterpolantFactoryMethodSmooth=void 0;class Hn extends Nt{}Hn.prototype.ValueTypeName="vector";class kn{constructor(e,t=-1,i,r=ea){this.name=e,this.tracks=i,this.duration=t,this.blendMode=r,this.uuid=_t(),this.duration<0&&this.resetDuration()}static parse(e){const t=[],i=e.tracks,r=1/(e.fps||1);for(let s=0,o=i.length;s!==o;++s)t.push(k0(i[s]).scale(r));const n=new this(e.name,e.duration,t,e.blendMode);return n.uuid=e.uuid,n}static toJSON(e){const t=[],i=e.tracks,r={name:e.name,duration:e.duration,tracks:t,uuid:e.uuid,blendMode:e.blendMode};for(let n=0,s=i.length;n!==s;++n)t.push(Nt.toJSON(i[n]));return r}static CreateFromMorphTargetSequence(e,t,i,r){const n=t.length,s=[];for(let o=0;o<n;o++){let l=[],c=[];l.push((o+n-1)%n,o,(o+1)%n),c.push(0,1,0);const h=He.getKeyframeOrder(l);l=He.sortedArray(l,1,h),c=He.sortedArray(c,1,h),!r&&l[0]===0&&(l.push(n),c.push(c[0])),s.push(new Gn(".morphTargetInfluences["+t[o].name+"]",l,c).scale(1/i))}return new this(e,-1,s)}static findByName(e,t){let i=e;if(!Array.isArray(e)){const r=e;i=r.geometry&&r.geometry.animations||r.animations}for(let r=0;r<i.length;r++)if(i[r].name===t)return i[r];return null}static CreateClipsFromMorphTargetSequences(e,t,i){const r={},n=/^([\w-]*?)([\d]+)$/;for(let o=0,l=e.length;o<l;o++){const c=e[o],h=c.name.match(n);if(h&&h.length>1){const d=h[1];let u=r[d];u||(r[d]=u=[]),u.push(c)}}const s=[];for(const o in r)s.push(this.CreateFromMorphTargetSequence(o,r[o],t,i));return s}static parseAnimation(e,t){if(!e)return console.error("THREE.AnimationClip: No animation in JSONLoader data."),null;const i=function(h,d,u,p,g){if(u.length!==0){const v=[],x=[];He.flattenJSON(u,v,x,p),v.length!==0&&g.push(new h(d,v,x))}},r=[],n=e.name||"default",s=e.fps||30,o=e.blendMode;let l=e.length||-1;const c=e.hierarchy||[];for(let h=0;h<c.length;h++){const d=c[h].keys;if(!(!d||d.length===0))if(d[0].morphTargets){const u={};let p;for(p=0;p<d.length;p++)if(d[p].morphTargets)for(let g=0;g<d[p].morphTargets.length;g++)u[d[p].morphTargets[g]]=-1;for(const g in u){const v=[],x=[];for(let f=0;f!==d[p].morphTargets.length;++f){const m=d[p];v.push(m.time),x.push(m.morphTarget===g?1:0)}r.push(new Gn(".morphTargetInfluence["+g+"]",v,x))}l=u.length*s}else{const u=".bones["+t[h].name+"]";i(Hn,u+".position",d,"pos",r),i(Wr,u+".quaternion",d,"rot",r),i(Hn,u+".scale",d,"scl",r)}}return r.length===0?null:new this(n,l,r,o)}resetDuration(){const e=this.tracks;let t=0;for(let i=0,r=e.length;i!==r;++i){const n=this.tracks[i];t=Math.max(t,n.times[n.times.length-1])}return this.duration=t,this}trim(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].trim(0,this.duration);return this}validate(){let e=!0;for(let t=0;t<this.tracks.length;t++)e=e&&this.tracks[t].validate();return e}optimize(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].optimize();return this}clone(){const e=[];for(let t=0;t<this.tracks.length;t++)e.push(this.tracks[t].clone());return new this.constructor(this.name,this.duration,e,this.blendMode)}toJSON(){return this.constructor.toJSON(this)}}function H0(a){switch(a.toLowerCase()){case"scalar":case"double":case"float":case"number":case"integer":return Gn;case"vector":case"vector2":case"vector3":case"vector4":return Hn;case"color":return Ko;case"quaternion":return Wr;case"bool":case"boolean":return $i;case"string":return er}throw new Error("THREE.KeyframeTrack: Unsupported typeName: "+a)}function k0(a){if(a.type===void 0)throw new Error("THREE.KeyframeTrack: track type undefined, can not parse");const e=H0(a.type);if(a.times===void 0){const t=[],i=[];He.flattenJSON(a.keys,t,i,"value"),a.times=t,a.values=i}return e.parse!==void 0?e.parse(a):new e(a.name,a.times,a.values,a.interpolation)}const tr={enabled:!1,files:{},add:function(a,e){this.enabled!==!1&&(this.files[a]=e)},get:function(a){if(this.enabled!==!1)return this.files[a]},remove:function(a){delete this.files[a]},clear:function(){this.files={}}};class Qo{constructor(e,t,i){const r=this;let n=!1,s=0,o=0,l;const c=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=i,this.itemStart=function(h){o++,n===!1&&r.onStart!==void 0&&r.onStart(h,s,o),n=!0},this.itemEnd=function(h){s++,r.onProgress!==void 0&&r.onProgress(h,s,o),s===o&&(n=!1,r.onLoad!==void 0&&r.onLoad())},this.itemError=function(h){r.onError!==void 0&&r.onError(h)},this.resolveURL=function(h){return l?l(h):h},this.setURLModifier=function(h){return l=h,this},this.addHandler=function(h,d){return c.push(h,d),this},this.removeHandler=function(h){const d=c.indexOf(h);return d!==-1&&c.splice(d,2),this},this.getHandler=function(h){for(let d=0,u=c.length;d<u;d+=2){const p=c[d],g=c[d+1];if(p.global&&(p.lastIndex=0),p.test(h))return g}return null}}}const Hu=new Qo;class yt{constructor(e){this.manager=e!==void 0?e:Hu,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,t){const i=this;return new Promise(function(r,n){i.load(e,r,t,n)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}}const ii={};class Gt extends yt{constructor(e){super(e)}load(e,t,i,r){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const n=tr.get(e);if(n!==void 0)return this.manager.itemStart(e),setTimeout(()=>{t&&t(n),this.manager.itemEnd(e)},0),n;if(ii[e]!==void 0){ii[e].push({onLoad:t,onProgress:i,onError:r});return}ii[e]=[],ii[e].push({onLoad:t,onProgress:i,onError:r});const s=new Request(e,{headers:new Headers(this.requestHeader),credentials:this.withCredentials?"include":"same-origin"});fetch(s).then(o=>{if(o.status===200||o.status===0){o.status===0&&console.warn("THREE.FileLoader: HTTP Status 0 received.");const l=ii[e],c=o.body.getReader(),h=o.headers.get("Content-Length"),d=h?parseInt(h):0,u=d!==0;let p=0;return new ReadableStream({start(g){v();function v(){c.read().then(({done:x,value:f})=>{if(x)g.close();else{p+=f.byteLength;const m=new ProgressEvent("progress",{lengthComputable:u,loaded:p,total:d});for(let w=0,y=l.length;w<y;w++){const M=l[w];M.onProgress&&M.onProgress(m)}g.enqueue(f),v()}})}}})}else throw Error(`fetch for "${o.url}" responded with ${o.status}: ${o.statusText}`)}).then(o=>{const l=new Response(o);switch(this.responseType){case"arraybuffer":return l.arrayBuffer();case"blob":return l.blob();case"document":return l.text().then(c=>new DOMParser().parseFromString(c,this.mimeType));case"json":return l.json();default:return l.text()}}).then(o=>{tr.add(e,o);const l=ii[e];delete ii[e];for(let c=0,h=l.length;c<h;c++){const d=l[c];d.onLoad&&d.onLoad(o)}this.manager.itemEnd(e)}).catch(o=>{const l=ii[e];delete ii[e];for(let c=0,h=l.length;c<h;c++){const d=l[c];d.onError&&d.onError(o)}this.manager.itemError(e),this.manager.itemEnd(e)}),this.manager.itemStart(e)}setResponseType(e){return this.responseType=e,this}setMimeType(e){return this.mimeType=e,this}}class V0 extends yt{constructor(e){super(e)}load(e,t,i,r){const n=this,s=new Gt(this.manager);s.setPath(this.path),s.setRequestHeader(this.requestHeader),s.setWithCredentials(this.withCredentials),s.load(e,function(o){try{t(n.parse(JSON.parse(o)))}catch(l){r?r(l):console.error(l),n.manager.itemError(e)}},i,r)}parse(e){const t=[];for(let i=0;i<e.length;i++){const r=kn.parse(e[i]);t.push(r)}return t}}class W0 extends yt{constructor(e){super(e)}load(e,t,i,r){const n=this,s=[],o=new Lo,l=new Gt(this.manager);l.setPath(this.path),l.setResponseType("arraybuffer"),l.setRequestHeader(this.requestHeader),l.setWithCredentials(n.withCredentials);let c=0;function h(d){l.load(e[d],function(u){const p=n.parse(u,!0);s[d]={width:p.width,height:p.height,format:p.format,mipmaps:p.mipmaps},c+=1,c===6&&(p.mipmapCount===1&&(o.minFilter=$e),o.image=s,o.format=p.format,o.needsUpdate=!0,t&&t(o))},i,r)}if(Array.isArray(e))for(let d=0,u=e.length;d<u;++d)h(d);else l.load(e,function(d){const u=n.parse(d,!0);if(u.isCubemap){const p=u.mipmaps.length/u.mipmapCount;for(let g=0;g<p;g++){s[g]={mipmaps:[]};for(let v=0;v<u.mipmapCount;v++)s[g].mipmaps.push(u.mipmaps[g*u.mipmapCount+v]),s[g].format=u.format,s[g].width=u.width,s[g].height=u.height}o.image=s}else o.image.width=u.width,o.image.height=u.height,o.mipmaps=u.mipmaps;u.mipmapCount===1&&(o.minFilter=$e),o.format=u.format,o.needsUpdate=!0,t&&t(o)},i,r);return o}}class Vn extends yt{constructor(e){super(e)}load(e,t,i,r){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const n=this,s=tr.get(e);if(s!==void 0)return n.manager.itemStart(e),setTimeout(function(){t&&t(s),n.manager.itemEnd(e)},0),s;const o=aa("img");function l(){h(),tr.add(e,this),t&&t(this),n.manager.itemEnd(e)}function c(d){h(),r&&r(d),n.manager.itemError(e),n.manager.itemEnd(e)}function h(){o.removeEventListener("load",l,!1),o.removeEventListener("error",c,!1)}return o.addEventListener("load",l,!1),o.addEventListener("error",c,!1),e.substr(0,5)!=="data:"&&this.crossOrigin!==void 0&&(o.crossOrigin=this.crossOrigin),n.manager.itemStart(e),o.src=e,o}}class ku extends yt{constructor(e){super(e)}load(e,t,i,r){const n=new Ir,s=new Vn(this.manager);s.setCrossOrigin(this.crossOrigin),s.setPath(this.path);let o=0;function l(c){s.load(e[c],function(h){n.images[c]=h,o++,o===6&&(n.needsUpdate=!0,t&&t(n))},void 0,r)}for(let c=0;c<e.length;++c)l(c);return n}}class Vu extends yt{constructor(e){super(e)}load(e,t,i,r){const n=this,s=new Ji,o=new Gt(this.manager);return o.setResponseType("arraybuffer"),o.setRequestHeader(this.requestHeader),o.setPath(this.path),o.setWithCredentials(n.withCredentials),o.load(e,function(l){const c=n.parse(l);c&&(c.image!==void 0?s.image=c.image:c.data!==void 0&&(s.image.width=c.width,s.image.height=c.height,s.image.data=c.data),s.wrapS=c.wrapS!==void 0?c.wrapS:ot,s.wrapT=c.wrapT!==void 0?c.wrapT:ot,s.magFilter=c.magFilter!==void 0?c.magFilter:$e,s.minFilter=c.minFilter!==void 0?c.minFilter:$e,s.anisotropy=c.anisotropy!==void 0?c.anisotropy:1,c.encoding!==void 0&&(s.encoding=c.encoding),c.flipY!==void 0&&(s.flipY=c.flipY),c.format!==void 0&&(s.format=c.format),c.type!==void 0&&(s.type=c.type),c.mipmaps!==void 0&&(s.mipmaps=c.mipmaps,s.minFilter=Bi),c.mipmapCount===1&&(s.minFilter=$e),c.generateMipmaps!==void 0&&(s.generateMipmaps=c.generateMipmaps),s.needsUpdate=!0,t&&t(s,c))},i,r),s}}class Wu extends yt{constructor(e){super(e)}load(e,t,i,r){const n=new tt,s=new Vn(this.manager);return s.setCrossOrigin(this.crossOrigin),s.setPath(this.path),s.load(e,function(o){n.image=o,n.needsUpdate=!0,t!==void 0&&t(n)},i,r),n}}class Bt extends Re{constructor(e,t=1){super(),this.type="Light",this.color=new ie(e),this.intensity=t}dispose(){}copy(e){return super.copy(e),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),t}}Bt.prototype.isLight=!0;class $o extends Bt{constructor(e,t,i){super(e,i),this.type="HemisphereLight",this.position.copy(Re.DefaultUp),this.updateMatrix(),this.groundColor=new ie(t)}copy(e){return Bt.prototype.copy.call(this,e),this.groundColor.copy(e.groundColor),this}}$o.prototype.isHemisphereLight=!0;const ju=new ue,qu=new b,Xu=new b;class el{constructor(e){this.camera=e,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new j(512,512),this.map=null,this.mapPass=null,this.matrix=new ue,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Mn,this._frameExtents=new j(1,1),this._viewportCount=1,this._viewports=[new ze(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera,i=this.matrix;qu.setFromMatrixPosition(e.matrixWorld),t.position.copy(qu),Xu.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(Xu),t.updateMatrixWorld(),ju.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(ju),i.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),i.multiply(t.projectionMatrix),i.multiply(t.matrixWorldInverse)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.bias=e.bias,this.radius=e.radius,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}class Yu extends el{constructor(){super(new at(50,1,.5,500)),this.focus=1}updateMatrices(e){const t=this.camera,i=gn*2*e.angle*this.focus,r=this.mapSize.width/this.mapSize.height,n=e.distance||t.far;(i!==t.fov||r!==t.aspect||n!==t.far)&&(t.fov=i,t.aspect=r,t.far=n,t.updateProjectionMatrix()),super.updateMatrices(e)}copy(e){return super.copy(e),this.focus=e.focus,this}}Yu.prototype.isSpotLightShadow=!0;class tl extends Bt{constructor(e,t,i=0,r=Math.PI/3,n=0,s=1){super(e,t),this.type="SpotLight",this.position.copy(Re.DefaultUp),this.updateMatrix(),this.target=new Re,this.distance=i,this.angle=r,this.penumbra=n,this.decay=s,this.shadow=new Yu}get power(){return this.intensity*Math.PI}set power(e){this.intensity=e/Math.PI}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.distance=e.distance,this.angle=e.angle,this.penumbra=e.penumbra,this.decay=e.decay,this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}tl.prototype.isSpotLight=!0;const Zu=new ue,Wn=new b,il=new b;class Ju extends el{constructor(){super(new at(90,1,.5,500)),this._frameExtents=new j(4,2),this._viewportCount=6,this._viewports=[new ze(2,1,1,1),new ze(0,1,1,1),new ze(3,1,1,1),new ze(1,1,1,1),new ze(3,0,1,1),new ze(1,0,1,1)],this._cubeDirections=[new b(1,0,0),new b(-1,0,0),new b(0,0,1),new b(0,0,-1),new b(0,1,0),new b(0,-1,0)],this._cubeUps=[new b(0,1,0),new b(0,1,0),new b(0,1,0),new b(0,1,0),new b(0,0,1),new b(0,0,-1)]}updateMatrices(e,t=0){const i=this.camera,r=this.matrix,n=e.distance||i.far;n!==i.far&&(i.far=n,i.updateProjectionMatrix()),Wn.setFromMatrixPosition(e.matrixWorld),i.position.copy(Wn),il.copy(i.position),il.add(this._cubeDirections[t]),i.up.copy(this._cubeUps[t]),i.lookAt(il),i.updateMatrixWorld(),r.makeTranslation(-Wn.x,-Wn.y,-Wn.z),Zu.multiplyMatrices(i.projectionMatrix,i.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Zu)}}Ju.prototype.isPointLightShadow=!0;class rl extends Bt{constructor(e,t,i=0,r=1){super(e,t),this.type="PointLight",this.distance=i,this.decay=r,this.shadow=new Ju}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}}rl.prototype.isPointLight=!0;class Ku extends el{constructor(){super(new Sn(-5,5,5,-5,.5,500))}}Ku.prototype.isDirectionalLightShadow=!0;class nl extends Bt{constructor(e,t){super(e,t),this.type="DirectionalLight",this.position.copy(Re.DefaultUp),this.updateMatrix(),this.target=new Re,this.shadow=new Ku}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}nl.prototype.isDirectionalLight=!0;class al extends Bt{constructor(e,t){super(e,t),this.type="AmbientLight"}}al.prototype.isAmbientLight=!0;class sl extends Bt{constructor(e,t,i=10,r=10){super(e,t),this.type="RectAreaLight",this.width=i,this.height=r}get power(){return this.intensity*this.width*this.height*Math.PI}set power(e){this.intensity=e/(this.width*this.height*Math.PI)}copy(e){return super.copy(e),this.width=e.width,this.height=e.height,this}toJSON(e){const t=super.toJSON(e);return t.object.width=this.width,t.object.height=this.height,t}}sl.prototype.isRectAreaLight=!0;class ol{constructor(){this.coefficients=[];for(let e=0;e<9;e++)this.coefficients.push(new b)}set(e){for(let t=0;t<9;t++)this.coefficients[t].copy(e[t]);return this}zero(){for(let e=0;e<9;e++)this.coefficients[e].set(0,0,0);return this}getAt(e,t){const i=e.x,r=e.y,n=e.z,s=this.coefficients;return t.copy(s[0]).multiplyScalar(.282095),t.addScaledVector(s[1],.488603*r),t.addScaledVector(s[2],.488603*n),t.addScaledVector(s[3],.488603*i),t.addScaledVector(s[4],1.092548*(i*r)),t.addScaledVector(s[5],1.092548*(r*n)),t.addScaledVector(s[6],.315392*(3*n*n-1)),t.addScaledVector(s[7],1.092548*(i*n)),t.addScaledVector(s[8],.546274*(i*i-r*r)),t}getIrradianceAt(e,t){const i=e.x,r=e.y,n=e.z,s=this.coefficients;return t.copy(s[0]).multiplyScalar(.886227),t.addScaledVector(s[1],2*.511664*r),t.addScaledVector(s[2],2*.511664*n),t.addScaledVector(s[3],2*.511664*i),t.addScaledVector(s[4],2*.429043*i*r),t.addScaledVector(s[5],2*.429043*r*n),t.addScaledVector(s[6],.743125*n*n-.247708),t.addScaledVector(s[7],2*.429043*i*n),t.addScaledVector(s[8],.429043*(i*i-r*r)),t}add(e){for(let t=0;t<9;t++)this.coefficients[t].add(e.coefficients[t]);return this}addScaledSH(e,t){for(let i=0;i<9;i++)this.coefficients[i].addScaledVector(e.coefficients[i],t);return this}scale(e){for(let t=0;t<9;t++)this.coefficients[t].multiplyScalar(e);return this}lerp(e,t){for(let i=0;i<9;i++)this.coefficients[i].lerp(e.coefficients[i],t);return this}equals(e){for(let t=0;t<9;t++)if(!this.coefficients[t].equals(e.coefficients[t]))return!1;return!0}copy(e){return this.set(e.coefficients)}clone(){return new this.constructor().copy(this)}fromArray(e,t=0){const i=this.coefficients;for(let r=0;r<9;r++)i[r].fromArray(e,t+r*3);return this}toArray(e=[],t=0){const i=this.coefficients;for(let r=0;r<9;r++)i[r].toArray(e,t+r*3);return e}static getBasisAt(e,t){const i=e.x,r=e.y,n=e.z;t[0]=.282095,t[1]=.488603*r,t[2]=.488603*n,t[3]=.488603*i,t[4]=1.092548*i*r,t[5]=1.092548*r*n,t[6]=.315392*(3*n*n-1),t[7]=1.092548*i*n,t[8]=.546274*(i*i-r*r)}}ol.prototype.isSphericalHarmonics3=!0;class jn extends Bt{constructor(e=new ol,t=1){super(void 0,t),this.sh=e}copy(e){return super.copy(e),this.sh.copy(e.sh),this}fromJSON(e){return this.intensity=e.intensity,this.sh.fromArray(e.sh),this}toJSON(e){const t=super.toJSON(e);return t.object.sh=this.sh.toArray(),t}}jn.prototype.isLightProbe=!0;class Qu extends yt{constructor(e){super(e),this.textures={}}load(e,t,i,r){const n=this,s=new Gt(n.manager);s.setPath(n.path),s.setRequestHeader(n.requestHeader),s.setWithCredentials(n.withCredentials),s.load(e,function(o){try{t(n.parse(JSON.parse(o)))}catch(l){r?r(l):console.error(l),n.manager.itemError(e)}},i,r)}parse(e){const t=this.textures;function i(n){return t[n]===void 0&&console.warn("THREE.MaterialLoader: Undefined texture",n),t[n]}const r=new G0[e.type];if(e.uuid!==void 0&&(r.uuid=e.uuid),e.name!==void 0&&(r.name=e.name),e.color!==void 0&&r.color!==void 0&&r.color.setHex(e.color),e.roughness!==void 0&&(r.roughness=e.roughness),e.metalness!==void 0&&(r.metalness=e.metalness),e.sheen!==void 0&&(r.sheen=e.sheen),e.sheenColor!==void 0&&(r.sheenColor=new ie().setHex(e.sheenColor)),e.sheenRoughness!==void 0&&(r.sheenRoughness=e.sheenRoughness),e.emissive!==void 0&&r.emissive!==void 0&&r.emissive.setHex(e.emissive),e.specular!==void 0&&r.specular!==void 0&&r.specular.setHex(e.specular),e.specularIntensity!==void 0&&(r.specularIntensity=e.specularIntensity),e.specularColor!==void 0&&r.specularColor!==void 0&&r.specularColor.setHex(e.specularColor),e.shininess!==void 0&&(r.shininess=e.shininess),e.clearcoat!==void 0&&(r.clearcoat=e.clearcoat),e.clearcoatRoughness!==void 0&&(r.clearcoatRoughness=e.clearcoatRoughness),e.transmission!==void 0&&(r.transmission=e.transmission),e.thickness!==void 0&&(r.thickness=e.thickness),e.attenuationDistance!==void 0&&(r.attenuationDistance=e.attenuationDistance),e.attenuationColor!==void 0&&r.attenuationColor!==void 0&&r.attenuationColor.setHex(e.attenuationColor),e.fog!==void 0&&(r.fog=e.fog),e.flatShading!==void 0&&(r.flatShading=e.flatShading),e.blending!==void 0&&(r.blending=e.blending),e.combine!==void 0&&(r.combine=e.combine),e.side!==void 0&&(r.side=e.side),e.shadowSide!==void 0&&(r.shadowSide=e.shadowSide),e.opacity!==void 0&&(r.opacity=e.opacity),e.format!==void 0&&(r.format=e.format),e.transparent!==void 0&&(r.transparent=e.transparent),e.alphaTest!==void 0&&(r.alphaTest=e.alphaTest),e.depthTest!==void 0&&(r.depthTest=e.depthTest),e.depthWrite!==void 0&&(r.depthWrite=e.depthWrite),e.colorWrite!==void 0&&(r.colorWrite=e.colorWrite),e.stencilWrite!==void 0&&(r.stencilWrite=e.stencilWrite),e.stencilWriteMask!==void 0&&(r.stencilWriteMask=e.stencilWriteMask),e.stencilFunc!==void 0&&(r.stencilFunc=e.stencilFunc),e.stencilRef!==void 0&&(r.stencilRef=e.stencilRef),e.stencilFuncMask!==void 0&&(r.stencilFuncMask=e.stencilFuncMask),e.stencilFail!==void 0&&(r.stencilFail=e.stencilFail),e.stencilZFail!==void 0&&(r.stencilZFail=e.stencilZFail),e.stencilZPass!==void 0&&(r.stencilZPass=e.stencilZPass),e.wireframe!==void 0&&(r.wireframe=e.wireframe),e.wireframeLinewidth!==void 0&&(r.wireframeLinewidth=e.wireframeLinewidth),e.wireframeLinecap!==void 0&&(r.wireframeLinecap=e.wireframeLinecap),e.wireframeLinejoin!==void 0&&(r.wireframeLinejoin=e.wireframeLinejoin),e.rotation!==void 0&&(r.rotation=e.rotation),e.linewidth!==1&&(r.linewidth=e.linewidth),e.dashSize!==void 0&&(r.dashSize=e.dashSize),e.gapSize!==void 0&&(r.gapSize=e.gapSize),e.scale!==void 0&&(r.scale=e.scale),e.polygonOffset!==void 0&&(r.polygonOffset=e.polygonOffset),e.polygonOffsetFactor!==void 0&&(r.polygonOffsetFactor=e.polygonOffsetFactor),e.polygonOffsetUnits!==void 0&&(r.polygonOffsetUnits=e.polygonOffsetUnits),e.dithering!==void 0&&(r.dithering=e.dithering),e.alphaToCoverage!==void 0&&(r.alphaToCoverage=e.alphaToCoverage),e.premultipliedAlpha!==void 0&&(r.premultipliedAlpha=e.premultipliedAlpha),e.visible!==void 0&&(r.visible=e.visible),e.toneMapped!==void 0&&(r.toneMapped=e.toneMapped),e.userData!==void 0&&(r.userData=e.userData),e.vertexColors!==void 0&&(typeof e.vertexColors=="number"?r.vertexColors=e.vertexColors>0:r.vertexColors=e.vertexColors),e.uniforms!==void 0)for(const n in e.uniforms){const s=e.uniforms[n];switch(r.uniforms[n]={},s.type){case"t":r.uniforms[n].value=i(s.value);break;case"c":r.uniforms[n].value=new ie().setHex(s.value);break;case"v2":r.uniforms[n].value=new j().fromArray(s.value);break;case"v3":r.uniforms[n].value=new b().fromArray(s.value);break;case"v4":r.uniforms[n].value=new ze().fromArray(s.value);break;case"m3":r.uniforms[n].value=new et().fromArray(s.value);break;case"m4":r.uniforms[n].value=new ue().fromArray(s.value);break;default:r.uniforms[n].value=s.value}}if(e.defines!==void 0&&(r.defines=e.defines),e.vertexShader!==void 0&&(r.vertexShader=e.vertexShader),e.fragmentShader!==void 0&&(r.fragmentShader=e.fragmentShader),e.extensions!==void 0)for(const n in e.extensions)r.extensions[n]=e.extensions[n];if(e.shading!==void 0&&(r.flatShading=e.shading===1),e.size!==void 0&&(r.size=e.size),e.sizeAttenuation!==void 0&&(r.sizeAttenuation=e.sizeAttenuation),e.map!==void 0&&(r.map=i(e.map)),e.matcap!==void 0&&(r.matcap=i(e.matcap)),e.alphaMap!==void 0&&(r.alphaMap=i(e.alphaMap)),e.bumpMap!==void 0&&(r.bumpMap=i(e.bumpMap)),e.bumpScale!==void 0&&(r.bumpScale=e.bumpScale),e.normalMap!==void 0&&(r.normalMap=i(e.normalMap)),e.normalMapType!==void 0&&(r.normalMapType=e.normalMapType),e.normalScale!==void 0){let n=e.normalScale;Array.isArray(n)===!1&&(n=[n,n]),r.normalScale=new j().fromArray(n)}return e.displacementMap!==void 0&&(r.displacementMap=i(e.displacementMap)),e.displacementScale!==void 0&&(r.displacementScale=e.displacementScale),e.displacementBias!==void 0&&(r.displacementBias=e.displacementBias),e.roughnessMap!==void 0&&(r.roughnessMap=i(e.roughnessMap)),e.metalnessMap!==void 0&&(r.metalnessMap=i(e.metalnessMap)),e.emissiveMap!==void 0&&(r.emissiveMap=i(e.emissiveMap)),e.emissiveIntensity!==void 0&&(r.emissiveIntensity=e.emissiveIntensity),e.specularMap!==void 0&&(r.specularMap=i(e.specularMap)),e.specularIntensityMap!==void 0&&(r.specularIntensityMap=i(e.specularIntensityMap)),e.specularColorMap!==void 0&&(r.specularColorMap=i(e.specularColorMap)),e.envMap!==void 0&&(r.envMap=i(e.envMap)),e.envMapIntensity!==void 0&&(r.envMapIntensity=e.envMapIntensity),e.reflectivity!==void 0&&(r.reflectivity=e.reflectivity),e.refractionRatio!==void 0&&(r.refractionRatio=e.refractionRatio),e.lightMap!==void 0&&(r.lightMap=i(e.lightMap)),e.lightMapIntensity!==void 0&&(r.lightMapIntensity=e.lightMapIntensity),e.aoMap!==void 0&&(r.aoMap=i(e.aoMap)),e.aoMapIntensity!==void 0&&(r.aoMapIntensity=e.aoMapIntensity),e.gradientMap!==void 0&&(r.gradientMap=i(e.gradientMap)),e.clearcoatMap!==void 0&&(r.clearcoatMap=i(e.clearcoatMap)),e.clearcoatRoughnessMap!==void 0&&(r.clearcoatRoughnessMap=i(e.clearcoatRoughnessMap)),e.clearcoatNormalMap!==void 0&&(r.clearcoatNormalMap=i(e.clearcoatNormalMap)),e.clearcoatNormalScale!==void 0&&(r.clearcoatNormalScale=new j().fromArray(e.clearcoatNormalScale)),e.transmissionMap!==void 0&&(r.transmissionMap=i(e.transmissionMap)),e.thicknessMap!==void 0&&(r.thicknessMap=i(e.thicknessMap)),e.sheenColorMap!==void 0&&(r.sheenColorMap=i(e.sheenColorMap)),e.sheenRoughnessMap!==void 0&&(r.sheenRoughnessMap=i(e.sheenRoughnessMap)),r}setTextures(e){return this.textures=e,this}}class rs{static decodeText(e){if(typeof TextDecoder<"u")return new TextDecoder().decode(e);let t="";for(let i=0,r=e.length;i<r;i++)t+=String.fromCharCode(e[i]);try{return decodeURIComponent(escape(t))}catch{return t}}static extractUrlBase(e){const t=e.lastIndexOf("/");return t===-1?"./":e.substr(0,t+1)}static resolveURL(e,t){return typeof e!="string"||e===""?"":(/^https?:\/\//i.test(t)&&/^\//.test(e)&&(t=t.replace(/(^https?:\/\/[^\/]+).*/i,"$1")),/^(https?:)?\/\//i.test(e)||/^data:.*,.*$/i.test(e)||/^blob:.*$/i.test(e)?e:t+e)}}class ll extends we{constructor(){super(),this.type="InstancedBufferGeometry",this.instanceCount=1/0}copy(e){return super.copy(e),this.instanceCount=e.instanceCount,this}clone(){return new this.constructor().copy(this)}toJSON(){const e=super.toJSON(this);return e.instanceCount=this.instanceCount,e.isInstancedBufferGeometry=!0,e}}ll.prototype.isInstancedBufferGeometry=!0;class $u extends yt{constructor(e){super(e)}load(e,t,i,r){const n=this,s=new Gt(n.manager);s.setPath(n.path),s.setRequestHeader(n.requestHeader),s.setWithCredentials(n.withCredentials),s.load(e,function(o){try{t(n.parse(JSON.parse(o)))}catch(l){r?r(l):console.error(l),n.manager.itemError(e)}},i,r)}parse(e){const t={},i={};function r(u,p){if(t[p]!==void 0)return t[p];const g=u.interleavedBuffers[p],v=n(u,g.buffer),x=yr(g.type,v),f=new Zi(x,g.stride);return f.uuid=g.uuid,t[p]=f,f}function n(u,p){if(i[p]!==void 0)return i[p];const g=u.arrayBuffers[p],v=new Uint32Array(g).buffer;return i[p]=v,v}const s=e.isInstancedBufferGeometry?new ll:new we,o=e.data.index;if(o!==void 0){const u=yr(o.type,o.array);s.setIndex(new De(u,1))}const l=e.data.attributes;for(const u in l){const p=l[u];let g;if(p.isInterleavedBufferAttribute){const v=r(e.data,p.data);g=new Mi(v,p.itemSize,p.offset,p.normalized)}else{const v=yr(p.type,p.array),x=p.isInstancedBufferAttribute?Ki:De;g=new x(v,p.itemSize,p.normalized)}p.name!==void 0&&(g.name=p.name),p.usage!==void 0&&g.setUsage(p.usage),p.updateRange!==void 0&&(g.updateRange.offset=p.updateRange.offset,g.updateRange.count=p.updateRange.count),s.setAttribute(u,g)}const c=e.data.morphAttributes;if(c)for(const u in c){const p=c[u],g=[];for(let v=0,x=p.length;v<x;v++){const f=p[v];let m;if(f.isInterleavedBufferAttribute){const w=r(e.data,f.data);m=new Mi(w,f.itemSize,f.offset,f.normalized)}else{const w=yr(f.type,f.array);m=new De(w,f.itemSize,f.normalized)}f.name!==void 0&&(m.name=f.name),g.push(m)}s.morphAttributes[u]=g}e.data.morphTargetsRelative&&(s.morphTargetsRelative=!0);const h=e.data.groups||e.data.drawcalls||e.data.offsets;if(h!==void 0)for(let u=0,p=h.length;u!==p;++u){const g=h[u];s.addGroup(g.start,g.count,g.materialIndex)}const d=e.data.boundingSphere;if(d!==void 0){const u=new b;d.center!==void 0&&u.fromArray(d.center),s.boundingSphere=new ui(u,d.radius)}return e.name&&(s.name=e.name),e.userData&&(s.userData=e.userData),s}}class j0 extends yt{constructor(e){super(e)}load(e,t,i,r){const n=this,s=this.path===""?rs.extractUrlBase(e):this.path;this.resourcePath=this.resourcePath||s;const o=new Gt(this.manager);o.setPath(this.path),o.setRequestHeader(this.requestHeader),o.setWithCredentials(this.withCredentials),o.load(e,function(l){let c=null;try{c=JSON.parse(l)}catch(d){r!==void 0&&r(d),console.error("THREE:ObjectLoader: Can't parse "+e+".",d.message);return}const h=c.metadata;if(h===void 0||h.type===void 0||h.type.toLowerCase()==="geometry"){console.error("THREE.ObjectLoader: Can't load "+e);return}n.parse(c,t)},i,r)}async loadAsync(e,t){const i=this,r=this.path===""?rs.extractUrlBase(e):this.path;this.resourcePath=this.resourcePath||r;const n=new Gt(this.manager);n.setPath(this.path),n.setRequestHeader(this.requestHeader),n.setWithCredentials(this.withCredentials);const s=await n.loadAsync(e,t),o=JSON.parse(s),l=o.metadata;if(l===void 0||l.type===void 0||l.type.toLowerCase()==="geometry")throw new Error("THREE.ObjectLoader: Can't load "+e);return await i.parseAsync(o)}parse(e,t){const i=this.parseAnimations(e.animations),r=this.parseShapes(e.shapes),n=this.parseGeometries(e.geometries,r),s=this.parseImages(e.images,function(){t!==void 0&&t(c)}),o=this.parseTextures(e.textures,s),l=this.parseMaterials(e.materials,o),c=this.parseObject(e.object,n,l,o,i),h=this.parseSkeletons(e.skeletons,c);if(this.bindSkeletons(c,h),t!==void 0){let d=!1;for(const u in s)if(s[u]instanceof HTMLImageElement){d=!0;break}d===!1&&t(c)}return c}async parseAsync(e){const t=this.parseAnimations(e.animations),i=this.parseShapes(e.shapes),r=this.parseGeometries(e.geometries,i),n=await this.parseImagesAsync(e.images),s=this.parseTextures(e.textures,n),o=this.parseMaterials(e.materials,s),l=this.parseObject(e.object,r,o,s,t),c=this.parseSkeletons(e.skeletons,l);return this.bindSkeletons(l,c),l}parseShapes(e){const t={};if(e!==void 0)for(let i=0,r=e.length;i<r;i++){const n=new Ut().fromJSON(e[i]);t[n.uuid]=n}return t}parseSkeletons(e,t){const i={},r={};if(t.traverse(function(n){n.isBone&&(r[n.uuid]=n)}),e!==void 0)for(let n=0,s=e.length;n<s;n++){const o=new us().fromJSON(e[n],r);i[o.uuid]=o}return i}parseGeometries(e,t){const i={};if(e!==void 0){const r=new $u;for(let n=0,s=e.length;n<s;n++){let o;const l=e[n];switch(l.type){case"BufferGeometry":case"InstancedBufferGeometry":o=r.parse(l);break;case"Geometry":console.error("THREE.ObjectLoader: The legacy Geometry type is no longer supported.");break;default:l.type in Ou?o=Ou[l.type].fromJSON(l,t):console.warn(`THREE.ObjectLoader: Unsupported geometry type "${l.type}"`)}o.uuid=l.uuid,l.name!==void 0&&(o.name=l.name),o.isBufferGeometry===!0&&l.userData!==void 0&&(o.userData=l.userData),i[l.uuid]=o}}return i}parseMaterials(e,t){const i={},r={};if(e!==void 0){const n=new Qu;n.setTextures(t);for(let s=0,o=e.length;s<o;s++){const l=e[s];if(l.type==="MultiMaterial"){const c=[];for(let h=0;h<l.materials.length;h++){const d=l.materials[h];i[d.uuid]===void 0&&(i[d.uuid]=n.parse(d)),c.push(i[d.uuid])}r[l.uuid]=c}else i[l.uuid]===void 0&&(i[l.uuid]=n.parse(l)),r[l.uuid]=i[l.uuid]}}return r}parseAnimations(e){const t={};if(e!==void 0)for(let i=0;i<e.length;i++){const r=e[i],n=kn.parse(r);t[n.uuid]=n}return t}parseImages(e,t){const i=this,r={};let n;function s(l){return i.manager.itemStart(l),n.load(l,function(){i.manager.itemEnd(l)},void 0,function(){i.manager.itemError(l),i.manager.itemEnd(l)})}function o(l){if(typeof l=="string"){const c=l,h=/^(\/\/)|([a-z]+:(\/\/)?)/i.test(c)?c:i.resourcePath+c;return s(h)}else return l.data?{data:yr(l.type,l.data),width:l.width,height:l.height}:null}if(e!==void 0&&e.length>0){const l=new Qo(t);n=new Vn(l),n.setCrossOrigin(this.crossOrigin);for(let c=0,h=e.length;c<h;c++){const d=e[c],u=d.url;if(Array.isArray(u)){r[d.uuid]=[];for(let p=0,g=u.length;p<g;p++){const v=u[p],x=o(v);x!==null&&(x instanceof HTMLImageElement?r[d.uuid].push(x):r[d.uuid].push(new Ji(x.data,x.width,x.height)))}}else{const p=o(d.url);p!==null&&(r[d.uuid]=p)}}}return r}async parseImagesAsync(e){const t=this,i={};let r;async function n(s){if(typeof s=="string"){const o=s,l=/^(\/\/)|([a-z]+:(\/\/)?)/i.test(o)?o:t.resourcePath+o;return await r.loadAsync(l)}else return s.data?{data:yr(s.type,s.data),width:s.width,height:s.height}:null}if(e!==void 0&&e.length>0){r=new Vn(this.manager),r.setCrossOrigin(this.crossOrigin);for(let s=0,o=e.length;s<o;s++){const l=e[s],c=l.url;if(Array.isArray(c)){i[l.uuid]=[];for(let h=0,d=c.length;h<d;h++){const u=c[h],p=await n(u);p!==null&&(p instanceof HTMLImageElement?i[l.uuid].push(p):i[l.uuid].push(new Ji(p.data,p.width,p.height)))}}else{const h=await n(l.url);h!==null&&(i[l.uuid]=h)}}}return i}parseTextures(e,t){function i(n,s){return typeof n=="number"?n:(console.warn("THREE.ObjectLoader.parseTexture: Constant should be in numeric form.",n),s[n])}const r={};if(e!==void 0)for(let n=0,s=e.length;n<s;n++){const o=e[n];o.image===void 0&&console.warn('THREE.ObjectLoader: No "image" specified for',o.uuid),t[o.image]===void 0&&console.warn("THREE.ObjectLoader: Undefined image",o.image);let l;const c=t[o.image];Array.isArray(c)?(l=new Ir(c),c.length===6&&(l.needsUpdate=!0)):(c&&c.data?l=new Ji(c.data,c.width,c.height):l=new tt(c),c&&(l.needsUpdate=!0)),l.uuid=o.uuid,o.name!==void 0&&(l.name=o.name),o.mapping!==void 0&&(l.mapping=i(o.mapping,q0)),o.offset!==void 0&&l.offset.fromArray(o.offset),o.repeat!==void 0&&l.repeat.fromArray(o.repeat),o.center!==void 0&&l.center.fromArray(o.center),o.rotation!==void 0&&(l.rotation=o.rotation),o.wrap!==void 0&&(l.wrapS=i(o.wrap[0],ed),l.wrapT=i(o.wrap[1],ed)),o.format!==void 0&&(l.format=o.format),o.type!==void 0&&(l.type=o.type),o.encoding!==void 0&&(l.encoding=o.encoding),o.minFilter!==void 0&&(l.minFilter=i(o.minFilter,td)),o.magFilter!==void 0&&(l.magFilter=i(o.magFilter,td)),o.anisotropy!==void 0&&(l.anisotropy=o.anisotropy),o.flipY!==void 0&&(l.flipY=o.flipY),o.premultiplyAlpha!==void 0&&(l.premultiplyAlpha=o.premultiplyAlpha),o.unpackAlignment!==void 0&&(l.unpackAlignment=o.unpackAlignment),o.userData!==void 0&&(l.userData=o.userData),r[o.uuid]=l}return r}parseObject(e,t,i,r,n){let s;function o(u){return t[u]===void 0&&console.warn("THREE.ObjectLoader: Undefined geometry",u),t[u]}function l(u){if(u!==void 0){if(Array.isArray(u)){const p=[];for(let g=0,v=u.length;g<v;g++){const x=u[g];i[x]===void 0&&console.warn("THREE.ObjectLoader: Undefined material",x),p.push(i[x])}return p}return i[u]===void 0&&console.warn("THREE.ObjectLoader: Undefined material",u),i[u]}}function c(u){return r[u]===void 0&&console.warn("THREE.ObjectLoader: Undefined texture",u),r[u]}let h,d;switch(e.type){case"Scene":s=new Ia,e.background!==void 0&&(Number.isInteger(e.background)?s.background=new ie(e.background):s.background=c(e.background)),e.environment!==void 0&&(s.environment=c(e.environment)),e.fog!==void 0&&(e.fog.type==="Fog"?s.fog=new Xn(e.fog.color,e.fog.near,e.fog.far):e.fog.type==="FogExp2"&&(s.fog=new qn(e.fog.color,e.fog.density)));break;case"PerspectiveCamera":s=new at(e.fov,e.aspect,e.near,e.far),e.focus!==void 0&&(s.focus=e.focus),e.zoom!==void 0&&(s.zoom=e.zoom),e.filmGauge!==void 0&&(s.filmGauge=e.filmGauge),e.filmOffset!==void 0&&(s.filmOffset=e.filmOffset),e.view!==void 0&&(s.view=Object.assign({},e.view));break;case"OrthographicCamera":s=new Sn(e.left,e.right,e.top,e.bottom,e.near,e.far),e.zoom!==void 0&&(s.zoom=e.zoom),e.view!==void 0&&(s.view=Object.assign({},e.view));break;case"AmbientLight":s=new al(e.color,e.intensity);break;case"DirectionalLight":s=new nl(e.color,e.intensity);break;case"PointLight":s=new rl(e.color,e.intensity,e.distance,e.decay);break;case"RectAreaLight":s=new sl(e.color,e.intensity,e.width,e.height);break;case"SpotLight":s=new tl(e.color,e.intensity,e.distance,e.angle,e.penumbra,e.decay);break;case"HemisphereLight":s=new $o(e.color,e.groundColor,e.intensity);break;case"LightProbe":s=new jn().fromJSON(e);break;case"SkinnedMesh":h=o(e.geometry),d=l(e.material),s=new Ua(h,d),e.bindMode!==void 0&&(s.bindMode=e.bindMode),e.bindMatrix!==void 0&&s.bindMatrix.fromArray(e.bindMatrix),e.skeleton!==void 0&&(s.skeleton=e.skeleton);break;case"Mesh":h=o(e.geometry),d=l(e.material),s=new Qe(h,d);break;case"InstancedMesh":h=o(e.geometry),d=l(e.material);const u=e.count,p=e.instanceMatrix,g=e.instanceColor;s=new So(h,d,u),s.instanceMatrix=new Ki(new Float32Array(p.array),16),g!==void 0&&(s.instanceColor=new Ki(new Float32Array(g.array),g.itemSize));break;case"LOD":s=new cu;break;case"Line":s=new ei(o(e.geometry),l(e.material));break;case"LineLoop":s=new Eo(o(e.geometry),l(e.material));break;case"LineSegments":s=new xt(o(e.geometry),l(e.material));break;case"PointCloud":case"Points":s=new Pn(o(e.geometry),l(e.material));break;case"Sprite":s=new Fa(l(e.material));break;case"Group":s=new Yi;break;case"Bone":s=new Ga;break;default:s=new Re}if(s.uuid=e.uuid,e.name!==void 0&&(s.name=e.name),e.matrix!==void 0?(s.matrix.fromArray(e.matrix),e.matrixAutoUpdate!==void 0&&(s.matrixAutoUpdate=e.matrixAutoUpdate),s.matrixAutoUpdate&&s.matrix.decompose(s.position,s.quaternion,s.scale)):(e.position!==void 0&&s.position.fromArray(e.position),e.rotation!==void 0&&s.rotation.fromArray(e.rotation),e.quaternion!==void 0&&s.quaternion.fromArray(e.quaternion),e.scale!==void 0&&s.scale.fromArray(e.scale)),e.castShadow!==void 0&&(s.castShadow=e.castShadow),e.receiveShadow!==void 0&&(s.receiveShadow=e.receiveShadow),e.shadow&&(e.shadow.bias!==void 0&&(s.shadow.bias=e.shadow.bias),e.shadow.normalBias!==void 0&&(s.shadow.normalBias=e.shadow.normalBias),e.shadow.radius!==void 0&&(s.shadow.radius=e.shadow.radius),e.shadow.mapSize!==void 0&&s.shadow.mapSize.fromArray(e.shadow.mapSize),e.shadow.camera!==void 0&&(s.shadow.camera=this.parseObject(e.shadow.camera))),e.visible!==void 0&&(s.visible=e.visible),e.frustumCulled!==void 0&&(s.frustumCulled=e.frustumCulled),e.renderOrder!==void 0&&(s.renderOrder=e.renderOrder),e.userData!==void 0&&(s.userData=e.userData),e.layers!==void 0&&(s.layers.mask=e.layers),e.children!==void 0){const u=e.children;for(let p=0;p<u.length;p++)s.add(this.parseObject(u[p],t,i,r,n))}if(e.animations!==void 0){const u=e.animations;for(let p=0;p<u.length;p++){const g=u[p];s.animations.push(n[g])}}if(e.type==="LOD"){e.autoUpdate!==void 0&&(s.autoUpdate=e.autoUpdate);const u=e.levels;for(let p=0;p<u.length;p++){const g=u[p],v=s.getObjectByProperty("uuid",g.object);v!==void 0&&s.addLevel(v,g.distance)}}return s}bindSkeletons(e,t){Object.keys(t).length!==0&&e.traverse(function(i){if(i.isSkinnedMesh===!0&&i.skeleton!==void 0){const r=t[i.skeleton];r===void 0?console.warn("THREE.ObjectLoader: No skeleton found with UUID:",i.skeleton):i.bind(r,i.bindMatrix)}})}setTexturePath(e){return console.warn("THREE.ObjectLoader: .setTexturePath() has been renamed to .setResourcePath()."),this.setResourcePath(e)}}const q0={UVMapping:Jn,CubeReflectionMapping:Di,CubeRefractionMapping:Ni,EquirectangularReflectionMapping:sn,EquirectangularRefractionMapping:on,CubeUVReflectionMapping:pr,CubeUVRefractionMapping:ln},ed={RepeatWrapping:cn,ClampToEdgeWrapping:ot,MirroredRepeatWrapping:hn},td={NearestFilter:Ke,NearestMipmapNearestFilter:Kn,NearestMipmapLinearFilter:Qn,LinearFilter:$e,LinearMipmapNearestFilter:Ss,LinearMipmapLinearFilter:Bi};class id extends yt{constructor(e){super(e),typeof createImageBitmap>"u"&&console.warn("THREE.ImageBitmapLoader: createImageBitmap() not supported."),typeof fetch>"u"&&console.warn("THREE.ImageBitmapLoader: fetch() not supported."),this.options={premultiplyAlpha:"none"}}setOptions(e){return this.options=e,this}load(e,t,i,r){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const n=this,s=tr.get(e);if(s!==void 0)return n.manager.itemStart(e),setTimeout(function(){t&&t(s),n.manager.itemEnd(e)},0),s;const o={};o.credentials=this.crossOrigin==="anonymous"?"same-origin":"include",o.headers=this.requestHeader,fetch(e,o).then(function(l){return l.blob()}).then(function(l){return createImageBitmap(l,Object.assign(n.options,{colorSpaceConversion:"none"}))}).then(function(l){tr.add(e,l),t&&t(l),n.manager.itemEnd(e)}).catch(function(l){r&&r(l),n.manager.itemError(e),n.manager.itemEnd(e)}),n.manager.itemStart(e)}}id.prototype.isImageBitmapLoader=!0;let ns;const cl={getContext:function(){return ns===void 0&&(ns=new(window.AudioContext||window.webkitAudioContext)),ns},setContext:function(a){ns=a}};class rd extends yt{constructor(e){super(e)}load(e,t,i,r){const n=this,s=new Gt(this.manager);s.setResponseType("arraybuffer"),s.setPath(this.path),s.setRequestHeader(this.requestHeader),s.setWithCredentials(this.withCredentials),s.load(e,function(o){try{const l=o.slice(0);cl.getContext().decodeAudioData(l,function(c){t(c)})}catch(l){r?r(l):console.error(l),n.manager.itemError(e)}},i,r)}}class nd extends jn{constructor(e,t,i=1){super(void 0,i);const r=new ie().set(e),n=new ie().set(t),s=new b(r.r,r.g,r.b),o=new b(n.r,n.g,n.b),l=Math.sqrt(Math.PI),c=l*Math.sqrt(.75);this.sh.coefficients[0].copy(s).add(o).multiplyScalar(l),this.sh.coefficients[1].copy(s).sub(o).multiplyScalar(c)}}nd.prototype.isHemisphereLightProbe=!0;class ad extends jn{constructor(e,t=1){super(void 0,t);const i=new ie().set(e);this.sh.coefficients[0].set(i.r,i.g,i.b).multiplyScalar(2*Math.sqrt(Math.PI))}}ad.prototype.isAmbientLightProbe=!0;const sd=new ue,od=new ue;class X0{constructor(){this.type="StereoCamera",this.aspect=1,this.eyeSep=.064,this.cameraL=new at,this.cameraL.layers.enable(1),this.cameraL.matrixAutoUpdate=!1,this.cameraR=new at,this.cameraR.layers.enable(2),this.cameraR.matrixAutoUpdate=!1,this._cache={focus:null,fov:null,aspect:null,near:null,far:null,zoom:null,eyeSep:null}}update(e){const t=this._cache;if(t.focus!==e.focus||t.fov!==e.fov||t.aspect!==e.aspect*this.aspect||t.near!==e.near||t.far!==e.far||t.zoom!==e.zoom||t.eyeSep!==this.eyeSep){t.focus=e.focus,t.fov=e.fov,t.aspect=e.aspect*this.aspect,t.near=e.near,t.far=e.far,t.zoom=e.zoom,t.eyeSep=this.eyeSep;const i=e.projectionMatrix.clone(),r=t.eyeSep/2,n=r*t.near/t.focus,s=t.near*Math.tan(ki*t.fov*.5)/t.zoom;let o,l;od.elements[12]=-r,sd.elements[12]=r,o=-s*t.aspect+n,l=s*t.aspect+n,i.elements[0]=2*t.near/(l-o),i.elements[8]=(l+o)/(l-o),this.cameraL.projectionMatrix.copy(i),o=-s*t.aspect-n,l=s*t.aspect-n,i.elements[0]=2*t.near/(l-o),i.elements[8]=(l+o)/(l-o),this.cameraR.projectionMatrix.copy(i)}this.cameraL.matrixWorld.copy(e.matrixWorld).multiply(od),this.cameraR.matrixWorld.copy(e.matrixWorld).multiply(sd)}}class ld{constructor(e=!0){this.autoStart=e,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=cd(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let e=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const t=cd();e=(t-this.oldTime)/1e3,this.oldTime=t,this.elapsedTime+=e}return e}}function cd(){return(typeof performance>"u"?Date:performance).now()}const ir=new b,hd=new dt,Y0=new b,rr=new b;class Z0 extends Re{constructor(){super(),this.type="AudioListener",this.context=cl.getContext(),this.gain=this.context.createGain(),this.gain.connect(this.context.destination),this.filter=null,this.timeDelta=0,this._clock=new ld}getInput(){return this.gain}removeFilter(){return this.filter!==null&&(this.gain.disconnect(this.filter),this.filter.disconnect(this.context.destination),this.gain.connect(this.context.destination),this.filter=null),this}getFilter(){return this.filter}setFilter(e){return this.filter!==null?(this.gain.disconnect(this.filter),this.filter.disconnect(this.context.destination)):this.gain.disconnect(this.context.destination),this.filter=e,this.gain.connect(this.filter),this.filter.connect(this.context.destination),this}getMasterVolume(){return this.gain.gain.value}setMasterVolume(e){return this.gain.gain.setTargetAtTime(e,this.context.currentTime,.01),this}updateMatrixWorld(e){super.updateMatrixWorld(e);const t=this.context.listener,i=this.up;if(this.timeDelta=this._clock.getDelta(),this.matrixWorld.decompose(ir,hd,Y0),rr.set(0,0,-1).applyQuaternion(hd),t.positionX){const r=this.context.currentTime+this.timeDelta;t.positionX.linearRampToValueAtTime(ir.x,r),t.positionY.linearRampToValueAtTime(ir.y,r),t.positionZ.linearRampToValueAtTime(ir.z,r),t.forwardX.linearRampToValueAtTime(rr.x,r),t.forwardY.linearRampToValueAtTime(rr.y,r),t.forwardZ.linearRampToValueAtTime(rr.z,r),t.upX.linearRampToValueAtTime(i.x,r),t.upY.linearRampToValueAtTime(i.y,r),t.upZ.linearRampToValueAtTime(i.z,r)}else t.setPosition(ir.x,ir.y,ir.z),t.setOrientation(rr.x,rr.y,rr.z,i.x,i.y,i.z)}}class hl extends Re{constructor(e){super(),this.type="Audio",this.listener=e,this.context=e.context,this.gain=this.context.createGain(),this.gain.connect(e.getInput()),this.autoplay=!1,this.buffer=null,this.detune=0,this.loop=!1,this.loopStart=0,this.loopEnd=0,this.offset=0,this.duration=void 0,this.playbackRate=1,this.isPlaying=!1,this.hasPlaybackControl=!0,this.source=null,this.sourceType="empty",this._startedAt=0,this._progress=0,this._connected=!1,this.filters=[]}getOutput(){return this.gain}setNodeSource(e){return this.hasPlaybackControl=!1,this.sourceType="audioNode",this.source=e,this.connect(),this}setMediaElementSource(e){return this.hasPlaybackControl=!1,this.sourceType="mediaNode",this.source=this.context.createMediaElementSource(e),this.connect(),this}setMediaStreamSource(e){return this.hasPlaybackControl=!1,this.sourceType="mediaStreamNode",this.source=this.context.createMediaStreamSource(e),this.connect(),this}setBuffer(e){return this.buffer=e,this.sourceType="buffer",this.autoplay&&this.play(),this}play(e=0){if(this.isPlaying===!0){console.warn("THREE.Audio: Audio is already playing.");return}if(this.hasPlaybackControl===!1){console.warn("THREE.Audio: this Audio has no playback control.");return}this._startedAt=this.context.currentTime+e;const t=this.context.createBufferSource();return t.buffer=this.buffer,t.loop=this.loop,t.loopStart=this.loopStart,t.loopEnd=this.loopEnd,t.onended=this.onEnded.bind(this),t.start(this._startedAt,this._progress+this.offset,this.duration),this.isPlaying=!0,this.source=t,this.setDetune(this.detune),this.setPlaybackRate(this.playbackRate),this.connect()}pause(){if(this.hasPlaybackControl===!1){console.warn("THREE.Audio: this Audio has no playback control.");return}return this.isPlaying===!0&&(this._progress+=Math.max(this.context.currentTime-this._startedAt,0)*this.playbackRate,this.loop===!0&&(this._progress=this._progress%(this.duration||this.buffer.duration)),this.source.stop(),this.source.onended=null,this.isPlaying=!1),this}stop(){if(this.hasPlaybackControl===!1){console.warn("THREE.Audio: this Audio has no playback control.");return}return this._progress=0,this.source.stop(),this.source.onended=null,this.isPlaying=!1,this}connect(){if(this.filters.length>0){this.source.connect(this.filters[0]);for(let e=1,t=this.filters.length;e<t;e++)this.filters[e-1].connect(this.filters[e]);this.filters[this.filters.length-1].connect(this.getOutput())}else this.source.connect(this.getOutput());return this._connected=!0,this}disconnect(){if(this.filters.length>0){this.source.disconnect(this.filters[0]);for(let e=1,t=this.filters.length;e<t;e++)this.filters[e-1].disconnect(this.filters[e]);this.filters[this.filters.length-1].disconnect(this.getOutput())}else this.source.disconnect(this.getOutput());return this._connected=!1,this}getFilters(){return this.filters}setFilters(e){return e||(e=[]),this._connected===!0?(this.disconnect(),this.filters=e.slice(),this.connect()):this.filters=e.slice(),this}setDetune(e){if(this.detune=e,this.source.detune!==void 0)return this.isPlaying===!0&&this.source.detune.setTargetAtTime(this.detune,this.context.currentTime,.01),this}getDetune(){return this.detune}getFilter(){return this.getFilters()[0]}setFilter(e){return this.setFilters(e?[e]:[])}setPlaybackRate(e){if(this.hasPlaybackControl===!1){console.warn("THREE.Audio: this Audio has no playback control.");return}return this.playbackRate=e,this.isPlaying===!0&&this.source.playbackRate.setTargetAtTime(this.playbackRate,this.context.currentTime,.01),this}getPlaybackRate(){return this.playbackRate}onEnded(){this.isPlaying=!1}getLoop(){return this.hasPlaybackControl===!1?(console.warn("THREE.Audio: this Audio has no playback control."),!1):this.loop}setLoop(e){if(this.hasPlaybackControl===!1){console.warn("THREE.Audio: this Audio has no playback control.");return}return this.loop=e,this.isPlaying===!0&&(this.source.loop=this.loop),this}setLoopStart(e){return this.loopStart=e,this}setLoopEnd(e){return this.loopEnd=e,this}getVolume(){return this.gain.gain.value}setVolume(e){return this.gain.gain.setTargetAtTime(e,this.context.currentTime,.01),this}}const nr=new b,ud=new dt,J0=new b,ar=new b;class K0 extends hl{constructor(e){super(e),this.panner=this.context.createPanner(),this.panner.panningModel="HRTF",this.panner.connect(this.gain)}getOutput(){return this.panner}getRefDistance(){return this.panner.refDistance}setRefDistance(e){return this.panner.refDistance=e,this}getRolloffFactor(){return this.panner.rolloffFactor}setRolloffFactor(e){return this.panner.rolloffFactor=e,this}getDistanceModel(){return this.panner.distanceModel}setDistanceModel(e){return this.panner.distanceModel=e,this}getMaxDistance(){return this.panner.maxDistance}setMaxDistance(e){return this.panner.maxDistance=e,this}setDirectionalCone(e,t,i){return this.panner.coneInnerAngle=e,this.panner.coneOuterAngle=t,this.panner.coneOuterGain=i,this}updateMatrixWorld(e){if(super.updateMatrixWorld(e),this.hasPlaybackControl===!0&&this.isPlaying===!1)return;this.matrixWorld.decompose(nr,ud,J0),ar.set(0,0,1).applyQuaternion(ud);const t=this.panner;if(t.positionX){const i=this.context.currentTime+this.listener.timeDelta;t.positionX.linearRampToValueAtTime(nr.x,i),t.positionY.linearRampToValueAtTime(nr.y,i),t.positionZ.linearRampToValueAtTime(nr.z,i),t.orientationX.linearRampToValueAtTime(ar.x,i),t.orientationY.linearRampToValueAtTime(ar.y,i),t.orientationZ.linearRampToValueAtTime(ar.z,i)}else t.setPosition(nr.x,nr.y,nr.z),t.setOrientation(ar.x,ar.y,ar.z)}}class dd{constructor(e,t=2048){this.analyser=e.context.createAnalyser(),this.analyser.fftSize=t,this.data=new Uint8Array(this.analyser.frequencyBinCount),e.getOutput().connect(this.analyser)}getFrequencyData(){return this.analyser.getByteFrequencyData(this.data),this.data}getAverageFrequency(){let e=0;const t=this.getFrequencyData();for(let i=0;i<t.length;i++)e+=t[i];return e/t.length}}class pd{constructor(e,t,i){this.binding=e,this.valueSize=i;let r,n,s;switch(t){case"quaternion":r=this._slerp,n=this._slerpAdditive,s=this._setAdditiveIdentityQuaternion,this.buffer=new Float64Array(i*6),this._workIndex=5;break;case"string":case"bool":r=this._select,n=this._select,s=this._setAdditiveIdentityOther,this.buffer=new Array(i*5);break;default:r=this._lerp,n=this._lerpAdditive,s=this._setAdditiveIdentityNumeric,this.buffer=new Float64Array(i*5)}this._mixBufferRegion=r,this._mixBufferRegionAdditive=n,this._setIdentity=s,this._origIndex=3,this._addIndex=4,this.cumulativeWeight=0,this.cumulativeWeightAdditive=0,this.useCount=0,this.referenceCount=0}accumulate(e,t){const i=this.buffer,r=this.valueSize,n=e*r+r;let s=this.cumulativeWeight;if(s===0){for(let o=0;o!==r;++o)i[n+o]=i[o];s=t}else{s+=t;const o=t/s;this._mixBufferRegion(i,n,0,o,r)}this.cumulativeWeight=s}accumulateAdditive(e){const t=this.buffer,i=this.valueSize,r=i*this._addIndex;this.cumulativeWeightAdditive===0&&this._setIdentity(),this._mixBufferRegionAdditive(t,r,0,e,i),this.cumulativeWeightAdditive+=e}apply(e){const t=this.valueSize,i=this.buffer,r=e*t+t,n=this.cumulativeWeight,s=this.cumulativeWeightAdditive,o=this.binding;if(this.cumulativeWeight=0,this.cumulativeWeightAdditive=0,n<1){const l=t*this._origIndex;this._mixBufferRegion(i,r,l,1-n,t)}s>0&&this._mixBufferRegionAdditive(i,r,this._addIndex*t,1,t);for(let l=t,c=t+t;l!==c;++l)if(i[l]!==i[l+t]){o.setValue(i,r);break}}saveOriginalState(){const e=this.binding,t=this.buffer,i=this.valueSize,r=i*this._origIndex;e.getValue(t,r);for(let n=i,s=r;n!==s;++n)t[n]=t[r+n%i];this._setIdentity(),this.cumulativeWeight=0,this.cumulativeWeightAdditive=0}restoreOriginalState(){const e=this.valueSize*3;this.binding.setValue(this.buffer,e)}_setAdditiveIdentityNumeric(){const e=this._addIndex*this.valueSize,t=e+this.valueSize;for(let i=e;i<t;i++)this.buffer[i]=0}_setAdditiveIdentityQuaternion(){this._setAdditiveIdentityNumeric(),this.buffer[this._addIndex*this.valueSize+3]=1}_setAdditiveIdentityOther(){const e=this._origIndex*this.valueSize,t=this._addIndex*this.valueSize;for(let i=0;i<this.valueSize;i++)this.buffer[t+i]=this.buffer[e+i]}_select(e,t,i,r,n){if(r>=.5)for(let s=0;s!==n;++s)e[t+s]=e[i+s]}_slerp(e,t,i,r){dt.slerpFlat(e,t,e,t,e,i,r)}_slerpAdditive(e,t,i,r,n){const s=this._workIndex*n;dt.multiplyQuaternionsFlat(e,s,e,t,e,i),dt.slerpFlat(e,t,e,t,e,s,r)}_lerp(e,t,i,r,n){const s=1-r;for(let o=0;o!==n;++o){const l=t+o;e[l]=e[l]*s+e[i+o]*r}}_lerpAdditive(e,t,i,r,n){for(let s=0;s!==n;++s){const o=t+s;e[o]=e[o]+e[i+s]*r}}}const ul="\\[\\]\\.:\\/",Q0=new RegExp("["+ul+"]","g"),dl="[^"+ul+"]",$0="[^"+ul.replace("\\.","")+"]",ey=/((?:WC+[\/:])*)/.source.replace("WC",dl),ty=/(WCOD+)?/.source.replace("WCOD",$0),iy=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",dl),ry=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",dl),ny=new RegExp("^"+ey+ty+iy+ry+"$"),ay=["material","materials","bones"];class sy{constructor(e,t,i){const r=i||Be.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,r)}getValue(e,t){this.bind();const i=this._targetGroup.nCachedObjects_,r=this._bindings[i];r!==void 0&&r.getValue(e,t)}setValue(e,t){const i=this._bindings;for(let r=this._targetGroup.nCachedObjects_,n=i.length;r!==n;++r)i[r].setValue(e,t)}bind(){const e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,i=e.length;t!==i;++t)e[t].bind()}unbind(){const e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,i=e.length;t!==i;++t)e[t].unbind()}}class Be{constructor(e,t,i){this.path=t,this.parsedPath=i||Be.parseTrackName(t),this.node=Be.findNode(e,this.parsedPath.nodeName)||e,this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,t,i){return e&&e.isAnimationObjectGroup?new Be.Composite(e,t,i):new Be(e,t,i)}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace(Q0,"")}static parseTrackName(e){const t=ny.exec(e);if(!t)throw new Error("PropertyBinding: Cannot parse trackName: "+e);const i={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},r=i.nodeName&&i.nodeName.lastIndexOf(".");if(r!==void 0&&r!==-1){const n=i.nodeName.substring(r+1);ay.indexOf(n)!==-1&&(i.nodeName=i.nodeName.substring(0,r),i.objectName=n)}if(i.propertyName===null||i.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+e);return i}static findNode(e,t){if(!t||t===""||t==="."||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){const i=e.skeleton.getBoneByName(t);if(i!==void 0)return i}if(e.children){const i=function(n){for(let s=0;s<n.length;s++){const o=n[s];if(o.name===t||o.uuid===t)return o;const l=i(o.children);if(l)return l}return null},r=i(e.children);if(r)return r}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){const i=this.resolvedProperty;for(let r=0,n=i.length;r!==n;++r)e[t++]=i[r]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){const i=this.resolvedProperty;for(let r=0,n=i.length;r!==n;++r)i[r]=e[t++]}_setValue_array_setNeedsUpdate(e,t){const i=this.resolvedProperty;for(let r=0,n=i.length;r!==n;++r)i[r]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){const i=this.resolvedProperty;for(let r=0,n=i.length;r!==n;++r)i[r]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let e=this.node;const t=this.parsedPath,i=t.objectName,r=t.propertyName;let n=t.propertyIndex;if(e||(e=Be.findNode(this.rootNode,t.nodeName)||this.rootNode,this.node=e),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e){console.error("THREE.PropertyBinding: Trying to update node for track: "+this.path+" but it wasn't found.");return}if(i){let c=t.objectIndex;switch(i){case"materials":if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.materials){console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}e=e.material.materials;break;case"bones":if(!e.skeleton){console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}e=e.skeleton.bones;for(let h=0;h<e.length;h++)if(e[h].name===c){c=h;break}break;default:if(e[i]===void 0){console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this);return}e=e[i]}if(c!==void 0){if(e[c]===void 0){console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);return}e=e[c]}}const s=e[r];if(s===void 0){const c=t.nodeName;console.error("THREE.PropertyBinding: Trying to update property for track: "+c+"."+r+" but it wasn't found.",e);return}let o=this.Versioning.None;this.targetObject=e,e.needsUpdate!==void 0?o=this.Versioning.NeedsUpdate:e.matrixWorldNeedsUpdate!==void 0&&(o=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(n!==void 0){if(r==="morphTargetInfluences"){if(!e.geometry){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(e.geometry.isBufferGeometry){if(!e.geometry.morphAttributes){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}e.morphTargetDictionary[n]!==void 0&&(n=e.morphTargetDictionary[n])}else{console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences on THREE.Geometry. Use THREE.BufferGeometry instead.",this);return}}l=this.BindingType.ArrayElement,this.resolvedProperty=s,this.propertyIndex=n}else s.fromArray!==void 0&&s.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=s):Array.isArray(s)?(l=this.BindingType.EntireArray,this.resolvedProperty=s):this.propertyName=r;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][o]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}}Be.Composite=sy,Be.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3},Be.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2},Be.prototype.GetterByBindingType=[Be.prototype._getValue_direct,Be.prototype._getValue_array,Be.prototype._getValue_arrayElement,Be.prototype._getValue_toArray],Be.prototype.SetterByBindingTypeAndVersioning=[[Be.prototype._setValue_direct,Be.prototype._setValue_direct_setNeedsUpdate,Be.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[Be.prototype._setValue_array,Be.prototype._setValue_array_setNeedsUpdate,Be.prototype._setValue_array_setMatrixWorldNeedsUpdate],[Be.prototype._setValue_arrayElement,Be.prototype._setValue_arrayElement_setNeedsUpdate,Be.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[Be.prototype._setValue_fromArray,Be.prototype._setValue_fromArray_setNeedsUpdate,Be.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];class md{constructor(){this.uuid=_t(),this._objects=Array.prototype.slice.call(arguments),this.nCachedObjects_=0;const e={};this._indicesByUUID=e;for(let i=0,r=arguments.length;i!==r;++i)e[arguments[i].uuid]=i;this._paths=[],this._parsedPaths=[],this._bindings=[],this._bindingsIndicesByPath={};const t=this;this.stats={objects:{get total(){return t._objects.length},get inUse(){return this.total-t.nCachedObjects_}},get bindingsPerObject(){return t._bindings.length}}}add(){const e=this._objects,t=this._indicesByUUID,i=this._paths,r=this._parsedPaths,n=this._bindings,s=n.length;let o,l=e.length,c=this.nCachedObjects_;for(let h=0,d=arguments.length;h!==d;++h){const u=arguments[h],p=u.uuid;let g=t[p];if(g===void 0){g=l++,t[p]=g,e.push(u);for(let v=0,x=s;v!==x;++v)n[v].push(new Be(u,i[v],r[v]))}else if(g<c){o=e[g];const v=--c,x=e[v];t[x.uuid]=g,e[g]=x,t[p]=v,e[v]=u;for(let f=0,m=s;f!==m;++f){const w=n[f],y=w[v];let M=w[g];w[g]=y,M===void 0&&(M=new Be(u,i[f],r[f])),w[v]=M}}else e[g]!==o&&console.error("THREE.AnimationObjectGroup: Different objects with the same UUID detected. Clean the caches or recreate your infrastructure when reloading scenes.")}this.nCachedObjects_=c}remove(){const e=this._objects,t=this._indicesByUUID,i=this._bindings,r=i.length;let n=this.nCachedObjects_;for(let s=0,o=arguments.length;s!==o;++s){const l=arguments[s],c=l.uuid,h=t[c];if(h!==void 0&&h>=n){const d=n++,u=e[d];t[u.uuid]=h,e[h]=u,t[c]=d,e[d]=l;for(let p=0,g=r;p!==g;++p){const v=i[p],x=v[d],f=v[h];v[h]=x,v[d]=f}}}this.nCachedObjects_=n}uncache(){const e=this._objects,t=this._indicesByUUID,i=this._bindings,r=i.length;let n=this.nCachedObjects_,s=e.length;for(let o=0,l=arguments.length;o!==l;++o){const c=arguments[o],h=c.uuid,d=t[h];if(d!==void 0)if(delete t[h],d<n){const u=--n,p=e[u],g=--s,v=e[g];t[p.uuid]=d,e[d]=p,t[v.uuid]=u,e[u]=v,e.pop();for(let x=0,f=r;x!==f;++x){const m=i[x],w=m[u],y=m[g];m[d]=w,m[u]=y,m.pop()}}else{const u=--s,p=e[u];u>0&&(t[p.uuid]=d),e[d]=p,e.pop();for(let g=0,v=r;g!==v;++g){const x=i[g];x[d]=x[u],x.pop()}}}this.nCachedObjects_=n}subscribe_(e,t){const i=this._bindingsIndicesByPath;let r=i[e];const n=this._bindings;if(r!==void 0)return n[r];const s=this._paths,o=this._parsedPaths,l=this._objects,c=l.length,h=this.nCachedObjects_,d=new Array(c);r=n.length,i[e]=r,s.push(e),o.push(t),n.push(d);for(let u=h,p=l.length;u!==p;++u){const g=l[u];d[u]=new Be(g,e,t)}return d}unsubscribe_(e){const t=this._bindingsIndicesByPath,i=t[e];if(i!==void 0){const r=this._paths,n=this._parsedPaths,s=this._bindings,o=s.length-1,l=s[o],c=e[o];t[c]=i,s[i]=l,s.pop(),n[i]=n[o],n.pop(),r[i]=r[o],r.pop()}}}md.prototype.isAnimationObjectGroup=!0;class oy{constructor(e,t,i=null,r=t.blendMode){this._mixer=e,this._clip=t,this._localRoot=i,this.blendMode=r;const n=t.tracks,s=n.length,o=new Array(s),l={endingStart:Ui,endingEnd:Ui};for(let c=0;c!==s;++c){const h=n[c].createInterpolant(null);o[c]=h,h.settings=l}this._interpolantSettings=l,this._interpolants=o,this._propertyBindings=new Array(s),this._cacheIndex=null,this._byClipCacheIndex=null,this._timeScaleInterpolant=null,this._weightInterpolant=null,this.loop=Vc,this._loopCount=-1,this._startTime=null,this.time=0,this.timeScale=1,this._effectiveTimeScale=1,this.weight=1,this._effectiveWeight=1,this.repetitions=1/0,this.paused=!1,this.enabled=!0,this.clampWhenFinished=!1,this.zeroSlopeAtStart=!0,this.zeroSlopeAtEnd=!0}play(){return this._mixer._activateAction(this),this}stop(){return this._mixer._deactivateAction(this),this.reset()}reset(){return this.paused=!1,this.enabled=!0,this.time=0,this._loopCount=-1,this._startTime=null,this.stopFading().stopWarping()}isRunning(){return this.enabled&&!this.paused&&this.timeScale!==0&&this._startTime===null&&this._mixer._isActiveAction(this)}isScheduled(){return this._mixer._isActiveAction(this)}startAt(e){return this._startTime=e,this}setLoop(e,t){return this.loop=e,this.repetitions=t,this}setEffectiveWeight(e){return this.weight=e,this._effectiveWeight=this.enabled?e:0,this.stopFading()}getEffectiveWeight(){return this._effectiveWeight}fadeIn(e){return this._scheduleFading(e,0,1)}fadeOut(e){return this._scheduleFading(e,1,0)}crossFadeFrom(e,t,i){if(e.fadeOut(t),this.fadeIn(t),i){const r=this._clip.duration,n=e._clip.duration,s=n/r,o=r/n;e.warp(1,s,t),this.warp(o,1,t)}return this}crossFadeTo(e,t,i){return e.crossFadeFrom(this,t,i)}stopFading(){const e=this._weightInterpolant;return e!==null&&(this._weightInterpolant=null,this._mixer._takeBackControlInterpolant(e)),this}setEffectiveTimeScale(e){return this.timeScale=e,this._effectiveTimeScale=this.paused?0:e,this.stopWarping()}getEffectiveTimeScale(){return this._effectiveTimeScale}setDuration(e){return this.timeScale=this._clip.duration/e,this.stopWarping()}syncWith(e){return this.time=e.time,this.timeScale=e.timeScale,this.stopWarping()}halt(e){return this.warp(this._effectiveTimeScale,0,e)}warp(e,t,i){const r=this._mixer,n=r.time,s=this.timeScale;let o=this._timeScaleInterpolant;o===null&&(o=r._lendControlInterpolant(),this._timeScaleInterpolant=o);const l=o.parameterPositions,c=o.sampleValues;return l[0]=n,l[1]=n+i,c[0]=e/s,c[1]=t/s,this}stopWarping(){const e=this._timeScaleInterpolant;return e!==null&&(this._timeScaleInterpolant=null,this._mixer._takeBackControlInterpolant(e)),this}getMixer(){return this._mixer}getClip(){return this._clip}getRoot(){return this._localRoot||this._mixer._root}_update(e,t,i,r){if(!this.enabled){this._updateWeight(e);return}const n=this._startTime;if(n!==null){const l=(e-n)*i;if(l<0||i===0)return;this._startTime=null,t=i*l}t*=this._updateTimeScale(e);const s=this._updateTime(t),o=this._updateWeight(e);if(o>0){const l=this._interpolants,c=this._propertyBindings;switch(this.blendMode){case Bs:for(let h=0,d=l.length;h!==d;++h)l[h].evaluate(s),c[h].accumulateAdditive(o);break;case ea:default:for(let h=0,d=l.length;h!==d;++h)l[h].evaluate(s),c[h].accumulate(r,o)}}}_updateWeight(e){let t=0;if(this.enabled){t=this.weight;const i=this._weightInterpolant;if(i!==null){const r=i.evaluate(e)[0];t*=r,e>i.parameterPositions[1]&&(this.stopFading(),r===0&&(this.enabled=!1))}}return this._effectiveWeight=t,t}_updateTimeScale(e){let t=0;if(!this.paused){t=this.timeScale;const i=this._timeScaleInterpolant;if(i!==null){const r=i.evaluate(e)[0];t*=r,e>i.parameterPositions[1]&&(this.stopWarping(),t===0?this.paused=!0:this.timeScale=t)}}return this._effectiveTimeScale=t,t}_updateTime(e){const t=this._clip.duration,i=this.loop;let r=this.time+e,n=this._loopCount;const s=i===Wc;if(e===0)return n===-1?r:s&&(n&1)===1?t-r:r;if(i===kc){n===-1&&(this._loopCount=0,this._setEndings(!0,!0,!1));e:{if(r>=t)r=t;else if(r<0)r=0;else{this.time=r;break e}this.clampWhenFinished?this.paused=!0:this.enabled=!1,this.time=r,this._mixer.dispatchEvent({type:"finished",action:this,direction:e<0?-1:1})}}else{if(n===-1&&(e>=0?(n=0,this._setEndings(!0,this.repetitions===0,s)):this._setEndings(this.repetitions===0,!0,s)),r>=t||r<0){const o=Math.floor(r/t);r-=t*o,n+=Math.abs(o);const l=this.repetitions-n;if(l<=0)this.clampWhenFinished?this.paused=!0:this.enabled=!1,r=e>0?t:0,this.time=r,this._mixer.dispatchEvent({type:"finished",action:this,direction:e>0?1:-1});else{if(l===1){const c=e<0;this._setEndings(c,!c,s)}else this._setEndings(!1,!1,s);this._loopCount=n,this.time=r,this._mixer.dispatchEvent({type:"loop",action:this,loopDelta:o})}}else this.time=r;if(s&&(n&1)===1)return t-r}return r}_setEndings(e,t,i){const r=this._interpolantSettings;i?(r.endingStart=Gi,r.endingEnd=Gi):(e?r.endingStart=this.zeroSlopeAtStart?Gi:Ui:r.endingStart=fn,t?r.endingEnd=this.zeroSlopeAtEnd?Gi:Ui:r.endingEnd=fn)}_scheduleFading(e,t,i){const r=this._mixer,n=r.time;let s=this._weightInterpolant;s===null&&(s=r._lendControlInterpolant(),this._weightInterpolant=s);const o=s.parameterPositions,l=s.sampleValues;return o[0]=n,l[0]=t,o[1]=n+e,l[1]=i,this}}class fd extends li{constructor(e){super(),this._root=e,this._initMemoryManager(),this._accuIndex=0,this.time=0,this.timeScale=1}_bindAction(e,t){const i=e._localRoot||this._root,r=e._clip.tracks,n=r.length,s=e._propertyBindings,o=e._interpolants,l=i.uuid,c=this._bindingsByRootAndName;let h=c[l];h===void 0&&(h={},c[l]=h);for(let d=0;d!==n;++d){const u=r[d],p=u.name;let g=h[p];if(g!==void 0)s[d]=g;else{if(g=s[d],g!==void 0){g._cacheIndex===null&&(++g.referenceCount,this._addInactiveBinding(g,l,p));continue}const v=t&&t._propertyBindings[d].binding.parsedPath;g=new pd(Be.create(i,p,v),u.ValueTypeName,u.getValueSize()),++g.referenceCount,this._addInactiveBinding(g,l,p),s[d]=g}o[d].resultBuffer=g.buffer}}_activateAction(e){if(!this._isActiveAction(e)){if(e._cacheIndex===null){const i=(e._localRoot||this._root).uuid,r=e._clip.uuid,n=this._actionsByClip[r];this._bindAction(e,n&&n.knownActions[0]),this._addInactiveAction(e,r,i)}const t=e._propertyBindings;for(let i=0,r=t.length;i!==r;++i){const n=t[i];n.useCount++===0&&(this._lendBinding(n),n.saveOriginalState())}this._lendAction(e)}}_deactivateAction(e){if(this._isActiveAction(e)){const t=e._propertyBindings;for(let i=0,r=t.length;i!==r;++i){const n=t[i];--n.useCount===0&&(n.restoreOriginalState(),this._takeBackBinding(n))}this._takeBackAction(e)}}_initMemoryManager(){this._actions=[],this._nActiveActions=0,this._actionsByClip={},this._bindings=[],this._nActiveBindings=0,this._bindingsByRootAndName={},this._controlInterpolants=[],this._nActiveControlInterpolants=0;const e=this;this.stats={actions:{get total(){return e._actions.length},get inUse(){return e._nActiveActions}},bindings:{get total(){return e._bindings.length},get inUse(){return e._nActiveBindings}},controlInterpolants:{get total(){return e._controlInterpolants.length},get inUse(){return e._nActiveControlInterpolants}}}}_isActiveAction(e){const t=e._cacheIndex;return t!==null&&t<this._nActiveActions}_addInactiveAction(e,t,i){const r=this._actions,n=this._actionsByClip;let s=n[t];if(s===void 0)s={knownActions:[e],actionByRoot:{}},e._byClipCacheIndex=0,n[t]=s;else{const o=s.knownActions;e._byClipCacheIndex=o.length,o.push(e)}e._cacheIndex=r.length,r.push(e),s.actionByRoot[i]=e}_removeInactiveAction(e){const t=this._actions,i=t[t.length-1],r=e._cacheIndex;i._cacheIndex=r,t[r]=i,t.pop(),e._cacheIndex=null;const n=e._clip.uuid,s=this._actionsByClip,o=s[n],l=o.knownActions,c=l[l.length-1],h=e._byClipCacheIndex;c._byClipCacheIndex=h,l[h]=c,l.pop(),e._byClipCacheIndex=null;const d=o.actionByRoot,u=(e._localRoot||this._root).uuid;delete d[u],l.length===0&&delete s[n],this._removeInactiveBindingsForAction(e)}_removeInactiveBindingsForAction(e){const t=e._propertyBindings;for(let i=0,r=t.length;i!==r;++i){const n=t[i];--n.referenceCount===0&&this._removeInactiveBinding(n)}}_lendAction(e){const t=this._actions,i=e._cacheIndex,r=this._nActiveActions++,n=t[r];e._cacheIndex=r,t[r]=e,n._cacheIndex=i,t[i]=n}_takeBackAction(e){const t=this._actions,i=e._cacheIndex,r=--this._nActiveActions,n=t[r];e._cacheIndex=r,t[r]=e,n._cacheIndex=i,t[i]=n}_addInactiveBinding(e,t,i){const r=this._bindingsByRootAndName,n=this._bindings;let s=r[t];s===void 0&&(s={},r[t]=s),s[i]=e,e._cacheIndex=n.length,n.push(e)}_removeInactiveBinding(e){const t=this._bindings,i=e.binding,r=i.rootNode.uuid,n=i.path,s=this._bindingsByRootAndName,o=s[r],l=t[t.length-1],c=e._cacheIndex;l._cacheIndex=c,t[c]=l,t.pop(),delete o[n],Object.keys(o).length===0&&delete s[r]}_lendBinding(e){const t=this._bindings,i=e._cacheIndex,r=this._nActiveBindings++,n=t[r];e._cacheIndex=r,t[r]=e,n._cacheIndex=i,t[i]=n}_takeBackBinding(e){const t=this._bindings,i=e._cacheIndex,r=--this._nActiveBindings,n=t[r];e._cacheIndex=r,t[r]=e,n._cacheIndex=i,t[i]=n}_lendControlInterpolant(){const e=this._controlInterpolants,t=this._nActiveControlInterpolants++;let i=e[t];return i===void 0&&(i=new Jo(new Float32Array(2),new Float32Array(2),1,this._controlInterpolantsResultBuffer),i.__cacheIndex=t,e[t]=i),i}_takeBackControlInterpolant(e){const t=this._controlInterpolants,i=e.__cacheIndex,r=--this._nActiveControlInterpolants,n=t[r];e.__cacheIndex=r,t[r]=e,n.__cacheIndex=i,t[i]=n}clipAction(e,t,i){const r=t||this._root,n=r.uuid;let s=typeof e=="string"?kn.findByName(r,e):e;const o=s!==null?s.uuid:e,l=this._actionsByClip[o];let c=null;if(i===void 0&&(s!==null?i=s.blendMode:i=ea),l!==void 0){const d=l.actionByRoot[n];if(d!==void 0&&d.blendMode===i)return d;c=l.knownActions[0],s===null&&(s=c._clip)}if(s===null)return null;const h=new oy(this,s,t,i);return this._bindAction(h,c),this._addInactiveAction(h,o,n),h}existingAction(e,t){const i=t||this._root,r=i.uuid,n=typeof e=="string"?kn.findByName(i,e):e,s=n?n.uuid:e,o=this._actionsByClip[s];return o!==void 0&&o.actionByRoot[r]||null}stopAllAction(){const e=this._actions,t=this._nActiveActions;for(let i=t-1;i>=0;--i)e[i].stop();return this}update(e){e*=this.timeScale;const t=this._actions,i=this._nActiveActions,r=this.time+=e,n=Math.sign(e),s=this._accuIndex^=1;for(let c=0;c!==i;++c)t[c]._update(r,e,n,s);const o=this._bindings,l=this._nActiveBindings;for(let c=0;c!==l;++c)o[c].apply(s);return this}setTime(e){this.time=0;for(let t=0;t<this._actions.length;t++)this._actions[t].time=0;return this.update(e)}getRoot(){return this._root}uncacheClip(e){const t=this._actions,i=e.uuid,r=this._actionsByClip,n=r[i];if(n!==void 0){const s=n.knownActions;for(let o=0,l=s.length;o!==l;++o){const c=s[o];this._deactivateAction(c);const h=c._cacheIndex,d=t[t.length-1];c._cacheIndex=null,c._byClipCacheIndex=null,d._cacheIndex=h,t[h]=d,t.pop(),this._removeInactiveBindingsForAction(c)}delete r[i]}}uncacheRoot(e){const t=e.uuid,i=this._actionsByClip;for(const s in i){const o=i[s].actionByRoot,l=o[t];l!==void 0&&(this._deactivateAction(l),this._removeInactiveAction(l))}const r=this._bindingsByRootAndName,n=r[t];if(n!==void 0)for(const s in n){const o=n[s];o.restoreOriginalState(),this._removeInactiveBinding(o)}}uncacheAction(e,t){const i=this.existingAction(e,t);i!==null&&(this._deactivateAction(i),this._removeInactiveAction(i))}}fd.prototype._controlInterpolantsResultBuffer=new Float32Array(1);class ds{constructor(e){typeof e=="string"&&(console.warn("THREE.Uniform: Type parameter is no longer needed."),e=arguments[1]),this.value=e}clone(){return new ds(this.value.clone===void 0?this.value:this.value.clone())}}class gd extends Zi{constructor(e,t,i=1){super(e,t),this.meshPerAttribute=i}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}clone(e){const t=super.clone(e);return t.meshPerAttribute=this.meshPerAttribute,t}toJSON(e){const t=super.toJSON(e);return t.isInstancedInterleavedBuffer=!0,t.meshPerAttribute=this.meshPerAttribute,t}}gd.prototype.isInstancedInterleavedBuffer=!0;class vd{constructor(e,t,i,r,n){this.buffer=e,this.type=t,this.itemSize=i,this.elementSize=r,this.count=n,this.version=0}set needsUpdate(e){e===!0&&this.version++}setBuffer(e){return this.buffer=e,this}setType(e,t){return this.type=e,this.elementSize=t,this}setItemSize(e){return this.itemSize=e,this}setCount(e){return this.count=e,this}}vd.prototype.isGLBufferAttribute=!0;class ly{constructor(e,t,i=0,r=1/0){this.ray=new pi(e,t),this.near=i,this.far=r,this.camera=null,this.layers=new Qs,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,t){this.ray.set(e,t)}setFromCamera(e,t){t&&t.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(t).sub(this.ray.origin).normalize(),this.camera=t):t&&t.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,(t.near+t.far)/(t.near-t.far)).unproject(t),this.ray.direction.set(0,0,-1).transformDirection(t.matrixWorld),this.camera=t):console.error("THREE.Raycaster: Unsupported camera type: "+t.type)}intersectObject(e,t=!0,i=[]){return pl(e,this,i,t),i.sort(yd),i}intersectObjects(e,t=!0,i=[]){for(let r=0,n=e.length;r<n;r++)pl(e[r],this,i,t);return i.sort(yd),i}}function yd(a,e){return a.distance-e.distance}function pl(a,e,t,i){if(a.layers.test(e.layers)&&a.raycast(e,t),i===!0){const r=a.children;for(let n=0,s=r.length;n<s;n++)pl(r[n],e,t,!0)}}class cy{constructor(e=1,t=0,i=0){return this.radius=e,this.phi=t,this.theta=i,this}set(e,t,i){return this.radius=e,this.phi=t,this.theta=i,this}copy(e){return this.radius=e.radius,this.phi=e.phi,this.theta=e.theta,this}makeSafe(){return this.phi=Math.max(1e-6,Math.min(Math.PI-1e-6,this.phi)),this}setFromVector3(e){return this.setFromCartesianCoords(e.x,e.y,e.z)}setFromCartesianCoords(e,t,i){return this.radius=Math.sqrt(e*e+t*t+i*i),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(e,i),this.phi=Math.acos(ut(t/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}}class hy{constructor(e=1,t=0,i=0){return this.radius=e,this.theta=t,this.y=i,this}set(e,t,i){return this.radius=e,this.theta=t,this.y=i,this}copy(e){return this.radius=e.radius,this.theta=e.theta,this.y=e.y,this}setFromVector3(e){return this.setFromCartesianCoords(e.x,e.y,e.z)}setFromCartesianCoords(e,t,i){return this.radius=Math.sqrt(e*e+i*i),this.theta=Math.atan2(e,i),this.y=t,this}clone(){return new this.constructor().copy(this)}}const xd=new j;class jr{constructor(e=new j(1/0,1/0),t=new j(-1/0,-1/0)){this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromPoints(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const i=xd.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=1/0,this.max.x=this.max.y=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y}getCenter(e){return this.isEmpty()?e.set(0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}containsPoint(e){return!(e.x<this.min.x||e.x>this.max.x||e.y<this.min.y||e.y>this.max.y)}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y))}intersectsBox(e){return!(e.max.x<this.min.x||e.min.x>this.max.x||e.max.y<this.min.y||e.min.y>this.max.y)}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return xd.copy(e).clamp(this.min,this.max).sub(e).length()}intersect(e){return this.min.max(e.min),this.max.min(e.max),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}jr.prototype.isBox2=!0;const _d=new b,as=new b;class wd{constructor(e=new b,t=new b){this.start=e,this.end=t}set(e,t){return this.start.copy(e),this.end.copy(t),this}copy(e){return this.start.copy(e.start),this.end.copy(e.end),this}getCenter(e){return e.addVectors(this.start,this.end).multiplyScalar(.5)}delta(e){return e.subVectors(this.end,this.start)}distanceSq(){return this.start.distanceToSquared(this.end)}distance(){return this.start.distanceTo(this.end)}at(e,t){return this.delta(t).multiplyScalar(e).add(this.start)}closestPointToPointParameter(e,t){_d.subVectors(e,this.start),as.subVectors(this.end,this.start);const i=as.dot(as);let r=as.dot(_d)/i;return t&&(r=ut(r,0,1)),r}closestPointToPoint(e,t,i){const r=this.closestPointToPointParameter(e,t);return this.delta(i).multiplyScalar(r).add(this.start)}applyMatrix4(e){return this.start.applyMatrix4(e),this.end.applyMatrix4(e),this}equals(e){return e.start.equals(this.start)&&e.end.equals(this.end)}clone(){return new this.constructor().copy(this)}}const bd=new b;class uy extends Re{constructor(e,t){super(),this.light=e,this.light.updateMatrixWorld(),this.matrix=e.matrixWorld,this.matrixAutoUpdate=!1,this.color=t;const i=new we,r=[0,0,0,0,0,1,0,0,0,1,0,1,0,0,0,-1,0,1,0,0,0,0,1,1,0,0,0,0,-1,1];for(let s=0,o=1,l=32;s<l;s++,o++){const c=s/l*Math.PI*2,h=o/l*Math.PI*2;r.push(Math.cos(c),Math.sin(c),1,Math.cos(h),Math.sin(h),1)}i.setAttribute("position",new le(r,3));const n=new st({fog:!1,toneMapped:!1});this.cone=new xt(i,n),this.add(this.cone),this.update()}dispose(){this.cone.geometry.dispose(),this.cone.material.dispose()}update(){this.light.updateMatrixWorld();const e=this.light.distance?this.light.distance:1e3,t=e*Math.tan(this.light.angle);this.cone.scale.set(t,t,e),bd.setFromMatrixPosition(this.light.target.matrixWorld),this.cone.lookAt(bd),this.color!==void 0?this.cone.material.color.set(this.color):this.cone.material.color.copy(this.light.color)}}const bi=new b,ss=new ue,ml=new ue;class Md extends xt{constructor(e){const t=Sd(e),i=new we,r=[],n=[],s=new ie(0,0,1),o=new ie(0,1,0);for(let c=0;c<t.length;c++){const h=t[c];h.parent&&h.parent.isBone&&(r.push(0,0,0),r.push(0,0,0),n.push(s.r,s.g,s.b),n.push(o.r,o.g,o.b))}i.setAttribute("position",new le(r,3)),i.setAttribute("color",new le(n,3));const l=new st({vertexColors:!0,depthTest:!1,depthWrite:!1,toneMapped:!1,transparent:!0});super(i,l),this.type="SkeletonHelper",this.isSkeletonHelper=!0,this.root=e,this.bones=t,this.matrix=e.matrixWorld,this.matrixAutoUpdate=!1}updateMatrixWorld(e){const t=this.bones,i=this.geometry,r=i.getAttribute("position");ml.copy(this.root.matrixWorld).invert();for(let n=0,s=0;n<t.length;n++){const o=t[n];o.parent&&o.parent.isBone&&(ss.multiplyMatrices(ml,o.matrixWorld),bi.setFromMatrixPosition(ss),r.setXYZ(s,bi.x,bi.y,bi.z),ss.multiplyMatrices(ml,o.parent.matrixWorld),bi.setFromMatrixPosition(ss),r.setXYZ(s+1,bi.x,bi.y,bi.z),s+=2)}i.getAttribute("position").needsUpdate=!0,super.updateMatrixWorld(e)}}function Sd(a){const e=[];a&&a.isBone&&e.push(a);for(let t=0;t<a.children.length;t++)e.push.apply(e,Sd(a.children[t]));return e}class dy extends Qe{constructor(e,t,i){const r=new hr(t,4,2),n=new Qt({wireframe:!0,fog:!1,toneMapped:!1});super(r,n),this.light=e,this.light.updateMatrixWorld(),this.color=i,this.type="PointLightHelper",this.matrix=this.light.matrixWorld,this.matrixAutoUpdate=!1,this.update()}dispose(){this.geometry.dispose(),this.material.dispose()}update(){this.color!==void 0?this.material.color.set(this.color):this.material.color.copy(this.light.color)}}const py=new b,Td=new ie,Ed=new ie;class my extends Re{constructor(e,t,i){super(),this.light=e,this.light.updateMatrixWorld(),this.matrix=e.matrixWorld,this.matrixAutoUpdate=!1,this.color=i;const r=new lr(t);r.rotateY(Math.PI*.5),this.material=new Qt({wireframe:!0,fog:!1,toneMapped:!1}),this.color===void 0&&(this.material.vertexColors=!0);const n=r.getAttribute("position"),s=new Float32Array(n.count*3);r.setAttribute("color",new De(s,3)),this.add(new Qe(r,this.material)),this.update()}dispose(){this.children[0].geometry.dispose(),this.children[0].material.dispose()}update(){const e=this.children[0];if(this.color!==void 0)this.material.color.set(this.color);else{const t=e.geometry.getAttribute("color");Td.copy(this.light.color),Ed.copy(this.light.groundColor);for(let i=0,r=t.count;i<r;i++){const n=i<r/2?Td:Ed;t.setXYZ(i,n.r,n.g,n.b)}t.needsUpdate=!0}e.lookAt(py.setFromMatrixPosition(this.light.matrixWorld).negate())}}class Ad extends xt{constructor(e=10,t=10,i=4473924,r=8947848){i=new ie(i),r=new ie(r);const n=t/2,s=e/t,o=e/2,l=[],c=[];for(let u=0,p=0,g=-o;u<=t;u++,g+=s){l.push(-o,0,g,o,0,g),l.push(g,0,-o,g,0,o);const v=u===n?i:r;v.toArray(c,p),p+=3,v.toArray(c,p),p+=3,v.toArray(c,p),p+=3,v.toArray(c,p),p+=3}const h=new we;h.setAttribute("position",new le(l,3)),h.setAttribute("color",new le(c,3));const d=new st({vertexColors:!0,toneMapped:!1});super(h,d),this.type="GridHelper"}}class fy extends xt{constructor(e=10,t=16,i=8,r=64,n=4473924,s=8947848){n=new ie(n),s=new ie(s);const o=[],l=[];for(let d=0;d<=t;d++){const u=d/t*(Math.PI*2),p=Math.sin(u)*e,g=Math.cos(u)*e;o.push(0,0,0),o.push(p,0,g);const v=d&1?n:s;l.push(v.r,v.g,v.b),l.push(v.r,v.g,v.b)}for(let d=0;d<=i;d++){const u=d&1?n:s,p=e-e/i*d;for(let g=0;g<r;g++){let v=g/r*(Math.PI*2),x=Math.sin(v)*p,f=Math.cos(v)*p;o.push(x,0,f),l.push(u.r,u.g,u.b),v=(g+1)/r*(Math.PI*2),x=Math.sin(v)*p,f=Math.cos(v)*p,o.push(x,0,f),l.push(u.r,u.g,u.b)}}const c=new we;c.setAttribute("position",new le(o,3)),c.setAttribute("color",new le(l,3));const h=new st({vertexColors:!0,toneMapped:!1});super(c,h),this.type="PolarGridHelper"}}const Ld=new b,os=new b,Cd=new b;class gy extends Re{constructor(e,t,i){super(),this.light=e,this.light.updateMatrixWorld(),this.matrix=e.matrixWorld,this.matrixAutoUpdate=!1,this.color=i,t===void 0&&(t=1);let r=new we;r.setAttribute("position",new le([-t,t,0,t,t,0,t,-t,0,-t,-t,0,-t,t,0],3));const n=new st({fog:!1,toneMapped:!1});this.lightPlane=new ei(r,n),this.add(this.lightPlane),r=new we,r.setAttribute("position",new le([0,0,0,0,0,1],3)),this.targetLine=new ei(r,n),this.add(this.targetLine),this.update()}dispose(){this.lightPlane.geometry.dispose(),this.lightPlane.material.dispose(),this.targetLine.geometry.dispose(),this.targetLine.material.dispose()}update(){Ld.setFromMatrixPosition(this.light.matrixWorld),os.setFromMatrixPosition(this.light.target.matrixWorld),Cd.subVectors(os,Ld),this.lightPlane.lookAt(os),this.color!==void 0?(this.lightPlane.material.color.set(this.color),this.targetLine.material.color.set(this.color)):(this.lightPlane.material.color.copy(this.light.color),this.targetLine.material.color.copy(this.light.color)),this.targetLine.lookAt(os),this.targetLine.scale.z=Cd.length()}}const ls=new b,je=new bn;class vy extends xt{constructor(e){const t=new we,i=new st({color:16777215,vertexColors:!0,toneMapped:!1}),r=[],n=[],s={},o=new ie(16755200),l=new ie(16711680),c=new ie(43775),h=new ie(16777215),d=new ie(3355443);u("n1","n2",o),u("n2","n4",o),u("n4","n3",o),u("n3","n1",o),u("f1","f2",o),u("f2","f4",o),u("f4","f3",o),u("f3","f1",o),u("n1","f1",o),u("n2","f2",o),u("n3","f3",o),u("n4","f4",o),u("p","n1",l),u("p","n2",l),u("p","n3",l),u("p","n4",l),u("u1","u2",c),u("u2","u3",c),u("u3","u1",c),u("c","t",h),u("p","c",d),u("cn1","cn2",d),u("cn3","cn4",d),u("cf1","cf2",d),u("cf3","cf4",d);function u(g,v,x){p(g,x),p(v,x)}function p(g,v){r.push(0,0,0),n.push(v.r,v.g,v.b),s[g]===void 0&&(s[g]=[]),s[g].push(r.length/3-1)}t.setAttribute("position",new le(r,3)),t.setAttribute("color",new le(n,3)),super(t,i),this.type="CameraHelper",this.camera=e,this.camera.updateProjectionMatrix&&this.camera.updateProjectionMatrix(),this.matrix=e.matrixWorld,this.matrixAutoUpdate=!1,this.pointMap=s,this.update()}update(){const e=this.geometry,t=this.pointMap,i=1,r=1;je.projectionMatrixInverse.copy(this.camera.projectionMatrixInverse),Ze("c",t,e,je,0,0,-1),Ze("t",t,e,je,0,0,1),Ze("n1",t,e,je,-i,-r,-1),Ze("n2",t,e,je,i,-r,-1),Ze("n3",t,e,je,-i,r,-1),Ze("n4",t,e,je,i,r,-1),Ze("f1",t,e,je,-i,-r,1),Ze("f2",t,e,je,i,-r,1),Ze("f3",t,e,je,-i,r,1),Ze("f4",t,e,je,i,r,1),Ze("u1",t,e,je,i*.7,r*1.1,-1),Ze("u2",t,e,je,-i*.7,r*1.1,-1),Ze("u3",t,e,je,0,r*2,-1),Ze("cf1",t,e,je,-i,0,1),Ze("cf2",t,e,je,i,0,1),Ze("cf3",t,e,je,0,-r,1),Ze("cf4",t,e,je,0,r,1),Ze("cn1",t,e,je,-i,0,-1),Ze("cn2",t,e,je,i,0,-1),Ze("cn3",t,e,je,0,-r,-1),Ze("cn4",t,e,je,0,r,-1),e.getAttribute("position").needsUpdate=!0}dispose(){this.geometry.dispose(),this.material.dispose()}}function Ze(a,e,t,i,r,n,s){ls.set(r,n,s).unproject(i);const o=e[a];if(o!==void 0){const l=t.getAttribute("position");for(let c=0,h=o.length;c<h;c++)l.setXYZ(o[c],ls.x,ls.y,ls.z)}}const cs=new wt;class Rd extends xt{constructor(e,t=16776960){const i=new Uint16Array([0,1,1,2,2,3,3,0,4,5,5,6,6,7,7,4,0,4,1,5,2,6,3,7]),r=new Float32Array(24),n=new we;n.setIndex(new De(i,1)),n.setAttribute("position",new De(r,3)),super(n,new st({color:t,toneMapped:!1})),this.object=e,this.type="BoxHelper",this.matrixAutoUpdate=!1,this.update()}update(e){if(e!==void 0&&console.warn("THREE.BoxHelper: .update() has no longer arguments."),this.object!==void 0&&cs.setFromObject(this.object),cs.isEmpty())return;const t=cs.min,i=cs.max,r=this.geometry.attributes.position,n=r.array;n[0]=i.x,n[1]=i.y,n[2]=i.z,n[3]=t.x,n[4]=i.y,n[5]=i.z,n[6]=t.x,n[7]=t.y,n[8]=i.z,n[9]=i.x,n[10]=t.y,n[11]=i.z,n[12]=i.x,n[13]=i.y,n[14]=t.z,n[15]=t.x,n[16]=i.y,n[17]=t.z,n[18]=t.x,n[19]=t.y,n[20]=t.z,n[21]=i.x,n[22]=t.y,n[23]=t.z,r.needsUpdate=!0,this.geometry.computeBoundingSphere()}setFromObject(e){return this.object=e,this.update(),this}copy(e){return xt.prototype.copy.call(this,e),this.object=e.object,this}}class yy extends xt{constructor(e,t=16776960){const i=new Uint16Array([0,1,1,2,2,3,3,0,4,5,5,6,6,7,7,4,0,4,1,5,2,6,3,7]),r=[1,1,1,-1,1,1,-1,-1,1,1,-1,1,1,1,-1,-1,1,-1,-1,-1,-1,1,-1,-1],n=new we;n.setIndex(new De(i,1)),n.setAttribute("position",new le(r,3)),super(n,new st({color:t,toneMapped:!1})),this.box=e,this.type="Box3Helper",this.geometry.computeBoundingSphere()}updateMatrixWorld(e){const t=this.box;t.isEmpty()||(t.getCenter(this.position),t.getSize(this.scale),this.scale.multiplyScalar(.5),super.updateMatrixWorld(e))}}class xy extends ei{constructor(e,t=1,i=16776960){const r=i,n=[1,-1,1,-1,1,1,-1,-1,1,1,1,1,-1,1,1,-1,-1,1,1,-1,1,1,1,1,0,0,1,0,0,0],s=new we;s.setAttribute("position",new le(n,3)),s.computeBoundingSphere(),super(s,new st({color:r,toneMapped:!1})),this.type="PlaneHelper",this.plane=e,this.size=t;const o=[1,1,1,-1,1,1,-1,-1,1,1,1,1,-1,-1,1,1,-1,1],l=new we;l.setAttribute("position",new le(o,3)),l.computeBoundingSphere(),this.add(new Qe(l,new Qt({color:r,opacity:.2,transparent:!0,depthWrite:!1,toneMapped:!1})))}updateMatrixWorld(e){let t=-this.plane.constant;Math.abs(t)<1e-8&&(t=1e-8),this.scale.set(.5*this.size,.5*this.size,t),this.children[0].material.side=t<0?Xe:Ri,this.lookAt(this.plane.normal),super.updateMatrixWorld(e)}}const Pd=new b;let hs,fl;class _y extends Re{constructor(e=new b(0,0,1),t=new b(0,0,0),i=1,r=16776960,n=i*.2,s=n*.2){super(),this.type="ArrowHelper",hs===void 0&&(hs=new we,hs.setAttribute("position",new le([0,0,0,0,1,0],3)),fl=new Si(0,.5,1,5,1),fl.translate(0,-.5,0)),this.position.copy(t),this.line=new ei(hs,new st({color:r,toneMapped:!1})),this.line.matrixAutoUpdate=!1,this.add(this.line),this.cone=new Qe(fl,new Qt({color:r,toneMapped:!1})),this.cone.matrixAutoUpdate=!1,this.add(this.cone),this.setDirection(e),this.setLength(i,n,s)}setDirection(e){if(e.y>.99999)this.quaternion.set(0,0,0,1);else if(e.y<-.99999)this.quaternion.set(1,0,0,0);else{Pd.set(e.z,0,-e.x).normalize();const t=Math.acos(e.y);this.quaternion.setFromAxisAngle(Pd,t)}}setLength(e,t=e*.2,i=t*.2){this.line.scale.set(1,Math.max(1e-4,e-t),1),this.line.updateMatrix(),this.cone.scale.set(i,t,i),this.cone.position.y=e,this.cone.updateMatrix()}setColor(e){this.line.material.color.set(e),this.cone.material.color.set(e)}copy(e){return super.copy(e,!1),this.line.copy(e.line),this.cone.copy(e.cone),this}}class Id extends xt{constructor(e=1){const t=[0,0,0,e,0,0,0,0,0,0,e,0,0,0,0,0,0,e],i=[1,0,0,1,.6,0,0,1,0,.6,1,0,0,0,1,0,.6,1],r=new we;r.setAttribute("position",new le(t,3)),r.setAttribute("color",new le(i,3));const n=new st({vertexColors:!0,toneMapped:!1});super(r,n),this.type="AxesHelper"}setColors(e,t,i){const r=new ie,n=this.geometry.attributes.color.array;return r.set(e),r.toArray(n,0),r.toArray(n,3),r.set(t),r.toArray(n,6),r.toArray(n,9),r.set(i),r.toArray(n,12),r.toArray(n,15),this.geometry.attributes.color.needsUpdate=!0,this}dispose(){this.geometry.dispose(),this.material.dispose()}}class wy{constructor(){this.type="ShapePath",this.color=new ie,this.subPaths=[],this.currentPath=null}moveTo(e,t){return this.currentPath=new Fn,this.subPaths.push(this.currentPath),this.currentPath.moveTo(e,t),this}lineTo(e,t){return this.currentPath.lineTo(e,t),this}quadraticCurveTo(e,t,i,r){return this.currentPath.quadraticCurveTo(e,t,i,r),this}bezierCurveTo(e,t,i,r,n,s){return this.currentPath.bezierCurveTo(e,t,i,r,n,s),this}splineThru(e){return this.currentPath.splineThru(e),this}toShapes(e,t){function i(m){const w=[];for(let y=0,M=m.length;y<M;y++){const A=m[y],_=new Ut;_.curves=A.curves,w.push(_)}return w}function r(m,w){const y=w.length;let M=!1;for(let A=y-1,_=0;_<y;A=_++){let L=w[A],N=w[_],R=N.x-L.x,C=N.y-L.y;if(Math.abs(C)>Number.EPSILON){if(C<0&&(L=w[_],R=-R,N=w[A],C=-C),m.y<L.y||m.y>N.y)continue;if(m.y===L.y){if(m.x===L.x)return!0}else{const Y=C*(m.x-L.x)-R*(m.y-L.y);if(Y===0)return!0;if(Y<0)continue;M=!M}}else{if(m.y!==L.y)continue;if(N.x<=m.x&&m.x<=L.x||L.x<=m.x&&m.x<=N.x)return!0}}return M}const n=kt.isClockWise,s=this.subPaths;if(s.length===0)return[];if(t===!0)return i(s);let o,l,c;const h=[];if(s.length===1)return l=s[0],c=new Ut,c.curves=l.curves,h.push(c),h;let d=!n(s[0].getPoints());d=e?!d:d;const u=[],p=[];let g=[],v=0,x;p[v]=void 0,g[v]=[];for(let m=0,w=s.length;m<w;m++)l=s[m],x=l.getPoints(),o=n(x),o=e?!o:o,o?(!d&&p[v]&&v++,p[v]={s:new Ut,p:x},p[v].s.curves=l.curves,d&&v++,g[v]=[]):g[v].push({h:l,p:x[0]});if(!p[0])return i(s);if(p.length>1){let m=!1;const w=[];for(let y=0,M=p.length;y<M;y++)u[y]=[];for(let y=0,M=p.length;y<M;y++){const A=g[y];for(let _=0;_<A.length;_++){const L=A[_];let N=!0;for(let R=0;R<p.length;R++)r(L.p,p[R].p)&&(y!==R&&w.push({froms:y,tos:R,hole:_}),N?(N=!1,u[R].push(L)):m=!0);N&&u[y].push(L)}}w.length>0&&(m||(g=u))}let f;for(let m=0,w=p.length;m<w;m++){c=p[m].s,h.push(c),f=g[m];for(let y=0,M=f.length;y<M;y++)c.holes.push(f[y].h)}return h}}const Dd=new Float32Array(1),by=new Int32Array(Dd.buffer);class My{static toHalfFloat(e){e>65504&&(console.warn("THREE.DataUtils.toHalfFloat(): value exceeds 65504."),e=65504),Dd[0]=e;const t=by[0];let i=t>>16&32768,r=t>>12&2047;const n=t>>23&255;return n<103?i:n>142?(i|=31744,i|=(n==255?0:1)&&t&8388607,i):n<113?(r|=2048,i|=(r>>114-n)+(r>>113-n&1),i):(i|=n-112<<10|r>>1,i+=r&1,i)}}const Sy=0,Ty=1,Ey=0,Ay=1,Ly=2;function Cy(a){return console.warn("THREE.MeshFaceMaterial has been removed. Use an Array instead."),a}function Ry(a=[]){return console.warn("THREE.MultiMaterial has been removed. Use an Array instead."),a.isMultiMaterial=!0,a.materials=a,a.clone=function(){return a.slice()},a}function Py(a,e){return console.warn("THREE.PointCloud has been renamed to THREE.Points."),new Pn(a,e)}function Iy(a){return console.warn("THREE.Particle has been renamed to THREE.Sprite."),new Fa(a)}function Dy(a,e){return console.warn("THREE.ParticleSystem has been renamed to THREE.Points."),new Pn(a,e)}function Ny(a){return console.warn("THREE.PointCloudMaterial has been renamed to THREE.PointsMaterial."),new Qi(a)}function By(a){return console.warn("THREE.ParticleBasicMaterial has been renamed to THREE.PointsMaterial."),new Qi(a)}function Fy(a){return console.warn("THREE.ParticleSystemMaterial has been renamed to THREE.PointsMaterial."),new Qi(a)}function Oy(a,e,t){return console.warn("THREE.Vertex has been removed. Use THREE.Vector3 instead."),new b(a,e,t)}function zy(a,e){return console.warn("THREE.DynamicBufferAttribute has been removed. Use new THREE.BufferAttribute().setUsage( THREE.DynamicDrawUsage ) instead."),new De(a,e).setUsage(vr)}function Uy(a,e){return console.warn("THREE.Int8Attribute has been removed. Use new THREE.Int8BufferAttribute() instead."),new mh(a,e)}function Gy(a,e){return console.warn("THREE.Uint8Attribute has been removed. Use new THREE.Uint8BufferAttribute() instead."),new fh(a,e)}function Hy(a,e){return console.warn("THREE.Uint8ClampedAttribute has been removed. Use new THREE.Uint8ClampedBufferAttribute() instead."),new gh(a,e)}function ky(a,e){return console.warn("THREE.Int16Attribute has been removed. Use new THREE.Int16BufferAttribute() instead."),new vh(a,e)}function Vy(a,e){return console.warn("THREE.Uint16Attribute has been removed. Use new THREE.Uint16BufferAttribute() instead."),new ma(a,e)}function Wy(a,e){return console.warn("THREE.Int32Attribute has been removed. Use new THREE.Int32BufferAttribute() instead."),new yh(a,e)}function jy(a,e){return console.warn("THREE.Uint32Attribute has been removed. Use new THREE.Uint32BufferAttribute() instead."),new fa(a,e)}function qy(a,e){return console.warn("THREE.Float32Attribute has been removed. Use new THREE.Float32BufferAttribute() instead."),new le(a,e)}function Xy(a,e){return console.warn("THREE.Float64Attribute has been removed. Use new THREE.Float64BufferAttribute() instead."),new _h(a,e)}St.create=function(a,e){return console.log("THREE.Curve.create() has been deprecated"),a.prototype=Object.create(St.prototype),a.prototype.constructor=a,a.prototype.getPoint=e,a},Fn.prototype.fromPoints=function(a){return console.warn("THREE.Path: .fromPoints() has been renamed to .setFromPoints()."),this.setFromPoints(a)};function Yy(a){return console.warn("THREE.AxisHelper has been renamed to THREE.AxesHelper."),new Id(a)}function Zy(a,e){return console.warn("THREE.BoundingBoxHelper has been deprecated. Creating a THREE.BoxHelper instead."),new Rd(a,e)}function Jy(a,e){return console.warn("THREE.EdgesHelper has been removed. Use THREE.EdgesGeometry instead."),new xt(new Ro(a.geometry),new st({color:e!==void 0?e:16777215}))}Ad.prototype.setColors=function(){console.error("THREE.GridHelper: setColors() has been deprecated, pass them in the constructor instead.")},Md.prototype.update=function(){console.error("THREE.SkeletonHelper: update() no longer needs to be called.")};function Ky(a,e){return console.warn("THREE.WireframeHelper has been removed. Use THREE.WireframeGeometry instead."),new xt(new Ho(a.geometry),new st({color:e!==void 0?e:16777215}))}yt.prototype.extractUrlBase=function(a){return console.warn("THREE.Loader: .extractUrlBase() has been deprecated. Use THREE.LoaderUtils.extractUrlBase() instead."),rs.extractUrlBase(a)},yt.Handlers={add:function(){console.error("THREE.Loader: Handlers.add() has been removed. Use LoadingManager.addHandler() instead.")},get:function(){console.error("THREE.Loader: Handlers.get() has been removed. Use LoadingManager.getHandler() instead.")}};function Qy(a){return console.warn("THREE.XHRLoader has been renamed to THREE.FileLoader."),new Gt(a)}function $y(a){return console.warn("THREE.BinaryTextureLoader has been renamed to THREE.DataTextureLoader."),new Vu(a)}jr.prototype.center=function(a){return console.warn("THREE.Box2: .center() has been renamed to .getCenter()."),this.getCenter(a)},jr.prototype.empty=function(){return console.warn("THREE.Box2: .empty() has been renamed to .isEmpty()."),this.isEmpty()},jr.prototype.isIntersectionBox=function(a){return console.warn("THREE.Box2: .isIntersectionBox() has been renamed to .intersectsBox()."),this.intersectsBox(a)},jr.prototype.size=function(a){return console.warn("THREE.Box2: .size() has been renamed to .getSize()."),this.getSize(a)},wt.prototype.center=function(a){return console.warn("THREE.Box3: .center() has been renamed to .getCenter()."),this.getCenter(a)},wt.prototype.empty=function(){return console.warn("THREE.Box3: .empty() has been renamed to .isEmpty()."),this.isEmpty()},wt.prototype.isIntersectionBox=function(a){return console.warn("THREE.Box3: .isIntersectionBox() has been renamed to .intersectsBox()."),this.intersectsBox(a)},wt.prototype.isIntersectionSphere=function(a){return console.warn("THREE.Box3: .isIntersectionSphere() has been renamed to .intersectsSphere()."),this.intersectsSphere(a)},wt.prototype.size=function(a){return console.warn("THREE.Box3: .size() has been renamed to .getSize()."),this.getSize(a)},ui.prototype.empty=function(){return console.warn("THREE.Sphere: .empty() has been renamed to .isEmpty()."),this.isEmpty()},Mn.prototype.setFromMatrix=function(a){return console.warn("THREE.Frustum: .setFromMatrix() has been renamed to .setFromProjectionMatrix()."),this.setFromProjectionMatrix(a)},wd.prototype.center=function(a){return console.warn("THREE.Line3: .center() has been renamed to .getCenter()."),this.getCenter(a)},et.prototype.flattenToArrayOffset=function(a,e){return console.warn("THREE.Matrix3: .flattenToArrayOffset() has been deprecated. Use .toArray() instead."),this.toArray(a,e)},et.prototype.multiplyVector3=function(a){return console.warn("THREE.Matrix3: .multiplyVector3() has been removed. Use vector.applyMatrix3( matrix ) instead."),a.applyMatrix3(this)},et.prototype.multiplyVector3Array=function(){console.error("THREE.Matrix3: .multiplyVector3Array() has been removed.")},et.prototype.applyToBufferAttribute=function(a){return console.warn("THREE.Matrix3: .applyToBufferAttribute() has been removed. Use attribute.applyMatrix3( matrix ) instead."),a.applyMatrix3(this)},et.prototype.applyToVector3Array=function(){console.error("THREE.Matrix3: .applyToVector3Array() has been removed.")},et.prototype.getInverse=function(a){return console.warn("THREE.Matrix3: .getInverse() has been removed. Use matrixInv.copy( matrix ).invert(); instead."),this.copy(a).invert()},ue.prototype.extractPosition=function(a){return console.warn("THREE.Matrix4: .extractPosition() has been renamed to .copyPosition()."),this.copyPosition(a)},ue.prototype.flattenToArrayOffset=function(a,e){return console.warn("THREE.Matrix4: .flattenToArrayOffset() has been deprecated. Use .toArray() instead."),this.toArray(a,e)},ue.prototype.getPosition=function(){return console.warn("THREE.Matrix4: .getPosition() has been removed. Use Vector3.setFromMatrixPosition( matrix ) instead."),new b().setFromMatrixColumn(this,3)},ue.prototype.setRotationFromQuaternion=function(a){return console.warn("THREE.Matrix4: .setRotationFromQuaternion() has been renamed to .makeRotationFromQuaternion()."),this.makeRotationFromQuaternion(a)},ue.prototype.multiplyToArray=function(){console.warn("THREE.Matrix4: .multiplyToArray() has been removed.")},ue.prototype.multiplyVector3=function(a){return console.warn("THREE.Matrix4: .multiplyVector3() has been removed. Use vector.applyMatrix4( matrix ) instead."),a.applyMatrix4(this)},ue.prototype.multiplyVector4=function(a){return console.warn("THREE.Matrix4: .multiplyVector4() has been removed. Use vector.applyMatrix4( matrix ) instead."),a.applyMatrix4(this)},ue.prototype.multiplyVector3Array=function(){console.error("THREE.Matrix4: .multiplyVector3Array() has been removed.")},ue.prototype.rotateAxis=function(a){console.warn("THREE.Matrix4: .rotateAxis() has been removed. Use Vector3.transformDirection( matrix ) instead."),a.transformDirection(this)},ue.prototype.crossVector=function(a){return console.warn("THREE.Matrix4: .crossVector() has been removed. Use vector.applyMatrix4( matrix ) instead."),a.applyMatrix4(this)},ue.prototype.translate=function(){console.error("THREE.Matrix4: .translate() has been removed.")},ue.prototype.rotateX=function(){console.error("THREE.Matrix4: .rotateX() has been removed.")},ue.prototype.rotateY=function(){console.error("THREE.Matrix4: .rotateY() has been removed.")},ue.prototype.rotateZ=function(){console.error("THREE.Matrix4: .rotateZ() has been removed.")},ue.prototype.rotateByAxis=function(){console.error("THREE.Matrix4: .rotateByAxis() has been removed.")},ue.prototype.applyToBufferAttribute=function(a){return console.warn("THREE.Matrix4: .applyToBufferAttribute() has been removed. Use attribute.applyMatrix4( matrix ) instead."),a.applyMatrix4(this)},ue.prototype.applyToVector3Array=function(){console.error("THREE.Matrix4: .applyToVector3Array() has been removed.")},ue.prototype.makeFrustum=function(a,e,t,i,r,n){return console.warn("THREE.Matrix4: .makeFrustum() has been removed. Use .makePerspective( left, right, top, bottom, near, far ) instead."),this.makePerspective(a,e,i,t,r,n)},ue.prototype.getInverse=function(a){return console.warn("THREE.Matrix4: .getInverse() has been removed. Use matrixInv.copy( matrix ).invert(); instead."),this.copy(a).invert()},Ot.prototype.isIntersectionLine=function(a){return console.warn("THREE.Plane: .isIntersectionLine() has been renamed to .intersectsLine()."),this.intersectsLine(a)},dt.prototype.multiplyVector3=function(a){return console.warn("THREE.Quaternion: .multiplyVector3() has been removed. Use is now vector.applyQuaternion( quaternion ) instead."),a.applyQuaternion(this)},dt.prototype.inverse=function(){return console.warn("THREE.Quaternion: .inverse() has been renamed to invert()."),this.invert()},pi.prototype.isIntersectionBox=function(a){return console.warn("THREE.Ray: .isIntersectionBox() has been renamed to .intersectsBox()."),this.intersectsBox(a)},pi.prototype.isIntersectionPlane=function(a){return console.warn("THREE.Ray: .isIntersectionPlane() has been renamed to .intersectsPlane()."),this.intersectsPlane(a)},pi.prototype.isIntersectionSphere=function(a){return console.warn("THREE.Ray: .isIntersectionSphere() has been renamed to .intersectsSphere()."),this.intersectsSphere(a)},Je.prototype.area=function(){return console.warn("THREE.Triangle: .area() has been renamed to .getArea()."),this.getArea()},Je.prototype.barycoordFromPoint=function(a,e){return console.warn("THREE.Triangle: .barycoordFromPoint() has been renamed to .getBarycoord()."),this.getBarycoord(a,e)},Je.prototype.midpoint=function(a){return console.warn("THREE.Triangle: .midpoint() has been renamed to .getMidpoint()."),this.getMidpoint(a)},Je.prototypenormal=function(a){return console.warn("THREE.Triangle: .normal() has been renamed to .getNormal()."),this.getNormal(a)},Je.prototype.plane=function(a){return console.warn("THREE.Triangle: .plane() has been renamed to .getPlane()."),this.getPlane(a)},Je.barycoordFromPoint=function(a,e,t,i,r){return console.warn("THREE.Triangle: .barycoordFromPoint() has been renamed to .getBarycoord()."),Je.getBarycoord(a,e,t,i,r)},Je.normal=function(a,e,t,i){return console.warn("THREE.Triangle: .normal() has been renamed to .getNormal()."),Je.getNormal(a,e,t,i)},Ut.prototype.extractAllPoints=function(a){return console.warn("THREE.Shape: .extractAllPoints() has been removed. Use .extractPoints() instead."),this.extractPoints(a)},Ut.prototype.extrude=function(a){return console.warn("THREE.Shape: .extrude() has been removed. Use ExtrudeGeometry() instead."),new Vt(this,a)},Ut.prototype.makeGeometry=function(a){return console.warn("THREE.Shape: .makeGeometry() has been removed. Use ShapeGeometry() instead."),new cr(this,a)},j.prototype.fromAttribute=function(a,e,t){return console.warn("THREE.Vector2: .fromAttribute() has been renamed to .fromBufferAttribute()."),this.fromBufferAttribute(a,e,t)},j.prototype.distanceToManhattan=function(a){return console.warn("THREE.Vector2: .distanceToManhattan() has been renamed to .manhattanDistanceTo()."),this.manhattanDistanceTo(a)},j.prototype.lengthManhattan=function(){return console.warn("THREE.Vector2: .lengthManhattan() has been renamed to .manhattanLength()."),this.manhattanLength()},b.prototype.setEulerFromRotationMatrix=function(){console.error("THREE.Vector3: .setEulerFromRotationMatrix() has been removed. Use Euler.setFromRotationMatrix() instead.")},b.prototype.setEulerFromQuaternion=function(){console.error("THREE.Vector3: .setEulerFromQuaternion() has been removed. Use Euler.setFromQuaternion() instead.")},b.prototype.getPositionFromMatrix=function(a){return console.warn("THREE.Vector3: .getPositionFromMatrix() has been renamed to .setFromMatrixPosition()."),this.setFromMatrixPosition(a)},b.prototype.getScaleFromMatrix=function(a){return console.warn("THREE.Vector3: .getScaleFromMatrix() has been renamed to .setFromMatrixScale()."),this.setFromMatrixScale(a)},b.prototype.getColumnFromMatrix=function(a,e){return console.warn("THREE.Vector3: .getColumnFromMatrix() has been renamed to .setFromMatrixColumn()."),this.setFromMatrixColumn(e,a)},b.prototype.applyProjection=function(a){return console.warn("THREE.Vector3: .applyProjection() has been removed. Use .applyMatrix4( m ) instead."),this.applyMatrix4(a)},b.prototype.fromAttribute=function(a,e,t){return console.warn("THREE.Vector3: .fromAttribute() has been renamed to .fromBufferAttribute()."),this.fromBufferAttribute(a,e,t)},b.prototype.distanceToManhattan=function(a){return console.warn("THREE.Vector3: .distanceToManhattan() has been renamed to .manhattanDistanceTo()."),this.manhattanDistanceTo(a)},b.prototype.lengthManhattan=function(){return console.warn("THREE.Vector3: .lengthManhattan() has been renamed to .manhattanLength()."),this.manhattanLength()},ze.prototype.fromAttribute=function(a,e,t){return console.warn("THREE.Vector4: .fromAttribute() has been renamed to .fromBufferAttribute()."),this.fromBufferAttribute(a,e,t)},ze.prototype.lengthManhattan=function(){return console.warn("THREE.Vector4: .lengthManhattan() has been renamed to .manhattanLength()."),this.manhattanLength()},Re.prototype.getChildByName=function(a){return console.warn("THREE.Object3D: .getChildByName() has been renamed to .getObjectByName()."),this.getObjectByName(a)},Re.prototype.renderDepth=function(){console.warn("THREE.Object3D: .renderDepth has been removed. Use .renderOrder, instead.")},Re.prototype.translate=function(a,e){return console.warn("THREE.Object3D: .translate() has been removed. Use .translateOnAxis( axis, distance ) instead."),this.translateOnAxis(e,a)},Re.prototype.getWorldRotation=function(){console.error("THREE.Object3D: .getWorldRotation() has been removed. Use THREE.Object3D.getWorldQuaternion( target ) instead.")},Re.prototype.applyMatrix=function(a){return console.warn("THREE.Object3D: .applyMatrix() has been renamed to .applyMatrix4()."),this.applyMatrix4(a)},Object.defineProperties(Re.prototype,{eulerOrder:{get:function(){return console.warn("THREE.Object3D: .eulerOrder is now .rotation.order."),this.rotation.order},set:function(a){console.warn("THREE.Object3D: .eulerOrder is now .rotation.order."),this.rotation.order=a}},useQuaternion:{get:function(){console.warn("THREE.Object3D: .useQuaternion has been removed. The library now uses quaternions by default.")},set:function(){console.warn("THREE.Object3D: .useQuaternion has been removed. The library now uses quaternions by default.")}}}),Qe.prototype.setDrawMode=function(){console.error("THREE.Mesh: .setDrawMode() has been removed. The renderer now always assumes THREE.TrianglesDrawMode. Transform your geometry via BufferGeometryUtils.toTrianglesDrawMode() if necessary.")},Object.defineProperties(Qe.prototype,{drawMode:{get:function(){return console.error("THREE.Mesh: .drawMode has been removed. The renderer now always assumes THREE.TrianglesDrawMode."),jc},set:function(){console.error("THREE.Mesh: .drawMode has been removed. The renderer now always assumes THREE.TrianglesDrawMode. Transform your geometry via BufferGeometryUtils.toTrianglesDrawMode() if necessary.")}}}),Ua.prototype.initBones=function(){console.error("THREE.SkinnedMesh: initBones() has been removed.")},at.prototype.setLens=function(a,e){console.warn("THREE.PerspectiveCamera.setLens is deprecated. Use .setFocalLength and .filmGauge for a photographic setup."),e!==void 0&&(this.filmGauge=e),this.setFocalLength(a)},Object.defineProperties(Bt.prototype,{onlyShadow:{set:function(){console.warn("THREE.Light: .onlyShadow has been removed.")}},shadowCameraFov:{set:function(a){console.warn("THREE.Light: .shadowCameraFov is now .shadow.camera.fov."),this.shadow.camera.fov=a}},shadowCameraLeft:{set:function(a){console.warn("THREE.Light: .shadowCameraLeft is now .shadow.camera.left."),this.shadow.camera.left=a}},shadowCameraRight:{set:function(a){console.warn("THREE.Light: .shadowCameraRight is now .shadow.camera.right."),this.shadow.camera.right=a}},shadowCameraTop:{set:function(a){console.warn("THREE.Light: .shadowCameraTop is now .shadow.camera.top."),this.shadow.camera.top=a}},shadowCameraBottom:{set:function(a){console.warn("THREE.Light: .shadowCameraBottom is now .shadow.camera.bottom."),this.shadow.camera.bottom=a}},shadowCameraNear:{set:function(a){console.warn("THREE.Light: .shadowCameraNear is now .shadow.camera.near."),this.shadow.camera.near=a}},shadowCameraFar:{set:function(a){console.warn("THREE.Light: .shadowCameraFar is now .shadow.camera.far."),this.shadow.camera.far=a}},shadowCameraVisible:{set:function(){console.warn("THREE.Light: .shadowCameraVisible has been removed. Use new THREE.CameraHelper( light.shadow.camera ) instead.")}},shadowBias:{set:function(a){console.warn("THREE.Light: .shadowBias is now .shadow.bias."),this.shadow.bias=a}},shadowDarkness:{set:function(){console.warn("THREE.Light: .shadowDarkness has been removed.")}},shadowMapWidth:{set:function(a){console.warn("THREE.Light: .shadowMapWidth is now .shadow.mapSize.width."),this.shadow.mapSize.width=a}},shadowMapHeight:{set:function(a){console.warn("THREE.Light: .shadowMapHeight is now .shadow.mapSize.height."),this.shadow.mapSize.height=a}}}),Object.defineProperties(De.prototype,{length:{get:function(){return console.warn("THREE.BufferAttribute: .length has been deprecated. Use .count instead."),this.array.length}},dynamic:{get:function(){return console.warn("THREE.BufferAttribute: .dynamic has been deprecated. Use .usage instead."),this.usage===vr},set:function(){console.warn("THREE.BufferAttribute: .dynamic has been deprecated. Use .usage instead."),this.setUsage(vr)}}}),De.prototype.setDynamic=function(a){return console.warn("THREE.BufferAttribute: .setDynamic() has been deprecated. Use .setUsage() instead."),this.setUsage(a===!0?vr:gr),this},De.prototype.copyIndicesArray=function(){console.error("THREE.BufferAttribute: .copyIndicesArray() has been removed.")},De.prototype.setArray=function(){console.error("THREE.BufferAttribute: .setArray has been removed. Use BufferGeometry .setAttribute to replace/resize attribute buffers")},we.prototype.addIndex=function(a){console.warn("THREE.BufferGeometry: .addIndex() has been renamed to .setIndex()."),this.setIndex(a)},we.prototype.addAttribute=function(a,e){return console.warn("THREE.BufferGeometry: .addAttribute() has been renamed to .setAttribute()."),!(e&&e.isBufferAttribute)&&!(e&&e.isInterleavedBufferAttribute)?(console.warn("THREE.BufferGeometry: .addAttribute() now expects ( name, attribute )."),this.setAttribute(a,new De(arguments[1],arguments[2]))):a==="index"?(console.warn("THREE.BufferGeometry.addAttribute: Use .setIndex() for index attribute."),this.setIndex(e),this):this.setAttribute(a,e)},we.prototype.addDrawCall=function(a,e,t){t!==void 0&&console.warn("THREE.BufferGeometry: .addDrawCall() no longer supports indexOffset."),console.warn("THREE.BufferGeometry: .addDrawCall() is now .addGroup()."),this.addGroup(a,e)},we.prototype.clearDrawCalls=function(){console.warn("THREE.BufferGeometry: .clearDrawCalls() is now .clearGroups()."),this.clearGroups()},we.prototype.computeOffsets=function(){console.warn("THREE.BufferGeometry: .computeOffsets() has been removed.")},we.prototype.removeAttribute=function(a){return console.warn("THREE.BufferGeometry: .removeAttribute() has been renamed to .deleteAttribute()."),this.deleteAttribute(a)},we.prototype.applyMatrix=function(a){return console.warn("THREE.BufferGeometry: .applyMatrix() has been renamed to .applyMatrix4()."),this.applyMatrix4(a)},Object.defineProperties(we.prototype,{drawcalls:{get:function(){return console.error("THREE.BufferGeometry: .drawcalls has been renamed to .groups."),this.groups}},offsets:{get:function(){return console.warn("THREE.BufferGeometry: .offsets has been renamed to .groups."),this.groups}}}),Zi.prototype.setDynamic=function(a){return console.warn("THREE.InterleavedBuffer: .setDynamic() has been deprecated. Use .setUsage() instead."),this.setUsage(a===!0?vr:gr),this},Zi.prototype.setArray=function(){console.error("THREE.InterleavedBuffer: .setArray has been removed. Use BufferGeometry .setAttribute to replace/resize attribute buffers")},Vt.prototype.getArrays=function(){console.error("THREE.ExtrudeGeometry: .getArrays() has been removed.")},Vt.prototype.addShapeList=function(){console.error("THREE.ExtrudeGeometry: .addShapeList() has been removed.")},Vt.prototype.addShape=function(){console.error("THREE.ExtrudeGeometry: .addShape() has been removed.")},Ia.prototype.dispose=function(){console.error("THREE.Scene: .dispose() has been removed.")},ds.prototype.onUpdate=function(){return console.warn("THREE.Uniform: .onUpdate() has been removed. Use object.onBeforeRender() instead."),this},Object.defineProperties(rt.prototype,{wrapAround:{get:function(){console.warn("THREE.Material: .wrapAround has been removed.")},set:function(){console.warn("THREE.Material: .wrapAround has been removed.")}},overdraw:{get:function(){console.warn("THREE.Material: .overdraw has been removed.")},set:function(){console.warn("THREE.Material: .overdraw has been removed.")}},wrapRGB:{get:function(){return console.warn("THREE.Material: .wrapRGB has been removed."),new ie}},shading:{get:function(){console.error("THREE."+this.type+": .shading has been removed. Use the boolean .flatShading instead.")},set:function(a){console.warn("THREE."+this.type+": .shading has been removed. Use the boolean .flatShading instead."),this.flatShading=a===gs}},stencilMask:{get:function(){return console.warn("THREE."+this.type+": .stencilMask has been removed. Use .stencilFuncMask instead."),this.stencilFuncMask},set:function(a){console.warn("THREE."+this.type+": .stencilMask has been removed. Use .stencilFuncMask instead."),this.stencilFuncMask=a}},vertexTangents:{get:function(){console.warn("THREE."+this.type+": .vertexTangents has been removed.")},set:function(){console.warn("THREE."+this.type+": .vertexTangents has been removed.")}}}),Object.defineProperties($t.prototype,{derivatives:{get:function(){return console.warn("THREE.ShaderMaterial: .derivatives has been moved to .extensions.derivatives."),this.extensions.derivatives},set:function(a){console.warn("THREE. ShaderMaterial: .derivatives has been moved to .extensions.derivatives."),this.extensions.derivatives=a}}}),Ue.prototype.clearTarget=function(a,e,t,i){console.warn("THREE.WebGLRenderer: .clearTarget() has been deprecated. Use .setRenderTarget() and .clear() instead."),this.setRenderTarget(a),this.clear(e,t,i)},Ue.prototype.animate=function(a){console.warn("THREE.WebGLRenderer: .animate() is now .setAnimationLoop()."),this.setAnimationLoop(a)},Ue.prototype.getCurrentRenderTarget=function(){return console.warn("THREE.WebGLRenderer: .getCurrentRenderTarget() is now .getRenderTarget()."),this.getRenderTarget()},Ue.prototype.getMaxAnisotropy=function(){return console.warn("THREE.WebGLRenderer: .getMaxAnisotropy() is now .capabilities.getMaxAnisotropy()."),this.capabilities.getMaxAnisotropy()},Ue.prototype.getPrecision=function(){return console.warn("THREE.WebGLRenderer: .getPrecision() is now .capabilities.precision."),this.capabilities.precision},Ue.prototype.resetGLState=function(){return console.warn("THREE.WebGLRenderer: .resetGLState() is now .state.reset()."),this.state.reset()},Ue.prototype.supportsFloatTextures=function(){return console.warn("THREE.WebGLRenderer: .supportsFloatTextures() is now .extensions.get( 'OES_texture_float' )."),this.extensions.get("OES_texture_float")},Ue.prototype.supportsHalfFloatTextures=function(){return console.warn("THREE.WebGLRenderer: .supportsHalfFloatTextures() is now .extensions.get( 'OES_texture_half_float' )."),this.extensions.get("OES_texture_half_float")},Ue.prototype.supportsStandardDerivatives=function(){return console.warn("THREE.WebGLRenderer: .supportsStandardDerivatives() is now .extensions.get( 'OES_standard_derivatives' )."),this.extensions.get("OES_standard_derivatives")},Ue.prototype.supportsCompressedTextureS3TC=function(){return console.warn("THREE.WebGLRenderer: .supportsCompressedTextureS3TC() is now .extensions.get( 'WEBGL_compressed_texture_s3tc' )."),this.extensions.get("WEBGL_compressed_texture_s3tc")},Ue.prototype.supportsCompressedTexturePVRTC=function(){return console.warn("THREE.WebGLRenderer: .supportsCompressedTexturePVRTC() is now .extensions.get( 'WEBGL_compressed_texture_pvrtc' )."),this.extensions.get("WEBGL_compressed_texture_pvrtc")},Ue.prototype.supportsBlendMinMax=function(){return console.warn("THREE.WebGLRenderer: .supportsBlendMinMax() is now .extensions.get( 'EXT_blend_minmax' )."),this.extensions.get("EXT_blend_minmax")},Ue.prototype.supportsVertexTextures=function(){return console.warn("THREE.WebGLRenderer: .supportsVertexTextures() is now .capabilities.vertexTextures."),this.capabilities.vertexTextures},Ue.prototype.supportsInstancedArrays=function(){return console.warn("THREE.WebGLRenderer: .supportsInstancedArrays() is now .extensions.get( 'ANGLE_instanced_arrays' )."),this.extensions.get("ANGLE_instanced_arrays")},Ue.prototype.enableScissorTest=function(a){console.warn("THREE.WebGLRenderer: .enableScissorTest() is now .setScissorTest()."),this.setScissorTest(a)},Ue.prototype.initMaterial=function(){console.warn("THREE.WebGLRenderer: .initMaterial() has been removed.")},Ue.prototype.addPrePlugin=function(){console.warn("THREE.WebGLRenderer: .addPrePlugin() has been removed.")},Ue.prototype.addPostPlugin=function(){console.warn("THREE.WebGLRenderer: .addPostPlugin() has been removed.")},Ue.prototype.updateShadowMap=function(){console.warn("THREE.WebGLRenderer: .updateShadowMap() has been removed.")},Ue.prototype.setFaceCulling=function(){console.warn("THREE.WebGLRenderer: .setFaceCulling() has been removed.")},Ue.prototype.allocTextureUnit=function(){console.warn("THREE.WebGLRenderer: .allocTextureUnit() has been removed.")},Ue.prototype.setTexture=function(){console.warn("THREE.WebGLRenderer: .setTexture() has been removed.")},Ue.prototype.setTexture2D=function(){console.warn("THREE.WebGLRenderer: .setTexture2D() has been removed.")},Ue.prototype.setTextureCube=function(){console.warn("THREE.WebGLRenderer: .setTextureCube() has been removed.")},Ue.prototype.getActiveMipMapLevel=function(){return console.warn("THREE.WebGLRenderer: .getActiveMipMapLevel() is now .getActiveMipmapLevel()."),this.getActiveMipmapLevel()},Object.defineProperties(Ue.prototype,{shadowMapEnabled:{get:function(){return this.shadowMap.enabled},set:function(a){console.warn("THREE.WebGLRenderer: .shadowMapEnabled is now .shadowMap.enabled."),this.shadowMap.enabled=a}},shadowMapType:{get:function(){return this.shadowMap.type},set:function(a){console.warn("THREE.WebGLRenderer: .shadowMapType is now .shadowMap.type."),this.shadowMap.type=a}},shadowMapCullFace:{get:function(){console.warn("THREE.WebGLRenderer: .shadowMapCullFace has been removed. Set Material.shadowSide instead.")},set:function(){console.warn("THREE.WebGLRenderer: .shadowMapCullFace has been removed. Set Material.shadowSide instead.")}},context:{get:function(){return console.warn("THREE.WebGLRenderer: .context has been removed. Use .getContext() instead."),this.getContext()}},vr:{get:function(){return console.warn("THREE.WebGLRenderer: .vr has been renamed to .xr"),this.xr}},gammaInput:{get:function(){return console.warn("THREE.WebGLRenderer: .gammaInput has been removed. Set the encoding for textures via Texture.encoding instead."),!1},set:function(){console.warn("THREE.WebGLRenderer: .gammaInput has been removed. Set the encoding for textures via Texture.encoding instead.")}},gammaOutput:{get:function(){return console.warn("THREE.WebGLRenderer: .gammaOutput has been removed. Set WebGLRenderer.outputEncoding instead."),!1},set:function(a){console.warn("THREE.WebGLRenderer: .gammaOutput has been removed. Set WebGLRenderer.outputEncoding instead."),this.outputEncoding=a===!0?oi:ct}},toneMappingWhitePoint:{get:function(){return console.warn("THREE.WebGLRenderer: .toneMappingWhitePoint has been removed."),1},set:function(){console.warn("THREE.WebGLRenderer: .toneMappingWhitePoint has been removed.")}}}),Object.defineProperties(iu.prototype,{cullFace:{get:function(){console.warn("THREE.WebGLRenderer: .shadowMap.cullFace has been removed. Set Material.shadowSide instead.")},set:function(){console.warn("THREE.WebGLRenderer: .shadowMap.cullFace has been removed. Set Material.shadowSide instead.")}},renderReverseSided:{get:function(){console.warn("THREE.WebGLRenderer: .shadowMap.renderReverseSided has been removed. Set Material.shadowSide instead.")},set:function(){console.warn("THREE.WebGLRenderer: .shadowMap.renderReverseSided has been removed. Set Material.shadowSide instead.")}},renderSingleSided:{get:function(){console.warn("THREE.WebGLRenderer: .shadowMap.renderSingleSided has been removed. Set Material.shadowSide instead.")},set:function(){console.warn("THREE.WebGLRenderer: .shadowMap.renderSingleSided has been removed. Set Material.shadowSide instead.")}}});function ex(a,e,t){return console.warn("THREE.WebGLRenderTargetCube( width, height, options ) is now WebGLCubeRenderTarget( size, options )."),new Ta(a,t)}Object.defineProperties(Ct.prototype,{wrapS:{get:function(){return console.warn("THREE.WebGLRenderTarget: .wrapS is now .texture.wrapS."),this.texture.wrapS},set:function(a){console.warn("THREE.WebGLRenderTarget: .wrapS is now .texture.wrapS."),this.texture.wrapS=a}},wrapT:{get:function(){return console.warn("THREE.WebGLRenderTarget: .wrapT is now .texture.wrapT."),this.texture.wrapT},set:function(a){console.warn("THREE.WebGLRenderTarget: .wrapT is now .texture.wrapT."),this.texture.wrapT=a}},magFilter:{get:function(){return console.warn("THREE.WebGLRenderTarget: .magFilter is now .texture.magFilter."),this.texture.magFilter},set:function(a){console.warn("THREE.WebGLRenderTarget: .magFilter is now .texture.magFilter."),this.texture.magFilter=a}},minFilter:{get:function(){return console.warn("THREE.WebGLRenderTarget: .minFilter is now .texture.minFilter."),this.texture.minFilter},set:function(a){console.warn("THREE.WebGLRenderTarget: .minFilter is now .texture.minFilter."),this.texture.minFilter=a}},anisotropy:{get:function(){return console.warn("THREE.WebGLRenderTarget: .anisotropy is now .texture.anisotropy."),this.texture.anisotropy},set:function(a){console.warn("THREE.WebGLRenderTarget: .anisotropy is now .texture.anisotropy."),this.texture.anisotropy=a}},offset:{get:function(){return console.warn("THREE.WebGLRenderTarget: .offset is now .texture.offset."),this.texture.offset},set:function(a){console.warn("THREE.WebGLRenderTarget: .offset is now .texture.offset."),this.texture.offset=a}},repeat:{get:function(){return console.warn("THREE.WebGLRenderTarget: .repeat is now .texture.repeat."),this.texture.repeat},set:function(a){console.warn("THREE.WebGLRenderTarget: .repeat is now .texture.repeat."),this.texture.repeat=a}},format:{get:function(){return console.warn("THREE.WebGLRenderTarget: .format is now .texture.format."),this.texture.format},set:function(a){console.warn("THREE.WebGLRenderTarget: .format is now .texture.format."),this.texture.format=a}},type:{get:function(){return console.warn("THREE.WebGLRenderTarget: .type is now .texture.type."),this.texture.type},set:function(a){console.warn("THREE.WebGLRenderTarget: .type is now .texture.type."),this.texture.type=a}},generateMipmaps:{get:function(){return console.warn("THREE.WebGLRenderTarget: .generateMipmaps is now .texture.generateMipmaps."),this.texture.generateMipmaps},set:function(a){console.warn("THREE.WebGLRenderTarget: .generateMipmaps is now .texture.generateMipmaps."),this.texture.generateMipmaps=a}}}),hl.prototype.load=function(a){console.warn("THREE.Audio: .load has been deprecated. Use THREE.AudioLoader instead.");const e=this;return new rd().load(a,function(t){e.setBuffer(t)}),this},dd.prototype.getData=function(){return console.warn("THREE.AudioAnalyser: .getData() is now .getFrequencyData()."),this.getFrequencyData()},Sa.prototype.updateCubeMap=function(a,e){return console.warn("THREE.CubeCamera: .updateCubeMap() is now .update()."),this.update(a,e)},Sa.prototype.clear=function(a,e,t,i){return console.warn("THREE.CubeCamera: .clear() is now .renderTarget.clear()."),this.renderTarget.clear(a,e,t,i)},Vi.crossOrigin=void 0,Vi.loadTexture=function(a,e,t,i){console.warn("THREE.ImageUtils.loadTexture has been deprecated. Use THREE.TextureLoader() instead.");const r=new Wu;r.setCrossOrigin(this.crossOrigin);const n=r.load(a,t,void 0,i);return e&&(n.mapping=e),n},Vi.loadTextureCube=function(a,e,t,i){console.warn("THREE.ImageUtils.loadTextureCube has been deprecated. Use THREE.CubeTextureLoader() instead.");const r=new ku;r.setCrossOrigin(this.crossOrigin);const n=r.load(a,t,void 0,i);return e&&(n.mapping=e),n},Vi.loadCompressedTexture=function(){console.error("THREE.ImageUtils.loadCompressedTexture has been removed. Use THREE.DDSLoader instead.")},Vi.loadCompressedTextureCube=function(){console.error("THREE.ImageUtils.loadCompressedTextureCube has been removed. Use THREE.DDSLoader instead.")};function tx(){console.error("THREE.CanvasRenderer has been removed")}function ix(){console.error("THREE.JSONLoader has been removed.")}const rx={createMultiMaterialObject:function(){console.error("THREE.SceneUtils has been moved to /examples/jsm/utils/SceneUtils.js")},detach:function(){console.error("THREE.SceneUtils has been moved to /examples/jsm/utils/SceneUtils.js")},attach:function(){console.error("THREE.SceneUtils has been moved to /examples/jsm/utils/SceneUtils.js")}};function nx(){console.error("THREE.LensFlare has been moved to /examples/jsm/objects/Lensflare.js")}function ax(){return console.error("THREE.ParametricGeometry has been moved to /examples/jsm/geometries/ParametricGeometry.js"),new we}function sx(){return console.error("THREE.TextGeometry has been moved to /examples/jsm/geometries/TextGeometry.js"),new we}function ox(){console.error("THREE.FontLoader has been moved to /examples/jsm/loaders/FontLoader.js")}function lx(){console.error("THREE.Font has been moved to /examples/jsm/loaders/FontLoader.js")}function cx(){console.error("THREE.ImmediateRenderObject has been removed.")}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:"134"}})),typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__="134");export{Yl as ACESFilmicToneMapping,Ii as AddEquation,Wl as AddOperation,Bs as AdditiveAnimationBlendMode,vs as AdditiveBlending,ic as AlphaFormat,Ol as AlwaysDepth,Jc as AlwaysStencilFunc,al as AmbientLight,ad as AmbientLightProbe,kn as AnimationClip,V0 as AnimationLoader,fd as AnimationMixer,md as AnimationObjectGroup,He as AnimationUtils,Po as ArcCurve,wo as ArrayCamera,_y as ArrowHelper,hl as Audio,dd as AudioAnalyser,cl as AudioContext,Z0 as AudioListener,rd as AudioLoader,Id as AxesHelper,Yy as AxisHelper,Xe as BackSide,Xc as BasicDepthPacking,Wd as BasicShadowMap,$y as BinaryTextureLoader,Ga as Bone,$i as BooleanKeyframeTrack,Zy as BoundingBoxHelper,jr as Box2,wt as Box3,yy as Box3Helper,ri as BoxBufferGeometry,ri as BoxGeometry,Rd as BoxHelper,De as BufferAttribute,we as BufferGeometry,$u as BufferGeometryLoader,Jl as ByteType,tr as Cache,bn as Camera,vy as CameraHelper,tx as CanvasRenderer,Tu as CanvasTexture,Fo as CatmullRomCurve3,Xl as CineonToneMapping,qr as CircleBufferGeometry,qr as CircleGeometry,ot as ClampToEdgeWrapping,ld as Clock,ie as Color,Ko as ColorKeyframeTrack,Lo as CompressedTexture,W0 as CompressedTextureLoader,Xr as ConeBufferGeometry,Xr as ConeGeometry,Sa as CubeCamera,Di as CubeReflectionMapping,Ni as CubeRefractionMapping,Ir as CubeTexture,ku as CubeTextureLoader,pr as CubeUVReflectionMapping,ln as CubeUVRefractionMapping,Za as CubicBezierCurve,Oo as CubicBezierCurve3,zu as CubicInterpolant,ms as CullFaceBack,bl as CullFaceFront,Vd as CullFaceFrontBack,wl as CullFaceNone,St as Curve,Cu as CurvePath,Sl as CustomBlending,Zl as CustomToneMapping,Si as CylinderBufferGeometry,Si as CylinderGeometry,hy as Cylindrical,Ji as DataTexture,Ca as DataTexture2DArray,yo as DataTexture3D,Vu as DataTextureLoader,My as DataUtils,tp as DecrementStencilOp,rp as DecrementWrapStencilOp,Hu as DefaultLoadingManager,zi as DepthFormat,fr as DepthStencilFormat,Eu as DepthTexture,nl as DirectionalLight,gy as DirectionalLightHelper,Uu as DiscreteInterpolant,Yr as DodecahedronBufferGeometry,Yr as DodecahedronGeometry,Pi as DoubleSide,Pl as DstAlphaFactor,Dl as DstColorFactor,zy as DynamicBufferAttribute,vp as DynamicCopyUsage,vr as DynamicDrawUsage,mp as DynamicReadUsage,Ro as EdgesGeometry,Jy as EdgesHelper,In as EllipseCurve,Ul as EqualDepth,op as EqualStencilFunc,sn as EquirectangularReflectionMapping,on as EquirectangularRefractionMapping,sr as Euler,li as EventDispatcher,Vt as ExtrudeBufferGeometry,Vt as ExtrudeGeometry,Ay as FaceColors,Gt as FileLoader,gs as FlatShading,xh as Float16BufferAttribute,qy as Float32Attribute,le as Float32BufferAttribute,Xy as Float64Attribute,_h as Float64BufferAttribute,Ft as FloatType,Xn as Fog,qn as FogExp2,lx as Font,ox as FontLoader,Ri as FrontSide,Mn as Frustum,vd as GLBufferAttribute,xp as GLSL1,Us as GLSL3,ta as GammaEncoding,Hl as GreaterDepth,Gl as GreaterEqualDepth,up as GreaterEqualStencilFunc,cp as GreaterStencilFunc,Ad as GridHelper,Yi as Group,Fi as HalfFloatType,$o as HemisphereLight,my as HemisphereLightHelper,nd as HemisphereLightProbe,Zr as IcosahedronBufferGeometry,Zr as IcosahedronGeometry,id as ImageBitmapLoader,Vn as ImageLoader,Vi as ImageUtils,cx as ImmediateRenderObject,ep as IncrementStencilOp,ip as IncrementWrapStencilOp,Ki as InstancedBufferAttribute,ll as InstancedBufferGeometry,gd as InstancedInterleavedBuffer,So as InstancedMesh,ky as Int16Attribute,vh as Int16BufferAttribute,Wy as Int32Attribute,yh as Int32BufferAttribute,Uy as Int8Attribute,mh as Int8BufferAttribute,Ql as IntType,Zi as InterleavedBuffer,Mi as InterleavedBufferAttribute,ti as Interpolant,pn as InterpolateDiscrete,mn as InterpolateLinear,$n as InterpolateSmooth,np as InvertStencilOp,ix as JSONLoader,ra as KeepStencilOp,Nt as KeyframeTrack,cu as LOD,Jr as LatheBufferGeometry,Jr as LatheGeometry,Qs as Layers,nx as LensFlare,zl as LessDepth,Zn as LessEqualDepth,lp as LessEqualStencilFunc,sp as LessStencilFunc,Bt as Light,jn as LightProbe,ei as Line,wd as Line3,st as LineBasicMaterial,Bn as LineCurve,Lu as LineCurve3,Zo as LineDashedMaterial,Eo as LineLoop,Ty as LinePieces,xt as LineSegments,Sy as LineStrip,ct as LinearEncoding,$e as LinearFilter,Jo as LinearInterpolant,Zd as LinearMipMapLinearFilter,Yd as LinearMipMapNearestFilter,Bi as LinearMipmapLinearFilter,Ss as LinearMipmapNearestFilter,jl as LinearToneMapping,yt as Loader,rs as LoaderUtils,Qo as LoadingManager,qc as LogLuvEncoding,kc as LoopOnce,Wc as LoopPingPong,Vc as LoopRepeat,nc as LuminanceAlphaFormat,rc as LuminanceFormat,Hd as MOUSE,rt as Material,Qu as MaterialLoader,$c as Math,$c as MathUtils,et as Matrix3,ue as Matrix4,ws as MaxEquation,Qe as Mesh,Qt as MeshBasicMaterial,Ra as MeshDepthMaterial,Pa as MeshDistanceMaterial,Cy as MeshFaceMaterial,Xo as MeshLambertMaterial,Yo as MeshMatcapMaterial,qo as MeshNormalMaterial,Wo as MeshPhongMaterial,Vo as MeshPhysicalMaterial,is as MeshStandardMaterial,jo as MeshToonMaterial,_s as MinEquation,hn as MirroredRepeatWrapping,Vl as MixOperation,Ry as MultiMaterial,xs as MultiplyBlending,an as MultiplyOperation,Ke as NearestFilter,Xd as NearestMipMapLinearFilter,qd as NearestMipMapNearestFilter,Qn as NearestMipmapLinearFilter,Kn as NearestMipmapNearestFilter,Fl as NeverDepth,ap as NeverStencilFunc,jt as NoBlending,Ey as NoColors,si as NoToneMapping,ea as NormalAnimationBlendMode,dr as NormalBlending,kl as NotEqualDepth,hp as NotEqualStencilFunc,Gn as NumberKeyframeTrack,Re as Object3D,j0 as ObjectLoader,Zc as ObjectSpaceNormalMap,lr as OctahedronBufferGeometry,lr as OctahedronGeometry,Ll as OneFactor,Il as OneMinusDstAlphaFactor,Nl as OneMinusDstColorFactor,Ms as OneMinusSrcAlphaFactor,Rl as OneMinusSrcColorFactor,Sn as OrthographicCamera,fs as PCFShadowMap,Ml as PCFSoftShadowMap,Ch as PMREMGenerator,ax as ParametricGeometry,Iy as Particle,By as ParticleBasicMaterial,Dy as ParticleSystem,Fy as ParticleSystemMaterial,Fn as Path,at as PerspectiveCamera,Ot as Plane,or as PlaneBufferGeometry,or as PlaneGeometry,xy as PlaneHelper,Py as PointCloud,Ny as PointCloudMaterial,rl as PointLight,dy as PointLightHelper,Pn as Points,Qi as PointsMaterial,fy as PolarGridHelper,Ht as PolyhedronBufferGeometry,Ht as PolyhedronGeometry,K0 as PositionalAudio,Be as PropertyBinding,pd as PropertyMixer,Ja as QuadraticBezierCurve,Ka as QuadraticBezierCurve3,dt as Quaternion,Wr as QuaternionKeyframeTrack,Gu as QuaternionLinearInterpolant,Gd as REVISION,Yc as RGBADepthPacking,lt as RGBAFormat,uc as RGBAIntegerFormat,Sc as RGBA_ASTC_10x10_Format,wc as RGBA_ASTC_10x5_Format,bc as RGBA_ASTC_10x6_Format,Mc as RGBA_ASTC_10x8_Format,Tc as RGBA_ASTC_12x10_Format,Ec as RGBA_ASTC_12x12_Format,pc as RGBA_ASTC_4x4_Format,mc as RGBA_ASTC_5x4_Format,fc as RGBA_ASTC_5x5_Format,gc as RGBA_ASTC_6x5_Format,vc as RGBA_ASTC_6x6_Format,yc as RGBA_ASTC_8x5_Format,xc as RGBA_ASTC_8x6_Format,_c as RGBA_ASTC_8x8_Format,Ac as RGBA_BPTC_Format,Ns as RGBA_ETC2_EAC_Format,Is as RGBA_PVRTC_2BPPV1_Format,Ps as RGBA_PVRTC_4BPPV1_Format,Es as RGBA_S3TC_DXT1_Format,As as RGBA_S3TC_DXT3_Format,Ls as RGBA_S3TC_DXT5_Format,zs as RGBDEncoding,ia as RGBEEncoding,ac as RGBEFormat,Oi as RGBFormat,hc as RGBIntegerFormat,Os as RGBM16Encoding,Fs as RGBM7Encoding,dc as RGB_ETC1_Format,Ds as RGB_ETC2_Format,Rs as RGB_PVRTC_2BPPV1_Format,Cs as RGB_PVRTC_4BPPV1_Format,Ts as RGB_S3TC_DXT1_Format,lc as RGFormat,cc as RGIntegerFormat,Nr as RawShaderMaterial,pi as Ray,ly as Raycaster,sl as RectAreaLight,sc as RedFormat,oc as RedIntegerFormat,ql as ReinhardToneMapping,cn as RepeatWrapping,$d as ReplaceStencilOp,El as ReverseSubtractEquation,Kr as RingBufferGeometry,Kr as RingGeometry,Uc as SRGB8_ALPHA8_ASTC_10x10_Format,Fc as SRGB8_ALPHA8_ASTC_10x5_Format,Oc as SRGB8_ALPHA8_ASTC_10x6_Format,zc as SRGB8_ALPHA8_ASTC_10x8_Format,Gc as SRGB8_ALPHA8_ASTC_12x10_Format,Hc as SRGB8_ALPHA8_ASTC_12x12_Format,Lc as SRGB8_ALPHA8_ASTC_4x4_Format,Cc as SRGB8_ALPHA8_ASTC_5x4_Format,Rc as SRGB8_ALPHA8_ASTC_5x5_Format,Pc as SRGB8_ALPHA8_ASTC_6x5_Format,Ic as SRGB8_ALPHA8_ASTC_6x6_Format,Dc as SRGB8_ALPHA8_ASTC_8x5_Format,Nc as SRGB8_ALPHA8_ASTC_8x6_Format,Bc as SRGB8_ALPHA8_ASTC_8x8_Format,Ia as Scene,rx as SceneUtils,Ce as ShaderChunk,Dt as ShaderLib,$t as ShaderMaterial,ko as ShadowMaterial,Ut as Shape,cr as ShapeBufferGeometry,cr as ShapeGeometry,wy as ShapePath,kt as ShapeUtils,Kl as ShortType,us as Skeleton,Md as SkeletonHelper,Ua as SkinnedMesh,jd as SmoothShading,ui as Sphere,hr as SphereBufferGeometry,hr as SphereGeometry,cy as Spherical,ol as SphericalHarmonics3,Qa as SplineCurve,tl as SpotLight,uy as SpotLightHelper,Fa as Sprite,Da as SpriteMaterial,bs as SrcAlphaFactor,Bl as SrcAlphaSaturateFactor,Cl as SrcColorFactor,gp as StaticCopyUsage,gr as StaticDrawUsage,pp as StaticReadUsage,X0 as StereoCamera,yp as StreamCopyUsage,dp as StreamDrawUsage,fp as StreamReadUsage,er as StringKeyframeTrack,Tl as SubtractEquation,ys as SubtractiveBlending,kd as TOUCH,Hi as TangentSpaceNormalMap,Qr as TetrahedronBufferGeometry,Qr as TetrahedronGeometry,sx as TextGeometry,tt as Texture,Wu as TextureLoader,$r as TorusBufferGeometry,$r as TorusGeometry,en as TorusKnotBufferGeometry,en as TorusKnotGeometry,Je as Triangle,Kd as TriangleFanDrawMode,Jd as TriangleStripDrawMode,jc as TrianglesDrawMode,tn as TubeBufferGeometry,tn as TubeGeometry,Jn as UVMapping,Vy as Uint16Attribute,ma as Uint16BufferAttribute,jy as Uint32Attribute,fa as Uint32BufferAttribute,Gy as Uint8Attribute,fh as Uint8BufferAttribute,Hy as Uint8ClampedAttribute,gh as Uint8ClampedBufferAttribute,ds as Uniform,te as UniformsLib,bh as UniformsUtils,qt as UnsignedByteType,mr as UnsignedInt248Type,dn as UnsignedIntType,$l as UnsignedShort4444Type,ec as UnsignedShort5551Type,tc as UnsignedShort565Type,un as UnsignedShortType,ur as VSMShadowMap,j as Vector2,b as Vector3,ze as Vector4,Hn as VectorKeyframeTrack,Oy as Vertex,Ly as VertexColors,Su as VideoTexture,nu as WebGL1Renderer,Ta as WebGLCubeRenderTarget,ih as WebGLMultipleRenderTargets,Vs as WebGLMultisampleRenderTarget,Ct as WebGLRenderTarget,ex as WebGLRenderTargetCube,Ue as WebGLRenderer,ru as WebGLUtils,Ho as WireframeGeometry,Ky as WireframeHelper,fn as WrapAroundEnding,Qy as XHRLoader,Ui as ZeroCurvatureEnding,Al as ZeroFactor,Gi as ZeroSlopeEnding,Qd as ZeroStencilOp,oi as sRGBEncoding};
