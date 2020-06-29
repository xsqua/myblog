import Layout,{siteTitle} from '../components/layout'

import Head from 'next/head'
import utilStyles from '../styles/utils.module.css'

export	default function Home (){
	return (
		<Layout home>
				<Head>
						<title>{siteTitle}</title>
				</Head>
				<section className={utilStyles.headingMd}>
					<p>个人文档</p>
					<p>这是一个模拟站</p>
				</section>
		</Layout>
	)
}
