# Node Res

> A facade over Node.js HTTP `res` object with no side-effects.

[![NPM Version][npm-image]][npm-url]
[![Build Status][travis-image]][travis-url]
[![Appveyor][appveyor-image]][appveyor-url]
[![Coveralls][coveralls-image]][coveralls-url]

<a href="http://res.cloudinary.com/adonisjs/image/upload/q_100/v1502279403/poppinss_z8uk2j.png">
<img src="http://res.cloudinary.com/adonisjs/image/upload/q_100/v1502279403/poppinss_z8uk2j.png" width="300px" align="right" vspace="20px" />
</a>

`node-res` is a simple module to make HTTP response in Node.js. It offers helpers to make it easier to set `headers`, define response statuses and properly parse response type to set appropriate headers.

For example:

```js
// content-type: plain/text
nodeRes.send(req, res, 'Hello world')

// content-type: application/json
nodeRes.send(req, res, { greeting: 'hello world' })
    
// content-type: text/html
nodeRes.send(req, res, '<h2> Hello world </h2>')
```

## See also

1. [node-req](https://npmjs.org/package/node-req)
2. [node-cookie](https://npmjs.org/package/node-cookie)

## Basic Example

```javascript
const http = require('http')
const nodeRes = require('node-res')

http.createServer(function (req, res) {
  
  // plain text
  nodeRes.send(req, res, "Hello world")

  // json
  nodeRes.json(req, res, {time:"now"})

  // jsonp
  nodeRes.jsonp(req, res, {time:"now"}, "callback")

}).listen(3000)

```

## API
<a name="module_Response"></a>

## Response
A simple IO module to make consistent HTTP response, without
worrying about underlying details.


* [Response](#module_Response)
    * [~getHeader(res, key)](#module_Response..getHeader) ⇒ <code>Array</code> \| <code>String</code>
    * [~header(res, key, value)](#module_Response..header) ⇒ <code>void</code>
    * [~append(res, key, value)](#module_Response..append) ⇒ <code>void</code>
    * [~status(res, code)](#module_Response..status) ⇒ <code>void</code>
    * [~safeHeader(res, key, value)](#module_Response..safeHeader) ⇒ <code>void</code>
    * [~removeHeader(res, key)](#module_Response..removeHeader) ⇒ <code>void</code>
    * [~write(res, body)](#module_Response..write) ⇒ <code>void</code>
    * [~end(res, [payload])](#module_Response..end) ⇒ <code>void</code>
    * [~send(req, res, body, [generateEtag])](#module_Response..send) ⇒ <code>void</code>
    * [~etag(res, body)](#module_Response..etag) ⇒ <code>void</code>
    * [~prepare(res, body)](#module_Response..prepare) ⇒ <code>String</code>
    * [~prepareJsonp(res, body, callbackFn)](#module_Response..prepareJsonp) ⇒ <code>String</code>
    * [~json(req, res, body, [generateEtag])](#module_Response..json) ⇒ <code>void</code>
    * [~jsonp(req, res, body, [callbackFn], [generateEtag])](#module_Response..jsonp) ⇒ <code>void</code>
    * [~location(res, url)](#module_Response..location) ⇒ <code>void</code>
    * [~redirect(req, res, url, [status])](#module_Response..redirect) ⇒ <code>void</code>
    * [~vary(res, field)](#module_Response..vary) ⇒ <code>void</code>
    * [~type(req, res, [charset])](#module_Response..type) ⇒ <code>void</code>
    * [~stream(res, body)](#module_Response..stream) ⇒ <code>Promise</code>

<a name="module_Response..getHeader"></a>

### Response~getHeader(res, key) ⇒ <code>Array</code> \| <code>String</code>
Returns the value of an existing header on
the response object

**Kind**: inner method of [<code>Response</code>](#module_Response)  
**Returns**: <code>Array</code> \| <code>String</code> - Return type depends upon the header existing value  

| Param | Type |
| --- | --- |
| res | <code>ServerResponse</code> | 
| key | <code>String</code> | 

**Example**  
```js
nodeRes.getHeader(res, 'Content-type')
```
<a name="module_Response..header"></a>

### Response~header(res, key, value) ⇒ <code>void</code>
Sets header on the response object. This method will wipe off
existing values. To append to existing values, use `append`.

**Kind**: inner method of [<code>Response</code>](#module_Response)  

| Param | Type |
| --- | --- |
| res | <code>http.ServerResponse</code> | 
| key | <code>String</code> | 
| value | <code>String</code> \| <code>Array</code> | 

**Example**  
```js
nodeRes.header(res, 'Content-type', 'application/json')

// or set an array of headers
nodeRes.header(res, 'Link', ['<http://localhost/>', '<http://localhost:3000/>'])
```
<a name="module_Response..append"></a>

### Response~append(res, key, value) ⇒ <code>void</code>
Appends value to the header existing values.

**Kind**: inner method of [<code>Response</code>](#module_Response)  

| Param | Type |
| --- | --- |
| res | <code>http.ServerResponse</code> | 
| key | <code>String</code> | 
| value | <code>String</code> \| <code>Array</code> | 

**Example**  
```js
nodeRes.append(res, 'Content-type', 'application/json')

// or append an array of headers
nodeRes.append(res, 'Link', ['<http://localhost/>', '<http://localhost:3000/>'])
```
<a name="module_Response..status"></a>

### Response~status(res, code) ⇒ <code>void</code>
Set status on the HTTP res object

**Kind**: inner method of [<code>Response</code>](#module_Response)  

| Param | Type |
| --- | --- |
| res | <code>http.ServerResponse</code> | 
| code | <code>Number</code> | 

**Example**  
```js
nodeRes.status(res, 200)
```
<a name="module_Response..safeHeader"></