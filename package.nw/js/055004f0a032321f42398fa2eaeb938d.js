'use strict';!function(require,directRequire){const a=require('react'),b=require('react-dom'),c=require('classnames'),d=require('redux'),e=require('./8a6bfff9d7b1c7d81421b0982e3dda9e.js'),f=require('child_process').exec,g=require('./a8c87029da0fa06e986298d447ab0fe2.js'),h=require('./1fcc6bd55b687d154a4247e57fe3011d.js'),i=require('./ba23d8b47b1f4ea08b9fd49939b9443f.js'),j=require('./c4b43629b4de3d73a79d27fb0314f46a.js'),k=require('./274c496e897a23f75f9287cb59f86a50.js'),l=require('./fc137838572a83604db39acff8e909e0.js'),m=require('./eadce02c750c875a10680bcfedadec88.js'),n=require('./3b5f8e2469c474c8d433c1c6926d8999.js'),o=require('./d3976cc01aeebc5b09e11c4135b6bd8d.js'),p=require('./3c55dff3626a3ee184d599f076158345.js'),q=require('./cc2c2970ff81ae4a83123e81ee123da2.js'),r=require('./9fdd4ac31a05c27355910f0d74accd4c.js'),s=require('./56c390e04c10e91a4aa2a2c19d9a885d.js'),t=require('./common/locales/index.js'),u=require('./da7c31daaf542cf1796023d8e344b98a.js'),{enterBackground:v,enterForeground:w}=require('./a3959bb900db9f65ed2e9c5dfa6977b7.js'),x=require('./ac78c5d79e26c1024c1fbe65d4c8047e.js'),y=require('./356b2757917fbfdeb38c7afc0271eed9.js'),{connect:z}=require('react-redux');class A extends a.Component{constructor(a){super(a),this.state={marginTop:0,timeStamp:0,CleanCacheLeft:0,CleanCacheTop:0,CleanCacheRight:0}}componentDidMount(){!global.onlySimulator&&this.props.show?this.setState({marginTop:'0px'}):this.setState({marginTop:`${-b.findDOMNode(this).getBoundingClientRect().height}px`}),this._cancalLocaleListener=t.onChangeLocale(()=>this.forceUpdate())}componentWillUnmount(){this._cancalLocaleListener()}componentWillReceiveProps(a){a.show!=this.props.show&&(!global.onlySimulator&&a.show?this.setState({marginTop:'0px'}):this.setState({marginTop:`${-b.findDOMNode(this).getBoundingClientRect().height}px`}))}onSetAppservice(){this.props.toolbarConfigShow||(this.props.debugPopup?(this.props.windowActions.toggleDebugWindow(),this.props.compile()):this.props.windowActions.toggleDebugWindow())}onSetSimulator(){this.props.toolbarConfigShow||(this.props.simulatorPopup?(this.props.windowActions.toggleSimulatorWindow(),this.props.compile()):this.props.windowActions.toggleSimulatorWindow())}onLaunchSimulator(){this.props.toolbarConfigShow||this.props.compile({origin:s.COMPILE_ORIGIN.BUTTON})}toggleCompileCondiction(a){if(!this.props.toolbarConfigShow){a.stopPropagation(),this.props.toolbarActions.toggleClickKey(m.COMPILECONDICTION);const b=a.currentTarget.getBoundingClientRect();this.setState({condictionDropDownLeft:b.left,condictionDropDownTop:b.top+20})}}toggleCleanCache(a){if(!this.props.toolbarConfigShow){a.stopPropagation();const b=a.currentTarget.getBoundingClientRect();this.setState({CleanCacheTop:b.top+22,CleanCacheLeft:b.left,CleanCacheRight:void 0}),this.props.toolbarActions.toggleClickKey(m.CLEANCACHE)}}onSetBackground(){if(!this.props.toolbarConfigShow){if(this.props.compileType==r.weapp||this.props.compileType===r.game)if(this.props.backgroundShow){const a=this.props.webviewInfo.pathName,b=this.props.webviewInfo.query,c=this.props.condiction;w('toolbarAndBackMode',{path:a,query:b,scene:c.scene,shareInfo:c.shareInfo,referrerInfo:c.referrerInfo})}else v('toolbarAndBackMode');this.props.setBackground({show:!this.props.backgroundShow})}}showErr(a,b=t.config.TOOLBAR_ERROR_TITLE,c=()=>{}){this.props.infoActions.setConfirmInfo({show:!0,showCancel:!1,title:b,content:a,callback:async()=>{c()}})}render(){const b=this.props,d=b.config.title,f='en'===t.getLocale()?{fontSize:10}:{};return a.createElement('div',{className:'header',style:{marginTop:this.state.marginTop}},a.createElement(e,null),a.createElement(k,{left:this.state.condictionDropDownLeft,top:this.state.condictionDropDownTop}),a.createElement(y,{left:this.state.CleanCacheLeft,top:this.state.CleanCacheTop,right:this.state.CleanCacheRight}),a.createElement('div',{className:'toolbar'},a.createElement('div',{className:'toolbar-items',style:{flex:0}},a.createElement('div',{className:'toolbar-item',onClick:this.onSetSimulator.bind(this),id:'toolbar-simulator'},a.createElement('div',{className:c('toolbar-action',{"toolbar-action-active":b.simulatorShow&&!b.simulatorPopup}),disabled:b.toolbarConfigShow},a.createElement('div',{className:'toolbar-button'},a.createElement('i',{className:'ui-icon-simulator'})),d?a.createElement('p',{className:'toolbar-label'},t.config.TOOLBAR_SIMULATOR):null)),a.createElement('div',{className:'toolbar-item',onClick:this.onSetAppservice.bind(this),id:'toolbar-devtools'},a.createElement('div',{className:c('toolbar-action',{"toolbar-action-active":b.debugShow&&!b.debugPopup}),disabled:b.toolbarConfigShow},a.createElement('div',{className:'toolbar-button'},a.createElement('i',{className:'ui-icon-debug'})),d?a.createElement('p',{className:'toolbar-label'},t.config.TOOLBAR_DEBUGGER):null))),a.createElement('div',{className:'toolbar-items',style:{justifyContent:'left'}},a.createElement('div',{className:'toolbar-item'}),a.createElement('div',{className:'toolbar-item'},a.createElement('div',{className:'toolbar-action-group'},a.createElement('div',{className:'toolbar-action',onClick:this.toggleCompileCondiction.bind(this),disabled:b.toolbarConfigShow},a.createElement('div',{className:'toolbar-action-selector',onClick:this.toggleCompileCondiction.bind(this)},a.createElement('p',null,b.condictionName),a.createElement('i',{className:c({"ui-icon-arrow-down":b.clickkey!=m.COMPILECONDICTION,"ui-icon-arrow-up":b.clickkey==m.COMPILECONDICTION})}))),a.createElement('div',{className:'toolbar-action',onClick:this.onLaunchSimulator.bind(this),id:'toolbar-compile',disabled:b.toolbarConfigShow},a.createElement('div',{className:'toolbar-button'},a.createElement('i',{className:'ui-icon-refresh'})),d?a.createElement('p',{style:f,className:'toolbar-label'},t.config.TOOLBAR_COMPILE):null))),a.createElement('div',{className:'toolbar-item'},a.createElement('div',{className:'toolbar-action',onClick:this.onSetBackground.bind(this),disabled:b.toolbarConfigShow,id:'toolbar-switch'},a.createElement('div',{className:'toolbar-button'},a.createElement('i',{className:'ui-icon-backstage'})),d?a.createElement('p',{className:'toolbar-label'},b.backgroundShow?t.config.TOOLBAR_SWITCH_TO_FOREGROUND:t.config.TOOLBAR_SWITCH_TO_BACKGROUND):null)),a.createElement('div',{className:'toolbar-item'},a.createElement('div',{className:'toolbar-action',onClick:this.toggleCleanCache.bind(this),disabled:b.toolbarConfigShow,id:'toolbar-cleancache'},a.createElement('div',{className:'toolbar-button'},a.createElement('i',{className:'ui-icon-cache'}),a.createElement('i',{className:c({"ui-icon-arrow-down":b.clickkey!=m.CLEANCACHE,"ui-icon-arrow-up":b.clickkey==m.CLEANCACHE})})),d?a.createElement('p',{className:'toolbar-label'},t.config.TOOLBAR_CLEAR_CACHE):null)))))}}module.exports=z((a)=>{const b=a.project.current||{},c=b.compileType,d=b.condiction&&b.condiction[c];let e={},f=t.config.TOOLBAR_ORDINARY_COMPILATION;d&&d.list&&(e=d.list[d.current],e?f=e.name:e={});const g=a.toolbar.clickKey,h=a.simulator.webviewInfos[a.simulator.currentWebviewID]||{},i=a.toolbar.config;return{compilerSettings:a.settings.compiler||{},autoPreviewTimestamp:a.toolbar.autoPreviewTimestamp,show:a.window.toolbar&&a.window.toolbar.show,previewQRShow:m.PREVIEWCODE==g,remoteDebugCodeShow:m.REMOTEDEBUGCODE===g,debugShow:a.window.debug.show,debugPopup:a.window.debug.popup,remoteDebugWindow:a.window.remoteDebugWindow,editorShow:a.window.editor&&a.window.editor.show,simulatorShow:a.window.simulator&&a.window.simulator.show,simulatorPopup:a.window.simulator&&a.window.simulator.popup,projectInfoShow:m.PROJECTINFO==g,device:a.toolbar.deviceInfo,backgroundShow:a.simulator.backgroundShow,clickkey:a.toolbar.clickKey,project:b,condiction:e,webviewInfo:h,compileType:c,condictionName:f,appConfig:a.simulator.appConfig||{},toolbarConfigShow:a.window.toolbarConfig&&a.window.toolbarConfig.show,config:i}},(a)=>({toolbarActions:o.bindActionCreators(l,a),windowActions:o.bindActionCreators(g,a),infoActions:o.bindActionCreators(h,a),compile:o.bindActionCreators(i.compile,a),setBackground:o.bindActionCreators(i.setBackground,a)}))(A)}(require('lazyload'),require);