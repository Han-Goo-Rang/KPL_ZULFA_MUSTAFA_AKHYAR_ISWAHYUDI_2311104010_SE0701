class SayaTubeVideo {
  constructor(title) {
    if (typeof title !== "string" || title.length === 0 || title.length > 100) {
      throw new Error("Judul video wajib string biasa maksimal 100 huruf.");
    }
    this.id = Math.floor(10000 + Math.random() * 90000);
    this.title = title;
    this.playCount = 0;
  }

  IncreasePlayCount(count) {
    if (typeof count !== "number" || count <= 0) {
      throw new Error("Jumlah play harus bilangan positif.");
    }
    this.playCount += count;
  }

  PrintVideoDetails() {
    console.log(`ID Video: ${this.id}`);
    console.log(`Judul: ${this.title}`);
    console.log(`Jumlah Play: ${this.playCount}`);
    console.log("--------------------------------");
  }
}

class SayaTubeUser {
  constructor(username) {
    if (
      typeof username !== "string" ||
      username.length === 0 ||
      username.length > 100
    ) {
      throw new Error(
        "Username ga boleh kepanjangan. Gaboleh lebih dari 100 huruf."
      );
    }
    this.username = username;
    this.uploadedVideos = [];
  }

  AddVideo(video) {
    if (!(video instanceof SayaTubeVideo)) {
      throw new Error("Hanya bisa menambahkan tautan dari SayaTubeVideo.");
    }
    this.uploadedVideos.push(video);
  }

  GetTotalVideoPlayCount() {
    return this.uploadedVideos.reduce(
      (total, video) => total + video.playCount,
      0
    );
  }

  PrintAllVideoPlaycount() {
    console.log(`User: ${this.username}`);
    this.uploadedVideos.forEach((video, index) => {
      console.log(`Video ${index + 1} judul: ${video.title}`);
    });
    console.log("--------------------------------");
  }
}

function main() {
  const user = new SayaTubeUser("Bangjoule");

  const videoTitles = [
    "Review Film Castle oleh Bangjoule",
    "Review Film Light of Arad oleh Bangjoule",
    "Review Film The Enlightened oleh Bangjoule",
    "Review Film Amur oleh Bangjoule",
    "Review Film Pinacle oleh Bangjoule",
    "Review Film Forerunner Spirit oleh Bangjoule",
    "Review Film Han-il-sung Revenge oleh Bangjoule",
    "Review Film Manager Kim oleh Bangjoule",
    "Review Film Wall Street Journals oleh Bangjoule",
    "Review Film The Rapture oleh Bangjoule",
  ];

  videoTitles.forEach((title) => {
    let video = new SayaTubeVideo(title);
    video.IncreasePlayCount(Math.floor(Math.random() * 1000));
    user.AddVideo(video);
  });

  user.uploadedVideos.forEach((video) => video.PrintVideoDetails());

  user.PrintAllVideoPlaycount();

  console.log(`Total semua play count: ${user.GetTotalVideoPlayCount()}`);
}

main();
