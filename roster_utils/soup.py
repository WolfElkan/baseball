import urllib.request
from urllib.parse import urljoin
from bs4 import BeautifulSoup
from urllib.error import HTTPError

hdr = {'User-Agent': 'Mozilla/5.0'}

def get_raw(url, callback = lambda response: response.read()):
	try:
		request = urllib.request.Request(url=url, headers=hdr)
		response = urllib.request.urlopen(request)
		result = callback(response)
		response.close()
		return result
	except Exception as e:
		print('*', url)
		raise e

def get_soup(url):
	response = get_raw(url)
	soup = BeautifulSoup(response, 'html.parser')
	return soup

def get_redirect(url):
	callback = lambda response: response.geturl()
	return get_raw(url, callback)