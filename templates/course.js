export default {
  type: 'bubble',
  body: {
    type: 'box',
    layout: 'vertical',
    contents: [
      {
        type: 'image',
        url: 'https://scdn.line-apps.com/n/channel_devcenter/img/flexsnapshot/clip/clip1.jpg',
        size: 'full',
        aspectMode: 'cover',
        aspectRatio: '2:3',
        gravity: 'top'
      },
      {
        type: 'box',
        layout: 'vertical',
        contents: [
          {
            type: 'box',
            layout: 'vertical',
            contents: [
              {
                type: 'text',
                text: '名稱',
                size: 'xl',
                color: '#ffffff',
                weight: 'bold'
              }
            ]
          },
          {
            type: 'box',
            layout: 'baseline',
            contents: [
              {
                type: 'text',
                text: '日期',
                color: '#ebebeb',
                size: 'sm',
                flex: 0
              }
            ],
            spacing: 'lg'
          },
          {
            type: 'box',
            layout: 'vertical',
            contents: [
              {
                type: 'button',
                action: {
                  type: 'uri',
                  label: '介紹',
                  uri: 'http://linecorp.com/'
                },
                color: '#FFFFFF',
                offsetEnd: '0px',
                offsetBottom: '3px'
              }
            ],
            borderWidth: '1px',
            cornerRadius: '4px',
            spacing: 'sm',
            borderColor: '#ffffff',
            margin: 'xxl',
            height: '40px'
          }
        ],
        position: 'absolute',
        offsetBottom: '0px',
        offsetStart: '0px',
        offsetEnd: '0px',
        backgroundColor: '#6a5a5a',
        paddingAll: '20px',
        paddingTop: '18px'
      }
    ],
    paddingAll: '0px'
  }
}
