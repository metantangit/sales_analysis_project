
const analysisData = {
  "updated_at": "2026-01-14 12:47:47",
  "period": "2025년 11월",
  "dates": [
    "10/26",
    "10/27",
    "10/28",
    "10/29",
    "10/30",
    "10/31",
    "11/01",
    "11/02",
    "11/03",
    "11/04",
    "11/05",
    "11/06",
    "11/07",
    "11/08",
    "11/09",
    "11/10",
    "11/11",
    "11/12",
    "11/13",
    "11/14",
    "11/15",
    "11/16",
    "11/17",
    "11/18",
    "11/19",
    "11/20",
    "11/21",
    "11/22",
    "11/23",
    "11/24"
  ],
  "actual_sales": [
    0,
    0,
    0,
    0,
    0,
    0,
    3451150,
    3584670,
    2328890,
    2521160,
    2336160,
    2667290,
    2656600,
    3507770,
    3947350,
    2423410,
    2384990,
    2318460,
    2395070,
    2550930,
    3709360,
    4209500,
    2447430,
    2469110,
    2367890,
    2273480,
    2273480,
    3578690,
    3578690,
    1836040
  ],
  "target_sales": [
    0,
    0,
    0,
    0,
    0,
    0,
    3500000,
    3700000,
    2400000,
    2200000,
    2200000,
    2200000,
    2300000,
    3500000,
    3700000,
    2400000,
    2200000,
    2200000,
    2200000,
    2300000,
    3500000,
    3700000,
    2400000,
    2200000,
    2200000,
    2200000,
    2300000,
    3500000,
    3700000,
    2400000
  ],
  "weekday_analysis": {
    "labels": [
      "월",
      "화",
      "수",
      "목",
      "금",
      "토",
      "일"
    ],
    "avg_sales": [
      1807154,
      1843815,
      1755627,
      1833960,
      1870252,
      3561742,
      3064042
    ],
    "counts": [
      5,
      4,
      4,
      4,
      4,
      4,
      5
    ]
  },
  "cost_analysis": {
    "food_cost": 2980090,
    "supplies_cost": 334560,
    "total_cost": 3314650,
    "estimated_monthly_cost": 22992919,
    "cost_ratio": 28,
    "delivery_fee": 6794305
  },
  "platforms": [
    {
      "name": "쿠팡잇츠",
      "sales": 38899057,
      "fee_rate": 9.8,
      "orders": 0,
      "fee": 3812107,
      "net_sales": 35086950,
      "fee_rate_display": "9.8%"
    },
    {
      "name": "배민원",
      "sales": 13166455,
      "fee_rate": 12.5,
      "orders": 0,
      "fee": 1645806,
      "net_sales": 11520649,
      "fee_rate_display": "12.5%"
    },
    {
      "name": "두잇",
      "sales": 11847650,
      "fee_rate": 9.8,
      "orders": 0,
      "fee": 1161069,
      "net_sales": 10686581,
      "fee_rate_display": "9.8%"
    },
    {
      "name": "배달의민족",
      "sales": 1169000,
      "fee_rate": 5.8,
      "orders": 0,
      "fee": 67802,
      "net_sales": 1101198,
      "fee_rate_display": "5.8%"
    },
    {
      "name": "요기요",
      "sales": 1396308,
      "fee_rate": 5.8,
      "orders": 0,
      "fee": 80985,
      "net_sales": 1315323,
      "fee_rate_display": "5.8%"
    },
    {
      "name": "땡겨요",
      "sales": 380229,
      "fee_rate": 5.0,
      "orders": 0,
      "fee": 19011,
      "net_sales": 361218,
      "fee_rate_display": "5.0%"
    },
    {
      "name": "기타",
      "sales": 150500,
      "fee_rate": 5.0,
      "orders": 0,
      "fee": 7525,
      "net_sales": 142975,
      "fee_rate_display": "5.0%"
    }
  ],
  "kpis": {
    "total_sales": 81855040,
    "total_target": 81200000,
    "achievement": 100.8,
    "avg_daily_sales": 2260585,
    "hall_sales": 15488600,
    "delivery_sales": 66628970,
    "hall_ratio": 18.9,
    "delivery_ratio": 81.4,
    "hall_orders": 1087,
    "delivery_orders": 4363,
    "hall_avg_price": 14248,
    "delivery_avg_price": 15271,
    "max_sales_date": "11/16",
    "max_sales_value": 4209500,
    "max_sales_day": "일",
    "min_sales_date": "11/24",
    "min_sales_value": 1836040,
    "min_sales_day": "월",
    "total_delivery_fee": 6794305,
    "estimated_labor_cost": 8835000
  },
  "warnings": [
    {
      "level": "danger",
      "title": "쿠팡잇츠 의존도 과다",
      "message": "배달 매출의 58.4%가 쿠팡잇츠 집중 → 플랫폼 리스크 높음"
    },
    {
      "level": "warning",
      "title": "배달 의존도 높음",
      "message": "배달 81.4% vs 홀 18.6% → 수수료 부담 큼"
    },
    {
      "level": "success",
      "title": "원가 관리 우수",
      "message": "원가율 약 28% → 목표 30% 이하 달성"
    }
  ],
  "recommendations": [
    {
      "priority": "high",
      "title": "배달 플랫폼 분산 필요",
      "description": "쿠팡잇츠 58% → 배민 비중을 30%까지 늘리기",
      "impact": "수수료 절감: 약 466,788원/월"
    },
    {
      "priority": "medium",
      "title": "홀 매출 증대 전략",
      "description": "홀 매출 비중을 25-30%까지 올리기",
      "impact": "수수료 없는 순수익 증가 + 단골 고객 확보"
    }
  ]
};

