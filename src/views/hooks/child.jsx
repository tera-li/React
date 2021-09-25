import React, {Component} from "react";
import {Consumer, MyContext} from "./context";

export default class Child extends Component {
    /**
     * 使Child实例上的context值 = 使用createContext的Provider传入的value值
     * 1、contextType为实例的context，值为Provider的value值
     * 2、使用Consumer，表达式传入value值为Provider的value值
     * */
    static contextType = MyContext;

    render() {
        return (
            <div>
                <Consumer>
                    {(value) => {
                        return `这是context传的值${value}`;
                    }}
                </Consumer>
            </div>
        );
    }
}
