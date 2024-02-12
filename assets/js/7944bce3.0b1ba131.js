"use strict";(self.webpackChunktdm_docs=self.webpackChunktdm_docs||[]).push([[716],{5788:(e,t,n)=>{n.d(t,{Iu:()=>u,yg:()=>d});var r=n(1504);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),p=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=p(e.components);return r.createElement(s.Provider,{value:t},e.children)},g="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},y=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),g=p(n),y=a,d=g["".concat(s,".").concat(y)]||g[y]||c[y]||o;return n?r.createElement(d,i(i({ref:t},u),{},{components:n})):r.createElement(d,i({ref:t},u))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=y;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[g]="string"==typeof e?e:a,i[1]=l;for(var p=2;p<o;p++)i[p]=n[p];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}y.displayName="MDXCreateElement"},3636:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>c,frontMatter:()=>o,metadata:()=>l,toc:()=>p});var r=n(5072),a=(n(1504),n(5788));const o={title:"PostgreSQL - disable triggers"},i=void 0,l={unversionedId:"troubleshooting/connectivity-postgresql-disable-triggers",id:"troubleshooting/connectivity-postgresql-disable-triggers",title:"PostgreSQL - disable triggers",description:"PostgreSQL: error for ALTER TABLE DISABLE TRIGGERS ALL statement execusion by user without enough permission",source:"@site/docs/troubleshooting/connectivity-postgresql-disable-triggers.md",sourceDirName:"troubleshooting",slug:"/troubleshooting/connectivity-postgresql-disable-triggers",permalink:"/docs/troubleshooting/connectivity-postgresql-disable-triggers",draft:!1,tags:[],version:"current",frontMatter:{title:"PostgreSQL - disable triggers"},sidebar:"docs",previous:{title:"Known issues and limitations",permalink:"/docs/troubleshooting/known-issues-and-limitations"},next:{title:"Dynamic allocation of executors",permalink:"/docs/troubleshooting/dynamic-resource-allocation-failed"}},s={},p=[{value:"Symptoms",id:"symptoms",level:3},{value:"Cause",id:"cause",level:3},{value:"Solution",id:"solution",level:3},{value:"Workaround",id:"workaround",level:3},{value:"Related Article(s)",id:"related-articles",level:3},{value:"Was This Article Helpful?",id:"was-this-article-helpful",level:3},{value:"Still Need Help?",id:"still-need-help",level:3}],u={toc:p},g="wrapper";function c(e){let{components:t,...n}=e;return(0,a.yg)(g,(0,r.c)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,a.yg)("p",null,(0,a.yg)("strong",{parentName:"p"},"PostgreSQL: error for ALTER TABLE DISABLE TRIGGERS ALL statement execusion by user without enough permission")),(0,a.yg)("p",null,"The case is:"),(0,a.yg)("p",null,"User has transferred tables to the database of PostgreSQL with Subsetting integrity type.\nSo, foreign keys are available on the target database."),(0,a.yg)("p",null,"Then the user selects the same tables, but transferring them with Migration integrity type and target filling mode as Truncate or Append."),(0,a.yg)("p",null,"During the pipeline execution, the back-end side runs the statement to disable the foreign keys: ALTER TABLE <table_name> DISABLE TRIGGERS ALL;."),(0,a.yg)("p",null,"In case the user selected for target connection does not have enough permission, the statement is not executed. And the foreign keys leave enabled."),(0,a.yg)("p",null,"The pipeline could be failed as far as database didn't allow to insert the values without reference:"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre"},'ERROR: insert or update on table "<table_name>" violates foreign key constraint "<constraint_name>"\nDetail: Key (<column_name>)=(<value_id>) is not present in table "<table_name>"\n')),(0,a.yg)("p",null,"Solution:"),(0,a.yg)("ol",null,(0,a.yg)("li",{parentName:"ol"},(0,a.yg)("p",{parentName:"li"},"User on target database has to have enough permission to execute the ALTER TABLE <table_name> DISABLE TRIGGERS ALL;")),(0,a.yg)("li",{parentName:"ol"},(0,a.yg)("p",{parentName:"li"},"Disable the foreign keys on the target manually before the pipeline execution with Migration integrity type and enable the keys manually after the pipeline finished."))),(0,a.yg)("hr",null),(0,a.yg)("p",null,(0,a.yg)("strong",{parentName:"p"},"Last updated:")," January 03, 2022.\n",(0,a.yg)("strong",{parentName:"p"},"Applies to:")," All users."),(0,a.yg)("p",null,(0,a.yg)("em",{parentName:"p"},"Issue description and steps to reproduce goes here.")),(0,a.yg)("h3",{id:"symptoms"},"Symptoms"),(0,a.yg)("ol",null,(0,a.yg)("li",{parentName:"ol"},(0,a.yg)("p",{parentName:"li"},"User has transferred tables to the database of PostgreSQL with Subsetting integrity type. So, foreign keys are available on the target database.")),(0,a.yg)("li",{parentName:"ol"},(0,a.yg)("p",{parentName:"li"},"Then the user selects the same tables, but transferring them with Migration integrity type and target filling mode as Truncate or Append.")),(0,a.yg)("li",{parentName:"ol"},(0,a.yg)("p",{parentName:"li"},"During the pipeline execution, the back-end side runs the statement to disable the foreign keys: ALTER TABLE <table_name> DISABLE TRIGGERS ALL;.")),(0,a.yg)("li",{parentName:"ol"},(0,a.yg)("p",{parentName:"li"},"In case the user selected for target connection does not have enough permission, the statement is not executed. And the foreign keys leave enabled.")),(0,a.yg)("li",{parentName:"ol"},(0,a.yg)("p",{parentName:"li"},"The pipeline could be failed as far as database didn't allow to insert the values without reference:"))),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre"},'ERROR: insert or update on table "<table_name>" violates foreign key constraint "<constraint_name>"\nDetail: Key (<column_name>)=(<value_id>) is not present in table "<table_name>"\n')),(0,a.yg)("h3",{id:"cause"},"Cause"),(0,a.yg)("p",null,"PostgreSQL: error for ALTER TABLE DISABLE TRIGGERS ALL statement execusion by user without enough permission"),(0,a.yg)("h3",{id:"solution"},"Solution"),(0,a.yg)("p",null,(0,a.yg)("em",{parentName:"p"},"Detailed solution goes here.")),(0,a.yg)("ol",null,(0,a.yg)("li",{parentName:"ol"},"User on target database has to have enough permission to execute the ",(0,a.yg)("inlineCode",{parentName:"li"},"ALTER TABLE <table_name> DISABLE TRIGGERS ALL;")," statements before starting a pipeline.")),(0,a.yg)("p",null,"or"),(0,a.yg)("ol",{start:2},(0,a.yg)("li",{parentName:"ol"},"Disable the foreign keys on the target manually before the pipeline execution with Migration integrity type and enable the keys manually after the pipeline finished.")),(0,a.yg)("h3",{id:"workaround"},"Workaround"),(0,a.yg)("p",null,(0,a.yg)("em",{parentName:"p"},"Optional. Provide steps to workaround the issue.")),(0,a.yg)("h3",{id:"related-articles"},"Related Article(s)"),(0,a.yg)("p",null,(0,a.yg)("em",{parentName:"p"},"Include the links and titles for any knowledge base articles related to this one."),"  "),(0,a.yg)("h3",{id:"was-this-article-helpful"},"Was This Article Helpful?"),(0,a.yg)("p",null,(0,a.yg)("em",{parentName:"p"},"Include a way for readers to let you know whether or not the content was helpful. This can be a yes/no or thumbs up/thumbs down feature, a 1-5 rating, or a link to provide feedback through email or a survey."),"  "),(0,a.yg)("h3",{id:"still-need-help"},"Still Need Help?"),(0,a.yg)("p",null,(0,a.yg)("em",{parentName:"p"},"Provide a way for customers to get in touch with you if they still have questions. This can be a link to your support page, a chat popup, or the email address for the best person to reach out to."),"  "),(0,a.yg)("hr",null),(0,a.yg)("p",null,(0,a.yg)("strong",{parentName:"p"},"Knowledge Base Article")," ",(0,a.yg)("strong",{parentName:"p"},"Best Practices Checklist:")),(0,a.yg)("ul",null,(0,a.yg)("li",{parentName:"ul"},"Did you run this process by a customer or a fellow employee to see if he or she is able to follow along?"),(0,a.yg)("li",{parentName:"ul"},"Do you use visual aids such as images, videos, and/or GIFs where appropriate?"),(0,a.yg)("li",{parentName:"ul"},"Do you explain the process directly, clearly, and concisely, without unnecessary filler words?"),(0,a.yg)("li",{parentName:"ul"},"Do you provide related articles for similar issues or topics?"),(0,a.yg)("li",{parentName:"ul"},"Do you provide continued contact information for readers who still need help?"),(0,a.yg)("li",{parentName:"ul"},"Did you set a reminder to revisit this article periodically to ensure that the content is accurate and up-to-date?")),(0,a.yg)("p",null,(0,a.yg)("a",{parentName:"p",href:"https://kb.epam.com/display/EPMCTDM/Knowledge+Base+Articles+for+End-Users"},"Knowledge Base Articles for End-Users")))}c.isMDXComponent=!0}}]);