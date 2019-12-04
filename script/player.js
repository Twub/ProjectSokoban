export default{
    props:['playerPosition'],
    template: `
    <img src="/images/playerDown.png">
    `,
    mounted(){
        this.$refs.tile.style.setProperty('moveLeft',`calc(${this.playerPosition.x} * 6)`)
        this.$refs.tile.style.setProperty('moveUp',`calc(${this.playerPosition.y} * 6)`)
    },
}