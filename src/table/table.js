import React, { Component } from 'react';
import './table.css';
import Child from './tableChild.js'
import ChildLast from './childlast.js';
import ChildTwo from './childtwo.js';

class Table extends Component {
    constructor(props) {
        super(props);
        this.state = {
            Body: [
              {
                name: '李狗蛋',
                job: '程序猿',
              },
              {
                name: '王翠花',
                job: '攻城狮',
              },
              {
                name: '二狗子',
                job: '加班狗',
              }
            ],
            isTrue: false,
            i : 0,
            name: '小明',
            childQ: '第一个子组件'
          };
          
          this.removeName = this.removeName.bind(this)
      }
     removeName() {
        this.state.isTrue = !this.state.isTrue;
            if (this.state.isTrue) {
                this.state.i++;
                this.setState({
                    Body: [
                        {
                            name: '小明' + this.state.i,
                            job: 'qweqweqw'
                        }
                    ]
                })
            } else {
                this.state.i++;
                this.setState({
                    Body: [
                        {
                            name: '小张' + this.state.i,
                            job: 'aaaaaa'
                        }
                    ]
                })
            }
        console.log(this)
    }

    onProps(e) {
        alert('哈哈哈哈' + e)
    }
    nameProps = (name) => {
        this.setState({
            name: name
        })
    };
    nameChild = (name) => {
        this.setState({
            childQ: name
        })
    };
    render() {
        const myHead = this.props.Head.map((item, index) => {
            return <th scope="col" key={index}>{item.header}</th>;
            {/*因为使用map，返回的是一个数组，每个循环元素必须赋值一个Key值，这是唯一标识符 */}
        });
        const Body = [
            {
              name: '李狗蛋',
              job: '程序猿',
            },
            {
              name: '王翠花',
              job: '攻城狮',
            },
            {
              name: '二狗子',
              job: '加班狗',
            }
          ];
        return (
            <div className="container">
                <div className="row">
                    <div className="col-sm-12">
                        <table border="0" cellSpacing="0" cellPadding="0" className="table">
                            {/* cellspacing：单元格之间的间距像素，cellpadding：单元格内容与边框之间的间距像素 */}
                            <thead>
                            <tr className="table-info">
                                {myHead}
                            </tr>
                            </thead>
                            <tbody>
                            <tr>
                                <td>{this.state.Body[0].name}</td>
                                <td>{this.state.Body[0].job}</td>
                            </tr>
                            </tbody>
                            <Child Body={Body}/>
                        </table>
                        <div>{this.state.name}</div>
                        <ChildTwo childH={this.state.childQ}/>
                        <button onClick={this.removeName}>更改Name</button>
                        <ChildLast data={this.onProps} nameP={this.nameProps} childWorld={this.nameChild}/>
                        {/*  父组件向子组件传了一个方法为data  */}
                    </div>
                </div>
            </div>
        )
    }
}

export default Table;
