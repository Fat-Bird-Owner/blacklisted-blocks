Events.on(PlayEvent, () => {
try {

if (!Core.settings.getBool("bb-enabled")) return;
  
let text = "Banned:"
let bans = new ObjectSet();
let techTree = Vars.state.rules.planet.techTree
let amount = Core.settings.getInt("bb-amount");

if (!techTree || Vars.state.rules.planet != Planets.serpulo) return;

techTree.each(n => {
try {

if ((Mathf.random() * 100) >= 75 && bans.size() <= amount){
bans.add(n.content)
text = text + " " + n.content.emoji()
}
  
} catch(e){}});

Vars.ui.showInfoToast(text, 15);
Vars.state.rules.bannedBlocks = bans;
  
} catch(e){
Vars.ui.showText("bb-ban-main.js", e);
}});
