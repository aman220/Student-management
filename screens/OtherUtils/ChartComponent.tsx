import React from 'react';
import { LineChart } from 'react-native-chart-kit';
import { Dimensions, View } from 'react-native';

interface SemesterData {
    semester: string;
    cpi: number;
}
const ChartComponent = () => {
    const studentProgress: SemesterData[] = [
        { semester: 'Semester 1', cpi: 28 },
        { semester: 'Semester 2', cpi: 80 },
    ];


    const screenWidth = Dimensions.get('window').width;

    return (
        <View>
            <LineChart
                data={{
                    labels: studentProgress.map((item) => item.semester),
                    datasets: [
                        {
                            data: studentProgress.map((item) => item.cpi),
                        },
                    ],
                }}
                width={screenWidth}
                height={220}
                yAxisSuffix="%"
                yAxisInterval={10} 
                chartConfig={{
                    backgroundColor: '#ffffff',
                    backgroundGradientFrom: '#ffffff',
                    backgroundGradientTo: '#ffffff',
                    decimalPlaces: 0,
                    color: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
                    labelColor: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
                    style: {
                        borderRadius: 16
                    },
                    propsForDots: {
                        r: '6',
                        strokeWidth: '2',
                        stroke: '#ffa726'
                    }
                }}
                bezier
                style={{
                    marginVertical: 8,
                    borderRadius: 16
                }}
                fromZero={true} // Ensure the y-axis starts from 0
            />
        </View>
    );
};

export default ChartComponent;
