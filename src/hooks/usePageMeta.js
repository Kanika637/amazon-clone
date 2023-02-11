import {useEffect} from 'react'

const usePageMeta = (title,description) => {
  const defaultTitle="Online Shopping Site in India - Amazon clone"
  const defaultDesc="Online Shopping site in India: Shop Online for Mobiles, Books, Watches, Shoes and More - Amazon-clone.in"

  useEffect(() => {
    document.title = title || defaultTitle;
    document.querySelector("meta[name='description']").setAttribute("content", description || defaultDesc);
}, [defaultTitle, title, defaultDesc, description]);
}

export default usePageMeta