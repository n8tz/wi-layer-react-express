/*
 * Copyright 2021 BRAUN Nathanael
 *
 * Use of this source code is governed by an MIT-style
 * license that can be found in the LICENSE file or at
 * https://opensource.org/licenses/MIT.
 */

import React from 'react';

export default class index extends React.Component {
	render() {
		const { helmet, content, css, state } = this.props,
		      htmlAttrs                                  = helmet && helmet.htmlAttributes.toComponent(),
		      bodyAttrs                                  = helmet && helmet.bodyAttributes.toComponent();
		return <React.Fragment>
			<html {...htmlAttrs}>
			<head>
				{helmet && helmet.title.toComponent()}
				{helmet && helmet.meta.toComponent()}
				{helmet && helmet.link.toComponent()}
				{helmet && helmet.script.toComponent()}
				{
					state &&
					<script dangerouslySetInnerHTML={{ __html: "window.__STATE__  = " + (JSON.stringify(state)) }}/>
				}
				{
					css && <style type="text/css" dangerouslySetInnerHTML={{ __html: css + '' }}/>
				}
			</head>
			<body {...bodyAttrs}>
			<div id="app" dangerouslySetInnerHTML={{ __html: content }}>
			</div>
			
			<script src="./App.js"></script>
			<script src="./App.vendors.js"></script>
			</body>
			</html>
		</React.Fragment>
	}
}
