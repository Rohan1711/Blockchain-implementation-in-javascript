const {genesis_info} = require('./genesis.js');
const cryptoHash = require('./crypto-Hash')

class Block
{
constructor({timestamp,previousHash,currentHash,data})
{
    this.timestamp = timestamp;
    this.previousHash = previousHash;
    this.currentHash = currentHash;
    this.data = data;
}

static genesis()
{
    return new this(genesis_info);
}
static mineBlock({lastblock, data})
{
    const timestamp = new Date();
    const previousHash = lastblock.currentHash;
    return new this(
        {
            timestamp,
            previousHash,
            currentHash : cryptoHash(timestamp,previousHash,data),
            data
        });
}
}
module.exports= Block;