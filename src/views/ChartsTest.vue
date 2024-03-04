<template>
    <v-chart class="chart" :option="option" />
</template>
  
<script>
import { use } from "echarts/core";
import { CanvasRenderer } from "echarts/renderers";
import { PieChart } from "echarts/charts";
import {
    TitleComponent,
    TooltipComponent,
    LegendComponent
} from "echarts/components";
import VChart, { THEME_KEY } from "vue-echarts";
import { ref, provide } from "vue";
use([
    CanvasRenderer,
    PieChart,
    TitleComponent,
    TooltipComponent,
    LegendComponent
]);
export default {
    components: {
        VChart
    },
    setup() {
        provide(THEME_KEY, "light");

        const option = ref({
            xAxis: {
    type: 'category',
    data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
  },
  yAxis: {
    type: 'value'
  },
  series: [
    {
      data: [150, 230, 224, 218, 135, 147, 260],
      type: 'line'
    }
  ]
        });
        return {
            option,
            provide
        }
    }
}

</script>
  
<style scoped lang="scss">
.chart {
    height: 400px;
}
</style>
  