function showTab(index) {
    const tabs = document.querySelectorAll('.tab-btn');
    const contents = document.querySelectorAll('.tab-content');

    tabs.forEach((tab, i) => {
        if (i === index) {
            tab.classList.add('active');
            contents[i].classList.add('active');
        } else {
            tab.classList.remove('active');
            contents[i].classList.remove('active');
        }
    });
}

function formatCurrency(value) {
    return new Intl.NumberFormat('ko-KR').format(Math.round(value)) + '원';
}

function formatKorean(value) {
    const man = Math.floor(value / 10000);
    return man + '만원';
}

function renderKPIs() {
    const kpis = analysisData.kpis;
    const cards = [
        {
            label: '총 매출',
            value: formatCurrency(kpis.total_sales),
            change: `목표 대비 +${formatCurrency(kpis.total_sales - kpis.total_target)}`,
            changeClass: 'positive',
            cardClass: 'success'
        },
        {
            label: '목표 달성률',
            value: kpis.achievement.toFixed(1) + '%',
            change: '✅ 목표 달성!',
            changeClass: 'positive',
            cardClass: 'success'
        },
        {
            label: '일 평균 매출',
            value: formatKorean(kpis.avg_daily_sales),
            change: `최고: ${formatKorean(kpis.max_sales_value)} (${kpis.max_sales_date})`,
            changeClass: '',
            cardClass: ''
        },
        {
            label: '배달 비중',
            value: kpis.delivery_ratio.toFixed(1) + '%',
            change: `홀: ${kpis.hall_ratio.toFixed(1)}%`,
            changeClass: '',
            cardClass: 'warning'
        },
        {
            label: '배달 수수료',
            value: formatKorean(kpis.total_delivery_fee),
            change: `매출의 ${(kpis.total_delivery_fee / kpis.total_sales * 100).toFixed(1)}%`,
            changeClass: 'negative',
            cardClass: 'danger'
        },
        {
            label: '평균 객단가',
            value: formatCurrency(kpis.delivery_avg_price),
            change: `홀: ${formatCurrency(kpis.hall_avg_price)}`,
            changeClass: '',
            cardClass: ''
        }
    ];

    const container = document.getElementById('kpi-cards');
    container.innerHTML = cards.map(card => `
        <div class="kpi-card ${card.cardClass}">
            <div class="kpi-label">${card.label}</div>
            <div class="kpi-value">${card.value}</div>
            <div class="kpi-change ${card.changeClass}">${card.change}</div>
        </div>
    `).join('');
}

function renderDailyChart() {
    const trace1 = {
        x: analysisData.dates,
        y: analysisData.actual_sales,
        type: 'scatter',
        mode: 'lines+markers',
        name: '실제 매출',
        line: { color: '#6366f1', width: 3 },
        marker: { size: 6 },
        fill: 'tozeroy',
        fillcolor: 'rgba(99, 102, 241, 0.1)'
    };

    const trace2 = {
        x: analysisData.dates,
        y: analysisData.target_sales,
        type: 'scatter',
        mode: 'lines',
        name: '목표',
        line: { color: '#f59e0b', width: 2, dash: 'dash' }
    };

    const layout = {
        hovermode: 'x unified',
        showlegend: true,
        legend: { orientation: 'h', y: 1.1 },
        margin: { t: 20, b: 50, l: 70, r: 20 },
        plot_bgcolor: '#f8fafc',
        paper_bgcolor: 'white',
        xaxis: { gridcolor: '#e2e8f0' },
        yaxis: { gridcolor: '#e2e8f0', tickformat: ',d' }
    };

    Plotly.newPlot('daily-chart', [trace1, trace2], layout, { responsive: true });
}

