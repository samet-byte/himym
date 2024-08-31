# import requests
# import json
# from tqdm import tqdm

# def download_episode(url, filename):
#     response = requests.get(url, stream=True)
#     total_size = int(response.headers.get('content-length', 0))
    
#     with open(filename, 'wb') as file, tqdm(
#         desc=filename,
#         total=total_size,
#         unit='iB',
#         unit_scale=True,
#         unit_divisor=1024,
#     ) as progress_bar:
#         for data in response.iter_content(chunk_size=1024):
#             size = file.write(data)
#             progress_bar.update(size)

# def main():
#     # Load JSON data
#     with open('/Users/sametbayat/himym/series/content.json', 'r') as f:
#         data = json.load(f)

#     base_url = "https://static.puzzle-movies.com/series/video/how-i-met-your-mother/s{}e{}/video_hd.mp4"

#     for season in data['content']:
#         season_number = season['season']
#         for episode in season['episodes']:
#             episode_number = episode['episode']
#             title = episode['title']
            
#             url = base_url.format(season_number, episode_number)
#             filename = f"S{season_number:02d}E{episode_number:02d} - {title}.mp4"
            
#             print(f"Downloading: {filename}")
#             download_episode(url, filename)

# if __name__ == "__main__":
#     main()

import json
import webbrowser
from tqdm import tqdm

# Example URL pattern
url_pattern= "https://static.puzzle-movies.com/series/video/how-i-met-your-mother/s{}e{}/video_hd.mp4"


# Function to open a link in the web browser
def open_link_in_browser(url):
    webbrowser.open(url)

# Function to process each episode
def process_episode(season, episode, title):
    link = url_pattern.format(season, episode)
    print(f"Opening: Season {season}, Episode {episode} - {title} -> {link}")
    open_link_in_browser(link)

# Function to process all episodes with progress tracking
def process_season_data(season_data):
    for season_info in tqdm(season_data['content'], desc="Processing Seasons"):
        season = season_info['season']
        episodes = season_info['episodes']
        for episode_info in tqdm(episodes, desc=f"Processing Season {season} Episodes", leave=False):
            episode = episode_info['episode']
            title = episode_info['title']
            process_episode(season, episode, title)

# Load season data from a JSON file
def load_season_data(file_path):
    with open(file_path, 'r') as file:
        return json.load(file)

# File path to your JSON data
json_file_path = '/Users/sametbayat/himym/series/content.json'

# Load and process the season data
season_data = load_season_data(json_file_path)
process_season_data(season_data)