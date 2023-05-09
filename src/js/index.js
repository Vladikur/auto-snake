import 'normalize.css';
import '../scss/index.scss';
import getField from './getField'
import Perlin from "./Perlin";

class AutoSnake {
    constructor() {
        this.cell = 10
        this.map = 800
        this.game = null
        this.gameSpeed = 100
        this.mapColor = '#ECECEC'
        this.snakeColor = '#BAA6CB'
        this.wallColor = '#A9B6A2'
        this.foodColor = '#EF704F'
        this.cells = getField()

        this.canvas = document.querySelector('.js-auto-snake')
        this.ctx = this.canvas.getContext('2d')
        this.canvas.width = this.map
        this.canvas.height = this.map

        this.createMap()
        this.runGame()
    }

    createMap() {
        const perlin = new Perlin()

        for (let y = 0; y < 80; y += 1){
            for (let x = 0; x < 80; x += 1){
                const constanta = 0.1
                const perX = x * constanta
                const perY = y * constanta
                let v = parseInt(perlin.get(perX, perY) * 250);

                this.cells[y][x] = v > 50 || v < -50 ? 1 : 0
            }
        }
    }

    drawGame() {
        this.ctx.clearRect(0, 0, this.map, this.map)
        this.ctx.fillStyle = this.mapColor
        this.ctx.fillRect(0, 0, this.map, this.map)

        this.cells.forEach((row, rowInd) => {
            row.forEach((col, colInd) => {
                if (col === 1) {
                    const x = colInd * this.cell
                    const y = rowInd * this.cell
                    this.ctx.fillStyle = this.wallColor
                    this.ctx.fillRect(x, y, this.cell, this.cell)
                }
            })
        })
    }

    runGame() {
        this.game = setInterval(() => {
            this.drawGame()
        }, this.gameSpeed)
    }
}

new AutoSnake()
