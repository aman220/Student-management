import React, { useState, useEffect } from 'react';
import { View, Text } from 'react-native';
import Svg, { Circle } from 'react-native-svg';
import Font from '../../constants/Font';

interface Props {
    percentage: number;
    strokeWidth: number;
    radius: number;
}

const CircularProgressBar: React.FC<Props> = ({
    percentage,
    strokeWidth,
    radius,
}) => {
    const circumference = 2 * Math.PI * radius;
    const [progress, setProgress] = useState(0);
    const [displayText, setDisplayText] = useState(0);

    useEffect(() => {
        let currentProgress = 0;
        const interval = setInterval(() => {
            currentProgress += 1;
            setProgress(currentProgress);
            setDisplayText(currentProgress);
            if (currentProgress >= percentage) {
                clearInterval(interval);
            }
        }, 0);

        return () => clearInterval(interval);
    }, [percentage]);

    const progressAngle = (360 * progress) / 130;
    const dashArray = [progressAngle, circumference].join(' ');

    // Calculate position for text
    const textX = radius - strokeWidth / 2;
    const textY = radius - 10 ; 

    return (
        <View>
            <Svg width={radius * 2} height={radius * 2}>
                <Circle
                    stroke="#d3d3d3"
                    fill="none"
                    strokeWidth={strokeWidth}
                    cx={radius}
                    cy={radius}
                    r={radius - strokeWidth / 2}
                />
                <Circle
                    stroke="#007AFF"
                    fill="none"
                    strokeWidth={strokeWidth}
                    strokeDasharray={dashArray}
                    cx={radius}
                    cy={radius}
                    r={radius - strokeWidth / 2}
                    strokeLinecap="round"
                    transform={`rotate(-90 ${radius} ${radius})`}
                />
                {/* Add text element for percentage */}
                <Text
                    style={{
                        position: 'absolute',
                        textAlign: 'center',
                        width: radius * 2,
                        top: textY,
                        color: '#000000',
                        fontFamily: Font['poppins-bold'],
                    }}>
                    {displayText}%
                </Text>
            </Svg>
        </View>
    );
};

export default CircularProgressBar;
