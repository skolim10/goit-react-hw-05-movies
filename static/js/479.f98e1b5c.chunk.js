"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[479],{479:function(e,t,r){r.r(t),r.d(t,{default:function(){return l}});var n=r(731),a=r(739),i=r(885),c=r(768),s=r(791),o={movieOverview:"MovieDetailPage_movieOverview__xD7Ud",overviewLeft:"MovieDetailPage_overviewLeft__nsvV6",movieImg:"MovieDetailPage_movieImg__24sWM",movieDetails:"MovieDetailPage_movieDetails__0A-TK",link:"MovieDetailPage_link__g83lj"},u=r(184),l=function(){var e,t,r,l=function(e){var t=(0,s.useState)([]),r=(0,i.Z)(t,2),n=r[0],a=r[1];return(0,s.useEffect)((function(){(0,c.TP)(e).then((function(e){return a(e)}))}),[e]),{movieDetails:n}}((0,a.UO)().movieId),v=l.movieDetails,d=null!==(e=null===(t=(0,a.TH)().state)||void 0===t?void 0:t.from)&&void 0!==e?e:"/";return(0,u.jsxs)("div",{className:o.movieOverview,children:[(0,u.jsxs)("div",{className:o.overviewLeft,children:[(0,u.jsxs)(n.rU,{className:o.link,to:d,children:[" ",(0,u.jsx)("button",{type:"button",children:"Go back"})]}),(0,u.jsx)("img",{src:"https://image.tmdb.org/t/p/w500/".concat(v.poster_path),alt:"{movieDetails.original_title}",className:o.movieImg})]}),(0,u.jsxs)("div",{className:o.movieDetails,children:[(0,u.jsxs)("h2",{className:o.movieTitle,children:[v.title," ("," ",v.release_date?v.release_date.substring(0,4):""," ",")"]}),(0,u.jsxs)("p",{className:o.movieScore,children:["User Score:"," ",v.vote_average?Math.fround(10*v.vote_average).toFixed(0):"","%"]}),(0,u.jsx)("h3",{className:o.reviewHeader,children:"Overview"}),(0,u.jsx)("p",{className:o.reviewText,children:v.overview}),(0,u.jsx)("h3",{className:o.genresHeader,children:"Genres"}),(0,u.jsx)("ul",{className:o.genresList,children:null===(r=v.genres)||void 0===r?void 0:r.map((function(e){return(0,u.jsx)("li",{children:e.name},e.id)}))}),(0,u.jsx)("p",{children:"Additional information"}),(0,u.jsxs)("ul",{children:[(0,u.jsx)("li",{children:(0,u.jsx)(n.rU,{to:"cast",children:"Cast"})}),(0,u.jsx)("li",{children:(0,u.jsx)(n.rU,{to:"reviews",children:"Reviews"})})]}),(0,u.jsx)(a.j3,{})]})]})}},768:function(e,t,r){r.d(t,{TP:function(){return l},UF:function(){return u},sy:function(){return o},tx:function(){return v},zv:function(){return d}});var n=r(861),a=r(757),i=r.n(a),c=r(388);c.Z.defaults.baseURL="https://api.themoviedb.org/3";var s="?api_key=4edac8017d480c85e06f8c50eacccad9",o=function(){var e=(0,n.Z)(i().mark((function e(t){var r;return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,c.Z.get("/search/movie".concat(s,"&query=").concat(t,"&language=en-US&page=1"));case 2:return r=e.sent,e.abrupt("return",r.data.results.map((function(e){return{id:e.id,title:e.title}})));case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),u=function(){var e=(0,n.Z)(i().mark((function e(){var t;return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,c.Z.get("/trending/movie/day".concat(s));case 2:return t=e.sent,e.abrupt("return",t.data.results.map((function(e){return{id:e.id,title:e.title}})));case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),l=function(){var e=(0,n.Z)(i().mark((function e(t){var r;return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,c.Z.get("/movie/".concat(t).concat(s,"&language=en-US"));case 2:return r=e.sent,e.abrupt("return",r.data);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),v=function(){var e=(0,n.Z)(i().mark((function e(t){var r;return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,c.Z.get("/movie/".concat(t,"/reviews").concat(s,"&language=en-US&page=1"));case 2:return r=e.sent,e.abrupt("return",r.data.results.map((function(e){return{author:e.author,content:e.content,id:e.id}})));case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),d=function(){var e=(0,n.Z)(i().mark((function e(t){var r;return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,c.Z.get("/movie/".concat(t,"/credits").concat(s,"&language=en-US"));case 2:return r=e.sent,e.abrupt("return",r.data.cast.map((function(e){return{name:e.name,character:e.character,profile_path:e.profile_path,id:e.id}})));case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()}}]);
//# sourceMappingURL=479.f98e1b5c.chunk.js.map