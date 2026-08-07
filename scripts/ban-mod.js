Events.on(PlayEvent, () => {
try {

let text = "Banned:"
let bans = new ObjectSet();
let techTree = Vars.state.rules.planet.techTree

if (!techTree || Vars.state.rules.planet != Planets.serpulo) return;

techTree.each(n => {
try {

if ((Mathf.random() * 100) >= 75 && bans.size() <= 25){
bans.add(n.content)
text = text + " " + n.content.emoji()
}
  
} catch(e){}});

Vars.ui.showInfoToast(text, 15);
Vars.state.rules.bannedBlocks = bans;
  
} catch(e){
Vars.ui.showText("bb-ban-mod.js", e);
}});