function renderAlerts() {
    const container = document.getElementById('alerts');
    container.innerHTML = analysisData.warnings.map(w => `
        <div class="alert ${w.level}">
            <div class="alert-icon">${w.level === 'danger' ? '⚠️' : w.level === 'warning' ? '⚡' : '✅'}</div>
            <div class="alert-content">
                <div class="alert-title">${w.title}</div>
                <div class="alert-message">${w.message}</div>
            </div>
        </div>
    `).join('');
}

function renderProfitStructure() {
    const kpis = analysisData.kpis;
    const cost = analysisData.cost_analysis;
    const sales = kpis.total_sales;
    const totalCost = cost.estimated_monthly_cost;
    const deliveryFee = kpis.total_delivery_fee;
    const laborCost = kpis.estimated_labor_cost || 0;

    const data = [{
        type: 'waterfall',
        orientation: 'v',
        x: ['매출', '원가', '배달수수료', '인건비', '순이익'],
        y: [sales, -totalCost, -deliveryFee, -laborCost, 0],
        measure: ['relative', 'relative', 'relative', 'relative', 'total'],
        connector: { line: { color: '#cbd5e1' } },
        decreasing: { marker: { color: '#ef4444' } },
        increasing: { marker: { color: '#10b981' } },
        totals: { marker: { color: '#6366f1' } }
    }];

    const layout = {
        margin: { t: 20, b: 50, l: 80, r: 20 },
        plot_bgcolor: '#f8fafc',
        paper_bgcolor: 'white',
        yaxis: { tickformat: ',d' }
    };

    Plotly.newPlot('profit-structure', data, layout, { responsive: true });
}

function renderCostBreakdown() {
    const cost = analysisData.cost_analysis;

    const data = [{
        values: [cost.food_cost, cost.supplies_cost, cost.delivery_fee],
        labels: ['식자재', '소모품', '배달대행'],
        type: 'pie',
        hole: 0.4,
        marker: {
            colors: ['#6366f1', '#8b5cf6', '#ec4899']
        },
        textinfo: 'label+percent',
        textfont: { size: 14, color: 'white' }
    }];

    const layout = {
        margin: { t: 20, b: 20, l: 20, r: 20 },
        showlegend: false,
        paper_bgcolor: 'white'
    };

    Plotly.newPlot('cost-breakdown', data, layout, { responsive: true });
}

function renderDeliveryFeeChart() {
    const platforms = analysisData.platforms;

    const trace1 = {
        x: platforms.map(p => p.name),
        y: platforms.map(p => p.sales),
        name: '매출',
        type: 'bar',
        marker: { color: '#6366f1' }
    };

    const trace2 = {
        x: platforms.map(p => p.name),
        y: platforms.map(p => p.fee),
        name: '수수료',
        type: 'bar',
        marker: { color: '#ef4444' }
    };

    const layout = {
        barmode: 'group',
        margin: { t: 20, b: 80, l: 80, r: 20 },
        plot_bgcolor: '#f8fafc',
        paper_bgcolor: 'white',
        yaxis: { tickformat: ',d' },
        legend: { orientation: 'h', y: 1.1 }
    };

    Plotly.newPlot('delivery-fee-chart', [trace1, trace2], layout, { responsive: true });
}

function renderPlatformTable() {
    const platforms = analysisData.platforms;
    const totalSales = platforms.reduce((sum, p) => sum + p.sales, 0);

    const table = `
        <thead>
            <tr>
                <th>플랫폼</th>
                <th>매출</th>
                <th>수수료율</th>
                <th>수수료</th>
                <th>실수익</th>
                <th>점유율</th>
            </tr>
        </thead>
        <tbody>
            ${platforms.map(p => `
                <tr>
                    <td><span class="platform-name">${p.name}</span></td>
                    <td>${formatCurrency(p.sales)}</td>
                    <td><span class="platform-badge">${p.fee_rate_display}</span></td>
                    <td style="color: #ef4444;">${formatCurrency(p.fee)}</td>
                    <td style="color: #10b981; font-weight: 600;">${formatCurrency(p.net_sales)}</td>
                    <td>${(p.sales / totalSales * 100).toFixed(1)}%</td>
                </tr>
            `).join('')}
        </tbody>
    `;

    document.getElementById('platform-table').innerHTML = table;
}

