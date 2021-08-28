import React from "react";
import {
  Chart,
  ChartTitle,
  ChartLegend,
  ChartSeries,
  ChartSeriesItem,
  ChartSeriesLabels,
} from "@progress/kendo-react-charts";
import { Box, useColorMode } from "@chakra-ui/react";

interface SkillsChartProps {}

const SkillsChart: React.FC<SkillsChartProps> = ({}) => {
  const data = [
    {
      name: "React",
      value: 100,
      color: "#3B7FFF",
    },
    {
      name: "TypeScript",
      value: 100,
      color: "#2419F7",
    },
    {
      name: "Vue",
      value: 95,
      color: "#3BFFA3",
    },
    {
      name: "HTML",
      value: 90,
      color: "#FF3D3D",
    },
    {
      name: "CSS",
      value: 80,
      color: "#19B5FC",
    },
  ];
  const labelContent = (e: any) => e.category;
  const { colorMode } = useColorMode();
  return (
      <Chart>
        <ChartTitle text="Skills" />
        <ChartLegend visible={true} />
        <ChartSeries>
          <ChartSeriesItem
            type="bar"
            data={data}
            categoryField="name"
            field="value"
          >
            <ChartSeriesLabels
              color={colorMode === "light" ? "#000" : "#FFF"}
              background="none"
              content={labelContent}
            />
          </ChartSeriesItem>
        </ChartSeries>
      </Chart>
  );
};

export default SkillsChart;
