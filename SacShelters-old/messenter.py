import requests
resp = requests.post('https://textbelt.com/text', {
  'phone': '9165492641',
  'message': 'U r gei',
  'key': 'textbelt',
})
print(resp.json())