import{X as p,o as c,L as _,M as e,a3 as a,u as t,a4 as d,a5 as n}from"./entry.6032d723.js";import{u as i}from"./newParkingLot.8498130f.js";const b={class:"card py-3 px-4 mt-5 mb-6 rounding is-shadowless"},N={class:"field"},L={class:"label"},S={class:"control"},h={class:"field"},v={class:"label"},f={class:"control"},y={class:"field"},g={class:"label"},x={class:"control"},P={class:"field"},k={class:"label"},T={class:"control"},V={class:"field"},H={class:"label"},U={class:"control"},w={props:["formFields"],methods:{updateStore(u,r){}},data(){return{}}},M=Object.assign(w,{__name:"step-one",setup(u){const{general:r,address:l}=p(i()),m=i();return(B,s)=>(c(),_("div",b,[e("div",N,[e("label",L,"Parking Lot Name ( "+a(t(r).storedLotName)+" )",1),e("div",S,[d(e("input",{class:"input",type:"text",placeholder:"Type Name Here","onUpdate:modelValue":s[0]||(s[0]=o=>t(r).storedLotName=o)},null,512),[[n,t(r).storedLotName]])])]),e("div",h,[e("label",v,"Parking Lot Number ( "+a(t(r).storedLotNumber)+" )",1),e("div",f,[d(e("input",{class:"input",type:"number",placeholder:"Type Number Here","onUpdate:modelValue":s[1]||(s[1]=o=>t(r).storedLotNumber=o)},null,512),[[n,t(r).storedLotNumber]])])]),e("div",y,[e("label",g,"Street Number ( "+a(t(l).storedLotStreetNumber)+" )",1),e("div",x,[d(e("input",{class:"input",type:"number",placeholder:"Street Number Here","onUpdate:modelValue":s[2]||(s[2]=o=>t(l).storedLotStreetNumber=o)},null,512),[[n,t(l).storedLotStreetNumber]])])]),e("div",P,[e("label",k,"Street Name ( "+a(t(l).storedLotStreetName)+" )",1),e("div",T,[d(e("input",{class:"input",type:"text",placeholder:"Type Number Here","onUpdate:modelValue":s[3]||(s[3]=o=>t(l).storedLotStreetName=o)},null,512),[[n,t(l).storedLotStreetName]])])]),e("div",V,[e("label",H,"Street Postal Code ( "+a(t(l).storedLotStreetPostal)+" )",1),e("div",U,[d(e("input",{class:"input",type:"text",placeholder:"Type Number Here","onUpdate:modelValue":s[4]||(s[4]=o=>t(l).storedLotStreetPostal=o)},null,512),[[n,t(l).storedLotStreetPostal]])])]),e("button",{onClick:s[5]||(s[5]=o=>t(m).mutateData())}," Add ")]))}});export{M as default};
