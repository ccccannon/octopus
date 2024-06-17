// Learn cc.Class:
//  - https://docs.cocos.com/creator/manual/en/scripting/class.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/manual/en/scripting/life-cycle-callbacks.html

cc.Class({
    extends: cc.Component,

    properties: {
        colors: {
            default: [],
            type: [cc.Color],
            get colors() {
                return this._colors;
            },
            set colors(colors) {
                this._colors = colors;
                this._updateColors();
            }
        }

    },


    onEnable() {
        cc.director.once(cc.Director.EVENT_AFTER_DRAW, this._updateColors, this);
    },

    onDisable() {
        cc.director.off(cc.Director.EVENT_AFTER_DRAW, this._updateColors, this);
        this.node['_renderFlag'] |= cc['RenderFlow'].FLAG_COLOR;
    },

    _updateColors() {
        const cmp = this.getComponent(cc.RenderComponent);
        if (!cmp) return;
        const _assembler = cmp['_assembler'];
        if (!(_assembler instanceof cc['Assembler2D'])) return;
        const uintVerts = _assembler._renderData.uintVDatas[0];
        if (!uintVerts) return;
        const color = this.node.color;
        const floatsPerVert = _assembler.floatsPerVert;
        const colorOffset = _assembler.colorOffset;
        let count = 0;
        for (let i = colorOffset, l = uintVerts.length; i < l; i += floatsPerVert) {
            uintVerts[i] = (this.colors[count++] || color)['_val'];
        }
    },

    // onLoad () {},

    start() {

    },

    // update (dt) {},
});
