export const DUMMY_DATA = {
  'Today': {
    kpis: { leads: 12, qualified: 5, converted: 2, convRate: 16.6, quotes: 8, deals: 2, revenue: 15000 },
    prevKpis: { leads: 10, qualified: 4, converted: 1, convRate: 10.0, quotes: 5, deals: 1, revenue: 12000 },
    leadTrends: [{ name: '8 AM', leads: 2 }, { name: '12 PM', leads: 5 }, { name: '4 PM', leads: 3 }, { name: '8 PM', leads: 2 }],
    sources: [{ name: 'Google Ads', value: 6 }, { name: 'Website', value: 4 }, { name: 'Other', value: 2 }],
    revenueData: [{ name: 'Pvt Ltd', revenue: 8000 }, { name: 'Trademark', revenue: 3000 }, { name: 'GST', revenue: 4000 }]
  },
  '7 Days': {
    kpis: { leads: 145, qualified: 68, converted: 32, convRate: 22.0, quotes: 95, deals: 30, revenue: 450000 },
    prevKpis: { leads: 120, qualified: 50, converted: 20, convRate: 16.6, quotes: 70, deals: 18, revenue: 380000 },
    leadTrends: [{ name: 'Mon', leads: 15 }, { name: 'Tue', leads: 25 }, { name: 'Wed', leads: 20 }, { name: 'Thu', leads: 30 }, { name: 'Fri', leads: 35 }, { name: 'Sat', leads: 10 }, { name: 'Sun', leads: 10 }],
    sources: [{ name: 'Google Ads', value: 75 }, { name: 'Website', value: 50 }, { name: 'Other', value: 20 }],
    revenueData: [{ name: 'Pvt Ltd', revenue: 200000 }, { name: 'Trademark', revenue: 100000 }, { name: 'GST', revenue: 150000 }]
  },
  '30 Days': {
    kpis: { leads: 540, qualified: 280, converted: 125, convRate: 23.1, quotes: 410, deals: 110, revenue: 1850000 },
    prevKpis: { leads: 480, qualified: 210, converted: 95, convRate: 19.7, quotes: 320, deals: 85, revenue: 1500000 },
    leadTrends: [{ name: 'Week 1', leads: 120 }, { name: 'Week 2', leads: 150 }, { name: 'Week 3', leads: 140 }, { name: 'Week 4', leads: 130 }],
    sources: [{ name: 'Google Ads', value: 300 }, { name: 'Website', value: 180 }, { name: 'Other', value: 60 }],
    revenueData: [{ name: 'Pvt Ltd', revenue: 800000 }, { name: 'Trademark', revenue: 450000 }, { name: 'GST', revenue: 600000 }]
  }
};