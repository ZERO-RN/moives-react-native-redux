/**
 * @author ling
 * @email helloworld3q3q@gmail.com
 * @create date 2017-05-18 09:58:31
 * @modify date 2017-05-18 09:58:31
 * @desc Loading
 */
import React, {Component} from 'react';
import {Animated, ART, View, StyleSheet} from 'react-native';
import {size} from '../../util/style';

// import {Surface, Path, Shape} from 'react-native';
const {Surface, Path, Shape}   = ART
// const Path   = ART
// const Shape   = ART
class Circle extends Component {
    render() {
        let path = Path();
        let radius = 10;

        // let radius = this.props.radius;
        path.moveTo(0, -radius).arc(0, radius * 2, radius)
            .arc(0, radius * -2, radius).close();

        return (
            <Shape d={path}
                   x={this.props.x}
                   y={this.props.y}
                   scale={this.props.scale}
                   fill='#0f0'
                   stroke='#ff0'
                   strokeWidth={1}>

            </Shape>
        )
    }
}

export default class Loading extends Component {
    constructor() {
        super();
        this.state = {
            circles: [
                new Animated.Value(0),
                new Animated.Value(0),
                new Animated.Value(0)
            ]
        }
    }

    static defaultProps = {
        spaceBetween: 8,
        size: 12,
    };

    componentDidMount() {
        this.state.circles.forEach((val, index) => {
            const timer = setTimeout(() => this.animate(index), index * 300);
            this.timers.push(timer);
        });
    }

    componentWillUnmount() {
        this.timers.forEach((timer) => {
            clearTimeout(timer);
        });

        this.unmounted = true;
    }

    timers = [];

    animate(index) {
        Animated.sequence([
            Animated.timing(this.state.circles[index], {
                toValue: 1,
                duration: 600
            }),
            Animated.timing(this.state.circles[index], {
                toValue: 0,
                duration: 600
            })
        ])
            .start(() => {
                if (!this.unmounted) {
                    this.animate(index);
                }
            });
    }

    renderBubble(index) {
        const {size, spaceBetween, color} = this.props;
        const scale = this.state.circles[index];
        const offset = {
            x: size + index * (size * 2 + spaceBetween),
            y: size + 2
        };

        var AnimatedCircle = Animated.createAnimatedComponent(Circle);
        return (<AnimatedCircle radius={size}
                                scale={scale} {...offset}
        />);
    }

    render() {
        let {size, spaceBetween} = this.props;
        let width = size * 6 + spaceBetween * 2;
        let height = size * 10;
        return (
            <View style={style.loading}>
                <Surface width={width} height={height}>
                    {this.renderBubble(0)}
                    {this.renderBubble(1)}
                    {this.renderBubble(2)}
                </Surface>
            </View>
        );
    }
}

let style = StyleSheet.create({
    loading: {
        position: 'absolute',
        width: size.width,
        height: size.height,
        backgroundColor: '#3b4a4a',
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'row',
        zIndex: 10,
    }
});
//
// module.exports = Loading;