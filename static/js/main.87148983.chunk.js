(this.webpackJsonpcountdown=this.webpackJsonpcountdown||[]).push([[0],{14:function(e,t,a){},20:function(e,t,a){e.exports=a(29)},29:function(e,t,a){"use strict";a.r(t);var n=a(0),s=a.n(n),c=a(16),i=a.n(c),l=a(6),o=a(7),r=a(10),d=a(8),u=a(11),h=(a(14),function(e){function t(e){var a;return Object(l.a)(this,t),(a=Object(r.a)(this,Object(d.a)(t).call(this,e))).state={days:0,hours:0,minutes:0,seconds:0},a}return Object(u.a)(t,e),Object(o.a)(t,[{key:"getTimeUntil",value:function(e){var t=Date.parse(e)-Date.parse(new Date),a=Math.floor(t/1e3%60),n=Math.floor(t/1e3/60%60),s=Math.floor(t/36e5%24),c=Math.floor(t/864e5);this.setState({days:c,hours:s,minutes:n,seconds:a})}},{key:"componentDidMount",value:function(){var e=this;setInterval((function(){return e.getTimeUntil(e.props.deadline)}),1e3)}},{key:"leading0",value:function(e){return e<10?"0"+e:e}},{key:"render",value:function(){return s.a.createElement("div",null,s.a.createElement("div",{className:"clock clock-day"},this.leading0(this.state.days)," Days"),s.a.createElement("div",{className:"clock clock-hour"},this.leading0(this.state.hours)," Hours"),s.a.createElement("div",{className:"clock clock-minute"},this.leading0(this.state.minutes)," Minutes"),s.a.createElement("div",{className:"clock clock-second"},this.leading0(this.state.seconds)," Seconds"))}}]),t}(n.Component)),m=a(31),f=a(19),v=a(32),p=function(e){function t(e){var a;return Object(l.a)(this,t),(a=Object(r.a)(this,Object(d.a)(t).call(this,e))).state={deadline:"December 25, 2020",newDeadline:""},a}return Object(u.a)(t,e),Object(o.a)(t,[{key:"changeDeadline",value:function(){this.setState({deadline:this.state.newDeadline})}},{key:"render",value:function(){var e=this;return s.a.createElement("div",{className:"app"},s.a.createElement("div",{className:"app-title"},"Countdown to ",this.state.deadline),s.a.createElement(h,{deadline:this.state.deadline}),s.a.createElement(m.a,{inline:!0,className:"deadline-form"},s.a.createElement(f.a,{className:"deadline-input",placeholder:"new date",onChange:function(t){return e.setState({newDeadline:t.target.value})}}),s.a.createElement(v.a,{className:"deadline-btn btn-lg",onClick:function(){return e.changeDeadline()}},"Submit")))}}]),t}(n.Component);i.a.render(s.a.createElement(p,null),document.getElementById("root"))}},[[20,1,2]]]);
//# sourceMappingURL=main.87148983.chunk.js.map