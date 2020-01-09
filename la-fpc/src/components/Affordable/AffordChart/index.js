import React, { Component } from 'react'
import { Doughnut } from 'react-chartjs-2'
import style from './style.module.css'


class Graph extends Component {

    colorHandler = (array, o) => {
        const r = () => Math.floor(Math.random() * 256)
        const b = () => Math.floor(Math.random() * 256)
        const g = () => Math.floor(Math.random() * 256)
        return array.map(p => `rgba(${r()},${b()},${g()}, ${o})`)
    }

    hover = (array) => {
        return array.map(c => {
            const color = c.split(",")
            color[3] = ".5)"
            color.join(",")
            return color
        })
    }

    dataHandler = (props) => {
        const colorArray = this.colorHandler(this.props.affordableData, 1)
        const data = {
            labels: props.affordableData.map(r => { return r.group }),
            datasets: [{
                data: props.affordableData.map(r => { return r.val2020 }),
                backgroundColor: colorArray,
                hoverBackgroundColor: this.hover(colorArray)
            }]
        }
        return data
    }

    render() {
        return (
            <div>
                <div className={style.canvas}>
                  <h3> {this.props.affordableData[0] && this.props.affordableData[0].indicator}</h3>
                        <Doughnut data={this.dataHandler(this.props)} />
                    </div>
            </div>
        )
    }
}

export default Graph;