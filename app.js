// ECharts CDN
const script = document.createElement("script");
script.src = "https://cdn.jsdelivr.net/npm/echarts/dist/echarts.min.js";
document.head.appendChild(script);

script.onload = function () {
    // Grafik 1: Bitcoin Fiyat Grafiği
    const btcChart = echarts.init(document.getElementById('btcChart'));
    btcChart.setOption({
        title: { text: 'Bitcoin Fiyat Grafiği' },
        xAxis: { data: ['Ocak', 'Şubat', 'Mart', 'Nisan', 'Mayıs'] },
        yAxis: {},
        series: [{
            type: 'line',
            data: [30000, 32000, 34000, 31000, 35000],
            color: '#FFCC00'
        }]
    });

    // Grafik 2: Ethereum Fiyat Grafiği
    const ethChart = echarts.init(document.getElementById('ethChart'));
    ethChart.setOption({
        title: { text: 'Ethereum Fiyat Grafiği' },
        xAxis: { data: ['Ocak', 'Şubat', 'Mart', 'Nisan', 'Mayıs'] },
        yAxis: {},
        series: [{
            type: 'line',
            data: [1800, 1900, 1850, 2000, 1950],
            color: '#3C84C4'
        }]
    });

    // Grafik 3: Hacim Dağılımı
    const volumeChart = echarts.init(document.getElementById('volumeChart'));
    volumeChart.setOption({
        title: { text: 'Kripto Para Hacim Dağılımı' },
        tooltip: { trigger: 'item' },
        series: [{
            type: 'pie',
            data: [
                { value: 50, name: 'Bitcoin' },
                { value: 30, name: 'Ethereum' },
                { value: 10, name: 'Ripple' },
                { value: 10, name: 'Diğer' }
            ],
            color: ['#FFCC00', '#3C84C4', '#FF6384', '#4BC0C0']
        }]
    });

    // Grafik 4: Risk Analizi Çizgi Grafiği
    const riskChart = echarts.init(document.getElementById('riskChart'));
    riskChart.setOption({
        title: { text: 'Risk Analizi' },
        xAxis: { data: ['Ocak', 'Şubat', 'Mart', 'Nisan', 'Mayıs'] },
        yAxis: {},
        series: [{
            type: 'line',
            data: [70, 50, 90, 40, 65],
            color: '#FF6384'
        }]
    });
};
