(window.webpackJsonpgithub=window.webpackJsonpgithub||[]).push([[0],{21:function(e,t,a){e.exports=a(51)},26:function(e,t,a){},27:function(e,t,a){},28:function(e,t,a){},30:function(e,t,a){},51:function(e,t,a){"use strict";a.r(t);var n,r=a(0),s=a.n(r),i=a(20),c=a.n(i),u=(a(26),a(3)),l=a(4),o=a(6),h=a(5),m=a(7),d=(a(27),a(8)),p=(a(28),a(2)),b=a.n(p),v=a(9),f=(a(30),a(10)),g=a.n(f),E=function(e){function t(e){var a;return Object(u.a)(this,t),(a=Object(o.a)(this,Object(h.a)(t).call(this,e))).state={gitHubUsers:[],extraDetails:"",loading:!0},a}return Object(m.a)(t,e),Object(l.a)(t,[{key:"componentDidMount",value:function(){this.fetchGitHubData()}},{key:"componentDidUpdate",value:function(e){e.gitHubUserName!==this.props.gitHubUserName&&(this.setState({loading:!0}),this.fetchGitHubData(this.props.gitHubUserName?this.props.gitHubUserName:"a"))}},{key:"fetchExtraDetailUser",value:function(){var e=Object(v.a)(b.a.mark(function e(t){var a;return b.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,g.a.get("https://api.github.com/users/"+t+"/repos");case 2:return a=e.sent,e.abrupt("return",a);case 4:case"end":return e.stop()}},e)}));return function(t){return e.apply(this,arguments)}}()},{key:"fetchGitHubData",value:function(){var e=Object(v.a)(b.a.mark(function e(){var t,a,n=arguments;return b.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return t=n.length>0&&void 0!==n[0]?n[0]:"a",e.prev=1,e.next=4,g.a.get("https://api.github.com/search/users?q=".concat(t));case 4:a=e.sent,this.setState({gitHubUsers:a.data.items,loading:!1}),e.next=11;break;case 8:throw e.prev=8,e.t0=e.catch(1),e.t0;case 11:case"end":return e.stop()}},e,this,[[1,8]])}));return function(){return e.apply(this,arguments)}}()},{key:"getExtraDetails",value:function(){var e=Object(v.a)(b.a.mark(function e(t,a){var r;return b.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return n=a,console.log(n),e.next=4,this.fetchExtraDetailUser(t);case 4:r=e.sent,this.setState({extraDetails:r.data,loading:!1}),console.log(this.state.extraDetails);case 7:case"end":return e.stop()}},e,this)}));return function(t,a){return e.apply(this,arguments)}}()},{key:"render",value:function(){var e=this,t=this.state.gitHubUsers.map(function(t,a){return s.a.createElement("div",{className:"display-card",key:a},s.a.createElement("div",null,s.a.createElement("img",{className:"profile-pic",src:t.avatar_url})),s.a.createElement("div",{className:"user-details"},s.a.createElement("div",{className:""},t.login),s.a.createElement("div",{className:""},t.html_url),s.a.createElement("div",{className:""},t.score),s.a.createElement("div",{class:"assignees-url"},n===a&&e.state.extraDetails.length?"Assignees url at 0th index : ".concat(e.state.extraDetails[0].assignees_url):"")),s.a.createElement("div",{className:"extra-details"},s.a.createElement("button",{className:"extra-details-btn",onClick:function(){return e.getExtraDetails(t.login,a)}},"Show more")))});return s.a.createElement("div",null,t)}}]),t}(s.a.Component),N=a(48),w=function(e){function t(e){var a;return Object(u.a)(this,t),(a=Object(o.a)(this,Object(h.a)(t).call(this,e))).state={userName:"",userNameToSend:""},a.handleChange=a.handleChange.bind(Object(d.a)(a)),a.handleSubmit=a.handleSubmit.bind(Object(d.a)(a)),a.updateUrl=a.updateUrl.bind(Object(d.a)(a)),a.updateUrl=N.debounce(a.updateUrl,500),a}return Object(m.a)(t,e),Object(l.a)(t,[{key:"handleChange",value:function(e){this.setState({userName:e.target.value}),this.updateUrl()}},{key:"updateUrl",value:function(){this.setState({userNameToSend:this.state.userName})}},{key:"handleSubmit",value:function(e){e.preventDefault()}},{key:"render",value:function(){return s.a.createElement("div",null,s.a.createElement("h1",null,"GitHub Profile Viewer"),s.a.createElement("div",{className:"profile-view-container"},s.a.createElement("div",{className:"search-user-name"},"GitHub Name"),s.a.createElement("input",{className:"user-text-box",type:"text",value:this.state.userName,onChange:this.handleChange}),s.a.createElement("div",{className:"profile-view-list"},s.a.createElement(E,{gitHubUserName:this.state.userNameToSend}))))}}]),t}(s.a.Component),x=function(e){function t(){return Object(u.a)(this,t),Object(o.a)(this,Object(h.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return s.a.createElement(w,null)}}]),t}(s.a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(s.a.createElement(x,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[21,1,2]]]);
//# sourceMappingURL=main.4e613096.chunk.js.map