const ArgumentType = require('../../extension-support/argument-type');
const BlockType = require('../../extension-support/block-type');
const Cast = require('../../util/cast');
const log = require('../../util/log');

class Scratch3PictoBloxMath {
    constructor (runtime) {
        this.runtime = runtime;
    }

    getInfo () {
        return {
            id: 'PictoBloxMath',
            name: 'Picto Blox Math',
            blocks: [
                {
                    opcode: 'square',
                    blockType: BlockType.REPORTER,
                    text: 'square [num]',
                    arguments: {
                        num:{
                            "type":"number",
                            "defaultValue":"0"
                        }
                        
                    }
                },
                {
                    opcode: 'squareRoot',
                    blockType: BlockType.REPORTER,
                    text: 'square root [num]',
                    arguments: {
                        num:{
                            "type":"number",
                            "defaultValue":"0"
                        }
                        
                    }
                }
            ],
            menus: {
            }
        };
    }

    square (args) {
        return parseInt(args.num)*parseInt(args.num);
    };
    squareRoot(args){
        return Math.sqrt(parseInt(args.num));
    }
}

module.exports = Scratch3PictoBloxMath;