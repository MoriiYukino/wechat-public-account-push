/* eslint-disable */
const TEMPLATE_CONFIG = [
  {
    id: '0001',
    title: '鱼师傅~ 早上好呀!(ง •̀_•́)ง‼‼',
    desc: `
      **{{date.DATA}}**
      
      超长吟以永慕兮，声哀厉而弥长。
  
      今天是距离上次北京聚会的第{{love_day.DATA}}天 (๑¯ω¯๑)
      
      人是铁饭是钢，一定记得好好吃饭!保持愉快的心情~
      
      {{birthday_message.DATA}} ໒・ﻌ・७
       
      城市：{{city.DATA}}  天气：{{weather.DATA}}  气温:{{max_temperature.DATA}} / {{min_temperature.DATA}}   
      
      风向: {{wind_direction.DATA}}   风级: {{wind_scale.DATA}}  空气质量指数: {{aqi.DATA}}
      
      {{notice.DATA}}

      ( つ•̀ω•́)つ
      
      {{comprehensive_horoscope.DATA}}

      不管运势如何，我相信你一定没问题！

      每日N句૮ ・ﻌ・ა:
      
      {{note_en.DATA}}
      
      {{note_ch.DATA}}

      {{poetry_content.DATA}} 
      
      --{{poetry_author.DATA}}({{poetry_dynasty.DATA}}) <<{{poetry_title.DATA}}>> 
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
