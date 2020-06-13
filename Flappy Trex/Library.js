function spawnClouds() {
    //write code here to spawn the clouds
    if (frameCount % 110 === 0) {
      var cloud = createSprite(1500,120,80,20);
      cloud.addImage("sd",cloudImage);
      

      var r = Math.round(random(200,300));
      cloud.y = r;
        //cloud.addImage(cloudImage);
      cloud.setCollider("rectangle",0,0,260,100)
      cloud.scale = 0.7;
      cloud.velocityX = -(3+score/150)
      
       //assign lifetime to the variable
      cloud.lifetime = 500;
      
      //adjust the depth
      cloud.depth = trex.depth;
      trex.depth = trex.depth + 1;
      
      //add each cloud to the group
      cloudsGroup.add(cloud);
    }
}