import React from 'react'
import './Player.css'; 
import Player from "@madzadev/audio-player";
import "@madzadev/audio-player/dist/index.css";
import ImageGallery from "react-image-gallery";
import "react-image-gallery/styles/css/image-gallery.css";

const audios = [  
    {
        url: "/TEA/Audios TEA/Short audios/Corto 1.mp3",
        title: "Corto 1",
        tags: ["Cortos"],
      },    
      {
          url: "/TEA/Audios TEA/Short audios/Corto 2.mp3",
          title: "Corto 2",
          tags: ["Cortos"],
        },
        {
          url: "/TEA/Audios TEA/Short audios/Corto 3.mp3",
          title: "Corto 3",
          tags: ["Cortos"],
        },    
        {
            url: "/TEA/Audios TEA/Short audios/Corto 4.mp3",
            title: "Corto 4",
            tags: ["Cortos"],
          },
      {
        url: "/TEA/Audios TEA/Short audios/Corto 5.mp3",
        title: "Corto 5",
        tags: ["Cortos"],
      },    
      {
          url: "/TEA/Audios TEA/Short audios/Corto 6.mp3",
          title: "Corto 6",
          tags: ["Cortos"],
        },
        {
          url: "/TEA/Audios TEA/Short audios/Corto 7.mp3",
          title: "Corto 7",
          tags: ["Cortos"],
        },    
        {
            url: "/TEA/Audios TEA/Short audios/Corto 8.mp3",
            title: "Corto 8",
            tags: ["Cortos"],
          },
          {
          url: "/TEA/Audios TEA/Short audios/Corto 9.mp3",
          title: "Corto 9",
          tags: ["Cortos"],
        },    
        {
            url: "/TEA/Audios TEA/Short audios/Corto 10.mp3",
            title: "Corto 10",
            tags: ["Cortos"],
          },
      {
          url: "/TEA/Audios TEA/Short audios/Corto 11.mp3",
          title: "Corto 11",
          tags: ["Cortos"],
        },    
        {
            url: "/TEA/Audios TEA/Short audios/Corto 12.mp3",
            title: "Corto 12",
            tags: ["Cortos"],
          },
      {
        url: "/TEA/Audios TEA/Short audios/Corto 13.mp3",
        title: "Corto 13",
        tags: ["Cortos"],
      },    
      {
          url: "/TEA/Audios TEA/Short audios/Corto 14.mp3",
          title: "Corto 14",
          tags: ["Cortos"],
        },
        {
          url: "/TEA/Audios TEA/Short audios/Corto 15.mp3",
          title: "Corto 15",
          tags: ["Cortos"],
        },    
        {
            url: "/TEA/Audios TEA/Short audios/Corto 16.mp3",
            title: "Corto 16",
            tags: ["Cortos"],
          },
          {
        url: "/TEA/Audios TEA/Short audios/Corto 17.mp3",
        title: "Corto 17",
        tags: ["Cortos"],
      },    
      {
          url: "/TEA/Audios TEA/Short audios/Corto 18.mp3",
          title: "Corto 18",
          tags: ["Cortos"],
        },
        {
          url: "/TEA/Audios TEA/Short audios/Corto 19.mp3",
          title: "Corto 19",
          tags: ["Cortos"],
        },    
        {
            url: "/TEA/Audios TEA/Short audios/Corto 20.mp3",
            title: "Corto 20",
            tags: ["Cortos"],
          },
          {
        url: "/TEA/Audios TEA/Short audios/Corto 21.mp3",
        title: "Corto 21",
        tags: ["Cortos"],
      },    
      {
          url: "/TEA/Audios TEA/Short audios/Corto 22.mp3",
          title: "Corto 22",
          tags: ["Cortos"],
        },
        {
          url: "/TEA/Audios TEA/Short audios/Corto 23.mp3",
          title: "Corto 23",
          tags: ["Cortos"],
        },    
        {
            url: "/TEA/Audios TEA/Short audios/Corto 24.mp3",
            title: "Corto 24",
            tags: ["Cortos"],
          },
      {
        url: "/TEA/Audios TEA/Short audios/Corto 25.mp3",
        title: "Corto 25",
        tags: ["Cortos"],
      },    
      {
          url: "/TEA/Audios TEA/Short audios/Corto 26.mp3",
          title: "Corto 26",
          tags: ["Cortos"],
        },
        {
          url: "/TEA/Audios TEA/Short audios/Corto 27.mp3",
          title: "Corto 27",
          tags: ["Cortos"],
        },    
        {
            url: "/TEA/Audios TEA/Short audios/Corto 28.mp3",
            title: "Corto 28",
            tags: ["Cortos"],
          },
          {
          url: "/TEA/Audios TEA/Short audios/Corto 29.mp3",
          title: "Corto 29",
          tags: ["Cortos"],
        },    
        {
            url: "/TEA/Audios TEA/Short audios/Corto 30.mp3",
            title: "Corto 30",
            tags: ["Cortos"],
          },
      {
          url: "/TEA/Audios TEA/Short audios/Corto 31.mp3",
          title: "Corto 31",
          tags: ["Cortos"],
        },    
        {
            url: "/TEA/Audios TEA/Short audios/Corto 32.mp3",
            title: "Corto 32",
            tags: ["Cortos"],
          },
      {
        url: "/TEA/Audios TEA/Short audios/Corto 33.mp3",
        title: "Corto 33",
        tags: ["Cortos"],
      },    
      {
          url: "/TEA/Audios TEA/Short audios/Corto 34.mp3",
          title: "Corto 34",
          tags: ["Cortos"],
        },
        {
          url: "/TEA/Audios TEA/Short audios/Corto 35.mp3",
          title: "Corto 35",
          tags: ["Cortos"],
        },    
        {
            url: "/TEA/Audios TEA/Short audios/Corto 36.mp3",
            title: "Corto 36",
            tags: ["Cortos"],
          },
          {
        url: "/TEA/Audios TEA/Short audios/Corto 37.mp3",
        title: "Corto 37",
        tags: ["Cortos"],
      },    
      {
          url: "/TEA/Audios TEA/Short audios/Corto 38.mp3",
          title: "Corto 38",
          tags: ["Cortos"],
        },
        {
          url: "/TEA/Audios TEA/Short audios/Corto 39.mp3",
          title: "Corto 39",
          tags: ["Cortos"],
        },    
        {
            url: "/TEA/Audios TEA/Short audios/Corto 40.mp3",
            title: "Corto 40",
            tags: ["Cortos"],
          },  
          {
        url: "/TEA/Audios TEA/Short audios/Corto 41.mp3",
        title: "Corto 41",
        tags: ["Cortos"],
      },    
      {
          url: "/TEA/Audios TEA/Short audios/Corto 42.mp3",
          title: "Corto 42",
          tags: ["Cortos"],
        },
        {
          url: "/TEA/Audios TEA/Short audios/Corto 43.mp3",
          title: "Corto 43",
          tags: ["Cortos"],
        },    
        {
            url: "/TEA/Audios TEA/Short audios/Corto 44.mp3",
            title: "Corto 44",
            tags: ["Cortos"],
          },
      {
        url: "/TEA/Audios TEA/Short audios/Corto 45.mp3",
        title: "Corto 45",
        tags: ["Cortos"],
      },    
      {
          url: "/TEA/Audios TEA/Short audios/Corto 46.mp3",
          title: "Corto 46",
          tags: ["Cortos"],
        },
        {
          url: "/TEA/Audios TEA/Short audios/Corto 47.mp3",
          title: "Corto 47",
          tags: ["Cortos"],
        },    
        {
            url: "/TEA/Audios TEA/Short audios/Corto 48.mp3",
            title: "Corto 48",
            tags: ["Cortos"],
          },
          {
          url: "/TEA/Audios TEA/Short audios/Corto 49.mp3",
          title: "Corto 49",
          tags: ["Cortos"],
        },    
        {
            url: "/TEA/Audios TEA/Short audios/Corto 50.mp3",
            title: "Corto 50",
            tags: ["Cortos"],
          },
      {
          url: "/TEA/Audios TEA/Short audios/Corto 51.mp3",
          title: "Corto 51",
          tags: ["Cortos"],
        },    
        {
            url: "/TEA/Audios TEA/Short audios/Corto 52.mp3",
            title: "Corto 52",
            tags: ["Cortos"],
          },
      {
        url: "/TEA/Audios TEA/Short audios/Corto 53.mp3",
        title: "Corto 53",
        tags: ["Cortos"],
      },    
      {
          url: "/TEA/Audios TEA/Short audios/Corto 54.mp3",
          title: "Corto 54",
          tags: ["Cortos"],
        },
        {
          url: "/TEA/Audios TEA/Short audios/Corto 55.mp3",
          title: "Corto 55",
          tags: ["Cortos"],
        },    
        {
            url: "/TEA/Audios TEA/Short audios/Corto 56.mp3",
            title: "Corto 56",
            tags: ["Cortos"],
          },
          {
        url: "/TEA/Audios TEA/Short audios/Corto 57.mp3",
        title: "Corto 57",
        tags: ["Cortos"],
      },    
      {
          url: "/TEA/Audios TEA/Short audios/Corto 58.mp3",
          title: "Corto 58",
          tags: ["Cortos"],
        },
        {
          url: "/TEA/Audios TEA/Short audios/Corto 59.mp3",
          title: "Corto 59",
          tags: ["Cortos"],
        },    
        {
            url: "/TEA/Audios TEA/Short audios/Corto 60.mp3",
            title: "Corto 60",
            tags: ["Cortos"],
          },
          {
        url: "/TEA/Audios TEA/Short audios/Corto 61.mp3",
        title: "Corto 61",
        tags: ["Cortos"],
      },    
      {
          url: "/TEA/Audios TEA/Short audios/Corto 62.mp3",
          title: "Corto 62",
          tags: ["Cortos"],
        },
        {
          url: "/TEA/Audios TEA/Short audios/Corto 63.mp3",
          title: "Corto 63",
          tags: ["Cortos"],
        },    
        {
            url: "/TEA/Audios TEA/Short audios/Corto 64.mp3",
            title: "Corto 64",
            tags: ["Cortos"],
          },
      {
        url: "/TEA/Audios TEA/Short audios/Corto 65.mp3",
        title: "Corto 65",
        tags: ["Cortos"],
      },    
      {
          url: "/TEA/Audios TEA/Short audios/Corto 66.mp3",
          title: "Corto 66",
          tags: ["Cortos"],
        },
        {
          url: "/TEA/Audios TEA/Short audios/Corto 67.mp3",
          title: "Corto 67",
          tags: ["Cortos"],
        },    
        {
            url: "/TEA/Audios TEA/Short audios/Corto 68.mp3",
            title: "Corto 68",
            tags: ["Cortos"],
          },
          {
          url: "/TEA/Audios TEA/Short audios/Corto 69.mp3",
          title: "Corto 69",
          tags: ["Cortos"],
        },    
        {
            url: "/TEA/Audios TEA/Short audios/Corto 70.mp3",
            title: "Corto 70",
            tags: ["Cortos"],
          },
      {
          url: "/TEA/Audios TEA/Short audios/Corto 71.mp3",
          title: "Corto 71",
          tags: ["Cortos"],
        },    
        {
            url: "/TEA/Audios TEA/Short audios/Corto 72.mp3",
            title: "Corto 72",
            tags: ["Cortos"],
          },
      {
        url: "/TEA/Audios TEA/Short audios/Corto 73.mp3",
        title: "Corto 73",
        tags: ["Cortos"],
      },    
      {
          url: "/TEA/Audios TEA/Short audios/Corto 74.mp3",
          title: "Corto 74",
          tags: ["Cortos"],
        },
        {
          url: "/TEA/Audios TEA/Short audios/Corto 75.mp3",
          title: "Corto 75",
          tags: ["Cortos"],
        },    
        {
            url: "/TEA/Audios TEA/Short audios/Corto 76.mp3",
            title: "Corto 76",
            tags: ["Cortos"],
          },
          {
        url: "/TEA/Audios TEA/Short audios/Corto 77.mp3",
        title: "Corto 77",
        tags: ["Cortos"],
      },    
      {
          url: "/TEA/Audios TEA/Short audios/Corto 78.mp3",
          title: "Corto 78",
          tags: ["Cortos"],
        },
        {
          url: "/TEA/Audios TEA/Short audios/Corto 79.mp3",
          title: "Corto 79",
          tags: ["Cortos"],
        },    
        {
            url: "/TEA/Audios TEA/Short audios/Corto 80.mp3",
            title: "Corto 80",
            tags: ["Cortos"],
          },
    {
      url: "/TEA/Audios TEA/Short audios/Corto 81.mp3",
      title: "Corto 81",
      tags: ["Cortos"],
    },    
    {
        url: "/TEA/Audios TEA/Short audios/Corto 82.mp3",
        title: "Corto 82",
        tags: ["Cortos"],
      },
      {
        url: "/TEA/Audios TEA/Short audios/Corto 83.mp3",
        title: "Corto 83",
        tags: ["Cortos"],
      },    
      {
          url: "/TEA/Audios TEA/Short audios/Corto 84.mp3",
          title: "Corto 84",
          tags: ["Cortos"],
        },
    {
      url: "/TEA/Audios TEA/Short audios/Corto 85.mp3",
      title: "Corto 85",
      tags: ["Cortos"],
    },    
    {
        url: "/TEA/Audios TEA/Short audios/Corto 86.mp3",
        title: "Corto 86",
        tags: ["Cortos"],
      },
      {
        url: "/TEA/Audios TEA/Short audios/Corto 87.mp3",
        title: "Corto 87",
        tags: ["Cortos"],
      },    
      {
          url: "/TEA/Audios TEA/Short audios/Corto 88.mp3",
          title: "Corto 88",
          tags: ["Cortos"],
        },
        {
        url: "/TEA/Audios TEA/Short audios/Corto 89.mp3",
        title: "Corto 89",
        tags: ["Cortos"],
      },    
      {
          url: "/TEA/Audios TEA/Short audios/Corto 90.mp3",
          title: "Corto 90",
          tags: ["Cortos"],
        },
    {
        url: "/TEA/Audios TEA/Short audios/Corto 91.mp3",
        title: "Corto 91",
        tags: ["Cortos"],
      },    
      {
          url: "/TEA/Audios TEA/Short audios/Corto 92.mp3",
          title: "Corto 92",
          tags: ["Cortos"],
        },
    {
      url: "/TEA/Audios TEA/Short audios/Corto 93.mp3",
      title: "Corto 93",
      tags: ["Cortos"],
    },    
    {
        url: "/TEA/Audios TEA/Short audios/Corto 94.mp3",
        title: "Corto 94",
        tags: ["Cortos"],
      },
      {
        url: "/TEA/Audios TEA/Short audios/Corto 95.mp3",
        title: "Corto 95",
        tags: ["Cortos"],
      },    
      {
          url: "/TEA/Audios TEA/Short audios/Corto 96.mp3",
          title: "Corto 96",
          tags: ["Cortos"],
        },
        {
      url: "/TEA/Audios TEA/Short audios/Corto 97.mp3",
      title: "Corto 97",
      tags: ["Cortos"],
    },    
    {
        url: "/TEA/Audios TEA/Short audios/Corto 98.mp3",
        title: "Corto 98",
        tags: ["Cortos"],
      },
      {
        url: "/TEA/Audios TEA/Short audios/Corto 99.mp3",
        title: "Corto 99",
        tags: ["Cortos"],
      },    
      {
          url: "/TEA/Audios TEA/Short audios/Corto 100.mp3",
          title: "Corto 100",
          tags: ["Cortos"],
        },
        {
      url: "/TEA/Audios TEA/Short audios/Corto 101.mp3",
      title: "Corto 101",
      tags: ["Cortos"],
    },    
    {
        url: "/TEA/Audios TEA/Short audios/Corto 102.mp3",
        title: "Corto 102",
        tags: ["Cortos"],
      },
      {
        url: "/TEA/Audios TEA/Short audios/Corto 103.mp3",
        title: "Corto 103",
        tags: ["Cortos"],
      },    
      {
          url: "/TEA/Audios TEA/Short audios/Corto 104.mp3",
          title: "Corto 104",
          tags: ["Cortos"],
        },
    {
      url: "/TEA/Audios TEA/Short audios/Corto 105.mp3",
      title: "Corto 105",
      tags: ["Cortos"],
    },    
    {
        url: "/TEA/Audios TEA/Short audios/Corto 106.mp3",
        title: "Corto 106",
        tags: ["Cortos"],
      },
      {
        url: "/TEA/Audios TEA/Short audios/Corto 107.mp3",
        title: "Corto 107",
        tags: ["Cortos"],
      },    
      {
          url: "/TEA/Audios TEA/Short audios/Corto 108.mp3",
          title: "Corto 108",
          tags: ["Cortos"],
        },
        {
        url: "/TEA/Audios TEA/Short audios/Corto 109.mp3",
        title: "Corto 109",
        tags: ["Cortos"],
      },    
      {
          url: "/TEA/Audios TEA/Short audios/Corto 110.mp3",
          title: "Corto 110",
          tags: ["Cortos"],
        },
    {
        url: "/TEA/Audios TEA/Short audios/Corto 111.mp3",
        title: "Corto 111",
        tags: ["Cortos"],
      },    
      {
          url: "/TEA/Audios TEA/Short audios/Corto 112.mp3",
          title: "Corto 112",
          tags: ["Cortos"],
        },
    {
      url: "/TEA/Audios TEA/Short audios/Corto 113.mp3",
      title: "Corto 113",
      tags: ["Cortos"],
    },    
    {
        url: "/TEA/Audios TEA/Short audios/Corto 114.mp3",
        title: "Corto 114",
        tags: ["Cortos"],
      },
      {
        url: "/TEA/Audios TEA/Short audios/Corto 115.mp3",
        title: "Corto 115",
        tags: ["Cortos"],
      },    
      {
          url: "/TEA/Audios TEA/Short audios/Corto 116.mp3",
          title: "Corto 116",
          tags: ["Cortos"],
        },
        {
      url: "/TEA/Audios TEA/Short audios/Corto 117.mp3",
      title: "Corto 117",
      tags: ["Cortos"],
    },    
    {
        url: "/TEA/Audios TEA/Short audios/Corto 118.mp3",
        title: "Corto 118",
        tags: ["Cortos"],
      },
      {
        url: "/TEA/Audios TEA/Short audios/Corto 119.mp3",
        title: "Corto 119",
        tags: ["Cortos"],
      },    
      {
          url: "/TEA/Audios TEA/Short audios/Corto 120.mp3",
          title: "Corto 120",
          tags: ["Cortos"],
        },  
        {
      url: "/TEA/Audios TEA/Short audios/Corto 121.mp3",
      title: "Corto 121",
      tags: ["Cortos"],
    },    
    {
        url: "/TEA/Audios TEA/Short audios/Corto 122.mp3",
        title: "Corto 122",
        tags: ["Cortos"],
      },
      {
        url: "/TEA/Audios TEA/Short audios/Corto 123.mp3",
        title: "Corto 123",
        tags: ["Cortos"],
      },    
      {
          url: "/TEA/Audios TEA/Short audios/Corto 124.mp3",
          title: "Corto 124",
          tags: ["Cortos"],
        },
    {
      url: "/TEA/Audios TEA/Short audios/Corto 125.mp3",
      title: "Corto 125",
      tags: ["Cortos"],
    },    
    {
        url: "/TEA/Audios TEA/Short audios/Corto 126.mp3",
        title: "Corto 126",
        tags: ["Cortos"],
      },
      {
        url: "/TEA/Audios TEA/Short audios/Corto 127.mp3",
        title: "Corto 127",
        tags: ["Cortos"],
      },    
      {
          url: "/TEA/Audios TEA/Short audios/Corto 128.mp3",
          title: "Corto 128",
          tags: ["Cortos"],
        },
        {
        url: "/TEA/Audios TEA/Short audios/Corto 129.mp3",
        title: "Corto 129",
        tags: ["Cortos"],
      },    
      {
          url: "/TEA/Audios TEA/Short audios/Corto 130.mp3",
          title: "Corto 130",
          tags: ["Cortos"],
        },
    {
        url: "/TEA/Audios TEA/Short audios/Corto 131.mp3",
        title: "Corto 131",
        tags: ["Cortos"],
      },    
      {
          url: "/TEA/Audios TEA/Short audios/Corto 132.mp3",
          title: "Corto 132",
          tags: ["Cortos"],
        },
    {
      url: "/TEA/Audios TEA/Short audios/Corto 133.mp3",
      title: "Corto 133",
      tags: ["Cortos"],
    },    
    {
        url: "/TEA/Audios TEA/Short audios/Corto 134.mp3",
        title: "Corto 134",
        tags: ["Cortos"],
      },
      {
        url: "/TEA/Audios TEA/Short audios/Corto 135.mp3",
        title: "Corto 135",
        tags: ["Cortos"],
      },    
      {
          url: "/TEA/Audios TEA/Short audios/Corto 136.mp3",
          title: "Corto 136",
          tags: ["Cortos"],
        },
        {
      url: "/TEA/Audios TEA/Short audios/Corto 137.mp3",
      title: "Corto 137",
      tags: ["Cortos"],
    },    
    {
        url: "/TEA/Audios TEA/Short audios/Corto 138.mp3",
        title: "Corto 138",
        tags: ["Cortos"],
      },
      {
        url: "/TEA/Audios TEA/Short audios/Corto 139.mp3",
        title: "Corto 139",
        tags: ["Cortos"],
      },    
      {
          url: "/TEA/Audios TEA/Short audios/Corto 140.mp3",
          title: "Corto 140",
          tags: ["Cortos"],
        },
        {
      url: "/TEA/Audios TEA/Short audios/Corto 141.mp3",
      title: "Corto 141",
      tags: ["Cortos"],
    },    
    {
        url: "/TEA/Audios TEA/Short audios/Corto 142.mp3",
        title: "Corto 142",
        tags: ["Cortos"],
      },
      {
        url: "/TEA/Audios TEA/Short audios/Corto 143.mp3",
        title: "Corto 143",
        tags: ["Cortos"],
      },    
      {
          url: "/TEA/Audios TEA/Short audios/Corto 144.mp3",
          title: "Corto 144",
          tags: ["Cortos"],
        },
    {
      url: "/TEA/Audios TEA/Short audios/Corto 145.mp3",
      title: "Corto 145",
      tags: ["Cortos"],
    },    
    {
        url: "/TEA/Audios TEA/Short audios/Corto 146.mp3",
        title: "Corto 146",
        tags: ["Cortos"],
      },
      {
        url: "/TEA/Audios TEA/Short audios/Corto 147.mp3",
        title: "Corto 147",
        tags: ["Cortos"],
      },    
      {
          url: "/TEA/Audios TEA/Short audios/Corto 148.mp3",
          title: "Corto 148",
          tags: ["Cortos"],
        },
        {
        url: "/TEA/Audios TEA/Short audios/Corto 149.mp3",
        title: "Corto 149",
        tags: ["Cortos"],
      },    
      {
          url: "/TEA/Audios TEA/Short audios/Corto 140.mp3",
          title: "Corto 150",
          tags: ["Cortos"],
        },
    {
        url: "/TEA/Audios TEA/Short audios/Corto 151.mp3",
        title: "Corto 151",
        tags: ["Cortos"],
      },    
      {
          url: "/TEA/Audios TEA/Short audios/Corto 152.mp3",
          title: "Corto 152",
          tags: ["Cortos"],
        },
    {
      url: "/TEA/Audios TEA/Short audios/Corto 153.mp3",
      title: "Corto 153",
      tags: ["Cortos"],
    },    
    {
        url: "/TEA/Audios TEA/Short audios/Corto 154.mp3",
        title: "Corto 154",
        tags: ["Cortos"],
      },
      {
        url: "/TEA/Audios TEA/Short audios/Corto 155.mp3",
        title: "Corto 155",
        tags: ["Cortos"],
      },    
      {
          url: "/TEA/Audios TEA/Short audios/Corto 156.mp3",
          title: "Corto 156",
          tags: ["Cortos"],
        },
        {
      url: "/TEA/Audios TEA/Short audios/Corto 157.mp3",
      title: "Corto 157",
      tags: ["Cortos"],
    },    
    {
        url: "/TEA/Audios TEA/Short audios/Corto 158.mp3",
        title: "Corto 158",
        tags: ["Cortos"],
      },
      {
        url: "/TEA/Audios TEA/Short audios/Corto 159.mp3",
        title: "Corto 159",
        tags: ["Cortos"],
      },    
      {
          url: "/TEA/Audios TEA/Short audios/Corto 160.mp3",
          title: "Corto 160",
          tags: ["Cortos"],
        },
        {
        url: "/TEA/Audios TEA/Short audios/Corto 161.mp3",
        title: "Corto 161",
        tags: ["Cortos"],
      },
      {
        url: "/TEA/Audios TEA/Short audios/Corto 162.mp3",
        title: "Corto 162",
        tags: ["Cortos"],
      },    
      {
          url: "/TEA/Audios TEA/Short audios/Corto 163.mp3",
          title: "Corto 163",
          tags: ["Cortos"],
        },
    {
      url: "/TEA/Audios TEA/Long audios/Largo 1.mp3",
      title: "Largo 1",
      tags: ["Largos"],
    },
    {
        url: "/TEA/Audios TEA/Long audios/Largo 2.mp3",
        title: "Largo 2",
        tags: ["Largos"],
      },
      {
        url: "/TEA/Audios TEA/Long audios/Largo 3.mp3",
        title: "Largo 3",
        tags: ["Largos"],
      },
      {
        url: "/TEA/Audios TEA/Long audios/Largo 4.mp3",
        title: "Largo 4",
        tags: ["Largos"],
      },
      {
        url: "/TEA/Audios TEA/Long audios/Largo 5.mp3",
        title: "Largo 5",
        tags: ["Largos"],
      },
      {
        url: "/TEA/Audios TEA/Long audios/Largo 6.mp3",
        title: "Largo 6",
        tags: ["Largos"],
      },
      {
        url: "/TEA/Audios TEA/Long audios/Largo 7.mp3",
        title: "Largo 7",
        tags: ["Largos"],
      },
      {
        url: "/TEA/Audios TEA/Long audios/Largo 8.mp3",
        title: "Largo 8",
        tags: ["Largos"],
      },
      {
        url: "/TEA/Audios TEA/Long audios/Largo 9.mp3",
        title: "Largo 9",
        tags: ["Largos"],
      },
      {
        url: "/TEA/Audios TEA/Long audios/Largo 10.mp3",
        title: "Largo 10",
        tags: ["Largos"],
      },
      {
        url: "/TEA/Audios TEA/Long audios/Largo 11.mp3",
        title: "Largo 11",
        tags: ["Largos"],
      },
      {
          url: "/TEA/Audios TEA/Long audios/Largo 12.mp3",
          title: "Largo 12",
          tags: ["Largos"],
        },
        {
          url: "/TEA/Audios TEA/Long audios/Largo 13.mp3",
          title: "Largo 13",
          tags: ["Largos"],
        },
        {
          url: "/TEA/Audios TEA/Long audios/Largo 14.mp3",
          title: "Largo 14",
          tags: ["Largos"],
        },
        {
          url: "/TEA/Audios TEA/Long audios/Largo 15.mp3",
          title: "Largo 15",
          tags: ["Largos"],
        },
        {
          url: "/TEA/Audios TEA/Long audios/Largo 16.mp3",
          title: "Largo 16",
          tags: ["Largos"],
        },
        {
          url: "/TEA/Audios TEA/Long audios/Largo 17.mp3",
          title: "Largo 17",
          tags: ["Largos"],
        },
        {
          url: "/TEA/Audios TEA/Long audios/Largo 18.mp3",
          title: "Largo 18",
          tags: ["Largos"],
        },
        {
          url: "/TEA/Audios TEA/Long audios/Largo 19.mp3",
          title: "Largo 19",
          tags: ["Largos"],
        },
        {
          url: "/TEA/Audios TEA/Long audios/Largo 20.mp3",
          title: "Largo 20",
          tags: ["Largos"],
        },
        {
            url: "/TEA/Audios TEA/Long audios/Largo 21.mp3",
            title: "Largo 21",
            tags: ["Largos"],
          },
          {
              url: "/TEA/Audios TEA/Long audios/Largo 22.mp3",
              title: "Largo 22",
              tags: ["Largos"],
            },
            {
              url: "/TEA/Audios TEA/Long audios/Largo 23.mp3",
              title: "Largo 23",
              tags: ["Largos"],
            },
            {
              url: "/TEA/Audios TEA/Long audios/Largo 24.mp3",
              title: "Largo 24",
              tags: ["Largos"],
            },
            {
              url: "/TEA/Audios TEA/Long audios/Largo 25.mp3",
              title: "Largo 25",
              tags: ["Largos"],
            },
            {
              url: "/TEA/Audios TEA/Long audios/Largo 26.mp3",
              title: "Largo 26",
              tags: ["Largos"],
            },
            {
              url: "/TEA/Audios TEA/Long audios/Largo 27.mp3",
              title: "Largo 27",
              tags: ["Largos"],
            },
            {
              url: "/TEA/Audios TEA/Long audios/Largo 28.mp3",
              title: "Largo 28",
              tags: ["Largos"],
            },
            {
              url: "/TEA/Audios TEA/Long audios/Largo 29.mp3",
              title: "Largo 29",
              tags: ["Largos"],
            },
            {
              url: "/TEA/Audios TEA/Long audios/Largo 30.mp3",
              title: "Largo 30",
              tags: ["Largos"],
            },
            {
      url: "/TEA/Audios TEA/Long audios/Largo 31.mp3",
      title: "Largo 31",
      tags: ["Largos"],
    },
    {
        url: "/TEA/Audios TEA/Long audios/Largo 32.mp3",
        title: "Largo 32",
        tags: ["Largos"],
      },
      {
        url: "/TEA/Audios TEA/Long audios/Largo 33.mp3",
        title: "Largo 33",
        tags: ["Largos"],
      },
      {
        url: "/TEA/Audios TEA/Long audios/Largo 34.mp3",
        title: "Largo 34",
        tags: ["Largos"],
      },
      {
        url: "/TEA/Audios TEA/Long audios/Largo 35.mp3",
        title: "Largo 35",
        tags: ["Largos"],
      },
      {
        url: "/TEA/Audios TEA/Long audios/Largo 36.mp3",
        title: "Largo 36",
        tags: ["Largos"],
      },
      {
        url: "/TEA/Audios TEA/Long audios/Largo 37.mp3",
        title: "Largo 37",
        tags: ["Largos"],
      },
      {
        url: "/TEA/Audios TEA/Long audios/Largo 38.mp3",
        title: "Largo 38",
        tags: ["Largos"],
      },
      {
        url: "/TEA/Audios TEA/Long audios/Largo 39.mp3",
        title: "Largo 39",
        tags: ["Largos"],
      },
      {
        url: "/TEA/Audios TEA/Long audios/Largo 40.mp3",
        title: "Largo 40",
        tags: ["Largos"],
      },
      {
      url: "/TEA/Audios TEA/Long audios/Largo 41.mp3",
      title: "Largo 41",
      tags: ["Largos"],
    },
    {
        url: "/TEA/Audios TEA/Long audios/Largo 42.mp3",
        title: "Largo 42",
        tags: ["Largos"],
      },
      {
        url: "/TEA/Audios TEA/Long audios/Largo 43.mp3",
        title: "Largo 43",
        tags: ["Largos"],
      },
      {
        url: "/TEA/Audios TEA/Long audios/Largo 44.mp3",
        title: "Largo 44",
        tags: ["Largos"],
      },
      {
        url: "/TEA/Audios TEA/Long audios/Largo 45.mp3",
        title: "Largo 45",
        tags: ["Largos"],
      },
      {
        url: "/TEA/Audios TEA/Long audios/Largo 46.mp3",
        title: "Largo 46",
        tags: ["Largos"],
      },
      {
        url: "/TEA/Audios TEA/Long audios/Largo 47.mp3",
        title: "Largo 47",
        tags: ["Largos"],
      },
      {
        url: "/TEA/Audios TEA/Long audios/Largo 48.mp3",
        title: "Largo 48",
        tags: ["Largos"],
      },
      {
        url: "/TEA/Audios TEA/Long audios/Largo 49.mp3",
        title: "Largo 49",
        tags: ["Largos"],
      },
      {
        url: "/TEA/Audios TEA/Long audios/Largo 50.mp3",
        title: "Largo 50",
        tags: ["Largos"],
      },
      {
      url: "/TEA/Audios TEA/Long audios/Largo 51.mp3",
      title: "Largo 51",
      tags: ["Largos"],
    },
    {
        url: "/TEA/Audios TEA/Long audios/Largo 52.mp3",
        title: "Largo 52",
        tags: ["Largos"],
      },
      {
        url: "/TEA/Audios TEA/Long audios/Largo 53.mp3",
        title: "Largo 53",
        tags: ["Largos"],
      },
      {
        url: "/TEA/Audios TEA/Long audios/Largo 54.mp3",
        title: "Largo 54",
        tags: ["Largos"],
      },
      {
        url: "/TEA/Audios TEA/Long audios/Largo 55.mp3",
        title: "Largo 55",
        tags: ["Largos"],
      },
      {
        url: "/TEA/Audios TEA/Long audios/Largo 56.mp3",
        title: "Largo 56",
        tags: ["Largos"],
      },
      {
        url: "/TEA/Audios TEA/Long audios/Largo 57.mp3",
        title: "Largo 57",
        tags: ["Largos"],
      },
      {
        url: "/TEA/Audios TEA/Long audios/Largo 58.mp3",
        title: "Largo 58",
        tags: ["Largos"],
      },
      {
        url: "/TEA/Audios TEA/Long audios/Largo 59.mp3",
        title: "Largo 59",
        tags: ["Largos"],
      },
      
  ];

  const colors = {
    tagsBackground: "#3e32e4",
    tagsText: "#ffffff",
    tagsBackgroundHoverActive: "#6e2cf3",
    tagsTextHoverActive: "#ffffff",
    searchBackground: "#18191f",
    searchText: "#ffffff",
    searchPlaceHolder: "#575a77",
    playerBackground: "#18191f",
    titleColor: "#ffffff",
    timeColor: "#ffffff",
    progressSlider: "#3e32e4",
    progressUsed: "#ffffff",
    progressLeft: "#151616",
    bufferLoaded: "#1f212b",
    volumeSlider: "#3e32e4",
    volumeUsed: "#ffffff",
    volumeLeft: "#151616",
    playlistBackground: "#18191f",
    playlistText: "#575a77",
    playlistBackgroundHoverActive: "#18191f",
    playlistTextHoverActive: "#ffffff",
  };

  const images = [
    {
      original: "/TEA/Pictures/Picture 1.jpg",
      thumbnail: "/TEA/Pictures/Picture 1.jpg",
    },
    {
        original: "/TEA/Pictures/Picture 2.jpg",
        thumbnail: "/TEA/Pictures/Picture 2.jpg",
      },
      {
        original: "/TEA/Pictures/Picture 3.jpg",
        thumbnail: "/TEA/Pictures/Picture 3.jpg",
      },
      {
      original: "/TEA/Pictures/Picture 4.jpg",
      thumbnail: "/TEA/Pictures/Picture 4.jpg",
    },
    {
        original: "/TEA/Pictures/Picture 5.jpg",
        thumbnail: "/TEA/Pictures/Picture 5.jpg",
      },
      {
        original: "/TEA/Pictures/Picture 6.jpg",
        thumbnail: "/TEA/Pictures/Picture 6.jpg",
      },
      {
      original: "/TEA/Pictures/Picture 7.jpg",
      thumbnail: "/TEA/Pictures/Picture 7.jpg",
    },
    {
        original: "/TEA/Pictures/Picture 8.jpg",
        thumbnail: "/TEA/Pictures/Picture 8.jpg",
      },
      {
        original: "/TEA/Pictures/Picture 9.jpg",
        thumbnail: "/TEA/Pictures/Picture 9.jpg",
      },
    {
      original: "/TEA/Pictures/Picture 10.jpg",
      thumbnail: "/TEA/Pictures/Picture 10.jpg",
    },
    {
        original: "/TEA/Pictures/Picture 11.jpg",
        thumbnail: "/TEA/Pictures/Picture 11.jpg",
      },
      {
        original: "/TEA/Pictures/Picture 12.jpg",
        thumbnail: "/TEA/Pictures/Picture 12.jpg",
      },
      {
      original: "/TEA/Pictures/Picture 13.jpg",
      thumbnail: "/TEA/Pictures/Picture 13.jpg",
    },
    {
        original: "/TEA/Pictures/Picture 14.jpg",
        thumbnail: "/TEA/Pictures/Picture 14.jpg",
      },
      {
        original: "/TEA/Pictures/Picture 15.jpg",
        thumbnail: "/TEA/Pictures/Picture 15.jpg",
      },
      {
      original: "/TEA/Pictures/Picture 16.jpg",
      thumbnail: "/TEA/Pictures/Picture 16.jpg",
    },
    {
        original: "/TEA/Pictures/Picture 17.jpg",
        thumbnail: "/TEA/Pictures/Picture 17.jpg",
      },
      {
        original: "/TEA/Pictures/Picture 18.jpg",
        thumbnail: "/TEA/Pictures/Picture 18.jpg",
      },
      {
        original: "/TEA/Pictures/Picture 19.jpg",
        thumbnail: "/TEA/Pictures/Picture 19.jpg",
      },
    {
      original: "/TEA/Pictures/Picture 20.jpg",
      thumbnail: "/TEA/Pictures/Picture 20.jpg",
    },
    {
        original: "/TEA/Pictures/Picture 21.jpg",
        thumbnail: "/TEA/Pictures/Picture 21.jpg",
      },
      {
        original: "/TEA/Pictures/Picture 22.jpg",
        thumbnail: "/TEA/Pictures/Picture 22.jpg",
      },
      {
      original: "/TEA/Pictures/Picture 23.jpg",
      thumbnail: "/TEA/Pictures/Picture 23.jpg",
    },
    {
        original: "/TEA/Pictures/Picture 24.jpg",
        thumbnail: "/TEA/Pictures/Picture 24.jpg",
      },
      {
        original: "/TEA/Pictures/Picture 25.jpg",
        thumbnail: "/TEA/Pictures/Picture 25.jpg",
      },
      {
      original: "/TEA/Pictures/Picture 26.jpg",
      thumbnail: "/TEA/Pictures/Picture 26.jpg",
    },
          
  ];
 

const Tea = () => {
  return (
          
    <div>
        <div className='Espacio-titulo'>
        <a className='Titulo' href="/TEA/Guía.pdf" target="_blank" rel="noreferrer">Preparación para el TEA</a>
        </div>    
    
        <div className='contenedortea'>
            <div className='reproductor'>
                <Player                
                    trackList={audios}
                    includeTags={true}
                    includeSearch={true}
                    showPlaylist={true}
                    sortTracks={false}
                    autoPlayNextTrack={false}
                    customColorScheme={colors}
                    
                />
            </div>
          
            <div className='reproductor2'>
                <h1 className='pictures'>Pictures</h1>
                <div className='slide'>
                <ImageGallery items={images} 
                    showPlayButton={false}
                    showThumbnails={false}
                    showFullscreenButton={false}
                />;
                </div>
            </div>
            
        </div>
    </div>
    
  )
}

export default Tea;