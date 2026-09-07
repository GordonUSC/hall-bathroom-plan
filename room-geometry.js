/* Shared planning geometry. Values are user-editable estimates, never a survey. */
(function(root){
 function geometry(s){const width=+s.width,length=+s.length,tubLength=+s.tubLength,tubDepth=+s.tubDepth;return {width,length,tubLength,tubDepth,closetRun:length-tubLength,closetDepth:tubDepth,area:(width*length-(length-tubLength)*tubDepth)/144,gap:width-tubDepth-18.75,points:[[0,0],[width,0],[width,length],[tubDepth,length],[tubDepth,tubLength],[0,tubLength]],legacy:{A:width,B:length,shape:'L',nw:length-tubLength,nd:tubDepth,ncorner:'TR',tubWall:'w0',vanWall:'w4',toiletWall:'w4',doorWall:'w3',tubLength,tubDepth,joeClosetLayout:true}};}
 root.JoeRoomGeometry=geometry;if(typeof module!=='undefined')module.exports=geometry;
})(typeof window!=='undefined'?window:globalThis);
