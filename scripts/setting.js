Events.on(ClientLoadEvent, () => {
try {

Vars.ui.settings.addCategory("Blacklist Blocks", Icon.menu, t => {

t.checkPref("bb-enabled", false, b => {});
t.sliderPref("my-setting", 10, 0, 40, 1, b => {});

t.button(Core.bundle.get("settings.researchReset"), () => {
try {

Vars.ui.showConfirm(Core.bundle.get("comfirm.bb-reset-confirm") , () => {
try {

Vars.state.rules.bannedBlocks = new ObjectSet();
  
} catch(e){}})
  
} catch(e){
Vars.ui.showInfoToast(e,5);
}}).margin(14).width(240).pad(6);
  
});
  
} catch(e){
Vars.ui.showText("bb-setting.js", e);
}});
