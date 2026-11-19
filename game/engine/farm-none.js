/* WORLDWALKER engine · the stand-in for farm.js in a Canvas game whose episodes never plant, build in place or have
   seasons (tools/build.js picks it, to keep the file under the Canvas limit). Every call does nothing. */
(function () {
  const no = () => false, none = () => null;
  WW.farm = { KINDS: [], on: no, ents: () => [], setup() { }, tick() { }, crops: () => [], current: none, seedCount: () => 0, nextCrop() { },
    plant: no, reap: no, kit: none, kitLeft: () => 0, place: no, pickPiece() { }, interact() { }, carryLine: () => '', drawEnt() { }, drawCrop() { } };
})();
