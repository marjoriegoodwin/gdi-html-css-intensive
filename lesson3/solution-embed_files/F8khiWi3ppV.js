/*1345429701,173217057*/

if (window.CavalryLogger) { CavalryLogger.start_js(["H2iu9"]); }

__d("DesktopPluginLogging",["Run","Bootloader"],function(a,b,c,d,e,f){var g=b('Run'),h={logPluginData:function(){g.onAfterLoad(function(){var i=b('Bootloader');i.loadModules(['FBDesktopPlugin','FBDesktopDetect','AjaxRequest','URI'],function(j,k,l,m){if(m().getSubdomain()!='www')return;var n={is_plugin_installed:k.isPluginInstalled(),is_app_running:j.isAppRunning(),app_user_id:j.getUserID()},o=m().setPath('/desktop/eventlog.php').setQueryData({category:'logging',event:'pluginLogging',payload:JSON.stringify(n)}),p=new l('GET',o);p.prelude='';p.send();});});}};e.exports=h;});
__d("PostLoadJS",["Bootloader","Run"],function(a,b,c,d,e,f){var g=b('Bootloader'),h=b('Run');function i(k,l){h.onAfterLoad(function(){g.loadModules.call(g,[k],l);});}var j={loadAndRequire:function(k){i(k,bagofholding);},loadAndCall:function(k,l,m){i(k,function(n){n[l].apply(n,m);});}};e.exports=j;});