import axios from 'axios';
import { get, post } from './http'

// 需要特别处理请求
export const api = (url,p) => get(url,p)
// ---------首页 HOME ---------
// 首页左边最热推荐
export const apiHomeHotNews = p => get('/web2_0/getNewsByTags/and?tags=6215&page=0&num=3',p)

// 首页今日对阵
export const apiHomeTAgainst = p => get('/web2_0/getDoubleEliminationV1/428/elimination',p)
//  ---------枪械 GUN ---------
// 视频推荐

