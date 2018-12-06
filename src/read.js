/**
 视音频复用器（muxer）
 复用器（Muxer）和分离器（Demuxer）

 IDR
 codec 解码器


 也被称为高级视频编码(Advanced Video Coding，简称 AVC







 function createPlayer(mediaDataSource, optionalConfig) {

    FlvPlayer
        export const defaultConfig = {


     FetchStreamLoader
        //请求flv文件
        open(dataSource, range) {
         //持续接受数据
        _pump(reader) {  // ReadableStreamReader

     transmuxing-controller
            _onInitChunkArrival(data, byteStart) {

    io-controller
        //收到数据处理
        _onLoaderChunkArrival(chunk, byteStart, receivedLength) {
        //发送数据块消息
        _dispatchChunks(chunks, byteStart) {

    flv-demuxer
        // 解析数据：function parseChunks(chunk: ArrayBuffer, byteStart: number): number;
        parseChunks(chunk, byteStart) {

        _parseVideoData(arrayBuffer, dataOffset, dataSize, tagTimestamp, tagPosition) {
        _parseAVCVideoData(arrayBuffer, dataOffset, dataSize, tagTimestamp, tagPosition, frameType, cts) {

     mp4-remuxer
        //转化格式
        remux(audioTrack, videoTrack) {
        _remuxVideo

     transmuxing-controller
        _onRemuxerMediaSegmentArrival

     transmuxer
         _onMediaSegment(type, mediaSegment) {


      flv-player
          this._transmuxer.on(TransmuxingEvents.MEDIA_SEGMENT, (type, ms) => {

       mse-controller
          appendMediaSegment(mediaSegment) {
          //真实输出到video标签
          _doAppendSegments() {
     transmuxing-worker
        //接收到媒体片段
        function onMediaSegment(type, mediaSegment) {




    io文件夹都是不同的loader（适应不同浏览器和方式）

 */