function renderPlatformPie() {
    const platforms = analysisData.platforms;

    const data = [{
        values: platforms.map(p => p.sales),
        labels: platforms.map(p => p.name),
        type: 'pie',
        hole: 0.4,
        marker: {
            colors: ['#6366f1', '#8b5cf6', '#ec4899', '#f59e0b', '#10b981', '#06b6d4', '#64748b']
        }
    }];

    const layout = {
        margin: { t: 20, b: 20, l: 20, r: 20 },
        showlegend: true,
        legend: { orientation: 'v', x: 1.1 },
        paper_bgcolor: 'white'
    };

    Plotly.newPlot('platform-pie', data, layout, { responsive: true });
}

function renderPlatformProfit() {
    const platforms = analysisData.platforms;

    const data = [{
        x: platforms.map(p => p.net_sales),
        y: platforms.map(p => p.name),
        type: 'bar',
        orientation: 'h',
        marker: {
            color: platforms.map(p => p.net_sales),
            colorscale: [[0, '#ef4444'], [1, '#10b981']],
            showscale: false
        }
    }];

    const layout = {
        margin: { t: 20, b: 50, l: 100, r: 20 },
        plot_bgcolor: '#f8fafc',
        paper_bgcolor: 'white',
        xaxis: { tickformat: ',d' }
    };

    Plotly.newPlot('platform-profit', data, layout, { responsive: true });
}

function renderWeekdayChart() {
    const weekday = analysisData.weekday_analysis;

    const data = [{
        x: weekday.labels,
        y: weekday.avg_sales,
        type: 'bar',
        marker: {
            color: weekday.avg_sales,
            colorscale: [[0, '#6366f1'], [1, '#8b5cf6']],
            showscale: false
        }
    }];

    const layout = {
        margin: { t: 20, b: 50, l: 80, r: 20 },
        plot_bgcolor: '#f8fafc',
        paper_bgcolor: 'white',
        xaxis: { title: '요일' },
        yaxis: { tickformat: ',d' }
    };

    Plotly.newPlot('weekday-chart', data, layout, { responsive: true });
}

function renderChannelComparison() {
    const kpis = analysisData.kpis;

    const data = [{
        values: [kpis.hall_sales, kpis.delivery_sales],
        labels: ['홀 매출', '배달 매출'],
        type: 'pie',
        hole: 0.5,
        marker: {
            colors: ['#10b981', '#6366f1']
        },
        textinfo: 'label+percent',
        textfont: { size: 14 }
    }];

    const layout = {
        margin: { t: 20, b: 20, l: 20, r: 20 },
        annotations: [{
            text: formatKorean(kpis.hall_sales + kpis.delivery_sales),
            showarrow: false,
            font: { size: 18, weight: 700 }
        }],
        paper_bgcolor: 'white'
    };

    Plotly.newPlot('channel-comparison', data, layout, { responsive: true });
}

function renderAvgPriceChart() {
    const kpis = analysisData.kpis;

    const data = [{
        x: ['홀 객단가', '배달 객단가'],
        y: [kpis.hall_avg_price, kpis.delivery_avg_price],
        type: 'bar',
        marker: {
            color: ['#10b981', '#6366f1']
        },
        text: [formatCurrency(kpis.hall_avg_price), formatCurrency(kpis.delivery_avg_price)],
        textposition: 'outside'
    }];

    const layout = {
        margin: { t: 40, b: 50, l: 80, r: 20 },
        plot_bgcolor: '#f8fafc',
        paper_bgcolor: 'white',
        yaxis: { tickformat: ',d' }
    };

    Plotly.newPlot('avg-price-chart', data, layout, { responsive: true });
}

function renderRecommendations() {
    const container = document.getElementById('recommendations');
    container.innerHTML = analysisData.recommendations.map(r => `
        <div class="recommendation ${r.priority}">
            <div class="recommendation-header">
                <span class="recommendation-priority ${r.priority}">${r.priority === 'high' ? '긴급' : '권장'}</span>
                <span class="recommendation-title">${r.title}</span>
            </div>
            <div class="recommendation-desc">${r.description}</div>
            <div class="recommendation-impact">💡 예상 효과: ${r.impact}</div>
        </div>
    `).join('');
}

// 초기화
document.addEventListener('DOMContentLoaded', function() {
    renderKPIs();
    renderDailyChart();
    renderAlerts();
    renderProfitStructure();
    renderCostBreakdown();
    renderDeliveryFeeChart();
    renderPlatformTable();
    renderPlatformPie();
    renderPlatformProfit();
    renderWeekdayChart();
    renderChannelComparison();
    renderAvgPriceChart();
    renderRecommendations();
});
