import { fetchData } from './api';

describe('fetchData', () => {
  let path;
  let method;
  let data;

  beforeEach(() => {
    path = '/api/v1/projects';
    method = 'POST';
    data = {
      id: "3",
      type: "event",
      attributes: {
        name: "Flash Foxy Women's Climbing Festival",
        city: "Canon Springs",
        state: "CO",
        event_type: "climbing",
        price: 35,
        start_date: "10-19-2018",
        end_date: "10-21-2018",
        description:
          "This October 19-21, head on down to the best limestone sport cragging Colorado has to offer, and with the American Alpine Club and CAMP USA, and be treated to a weekend of climbing, community, clinics, contests, beer, slideshows, films, giveaways, stewardship and fun.",
        event_url: "https://americanalpineclub.org/shelf-road-cc",
        image_url:
          "https://static1.squarespace.com/static/55830fd9e4b0ec758c892f81/57bc7284f7e0abe0efbb523e/59417dc21b631bad37b19a74/1497464437416/_MG_1604.jpg",
        video_url: "https://www.youtube.com/embed/Cnjv_Brs2Bo"
      }
    };
  });

  it('should call fetch with the correct parameters', () => {
    const mockOptions = {
      method: 'POST',
      body: JSON.stringify(data),
      headers: {
        'Content-type': 'application/json'
      }
    }
    window.fetch = jest.fn();
    fetchData(path, method, data);
    expect(window.fetch).toHaveBeenCalledWith('undefined' + path, mockOptions);
  });

  it('should return a response object if everything is okay', async () => {
    method = 'GET';
    data = null;
    const mockEvents = {
      events: [
        {
          id: "1",
          type: "event",
          attributes: {
            name: "Shelf Road Craggin' Classic",
            city: "Canon Springs",
            state: "CO",
            event_type: "climbing",
            price: 35,
            start_date: "10-19-2018",
            end_date: "10-21-2018",
            description:
              "This October 19-21, head on down to the best limestone sport cragging Colorado has to offer, and with the American Alpine Club and CAMP USA, and be treated to a weekend of climbing, community, clinics, contests, beer, slideshows, films, giveaways, stewardship and fun.",
            event_url: "https://americanalpineclub.org/shelf-road-cc",
            image_url:
              "https://static1.squarespace.com/static/55830fd9e4b0ec758c892f81/57bc7284f7e0abe0efbb523e/59417dc21b631bad37b19a74/1497464437416/_MG_1604.jpg",
            video_url: "https://www.youtube.com/embed/Cnjv_Brs2Bo"
          }
        },
        {
          id: "2",
          type: "event",
          attributes: {
            name: "Hueco Rock Rodeo",
            city: "Canon Springs",
            state: "CO",
            event_type: "climbing",
            price: 35,
            start_date: "10-19-2018",
            end_date: "10-21-2018",
            description:
              "This October 19-21, head on down to the best limestone sport cragging Colorado has to offer, and with the American Alpine Club and CAMP USA, and be treated to a weekend of climbing, community, clinics, contests, beer, slideshows, films, giveaways, stewardship and fun.",
            event_url: "https://americanalpineclub.org/shelf-road-cc",
            image_url:
              "https://static1.squarespace.com/static/55830fd9e4b0ec758c892f81/57bc7284f7e0abe0efbb523e/59417dc21b631bad37b19a74/1497464437416/_MG_1604.jpg",
            video_url: "https://www.youtube.com/embed/Cnjv_Brs2Bo"
          }
        }
      ]
    };
    window.fetch = jest.fn().mockImplementation(() => Promise.resolve({
      json: () => Promise.resolve({
        ...mockEvents
      }),
      ok: true
    }));
    const result = await fetchData(path, method, data)
    expect(result).toEqual(mockEvents);
  });

  it('should return a message if everything is okay with a 204 status', async () => {
    data = null;
    method = 'DELETE';
    window.fetch = jest.fn().mockImplementation(() => Promise.resolve({
      status: 204,
      ok: true
    }));
    const result = await fetchData(path, method, data)
    expect(result).toEqual('success');
  });

  it('should throw an error if everything is not okay', async () => {
    const expected = Error('Error posting data');
    window.fetch = jest.fn().mockImplementation(() => Promise.resolve({
      ok: false,
      json: jest.fn().mockReturnValue('Error posting data')
    }));
    await expect(fetchData(path)).rejects.toEqual(expected);
  });
});