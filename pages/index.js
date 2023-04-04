import * as React from "react";
import Head from "next/head";
import Public from "templates/public";
export default function Index() {
  return (
    <Public>
      <Head>
        <title>Suzuki Motorocycles Singapore</title>
      </Head>
      <iframe src="https://www.facebook.com/plugins/page.php?href=https%3A%2F%2Fwww.facebook.com%2FSuzukiSingapore%2F&tabs=timeline&width=340&height=331&small_header=false&adapt_container_width=true&hide_cover=false&show_facepile=true&appId=628176207284837" width="340" height="331"  frameborder="0" allowfullscreen="true" allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"></iframe>
    </Public>
  );
}
