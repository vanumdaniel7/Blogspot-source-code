import { AreaChart, Area, ResponsiveContainer, YAxis, XAxis, CartesianGrid, Tooltip } from "recharts";
import { Box, Text, VStack } from "@chakra-ui/react";


const CustomizedXAxisLabel = ({ x, y, stroke, payload }) => {
    return (
        <g transform = {`translate(${x},${y})`}>
            <text x = {0} y = {10} textAnchor = "end" fill = "#ABB5BF" fontSize = "10px" transform="rotate(-45)">
                {payload.value}
            </text>
        </g>
    )
};

const CustomizedYAxisLabel = ({ x, y, stroke, payload }) => {
    return (
        <g transform = {`translate(${x},${y})`}>
            <text x = {-5} y = {0} textAnchor = "end" fill = "#ABB5BF" fontSize = "14px">
                {payload.value}
            </text>
        </g>
    )
};

const CustomTooltip = ({ active, payload, label }) => {
    if (active && payload && payload.length) {
        return (
            <Box padding = "10px" color = "#ABB5BF" fontSize = "14px" backgroundColor = "#12181F" border = "1px solid #3B434C" boxShadow = "">
                {`${label} :`}&nbsp;
                <Text display = "inline" color = "#3e92d5">{`${payload[0].value}`}</Text>
            </Box>
        );
    }
}
  
const AreaGraph = ({ data }) => {
    const monthNumberToName = new Map([
        [1, "January"],
        [2, "February"],
        [3, "March"],
        [4, "April"],
        [5, "May"],
        [6, "June"],
        [7, "July"],
        [8, "August"],
        [9, "September"],
        [10, "October"],
        [11, "November"],
        [12, "December"]
    ]);
    const dataWithMonthNames = data.map(({ month, count }) => ({ month: monthNumberToName.get(month), count: count }));

    return (
        <VStack width = "100%" height = "100%" gap = "40px" paddingY = "24px" backgroundColor = "#12181F" borderRadius = "5px">
            <Box width = "100%" paddingX = "24px">
                <Text color = "white" overflow = "hidden" maxWidth = "100%" textOverflow = "ellipsis" whiteSpace = "nowrap">Blogs contributed (this year)</Text>
            </Box>
            <Box flex = "1" width = "100%">
                <ResponsiveContainer width = "100%" height = {250}>
                    <AreaChart data = {dataWithMonthNames} margin = {{ top: 0, right: 25, bottom: 0, left: -10 }}>
                        <defs>
                            <linearGradient id = "colorCount" x1 = "0" y1 = "0" x2 = "0" y2 = "1">
                                <stop offset = "5%" stopColor = "#3e92d5" stopOpacity = {0.4}/>
                                <stop offset = "95%" stopColor = "#3e92d5" stopOpacity = {0}/>
                            </linearGradient>
                        </defs>
                        <XAxis height = {50} interval = {0} dataKey = "month" tick = {<CustomizedXAxisLabel/>}/>
                        <YAxis tick = {<CustomizedYAxisLabel/>}/>
                        <CartesianGrid strokeDasharray = "3 3"/>
                        <Tooltip content = {<CustomTooltip/>}/>
                        <Area type = "monotone" dataKey = "count" stroke = "#3e92d5" fillOpacity = {1} fill = "url(#colorCount)"/>
                    </AreaChart>
                </ResponsiveContainer>
            </Box>
        </VStack>
    )
}

export default AreaGraph;