/*
 * @Author: zhangyun
 * @Date: 2021-03-09 14:37:01
 * @LastEditors: zhangyun
 * @LastEditTime: 2021-03-09 16:10:29
 * @Desc: 
 */
import React from 'react'
import Item from '../../components/Item'

const literatureList = [
  {id: 'a',title: '人人都可以教张小龙做产品', content: '前几天微信十周年，微信之父张小龙进行了一番演讲，再一次向大家阐述了他非凡的产品观。然后昨天微信推出 8.0 版本，又引起了大家广泛的讨论。有太多人叹服龙哥的纯粹与超前，然而也有人大肆批判。'},
  {id: 'b',title: '需求管理规范', content: 'MOMO云敏捷项目管理，融合了敏捷、DevOps思想，打通了整个从需求、研发、测试、运维、运营的端到端敏捷。在实践中通过运维自动化，将Scrum敏捷团队开发的产品快速上线，并通过及时的运营，反馈给敏捷团队进行方向调整。', image: '12313'}
]
interface literatureContentProps {
  title: string,
  content: string,
  id: string,
  image?: string
}
function Literature () {
  return <div className="literature">
    {literatureList.map((item: literatureContentProps) => {
      return <Item title={item.title} content={item.content} image={item.image} id={item.id}/>
    })}
  </div>
}
export default Literature