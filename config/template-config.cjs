/* eslint-disable */
const TEMPLATE_CONFIG = [
  {
    id: '0001',
    title: '鱼师傅~ 早上好',
    desc: `
      **{{date.DATA}}**
      
      今天是距离上次北京见面的第{{love_day.DATA}}天~，希望今天的你也是愉快的，以及一定要记得好好吃饭哦~
      
      {{birthday_message.DATA}}
       
      城市：{{city.DATA}}  天气：{{weather.DATA}}  气温(最高/最低):{{max_temperature.DATA}} / {{min_temperature.DATA}}   
      
      风向: {{wind_direction.DATA}}   风级: {{wind_scale.DATA}}  空气质量指数: {{aqi.DATA}}
      
      {{ganmao.DATA}}
      
      {{notice.DATA}}

      距离下个休息日≡ω≡：{{holidaytts.DATA}}
      
      {{comprehensive_horoscope.DATA}}

      每日一句：
      
      {{note_en.DATA}}
      
      {{note_ch.DATA}}
    `
  },
  {
    id: '0002',
    title: '推送完成提醒',
    desc: `
      服务器信息：{{post_time_zone.DATA}} {{post_time.DATA}}
      
      ---
      
      共推送 {{need_post_num.DATA}} 人
      
      成功: {{success_post_num.DATA}} | 失败: {{fail_post_num.DATA}}
      
      成功用户: {{success_post_ids.DATA}}
      
      失败用户: {{fail_post_ids.DATA}}
    `
  },
]

module.exports = TEMPLATE_CONFIG
