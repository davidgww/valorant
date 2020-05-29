import axios from 'axios';
import { get, post } from './http'
// ---------首页 HOME ---------

// 首页请求最新动态
export const apiHomeRecentNews = (url,p) => get(url,p)
// 首页左边最热推荐
export const apiHomeHotNews = p => get('/web2_0/getNewsByTags/and?tags=6215&page=0&num=3',p)
